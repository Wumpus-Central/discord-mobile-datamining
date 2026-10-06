// === Module 12325: ChannelSafeAreaBottomAnimated ===

// Module 12325 (ChannelSafeAreaBottomAnimated)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import useChannelSafeAreaHeightSharedValueDefault from "useChannelSafeAreaHeightSharedValue" /* 9785 */;
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles" /* 9790 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let channelId;

let c3;
let closure_4;
({ StyleSheet: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
const __initData = { code: "function ChannelSafeAreaBottomAnimatedAndroidTsx1(){const{heightSharedValue}=this.__closure;return{height:heightSharedValue.get()};}" };
const __initData2 = { code: "function ChannelSafeAreaBottomAnimatedAndroidTsx2(){const{heightSharedValue}=this.__closure;return{height:heightSharedValue.get()};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let tmp7;
  let obj = react2;
  const cResult = obj.c(5);
  channelId = channelId.channelId;
  const tmp4 = useChannelSafeAreaHeightSharedValueDefault();
  let closure_0 = tmp4;
  const tmp5 = useChannelSafeAreaBottomStylesDefault(channelId);
  const fn = function n() {
    const obj = { height: closure_0.get() };
    return obj;
  };
  fn.__closure = { heightSharedValue: tmp4 };
  fn.__workletHash = 6491350126069;
  fn.__initData = __initData;
  const obj2 = ReanimatedRexport;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] !== tmp5) {
    const items = [_false.absoluteFill, tmp5];
    const tmp11 = <React3 style={items} />;
    cResult[0] = tmp5;
    cResult[1] = tmp11;
    tmp7 = tmp11;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === animatedStyle) {
    let tmp12;
    if (cResult[3] === tmp7) {
      tmp12 = cResult[4];
    }
    return tmp12;
  }
  const tmp13 = jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: tmp7 });
  cResult[2] = animatedStyle;
  cResult[3] = tmp7;
  cResult[4] = tmp13;
  tmp12 = tmp13;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const tmp = useChannelSafeAreaHeightSharedValueDefault();
  let closure_0 = tmp;
  const tmp2 = useChannelSafeAreaBottomStylesDefault(channelId);
  let obj = ReanimatedRexport;
  const fn = function n() {
    const obj = { height: closure_0.get() };
    return obj;
  };
  fn.__closure = { heightSharedValue: tmp };
  fn.__workletHash = 15913264108790;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items = [_false.absoluteFill, tmp2];
  const View = ReanimatedRexportDefault.View;
  return <View style={animatedStyle}>{null}</View>;
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx");

export default memoResult;