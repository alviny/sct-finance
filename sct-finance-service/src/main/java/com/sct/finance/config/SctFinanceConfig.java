package com.sct.finance.config;

import java.util.Properties;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

@Configuration
public class SctFinanceConfig {

	@Bean
	public DataSource mainDB() {
		HikariConfig config = new HikariConfig();
		config.setJdbcUrl("jdbc:mysql://localhost:3306/sct");
		config.setUsername("sct-web-usr");
		config.setPassword("sct-web-usr");
		config.setMaximumPoolSize(5);
//		Properties dbProp = new Properties();
//		dbProp.setProperty("url", "jdbc:mysql://localhost:3306/sct_finance");
//		dbProp.setProperty("user","finance_app_user");
//		dbProp.setProperty("password", "finance_app_user");
//		config.setDataSourceProperties(dbProp);
		HikariDataSource ds = new HikariDataSource(config);
		return ds;
	}
}
