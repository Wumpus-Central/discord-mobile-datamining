// discord_app/modules/a11y/native/useAccessibilityPress.tsx
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/a11y/native/useAccessibilityPress.tsx");

export default function useAccessibilityPress(stateFromStores) {
  const React = stateFromStores;
  let closure_1 = arg1;
  let closure_2 = React.useRef(stateFromStores);
  let items = [stateFromStores];
  const effect = React.useEffect(() => {
    closure_2.current = noop;
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