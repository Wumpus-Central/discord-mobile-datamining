// === Module 16393: StreamingSubtitle ===

// Module 16393 (StreamingSubtitle)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4602 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4758 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/StreamingSubtitle.tsx");

export default function StreamingSubtitle(arg0) {
  ({ guildId, streamingUser } = arg0);
  let obj = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null };
  const intl = util.intl;
  obj = { username: NicknameUtilsDefault.getName(guildId, null, streamingUser) };
  obj.children = intl.format(util.t.k5IKep, obj);
  return jsx(Text_Text.Text, { username: NicknameUtilsDefault.getName(guildId, null, streamingUser) });
};