// discord_app/modules/waterwheels/interest/InterestPickerPicksContext.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
const redux = noop.createContext(null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerPicksContext.tsx");

export default function InterestPickerPicksProvider(children) {
  closure_0 = noop.useRef([]);
  return (
    <redux.Provider
      value={noop.useMemo(
        () => ({
          getPicks() {
            const items = [...closure_1_0.current];
            return items;
          },
          setPicks(arg0) {
            const items = [...arg0];
            ref.current = items;
          },
        }),
        [],
      )}
    >
      {children.children}
    </redux.Provider>
  );
}
export function useInterestPickerPicks() {
  const context = noop.useContext(closure_4);
  _modDef38(null != context, "useInterestPickerPicks must be used within InterestPickerPicksProvider");
  return context;
}
