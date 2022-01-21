import { Flex, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import Link from 'next/link';

export function Slider (){
  return (
    <Flex
      h={["250px", "450px"]}
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
      mt={["5", "10"]}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 4000
        }}
        modules={[Navigation, Pagination, A11y]}
        style={{
          width: '100%',
          flex: '1'
        }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            bgImage="url('/Continent Image.png')"
            bgSize='cover'
            bgRepeat="no-repeat"
            textAlign="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading  fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="700"> Europa </Heading>
                <Text fontSize={["0.8rem", "1xl", "2xl"]} fontWeight="700" color="gray.300" mt={["2", "4"]}>O continente mais antigo.</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            bgImage="url('/Continent Image.png')"
            bgSize='cover'
            bgRepeat="no-repeat"
            textAlign="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading  fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="700"> Europa </Heading>
                <Text fontSize={["0.8rem", "1xl", "2xl"]} fontWeight="700" color="gray.300" mt={["2", "4"]}>O continente mais antigo.</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}