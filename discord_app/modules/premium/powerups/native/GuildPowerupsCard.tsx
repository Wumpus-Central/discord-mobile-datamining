// === Module 12368: importDefaultResult1 ===

// Module 12368 (importDefaultResult1)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import PressableCard from "PressableCard" /* 5610 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importDefaultResult from "n" /* 686 */;

require = arg1;
noopAll;
createCacheKey = { cardActive: null, cardExpiring: null, cardRemoving: null };
createCacheKey = { borderColor: null };
const importDefaultResultResult = importDefaultResult(ThemesDefault.unsafe_rawColors.GREEN_360);
createCacheKey[0] = importDefaultResult(ThemesDefault.unsafe_rawColors.GREEN_360).alpha(0.35).hex();
createCacheKey[0] = createCacheKey;
const obj1 = { borderColor: null };
const alphaResult = importDefaultResult(ThemesDefault.unsafe_rawColors.GREEN_360).alpha(0.35);
const importDefaultResult1 = importDefaultResult;
const importDefaultResult1Result = importDefaultResult(ThemesDefault.unsafe_rawColors.YELLOW_300);
obj1[0] = importDefaultResult(ThemesDefault.unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
createCacheKey[1] = obj1;
const obj2 = { borderColor: null };
const alphaResult1 = importDefaultResult(ThemesDefault.unsafe_rawColors.YELLOW_300).alpha(0.35);
const importDefaultResult2 = importDefaultResult;
const importDefaultResult2Result = importDefaultResult(ThemesDefault.unsafe_rawColors.YELLOW_300);
obj2[0] = importDefaultResult(ThemesDefault.unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
createCacheKey[2] = obj2;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const alphaResult2 = importDefaultResult(ThemesDefault.unsafe_rawColors.YELLOW_300).alpha(0.35);
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsCard.tsx");

export default function GuildPowerupsCard(status) {
  status = status.status;
  ({ children, containerStyle, style } = status);
  const merged = Object.assign(status, Object.create(null));
  const tmp2 = callback();
  let obj = { style: containerStyle, children: null };
  obj = { border: "faint", radius: 16, shadow: "none" };
  const merged1 = Object.assign(merged);
  let type;
  if (status != null) {
    type = status.type;
  }
  const items = ["active" === type && tmp2.cardActive, , , ];
  let type1;
  if (status != null) {
    type1 = status.type;
  }
  items[1] = "expiring" === type1 && tmp2.cardExpiring;
  let type2;
  if (status != null) {
    type2 = status.type;
  }
  items[2] = "removing" === type2 && tmp2.cardRemoving;
  items[3] = style;
  obj.style = items;
  obj.children = children;
  obj[1] = jsx(PressableCard.Card, { border: "faint", radius: 16, shadow: "none" });
  return <View border="faint" radius={16} shadow="none" />;
};