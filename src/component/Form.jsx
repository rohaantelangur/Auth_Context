import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { Authcontext } from '../context/Authcontext';
  
  export default function SimpleCard() {
  const { gettoken, token, settoken, auth, setauth} = useContext(Authcontext);
  const [logincread, setlogincread] = useState({
      Email:"",
      Pass:'',
  })
const handleOnclick=(e)=>{
const {name, value}=e.target

 setlogincread({
...logincread,
    [name]:value,
})
}

const handleOnsubmit=()=>{
    gettoken(logincread.Email,logincread.Pass)
    setauth(true)
    console.log(logincread.Email,logincread.Pass,token,auth);
}
if(auth){
    <Navigate to="statuse"/> 
}
    return (
        <>
        
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={handleOnclick} name="Email"/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={handleOnclick} name="Pass"/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleOnsubmit}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    
            <>
      {auth ?( "Your Token is : " + token ):  ( "Status : Log-Out ")}
      <button onClick={()=>{
          setauth(false)
          settoken("")
        }}>Logout</button>
        </>
      </>
    );
  }