// === Module 12380: TouchableBackground ===

// Module 12380 (TouchableBackground)
import nativeDefault from "native" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ View: c2, Pressable: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { default: null };
createStyles = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
createStyles.default = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/TouchableBackground.tsx");

export default function TouchableBackground(onPressOut) {
  ({ activeBackgroundColor, onPressIn } = onPressOut);
  onPressOut = onPressOut.onPressOut;
  ({ pressableStyle, style, children } = onPressOut);
  const merged = Object.assign(onPressOut, Object.assign({ activeBackgroundColor: 0, pressableStyle: 0, style: 0, children: 0, onPressIn: 0, onPressOut: 0 }));
  c2 = undefined;
  const tmp2 = closure_5();
  [tmp4, c2] = _slicedToArray(noop.useState(false), 2);
  const items = [onPressIn];
  const items1 = [onPressOut];
  const callback = noop.useCallback((arg0) => {
    _undefined(true);
    if (onPressIn != null) {
      tmp2(arg0);
    }
  }, items);
  let obj = { accessibilityRole: "button", style: pressableStyle };
  const callback1 = noop.useCallback((arg0) => {
    if (onPressOut != null) {
      tmp(arg0);
    }
    _undefined(false);
  }, items1);
  const merged1 = Object.assign(merged);
  obj.onPressIn = callback;
  obj.onPressOut = callback1;
  const items2 = [style, ];
  if (tmp4) {
    if (activeBackgroundColor == null) {
      activeBackgroundColor = tmp2.default.backgroundColor;
    }
    obj = { backgroundColor: activeBackgroundColor };
  }
  items2[1] = tmp4;
  obj.children = <React2 style={items2}>{children}</React2>;
  return <React3 accessibilityRole="button" style={pressableStyle} />;
};