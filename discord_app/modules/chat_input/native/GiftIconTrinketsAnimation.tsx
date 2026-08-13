// discord_app/modules/chat_input/native/GiftIconTrinketsAnimation.tsx
import { View } from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { MINIMUM_HIT_AREA } from "../../../design/components/Button/native/ButtonConstants.native.tsx";
import { map } from "../../../design/tokens/native/useToken.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../themes/experiments/MobileVisualRefreshExperiment.tsx";

const require = arg1;
let closure_6 = createCacheKey.createStyles((width) => {
  width = MINIMUM_HIT_AREA.SMALL_BUTTON_HEIGHT + MINIMUM_HIT_AREA.SMALL_BUTTON_PADDING + 2;
  const containerRefresh = { position: "absolute", top: 0, left: 0, width, height: width, overflow: "visible", marginLeft: 0, zIndex: 0 };
  return { container: { position: "absolute", top: 0, left: 0, width, height: width, overflow: "visible", marginLeft: 4, zIndex: 0 }, containerRefresh, trinkets: { zIndex: 4, position: "absolute", pointerEvents: "none", width: "100%", height: "100%", top: 0, left: 0 }, trinketsRefresh: { zIndex: 4, position: "absolute", pointerEvents: "none", width: "175%", height: "175%", top: "-37.5%", left: "-37.5%" } };
});
const memoResult = require("noop").memo((trinketsAnimationUrl) => {
  trinketsAnimationUrl = trinketsAnimationUrl.trinketsAnimationUrl;
  let APNGPlayer = require;
  let obj = dependencyMap;
  let obj1 = useIsMobileVisualRefreshExperimentEnabled;
  const enabled = obj1.useMobileVisualRefreshConfig({ location: "GiftIconTrinketsAnimation" }).enabled;
  const tmp2 = callback(map.useToken(Themes.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  const obj3 = map;
  const tmp = importDefault;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp4 = enabled ? tmp2.trinketsRefresh : tmp2.trinkets;
  const obj4 = initialize;
  if (APNGPlayerResult.isNullOrEmpty(trinketsAnimationUrl)) {
    return null;
  } else {
    obj = { style: null, pointerEvents: "none", children: null };
    obj[0] = enabled ? tmp2.containerRefresh : tmp2.container;
    if (APNGPlayerResult1.isAndroid()) {
      APNGPlayer = APNGPlayer(9436).APNGPlayer;
      obj = { url: null, autoplay: null, style: null };
      obj[0] = trinketsAnimationUrl;
      obj[1] = !stateFromStores;
      obj[2] = tmp4;
      let tmp5Result = tmp5(APNGPlayer, obj);
    } else {
      obj = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
      obj1 = { uri: null };
      obj1[0] = trinketsAnimationUrl;
      obj[0] = obj1;
      obj[1] = tmp4;
      obj[3] = !stateFromStores;
      tmp5Result = tmp5(tmp(5308), obj);
    }
    obj[2] = tmp5Result;
    tmp5Result = tmp5(View, obj);
    APNGPlayerResult1 = APNGPlayer(500);
    const tmp6 = View;
  }
});
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/chat_input/native/GiftIconTrinketsAnimation.tsx");

export const GiftIconTrinketsAnimation = memoResult;