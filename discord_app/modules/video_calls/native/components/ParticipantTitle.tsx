// === Module 10066: ParticipantTitle ===

// Module 10066 (ParticipantTitle)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import Button from "Button" /* 1178 */;
import getParticipantTitleDefault from "getParticipantTitle" /* 10048 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
createCacheKey = { usernameText: null };
createCacheKey = { fontSize: 14, color: ThemesDefault.colors.WHITE };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/ParticipantTitle.tsx");

export default function ParticipantTitle(arg0) {
  ({ channel, participant, style } = arg0);
  const tmp = callback();
  const items = [tmp.usernameText, style];
  return jsx(Button.LegacyText, { style: items, numberOfLines: 1, children: getParticipantTitleDefault(channel, participant) });
};