// === Module 11537: FrecencySectionStoreActionCreators ===

// Module 11537 (FrecencySectionStoreActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx");

export const setFrecencySectionSelection = function setFrecencySectionSelection(APPS) {
  DispatcherDefault.dispatch({ type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS });
};