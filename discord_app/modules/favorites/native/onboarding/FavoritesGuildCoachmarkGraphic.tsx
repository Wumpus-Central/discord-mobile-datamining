// === Module 16136: FavoritesGuildCoachmarkGraphic ===

// Module 16136 (FavoritesGuildCoachmarkGraphic)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ThemesDefault from "Themes" /* 709 */;
import Button from "Button" /* 1296 */;
import AccountAgeTier10LargeBadge from "AccountAgeTier10LargeBadge" /* 6265 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const View = get_ActivityIndicator.View;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { container: null, betaTag: null };
obj = { alignItems: "center", justifyContent: "center", gap: ThemesDefault.space.PX_12 };
obj[0] = obj;
obj[1] = { marginLeft: 0 };
let closure_5 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkGraphic.tsx");

export default function FavoritesGuildCoachmarkGraphic() {
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  const items = [callback(AccountAgeTier10LargeBadge.FavoritesSpotIllustration, { width: 160, height: 90 }), ];
  obj = { style: tmp.betaTag };
  items[1] = callback(Button.BetaTag, obj);
  obj[1] = items;
  return callback2(View, obj);
};