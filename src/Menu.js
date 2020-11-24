import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'

const Menu = () => (
  <Tabs>
    <TabList>
      <Tab>HOME</Tab>
      <Tab>PROJECT</Tab>
      <Tab>ABOUT</Tab>
    </TabList>
    <TabPanel>
      <Home />
    </TabPanel>
    <TabPanel>
      <Project />
    </TabPanel>
    <TabPanel style={{ backgroundColor: 'white' }}>
      <About />
    </TabPanel>
  </Tabs>
)

export default Menu
