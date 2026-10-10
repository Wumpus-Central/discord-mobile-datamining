// _runtime/06527_BottomSheetFlatList.js
import cancelAnimation from "01656_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6519 = fn(6519);
const memoResult = fn(19).memo(
  module_6519.createBottomSheetScrollableComponent(fn(6307).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
