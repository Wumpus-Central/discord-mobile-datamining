// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayStarRating.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import StarIcon from "../../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import StarOutlineIcon from "../../../../design/components/Icon/native/redesign/generated/StarOutlineIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function FractionalStar(fillAmount) {
  fillAmount = fillAmount.fillAmount;
  const tmp = closure_6();
  const obj = { style: tmp.star, importantForAccessibility: "no", accessibilityElementsHidden: true, children: null };
  const items = [
    React4(StarOutlineIcon.StarOutlineIcon, {
      size: "custom",
      color: nativeDefault.colors.TEXT_MUTED,
      style: tmp.starIcon,
    }),
  ];
  let tmp4Result = fillAmount > 0;
  if (tmp4Result) {
    const obj3 = { style: null, children: null };
    const items1 = [tmp.starFillMask];
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
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4827);
const obj2 = {
  row: { flexDirection: "row", alignItems: "center", gap: 2 },
  star: null,
  starIcon: null,
  starFillMask: null,
};
let size = { width: nativeDefault.space.PX_10, height: nativeDefault.space.PX_10, position: "relative" };
obj2.star = size;
const size1 = {
  width: nativeDefault.space.PX_10,
  height: nativeDefault.space.PX_10,
  position: "absolute",
  left: 0,
  top: 0,
};
obj2.starIcon = size1;
const rect = { position: "absolute", left: 0, top: 0, height: nativeDefault.space.PX_10, overflow: "hidden" };
obj2.starFillMask = rect;
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayStarRating.tsx");

export default function AppStoreOverlayStarRating(fillAmounts) {
  fillAmounts = fillAmounts.fillAmounts;
  return React4(View, {
    style: closure_6().row,
    children: fillAmounts.map((fillAmount, index) => closure_1_4(FractionalStar, { fillAmount }, index)),
  });
}
