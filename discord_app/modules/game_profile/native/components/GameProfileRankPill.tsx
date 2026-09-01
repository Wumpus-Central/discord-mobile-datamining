// discord_app/modules/game_profile/native/components/GameProfileRankPill.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import TrophyIcon from "../../../../design/components/Icon/native/redesign/generated/TrophyIcon.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { flex: 1, flexDirection: "row", alignItems: "flex-end" }, gameRankPill: null };
createCacheKey = {
  flexDirection: "row",
  backgroundColor: ThemesDefault.colors.WHITE,
  borderRadius: ThemesDefault.radii.round,
  paddingHorizontal: ThemesDefault.space.PX_8,
  alignItems: "center",
  gap: ThemesDefault.space.PX_4,
};
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
  const items = [callback(TrophyIcon.TrophyIcon, obj)];
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
}
