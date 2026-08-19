// discord_app/modules/main_tabs_v2/native/utils/ModalStackNavigator.tsx
import NavigationStack from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import GenericHeaderTitle from "../shared_components/HeaderShared.tsx";
import getNavigationModalPresentationDefault from "getNavigationModalPresentation.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createNativeStackNavigator from "../../../../../_runtime/09931_createNativeStackNavigator.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

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