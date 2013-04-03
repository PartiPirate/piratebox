#!/usr/bin/python

# PyShoutOut by Joey C. (http://www.joeyjwc.x3fusion.com)
# Writes the recieved information to the data file.


import cgi, datetime, os, re
datafile = open("messages.json", 'r+')
values = cgi.FieldStorage()
if values.has_key("pseudo"):
  name = values["pseudo"].value
else:
  name = "Anonyme"
if values.has_key("message"):
  rawdata = values["message"].value
else:
  exit('Un message est obligatoire !');
datapass = re.sub("<", "&lt;", rawdata)
data = re.sub("\"", "&quot;", datapass)
curdate = datetime.datetime.now()
old = datafile.read()
old = re.sub("]$", "", old)
datafile.truncate(0)
datafile.close()
datafile = open("messages.json", 'r+')
datafile.write(old + ", {\"date\": \"" + curdate.strftime("%Y-%m-%dT%H:%M:%SZ") + "\", \"pseudo\": \"" + name + "\", \"message\": \"" + data + "\"}\n]")
datafile.close()
print "Success"
