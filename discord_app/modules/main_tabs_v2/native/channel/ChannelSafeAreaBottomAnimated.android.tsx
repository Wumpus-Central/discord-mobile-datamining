// === Module 12644: ChannelSafeAreaBottomAnimated ===

// Module 12644 (ChannelSafeAreaBottomAnimated)
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import useChannelSafeAreaHeightSharedValueDefault from "useChannelSafeAreaHeightSharedValue" /* 11352 */;
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles" /* 11357 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const __initData = { code: "function ChannelSafeAreaBottomAnimatedAndroidTsx1(){const{heightSharedValue}=this.__closure;return{height:heightSharedValue.get()};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx");

export default noop.memo(function ChannelSafeAreaBottom(channelId) {
  const tmp = useChannelSafeAreaHeightSharedValueDefault();
  closure_0 = tmp;
  let obj = ReanimatedRexport;
  const fn = function n() {
    return { height: closure_0.get() };
  };
  fn.__closure = { heightSharedValue: tmp };
  fn.__workletHash = 6491350126069;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: animatedStyle, children: null };
  obj = { style: null };
  const items = [absoluteFill.absoluteFill, useChannelSafeAreaBottomStylesDefault(channelId.channelId)];
  obj.style = items;
  obj.children = <React4 style={null} />;
  return jsx(ReanimatedRexportDefault.View, { style: null });
});