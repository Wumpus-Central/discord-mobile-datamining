// === Module 15147: useBadgeDirectoryNuxEntryPoint ===

// Module 15147 (useBadgeDirectoryNuxEntryPoint)
import noop from "module_19" /* 19 */;

const ContentDismissActionType = fn(4989).ContentDismissActionType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/useBadgeDirectoryNuxEntryPoint.tsx");

export function useBadgeDirectoryNuxEntryPoint(arg0, arg1) {
  noop = arg0;
  closure_1 = arg1;
  const obj = { entryPointRef: noop.useRef(null), onOpenBadgeDirectory: null };
  items = [arg0, arg1];
  obj.onOpenBadgeDirectory = noop.useCallback(() => {
    if (closure_0) {
      closure_1(ContentDismissActionType.TAKE_ACTION);
    }
  }, items);
  return obj;
}