// discord_app/modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx
import DispatcherDefault from "../../../../../Dispatcher.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx",
);

export const setFrecencySectionSelection = function setFrecencySectionSelection(APPS) {
  const obj = { type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS };
  obj.dispatch(obj);
};
