import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Skill from './components/Skill'

const Menu = () => (
  <Tabs>
    <TabList>
      <Tab>HOME</Tab>
      <Tab>ABOUT</Tab>
      <Tab>PROJECT</Tab>
      <Tab>SKILL</Tab>
    </TabList>

    <TabPanel>
      <Home />
    </TabPanel>
    <TabPanel>
      <About />
    </TabPanel>
    <TabPanel>
      <Project />
    </TabPanel>
    <TabPanel>
      <Skill />
    </TabPanel>
  </Tabs>
)

export default Menu
