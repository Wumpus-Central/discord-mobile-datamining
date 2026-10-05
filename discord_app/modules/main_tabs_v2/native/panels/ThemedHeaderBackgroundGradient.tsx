// === Module 16472: ThemedHeaderBackgroundGradient ===

// Module 16472 (ThemedHeaderBackgroundGradient)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import useToken from "useToken" /* 4580 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ StyleSheet: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { position: "absolute", left: 0, right: 0, top: 0 } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let baseColor;
  let minHeight;
  let tmp12;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(17);
  ({ baseColor, minHeight } = arg0);
  if (undefined === baseColor) {
    baseColor = nativeDefault.colors.BACKGROUND_BASE_LOWEST;
  }
  let num = 16;
  if (undefined !== minHeight) {
    num = minHeight;
  }
  const tmp5 = closure_6();
  const tmp7 = useSafeAreaInsetsDefault();
  const tmpResult = useToken;
  const token = tmpResult.useToken(baseColor);
  if (cResult[0] !== token) {
    const tmpResult2 = utils_ColorUtils;
    let str = tmpResult2.hex2rgb(token, 0);
    if (str == null) {
      str = "transparent";
    }
    cResult[0] = token;
    cResult[1] = str;
    tmp9 = str;
  } else {
    tmp9 = cResult[1];
  }
  const bound = Math.max(tmp7.top, num);
  if (cResult[2] !== bound) {
    const obj2 = { height: bound };
    cResult[2] = bound;
    cResult[3] = obj2;
    tmp12 = obj2;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === tmp5.container) {
    let tmp13;
    if (cResult[5] === tmp12) {
      tmp13 = cResult[6];
    }
    if (cResult[7] === token) {
      let tmp14;
      let tmp16;
      let tmp15;
      let tmp17;
      if (cResult[8] === tmp9) {
        tmp14 = cResult[9];
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const point = { x: 0, y: 0 };
        const point1 = { x: 0, y: 1 };
        cResult[10] = point;
        cResult[11] = point1;
        tmp16 = point1;
        tmp15 = point;
      } else {
        tmp15 = cResult[10];
        tmp16 = cResult[11];
      }
      if (cResult[12] !== tmp14) {
        const tmp20 = jsx(LinearGradientDefault, { style: _false.absoluteFill, colors: tmp14, start: tmp15, end: tmp16 });
        cResult[12] = tmp14;
        cResult[13] = tmp20;
        tmp17 = tmp20;
      } else {
        tmp17 = cResult[13];
      }
      if (cResult[14] === tmp13) {
        let tmp21;
        if (cResult[15] === tmp17) {
          tmp21 = cResult[16];
        }
        return tmp21;
      }
      const tmp24 = <React3 style={tmp13} pointerEvents="none">{tmp17}</React3>;
      cResult[14] = tmp13;
      cResult[15] = tmp17;
      cResult[16] = tmp24;
      tmp21 = tmp24;
    }
    const items = [token, tmp9];
    cResult[7] = token;
    cResult[8] = tmp9;
    cResult[9] = items;
    tmp14 = items;
  }
  const items1 = [tmp5.container, tmp12];
  cResult[4] = tmp5.container;
  cResult[5] = tmp12;
  cResult[6] = items1;
  tmp13 = items1;
}) : ((baseColor) => {
  let BACKGROUND_BASE_LOWEST = baseColor.baseColor;
  if (BACKGROUND_BASE_LOWEST === undefined) {
    BACKGROUND_BASE_LOWEST = nativeDefault.colors.BACKGROUND_BASE_LOWEST;
  }
  let num = baseColor.minHeight;
  if (num === undefined) {
    num = 16;
  }
  const tmp3 = closure_6();
  const tmp6 = useSafeAreaInsetsDefault();
  const obj = useToken;
  const token = obj.useToken(BACKGROUND_BASE_LOWEST);
  const obj2 = utils_ColorUtils;
  let str = obj2.hex2rgb(token, 0);
  if (str == null) {
    str = "transparent";
  }
  const items = [tmp3.container, { height: Math.max(tmp6.top, num) }];
  const items1 = [token, str];
  ({ height: Math.max(tmp6.top, num) });
  return <React3 style={items} pointerEvents="none">{null}</React3>;
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/ThemedHeaderBackgroundGradient.tsx");

export default memoResult;