// discord_app/modules/stage_channels/native/components/ModeratorStartStageHeader.tsx
import StageActionHeader from "StageActionHeader.tsx";
import useMyCurrentStageChannelRoleDefault from "../../useMyCurrentStageChannelRole.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageHeader.tsx");

export default noop.memo(function ModeratorStartStageHeader(channel) {
  channel = channel.channel;
  const tmp2 = useMyCurrentStageChannelRoleDefault(channel.id);
  let speaker;
  if (tmp2 != null) {
    speaker = tmp2.speaker;
  }
  const obj = { channel, isStarting: true, children: null };
  if (speaker) {
    const obj2 = { channelId: channel.id };
    speaker = React3(StageActionHeader.MusicMuteButton, obj2);
  }
  items = [speaker, React3(StageActionHeader.StageInviteButton, { channelId: channel.id })];
  obj.children = items;
  return React4(StageActionHeader.StageChannelCallHeader, obj);
});
