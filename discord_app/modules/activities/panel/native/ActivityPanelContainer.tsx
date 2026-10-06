// === Module 17188: ActivityPanelContainer ===

// Module 17188 (ActivityPanelContainer)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ActivityPanelUtils from "ActivityPanelUtils" /* 17189 */;
import ActivityPanelControllerDefault from "ActivityPanelController" /* 17190 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = ActivityPanelUtils;
  const isConnectedToActivityInText = obj2.useIsConnectedToActivityInText();
  if (cResult[0] !== isConnectedToActivityInText) {
    let tmp5 = null;
    if (isConnectedToActivityInText) {
      ActivityPanelControllerDefault;
      tmp5 = <tmp8>{null}</tmp8>;
    }
    cResult[0] = isConnectedToActivityInText;
    cResult[1] = tmp5;
    tmp4 = tmp5;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (() => {
  let tmp2 = null;
  const obj = ActivityPanelUtils;
  if (obj.useIsConnectedToActivityInText()) {
    ActivityPanelControllerDefault;
    tmp2 = <tmp5>{null}</tmp5>;
  }
  return tmp2;
}));
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelContainer.tsx");

export default memoResult;