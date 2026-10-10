// === Module 17693: ActivityPanelContainer ===

// Module 17693 (ActivityPanelContainer)
import c from "c" /* 576 */;
import ActivityPanelUtils from "ActivityPanelUtils" /* 17694 */;
import ActivityPanelControllerDefault from "ActivityPanelController" /* 17695 */;
import ActivityPanelUIDefault from "ActivityPanelUI" /* 17703 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelContainer.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityPanelContainer() {
  const cResult = c.c(2);
  const isConnectedToActivityInText = ActivityPanelUtils.useIsConnectedToActivityInText();
  if (cResult[0] !== isConnectedToActivityInText) {
    let tmp5 = null;
    if (isConnectedToActivityInText) {
      const obj3 = { children: jsx(ActivityPanelUIDefault, {}) };
      tmp5 = jsx(ActivityPanelControllerDefault, { children: jsx(ActivityPanelUIDefault, {}) });
    }
    cResult[0] = isConnectedToActivityInText;
    cResult[1] = tmp5;
    let tmp4 = tmp5;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function ActivityPanelContainer() {
  let tmp2 = null;
  if (obj.useIsConnectedToActivityInText()) {
    const obj2 = { children: jsx(ActivityPanelUIDefault, {}) };
    tmp2 = jsx(ActivityPanelControllerDefault, { children: jsx(ActivityPanelUIDefault, {}) });
  }
  return tmp2;
}));