// === Module 11579: home/EmptyState ===

// Module 11579 (home/EmptyState)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4825 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8704 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11519 */;
import HomeEmptyStateDefault from "HomeEmptyState" /* 11580 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { padding: 16, gap: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center" }, textContainer: { textAlign: "center" } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/EmptyState.tsx");

export default function EmptyState() {
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
};