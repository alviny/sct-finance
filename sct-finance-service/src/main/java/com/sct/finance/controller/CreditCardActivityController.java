package com.sct.finance.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sct.finance.service.SctFinanceService;
import com.sct.finance.vo.CreditCardActivity;

@RestController
public class CreditCardActivityController {

	@Autowired
	private SctFinanceService service;
	@GetMapping("/list")
	public List<CreditCardActivity> list(){
		return service.getActivities();
	}
}
