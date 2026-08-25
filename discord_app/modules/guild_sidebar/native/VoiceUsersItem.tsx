// === Module 15486: VoiceUsersItem ===

// Module 15486 (VoiceUsersItem)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

noopAll;
let closure_2 = createCacheKey.createStyles({ voiceStates: { paddingRight: 8 }, voiceStatesCollapsed: { paddingRight: 0, flexDirection: "row", flexWrap: "wrap", alignItems: "center" } });
const result = require("set").fileFinishedImporting("modules/guild_sidebar/native/VoiceUsersItem.tsx");

export default function VoiceUsersItem(children) {
  let voiceStatesCollapsed = children.collapsed;
  const tmp = callback();
  let voiceStates = !voiceStatesCollapsed;
  if (!voiceStatesCollapsed) {
    voiceStates = tmp.voiceStates;
  }
  const style = [voiceStates, ];
  if (voiceStatesCollapsed) {
    voiceStatesCollapsed = tmp.voiceStatesCollapsed;
  }
  style[1] = voiceStatesCollapsed;
  return <View style={style}>{arg0.children}</View>;
};