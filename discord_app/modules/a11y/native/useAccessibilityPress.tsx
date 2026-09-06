// === Module 9759: useAccessibilityPress ===

// Module 9759 (useAccessibilityPress)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/a11y/native/useAccessibilityPress.tsx");

export default function useAccessibilityPress(set, label) {
  const current = set;
  closure_2 = noop.useRef(set);
  let items = [set];
  const effect = noop.useEffect(() => {
    closure_2.current = current;
  }, items);
  const items1 = [label];
  return noop.useMemo(() => {
    let obj = {
      onAccessibilityAction(nativeEvent) {
        if ("activate" === nativeEvent.nativeEvent.actionName) {
          ref.current();
        }
      },
      accessibilityActions: null
    };
    obj = { name: "activate", label };
    const items = [obj];
    obj.accessibilityActions = items;
    return obj;
  }, items1);
};