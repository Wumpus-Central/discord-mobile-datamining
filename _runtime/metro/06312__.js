// _runtime/metro/06312__.js
import react_native from "../06314_react-native.js";
import react_mod from "../00019_react.js";
import react_native2 from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let react = react_mod;
const useMemo = react.useMemo;
const memo = react.memo;
react = react_mod;
({ StyleSheet: c3, View: closure_4 } = react_native2);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const memoResult = memo(function BottomSheetHandleComponent(style) {
  let items2;
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
  const children = style.children;
  const items1 = [indicatorStyle];
  const obj = {
    style: useMemo(() => {
      const items = [react_native.styles.container, _false.flatten(style)];
      return items;
    }, items),
    accessible: DEFAULT_ACCESSIBLE,
    accessibilityRole: DEFAULT_ACCESSIBILITY_ROLE,
    accessibilityLabel: DEFAULT_ACCESSIBILITY_LABEL,
    accessibilityHint: DEFAULT_ACCESSIBILITY_HINT,
    collapsable: true,
    children: items2,
  };
  items2 = [,];
  const tmp10 = useMemo(() => {
    const items = [react_native.styles.indicator, _false.flatten(indicatorStyle)];
    return items;
  }, items1);
  items2[0] = closure_5(closure_4, { style: tmp10 });
  items2[1] = children;
  return closure_6(closure_4, obj);
});
memoResult.displayName = "BottomSheetHandle";

export default memoResult;
