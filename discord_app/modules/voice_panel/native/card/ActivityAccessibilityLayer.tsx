// discord_app/modules/voice_panel/native/card/ActivityAccessibilityLayer.tsx
import c from "../../../../../_runtime/00576_c.js";
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import setAccessibilityFocus from "../../../a11y/native/setAccessibilityFocus.android.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["isActivityFocused"];
get_ActivityIndicator = fn(17);
({ Pressable: metroRequire, StyleSheet: closure_7, View: closure_8 } = get_ActivityIndicator);
const IS_IOS = fn(11916).IS_IOS;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4896);
let closure_12 = createStyles.createStyles({ fill: { flex: 1 } });
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      const cResult = require("c").c(22);
      ({ activityName, children } = channelId);
      const tmp4 = closure_12();
      let num = 2;
      const obj = require("c");
      [tmp6, require] = noop.useState(false);
      ref = noop.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          _require(true);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function w() {
          _require(false);
          const result = setAccessibilityFocus.setAccessibilityFocus({ ref, delay: 300 });
        };
        cResult[1] = fn2;
        let tmp9 = fn2;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] !== activityName) {
        if (null != activityName) {
          const intl2 = require("util").intl;
          const obj2 = { name: activityName };
          let formatToPlainStringResult = intl2.formatToPlainString(require("util").t.XSfwGL, obj2);
        } else {
          const intl = require("util").intl;
          formatToPlainStringResult = intl.string(require("util").t.KYNi2m);
        }
        cResult[num] = activityName;
        num = 3;
        cResult[3] = formatToPlainStringResult;
      } else {
        const _HermesInternal = HermesInternal;
        const combined = "voice-panel-activity-" + channelId.channelId;
        let tmp14;
        if (tmp6) {
          tmp14 = tmp9;
        }
        let str3 = "no-hide-descendants";
        if (tmp6) {
          str3 = "auto";
        }
        if (cResult[4] === children) {
          if (cResult[5] === tmp6) {
            if (cResult[6] === tmp4.fill) {
              if (cResult[7] === combined) {
                if (cResult[8] === tmp14) {
                  if (cResult[9] === tmp15) {
                    if (cResult[10] === str3) {
                      let tmp16 = cResult[11];
                    }
                    let str4 = "auto";
                    let str5 = "auto";
                    if (tmp6) {
                      str5 = "none";
                    }
                    const _Symbol = Symbol;
                    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl3 = require("util").intl;
                      const stringResult = intl3.string(require("util").t["8DaKO6"]);
                      cResult[12] = stringResult;
                      let tmp19 = stringResult;
                    } else {
                      tmp19 = cResult[12];
                    }
                    if (tmp6) {
                      str4 = "no-hide-descendants";
                    }
                    if (cResult[13] === tmp6) {
                      if (cResult[14] === tmp10) {
                        if (cResult[15] === str5) {
                          if (cResult[16] === str4) {
                            let tmp21 = cResult[17];
                          }
                          if (cResult[18] === tmp4.fill) {
                            if (cResult[19] === tmp21) {
                              if (cResult[20] === tmp16) {
                                let tmp26 = cResult[21];
                              }
                              return tmp26;
                            }
                          }
                          const obj3 = { style: tmp4.fill, children: null };
                          const items = [tmp16, tmp21];
                          obj3.children = items;
                          const tmp29 = closure_11(closure_8, obj3);
                          cResult[18] = tmp4.fill;
                          cResult[19] = tmp21;
                          cResult[20] = tmp16;
                          cResult[21] = tmp29;
                          tmp26 = tmp29;
                        }
                      }
                    }
                    const obj4 = {
                      ref,
                      style: closure_7.absoluteFill,
                      pointerEvents: str5,
                      accessible: true,
                      accessibilityRole: "button",
                      accessibilityLabel: tmp10,
                      accessibilityHint: tmp19,
                      accessibilityElementsHidden: tmp6,
                      importantForAccessibility: str4,
                      onPress: first,
                    };
                    const tmp25 = closure_10(closure_6, obj4);
                    cResult[13] = tmp6;
                    cResult[14] = tmp10;
                    cResult[15] = str5;
                    cResult[16] = str4;
                    cResult[17] = tmp25;
                    tmp21 = tmp25;
                  }
                }
              }
            }
          }
        }
        const obj5 = {
          nativeID: combined,
          accessibilityViewIsModal: tmp6,
          onAccessibilityEscape: tmp14,
          accessibilityElementsHidden: !tmp6,
          importantForAccessibility: str3,
          style: tmp4.fill,
          children,
        };
        const tmp18 = closure_10(require("AccessibilityView").AccessibilityView, obj5);
        cResult[4] = children;
        cResult[5] = tmp6;
        cResult[6] = tmp4.fill;
        cResult[7] = combined;
        cResult[8] = tmp14;
        cResult[9] = !tmp6;
        cResult[10] = str3;
        cResult[11] = tmp18;
        tmp16 = tmp18;
      }
      const tmp5 = _slicedToArray(noop.useState(false), 2);
    }
  : (activityName) => {
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
      const items = [closure_10(tmp10(tmp8[11]).AccessibilityView, obj3)];
      const obj4 = {
        ref,
        style: closure_7.absoluteFill,
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
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/ActivityAccessibilityLayer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (isActivityFocused) => {
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
              const tmp15 = v65535(closure_13, obj2);
              cResult[3] = tmp5;
              cResult[4] = tmp15;
            }
          }
        }
      }
      return tmp5.children;
    }
  : (isActivityFocused) => {
      const merged = Object.assign(isActivityFocused, Object.assign({ isActivityFocused: 0 }));
      if (IS_IOS) {
        if (obj.useIsScreenReaderEnabled()) {
          if (isActivityFocused.isActivityFocused) {
            const obj2 = {};
            const merged1 = Object.assign(merged);
            let children = v65535(closure_13, obj2);
          }
          return children;
        }
      }
      children = merged.children;
      obj = useIsScreenReaderEnabled;
    };
