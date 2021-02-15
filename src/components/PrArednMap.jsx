// @flow

import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const PurpleIcon = new Icon({
  iconUrl: "./purpleRadioCircle-icon.png",
  iconSize: [25, 25],
})

const OrangeIcon = new Icon({
  iconUrl: "./goldRadioCircle-icon.png",
  iconSize: [25, 25],
})

const BlueIcon = new Icon({
  iconUrl: "./blueRadioCircle-icon.png",
  iconSize: [25, 25],
})

const MagentaIcon = new Icon({
  iconUrl: "./magentaRadioCircle-icon.png",
  iconSize: [25, 25],
})

const GrayIcon = new Icon({
  iconUrl: "./grayRadioCircle-icon.png",
  iconSize: [25, 25],
})

function getIcon(freq){
  if(freq !== null && typeof freq !== 'undefined' ) 
  {
    if(freq.includes("2.")) {
      return PurpleIcon
    }
    else if(freq.includes("5.")){
      return OrangeIcon 
    }
    else if(freq.includes("3.")){
      return BlueIcon
    }
    else { return MagentaIcon }
  }
  else return GrayIcon
  
}

class PrArednMap extends Component {

state = {
      zoom: 9.5,
      mapCenter: {
        lat: 18.2,
        lng: -66.3,
      },
  }

  componentDidMount() {
    //console.log(this.props,"props del MAPA")
  }

  render() {
    //const position  = [this.state.lat, this.state.lng];
    const mapCenter = [this.state.mapCenter.lat, this.state.mapCenter.lng];
    //const mapCenter = [this.state.appConfig.app.mapSettings.mapCenter.lat, this.state.appConfig.app.mapSettings.mapCenter.lng];



    return (
      <Map className="Map" center={mapCenter} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          { this.props.nodesData.map(n => <Marker key={n.node} position={[n.lat,n.lon]} icon={ getIcon(n.meshrf.freq) }>
            <Popup>  
              {<div><h6>{n.node}</h6>
              <p><a href={`http://${n.node}`} target="_blank">View Node Console</a><br/>
                 Desc: {n.node_details.description} <br/>
                 Position: ({n.lat},{n.lon})<br/>
                 RF Status: {n.meshrf.status}<br/>
                 SSID: {n.meshrf.ssid} <br/>
                 RF Channel: {n.meshrf.channel}<br/>
                 RF Freq: {n.meshrf.freq}<br/>
                 MAC: {n.interfaces[0].mac}<br/>
                 Model: {n.node_details.model}<br/>
                 Firmware Ver: {n.node_details.firmware_version} <br/> </p>            
                 Neighbors:<br/><ul> { n.link_info.map(m => <li> {m.hostname} ({m.linkType}) </li>)} </ul> </div>
                }      
            </Popup>
          </Marker>)}
          
      </Map>
    );
  }
}

export default PrArednMap;
