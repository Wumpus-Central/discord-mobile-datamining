// discord_app/modules/zoom_layout/ZoomLayout.android.tsx
import importAllResult from "noop";
import { PixelRatio } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { __INTERNAL_VIEW_CONFIG } from "../../../discord_common/js/packages/rtn-codegen/js/ZoomLayoutNativeComponent.tsx";

const require = arg1;
let c3 = importAllResult;
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  ref = importAllResult.useRef(null);
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ({
    zoomTo(scale) {
      let x;
      let y;
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
        const value = outer1_4.get();
        const result = x * value;
        const result1 = y * value;
        const Commands = outer1_0(outer1_2[3]).Commands;
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
        const Commands = outer1_0(outer1_2[3]).Commands;
        Commands.unzoom(tmp.current, flag);
      }
    }
  }));
  let obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  return jsx(__INTERNAL_VIEW_CONFIG, {});
});
let result = require("jsxProd").fileFinishedImporting("modules/zoom_layout/ZoomLayout.android.tsx");

export default forwardRefResult;