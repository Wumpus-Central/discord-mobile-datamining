// discord_app/modules/devtools/native/components/screens/DevToolsPerformanceTestingScreen.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import { ScrollView } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { useNavigation } from "../../../../../design/components/Navigator/native/useNavigation.native.tsx";
import { TableRowGroupTitle } from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { DevToolsScreens } from "../DevToolsScreens.tsx";

const require = arg1;
let obj = { container: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, padding: ThemesDefault.space.PX_16 };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function DevToolsPerformanceTestingScreen() {
  let obj = _useNavigation;
  _require = obj.useNavigation();
  obj = { style: callback().container, contentContainerStyle: null, children: null };
  obj = { paddingBottom: useSafeAreaInsetsDefault().bottom + ThemesDefault.space.PX_16 };
  obj[1] = obj;
  obj1 = { hasIcons: true, children: null };
  const entries = Object.entries(_DevToolsScreens.PerformanceTestingScreens);
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
  obj[2] = jsx(_TableRowGroupTitle.TableRowGroup, { hasIcons: true, children: null });
  return <ScrollView paddingBottom={useSafeAreaInsetsDefault().bottom + ThemesDefault.space.PX_16} />;
});
const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsPerformanceTestingScreen.tsx");

export default memoResult;