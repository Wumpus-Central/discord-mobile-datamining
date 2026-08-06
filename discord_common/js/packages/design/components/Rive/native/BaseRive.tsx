// discord_common/js/packages/design/components/Rive/native/BaseRive.tsx
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import { DataBindByName } from "../../../../../../../_runtime/04014_DataBindByName.js";

let Platform;
let StyleSheet;
let c3;
let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ View: c3, StyleSheet, Image: c4, PixelRatio: c5, Platform } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
const styles = StyleSheet.create({ container: { flexGrow: 1 }, fill: { flex: 1 }, hidden: { opacity: 0 } });
const forwardRefResult = importAllResult.forwardRef(function BaseRiveInner(renderDataBinding, ref) {
  let alignment;
  let artboard;
  let artboardProperties;
  let artboardViewModelInstances;
  let fit;
  let referencedAssets;
  let require;
  let src;
  let stateMachine;
  let style;
  let withReducedMotion;
  ({ artboard, defaultViewModelInstance: require, referencedAssets, stateMachine, fit, alignment, withReducedMotion } = renderDataBinding);
  ({ src, style, artboardProperties, artboardViewModelInstances } = renderDataBinding);
  if (withReducedMotion === undefined) {
    withReducedMotion = "halt";
  }
  renderDataBinding = renderDataBinding.renderDataBinding;
  let play;
  let pause;
  let obj = require(play[3]);
  let tmp3;
  if (null != referencedAssets) {
    obj = { referencedAssets: null };
    obj[0] = referencedAssets;
    tmp3 = obj;
  }
  let riveFile = obj.useRiveFile(src, tmp3).riveFile;
  let tmpResult = tmp(tmp2[3]);
  const rive = tmpResult.useRive();
  const riveViewRef = rive.riveViewRef;
  let obj3 = pause;
  const enabled = pause.useContext(tmp(tmp2[4]).AccessibilityPreferencesContext).reducedMotion.enabled;
  tmpResult = tmp(tmp2[5]);
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
    const value = closure_5.get();
  }
  let items = artboardViewModelInstances[artboard];
  if (items == null) {
    items = [];
  }
  const memo = obj3.useMemo(() => closure_0, []);
  if (null != memo) {
    let tmp12 = riveFile;
    if (riveFile == null) {
      tmp12 = null;
    }
    let tmp11 = tmp12;
  } else {
    tmp11 = null;
  }
  let instance = require(play[3]).useViewModelInstance(tmp11, { artboardName: artboard, instanceName: memo }).instance;
  let None = instance;
  if (instance == null) {
    None = tmp(tmp2[3]).DataBindMode.None;
  }
  let reducedMotion;
  if (artboardProperties[artboard] != null) {
    reducedMotion = tmp14.reducedMotion;
  }
  const tmp16 = null != reducedMotion;
  const tmp9 = items.length > 0;
  const tmpResult1 = require(play[3]);
  obj = { isReady: tmp6, appStatePlaybackEnabled: flag, shouldShortLoopForReducedMotion: null };
  let tmp17 = enabled;
  if (enabled) {
    tmp17 = !tmp16;
  }
  if (tmp17) {
    tmp17 = "play" !== withReducedMotion;
  }
  obj[2] = tmp17;
  const rivePlayback = require(play[6]).useRivePlayback(riveViewRef, obj);
  play = rivePlayback.play;
  pause = rivePlayback.pause;
  const items1 = [play, pause];
  const imperativeHandle = obj3.useImperativeHandle(ref, () => ({ play, pause }), items1);
  const items2 = [container.container, ];
  let hidden;
  if (null == riveViewRef) {
    hidden = tmp22.hidden;
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
      const obj2 = { instance: null, file: null, reducedMotionEnabled: null, playIfNeeded: null };
      obj2[0] = instance;
      if (riveFile == null) {
        riveFile = null;
      }
      obj2[1] = riveFile;
      obj2[2] = enabled;
      obj2[3] = rivePlayback.playIfNeeded;
      renderDataBindingResult = renderDataBinding(obj2);
    }
    items3[1] = renderDataBindingResult;
    obj1[1] = items3;
    return closure_7(closure_3, obj1);
  } else {
    obj3 = { file: null, hybridRef: null, artboardName: null, autoPlay: true, dataBind: null, style: null };
    obj3[0] = riveFile;
    obj3[1] = rive.setHybridRef;
    obj3[2] = artboard;
    obj3[4] = None;
    const items4 = [tmp22.fill, style];
    obj3[5] = items4;
    if (null != stateMachine) {
      const obj4 = { stateMachineName: null };
      obj4[0] = stateMachine;
      let obj5 = obj4;
    } else {
      obj5 = {};
    }
    const merged = Object.assign(obj5);
    if (null != fit) {
      const obj6 = { fit: null };
      obj6[0] = tmp(tmp2[7]).FIT_MAP[fit];
      let obj7 = obj6;
    } else {
      obj7 = {};
    }
    const merged1 = Object.assign(obj7);
    if (null != alignment) {
      const obj8 = { alignment: null };
      obj8[0] = tmp(tmp2[7]).ALIGNMENT_MAP[alignment];
      let obj9 = obj8;
    } else {
      obj9 = {};
    }
    const merged2 = Object.assign(obj9);
    if (null != value) {
      const obj10 = { layoutScaleFactor: null };
      obj10[0] = value;
      let obj11 = obj10;
    } else {
      obj11 = {};
    }
    const merged3 = Object.assign(obj11);
    closure_6(tmp(tmp2[3]).RiveView, obj3);
    const tmp25 = closure_6;
  }
});
let result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/BaseRive.tsx");

