// discord_app/modules/stage_channels/native/components/StageChannelCallView.tsx
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import StatusBarDefault from "../../../status_bar/native/components/StatusBar.android.tsx";
import FocusedControls from "../../../video_calls/native/components/FocusedControls.tsx";
import StageChannelAnimationUtils from "StageChannelAnimationUtils.tsx";
import StageChannelBackgroundDefault from "StageChannelBackground.tsx";
import StageChannelCallListDefault from "StageChannelCallList.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function StageChannelCallBackground(arg0) {
  ({ children, channelId } = arg0);
  let obj = StageChannelAnimationUtils;
  const stageActionBarAnimation = obj.useStageActionBarAnimation(
    channelId,
    FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT + useSafeAreaInsetsDefault().top,
  );
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
  const items = [React3(StatusBarDefault, { animated: true, barStyle: "light-content" })];
  obj = { channelId: channel.id, children: React3(StageChannelCallListDefault, { channel }) };
  items[1] = React3(StageChannelCallBackground, obj);
  obj.children = items;
  return hasOwnProperty(React4, obj);
}
