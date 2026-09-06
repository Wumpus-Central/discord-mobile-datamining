// === Module 12250: GiftIconTrinketsAnimation ===

// Module 12250 (GiftIconTrinketsAnimation)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import StringUtils from "StringUtils" /* 1925 */;
import useToken from "useToken" /* 4262 */;
import FastImageDefault from "FastImage" /* 5587 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

const PlatformUtils = APNGPlayer(1115);
const APNGPlayer2 = APNGPlayer(8808);
require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles((width) => ({ containerRefresh: { position: "absolute", top: 0, left: 0, width, height: width, overflow: "visible", marginLeft: 0, zIndex: 0 }, trinketsRefresh: { zIndex: 4, position: "absolute", pointerEvents: "none", width: "175%", height: "175%", top: "-37.5%", left: "-37.5%" } }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/GiftIconTrinketsAnimation.tsx");

export const GiftIconTrinketsAnimation = noop.memo((trinketsAnimationUrl) => {
  trinketsAnimationUrl = trinketsAnimationUrl.trinketsAnimationUrl;
  let APNGPlayer = require;
  let obj = dependencyMap;
  let obj1 = useToken;
  const tmp2 = closure_6(obj1.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const trinketsRefresh = tmp2.trinketsRefresh;
  if (obj4.isNullOrEmpty(trinketsAnimationUrl)) {
    return null;
  } else {
    obj = { style: tmp2.containerRefresh, pointerEvents: "none", children: null };
    if (APNGPlayerResult.isAndroid()) {
      APNGPlayer = APNGPlayer2.APNGPlayer;
      obj = { url: trinketsAnimationUrl, autoplay: !stateFromStores, style: trinketsRefresh };
      let tmp4Result = <APNGPlayer url={trinketsAnimationUrl} autoplay={!stateFromStores} style={trinketsRefresh} />;
    } else {
      obj = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
      obj1 = { uri: trinketsAnimationUrl };
      obj.source = obj1;
      obj.style = trinketsRefresh;
      obj.enableAnimation = !stateFromStores;
      tmp4Result = jsx(FastImageDefault, { source: null, style: null, resizeMode: "contain", enableAnimation: null });
    }
    obj.children = tmp4Result;
    tmp4Result = <View style={tmp2.containerRefresh} pointerEvents="none">{null}</View>;
    APNGPlayerResult = PlatformUtils;
  }
  obj4 = StringUtils;
});