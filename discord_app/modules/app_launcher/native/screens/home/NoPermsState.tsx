// === Module 11290: EmptyState ===

// Module 11290 (EmptyState)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import useThemeDefault from "useTheme" /* 4310 */;
import Text from "Text" /* 4734 */;
import AppLauncherEntrypoint from "AppLauncherEntrypoint" /* 9566 */;
import handleApplicationSelected from "handleApplicationSelected" /* 11224 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { paddingVertical: 16, paddingHorizontal: 24, gap: 12, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.lg, alignItems: "center", justifyContent: "flex-start", display: "flex", flexDirection: "row" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexShrink: 1 };
createCacheKey[2] = { width: 64, height: 64 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/screens/home/NoPermsState.tsx");

export default function EmptyState() {
  const tmp = callback3();
  let obj = AccessibilityAnnouncer;
  const tmp4Result = importDefault(obj.isThemeLight(useThemeDefault()) ? 11291 : 11292);
  const logAppLauncherEmptyStateView = handleApplicationSelected.useLogAppLauncherEmptyStateView(AppLauncherEntrypoint.AppLauncherEmptyStateType.HOME_NO_PERMISSIONS);
  obj = { style: tmp.image, resizeMode: "contain", source: tmp4Result };
  const items = [callback(closure_4, obj), ];
  obj1 = { style: tmp.textContainer, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj1[3] = intl.string(getSystemLocale.t.uDnXXj);
  items[1] = callback(Text.Text, obj1);
  obj[1] = items;
  return callback2(closure_3, obj);
};