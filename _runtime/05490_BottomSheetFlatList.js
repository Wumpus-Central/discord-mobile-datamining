// _runtime/05490_BottomSheetFlatList.js
import cancelAnimation from "01658_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_5482 = fn(5482);
const memoResult = fn(19).memo(
  module_5482.createBottomSheetScrollableComponent(fn(5270).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
