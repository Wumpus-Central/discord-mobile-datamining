// === Module 15587: VoiceSubtitle ===

// Module 15587 (VoiceSubtitle)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import getNicknameDefault from "getNickname" /* 4796 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/home_drawer/native/subtitles/VoiceSubtitle.tsx");

export default function VoiceSubtitle(arg0) {
  ({ guildId: require, voiceUsers } = arg0);
  const intl = getSystemLocale.intl;
  const obj = { users: null, overflowCount: null };
  const substr = voiceUsers.slice(0, 2);
  const mapped = substr.map((item, index) => getNicknameDefault.getName(closure_0, null, item));
  obj[0] = mapped.join(", ");
  obj[1] = Math.max(voiceUsers.length - 2, 0);
  obj[3] = intl.format(getSystemLocale.t.r1Vkoc, obj);
  return jsx(Text.Text, { users: null, overflowCount: null });
};