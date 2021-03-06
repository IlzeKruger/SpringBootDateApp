package com.ilzekruger.spring.essentials.datevalidation.web.application;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DateValidatorController {

	// inject via application.properties
	@Value("${error.message:test}")
	private String message = "Hello World";

	@RequestMapping("/")
	public String validateDate(Map<String, Object> model) {
		model.put("message", this.message);
		return "DateValidator";
	}
}
