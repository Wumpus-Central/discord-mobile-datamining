// discord_app/modules/home_drawer/native/subtitles/StreamingSubtitle.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import getNicknameDefault from "../../../../utils/NicknameUtils.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/home_drawer/native/subtitles/StreamingSubtitle.tsx");

export default function StreamingSubtitle(arg0) {
  ({ guildId, streamingUser } = arg0);
  let obj = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null };
  const intl = getSystemLocale.intl;
  obj = { username: getNicknameDefault.getName(guildId, null, streamingUser) };
  obj[3] = intl.format(getSystemLocale.t.k5IKep, obj);
  return jsx(Text.Text, { username: getNicknameDefault.getName(guildId, null, streamingUser) });
}
