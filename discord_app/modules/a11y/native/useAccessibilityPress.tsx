// === Module 9759: useAccessibilityPress ===

// Module 9759 (useAccessibilityPress)
import closure_0 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/a11y/native/useAccessibilityPress.tsx");

export default function useAccessibilityPress(first) {
  const React = first;
  closure_1 = arg1;
  closure_2 = React.useRef(first);
  let items = [first];
  const effect = React.useEffect(() => {
    closure_2.current = closure_0;
  }, items);
  const items1 = [arg1];
  return React.useMemo(() => {
    let obj = {
      onAccessibilityAction(nativeEvent) {
        if ("activate" === nativeEvent.nativeEvent.actionName) {
          ref.current();
        }
      },
      accessibilityActions: items
    };
    obj = { name: "activate", label: closure_1 };
    items = [obj];
    return obj;
  }, items1);
};