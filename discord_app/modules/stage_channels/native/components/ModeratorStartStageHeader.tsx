// discord_app/modules/stage_channels/native/components/ModeratorStartStageHeader.tsx
import HideStageChannelCallIcon from "StageActionHeader.tsx";
import useMyCurrentStageChannelRoleDefault from "../../useMyCurrentStageChannelRole.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { header: null };
obj = {
  height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT,
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 8,
  marginTop: 4,
  overflow: "visible",
};
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
  const items = [
    callback(HideStageChannelCallIcon.HideStageChannelCallIcon, { channel }),
    callback(HideStageChannelCallIcon.StageChannelCallHeader, { channel }),
    ,
  ];
  if (speaker) {
    obj = { channelId: null };
    obj[0] = channel.id;
    speaker = tmp7(tmp8(10136).MusicMuteButton, obj);
  }
  items[2] = speaker;
  obj = { channelId: channel.id };
  items[3] = callback(HideStageChannelCallIcon.StageInviteButton, obj);
  obj[2] = items;
  return closure_5(View, obj);
});
const result = require("set").fileFinishedImporting(
  "modules/stage_channels/native/components/ModeratorStartStageHeader.tsx",
);

export default memoResult;
