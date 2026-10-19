// _runtime/05451_BottomSheetFlatList.js
import cancelAnimation from "01658_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_5443 = fn(5443);
const memoResult = fn(19).memo(
  module_5443.createBottomSheetScrollableComponent(fn(5231).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
