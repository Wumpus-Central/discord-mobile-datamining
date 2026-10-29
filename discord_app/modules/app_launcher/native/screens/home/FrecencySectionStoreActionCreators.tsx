// === Module 12019: FrecencySectionStoreActionCreators ===

// Module 12019 (FrecencySectionStoreActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx");

export function setFrecencySectionSelection(APPS) {
  DispatcherDefault.dispatch({ type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS });
}