import React from "react"
import {
     Spacer,
     Heading,
     Link,
     Icon,
     Avatar,
     Text,
     Flex,
} from "@chakra-ui/react"

import { FiHome } from "react-icons/fi"

function dashboard() {
     return (
          <Flex h='100vh' flexDir='row' overflow='hiddin' maxW='2000px'>
               {/* Column 1 */}
               <Flex
                    w='15%'
                    flexDir='column'
                    alignItems='center'
                    bg='#020202'
                    color='#fff'
               >
                    <Flex
                         flexDir='column'
                         justifyContent='space-between'
                         h='100vh'
                    >
                         <Flex flexDir='column' as='nev'>
                              <Heading
                                   mt={50}
                                   mb={100}
                                   fontSize='4xl'
                                   alignItems='center'
                                   letterSpacing='tight'
                              >
                                   Rise
                              </Heading>
                              <Flex
                                   flexDir='column'
                                   align='flex-start'
                                   justifyContent='center'
                              >
                                   <Flex className='sidebar-items'>
                                        <Link>
                                             <Icon
                                                  as={FiHome}
                                                  fontSize='2xl'
                                                  className='active-icon'
                                             ></Icon>
                                        </Link>
                                        <Link _hover={{ textDecor: "none" }}>
                                             <Text className='active'>
                                                  Home
                                             </Text>
                                        </Link>
                                   </Flex>
                                   <Flex className='sidebar-items'>
                                        <Link>
                                             <Icon
                                                  as={FiHome}
                                                  fontSize='2xl'
                                             ></Icon>
                                        </Link>
                                        <Link _hover={{ textDecor: "none" }}>
                                             <Text>Home</Text>
                                        </Link>
                                   </Flex>
                                   <Flex className='sidebar-items'>
                                        <Link>
                                             <Icon
                                                  as={FiHome}
                                                  fontSize='2xl'
                                             ></Icon>
                                        </Link>
                                        <Link _hover={{ textDecor: "none" }}>
                                             <Text>Home</Text>
                                        </Link>
                                   </Flex>
                                   <Flex className='sidebar-items'>
                                        <Link>
                                             <Icon
                                                  as={FiHome}
                                                  fontSize='2xl'
                                             ></Icon>
                                        </Link>
                                        <Link _hover={{ textDecor: "none" }}>
                                             <Text>Home</Text>
                                        </Link>
                                   </Flex>
                              </Flex>
                         </Flex>
                         <Flex
                              flexDir='column'
                              alignItems='center'
                              mb={10}
                              mt={5}
                         >
                              <Avatar
                                   my={2}
                                   src='https://scontent.fbkk4-4.fna.fbcdn.net/v/t1.6435-9/193202864_877685832837008_4831499077367771317_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEvj4eVf_A9lMcnCgkrAjeBU_MD7VTqiLNT8wPtVOqIs8clUvBgpnVfZmxq-OMKTIsN4JQSRoMUgaqcONdVDks0&_nc_ohc=0sbGIyDjAgEAX9zWvkg&_nc_ht=scontent.fbkk4-4.fna&oh=c78d38fe568a1bd71fd91ce46026d923&oe=60DD58A5'
                              />
                              <Text>Premwit Akara</Text>
                         </Flex>
                    </Flex>
               </Flex>

               {/* Column 2 */}
               <Flex></Flex>

               {/* Column 3 */}
               <Flex></Flex>
          </Flex>
     )
}

export default dashboard
