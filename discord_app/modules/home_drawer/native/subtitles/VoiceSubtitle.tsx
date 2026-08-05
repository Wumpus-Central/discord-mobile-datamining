// discord_app/modules/home_drawer/native/subtitles/VoiceSubtitle.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("modules/home_drawer/native/subtitles/VoiceSubtitle.tsx");

export default function VoiceSubtitle(arg0) {
  let require;
  let voiceUsers;
  ({ guildId: require, voiceUsers } = arg0);
  let obj = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj = { users: null, overflowCount: null };
  const substr = voiceUsers.slice(0, 2);
  const mapped = substr.map((arg0) => outer1_1(outer1_2[4]).getName(closure_0, null, arg0));
  obj[0] = mapped.join(", ");
  obj[1] = Math.max(voiceUsers.length - 2, 0);
  obj[3] = intl.format(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.r1Vkoc, obj);
  return jsx(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, { users: null, overflowCount: null });
};