// discord_common/js/packages/design/components/Rive/native/BaseRive.tsx
import AccessibilityPreferencesContext from "../../AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import DataBindByName from "../../../../../../../_runtime/05090_DataBindByName.js";
import ManaContext from "../../ManaContext/ManaContext.native.tsx";
import useRivePlayback from "useRivePlayback.tsx";
import RiveTypes from "RiveTypes.tsx";
import asyncGeneratorStep from "../../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
function disposeRiveImageLater(current) {
  closure_0 = current;
  const timerId = setTimeout(() => current.dispose(), c10);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet, Image: hasOwnProperty, PixelRatio: metroRequire, Platform } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const container = StyleSheet.create({ container: { flexGrow: 1 }, fill: { flex: 1 }, hidden: { opacity: 0 } });
let c10 = 1000;
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/BaseRive.tsx");

export const BaseRive = function BaseRiveInner(renderDataBinding) {
  ({
    artboard,
    defaultViewModelInstance: require,
    referencedAssets,
    onRiveFileChange: dependencyMap,
    stateMachine,
    fit,
    alignment,
    withReducedMotion,
  } = renderDataBinding);
  ({ src, style, artboardProperties, artboardViewModelInstances } = renderDataBinding);
  if (withReducedMotion === undefined) {
    withReducedMotion = "halt";
  }
  renderDataBinding = renderDataBinding.renderDataBinding;
  let riveFile;
  closure_3 = undefined;
  let play;
  let pause;
  let tmp3;
  if (null != referencedAssets) {
    const obj2 = { referencedAssets };
    tmp3 = obj2;
  }
  riveFile = DataBindByName.useRiveFile(src, tmp3).riveFile;
  closure_3 = noop.useEffectEvent((arg0) => {
    let tmpResult;
    if (dependencyMap != null) {
      tmpResult = tmp(arg0);
    }
    return tmpResult;
  });
  const items = [riveFile];
  const effect = noop.useEffect(() => {
    let tmp2 = riveFile;
    if (riveFile == null) {
      tmp2 = null;
    }
    closure_3(tmp2);
    return () => closure_1_3(null);
  }, items);
  const rive = DataBindByName.useRive();
  const riveViewRef = rive.riveViewRef;
  const enabled = noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion
    .enabled;
  let tmpResult = DataBindByName;
  const experiments = ManaContext.useManaContext().experiments;
  let flag;
  if (experiments != null) {
    const enabledExperiments = experiments.enabledExperiments;
    if (enabledExperiments != null) {
      flag = enabledExperiments.includes("rive-app-state-playback");
    }
  }
  if (flag == null) {
    flag = false;
  }
  if ("layout" === fit) {
    value = timestampProducer.get();
  }
  let items1 = artboardViewModelInstances[artboard];
  if (items1 == null) {
    items1 = [];
  }
  const memo = noop.useMemo(() => require, []);
  const tmpResult4 = ManaContext;
  if (null != memo) {
    let tmp13 = riveFile;
    if (riveFile == null) {
      tmp13 = null;
    }
    let tmp12 = tmp13;
  } else {
    tmp12 = null;
  }
  let instance = DataBindByName.useViewModelInstance(tmp12, { artboardName: artboard, instanceName: memo }).instance;
  let None = instance;
  if (instance == null) {
    None = DataBindByName.DataBindMode.None;
  }
  let reducedMotion;
  if (artboardProperties[artboard] != null) {
    reducedMotion = tmp15.reducedMotion;
  }
  const tmp17 = null != reducedMotion;
  const tmpResult5 = DataBindByName;
  const obj4 = { isReady: null != riveViewRef, appStatePlaybackEnabled: flag, shouldShortLoopForReducedMotion: null };
  let tmp18 = enabled;
  if (enabled) {
    tmp18 = !tmp17;
  }
  if (tmp18) {
    tmp18 = "play" !== withReducedMotion;
  }
  obj4.shouldShortLoopForReducedMotion = tmp18;
  const rivePlayback = useRivePlayback.useRivePlayback(riveViewRef, obj4);
  play = rivePlayback.play;
  pause = rivePlayback.pause;
  const items2 = [play, pause];
  const imperativeHandle = noop.useImperativeHandle(renderDataBinding.ref, () => ({ play, pause }), items2);
  const items3 = [container.container];
  let hidden;
  if (null == riveViewRef) {
    hidden = container.hidden;
  }
  const obj5 = { style: items3, children: null };
  items3[1] = hidden;
  if (null == riveFile) {
    const items4 = [tmp25];
    let renderDataBindingResult;
    if (renderDataBinding != null) {
      if (instance == null) {
        instance = null;
      }
      const obj6 = { instance, file: null, reducedMotionEnabled: null, playIfNeeded: null };
      if (riveFile == null) {
        riveFile = null;
      }
      obj6.file = riveFile;
      obj6.reducedMotionEnabled = enabled;
      obj6.playIfNeeded = rivePlayback.playIfNeeded;
      renderDataBindingResult = renderDataBinding(obj6);
    }
    items4[1] = renderDataBindingResult;
    obj5.children = items4;
    return React6(React4, obj5);
  } else {
    const obj7 = {
      file: riveFile,
      hybridRef: rive.setHybridRef,
      artboardName: artboard,
      autoPlay: true,
      dataBind: None,
      style: null,
    };
    const items5 = [container.fill, style];
    obj7.style = items5;
    if (null != stateMachine) {
      const obj8 = { stateMachineName: stateMachine };
      let obj9 = obj8;
    } else {
      obj9 = {};
    }
    const merged = Object.assign(obj9);
    if (null != fit) {
      const obj10 = { fit: RiveTypes.FIT_MAP[fit] };
      let obj11 = obj10;
    } else {
      obj11 = {};
    }
    const merged1 = Object.assign(obj11);
    if (null != alignment) {
      const obj12 = { alignment: RiveTypes.ALIGNMENT_MAP[alignment] };
      let obj13 = obj12;
    } else {
      obj13 = {};
    }
    const merged2 = Object.assign(obj13);
    if (null != value) {
      const obj14 = { layoutScaleFactor: value };
      let obj15 = obj14;
    } else {
      obj15 = {};
    }
    const merged3 = Object.assign(obj15);
    React5(DataBindByName.RiveView, obj7);
  }
  const tmpResult6 = useRivePlayback;
};
export function useNumberBinding(chapterID, instance, prop, prop1, playIfNeeded) {
  prop1 = playIfNeeded;
  const iter = DataBindByName.useRiveNumber(chapterID, instance);
  const setValue = iter.setValue;
  value = iter.value;
  const items = [prop, setValue, playIfNeeded];
  const effect = noop.useEffect(() => {
    if (null != prop) {
      if (typeof prop !== "number") {
        const _Number = Number;
        const _parseFloat = parseFloat;
        let num = 0;
        if (!Number.isNaN(parseFloat(prop.toString()))) {
          const _parseFloat2 = parseFloat;
          num = parseFloat(prop.toString());
        }
        let tmp2 = num;
      } else {
        const _Number2 = Number;
        tmp2 = prop;
      }
      closure_2(tmp2);
      if (prop1 != null) {
        prop1();
      }
    }
  }, items);
  prop = value;
  closure_2 = noop.useRef(prop1);
  const items1 = [prop1];
  const effect1 = noop.useEffect(() => {
    closure_2.current = current;
  }, items1);
  const items2 = [value];
  const effect2 = noop.useEffect(() => {
    if (undefined !== closure_0) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
}
export function useStringBinding(LVL, instance, LVL2, LVL1, playIfNeeded) {
  LVL1 = playIfNeeded;
  const iter = DataBindByName.useRiveString(LVL, instance);
  const setValue = iter.setValue;
  value = iter.value;
  const items = [LVL2, setValue, playIfNeeded];
  const effect = noop.useEffect(() => {
    if (null != LVL2) {
      closure_2(LVL2.toString());
      if (LVL1 != null) {
        LVL1();
      }
    }
  }, items);
  LVL2 = value;
  closure_2 = noop.useRef(LVL1);
  const items1 = [LVL1];
  const effect1 = noop.useEffect(() => {
    closure_2.current = current;
  }, items1);
  const items2 = [value];
  const effect2 = noop.useEffect(() => {
    if (undefined !== closure_0) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
}
export function useBooleanBinding(reducedMotion, instance, reducedMotionEnabled, on1, playIfNeeded) {
  on1 = playIfNeeded;
  const iter = DataBindByName.useRiveBoolean(reducedMotion, instance);
  const setValue = iter.setValue;
  value = iter.value;
  const items = [reducedMotionEnabled, setValue, playIfNeeded];
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      const _Boolean = Boolean;
      closure_2(Boolean(tmp));
      if (on1 != null) {
        on1();
      }
    }
  }, items);
  closure_0 = value;
  closure_2 = noop.useRef(on1);
  const items1 = [on1];
  const effect1 = noop.useEffect(() => {
    closure_2.current = current;
  }, items1);
  const items2 = [value];
  const effect2 = noop.useEffect(() => {
    if (undefined !== closure_0) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
}
export function useColorBinding(FillColor, instance, FillColor2, FillColor1, playIfNeeded) {
  let current = FillColor1;
  const iter = DataBindByName.useRiveColor(FillColor, instance);
  const setValue = iter.setValue;
  value = iter.value;
  const items = [FillColor2, setValue, playIfNeeded];
  const effect = noop.useEffect(() => {
    if (null != FillColor2) {
      setValue(FillColor2.toString());
      if (playIfNeeded != null) {
        playIfNeeded();
      }
    }
  }, items);
  noop.useRef(FillColor1);
  const items1 = [FillColor1];
  const effect1 = noop.useEffect(() => {
    closure_5.current = current;
  }, items1);
  const items2 = [value];
  const effect2 = noop.useEffect(() => {
    if (null != value) {
      current = ref.current;
      if (current != null) {
        current(value.toInt());
      }
    }
  }, items2);
}
export function useEnumBinding(device, instance, device2, device1, playIfNeeded) {
  const iter = DataBindByName.useRiveEnum(device, instance);
  const setValue = iter.setValue;
  value = iter.value;
  const items = [device2, setValue, playIfNeeded];
  const effect = noop.useEffect(() => {
    if (null != device2) {
      ref(device2.toString());
      if (current != null) {
        current();
      }
    }
  }, items);
  device2 = value;
  let current = device1;
  noop.useRef(device1);
  const items1 = [device1];
  const effect1 = noop.useEffect(() => {
    closure_2.current = current;
  }, items1);
  const items2 = [value];
  const effect2 = noop.useEffect(() => {
    if (undefined !== closure_0) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
}
export function useTriggerBinding(faceStateChange, instance, faceStateChange2, faceStateChange1, playIfNeeded) {
  closure_0 = faceStateChange2;
  let tmp;
  if (null != faceStateChange1) {
    const obj2 = { onTrigger: faceStateChange1 };
    tmp = obj2;
  }
  const trigger = DataBindByName.useRiveTrigger(faceStateChange, instance, tmp).trigger;
  const items = [faceStateChange2, trigger, playIfNeeded];
  const effect = noop.useEffect(() => {
    let tmp2 = closure_0;
    if (typeof closure_0 !== "boolean") {
      let tmp4 = 0 !== closure_0;
      if (tmp4) {
        tmp4 = null != closure_0;
      }
      tmp2 = tmp4;
    }
    if (tmp2) {
      trigger();
      if (playIfNeeded != null) {
        playIfNeeded();
      }
    }
  }, items);
}
export function useImageBinding(auraImage, instance, auraImage2, auraImage1, playIfNeeded) {
  noop = auraImage1;
  const current2 = playIfNeeded;
  closure_5 = noop.useRef(null);
  const effect = noop.useEffect(
    () => () => {
      if (null != ref.current) {
        current = ref.current;
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => current.dispose(), closure_2_10);
      }
      ref.current = null;
    },
    [],
  );
  closure_6 = noop.useRef(playIfNeeded);
  const items = [playIfNeeded];
  const effect1 = noop.useEffect(() => {
    closure_6.current = current2;
  }, items);
  closure_7 = noop.useRef(null);
  const items1 = [auraImage, instance, auraImage2];
  const effect2 = noop.useEffect(() => {
    if (null != isCancelled) {
      if (null != auraImage2) {
        isCancelled = function isCancelled() {
          return c0;
        };
        c0 = auraImage2(function* () {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj = { value, done: true };
              return obj;
            } else {
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            try {
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  dependencyMap = tmp5;
                  closure_128_0 = undefined;
                  closure_128_1 = undefined;
                  c2 = 1;
                  c3 = 1;
                  const obj3 = { value: tmp2(5144).ignoreErrors(ref3.current), done: false };
                  return obj3;
                }
              } else {
                if (1 === tmp5) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else if (dependencyMap()) {
                    c3 = 3;
                  } else {
                    const RiveImages = tmp2(5090).RiveImages;
                    closure_128_0 = RiveImages.loadFromURLAsync(
                      (function ensureImageUri(source) {
                        if (typeof source === "number") {
                          return closure_1_5.resolveAssetSource(source).uri;
                        } else {
                          return source;
                        }
                      })(auraImage2),
                    );
                    ref3.current = closure_128_0;
                    c2 = 2;
                    c3 = 1;
                    const obj6 = { value: closure_128_0, done: false };
                    return obj6;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                } else {
                  closure_128_1 = value;
                  if (!dependencyMap()) {
                    const imagePropertyResult = isCancelled.imageProperty(c0);
                    if (imagePropertyResult != null) {
                      const result = imagePropertyResult.set(closure_128_1);
                    }
                    if (null != ref.current) {
                      disposeRiveImageLater(ref.current);
                    }
                    ref.current = closure_128_1;
                    current = ref2.current;
                    if (current != null) {
                      current();
                    }
                  }
                }
                closure_128_1.dispose();
              }
            } catch (tmp36) {
              c3 = tmp;
              throw tmp36;
            }
          }
        });
        auraImage(instance[9]).ignoreErrors(
          (function loadImage() {
            const self = this;
            const apply = c0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(),
        );
        return () => {
          c0 = true;
        };
      }
    }
  }, items1);
  closure_8 = noop.useRef(auraImage1);
  const items2 = [auraImage1];
  const effect3 = noop.useEffect(() => {
    closure_8.current = current;
  }, items2);
  const items3 = [auraImage, instance];
  const effect4 = noop.useEffect(() => {
    if (null != instance) {
      const imagePropertyResult = instance.imageProperty(closure_0);
      if (null != imagePropertyResult) {
        return imagePropertyResult.addListener(() => {
          current = ref.current;
          let currentResult;
          if (current != null) {
            currentResult = current();
          }
          return currentResult;
        });
      }
    }
  }, items3);
}
export function useArtboardBinding(Icon, instance, file, Icon2, playIfNeeded) {
  closure_0 = Icon;
  const bindableArtboard = file;
  closure_3 = Icon2;
  closure_4 = playIfNeeded;
  const items = [Icon, instance, file, Icon2, playIfNeeded];
  const effect = noop.useEffect(() => {
    if (null != instance) {
      if (null != bindableArtboard) {
        if (typeof closure_3 === "string") {
          try {
            const artboardPropertyResult = instance.artboardProperty(closure_0);
            if (artboardPropertyResult != null) {
              const result = artboardPropertyResult.set(bindableArtboard.getBindableArtboard(tmp));
            }
            if (closure_4 != null) {
              tmp4();
            }
          } catch (err) {}
        }
      }
    }
  }, items);
}
