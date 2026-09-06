// _runtime/metro/06827__.js
import _mod6829 from "06829__.js";
import noop from "00019__.js";
import get_ActivityIndicator from "00017__.js";
import jsxProd from "../react/00021_jsxProd.js";

const useMemo = noop.useMemo;
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
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
      const items = [_mod6829.styles.container, React3.flatten(style)];
      return items;
    }, items),
    accessible: null,
    accessibilityRole: null,
    accessibilityLabel: null,
    accessibilityHint: null,
    collapsable: true,
    children: null,
  };
  const tmp9 = useMemo(() => {
    const items = [_mod6829.styles.container, React3.flatten(style)];
    return items;
  }, items);
  obj.accessible = DEFAULT_ACCESSIBLE;
  obj.accessibilityRole = DEFAULT_ACCESSIBILITY_ROLE;
  obj.accessibilityLabel = DEFAULT_ACCESSIBILITY_LABEL;
  obj.accessibilityHint = DEFAULT_ACCESSIBILITY_HINT;
  const items2 = [
    closure_5(closure_4, {
      style: useMemo(() => {
        const items = [_mod6829.styles.indicator, React3.flatten(indicatorStyle)];
        return items;
      }, items1),
    }),
    style.children,
  ];
  obj.children = items2;
  return closure_6(closure_4, obj);
});
memoResult.displayName = "BottomSheetHandle";

export default memoResult;
