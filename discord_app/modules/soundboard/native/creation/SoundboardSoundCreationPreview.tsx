// === Module 19807: SoundboardSoundCreationPreview ===

// Module 19807 (SoundboardSoundCreationPreview)
import nativeDefault from "native" /* 575 */;
import _mod1653 from "module_1653" /* 1653 */;
import timing_timing from "timing/timing" /* 5123 */;
import useToken from "useToken" /* 5477 */;
import _modDef9260 from "module_9260" /* 9260 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;

const _modDef1653 = _mod1653;

require = fn;
function PlayheadLine(arg0) {
  ({ width, progress } = arg0);
  const tmp = closure_13();
  const token = useToken.useToken(nativeDefault.colors.ICON_FEEDBACK_CRITICAL);
  items = [closure_14, width, 3, progress];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp5, tmp6, tmp7, tmp8] = items;
  class SoundboardSoundCreationPreviewTsx1 {
    constructor() {
      obj = { left: null, opacity: null };
      diff = closure_0 - closure_1;
      obj.left = Math.max(0, Math.min(diff, closure_2.get() * closure_0 - closure_1 / 2));
      num = 1;
      if (closure_2.get() < 0) {
        num = 0;
      }
      obj.opacity = num;
      return obj;
    }
  }
  const items1 = [tmp6, tmp7, tmp8];
  SoundboardSoundCreationPreviewTsx1.__closure = items1;
  SoundboardSoundCreationPreviewTsx1.__workletHash = 710320565142;
  SoundboardSoundCreationPreviewTsx1.__initData = tmp5;
  const animatedStyle = _mod1653.useAnimatedStyle(SoundboardSoundCreationPreviewTsx1);
  const obj3 = { pointerEvents: "none", style: null };
  const items2 = [tmp.playheadLine, animatedStyle, { backgroundColor: token }];
  obj3.style = items2;
  return refs(_modDef1653.View, obj3);
}
const View = fn(17).View;
const MAX_SOUND_LENGTH_SECONDS = fn(5963).MAX_SOUND_LENGTH_SECONDS;
const SoundOutputChannel = fn(5814).SoundOutputChannel;
const jsxProd = fn(21);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4913);
let obj2 = { waveformCard: { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 }, waveformContainer: { height: 96, justifyContent: "center" }, playheadLine: null, trimError: null, previewButton: null, hiddenPlayer: null };
let size = { position: "absolute", top: 0, width: 3, height: 96, borderRadius: nativeDefault.radii.sm };
obj2.playheadLine = size;
let obj3 = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
obj2.trimError = { marginTop: nativeDefault.space.PX_8 };
let obj4 = { marginTop: nativeDefault.space.PX_8 };
obj2.previewButton = { marginBottom: nativeDefault.space.PX_16 };
obj2.hiddenPlayer = { width: 0, height: 0 };
let closure_13 = createStyles.createStyles(obj2);
let closure_14 = { code: "(function SoundboardSoundCreationPreviewTsx1(){let[width,PLAYHEAD_WIDTH,progress]=this.__closure;return{left:Math.max(0,Math.min(width-PLAYHEAD_WIDTH,progress.get()*width-PLAYHEAD_WIDTH/2)),opacity:progress.get()<0?0:1};})" };
const PlatformUtils = fn(1378);
let closure_16 = PlatformUtils.isIOS() ? (function VideoPreviewPlayer(onLoad) {
  onLoad = onLoad.onLoad;
  ({ uri, volume, onEnd, onError } = onLoad);
  const tmp = closure_13();
  return refs(_modDef9260, {
    source: { uri },
    audioOnly: true,
    paused: false,
    volume,
    onLoad() {
      return onLoad();
    },
    onEnd,
    onError,
    ignoreSilentSwitch: "ignore",
    style: closure_13().hiddenPlayer
  });
}) : (function MobileAudioSoundPreviewPlayer(uri) {
  uri = uri.uri;
  let volume = uri.volume;
  ({ onLoad, onEnd, onError } = uri);
  const tmp = volume(7392)(onLoad);
  dependencyMap = tmp;
  const tmp2 = volume(7392)(onEnd);
  closure_3 = tmp2;
  const tmp3 = volume(7392)(onError);
  closure_4 = tmp3;
  items = [uri, volume, tmp, tmp2, tmp3];
  const effect = noop.useEffect(() => {
    closure_2 = async function _play() {
      closure_1 = tmp3;
      let v0 = 1;
      await mobileAudioSound.playWithListener(() => {
        if (!closure_1_1) {
          closure_2();
        }
      });
      if (1 === tmp7) {
        v0 = 0;
        closure_128_0 = closure_2;
        if (!closure_129_1) {
          v2(tmp14);
        }
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        if (!closure_129_1) {
          v0();
        }
        v0 = 0;
      }
      v0 = 0;
      return value;
    };
    mobileAudioSound = new uri(closure_2[14]).MobileAudioSound(mobileAudioSound, "soundboard_sound", volume, constants.VOICE);
    mobileAudioSound.volume = volume;
    volume = false;
    (function play() {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
    return () => {
      c1 = true;
      mobileAudioSound.stop();
    };
  }, items);
  return null;
});
size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/creation/SoundboardSoundCreationPreview.tsx");

export default function SoundboardSoundCreationPreview(source) {
  source = source.source;
  const volume = source.volume;
  const onDurationChange = source.onDurationChange;
  const onTrimChange = source.onTrimChange;
  noop = undefined;
  let num;
  let first;
  closure_10 = undefined;
  let first1;
  closure_12 = undefined;
  c13 = undefined;
  let sharedValue;
  let stateFromStores;
  let first2;
  closure_17 = undefined;
  let memo;
  closure_19 = undefined;
  const tmp = c13();
  const uri = source.uri;
  const tmp3 = onTrimChange(noop.useState(null), 2);
  noop = tmp3[1];
  const tmp4 = onTrimChange(noop.useState(false), 2);
  closure_6 = tmp4[1];
  let preview = source.preview;
  if (preview == null) {
    preview = tmp3[0];
  }
  items = [uri, source.preview];
  const effect = obj.useEffect(() => {
    closure_1 = async function _load() {
      closure_1 = tmp3;
      await closure_2_0(19799).loadSoundboardAudioPreview(c4, closure_2_0(19799).WAVEFORM_BAR_COUNT);
      if (1 === tmp7) {
        c2 = 0;
        if (!closure_129_0) {
          closure_1_6(true);
        }
        c4 = 3;
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_0 = value;
        if (!closure_129_0) {
          closure_1_5(closure_128_0);
        }
        c2 = 0;
      }
      return value;
    };
    if (null == source.preview) {
      source = false;
      (function load() {
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
      };
    }
  }, items);
  num = undefined;
  if (preview != null) {
    num = preview.durationMs;
  }
  if (num == null) {
    num = source.fallbackDurationMs;
  }
  if (num == null) {
    num = 0;
  }
  const items1 = [num, onDurationChange];
  const effect1 = obj.useEffect(() => {
    onDurationChange(num);
  }, items1);
  const tmp2Result = onTrimChange(noop.useState(null), 2);
  first = tmp2Result[0];
  closure_10 = tmp2Result[1];
  const tmp2Result4 = onTrimChange(noop.useState(false), 2);
  first1 = tmp2Result4[0];
  closure_12 = tmp2Result4[1];
  [tmp12, c13] = onTrimChange(noop.useState(0), 2);
  const tmp2Result5 = onTrimChange(noop.useState(0), 2);
  sharedValue = source(onDurationChange[11]).useSharedValue(-1);
  let obj2 = source(onDurationChange[11]);
  const items2 = [preview];
  stateFromStores = source(onDurationChange[17]).useStateFromStores(items2, () => preview.useReducedMotion);
  const obj3 = source(onDurationChange[17]);
  const sharedValue1 = source(onDurationChange[11]).useSharedValue(0);
  let obj4 = source(onDurationChange[11]);
  const sharedValue2 = source(onDurationChange[11]).useSharedValue(1);
  const tmp2Result6 = onTrimChange(noop.useState({ start: 0, end: 1 }), 2);
  first2 = tmp2Result6[0];
  closure_17 = tmp2Result6[1];
  const items3 = [first2, num];
  memo = obj.useMemo(() => {
    if (first2.start > 0) {
      let tmp2 = null;
      if (num > 0) {
        const obj = { startMs: first2.start * tmp3, endMs: first2.end * tmp3 };
        tmp2 = obj;
      }
    } else {
      tmp2 = null;
    }
    return tmp2;
  }, items3);
  if (null != memo) {
    num = memo.endMs - memo.startMs;
  }
  const items4 = [memo, onTrimChange];
  const effect2 = obj.useEffect(() => {
    onTrimChange(memo);
  }, items4);
  const items5 = [first, stateFromStores, sharedValue];
  const callback = obj.useCallback((start, end) => {
    closure_17({ start, end });
  }, []);
  const items6 = [sharedValue];
  const callback1 = obj.useCallback(() => {
    let tmp2 = null == first || stateFromStores;
    if (!tmp2) {
      tmp2 = first.durationMs <= 0;
    }
    if (!tmp2) {
      const result = sharedValue.set(first.fromRatio);
      const obj2 = { duration: first.durationMs, easing: _mod1653.Easing.linear };
      const result1 = sharedValue.set(timing_timing.withTiming(first.toRatio, obj2));
    }
  }, items5);
  const callback2 = obj.useCallback(() => {
    closure_10(null);
    const result = sharedValue.set(-1);
  }, items6);
  const tmp29 = volume(onDurationChange[19])();
  closure_19 = tmp29;
  const items7 = [uri, preview, first, first1, memo, first2, volume, tmp29];
  let callback3 = obj.useCallback(uri(function*() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            source = tmp8;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            if (null != preview) {
              if (null == first) {
                if (!first1) {
                  if (null != memo) {
                    closure_12(true);
                    c3 = 2;
                    c4 = 3;
                    c5 = 1;
                    const obj5 = { value: source(tmp72[16]).trimSoundboardAudio(uri, tmp61), done: false };
                    return obj5;
                  } else {
                    const obj9 = { uri: null, fromRatio: 0, toRatio: 1, durationMs: null, volume: null };
                    ({ audioUri: obj7.uri, durationMs: obj7.durationMs } = preview);
                    obj9.volume = tmp4(tmp72[20])(volume);
                    closure_10(obj9);
                  }
                }
              }
            }
            c5 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            if (closure_129_19()) {
              const intl = source(tmp72[22]).intl;
              source(tmp72[21]).presentError(intl.string(source(tmp72[22]).t.M17qLj));
              const obj6 = source(tmp72[21]);
            }
          } else if (3 === tmp8) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              if (closure_129_19()) {
                closure_129_12(false);
              }
              c5 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              closure_128_0 = value;
              c4 = 4;
              c5 = 1;
              const obj11 = { value: source(tmp72[16]).loadSoundboardAudioPreview(closure_128_0, 1), done: false };
              return obj11;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            if (closure_129_19()) {
              closure_129_12(false);
            }
            c5 = 3;
            const obj18 = { value, done: true };
            return obj18;
          } else {
            closure_128_1 = value;
            if (closure_129_19()) {
              const obj = { uri: closure_128_1.audioUri, fromRatio: null, toRatio: null, durationMs: null, volume: null };
              ({ start: obj.fromRatio, end: obj.toRatio } = closure_129_16);
              obj.durationMs = closure_128_1.durationMs;
              obj.volume = tmp4(tmp72[20])(closure_129_1);
              closure_129_10(obj);
              c3 = 1;
            } else {
              c3 = 0;
              if (closure_129_19()) {
                closure_129_12(false);
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
          c3 = 0;
          if (closure_129_19()) {
            closure_129_12(false);
          }
        }
        c3 = 0;
        if (closure_129_19()) {
          closure_129_12(false);
        }
        throw tmp72;
      } catch (tmp72) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp72;
        } else if (tmp2 === tmp74) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items7);
  let waveform;
  if (preview != null) {
    waveform = preview.waveform;
  }
  if (waveform == null) {
    waveform = source.fallbackWaveform;
  }
  let tmp37 = null;
  if (null != first) {
    const obj7 = { uri: null, volume: null, onLoad: null, onEnd: null, onError: null };
    ({ uri: obj6.uri, volume: obj6.volume } = first);
    obj7.onLoad = callback1;
    obj7.onEnd = callback2;
    obj7.onError = callback2;
    tmp37 = closure_10(first2, obj7);
  }
  const items8 = [tmp37, , ];
  const obj8 = { style: tmp.waveformCard, children: null };
  let obj9 = {
    style: tmp.waveformContainer,
    onLayout(nativeEvent) {
      return _undefined(nativeEvent.nativeEvent.layout.width);
    },
    children: null
  };
  if (tmp31) {
    let tmp35Result = tmp41(tmp13(tmp14[23]).ActivityIndicator, {});
  } else {
    let obj10 = { waveform, barCount: tmp13(tmp14[16]).WAVEFORM_BAR_COUNT, height: 96, trimStartRatio: null, trimEndRatio: null };
    let num2 = 0;
    if (tmp33) {
      num2 = first2.start;
    }
    obj10.trimStartRatio = num2;
    let num3 = 1;
    if (tmp33) {
      num3 = first2.end;
    }
    obj10.trimEndRatio = num3;
    const items9 = [tmp41(tmp28(tmp14[24]), obj10), , ];
    let tmp41Result4 = null;
    if (!stateFromStores) {
      tmp41Result4 = null;
      if (tmp12 > 0) {
        let obj11 = { width: tmp12, progress: sharedValue };
        tmp41Result4 = tmp41(stateFromStores, obj11);
      }
    }
    items9[1] = tmp41Result4;
    let tmp41Result5 = null;
    if (tmp33) {
      tmp41Result5 = null;
      if (tmp12 > 0) {
        const size = { width: tmp12, height: 96, startRatio: sharedValue1, endRatio: sharedValue2, onChange: callback, disabled: null };
        let tmp47 = tmp34;
        if (!tmp34) {
          tmp47 = first1;
        }
        size.disabled = tmp47;
        tmp41Result5 = tmp41(tmp28(tmp14[25]), size);
        const tmp28Result2 = tmp28(tmp14[25]);
      }
    }
    const obj12 = { children: null };
    items9[2] = tmp41Result5;
    obj12.children = items9;
    tmp35Result = tmp35(tmp36, obj12);
    const tmp28Result = tmp28(tmp14[24]);
  }
  obj9.children = tmp35Result;
  const items10 = [closure_10(closure_6, obj9), ];
  let tmp41Result6 = null;
  if (tmp23) {
    const obj13 = { variant: "body-xs/medium", color: "text-feedback-warning", style: tmp.trimError, children: null };
    let intl = tmp13(tmp14[22]).intl;
    const obj14 = { limit: num };
    obj13.children = intl.format(tmp13(tmp14[22]).t["e12/z4"], obj14);
    tmp41Result6 = tmp41(tmp13(tmp14[26]).Text, obj13);
  }
  items10[1] = tmp41Result6;
  obj8.children = items10;
  items8[1] = closure_12(closure_6, obj8);
  const obj15 = { style: tmp.previewButton, children: null };
  const intl2 = tmp13(tmp14[22]).intl;
  const t = tmp13(tmp14[22]).t;
  const obj16 = { variant: "secondary", text: intl2.string(null != first ? t.hHBkuG : t.CCRKNz), onPress: null, disabled: null, loading: null };
  if (null != first) {
    callback3 = callback2;
  }
  obj16.onPress = callback3;
  const obj17 = { children: null };
  obj16.disabled = null == preview || first1;
  obj16.loading = first1;
  obj15.children = closure_10(source(onDurationChange[27]).Button, obj16);
  items8[2] = closure_10(closure_6, obj15);
  obj17.children = items8;
  return closure_12(first1, obj17);
};