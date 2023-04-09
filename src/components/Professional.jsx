import { Row, Col, Timeline, Button, Divider, Card, Typography, Avatar, List } from 'antd'
import { FilePdfOutlined } from '@ant-design/icons'
import Job from './micro/Job';
import './Professional.css'
const { Title, Paragraph } = Typography
const data = [
    {
        title: 'Email: adanfluq@gmail.com',
        url: 'mailto:adanfluq@gmail.com',
    },
    {
        title: 'LinkedIn',
        url: 'https://mx.linkedin.com/in/adan-fregoso-6207a3235',
    },
];
const Professional = () => {
    const resume = "https://drive.google.com/file/d/14WwscwEcNC91mzaMwFk2LSRZEVxv7EPB/view"
    return (
        <div className="professional-container">
            <Row justify="center">
                <Col xs={{ span: 24 }} sm={{ span: 8 }}>
                    <Timeline
                        items={[
                            {
                                color: '#F57842',
                                children: <Job position={"Software Engineer Intern"}
                                    company={"Infobip"}
                                    dates={"Jun 2022 - Dec 2022"}
                                    description={"Full Stack Development (Strong Back-end) & Testing"} />,
                            },
                            {
                                color: '#F57842',
                                children: <Job position={"Junior Software Engineer"}
                                    company={"Infobip"}
                                    dates={"Jan 2023 - Mar 2023"}
                                    description={"Back-end Development"} />,
                            },
                            {
                                color: '#919191',
                                children: <Job position={"Looking for new opportunities"}
                                    company={"Software Development Positions"}
                                    dates={"Active search"}
                                    description={"For more information about my skills and experience, check my resume"} />,
                            }
                        ]}
                    />
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 8 }}>
                    <div className="professional-description">
                        <Card style={{ width: "100%", height: "fit-content" }}>
                            <Title level={3} style={{ margin: 0, marginBottom: "1vh" }}>Resume</Title>
                            <FilePdfOutlined style={{ fontSize: '64px', margin: '1vh 0' }} />
                            <Divider style={{ marginTop: '1vh', marginBottom: '1vh' }} />
                            <Button style={{ marginLeft: '2%', marginRight: '2%', marginTop: '1vh' }}
                                href={resume}
                                target='_blank'>
                                View online
                            </Button>
                        </Card>
                        <Paragraph style={{ margin:0, marginTop: "1vh", width: "100%" }}>
                            Also, you can contact me via
                        </Paragraph>
                        <List
                            style={{ width: "100%", height: "fit-content" }}
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item style={{ margin: 0 }}>
                                    <a className="contact" href={item.url}>
                                        {item.title}
                                    </a>
                                </List.Item>
                            )}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Professional