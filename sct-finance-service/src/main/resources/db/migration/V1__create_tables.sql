CREATE table cc_activity 
(
	id integer not null auto_increment primary key,
	description varchar(255) not null,
	action_type varchar(50) not null,
	card_user   varchar(50) not null,
	action_date datetime not null,
	amount      decimal(5,2) not null
);