// discord_app/modules/channel_list_v2/native/components/Divider.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";

let closure_4 = createCacheKey.createStyles((arg0) => {
  const colors = Themes.colors;
  let obj = { height: 1, backgroundColor: arg0 ? colors.BORDER_SUBTLE : colors.BORDER_MUTED, marginTop: 8, marginBottom: 8 };
  obj = { divider: null };
  const merged = Object.assign(arg0 ? { marginHorizontal: 16 } : {});
  obj[0] = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/channel_list_v2/native/components/Divider.tsx");

export default function Divider() {
  return <View style={callback(useIsMobileVisualRefreshExperimentEnabled("Divider")).divider} />;
};
export const DIVIDER_MARGIN_TOP = 8;
export const DIVIDER_MARGIN_BOTTOM = 8;
export const DIVIDER_HEIGHT = 17;
export const DIVIDER_MARGIN_HORIZONTAL = 16;