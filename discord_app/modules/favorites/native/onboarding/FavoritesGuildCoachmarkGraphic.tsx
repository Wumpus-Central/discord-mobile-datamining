// === Module 14991: FavoritesGuildCoachmarkGraphic ===

// Module 14991 (FavoritesGuildCoachmarkGraphic)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { container: null, betaTag: null };
obj = { alignItems: "center", justifyContent: "center", gap: require("Themes").space.PX_12 };
obj[0] = obj;
obj[1] = { marginLeft: 0 };
let closure_5 = createCacheKey.createStyles(obj);
const result = require("createCacheKey").fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkGraphic.tsx");

export default function FavoritesGuildCoachmarkGraphic() {
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  const items = [callback(require(6790) /* AccountAgeTier10LargeBadge */.FavoritesSpotIllustration, { width: 160, height: 90 }), ];
  obj = { style: tmp.betaTag };
  items[1] = callback(require(1297) /* Button */.BetaTag, obj);
  obj[1] = items;
  return callback2(View, obj);
};