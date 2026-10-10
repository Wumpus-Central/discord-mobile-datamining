// === Module 11180: ParticipantTitle ===

// Module 11180 (ParticipantTitle)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import getParticipantTitleDefault from "getParticipantTitle" /* 11161 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { usernameText: { fontSize: 14, color: nativeDefault.colors.WHITE } };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { fontSize: 14, color: nativeDefault.colors.WHITE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ParticipantTitle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ParticipantTitle(arg0) {
  const cResult = c.c(9);
  ({ channel, participant, style } = arg0);
  const tmp4 = closure_4();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.usernameText) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === channel) {
      if (cResult[4] === participant) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        if (cResult[7] === tmp6) {
          let tmp9 = cResult[8];
        }
        return tmp9;
      }
      const obj2 = { style: tmp5, numberOfLines: 1, children: tmp6 };
      const tmp11 = jsx(native.LegacyText, { style: tmp5, numberOfLines: 1, children: tmp6 });
      cResult[6] = tmp5;
      cResult[7] = tmp6;
      cResult[8] = tmp11;
      tmp9 = tmp11;
    }
    const tmp8 = getParticipantTitleDefault(channel, participant);
    cResult[3] = channel;
    cResult[4] = participant;
    cResult[5] = tmp8;
    tmp6 = tmp8;
  }
  const items = [tmp4.usernameText, style];
  cResult[0] = style;
  cResult[1] = tmp4.usernameText;
  cResult[2] = items;
  tmp5 = items;
}) : (function ParticipantTitle(arg0) {
  ({ channel, participant, style } = arg0);
  const obj = { style: null, numberOfLines: 1, children: getParticipantTitleDefault(channel, participant) };
  const items = [closure_4().usernameText, style];
  obj.style = items;
  return jsx(native.LegacyText, { style: null, numberOfLines: 1, children: getParticipantTitleDefault(channel, participant) });
});