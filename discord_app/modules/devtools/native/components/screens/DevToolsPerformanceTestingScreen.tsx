// discord_app/modules/devtools/native/components/screens/DevToolsPerformanceTestingScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import DevToolsNavigator from "../DevToolsNavigator.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let obj = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 },
};
let closure_5 = createStyles.createStyles(obj);
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/devtools/native/components/screens/DevToolsPerformanceTestingScreen.tsx",
);

export default noop.memo(function DevToolsPerformanceTestingScreen() {
  const tmp = closure_5();
  _require = require("useNavigation").useNavigation();
  let obj2 = { style: tmp.container, contentContainerStyle: null, children: null };
  let obj = require("useNavigation");
  obj2.contentContainerStyle = { paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 };
  const obj4 = { hasIcons: true, children: null };
  const entries = Object.entries(require("DevToolsScreens").PerformanceTestingScreens);
  obj4.children = entries.map((item) => {
    [tmp] = item;
    return jsx(
      screenKey(5908).TableRow,
      {
        label: tmp2,
        icon: jsx(screenKey(5908).TableRow.Icon, { IconComponent: tmp3 }),
        arrow: true,
        onPress() {
          if (null != screenKey.push) {
            screenKey.push(screenKey);
          } else {
            const obj2 = { screenKey };
            DevToolsNavigator.navigateToDevTools(obj2);
          }
        },
      },
      tmp,
    );
  });
  obj2.children = jsx(require("TableRowGroup").TableRowGroup, { hasIcons: true, children: null });
  return (
    <ScrollView style={tmp.container} contentContainerStyle={null}>
      {null}
    </ScrollView>
  );
});
