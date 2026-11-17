// === Module 19966: ActivityPanelContainer ===

// Module 19966 (ActivityPanelContainer)
import ActivityPanelControllerDefault from "ActivityPanelController" /* 19968 */;
import ActivityPanelUIDefault from "ActivityPanelUI" /* 19973 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelContainer.tsx");

export default noop.memo(function ActivityPanelContainer() {
  let tmp2 = null;
  if (obj.useIsConnectedToActivityInText()) {
    const obj2 = { children: jsx(ActivityPanelUIDefault, {}) };
    tmp2 = jsx(ActivityPanelControllerDefault, { children: jsx(ActivityPanelUIDefault, {}) });
  }
  return tmp2;
});