// discord_common/js/packages/design/components/Rive/native/BaseRive.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import AccessibilityPreferencesContext from "../../AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import DataBindByName from "../../../../../../../_runtime/04613_DataBindByName.js";
import ManaContext from "../../ManaContext/ManaContext.native.tsx";
import useRivePlayback from "useRivePlayback.tsx";
import RiveTypes from "RiveTypes.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet, Image: closure_4, PixelRatio: hasOwnProperty, Platform } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const container = StyleSheet.create({ container: { flexGrow: 1 }, fill: { flex: 1 }, hidden: { opacity: 0 } });
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, current) => {
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
  : (arg0, current) => {
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
const forwardRefResult = noop.forwardRef(function BaseRiveInner(renderDataBinding, arg1) {
  ({
    artboard,
    defaultViewModelInstance: require,
    referencedAssets,
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
  let play;
  let pause;
  let tmp3;
  if (null != referencedAssets) {
    const obj2 = { referencedAssets };
    tmp3 = obj2;
  }
  let riveFile = DataBindByName.useRiveFile(src, tmp3).riveFile;
  const rive = DataBindByName.useRive();
  const riveViewRef = rive.riveViewRef;
  const enabled = noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion
    .enabled;
  const tmpResult = DataBindByName;
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
    value = ref.get();
  }
  let items = artboardViewModelInstances[artboard];
  if (items == null) {
    items = [];
  }
  const memo = noop.useMemo(() => _require, []);
  const tmpResult4 = ManaContext;
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
  const tmpResult5 = DataBindByName;
  const obj3 = { isReady: null != riveViewRef, appStatePlaybackEnabled: flag, shouldShortLoopForReducedMotion: null };
  let tmp17 = enabled;
  if (enabled) {
    tmp17 = !tmp16;
  }
  if (tmp17) {
    tmp17 = "play" !== withReducedMotion;
  }
  obj3.shouldShortLoopForReducedMotion = tmp17;
  const rivePlayback = useRivePlayback.useRivePlayback(riveViewRef, obj3);
  play = rivePlayback.play;
  pause = rivePlayback.pause;
  const items1 = [play, pause];
  const imperativeHandle = noop.useImperativeHandle(arg1, () => ({ play, pause }), items1);
  const items2 = [container.container];
  let hidden;
  if (null == riveViewRef) {
    hidden = container.hidden;
  }
  const obj5 = { style: items2, children: null };
  items2[1] = hidden;
  if (null == riveFile) {
    const items3 = [tmp24];
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
    items3[1] = renderDataBindingResult;
    obj5.children = items3;
    return React5(current, obj5);
  } else {
    const obj7 = {
      file: riveFile,
      hybridRef: rive.setHybridRef,
      artboardName: artboard,
      autoPlay: true,
      dataBind: None,
      style: null,
    };
    const items4 = [container.fill, style];
    obj7.style = items4;
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
    timestampProducer(DataBindByName.RiveView, obj7);
  }
  const tmpResult6 = useRivePlayback;
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, arg3, arg4) => {
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
    }
  : (arg0, arg1, arg2, arg3, arg4) => {
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
    };
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, arg3, arg4) => {
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
    }
  : (arg0, arg1, arg2, arg3, arg4) => {
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
    };
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, arg3, arg4) => {
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
    }
  : (arg0, arg1, arg2, arg3, arg4) => {
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
    };
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, current, arg4) => {
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
  : (arg0, arg1, arg2, current, arg4) => {
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
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, arg3, arg4) => {
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
    }
  : (arg0, arg1, arg2, arg3, arg4) => {
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
    };
ReactCompilerGating = fn(558);
const tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, onTrigger, arg4) => {
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
  : (arg0, arg1, arg2, onTrigger, arg4) => {
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
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/BaseRive.tsx");

export const BaseRive = forwardRefResult;
export const useNumberBinding = tmp5;
export const useStringBinding = tmp6;
export const useBooleanBinding = tmp7;
export const useColorBinding = tmp8;
export const useEnumBinding = tmp9;
export const useTriggerBinding = tmp10;
export const useImageBinding = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, current, arg4) => {
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
              class R {
                constructor() {
                  closure_5.current = closure_3;
                  return;
                }
              }
              const items = [current];
              cResult[6] = current;
              cResult[7] = R;
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
            } else {
              class R {
                constructor() {
                  closure_5.current = closure_3;
                  return;
                }
              }
              tmp6 = cResult[8];
            }
            const effect1 = obj2.useEffect(R, tmp6);
            if (cResult[9] === arg1) {
              class R {
                constructor() {
                  closure_5.current = closure_3;
                  return;
                }
              }
              const effect2 = obj2.useEffect(E, tmp9);
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
            fromURLAsync
              .then((result) => {
                if (!c0) {
                  const imagePropertyResult = closure_1.imageProperty(closure_0);
                  if (imagePropertyResult != null) {
                    result = imagePropertyResult.set(result);
                  }
                  if (closure_4 != null) {
                    tmp6();
                  }
                }
              })
              .catch(() => {});
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
      const obj = require("c");
    }
  : (arg0, arg1, arg2, current, arg4) => {
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
            fromURLAsync
              .then((result) => {
                if (!c0) {
                  const imagePropertyResult = closure_1.imageProperty(closure_0);
                  if (imagePropertyResult != null) {
                    result = imagePropertyResult.set(result);
                  }
                  if (closure_4 != null) {
                    tmp6();
                  }
                }
              })
              .catch(() => {});
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
