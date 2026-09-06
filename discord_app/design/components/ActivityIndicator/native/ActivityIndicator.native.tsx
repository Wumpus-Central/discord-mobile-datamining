// === Module 5577: ActivityIndicator/ActivityIndicator ===

// Module 5577 (ActivityIndicator/ActivityIndicator)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4262 */;
import size from "module_2" /* 2 */;

const ActivityIndicator = _mod17.ActivityIndicator;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/ActivityIndicator/native/ActivityIndicator.native.tsx");

export const ActivityIndicator = function ActivityIndicator(size) {
  let str = size.size;
  if (str === undefined) {
    str = "large";
  }
  let flag = size.animating;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(size, Object.assign({ size: 0, animating: 0 }));
  let obj = useToken;
  let color = merged.color;
  if (color == null) {
    color = obj.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj.size = str;
  obj.animating = flag;
  obj.color = color;
  return <ActivityIndicator />;
};