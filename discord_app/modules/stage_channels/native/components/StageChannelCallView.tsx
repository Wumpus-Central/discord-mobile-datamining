// === Module 9738: StageChannelCallView ===

// Module 9738 (StageChannelCallView)
import react2 from "react" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4618 */;
import StatusBarDefault from "StatusBar" /* 9096 */;
import FocusedControls from "FocusedControls" /* 9618 */;
import StageChannelAnimationUtils from "StageChannelAnimationUtils" /* 9739 */;
import StageChannelBackgroundDefault from "StageChannelBackground" /* 9740 */;
import StageChannelCallListDefault from "StageChannelCallList" /* 9741 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
function CONTROL_PADDING_PX(arg0) {

}
let closure_7 = createStyles.createStyles({ container: { flex: 1, paddingHorizontal: 12 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let obj3;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(8);
  children = children.children;
  const channelId = children.channelId;
  const tmp4 = closure_7();
  const top = useSafeAreaInsetsDefault().top;
  if (cResult[0] !== top) {
    if (typeof CONTROL_PADDING_PX === "function") {
      const sum = FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT + top;
      cResult[0] = top;
      cResult[1] = sum;
      tmp6 = sum;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    tmp6 = cResult[1];
  }
  const tmpResult = StageChannelAnimationUtils;
  const stageActionBarAnimation = tmpResult.useStageActionBarAnimation(channelId, tmp6);
  if (cResult[2] === stageActionBarAnimation) {
    let tmp10;
    if (cResult[3] === tmp4.container) {
      tmp10 = cResult[4];
    }
    if (cResult[5] === children) {
      let tmp11;
      if (cResult[6] === tmp10) {
        tmp11 = cResult[7];
      }
      return tmp11;
    }
    const obj2 = { children: _false(ReanimatedRexportDefault.View, obj3) };
    obj3 = { style: tmp10, children };
    const tmp5Result = StageChannelBackgroundDefault;
    const tmp14 = _false(tmp5Result, obj2);
    cResult[5] = children;
    cResult[6] = tmp10;
    cResult[7] = tmp14;
    tmp11 = tmp14;
  }
  const items = [tmp4.container, stageActionBarAnimation];
  cResult[2] = stageActionBarAnimation;
  cResult[3] = tmp4.container;
  cResult[4] = items;
  tmp10 = items;
}) : ((arg0) => {
  let channelId;
  let children;
  let items;
  let obj2;
  ({ children, channelId } = arg0);
  const tmp = closure_7();
  const top = useSafeAreaInsetsDefault().top;
  StageChannelAnimationUtils;
  if (typeof CONTROL_PADDING_PX === "function") {
    const obj = { children: _false(ReanimatedRexportDefault.View, obj2) };
    obj2 = { style: items, children };
    items = [tmp.container, tmp6(channelId, FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT + top)];
    const tmp6Result = tmp6(channelId, FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT + top);
    const tmp2Result = StageChannelBackgroundDefault;
    return _false(tmp2Result, obj);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let items;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(6);
  channel = channel.channel;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = _false(StatusBarDefault, { animated: true, barStyle: "light-content" });
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const obj2 = { channel };
    const tmp10 = _false(StageChannelCallListDefault, obj2);
    cResult[1] = channel;
    cResult[2] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === channel.id) {
    let tmp11;
    if (cResult[4] === tmp7) {
      tmp11 = cResult[5];
    }
    return tmp11;
  }
  const obj3 = { children: items };
  items = [first, ];
  const obj4 = { channelId: channel.id, children: tmp7 };
  items[1] = _false(closure_8, obj4);
  const tmp12 = hasOwnProperty(React3, obj3);
  cResult[3] = channel.id;
  cResult[4] = tmp7;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : ((channel) => {
  let items;
  channel = channel.channel;
  const obj = { children: items };
  items = [_false(StatusBarDefault, { animated: true, barStyle: "light-content" }), ];
  const obj2 = { channelId: channel.id, children: _false(StageChannelCallListDefault, { channel }) };
  items[1] = _false(closure_8, obj2);
  return hasOwnProperty(React3, obj);
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallView.tsx");

export default tmp4;