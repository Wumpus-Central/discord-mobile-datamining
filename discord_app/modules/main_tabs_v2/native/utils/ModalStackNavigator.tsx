import { jsx } from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import importAllResult from "noop";

const require = arg1;
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = require("noop").memo(function ModalStackNavigator(children) {
  let importDefault;
  let require;
  let screenKey;
  ({ screenKey, title: require, titleIcon: importDefault } = children);
  let dependencyMap;
  let obj = require(5665) /* NavigationStack */;
  dependencyMap = obj.useAccessibilityNativeStackOptions();
  obj = {
    initialRouteName: screenKey,
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.create(null));
          const merged1 = Object.assign(merged);
          return outer1_3(outer1_0(outer1_2[4]).GenericHeaderTitle, { title: children.children, icon: closure_1 });
        },
        headerLeft: null,
        headerTitleAlign: "center"
      };
      obj[1] = outer1_0(8193).getRenderModalCloseImage(navigation.navigation);
      let merged = Object.assign(dependencyMap);
      let merged1 = Object.assign(outer1_1(9597)());
      return obj;
    },
    children: <createNativeStackNavigator.Screen {...obj} />
  };
  obj = {
    name: screenKey,
    children: children.render,
    options() {
      const obj = { title: closure_0, orientation: null };
      let str;
      if (obj2.isIOS()) {
        str = "portrait";
      }
      obj[1] = str;
      return obj;
    }
  };
  return <createNativeStackNavigator.Navigator name={screenKey} options={function options() {
    const obj = { title: closure_0, orientation: null };
    let str;
    if (obj2.isIOS()) {
      str = "portrait";
    }
    obj[1] = str;
    return obj;
  }}>{arg0.render}</createNativeStackNavigator.Navigator>;
});
const result = require("createNativeStackNavigator").fileFinishedImporting("modules/main_tabs_v2/native/utils/ModalStackNavigator.tsx");

export default memoResult;