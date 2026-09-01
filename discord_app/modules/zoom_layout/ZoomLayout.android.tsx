// discord_app/modules/zoom_layout/ZoomLayout.android.tsx
import __INTERNAL_VIEW_CONFIGDefault from "../../../discord_common/js/packages/rtn-codegen/js/ZoomLayoutNativeComponent.tsx";
import importAllResult from "../../../_runtime/00019_noop.js";
import { PixelRatio } from "../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let c3 = importAllResult;
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  ref = importAllResult.useRef(null);
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ({
    zoomTo(scale) {
      let num = scale.scale;
      ({ x, y } = scale);
      if (num === undefined) {
        num = 2;
      }
      let flag = scale.animated;
      if (flag === undefined) {
        flag = true;
      }
      if (null != ref.current) {
        const value = closure_1_4.get();
        const result = x * value;
        const result1 = y * value;
        const Commands = closure_1_0(closure_1_2[3]).Commands;
        Commands.zoomTo(tmp.current, result / num - result, result1 / num - result1, num, flag);
      }
    },
    unzoom() {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      let flag = obj.animated;
      if (flag === undefined) {
        flag = true;
      }
      if (null != ref.current) {
        const Commands = closure_1_0(closure_1_2[3]).Commands;
        Commands.unzoom(tmp.current, flag);
      }
    },
  }));
  let obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
});
let result = require("set").fileFinishedImporting("modules/zoom_layout/ZoomLayout.android.tsx");

export default forwardRefResult;
