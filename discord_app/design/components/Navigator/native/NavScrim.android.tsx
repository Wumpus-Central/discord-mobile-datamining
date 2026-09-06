// === Module 7040: NavScrim ===

// Module 7040 (NavScrim)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6981 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ View: c2, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { androidNavScrim: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.backgroundColor = nativeDefault.colors.ANDROID_NAVIGATION_SCRIM_BACKGROUND;
obj.top = undefined;
obj.androidNavScrim = obj;
let closure_4 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/NavScrim.android.tsx");

export const NavScrim = noop.memo(() => {
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeCustomKeyboardHeight: false }).insets;
  let tmp2 = null;
  if (0 !== insets.bottom) {
    let obj = { style: null, pointerEvents: "none" };
    const items = [tmp.androidNavScrim, ];
    obj = { height: insets.bottom };
    items[1] = obj;
    obj.style = items;
    tmp2 = <React2 height={insets.bottom} />;
  }
  return tmp2;
});