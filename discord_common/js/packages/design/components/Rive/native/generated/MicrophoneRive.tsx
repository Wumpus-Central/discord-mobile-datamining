// === Module 5159: MicrophoneRive ===

// Module 5159 (MicrophoneRive)
import c from "c" /* 576 */;
import BaseRive from "BaseRive" /* 5079 */;
import RiveErrorBoundary from "RiveErrorBoundary" /* 5134 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let closure_3 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = fn(21).jsx;
const artboardProperties = { "Icon Microphone": { reducedMotion: "boolean", fill: "color", on: "boolean" }, "Animation Main": { reducedMotion: "boolean", fill: "color", on: "boolean" } };
const artboardViewModelInstances = { "Icon Microphone": ["Off", "On"], "Animation Main": ["Off", "On"] };
let ReactCompilerGating = fn(558);
let obj2 = {
  "Icon Microphone": ReactCompilerGating.isReactCompilerEnabled() ? (function IconMicrophoneBindings(reducedMotionEnabled) {
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    let fill;
    if (dataBinding != null) {
      fill = dataBinding.fill;
    }
    let fill1;
    if (onDataBindingChange != null) {
      fill1 = onDataBindingChange.fill;
    }
    const colorBinding = BaseRive.useColorBinding("fill", instance, fill, fill1, playIfNeeded);
    let on;
    if (dataBinding != null) {
      on = dataBinding.on;
    }
    let on1;
    if (onDataBindingChange != null) {
      on1 = onDataBindingChange.on;
    }
    const booleanBinding1 = BaseRive.useBooleanBinding("on", instance, on, on1, playIfNeeded);
    return null;
  }) : (function IconMicrophoneBindings(reducedMotionEnabled) {
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    let fill;
    if (dataBinding != null) {
      fill = dataBinding.fill;
    }
    let fill1;
    if (onDataBindingChange != null) {
      fill1 = onDataBindingChange.fill;
    }
    const colorBinding = BaseRive.useColorBinding("fill", instance, fill, fill1, playIfNeeded);
    let on;
    if (dataBinding != null) {
      on = dataBinding.on;
    }
    let on1;
    if (onDataBindingChange != null) {
      on1 = onDataBindingChange.on;
    }
    const booleanBinding1 = BaseRive.useBooleanBinding("on", instance, on, on1, playIfNeeded);
    return null;
  }),
  "Animation Main": null
};
ReactCompilerGating = fn(558);
obj2["Animation Main"] = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimationMainBindings(reducedMotionEnabled) {
  ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let fill;
  if (dataBinding != null) {
    fill = dataBinding.fill;
  }
  let fill1;
  if (onDataBindingChange != null) {
    fill1 = onDataBindingChange.fill;
  }
  const colorBinding = BaseRive.useColorBinding("fill", instance, fill, fill1, playIfNeeded);
  let on;
  if (dataBinding != null) {
    on = dataBinding.on;
  }
  let on1;
  if (onDataBindingChange != null) {
    on1 = onDataBindingChange.on;
  }
  const booleanBinding1 = BaseRive.useBooleanBinding("on", instance, on, on1, playIfNeeded);
  return null;
}) : (function AnimationMainBindings(reducedMotionEnabled) {
  ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
  const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
  let fill;
  if (dataBinding != null) {
    fill = dataBinding.fill;
  }
  let fill1;
  if (onDataBindingChange != null) {
    fill1 = onDataBindingChange.fill;
  }
  const colorBinding = BaseRive.useColorBinding("fill", instance, fill, fill1, playIfNeeded);
  let on;
  if (dataBinding != null) {
    on = dataBinding.on;
  }
  let on1;
  if (onDataBindingChange != null) {
    on1 = onDataBindingChange.on;
  }
  const booleanBinding1 = BaseRive.useBooleanBinding("on", instance, on, on1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function MicrophoneRiveInner(arg0) {
  const cResult = require("c").c(19);
  if (cResult[0] !== arg0) {
    ({ ref, fallback, artboard, stateMachine, defaultViewModelInstance, dataBinding, onDataBindingChange } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, str);
    _require = dataBinding;
    dependencyMap = onDataBindingChange;
    cResult[0] = arg0;
    class V {
      constructor(arg0) {
        tmp = closure_9[closure_2];
        tmp2 = null;
        if (null != tmp) {
          tmp3 = arg0;
          tmp4 = jsx;
          obj = {};
          tmp5 = obj;
          merged = Object.assign(arg0);
          tmp7 = closure_0;
          obj.dataBinding = closure_0;
          tmp8 = closure_1;
          obj.onDataBindingChange = closure_1;
          tmp2 = jsx(tmp, obj);
        }
        return tmp2;
      }
    }
    cResult[1] = dataBinding;
    cResult[2] = onDataBindingChange;
    cResult[3] = ref;
    cResult[4] = tmp13;
    cResult[5] = stateMachine;
    cResult[6] = artboard;
    cResult[7] = defaultViewModelInstance;
    let tmp10 = defaultViewModelInstance;
    let tmp9 = artboard;
    let tmp8 = stateMachine;
    let tmp7 = tmp13;
    let tmp6 = ref;
  } else {
    _require = cResult[1];
    dependencyMap = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  str = "Icon Microphone";
  if (undefined !== tmp9) {
    str = tmp9;
  }
  let str2 = "Off";
  if (undefined !== tmp10) {
    str2 = tmp10;
  }
  if (cResult[8] === str) {
    if (cResult[9] === dataBinding) {
      if (cResult[10] === onDataBindingChange) {
        let tmp14 = cResult[11];
      }
      if (cResult[12] === str) {
        if (cResult[13] === str2) {
          if (cResult[14] === tmp6) {
            if (cResult[15] === tmp14) {
              if (cResult[16] === tmp7) {
                if (cResult[17] === tmp8) {
                  let tmp15 = cResult[18];
                }
                return tmp15;
              }
            }
          }
        }
      }
      obj2 = { ref: tmp6, src: tmp(5160), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: str2, stateMachine: tmp8, renderDataBinding: null };
      class V {
        constructor(arg0) {
          tmp = closure_9[closure_2];
          tmp2 = null;
          if (null != tmp) {
            tmp3 = arg0;
            tmp4 = jsx;
            obj = {};
            tmp5 = obj;
            merged = Object.assign(arg0);
            tmp7 = closure_0;
            obj.dataBinding = closure_0;
            tmp8 = closure_1;
            obj.onDataBindingChange = closure_1;
            tmp2 = jsx(tmp, obj);
          }
          return tmp2;
        }
      }
      let merged = Object.assign(tmp7);
      const tmp22 = jsx(tmp(5079).BaseRive, { ref: tmp6, src: tmp(5160), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: str2, stateMachine: tmp8, renderDataBinding: null });
      cResult[12] = str;
      cResult[13] = str2;
      cResult[14] = tmp6;
      cResult[15] = tmp14;
      cResult[16] = tmp7;
      cResult[17] = tmp8;
      cResult[18] = tmp22;
      tmp15 = tmp22;
    }
  }
  class V {
    constructor(arg0) {
      tmp = closure_9[closure_2];
      tmp2 = null;
      if (null != tmp) {
        tmp3 = arg0;
        tmp4 = jsx;
        obj = {};
        tmp5 = obj;
        merged = Object.assign(arg0);
        tmp7 = closure_0;
        obj.dataBinding = closure_0;
        tmp8 = closure_1;
        obj.onDataBindingChange = closure_1;
        tmp2 = jsx(tmp, obj);
      }
      return tmp2;
    }
  }
  cResult[8] = str;
  cResult[9] = dataBinding;
  cResult[10] = onDataBindingChange;
  cResult[11] = V;
  tmp14 = V;
  let obj = require("c");
}) : (function MicrophoneRiveInner(defaultViewModelInstance) {
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Icon Microphone";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Off";
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  dataBinding = defaultViewModelInstance.dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const callback = noop.useCallback((arg0) => {
    let tmp2 = null;
    if (null != obj2[str]) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.dataBinding = dataBinding;
      obj.onDataBindingChange = onDataBindingChange;
      tmp2 = <tmp />;
    }
    return tmp2;
  }, items);
  const tmp = _objectWithoutProperties(defaultViewModelInstance, closure_3);
  let merged = Object.assign(tmp);
  return jsx(str(dataBinding[4]).BaseRive, { ref: defaultViewModelInstance.ref, src: str(dataBinding[6]), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/MicrophoneRive.tsx");

export const MicrophoneRive = ReactCompilerGating.isReactCompilerEnabled() ? (function MicrophoneRiveWithBoundary(fallback) {
  const cResult = c.c(5);
  if (cResult[0] !== fallback) {
    obj2 = {};
    const merged = Object.assign(fallback);
    const tmp10 = <closure_10 />;
    cResult[0] = fallback;
    cResult[1] = tmp10;
    let tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === fallback.fallback) {
    if (cResult[3] === tmp4) {
      let tmp11 = cResult[4];
    }
    return tmp11;
  }
  const tmp12 = jsx(RiveErrorBoundary.RiveErrorBoundary, { fallback: fallback.fallback, children: tmp4 });
  cResult[2] = fallback.fallback;
  cResult[3] = tmp4;
  cResult[4] = tmp12;
  tmp11 = tmp12;
  const obj3 = { fallback: fallback.fallback, children: tmp4 };
}) : (function MicrophoneRiveWithBoundary(fallback) {
  const obj = { fallback: fallback.fallback, children: null };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 />;
  return jsx(RiveErrorBoundary.RiveErrorBoundary, { fallback: fallback.fallback, children: null });
});