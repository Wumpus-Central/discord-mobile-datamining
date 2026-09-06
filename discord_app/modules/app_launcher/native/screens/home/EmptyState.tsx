// === Module 12111: home/EmptyState ===

// Module 12111 (home/EmptyState)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import AppLauncherTypes from "AppLauncherTypes" /* 9409 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 12051 */;
import HomeEmptyStateDefault from "HomeEmptyState" /* 12112 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, textContainer: null };
createStyles = { padding: 16, gap: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center" };
createStyles.container = createStyles;
createStyles.textContainer = { textAlign: "center" };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/EmptyState.tsx");

export default function EmptyState() {
  const tmp = closure_6();
  let obj = AppLauncherNativeUtils;
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.HOME_EMPTY);
  obj = { style: tmp.container, children: null };
  const items = [React4(HomeEmptyStateDefault, {}), ];
  obj = { style: tmp.textContainer, variant: "text-md/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["V7+xhH"]);
  items[1] = React4(Text_Text.Text, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
};