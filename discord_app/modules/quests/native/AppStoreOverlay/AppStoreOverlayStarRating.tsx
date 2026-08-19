// === Module 10699: FractionalStar ===

// Module 10699 (FractionalStar)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import StarIcon from "StarIcon" /* 9410 */;
import StarOutlineIcon from "StarOutlineIcon" /* 9412 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
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