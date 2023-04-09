import { Typography, Col, Row, Avatar } from 'antd'
const { Text, Title } = Typography;
import './About.css'

const About = ({sectionsAreActive}) => {
    const imageSize = () => {
        return sectionsAreActive ? 150 : 256
    }

    return (
        <div className='about-section'>
            <Row align="middle" justify="center">
                <Col sm={{ span: 14, order: 1 }} xs={{ span: 24, order: 2 }} className='about-text'>
                    <Title level={1} style={{ marginTop: 0, marginBottom: 0 }}>Adan Fregoso</Title>
                    <Title level={2} style={{ marginTop: 0, marginBottom: 0 }}>Software Developer</Title>
                    <Text>
                        Next to graduate Computer Engineering student with experience as a Software Developer
                        for Full Stack & Back-end Micro-services Development, located in Guadalajara, México 🇲🇽
                    </Text>
                </Col>
                <Col sm={{ span: 6, order: 2 }} xs={{ span: 24, order: 1 }}>
                        <Avatar 
                            src="https://ichirodev-portfolio.web.app/static/media/pic.42c47e4ba51ff5dc6956.jpg" 
                            className="image"
                            size={imageSize()}
                            style={{marginLeft: "10px", marginRight: "10px"}}
                        />
                </Col>
            </Row>
        </div>
    )
}

export default About