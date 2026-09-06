// === Module 4374: ThemeAwareNitroWishlistingWumpusRive ===

// Module 4374 (ThemeAwareNitroWishlistingWumpusRive)
import BaseRive from "BaseRive" /* 4290 */;
import RiveErrorBoundary from "RiveErrorBoundary" /* 4345 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = fn(21).jsx;
const artboardProperties = { "Nitro Wishlist": { reducedMotion: "boolean", logoColor: "color" } };
const artboardViewModelInstances = { "Nitro Wishlist": ["Instance"] };
let closure_9 = {
  "Nitro Wishlist": function NitroWishlistBindings(reducedMotionEnabled) {
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
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
let closure_10 = noop.forwardRef(function ThemeAwareNitroWishlistingWumpusRiveInner(defaultViewModelInstance, ref) {
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
  return jsx(str(onDataBindingChange[3]).BaseRive, { ref, src: dataBinding(onDataBindingChange[4]), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback });
});
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/ThemeAwareNitroWishlistingWumpusRive.tsx");

export const ThemeAwareNitroWishlistingWumpusRive = noop.forwardRef(function ThemeAwareNitroWishlistingWumpusRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback, children: null };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 ref={arg1} />;
  return jsx(RiveErrorBoundary.RiveErrorBoundary, { ref });
});