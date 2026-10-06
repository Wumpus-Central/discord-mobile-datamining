// _runtime/06340_BottomSheetFlatList.js
import react_native from "00017_react-native.js";
import react from "00019_react.js";
import GESTURE_SOURCE from "06120_GESTURE_SOURCE.js";
import cancelAnimation from "metro/01643__.js";
import 06332__ from "metro/06332__.js";

const memo = react.memo;
const FlatList = react_native.FlatList;
const animatedComponent = cancelAnimation.createAnimatedComponent(FlatList);
const memoResult = memo(module_6332.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;