// discord_common/js/packages/design/components/Rive/native/BaseRive.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import AccessibilityPreferencesContext from "../../AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import DataBindByName from "../../../../../../../_runtime/05080_DataBindByName.js";
import ManaContext from "../../ManaContext/ManaContext.native.tsx";
import useRivePlayback from "useRivePlayback.tsx";
import RiveTypes from "RiveTypes.tsx";
import asyncGeneratorStep from "../../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function disposeRiveImageLater(current) {
  closure_0 = current;
  const timerId = setTimeout(() => current.dispose(), c11);
}
function ensureImageUri(source) {
  let uri = source;
  if (typeof source === "number") {
    uri = ref.resolveAssetSource(source).uri;
  }
  return uri;
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet, Image: hasOwnProperty, PixelRatio: metroRequire, Platform } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const React6 = StyleSheet.create({ container: { flexGrow: 1 }, fill: { flex: 1 }, hidden: { opacity: 0 } });
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useObservedValue(arg0, current) {
      closure_0 = arg0;
      const cResult = c.c(6);
      noop.useRef(current);
      if (cResult[0] !== current) {
        const fn = function l() {
          closure_2.current = current;
        };
        const items = [current];
        cResult[0] = current;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp3 = items;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      const effect = noop.useEffect(tmp2, tmp3);
      if (cResult[3] !== arg0) {
        const fn2 = function o() {
          if (undefined !== closure_0) {
            current = ref.current;
            if (current != null) {
              current(tmp);
            }
          }
        };
        const items1 = [arg0];
        cResult[3] = arg0;
        cResult[4] = fn2;
        cResult[5] = items1;
        let tmp6 = items1;
        let tmp5 = fn2;
      } else {
        tmp5 = cResult[4];
        tmp6 = cResult[5];
      }
      const effect1 = noop.useEffect(tmp5, tmp6);
    }
  : function useObservedValue(arg0, current) {
      closure_0 = arg0;
      noop.useRef(current);
      const items = [current];
      const effect = noop.useEffect(() => {
        closure_2.current = current;
      }, items);
      const items1 = [arg0];
      const effect1 = noop.useEffect(() => {
        if (undefined !== closure_0) {
          current = ref.current;
          if (current != null) {
            current(tmp);
          }
        }
      }, items1);
    };
fn(558);
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useNumberBinding(arg0, arg1, arg2, arg3, arg4) {
      closure_0 = arg2;
      closure_1 = arg4;
      const cResult = c.c(5);
      const riveNumber = DataBindByName.useRiveNumber(arg0, arg1);
      const setValue = riveNumber.setValue;
      if (cResult[0] === arg4) {
        if (cResult[1] === setValue) {
          if (cResult[2] === arg2) {
            let tmp4 = cResult[3];
            let tmp5 = cResult[4];
          }
          const effect = noop.useEffect(tmp4, tmp5);
          closure_10(tmp3, arg3);
        }
      }
      const fn = function c() {
        if (null != closure_0) {
          if (typeof closure_0 !== "number") {
            const _Number = Number;
            const _parseFloat = parseFloat;
            let num = 0;
            if (!Number.isNaN(parseFloat(closure_0.toString()))) {
              const _parseFloat2 = parseFloat;
              num = parseFloat(closure_0.toString());
            }
            let tmp2 = num;
          } else {
            const _Number2 = Number;
            tmp2 = closure_0;
          }
          setValue(tmp2);
          if (closure_1 != null) {
            closure_1();
          }
        }
      };
      const items = [arg2, setValue, arg4];
      cResult[0] = arg4;
      cResult[1] = setValue;
      cResult[2] = arg2;
      cResult[3] = fn;
      cResult[4] = items;
      tmp5 = items;
      tmp4 = fn;
    }
  : function useNumberBinding(arg0, arg1, arg2, arg3, arg4) {
      closure_0 = arg2;
      closure_1 = arg4;
      const iter = DataBindByName.useRiveNumber(arg0, arg1);
      const setValue = iter.setValue;
      const items = [arg2, setValue, arg4];
      const effect = noop.useEffect(() => {
        if (null != closure_0) {
          if (typeof closure_0 !== "number") {
            const _Number = Number;
            const _parseFloat = parseFloat;
            let num = 0;
            if (!Number.isNaN(parseFloat(closure_0.toString()))) {
              const _parseFloat2 = parseFloat;
              num = parseFloat(closure_0.toString());
            }
            let tmp2 = num;
          } else {
            const _Number2 = Number;
            tmp2 = closure_0;
          }
          setValue(tmp2);
          if (closure_1 != null) {
            closure_1();
          }
        }
      }, items);
      closure_10(iter.value, arg3);
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useStringBinding(arg0, arg1, arg2, arg3, arg4) {
      closure_0 = arg2;
      closure_1 = arg4;
      const cResult = c.c(5);
      const riveString = DataBindByName.useRiveString(arg0, arg1);
      const setValue = riveString.setValue;
      if (cResult[0] === arg4) {
        if (cResult[1] === setValue) {
          if (cResult[2] === arg2) {
            let tmp4 = cResult[3];
            let tmp5 = cResult[4];
          }
          const effect = noop.useEffect(tmp4, tmp5);
          closure_10(tmp3, arg3);
        }
      }
      const fn = function c() {
        if (null != closure_0) {
          setValue(closure_0.toString());
          if (closure_1 != null) {
            closure_1();
          }
        }
      };
      const items = [arg2, setValue, arg4];
      cResult[0] = arg4;
      cResult[1] = setValue;
      cResult[2] = arg2;
      cResult[3] = fn;
      cResult[4] = items;
      tmp5 = items;
      tmp4 = fn;
    }
  : function useStringBinding(arg0, arg1, arg2, arg3, arg4) {
      closure_0 = arg2;
      closure_1 = arg4;
      const iter = DataBindByName.useRiveString(arg0, arg1);
      const setValue = iter.setValue;
      const items = [arg2, setValue, arg4];
      const effect = noop.useEffect(() => {
        if (null != closure_0) {
          setValue(closure_0.toString());
          if (closure_1 != null) {
            closure_1();
          }
        }
      }, items);
      closure_10(iter.value, arg3);
    };
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useBooleanBinding(arg0, arg1, arg2, arg3, arg4) {
      closure_0 = arg2;
      closure_1 = arg4;
      const cResult = c.c(5);
      const riveBoolean = DataBindByName.useRiveBoolean(arg0, arg1);
      const setValue = riveBoolean.setValue;
      if (cResult[0] === arg4) {
        if (cResult[1] === setValue) {
          if (cResult[2] === arg2) {
            let tmp4 = cResult[3];
            let tmp5 = cResult[4];
          }
          const effect = noop.useEffect(tmp4, tmp5);
          closure_10(tmp3, arg3);
        }
      }
      const fn = function c() {
        if (null != closure_0) {
          const _Boolean = Boolean;
          setValue(Boolean(tmp));
          if (closure_1 != null) {
            closure_1();
          }
        }
      };
      const items = [arg2, setValue, arg4];
      cResult[0] = arg4;
      cResult[1] = setValue;
      cResult[2] = arg2;
      cResult[3] = fn;
      cResult[4] = items;
      tmp5 = items;
      tmp4 = fn;
    }
  : function useBooleanBinding(arg0, arg1, arg2, arg3, arg4) {
      closure_0 = arg2;
      closure_1 = arg4;
      const iter = DataBindByName.useRiveBoolean(arg0, arg1);
      const setValue = iter.setValue;
      const items = [arg2, setValue, arg4];
      const effect = noop.useEffect(() => {
        if (null != closure_0) {
          const _Boolean = Boolean;
          setValue(Boolean(tmp));
          if (closure_1 != null) {
            closure_1();
          }
        }
      }, items);
      closure_10(iter.value, arg3);
    };
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useColorBinding(arg0, arg1, arg2, current, arg4) {
      closure_0 = arg2;
      closure_2 = arg4;
      const cResult = c.c(11);
      const iter = DataBindByName.useRiveColor(arg0, arg1);
      const setValue = iter.setValue;
      value = iter.value;
      if (cResult[0] === arg4) {
        if (cResult[1] === setValue) {
          if (cResult[2] === arg2) {
            let tmp2 = cResult[3];
            let tmp3 = cResult[4];
          }
          const effect = noop.useEffect(tmp2, tmp3);
          noop.useRef(current);
          if (cResult[5] !== current) {
            const fn2 = function b() {
              closure_5.current = current;
            };
            const items = [current];
            cResult[5] = current;
            cResult[6] = fn2;
            cResult[7] = items;
            let tmp6 = items;
            let tmp5 = fn2;
          } else {
            tmp5 = cResult[6];
            tmp6 = cResult[7];
          }
          const effect1 = noop.useEffect(tmp5, tmp6);
          if (cResult[8] !== value) {
            class B {
              constructor() {
                obj = value;
                if (null != value) {
                  current = closure_5.current;
                  if (current != null) {
                    currentResult = current(obj.toInt());
                  }
                }
                return;
              }
            }
            const items1 = [value];
            cResult[8] = value;
            cResult[9] = B;
            cResult[10] = items1;
            let tmp9 = items1;
          } else {
            class B {
              constructor() {
                obj = value;
                if (null != value) {
                  current = closure_5.current;
                  if (current != null) {
                    currentResult = current(obj.toInt());
                  }
                }
                return;
              }
            }
            tmp9 = cResult[10];
          }
          const effect2 = noop.useEffect(B, tmp9);
        }
      }
      const fn = function c() {
        if (null != closure_0) {
          setValue(closure_0.toString());
          if (closure_2 != null) {
            closure_2();
          }
        }
      };
      const items2 = [arg2, setValue, arg4];
      cResult[0] = arg4;
      cResult[1] = setValue;
      cResult[2] = arg2;
      cResult[3] = fn;
      cResult[4] = items2;
      tmp3 = items2;
      tmp2 = fn;
    }
  : function useColorBinding(arg0, arg1, arg2, current, arg4) {
      closure_0 = arg2;
      closure_2 = arg4;
      const iter = DataBindByName.useRiveColor(arg0, arg1);
      const setValue = iter.setValue;
      value = iter.value;
      const items = [arg2, setValue, arg4];
      const effect = noop.useEffect(() => {
        if (null != closure_0) {
          setValue(closure_0.toString());
          if (closure_2 != null) {
            closure_2();
          }
        }
      }, items);
      noop.useRef(current);
      const items1 = [current];
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
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useEnumBinding(arg0, arg1, arg2, arg3, arg4) {
      closure_0 = arg2;
      closure_1 = arg4;
      const cResult = c.c(5);
      const riveEnum = DataBindByName.useRiveEnum(arg0, arg1);
      const setValue = riveEnum.setValue;
      if (cResult[0] === arg4) {
        if (cResult[1] === setValue) {
          if (cResult[2] === arg2) {
            let tmp4 = cResult[3];
            let tmp5 = cResult[4];
          }
          const effect = noop.useEffect(tmp4, tmp5);
          closure_10(tmp3, arg3);
        }
      }
      const fn = function c() {
        if (null != closure_0) {
          setValue(closure_0.toString());
          if (closure_1 != null) {
            closure_1();
          }
        }
      };
      const items = [arg2, setValue, arg4];
      cResult[0] = arg4;
      cResult[1] = setValue;
      cResult[2] = arg2;
      cResult[3] = fn;
      cResult[4] = items;
      tmp5 = items;
      tmp4 = fn;
    }
  : function useEnumBinding(arg0, arg1, arg2, arg3, arg4) {
      closure_0 = arg2;
      closure_1 = arg4;
      const iter = DataBindByName.useRiveEnum(arg0, arg1);
      const setValue = iter.setValue;
      const items = [arg2, setValue, arg4];
      const effect = noop.useEffect(() => {
        if (null != closure_0) {
          setValue(closure_0.toString());
          if (closure_1 != null) {
            closure_1();
          }
        }
      }, items);
      closure_10(iter.value, arg3);
    };
ReactCompilerGating = fn(558);
let c11 = 1000;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTriggerBinding(arg0, arg1, arg2, onTrigger, arg4) {
      closure_0 = arg2;
      closure_1 = arg4;
      const cResult = c.c(7);
      if (cResult[0] !== onTrigger) {
        let tmp6;
        if (null != onTrigger) {
          const obj2 = { onTrigger };
          tmp6 = obj2;
        }
        cResult[0] = onTrigger;
        cResult[1] = tmp6;
        let tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      const trigger = DataBindByName.useRiveTrigger(arg0, arg1, tmp4).trigger;
      if (cResult[2] === arg4) {
        if (cResult[3] === trigger) {
          if (cResult[4] === arg2) {
            let tmp7 = cResult[5];
            let tmp8 = cResult[6];
          }
          const effect = noop.useEffect(tmp7, tmp8);
        }
      }
      const fn = function v() {
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
          if (closure_1 != null) {
            closure_1();
          }
        }
      };
      const items = [arg2, trigger, arg4];
      cResult[2] = arg4;
      cResult[3] = trigger;
      cResult[4] = arg2;
      cResult[5] = fn;
      cResult[6] = items;
      tmp8 = items;
      tmp7 = fn;
      const tmpResult = DataBindByName;
    }
  : function useTriggerBinding(arg0, arg1, arg2, onTrigger, arg4) {
      closure_0 = arg2;
      closure_1 = arg4;
      let tmp;
      if (null != onTrigger) {
        const obj2 = { onTrigger };
        tmp = obj2;
      }
      const trigger = DataBindByName.useRiveTrigger(arg0, arg1, tmp).trigger;
      const items = [arg2, trigger, arg4];
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
          if (closure_1 != null) {
            closure_1();
          }
        }
      }, items);
    };
