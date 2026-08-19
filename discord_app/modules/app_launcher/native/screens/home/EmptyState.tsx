// discord_app/modules/app_launcher/native/screens/home/EmptyState.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import AppLauncherEntrypoint from "../../../AppLauncherTypes.tsx";
import handleApplicationSelected from "../../AppLauncherNativeUtils.tsx";
import SvgComponentDefault from "../../images/HomeEmptyState.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { padding: 16, gap: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: ThemesDefault.radii.lg, alignItems: "center", justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/screens/home/EmptyState.tsx");

export default function EmptyState() {
  const tmp = callback3();
  let obj = handleApplicationSelected;
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(AppLauncherEntrypoint.AppLauncherEmptyStateType.HOME_EMPTY);
  const items = [callback(SvgComponentDefault, {}), ];
  obj = { style: tmp.textContainer, variant: "text-md/semibold", color: "text-default", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t["V7+xhH"]);
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
};