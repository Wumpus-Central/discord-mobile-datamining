// === Module 11462: Divider ===

// Module 11462 (Divider)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

noopAll;
let closure_4 = createCacheKey.createStyles((arg0) => {
  const colors = ThemesDefault.colors;
  const obj = { divider: null };
  const merged = Object.assign(arg0 ? { marginHorizontal: 16 } : {});
  obj[0] = obj;
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/channel_list_v2/native/components/Divider.tsx");

export default function Divider() {
  return <View style={callback(useIsMobileVisualRefreshExperimentEnabledDefault("Divider")).divider} />;
};
export const DIVIDER_MARGIN_TOP = 8;
export const DIVIDER_MARGIN_BOTTOM = 8;
export const DIVIDER_HEIGHT = 17;
export const DIVIDER_MARGIN_HORIZONTAL = 16;