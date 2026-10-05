// === Module 1487: AppEntryKeyContext ===

// Module 1487 (AppEntryKeyContext)
import LoggerDefault from "Logger" /* 3 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = new LoggerDefault("AppEntryKeyContext");
const main = "main";
new LoggerDefault("AppEntryKeyContext");
let context = react.createContext(undefined);
let c6 = false;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let logger;
  let tmp3;
  let tmp4;
  const obj = context(576);
  const cResult = obj.c(3);
  context = react.useContext(context);
  if (cResult[0] !== context) {
    const fn = function u() {
      const tmp = undefined !== context || c6;
      if (!tmp) {
        c6 = true;
        logger.warn("AppEntryKey context was not provided; falling back to default entry key \"main\".");
      }
    };
    const items = [context];
    cResult[0] = context;
    cResult[1] = fn;
    cResult[2] = items;
    tmp4 = items;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = react.useEffect(tmp3, tmp4);
  if (context == null) {
    context = main;
  }
  return context;
}) : (() => {
  let logger;
  context = react.useContext(context);
  const items = [context];
  const effect = react.useEffect(() => {
    const tmp = undefined !== context || c6;
    if (!tmp) {
      c6 = true;
      logger.warn("AppEntryKey context was not provided; falling back to default entry key \"main\".");
    }
  }, items);
  if (context == null) {
    context = main;
  }
  return context;
});
const result = size.fileFinishedImporting("modules/window/native/AppEntryKeyContext.tsx");

export const DEFAULT_APP_ENTRY_KEY = "main";
export const AppEntryKeyContext = context;
export const useAppEntryKey = tmp4;