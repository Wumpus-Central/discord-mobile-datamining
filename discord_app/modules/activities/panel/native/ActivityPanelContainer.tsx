// discord_app/modules/activities/panel/native/ActivityPanelContainer.tsx
import ActivityPanelControllerDefault from "ActivityPanelController.tsx";
import ActivityPanelUIDefault from "ActivityPanelUI.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
