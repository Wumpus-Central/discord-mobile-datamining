// === Module 4844: BaseRive ===

// Module 4844 (BaseRive)
import c from "c" /* 576 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4834 */;
import DataBindByName from "DataBindByName" /* 4845 */;
import ManaContext from "ManaContext" /* 4893 */;
import useRivePlayback from "useRivePlayback" /* 4894 */;
import RiveTypes from "RiveTypes" /* 4895 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet, Image: closure_4, PixelRatio: hasOwnProperty, Platform } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const container = StyleSheet.create({ container: { flexGrow: 1 }, fill: { flex: 1 }, hidden: { opacity: 0 } });
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useObservedValue(arg0, current) {
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
}) : (function useObservedValue(arg0, current) {
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
});
fn(558);
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNumberBinding(arg0, arg1, arg2, arg3, arg4) {
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
      closure_9(tmp3, arg3);
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
}) : (function useNumberBinding(arg0, arg1, arg2, arg3, arg4) {
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
  closure_9(iter.value, arg3);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStringBinding(arg0, arg1, arg2, arg3, arg4) {
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
      closure_9(tmp3, arg3);
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
}) : (function useStringBinding(arg0, arg1, arg2, arg3, arg4) {
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
  closure_9(iter.value, arg3);
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBooleanBinding(arg0, arg1, arg2, arg3, arg4) {
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
      closure_9(tmp3, arg3);
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
}) : (function useBooleanBinding(arg0, arg1, arg2, arg3, arg4) {
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
  closure_9(iter.value, arg3);
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useColorBinding(arg0, arg1, arg2, current, arg4) {
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
        const fn2 = function p() {
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
        const fn3 = function y() {
          if (null != value) {
            current = ref.current;
            if (current != null) {
              current(value.toInt());
            }
          }
        };
        const items1 = [value];
        cResult[8] = value;
        cResult[9] = fn3;
        cResult[10] = items1;
        let tmp9 = items1;
        let tmp8 = fn3;
      } else {
        tmp8 = cResult[9];
        tmp9 = cResult[10];
      }
      const effect2 = noop.useEffect(tmp8, tmp9);
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
}) : (function useColorBinding(arg0, arg1, arg2, current, arg4) {
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
});
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEnumBinding(arg0, arg1, arg2, arg3, arg4) {
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
      closure_9(tmp3, arg3);
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
}) : (function useEnumBinding(arg0, arg1, arg2, arg3, arg4) {
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
  closure_9(iter.value, arg3);
});
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTriggerBinding(arg0, arg1, arg2, onTrigger, arg4) {
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
}) : (function useTriggerBinding(arg0, arg1, arg2, onTrigger, arg4) {
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
});
class BaseRiveInner {
  constructor(arg0) {
    ({ artboard, defaultViewModelInstance, referencedAssets, stateMachine, fit, alignment, withReducedMotion } = global);
    ({ src, style, artboardProperties, artboardViewModelInstances } = global);
    if (withReducedMotion === undefined) {
      withReducedMotion = "halt";
    }
    renderDataBinding = global.renderDataBinding;
    play = undefined;
    pause = undefined;
    tmp = closure_0;
    tmp2 = closure_1;
    obj = closure_0(closure_1[3]);
    tmp3 = undefined;
    if (null != referencedAssets) {
      obj1 = { referencedAssets: null };
      obj1.referencedAssets = referencedAssets;
      tmp3 = obj1;
    }
    riveFile = obj.useRiveFile(src, tmp3).riveFile;
    tmpResult = tmp(tmp2[3]);
    rive = tmpResult.useRive();
    riveViewRef = rive.riveViewRef;
    tmp6 = null != riveViewRef;
    obj4 = closure_2;
    enabled = closure_2.useContext(tmp(tmp2[4]).AccessibilityPreferencesContext).reducedMotion.enabled;
    tmpResult1 = tmp(tmp2[5]);
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
      tmp8 = PixelRatio;
      value = PixelRatio.get();
    }
    items = artboardViewModelInstances[artboard];
    if (items == null) {
      items = [];
    }
    tmp9 = items.length > 0;
    memo = obj4.useMemo(() => _require, []);
    tmpResult2 = tmp(tmp2[3]);
    if (null != memo) {
      tmp12 = riveFile;
      if (riveFile == null) {
        tmp12 = null;
      }
      tmp11 = tmp12;
    } else {
      tmp11 = null;
    }
    instance = tmpResult2.useViewModelInstance(tmp11, { artboardName: artboard, instanceName: memo }).instance;
    None = instance;
    if (instance == null) {
      None = tmp(tmp2[3]).DataBindMode.None;
    }
    tmp14 = artboardProperties[artboard];
    reducedMotion = undefined;
    if (tmp14 != null) {
      reducedMotion = tmp14.reducedMotion;
    }
    tmp16 = null != reducedMotion;
    tmpResult3 = tmp(tmp2[6]);
    obj20 = { isReady: tmp6, appStatePlaybackEnabled: flag, shouldShortLoopForReducedMotion: null };
    tmp17 = enabled;
    if (enabled) {
      tmp17 = !tmp16;
    }
    if (tmp17) {
      str2 = "play";
      tmp17 = "play" !== withReducedMotion;
    }
    obj20.shouldShortLoopForReducedMotion = tmp17;
    rivePlayback = tmpResult3.useRivePlayback(riveViewRef, obj20);
    play = rivePlayback.play;
    pause = rivePlayback.pause;
    items1 = [, ];
    items1[0] = play;
    items1[1] = pause;
    imperativeHandle = obj4.useImperativeHandle(global.ref, () => ({ play, pause }), items1);
    tmp22 = closure_8;
    items2 = [, ];
    items2[0] = closure_8.container;
    hidden = undefined;
    tmp20 = jsxs;
    tmp21 = View;
    if (!tmp6) {
      hidden = tmp22.hidden;
    }
    obj21 = { style: items2, children: null };
    items2[1] = hidden;
    tmp24 = null != riveFile;
    if (!tmp24) {
      items3 = [, ];
      items3[0] = tmp24;
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
      items3[1] = renderDataBindingResult;
      obj21.children = items3;
      return tmp20(tmp21, obj21);
    } else {
      tmp25 = jsx;
      obj23 = { file: null, hybridRef: null, artboardName: null, autoPlay: true, dataBind: null, style: null };
      obj23.file = riveFile;
      obj23.hybridRef = rive.setHybridRef;
      obj23.artboardName = artboard;
      obj23.dataBind = None;
      items4 = [, ];
      items4[0] = tmp22.fill;
      items4[1] = style;
      obj23.style = items4;
      if (null != stateMachine) {
        obj24 = { stateMachineName: null };
        obj24.stateMachineName = stateMachine;
        obj25 = obj24;
      } else {
        obj25 = {};
      }
      tmp26 = obj23;
      tmp27 = obj25;
      merged = Object.assign(obj25);
      if (null != fit) {
        obj26 = { fit: null };
        obj26.fit = tmp(tmp2[7]).FIT_MAP[fit];
        obj27 = obj26;
      } else {
        obj27 = {};
      }
      tmp29 = obj23;
      tmp30 = obj27;
      merged1 = Object.assign(obj27);
      if (null != alignment) {
        obj28 = { alignment: null };
        obj28.alignment = tmp(tmp2[7]).ALIGNMENT_MAP[alignment];
        obj29 = obj28;
      } else {
        obj29 = {};
      }
      tmp32 = obj23;
      tmp33 = obj29;
      merged2 = Object.assign(obj29);
      if (null != value) {
        obj30 = { layoutScaleFactor: null };
        obj30.layoutScaleFactor = value;
        obj31 = obj30;
      } else {
        obj31 = {};
      }
      tmp35 = obj23;
      tmp36 = obj31;
      merged3 = Object.assign(obj31);
      tmp25Result = tmp25(tmp(tmp2[3]).RiveView, obj23);
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
export const useImageBinding = ReactCompilerGating.isReactCompilerEnabled() ? (function useImageBinding(arg0, arg1, arg2, current, arg4) {
  _require = arg0;
  dependencyMap = arg1;
  noop = arg2;
  closure_4 = arg4;
  const cResult = require("c").c(13);
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      if (cResult[2] === arg4) {
        if (cResult[3] === arg2) {
          let tmp2 = cResult[4];
          let tmp3 = cResult[5];
        }
        const effect = noop.useEffect(tmp2, tmp3);
        closure_5 = noop.useRef(current);
        if (cResult[6] !== current) {
          const fn2 = function b() {
            closure_5.current = current;
          };
          const items = [current];
          cResult[6] = current;
          cResult[7] = fn2;
          class E {
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
          cResult[8] = items;
          let tmp6 = items;
          let tmp5 = fn2;
        } else {
          tmp5 = cResult[7];
          tmp6 = cResult[8];
        }
        const effect1 = obj2.useEffect(tmp5, tmp6);
        if (cResult[9] === arg1) {
          if (cResult[10] === arg0) {
            let tmp8 = cResult[11];
            let tmp9 = cResult[12];
          }
          const effect2 = obj2.useEffect(tmp8, tmp9);
        }
        class E {
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
        const items1 = [arg0, arg1];
        cResult[9] = arg1;
        cResult[10] = arg0;
        cResult[11] = E;
        cResult[12] = items1;
        tmp9 = items1;
        tmp8 = E;
      }
    }
  }
  const fn = function c() {
    if (null != closure_1) {
      if (null != closure_2) {
        c0 = false;
        const RiveImages = closure_0(closure_1[3]).RiveImages;
        let uri = closure_2;
        if (typeof closure_2 === "number") {
          uri = closure_4.resolveAssetSource(closure_2).uri;
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
  };
  const items2 = [arg0, arg1, arg2, arg4];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = arg4;
  cResult[3] = arg2;
  cResult[4] = fn;
  cResult[5] = items2;
  tmp3 = items2;
  tmp2 = fn;
}) : (function useImageBinding(arg0, arg1, arg2, current, arg4) {
  closure_0 = arg0;
  closure_1 = arg1;
  noop = arg2;
  closure_4 = arg4;
  const items = [arg0, arg1, arg2, arg4];
  const effect = noop.useEffect(() => {
    if (null != closure_1) {
      if (null != closure_2) {
        c0 = false;
        const RiveImages = closure_0(closure_1[3]).RiveImages;
        let uri = closure_2;
        if (typeof closure_2 === "number") {
          uri = closure_4.resolveAssetSource(closure_2).uri;
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
  closure_5 = noop.useRef(current);
  const items1 = [current];
  const effect1 = noop.useEffect(() => {
    closure_5.current = current;
  }, items1);
  const items2 = [arg0, arg1];
  const effect2 = noop.useEffect(() => {
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
});
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