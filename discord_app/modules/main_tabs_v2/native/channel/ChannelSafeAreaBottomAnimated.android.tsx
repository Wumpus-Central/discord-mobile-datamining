// === Module 11815: ? ===

// Module 11815
import _modDef4115 from "module_4115" /* 4115 */;
import useChannelSafeAreaHeightSharedValueDefault from "useChannelSafeAreaHeightSharedValue" /* 10558 */;
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles" /* 10563 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

const require = fn;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
let closure_6 = { code: "function ChannelSafeAreaBottomAnimatedAndroidTsx1(){const{heightSharedValue}=this.__closure;return{height:heightSharedValue.get()};}" };
const memoResult = importAllResult.memo(function ChannelSafeAreaBottom(channelId) {
  const tmp = useChannelSafeAreaHeightSharedValueDefault();
  const _require = tmp;
  let obj = _require(4115);
  const fn = function n() {
    return { height: closure_0.get() };
  };
  fn.__closure = { heightSharedValue: tmp };
  fn.__workletHash = 6491350126069;
  fn.__initData = closure_6;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: animatedStyle, children: <closure_4 style={items} /> };
  items = [absoluteFill.absoluteFill, useChannelSafeAreaBottomStylesDefault(channelId.channelId)];
  return jsx(_modDef4115.View, { style: animatedStyle, children: <closure_4 style={items} /> });
});
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx");

export default memoResult;