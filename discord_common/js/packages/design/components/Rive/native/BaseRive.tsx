// === Module 4290: BaseRive ===

// Module 4290 (BaseRive)
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4279 */;
import DataBindByName from "DataBindByName" /* 4291 */;
import ManaContext from "ManaContext" /* 4341 */;
import useRivePlayback from "useRivePlayback" /* 4342 */;
import RiveTypes from "RiveTypes" /* 4343 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet, Image: closure_4, PixelRatio: hasOwnProperty, Platform } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const container = StyleSheet.create({ container: { flexGrow: 1 }, fill: { flex: 1 }, hidden: { opacity: 0 } });
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/BaseRive.tsx");

export const BaseRive = noop.forwardRef(function BaseRiveInner(renderDataBinding, arg1) {
  ({ artboard, defaultViewModelInstance: require, referencedAssets, stateMachine, fit, alignment, withReducedMotion } = renderDataBinding);
  ({ src, style, artboardProperties, artboardViewModelInstances } = renderDataBinding);
  if (withReducedMotion === undefined) {
    withReducedMotion = "halt";
  }
  renderDataBinding = renderDataBinding.renderDataBinding;
  let play;
  let pause;
  let obj = DataBindByName;
  let tmp3;
  if (null != referencedAssets) {
    obj = { referencedAssets };
    tmp3 = obj;
  }
  let riveFile = obj.useRiveFile(src, tmp3).riveFile;
  let tmpResult = DataBindByName;
  const rive = tmpResult.useRive();
  const riveViewRef = rive.riveViewRef;
  let obj3 = noop;
  const enabled = noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled;
  tmpResult = ManaContext;
  const experiments = tmpResult.useManaContext().experiments;
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
    value = hasOwnProperty.get();
  }
  let items = artboardViewModelInstances[artboard];
  if (items == null) {
    items = [];
  }
  const memo = obj3.useMemo(() => require, []);
  if (null != memo) {
    let tmp12 = riveFile;
    if (riveFile == null) {
      tmp12 = null;
    }
    let tmp11 = tmp12;
  } else {
    tmp11 = null;
  }
  let instance = DataBindByName.useViewModelInstance(tmp11, { artboardName: artboard, instanceName: memo }).instance;
  let None = instance;
  if (instance == null) {
    None = DataBindByName.DataBindMode.None;
  }
  let reducedMotion;
  if (artboardProperties[artboard] != null) {
    reducedMotion = tmp14.reducedMotion;
  }
  const tmp16 = null != reducedMotion;
  const tmpResult1 = DataBindByName;
  obj = { isReady: tmp6, appStatePlaybackEnabled: flag, shouldShortLoopForReducedMotion: null };
  let tmp17 = enabled;
  if (enabled) {
    tmp17 = !tmp16;
  }
  if (tmp17) {
    tmp17 = "play" !== withReducedMotion;
  }
  obj.shouldShortLoopForReducedMotion = tmp17;
  const rivePlayback = useRivePlayback.useRivePlayback(riveViewRef, obj);
  play = rivePlayback.play;
  pause = rivePlayback.pause;
  const items1 = [play, pause];
  const imperativeHandle = obj3.useImperativeHandle(arg1, () => ({ play, pause }), items1);
  const items2 = [container.container, ];
  let hidden;
  if (null == riveViewRef) {
    hidden = container.hidden;
  }
  const obj1 = { style: items2, children: null };
  items2[1] = hidden;
  if (null == riveFile) {
    const items3 = [tmp24, ];
    let renderDataBindingResult;
    if (renderDataBinding != null) {
      if (instance == null) {
        instance = null;
      }
      const obj2 = { instance, file: null, reducedMotionEnabled: null, playIfNeeded: null };
      if (riveFile == null) {
        riveFile = null;
      }
      obj2.file = riveFile;
      obj2.reducedMotionEnabled = enabled;
      obj2.playIfNeeded = rivePlayback.playIfNeeded;
      renderDataBindingResult = renderDataBinding(obj2);
    }
    items3[1] = renderDataBindingResult;
    obj1.children = items3;
    return React5(React3, obj1);
  } else {
    obj3 = { file: riveFile, hybridRef: rive.setHybridRef, artboardName: artboard, autoPlay: true, dataBind: None, style: null };
    const items4 = [container.fill, style];
    obj3.style = items4;
    if (null != stateMachine) {
      const obj4 = { stateMachineName: stateMachine };
      let obj5 = obj4;
    } else {
      obj5 = {};
    }
    const merged = Object.assign(obj5);
    if (null != fit) {
      const obj6 = { fit: RiveTypes.FIT_MAP[fit] };
      let obj7 = obj6;
    } else {
      obj7 = {};
    }
    const merged1 = Object.assign(obj7);
    if (null != alignment) {
      const obj8 = { alignment: RiveTypes.ALIGNMENT_MAP[alignment] };
      let obj9 = obj8;
    } else {
      obj9 = {};
    }
    const merged2 = Object.assign(obj9);
    if (null != value) {
      const obj10 = { layoutScaleFactor: value };
      let obj11 = obj10;
    } else {
      obj11 = {};
    }
    const merged3 = Object.assign(obj11);
    timestampProducer(DataBindByName.RiveView, obj3);
  }
  const tmpResult2 = useRivePlayback;
});
export const useNumberBinding = function useNumberBinding(AnimationState, instance, AnimationState2, AnimationState1, playIfNeeded) {
  AnimationState1 = playIfNeeded;
  const iter = DataBindByName.useRiveNumber(AnimationState, instance);
  const setValue = iter.setValue;
  value = iter.value;
  const items = [AnimationState2, setValue, playIfNeeded];
  const effect = noop.useEffect(() => {
    if (null != AnimationState2) {
      if (typeof AnimationState2 !== "number") {
        const _Number = Number;
        const _parseFloat = parseFloat;
        let num = 0;
        if (!Number.isNaN(parseFloat(AnimationState2.toString()))) {
          const _parseFloat2 = parseFloat;
          num = parseFloat(AnimationState2.toString());
        }
        let tmp2 = num;
      } else {
        const _Number2 = Number;
        tmp2 = AnimationState2;
      }
      closure_2(tmp2);
      if (AnimationState1 != null) {
        AnimationState1();
      }
    }
  }, items);
  AnimationState2 = value;
  closure_2 = noop.useRef(AnimationState1);
  const items1 = [AnimationState1];
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
};
export const useStringBinding = function useStringBinding(LVL, instance, LVL2, LVL1, playIfNeeded) {
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
};
export const useBooleanBinding = function useBooleanBinding(reducedMotion, instance, reducedMotionEnabled, on1, playIfNeeded) {
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
};
export const useColorBinding = function useColorBinding(FillColor, instance, FillColor2, FillColor1, playIfNeeded) {
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
};
export const useEnumBinding = function useEnumBinding(FillColor, instance, arg2, current, arg4) {
  current = arg4;
  const iter = DataBindByName.useRiveEnum(FillColor, instance);
  const setValue = iter.setValue;
  value = iter.value;
  const items = [arg2, setValue, arg4];
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      ref(closure_0.toString());
      if (current != null) {
        current();
      }
    }
  }, items);
  closure_0 = value;
  noop.useRef(current);
  const items1 = [current];
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
};
export const useTriggerBinding = function useTriggerBinding(startAnimation, instance, startAnimation2, startAnimation1, playIfNeeded) {
  closure_0 = startAnimation2;
  let obj = DataBindByName;
  let tmp;
  if (null != startAnimation1) {
    obj = { onTrigger: startAnimation1 };
    tmp = obj;
  }
  const trigger = obj.useRiveTrigger(startAnimation, instance, tmp).trigger;
  const items = [startAnimation2, trigger, playIfNeeded];
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
};
export const useImageBinding = function useImageBinding(img, instance, prop12, prop13, playIfNeeded) {
  noop = prop12;
  let current = prop13;
  const items = [img, instance, prop12, playIfNeeded];
  const effect = noop.useEffect(() => {
    if (null != instance) {
      if (null != closure_2) {
        c0 = false;
        const RiveImages = img(instance[3]).RiveImages;
        let uri = closure_2;
        if (typeof closure_2 === "number") {
          uri = playIfNeeded.resolveAssetSource(closure_2).uri;
        }
        const fromURLAsync = RiveImages.loadFromURLAsync(uri);
        fromURLAsync.then((result) => {
          if (!c0) {
            const imagePropertyResult = closure_1.imageProperty(closure_0);
            if (imagePropertyResult != null) {
              result = imagePropertyResult.set(result);
            }
            if (closure_4 != null) {
              tmp6();
            }
          }
        }).catch(() => {

        });
        return () => {
          c0 = true;
        };
      }
    }
  }, items);
  closure_5 = noop.useRef(prop13);
  const items1 = [prop13];
  const effect1 = noop.useEffect(() => {
    closure_5.current = current;
  }, items1);
  const items2 = [img, instance];
  const effect2 = noop.useEffect(() => {
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
  }, items2);
};
export const useArtboardBinding = function useArtboardBinding(Icon, instance, file, Icon2, playIfNeeded) {
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
          } catch (err) {
          }
        }
      }
    }
  }, items);
};