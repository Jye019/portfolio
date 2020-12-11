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
    <TabPanel style={{ padding: 0, overflow: 'hidden' }}>
      <Home />
    </TabPanel>
    <TabPanel style={{ overflow: 'auto' }}>
      <Project />
    </TabPanel>
    <TabPanel style={{ overflow: 'auto' }}>
      <About />
    </TabPanel>
  </Tabs>
)

export default Menu
