// === Module 4682: ExpressiveButtonRive ===

// Module 4682 (ExpressiveButtonRive)
import c from "c" /* 576 */;
import BaseRive from "BaseRive" /* 4612 */;
import RiveErrorBoundary from "RiveErrorBoundary" /* 4665 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let closure_4 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = fn(21).jsx;
const artboardProperties = { "Mobile Expressive Button Lightmode": { posy: "number", posx: "number", buttonColor: "color", cornerRadius: "number", pressed: "boolean" }, Ambient_Lightmode: { posy: "number", posx: "number", buttonColor: "color", cornerRadius: "number", pressed: "boolean" }, "Mobile Expressive Button Dark Mode": { posy: "number", posx: "number", buttonColor: "color", cornerRadius: "number", pressed: "boolean" }, Ambient: { posy: "number", posx: "number", buttonColor: "color", cornerRadius: "number", pressed: "boolean" } };
const artboardViewModelInstances = { "Mobile Expressive Button Lightmode": ["Instance"], Ambient_Lightmode: ["Instance"], "Mobile Expressive Button Dark Mode": ["Instance"], Ambient: ["Instance"] };
let ReactCompilerGating = fn(558);
let obj = {
  "Mobile Expressive Button Lightmode": ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let posy;
    if (dataBinding != null) {
      posy = dataBinding.posy;
    }
    let posy1;
    if (onDataBindingChange != null) {
      posy1 = onDataBindingChange.posy;
    }
    const numberBinding = BaseRive.useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
    let posx;
    if (dataBinding != null) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (onDataBindingChange != null) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding1 = BaseRive.useNumberBinding("posx", instance, posx, posx1, playIfNeeded);
    const tmpResult = BaseRive;
    let buttonColor;
    if (dataBinding != null) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (onDataBindingChange != null) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = BaseRive.useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    const tmpResult4 = BaseRive;
    let cornerRadius;
    if (dataBinding != null) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (onDataBindingChange != null) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding2 = BaseRive.useNumberBinding("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
    const tmpResult5 = BaseRive;
    let pressed;
    if (dataBinding != null) {
      pressed = dataBinding.pressed;
    }
    let pressed1;
    if (onDataBindingChange != null) {
      pressed1 = onDataBindingChange.pressed;
    }
    const booleanBinding = BaseRive.useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
    return null;
  }) : ((arg0) => {
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let posy;
    if (dataBinding != null) {
      posy = dataBinding.posy;
    }
    let posy1;
    if (onDataBindingChange != null) {
      posy1 = onDataBindingChange.posy;
    }
    const numberBinding = BaseRive.useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
    let posx;
    if (dataBinding != null) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (onDataBindingChange != null) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding1 = BaseRive.useNumberBinding("posx", instance, posx, posx1, playIfNeeded);
    const tmpResult = BaseRive;
    let buttonColor;
    if (dataBinding != null) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (onDataBindingChange != null) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = BaseRive.useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    const tmpResult4 = BaseRive;
    let cornerRadius;
    if (dataBinding != null) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (onDataBindingChange != null) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding2 = BaseRive.useNumberBinding("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
    const tmpResult5 = BaseRive;
    let pressed;
    if (dataBinding != null) {
      pressed = dataBinding.pressed;
    }
    let pressed1;
    if (onDataBindingChange != null) {
      pressed1 = onDataBindingChange.pressed;
    }
    const booleanBinding = BaseRive.useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
    return null;
  }),
  Ambient_Lightmode: null,
  "Mobile Expressive Button Dark Mode": null,
  Ambient: null
};
ReactCompilerGating = fn(558);
obj.Ambient_Lightmode = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let posy;
  if (dataBinding != null) {
    posy = dataBinding.posy;
  }
  let posy1;
  if (onDataBindingChange != null) {
    posy1 = onDataBindingChange.posy;
  }
  const numberBinding = BaseRive.useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
  let posx;
  if (dataBinding != null) {
    posx = dataBinding.posx;
  }
  let posx1;
  if (onDataBindingChange != null) {
    posx1 = onDataBindingChange.posx;
  }
  const numberBinding1 = BaseRive.useNumberBinding("posx", instance, posx, posx1, playIfNeeded);
  const tmpResult = BaseRive;
  let buttonColor;
  if (dataBinding != null) {
    buttonColor = dataBinding.buttonColor;
  }
  let buttonColor1;
  if (onDataBindingChange != null) {
    buttonColor1 = onDataBindingChange.buttonColor;
  }
  const colorBinding = BaseRive.useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
  const tmpResult4 = BaseRive;
  let cornerRadius;
  if (dataBinding != null) {
    cornerRadius = dataBinding.cornerRadius;
  }
  let cornerRadius1;
  if (onDataBindingChange != null) {
    cornerRadius1 = onDataBindingChange.cornerRadius;
  }
  const numberBinding2 = BaseRive.useNumberBinding("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
  const tmpResult5 = BaseRive;
  let pressed;
  if (dataBinding != null) {
    pressed = dataBinding.pressed;
  }
  let pressed1;
  if (onDataBindingChange != null) {
    pressed1 = onDataBindingChange.pressed;
  }
  const booleanBinding = BaseRive.useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
  return null;
}) : ((arg0) => {
  ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let posy;
  if (dataBinding != null) {
    posy = dataBinding.posy;
  }
  let posy1;
  if (onDataBindingChange != null) {
    posy1 = onDataBindingChange.posy;
  }
  const numberBinding = BaseRive.useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
  let posx;
  if (dataBinding != null) {
    posx = dataBinding.posx;
  }
  let posx1;
  if (onDataBindingChange != null) {
    posx1 = onDataBindingChange.posx;
  }
  const numberBinding1 = BaseRive.useNumberBinding("posx", instance, posx, posx1, playIfNeeded);
  const tmpResult = BaseRive;
  let buttonColor;
  if (dataBinding != null) {
    buttonColor = dataBinding.buttonColor;
  }
  let buttonColor1;
  if (onDataBindingChange != null) {
    buttonColor1 = onDataBindingChange.buttonColor;
  }
  const colorBinding = BaseRive.useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
  const tmpResult4 = BaseRive;
  let cornerRadius;
  if (dataBinding != null) {
    cornerRadius = dataBinding.cornerRadius;
  }
  let cornerRadius1;
  if (onDataBindingChange != null) {
    cornerRadius1 = onDataBindingChange.cornerRadius;
  }
  const numberBinding2 = BaseRive.useNumberBinding("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
  const tmpResult5 = BaseRive;
  let pressed;
  if (dataBinding != null) {
    pressed = dataBinding.pressed;
  }
  let pressed1;
  if (onDataBindingChange != null) {
    pressed1 = onDataBindingChange.pressed;
  }
  const booleanBinding = BaseRive.useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj["Mobile Expressive Button Dark Mode"] = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let posy;
  if (dataBinding != null) {
    posy = dataBinding.posy;
  }
  let posy1;
  if (onDataBindingChange != null) {
    posy1 = onDataBindingChange.posy;
  }
  const numberBinding = BaseRive.useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
  let posx;
  if (dataBinding != null) {
    posx = dataBinding.posx;
  }
  let posx1;
  if (onDataBindingChange != null) {
    posx1 = onDataBindingChange.posx;
  }
  const numberBinding1 = BaseRive.useNumberBinding("posx", instance, posx, posx1, playIfNeeded);
  const tmpResult = BaseRive;
  let buttonColor;
  if (dataBinding != null) {
    buttonColor = dataBinding.buttonColor;
  }
  let buttonColor1;
  if (onDataBindingChange != null) {
    buttonColor1 = onDataBindingChange.buttonColor;
  }
  const colorBinding = BaseRive.useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
  const tmpResult4 = BaseRive;
  let cornerRadius;
  if (dataBinding != null) {
    cornerRadius = dataBinding.cornerRadius;
  }
  let cornerRadius1;
  if (onDataBindingChange != null) {
    cornerRadius1 = onDataBindingChange.cornerRadius;
  }
  const numberBinding2 = BaseRive.useNumberBinding("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
  const tmpResult5 = BaseRive;
  let pressed;
  if (dataBinding != null) {
    pressed = dataBinding.pressed;
  }
  let pressed1;
  if (onDataBindingChange != null) {
    pressed1 = onDataBindingChange.pressed;
  }
  const booleanBinding = BaseRive.useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
  return null;
}) : ((arg0) => {
  ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let posy;
  if (dataBinding != null) {
    posy = dataBinding.posy;
  }
  let posy1;
  if (onDataBindingChange != null) {
    posy1 = onDataBindingChange.posy;
  }
  const numberBinding = BaseRive.useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
  let posx;
  if (dataBinding != null) {
    posx = dataBinding.posx;
  }
  let posx1;
  if (onDataBindingChange != null) {
    posx1 = onDataBindingChange.posx;
  }
  const numberBinding1 = BaseRive.useNumberBinding("posx", instance, posx, posx1, playIfNeeded);
  const tmpResult = BaseRive;
  let buttonColor;
  if (dataBinding != null) {
    buttonColor = dataBinding.buttonColor;
  }
  let buttonColor1;
  if (onDataBindingChange != null) {
    buttonColor1 = onDataBindingChange.buttonColor;
  }
  const colorBinding = BaseRive.useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
  const tmpResult4 = BaseRive;
  let cornerRadius;
  if (dataBinding != null) {
    cornerRadius = dataBinding.cornerRadius;
  }
  let cornerRadius1;
  if (onDataBindingChange != null) {
    cornerRadius1 = onDataBindingChange.cornerRadius;
  }
  const numberBinding2 = BaseRive.useNumberBinding("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
  const tmpResult5 = BaseRive;
  let pressed;
  if (dataBinding != null) {
    pressed = dataBinding.pressed;
  }
  let pressed1;
  if (onDataBindingChange != null) {
    pressed1 = onDataBindingChange.pressed;
  }
  const booleanBinding = BaseRive.useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
obj.Ambient = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let posy;
  if (dataBinding != null) {
    posy = dataBinding.posy;
  }
  let posy1;
  if (onDataBindingChange != null) {
    posy1 = onDataBindingChange.posy;
  }
  const numberBinding = BaseRive.useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
  let posx;
  if (dataBinding != null) {
    posx = dataBinding.posx;
  }
  let posx1;
  if (onDataBindingChange != null) {
    posx1 = onDataBindingChange.posx;
  }
  const numberBinding1 = BaseRive.useNumberBinding("posx", instance, posx, posx1, playIfNeeded);
  const tmpResult = BaseRive;
  let buttonColor;
  if (dataBinding != null) {
    buttonColor = dataBinding.buttonColor;
  }
  let buttonColor1;
  if (onDataBindingChange != null) {
    buttonColor1 = onDataBindingChange.buttonColor;
  }
  const colorBinding = BaseRive.useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
  const tmpResult4 = BaseRive;
  let cornerRadius;
  if (dataBinding != null) {
    cornerRadius = dataBinding.cornerRadius;
  }
  let cornerRadius1;
  if (onDataBindingChange != null) {
    cornerRadius1 = onDataBindingChange.cornerRadius;
  }
  const numberBinding2 = BaseRive.useNumberBinding("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
  const tmpResult5 = BaseRive;
  let pressed;
  if (dataBinding != null) {
    pressed = dataBinding.pressed;
  }
  let pressed1;
  if (onDataBindingChange != null) {
    pressed1 = onDataBindingChange.pressed;
  }
  const booleanBinding = BaseRive.useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
  return null;
}) : ((arg0) => {
  ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
  let posy;
  if (dataBinding != null) {
    posy = dataBinding.posy;
  }
  let posy1;
  if (onDataBindingChange != null) {
    posy1 = onDataBindingChange.posy;
  }
  const numberBinding = BaseRive.useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
  let posx;
  if (dataBinding != null) {
    posx = dataBinding.posx;
  }
  let posx1;
  if (onDataBindingChange != null) {
    posx1 = onDataBindingChange.posx;
  }
  const numberBinding1 = BaseRive.useNumberBinding("posx", instance, posx, posx1, playIfNeeded);
  const tmpResult = BaseRive;
  let buttonColor;
  if (dataBinding != null) {
    buttonColor = dataBinding.buttonColor;
  }
  let buttonColor1;
  if (onDataBindingChange != null) {
    buttonColor1 = onDataBindingChange.buttonColor;
  }
  const colorBinding = BaseRive.useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
  const tmpResult4 = BaseRive;
  let cornerRadius;
  if (dataBinding != null) {
    cornerRadius = dataBinding.cornerRadius;
  }
  let cornerRadius1;
  if (onDataBindingChange != null) {
    cornerRadius1 = onDataBindingChange.cornerRadius;
  }
  const numberBinding2 = BaseRive.useNumberBinding("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
  const tmpResult5 = BaseRive;
  let pressed;
  if (dataBinding != null) {
    pressed = dataBinding.pressed;
  }
  let pressed1;
  if (onDataBindingChange != null) {
    pressed1 = onDataBindingChange.pressed;
  }
  const booleanBinding = BaseRive.useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
  return null;
});
ReactCompilerGating = fn(558);
let closure_11 = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const cResult = require("c").c(18);
  if (cResult[0] !== arg0) {
    ({ fallback, artboard, stateMachine, defaultViewModelInstance, dataBinding, onDataBindingChange } = arg0);
    const tmp12 = _objectWithoutProperties(arg0, closure_3);
    _require = dataBinding;
    importDefault = onDataBindingChange;
    cResult[0] = arg0;
    class E {
      constructor(arg0) {
        tmp = closure_10[closure_2];
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
    cResult[2] = onDataBindingChange;
    cResult[3] = tmp12;
    cResult[4] = stateMachine;
    cResult[5] = artboard;
    cResult[6] = defaultViewModelInstance;
    let tmp9 = defaultViewModelInstance;
    let tmp8 = artboard;
    let tmp7 = stateMachine;
    let tmp6 = tmp12;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
  }
  str = "Mobile Expressive Button Lightmode";
  if (undefined !== tmp8) {
    str = tmp8;
  }
  let str2 = "Instance";
  if (undefined !== tmp9) {
    str2 = tmp9;
  }
  if (cResult[7] === str) {
    if (cResult[8] === dataBinding) {
      if (cResult[9] === onDataBindingChange) {
        let tmp13 = cResult[10];
      }
      if (cResult[11] === str) {
        if (cResult[12] === str2) {
          if (cResult[13] === ref) {
            if (cResult[14] === tmp13) {
              if (cResult[15] === tmp6) {
                if (cResult[16] === tmp7) {
                  let tmp15 = cResult[17];
                }
                return tmp15;
              }
            }
          }
        }
      }
      const obj2 = { ref, src: require("module_4683"), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: null, stateMachine: null, renderDataBinding: null };
      class E {
        constructor(arg0) {
          tmp = closure_10[closure_2];
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
      obj2.stateMachine = tmp7;
      obj2.renderDataBinding = tmp13;
      let merged = Object.assign(tmp6);
      const tmp23 = jsx(tmp(tmp2[4]).BaseRive, { ref, src: require("module_4683"), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: null, stateMachine: null, renderDataBinding: null });
      cResult[11] = str;
      cResult[12] = str2;
      cResult[13] = ref;
      cResult[14] = tmp13;
      cResult[15] = tmp6;
      cResult[16] = tmp7;
      cResult[17] = tmp23;
      tmp15 = tmp23;
    }
  }
  class E {
    constructor(arg0) {
      tmp = closure_10[closure_2];
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
  cResult[7] = str;
  cResult[8] = dataBinding;
  cResult[9] = onDataBindingChange;
  cResult[10] = E;
  tmp13 = E;
  obj = require("c");
  tmp = _require;
}) : ((defaultViewModelInstance, ref) => {
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Mobile Expressive Button Lightmode";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Instance";
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  dataBinding = defaultViewModelInstance.dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const callback = noop.useCallback((arg0) => {
    let tmp2 = null;
    if (null != obj[str]) {
      obj = {};
      const merged = Object.assign(arg0);
      obj.dataBinding = dataBinding;
      obj.onDataBindingChange = onDataBindingChange;
      tmp2 = <tmp />;
    }
    return tmp2;
  }, items);
  const tmp = _objectWithoutProperties(defaultViewModelInstance, closure_4);
  let merged = Object.assign(tmp);
  return jsx(str(onDataBindingChange[4]).BaseRive, { ref, src: dataBinding(onDataBindingChange[6]), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback });
}));
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/ExpressiveButtonRive.tsx");

export const ExpressiveButtonRive = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((fallback, ref) => {
  const cResult = c.c(6);
  if (cResult[0] === fallback) {
    if (cResult[1] === ref) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === fallback.fallback) {
      if (cResult[4] === tmp4) {
        let tmp7 = cResult[5];
      }
      return tmp7;
    }
    const obj2 = { fallback: fallback.fallback, children: tmp4 };
    const tmp9 = jsx(RiveErrorBoundary.RiveErrorBoundary, { fallback: fallback.fallback, children: tmp4 });
    cResult[3] = fallback.fallback;
    cResult[4] = tmp4;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const merged = Object.assign(fallback);
  const tmp6 = <closure_11 ref={ref} />;
  cResult[0] = fallback;
  cResult[1] = ref;
  cResult[2] = tmp6;
  tmp4 = tmp6;
  const obj3 = { ref };
}) : ((fallback, ref) => {
  obj = { fallback: fallback.fallback, children: null };
  const merged = Object.assign(fallback);
  obj.children = <closure_11 ref={ref} />;
  return jsx(RiveErrorBoundary.RiveErrorBoundary, { fallback: fallback.fallback, children: null });
}));