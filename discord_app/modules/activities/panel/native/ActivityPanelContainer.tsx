// === Module 19229: ActivityPanelContainer ===

// Module 19229 (ActivityPanelContainer)
import ActivityPanelControllerDefault from "ActivityPanelController" /* 19231 */;
import ActivityPanelUIDefault from "ActivityPanelUI" /* 19236 */;
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