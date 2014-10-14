What is IBAN ?
==============

[http://en.wikipedia.org/wiki/IBAN](http://en.wikipedia.org/wiki/IBAN)

Why this Project ?
------------------

There are many IBAN validation Libraries available on Internet. Out of all the, most reliable/official online check is available  here [http://www.tbg5-finance.org/?ibancheck.shtml](http://www.tbg5-finance.org/?ibancheck.shtml)  . The JS source code is available for download and can be embedded in any web page to validate IBAN check.  But the source code is written only to use it in  webpages  and not as a web service.

I created this HTTP web service by modifying the existing source code, instead of rewriting from scratch.     The Source code contains an HTTP Web Server which i wrote to  serve the HTTP web service. 

Please see the [documentation](https://github.com/sunilpottumuttu/Node.js-IBAN-Check-Service/blob/master/NodeJS%20IBAN%20Check.pdf) for more details.

How to use the web service ?
----------------------------

Example :-

http://localhost:8888/?iban=AL47212110090000000235698741

Wanted to Host in IIS ?
-----------------------

Please see the documentation for more details. Which is available for download for this project.

Requirements:
-------------

Node.js available here [http://nodejs.org/](http://nodejs.org/)

Disclaimer:
-----------

If some body is having objection on the material used in this site. Please let me know. Based on the feedback I will remove the content .