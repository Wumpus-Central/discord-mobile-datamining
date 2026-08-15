// _runtime/07011_BottomSheetHandle.js
import noop from "noop";
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let c3;
let c4;
let c5;
let closure_6;
const useMemo = noop.useMemo;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const memoResult = noop.memo(function BottomSheetHandleComponent(style) {
  style = style.style;
  const indicatorStyle = style.indicatorStyle;
  let DEFAULT_ACCESSIBLE = style.accessible;
  if (DEFAULT_ACCESSIBLE === undefined) {
    DEFAULT_ACCESSIBLE = style(indicatorStyle[3]).DEFAULT_ACCESSIBLE;
  }
  let DEFAULT_ACCESSIBILITY_ROLE = style.accessibilityRole;
  if (DEFAULT_ACCESSIBILITY_ROLE === undefined) {
    DEFAULT_ACCESSIBILITY_ROLE = style(indicatorStyle[3]).DEFAULT_ACCESSIBILITY_ROLE;
  }
  let DEFAULT_ACCESSIBILITY_LABEL = style.accessibilityLabel;
  if (DEFAULT_ACCESSIBILITY_LABEL === undefined) {
    DEFAULT_ACCESSIBILITY_LABEL = style(indicatorStyle[3]).DEFAULT_ACCESSIBILITY_LABEL;
  }
  let DEFAULT_ACCESSIBILITY_HINT = style.accessibilityHint;
  if (DEFAULT_ACCESSIBILITY_HINT === undefined) {
    DEFAULT_ACCESSIBILITY_HINT = style(indicatorStyle[3]).DEFAULT_ACCESSIBILITY_HINT;
  }
  let items = [style];
  const items1 = [indicatorStyle];
  const obj = {
    style: useMemo(() => {
      const items = [style(indicatorStyle[4]).styles.container, outer1_3.flatten(style)];
      return items;
    }, items),
    accessible: null,
    accessibilityRole: null,
    accessibilityLabel: null,
    accessibilityHint: null,
    collapsable: true,
    children: null
  };
  const tmp9 = useMemo(() => {
    const items = [style(indicatorStyle[4]).styles.container, outer1_3.flatten(style)];
    return items;
  }, items);
  obj[1] = DEFAULT_ACCESSIBLE;
  obj[2] = DEFAULT_ACCESSIBILITY_ROLE;
  obj[3] = DEFAULT_ACCESSIBILITY_LABEL;
  obj[4] = DEFAULT_ACCESSIBILITY_HINT;
  const items2 = [
    callback(closure_4, {
      style: useMemo(() => {
        const items = [style(indicatorStyle[4]).styles.indicator, outer1_3.flatten(indicatorStyle)];
        return items;
      }, items1)
    }),
    style.children
  ];
  obj[6] = items2;
  return closure_6(closure_4, obj);
});
memoResult.displayName = "BottomSheetHandle";

export default memoResult;