// === Module 5968: ActivityIndicator/ActivityIndicator ===

// Module 5968 (ActivityIndicator/ActivityIndicator)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken2 from "useToken" /* 4580 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = ["size", "animating"];
const ActivityIndicator = react_native.ActivityIndicator;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let animating;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react;
  const cResult = obj.c(9);
  if (cResult[0] !== arg0) {
    ({ size, animating } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp9;
    cResult[2] = size;
    cResult[3] = animating;
    tmp6 = animating;
    tmp5 = size;
    tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  let str = "large";
  if (undefined !== tmp5) {
    str = tmp5;
  }
  const useToken = useToken2.useToken;
  let color = tmp4.color;
  useToken2;
  if (color == null) {
    color = useToken(nativeDefault.colors.BACKGROUND_BRAND);
  }
  if (cResult[4] === (undefined === tmp6 || tmp6)) {
    if (cResult[5] === color) {
      if (cResult[6] === tmp4) {
        let tmp12;
        if (cResult[7] === str) {
          tmp12 = cResult[8];
        }
        return tmp12;
      }
    }
  }
  const merged = Object.assign(tmp4);
  const tmp14 = <ActivityIndicator size={str} animating={undefined === tmp6 || tmp6} color={color} />;
  cResult[4] = undefined === tmp6 || tmp6;
  cResult[5] = color;
  cResult[6] = tmp4;
  cResult[7] = str;
  cResult[8] = tmp14;
  tmp12 = tmp14;
}) : ((size) => {
  let str = size.size;
  if (str === undefined) {
    str = "large";
  }
  let flag = size.animating;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(size, Object.assign({ size: 0, animating: 0 }));
  const useToken = useToken2.useToken;
  let color = merged.color;
  useToken2;
  if (color == null) {
    color = useToken(nativeDefault.colors.BACKGROUND_BRAND);
  }
  const merged1 = Object.assign(merged);
  return <ActivityIndicator size={str} animating={flag} color={color} />;
});
const result = size.fileFinishedImporting("design/components/ActivityIndicator/native/ActivityIndicator.native.tsx");
const ActivityIndicator_export = tmp2;

export { ActivityIndicator_export as ActivityIndicator };