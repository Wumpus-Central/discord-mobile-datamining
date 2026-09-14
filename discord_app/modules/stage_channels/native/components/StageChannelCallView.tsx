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
  const tmp = closure_6();
  const stageActionBarAnimation = StageChannelAnimationUtils.useStageActionBarAnimation(
    channelId,
    FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT + useSafeAreaInsetsDefault().top,
  );
  const obj2 = { children: null };
  const obj3 = { style: null, children };
  const items = [tmp.container, stageActionBarAnimation];
  obj3.style = items;
  obj2.children = React3(ReanimatedRexportDefault.View, obj3);
  return React3(StageChannelBackgroundDefault, obj2);
}
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let closure_6 = createStyles.createStyles({ container: { flex: 1, paddingHorizontal: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallView.tsx");

export default function StageChannelCallView(channel) {
  channel = channel.channel;
  const obj = { children: null };
  const items = [
    React3(StatusBarDefault, { animated: true, barStyle: "light-content" }),
    React3(StageChannelCallBackground, {
      channelId: channel.id,
      children: React3(StageChannelCallListDefault, { channel }),
    }),
  ];
  obj.children = items;
  return hasOwnProperty(React4, obj);
}
