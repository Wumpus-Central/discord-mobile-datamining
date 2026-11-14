// === Module 17246: useDismissOnce ===

// Module 17246 (useDismissOnce)
import noop from "module_19" /* 19 */;

const ContentDismissActionType = fn(5152).ContentDismissActionType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/useDismissOnce.tsx");

export function useDismissOnce(markAsDismissed) {
  noop = markAsDismissed;
  noop.useRef(false);
  noop.useRef(markAsDismissed);
  items = [markAsDismissed];
  const effect = noop.useEffect(() => {
    closure_2.current = current;
  }, items);
  const callback = noop.useCallback((AUTO_DISMISS) => {
    if (!ref.current) {
      tmp.current = true;
      ref2.current(AUTO_DISMISS);
    }
  }, []);
  const items1 = [callback];
  const effect1 = noop.useEffect(() => () => callback(constants.AUTO_DISMISS), items1);
  return callback;
}