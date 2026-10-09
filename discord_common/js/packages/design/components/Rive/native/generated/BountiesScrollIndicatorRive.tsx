// === Module 4863: BountiesScrollIndicatorRive ===

// Module 4863 (BountiesScrollIndicatorRive)
import c from "c" /* 576 */;
import BaseRive from "BaseRive" /* 4805 */;
import RiveErrorBoundary from "RiveErrorBoundary" /* 4858 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let closure_4 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = fn(21).jsx;
const artboardProperties = { "Bounties Scroll Indicator": { startAnimation: "trigger", looping: "boolean", color: "color" } };
const artboardViewModelInstances = { "Bounties Scroll Indicator": ["Instance"] };
let ReactCompilerGating = fn(558);
let obj2 = {
  "Bounties Scroll Indicator": ReactCompilerGating.isReactCompilerEnabled() ? (function BountiesScrollIndicatorBindings(arg0) {
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let startAnimation;
    if (dataBinding != null) {
      startAnimation = dataBinding.startAnimation;
    }
    let startAnimation1;
    if (onDataBindingChange != null) {
      startAnimation1 = onDataBindingChange.startAnimation;
    }
    const triggerBinding = BaseRive.useTriggerBinding("startAnimation", instance, startAnimation, startAnimation1, playIfNeeded);
    let looping;
    if (dataBinding != null) {
      looping = dataBinding.looping;
    }
    let looping1;
    if (onDataBindingChange != null) {
      looping1 = onDataBindingChange.looping;
    }
    const booleanBinding = BaseRive.useBooleanBinding("looping", instance, looping, looping1, playIfNeeded);
    const tmpResult = BaseRive;
    let color;
    if (dataBinding != null) {
      color = dataBinding.color;
    }
    let color1;
    if (onDataBindingChange != null) {
      color1 = onDataBindingChange.color;
    }
    const colorBinding = BaseRive.useColorBinding("color", instance, color, color1, playIfNeeded);
    return null;
  }) : (function BountiesScrollIndicatorBindings(arg0) {
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let startAnimation;
    if (dataBinding != null) {
      startAnimation = dataBinding.startAnimation;
    }
    let startAnimation1;
    if (onDataBindingChange != null) {
      startAnimation1 = onDataBindingChange.startAnimation;
    }
    const triggerBinding = BaseRive.useTriggerBinding("startAnimation", instance, startAnimation, startAnimation1, playIfNeeded);
    let looping;
    if (dataBinding != null) {
      looping = dataBinding.looping;
    }
    let looping1;
    if (onDataBindingChange != null) {
      looping1 = onDataBindingChange.looping;
    }
    const booleanBinding = BaseRive.useBooleanBinding("looping", instance, looping, looping1, playIfNeeded);
    const tmpResult = BaseRive;
    let color;
    if (dataBinding != null) {
      color = dataBinding.color;
    }
    let color1;
    if (onDataBindingChange != null) {
      color1 = onDataBindingChange.color;
    }
    const colorBinding = BaseRive.useColorBinding("color", instance, color, color1, playIfNeeded);
    return null;
  })
};
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function BountiesScrollIndicatorRiveInner(arg0) {
  const cResult = require("c").c(19);
  if (cResult[0] !== arg0) {
    ({ ref, fallback, artboard, stateMachine, defaultViewModelInstance, dataBinding, onDataBindingChange } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, closure_3);
    _require = dataBinding;
    importDefault = onDataBindingChange;
    cResult[0] = arg0;
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
    importDefault = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  str = "Bounties Scroll Indicator";
  if (undefined !== tmp9) {
    str = tmp9;
  }
  let str2 = "Instance";
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
      obj2 = { ref: tmp6, src: require("module_4864"), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: str2, stateMachine: tmp8, renderDataBinding: tmp14 };
      let merged = Object.assign(tmp7);
      const tmp23 = jsx(tmp(tmp2[4]).BaseRive, { ref: tmp6, src: require("module_4864"), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: str2, stateMachine: tmp8, renderDataBinding: tmp14 });
      cResult[12] = str;
      cResult[13] = str2;
      cResult[14] = tmp6;
      cResult[15] = tmp14;
      cResult[16] = tmp7;
      cResult[17] = tmp8;
      cResult[18] = tmp23;
      tmp15 = tmp23;
    }
  }
  const fn = function y(arg0) {
    let tmp2 = null;
    if (null != obj2[str]) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.dataBinding = dataBinding;
      obj.onDataBindingChange = onDataBindingChange;
      tmp2 = <tmp />;
    }
    return tmp2;
  };
  cResult[8] = str;
  cResult[9] = dataBinding;
  cResult[10] = onDataBindingChange;
  cResult[11] = fn;
  tmp14 = fn;
  let obj = require("c");
  tmp = _require;
}) : (function BountiesScrollIndicatorRiveInner(defaultViewModelInstance) {
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Bounties Scroll Indicator";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Instance";
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  const dataBinding = defaultViewModelInstance.dataBinding;
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
  const tmp = _objectWithoutProperties(defaultViewModelInstance, closure_4);
  let merged = Object.assign(tmp);
  return jsx(str(onDataBindingChange[4]).BaseRive, { ref: defaultViewModelInstance.ref, src: dataBinding(onDataBindingChange[6]), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollIndicatorRive.tsx");

export const BountiesScrollIndicatorRive = ReactCompilerGating.isReactCompilerEnabled() ? (function BountiesScrollIndicatorRiveWithBoundary(fallback) {
  const cResult = c.c(5);
  if (cResult[0] !== fallback) {
    obj2 = {};
    const merged = Object.assign(fallback);
    const tmp10 = <closure_11 />;
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
}) : (function BountiesScrollIndicatorRiveWithBoundary(fallback) {
  const obj = { fallback: fallback.fallback, children: null };
  const merged = Object.assign(fallback);
  obj.children = <closure_11 />;
  return jsx(RiveErrorBoundary.RiveErrorBoundary, { fallback: fallback.fallback, children: null });
});