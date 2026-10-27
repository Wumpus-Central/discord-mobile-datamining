// _runtime/05491_BottomSheetFlatList.js
import cancelAnimation from "01655_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_5483 = fn(5483);
const memoResult = fn(19).memo(
  module_5483.createBottomSheetScrollableComponent(fn(5271).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
