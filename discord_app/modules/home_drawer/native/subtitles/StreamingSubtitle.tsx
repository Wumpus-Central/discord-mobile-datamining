// discord_app/modules/home_drawer/native/subtitles/StreamingSubtitle.tsx
import "noop";
import { jsx } from "jsxProd";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { getNickname } from "../../../../utils/NicknameUtils.tsx";

const require = arg1;
const result = require("Text").fileFinishedImporting("modules/home_drawer/native/subtitles/StreamingSubtitle.tsx");

export default function StreamingSubtitle(arg0) {
  let guildId;
  let streamingUser;
  ({ guildId, streamingUser } = arg0);
  let obj = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj = { username: null };
  obj[0] = getNickname.getName(guildId, null, streamingUser);
  obj[3] = intl.format(getSystemLocale /* getSystemLocale */.t.k5IKep, obj);
  return jsx(Text /* Text */.Text, { username: null });
};