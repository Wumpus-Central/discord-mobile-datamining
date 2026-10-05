// _runtime/metro/06332__.js
import react_native from "../00017_react-native.js";
import react from "../00019_react.js";
import GESTURE_SOURCE from "../06113_GESTURE_SOURCE.js";
import cancelAnimation from "01643__.js";
import 06325__ from "06325__.js";

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = cancelAnimation.createAnimatedComponent(SectionList);
const memoResult = memo(module_6325.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;