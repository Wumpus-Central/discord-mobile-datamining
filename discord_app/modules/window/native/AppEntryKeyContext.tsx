// discord_app/modules/window/native/AppEntryKeyContext.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_3 = new LoggerDefault("AppEntryKeyContext");
const main = "main";
let context = noop.createContext(undefined);
let c6 = false;
const ReactCompilerGating = fn(558);
const tmp2 = new LoggerDefault("AppEntryKeyContext");
const size = fn(2);
const result = size.fileFinishedImporting("modules/window/native/AppEntryKeyContext.tsx");

export const DEFAULT_APP_ENTRY_KEY = "main";
export const AppEntryKeyContext = context;
export const useAppEntryKey = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAppEntryKey() {
      const cResult = context(576).c(3);
      context = noop.useContext(context);
      if (cResult[0] !== context) {
        const fn = function u() {
          if (!tmp) {
            c6 = true;
            logger.warn('AppEntryKey context was not provided; falling back to default entry key "main".');
          }
          tmp = undefined !== context || c6;
        };
        const items = [context];
        cResult[0] = context;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp4 = items;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      const effect = noop.useEffect(tmp3, tmp4);
      if (context == null) {
        context = main;
      }
      return context;
    }
  : function useAppEntryKey() {
      context = noop.useContext(context);
      const items = [context];
      const effect = noop.useEffect(() => {
        if (!tmp) {
          c6 = true;
          logger.warn('AppEntryKey context was not provided; falling back to default entry key "main".');
        }
        tmp = undefined !== context || c6;
      }, items);
      if (context == null) {
        context = main;
      }
      return context;
    };
