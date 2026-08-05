import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";
import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";
import { componentDidMount } from "../../../status_bar/native/components/StatusBar.android.tsx";
import { FocusedControlsHeader } from "../../../video_calls/native/components/FocusedControls.tsx";
import { useStageActionBarAnimation } from "StageChannelAnimationUtils.tsx";
import { StageChannelBackground } from "StageChannelBackground.tsx";
import { StageChannelCallList } from "StageChannelCallList.tsx";
// discord_app/modules/stage_channels/native/components/StageChannelCallView.tsx
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
const require = arg1;
function StageChannelCallBackground(arg0) {
  let channelId;
  let children;
  ({ children, channelId } = arg0);
  let obj = useStageActionBarAnimation /* useStageActionBarAnimation */;
  const stageActionBarAnimation = obj.useStageActionBarAnimation(channelId, FocusedControlsHeader /* FocusedControlsHeader */.FOCUSED_CONTROLS_HEADER_HEIGHT + useSafeAreaInsets().top);
  obj = { children: null };
  const tmp = callback3();
  const items = [tmp.container, stageActionBarAnimation];
  obj[0] = callback(ReanimatedRexport.View, { style: items, children });
  return callback(StageChannelBackground, obj);
}
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { flex: 1, paddingHorizontal: 12 } });
const result = require("FocusedControlsHeader").fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallView.tsx");

export default function StageChannelCallView(channel) {
  channel = channel.channel;
  let obj = { children: null };
  const items = [callback(componentDidMount, { animated: true, barStyle: "light-content" }), ];
  obj = { channelId: channel.id, children: callback(StageChannelCallList, { channel }) };
  items[1] = callback(StageChannelCallBackground, obj);
  obj[0] = items;
  return callback2(closure_4, obj);
};