// === Module 1497: context ===

// Module 1497 (context)
import timestampDefault from "timestamp" /* 3 */;
import importAllResult from "noop" /* 19 */;

let c0 = importAllResult;
let closure_1 = new timestampDefault("AppEntryKeyContext");
const main = "main";
let context = importAllResult.createContext(undefined);
let c4 = false;
const tmp2 = new timestampDefault("AppEntryKeyContext");
const result = require("obj132").fileFinishedImporting("modules/window/native/AppEntryKeyContext.tsx");

export const DEFAULT_APP_ENTRY_KEY = "main";
export const AppEntryKeyContext = context;
export const useAppEntryKey = function useAppEntryKey() {
  context = context.useContext(context);
  const items = [context];
  const effect = context.useEffect(() => {
    if (!tmp) {
      c4 = true;
      closure_1_1.warn("AppEntryKey context was not provided; falling back to default entry key \"main\".");
    }
    tmp = undefined !== context || c4;
  }, items);
  if (context == null) {
    context = main;
  }
  return context;
};