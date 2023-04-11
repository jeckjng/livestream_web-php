CREATE TABLE `cmf_bank` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `bank_name` varchar(20) NOT NULL COMMENT '银行名称',
  `bank_code` varchar(11) NOT NULL COMMENT '银行标识码',
  PRIMARY KEY (`id`),
  KEY `bank_name` (`bank_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `cmf_bank` (`bank_name`, `bank_code`)
VALUES('招商银行','CMB'),
	('建设银行','CCB'),
	('交通银行','BOCOM'),
	('邮储银行','PSBC'),
	('工商银行','ICBC'),
	('农业银行','ABC'),
	('中国银行','BOC'),
	('中信银行','CITIC'),
	('光大银行','CEB'),
	('华夏银行',' HXB'),
	('民生银行','CMSB'),
	('广发银行','CGB'),
	('平安银行','SZD'),
	('星展银行','DBS'),
	('恒生银行','HSBC'),
	('渣打银行','SCBFF'),
	('汇丰银行','HSBC'),
	('东亚银行','HKBEA'),
	('花旗银行',''),
	('浙商银行','CZB'),
	('恒丰银行','HFB'),
	('浦东发展银行','SPDB'),
	('兴业银行','CIB'),
	('齐鲁银行','QLB'),
	('烟台银行','YTB'),
	('淮坊银行','WFB'),
	('渤海银行',''),
	('上海银行','BOS'),
	('厦门银行',''),
	('北京银行','BCCB'),
	('福建海峡银行',''),
	('吉林银行',''),
	('宁波银行','NBCB'),
	('焦作市商业银行',''),
	('温州银行',''),
	('广州银行',''),
	('汉口银行',''),
	('龙江银行',''),
	('盛京银行',''),
	('洛阳银行',''),
	('辽阳银行',''),
	('大连银行','BODL'),
	('苏州银行',''),
	('河北银行',''),
	('杭州银行','HCCB'),
	('南京银行',''),
	('东莞银行',''),
	('金华银行',''),
	('乌鲁木齐商业银行',''),
	('绍兴银行',''),
	('成都银行',''),
	('抚顺银行',''),
	('临商银行',''),
	('宜昌市商业银行',''),
	('葫芦岛银行',''),
	('郑州银行',''),
	('宁夏银行',''),
	('珠海华润银行',''),
	('齐商银行',''),
	('锦州银行',''),
	('徽商银行',''),
	('重庆银行',''),
	('哈尔滨银行',''),
	('贵阳银行',''),
	('西安银行',''),
	('无锡市商业银行',''),
	('丹东银行',''),
	('兰州银行',''),
	('南昌银行',''),
	('晋商银行',''),
	('青岛银行',''),
	('南通商业银行',''),
	('九江银行',''),
	('日照银行',''),
	('鞍山银行',''),
	('秦皇岛银行',''),
	('青海银行',''),
	('台州银行',''),
	('盐城银行',''),
	('长沙银行',''),
	('赣州银行',''),
	('泉州银行',''),
	('营口银行',''),
	('富滇银行',''),
	('阜新银行',''),
	('嘉兴银行',''),
	('廊坊银行',''),
	('泰隆商业银行',''),
	('内蒙古银行',''),
	('湖州银行',''),
	('沧州银行',''),
	('广西北部湾银行',''),
	('包商银行',''),
	('威海商业银行',''),
	('攀枝花市商业银行',''),
	('绵阳市商业银行',''),
	('泸州市商业银行',''),
	('三门峡银行',''),
	('邢台银行','XTB'),
	('商丘市商业银行',''),
	('安徽省农村信用社','AHNSYH'),
	('江西省农村信用社',''),
	('湖南农村信用社',''),
	('无锡农村商业银行','');

CREATE TABLE `cmf_bank_card` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL DEFAULT '1',
  `tenant_id` int(11) NOT NULL DEFAULT '1',
  `bank_id` int(11) NOT NULL,
  `bank_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '银行名称',
  `phone` varchar(11) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '手机号码',
  `real_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '真实姓名',
  `bank_number` varchar(30) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '银行卡号',
  `status` tinyint(4) NOT NULL,
  `addtime` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;