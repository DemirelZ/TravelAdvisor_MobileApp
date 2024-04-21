import {View, Text, TouchableOpacity, Image} from 'react-native';

import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ItemCardContainer = ({item}) => {
  const navigation = useNavigation();

  console.log(item?.photo?.images);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ItemScreen', {param: item})}
      className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[45%] ml-3 mb-3">
      <Image
        source={{
          uri: item?.photo?.images?.medium?.url
            ? item?.photo?.images?.medium?.url
            : 'https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg',
        }}
        className="w-full h-40 rounded-md object-cover"
      />

      {item.name ? (
        <>
          <Text className="text-[#428288] text-[18px] font-bold">
            {item.name?.length > 14 ? `${item.name.slice(0, 14)}..` : item.name}
          </Text>

          <View className="flex-row items-center space-x-1">
            <Text className="text-[#428288] text-[14px] font-bold">
              {item.location_string?.length > 18
                ? `${item.name.slice(0, 18)}..`
                : item.location_string}
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
