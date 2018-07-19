package skeleton;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Stepdefs {
	WebDriver driver;


@Given("^The Url of git hub$")
public void the_Url_of_git_haub() throws Throwable {
	System.setProperty("webdriver.chrome.driver","C:\\Program Files\\chromedriver.exe");
	driver= new ChromeDriver();
	driver.get("https://github.com/login");
	driver.manage().window().maximize();
}

@When("^user enters the (.*) as user name$")
public void user_enters_Rashsrikath_as_user_name(String Username) throws Throwable {
	driver.findElement(By.xpath("//*[@id='login_field']")).sendKeys(Username);
}

@When("^user enters the (.*) as password$")
public void user_enters_Rash_as_password(String Password) throws Throwable {
	driver.findElement(By.xpath("//*[@id='password']")).sendKeys(Password);
}

@Given("^User Click on the SignIn$")
public void user_Click_on_the_SignIn() throws Throwable {
	driver.findElement(By.xpath("//*[@value='Sign in']")).click();
}
    
@Then("^User navigates to (.*)$")
public void user_navigates_to_result(String result) throws Throwable {
	System.out.println(result);
    if (result.startsWith("Sign")) {
		
    	Assert.assertTrue(driver.getTitle().startsWith("Sign"));
	} 
    else {
    	
    	Assert.assertTrue(driver.getTitle().startsWith("Git"));

	}
}
@Then("^Close the Browser$")
public void close_the_Browser() throws Throwable {
    driver.quit();
}


}


