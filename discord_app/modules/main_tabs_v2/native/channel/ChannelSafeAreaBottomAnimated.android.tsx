// === Module 12202: ? ===

// Module 12202
import _modDef4120 from "module_4120" /* 4120 */;
import useChannelSafeAreaHeightSharedValueDefault from "useChannelSafeAreaHeightSharedValue" /* 10394 */;
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles" /* 10400 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
let closure_6 = { code: "function ChannelSafeAreaBottomAnimatedAndroidTsx1(){const{heightSharedValue}=this.__closure;return{height:heightSharedValue.get()};}" };
const memoResult = importAllResult.memo(function ChannelSafeAreaBottom(channelId) {
  let _require;
  const tmp = useChannelSafeAreaHeightSharedValueDefault();
  _require = tmp;
  let obj = _require(4120);
  const fn = function n() {
    return { height: closure_0.get() };
  };
  fn.__closure = { heightSharedValue: tmp };
  fn.__workletHash = 6491350126069;
  fn.__initData = closure_6;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: animatedStyle, children: <closure_4 style={items} /> };
  items = [absoluteFill.absoluteFill, useChannelSafeAreaBottomStylesDefault(channelId.channelId)];
  return jsx(_modDef4120.View, { style: animatedStyle, children: <closure_4 style={items} /> });
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx");

export default memoResult;