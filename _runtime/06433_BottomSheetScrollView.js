// _runtime/06433_BottomSheetScrollView.js
import cancelAnimation from "01638_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6424 = fn(6424);
const memoResult = fn(19).memo(
  module_6424.createBottomSheetScrollableComponent(fn(6212).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent),
);
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
