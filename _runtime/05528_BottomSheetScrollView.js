// _runtime/05528_BottomSheetScrollView.js
import cancelAnimation from "01656_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_5519 = fn(5519);
const memoResult = fn(19).memo(
  module_5519.createBottomSheetScrollableComponent(fn(5307).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
