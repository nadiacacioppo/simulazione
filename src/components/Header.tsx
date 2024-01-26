import { Box, Button, Image } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'


export function Header() {

    return (
        <>

            <Box bg='cyan' width='100%' p={2} display='flex' alignItems='baseline'>
                    <Image src="./Naruto_logo.svg.png" width='8%' ml={5}/>
                    <ChakraLink as={ReactRouterLink} to='/'>
                        <Button size='sm' ml={20} colorScheme='black' variant='outline'>Homepage</Button>
                    </ChakraLink>
            </Box>

        </>
    )

}

export default Header;