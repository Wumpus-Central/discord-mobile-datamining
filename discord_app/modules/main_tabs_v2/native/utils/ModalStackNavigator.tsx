// === Module 9635: ModalStackNavigator ===

// Module 9635 (ModalStackNavigator)
import Navigator from "Navigator" /* 6687 */;
import HeaderShared from "HeaderShared" /* 9297 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 9636 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["children"];
const jsx = fn(21).jsx;
const NativeStackNavigator = fn(9344);
let closure_6 = NativeStackNavigator.createNativeStackNavigator();
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/ModalStackNavigator.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ModalStackNavigator(titleIcon) {
  const cResult = title(accessibilityNativeStackOptions[5]).c(13);
  ({ screenKey, title } = titleIcon);
  titleIcon = titleIcon.titleIcon;
  const render = titleIcon.render;
  let obj = title(accessibilityNativeStackOptions[5]);
  accessibilityNativeStackOptions = title(accessibilityNativeStackOptions[6]).useAccessibilityNativeStackOptions();
  if (cResult[0] === accessibilityNativeStackOptions) {
    if (cResult[1] === titleIcon) {
      let tmp3 = cResult[2];
    }
    if (cResult[3] !== title) {
      const fn2 = function v() {
        const obj = { title, orientation: null };
        let str;
        if (obj2.isIOS()) {
          str = "portrait";
        }
        obj.orientation = str;
        return obj;
      };
      cResult[3] = title;
      cResult[4] = fn2;
      let tmp4 = fn2;
    } else {
      tmp4 = cResult[4];
    }
    if (cResult[5] === render) {
      if (cResult[6] === screenKey) {
        if (cResult[7] === tmp4) {
          let tmp5 = cResult[8];
        }
        if (cResult[9] === screenKey) {
          if (cResult[10] === tmp3) {
            if (cResult[11] === tmp5) {
              let tmp9 = cResult[12];
            }
            return tmp9;
          }
        }
        const obj3 = { initialRouteName: screenKey, screenOptions: tmp3, children: tmp5 };
        const tmp12 = <closure_6.Navigator initialRouteName={screenKey} screenOptions={tmp3}>{tmp5}</closure_6.Navigator>;
        cResult[9] = screenKey;
        cResult[10] = tmp3;
        cResult[11] = tmp5;
        cResult[12] = tmp12;
        tmp9 = tmp12;
      }
    }
    const obj4 = { name: screenKey, children: render, options: tmp4 };
    const tmp8 = <closure_6.Screen name={screenKey} options={tmp4}>{render}</closure_6.Screen>;
    cResult[5] = render;
    cResult[6] = screenKey;
    cResult[7] = tmp4;
    cResult[8] = tmp8;
    tmp5 = tmp8;
  }
  const fn = function s(navigation) {
    const obj = {
      headerTitle(children) {
        const merged = Object.assign(_objectWithoutProperties(children, closure_2_3));
        return jsx(title(accessibilityNativeStackOptions[7]).GenericHeaderTitle, { title: children.children, icon });
      },
      headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
      headerTitleAlign: "center"
    };
    let merged = Object.assign(accessibilityNativeStackOptions);
    const merged1 = Object.assign(getNavigationModalPresentationDefault());
    return obj;
  };
  cResult[0] = accessibilityNativeStackOptions;
  cResult[1] = titleIcon;
  cResult[2] = fn;
  tmp3 = fn;
  const obj2 = title(accessibilityNativeStackOptions[6]);
}) : (function ModalStackNavigator(children) {
  ({ screenKey, title: require, titleIcon: importDefault } = children);
  dependencyMap = Navigator.useAccessibilityNativeStackOptions();
  const obj2 = {
    initialRouteName: screenKey,
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return jsx(title(closure_2[7]).GenericHeaderTitle, { title: children.children, icon });
        },
        headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(closure_2);
      let merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    },
    children: <closure_6.Screen name={screenKey} options={function options() {
      const obj = { title, orientation: null };
      let str;
      if (obj2.isIOS()) {
        str = "portrait";
      }
      obj.orientation = str;
      return obj;
    }}>{children.render}</closure_6.Screen>
  };
  return <closure_6.Navigator initialRouteName={screenKey} screenOptions={function screenOptions(navigation) {
    const obj = {
      headerTitle(children) {
        const merged = Object.assign(children, Object.assign({ children: 0 }));
        const merged1 = Object.assign(merged);
        return jsx(title(closure_2[7]).GenericHeaderTitle, { title: children.children, icon });
      },
      headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
      headerTitleAlign: "center"
    };
    let merged = Object.assign(closure_2);
    let merged1 = Object.assign(getNavigationModalPresentationDefault());
    return obj;
  }}><closure_6.Screen name={screenKey} options={function options() {
    const obj = { title, orientation: null };
    let str;
    if (obj2.isIOS()) {
      str = "portrait";
    }
    obj.orientation = str;
    return obj;
  }}>{children.render}</closure_6.Screen></closure_6.Navigator>;
}));