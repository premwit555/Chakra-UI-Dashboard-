import React, { useState } from "react"
import {
     Spacer,
     Heading,
     Link,
     Icon,
     Avatar,
     Text,
     Table,
     Thead,
     Tr,
     Th,
     Tbody,
     Td,
     Flex,
     IconButton,
     Divider,
} from "@chakra-ui/react"

import { FiCalendar, FiChevronDown, FiChevronUp, FiHome } from "react-icons/fi"
import LineChart from "../components/LineChart"

function dashboard() {
     const [display, setDisplay] = useState("hide")
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
               <Flex
                    w='55%'
                    p='3%'
                    flexDir='column'
                    overflow='auto'
                    minH='100vh'
               >
                    <Heading letterSpacing='tight' fontWeight='normal' mb={4}>
                         {" "}
                         Welcome Back,{" "}
                         <Flex fontWeight='bold' display='inline-flex'>
                              {" "}
                              Premwit
                         </Flex>
                    </Heading>
                    <Text color='gray' fontSize='2xl' mt={8}>
                         My Balance
                    </Text>
                    <Text fontWeight='bold' fontSize='2xl'>
                         $ 1,000,000
                    </Text>
                    <LineChart />
                    <Flex justifyContent='space-between' mt={8}>
                         <Flex align='flex-end'>
                              <Heading>Transaction</Heading>
                              <Text> Apr 2021</Text>
                         </Flex>
                         <IconButton icon={<FiCalendar />} />
                    </Flex>
                    <Flex flexDir='column'>
                         <Flex overflow='auto'>
                              <Table variant='unstyled' mt={4}>
                                   <Thead>
                                        <Tr color='gray'>
                                             <Th> Name of Transaction</Th>
                                             <Th>Category</Th>
                                             <Th isNumeric>CashBack</Th>
                                             <Th isNumeric>Amount</Th>
                                        </Tr>
                                   </Thead>
                                   <Tbody>
                                        <Tr>
                                             <Td>
                                                  <Flex>
                                                       <Avatar
                                                            size='sm'
                                                            mr={2}
                                                            src=''
                                                       />
                                                       <Flex flexDir='column'>
                                                            <Heading
                                                                 size='sm'
                                                                 letterSpacing='tight'
                                                            >
                                                                 Amazon
                                                            </Heading>
                                                            <Text
                                                                 fontSize='sm'
                                                                 color='gray'
                                                            >
                                                                 {" "}
                                                                 24, 2021 , at
                                                                 14.00
                                                            </Text>
                                                       </Flex>
                                                  </Flex>
                                             </Td>
                                             <Td>Electronic Devices</Td>
                                             <Td isNumeric> +2$</Td>
                                             <Td isNumeric>
                                                  {" "}
                                                  <Text
                                                       display='inline-table'
                                                       fontWeight='bold'
                                                  >
                                                       $242
                                                  </Text>
                                                  .00
                                             </Td>
                                        </Tr>
                                        <Tr>
                                             <Td>
                                                  <Flex>
                                                       <Avatar
                                                            size='sm'
                                                            mr={2}
                                                            src=''
                                                       />
                                                       <Flex flexDir='column'>
                                                            <Heading
                                                                 size='sm'
                                                                 letterSpacing='tight'
                                                            >
                                                                 Amazon
                                                            </Heading>
                                                            <Text
                                                                 fontSize='sm'
                                                                 color='gray'
                                                            >
                                                                 {" "}
                                                                 24, 2021 , at
                                                                 14.00
                                                            </Text>
                                                       </Flex>
                                                  </Flex>
                                             </Td>
                                             <Td>Electronic Devices</Td>
                                             <Td isNumeric> +2$</Td>
                                             <Td isNumeric>
                                                  {" "}
                                                  <Text
                                                       display='inline-table'
                                                       fontWeight='bold'
                                                  >
                                                       $242
                                                  </Text>
                                                  .00
                                             </Td>
                                        </Tr>

                                        {display == "show" && (
                                             <>
                                                  <Tr>
                                                       <Td>
                                                            <Flex>
                                                                 <Avatar
                                                                      size='sm'
                                                                      mr={2}
                                                                      src=''
                                                                 />
                                                                 <Flex flexDir='column'>
                                                                      <Heading
                                                                           size='sm'
                                                                           letterSpacing='tight'
                                                                      >
                                                                           Amazon
                                                                      </Heading>
                                                                      <Text
                                                                           fontSize='sm'
                                                                           color='gray'
                                                                      >
                                                                           {" "}
                                                                           24,
                                                                           2021
                                                                           , at
                                                                           14.00
                                                                      </Text>
                                                                 </Flex>
                                                            </Flex>
                                                       </Td>
                                                       <Td>
                                                            Electronic Devices
                                                       </Td>
                                                       <Td isNumeric> +2$</Td>
                                                       <Td isNumeric>
                                                            {" "}
                                                            <Text
                                                                 display='inline-table'
                                                                 fontWeight='bold'
                                                            >
                                                                 $242
                                                            </Text>
                                                            .00
                                                       </Td>
                                                  </Tr>
                                                  <Tr>
                                                       <Td>
                                                            <Flex>
                                                                 <Avatar
                                                                      size='sm'
                                                                      mr={2}
                                                                      src=''
                                                                 />
                                                                 <Flex flexDir='column'>
                                                                      <Heading
                                                                           size='sm'
                                                                           letterSpacing='tight'
                                                                      >
                                                                           Amazon
                                                                      </Heading>
                                                                      <Text
                                                                           fontSize='sm'
                                                                           color='gray'
                                                                      >
                                                                           {" "}
                                                                           24,
                                                                           2021
                                                                           , at
                                                                           14.00
                                                                      </Text>
                                                                 </Flex>
                                                            </Flex>
                                                       </Td>
                                                       <Td>
                                                            Electronic Devices
                                                       </Td>
                                                       <Td isNumeric> +2$</Td>
                                                       <Td isNumeric>
                                                            {" "}
                                                            <Text
                                                                 display='inline-table'
                                                                 fontWeight='bold'
                                                            >
                                                                 $242
                                                            </Text>
                                                            .00
                                                       </Td>
                                                  </Tr>
                                                  <Tr>
                                                       <Td>
                                                            <Flex>
                                                                 <Avatar
                                                                      size='sm'
                                                                      mr={2}
                                                                      src=''
                                                                 />
                                                                 <Flex flexDir='column'>
                                                                      <Heading
                                                                           size='sm'
                                                                           letterSpacing='tight'
                                                                      >
                                                                           Amazon
                                                                      </Heading>
                                                                      <Text
                                                                           fontSize='sm'
                                                                           color='gray'
                                                                      >
                                                                           {" "}
                                                                           24,
                                                                           2021
                                                                           , at
                                                                           14.00
                                                                      </Text>
                                                                 </Flex>
                                                            </Flex>
                                                       </Td>
                                                       <Td>
                                                            Electronic Devices
                                                       </Td>
                                                       <Td isNumeric> +2$</Td>
                                                       <Td isNumeric>
                                                            {" "}
                                                            <Text
                                                                 display='inline-table'
                                                                 fontWeight='bold'
                                                            >
                                                                 $242
                                                            </Text>
                                                            .00
                                                       </Td>
                                                  </Tr>
                                                  <Tr>
                                                       <Td>
                                                            <Flex>
                                                                 <Avatar
                                                                      size='sm'
                                                                      mr={2}
                                                                      src=''
                                                                 />
                                                                 <Flex flexDir='column'>
                                                                      <Heading
                                                                           size='sm'
                                                                           letterSpacing='tight'
                                                                      >
                                                                           Amazon
                                                                      </Heading>
                                                                      <Text
                                                                           fontSize='sm'
                                                                           color='gray'
                                                                      >
                                                                           {" "}
                                                                           24,
                                                                           2021
                                                                           , at
                                                                           14.00
                                                                      </Text>
                                                                 </Flex>
                                                            </Flex>
                                                       </Td>
                                                       <Td>
                                                            Electronic Devices
                                                       </Td>
                                                       <Td isNumeric> +2$</Td>
                                                       <Td isNumeric>
                                                            {" "}
                                                            <Text
                                                                 display='inline-table'
                                                                 fontWeight='bold'
                                                            >
                                                                 $242
                                                            </Text>
                                                            .00
                                                       </Td>
                                                  </Tr>
                                             </>
                                        )}
                                   </Tbody>
                              </Table>
                         </Flex>
                         <Flex align='center'>
                              <Divider />
                              <IconButton
                                   icon={
                                        display == "show" ? (
                                             <FiChevronUp />
                                        ) : (
                                             <FiChevronDown />
                                        )
                                   }
                                   onClick={() => {
                                        display == "show"
                                             ? setDisplay("hide")
                                             : setDisplay("show")
                                   }}
                              />
                              <Divider />
                         </Flex>
                    </Flex>
               </Flex>

               {/* Column 3 */}
               <Flex
                    w='35%'
                    bg='#f5f5f5'
                    p='3%'
                    flexDir='column'
                    overflow='auto'
               ></Flex>
          </Flex>
     )
}

export default dashboard
