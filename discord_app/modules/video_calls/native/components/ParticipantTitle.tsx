// === Module 10413: ParticipantTitle ===

// Module 10413 (ParticipantTitle)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import getParticipantTitleDefault from "getParticipantTitle" /* 10395 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
const obj2 = { usernameText: { fontSize: 14, color: nativeDefault.colors.WHITE } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ParticipantTitle.tsx");

export default function ParticipantTitle(arg0) {
  ({ channel, participant, style } = arg0);
  const obj = { style: null, numberOfLines: 1, children: getParticipantTitleDefault(channel, participant) };
  const items = [closure_4().usernameText, style];
  obj.style = items;
  return jsx(native.LegacyText, { style: null, numberOfLines: 1, children: getParticipantTitleDefault(channel, participant) });
};