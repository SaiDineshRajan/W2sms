package tests;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"E:\\batch239\\ws2ms\\src\\test\\resources\\mypack\\feature1.feature","E:\\batch239\\ws2ms\\src\\test\\resources\\mypack\\feature2.feature"},plugin= {"pretty","html:runner"},monochrome=true)
public class Runner {

}

