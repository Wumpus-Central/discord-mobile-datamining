// === Module 5628: PlainTextExperimentContext ===

// Module 5628 (PlainTextExperimentContext)
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const context = noop.createContext(false);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Text/native/PlainTextExperimentContext.tsx");

export function PlainTextExperimentProvider(enabled) {
  return <closure_2 value={enabled.enabled}>{enabled.children}</closure_2>;
}
export function usePlainTextExperimentEnabled() {
  return noop.useContext(closure_2);
}