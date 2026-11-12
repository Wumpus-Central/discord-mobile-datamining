// === Module 19576: Settings ===

// Module 19576 (Settings)
import nativeDefault from "native" /* 575 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5243);
let obj2 = { containerOuter: { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, containerOuterTablet: null, container: null, containerTablet: null };
let obj3 = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.containerOuterTablet = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, flex: 1 };
obj2.container = { flex: 1 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, flex: 1 };
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
  items = [tmp7, tmp5, tmp6, top, left, right];
  let obj2 = { style: tmp6 ? tmp7.containerTablet : tmp7.container, children: null };
  const memo = noop.useMemo(() => {
    if (closure_3) {
      if (obj.isIpadOS()) {
        containerOuter = containerOuter.containerOuter;
      }
      return containerOuter;
    }
    if (closure_4) {
      items = [tmp3.containerOuterTablet, ];
      const obj2 = { paddingTop: top, paddingLeft: left, paddingRight: right };
      items[1] = obj2;
      containerOuter = items;
    } else {
      containerOuter = [tmp3.containerOuter, ];
      const obj3 = { paddingLeft: left, paddingRight: right };
      containerOuter[1] = obj3;
    }
  }, items);
  obj2.children = containerOuter(left(right[9]), {});
  const tmp9Result = containerOuter(closure_4, obj2);
  const obj = top(right[5]);
  let obj3 = { style: null, children: null };
  if (tmpResult2.isDuo()) {
    const obj4 = { children: null };
    obj3.style = tmp7.containerOuter;
    obj3.children = tmp9Result;
    obj4.children = tmp9(tmp10, obj3);
    let tmp9Result2 = tmp9(tmp4(tmp2[10]), obj4);
    const tmp4Result = tmp4(tmp2[10]);
  } else {
    obj3.style = memo;
    obj3.children = tmp9Result;
    tmp9Result2 = tmp9(tmp10, obj3);
  }
  return tmp9Result2;
};