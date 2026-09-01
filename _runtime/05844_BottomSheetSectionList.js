// _runtime/05844_BottomSheetSectionList.js
import cancelAnimationDefault from "01653_cancelAnimation.js";
import createBottomSheetScrollableComponent from "05837_createBottomSheetScrollableComponent.js";

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").SectionList);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;