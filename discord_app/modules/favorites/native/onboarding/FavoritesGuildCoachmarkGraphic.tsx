// discord_app/modules/favorites/native/onboarding/FavoritesGuildCoachmarkGraphic.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import AccountAgeTier10LargeBadge from "../../../../design/assets/native.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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
  const items = [callback(AccountAgeTier10LargeBadge.FavoritesSpotIllustration, { width: 160, height: 90 })];
  obj = { style: tmp.betaTag };
  items[1] = callback(Button.BetaTag, obj);
  obj[1] = items;
  return callback2(View, obj);
}
