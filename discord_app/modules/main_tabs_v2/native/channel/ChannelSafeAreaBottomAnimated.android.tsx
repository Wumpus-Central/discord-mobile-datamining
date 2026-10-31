// === Module 14205: ChannelSafeAreaBottomAnimated ===

// Module 14205 (ChannelSafeAreaBottomAnimated)
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import useChannelSafeAreaHeightSharedValue from "useChannelSafeAreaHeightSharedValue" /* 11238 */;
import useIsChannelFullyOpenDefault from "useIsChannelFullyOpen" /* 11248 */;
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles" /* 11250 */;
import MobileRTCV2Experiment from "MobileRTCV2Experiment" /* 14206 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;
const useChannelSafeAreaHeightSharedValueDefault = useChannelSafeAreaHeightSharedValue;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const __initData = { code: "function ChannelSafeAreaBottomAnimatedAndroidTsx1(){const{heightSharedValue}=this.__closure;return{height:heightSharedValue.get()};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx");

export default noop.memo(function ChannelSafeAreaBottom(channelId) {
  const tmp3 = useChannelSafeAreaHeightSharedValueDefault();
  closure_0 = tmp3;
  const tmp4 = useChannelSafeAreaBottomStylesDefault(channelId.channelId);
  const fn = function n() {
    return { height: closure_0.get() };
  };
  fn.__closure = { heightSharedValue: tmp3 };
  fn.__workletHash = 6491350126069;
  fn.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const isMobileRTCV2Enabled = MobileRTCV2Experiment.useIsMobileRTCV2Enabled("ChannelSafeAreaBottom");
  useChannelSafeAreaHeightSharedValue;
  if (isMobileRTCV2Enabled) {
    if (!tmp7) {
      const obj3 = { style: null, children: null };
      const obj4 = { height: tmp9 };
      obj3.style = obj4;
      const obj5 = { style: null };
      const items = [React3.absoluteFill, tmp4];
      obj5.style = items;
      obj3.children = <React4 style={null} />;
      let tmp13 = <React4 style={null}>{null}</React4>;
    }
    return tmp13;
  }
  const obj6 = { style: animatedStyle, children: null };
  const obj7 = { style: null };
  const items1 = [React3.absoluteFill, tmp4];
  obj7.style = items1;
  obj6.children = <React4 style={null} />;
  tmp13 = jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: null });
  tmp7 = useIsChannelFullyOpenDefault();
});