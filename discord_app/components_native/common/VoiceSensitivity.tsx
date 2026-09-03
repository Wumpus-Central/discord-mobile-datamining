// === Module 10093: VoiceSensitivity ===

// Module 10093 (VoiceSensitivity)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "_detectH265HardwareDecode" /* 4529 */;
import closure_8 from "anyoneHasFlagInContext" /* 5372 */;
import closure_9 from "getState" /* 7167 */;
import { AppStates } from "ME" /* 673 */;
import { NativePermissionTypes } from "NativePermissionStatus" /* 4731 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import hexToRgba from "hexToRgba" /* 4326 */;

const require = arg1;
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { sensitivity: { position: "relative", height: 20 }, sensitivityBar: { position: "absolute", top: 7, left: 0, right: 0, bottom: 7, flexDirection: "row" }, sensitivityFill: null, sensitivityCommon: null, sensitivityMin: null, sensitivityMax: null, sensitivityDefault: null, sensitivitySpeaking: null, sensitivitySlider: null };
createCacheKey = { position: "absolute", backgroundColor: ThemesDefault.unsafe_rawColors.WHITE, opacity: 0.5, top: 7, left: 0, right: 0, bottom: 7 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { height: 6, borderRadius: 3 };
createCacheKey[4] = { backgroundColor: ThemesDefault.unsafe_rawColors.YELLOW_300 };
let obj1 = { backgroundColor: ThemesDefault.unsafe_rawColors.YELLOW_300 };
createCacheKey[5] = { backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360 };
let obj3 = { flex: 1, backgroundColor: null };
obj3[1] = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.PRIMARY_400, 0.6);
createCacheKey[6] = obj3;
let obj2 = { backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360 };
createCacheKey[7] = { flex: 1, backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360 };
createCacheKey[8] = { flex: 1, backgroundColor: "transparent", marginVertical: -10 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj4 = { flex: 1, backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360 };
const result = require("set").fileFinishedImporting("components_native/common/VoiceSensitivity.tsx");

export default function VoiceSensitivity(auto) {
  auto = auto.auto;
  const onThresholdChange = auto.onThresholdChange;
  let first;
  closure_3 = undefined;
  let width;
  let stateFromStores;
  let first1;
  closure_7 = undefined;
  let first2;
  closure_9 = undefined;
  c10 = undefined;
  closure_11 = undefined;
  let callback;
  callback = undefined;
  let callback2;
  closure_15 = undefined;
  let tmp = callback2();
  const sum = auto.threshold + 100;
  const ref = stateFromStores.useRef(null);
  const ref1 = stateFromStores.useRef(null);
  const tmp6 = width(stateFromStores.useState(first2.isCurrentUserSpeaking()), 2);
  first = tmp6[0];
  closure_3 = tmp6[1];
  width = onThresholdChange(first[13])().width;
  let obj = auto(first[14]);
  const items = [closure_9];
  stateFromStores = obj.useStateFromStores(items, () => state.getState(), []);
  const tmp12 = width(stateFromStores.useState(0), 2);
  first1 = tmp12[0];
  closure_7 = tmp12[1];
  const tmp14 = width(stateFromStores.useState(sum), 2);
  first2 = tmp14[0];
  closure_9 = tmp14[1];
  const ref2 = stateFromStores.useRef(null);
  const tmp8 = onThresholdChange;
  [tmp17, c10] = width(stateFromStores.useState(first2 / 100), 2);
  const tmp18 = width(stateFromStores.useState(width * (1 - first1 / -100)), 2);
  closure_11 = tmp18[1];
  const items1 = [auto, first2];
  const effect = stateFromStores.useEffect(() => {
    if (!auto) {
      _undefined(first2 / 100);
    }
  }, items1);
  const items2 = [auto, first1, width];
  const effect1 = stateFromStores.useEffect(() => {
    if (!auto) {
      callback3(width * (1 - first1 / -100));
    }
  }, items2);
  callback = stateFromStores.useCallback((arg0, arg1) => {
    callback(arg1);
    callback2(arg0);
  }, []);
  const items3 = [callback, stateFromStores];
  const callback1 = stateFromStores.useCallback((arg0) => {
    state(arg0);
  }, []);
  const effect2 = stateFromStores.useEffect(() => {
    function _listenOnlyIfWeHavePermission() {
      const self = this;
      const tmp = callback(function*() {
        if (c2 === 2) {
          c2 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_0 = tmp4;
                let obj2 = v0(closure_2_2[15]);
                c1 = 1;
                c2 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj2.hasPermission(closure_2_11.AUDIO, { showAuthorizationError: false });
                return obj1;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              let tmp5 = arg1;
              if (arg1) {
                tmp5 = !closure_0;
              }
              if (tmp5) {
                const mediaEngine = closure_2_7.getMediaEngine();
                mediaEngine.on(closure_2_0(closure_2_2[16]).MediaEngineEvent.VoiceActivity, closure_1_12);
              }
              c2 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp17) {
            c2 = tmp;
            throw tmp17;
          }
        }
      });
      closure_1 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    if (stateFromStores === _undefined.ACTIVE) {
      c0 = false;
      (function listenOnlyIfWeHavePermission() {
        const self = this;
        const apply = _listenOnlyIfWeHavePermission.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
      return () => {
        c0 = true;
        mediaEngine = mediaEngine.getMediaEngine();
        mediaEngine.removeListener(auto(first[16]).MediaEngineEvent.VoiceActivity, closure_1_12);
      };
    }
  }, items3);
  callback = stateFromStores.useRef(false);
  callback2 = stateFromStores.useRef(false);
  closure_15 = stateFromStores.useRef(null);
  const items4 = [auto, first];
  const effect3 = stateFromStores.useEffect(() => {
    if (ref.current) {
      if (auto) {
        if (tmp3.current) {
          if (first) {
            if (null != tmp5.current) {
              let _clearTimeout = clearTimeout;
              clearTimeout(tmp5.current);
              tmp5.current = null;
            }
            let AccessibilityAnnouncer = auto(first[17]).AccessibilityAnnouncer;
            let intl = auto(first[18]).intl;
            AccessibilityAnnouncer.announce(intl.string(auto(first[18]).t.haLKZ0));
          } else {
            const _setTimeout = setTimeout;
            tmp5.current = setTimeout(() => {
              closure_15.current = null;
              const AccessibilityAnnouncer = closure_1_0(closure_1_2[17]).AccessibilityAnnouncer;
              const intl = closure_1_0(closure_1_2[18]).intl;
              AccessibilityAnnouncer.announce(intl.string(closure_1_0(closure_1_2[18]).t.X2hJL7));
            }, 1000);
          }
          return () => {
            if (null != ref.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(tmp.current);
              tmp.current = null;
            }
          };
        }
      } else {
        tmp3.current = false;
      }
    } else {
      tmp.current = true;
    }
  }, items4);
  if (auto) {
    obj = { accessible: true, role: "meter", "aria-label": null, "aria-valuenow": null, "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuetext": null, onAccessibilityFocus: null, onAccessibilityBlur: null, style: null, children: null };
    const intl2 = tmp10(tmp9[18]).intl;
    obj[2] = intl2.string(tmp10(tmp9[18]).t.yZcOjo);
    let num = 0;
    if (first) {
      num = 100;
    }
    obj[3] = num;
    const intl3 = tmp10(tmp9[18]).intl;
    const string = intl3.string;
    const t = tmp10(tmp9[18]).t;
    if (first) {
      let stringResult = string(t.haLKZ0);
    } else {
      stringResult = string(t.X2hJL7);
    }
    obj = { children: null };
    obj[6] = stringResult;
    obj[7] = function onAccessibilityFocus() {
      closure_14.current = true;
    };
    obj[8] = function onAccessibilityBlur() {
      closure_14.current = false;
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
        tmp.current = null;
      }
    };
    obj[9] = tmp.sensitivity;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.sensitivityBar;
    let obj2 = { style: null };
    const items5 = [tmp.sensitivityCommon, first ? tmp.sensitivitySpeaking : tmp.sensitivityDefault];
    obj2[0] = items5;
    obj1[1] = callback(first1, obj2);
    obj[10] = callback(first1, obj1);
    const items6 = [callback(tmp10(tmp9[19]).AccessibilityFocusView, obj), ];
    const obj3 = { inset: true, children: null };
    const intl4 = tmp10(tmp9[18]).intl;
    obj3[1] = intl4.string(tmp10(tmp9[18]).t.W3K5Im);
    items6[1] = callback(tmp10(tmp9[20]).FormHint, obj3);
    obj[0] = items6;
    return callback(first1, obj);
  } else {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.sensitivity;
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.sensitivityBar;
    const obj6 = { ref: null, style: null };
    obj6[0] = ref;
    const items7 = [, , ];
    ({ sensitivityCommon: arr6[0], sensitivityMin: arr6[1] } = tmp);
    const obj7 = { flex: null };
    obj7[0] = tmp17;
    items7[2] = obj7;
    obj6[1] = items7;
    const items8 = [callback(first1, obj6), ];
    const obj8 = { ref: null, style: null };
    obj8[0] = ref1;
    const items9 = [, , ];
    ({ sensitivityCommon: arr8[0], sensitivityMax: arr8[1] } = tmp);
    const obj9 = { flex: null };
    obj9[0] = 1 - tmp17;
    items9[2] = obj9;
    obj8[1] = items9;
    items8[1] = callback(first1, obj8);
    obj5[1] = items8;
    const items10 = [callback(first1, obj5), , ];
    const obj10 = { ref: null, style: null };
    obj10[0] = ref2;
    const items11 = [tmp.sensitivityFill, ];
    const obj11 = { left: null };
    obj11[0] = tmp18[0];
    items11[1] = obj11;
    obj10[1] = items11;
    items10[1] = callback(first1, obj10);
    const obj12 = { style: null, value: null, minimumValue: 0, maximumValue: 100, minimumTrackTintColor: "transparent", maximumTrackTintColor: "transparent", accessibilityLabel: null, onValueChange: null, onSlidingComplete: null, onResponderGrant: null };
    obj12[0] = tmp.sensitivitySlider;
    obj12[1] = sum;
    let intl = tmp10(tmp9[18]).intl;
    obj12[6] = intl.string(tmp10(tmp9[18]).t["sqUm+k"]);
    obj12[7] = callback1;
    obj12[8] = function handleSlidingComplete(arg0) {
      onThresholdChange(-1 * (100 - arg0));
    };
    const tmp25 = callback;
    const tmp26 = first1;
    const tmp27 = callback;
    const tmp8Result = tmp8(tmp9[21]);
    let fn;
    if (tmp10Result.isAndroid()) {
      fn = () => true;
    }
    obj12[9] = fn;
    items10[2] = tmp27(tmp8Result, obj12);
    obj4[1] = items10;
    return tmp25(tmp26, obj4);
  }
  const tmp16 = width(stateFromStores.useState(first2 / 100), 2);
};