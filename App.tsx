import React, { FunctionComponent } from 'react';

import { SafeAreaView,View ,Text} from 'react-native';
import Home from './src/screens/Home';
// import AppNavigation from './src/navigation';

const App: FunctionComponent<{}> = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Home />
      {/*<View>
        <Text>shjhjs</Text>
      </View> */}
      {/* <AppNavigation /> */}
    </SafeAreaView>
  );
};

export default App;
