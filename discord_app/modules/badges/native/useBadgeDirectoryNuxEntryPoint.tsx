// === Module 13187: useBadgeDirectoryNuxEntryPoint ===

// Module 13187 (useBadgeDirectoryNuxEntryPoint)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/useBadgeDirectoryNuxEntryPoint.tsx");

export const useBadgeDirectoryNuxEntryPoint = ReactCompilerGating.isReactCompilerEnabled() ? (function useBadgeDirectoryNuxEntryPoint(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === arg0) {
    if (cResult[1] === arg1) {
      let tmp3 = cResult[2];
    }
    if (cResult[3] !== tmp3) {
      const obj2 = { entryPointRef: tmp2, onOpenBadgeDirectory: tmp3 };
      cResult[3] = tmp3;
      cResult[4] = obj2;
      let tmp4 = obj2;
    } else {
      tmp4 = cResult[4];
    }
    return tmp4;
  }
  const fn = function s() {
    if (closure_0) {
      closure_1(ContentDismissActionType.TAKE_ACTION);
    }
  };
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = fn;
  tmp3 = fn;
}) : (function useBadgeDirectoryNuxEntryPoint(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const obj = { entryPointRef: noop.useRef(null), onOpenBadgeDirectory: null };
  const items = [arg0, arg1];
  obj.onOpenBadgeDirectory = noop.useCallback(() => {
    if (closure_0) {
      closure_1(ContentDismissActionType.TAKE_ACTION);
    }
  }, items);
  return obj;
});