// === Module 14456: ChannelSafeAreaBottomAnimated ===

// Module 14456 (ChannelSafeAreaBottomAnimated)
import _mod1652 from "module_1652" /* 1652 */;
import useChannelSafeAreaHeightSharedValue from "useChannelSafeAreaHeightSharedValue" /* 11378 */;
import useIsChannelFullyOpenDefault from "useIsChannelFullyOpen" /* 11388 */;
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles" /* 11390 */;
import MobileRTCV2Experiment from "MobileRTCV2Experiment" /* 13959 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;
const useChannelSafeAreaHeightSharedValueDefault = useChannelSafeAreaHeightSharedValue;

require = fn;
function useChannelSafeAreaAnimatedStyles() {
  const tmp = useChannelSafeAreaHeightSharedValueDefault();
  items = [closure_6, tmp];
  c0 = undefined;
  [tmp2, tmp3] = items;
  class ChannelSafeAreaBottomAnimatedAndroidTsx1 {
    constructor() {
      obj = { height: closure_0.get() };
      return obj;
    }
  }
  const items1 = [tmp3];
  ChannelSafeAreaBottomAnimatedAndroidTsx1.__closure = items1;
  ChannelSafeAreaBottomAnimatedAndroidTsx1.__workletHash = 14690382113580;
  ChannelSafeAreaBottomAnimatedAndroidTsx1.__initData = tmp2;
  return _mod1652.useAnimatedStyle(ChannelSafeAreaBottomAnimatedAndroidTsx1);
}
function KeyboardAwareChannelSafeAreaBottom(channelId) {
  const tmp = useChannelSafeAreaBottomStylesDefault(channelId.channelId);
  const obj = { style: useChannelSafeAreaAnimatedStyles(), children: null };
  const obj2 = { style: null };
  items = [React3.absoluteFill, tmp];
  obj2.style = items;
  obj.children = <React4 style={null} />;
  return jsx(_modDef1652.View, { style: useChannelSafeAreaAnimatedStyles(), children: null });
}
function DockAwareChannelSafeAreaBottom(channelId) {
  const tmp3 = useChannelSafeAreaBottomStylesDefault(channelId.channelId);
  const tmp4 = useChannelSafeAreaAnimatedStyles();
  const channelSafeAreaRestingHeight = useChannelSafeAreaHeightSharedValue.useChannelSafeAreaRestingHeight();
  if (useIsChannelFullyOpenDefault()) {
    const obj2 = { style: tmp4, children: null };
    const obj3 = { style: null };
    items = [React3.absoluteFill, tmp3];
    obj3.style = items;
    obj2.children = <React4 style={null} />;
    let tmp6Result = jsx(_modDef1652.View, { style: tmp4, children: null });
  } else {
    const obj4 = { style: null, children: null };
    const obj5 = { height: channelSafeAreaRestingHeight };
    obj4.style = obj5;
    const obj6 = { style: null };
    const items1 = [React3.absoluteFill, tmp3];
    obj6.style = items1;
    obj4.children = <React4 style={null} />;
    tmp6Result = <React4 style={null}>{null}</React4>;
  }
  return tmp6Result;
}
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let closure_6 = { code: "(function ChannelSafeAreaBottomAnimatedAndroidTsx1(){let[heightSharedValue]=this.__closure;return{height:heightSharedValue.get()};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx");

export default noop.memo(function ChannelSafeAreaBottom(channelId) {
  return jsx(MobileRTCV2Experiment.useIsMobileRTCV2Enabled("ChannelSafeAreaBottom") ? DockAwareChannelSafeAreaBottom : KeyboardAwareChannelSafeAreaBottom, { channelId: channelId.channelId });
});