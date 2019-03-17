package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Sendsms 
{
	public WebDriver driver;
	
	@FindBy(xpath="(//a[@href='send-sms'])[1]")
	public WebElement sendsms;
	
	@FindBy(className="fa icon-menu-bar")
	public WebElement menu;
	
	@FindBy(xpath="//span[contains(text(),'Logout')]")
	public WebElement logout;
	
	public Sendsms(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
		
	}
	public void clickmenu()
	{
		menu.click();
	}
	public void clicklogout()
	{
		logout.click();
	}

}
