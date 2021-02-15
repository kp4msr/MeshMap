import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
class Header extends Component {
    state = {  }

    countNodes(nodesData, band) {
        switch(band) {
            case 900:
                //console.log("900", nodesList)
                //console.log(nodesList, "nodeslist")
                return nodesData.filter(n => n.meshrf.status === "on" && n.meshrf.freq.includes("900")).length
            case 24:
                //console.log("es 2.4")
                //console.log(nodesData.filter(n => n.meshrf.status == "on" && n.meshrf.freq.includes("2.")).length)
                return nodesData.filter(n => n.meshrf.status === "on" && n.meshrf.freq.includes("2.")).length

            case 34:
                //console.log("es 2.4")
                //console.log(nodesData.filter(n => n.meshrf.status == "on" && n.meshrf.freq.includes("2.")).length)
                return nodesData.filter(n => n.meshrf.status === "on" && n.meshrf.freq.includes("3.")).length

            case 58:
                //console.log("es 2.4")
                //console.log(nodesData.filter(n => n.meshrf.status == "on" && n.meshrf.freq.includes("2.")).length)
                return nodesData.filter(n => n.meshrf.status === "on" && n.meshrf.freq.includes("5.")).length
            
            case 0:
                return nodesData.filter(n => n.meshrf.status === "off").length

            default: 
                return nodesData.filter(n => n.meshrf.status === "off").length
        }
    }

    render() { 

            return ( <React.Fragment> 
            
            <Row>
                <Col xs lg="2"> 
                    <Image src="./prarednjpeg-logo1.jpg" width={225} fluid></Image> 
                </Col>                      
                <Col xs lg="8"></Col>             
                <Col >                             
                     <table>
                         <tr>
                             <th>Banda</th>
                             <th>Nodos</th>
                         </tr>
                         { /*
                         <tr>
                            <td>  <Image src="./magentaRadioCircle-icon.png" width={20}></Image> 900 Mhz </td>
                            <td># { this.countNodes(this.props.nodesData, 900)} </td>
                         </tr>
                         */  }
                         <tr>
                             <td> <Image src="./purpleRadioCircle-icon.png" width={20}></Image> 2.4 Ghz </td>
                             <td> # {this.countNodes(this.props.nodesData, 24)}</td>
                         </tr>
                         { /*
                         <tr>
                             <td> <Image src="./blueRadioCircle-icon.png" width={20}></Image> 3.4 Ghz </td>
                             <td> # {this.countNodes(this.props.nodesData, 34)}</td>
                         </tr>
                         */}
                         <tr>
                            <td><Image src="./goldRadioCircle-icon.png" width={20}></Image> 5Ghz </td>
                            <td># {this.countNodes(this.props.nodesData, 58)}</td>
                         </tr>
                         <tr>
                            <td><Image src="./grayRadioCircle-icon.png" width={20}></Image> Mesh RF Off </td>
                            <td># {this.countNodes(this.props.nodesData, 0)}</td>
                         </tr>
                         
                         
                     </table>
                    
                </Col>
               
            </Row>
            <br/>
            </React.Fragment> );
    }
}
 
export default Header;