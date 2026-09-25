// === Module 9490: StageChannelCallView ===

// Module 9490 (StageChannelCallView)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4563 */;
import StatusBarDefault from "StatusBar" /* 8831 */;
import FocusedControls from "FocusedControls" /* 8947 */;
import StageChannelAnimationUtils from "StageChannelAnimationUtils" /* 9491 */;
import StageChannelBackgroundDefault from "StageChannelBackground" /* 9492 */;
import StageChannelCallListDefault from "StageChannelCallList" /* 9493 */;
import noop from "module_19" /* 19 */;

require = fn;
function StageChannelCallBackground(arg0) {
  ({ children, channelId } = arg0);
  const tmp = closure_6();
  const stageActionBarAnimation = StageChannelAnimationUtils.useStageActionBarAnimation(channelId, FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT + useSafeAreaInsetsDefault().top);
  const obj2 = { children: null };
  const obj3 = { style: null, children };
  const items = [tmp.container, stageActionBarAnimation];
  obj3.style = items;
  obj2.children = React3(ReanimatedRexportDefault.View, obj3);
  return React3(StageChannelBackgroundDefault, obj2);
}
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4829);
let closure_6 = createStyles.createStyles({ container: { flex: 1, paddingHorizontal: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallView.tsx");

export default function StageChannelCallView(channel) {
  channel = channel.channel;
  const obj = { children: null };
  const items = [React3(StatusBarDefault, { animated: true, barStyle: "light-content" }), React3(StageChannelCallBackground, { channelId: channel.id, children: React3(StageChannelCallListDefault, { channel }) })];
  obj.children = items;
  return hasOwnProperty(React4, obj);
};