import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>

      <View className="px-5 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">
          Good Moments
        </Text>
        <Text className="text-[#3C6072] text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>

      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation={'fadeIn'}
          easing={'ease-in-out'}
          source={require('../assets/hero.png')}
          className="w-full h-full object-cover mt-20"
        />

        <View className="absolute bottom-20 w-24 h-24 rounded-full border-[#00BCC9] border-l-2 border-t-4 border-r-2 items-center justify-center">
          <TouchableOpacity>
            <Animatable.View
              animation={'pulse'}
              easing={'ease-in-out'}
              iterationCount={'infinite'}
              className=" w-20 h-20 rounded-full bg-[#00BCC9] justify-center items-center">
              <Text className="text-gray-50 font-bold text-3xl">Go</Text>
            </Animatable.View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
