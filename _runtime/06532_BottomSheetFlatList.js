// _runtime/06532_BottomSheetFlatList.js
import cancelAnimation from "01656_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6524 = fn(6524);
const memoResult = fn(19).memo(
  module_6524.createBottomSheetScrollableComponent(fn(6312).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
