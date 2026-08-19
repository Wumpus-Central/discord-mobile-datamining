// discord_app/modules/a11y/native/useAccessibilityPress.tsx
import noop from "../../../../_runtime/00019_noop.js";

const result = require("obj132").fileFinishedImporting("modules/a11y/native/useAccessibilityPress.tsx");

export default function useAccessibilityPress(stateFromStores) {
  const React = stateFromStores;
  closure_1 = arg1;
  closure_2 = React.useRef(stateFromStores);
  let items = [stateFromStores];
  const effect = React.useEffect(() => {
    closure_2.current = closure_0;
  }, items);
  const items1 = [arg1];
  return React.useMemo(() => {
    const obj = { name: "activate", label: closure_1 };
    const items = [obj];
    return obj;
  }, items1);
};