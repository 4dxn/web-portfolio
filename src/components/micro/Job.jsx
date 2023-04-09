import { Typography } from 'antd'
import './Job.css'
const { Title, Text } = Typography

const Job = ({ position, company, dates, description }) => {
    return (
        <div className="job">
            <Title level={5} style={{ marginTop: 0, marginBottom: 0 }}>{position}</Title>
            <Text strong>{company}</Text>
            <Text italic>{dates}</Text>
            <Text>{description}</Text>
        </div>
    )
}

export default Job