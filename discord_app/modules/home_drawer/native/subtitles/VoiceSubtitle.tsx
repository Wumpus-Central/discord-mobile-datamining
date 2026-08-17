// discord_app/modules/home_drawer/native/subtitles/VoiceSubtitle.tsx
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/home_drawer/native/subtitles/VoiceSubtitle.tsx");

export default function VoiceSubtitle(arg0) {
  ({ guildId: require, voiceUsers } = arg0);
  let obj = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null };
  const intl = getSystemLocale.intl;
  obj = { users: null, overflowCount: null };
  const substr = voiceUsers.slice(0, 2);
  const mapped = substr.map((arg0) => closure_1_1(closure_1_2[4]).getName(closure_0, null, arg0));
  obj[0] = mapped.join(", ");
  obj[1] = Math.max(voiceUsers.length - 2, 0);
  obj[3] = intl.format(getSystemLocale.t.r1Vkoc, obj);
  return jsx(Text.Text, { users: null, overflowCount: null });
};