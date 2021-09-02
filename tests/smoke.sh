#!/usr/bin/sh

# Get homepage status code 
statuscode=$(curl -s -o /dev/null -w "%{http_code}" https://rustyabbott.com)

if [ $statuscode -eq 200 ]; then 
    echo "Home page is up!"
else
    echo "Problem with the home page!"
fi