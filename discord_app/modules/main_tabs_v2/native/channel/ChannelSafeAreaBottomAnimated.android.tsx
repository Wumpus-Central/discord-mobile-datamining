// === Module 12795: ChannelSafeAreaBottomAnimated ===

// Module 12795 (ChannelSafeAreaBottomAnimated)
import ReanimatedRexport from "ReanimatedRexport" /* 4376 */;
import useChannelSafeAreaHeightSharedValueDefault from "useChannelSafeAreaHeightSharedValue" /* 11506 */;
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles" /* 11511 */;
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
  const tmp2 = useChannelSafeAreaBottomStylesDefault(channelId.channelId);
  const fn = function n() {
    return { height: closure_0.get() };
  };
  fn.__closure = { heightSharedValue: tmp };
  fn.__workletHash = 6491350126069;
  fn.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const obj2 = { style: animatedStyle, children: null };
  const obj3 = { style: null };
  const items = [absoluteFill.absoluteFill, tmp2];
  obj3.style = items;
  obj2.children = <React4 style={null} />;
  return jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: null });
});