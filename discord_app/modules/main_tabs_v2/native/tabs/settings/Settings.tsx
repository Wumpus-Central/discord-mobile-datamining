// discord_app/modules/main_tabs_v2/native/tabs/settings/Settings.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexportDefault from "../../../../reanimated/ReanimatedRexport.tsx";
import DeviceUtils from "../../../../../utils/native/DeviceUtils.tsx";
import useIsWindowLargeDefault from "../../../../screen/native/useIsWindowLarge.tsx";
import profileModalTransition from "../../../../user_profile/native/profileModalTransition.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = {
  containerOuter: { flex: 1, overflow: "hidden" },
  containerOuterTablet: null,
  container: null,
  containerTablet: null,
};
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  flex: 1,
};
createStyles.containerOuterTablet = createStyles;
createStyles.container = { flex: 1 };
createStyles.containerTablet = { borderRadius: nativeDefault.radii.md, overflow: "hidden", flex: 1 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/settings/Settings.tsx");

export default function Settings() {
  let obj = profileModalTransition;
  const reportProfileModalTransition = obj.useReportProfileModalTransition();
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
  obj = {
    style: noop.useMemo(() => {
      if (closure_3) {
        const items = [tmp.containerOuterTablet];
        let obj = { paddingTop: top, paddingLeft: left, paddingRight: right };
        items[1] = obj;
        let items1 = items;
      } else {
        items1 = [tmp.containerOuter];
        obj = { paddingLeft: left, paddingRight: right };
        items1[1] = obj;
      }
      return items1;
    }, items),
    children: null,
  };
  obj = { style: tmp5 ? tmp6.containerTablet : tmp6.container, children: tmp7(tmp4(16903), {}) };
  obj.children = jsx(ReanimatedRexportDefault.View, {
    style: tmp5 ? tmp6.containerTablet : tmp6.container,
    children: tmp7(tmp4(16903), {}),
  });
  return <View style={tmp5 ? tmp6.containerTablet : tmp6.container}>{tmp7(tmp4(16903), {})}</View>;
}
