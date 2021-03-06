import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'
import { Layout } from '../components/Layout'
import { useAuth } from '../Contexts/AuthContexts'
import useMounted from '../hooks/useMounted'
import  axios  from 'axios'
export default function Registerpage() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast =  useToast()
  const mounted = useMounted()
  const {register,signInWithGoogle} = useAuth()
  const {currentUSer} = useAuth()
  const initialvalue = {
    Uid:"",
    Name:"",
    Email:"",
    Number:""
  }
  return (
    <Layout>
      <Heading textAlign='center' my={12}>
        Register
      </Heading>
      <Card maxW='md' mx='auto' mt={4}>
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            // your register logic here
           // console.log(email , password);
           if(!email || !password){
             toast({
               description: "Credentials not valid",
               status:'error',
               duration: 5000,
               isClosable: true
             })
           }

           setIsSubmitting(true)
           register(email , password)
           .then((response) => {console.log(response);
          
          initialvalue.Uid=response.user.uid;
          initialvalue.Name = name;
          initialvalue.Email = email;
          initialvalue.Number="";
          axios.post("http://localhost:3001/profile",initialvalue).then((response) => {
            console.log(response.data);
      
    });
          })
           .catch((error) => {
             console.log(error.message)
           toast({
               description: error.message,
               status:'error',
               duration: 5000,
               isClosable: true
             })}
          
             ).finally(() => {
               mounted.current &&setIsSubmitting(false);
               //let obj = JSON.stringify(currentUSer , null , 2);
              
              
              //initialvalue.Uid=JSON.stringify(currentUSer.email);
              console.log(initialvalue);
            
            })
           

          }}
        >
          <Stack spacing='6'>
            <FormControl id='name'>
              <FormLabel>Enter Name</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} name='name' type='name' autoComplete='name' required />
            </FormControl>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} name='email' type='email' autoComplete='email' required />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name='password'
                type='password'
                autoComplete='password'
                required
              />
            </FormControl>
            <Button isLoading={isSubmitting} type='submit' colorScheme='primary' size='lg' fontSize='md'>
              Sign up
            </Button>
          </Stack>
        </chakra.form>
        <Center my={4}>
          <Button variant='link' onClick={() => history.push('/login')}>
            Login
          </Button>
        </Center>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant='outline'
          isFullWidth
          colorScheme='red'
          leftIcon={<FaGoogle />}
          onClick={() => signInWithGoogle().then(user => console.log(user)).catch(error => console.log(error))}
        >
          Sign in with Google
        </Button>
      </Card>
    </Layout>
  )
}
