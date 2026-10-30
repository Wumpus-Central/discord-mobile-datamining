// _runtime/05492_BottomSheetScrollView.js
import cancelAnimation from "01651_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_5483 = fn(5483);
const memoResult = fn(19).memo(
  module_5483.createBottomSheetScrollableComponent(fn(5271).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
