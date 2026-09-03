// === Module 11827: GameInviteVoiceCount ===

// Module 11827 (GameInviteVoiceCount)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "getVoiceStatesForGuild" /* 4555 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { flexDirection: "row", alignItems: "center", gap: 4, marginLeft: 8 } });
const result = require("set").fileFinishedImporting("modules/game_invite_channels/native/GameInviteVoiceCount.tsx");

export default function GameInviteVoiceCount(channel) {
  channel = channel.channel;
  let obj = channel(586);
  const items = [closure_4];
  const items1 = [channel];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getVoiceStatesForChannel(channel).length, items1);
  let tmp5 = null;
  if (0 !== stateFromStores) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { size: "xs", color: null };
    obj[1] = ThemesDefault.colors.ICON_FEEDBACK_POSITIVE;
    const items2 = [callback(tmp2(5055).VoiceNormalIcon, obj), ];
    obj1 = { variant: "text-sm/medium", color: "text-feedback-positive", children: null };
    obj1[2] = stateFromStores;
    items2[1] = callback(tmp2(4474).Text, obj1);
    obj[1] = items2;
    tmp5 = callback2(View, obj);
  }
  return tmp5;
};