// === Module 15351: ? ===

// Module 15351
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
let obj = { container: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, padding: ThemesDefault.space.PX_16 };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function DevToolsPerformanceTestingScreen() {
  let obj = _require(1500);
  _require = obj.useNavigation();
  obj = { style: callback().container, contentContainerStyle: null, children: null };
  obj = { paddingBottom: useSafeAreaInsetsDefault().bottom + ThemesDefault.space.PX_16 };
  obj[1] = obj;
  obj1 = { hasIcons: true, children: null };
  const entries = Object.entries(_require(14125).PerformanceTestingScreens);
  obj1[1] = entries.map((arg0) => {
    [tmp, ] = arg0;
    return closure_1_4(callback(closure_1_2[9]).TableRow, {
      label: tmp2,
      icon: closure_1_4(callback(closure_1_2[9]).TableRow.Icon, { IconComponent: tmp3 }),
      arrow: true,
      onPress() {
        let arr = closure_1_0;
        if (null != closure_1_0.push) {
          arr = arr.push(callback);
        } else {
          let obj = callback(closure_2_2[10]);
          obj = { screenKey: null };
          obj[0] = callback;
          obj.navigateToDevTools(obj);
        }
      }
    }, tmp);
  });
  obj[2] = jsx(_require(5939).TableRowGroup, { hasIcons: true, children: null });
  return <ScrollView paddingBottom={useSafeAreaInsetsDefault().bottom + ThemesDefault.space.PX_16} />;
});
const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsPerformanceTestingScreen.tsx");

export default memoResult;