@echo off
echo ================================================
echo PUSHING YOUR FIXED CODE TO GITHUB
echo ================================================
echo.
echo Repository: https://github.com/taimoor-hassan01/TH_Portfolio.git
echo Branch: main
echo.
echo You will be asked for:
echo Username: taimoor-hassan01
echo Password: [Your GitHub Personal Access Token]
echo.
echo ================================================
echo.

git push -u origin main

echo.
echo ================================================
if %errorlevel% equ 0 (
    echo SUCCESS! Your code is now on GitHub!
    echo Vercel will automatically deploy it.
) else (
    echo FAILED! Try this command instead:
    echo git push -u origin main --force
)
echo ================================================
pause
