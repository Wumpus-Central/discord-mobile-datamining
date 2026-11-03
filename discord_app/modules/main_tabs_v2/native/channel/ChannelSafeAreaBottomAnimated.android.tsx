// === Module 14351: ChannelSafeAreaBottomAnimated ===

// Module 14351 (ChannelSafeAreaBottomAnimated)
import _mod1652 from "module_1652" /* 1652 */;
import useChannelSafeAreaHeightSharedValue from "useChannelSafeAreaHeightSharedValue" /* 11375 */;
import useIsChannelFullyOpenDefault from "useIsChannelFullyOpen" /* 11385 */;
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles" /* 11387 */;
import MobileRTCV2Experiment from "MobileRTCV2Experiment" /* 14352 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;
const useChannelSafeAreaHeightSharedValueDefault = useChannelSafeAreaHeightSharedValue;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let closure_6 = { code: "(function ChannelSafeAreaBottomAnimatedAndroidTsx1(){let[heightSharedValue]=this.__closure;return{height:heightSharedValue.get()};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx");

export default noop.memo(function ChannelSafeAreaBottom(channelId) {
  const tmp4 = useChannelSafeAreaBottomStylesDefault(channelId.channelId);
  const tmp3 = useChannelSafeAreaHeightSharedValueDefault();
  items = [closure_6, tmp3];
  c0 = undefined;
  [tmp6, tmp7] = items;
  class ChannelSafeAreaBottomAnimatedAndroidTsx1 {
    constructor() {
      obj = { height: closure_0.get() };
      return obj;
    }
  }
  const items1 = [tmp7];
  ChannelSafeAreaBottomAnimatedAndroidTsx1.__closure = items1;
  ChannelSafeAreaBottomAnimatedAndroidTsx1.__workletHash = 14690382113580;
  ChannelSafeAreaBottomAnimatedAndroidTsx1.__initData = tmp6;
  const animatedStyle = _mod1652.useAnimatedStyle(ChannelSafeAreaBottomAnimatedAndroidTsx1);
  const isMobileRTCV2Enabled = MobileRTCV2Experiment.useIsMobileRTCV2Enabled("ChannelSafeAreaBottom");
  const tmp5Result = MobileRTCV2Experiment;
  useChannelSafeAreaHeightSharedValue;
  if (isMobileRTCV2Enabled) {
    if (!tmp10) {
      const obj2 = { style: null, children: null };
      const obj3 = { height: tmp12 };
      obj2.style = obj3;
      const obj4 = { style: null };
      const items2 = [React3.absoluteFill, tmp4];
      obj4.style = items2;
      obj2.children = <React4 style={null} />;
      let tmp16 = <React4 style={null}>{null}</React4>;
    }
    return tmp16;
  }
  const obj5 = { style: animatedStyle, children: null };
  const obj6 = { style: null };
  const items3 = [React3.absoluteFill, tmp4];
  obj6.style = items3;
  obj5.children = <React4 style={null} />;
  tmp16 = jsx(_modDef1652.View, { style: animatedStyle, children: null });
  tmp10 = useIsChannelFullyOpenDefault();
});