// === Module 15578: FavoritesGuildCoachmarkGraphic ===

// Module 15578 (FavoritesGuildCoachmarkGraphic)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import AccountAgeTier10LargeBadge from "AccountAgeTier10LargeBadge" /* 5447 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const View = get_ActivityIndicator.View;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { alignItems: "center", justifyContent: "center", gap: ThemesDefault.space.PX_12 };
obj[0] = obj;
obj[1] = { marginLeft: 0 };
let closure_5 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkGraphic.tsx");

export default function FavoritesGuildCoachmarkGraphic() {
  const tmp = callback3();
  const items = [callback(AccountAgeTier10LargeBadge.FavoritesSpotIllustration, { width: 160, height: 90 }), ];
  const obj = { style: tmp.betaTag };
  items[1] = callback(Button.BetaTag, obj);
  obj[1] = items;
  return callback2(View, obj);
};