// _runtime/05527_BottomSheetFlatList.js
import cancelAnimation from "01656_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_5519 = fn(5519);
const memoResult = fn(19).memo(
  module_5519.createBottomSheetScrollableComponent(fn(5307).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
