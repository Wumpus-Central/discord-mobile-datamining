// discord_app/modules/favorites/native/onboarding/FavoritesGuildCoachmarkGraphic.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import native2 from "../../../../design/assets/native.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
  const items = [React3(native2.FavoritesSpotIllustration, { width: 160, height: 90 })];
  obj = { style: tmp.betaTag };
  items[1] = React3(native.BetaTag, obj);
  obj.children = items;
  return React4(View, obj);
}
