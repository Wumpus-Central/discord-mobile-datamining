// === Module 16692: Settings ===

// Module 16692 (Settings)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4563 */;
import DeviceUtils from "DeviceUtils" /* 4808 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6359 */;
import profileModalTransition from "profileModalTransition" /* 16570 */;
import SettingsNavigatorDefault from "SettingsNavigator" /* 16693 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj2 = { containerOuter: { flex: 1, overflow: "hidden" }, containerOuterTablet: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, flex: 1 }, container: { flex: 1 }, containerTablet: null };
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, flex: 1 };
obj2.containerTablet = { borderRadius: nativeDefault.radii.md, overflow: "hidden", flex: 1 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/settings/Settings.tsx");

export default function Settings() {
  const reportProfileModalTransition = profileModalTransition.useReportProfileModalTransition();
  const rect = useSafeAreaInsetsDefault();
  const top = rect.top;
  const left = rect.left;
  const right = rect.right;
  let tmp5 = useIsWindowLargeDefault();
  if (tmp5) {
    tmp5 = !DeviceUtils.isIpadOS();
    const tmpResult = DeviceUtils;
  }
  closure_3 = tmp5;
  const tmp6 = closure_6();
  closure_4 = tmp6;
  let items = [tmp6, tmp5, top, left, right];
  let obj2 = {
    style: noop.useMemo(() => {
      if (closure_3) {
        const items = [closure_4.containerOuterTablet, ];
        const obj2 = { paddingTop: top, paddingLeft: left, paddingRight: right };
        items[1] = obj2;
        let items1 = items;
      } else {
        items1 = [closure_4.containerOuter, ];
        const obj = { paddingLeft: left, paddingRight: right };
        items1[1] = obj;
      }
      return items1;
    }, items),
    children: null
  };
  obj2.children = jsx(ReanimatedRexportDefault.View, { style: tmp5 ? tmp6.containerTablet : tmp6.container, children: jsx(SettingsNavigatorDefault, {}) });
  return <View style={noop.useMemo(() => {
    if (closure_3) {
      const items = [closure_4.containerOuterTablet, ];
      const obj2 = { paddingTop: top, paddingLeft: left, paddingRight: right };
      items[1] = obj2;
      let items1 = items;
    } else {
      items1 = [closure_4.containerOuter, ];
      const obj = { paddingLeft: left, paddingRight: right };
      items1[1] = obj;
    }
    return items1;
  }, items)}>{null}</View>;
};