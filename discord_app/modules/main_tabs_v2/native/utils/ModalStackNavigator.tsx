// === Module 9930: ? ===

// Module 9930
import NavigationStack from "NavigationStack" /* 6312 */;
import GenericHeaderTitle from "GenericHeaderTitle" /* 8492 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 9941 */;
import { jsx } from "jsxProd" /* 21 */;
import createNativeStackNavigator from "createNativeStackNavigator" /* 9931 */;
import importAllResult from "noop" /* 19 */;

require = fn;
let closure_4 = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo(function ModalStackNavigator(children) {
  ({ screenKey, title: require, titleIcon: importDefault } = children);
  let obj = NavigationStack;
  dependencyMap = obj.useAccessibilityNativeStackOptions();
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
  }}>{children.render}</closure_4.Navigator>;
});
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/utils/ModalStackNavigator.tsx");

export default memoResult;