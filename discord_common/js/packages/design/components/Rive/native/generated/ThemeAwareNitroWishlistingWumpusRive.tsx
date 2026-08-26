// === Module 4260: ThemeAwareNitroWishlistingWumpusRive ===

// Module 4260 (ThemeAwareNitroWishlistingWumpusRive)
import BaseRive from "BaseRive" /* 4178 */;
import getDerivedStateFromError from "getDerivedStateFromError" /* 4233 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let c5 = importAllResult;
let closure_7 = { "Nitro Wishlist": { reducedMotion: "boolean", logoColor: "color" } };
let closure_8 = { "Nitro Wishlist": ["Instance"] };
let closure_9 = {
  "Nitro Wishlist": function NitroWishlistBindings(reducedMotionEnabled) {
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive;
    let logoColor;
    if (dataBinding != null) {
      logoColor = dataBinding.logoColor;
    }
    let logoColor1;
    if (onDataBindingChange != null) {
      logoColor1 = onDataBindingChange.logoColor;
    }
    const colorBinding = BaseRive.useColorBinding("logoColor", instance, logoColor, logoColor1, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function ThemeAwareNitroWishlistingWumpusRiveInner(defaultViewModelInstance, ref) {
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Nitro Wishlist";
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
  const callback = importAllResult.useCallback((arg0) => {
    let tmp2 = null;
    if (null != closure_1_9[str]) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.dataBinding = dataBinding;
      obj.onDataBindingChange = onDataBindingChange;
      tmp2 = closure_1_6(tmp, obj);
    }
    return tmp2;
  }, items);
  const tmp = callback(defaultViewModelInstance, closure_3);
  let merged = Object.assign(tmp);
  return jsx(str(onDataBindingChange[3]).BaseRive, { ref, src: dataBinding(onDataBindingChange[4]), artboard: str, artboardProperties: closure_7, artboardViewModelInstances: closure_8, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback });
});
const forwardRefResult = importAllResult.forwardRef(function ThemeAwareNitroWishlistingWumpusRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback, children: null };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj[1] = <closure_10 ref={arg1} />;
  return jsx(getDerivedStateFromError.RiveErrorBoundary, { ref });
});
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/ThemeAwareNitroWishlistingWumpusRive.tsx");

export const ThemeAwareNitroWishlistingWumpusRive = forwardRefResult;