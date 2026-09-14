// === Module 16412: FavoritesGuildCoachmarkGraphic ===

// Module 16412 (FavoritesGuildCoachmarkGraphic)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1176 */;
import native2 from "native" /* 5773 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4636 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = { container: { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12 }, betaTag: { marginLeft: 0 } };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/favorites/native/onboarding/FavoritesGuildCoachmarkGraphic.tsx");

export default function FavoritesGuildCoachmarkGraphic() {
  const tmp = closure_5();
  const obj = { style: tmp.container, children: null };
  const items = [React3(native2.FavoritesSpotIllustration, { width: 160, height: 90 }), React3(native.BetaTag, { style: tmp.betaTag })];
  obj.children = items;
  return React4(View, obj);
};