// === Module 16303: VoiceSubtitle ===

// Module 16303 (VoiceSubtitle)
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5048 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/VoiceSubtitle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(7);
  guildId = guildId.guildId;
  const voiceUsers = guildId.voiceUsers;
  if (cResult[0] === guildId) {
    if (cResult[1] === voiceUsers) {
      if (cResult[5] !== cResult[2]) {
        const obj2 = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: tmp4 };
        const tmp9 = jsx(tmp(4892).Text, { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: tmp4 });
        cResult[5] = tmp4;
        cResult[6] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[6];
      }
      return tmp7;
    }
  }
  if (cResult[3] !== guildId) {
    const fn = function l(arg0) {
      return NicknameUtilsDefault.getName(guildId, null, arg0);
    };
    cResult[3] = guildId;
    cResult[4] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[4];
  }
  const intl = tmp(1126).intl;
  const obj3 = { users: null, overflowCount: null };
  const substr = voiceUsers.slice(0, 2);
  const mapped = substr.map(tmp5);
  obj3.users = mapped.join(", ");
  obj3.overflowCount = Math.max(voiceUsers.length - 2, 0);
  const obj = guildId(576);
  cResult[0] = guildId;
  cResult[1] = voiceUsers;
  cResult[2] = intl.format(guildId(1126).t.r1Vkoc, obj3);
  const formatResult = intl.format(guildId(1126).t.r1Vkoc, obj3);
}) : ((arg0) => {
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
});