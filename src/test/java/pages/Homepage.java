package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Homepage 
{
public WebDriver driver;

@FindBy(name="mobileNo")
public WebElement mbno;

@FindBy(name="password")
public WebElement pwd;

@FindBy(xpath="(//button[contains(text(),'Login')])[1]")
public WebElement login;

@FindBy(xpath="//*[text()='Enter your mobile number']")
public WebElement mbno_blank_err;

@FindBy(xpath="(//b[text()='Enter password'])[1]")
public WebElement pwd_blank_err;

@FindBy(xpath="(//*[contains(text(),' not register with us.')])[1]")
public WebElement mbno_invalid_err;

@FindBy(xpath="(//*[contains(text(),'Try Again')])[1]")
public WebElement pwd_invalid_err;

public Homepage(WebDriver driver)
{
	this.driver=driver;
	PageFactory.initElements(driver, this);
	
}
public void fillmbno(String x)
{
	mbno.sendKeys(x);
}
public void fillpwd(String x)
{
	pwd.sendKeys(x);
}
public void clicklogin() 
{
	login.click();
}

}
