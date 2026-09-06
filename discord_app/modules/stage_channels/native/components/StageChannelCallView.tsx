// === Module 10041: StageChannelCallView ===

// Module 10041 (StageChannelCallView)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import StatusBarDefault from "StatusBar" /* 9481 */;
import FocusedControls from "FocusedControls" /* 9677 */;
import StageChannelAnimationUtils from "StageChannelAnimationUtils" /* 10042 */;
import StageChannelBackgroundDefault from "StageChannelBackground" /* 10043 */;
import StageChannelCallListDefault from "StageChannelCallList" /* 10044 */;
import noop from "module_19" /* 19 */;

require = fn;
function StageChannelCallBackground(arg0) {
  ({ children, channelId } = arg0);
  let obj = StageChannelAnimationUtils;
  const stageActionBarAnimation = obj.useStageActionBarAnimation(channelId, FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT + useSafeAreaInsetsDefault().top);
  obj = { children: null };
  const tmp = closure_6();
  obj = { style: null, children };
  const items = [tmp.container, stageActionBarAnimation];
  obj.style = items;
  obj.children = React3(ReanimatedRexportDefault.View, obj);
  return React3(StageChannelBackgroundDefault, obj);
}
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ container: { flex: 1, paddingHorizontal: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallView.tsx");

export default function StageChannelCallView(channel) {
  channel = channel.channel;
  let obj = { children: null };
  const items = [React3(StatusBarDefault, { animated: true, barStyle: "light-content" }), ];
  obj = { channelId: channel.id, children: React3(StageChannelCallListDefault, { channel }) };
  items[1] = React3(StageChannelCallBackground, obj);
  obj.children = items;
  return hasOwnProperty(React4, obj);
};