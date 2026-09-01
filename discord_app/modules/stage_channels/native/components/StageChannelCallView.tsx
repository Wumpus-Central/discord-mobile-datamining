// discord_app/modules/stage_channels/native/components/StageChannelCallView.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef4217 from "../../../reanimated/ReanimatedRexport.tsx";
import componentDidMountDefault from "../../../status_bar/native/components/StatusBar.android.tsx";
import FocusedControlsHeader from "../../../video_calls/native/components/FocusedControls.tsx";
import useStageActionBarAnimation from "StageChannelAnimationUtils.tsx";
import StageChannelBackgroundDefault from "StageChannelBackground.tsx";
import StageChannelCallListDefault from "StageChannelCallList.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function StageChannelCallBackground(arg0) {
  ({ children, channelId } = arg0);
  let obj = useStageActionBarAnimation;
  const stageActionBarAnimation = obj.useStageActionBarAnimation(
    channelId,
    FocusedControlsHeader.FOCUSED_CONTROLS_HEADER_HEIGHT + useSafeAreaInsetsDefault().top,
  );
  obj = { children: null };
  const tmp = callback3();
  const items = [tmp.container, stageActionBarAnimation];
  obj[0] = callback(_modDef4217.View, { style: items, children });
  return callback(StageChannelBackgroundDefault, obj);
}
noopAll;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { flex: 1, paddingHorizontal: 12 } });
const result = require("set").fileFinishedImporting(
  "modules/stage_channels/native/components/StageChannelCallView.tsx",
);

export default function StageChannelCallView(channel) {
  channel = channel.channel;
  let obj = { children: null };
  const items = [callback(componentDidMountDefault, { animated: true, barStyle: "light-content" })];
  obj = { channelId: channel.id, children: callback(StageChannelCallListDefault, { channel }) };
  items[1] = callback(StageChannelCallBackground, obj);
  obj[0] = items;
  return callback2(closure_4, obj);
}
