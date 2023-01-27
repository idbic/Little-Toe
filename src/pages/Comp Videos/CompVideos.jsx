import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";
import compVideos from '../../Json/compVideos.json'
import { Row, Col } from 'react-simple-flex-grid'
import './CompVideos.css'
import "react-simple-flex-grid/lib/main.css"; 

const array = [{name:'Daniel', video: 'X45VoRRiPkM', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fposts-cdn.kueez.net%2FOAyTRw3lzuXbeail%2Fimage-PsVOkM5mC70yIrht.jpg&f=1&nofb=1&ipt=9ae67193f9d533ef3ea1084524c5b5f91563ddae5ccb3ae4f15353c2bfbc576e&ipo=images'},
 {name:'Kambree', video: 'XlNDQU4UUyo', image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fposts-cdn.kueez.net%2FOAyTRw3lzuXbeail%2Fimage-s7UoyDLfaGbRDUlF.jpg&f=1&nofb=1&ipt=0d4cda2dca314436f9497a1d847e581c535de5968f8d2014e5aafc7eff7c026c&ipo=images'},
 {name:'Mom', video: 'uz0XSsU1kIY', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff0%2F0d%2Fae%2Ff00dae40fa38727e2ab1eaa4760f2e6c.jpg&f=1&nofb=1&ipt=f1d5cadb6fd32a6e12a150954137921da711f532fb6e8c201d7ae6aba94c5139&ipo=images'},
 {name:'Jeremy', video: 'cs-XpOutnKc', image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.dumpaday.com%2Fwp-content%2Fuploads%2F2014%2F02%2Frandom-pictures-132.jpg&f=1&nofb=1&ipt=0e338a4803e34544db69bb4fdec3e6c7c3d268395881f54a4a6f463e4d70d1a0&ipo=images'},
 {name:'Xander', video: 'cAjP1-bBTvc', image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.dumpaday.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fthe-random-pics-4.jpg&f=1&nofb=1&ipt=0fd5f4a547e8c5ca5b962bebe83155fb7f34b2b310a660db43e0500012b947d3&ipo=images'},{name:'Zailey'},{name:'Tiffany'},{name:'Dad'},{name:'Rose'},]
export default function CompVid() {


    return (

        <>
            {/* <YoutubeEmbed embedId="MLyy-ojHEm8"></YoutubeEmbed> */}

            <Row gutter={40}>
      {array.map(co => 
        <Col 
          xs={{ span: 6 }} sm={{ span: 4 }} md={{ span: 3 }}
          lg={{ span: 2 }} xl={{ span: 1 }}
        >{co.name}<YoutubeEmbed embedId={co.video}></YoutubeEmbed></Col>
      )}
    </Row>

            
        </>
    );
}