// discord_app/modules/app_launcher/native/screens/home/NoPermsState.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import AccessibilityAnnouncer from "../../../../../design/shared.tsx";
import useThemeDefault from "../../../../../hooks/useTheme.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import AppLauncherEntrypoint from "../../../AppLauncherTypes.tsx";
import handleApplicationSelected from "../../AppLauncherNativeUtils.tsx";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
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