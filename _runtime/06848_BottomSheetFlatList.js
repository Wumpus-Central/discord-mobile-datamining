// _runtime/06848_BottomSheetFlatList.js
import cancelAnimation from "01636_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6840 = fn(6840);
const memoResult = fn(19).memo(
  module_6840.createBottomSheetScrollableComponent(fn(6628).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
