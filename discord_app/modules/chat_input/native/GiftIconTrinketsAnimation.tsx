// === Module 11413: GiftIconTrinketsAnimation ===

// Module 11413 (GiftIconTrinketsAnimation)
import obj132 from "obj132" /* 500 */;
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabled from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import isNullOrEmpty from "isNullOrEmpty" /* 1903 */;
import map from "map" /* 4097 */;
import MINIMUM_HIT_AREA from "MINIMUM_HIT_AREA" /* 4749 */;
import preloadDefault from "preload" /* 5449 */;
import useAPNGPlayerControls from "useAPNGPlayerControls" /* 9217 */;
import { View } from "get ActivityIndicator" /* 17 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = fn;
let closure_6 = createCacheKey.createStyles((width) => {
  width = MINIMUM_HIT_AREA.SMALL_BUTTON_HEIGHT + MINIMUM_HIT_AREA.SMALL_BUTTON_PADDING + 2;
  const containerRefresh = { position: "absolute", top: 0, left: 0, width, height: width, overflow: "visible", marginLeft: 0, zIndex: 0 };
  return { container: { position: "absolute", top: 0, left: 0, width, height: width, overflow: "visible", marginLeft: 4, zIndex: 0 }, containerRefresh, trinkets: { zIndex: 4, position: "absolute", pointerEvents: "none", width: "100%", height: "100%", top: 0, left: 0 }, trinketsRefresh: { zIndex: 4, position: "absolute", pointerEvents: "none", width: "175%", height: "175%", top: "-37.5%", left: "-37.5%" } };
});
const memoResult = importAllResult.memo((trinketsAnimationUrl) => {
  trinketsAnimationUrl = trinketsAnimationUrl.trinketsAnimationUrl;
  let APNGPlayer = require;
  let obj = dependencyMap;
  obj1 = useIsMobileVisualRefreshExperimentEnabled;
  const enabled = obj1.useMobileVisualRefreshConfig({ location: "GiftIconTrinketsAnimation" }).enabled;
  const tmp2 = callback(map.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  const items = [closure_4];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp4 = enabled ? tmp2.trinketsRefresh : tmp2.trinkets;
  if (APNGPlayerResult.isNullOrEmpty(trinketsAnimationUrl)) {
    return null;
  } else {
    obj = { style: null, pointerEvents: "none", children: null };
    obj[0] = enabled ? tmp2.containerRefresh : tmp2.container;
    if (APNGPlayerResult1.isAndroid()) {
      APNGPlayer = useAPNGPlayerControls.APNGPlayer;
      obj = { url: null, autoplay: null, style: null };
      obj[0] = trinketsAnimationUrl;
      obj[1] = !stateFromStores;
      obj[2] = tmp4;
      let tmp5Result = <APNGPlayer url={null} autoplay={null} style={null} />;
    } else {
      obj = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
      obj1 = { uri: null };
      obj1[0] = trinketsAnimationUrl;
      obj[0] = obj1;
      obj[1] = tmp4;
      obj[3] = !stateFromStores;
      tmp5Result = jsx(preloadDefault, { source: null, style: null, resizeMode: "contain", enableAnimation: null });
    }
    obj[2] = tmp5Result;
    tmp5Result = <View style={null} pointerEvents="none">{null}</View>;
    APNGPlayerResult1 = obj132;
  }
  APNGPlayerResult = isNullOrEmpty;
});
const result = require("obj132").fileFinishedImporting("modules/chat_input/native/GiftIconTrinketsAnimation.tsx");

export const GiftIconTrinketsAnimation = memoResult;