// === Module 11107: ParticipantTitle ===

// Module 11107 (ParticipantTitle)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import getParticipantTitleDefault from "getParticipantTitle" /* 11088 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

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