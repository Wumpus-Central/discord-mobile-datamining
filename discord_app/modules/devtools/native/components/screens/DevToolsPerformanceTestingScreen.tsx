// discord_app/modules/devtools/native/components/screens/DevToolsPerformanceTestingScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import DevToolsNavigator from "../DevToolsNavigator.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { container: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
obj.container = obj;
let closure_5 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/devtools/native/components/screens/DevToolsPerformanceTestingScreen.tsx",
);

export default noop.memo(function DevToolsPerformanceTestingScreen() {
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  obj = { style: closure_5().container, contentContainerStyle: null, children: null };
  obj = { paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 };
  obj.contentContainerStyle = obj;
  const obj1 = { hasIcons: true, children: null };
  const entries = Object.entries(require("DevToolsScreens").PerformanceTestingScreens);
  obj1.children = entries.map((item) => {
    [tmp] = item;
    return jsx(
      screenKey(5605).TableRow,
      {
        label: tmp2,
        icon: jsx(screenKey(5605).TableRow.Icon, { IconComponent: tmp3 }),
        arrow: true,
        onPress() {
          let arr = screenKey;
          if (null != screenKey.push) {
            arr = arr.push(screenKey);
          } else {
            const obj = { screenKey };
            obj.navigateToDevTools(obj);
          }
        },
      },
      tmp,
    );
  });
  obj.children = jsx(require("TableRowGroup").TableRowGroup, { hasIcons: true, children: null });
  return <ScrollView paddingBottom={useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16} />;
});
