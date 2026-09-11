// === Module 12148: FrecencySectionStoreActionCreators ===

// Module 12148 (FrecencySectionStoreActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx");

export const setFrecencySectionSelection = function setFrecencySectionSelection(APPS) {
  const obj = { type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS };
  obj.dispatch(obj);
};