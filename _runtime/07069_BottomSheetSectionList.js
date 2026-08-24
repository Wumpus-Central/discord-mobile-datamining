// === Module 7069: BottomSheetSectionList ===

// Module 7069 (BottomSheetSectionList)
import cancelAnimationDefault from "cancelAnimation" /* 1654 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 7062 */;

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").SectionList);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;