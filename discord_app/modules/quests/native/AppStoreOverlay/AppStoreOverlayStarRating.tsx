// === Module 11505: AppStoreOverlayStarRating ===

// Module 11505 (AppStoreOverlayStarRating)
import nativeDefault from "native" /* 576 */;
import StarIcon from "StarIcon" /* 10235 */;
import StarOutlineIcon from "StarOutlineIcon" /* 10241 */;
import noop from "module_19" /* 19 */;

require = fn;
function FractionalStar(fillAmount) {
  fillAmount = fillAmount.fillAmount;
  const tmp = closure_6();
  let obj = { style: tmp.star, importantForAccessibility: "no", accessibilityElementsHidden: true, children: null };
  obj = { size: "custom", color: nativeDefault.colors.TEXT_MUTED, style: tmp.starIcon };
  const items = [React4(StarOutlineIcon.StarOutlineIcon, obj), ];
  let tmp4Result = fillAmount > 0;
  if (tmp4Result) {
    obj = { style: null, children: null };
    const items1 = [tmp.starFillMask, ];
    const obj1 = { width: nativeDefault.space.PX_10 * fillAmount };
    items1[1] = obj1;
    obj.style = items1;
    const obj2 = { size: "custom", color: nativeDefault.colors.TEXT_MUTED, style: tmp.starIcon };
    obj.children = React4(StarIcon.StarIcon, obj2);
    tmp4Result = React4(View, obj);
  }
  items[1] = tmp4Result;
  obj.children = items;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
const createStyles = { row: { flexDirection: "row", alignItems: "center", gap: 2 }, star: null, starIcon: null, starFillMask: null };
let size = { width: nativeDefault.space.PX_10, height: nativeDefault.space.PX_10, position: "relative" };
createStyles.star = size;
const size1 = { width: nativeDefault.space.PX_10, height: nativeDefault.space.PX_10, position: "absolute", left: 0, top: 0 };
createStyles.starIcon = size1;
const rect = { position: "absolute", left: 0, top: 0, height: nativeDefault.space.PX_10, overflow: "hidden" };
createStyles.starFillMask = rect;
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayStarRating.tsx");

export default function AppStoreOverlayStarRating(fillAmounts) {
  fillAmounts = fillAmounts.fillAmounts;
  return React4(View, { style: closure_6().row, children: fillAmounts.map((fillAmount, index) => closure_1_4(FractionalStar, { fillAmount }, index)) });
};