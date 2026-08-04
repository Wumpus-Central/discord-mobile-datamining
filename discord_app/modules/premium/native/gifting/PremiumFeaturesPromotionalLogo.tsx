// discord_app/modules/premium/native/gifting/PremiumFeaturesPromotionalLogo.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/premium/native/gifting/PremiumFeaturesPromotionalLogo.tsx");

export default function PremiumFeaturesPromotionalLogo(arg0) {
  let promoRotatingStyle;
  let rotatingAvatarImageUrl;
  let shouldAnimate;
  ({ rotatingAvatarImageUrl, promoRotatingStyle, shouldAnimate } = arg0);
  if (shouldAnimate === undefined) {
    shouldAnimate = true;
  }
  let stateFromStores;
  let aPNGPlayerControls;
  let first;
  let React;
  let obj = shouldAnimate(aPNGPlayerControls[4]);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let num = null;
  const ref = React.useRef(null);
  aPNGPlayerControls = shouldAnimate(aPNGPlayerControls[5]).useAPNGPlayerControls(ref);
  const tmp6 = first(React.useState(false), 2);
  first = tmp6[0];
  React = tmp6[1];
  const items1 = [shouldAnimate, aPNGPlayerControls, stateFromStores];
  const effect = React.useEffect(() => {
    let isAndroidResult = shouldAnimate(aPNGPlayerControls[6]).isAndroid();
    if (isAndroidResult) {
      isAndroidResult = !stateFromStores;
    }
    if (isAndroidResult) {
      if (shouldAnimate) {
        aPNGPlayerControls.seek(0);
        callback(true);
      } else {
        callback(false);
        aPNGPlayerControls.stop();
      }
    }
  }, items1);
  const obj2 = shouldAnimate(aPNGPlayerControls[5]);
  const tmp9 = stateFromStores;
  if (first) {
    num = 100;
  }
  stateFromStores(aPNGPlayerControls[7])(() => {
    if (first) {
      aPNGPlayerControls.play();
    }
  }, num);
  const tmp10 = stateFromStores(aPNGPlayerControls[7]);
  if (tmpResult.isAndroid()) {
    if (!stateFromStores) {
      obj = { ref: null, url: null, autoplay: false, style: null };
      obj[0] = ref;
      obj[1] = rotatingAvatarImageUrl;
      obj[3] = promoRotatingStyle;
      let tmp13 = jsx(tmp(tmp2[5]).APNGPlayer, { ref: null, url: null, autoplay: false, style: null });
    }
    return tmp13;
  }
  tmp13 = jsx(tmp9(tmp2[8]), { style: promoRotatingStyle, resizeMode: "contain", source: { uri: rotatingAvatarImageUrl } });
};