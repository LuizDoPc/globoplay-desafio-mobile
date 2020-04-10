import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {REQUEST_TEST} from '@/store/actions';

const Home = () => {
  const dispatch = useDispatch();

  const {test} = useSelector(({app}) => app);

  useEffect(() => {
    dispatch({type: REQUEST_TEST});
  }, []);

  return (
    <View>
      <Text>Redux status: {test ? 'ok' : 'error'}</Text>
    </View>
  );
};

export default Home;
