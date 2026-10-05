// === Module 8409: ImageWithPlaceholder ===

// Module 8409 (ImageWithPlaceholder)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import FastImageDefault from "FastImage" /* 5974 */;
import ImageWithThumbhashPlaceholderNativeComponentDefault from "ImageWithThumbhashPlaceholderNativeComponent" /* 8410 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let importDefaultResult;
let requireNativeComponent;
let closure_3 = ["uri", "placeholder", "placeholderVersion", "alt", "style"];
({ View: hasOwnProperty, requireNativeComponent } = react_native);
const jsx = Fragment.jsx;
const style = { flex: 1 };
const ImagePlaceholderVersions = { THUMBHASH: 1, [1]: "THUMBHASH" };
if (PlatformUtils.isAndroid()) {
  importDefaultResult = ImageWithThumbhashPlaceholderNativeComponentDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDImageWithThumbhashPlaceholderView");
}
let c9 = importDefaultResult;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let alt;
  let placeholder;
  let placeholderVersion;
  let tmp13;
  let tmp16;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let uri;
  const obj = react;
  const cResult = obj.c(23);
  if (cResult[0] !== arg0) {
    ({ uri, placeholder, placeholderVersion, alt, style } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = alt;
    cResult[2] = placeholder;
    cResult[3] = placeholderVersion;
    cResult[4] = tmp11;
    cResult[5] = style;
    cResult[6] = uri;
    tmp8 = uri;
    tmp7 = style;
    tmp6 = tmp11;
    tmp5 = placeholderVersion;
    tmp4 = placeholder;
    tmp3 = alt;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
    tmp5 = cResult[3];
    tmp6 = cResult[4];
    tmp7 = cResult[5];
    tmp8 = cResult[6];
  }
  if (null != tmp4) {
    if (tmp5 === obj.THUMBHASH) {
      if (cResult[7] === tmp3) {
        if (cResult[8] === tmp4) {
          if (cResult[9] === tmp5) {
            if (cResult[10] === tmp6) {
              if (cResult[11] === tmp7) {
                let tmp23;
                if (cResult[12] === tmp8) {
                  tmp23 = cResult[13];
                }
                tmp16 = tmp23;
              }
            }
          }
        }
      }
      const merged = Object.assign(tmp6);
      const tmp29 = <c9 style={tmp7} uri={tmp8} placeholder={tmp4} placeholderVersion={tmp5} alt={tmp3} />;
      cResult[7] = tmp3;
      cResult[8] = tmp4;
      cResult[9] = tmp5;
      cResult[10] = tmp6;
      cResult[11] = tmp7;
      cResult[12] = tmp8;
      cResult[13] = tmp29;
      tmp23 = tmp29;
    }
    return tmp16;
  }
  if (cResult[14] !== tmp8) {
    const obj3 = { uri: tmp8 };
    cResult[14] = tmp8;
    cResult[15] = obj3;
    tmp13 = obj3;
  } else {
    tmp13 = cResult[15];
  }
  if (cResult[16] === tmp3) {
    let tmp14;
    if (cResult[17] === tmp13) {
      tmp14 = cResult[18];
    }
    if (cResult[19] === tmp6) {
      if (cResult[20] === tmp7) {
        if (cResult[21] === tmp14) {
          tmp16 = cResult[22];
        }
      }
    }
    const merged1 = Object.assign(tmp6);
    const tmp22 = <hasOwnProperty style={tmp7}>{tmp14}</hasOwnProperty>;
    cResult[19] = tmp6;
    cResult[20] = tmp7;
    cResult[21] = tmp14;
    cResult[22] = tmp22;
    tmp16 = tmp22;
  }
  const tmp15 = jsx(FastImageDefault, { style, resizeMode: "cover", source: tmp13, accessibilityLabel: tmp3 });
  cResult[16] = tmp3;
  cResult[17] = tmp13;
  cResult[18] = tmp15;
  tmp14 = tmp15;
}) : ((arg0) => {
  let alt;
  let obj;
  let placeholder;
  let placeholderVersion;
  let uri;
  ({ uri, placeholder, placeholderVersion, alt, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ uri: 0, placeholder: 0, placeholderVersion: 0, alt: 0, style: 0 }));
  if (null != placeholder) {
    let tmp4;
    if (placeholderVersion === obj.THUMBHASH) {
      const merged1 = Object.assign(merged);
      tmp4 = <c9 style={style} uri={uri} placeholder={placeholder} placeholderVersion={placeholderVersion} alt={alt} />;
    }
    return tmp4;
  }
  obj = { style, children: jsx(FastImageDefault, obj3) };
  const merged2 = Object.assign(merged);
  tmp4 = <hasOwnProperty style={style}>{jsx(FastImageDefault, { style, resizeMode: "cover", source: { uri }, accessibilityLabel: alt })}</hasOwnProperty>;
});
const result = size.fileFinishedImporting("components_native/common/ImageWithPlaceholder.tsx");

export { ImagePlaceholderVersions };
export const ImageWithPlaceholder = tmp4;