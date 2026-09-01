// discord_app/modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx
import set from "../../../../../../_runtime/00002_set.js";
import dispatcherDefault from "../../../../../Dispatcher.tsx";

const result = set.fileFinishedImporting(
  "modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx",
);

export const setFrecencySectionSelection = function setFrecencySectionSelection(APPS) {
  let obj = dispatcherDefault;
  obj = { type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS };
  obj.dispatch(obj);
};
