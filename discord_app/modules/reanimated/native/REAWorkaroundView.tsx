// === Module 5096: REAWorkaroundView ===

// Module 5096 (REAWorkaroundView)
import jsxProd from "jsxProd" /* 21 */;
import ReanimatedViewNativeComponentDefault from "ReanimatedViewNativeComponent" /* 5097 */;
import cancelAnimation from "cancelAnimation" /* 1650 */;
import size from "module_2" /* 2 */;

class ComponentWrapper {
  constructor(arg0) {
    merged = Object.assign(global, Object.assign({ ref: 0 }));
    obj = {};
    tmp2 = null != merged.entering;
    merged1 = Object.assign(merged);
    obj.hasEnteringAnimation = tmp2;
    obj.ref = global.ref;
    return jsx(closure_1, obj);
  }
}
const jsx = jsxProd.jsx;
const ReanimatedViewNativeComponent = cancelAnimation.createAnimatedComponent(ReanimatedViewNativeComponentDefault);
ComponentWrapper.displayName = "REAWorkaroundView";
const result = size.fileFinishedImporting("modules/reanimated/native/REAWorkaroundView.tsx");

export default ComponentWrapper;