// discord_app/modules/waterwheels/interest/InterestPickerPicksContext.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import InterestPickerActionCreators from "InterestPickerActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import InterestPickerSessionStore from "InterestPickerSessionStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const redux = noop.createContext(null);
const value = {
  getPicks() {
    return InterestPickerSessionStore.getPicks();
  },
  setPicks(gameIds) {
    return InterestPickerActionCreators.setInterestPickerPicks(gameIds);
  },
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerPicksContext.tsx");

export default function InterestPickerPicksProvider(children) {
  return <redux.Provider value={value}>{children.children}</redux.Provider>;
}
export function useInterestPickerPicks() {
  const context = noop.useContext(closure_6);
  _modDef38(null != context, "useInterestPickerPicks must be used within InterestPickerPicksProvider");
  return context;
}
