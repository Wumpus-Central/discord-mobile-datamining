// _runtime/06528_BottomSheetScrollView.js
import cancelAnimation from "01656_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6519 = fn(6519);
const memoResult = fn(19).memo(
  module_6519.createBottomSheetScrollableComponent(fn(6307).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
