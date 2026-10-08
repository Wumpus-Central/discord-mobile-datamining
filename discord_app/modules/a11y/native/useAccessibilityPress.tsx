// === Module 8605: useAccessibilityPress ===

// Module 8605 (useAccessibilityPress)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/a11y/native/useAccessibilityPress.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useAccessibilityPress(current, label) {
  const cResult = c.c(6);
  noop.useRef(current);
  if (cResult[0] !== current) {
    const fn = function n() {
      closure_1.current = current;
    };
    const items = [current];
    cResult[0] = current;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = noop.useEffect(tmp2, tmp3);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l(nativeEvent) {
      if ("activate" === nativeEvent.nativeEvent.actionName) {
        ref.current();
      }
    };
    cResult[3] = fn2;
    let tmp5 = fn2;
  } else {
    tmp5 = cResult[3];
  }
  if (cResult[4] !== label) {
    const obj3 = { onAccessibilityAction: tmp5, accessibilityActions: null };
    const obj4 = { name: "activate", label };
    const items1 = [obj4];
    obj3.accessibilityActions = items1;
    cResult[4] = label;
    cResult[5] = obj3;
    let tmp6 = obj3;
  } else {
    tmp6 = cResult[5];
  }
  return tmp6;
}) : (function useAccessibilityPress(current, label) {
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
});