// discord_app/modules/window/native/AppEntryKeyContext.tsx
import importAllResult from "noop";

let c0 = importAllResult;
let closure_1 = new require("timestamp")("AppEntryKeyContext");
const main = "main";
let context = importAllResult.createContext(undefined);
let c4 = false;
const tmp2 = new require("timestamp")("AppEntryKeyContext");
const result = require("set").fileFinishedImporting("modules/window/native/AppEntryKeyContext.tsx");

export const DEFAULT_APP_ENTRY_KEY = "main";
export const AppEntryKeyContext = context;
export const useAppEntryKey = function useAppEntryKey() {
  context = context.useContext(context);
  const items = [context];
  const effect = context.useEffect(() => {
    if (!tmp) {
      const outer1_4 = true;
      outer1_1.warn("AppEntryKey context was not provided; falling back to default entry key \"main\".");
    }
  }, items);
  if (context == null) {
    context = main;
  }
  return context;
};