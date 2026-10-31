// discord_app/modules/reanimated/native/REAWorkaroundView.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import ReanimatedViewNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/ReanimatedViewNativeComponent.tsx";
import cancelAnimation from "../../../../_runtime/01650_cancelAnimation.js";
import size from "../../../../_runtime/metro/00002__.js";

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
