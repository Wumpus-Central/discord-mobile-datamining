// === Module 16656: VoiceSubtitle ===

// Module 16656 (VoiceSubtitle)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4908 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/VoiceSubtitle.tsx");

export default function VoiceSubtitle(arg0) {
  ({ guildId: require, voiceUsers } = arg0);
  const obj = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null };
  const intl = util.intl;
  const obj2 = { users: null, overflowCount: null };
  const substr = voiceUsers.slice(0, 2);
  const mapped = substr.map((item) => NicknameUtilsDefault.getName(require, null, item));
  obj2.users = mapped.join(", ");
  obj2.overflowCount = Math.max(voiceUsers.length - 2, 0);
  obj.children = intl.format(util.t.r1Vkoc, obj2);
  return jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null });
};