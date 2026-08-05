// _runtime/00387_createAnimatedComponent.js
import _slicedToArray from "_slicedToArray";
import "noop";
import { useMemo } from "noop";
import { jsx } from "jsxProd";
import { addListenersToPropsValue } from "00388_addListenersToPropsValue.js";


export default function createAnimatedComponent(displayName) {
  const importDefault = displayName;
  const dependencyMap = addListenersToPropsValue(null);
  class AnimatedComponent {
    constructor(arg0) {
      style = undefined;
      style = undefined;
      tmp = outer1_2(style(Object.assign(displayName, Object.create(null))), 2);
      first = tmp[0];
      ({ passthroughAnimatedPropExplicitValues, style } = first);
      style = undefined;
      tmp3 = closure_0(outer1_1[4])(tmp[1], displayName.ref);
      if (passthroughAnimatedPropExplicitValues != null) {
        style = passthroughAnimatedPropExplicitValues.style;
      }
      items = [, ];
      items[0] = style;
      items[1] = style;
      obj = {};
      tmp5 = outer1_3(() => { ... }, items);
      merged = Object.assign(first);
      merged1 = Object.assign(passthroughAnimatedPropExplicitValues);
      obj.style = tmp5;
      obj.ref = tmp3;
      return outer1_4(style, obj);
    }
  }
  AnimatedComponent.displayName = "Animated(" + displayName.displayName || "Anonymous" + ")";
  return AnimatedComponent;
};
export const unstable_createAnimatedComponentWithAllowlist = function unstable_createAnimatedComponentWithAllowlist(displayName) {
  const importDefault = displayName;
  const dependencyMap = addListenersToPropsValue(arg1);
  class AnimatedComponent {
    constructor(arg0) {
      style = undefined;
      style = undefined;
      tmp = outer1_2(style(Object.assign(displayName, Object.create(null))), 2);
      first = tmp[0];
      ({ passthroughAnimatedPropExplicitValues, style } = first);
      style = undefined;
      tmp3 = closure_0(outer1_1[4])(tmp[1], displayName.ref);
      if (passthroughAnimatedPropExplicitValues != null) {
        style = passthroughAnimatedPropExplicitValues.style;
      }
      items = [, ];
      items[0] = style;
      items[1] = style;
      obj = {};
      tmp5 = outer1_3(() => { ... }, items);
      merged = Object.assign(first);
      merged1 = Object.assign(passthroughAnimatedPropExplicitValues);
      obj.style = tmp5;
      obj.ref = tmp3;
      return outer1_4(style, obj);
    }
  }
  AnimatedComponent.displayName = "Animated(" + displayName.displayName || "Anonymous" + ")";
  return AnimatedComponent;
};