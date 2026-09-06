// === Module 10924: ModalStackNavigator ===

// Module 10924 (ModalStackNavigator)
import Navigator from "Navigator" /* 7000 */;
import HeaderShared from "HeaderShared" /* 7863 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10925 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const NativeStackNavigator = fn(7913);
let closure_4 = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/ModalStackNavigator.tsx");

export default noop.memo(function ModalStackNavigator(children) {
  ({ screenKey, title: require, titleIcon: importDefault } = children);
  let obj = Navigator;
  dependencyMap = obj.useAccessibilityNativeStackOptions();
  obj = {
    initialRouteName: screenKey,
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return jsx(title(closure_2[4]).GenericHeaderTitle, { title: children.children, icon });
        },
        headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(closure_2);
      let merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    },
    children: null
  };
  obj = {
    name: screenKey,
    children: children.render,
    options() {
      const obj = { title, orientation: null };
      let str;
      if (obj2.isIOS()) {
        str = "portrait";
      }
      obj.orientation = str;
      return obj;
    }
  };
  obj.children = <closure_4.Screen name={screenKey} options={function options() {
    const obj = { title, orientation: null };
    let str;
    if (obj2.isIOS()) {
      str = "portrait";
    }
    obj.orientation = str;
    return obj;
  }}>{children.render}</closure_4.Screen>;
  return <closure_4.Navigator name={screenKey} options={function options() {
    const obj = { title, orientation: null };
    let str;
    if (obj2.isIOS()) {
      str = "portrait";
    }
    obj.orientation = str;
    return obj;
  }}>{children.render}</closure_4.Navigator>;
});