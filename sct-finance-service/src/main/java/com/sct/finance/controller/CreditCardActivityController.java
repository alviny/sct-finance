package com.sct.finance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sct.finance.service.SctFinanceService;
import com.sct.finance.vo.CreditCardActivity;

@RestController
@RequestMapping(value="/api")
@CrossOrigin()
public class CreditCardActivityController {

	@Autowired
	private SctFinanceService service;
	@GetMapping("/cc-activity")
	public List<CreditCardActivity> list(){
		return service.getActivities();
	}
}
