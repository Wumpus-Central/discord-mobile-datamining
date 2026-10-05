// === Module 16262: StreamingSubtitle ===

// Module 16262 (StreamingSubtitle)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5042 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let guildId;
  let obj3;
  let streamingUser;
  const obj = react2;
  const cResult = obj.c(5);
  ({ guildId, streamingUser } = arg0);
  if (cResult[0] === guildId) {
    let tmp4;
    let tmp6;
    if (cResult[1] === streamingUser) {
      tmp4 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const tmp8 = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: tmp4 });
      cResult[3] = tmp4;
      cResult[4] = tmp8;
      tmp6 = tmp8;
    } else {
      tmp6 = cResult[4];
    }
    return tmp6;
  }
  const intl = intl2.intl;
  const format = intl.format;
  const obj4 = { username: obj3.getName(guildId, null, streamingUser) };
  const k5IKep = intl2.t.k5IKep;
  obj3 = NicknameUtilsDefault;
  const formatResult = format(k5IKep, obj4);
  cResult[0] = guildId;
  cResult[1] = streamingUser;
  cResult[2] = formatResult;
  tmp4 = formatResult;
}) : ((arg0) => {
  let guildId;
  let obj3;
  let streamingUser;
  ({ guildId, streamingUser } = arg0);
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  const format = intl.format;
  const obj2 = { username: obj3.getName(guildId, null, streamingUser) };
  const k5IKep = intl2.t.k5IKep;
  obj3 = NicknameUtilsDefault;
  return <Text variant="text-xs/medium" color="text-voice-connected" lineClamp={1}>{format(k5IKep, obj2)}</Text>;
});
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/StreamingSubtitle.tsx");

export default tmp3;