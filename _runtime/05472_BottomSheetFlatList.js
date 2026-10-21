// _runtime/05472_BottomSheetFlatList.js
import cancelAnimation from "01658_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_5464 = fn(5464);
const memoResult = fn(19).memo(
  module_5464.createBottomSheetScrollableComponent(fn(5252).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
