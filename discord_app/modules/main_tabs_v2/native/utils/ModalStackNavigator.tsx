// === Module 9969: ? ===

// Module 9969
import NavigationStack from "NavigationStack" /* 6343 */;
import { jsx } from "jsxProd" /* 21 */;
import createNativeStackNavigator from "createNativeStackNavigator" /* 9970 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_4 = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo(function ModalStackNavigator(children) {
  ({ screenKey, title: require, titleIcon: importDefault } = children);
  dependencyMap = undefined;
  let obj = NavigationStack;
  dependencyMap = obj.useAccessibilityNativeStackOptions();
  obj = {
    initialRouteName: screenKey,
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.create(null));
          const merged1 = Object.assign(merged);
          return closure_1_3(closure_1_0(closure_1_2[4]).GenericHeaderTitle, { title: children.children, icon: closure_1 });
        },
        headerLeft: closure_1_0(8531).getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(dependencyMap);
      let merged1 = Object.assign(closure_1_1(9980)());
      return obj;
    },
    children: <closure_4.Screen {...obj} />
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
  return <closure_4.Navigator name={screenKey} options={function options() {
    const obj = { title: closure_0, orientation: null };
    let str;
    if (obj2.isIOS()) {
      str = "portrait";
    }
    obj[1] = str;
    return obj;
  }}>{arg0.render}</closure_4.Navigator>;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/utils/ModalStackNavigator.tsx");

export default memoResult;