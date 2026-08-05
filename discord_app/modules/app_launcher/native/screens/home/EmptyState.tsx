// discord_app/modules/app_launcher/native/screens/home/EmptyState.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { AppLauncherEntrypoint } from "../../../AppLauncherTypes.tsx";
import { handleApplicationSelected } from "../../AppLauncherNativeUtils.tsx";
import { SvgComponent } from "../../images/HomeEmptyState.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, textContainer: null };
createCacheKey = { padding: 16, gap: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.lg, alignItems: "center", justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/screens/home/EmptyState.tsx");

export default function EmptyState() {
  const tmp = createCacheKey();
  let obj = handleApplicationSelected /* handleApplicationSelected */;
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(AppLauncherEntrypoint /* AppLauncherEntrypoint */.AppLauncherEmptyStateType.HOME_EMPTY);
  obj = { style: tmp.container, children: null };
  const items = [callback(SvgComponent, {}), ];
  obj = { style: tmp.textContainer, variant: "text-md/semibold", color: "text-default", children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[3] = intl.string(getSystemLocale /* getSystemLocale */.t["V7+xhH"]);
  items[1] = callback(Text /* Text */.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
};