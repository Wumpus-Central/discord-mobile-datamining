// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayStarRating.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import StarIcon from "../../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import StarOutlineIcon from "../../../../design/components/Icon/native/redesign/generated/StarOutlineIcon.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function FractionalStar(fillAmount) {
  fillAmount = fillAmount.fillAmount;
  const tmp = callback2();
  let obj = { size: "custom", color: ThemesDefault.colors.TEXT_MUTED, style: tmp.starIcon };
  const items = [callback(StarOutlineIcon.StarOutlineIcon, obj), ];
  let tmp4Result = fillAmount > 0;
  if (tmp4Result) {
    obj = { style: null, children: null };
    const items1 = [tmp.starFillMask, ];
    obj1 = { width: null };
    obj1[0] = ThemesDefault.space.PX_10 * fillAmount;
    items1[1] = obj1;
    obj[0] = items1;
    const obj2 = { size: "custom", color: null, style: null };
    obj2[1] = ThemesDefault.colors.TEXT_MUTED;
    obj2[2] = tmp.starIcon;
    obj[1] = callback(StarIcon.StarIcon, obj2);
    tmp4Result = callback(View, obj);
  }
  items[1] = tmp4Result;
  obj[3] = items;
  return callback(View, obj);
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { width: ThemesDefault.space.PX_10, height: ThemesDefault.space.PX_10, position: "relative" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: ThemesDefault.space.PX_10, height: ThemesDefault.space.PX_10, position: "absolute", left: 0, top: 0 };
createCacheKey[3] = { position: "absolute", left: 0, top: 0, height: ThemesDefault.space.PX_10, overflow: "hidden" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayStarRating.tsx");

export default function AppStoreOverlayStarRating(fillAmounts) {
  fillAmounts = fillAmounts.fillAmounts;
  return callback(View, { style: callback2().row, children: fillAmounts.map((item, index) => callback(closure_7, { fillAmount: item }, index)) });
};