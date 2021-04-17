package com.sct.finance.data.service;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.sct.finance.vo.CreditCardActivity;

@Service
public class SctFinanceDataService {
	@Autowired
	private DataSource dataSource;
	
	public List<CreditCardActivity> getActivities(){
		JdbcTemplate template = new JdbcTemplate(dataSource);
		RowMapper<CreditCardActivity> mapper = new BeanPropertyRowMapper<CreditCardActivity>(CreditCardActivity.class);
		List<CreditCardActivity> activities = template.query("SELECT * FROM cc_activity WHERE category='Utilities'",mapper);
		return activities;
	}
	
}
