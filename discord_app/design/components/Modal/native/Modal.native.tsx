// === Module 10989: Modal ===

// Module 10989 (Modal)
import c from "c" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import NavigatorConstants from "NavigatorConstants" /* 6075 */;
import Navigator from "Navigator" /* 6503 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  const sum = NavigatorConstants.NAV_BAR_HEIGHT + useSafeAreaInsetsDefault().top;
  if (cResult[0] !== sum) {
    const obj2 = { height: sum };
    cResult[0] = sum;
    cResult[1] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === arg0) {
    if (cResult[3] === tmp6) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const obj3 = {};
  const merged = Object.assign(arg0);
  obj3.headerStyle = tmp6;
  const tmp9 = jsx(Navigator.Navigator, {});
  cResult[2] = arg0;
  cResult[3] = tmp6;
  cResult[4] = tmp9;
  tmp7 = tmp9;
  const tmp4 = useSafeAreaInsetsDefault();
}) : ((arg0) => {
  const obj = {};
  const merged = Object.assign(arg0);
  const tmp = useSafeAreaInsetsDefault();
  obj.headerStyle = { height: NavigatorConstants.NAV_BAR_HEIGHT + useSafeAreaInsetsDefault().top };
  return jsx(Navigator.Navigator, {});
});