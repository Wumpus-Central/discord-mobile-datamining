// _runtime/06953_BottomSheetFlatList.js
import cancelAnimation from "01637_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6945 = fn(6945);
const memoResult = fn(19).memo(
  module_6945.createBottomSheetScrollableComponent(fn(6733).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
