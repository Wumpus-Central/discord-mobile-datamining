// _runtime/06528_BottomSheetFlatList.js
import cancelAnimation from "01656_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6520 = fn(6520);
const memoResult = fn(19).memo(
  module_6520.createBottomSheetScrollableComponent(fn(6308).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
