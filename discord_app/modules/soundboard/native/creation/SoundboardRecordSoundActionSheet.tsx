// discord_app/modules/soundboard/native/creation/SoundboardRecordSoundActionSheet.tsx
import applyDefault from "../../../../../_runtime/00012_apply.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import useAccessibilityPressDefault from "../../../a11y/native/useAccessibilityPress.tsx";
import utils_TimeUtils from "../../../../utils/native/TimeUtils.tsx";
import VoiceMessageUtils from "../../../voice_messages/native/VoiceMessageUtils.tsx";
import SoundboardWaveformDisplayDefault from "SoundboardWaveformDisplay.tsx";
import showSoundboardSoundEditModalDefault from "../edit_modal/showSoundboardSoundEditModal.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

require = fn;
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
      return { value: "HermesInternal", done: "+60" };
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
          const obj4 = {
            echoCancellation: MediaEngineStore.getEchoCancellation(),
            echoCancellationPreEcho: false,
            noiseSuppression: MediaEngineStore.getNoiseSuppression(),
            automaticGainControlConfig: null,
            noiseCancellation: null,
          };
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
        return { value: "HermesInternal", done: "+60" };
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
function stopSoundboardRecording(arg0, current) {
  const mediaEngine = MediaEngineStore.getMediaEngine();
  mediaEngine.removeListener(require("BaseConnectionEvent").MediaEngineEvent.VoiceActivity, arg0);
  _require = require("VoiceMessageUtils").generateBase64EncodedWaveform(current);
  const obj2 = require("VoiceMessageUtils");
  return new Promise((waveform) => {
    const timeout = setTimeout(() => waveform({ uri: "", durationSecs: 0, waveform }), 5000);
    mediaEngine = mediaEngine.getMediaEngine();
    const result = mediaEngine.stopLocalAudioRecording((uri, arg1) => {
      clearTimeout(closure_1);
      waveform({ uri, durationSecs: arg1 / 1000, waveform });
    });
  });
}
const View = fn(17).View;
const NativePermissionTypes = fn(6375).NativePermissionTypes;
const VoiceMessageConstants = fn(12734);
({
  VOICE_RECORDING_MAX_DB: closure_9,
  VOICE_RECORDING_MIN_DB: closure_10,
  VOICE_RECORDING_MIN_DURATION_MILLIS: closure_11,
  WAVEFORM_WAVE_MAX_VALUE: closure_12,
} = VoiceMessageConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4792);
let obj2 = {
  container: { padding: nativeDefault.space.PX_16, alignItems: "center" },
  title: null,
  waveform: null,
  elapsed: null,
  button: null,
  nextButton: null,
};
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
  c14 = undefined;
  closure_17 = undefined;
  const tmp = closure_17();
  [tmp3, c2] = noop.useState(false);
  const tmp4 = _slicedToArray(noop.useState(0), 2);
  _slicedToArray = tmp4[1];
  [first, noop] = noop.useState(null);
  noop.useRef([]);
  noop.useRef(null);
  noop.useRef(false);
  closure_9 = noop.useRef(false);
  closure_10 = noop.useRef(false);
  closure_11 = noop.useRef(false);
  closure_12 = noop.useRef(null);
  const ref = noop.useRef(() => {});
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  [tmp9, c14] = noop.useState(0);
  const memo = noop.useMemo(
    () =>
      applyDefault.throttle((arg0) => {
        if (null != ref2.current) {
          if (ref3.current) {
            current = ref.current;
            const _Math = Math;
            const _Math2 = Math;
            current.push(
              Math.max(0, Math.min(closure_12, closure_12 * ((arg0 - closure_10) / (closure_9 - closure_10)))),
            );
            const _performance = performance;
            const diff = performance.now() - tmp.current;
            closure_1_3(diff);
            closure_1_14((arg0) => arg0 + 1);
            if (diff >= 15000) {
              ref4.current();
            }
          }
        }
      }, 100),
    [],
  );
  items = [memo];
  let current = noop.useCallback(
    first(function* () {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "+60" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp2;
              closure_0 = tmp3;
              closure_128_0 = undefined;
              if (null != ref2.current) {
                if (ref3.current) {
                  tmp33.current = null;
                  tmp21.current = false;
                  closure_10.current = true;
                  v1(false);
                  v1 = 1;
                  c3 = 1;
                  const obj4 = { value: current(memo, ref.current), done: false };
                  return obj4;
                }
              }
              c3 = 3;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            closure_129_10.current = false;
            if (1000 * closure_128_0.durationSecs < closure_1_11) {
              closure_129_5(closure_129_12.current);
            }
          }
          closure_129_5(closure_128_0);
        } catch (tmp28) {
          c3 = tmp;
          throw tmp28;
        }
      }
    }),
    items,
  );
  ref.current = current;
  const items1 = [first, memo];
  closure_17 = noop.useCallback(
    first(function* () {
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
          return { value: "HermesInternal", done: "+60" };
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
                    const obj5 = { value: tmp3(7676).requestPermission(constants.AUDIO), done: false };
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
                closure_129_11.current = false;
                if (closure_128_0) {
                  if (
                    (function isStillHeldAndIdle() {
                      current = ref2.current;
                      if (current) {
                        current = null == ref.current;
                      }
                      if (current) {
                        current = !ref3.current;
                      }
                      return current;
                    })()
                  ) {
                    closure_129_12.current = closure_129_4;
                    closure_129_5(null);
                    closure_129_6.current = [];
                    closure_129_3(0);
                    closure_129_14((arg0) => arg0 + 1);
                    closure_129_2(true);
                    const _performance2 = performance;
                    closure_129_7.current = performance.now();
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
                      })(closure_129_15),
                      done: false,
                    };
                    return obj8;
                  }
                }
              }
            } else if (2 === tmp7) {
              dependencyMap = 0;
              closure_129_7.current = null;
              closure_129_2(false);
              closure_129_5(closure_129_12.current);
              const result = guildId(5473).showVoiceRecordingFailed();
              c4 = 3;
              const obj9 = { value: undefined, done: true };
              return obj9;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 !== 2) {
              dependencyMap = 0;
              const _performance = performance;
              closure_129_7.current = performance.now();
              closure_129_8.current = true;
              if (!closure_129_9.current) {
                closure_129_13.current();
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
    }),
    items1,
  );
  const tmp8 = _slicedToArray(noop.useState(0), 2);
  const intl = util.intl;
  const t = util.t;
  const fn = () => {
    if (null != ref2.current) {
      closure_9.current = false;
      callback();
    } else {
      closure_9.current = true;
      closure_17();
    }
  };
  const items2 = [memo];
  ({ accessibilityActions, onAccessibilityAction } = useAccessibilityPressDefault(
    fn,
    intl.string(tmp3 ? t.hHBkuG : t["/VJ/Sp"]),
  ));
  const effect = obj.useEffect(
    () => () => {
      closure_1_9.current = false;
      memo.cancel();
      current = null != ref.current;
      if (current) {
        current = ref2.current;
      }
      if (current) {
        ref.current = null;
        ref2.current = false;
        let mediaEngine = ref.getMediaEngine();
        mediaEngine.removeListener(guildId(5558).MediaEngineEvent.VoiceActivity, memo);
        closure_0 = guildId(13029).generateBase64EncodedWaveform([]);
        new Promise((waveform) => {
          const timeout = setTimeout(() => waveform({ uri: "", durationSecs: 0, waveform }), 5000);
          mediaEngine = mediaEngine.getMediaEngine();
          const result = mediaEngine.stopLocalAudioRecording((uri, arg1) => {
            clearTimeout(closure_1);
            waveform({ uri, durationSecs: arg1 / 1000, waveform });
          });
        });
        const obj2 = guildId(13029);
      }
    },
    items2,
  );
  const items3 = [tmp9];
  let tmp19 = !tmp3;
  const memo1 = obj.useMemo(() => VoiceMessageUtils.generateBase64EncodedWaveform(ref.current), items3);
  if (!tmp3) {
    tmp19 = null != first;
  }
  let waveform = memo1;
  if (tmp19) {
    waveform = first.waveform;
  }
  if (tmp19) {
    let durationSecs = first.durationSecs;
  } else {
    durationSecs = tmp4[0] / 1000;
  }
  let obj2 = { style: tmp.container, children: null };
  let obj3 = { variant: "heading-lg/semibold", style: tmp.title, children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t["/VJ/Sp"]);
  const items4 = [ref(Text_Text.Text, obj3), , , ,];
  const tmp14Result = useAccessibilityPressDefault(fn, intl.string(tmp3 ? t.hHBkuG : t["/VJ/Sp"]));
  const tmp21 = c14;
  items4[1] = ref(ref, {
    style: tmp.waveform,
    children: ref(SoundboardWaveformDisplayDefault, { waveform, height: 64 }),
  });
  let obj5 = { variant: "body-sm/medium", color: "text-muted", style: tmp.elapsed, children: null };
  let obj4 = { style: tmp.waveform, children: ref(SoundboardWaveformDisplayDefault, { waveform, height: 64 }) };
  const timeFormat = utils_TimeUtils.getTimeFormat(durationSecs);
  const tmp15Result = utils_TimeUtils;
  obj5.children = "" + timeFormat + " / " + utils_TimeUtils.getTimeFormat(15);
  items4[2] = ref(Text_Text.Text, obj5);
  const obj6 = { style: tmp.button, children: null };
  let str = "secondary";
  if (tmp3) {
    str = "destructive";
  }
  let obj7 = {
    variant: str,
    text: null,
    accessibilityLabel: null,
    accessibilityActions: null,
    onAccessibilityAction: null,
    onPressIn: null,
    onPressOut: null,
    onPress: null,
  };
  const intl3 = util.intl;
  obj7.text = intl3.string(util.t["hP6+07"]);
  const intl4 = util.intl;
  const t2 = util.t;
  let obj8 = { startExpanded: true, children: null };
  function handleRecordPressIn() {
    closure_9.current = true;
    closure_17();
  }
  obj7.accessibilityLabel = intl4.string(tmp3 ? t2.hHBkuG : t2["/VJ/Sp"]);
  obj7.accessibilityActions = accessibilityActions;
  obj7.onAccessibilityAction = onAccessibilityAction;
  obj7.onPressIn = handleRecordPressIn;
  obj7.onPressOut = function handleRecordPressOut() {
    closure_9.current = false;
    if (ref3.current) {
      callback();
    }
  };
  obj7.onPress = function onPress() {};
  obj6.children = ref(components_Button_Button.Button, obj7);
  items4[3] = ref(ref, obj6);
  let obj9 = { style: tmp.nextButton, children: null };
  const obj10 = { variant: "primary", text: null, disabled: null, onPress: null };
  const intl5 = util.intl;
  obj10.text = intl5.string(util.t.PDTjLN);
  obj10.disabled = !tmp19;
  obj10.onPress = function handleNext() {
    if (null != first) {
      const obj = { guildId, analyticsSource, localSource: null };
      const obj2 = {
        uri: first.uri,
        isOgg: true,
        fallbackDurationMs: 1000 * first.durationSecs,
        fallbackWaveform: first.waveform,
      };
      obj.localSource = obj2;
      showSoundboardSoundEditModalDefault(obj);
    }
  };
  obj9.children = ref(components_Button_Button.Button, obj10);
  items4[4] = ref(ref, obj9);
  obj2.children = items4;
  obj8.children = tmp21(ref, obj2);
  return ref(ActionSheet.ActionSheet, obj8);
}
