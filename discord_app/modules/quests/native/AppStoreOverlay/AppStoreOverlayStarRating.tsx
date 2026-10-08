// === Module 10591: AppStoreOverlayStarRating ===

// Module 10591 (AppStoreOverlayStarRating)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import StarIcon from "StarIcon" /* 9483 */;
import StarOutlineIcon from "StarOutlineIcon" /* 9485 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = { row: { flexDirection: "row", alignItems: "center", gap: 2 }, star: null, starIcon: null, starFillMask: null };
let size = { width: nativeDefault.space.PX_10, height: nativeDefault.space.PX_10, position: "relative" };
obj2.star = size;
const size1 = { width: nativeDefault.space.PX_10, height: nativeDefault.space.PX_10, position: "absolute", left: 0, top: 0 };
obj2.starIcon = size1;
const rect = { position: "absolute", left: 0, top: 0, height: nativeDefault.space.PX_10, overflow: "hidden" };
obj2.starFillMask = rect;
let closure_6 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function FractionalStar(fillAmount) {
  const cResult = c.c(10);
  fillAmount = fillAmount.fillAmount;
  const tmp4 = closure_6();
  if (cResult[0] !== tmp4.starIcon) {
    const obj2 = { size: "custom", color: nativeDefault.colors.TEXT_MUTED, style: tmp4.starIcon };
    const tmp8 = React4(StarOutlineIcon.StarOutlineIcon, obj2);
    cResult[0] = tmp4.starIcon;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === fillAmount) {
    if (cResult[3] === tmp4.starFillMask) {
      if (cResult[4] === tmp4.starIcon) {
        let tmp9 = cResult[5];
      }
      if (cResult[6] === tmp4.star) {
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp9) {
            let tmp14 = cResult[9];
          }
          return tmp14;
        }
      }
      const obj3 = { style: tmp4.star, importantForAccessibility: "no", accessibilityElementsHidden: true, children: null };
      const items = [tmp5, tmp9];
      obj3.children = items;
      const tmp17 = hasOwnProperty(View, obj3);
      cResult[6] = tmp4.star;
      cResult[7] = tmp5;
      cResult[8] = tmp9;
      cResult[9] = tmp17;
      tmp14 = tmp17;
    }
  }
  let tmp10 = fillAmount > 0;
  if (tmp10) {
    const obj4 = { style: null, children: null };
    const items1 = [tmp4.starFillMask, ];
    const obj5 = { width: nativeDefault.space.PX_10 * fillAmount };
    items1[1] = obj5;
    obj4.style = items1;
    const obj6 = { size: "custom", color: nativeDefault.colors.TEXT_MUTED, style: tmp4.starIcon };
    obj4.children = React4(StarIcon.StarIcon, obj6);
    tmp10 = React4(View, obj4);
  }
  cResult[2] = fillAmount;
  cResult[3] = tmp4.starFillMask;
  cResult[4] = tmp4.starIcon;
  cResult[5] = tmp10;
  tmp9 = tmp10;
}) : (function FractionalStar(fillAmount) {
  fillAmount = fillAmount.fillAmount;
  const tmp = closure_6();
  const obj = { style: tmp.star, importantForAccessibility: "no", accessibilityElementsHidden: true, children: null };
  const items = [React4(StarOutlineIcon.StarOutlineIcon, { size: "custom", color: nativeDefault.colors.TEXT_MUTED, style: tmp.starIcon }), ];
  let tmp4Result = fillAmount > 0;
  if (tmp4Result) {
    const obj3 = { style: null, children: null };
    const items1 = [tmp.starFillMask, ];
    const obj4 = { width: nativeDefault.space.PX_10 * fillAmount };
    items1[1] = obj4;
    obj3.style = items1;
    const obj5 = { size: "custom", color: nativeDefault.colors.TEXT_MUTED, style: tmp.starIcon };
    obj3.children = React4(StarIcon.StarIcon, obj5);
    tmp4Result = React4(View, obj3);
  }
  items[1] = tmp4Result;
  obj.children = items;
  return hasOwnProperty(View, obj);
});
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayStarRating.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppStoreOverlayStarRating(fillAmounts) {
  const cResult = c.c(6);
  fillAmounts = fillAmounts.fillAmounts;
  const tmp2 = closure_6();
  if (cResult[0] !== fillAmounts) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function p(fillAmount, arg1) {
        return closure_1_4(closure_1_7, { fillAmount }, arg1);
      };
      cResult[2] = fn;
      let tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    const mapped = fillAmounts.map(tmp6);
    cResult[0] = fillAmounts;
    cResult[1] = mapped;
  } else {
    if (cResult[3] === tmp2.row) {
      if (cResult[4] === tmp4) {
        let tmp9 = cResult[5];
      }
      return tmp9;
    }
    const obj2 = { style: tmp3, children: cResult[1] };
    const tmp12 = React4(View, obj2);
    cResult[3] = tmp2.row;
    cResult[4] = cResult[1];
    cResult[5] = tmp12;
    tmp9 = tmp12;
  }
}) : (function AppStoreOverlayStarRating(fillAmounts) {
  fillAmounts = fillAmounts.fillAmounts;
  return React4(View, { style: closure_6().row, children: fillAmounts.map((fillAmount, index) => closure_1_4(closure_1_7, { fillAmount }, index)) });
});