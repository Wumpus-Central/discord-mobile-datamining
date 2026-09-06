// _runtime/06847_BottomSheetSectionList.js
import cancelAnimationDefault from "01636_cancelAnimation.js";
import createBottomSheetScrollableComponent from "06840_createBottomSheetScrollableComponent.js";

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").SectionList);
const memoResult = require("noop").memo(
  createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(
    require("GESTURE_SOURCE").SCROLLABLE_TYPE.SECTIONLIST,
    animatedComponent,
  ),
);
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
