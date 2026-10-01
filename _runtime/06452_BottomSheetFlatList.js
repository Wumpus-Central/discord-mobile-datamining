// _runtime/06452_BottomSheetFlatList.js
import cancelAnimation from "01638_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6444 = fn(6444);
const memoResult = fn(19).memo(
  module_6444.createBottomSheetScrollableComponent(fn(6232).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
