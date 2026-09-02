// === Module 10178: ? ===

// Module 10178
import HideStageChannelCallIcon from "HideStageChannelCallIcon" /* 10132 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 10138 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { header: null };
obj = { height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: 8, marginTop: 4, overflow: "visible" };
obj[0] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const tmp3 = useMyCurrentStageChannelRoleDefault(channel.id);
  let speaker;
  if (tmp3 != null) {
    speaker = tmp3.speaker;
  }
  let obj = { style: callback2().header, pointerEvents: "box-none", children: null };
  const items = [callback(HideStageChannelCallIcon.HideStageChannelCallIcon, { channel }), callback(HideStageChannelCallIcon.StageChannelCallHeader, { channel }), , ];
  if (speaker) {
    obj = { channelId: null };
    obj[0] = channel.id;
    speaker = tmp7(tmp8(10132).MusicMuteButton, obj);
  }
  items[2] = speaker;
  obj = { channelId: channel.id };
  items[3] = callback(HideStageChannelCallIcon.StageInviteButton, obj);
  obj[2] = items;
  return closure_5(View, obj);
});
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageHeader.tsx");

export default memoResult;