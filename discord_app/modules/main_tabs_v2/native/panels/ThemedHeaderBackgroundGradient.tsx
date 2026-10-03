// === Module 16468: ThemedHeaderBackgroundGradient ===

// Module 16468 (ThemedHeaderBackgroundGradient)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import useToken from "useToken" /* 4580 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_6 = createStyles.createStyles({ container: { position: "absolute", left: 0, right: 0, top: 0 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/ThemedHeaderBackgroundGradient.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(17);
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
  const token = useToken.useToken(baseColor);
  if (cResult[0] !== token) {
    let str = utils_ColorUtils.hex2rgb(token, 0);
    if (str == null) {
      str = "transparent";
    }
    cResult[0] = token;
    cResult[1] = str;
    let tmp9 = str;
    const tmpResult2 = utils_ColorUtils;
  } else {
    tmp9 = cResult[1];
  }
  const bound = Math.max(tmp7.top, num);
  if (cResult[2] !== bound) {
    const obj2 = { height: bound };
    cResult[2] = bound;
    cResult[3] = obj2;
    let tmp12 = obj2;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === tmp5.container) {
    if (cResult[5] === tmp12) {
      let tmp13 = cResult[6];
    }
    if (cResult[7] === token) {
      if (cResult[8] === tmp9) {
        let tmp14 = cResult[9];
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const point = { x: 0, y: 0 };
        const point1 = { x: 0, y: 1 };
        cResult[10] = point;
        cResult[11] = point1;
        let tmp16 = point1;
        let tmp15 = point;
      } else {
        tmp15 = cResult[10];
        tmp16 = cResult[11];
      }
      if (cResult[12] !== tmp14) {
        const obj3 = { style: React3.absoluteFill, colors: tmp14, start: tmp15, end: tmp16 };
        const tmp20 = jsx(LinearGradientDefault, { style: React3.absoluteFill, colors: tmp14, start: tmp15, end: tmp16 });
        cResult[12] = tmp14;
        cResult[13] = tmp20;
        let tmp17 = tmp20;
      } else {
        tmp17 = cResult[13];
      }
      if (cResult[14] === tmp13) {
        if (cResult[15] === tmp17) {
          let tmp21 = cResult[16];
        }
        return tmp21;
      }
      const obj4 = { style: tmp13, pointerEvents: "none", children: tmp17 };
      const tmp24 = <React4 style={tmp13} pointerEvents="none">{tmp17}</React4>;
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
  const tmpResult = useToken;
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
  const token = useToken.useToken(BACKGROUND_BASE_LOWEST);
  let str = utils_ColorUtils.hex2rgb(token, 0);
  if (str == null) {
    str = "transparent";
  }
  const obj3 = { style: null, pointerEvents: "none", children: null };
  const items = [tmp3.container, ];
  items[1] = { height: Math.max(tmp6.top, num) };
  obj3.style = items;
  const obj5 = { style: React3.absoluteFill, colors: null, start: { x: 0, y: 0 }, end: { x: 0, y: 1 } };
  const items1 = [token, str];
  obj5.colors = items1;
  obj3.children = jsx(LinearGradientDefault, { style: React3.absoluteFill, colors: null, start: { x: 0, y: 0 }, end: { x: 0, y: 1 } });
  return <React4 style={null} pointerEvents="none">{null}</React4>;
}));