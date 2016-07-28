#Registration exercise

cd into directory and start up server
```
 php -S localhost:8000
```
then navigate to ```http://localhost:8000/```

I considered php redirection to a new page but instead chose to prevent the default behavior of the HTML form and rely on ajax to post data to the php script and render a 'thank you for registering' message underneath the form with the user email being provided by the ajax data 
