// discord_app/modules/a11y/native/useAccessibilityPress.tsx
import noop from "../../../../_runtime/metro/00019__.js";

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
    let obj = {
      onAccessibilityAction(nativeEvent) {
        if ("activate" === nativeEvent.nativeEvent.actionName) {
          ref.current();
        }
      },
      accessibilityActions: null,
    };
    obj = { name: "activate", label };
    const items = [obj];
    obj.accessibilityActions = items;
    return obj;
  }, items1);
}
