# MagicMirror Socket Server - demo

A basic API and socket server for a MagicMirror demo receiving data from particle webhook.

## Installation

In your terminal, go to wherever you want:
````
cd ~/Projects
````

Clone this repository:
````
git clone https://github.com/rcauquil/MMS-server.git
````

Go into the repository:
````
cd MMS-server
````

Install the dependencies
````
npm install
````

Run it
````
npm start
````

## Makefile example
```makefile
vimg=<version>
nimg=<img-name>
server=<user>@<server>
pimg=<path>

start:
	npm start

build:
	docker build --no-cache -t $(nimg):$(vimg) .

save:
	docker save $(nimg):$(vimg) > $(nimg).$(vimg).tar

rsync:
	rsync -e ssh -avzP ./$(nimg).$(vimg).tar $(server):$(pimg)

ngrok:
	ngrok http -region eu -subdomain mms 3000
```
