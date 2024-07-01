import socket

def getIp(host):
    try:
        ipAddress=socket.gethostbyname(host)
        return ipAddress
    except socket.gaierror:
        return "This website does not exist"

# print("Address is: ",getIp("www.chatgpt.com"))

import urllib.parse

def getUrlInfo(url):
    tpl=urllib.parse.urlparse(url)
    return tpl

print(getUrlInfo("https://durgesh-portfolio.github.io/durgesh-portfolio/"))