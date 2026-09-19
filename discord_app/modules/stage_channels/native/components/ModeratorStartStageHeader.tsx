// === Module 10329: ModeratorStartStageHeader ===

// Module 10329 (ModeratorStartStageHeader)
import StageActionHeader from "StageActionHeader" /* 10283 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 10289 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4756);
let obj = { header: { height: fn(5894).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: 8, marginTop: 4, overflow: "visible" } };
let closure_6 = createStyles.createStyles(obj);
const obj3 = { height: fn(5894).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: 8, marginTop: 4, overflow: "visible" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageHeader.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  const tmp3 = useMyCurrentStageChannelRoleDefault(channel.id);
  let speaker;
  if (tmp3 != null) {
    speaker = tmp3.speaker;
  }
  const obj = { style: closure_6().header, pointerEvents: "box-none", children: null };
  const items = [React4(StageActionHeader.HideStageChannelCallIcon, { channel }), React4(StageActionHeader.StageChannelCallHeader, { channel }), , ];
  if (speaker) {
    const obj2 = { channelId: channel.id };
    speaker = React4(StageActionHeader.MusicMuteButton, obj2);
  }
  items[2] = speaker;
  items[3] = React4(StageActionHeader.StageInviteButton, { channelId: channel.id });
  obj.children = items;
  return hasOwnProperty(View, obj);
});