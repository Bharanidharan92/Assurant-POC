ggfor /f "tokens=2-8 delims=.:/ " %%a in ("%date% %time%") do set DateNtime=%%c-%%a-%%b_%%d-%%e-%%f.%%g

XCOPY /E /Q /I /H C:\AutomationWDIO\Assurant Demo\allure-report C:\AutomationWDIO\Assurant Demo\Reports\%DateNtime%\allure-report
XCOPY /E /Q /I /H C:\AutomationWDIO\Assurant Demo\allure-results C:\AutomationWDIO\Assurant Demo\Reports\%DateNtime%\allure-results

rem start C:\AutomationWDIO\Assurant Demo\allure-report\index.html

start "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --allow-file-access-from-files --new-window C:\AutomationWDIO\Assurant Demo\allure-report\index.html

exit