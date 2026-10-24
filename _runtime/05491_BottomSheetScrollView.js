// _runtime/05491_BottomSheetScrollView.js
import cancelAnimation from "01658_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_5482 = fn(5482);
const memoResult = fn(19).memo(
  module_5482.createBottomSheetScrollableComponent(fn(5270).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
