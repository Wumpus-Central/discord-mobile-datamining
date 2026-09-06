// === Module 16314: FavoritesGuildCoachmarkGraphic ===

// Module 16314 (FavoritesGuildCoachmarkGraphic)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import native2 from "native" /* 5692 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = { container: null, betaTag: null };
obj = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12 };
obj.container = obj;
obj.betaTag = { marginLeft: 0 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkGraphic.tsx");

export default function FavoritesGuildCoachmarkGraphic() {
  const tmp = closure_5();
  let obj = { style: tmp.container, children: null };
  const items = [React3(native2.FavoritesSpotIllustration, { width: 160, height: 90 }), ];
  obj = { style: tmp.betaTag };
  items[1] = React3(native.BetaTag, obj);
  obj.children = items;
  return React4(View, obj);
};