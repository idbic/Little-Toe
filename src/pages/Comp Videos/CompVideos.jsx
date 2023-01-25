import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";
import compVideos from '../../Json/compVideos.json'
import {Row, Col} from 'react-simple-flex-grid'


export default function CompVid() {
    
    
    return (
      
        <>
        <YoutubeEmbed embedId="MLyy-ojHEm8"></YoutubeEmbed>

        <Row gutter={40}>
  {compVideos.map(co => 
    <Col 
      xs={{ span: 6 }} sm={{ span: 4 }} md={{ span: 3 }}
      lg={{ span: 2 }} xl={{ span: 1 }}
    >{co.name}<img src={`${co.image}.jpg`} width="100%"/></Col>
  )}
</Row>
        </>
    );
  }