class BaseRiveInner {
  constructor(arg0) {
    ({
      artboard,
      defaultViewModelInstance,
      referencedAssets,
      onRiveFileChange,
      stateMachine,
      fit,
      alignment,
      withReducedMotion,
    } = global);
    ({ src, style, artboardProperties, artboardViewModelInstances } = global);
    if (withReducedMotion === undefined) {
      withReducedMotion = "halt";
    }
    renderDataBinding = global.renderDataBinding;
    riveFile = undefined;
    closure_3 = undefined;
    play = undefined;
    pause = undefined;
    tmp = closure_0;
    tmp2 = closure_1;
    obj = closure_0(closure_1[4]);
    tmp3 = undefined;
    if (null != referencedAssets) {
      obj1 = { referencedAssets: null };
      obj1.referencedAssets = referencedAssets;
      tmp3 = obj1;
    }
    riveFile = obj.useRiveFile(src, tmp3).riveFile;
    obj3 = closure_3;
    closure_3 = closure_3.useEffectEvent((arg0) => {
      let tmpResult;
      if (dependencyMap != null) {
        tmpResult = tmp(arg0);
      }
      return tmpResult;
    });
    items = [];
    items[0] = riveFile;
    effect = closure_3.useEffect(() => {
      let tmp2 = riveFile;
      if (riveFile == null) {
        tmp2 = null;
      }
      closure_3(tmp2);
      return () => closure_1_3(null);
    }, items);
    tmpResult = tmp(tmp2[4]);
    rive = tmpResult.useRive();
    riveViewRef = rive.riveViewRef;
    tmp7 = null != riveViewRef;
    enabled = closure_3.useContext(tmp(tmp2[5]).AccessibilityPreferencesContext).reducedMotion.enabled;
    tmpResult1 = tmp(tmp2[6]);
    experiments = tmpResult1.useManaContext().experiments;
    flag = undefined;
    if (experiments != null) {
      enabledExperiments = experiments.enabledExperiments;
      if (enabledExperiments != null) {
        str = "rive-app-state-playback";
        flag = enabledExperiments.includes("rive-app-state-playback");
      }
    }
    if (flag == null) {
      flag = false;
    }
    if ("layout" === fit) {
      tmp9 = PixelRatio;
      value = PixelRatio.get();
    }
    items1 = artboardViewModelInstances[artboard];
    if (items1 == null) {
      items1 = [];
    }
    tmp10 = items1.length > 0;
    memo = obj3.useMemo(() => _require, []);
    tmpResult2 = tmp(tmp2[4]);
    if (null != memo) {
      tmp13 = riveFile;
      if (riveFile == null) {
        tmp13 = null;
      }
      tmp12 = tmp13;
    } else {
      tmp12 = null;
    }
    instance = tmpResult2.useViewModelInstance(tmp12, { artboardName: artboard, instanceName: memo }).instance;
    None = instance;
    if (instance == null) {
      None = tmp(tmp2[4]).DataBindMode.None;
    }
    tmp15 = artboardProperties[artboard];
    reducedMotion = undefined;
    if (tmp15 != null) {
      reducedMotion = tmp15.reducedMotion;
    }
    tmp17 = null != reducedMotion;
    tmpResult3 = tmp(tmp2[7]);
    obj20 = { isReady: tmp7, appStatePlaybackEnabled: flag, shouldShortLoopForReducedMotion: null };
    tmp18 = enabled;
    if (enabled) {
      tmp18 = !tmp17;
    }
    if (tmp18) {
      str2 = "play";
      tmp18 = "play" !== withReducedMotion;
    }
    obj20.shouldShortLoopForReducedMotion = tmp18;
    rivePlayback = tmpResult3.useRivePlayback(riveViewRef, obj20);
    play = rivePlayback.play;
    pause = rivePlayback.pause;
    items2 = [,];
    items2[0] = play;
    items2[1] = pause;
    imperativeHandle = obj3.useImperativeHandle(global.ref, () => ({ play, pause }), items2);
    tmp23 = closure_9;
    items3 = [,];
    items3[0] = closure_9.container;
    hidden = undefined;
    tmp21 = jsxs;
    tmp22 = View;
    if (!tmp7) {
      hidden = tmp23.hidden;
    }
    obj21 = { style: items3, children: null };
    items3[1] = hidden;
    tmp25 = null != riveFile;
    if (!tmp25) {
      items4 = [,];
      items4[0] = tmp25;
      renderDataBindingResult = undefined;
      if (renderDataBinding != null) {
        if (instance == null) {
          instance = null;
        }
        obj22 = { instance: null, file: null, reducedMotionEnabled: null, playIfNeeded: null };
        obj22.instance = instance;
        if (riveFile == null) {
          riveFile = null;
        }
        obj22.file = riveFile;
        obj22.reducedMotionEnabled = enabled;
        obj22.playIfNeeded = rivePlayback.playIfNeeded;
        renderDataBindingResult = renderDataBinding(obj22);
      }
      items4[1] = renderDataBindingResult;
      obj21.children = items4;
      return tmp21(tmp22, obj21);
    } else {
      tmp26 = jsx;
      obj23 = { file: null, hybridRef: null, artboardName: null, autoPlay: true, dataBind: null, style: null };
      obj23.file = riveFile;
      obj23.hybridRef = rive.setHybridRef;
      obj23.artboardName = artboard;
      obj23.dataBind = None;
      items5 = [,];
      items5[0] = tmp23.fill;
      items5[1] = style;
      obj23.style = items5;
      if (null != stateMachine) {
        obj24 = { stateMachineName: null };
        obj24.stateMachineName = stateMachine;
        obj25 = obj24;
      } else {
        obj25 = {};
      }
      tmp27 = obj23;
      tmp28 = obj25;
      merged = Object.assign(obj25);
      if (null != fit) {
        obj26 = { fit: null };
        obj26.fit = tmp(tmp2[8]).FIT_MAP[fit];
        obj27 = obj26;
      } else {
        obj27 = {};
      }
      tmp30 = obj23;
      tmp31 = obj27;
      merged1 = Object.assign(obj27);
      if (null != alignment) {
        obj28 = { alignment: null };
        obj28.alignment = tmp(tmp2[8]).ALIGNMENT_MAP[alignment];
        obj29 = obj28;
      } else {
        obj29 = {};
      }
      tmp33 = obj23;
      tmp34 = obj29;
      merged2 = Object.assign(obj29);
      if (null != value) {
        obj30 = { layoutScaleFactor: null };
        obj30.layoutScaleFactor = value;
        obj31 = obj30;
      } else {
        obj31 = {};
      }
      tmp36 = obj23;
      tmp37 = obj31;
      merged3 = Object.assign(obj31);
      tmp26Result = tmp26(tmp(tmp2[4]).RiveView, obj23);
    }
    return;
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/BaseRive.tsx");

export const BaseRive = BaseRiveInner;
export const useNumberBinding = tmp4;
export const useStringBinding = tmp5;
export const useBooleanBinding = tmp6;
export const useColorBinding = tmp7;
export const useEnumBinding = tmp8;
export const useTriggerBinding = tmp9;
export const useImageBinding = ReactCompilerGating.isReactCompilerEnabled()
  ? function useImageBinding(arg0, arg1, arg2, current, arg4) {
      _require = arg0;
      dependencyMap = arg1;
      closure_2 = arg2;
      noop = current;
      closure_4 = arg4;
      const cResult = require("c").c(15);
      closure_5 = noop.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function f() {
          return () => {
            if (null != ref.current) {
              current = ref.current;
              const _setTimeout = setTimeout;
              const timerId = setTimeout(() => current.dispose(), closure_2_11);
            }
            ref.current = null;
          };
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp2 = fn;
        tmp3 = items;
      } else {
        [tmp2, tmp3] = cResult;
      }
      const effect = obj2.useEffect(tmp2, tmp3);
      if (cResult[2] === arg1) {
        if (cResult[3] === arg0) {
          if (cResult[4] === arg4) {
            if (cResult[5] === arg2) {
              let tmp5 = cResult[6];
              let tmp6 = cResult[7];
            }
            const effect1 = obj2.useEffect(tmp5, tmp6);
            closure_6 = obj2.useRef(current);
            if (cResult[8] !== current) {
              const fn3 = function y() {
                closure_6.current = current;
              };
              const items1 = [current];
              cResult[8] = current;
              class I {
                constructor() {
                  obj = closure_1;
                  if (null != closure_1) {
                    tmp = closure_0;
                    imagePropertyResult = obj.imageProperty(closure_0);
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
                  return;
                }
              }
              cResult[10] = items1;
              let tmp9 = items1;
              let tmp8 = fn3;
            } else {
              tmp8 = cResult[9];
              tmp9 = cResult[10];
            }
            const effect2 = obj2.useEffect(tmp8, tmp9);
            if (cResult[11] === arg1) {
              if (cResult[12] === arg0) {
                let tmp11 = cResult[13];
                let tmp12 = cResult[14];
              }
              const effect3 = obj2.useEffect(tmp11, tmp12);
            }
            class I {
              constructor() {
                obj = closure_1;
                if (null != closure_1) {
                  tmp = closure_0;
                  imagePropertyResult = obj.imageProperty(closure_0);
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
                return;
              }
            }
            const items2 = [arg0, arg1];
            cResult[11] = arg1;
            cResult[12] = arg0;
            cResult[13] = I;
            cResult[14] = items2;
            tmp12 = items2;
            tmp11 = I;
          }
        }
      }
      const fn2 = function p() {
        if (null != closure_1) {
          if (null != closure_2) {
            c0 = closure_2(function* () {
              if (c3 === 2) {
                c3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp5 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj = { value, done: true };
                  return obj;
                } else {
                  return { value: "IconComponent", done: null };
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
                      closure_128_0 = undefined;
                      const RiveImages = tmp3(tmp2[4]).RiveImages;
                      c2 = 1;
                      c3 = 1;
                      const obj3 = { value: RiveImages.loadFromURLAsync(ensureImageUri(closure_2_2)), done: false };
                      return obj3;
                    }
                  } else if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    closure_128_0 = value;
                    if (tmp3) {
                      closure_128_0.dispose();
                    } else {
                      const imagePropertyResult = closure_2_1.imageProperty(c0);
                      if (imagePropertyResult != null) {
                        const result = imagePropertyResult.set(closure_128_0);
                      }
                      if (null != ref.current) {
                        disposeRiveImageLater(ref.current);
                      }
                      ref.current = closure_128_0;
                      if (closure_2_4 != null) {
                        tmp23();
                      }
                    }
                    c3 = 3;
                  }
                } catch (tmp31) {
                  c3 = tmp;
                  throw tmp31;
                }
              }
            });
            closure_0(closure_1[11]).ignoreErrors(
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
      };
      const items3 = [arg0, arg1, arg2, arg4];
      cResult[2] = arg1;
      cResult[3] = arg0;
      cResult[4] = arg4;
      cResult[5] = arg2;
      cResult[6] = fn2;
      cResult[7] = items3;
      tmp6 = items3;
      tmp5 = fn2;
    }
  : function useImageBinding(arg0, arg1, arg2, current, arg4) {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      noop = current;
      closure_4 = arg4;
      closure_5 = noop.useRef(null);
      const effect = noop.useEffect(
        () => () => {
          if (null != ref.current) {
            current = ref.current;
            const _setTimeout = setTimeout;
            const timerId = setTimeout(() => current.dispose(), closure_2_11);
          }
          ref.current = null;
        },
        [],
      );
      const items = [arg0, arg1, arg2, arg4];
      const effect1 = noop.useEffect(() => {
        if (null != closure_1) {
          if (null != closure_2) {
            c0 = closure_2(function* () {
              if (c3 === 2) {
                c3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp5 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj = { value, done: true };
                  return obj;
                } else {
                  return { value: "IconComponent", done: null };
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
                      closure_128_0 = undefined;
                      const RiveImages = tmp3(tmp2[4]).RiveImages;
                      c2 = 1;
                      c3 = 1;
                      const obj3 = { value: RiveImages.loadFromURLAsync(ensureImageUri(closure_2_2)), done: false };
                      return obj3;
                    }
                  } else if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    closure_128_0 = value;
                    if (tmp3) {
                      closure_128_0.dispose();
                    } else {
                      const imagePropertyResult = closure_2_1.imageProperty(c0);
                      if (imagePropertyResult != null) {
                        const result = imagePropertyResult.set(closure_128_0);
                      }
                      if (null != ref.current) {
                        disposeRiveImageLater(ref.current);
                      }
                      ref.current = closure_128_0;
                      if (closure_2_4 != null) {
                        tmp23();
                      }
                    }
                    c3 = 3;
                  }
                } catch (tmp31) {
                  c3 = tmp;
                  throw tmp31;
                }
              }
            });
            closure_0(closure_1[11]).ignoreErrors(
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
      }, items);
      closure_6 = noop.useRef(current);
      const items1 = [current];
      const effect2 = noop.useEffect(() => {
        closure_6.current = current;
      }, items1);
      const items2 = [arg0, arg1];
      const effect3 = noop.useEffect(() => {
        if (null != closure_1) {
          const imagePropertyResult = closure_1.imageProperty(closure_0);
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
          } catch (err) {}
        }
      }
    }
  }, items);
};
