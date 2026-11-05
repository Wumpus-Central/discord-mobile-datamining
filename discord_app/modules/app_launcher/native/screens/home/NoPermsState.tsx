// === Module 12668: NoPermsState ===

// Module 12668 (NoPermsState)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import shared from "shared" /* 5150 */;
import useThemeDefault from "useTheme" /* 5379 */;
import Text_Text from "Text/Text" /* 5763 */;
import FastImageDefault from "FastImage" /* 5854 */;
import AppLauncherTypes from "AppLauncherTypes" /* 11699 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 12604 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5143);
let obj2 = { container: { paddingVertical: 16, paddingHorizontal: 24, gap: 12, backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "flex-start", display: "flex", flexDirection: "row" }, textContainer: { flexShrink: 1 }, image: { width: 64, height: 64 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/NoPermsState.tsx");

export default function EmptyState() {
  const tmp = closure_6();
  const tmp4Result = importDefault(shared.isThemeLight(useThemeDefault()) ? 12669 : 12670);
  const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.HOME_NO_PERMISSIONS);
  const obj2 = { style: tmp.container, children: null };
  items = [React4(FastImageDefault, { style: tmp.image, resizeMode: "contain", source: tmp4Result }), ];
  const obj4 = { style: tmp.textContainer, variant: "body-sm/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.uDnXXj);
  items[1] = React4(Text_Text.Text, obj4);
  obj2.children = items;
  return hasOwnProperty(View, obj2);
};