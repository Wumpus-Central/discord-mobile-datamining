// === Module 5852: BottomSheetSectionList ===

// Module 5852 (BottomSheetSectionList)
import cancelAnimationDefault from "cancelAnimation" /* 1652 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5845 */;

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").SectionList);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;