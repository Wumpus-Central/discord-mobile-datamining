// discord_app/modules/waterwheels/interest/InterestPickerActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerActionCreators.tsx");

export function setInterestPickerPicks(gameIds) {
  DispatcherDefault.dispatch({ type: "WATERWHEELS_INTEREST_PICKER_SET_PICKS", gameIds });
}
export function markInterestPickerSeen() {
  DispatcherDefault.dispatch({ type: "WATERWHEELS_INTEREST_PICKER_SEEN" });
}
