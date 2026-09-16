// === Module 15845: DevToolsPerformanceTestingScreen ===

// Module 15845 (DevToolsPerformanceTestingScreen)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14695 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 } };
let closure_5 = createStyles.createStyles(obj);
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsPerformanceTestingScreen.tsx");

export default noop.memo(function DevToolsPerformanceTestingScreen() {
  const tmp = closure_5();
  _require = require("useNavigation").useNavigation();
  let obj2 = { style: tmp.container, contentContainerStyle: null, children: null };
  let obj = require("useNavigation");
  obj2.contentContainerStyle = { paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 };
  const obj4 = { hasIcons: true, children: null };
  const entries = Object.entries(require("DevToolsScreens").PerformanceTestingScreens);
  obj4.children = entries.map((item) => {
    [tmp, ] = item;
    return jsx(screenKey(5691).TableRow, {
      label: tmp2,
      icon: jsx(screenKey(5691).TableRow.Icon, { IconComponent: tmp3 }),
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
});