// === Module 387: createAnimatedComponent ===

// Module 387 (createAnimatedComponent)
import noopAll from "noop" /* 19 */;
import addListenersToPropsValueDefault from "addListenersToPropsValue" /* 388 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import { useMemo } from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

noopAll;

export default function createAnimatedComponent(displayName) {
  importDefault = displayName;
  dependencyMap = addListenersToPropsValueDefault(null);
  class AnimatedComponent {
    constructor(arg0) {
      style = undefined;
      style = undefined;
      tmp = closure_1_2(style(Object.assign(displayName, Object.create(null))), 2);
      first = tmp[0];
      ({ passthroughAnimatedPropExplicitValues, style } = first);
      style = undefined;
      tmp3 = closure_0(closure_1[4])(tmp[1], displayName.ref);
      if (passthroughAnimatedPropExplicitValues != null) {
        style = passthroughAnimatedPropExplicitValues.style;
      }
      items = [, ];
      items[0] = style;
      items[1] = style;
      obj = {};
      tmp5 = closure_1_3(() => { ... }, items);
      merged = Object.assign(first);
      merged1 = Object.assign(passthroughAnimatedPropExplicitValues);
      obj.style = tmp5;
      obj.ref = tmp3;
      return closure_1_4(style, obj);
    }
  }
  AnimatedComponent.displayName = "Animated(" + displayName.displayName || "Anonymous" + ")";
  return AnimatedComponent;
};
export const unstable_createAnimatedComponentWithAllowlist = function unstable_createAnimatedComponentWithAllowlist(displayName) {
  importDefault = displayName;
  dependencyMap = addListenersToPropsValueDefault(arg1);
  class AnimatedComponent {
    constructor(arg0) {
      style = undefined;
      style = undefined;
      tmp = closure_1_2(style(Object.assign(displayName, Object.create(null))), 2);
      first = tmp[0];
      ({ passthroughAnimatedPropExplicitValues, style } = first);
      style = undefined;
      tmp3 = closure_0(closure_1[4])(tmp[1], displayName.ref);
      if (passthroughAnimatedPropExplicitValues != null) {
        style = passthroughAnimatedPropExplicitValues.style;
      }
      items = [, ];
      items[0] = style;
      items[1] = style;
      obj = {};
      tmp5 = closure_1_3(() => { ... }, items);
      merged = Object.assign(first);
      merged1 = Object.assign(passthroughAnimatedPropExplicitValues);
      obj.style = tmp5;
      obj.ref = tmp3;
      return closure_1_4(style, obj);
    }
  }
  AnimatedComponent.displayName = "Animated(" + displayName.displayName || "Anonymous" + ")";
  return AnimatedComponent;
};