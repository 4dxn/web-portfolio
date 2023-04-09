import React from "react";
import { Typography } from "antd";
import PropTypes from "prop-types";
import "./IconHolder.css";
const { Title } = Typography;

const IconHolder = ({ icon, color, name }) => {
    return (
        <div className="icon-holder" >
            <div className="icon-text">
            <img src={icon} alt={name} className="icon"/>
            <div className="text">
                <Title level={5} strong style={{
                    marginTop: 0, marginBottom: 0
                }}>{name}</Title>
            </div>
            </div>
            <div className="line" style={{ backgroundColor: color }} />
        </div>
    );
};

IconHolder.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default IconHolder;