// === Module 10859: ? ===

// Module 10859
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 10860 */;
import importAllResult from "noop" /* 19 */;
import { PixelRatio } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

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
    }
  }));
  let obj = {};
  const merged = Object.assign(arg0);
  obj.ref = ref;
  return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
});
let result = require("set").fileFinishedImporting("modules/zoom_layout/ZoomLayout.android.tsx");

export default forwardRefResult;