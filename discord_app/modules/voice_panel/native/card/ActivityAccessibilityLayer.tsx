// discord_app/modules/voice_panel/native/card/ActivityAccessibilityLayer.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import react_native from "../../../a11y/native/setAccessibilityFocus.android.tsx";
import VoicePanelConstants from "../../VoicePanelConstants.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native2 from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, isActivityFocused;

let c10;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let closure_2 = ["isActivityFocused"];
({ Pressable: metroRequire, StyleSheet: metroImportDefault, View: metroImportAll } = react_native2);
const IS_IOS = VoicePanelConstants.IS_IOS;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ fill: { flex: 1 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let activityName;
      let children;
      let first;
      let items;
      let ref;
      let require;
      let tmp10;
      let tmp6;
      let tmp9;
      let obj = require("react");
      const cResult = obj.c(22);
      ({ activityName, children } = channelId);
      channelId = channelId.channelId;
      const tmp4 = closure_12();
      [tmp6, require] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      ref = react.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          _require(true);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function w() {
          _require(false);
          const obj = react_native;
          const obj2 = { ref, delay: 300 };
          const result = obj.setAccessibilityFocus(obj2);
        };
        cResult[1] = fn2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] !== activityName) {
        let formatToPlainStringResult;
        if (null != activityName) {
          const intl2 = require("intl").intl;
          let obj2 = { name: activityName };
          formatToPlainStringResult = intl2.formatToPlainString(require("intl").t.XSfwGL, obj2);
        } else {
          const intl = require("intl").intl;
          formatToPlainStringResult = intl.string(require("intl").t.KYNi2m);
        }
        cResult[2] = activityName;
        cResult[3] = formatToPlainStringResult;
        tmp10 = formatToPlainStringResult;
      } else {
        tmp10 = cResult[3];
      }
      const fill = tmp4.fill;
      const combined = "voice-panel-activity-" + channelId;
      let tmp13;
      if (tmp6) {
        tmp13 = tmp9;
      }
      let str = "no-hide-descendants";
      if (tmp6) {
        str = "auto";
      }
      if (cResult[4] === children) {
        if (cResult[5] === tmp6) {
          if (cResult[6] === tmp4.fill) {
            if (cResult[7] === combined) {
              if (cResult[8] === tmp13) {
                if (cResult[9] === !tmp6) {
                  let tmp15;
                  let tmp17;
                  if (cResult[10] === str) {
                    tmp15 = cResult[11];
                  }
                  let str2 = "auto";
                  let str3 = "auto";
                  if (tmp6) {
                    str3 = "none";
                  }
                  const _Symbol = Symbol;
                  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl3 = require("intl").intl;
                    const stringResult = intl3.string(require("intl").t["8DaKO6"]);
                    cResult[12] = stringResult;
                    tmp17 = stringResult;
                  } else {
                    tmp17 = cResult[12];
                  }
                  if (tmp6) {
                    str2 = "no-hide-descendants";
                  }
                  if (cResult[13] === tmp6) {
                    if (cResult[14] === tmp10) {
                      if (cResult[15] === str3) {
                        let tmp19;
                        if (cResult[16] === str2) {
                          tmp19 = cResult[17];
                        }
                        if (cResult[18] === tmp4.fill) {
                          if (cResult[19] === tmp19) {
                            let tmp24;
                            if (cResult[20] === tmp15) {
                              tmp24 = cResult[21];
                            }
                            return tmp24;
                          }
                        }
                        const obj3 = { style: fill, children: items };
                        items = [tmp15, tmp19];
                        const tmp27 = closure_11(closure_8, obj3);
                        cResult[18] = tmp4.fill;
                        cResult[19] = tmp19;
                        cResult[20] = tmp15;
                        cResult[21] = tmp27;
                        tmp24 = tmp27;
                      }
                    }
                  }
                  const obj4 = {
                    ref,
                    style: closure_7.absoluteFill,
                    pointerEvents: str3,
                    accessible: true,
                    accessibilityRole: "button",
                    accessibilityLabel: tmp10,
                    accessibilityHint: tmp17,
                    accessibilityElementsHidden: tmp6,
                    importantForAccessibility: str2,
                    onPress: first,
                  };
                  const tmp23 = closure_10(closure_6, obj4);
                  cResult[13] = tmp6;
                  cResult[14] = tmp10;
                  cResult[15] = str3;
                  cResult[16] = str2;
                  cResult[17] = tmp23;
                  tmp19 = tmp23;
                }
              }
            }
          }
        }
      }
      const obj5 = {
        nativeID: combined,
        accessibilityViewIsModal: tmp6,
        onAccessibilityEscape: tmp13,
        accessibilityElementsHidden: !tmp6,
        importantForAccessibility: str,
        style: tmp4.fill,
        children,
      };
      const tmp16 = closure_10(require("AccessibilityView").AccessibilityView, obj5);
      cResult[4] = children;
      cResult[5] = tmp6;
      cResult[6] = tmp4.fill;
      cResult[7] = combined;
      cResult[8] = tmp13;
      cResult[9] = !tmp6;
      cResult[10] = str;
      cResult[11] = tmp16;
      tmp15 = tmp16;
    }
  : (activityName) => {
      let _undefined;
      let c0;
      let channelId;
      let children;
      let formatToPlainStringResult;
      let intl3;
      let items;
      let str;
      let str2;
      let str3;
      let tmp10;
      let tmp16;
      let tmp3;
      let tmp8;
      activityName = activityName.activityName;
      _require = undefined;
      ({ channelId, children } = activityName);
      const tmp = closure_12();
      [tmp3, c0] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      const ref = react.useRef(null);
      const callback = react.useCallback(() => {
        _undefined(true);
      }, []);
      const callback1 = react.useCallback(() => {
        _undefined(false);
        const obj = react_native;
        const obj2 = { ref, delay: 300 };
        const result = obj.setAccessibilityFocus(obj2);
      }, []);
      if (null != activityName) {
        const intl2 = require("intl").intl;
        let obj = { name: activityName };
        formatToPlainStringResult = intl2.formatToPlainString(require("intl").t.XSfwGL, obj);
        tmp8 = ref;
        tmp10 = _require;
      } else {
        tmp8 = ref;
        const intl = require("intl").intl;
        formatToPlainStringResult = intl.string(require("intl").t.KYNi2m);
        tmp10 = _require;
      }
      let obj2 = { style: tmp.fill, children: items };
      const obj3 = {
        nativeID: "voice-panel-activity-" + channelId,
        accessibilityViewIsModal: tmp3,
        onAccessibilityEscape: tmp16,
        accessibilityElementsHidden: !tmp3,
        importantForAccessibility: str,
        style: tmp.fill,
        children,
      };
      const AccessibilityView = tmp10(tmp8[11]).AccessibilityView;
      tmp16 = undefined;
      if (tmp3) {
        tmp16 = callback1;
      }
      str = "no-hide-descendants";
      if (tmp3) {
        str = "auto";
      }
      items = [closure_10(AccessibilityView, obj3)];
      const obj4 = {
        ref,
        style: closure_7.absoluteFill,
        pointerEvents: str3,
        accessible: true,
        accessibilityRole: "button",
        accessibilityLabel: formatToPlainStringResult,
        accessibilityHint: intl3.string(tmp10(tmp8[10]).t["8DaKO6"]),
        accessibilityElementsHidden: tmp3,
        importantForAccessibility: str2,
        onPress: callback,
      };
      str2 = "auto";
      str3 = "auto";
      if (tmp3) {
        str3 = "none";
      }
      intl3 = tmp10(tmp8[10]).intl;
      if (tmp3) {
        str2 = "no-hide-descendants";
      }
      items[1] = closure_10(closure_6, obj4);
      return closure_11(closure_8, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isActivityFocused) => {
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(5);
      if (cResult[0] !== isActivityFocused) {
        isActivityFocused = isActivityFocused.isActivityFocused;
        const tmp8 = _objectWithoutProperties(isActivityFocused, closure_2);
        cResult[0] = isActivityFocused;
        cResult[1] = isActivityFocused;
        cResult[2] = tmp8;
        tmp5 = tmp8;
        tmp4 = isActivityFocused;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const tmpResult = useIsScreenReaderEnabled;
      if (IS_IOS) {
        if (tmpResult.useIsScreenReaderEnabled()) {
          let children;
          if (tmp4) {
            let tmp10;
            if (cResult[3] !== tmp5) {
              const obj2 = {};
              const merged = Object.assign(tmp5);
              const tmp16 = authStore(closure_13, obj2);
              cResult[3] = tmp5;
              cResult[4] = tmp16;
              tmp10 = tmp16;
            } else {
              tmp10 = cResult[4];
            }
            children = tmp10;
          }
          return children;
        }
      }
      children = tmp5.children;
    }
  : (isActivityFocused) => {
      isActivityFocused = isActivityFocused.isActivityFocused;
      const merged = Object.assign(isActivityFocused, Object.assign({ isActivityFocused: 0 }));
      const obj = useIsScreenReaderEnabled;
      if (IS_IOS) {
        if (obj.useIsScreenReaderEnabled()) {
          let children;
          if (isActivityFocused) {
            const obj2 = {};
            const merged1 = Object.assign(merged);
            children = authStore(closure_13, obj2);
          }
          return children;
        }
      }
      children = merged.children;
    };
let result = size.fileFinishedImporting("modules/voice_panel/native/card/ActivityAccessibilityLayer.tsx");

export default tmp4;
