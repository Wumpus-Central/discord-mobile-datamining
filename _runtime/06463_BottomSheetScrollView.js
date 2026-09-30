// _runtime/06463_BottomSheetScrollView.js
import cancelAnimation from "01638_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6454 = fn(6454);
const memoResult = fn(19).memo(
  module_6454.createBottomSheetScrollableComponent(fn(6242).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
