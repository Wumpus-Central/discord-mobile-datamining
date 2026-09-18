// === Module 12355: NoPermsState ===

// Module 12355 (NoPermsState)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import shared from "shared" /* 4573 */;
import useThemeDefault from "useTheme" /* 4656 */;
import Text_Text from "Text/Text" /* 4718 */;
import AppLauncherTypes from "AppLauncherTypes" /* 9647 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 12293 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4722);
let obj2 = { container: { paddingVertical: 16, paddingHorizontal: 24, gap: 12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "flex-start", display: "flex", flexDirection: "row" }, textContainer: { flexShrink: 1 }, image: { width: 64, height: 64 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/NoPermsState.tsx");

export default function EmptyState() {
  const tmp = closure_7();
  const tmp4Result = importDefault(shared.isThemeLight(useThemeDefault()) ? 12356 : 12357);
  const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.HOME_NO_PERMISSIONS);
  const obj2 = { style: tmp.container, children: null };
  const items = [hasOwnProperty(React4, { style: tmp.image, resizeMode: "contain", source: tmp4Result }), ];
  const obj4 = { style: tmp.textContainer, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.uDnXXj);
  items[1] = hasOwnProperty(Text_Text.Text, obj4);
  obj2.children = items;
  return timestampProducer(React3, obj2);
};