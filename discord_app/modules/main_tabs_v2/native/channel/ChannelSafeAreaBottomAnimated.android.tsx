// discord_app/modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx
import _modDef4217 from "../../../reanimated/ReanimatedRexport.tsx";
import useChannelSafeAreaHeightSharedValueDefault from "useChannelSafeAreaHeightSharedValue.android.tsx";
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";

const require = arg1;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
let closure_6 = { code: "function ChannelSafeAreaBottomAnimatedAndroidTsx1(){const{heightSharedValue}=this.__closure;return{height:heightSharedValue.get()};}" };
const memoResult = importAllResult.memo(function ChannelSafeAreaBottom(channelId) {
  let _require;
  const tmp = useChannelSafeAreaHeightSharedValueDefault();
  _require = tmp;
  let obj = ReanimatedRexport;
  const fn = function n() {
    return { height: closure_0.get() };
  };
  fn.__closure = { heightSharedValue: tmp };
  fn.__workletHash = 6491350126069;
  fn.__initData = closure_6;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: animatedStyle, children: <closure_4 style={items} /> };
  items = [absoluteFill.absoluteFill, useChannelSafeAreaBottomStylesDefault(channelId.channelId)];
  return jsx(_modDef4217.View, { style: animatedStyle, children: <closure_4 style={items} /> });
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx");

export default memoResult;