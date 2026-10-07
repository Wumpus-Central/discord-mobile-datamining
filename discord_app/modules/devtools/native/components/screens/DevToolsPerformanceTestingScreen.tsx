// === Module 15621: DevToolsPerformanceTestingScreen ===

// Module 15621 (DevToolsPerformanceTestingScreen)
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14422 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsPerformanceTestingScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = navigation(576).c(9);
  const tmp4 = closure_6();
  let obj = navigation(576);
  navigation = navigation(1490).useNavigation();
  const sum = useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16;
  if (cResult[0] !== sum) {
    const obj3 = { paddingBottom: sum };
    cResult[0] = sum;
    cResult[1] = obj3;
    let tmp7 = obj3;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const _Object = Object;
    const entries = Object.entries(tmp(15424).PerformanceTestingScreens);
    cResult[2] = entries;
    let arr = entries;
  } else {
    arr = cResult[2];
  }
  if (cResult[3] !== navigation) {
    const obj4 = {
      hasIcons: true,
      children: arr.map((item) => {
          [screenKey, { headerTitle, Icon }] = item;
          return jsx(navigation(6000).TableRow, {
            label: headerTitle,
            icon: jsx(navigation(6000).TableRow.Icon, { IconComponent: Icon }),
            arrow: true,
            onPress() {
              if (null != navigation.push) {
                navigation.push(screenKey);
              } else {
                const obj2 = { screenKey };
                DevToolsNavigator.navigateToDevTools(obj2);
              }
            }
          }, screenKey);
        })
    };
    const tmp11 = jsx(tmp(6081).TableRowGroup, {
      hasIcons: true,
      children: arr.map((item) => {
          [screenKey, { headerTitle, Icon }] = item;
          return jsx(navigation(6000).TableRow, {
            label: headerTitle,
            icon: jsx(navigation(6000).TableRow.Icon, { IconComponent: Icon }),
            arrow: true,
            onPress() {
              if (null != navigation.push) {
                navigation.push(screenKey);
              } else {
                const obj2 = { screenKey };
                DevToolsNavigator.navigateToDevTools(obj2);
              }
            }
          }, screenKey);
        })
    });
    cResult[3] = navigation;
    cResult[4] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === tmp4.container) {
    if (cResult[6] === tmp7) {
      if (cResult[7] === tmp9) {
        let tmp12 = cResult[8];
      }
      return tmp12;
    }
  }
  const tmp13 = <ScrollView style={tmp4.container} contentContainerStyle={tmp7}>{tmp9}</ScrollView>;
  cResult[5] = tmp4.container;
  cResult[6] = tmp7;
  cResult[7] = tmp9;
  cResult[8] = tmp13;
  tmp12 = tmp13;
  let obj2 = navigation(1490);
}) : (() => {
  const tmp = closure_6();
  _require = require("useNavigation").useNavigation();
  let obj2 = { style: tmp.container, contentContainerStyle: null, children: null };
  let obj = require("useNavigation");
  obj2.contentContainerStyle = { paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 };
  const obj4 = { hasIcons: true, children: null };
  const entries = Object.entries(require("DevToolsScreens").PerformanceTestingScreens);
  obj4.children = entries.map((item) => {
    [tmp, ] = item;
    return jsx(screenKey(6000).TableRow, {
      label: tmp2,
      icon: jsx(screenKey(6000).TableRow.Icon, { IconComponent: tmp3 }),
      arrow: true,
      onPress() {
        if (null != screenKey.push) {
          screenKey.push(screenKey);
        } else {
          const obj2 = { screenKey };
          DevToolsNavigator.navigateToDevTools(obj2);
        }
      }
    }, tmp);
  });
  obj2.children = jsx(require("TableRowGroup").TableRowGroup, { hasIcons: true, children: null });
  return <ScrollView style={tmp.container} contentContainerStyle={null}>{null}</ScrollView>;
}));