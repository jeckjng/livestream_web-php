<?php
/**
 * Created by PhpStorm.
 * User: Siam
 * Date: 2020/4/17
 * Time: 16:43
 */

namespace EasySwoole\ORM\Tests;


use EasySwoole\ORM\AbstractModel;
use EasySwoole\ORM\Collection\Collection;
use EasySwoole\ORM\Db\Config;
use EasySwoole\ORM\Db\Connection;
use EasySwoole\ORM\DbManager;
use EasySwoole\ORM\Tests\models\TestUserListModel;
use PHPUnit\Framework\TestCase;

class CollectionTest extends TestCase
{
    /**
     * @var $connection Connection
     */
    protected $connection;
    protected $tableName = 'user_test_list';
    protected function setUp()
    {
        parent::setUp(); // TODO: Change the autogenerated stub
        $config = new Config(MYSQL_CONFIG);
        $config->setReturnCollection(true);

        $this->connection = new Connection($config);
        DbManager::getInstance()->addConnection($this->connection);
        $connection = DbManager::getInstance()->getConnection();
        $this->assertTrue($connection === $this->connection);
    }

    /**
     * @throws \EasySwoole\ORM\Exception\Exception
     * @throws \Throwable
     */
    public function testAdd()
    {

        $testUserModel = new TestUserListModel();
        $testUserModel->state = 1;
        $testUserModel->name = '仙士可';
        $testUserModel->age = 100;
        $testUserModel->addTime = date('Y-m-d H:i:s');
        $data = $testUserModel->save();
        $this->assertIsInt($data);

        $testUserModel = new TestUserListModel();
        $testUserModel->state = 2;
        $testUserModel->name = 'Siam';
        $testUserModel->age = 18;
        $testUserModel->addTime = date('Y-m-d H:i:s');
        $data = $testUserModel->save();
        $this->assertIsInt($data);
    }

    public function testAllReturn()
    {
        $all = TestUserListModel::create()->all();
        $this->assertInstanceOf(Collection::class, $all);
        return $all;
    }

    /**
     * @depends testAllReturn
     * @param $all
     */
    public function testToArray(Collection $all)
    {
        $array = $all->toArray();
        $this->assertIsArray($array);
        $this->assertEquals(2, count($array));
    }

    /**
     * @depends testAllReturn
     * @param $all
     * @return Collection
     */
    public function testVisibleToArray(Collection $all)
    {
        $return = clone $all;

        $all->visible(['name']);
        $array = $all->toArray();
        $this->assertIsArray($array);
        $this->assertEquals(2, count($array));
        $this->assertEquals(1, count($array[0]));
        return $return;
    }

    public function testHiddenToArray()
    {
        $all = TestUserListModel::create()->all();

        $all->hidden(['name']);
        $array = $all->toArray();
        $this->assertIsArray($array);
        $this->assertEquals(2, count($array));
        $this->assertEquals(4, count($array[0]));
        $this->assertArrayNotHasKey('name', $array[0]);
    }

    public function testAppendToArray()
    {
        $all = TestUserListModel::create()->all();
        $all->hidden(['name']);
        $all->append(['append_one']);

        $array = $all->toArray(false, false);
        $this->assertIsArray($array);
        $this->assertEquals(2, count($array));
        $this->assertEquals(5, count($array[0]));
        $this->assertArrayNotHasKey('name', $array[0]);
    }

    public function testReverse()
    {
        $all = TestUserListModel::create()->all();
        foreach ($all as $model) {
            $this->assertInstanceOf(AbstractModel::class, $model);
        }
        $this->assertEquals("仙士可",$all[0]['name']);
        $all = $all->reverse();// 倒置
        $this->assertEquals("Siam",$all[0]['name']);
    }


    public function testDestory(){
        $res = TestUserListModel::create()->destroy(null, true);
        $this->assertIsInt($res);
    }

}