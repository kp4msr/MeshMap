# Mesh Map 
Mesh Map is a web based application useful to view who are connected to the mesh and what is his node position in map,
it also shows additional information of each node and there are a lot of upcoming features to this app.

# Requirements
The application requires at least a simple web server capable of host HTML doxcuments. 

Example of WebServers:
  - IIS (Windows) 
  - Apache (Linux & Windows)
  - Apache Tomcat

# How to install 
You can host this application on your prefered Web Server and expose it as a service with all Mesh Users.

Please follow this general steps to install:
1. Clone the repository and copy the files from "build" directory to your Web App root folder and thats it! (We are asuming you have the web server installed and configured)
2. Then list the service on your node in order to be available to all mesh users.

# Configuration
There are some important configuration you need on a config file in order to customize the app for your needs. 

1. Open appConfig.json
2. Edit the App General settings as for example the zoom, your personalized logo and the map center to show your location/country.
   
    "name" : "MESHMAP",
    "logoPath":"./prarednjpeg-logo1.jpg",
    "mapSettings": {
        "zoom": "9.5",
        "mapCenter": { 
            "lat": "18.2",
            "lon": "-66.3"
        }
    }


    3. Edit your contact information on the json file.

    "contactInfo": {
        "callsign" : "KP4MSR",
        "name": "Manuel Santamaria",
        "email": "kp4msr@winlink.org"
    }
    
    4. Modify the "NODESFILTER" regex in the json file to query only the nodes and avoid tries to get details of a device in the network. 
       This filter where depend on the naming convention selected for the nodes in your network. 

          "nodesFilter" : "[a-zA-z]+[0-9][a-zA-Z]+[-][a-zA-Z]+[-][a-zA-Z]+[-][a-zA-Z]*[1-9]+"

       This regex Matches the following values:

       - KP4MSR-CAYEY-PR-N1
       - KP4MSR-CAYEY-PR-N20
       - KP4MSR-CAYEY-PR-S2

    For for more information about regex 

# About Developer 
Mesh Map were developed by KP4MSR but anyone is welcome to submit a Pull Request, Open Defects or submit recomendations. 
Contact Email: kp4msr@winlink.org
