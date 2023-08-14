import {FlatList, StyleSheet} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import Colors from '../constants/Colors';
import {useSelector} from 'react-redux';

import {CATEGORIES} from '../data/dummy-data';
import {RootState} from '../redux-store/store';
import {Lesson} from '../models/Lesson';
import Tts from 'react-native-tts';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

function CategoriesScreen({navigation}) {
  const {
    theme: {isDarkTheme},
    sounds: {isSound},
  } = useSelector((state: RootState) => state);

  const renderCategoryItem = ({item}: {item: Lesson}) => {
    function pressHandler() {
      if (isSound) {
        Tts.stop();
        Tts.speak(item.title);
      }
      navigation.navigate('LessonOverview', {
        categoryId: item.id,
      });
    }

    return (
      <CategoryGridTile
        id={item.id}
        title={item.title}
        text={item.text}
        onPress={pressHandler}
      />
    );
  };

  return (
    <>
      <FlatList
        data={CATEGORIES}
        style={isDarkTheme ? styles.darkTheme : styles.lightTheme}
        keyExtractor={item => item.id}
        renderItem={renderCategoryItem}
        // numColumns={2}
      />
    </>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  darkTheme: {
    backgroundColor: Colors.gray80,
  },
  lightTheme: {
    backgroundColor: Colors.gray5,
  },
});
