// _runtime/06462_BottomSheetFlatList.js
import cancelAnimation from "01638_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6454 = fn(6454);
const memoResult = fn(19).memo(
  module_6454.createBottomSheetScrollableComponent(fn(6242).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
