// discord_app/modules/game_profile/native/components/GameProfileRankPill.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { flex: 1, flexDirection: "row", alignItems: "flex-end" }, gameRankPill: null };
createCacheKey = { flexDirection: "row", backgroundColor: require("Themes").colors.WHITE, borderRadius: require("Themes").radii.round, paddingHorizontal: require("Themes").space.PX_8, alignItems: "center", gap: require("Themes").space.PX_4 };
const merged = Object.assign(require("Themes").shadows.SHADOW_LOW);
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/game_profile/native/components/GameProfileRankPill.tsx");

export default function GameProfileRankPill(arg0) {
  let compact;
  let rank;
  ({ rank, compact } = arg0);
  if (compact === undefined) {
    compact = false;
  }
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.gameRankPill, children: null };
  obj = { size: "xxs", color: null };
  obj[1] = importDefault(712).colors.BLACK;
  const items = [callback(require(7647) /* TrophyIcon */.TrophyIcon, obj), ];
  const intl = require(1236) /* getSystemLocale */.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = require(1236) /* getSystemLocale */.t;
  if (compact) {
    const obj1 = { rank: null };
    obj1[0] = rank;
    let str = formatToPlainString(t.UA6RoE, obj1);
  } else {
    const obj2 = { rank: null };
    obj2[0] = rank;
    str = formatToPlainString(t.ehZXlZ, obj2);
  }
  items[1] = callback(require(4281) /* Text */.Text, { variant: "text-xs/bold", color: "text-overlay-dark", children: str.toUpperCase() });
  obj[1] = items;
  obj[1] = closure_5(View, obj);
  return callback(View, obj);
};