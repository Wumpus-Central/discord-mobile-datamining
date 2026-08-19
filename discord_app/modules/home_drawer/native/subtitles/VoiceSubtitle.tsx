// discord_app/modules/home_drawer/native/subtitles/VoiceSubtitle.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import getNicknameDefault from "../../../../utils/NicknameUtils.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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