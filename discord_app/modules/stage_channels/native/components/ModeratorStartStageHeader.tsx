// === Module 13110: ModeratorStartStageHeader ===

// Module 13110 (ModeratorStartStageHeader)
import StageActionHeader from "StageActionHeader" /* 13070 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 13075 */;
import noop from "module_19" /* 19 */;

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