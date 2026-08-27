// === Module 10044: StageChannelCallBackground ===

// Module 10044 (StageChannelCallBackground)
import noopAll from "noop" /* 19 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import _modDef4185 from "module_4185" /* 4185 */;
import componentDidMountDefault from "componentDidMount" /* 9451 */;
import FocusedControlsHeader from "FocusedControlsHeader" /* 9567 */;
import useStageActionBarAnimation from "useStageActionBarAnimation" /* 10045 */;
import StageChannelBackgroundDefault from "StageChannelBackground" /* 10046 */;
import StageChannelCallListDefault from "StageChannelCallList" /* 10047 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
function StageChannelCallBackground(arg0) {
  ({ children, channelId } = arg0);
  let obj = useStageActionBarAnimation;
  const stageActionBarAnimation = obj.useStageActionBarAnimation(channelId, FocusedControlsHeader.FOCUSED_CONTROLS_HEADER_HEIGHT + useSafeAreaInsetsDefault().top);
  obj = { children: null };
  const tmp = callback3();
  const items = [tmp.container, stageActionBarAnimation];
  obj[0] = callback(_modDef4185.View, { style: items, children });
  return callback(StageChannelBackgroundDefault, obj);
}
noopAll;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { flex: 1, paddingHorizontal: 12 } });
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallView.tsx");

export default function StageChannelCallView(channel) {
  channel = channel.channel;
  let obj = { children: null };
  const items = [callback(componentDidMountDefault, { animated: true, barStyle: "light-content" }), ];
  obj = { channelId: channel.id, children: callback(StageChannelCallListDefault, { channel }) };
  items[1] = callback(StageChannelCallBackground, obj);
  obj[0] = items;
  return callback2(closure_4, obj);
};