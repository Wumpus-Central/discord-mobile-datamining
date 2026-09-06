// === Module 12113: NoPermsState ===

// Module 12113 (NoPermsState)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import shared from "shared" /* 4411 */;
import useThemeDefault from "useTheme" /* 4495 */;
import Text_Text from "Text/Text" /* 4556 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 12051 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, textContainer: null, image: null };
createStyles = { paddingVertical: 16, paddingHorizontal: 24, gap: 12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "flex-start", display: "flex", flexDirection: "row" };
createStyles.container = createStyles;
createStyles.textContainer = { flexShrink: 1 };
createStyles.image = { width: 64, height: 64 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/NoPermsState.tsx");

export default function EmptyState() {
  const tmp = closure_7();
  let obj = shared;
  const tmp4Result = importDefault(obj.isThemeLight(useThemeDefault()) ? 12114 : 12115);
  const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(tmp2(9409).AppLauncherEmptyStateType.HOME_NO_PERMISSIONS);
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.image, resizeMode: "contain", source: tmp4Result };
  const items = [hasOwnProperty(React4, obj), ];
  const obj1 = { style: tmp.textContainer, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = tmp2(1114).intl;
  obj1.children = intl.string(util.t.uDnXXj);
  items[1] = hasOwnProperty(Text_Text.Text, obj1);
  obj.children = items;
  return timestampProducer(React3, obj);
};