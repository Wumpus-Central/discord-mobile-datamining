// discord_app/modules/main_tabs_v2/native/tabs/settings/Settings.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj2 = {
  containerOuter: { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND },
  containerOuterTablet: null,
  container: null,
  containerTablet: null,
};
let obj3 = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.containerOuterTablet = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  flex: 1,
};
obj2.container = { flex: 1 };
const obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  flex: 1,
};
obj2.containerTablet = { borderRadius: nativeDefault.radii.md, overflow: "hidden", flex: 1 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/settings/Settings.tsx");

export default function Settings() {
  const reportProfileModalTransition = top(right[5]).useReportProfileModalTransition();
  const rect = left(right[6])();
  top = rect.top;
  left = rect.left;
  right = rect.right;
  const tmp5 = left(right[7])();
  noop = tmp5;
  let tmp6 = tmp5;
  if (tmp5) {
    tmp6 = !tmp(tmp2[8]).isIpadOS();
    const tmpResult = tmp(tmp2[8]);
  }
  closure_4 = tmp6;
  const tmp7 = closure_6();
  let containerOuter = tmp7;
  let items = [tmp7, tmp5, tmp6, top, left, right];
  let obj2 = {
    style: noop.useMemo(() => {
      if (closure_3) {
        if (obj.isIpadOS()) {
          containerOuter = containerOuter.containerOuter;
        }
        return containerOuter;
      }
      if (closure_4) {
        const items = [tmp3.containerOuterTablet];
        const obj2 = { paddingTop: top, paddingLeft: left, paddingRight: right };
        items[1] = obj2;
        containerOuter = items;
      } else {
        containerOuter = [tmp3.containerOuter];
        const obj3 = { paddingLeft: left, paddingRight: right };
        containerOuter[1] = obj3;
      }
    }, items),
    children: null,
  };
  const obj = top(right[5]);
  tmp = top;
  obj2.children = containerOuter(closure_4, {
    style: tmp6 ? tmp7.containerTablet : tmp7.container,
    children: containerOuter(left(right[9]), {}),
  });
  return containerOuter(closure_4, obj2);
}
