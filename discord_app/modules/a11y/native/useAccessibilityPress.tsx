// === Module 9931: useAccessibilityPress ===

// Module 9931 (useAccessibilityPress)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/a11y/native/useAccessibilityPress.tsx");

export default function useAccessibilityPress(current, label) {
  closure_2 = noop.useRef(current);
  let items = [current];
  const effect = noop.useEffect(() => {
    closure_2.current = current;
  }, items);
  const items1 = [label];
  return noop.useMemo(() => {
    const obj = {
      onAccessibilityAction(nativeEvent) {
        if ("activate" === nativeEvent.nativeEvent.actionName) {
          ref.current();
        }
      },
      accessibilityActions: null
    };
    const items = [{ name: "activate", label }];
    obj.accessibilityActions = items;
    return obj;
  }, items1);
};