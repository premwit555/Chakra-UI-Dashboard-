import React, { useState } from "react"
import {
     Heading,
     Link,
     Icon,
     Avatar,
     Table,
     Thead,
     Tr,
     Th,
     Tbody,
     Td,
     Flex,
     IconButton,
     Divider,
     InputGroup,
     InputLeftElement,
     Input,
     Box,
     Text,
     Button,
     AvatarGroup,
} from "@chakra-ui/react"

import {
     FiBell,
     FiCalendar,
     FiChevronDown,
     FiChevronUp,
     FiCreditCard,
     FiHome,
     FiPlus,
     FiSearch,
} from "react-icons/fi"
import LineChart from "../components/LineChart"

function dashboard() {
     const [display, setDisplay] = useState("hide")
     const [value, setValue] = useState(1)
     return (
          <Flex
               h={[null, null, "100vh"]}
               flexDir={["column", "column", "row"]}
               overflow='hiddin'
               maxW='2000px'
          >
               {/* Column 1 */}
               <Flex
                    w={["100%", "100%", "10%", "15%", "15%"]}
                    flexDir='column'
                    alignItems='center'
                    bg='#020202'
                    color='#fff'
               >
                    <Flex
                         flexDir='column'
                         justifyContent='space-between'
                         h={[null, null, "100vh"]}
                    >
                         <Flex flexDir='column' As='nev'>
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
                                   flexDir={["row", "row", "column"]}
                                   align={[
                                        "center",
                                        "center",
                                        "center",
                                        "flex-start",
                                   ]}
                                   justifyContent='center'
                              >
                                   <Flex
                                        className='sidebar-items'
                                        mr={[2, 6, 0, 0, 0]}
                                   >
                                        <Link
                                             display={[
                                                  "none",
                                                  "none",
                                                  "flex",
                                                  "flex",
                                                  "flex",
                                             ]}
                                        >
                                             <Icon
                                                  as={FiHome}
                                                  fontSize='2xl'
                                                  className='active-icon'
                                             ></Icon>
                                        </Link>
                                        <Link
                                             _hover={{ textDecor: "none" }}
                                             display={[
                                                  "flex",
                                                  "flex",
                                                  "none",
                                                  "flex",
                                                  "flex",
                                             ]}
                                        >
                                             <Text className='active'>
                                                  Home
                                             </Text>
                                        </Link>
                                   </Flex>

                                   <Flex
                                        className='sidebar-items'
                                        mr={[2, 6, 0, 0, 0]}
                                   >
                                        <Link
                                             display={[
                                                  "none",
                                                  "none",
                                                  "flex",
                                                  "flex",
                                                  "flex",
                                             ]}
                                        >
                                             <Icon
                                                  as={FiHome}
                                                  fontSize='2xl'
                                             ></Icon>
                                        </Link>
                                        <Link
                                             _hover={{ textDecor: "none" }}
                                             display={[
                                                  "flex",
                                                  "flex",
                                                  "none",
                                                  "flex",
                                                  "flex",
                                             ]}
                                        >
                                             <Text>Home</Text>
                                        </Link>
                                   </Flex>
                                   <Flex
                                        className='sidebar-items'
                                        mr={[2, 6, 0, 0, 0]}
                                   >
                                        <Link
                                             display={[
                                                  "none",
                                                  "none",
                                                  "flex",
                                                  "flex",
                                                  "flex",
                                             ]}
                                        >
                                             <Icon
                                                  as={FiHome}
                                                  fontSize='2xl'
                                             ></Icon>
                                        </Link>
                                        <Link
                                             _hover={{ textDecor: "none" }}
                                             display={[
                                                  "flex",
                                                  "flex",
                                                  "none",
                                                  "flex",
                                                  "flex",
                                             ]}
                                        >
                                             <Text>Home</Text>
                                        </Link>
                                   </Flex>
                                   <Flex
                                        className='sidebar-items'
                                        mr={[2, 6, 0, 0, 0]}
                                   >
                                        <Link
                                             display={[
                                                  "none",
                                                  "none",
                                                  "flex",
                                                  "flex",
                                                  "flex",
                                             ]}
                                        >
                                             <Icon
                                                  as={FiHome}
                                                  fontSize='2xl'
                                             ></Icon>
                                        </Link>
                                        <Link
                                             _hover={{ textDecor: "none" }}
                                             display={[
                                                  "flex",
                                                  "flex",
                                                  "none",
                                                  "flex",
                                                  "flex",
                                             ]}
                                        >
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
                    w={["100%", "100%", "60%", "60%", "55%"]}
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
                         <IconButton
                              aria-label='FiCalendar'
                              icon={<FiCalendar />}
                         />
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
                                   aria-label='show'
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
                    w={["100%", "100%", "35%"]}
                    minW={[null, null, "300px", "300px", "400px"]}
                    bg='#f5f5f5'
                    p='3%'
                    flexDir='column'
                    overflow='auto'
               >
                    <Flex alignContent='center'>
                         <InputGroup
                              bgColor='#fff'
                              mb={4}
                              border='#fff'
                              borderRadius='10px'
                              mr={2}
                         >
                              <InputLeftElement
                                   pointerEvents='none'
                                   children={<FiSearch color='gray' />}
                              />
                              <Input
                                   type='number'
                                   placeholder='Search'
                                   borderRadius='10px'
                              />
                         </InputGroup>
                         <IconButton
                              aria-label='bell '
                              icon={<FiBell />}
                              fontSize='sm'
                              bgColor='#fff'
                              borderRadius='50%'
                              p='10px'
                         />
                         <Flex
                              w={30}
                              h={25}
                              bgColor='#b57295'
                              borderRadius='50%'
                              color='#fff'
                              align='center'
                              justify='center'
                              ml='-3'
                              mt='-2'
                              zIndex='100'
                              fontSize='sm'
                         >
                              2
                         </Flex>
                    </Flex>
                    <Heading letterSpacing='tight '>MyCard</Heading>
                    {value == 1 && (
                         <Box
                              borderRadius='25px'
                              mt={4}
                              w='100%'
                              maxW='450px'
                              h='200px'
                              bgGradient='linear(to-t,#3271ce,#0b365a)'
                         >
                              <Flex
                                   p='1em'
                                   color='#fff'
                                   flexDir='column'
                                   h='100%'
                                   justify='space-between'
                              >
                                   <Flex
                                        justify='space-between'
                                        w='100%'
                                        align='flex-start'
                                   >
                                        <Flex flexDir='column'>
                                             <Text color='gary'>
                                                  Current Balance
                                             </Text>
                                             <Text
                                                  fontWeight='bold'
                                                  fontSize='sm'
                                             >
                                                  $2,000.00
                                             </Text>
                                        </Flex>
                                        <Flex align='center'>
                                             <Icon mr={2} as={FiCreditCard} />
                                             <Text>Rise.</Text>
                                        </Flex>
                                   </Flex>
                                   <Text mb={4}>**** **** **** 8956</Text>
                                   <Flex
                                        align='flex-end'
                                        justify='space-between'
                                   >
                                        <Flex>
                                             <Flex flexDir='column' mr={4}>
                                                  <Text
                                                       textTransform='uppercase'
                                                       fontSize='xs'
                                                  >
                                                       {" "}
                                                       Valid Thru
                                                  </Text>
                                                  <Text fontSize='lg'>
                                                       {" "}
                                                       09/24
                                                  </Text>
                                             </Flex>
                                             <Flex flexDir='column'>
                                                  <Text fontSize='xs'>
                                                       {" "}
                                                       CVV
                                                  </Text>
                                                  <Text fontSize='lg'>
                                                       {" "}
                                                       ***
                                                  </Text>
                                             </Flex>
                                        </Flex>
                                        <Icon as={FiCreditCard} />
                                   </Flex>
                              </Flex>
                         </Box>
                    )}
                    <Flex justify='center' mt={2}>
                         <Button
                              bgColor={value == 1 ? "gary.600" : "gray.400"}
                              onClick={() => setValue(1)}
                              size='xs'
                              mx={1}
                         />
                         <Button
                              bgColor={value == 2 ? "gary.600" : "gray.400"}
                              onClick={() => setValue(2)}
                              size='xs'
                              mx={1}
                         />
                         <Button
                              bgColor={value == 3 ? "gary.600" : "gray.400"}
                              onClick={() => setValue(3)}
                              size='xs'
                              mx={1}
                         />
                    </Flex>
                    <Flex flexDir='column' my={4}>
                         <Flex justify='space-between' mb={2}>
                              <Text> Balanse</Text>
                              <Text fontWeight='bold'>$150.00</Text>
                         </Flex>

                         <Flex justify='space-between' mb={2}>
                              <Text> Credit Limit</Text>
                              <Text fontWeight='bold'>$1500.00</Text>
                         </Flex>
                    </Flex>

                    <Heading letterSpacing='tight' size='md' my={4}>
                         Send money to
                    </Heading>
                    <Flex>
                         <AvatarGroup size='md' max={3}>
                              <Avatar src='' />
                              <Avatar src='' />
                              <Avatar src='' />
                              <Avatar src='' />
                              <Avatar src='' />
                              <Avatar src='' />
                         </AvatarGroup>
                         <Avatar
                              icon={<FiPlus />}
                              ml={2}
                              color='#fff'
                              bgColor='gray.300'
                         />
                    </Flex>
                    <Text color='gray' mt={10} mb={2}>
                         {" "}
                         Card Numbers
                    </Text>
                    <InputGroup>
                         <InputLeftElement
                              pointerEvents='none'
                              children={<FiCreditCard />}
                         />
                         <Input
                              type='number'
                              placeholder='xxxx xxxx xxxx xxxx'
                         />
                    </InputGroup>
                    <Text color='gray' mt={10} mb={2}>
                         Sum
                    </Text>
                    <InputGroup>
                         <InputLeftElement
                              pointerEvents='none'
                              children={<FiCreditCard />}
                         />
                         <Input type='number' placeholder='130.00' />
                    </InputGroup>
                    <Button
                         mt={4}
                         bgColor='blackAlpha.900'
                         color='#fff'
                         p={7}
                         borderRadius={15}
                    >
                         Send Money
                    </Button>
               </Flex>
          </Flex>
     )
}

export default dashboard
