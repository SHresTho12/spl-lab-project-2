import {
  Badge,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
  Tag,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import { Link } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContexts'

export default function Homepage() {
  const {currentUSer} = useAuth()
  return (
    <Layout>
      <Heading>Home page </Heading>
      <Text my={6}></Text>

      
     
      
      <List>
        <ListItem>
          <Link to='/reset-password'>reset page</Link>
        </ListItem>
        <ListItem>
          <Link to='/forgot-password'>forgot page</Link>
        </ListItem>
      </List>
    </Layout>
  )
}