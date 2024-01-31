import React from 'react';
import {View, SafeAreaView, Image, TouchableOpacity} from 'react-native';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import Search from '../../components/Search/Search';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {horizontalScale} from '../../assets/styles/scaling';
import {ScrollView} from 'react-native-gesture-handler';
import {Routes} from '../../navigation/Routes';


const Home = ({navigation}) => {
  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <ScrollView>
        <View>
          {/* Header */}
          <View style={style.topHeaderContainer}>
            <View style={style.topHeaderContent}>
              <Header title={'Hello,'} type={2} />
              <Header title={'Azzahri A. 👋'} type={1} />
            </View>
            <Image source={require('../../assets/images/user.png')} />
          </View>
          {/* Search */}
          <View style={style.searchContainer}>
            <Search
              onSearch={value => {
                console.log(value);
              }}
            />
          </View>
          {/* Category */}
          <View style={style.categoryContainer}>
            <Header title={'Select Category'} type={2} />
            <ScrollView horizontal>
              <View style={style.categoryContent}>
                <Tab title={'Highlight'} />
                <Tab title={'Lifestyle'} isInactive={true} />
                <Tab title={'Environment'} isInactive={true} />
              </View>
            </ScrollView>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: horizontalScale(24),
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(Routes.Detail);
              }}>
              <SingleDonationItem
                uri={'../../assets/images/cactus-image.jpeg'}
                badgeTitle={'Environment'}
                donationTitle={'Tree Cactus'}
                price={44}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(Routes.Detail);
              }}>
              <SingleDonationItem
                uri={'../../assets/images/cactus-image.jpeg'}
                badgeTitle={'Education'}
                donationTitle={'Genius Rubik'}
                price={50}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: horizontalScale(24),
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(Routes.Detail);
              }}>
              <SingleDonationItem
                uri={'../../assets/images/cactus-image.jpeg'}
                badgeTitle={'Environment'}
                donationTitle={'Tree Cactus'}
                price={44}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(Routes.Detail);
              }}>
              <SingleDonationItem
                uri={'../../assets/images/cactus-image.jpeg'}
                badgeTitle={'Education'}
                donationTitle={'Genius Rubik'}
                price={50}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
