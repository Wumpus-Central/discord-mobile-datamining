// discord_app/modules/tiny_bronco/native/useDismissOnce.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const ContentDismissActionType = fn(2039).ContentDismissActionType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tiny_bronco/native/useDismissOnce.tsx");

export const useDismissOnce = function useDismissOnce(markAsDismissed) {
  noop = markAsDismissed;
  noop.useRef(false);
  noop.useRef(markAsDismissed);
  const items = [markAsDismissed];
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
};
