(this.webpackJsonppraredn=this.webpackJsonppraredn||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"resource":"/cgi-bin/sysinfo.json","params":{"hosts":"?hosts=1","services":"&services=1","link_info":"link_info=1"}}')},37:function(e,t,n){e.exports=n(69)},42:function(e,t,n){},46:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),l=(n(42),n(10)),i=n.n(l),s=n(36),u=n(22),p=n(11),f=n(12),d=n(15),m=n(14),h=(n(44),n(45),n(46),n(78)),g=n(77),E=n(72),v=n(76),b=n(4),y=new b.Icon({iconUrl:"./purpleRadioCircle-icon.png",iconSize:[25,25]}),w=new b.Icon({iconUrl:"./goldRadioCircle-icon.png",iconSize:[25,25]}),C=new b.Icon({iconUrl:"./blueRadioCircle-icon.png",iconSize:[25,25]}),k=new b.Icon({iconUrl:"./magentaRadioCircle-icon.png",iconSize:[25,25]}),D=new b.Icon({iconUrl:"./grayRadioCircle-icon.png",iconSize:[25,25]});var O=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={zoom:9.5,mapCenter:{lat:18.2,lon:-66.3}},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){if(0===this.props.appConfig.length)return null;var e=[this.props.appConfig.mapSettings.mapCenter.lat,this.props.appConfig.mapSettings.mapCenter.lon];return r.a.createElement(h.a,{className:"Map",center:e,zoom:this.props.appConfig.mapSettings.zoom},r.a.createElement(g.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),this.props.nodesData.map((function(e){return r.a.createElement(E.a,{key:e.node,position:[e.lat,e.lon],icon:(t=e.meshrf.freq,null!==t&&"undefined"!==typeof t?t.includes("2.")?y:t.includes("5.")?w:t.includes("3.")?C:k:D)},r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement("h6",null,e.node),r.a.createElement("p",null,r.a.createElement("a",{href:"http://".concat(e.node),target:"_blank"},"View Node Console"),r.a.createElement("br",null),"Desc: ",e.node_details.description," ",r.a.createElement("br",null),"Position: (",e.lat,",",e.lon,")",r.a.createElement("br",null),"RF Status: ",e.meshrf.status,r.a.createElement("br",null),"SSID: ",e.meshrf.ssid," ",r.a.createElement("br",null),"RF Channel: ",e.meshrf.channel,r.a.createElement("br",null),"RF Freq: ",e.meshrf.freq,r.a.createElement("br",null),"MAC: ",e.interfaces[0].mac,r.a.createElement("br",null),"Model: ",e.node_details.model,r.a.createElement("br",null),"Firmware Ver: ",e.node_details.firmware_version," ",r.a.createElement("br",null)," "),"Neighbors:",r.a.createElement("br",null),r.a.createElement("ul",null," ",e.link_info.map((function(e){return r.a.createElement("li",{key:e.hostname}," ",e.hostname," (",e.linkType,") ")}))," ")," ")));var t})))}}]),n}(a.Component),j=n(16),S=n(23),R=n.n(S),N=n(24),x=n.n(N),_=(n(67),n(68),n(73)),M=n(74),z=n(75),F=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(f.a)(n,[{key:"countNodes",value:function(e,t){switch(t){case 900:return e.filter((function(e){return"on"===e.meshrf.status&&e.meshrf.freq.includes("900")})).length;case 24:return e.filter((function(e){return"on"===e.meshrf.status&&e.meshrf.freq.includes("2.")})).length;case 34:return e.filter((function(e){return"on"===e.meshrf.status&&e.meshrf.freq.includes("3.")})).length;case 58:return e.filter((function(e){return"on"===e.meshrf.status&&e.meshrf.freq.includes("5.")})).length;case 0:default:return e.filter((function(e){return"off"===e.meshrf.status})).length}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,null,r.a.createElement(M.a,{xs:!0,lg:"2"},r.a.createElement(z.a,{src:this.props.appConfig.logoPath,width:225,fluid:!0})),r.a.createElement(M.a,{xs:!0,lg:"8"}),r.a.createElement(M.a,null,r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Banda"),r.a.createElement("th",null,"Nodos")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(z.a,{src:"./purpleRadioCircle-icon.png",width:20})," 2.4 Ghz "),r.a.createElement("td",null," # ",this.countNodes(this.props.nodesData,24))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(z.a,{src:"./goldRadioCircle-icon.png",width:20})," 5Ghz "),r.a.createElement("td",null,"# ",this.countNodes(this.props.nodesData,58))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(z.a,{src:"./grayRadioCircle-icon.png",width:20})," Mesh RF Off "),r.a.createElement("td",null,"# ",this.countNodes(this.props.nodesData,0)))))),r.a.createElement("br",null))}}]),n}(a.Component),I=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={appConfig:[],nodesData:[]},e}return Object(f.a)(n,[{key:"retrieveNodeDetails",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("http://".concat(t.ip).concat(j.resource,"/?").concat(j.params.link_info));case 3:200===(n=e.sent).status&&""!==n.lat&&(a={node:n.data.node,lat:n.data.lat,lon:n.data.lon,meshrf:n.data.meshrf,node_details:n.data.node_details,interfaces:n.data.interfaces,link_info:Object.keys(n.data.link_info).map((function(e){return n.data.link_info[e]}))},this.setState({nodesData:[].concat(Object(s.a)(this.state.nodesData),[a])})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("There was an error getting ".concat(t.name," details"));case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getNodesData",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("http://localnode.local.mesh".concat(j.resource).concat(j.params.hosts));case 3:200!==(t=e.sent).status?x.a.alert("Unable to find your AREDN node, please verify if you are connected to the MESH."):(n=new RegExp(this.state.appConfig.nodesFilter),console.log(n,"REGEX"),a=t.data.hosts.filter((function(e){return e.name.toUpperCase().trim().match(n)})),console.log("Filtered Node List",a),Object.keys(a).forEach((function(e){r.retrieveNodeDetails(a[e])}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),x.a.alert("Unable to find your AREDN node, please verify if you are connected to the MESH.");case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("/appConfig.json");case 2:t=e.sent,this.setState({appConfig:t.data}),document.title="".concat(this.state.appConfig.contactInfo.callsign," - ").concat("MeshMap"," ").concat("1.0.1"," by ").concat("KP4MSR"),this.getNodesData();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(F,{nodesData:this.state.nodesData,appConfig:this.state.appConfig}),r.a.createElement(O,{nodesData:this.state.nodesData,appConfig:this.state.appConfig}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.67dd11f7.chunk.js.map