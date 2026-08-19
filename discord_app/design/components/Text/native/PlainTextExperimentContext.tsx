// discord_app/design/components/Text/native/PlainTextExperimentContext.tsx
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

let c0 = importAllResult;
const context = importAllResult.createContext(false);
const result = require("obj132").fileFinishedImporting("design/components/Text/native/PlainTextExperimentContext.tsx");

export const PlainTextExperimentProvider = function PlainTextExperimentProvider(enabled) {
  return <closure_2 value={enabled.enabled}>{enabled.children}</closure_2>;
};
export const usePlainTextExperimentEnabled = function usePlainTextExperimentEnabled() {
  return importAllResult.useContext(closure_2);
};