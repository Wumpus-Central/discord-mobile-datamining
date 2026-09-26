// _runtime/06266_BottomSheetFlatList.js
import cancelAnimation from "01638_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6258 = fn(6258);
const memoResult = fn(19).memo(
  module_6258.createBottomSheetScrollableComponent(fn(6046).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
