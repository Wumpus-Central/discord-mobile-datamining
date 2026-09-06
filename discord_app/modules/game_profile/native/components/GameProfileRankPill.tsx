// === Module 8716: GameProfileRankPill ===

// Module 8716 (GameProfileRankPill)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Text from "Text" /* 4556 */;
import TrophyIcon from "TrophyIcon" /* 8717 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { flex: 1, flexDirection: "row", alignItems: "flex-end" }, gameRankPill: null };
createCacheKey = { flexDirection: "row", backgroundColor: ThemesDefault.colors.WHITE, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, alignItems: "center", gap: ThemesDefault.space.PX_4 };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/game_profile/native/components/GameProfileRankPill.tsx");

export default function GameProfileRankPill(arg0) {
  ({ rank, compact } = arg0);
  if (compact === undefined) {
    compact = false;
  }
  const tmp = callback2();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.gameRankPill, children: null };
  obj = { size: "xxs", color: ThemesDefault.colors.BLACK };
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
  obj[1] = closure_5(View, obj);
  return callback(View, obj);
};