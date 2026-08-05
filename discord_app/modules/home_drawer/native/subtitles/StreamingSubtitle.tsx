// discord_app/modules/home_drawer/native/subtitles/StreamingSubtitle.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("modules/home_drawer/native/subtitles/StreamingSubtitle.tsx");

export default function StreamingSubtitle(arg0) {
  let guildId;
  let streamingUser;
  ({ guildId, streamingUser } = arg0);
  let obj = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj = { username: null };
  obj[0] = require("../../../../utils/NicknameUtils.tsx").getName(guildId, null, streamingUser);
  obj[3] = intl.format(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.k5IKep, obj);
  return jsx(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, { username: null });
};