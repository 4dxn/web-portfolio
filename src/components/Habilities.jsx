import { Typography, Col, Row } from 'antd'
import IconHolder from './micro/IconHolder'
import JavaIcon from '../assets/java.svg'
import PythonIcon from '../assets/python.svg'
import CSharpIcon from '../assets/csharp.png'
import JSIcon from '../assets/javascript.svg'
import ReactIcon from '../assets/react.svg'
import SpringBootIcon from '../assets/springboot.png'
import SpringIcon from '../assets/spring.png'
import NodeJSIcon from '../assets/nodejs.png'
import dotNETIcon from '../assets/dotnet.png'
import MSSQLIcon from '../assets/microsoftsqlserver.png'
import PostgresIcon from '../assets/postgresql.svg'
import MySQLIcon from '../assets/mysql.svg'
import MongoDBIcon from '../assets/mongo.svg'
import SeleniumIcon from '../assets/selenium.svg'
import CypressIcon from '../assets/cypress.svg'
import JUnitIcon from '../assets/junit.png'
import MockitoIcon from '../assets/mockito.png'
import LinuxIcon from '../assets/linux.png'
import JenkinsIcon from '../assets/jenkins.png'
import DockerIcon from '../assets/docker.png'
import GitIcon from '../assets/git.png'
import './Habilities.css'
const { Title } = Typography;

const Habilities = () => {
    return (
        <div className="habilities-container">
            <Row justify="center">
                <Col xs={{ span: 24 }} sm={{ span: 7 }}>
                    <div className="section-container">
                        <Title level={4}>Programming Languages</Title>
                        <div className="section-list">
                            <IconHolder color="#5382A1" name="Java" icon={JavaIcon} />
                            <IconHolder color="#FCD22D" name="Python" icon={PythonIcon} />
                            <IconHolder color="#F7DF1E" name="JavaScript" icon={JSIcon} />
                            <IconHolder color="#662579" name="C#" icon={CSharpIcon} />
                        </div>
                    </div>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 7 }}>
                    <div className="section-container">
                        <Title level={4}>Frameworks</Title>
                        <div className="section-list">
                            <IconHolder color="#6FAC50" name="Spring" icon={SpringIcon} />
                            <IconHolder color="#68BD45" name="Spring Boot" icon={SpringBootIcon} />
                            <IconHolder color="#5027D5" name=".NET" icon={dotNETIcon} />
                            <IconHolder color="#25B55F" name="NodeJS" icon={NodeJSIcon} />
                            <IconHolder color="#00D8FF" name="ReactJS" icon={ReactIcon} />
                        </div>
                    </div>
                </Col>
            </Row>

            <Row justify="center">
                <Col xs={{ span: 24 }} sm={{ span: 7 }}>
                    <div className="section-container">
                        <Title level={4}>Databases</Title>
                        <div className="section-list">
                            <IconHolder color="#E74F46" name="Microsoft SQL Server" icon={MSSQLIcon} />
                            <IconHolder color="#00758F" name="MySQL" icon={MySQLIcon} />
                            <IconHolder color="#336791" name="PostgreSQL" icon={PostgresIcon} />
                            <IconHolder color="#439B45" name="MongoDB" icon={MongoDBIcon} />
                        </div>
                    </div >
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 7 }}>
                    <div className="section-container">
                        <Title level={4}>Testing & Automation</Title>
                        <div className="section-list">
                            <IconHolder color="#2CB134" name="Selenium" icon={SeleniumIcon} />
                            <IconHolder color="#5C5C5E" name="Cypress.io" icon={CypressIcon} />
                            <IconHolder color="#7DE87A" name="Mockito" icon={MockitoIcon} />
                            <IconHolder color="#CB0000" name="jUnit" icon={JUnitIcon} />
                        </div>
                    </div>
                </Col>
            </Row>

            <Row justify="center">
                <Col xs={{ span: 24 }} sm={{ span: 7 }}>
                    <div className="section-container">
                        <Title level={4}>Other</Title>
                        <div className="section-list">
                            <IconHolder color="#161617" name="Linux" icon={LinuxIcon} />
                            <IconHolder color="#D03632" name="Jenkins" icon={JenkinsIcon} />
                            <IconHolder color="#0096E6" name="Docker" icon={DockerIcon} />
                            <IconHolder color="#FF5D19" name="Git" icon={GitIcon} />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Habilities