// === Module 19674: SoundboardRecordSoundActionSheet ===

// Module 19674 (SoundboardRecordSoundActionSheet)
import applyDefault from "apply" /* 12 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import Text_Text from "Text/Text" /* 5385 */;
import components_Button_Button from "components/Button/Button" /* 5392 */;
import ActionSheet from "ActionSheet" /* 7433 */;
import useAccessibilityPressDefault from "useAccessibilityPress" /* 7664 */;
import utils_TimeUtils from "utils/TimeUtils" /* 8372 */;
import SoundboardRecordingWaveformDefault from "SoundboardRecordingWaveform" /* 19675 */;
import showSoundboardSoundEditModalDefault from "showSoundboardSoundEditModal" /* 19676 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;

require = fn;
function getRecordedLevels(arg0) {
  return Array.from(arg0, (arg0) => {
    let num = arg0;
    if (arg0 == null) {
      num = 0;
    }
    return num;
  });
}
let closure_15 = async function _startSoundboardRecording(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          const mediaEngine = MediaEngineStore.getMediaEngine();
          closure_129_1 = mediaEngine;
          mediaEngine.on(require("BaseConnectionEvent").MediaEngineEvent.VoiceActivity, closure_0);
          c4 = 1;
          const obj4 = { echoCancellation: MediaEngineStore.getEchoCancellation(), echoCancellationPreEcho: false, noiseSuppression: MediaEngineStore.getNoiseSuppression(), automaticGainControlConfig: null, noiseCancellation: null };
          const obj5 = { enabled: MediaEngineStore.getAutomaticGainControl() };
          obj4.automaticGainControlConfig = obj5;
          obj4.noiseCancellation = MediaEngineStore.getNoiseCancellation();
          c5 = 2;
          c6 = 1;
          const obj6 = { value: mediaEngine.startLocalAudioRecording(obj4), done: false };
          return obj6;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_2 = closure_3;
        closure_129_1.removeListener(closure_130_0(closure_130_2[8]).MediaEngineEvent.VoiceActivity, closure_129_0);
        throw closure_129_2;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c4 = 0;
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp18) {
      closure_3 = tmp18;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp18;
      } else {
        c5 = tmp;
      }
    }
  }
};
function stopSoundboardRecording(arg0, items, arg2) {
  _require = items;
  closure_1 = arg2;
  const mediaEngine = MediaEngineStore.getMediaEngine();
  mediaEngine.removeListener(require("BaseConnectionEvent").MediaEngineEvent.VoiceActivity, arg0);
  dependencyMap = require("VoiceMessageUtils").generateBase64EncodedWaveform(items);
  const obj2 = require("VoiceMessageUtils");
  return new Promise((arg0) => {
    closure_0 = arg0;
    const reachedLimit = setTimeout(() => closure_0({ uri: "", durationSecs: 0, waveform, waveformLevels: items, reachedLimit }), 5000);
    mediaEngine = mediaEngine.getMediaEngine();
    const result = mediaEngine.stopLocalAudioRecording((uri, arg1) => {
      clearTimeout(closure_1);
      closure_0({ uri, durationSecs: arg1 / 1000, waveform, waveformLevels: items, reachedLimit });
    });
  });
}
const View = fn(17).View;
const NativePermissionTypes = fn(6377).NativePermissionTypes;
const VoiceMessageConstants = fn(12704);
({ VOICE_RECORDING_MAX_DB: closure_9, VOICE_RECORDING_MIN_DURATION_MILLIS: closure_10, WAVEFORM_WAVE_MAX_VALUE: closure_11 } = VoiceMessageConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4794);
let obj2 = { container: { padding: nativeDefault.space.PX_16, alignItems: "center" }, title: null, waveform: null, elapsed: null, button: null, nextButton: null };
let obj3 = { padding: nativeDefault.space.PX_16, alignItems: "center" };
obj2.title = { marginBottom: nativeDefault.space.PX_16 };
let obj4 = { marginBottom: nativeDefault.space.PX_16 };
obj2.waveform = { width: "100%", marginBottom: nativeDefault.space.PX_8 };
let obj5 = { width: "100%", marginBottom: nativeDefault.space.PX_8 };
obj2.elapsed = { marginBottom: nativeDefault.space.PX_16 };
obj2.button = { width: "100%" };
let obj6 = { marginBottom: nativeDefault.space.PX_16 };
obj2.nextButton = { width: "100%", marginTop: nativeDefault.space.PX_8 };
let closure_17 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/creation/SoundboardRecordSoundActionSheet.tsx");

export default function SoundboardRecordSoundActionSheet(arg0) {
  ({ guildId: require, analyticsSource: importDefault } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  first = undefined;
  noop = undefined;
  c7 = undefined;
  let callback1;
  let tmp = callback1();
  [tmp3, c2] = noop.useState(false);
  const tmp4 = _slicedToArray(noop.useState(0), 2);
  _slicedToArray = tmp4[1];
  [first, noop] = noop.useState(null);
  const ref = noop.useRef([]);
  let obj = noop;
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  [waveformLevels, c7] = noop.useState([]);
  noop.useRef(null);
  noop.useRef(false);
  closure_10 = noop.useRef(false);
  closure_11 = noop.useRef(false);
  closure_12 = noop.useRef(false);
  closure_13 = noop.useRef(null);
  noop.useRef(() => {

  });
  const memo = noop.useMemo(() => applyDefault.throttle((arg0, arg1) => {
    closure_0 = arg1;
    closure_1_3(arg0);
    closure_1_7((arg0) => {
      let tmp = closure_0;
      if (obj.isEqual(arg0, closure_0)) {
        tmp = arg0;
      }
      return tmp;
    });
  }, 100), []);
  items = [memo];
  const callback = noop.useCallback((arg0) => {
    if (null != ref2.current) {
      if (ref3.current) {
        const _performance = performance;
        const diff = performance.now() - tmp.current;
        const _Math = Math;
        const _Math2 = Math;
        const bound = Math.min(31, Math.floor(diff / 312.5));
        let num3 = ref.current[bound];
        if (num3 == null) {
          num3 = 0;
        }
        const _Math3 = Math;
        const _Math4 = Math;
        ref.current[bound] = Math.max(num3, Math.max(0, Math.min(closure_2_11, closure_2_11 * ((arg0 - -70) / (React6 - -70)))));
        if (diff >= 10000) {
          ref4.current(true);
        } else {
          const _Array = Array;
          memo(diff, Array.from(ref.current, (arg0) => {
            let num = arg0;
            if (arg0 == null) {
              num = 0;
            }
            return num;
          }));
        }
      }
    }
  }, items);
  const items1 = [callback, memo];
  callback1 = noop.useCallback(first(function*() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp5;
            closure_1 = tmp2;
            closure_129_0 = undefined;
            let flag4 = closure_0;
            if (closure_0 === undefined) {
              flag4 = false;
            }
            closure_129_0 = flag4;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            closure_129_3 = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Path", done: true };
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              if (null != closure_130_8.current) {
                if (closure_130_9.current) {
                  const _performance = performance;
                  closure_129_1 = performance.now() - closure_130_8.current;
                  closure_130_8.current = null;
                  closure_130_9.current = false;
                  closure_130_11.current = true;
                  closure_130_15.cancel();
                  let num7 = 10000;
                  if (!closure_129_0) {
                    num7 = closure_129_1;
                  }
                  closure_130_3(num7);
                  closure_130_2(false);
                  closure_129_2 = ref4(closure_130_6.current);
                  c3 = 2;
                  c4 = 1;
                  const obj5 = { value: callback(closure_130_16, closure_129_2, closure_129_0), done: false };
                  return obj5;
                }
              }
              c4 = 3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_129_3 = value;
            closure_130_11.current = false;
            if (1000 * closure_129_3.durationSecs < closure_1_10) {
              closure_130_5(closure_130_13.current);
            }
          }
          closure_130_5(closure_129_3);
        }
      } catch (tmp45) {
        c4 = tmp;
        throw tmp45;
      }
    }
  }), items1);
  const items2 = [callback1];
  const effect = noop.useEffect(() => {
    closure_14.current = callback1;
  }, items2);
  const items3 = [first, callback];
  closure_18 = noop.useCallback(first(function*() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            guildId = tmp7;
            closure_128_0 = undefined;
            if (null == ref.current) {
              if (!ref2.current) {
                if (!ref3.current) {
                  ref3.current = true;
                  c3 = 1;
                  c4 = 1;
                  const obj5 = { value: tmp3(7675).requestPermission(ref.AUDIO), done: false };
                  return obj5;
                }
              }
            }
          }
        } else {
          if (1 === tmp7) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_128_0 = value;
              closure_129_12.current = false;
              if (closure_128_0) {
                if ((function isStillHeldAndIdle() {
                  let current = ref2.current;
                  if (current) {
                    current = null == ref.current;
                  }
                  if (current) {
                    current = !ref3.current;
                  }
                  return current;
                })()) {
                  closure_129_13.current = closure_129_4;
                  closure_129_5(null);
                  closure_129_6.current = [];
                  closure_129_7([]);
                  closure_129_3(0);
                  closure_129_2(true);
                  const _performance2 = performance;
                  closure_129_8.current = performance.now();
                  dependencyMap = 1;
                  c3 = 3;
                  c4 = 1;
                  const obj8 = {
                    value: (function startSoundboardRecording() {
                                    const self = this;
                                    const apply = closure_1_15.apply;
                                    if (typeof apply === "unknown") {
                                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                    } else {
                                      applyArgumentsResult = apply(self, arguments);
                                    }
                                    return applyArgumentsResult;
                                  })(closure_129_16),
                    done: false
                  };
                  return obj8;
                }
              }
            }
          } else if (2 === tmp7) {
            dependencyMap = 0;
            closure_129_8.current = null;
            closure_129_2(false);
            closure_129_5(closure_129_13.current);
            const result = guildId(5475).showVoiceRecordingFailed();
            c4 = 3;
            const obj9 = { value: undefined, done: true };
            return obj9;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            dependencyMap = 0;
            const _performance = performance;
            closure_129_8.current = performance.now();
            closure_129_9.current = true;
            if (!closure_129_10.current) {
              closure_129_14.current();
            }
          }
          dependencyMap = 0;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c4 = 3;
      } catch (tmp48) {
        if (tmp4 === dependencyMap) {
          c4 = tmp2;
          throw tmp48;
        } else {
          c3 = tmp;
        }
      }
    }
  }), items3);
  const tmp7 = _slicedToArray(noop.useState([]), 2);
  const intl = util.intl;
  const t = util.t;
  const fn = () => {
    if (null != ref2.current) {
      closure_10.current = false;
      callback1();
    } else {
      closure_10.current = true;
      closure_18();
    }
  };
  const items4 = [callback, memo];
  ({ accessibilityActions, onAccessibilityAction } = useAccessibilityPressDefault(fn, intl.string(tmp3 ? t.hHBkuG : t["/VJ/Sp"])));
  const effect1 = obj.useEffect(() => () => {
    closure_1_10.current = false;
    memo.cancel();
    let current = null != ref.current;
    if (current) {
      current = ref2.current;
    }
    if (current) {
      ref.current = null;
      ref2.current = false;
      items = [];
      c1 = false;
      mediaEngine = mediaEngine.getMediaEngine();
      mediaEngine.removeListener(guildId(5560).MediaEngineEvent.VoiceActivity, callback);
      closure_2 = guildId(12999).generateBase64EncodedWaveform(items);
      new Promise((arg0) => {
        closure_0 = arg0;
        const reachedLimit = setTimeout(() => closure_0({ uri: "", durationSecs: 0, waveform, waveformLevels: items, reachedLimit }), 5000);
        mediaEngine = mediaEngine.getMediaEngine();
        const result = mediaEngine.stopLocalAudioRecording((uri, arg1) => {
          clearTimeout(closure_1);
          closure_0({ uri, durationSecs: arg1 / 1000, waveform, waveformLevels: items, reachedLimit });
        });
      });
      const obj2 = guildId(12999);
    }
  }, items4);
  let tmp18 = !tmp3;
  if (!tmp3) {
    tmp18 = null != first;
  }
  if (tmp18) {
    waveformLevels = first.waveformLevels;
  }
  let result = tmp4[0] / 1000;
  if (tmp18) {
    let num = 10;
    if (!first.reachedLimit) {
      num = first.durationSecs;
    }
    result = num;
  }
  let obj2 = { style: tmp.container, children: null };
  let obj3 = { variant: "heading-lg/semibold", style: tmp.title, children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t["/VJ/Sp"]);
  const items5 = [closure_12(Text_Text.Text, obj3), , , , ];
  const tmp14Result = useAccessibilityPressDefault(fn, intl.string(tmp3 ? t.hHBkuG : t["/VJ/Sp"]));
  const tmp21 = closure_13;
  items5[1] = closure_12(ref, { style: tmp.waveform, children: closure_12(SoundboardRecordingWaveformDefault, { levels: waveformLevels, slotCount: 32, height: 64 }) });
  let obj5 = { variant: "body-sm/medium", color: "text-muted", style: tmp.elapsed, children: null };
  let obj4 = { style: tmp.waveform, children: closure_12(SoundboardRecordingWaveformDefault, { levels: waveformLevels, slotCount: 32, height: 64 }) };
  const timeFormat = utils_TimeUtils.getTimeFormat(result);
  const tmp15Result = utils_TimeUtils;
  obj5.children = "" + timeFormat + " / " + utils_TimeUtils.getTimeFormat(10);
  items5[2] = closure_12(Text_Text.Text, obj5);
  const obj6 = { style: tmp.button, children: null };
  let str = "secondary";
  if (tmp3) {
    str = "destructive";
  }
  let obj7 = { variant: str, text: null, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, onPressIn: null, onPressOut: null, onPress: null };
  const intl3 = util.intl;
  obj7.text = intl3.string(util.t["hP6+07"]);
  const intl4 = util.intl;
  const t2 = util.t;
  let obj8 = { startExpanded: true, children: null };
  function handleRecordPressIn() {
    closure_10.current = true;
    closure_18();
  }
  obj7.accessibilityLabel = intl4.string(tmp3 ? t2.hHBkuG : t2["/VJ/Sp"]);
  obj7.accessibilityActions = accessibilityActions;
  obj7.onAccessibilityAction = onAccessibilityAction;
  obj7.onPressIn = handleRecordPressIn;
  obj7.onPressOut = function handleRecordPressOut() {
    closure_10.current = false;
    if (ref3.current) {
      callback1();
    }
  };
  obj7.onPress = function onPress() {

  };
  obj6.children = closure_12(components_Button_Button.Button, obj7);
  items5[3] = closure_12(ref, obj6);
  let obj9 = { style: tmp.nextButton, children: null };
  const obj10 = { variant: "primary", text: null, disabled: null, onPress: null };
  const intl5 = util.intl;
  obj10.text = intl5.string(util.t.PDTjLN);
  obj10.disabled = !tmp18;
  obj10.onPress = function handleNext() {
    if (null != first) {
      const obj = { guildId, analyticsSource, localSource: null };
      const obj2 = { uri: first.uri, isOgg: true, fallbackDurationMs: 1000 * first.durationSecs, fallbackWaveform: first.waveform };
      obj.localSource = obj2;
      showSoundboardSoundEditModalDefault(obj);
    }
  };
  obj9.children = closure_12(components_Button_Button.Button, obj10);
  items5[4] = closure_12(ref, obj9);
  obj2.children = items5;
  obj8.children = tmp21(ref, obj2);
  return closure_12(ActionSheet.ActionSheet, obj8);
};