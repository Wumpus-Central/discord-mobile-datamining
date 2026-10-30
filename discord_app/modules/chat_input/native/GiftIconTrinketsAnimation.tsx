// === Module 13759: GiftIconTrinketsAnimation ===

// Module 13759 (GiftIconTrinketsAnimation)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import StringUtils from "StringUtils" /* 2028 */;
import useToken from "useToken" /* 5591 */;
import FastImageDefault from "FastImage" /* 5712 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;

const PlatformUtils = APNGPlayer(1376);
const APNGPlayer2 = APNGPlayer(9482);
require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_6 = createStyles.createStyles((width) => ({ containerRefresh: { position: "absolute", top: 0, left: 0, width, height: width, overflow: "visible", marginLeft: 0, zIndex: 0 }, trinketsRefresh: { zIndex: 4, position: "absolute", pointerEvents: "none", width: "175%", height: "175%", top: "-37.5%", left: "-37.5%" } }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/GiftIconTrinketsAnimation.tsx");

export const GiftIconTrinketsAnimation = noop.memo(function GiftIconTrinketsAnimation(trinketsAnimationUrl) {
  trinketsAnimationUrl = trinketsAnimationUrl.trinketsAnimationUrl;
  let APNGPlayer = require;
  const tmp2 = closure_6(useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const trinketsRefresh = tmp2.trinketsRefresh;
  if (obj4.isNullOrEmpty(trinketsAnimationUrl)) {
    return null;
  } else {
    const obj5 = { style: tmp2.containerRefresh, pointerEvents: "none", children: null };
    if (APNGPlayerResult.isAndroid()) {
      APNGPlayer = APNGPlayer2.APNGPlayer;
      const obj = { url: trinketsAnimationUrl, autoplay: !stateFromStores, style: trinketsRefresh };
      let tmp4Result = <APNGPlayer url={trinketsAnimationUrl} autoplay={!stateFromStores} style={trinketsRefresh} />;
    } else {
      const obj6 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
      const obj7 = { uri: trinketsAnimationUrl };
      obj6.source = obj7;
      obj6.style = trinketsRefresh;
      obj6.enableAnimation = !stateFromStores;
      tmp4Result = jsx(FastImageDefault, { source: null, style: null, resizeMode: "contain", enableAnimation: null });
    }
    obj5.children = tmp4Result;
    <View style={tmp2.containerRefresh} pointerEvents="none">{null}</View>;
    APNGPlayerResult = PlatformUtils;
  }
  obj4 = StringUtils;
});