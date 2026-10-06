// _runtime/metro/06339__.js
import react_native from "../00017_react-native.js";
import react from "../00019_react.js";
import GESTURE_SOURCE from "../06120_GESTURE_SOURCE.js";
import cancelAnimation from "01643__.js";
import 06332__ from "06332__.js";

const memo = react.memo;
const SectionList = react_native.SectionList;
const animatedComponent = cancelAnimation.createAnimatedComponent(SectionList);
const memoResult = memo(module_6332.createBottomSheetScrollableComponent(GESTURE_SOURCE.SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;