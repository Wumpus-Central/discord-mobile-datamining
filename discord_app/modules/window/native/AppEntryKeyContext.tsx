// discord_app/modules/window/native/AppEntryKeyContext.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

let closure_1 = new LoggerDefault("AppEntryKeyContext");
const main = "main";
let context = noop.createContext(undefined);
let c4 = false;
const size = fn(2);
const result = size.fileFinishedImporting("modules/window/native/AppEntryKeyContext.tsx");

export const DEFAULT_APP_ENTRY_KEY = "main";
export const AppEntryKeyContext = context;
export const useAppEntryKey = function useAppEntryKey() {
  context = context.useContext(context);
  const items = [context];
  const effect = context.useEffect(() => {
    if (!tmp) {
      c4 = true;
      logger.warn('AppEntryKey context was not provided; falling back to default entry key "main".');
    }
  }, items);
  if (context == null) {
    context = main;
  }
  return context;
};
