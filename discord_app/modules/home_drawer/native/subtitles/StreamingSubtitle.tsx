// === Module 16302: StreamingSubtitle ===

// Module 16302 (StreamingSubtitle)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5048 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/StreamingSubtitle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  ({ guildId, streamingUser } = arg0);
  if (cResult[0] === guildId) {
    if (cResult[1] === streamingUser) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const obj2 = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: tmp4 };
      const tmp8 = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: tmp4 });
      cResult[3] = tmp4;
      cResult[4] = tmp8;
      let tmp6 = tmp8;
    } else {
      tmp6 = cResult[4];
    }
    return tmp6;
  }
  const intl = util.intl;
  const obj4 = { username: null };
  obj4.username = NicknameUtilsDefault.getName(guildId, null, streamingUser);
  const formatResult = intl.format(util.t.k5IKep, obj4);
  cResult[0] = guildId;
  cResult[1] = streamingUser;
  cResult[2] = formatResult;
  tmp4 = formatResult;
}) : ((arg0) => {
  ({ guildId, streamingUser } = arg0);
  const obj = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null };
  const intl = util.intl;
  const obj2 = { username: NicknameUtilsDefault.getName(guildId, null, streamingUser) };
  obj.children = intl.format(util.t.k5IKep, obj2);
  return jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null });
});