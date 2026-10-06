// === Module 4682: ExpressiveButtonRive ===

// Module 4682 (ExpressiveButtonRive)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import BaseRive2 from "BaseRive" /* 4612 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 4665 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import "ReactCompilerGating";
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dataBinding, importDefault, tmp3, tmp5;

let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let closure_4 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = Fragment.jsx;
const artboardProperties = { "Mobile Expressive Button Lightmode": { posy: "number", posx: "number", buttonColor: "color", cornerRadius: "number", pressed: "boolean" }, Ambient_Lightmode: { posy: "number", posx: "number", buttonColor: "color", cornerRadius: "number", pressed: "boolean" }, "Mobile Expressive Button Dark Mode": { posy: "number", posx: "number", buttonColor: "color", cornerRadius: "number", pressed: "boolean" }, Ambient: { posy: "number", posx: "number", buttonColor: "color", cornerRadius: "number", pressed: "boolean" } };
const artboardViewModelInstances = { "Mobile Expressive Button Lightmode": ["Instance"], Ambient_Lightmode: ["Instance"], "Mobile Expressive Button Dark Mode": ["Instance"], Ambient: ["Instance"] };
let ReactCompilerGating = ReactCompilerGating_mod;
let obj = {
  "Mobile Expressive Button Lightmode": ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let posy;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posy = dataBinding.posy;
    }
    let posy1;
    if (onDataBindingChange != null) {
      posy1 = onDataBindingChange.posy;
    }
    const numberBinding = useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
    let posx;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (onDataBindingChange != null) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding2 = useNumberBinding2("posx", instance, posx, posx1, playIfNeeded);
    let buttonColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (onDataBindingChange != null) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    let cornerRadius;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (onDataBindingChange != null) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding3 = useNumberBinding3("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
    let pressed;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      pressed = dataBinding.pressed;
    }
    let pressed1;
    if (onDataBindingChange != null) {
      pressed1 = onDataBindingChange.pressed;
    }
    const booleanBinding = useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
    return null;
  }) : ((arg0) => {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let posy;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posy = dataBinding.posy;
    }
    let posy1;
    if (onDataBindingChange != null) {
      posy1 = onDataBindingChange.posy;
    }
    const numberBinding = useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
    let posx;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (onDataBindingChange != null) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding2 = useNumberBinding2("posx", instance, posx, posx1, playIfNeeded);
    let buttonColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (onDataBindingChange != null) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    let cornerRadius;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (onDataBindingChange != null) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding3 = useNumberBinding3("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
    let pressed;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      pressed = dataBinding.pressed;
    }
    let pressed1;
    if (onDataBindingChange != null) {
      pressed1 = onDataBindingChange.pressed;
    }
    const booleanBinding = useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
    return null;
  }),
  Ambient_Lightmode: ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let posy;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posy = dataBinding.posy;
    }
    let posy1;
    if (onDataBindingChange != null) {
      posy1 = onDataBindingChange.posy;
    }
    const numberBinding = useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
    let posx;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (onDataBindingChange != null) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding2 = useNumberBinding2("posx", instance, posx, posx1, playIfNeeded);
    let buttonColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (onDataBindingChange != null) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    let cornerRadius;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (onDataBindingChange != null) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding3 = useNumberBinding3("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
    let pressed;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      pressed = dataBinding.pressed;
    }
    let pressed1;
    if (onDataBindingChange != null) {
      pressed1 = onDataBindingChange.pressed;
    }
    const booleanBinding = useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
    return null;
  }) : ((arg0) => {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let posy;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posy = dataBinding.posy;
    }
    let posy1;
    if (onDataBindingChange != null) {
      posy1 = onDataBindingChange.posy;
    }
    const numberBinding = useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
    let posx;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (onDataBindingChange != null) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding2 = useNumberBinding2("posx", instance, posx, posx1, playIfNeeded);
    let buttonColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (onDataBindingChange != null) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    let cornerRadius;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (onDataBindingChange != null) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding3 = useNumberBinding3("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
    let pressed;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      pressed = dataBinding.pressed;
    }
    let pressed1;
    if (onDataBindingChange != null) {
      pressed1 = onDataBindingChange.pressed;
    }
    const booleanBinding = useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
    return null;
  }),
  "Mobile Expressive Button Dark Mode": ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let posy;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posy = dataBinding.posy;
    }
    let posy1;
    if (onDataBindingChange != null) {
      posy1 = onDataBindingChange.posy;
    }
    const numberBinding = useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
    let posx;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (onDataBindingChange != null) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding2 = useNumberBinding2("posx", instance, posx, posx1, playIfNeeded);
    let buttonColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (onDataBindingChange != null) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    let cornerRadius;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (onDataBindingChange != null) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding3 = useNumberBinding3("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
    let pressed;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      pressed = dataBinding.pressed;
    }
    let pressed1;
    if (onDataBindingChange != null) {
      pressed1 = onDataBindingChange.pressed;
    }
    const booleanBinding = useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
    return null;
  }) : ((arg0) => {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let posy;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posy = dataBinding.posy;
    }
    let posy1;
    if (onDataBindingChange != null) {
      posy1 = onDataBindingChange.posy;
    }
    const numberBinding = useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
    let posx;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (onDataBindingChange != null) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding2 = useNumberBinding2("posx", instance, posx, posx1, playIfNeeded);
    let buttonColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (onDataBindingChange != null) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    let cornerRadius;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (onDataBindingChange != null) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding3 = useNumberBinding3("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
    let pressed;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      pressed = dataBinding.pressed;
    }
    let pressed1;
    if (onDataBindingChange != null) {
      pressed1 = onDataBindingChange.pressed;
    }
    const booleanBinding = useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
    return null;
  }),
  Ambient: ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let posy;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posy = dataBinding.posy;
    }
    let posy1;
    if (onDataBindingChange != null) {
      posy1 = onDataBindingChange.posy;
    }
    const numberBinding = useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
    let posx;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (onDataBindingChange != null) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding2 = useNumberBinding2("posx", instance, posx, posx1, playIfNeeded);
    let buttonColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (onDataBindingChange != null) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    let cornerRadius;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (onDataBindingChange != null) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding3 = useNumberBinding3("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
    let pressed;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      pressed = dataBinding.pressed;
    }
    let pressed1;
    if (onDataBindingChange != null) {
      pressed1 = onDataBindingChange.pressed;
    }
    const booleanBinding = useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
    return null;
  }) : ((arg0) => {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let posy;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posy = dataBinding.posy;
    }
    let posy1;
    if (onDataBindingChange != null) {
      posy1 = onDataBindingChange.posy;
    }
    const numberBinding = useNumberBinding("posy", instance, posy, posy1, playIfNeeded);
    let posx;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (onDataBindingChange != null) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding2 = useNumberBinding2("posx", instance, posx, posx1, playIfNeeded);
    let buttonColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (onDataBindingChange != null) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    let cornerRadius;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (onDataBindingChange != null) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding3 = useNumberBinding3("cornerRadius", instance, cornerRadius, cornerRadius1, playIfNeeded);
    let pressed;
    const useBooleanBinding = BaseRive2.useBooleanBinding;
    BaseRive2;
    if (dataBinding != null) {
      pressed = dataBinding.pressed;
    }
    let pressed1;
    if (onDataBindingChange != null) {
      pressed1 = onDataBindingChange.pressed;
    }
    const booleanBinding = useBooleanBinding("pressed", instance, pressed, pressed1, playIfNeeded);
    return null;
  })
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = react.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  let _require;
  let artboard;
  let defaultViewModelInstance;
  let fallback;
  let onDataBindingChange;
  let stateMachine;
  let str;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let tmp2 = str;
  obj = require("react");
  const cResult = obj.c(18);
  const tmp = _require;
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
    tmp9 = defaultViewModelInstance;
    tmp8 = artboard;
    tmp7 = stateMachine;
    tmp6 = tmp12;
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
      let tmp13;
      if (cResult[9] === onDataBindingChange) {
        tmp13 = cResult[10];
      }
      if (cResult[11] === str) {
        if (cResult[12] === str2) {
          if (cResult[13] === ref) {
            if (cResult[14] === tmp13) {
              if (cResult[15] === tmp6) {
                let tmp15;
                if (cResult[16] === tmp7) {
                  tmp15 = cResult[17];
                }
                return tmp15;
              }
            }
          }
        }
      }
      const BaseRive = tmp(tmp2[4]).BaseRive;
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
      let merged = Object.assign(tmp6);
      const tmp23 = <BaseRive ref={ref} src={require("module_4683")} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={null} stateMachine={tmp7} renderDataBinding={tmp13} />;
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
}) : ((defaultViewModelInstance, ref) => {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Mobile Expressive Button Lightmode";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Instance";
  const stateMachine = defaultViewModelInstance.stateMachine;
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  dataBinding = defaultViewModelInstance.dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const tmp = _objectWithoutProperties(defaultViewModelInstance, closure_4);
  const callback = react.useCallback((arg0) => {
    let tmp2 = null;
    if (null != obj[str]) {
      const merged = Object.assign(arg0);
      tmp2 = <tmp dataBinding={dataBinding} onDataBindingChange={onDataBindingChange} />;
    }
    return tmp2;
  }, items);
  const BaseRive = str(onDataBindingChange[4]).BaseRive;
  let merged = Object.assign(tmp);
  return <BaseRive ref={ref} src={dataBinding(onDataBindingChange[6])} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={str2} stateMachine={stateMachine} renderDataBinding={callback} />;
}));
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = react.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((fallback, ref) => {
  obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] === fallback) {
    let tmp4;
    if (cResult[1] === ref) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === fallback.fallback) {
      let tmp7;
      if (cResult[4] === tmp4) {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
    const tmp9 = jsx(RiveErrorBoundary2.RiveErrorBoundary, { fallback: fallback.fallback, children: tmp4 });
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
}) : ((fallback, ref) => {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={fallback.fallback}>{null}</RiveErrorBoundary>;
}));
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/ExpressiveButtonRive.tsx");

export const ExpressiveButtonRive = forwardRefResult;