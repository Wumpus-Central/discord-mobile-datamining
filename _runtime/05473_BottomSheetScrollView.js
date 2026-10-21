// _runtime/05473_BottomSheetScrollView.js
import cancelAnimation from "01658_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_5464 = fn(5464);
const memoResult = fn(19).memo(
  module_5464.createBottomSheetScrollableComponent(fn(5252).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
