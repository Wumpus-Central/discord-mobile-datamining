// === Module 11880: GiftIconTrinketsAnimation ===

// Module 11880 (GiftIconTrinketsAnimation)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import StringUtils from "StringUtils" /* 2018 */;
import useToken from "useToken" /* 4580 */;
import FastImageDefault from "FastImage" /* 5974 */;
import APNGPlayer from "APNGPlayer" /* 8464 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let trinketsAnimationUrl;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((width) => ({ containerRefresh: { position: "absolute", top: 0, left: 0, width, height: width, overflow: "visible", marginLeft: 0, zIndex: 0 }, trinketsRefresh: { zIndex: 4, position: "absolute", pointerEvents: "none", width: "175%", height: "175%", top: "-37.5%", left: "-37.5%" } }));
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((trinketsAnimationUrl) => {
  let tmp6;
  let tmp7;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(9);
  trinketsAnimationUrl = trinketsAnimationUrl.trinketsAnimationUrl;
  const obj2 = useToken;
  const tmp5 = closure_6(obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function c() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  const trinketsRefresh = tmp5.trinketsRefresh;
  let tmp10 = null;
  const tmpResult3 = StringUtils;
  if (!tmpResult3.isNullOrEmpty(trinketsAnimationUrl)) {
    let tmp12Result;
    if (cResult[2] === stateFromStores) {
      if (cResult[3] === trinketsRefresh) {
        let tmp11;
        if (cResult[4] === trinketsAnimationUrl) {
          tmp11 = cResult[5];
        }
        if (cResult[6] === tmp5.containerRefresh) {
          let tmp14;
          if (cResult[7] === tmp11) {
            tmp14 = cResult[8];
          }
          tmp10 = tmp14;
        }
        const tmp17 = <View style={tmp5.containerRefresh} pointerEvents="none">{tmp11}</View>;
        cResult[6] = tmp5.containerRefresh;
        cResult[7] = tmp11;
        cResult[8] = tmp17;
        tmp14 = tmp17;
      }
    }
    const tmpResult4 = PlatformUtils;
    if (tmpResult4.isAndroid()) {
      tmp12Result = jsx(APNGPlayer.APNGPlayer, { url: trinketsAnimationUrl, autoplay: !stateFromStores, style: trinketsRefresh });
    } else {
      const obj6 = { uri: trinketsAnimationUrl };
      tmp12Result = jsx(FastImageDefault, { source: obj6, style: trinketsRefresh, resizeMode: "contain", enableAnimation: !stateFromStores });
    }
    cResult[2] = stateFromStores;
    cResult[3] = trinketsRefresh;
    cResult[4] = trinketsAnimationUrl;
    cResult[5] = tmp12Result;
    tmp11 = tmp12Result;
  }
  return tmp10;
}) : ((trinketsAnimationUrl) => {
  let useReducedMotion;
  trinketsAnimationUrl = trinketsAnimationUrl.trinketsAnimationUrl;
  const obj = useToken;
  const tmp4 = closure_6(obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  const items = [AccessibilityStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const trinketsRefresh = tmp4.trinketsRefresh;
  let tmp7Result2 = null;
  const obj3 = StringUtils;
  if (!obj3.isNullOrEmpty(trinketsAnimationUrl)) {
    let tmp7Result;
    const tmpResult = PlatformUtils;
    if (tmpResult.isAndroid()) {
      tmp7Result = jsx(APNGPlayer.APNGPlayer, { url: trinketsAnimationUrl, autoplay: !stateFromStores, style: trinketsRefresh });
    } else {
      const obj7 = { uri: trinketsAnimationUrl };
      tmp7Result = jsx(FastImageDefault, { source: obj7, style: trinketsRefresh, resizeMode: "contain", enableAnimation: !stateFromStores });
    }
    tmp7Result2 = <View style={tmp4.containerRefresh} pointerEvents="none">{tmp7Result}</View>;
  }
  return tmp7Result2;
}));
const result = size.fileFinishedImporting("modules/chat_input/native/GiftIconTrinketsAnimation.tsx");

export const GiftIconTrinketsAnimation = memoResult;