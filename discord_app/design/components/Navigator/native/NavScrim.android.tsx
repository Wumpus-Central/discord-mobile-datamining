// === Module 6456: NavScrim ===

// Module 6456 (NavScrim)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6397 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ View: c2, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj = { androidNavScrim: null };
const obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.ANDROID_NAVIGATION_SCRIM_BACKGROUND;
obj3.top = undefined;
obj.androidNavScrim = obj3;
let closure_4 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/NavScrim.android.tsx");

export const NavScrim = noop.memo(() => {
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeCustomKeyboardHeight: false }).insets;
  let tmp2 = null;
  if (0 !== insets.bottom) {
    const obj = { style: null, pointerEvents: "none" };
    const items = [tmp.androidNavScrim, ];
    const obj2 = { height: insets.bottom };
    items[1] = obj2;
    obj.style = items;
    tmp2 = <React2 style={null} pointerEvents="none" />;
  }
  return tmp2;
});