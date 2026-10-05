// === Module 10976: Modal ===

// Module 10976 (Modal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import NavigatorConstants from "NavigatorConstants" /* 6068 */;
import Navigator2 from "Navigator" /* 6496 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp6;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp4 = useSafeAreaInsetsDefault();
  const sum = NavigatorConstants.NAV_BAR_HEIGHT + tmp4.top;
  if (cResult[0] !== sum) {
    const obj2 = { height: sum };
    cResult[0] = sum;
    cResult[1] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === arg0) {
    let tmp7;
    if (cResult[3] === tmp6) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  const Navigator = Navigator2.Navigator;
  const merged = Object.assign(arg0);
  const tmp9 = <Navigator headerStyle={tmp6} />;
  cResult[2] = arg0;
  cResult[3] = tmp6;
  cResult[4] = tmp9;
  tmp7 = tmp9;
}) : ((arg0) => {
  const tmp = useSafeAreaInsetsDefault();
  const Navigator = Navigator2.Navigator;
  const merged = Object.assign(arg0);
  ({ height: NavigatorConstants.NAV_BAR_HEIGHT + tmp.top });
  return <Navigator headerStyle={{ height: NavigatorConstants.NAV_BAR_HEIGHT + tmp.top }} />;
});
const result = size.fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = tmp3;