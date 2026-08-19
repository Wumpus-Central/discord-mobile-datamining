// === Module 4738: PlainTextExperimentProvider ===

// Module 4738 (PlainTextExperimentProvider)
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

let c0 = importAllResult;
const context = importAllResult.createContext(false);
const result = require("obj132").fileFinishedImporting("design/components/Text/native/PlainTextExperimentContext.tsx");

export const PlainTextExperimentProvider = function PlainTextExperimentProvider(enabled) {
  return <closure_2 value={enabled.enabled}>{enabled.children}</closure_2>;
};
export const usePlainTextExperimentEnabled = function usePlainTextExperimentEnabled() {
  return importAllResult.useContext(closure_2);
};