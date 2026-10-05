// === Module 4606: BaseRive ===

// Module 4606 (BaseRive)
import react2 from "react" /* 576 */;
import react3 from "react" /* 4596 */;
import DataBindByName from "DataBindByName" /* 4607 */;
import ManaContext from "ManaContext" /* 4655 */;
import useRivePlayback2 from "useRivePlayback" /* 4656 */;
import RiveTypes from "RiveTypes" /* 4657 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, ref;

let Platform;
let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ View: c3, StyleSheet, Image: closure_4, PixelRatio: hasOwnProperty, Platform } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const container = StyleSheet.create({ container: { flexGrow: 1 }, fill: { flex: 1 }, hidden: { opacity: 0 } });
const forwardRefResult = react.forwardRef(function BaseRiveInner(renderDataBinding, arg1) {
  let alignment;
  let artboard;
  let artboardProperties;
  let artboardViewModelInstances;
  let closure_129_0;
  let fit;
  let items3;
  let items4;
  let referencedAssets;
  let src;
  let stateMachine;
  let style;
  let tmp13;
  let tmp20;
  let value;
  let withReducedMotion;
  ({ artboard, defaultViewModelInstance: closure_129_0, referencedAssets, stateMachine, fit, alignment, withReducedMotion } = renderDataBinding);
  ({ src, style, artboardProperties, artboardViewModelInstances } = renderDataBinding);
  if (withReducedMotion === undefined) {
    withReducedMotion = "halt";
  }
  renderDataBinding = renderDataBinding.renderDataBinding;
  let play;
  let pause;
  let tmp4;
  const useRiveFile = DataBindByName.useRiveFile;
  DataBindByName;
  if (null != referencedAssets) {
    tmp4 = { referencedAssets };
    const obj = { referencedAssets };
  }
  let riveFile = useRiveFile(src, tmp4).riveFile;
  const tmpResult = DataBindByName;
  const rive = tmpResult.useRive();
  const riveViewRef = rive.riveViewRef;
  const setHybridRef = rive.setHybridRef;
  const enabled = react.useContext(react3.AccessibilityPreferencesContext).reducedMotion.enabled;
  const tmpResult4 = ManaContext;
  const experiments = tmpResult4.useManaContext().experiments;
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
  const memo = react.useMemo(() => closure_1_0, []);
  const useViewModelInstance = DataBindByName.useViewModelInstance;
  DataBindByName;
  if (null != memo) {
    let tmp14 = riveFile;
    if (riveFile == null) {
      tmp14 = null;
    }
    tmp13 = tmp14;
  } else {
    tmp13 = null;
  }
  let instance = useViewModelInstance(tmp13, { artboardName: artboard, instanceName: memo }).instance;
  let None = instance;
  if (instance == null) {
    None = DataBindByName.DataBindMode.None;
  }
  let reducedMotion;
  if (artboardProperties[artboard] != null) {
    reducedMotion = tmp16.reducedMotion;
  }
  const obj2 = { isReady: null != riveViewRef, appStatePlaybackEnabled: flag, shouldShortLoopForReducedMotion: tmp20 };
  tmp20 = enabled;
  const tmp18 = null != reducedMotion;
  const useRivePlayback = useRivePlayback2.useRivePlayback;
  useRivePlayback2;
  if (enabled) {
    tmp20 = !tmp18;
  }
  if (tmp20) {
    tmp20 = "play" !== withReducedMotion;
  }
  const rivePlayback = useRivePlayback(riveViewRef, obj2);
  play = rivePlayback.play;
  pause = rivePlayback.pause;
  const items1 = [play, pause];
  const playIfNeeded = rivePlayback.playIfNeeded;
  const imperativeHandle = react.useImperativeHandle(arg1, () => ({ play, pause }), items1);
  const items2 = [container.container, ];
  let hidden;
  if (null == riveViewRef) {
    hidden = container.hidden;
  }
  const obj4 = { style: items2, children: items4 };
  items2[1] = hidden;
  let tmp28Result = null != riveFile;
  if (tmp28Result) {
    let obj7;
    let obj9;
    let obj11;
    let obj13;
    const obj5 = { file: riveFile, hybridRef: setHybridRef, artboardName: artboard, autoPlay: true, dataBind: None, style: items3 };
    items3 = [container.fill, style];
    const RiveView = DataBindByName.RiveView;
    if (null != stateMachine) {
      obj7 = { stateMachineName: stateMachine };
      const obj6 = { stateMachineName: stateMachine };
    } else {
      obj7 = {};
    }
    const merged = Object.assign(obj7);
    if (null != fit) {
      obj9 = { fit: RiveTypes.FIT_MAP[fit] };
      const obj8 = { fit: RiveTypes.FIT_MAP[fit] };
    } else {
      obj9 = {};
    }
    const merged1 = Object.assign(obj9);
    if (null != alignment) {
      obj11 = { alignment: RiveTypes.ALIGNMENT_MAP[alignment] };
      const obj10 = { alignment: RiveTypes.ALIGNMENT_MAP[alignment] };
    } else {
      obj11 = {};
    }
    const merged2 = Object.assign(obj11);
    if (null != value) {
      obj13 = { layoutScaleFactor: value };
      const obj12 = { layoutScaleFactor: value };
    } else {
      obj13 = {};
    }
    const merged3 = Object.assign(obj13);
    tmp28Result = metroRequire(RiveView, obj5);
  }
  items4 = [tmp28Result, ];
  let renderDataBindingResult;
  if (renderDataBinding != null) {
    if (instance == null) {
      instance = null;
    }
    const obj14 = { instance, file: riveFile, reducedMotionEnabled: enabled, playIfNeeded };
    if (riveFile == null) {
      riveFile = null;
    }
    renderDataBindingResult = renderDataBinding(obj14);
  }
  items4[1] = renderDataBindingResult;
  return metroImportDefault(c3, obj4);
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let tmp2;
  let tmp3;
  let tmp5;
  let tmp6;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = react2;
  const cResult = obj.c(6);
  let closure_2 = react.useRef(arg1);
  if (cResult[0] !== arg1) {
    const fn = function l() {
      ref.current = current;
    };
    const items = [arg1];
    cResult[0] = arg1;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = react.useEffect(tmp2, tmp3);
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
    tmp6 = items1;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[4];
    tmp6 = cResult[5];
  }
  const effect1 = react.useEffect(tmp5, tmp6);
}) : ((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = react.useRef(arg1);
  const items = [arg1];
  const effect = react.useEffect(() => {
    ref.current = current;
  }, items);
  const items1 = [arg0];
  const effect1 = react.useEffect(() => {
    if (undefined !== closure_0) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3, arg4) => {
  let closure_0 = arg2;
  let closure_1 = arg4;
  const obj = react2;
  const cResult = obj.c(5);
  const obj2 = DataBindByName;
  const riveNumber = obj2.useRiveNumber(arg0, arg1);
  const setValue = riveNumber.setValue;
  if (cResult[0] === arg4) {
    if (cResult[1] === setValue) {
      let tmp4;
      let tmp5;
      if (cResult[2] === arg2) {
        tmp4 = cResult[3];
        tmp5 = cResult[4];
      }
      const effect = react.useEffect(tmp4, tmp5);
      closure_9(tmp3, arg3);
    }
  }
  const fn = function c() {
    if (null != closure_0) {
      let tmp2;
      if (typeof closure_0 !== "number") {
        const _Number = Number;
        const _parseFloat = parseFloat;
        let num = 0;
        if (!Number.isNaN(parseFloat(closure_0.toString()))) {
          const _parseFloat2 = parseFloat;
          num = parseFloat(closure_0.toString());
        }
        tmp2 = num;
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
}) : ((arg0, arg1, arg2, arg3, arg4) => {
  let closure_0 = arg2;
  let closure_1 = arg4;
  const obj = DataBindByName;
  const iter = obj.useRiveNumber(arg0, arg1);
  const setValue = iter.setValue;
  const items = [arg2, setValue, arg4];
  const value = iter.value;
  const effect = react.useEffect(() => {
    if (null != closure_0) {
      let tmp2;
      if (typeof closure_0 !== "number") {
        const _Number = Number;
        const _parseFloat = parseFloat;
        let num = 0;
        if (!Number.isNaN(parseFloat(closure_0.toString()))) {
          const _parseFloat2 = parseFloat;
          num = parseFloat(closure_0.toString());
        }
        tmp2 = num;
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
  let tmp2 = closure_9(value, arg3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3, arg4) => {
  let closure_0 = arg2;
  let closure_1 = arg4;
  const obj = react2;
  const cResult = obj.c(5);
  const obj2 = DataBindByName;
  const riveString = obj2.useRiveString(arg0, arg1);
  const setValue = riveString.setValue;
  if (cResult[0] === arg4) {
    if (cResult[1] === setValue) {
      let tmp4;
      let tmp5;
      if (cResult[2] === arg2) {
        tmp4 = cResult[3];
        tmp5 = cResult[4];
      }
      const effect = react.useEffect(tmp4, tmp5);
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
}) : ((arg0, arg1, arg2, arg3, arg4) => {
  let closure_0 = arg2;
  let closure_1 = arg4;
  const obj = DataBindByName;
  const iter = obj.useRiveString(arg0, arg1);
  const setValue = iter.setValue;
  const items = [arg2, setValue, arg4];
  const value = iter.value;
  const effect = react.useEffect(() => {
    if (null != closure_0) {
      setValue(closure_0.toString());
      if (closure_1 != null) {
        closure_1();
      }
    }
  }, items);
  closure_9(value, arg3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3, arg4) => {
  let closure_0 = arg2;
  let closure_1 = arg4;
  const obj = react2;
  const cResult = obj.c(5);
  const obj2 = DataBindByName;
  const riveBoolean = obj2.useRiveBoolean(arg0, arg1);
  const setValue = riveBoolean.setValue;
  if (cResult[0] === arg4) {
    if (cResult[1] === setValue) {
      let tmp4;
      let tmp5;
      if (cResult[2] === arg2) {
        tmp4 = cResult[3];
        tmp5 = cResult[4];
      }
      const effect = react.useEffect(tmp4, tmp5);
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
}) : ((arg0, arg1, arg2, arg3, arg4) => {
  let closure_0 = arg2;
  let closure_1 = arg4;
  const obj = DataBindByName;
  const iter = obj.useRiveBoolean(arg0, arg1);
  const setValue = iter.setValue;
  const items = [arg2, setValue, arg4];
  const value = iter.value;
  const effect = react.useEffect(() => {
    if (null != closure_0) {
      const _Boolean = Boolean;
      setValue(Boolean(tmp));
      if (closure_1 != null) {
        closure_1();
      }
    }
  }, items);
  closure_9(value, arg3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3, arg4) => {
  let closure_0 = arg2;
  let closure_1 = arg3;
  let closure_2 = arg4;
  const obj = react2;
  const cResult = obj.c(11);
  const obj2 = DataBindByName;
  const iter = obj2.useRiveColor(arg0, arg1);
  const setValue = iter.setValue;
  const value = iter.value;
  if (cResult[0] === arg4) {
    if (cResult[1] === setValue) {
      let tmp2;
      let tmp3;
      let tmp6;
      let tmp5;
      let tmp9;
      if (cResult[2] === arg2) {
        tmp2 = cResult[3];
        tmp3 = cResult[4];
      }
      const effect = react.useEffect(tmp2, tmp3);
      ref = react.useRef(arg3);
      if (cResult[5] !== arg3) {
        const fn2 = function b() {
          ref.current = current;
        };
        const items = [arg3];
        cResult[5] = arg3;
        cResult[6] = fn2;
        cResult[7] = items;
        tmp6 = items;
        tmp5 = fn2;
      } else {
        tmp5 = cResult[6];
        tmp6 = cResult[7];
      }
      const effect1 = react.useEffect(tmp5, tmp6);
      if (cResult[8] !== value) {
        class B {
          constructor() {
            if (null != value) {
              current = ref.current;
              if (current != null) {
                current(value.toInt());
              }
            }
          }
        }
        const items1 = [value];
        cResult[8] = value;
        cResult[9] = B;
        cResult[10] = items1;
        tmp9 = items1;
      } else {
        class B {
          constructor() {
            if (null != value) {
              current = ref.current;
              if (current != null) {
                current(value.toInt());
              }
            }
          }
        }
        tmp9 = cResult[10];
      }
      const effect2 = react.useEffect(B, tmp9);
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
}) : ((arg0, arg1, arg2, arg3, arg4) => {
  let closure_0 = arg2;
  let closure_1 = arg3;
  let closure_2 = arg4;
  const obj = DataBindByName;
  const iter = obj.useRiveColor(arg0, arg1);
  const setValue = iter.setValue;
  const value = iter.value;
  const items = [arg2, setValue, arg4];
  const effect = react.useEffect(() => {
    if (null != closure_0) {
      setValue(closure_0.toString());
      if (closure_2 != null) {
        closure_2();
      }
    }
  }, items);
  let closure_5 = react.useRef(arg3);
  const items1 = [arg3];
  const effect1 = react.useEffect(() => {
    ref.current = current;
  }, items1);
  const items2 = [value];
  const effect2 = react.useEffect(() => {
    if (null != value) {
      current = ref.current;
      if (current != null) {
        current(value.toInt());
      }
    }
  }, items2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3, arg4) => {
  let closure_0 = arg2;
  let closure_1 = arg4;
  const obj = react2;
  const cResult = obj.c(5);
  const obj2 = DataBindByName;
  const riveEnum = obj2.useRiveEnum(arg0, arg1);
  const setValue = riveEnum.setValue;
  if (cResult[0] === arg4) {
    if (cResult[1] === setValue) {
      let tmp4;
      let tmp5;
      if (cResult[2] === arg2) {
        tmp4 = cResult[3];
        tmp5 = cResult[4];
      }
      const effect = react.useEffect(tmp4, tmp5);
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
}) : ((arg0, arg1, arg2, arg3, arg4) => {
  let closure_0 = arg2;
  let closure_1 = arg4;
  const obj = DataBindByName;
  const iter = obj.useRiveEnum(arg0, arg1);
  const setValue = iter.setValue;
  const items = [arg2, setValue, arg4];
  const value = iter.value;
  const effect = react.useEffect(() => {
    if (null != closure_0) {
      setValue(closure_0.toString());
      if (closure_1 != null) {
        closure_1();
      }
    }
  }, items);
  closure_9(value, arg3);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, onTrigger, arg4) => {
  let tmp4;
  let closure_0 = arg2;
  let closure_1 = arg4;
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] !== onTrigger) {
    let tmp6;
    if (null != onTrigger) {
      tmp6 = { onTrigger };
      const obj2 = { onTrigger };
    }
    cResult[0] = onTrigger;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = DataBindByName;
  const trigger = tmpResult.useRiveTrigger(arg0, arg1, tmp4).trigger;
  if (cResult[2] === arg4) {
    if (cResult[3] === trigger) {
      let tmp7;
      let tmp8;
      if (cResult[4] === arg2) {
        tmp7 = cResult[5];
        tmp8 = cResult[6];
      }
      const effect = react.useEffect(tmp7, tmp8);
    }
  }
  const fn = function v() {
    let tmp2 = closure_0;
    if (typeof closure_0 !== "boolean") {
      tmp2 = 0 !== closure_0 && null != closure_0;
      const tmp4 = 0 !== closure_0 && null != closure_0;
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
}) : ((arg0, arg1, arg2, onTrigger, arg4) => {
  let closure_0 = arg2;
  let closure_1 = arg4;
  let tmp2;
  const useRiveTrigger = DataBindByName.useRiveTrigger;
  DataBindByName;
  if (null != onTrigger) {
    tmp2 = { onTrigger };
    const obj = { onTrigger };
  }
  const trigger = useRiveTrigger(arg0, arg1, tmp2).trigger;
  const items = [arg2, trigger, arg4];
  const effect = react.useEffect(() => {
    let tmp2 = closure_0;
    if (typeof closure_0 !== "boolean") {
      tmp2 = 0 !== closure_0 && null != closure_0;
      const tmp4 = 0 !== closure_0 && null != closure_0;
    }
    if (tmp2) {
      trigger();
      if (closure_1 != null) {
        closure_1();
      }
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, current, arg4) => {
  let closure_0;
  let closure_1;
  let closure_2;
  let tmp9;
  _require = arg0;
  dependencyMap = arg1;
  react = arg2;
  let closure_4 = arg4;
  const obj = require("react");
  const cResult = obj.c(13);
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      if (cResult[2] === arg4) {
        let tmp2;
        let tmp3;
        let tmp6;
        if (cResult[3] === arg2) {
          tmp2 = cResult[4];
          tmp3 = cResult[5];
        }
        const effect = react.useEffect(tmp2, tmp3);
        let closure_5 = react.useRef(current);
        if (cResult[6] !== current) {
          class R {
            constructor() {
              closure_5.current = current;
            }
          }
          const items = [current];
          cResult[6] = current;
          cResult[7] = R;
          class E {
            constructor() {
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
            }
          }
          cResult[8] = items;
          tmp6 = items;
        } else {
          class R {
            constructor() {
              closure_5.current = current;
            }
          }
          tmp6 = cResult[8];
        }
        const effect1 = obj2.useEffect(R, tmp6);
        if (cResult[9] === arg1) {
          class R {
            constructor() {
              closure_5.current = current;
            }
          }
          const effect2 = obj2.useEffect(E, tmp9);
        }
        class E {
          constructor() {
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
        let c0 = false;
        const RiveImages = closure_0(closure_1[3]).RiveImages;
        let uri = closure_2;
        const loadFromURLAsync = RiveImages.loadFromURLAsync;
        if (typeof closure_2 === "number") {
          uri = closure_4.resolveAssetSource(closure_2).uri;
        }
        const fromURLAsync = loadFromURLAsync(uri);
        const nextPromise = fromURLAsync.then((result) => {
          if (!c0) {
            const imagePropertyResult = closure_1.imageProperty(closure_0);
            if (imagePropertyResult != null) {
              result = imagePropertyResult.set(result);
            }
            if (closure_4 != null) {
              tmp7();
            }
          }
        });
        nextPromise.catch(() => {

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
}) : ((arg0, arg1, arg2, current, arg4) => {
  let closure_2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  react = arg2;
  let closure_4 = arg4;
  const items = [arg0, arg1, arg2, arg4];
  const effect = react.useEffect(() => {
    if (null != closure_1) {
      if (null != closure_2) {
        let c0 = false;
        const RiveImages = closure_0(closure_1[3]).RiveImages;
        let uri = closure_2;
        const loadFromURLAsync = RiveImages.loadFromURLAsync;
        if (typeof closure_2 === "number") {
          uri = closure_4.resolveAssetSource(closure_2).uri;
        }
        const fromURLAsync = loadFromURLAsync(uri);
        const nextPromise = fromURLAsync.then((result) => {
          if (!c0) {
            const imagePropertyResult = closure_1.imageProperty(closure_0);
            if (imagePropertyResult != null) {
              result = imagePropertyResult.set(result);
            }
            if (closure_4 != null) {
              tmp7();
            }
          }
        });
        nextPromise.catch(() => {

        });
        return () => {
          c0 = true;
        };
      }
    }
  }, items);
  let closure_5 = react.useRef(current);
  const items1 = [current];
  const effect1 = react.useEffect(() => {
    closure_5.current = current;
  }, items1);
  const items2 = [arg0, arg1];
  const effect2 = react.useEffect(() => {
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
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/BaseRive.tsx");

export const BaseRive = forwardRefResult;
export const useNumberBinding = tmp5;
export const useStringBinding = tmp6;
export const useBooleanBinding = tmp7;
export const useColorBinding = tmp8;
export const useEnumBinding = tmp9;
export const useTriggerBinding = tmp10;
export const useImageBinding = tmp11;
export const useArtboardBinding = function useArtboardBinding(Icon, instance, file, Icon2, playIfNeeded) {
  let closure_0 = Icon;
  let closure_1 = instance;
  let closure_2 = file;
  let closure_3 = Icon2;
  let closure_4 = playIfNeeded;
  const items = [Icon, instance, file, Icon2, playIfNeeded];
  const effect = react.useEffect(() => {
    if (null != closure_1) {
      if (null != bindableArtboard) {
        if (typeof closure_3 === "string") {
          try {
            const artboardPropertyResult = closure_1.artboardProperty(closure_0);
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