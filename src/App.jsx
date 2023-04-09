import { Typography, Anchor, Dropdown, Space } from 'antd'
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import About from './components/About'
import './App.css'
import Habilities from './components/Habilities'
import Professional from './components/Professional';
import Projects from './components/Projects';

function App() {
  const [activeSection, setActiveSection] = useState("")
  const [dropdownText, setDropdownText] = useState("More about me")

  const displayActiveSection = () => {
    switch (activeSection) {
      case "habilities":
        return <Habilities />
      case "professional-experience":
        return <Professional />
      case "projects":
        return <Projects />
      default:
        return null
    }
  }

  return (
    <div className="App">
      <About sectionsAreActive={activeSection != ""} />
      <div className="dropdown">
        <Dropdown
          menu={{
            items: [
              {
                label: (
                  <a target="_blank" rel="noopener noreferrer" onClick={() => {
                    setDropdownText("Skills")
                    setActiveSection("habilities");
                  }}>
                    Skills
                  </a>
                ),
                key: '0',
              },
              {
                label: (
                  <a target="_blank" rel="noopener noreferrer" onClick={() => {
                    setDropdownText("Professional Experience & Resume")
                    setActiveSection("professional-experience")
                  }}>
                    Professional Experience & Resume
                  </a>
                ),
                key: '1',
              },
            ]
          }}
          placement="bottom"
          trigger={['click']}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <div className="dropdown-text">
                {dropdownText}
              </div>
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      {activeSection != "" ? displayActiveSection() : null}
    </div>
  )
}

export default App