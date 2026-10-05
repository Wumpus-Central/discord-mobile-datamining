// === Module 4579: BaseIconImage ===

// Module 4579 (BaseIconImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useToken from "useToken" /* 4580 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const jsx = Fragment.jsx;
let closure_4 = { xxs: { width: 12, height: 12 }, xs: { width: 16, height: 16 }, sm: { width: 18, height: 18 }, md: { width: 24, height: 24 }, lg: { width: 32, height: 32 }, custom: { width: "Array", height: "Set" }, refresh_sm: { width: 18, height: 18 } };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let accessible;
  let color;
  let resizeMode;
  let source;
  let style;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(14);
  ({ source, size, color, resizeMode, style, accessible, accessibilityLabel } = arg0);
  let str = "md";
  if (undefined !== size) {
    str = size;
  }
  const tmpResult = useToken;
  const token = tmpResult.useToken(color);
  if (null != token) {
    let tmp9;
    if (cResult[0] !== token) {
      const obj2 = { tintColor: token };
      cResult[0] = token;
      cResult[1] = obj2;
      tmp9 = obj2;
    } else {
      tmp9 = cResult[1];
    }
    tmp7 = tmp9;
  } else {
    const tmp6 = null != color && typeof color === "string";
    if (tmp6) {
      let tmp8;
      if (cResult[2] !== color) {
        const obj3 = { tintColor: color };
        cResult[2] = color;
        cResult[3] = obj3;
        tmp8 = obj3;
      } else {
        tmp8 = cResult[3];
      }
      tmp7 = tmp8;
    }
  }
  if (cResult[4] === closure_4[str]) {
    if (cResult[5] === style) {
      let tmp10;
      if (cResult[6] === tmp7) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === accessibilityLabel) {
        if (cResult[9] === accessible) {
          if (cResult[10] === resizeMode) {
            if (cResult[11] === source) {
              let tmp11;
              if (cResult[12] === tmp10) {
                tmp11 = cResult[13];
              }
              return tmp11;
            }
          }
        }
      }
      const tmp14 = <Image fadeDuration={0} source={source} resizeMode={resizeMode} style={tmp10} accessible={accessible} accessibilityLabel={accessibilityLabel} />;
      cResult[8] = accessibilityLabel;
      cResult[9] = accessible;
      cResult[10] = resizeMode;
      cResult[11] = source;
      cResult[12] = tmp10;
      cResult[13] = tmp14;
      tmp11 = tmp14;
    }
  }
  const items = [closure_4[str], tmp7, style];
  cResult[4] = closure_4[str];
  cResult[5] = style;
  cResult[6] = tmp7;
  cResult[7] = items;
  tmp10 = items;
}) : ((size) => {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let style;
  let tmp3;
  let str = size.size;
  const source = size.source;
  if (str === undefined) {
    str = "md";
  }
  const color = size.color;
  ({ resizeMode, style, accessible, accessibilityLabel } = size);
  const obj = useToken;
  const token = obj.useToken(color);
  if (null != token) {
    tmp3 = { tintColor: token };
    const obj2 = { tintColor: token };
  } else {
    const tmp2 = null != color && typeof color === "string";
    if (tmp2) {
      tmp3 = { tintColor: color };
      const obj3 = { tintColor: color };
    }
  }
  const items = [closure_4[str], tmp3, style];
  return <Image fadeDuration={0} source={source} resizeMode={resizeMode} style={items} accessible={accessible} accessibilityLabel={accessibilityLabel} />;
});
const result = size.fileFinishedImporting("design/components/Icon/native/BaseIconImage.tsx");

export const BaseIconImage = tmp3;