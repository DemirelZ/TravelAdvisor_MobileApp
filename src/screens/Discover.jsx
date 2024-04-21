import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MenuContainer from '../components/MenuContainer';
import {Attractions, Hotels, NotFound, Restaurants} from '../assets';
import {ArrowRight} from 'iconsax-react-native';
import {getPlacesData} from '../api';
import ItemCardContainer from '../components/ItemCardContainer';

const Discover = () => {
  const [type, setType] = useState('restaurants');
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type)
      .then(res => setMainData(res.data))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [type]);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[36px] text-[#527283]">the beauty today</Text>
          <Text className="text-[36px] text-[#527283] font-semibold">
            in Türkiye
          </Text>
        </View>
        <View className="w-12 h-12 rounded-md bg-gray-400 items-center justify-center shadow-md">
          <Image
            className="w-full h-full rounded-md object-cover"
            source={require('../assets/avatar.png')}
          />
        </View>
      </View>

      {/* <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'YOUR API KEY',
            language: 'en',
          }}
        />
      </View> */}

      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#b2b2b2" />
        </View>
      ) : (
        <View>
          <View className="flex-row items-center justify-between px-8 mt-8 bg-gray-100">
            <MenuContainer
              key={'hotels'}
              title={'Hotels'}
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={'attractions'}
              title={'Attractions'}
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={'restaurants'}
              title={'Restaurants'}
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>

          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2C7379] text-[28px] font-bold">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#A0C4C7] text-[20px] font-bold">
                  Explore
                </Text>
                <ArrowRight size="24" color="#A0C4C7" />
              </TouchableOpacity>
            </View>

            <View className="items-center justify-between mt-4">
              {mainData?.length > 0 ? (
                <>
                  <FlatList
                    numColumns={2}
                    data={mainData.filter(item => item?.photo?.images)}
                    renderItem={({item}) => <ItemCardContainer item={item} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                      marginBottom: 100,
                    }}
                  />
                </>
              ) : (
                <>
                  <View className="w-full h-[400px] items-center space-y-8 justify-center">
                    <Image
                      source={NotFound}
                      className=" w-32 h-32 object-cover"
                    />
                    <Text className="text-2xl text-[#428288] font-semibold">
                      Opps...No Data Found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Discover;

const styles = StyleSheet.create({});
