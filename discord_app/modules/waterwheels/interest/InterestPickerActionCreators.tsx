// === Module 18973: InterestPickerActionCreators ===

// Module 18973 (InterestPickerActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerActionCreators.tsx");

export function setInterestPickerPicks(gameIds) {
  DispatcherDefault.dispatch({ type: "WATERWHEELS_INTEREST_PICKER_SET_PICKS", gameIds });
}
export function markInterestPickerSeen() {
  DispatcherDefault.dispatch({ type: "WATERWHEELS_INTEREST_PICKER_SEEN" });
}
export function setInterestPickerOpen(open) {
  DispatcherDefault.dispatch({ type: "WATERWHEELS_INTEREST_PICKER_OPEN_CHANGE", open });
}