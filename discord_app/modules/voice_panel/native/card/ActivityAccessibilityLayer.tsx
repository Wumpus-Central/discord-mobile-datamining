// === Module 17746: ActivityAccessibilityLayer ===

// Module 17746 (ActivityAccessibilityLayer)
import c from "c" /* 576 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5361 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 5370 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["isActivityFocused"];
get_ActivityIndicator = fn(17);
({ Pressable: metroRequire, StyleSheet: closure_7, View: closure_8 } = get_ActivityIndicator);
const IS_IOS = fn(11926).IS_IOS;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5091);
let closure_12 = createStyles.createStyles({ fill: { flex: 1 } });
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function FocusedActivityAccessibilityLayer(channelId) {
  const cResult = require("c").c(22);
  ({ activityName, children } = channelId);
  const tmp4 = closure_12();
  let num = 2;
  const obj = require("c");
  const tmp2 = ref;
  [tmp6, require] = noop.useState(false);
  ref = noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      _require(true);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        tmp = closure_0(false);
        obj = closure_0(closure_1[9]);
        obj1 = { ref: closure_1, delay: 300 };
        result = obj.setAccessibilityFocus(obj1);
        return;
      }
    }
    cResult[1] = R;
  } else {
    class R {
      constructor() {
        tmp = closure_0(false);
        obj = closure_0(closure_1[9]);
        obj1 = { ref: closure_1, delay: 300 };
        result = obj.setAccessibilityFocus(obj1);
        return;
      }
    }
  }
  if (cResult[2] !== activityName) {
    class R {
      constructor() {
        tmp = closure_0(false);
        obj = closure_0(closure_1[9]);
        obj1 = { ref: closure_1, delay: 300 };
        result = obj.setAccessibilityFocus(obj1);
        return;
      }
    }
    cResult[num] = activityName;
    num = 3;
    cResult[3] = tmp10;
  } else {
    class R {
      constructor() {
        tmp = closure_0(false);
        obj = closure_0(closure_1[9]);
        obj1 = { ref: closure_1, delay: 300 };
        result = obj.setAccessibilityFocus(obj1);
        return;
      }
    }
    const _HermesInternal = HermesInternal;
    const fill = tmp4.fill;
    const combined = "voice-panel-activity-" + channelId.channelId;
    if (tmp6) {
      class R {
        constructor() {
          tmp = closure_0(false);
          obj = closure_0(closure_1[9]);
          obj1 = { ref: closure_1, delay: 300 };
          result = obj.setAccessibilityFocus(obj1);
          return;
        }
      }
    }
    if (tmp6) {
      class R {
        constructor() {
          tmp = closure_0(false);
          obj = closure_0(closure_1[9]);
          obj1 = { ref: closure_1, delay: 300 };
          result = obj.setAccessibilityFocus(obj1);
          return;
        }
      }
    }
    if (cResult[4] === children) {
      class R {
        constructor() {
          tmp = closure_0(false);
          obj = closure_0(closure_1[9]);
          obj1 = { ref: closure_1, delay: 300 };
          result = obj.setAccessibilityFocus(obj1);
          return;
        }
      }
    }
    const obj2 = { nativeID: combined, accessibilityViewIsModal: tmp6, onAccessibilityEscape: undefined, accessibilityElementsHidden: !tmp6, importantForAccessibility: "no-hide-descendants", style: tmp4.fill, children };
    const tmp17 = closure_10(require("AccessibilityView").AccessibilityView, obj2);
    cResult[4] = children;
    cResult[5] = tmp6;
    cResult[6] = tmp4.fill;
    cResult[7] = combined;
    cResult[8] = undefined;
    cResult[9] = !tmp6;
    cResult[10] = "no-hide-descendants";
    cResult[11] = tmp17;
  }
  const tmp5 = _slicedToArray(noop.useState(false), 2);
}) : (function FocusedActivityAccessibilityLayer(activityName) {
  activityName = activityName.activityName;
  _require = undefined;
  ({ channelId, children } = activityName);
  const tmp = closure_12();
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
  const obj3 = { nativeID: "voice-panel-activity-" + channelId, accessibilityViewIsModal: tmp3, onAccessibilityEscape: null, accessibilityElementsHidden: null, importantForAccessibility: null, style: null, children: null };
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
  const items = [closure_10(tmp10(tmp8[11]).AccessibilityView, obj3), ];
  const obj4 = { ref, style: absoluteFill.absoluteFill, pointerEvents: null, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, accessibilityElementsHidden: null, importantForAccessibility: null, onPress: null };
  let str2 = "auto";
  let str3 = "auto";
  if (tmp3) {
    str3 = "none";
  }
  obj4.pointerEvents = str3;
  obj4.accessibilityLabel = formatToPlainStringResult;
  const intl3 = tmp10(tmp8[10]).intl;
  obj4.accessibilityHint = intl3.string(tmp10(tmp8[10]).t["8DaKO6"]);
  obj4.accessibilityElementsHidden = tmp3;
  if (tmp3) {
    str2 = "no-hide-descendants";
  }
  obj4.importantForAccessibility = str2;
  obj4.onPress = callback;
  items[1] = closure_10(closure_6, obj4);
  obj2.children = items;
  return closure_11(closure_8, obj2);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/ActivityAccessibilityLayer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityAccessibilityLayer(isActivityFocused) {
  const cResult = c.c(5);
  if (cResult[0] !== isActivityFocused) {
    isActivityFocused = isActivityFocused.isActivityFocused;
    const tmp8 = _objectWithoutProperties(isActivityFocused, closure_2);
    cResult[0] = isActivityFocused;
    cResult[1] = isActivityFocused;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
    let tmp4 = isActivityFocused;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (IS_IOS) {
    if (tmpResult.useIsScreenReaderEnabled()) {
      if (tmp4) {
        if (cResult[3] !== tmp5) {
          const obj2 = {};
          const merged = Object.assign(tmp5);
          const tmp15 = collapsed(closure_13, obj2);
          cResult[3] = tmp5;
          cResult[4] = tmp15;
        }
      }
    }
  }
  return tmp5.children;
}) : (function ActivityAccessibilityLayer(isActivityFocused) {
  const merged = Object.assign(isActivityFocused, Object.assign({ isActivityFocused: 0 }));
  if (IS_IOS) {
    if (obj.useIsScreenReaderEnabled()) {
      if (isActivityFocused.isActivityFocused) {
        const obj2 = {};
        const merged1 = Object.assign(merged);
        let children = collapsed(closure_13, obj2);
      }
      return children;
    }
  }
  children = merged.children;
  obj = useIsScreenReaderEnabled;
});