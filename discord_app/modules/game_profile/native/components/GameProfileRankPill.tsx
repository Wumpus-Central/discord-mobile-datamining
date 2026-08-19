// === Module 9132: GameProfileRankPill ===

// Module 9132 (GameProfileRankPill)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import TrophyIcon from "TrophyIcon" /* 8010 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { flexDirection: "row", backgroundColor: ThemesDefault.colors.WHITE, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, alignItems: "center", gap: ThemesDefault.space.PX_4 };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/game_profile/native/components/GameProfileRankPill.tsx");

export default function GameProfileRankPill(arg0) {
  ({ rank, compact } = arg0);
  if (compact === undefined) {
    compact = false;
  }
  const tmp = callback2();
  const obj = { size: "xxs", color: ThemesDefault.colors.BLACK };
  const items = [callback(TrophyIcon.TrophyIcon, obj), ];
  const intl = getSystemLocale.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = getSystemLocale.t;
  if (compact) {
    obj1 = { rank: null };
    obj1[0] = rank;
    let str = formatToPlainString(t.UA6RoE, obj1);
  } else {
    const obj2 = { rank: null };
    obj2[0] = rank;
    str = formatToPlainString(t.ehZXlZ, obj2);
  }
  items[1] = callback(Text.Text, { variant: "text-xs/bold", color: "text-overlay-dark", children: str.toUpperCase() });
  obj[1] = items;
  obj[1] = callback(View, obj);
  return callback(View, obj);
};