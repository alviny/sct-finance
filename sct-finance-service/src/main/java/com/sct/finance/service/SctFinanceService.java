package com.sct.finance.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sct.finance.data.service.SctFinanceDataService;
import com.sct.finance.vo.CreditCardActivity;

@Service
public class SctFinanceService {
	@Autowired
	private SctFinanceDataService dataService;
	
	public List<CreditCardActivity> getActivities(){
		return dataService.getActivities();
	}
}
