// discord_app/modules/voice_panel/native/card/ActivityAccessibilityLayer.tsx
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import setAccessibilityFocus from "../../../a11y/native/setAccessibilityFocus.android.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function FocusedActivityAccessibilityLayer(activityName) {
  activityName = activityName.activityName;
  _require = undefined;
  ({ channelId, children } = activityName);
  const tmp = closure_10();
  [tmp3, c0] = noop.useState(false);
  const ref = noop.useRef(null);
  const callback = noop.useCallback(() => {
    _undefined(true);
  }, []);
  const callback1 = noop.useCallback(() => {
    _undefined(false);
    const result = setAccessibilityFocus.setAccessibilityFocus({ ref, delay: 300 });
  }, []);
  if (null != activityName) {
    const intl2 = require("util").intl;
    const obj = { name: activityName };
    let formatToPlainStringResult = intl2.formatToPlainString(require("util").t.XSfwGL, obj);
    let tmp8 = ref;
    let tmp10 = _require;
  } else {
    tmp8 = ref;
    const intl = require("util").intl;
    formatToPlainStringResult = intl.string(require("util").t.KYNi2m);
    tmp10 = _require;
  }
  const obj2 = { style: tmp.fill, children: null };
  const obj3 = {
    nativeID: "voice-panel-activity-" + channelId,
    accessibilityViewIsModal: tmp3,
    onAccessibilityEscape: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    style: null,
    children: null,
  };
  let tmp16;
  if (tmp3) {
    tmp16 = callback1;
  }
  obj3.onAccessibilityEscape = tmp16;
  obj3.accessibilityElementsHidden = !tmp3;
  let str = "no-hide-descendants";
  if (tmp3) {
    str = "auto";
  }
  obj3.importantForAccessibility = str;
  obj3.style = tmp.fill;
  obj3.children = children;
  const items = [closure_8(tmp10(tmp8[8]).AccessibilityView, obj3)];
  const obj4 = {
    ref,
    style: absoluteFill.absoluteFill,
    pointerEvents: null,
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityHint: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    onPress: null,
  };
  let str2 = "auto";
  let str3 = "auto";
  if (tmp3) {
    str3 = "none";
  }
  obj4.pointerEvents = str3;
  obj4.accessibilityLabel = formatToPlainStringResult;
  const intl3 = tmp10(tmp8[7]).intl;
  obj4.accessibilityHint = intl3.string(tmp10(tmp8[7]).t["8DaKO6"]);
  obj4.accessibilityElementsHidden = tmp3;
  if (tmp3) {
    str2 = "no-hide-descendants";
  }
  obj4.importantForAccessibility = str2;
  obj4.onPress = callback;
  items[1] = closure_8(closure_4, obj4);
  obj2.children = items;
  return closure_9(closure_6, obj2);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const IS_IOS = fn(12407).IS_IOS;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4639);
let closure_10 = createStyles.createStyles({ fill: { flex: 1 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/ActivityAccessibilityLayer.tsx");

export default function ActivityAccessibilityLayer(isActivityFocused) {
  const merged = Object.assign(isActivityFocused, Object.assign({ isActivityFocused: 0 }));
  if (IS_IOS) {
    if (obj.useIsScreenReaderEnabled()) {
      if (isActivityFocused.isActivityFocused) {
        const obj2 = {};
        const merged1 = Object.assign(merged);
        let children = React6(FocusedActivityAccessibilityLayer, obj2);
      }
      return children;
    }
  }
  children = merged.children;
  obj = useIsScreenReaderEnabled;
}