export const BaseRive = forwardRefResult;
export const useNumberBinding = function useNumberBinding(AnimationState, instance, AnimationState2, AnimationState1, playIfNeeded) {
  let _require = AnimationState2;
  let dependencyMap = playIfNeeded;
  const iter = _DataBindByName.useRiveNumber(AnimationState, instance);
  const setValue = iter.setValue;
  let importAllResult = setValue;
  const value = iter.value;
  const items = [AnimationState2, setValue, playIfNeeded];
  const effect = importAllResult.useEffect(() => {
    if (null != closure_0) {
      if (typeof str !== "number") {
        const _Number = Number;
        const _parseFloat = parseFloat;
        let num = 0;
        if (!Number.isNaN(parseFloat(str.toString()))) {
          const _parseFloat2 = parseFloat;
          num = parseFloat(str.toString());
        }
        let tmp2 = num;
      } else {
        const _Number2 = Number;
        tmp2 = str;
      }
      closure_2(tmp2);
      if (AnimationState1 != null) {
        AnimationState1();
      }
      const tmp5 = closure_2;
    }
  }, items);
  _require = value;
  dependencyMap = AnimationState1;
  importAllResult = importAllResult.useRef(AnimationState1);
  const items1 = [AnimationState1];
  const effect1 = importAllResult.useEffect(() => {
    closure_2.current = closure_1;
  }, items1);
  const items2 = [value];
  const effect2 = importAllResult.useEffect(() => {
    if (undefined !== closure_0) {
      const current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
};
export const useStringBinding = function useStringBinding(LVL, instance, LVL2, LVL1, playIfNeeded) {
  let _require = LVL2;
  let dependencyMap = playIfNeeded;
  const iter = _DataBindByName.useRiveString(LVL, instance);
  const setValue = iter.setValue;
  let importAllResult = setValue;
  const value = iter.value;
  const items = [LVL2, setValue, playIfNeeded];
  const effect = importAllResult.useEffect(() => {
    if (null != closure_0) {
      callback(closure_0.toString());
      if (LVL1 != null) {
        LVL1();
      }
    }
  }, items);
  _require = value;
  dependencyMap = LVL1;
  importAllResult = importAllResult.useRef(LVL1);
  const items1 = [LVL1];
  const effect1 = importAllResult.useEffect(() => {
    closure_2.current = closure_1;
  }, items1);
  const items2 = [value];
  const effect2 = importAllResult.useEffect(() => {
    if (undefined !== closure_0) {
      const current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
};
export const useBooleanBinding = function useBooleanBinding(reducedMotion, instance, reducedMotionEnabled, pressed1, playIfNeeded) {
  let _require = reducedMotionEnabled;
  let dependencyMap = playIfNeeded;
  const iter = _DataBindByName.useRiveBoolean(reducedMotion, instance);
  const setValue = iter.setValue;
  let importAllResult = setValue;
  const value = iter.value;
  const items = [reducedMotionEnabled, setValue, playIfNeeded];
  const effect = importAllResult.useEffect(() => {
    if (null != closure_0) {
      const _Boolean = Boolean;
      callback(Boolean(tmp));
      if (pressed1 != null) {
        pressed1();
      }
    }
  }, items);
  _require = value;
  dependencyMap = pressed1;
  importAllResult = importAllResult.useRef(pressed1);
  const items1 = [pressed1];
  const effect1 = importAllResult.useEffect(() => {
    closure_2.current = closure_1;
  }, items1);
  const items2 = [value];
  const effect2 = importAllResult.useEffect(() => {
    if (undefined !== closure_0) {
      const current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
};
export const useColorBinding = function useColorBinding(FillColor, instance, FillColor2, FillColor1, playIfNeeded) {
  const _require = FillColor2;
  const dependencyMap = FillColor1;
  const iter = _DataBindByName.useRiveColor(FillColor, instance);
  const setValue = iter.setValue;
  const value = iter.value;
  let closure_4 = value;
  const items = [FillColor2, setValue, playIfNeeded];
  const effect = importAllResult.useEffect(() => {
    if (null != closure_0) {
      setValue(closure_0.toString());
      if (playIfNeeded != null) {
        playIfNeeded();
      }
    }
  }, items);
  let closure_5 = importAllResult.useRef(FillColor1);
  const items1 = [FillColor1];
  const effect1 = importAllResult.useEffect(() => {
    closure_5.current = closure_1;
  }, items1);
  const items2 = [value];
  const effect2 = importAllResult.useEffect(() => {
    if (null != closure_4) {
      const current = ref.current;
      if (current != null) {
        current(closure_4.toInt());
      }
    }
  }, items2);
};
export const useEnumBinding = function useEnumBinding(FillColor, instance, arg2, stateFromStores) {
  let _require = arg2;
  let dependencyMap = arg4;
  const iter = _DataBindByName.useRiveEnum(FillColor, instance);
  const setValue = iter.setValue;
  let importAllResult = setValue;
  const value = iter.value;
  const items = [arg2, setValue, arg4];
  const effect = importAllResult.useEffect(() => {
    if (null != closure_0) {
      ref(closure_0.toString());
      if (stateFromStores != null) {
        stateFromStores();
      }
    }
  }, items);
  _require = value;
  dependencyMap = stateFromStores;
  importAllResult = importAllResult.useRef(stateFromStores);
  const items1 = [stateFromStores];
  const effect1 = importAllResult.useEffect(() => {
    closure_2.current = closure_1;
  }, items1);
  const items2 = [value];
  const effect2 = importAllResult.useEffect(() => {
    if (undefined !== closure_0) {
      const current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
};
export const useTriggerBinding = function useTriggerBinding(startAnimation, instance, startAnimation2, startAnimation1, playIfNeeded) {
  const _require = startAnimation2;
  const dependencyMap = playIfNeeded;
  let obj = _DataBindByName;
  let tmp;
  if (null != startAnimation1) {
    obj = { onTrigger: null };
    obj[0] = startAnimation1;
    tmp = obj;
  }
  const trigger = obj.useRiveTrigger(startAnimation, instance, tmp).trigger;
  const items = [startAnimation2, trigger, playIfNeeded];
  const effect = trigger.useEffect(() => {
    let tmp2 = closure_0;
    if (typeof closure_0 !== "boolean") {
      let tmp4 = 0 !== tmp;
      if (tmp4) {
        tmp4 = null != tmp;
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
  let closure_0 = img;
  let closure_1 = instance;
  let closure_3 = prop13;
  let closure_4 = playIfNeeded;
  const items = [img, instance, prop12, playIfNeeded];
  const effect = importAllResult.useEffect(() => {
    if (null != instance) {
      if (null != closure_2) {
        let c0 = false;
        const RiveImages = img(instance[3]).RiveImages;
        let uri = tmp;
        if (typeof tmp === "number") {
          uri = playIfNeeded.resolveAssetSource(tmp).uri;
        }
        const fromURLAsync = RiveImages.loadFromURLAsync(uri);
        fromURLAsync.then((arg0) => {
          if (!c0) {
            const imagePropertyResult = outer1_1.imageProperty(c0);
            if (imagePropertyResult != null) {
              const result = imagePropertyResult.set(arg0);
            }
            if (outer1_4 != null) {
              tmp6();
            }
          }
        }).catch(() => {

        });
        return () => {
          let c0 = true;
        };
      }
    }
  }, items);
  let closure_5 = importAllResult.useRef(prop13);
  const items1 = [prop13];
  const effect1 = importAllResult.useEffect(() => {
    closure_5.current = closure_3;
  }, items1);
  const items2 = [img, instance];
  const effect2 = importAllResult.useEffect(() => {
    if (null != closure_1) {
      const imagePropertyResult = closure_1.imageProperty(closure_0);
      if (null != imagePropertyResult) {
        return imagePropertyResult.addListener(() => {
          const current = ref.current;
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
  let closure_0 = Icon;
  let closure_1 = instance;
  let closure_3 = Icon2;
  let closure_4 = playIfNeeded;
  const items = [Icon, instance, file, Icon2, playIfNeeded];
  const effect = file.useEffect(() => {
    if (null != closure_1) {
      if (null != closure_2) {
        if (typeof closure_3 === "string") {
          try {
            const artboardPropertyResult = closure_1.artboardProperty(closure_0);
            if (artboardPropertyResult != null) {
              const result = artboardPropertyResult.set(obj2.getBindableArtboard(tmp));
            }
            if (closure_4 != null) {
              tmp4();
            }
          } catch (err) {
          }
        }
      }
      obj2 = closure_2;
    }
  }, items);
};