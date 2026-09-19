// === Module 16655: StreamingSubtitle ===

// Module 16655 (StreamingSubtitle)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4908 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/StreamingSubtitle.tsx");

export default function StreamingSubtitle(arg0) {
  ({ guildId, streamingUser } = arg0);
  const obj = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null };
  const intl = util.intl;
  const obj2 = { username: NicknameUtilsDefault.getName(guildId, null, streamingUser) };
  obj.children = intl.format(util.t.k5IKep, obj2);
  return jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null });
};