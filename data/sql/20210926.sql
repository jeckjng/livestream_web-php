ALTER TABLE cmf_users_cashrecord  ADD   coin_number  decimal(12,4) NOT NULL DEFAULT '0.0000' COMMENT '提现币种数量';