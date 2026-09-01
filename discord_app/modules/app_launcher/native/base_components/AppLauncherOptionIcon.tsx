// discord_app/modules/app_launcher/native/base_components/AppLauncherOptionIcon.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

noopAll;
createCacheKey = { iconWrapper: null };
createCacheKey = {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: ThemesDefault.radii.round,
};
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting(
  "modules/app_launcher/native/base_components/AppLauncherOptionIcon.tsx",
);

export default function AppLauncherOptionIcon(wrapperSize) {
  let num = wrapperSize.wrapperSize;
  if (num === undefined) {
    num = 32;
  }
  const obj = { style: null, children: null };
  const items = [createCacheKey().iconWrapper, wrapperSize.wrapperStyle, { height: num, width: num }];
  obj[0] = items;
  obj[1] = wrapperSize.icon;
  return <View style={null}>{null}</View>;
}
export const useAppLauncherOptionIconStyles = createCacheKey;
