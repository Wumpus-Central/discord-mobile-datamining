// discord_app/modules/stage_channels/native/components/ModeratorStartStageHeader.tsx
import StageActionHeader from "StageActionHeader.tsx";
import useMyCurrentStageChannelRoleDefault from "../../useMyCurrentStageChannelRole.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let obj = { header: null };
obj = {
  height: fn(5682).NAV_BAR_HEIGHT,
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 8,
  marginTop: 4,
  overflow: "visible",
};
obj.header = obj;
let closure_6 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageHeader.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  const tmp3 = useMyCurrentStageChannelRoleDefault(channel.id);
  let speaker;
  if (tmp3 != null) {
    speaker = tmp3.speaker;
  }
  let obj = { style: closure_6().header, pointerEvents: "box-none", children: null };
  const items = [
    React4(StageActionHeader.HideStageChannelCallIcon, { channel }),
    React4(StageActionHeader.StageChannelCallHeader, { channel }),
    ,
  ];
  if (speaker) {
    obj = { channelId: channel.id };
    speaker = tmp7(tmp8(10027).MusicMuteButton, obj);
  }
  items[2] = speaker;
  obj = { channelId: channel.id };
  items[3] = React4(StageActionHeader.StageInviteButton, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
});
