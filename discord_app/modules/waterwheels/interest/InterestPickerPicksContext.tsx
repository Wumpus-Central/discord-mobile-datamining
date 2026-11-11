// === Module 20186: InterestPickerPicksContext ===

// Module 20186 (InterestPickerPicksContext)
import _modDef38 from "module_38" /* 38 */;
import InterestPickerActionCreators from "InterestPickerActionCreators" /* 18978 */;
import noop from "module_19" /* 19 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 10151 */;

require = fn;
const jsx = fn(21).jsx;
const redux = noop.createContext(null);
const value = {
  getPicks() {
    return InterestPickerSessionStore.getPicks();
  },
  setPicks(gameIds) {
    return InterestPickerActionCreators.setInterestPickerPicks(gameIds);
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerPicksContext.tsx");

export default function InterestPickerPicksProvider(children) {
  return <redux.Provider value={value}>{children.children}</redux.Provider>;
};
export function useInterestPickerPicks() {
  const context = noop.useContext(closure_6);
  _modDef38(null != context, "useInterestPickerPicks must be used within InterestPickerPicksProvider");
  return context;
}