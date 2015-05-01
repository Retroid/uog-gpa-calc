# UoG GPA Calculator
A bookmarklet for University of Guelph students to calculate their GPA (4.0 scale) on WebAdvisor.

## Usage
Copy and paste the following JavaScript into a new bookmark in your browser.
```
javascript:(function(){var js=document.createElement('script');js.setAttribute('src','https://retroid.github.io/uog-gpa-calc/bookmarklet.js');document.body.appendChild(js);}());
```
After you've added the bookmark, visit and login to WebAdvisor and then navigate to the Students Menu>Unofficial Transcript. Once you have selected a transcript type (and hit SUBMIT), and the page has fully loaded, you can use the bookmark you just created to see your GPA.
