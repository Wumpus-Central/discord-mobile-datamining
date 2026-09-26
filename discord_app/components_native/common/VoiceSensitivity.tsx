// discord_app/components_native/common/VoiceSensitivity.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import BaseConnectionEvent from "../../../discord_common/js/packages/media-engine/index.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import SpeakingStore from "../../stores/SpeakingStore.tsx";
import AppStateStore from "../../stores/native/AppStateStore.tsx";

require = fn;
const View = fn(17).View;
const AppStates = fn(1074).AppStates;
const NativePermissionTypes = fn(5045).NativePermissionTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4836);
let obj2 = {
  sensitivity: { position: "relative", height: 20 },
  sensitivityBar: { position: "absolute", top: 7, left: 0, right: 0, bottom: 7, flexDirection: "row" },
  sensitivityFill: null,
  sensitivityCommon: null,
  sensitivityMin: null,
  sensitivityMax: null,
  sensitivityDefault: null,
  sensitivitySpeaking: null,
  sensitivitySlider: null,
};
const rect = {
  position: "absolute",
  backgroundColor: nativeDefault.unsafe_rawColors.WHITE,
  opacity: 0.5,
  top: 7,
  left: 0,
  right: 0,
  bottom: 7,
};
obj2.sensitivityFill = rect;
obj2.sensitivityCommon = { height: 6, borderRadius: 3 };
obj2.sensitivityMin = { backgroundColor: nativeDefault.unsafe_rawColors.YELLOW_300 };
let obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.YELLOW_300 };
obj2.sensitivityMax = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
let obj5 = { flex: 1, backgroundColor: null };
const ColorUtils = fn(4683);
obj5.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_400, 0.6);
obj2.sensitivityDefault = obj5;
let obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj2.sensitivitySpeaking = { flex: 1, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj2.sensitivitySlider = { flex: 1, backgroundColor: "transparent", marginVertical: -10 };
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/VoiceSensitivity.tsx");

export default function VoiceSensitivity(auto) {
  auto = auto.auto;
  const onThresholdChange = auto.onThresholdChange;
  let width;
  let stateFromStores;
  let first2;
  let state;
  c10 = undefined;
  let ref;
  const tmp = ref();
  const sum = auto.threshold + 100;
  stateFromStores.useRef(null);
  stateFromStores.useRef(null);
  const tmp6 = width(stateFromStores.useState(first2.isCurrentUserSpeaking()), 2);
  const first = tmp6[0];
  closure_3 = tmp6[1];
  width = onThresholdChange(first[13])().width;
  const ref1 = stateFromStores.useRef(null);
  const tmp8 = onThresholdChange;
  const items = [state];
  stateFromStores = auto(first[14]).useStateFromStores(items, () => state.getState(), []);
  const tmp12 = width(stateFromStores.useState(0), 2);
  const first1 = tmp12[0];
  closure_7 = tmp12[1];
  const tmp14 = width(stateFromStores.useState(sum), 2);
  first2 = tmp14[0];
  state = tmp14[1];
  let obj = auto(first[14]);
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
      closure_11(width * (1 - first1 / -100));
    }
  }, items2);
  const callback = stateFromStores.useCallback((arg0, arg1) => {
    closure_3(arg1);
    closure_7(arg0);
  }, []);
  const items3 = [callback, stateFromStores];
  const callback1 = stateFromStores.useCallback((arg0) => {
    state(arg0);
  }, []);
  const effect2 = stateFromStores.useEffect(() => {
    closure_1 = async function _listenOnlyIfWeHavePermission() {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj2 = { value, done: true };
              return obj2;
            } else {
              closure_0 = tmp4;
              c1 = 1;
              c2 = 1;
              const obj4 = {
                value: onThresholdChange(5451).hasPermission(constants.AUDIO, { showAuthorizationError: false }),
                done: false,
              };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let tmp5 = value;
            if (value) {
              tmp5 = !closure_128_0;
            }
            if (tmp5) {
              mediaEngine = mediaEngine.getMediaEngine();
              mediaEngine.on(auto(4891).MediaEngineEvent.VoiceActivity, callback);
            }
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp17) {
          c2 = tmp;
          throw tmp17;
        }
      }
    };
    if (stateFromStores === _undefined.ACTIVE) {
      c0 = false;
      (function listenOnlyIfWeHavePermission() {
        const self = this;
        const apply = closure_1.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
      return () => {
        c0 = true;
        const mediaEngine = MediaEngineStore.getMediaEngine();
        mediaEngine.removeListener(BaseConnectionEvent.MediaEngineEvent.VoiceActivity, callback);
      };
    }
  }, items3);
  stateFromStores.useRef(false);
  ref = stateFromStores.useRef(false);
  const ref2 = stateFromStores.useRef(null);
  const items4 = [auto, first];
  const effect3 = stateFromStores.useEffect(() => {
    if (ref.current) {
      if (auto) {
        if (ref.current) {
          if (first) {
            if (null != ref.current) {
              let _clearTimeout = clearTimeout;
              clearTimeout(ref.current);
              ref.current = null;
            }
            let AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            let intl = util.intl;
            AccessibilityAnnouncer.announce(intl.string(util.t.haLKZ0));
          } else {
            const _setTimeout = setTimeout;
            ref.current = setTimeout(() => {
              ref.current = null;
              const AccessibilityAnnouncer = auto(first[17]).AccessibilityAnnouncer;
              const intl = auto(first[18]).intl;
              AccessibilityAnnouncer.announce(intl.string(auto(first[18]).t.X2hJL7));
            }, 1000);
          }
          return () => {
            if (null != ref.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(ref.current);
              ref.current = null;
            }
          };
        }
      } else {
        ref.current = false;
      }
    } else {
      tmp.current = true;
    }
  }, items4);
  if (auto) {
    let obj2 = {
      accessible: true,
      role: "meter",
      "aria-label": null,
      "aria-valuenow": null,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuetext": null,
      onAccessibilityFocus: null,
      onAccessibilityBlur: null,
      style: null,
      children: null,
    };
    const intl2 = tmp10(tmp9[18]).intl;
    obj2["aria-label"] = intl2.string(tmp10(tmp9[18]).t.yZcOjo);
    let num = 0;
    if (first) {
      num = 100;
    }
    obj2["aria-valuenow"] = num;
    const intl3 = tmp10(tmp9[18]).intl;
    const string = intl3.string;
    const t = tmp10(tmp9[18]).t;
    if (first) {
      let stringResult = string(t.haLKZ0);
    } else {
      stringResult = string(t.X2hJL7);
    }
    const obj3 = { children: null };
    obj2["aria-valuetext"] = stringResult;
    obj2.onAccessibilityFocus = function onAccessibilityFocus() {
      closure_14.current = true;
    };
    obj2.onAccessibilityBlur = function onAccessibilityBlur() {
      closure_14.current = false;
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref2.current);
        ref2.current = null;
      }
    };
    obj2.style = tmp.sensitivity;
    let obj4 = { style: tmp.sensitivityBar, children: null };
    let obj5 = { style: null };
    const items5 = [tmp.sensitivityCommon, first ? tmp.sensitivitySpeaking : tmp.sensitivityDefault];
    obj5.style = items5;
    obj4.children = callback(first1, obj5);
    obj2.children = callback(first1, obj4);
    const items6 = [callback(tmp10(tmp9[19]).AccessibilityFocusView, obj2)];
    const obj6 = { inset: true, children: null };
    const intl4 = tmp10(tmp9[18]).intl;
    obj6.children = intl4.string(tmp10(tmp9[18]).t.W3K5Im);
    items6[1] = callback(tmp10(tmp9[20]).FormHint, obj6);
    obj3.children = items6;
    return ref(first1, obj3);
  } else {
    const obj7 = { style: tmp.sensitivity, children: null };
    const obj8 = { style: tmp.sensitivityBar, children: null };
    const obj9 = { ref, style: null };
    const items7 = [, ,];
    ({ sensitivityCommon: arr6[0], sensitivityMin: arr6[1] } = tmp);
    const obj10 = { flex: tmp17 };
    items7[2] = obj10;
    obj9.style = items7;
    const items8 = [callback(first1, obj9)];
    const obj11 = { ref: ref1, style: null };
    const items9 = [, ,];
    ({ sensitivityCommon: arr8[0], sensitivityMax: arr8[1] } = tmp);
    const obj12 = { flex: 1 - tmp17 };
    items9[2] = obj12;
    obj11.style = items9;
    items8[1] = callback(first1, obj11);
    obj8.children = items8;
    const items10 = [ref(first1, obj8), ,];
    const obj13 = { ref: ref2, style: null };
    const items11 = [tmp.sensitivityFill];
    const obj14 = { left: tmp18[0] };
    items11[1] = obj14;
    obj13.style = items11;
    items10[1] = callback(first1, obj13);
    const obj15 = {
      style: tmp.sensitivitySlider,
      value: sum,
      minimumValue: 0,
      maximumValue: 100,
      minimumTrackTintColor: "transparent",
      maximumTrackTintColor: "transparent",
      accessibilityLabel: null,
      onValueChange: null,
      onSlidingComplete: null,
      onResponderGrant: null,
    };
    let intl = tmp10(tmp9[18]).intl;
    obj15.accessibilityLabel = intl.string(tmp10(tmp9[18]).t["sqUm+k"]);
    obj15.onValueChange = callback1;
    obj15.onSlidingComplete = function handleSlidingComplete(arg0) {
      onThresholdChange(-1 * (100 - arg0));
    };
    const tmp25 = ref;
    const tmp26 = first1;
    const tmp27 = callback;
    const tmp8Result = tmp8(tmp9[21]);
    let fn;
    if (tmp10Result.isAndroid()) {
      fn = () => true;
    }
    obj15.onResponderGrant = fn;
    items10[2] = tmp27(tmp8Result, obj15);
    obj7.children = items10;
    return tmp25(tmp26, obj7);
  }
  const tmp16 = width(stateFromStores.useState(first2 / 100), 2);
}
