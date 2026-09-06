// discord_common/js/packages/design/components/Rive/native/generated/ExpressiveButtonRive.tsx
import BaseRive from "../BaseRive.tsx";
import RiveErrorBoundary from "../RiveErrorBoundary.tsx";
import _objectWithoutProperties from "../../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = [
  "fallback",
  "artboard",
  "stateMachine",
  "defaultViewModelInstance",
  "dataBinding",
  "onDataBindingChange",
];
const jsx = fn(21).jsx;
const artboardProperties = {
  "Mobile Expressive Button Lightmode": {
    posy: "number",
    posx: "number",
    buttonColor: "color",
    cornerRadius: "number",
    pressed: "boolean",
  },
  Ambient_Lightmode: {
    posy: "number",
    posx: "number",
    buttonColor: "color",
    cornerRadius: "number",
    pressed: "boolean",
  },
  "Mobile Expressive Button Dark Mode": {
    posy: "number",
    posx: "number",
    buttonColor: "color",
    cornerRadius: "number",
    pressed: "boolean",
  },
  Ambient: { posy: "number", posx: "number", buttonColor: "color", cornerRadius: "number", pressed: "boolean" },
};
const artboardViewModelInstances = {
  "Mobile Expressive Button Lightmode": ["Instance"],
  Ambient_Lightmode: ["Instance"],
  "Mobile Expressive Button Dark Mode": ["Instance"],
  Ambient: ["Instance"],
};
let closure_9 = {
  "Mobile Expressive Button Lightmode": function MobileExpressiveButtonLightmodeBindings(arg0) {
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
    let tmpResult = tmp(4290);
    let posx;
    if (dataBinding != null) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (onDataBindingChange != null) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding1 = tmpResult.useNumberBinding("posx", instance, posx, posx1, playIfNeeded);
    tmpResult = tmp(4290);
    let buttonColor;
    if (dataBinding != null) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (onDataBindingChange != null) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = tmpResult.useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    let cornerRadius;
    if (dataBinding != null) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (onDataBindingChange != null) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding2 = BaseRive.useNumberBinding(
      "cornerRadius",
      instance,
      cornerRadius,
      cornerRadius1,
      playIfNeeded,
    );
    const tmpResult1 = BaseRive;
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
  },
  Ambient_Lightmode: function AmbientLightmodeBindings(arg0) {
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
    let tmpResult = tmp(4290);
    let posx;
    if (dataBinding != null) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (onDataBindingChange != null) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding1 = tmpResult.useNumberBinding("posx", instance, posx, posx1, playIfNeeded);
    tmpResult = tmp(4290);
    let buttonColor;
    if (dataBinding != null) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (onDataBindingChange != null) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = tmpResult.useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    let cornerRadius;
    if (dataBinding != null) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (onDataBindingChange != null) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding2 = BaseRive.useNumberBinding(
      "cornerRadius",
      instance,
      cornerRadius,
      cornerRadius1,
      playIfNeeded,
    );
    const tmpResult1 = BaseRive;
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
  },
  "Mobile Expressive Button Dark Mode": function MobileExpressiveButtonDarkModeBindings(arg0) {
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
    let tmpResult = tmp(4290);
    let posx;
    if (dataBinding != null) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (onDataBindingChange != null) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding1 = tmpResult.useNumberBinding("posx", instance, posx, posx1, playIfNeeded);
    tmpResult = tmp(4290);
    let buttonColor;
    if (dataBinding != null) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (onDataBindingChange != null) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = tmpResult.useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    let cornerRadius;
    if (dataBinding != null) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (onDataBindingChange != null) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding2 = BaseRive.useNumberBinding(
      "cornerRadius",
      instance,
      cornerRadius,
      cornerRadius1,
      playIfNeeded,
    );
    const tmpResult1 = BaseRive;
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
  },
  Ambient: function AmbientBindings(arg0) {
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
    let tmpResult = tmp(4290);
    let posx;
    if (dataBinding != null) {
      posx = dataBinding.posx;
    }
    let posx1;
    if (onDataBindingChange != null) {
      posx1 = onDataBindingChange.posx;
    }
    const numberBinding1 = tmpResult.useNumberBinding("posx", instance, posx, posx1, playIfNeeded);
    tmpResult = tmp(4290);
    let buttonColor;
    if (dataBinding != null) {
      buttonColor = dataBinding.buttonColor;
    }
    let buttonColor1;
    if (onDataBindingChange != null) {
      buttonColor1 = onDataBindingChange.buttonColor;
    }
    const colorBinding = tmpResult.useColorBinding("buttonColor", instance, buttonColor, buttonColor1, playIfNeeded);
    let cornerRadius;
    if (dataBinding != null) {
      cornerRadius = dataBinding.cornerRadius;
    }
    let cornerRadius1;
    if (onDataBindingChange != null) {
      cornerRadius1 = onDataBindingChange.cornerRadius;
    }
    const numberBinding2 = BaseRive.useNumberBinding(
      "cornerRadius",
      instance,
      cornerRadius,
      cornerRadius1,
      playIfNeeded,
    );
    const tmpResult1 = BaseRive;
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
  },
};
let closure_10 = noop.forwardRef(function ExpressiveButtonRiveInner(defaultViewModelInstance, ref) {
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
  const dataBinding = defaultViewModelInstance.dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const callback = noop.useCallback((arg0) => {
    let tmp2 = null;
    if (null != closure_9[str]) {
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
  return jsx(str(onDataBindingChange[3]).BaseRive, {
    ref,
    src: dataBinding(onDataBindingChange[4]),
    artboard: str,
    artboardProperties,
    artboardViewModelInstances,
    defaultViewModelInstance: str2,
    stateMachine: defaultViewModelInstance.stateMachine,
    renderDataBinding: callback,
  });
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/Rive/native/generated/ExpressiveButtonRive.tsx",
);

export const ExpressiveButtonRive = noop.forwardRef(function ExpressiveButtonRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback, children: null };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 ref={arg1} />;
  return jsx(RiveErrorBoundary.RiveErrorBoundary, { ref });
});
