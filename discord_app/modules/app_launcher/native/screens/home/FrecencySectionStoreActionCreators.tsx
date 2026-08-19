// discord_app/modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import dispatcherDefault from "../../../../../Dispatcher.tsx";

const result = obj132.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx");

export const setFrecencySectionSelection = function setFrecencySectionSelection(APPS) {
  const obj = { type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS };
  obj.dispatch(obj);
};