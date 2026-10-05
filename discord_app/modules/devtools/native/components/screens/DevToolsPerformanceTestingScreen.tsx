// === Module 15607: DevToolsPerformanceTestingScreen ===

// Module 15607 (DevToolsPerformanceTestingScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14406 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, navigation;

let obj2;
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let arr;
  let tmp7;
  let tmp9;
  const tmp = navigation;
  let obj = navigation(576);
  const cResult = obj.c(9);
  const tmp4 = closure_6();
  let obj2 = navigation(1490);
  navigation = obj2.useNavigation();
  const container = tmp4.container;
  const sum = useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16;
  if (cResult[0] !== sum) {
    const obj3 = { paddingBottom: sum };
    cResult[0] = sum;
    cResult[1] = obj3;
    tmp7 = obj3;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const _Object = Object;
    const entries = Object.entries(tmp(15408).PerformanceTestingScreens);
    cResult[2] = entries;
    arr = entries;
  } else {
    arr = cResult[2];
  }
  if (cResult[3] !== navigation) {
    const TableRowGroup = tmp(6074).TableRowGroup;
    const tmp11 = <TableRowGroup hasIcons>{arr.map((item) => {
      let Icon;
      let headerTitle;
      let screenKey;
      [screenKey, { headerTitle, Icon }] = item;
      const TableRow = navigation(dependencyMap[12]).TableRow;
      return <TableRow key={screenKey} label={headerTitle} icon={null} arrow onPress={function onPress() {
        if (null != navigation.push) {
          navigation.push(screenKey);
        } else {
          const obj2 = { screenKey };
          const obj = DevToolsNavigator;
          obj.navigateToDevTools(obj2);
        }
      }} />;
    })}</TableRowGroup>;
    cResult[3] = navigation;
    cResult[4] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === tmp4.container) {
    if (cResult[6] === tmp7) {
      let tmp12;
      if (cResult[7] === tmp9) {
        tmp12 = cResult[8];
      }
      return tmp12;
    }
  }
  const tmp13 = <ScrollView style={container} contentContainerStyle={tmp7}>{tmp9}</ScrollView>;
  cResult[5] = tmp4.container;
  cResult[6] = tmp7;
  cResult[7] = tmp9;
  cResult[8] = tmp13;
  tmp12 = tmp13;
}) : (() => {
  let closure_0;
  let entries;
  const tmp = closure_6();
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  ({
    hasIcons: true,
    children: entries.map((item) => {
      let tmp;
      [tmp, ] = item;
      const TableRow = screenKey(dependencyMap[12]).TableRow;
      return <TableRow key={tmp} label={tmp2} icon={null} arrow onPress={function onPress() {
        if (null != screenKey.push) {
          screenKey.push(screenKey);
        } else {
          const obj2 = { screenKey };
          const obj = DevToolsNavigator;
          obj.navigateToDevTools(obj2);
        }
      }} />;
    })
  });
  ({ paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 });
  const TableRowGroup = require("TableRowGroup").TableRowGroup;
  entries = Object.entries(require("DevToolsScreens").PerformanceTestingScreens);
  return <ScrollView style={tmp.container} contentContainerStyle={{ paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 }}>{null}</ScrollView>;
}));
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsPerformanceTestingScreen.tsx");

export default memoResult;