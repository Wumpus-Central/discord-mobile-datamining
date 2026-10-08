// === Module 11815: home/EmptyState ===

// Module 11815 (home/EmptyState)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5086 */;
import AppLauncherTypes from "AppLauncherTypes" /* 11233 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11744 */;
import HomeEmptyStateDefault from "HomeEmptyState" /* 11816 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { padding: 16, gap: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center" }, textContainer: { textAlign: "center" } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { padding: 16, gap: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/EmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyState() {
  const cResult = c.c(7);
  const tmp4 = closure_6();
  const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.HOME_EMPTY);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = React4(HomeEmptyStateDefault, {});
    cResult[0] = tmp9;
    let first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["V7+xhH"]);
    cResult[1] = stringResult;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] !== tmp4.textContainer) {
    const obj3 = { style: tmp4.textContainer, variant: "text-md/semibold", color: "text-default", children: tmp10 };
    const tmp14 = React4(Text_Text.Text, obj3);
    cResult[2] = tmp4.textContainer;
    cResult[3] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === tmp4.container) {
    if (cResult[5] === tmp12) {
      let tmp15 = cResult[6];
    }
    return tmp15;
  }
  const obj4 = { style: tmp4.container, children: null };
  const items = [first, tmp12];
  obj4.children = items;
  const tmp16 = hasOwnProperty(View, obj4);
  cResult[4] = tmp4.container;
  cResult[5] = tmp12;
  cResult[6] = tmp16;
  tmp15 = tmp16;
}) : (function EmptyState() {
  const tmp = closure_6();
  const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.HOME_EMPTY);
  const obj2 = { style: tmp.container, children: null };
  const items = [React4(HomeEmptyStateDefault, {}), ];
  const obj3 = { style: tmp.textContainer, variant: "text-md/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["V7+xhH"]);
  items[1] = React4(Text_Text.Text, obj3);
  obj2.children = items;
  return hasOwnProperty(View, obj2);
});