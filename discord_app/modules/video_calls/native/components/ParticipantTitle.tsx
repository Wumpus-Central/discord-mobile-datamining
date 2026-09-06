// discord_app/modules/video_calls/native/components/ParticipantTitle.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import getParticipantTitleDefault from "../../getParticipantTitle.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { usernameText: null };
createStyles = { fontSize: 14, color: nativeDefault.colors.WHITE };
createStyles.usernameText = createStyles;
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ParticipantTitle.tsx");

export default function ParticipantTitle(arg0) {
  ({ channel, participant, style } = arg0);
  const obj = { style: null, numberOfLines: 1, children: getParticipantTitleDefault(channel, participant) };
  const items = [closure_4().usernameText, style];
  obj.style = items;
  return jsx(native.LegacyText, {
    style: null,
    numberOfLines: 1,
    children: getParticipantTitleDefault(channel, participant),
  });
}
