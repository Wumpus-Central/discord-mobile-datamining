// === Module 8442: ImageWithPlaceholder ===

// Module 8442 (ImageWithPlaceholder)
import c from "c" /* 576 */;
import FastImageDefault from "FastImage" /* 5981 */;
import ImageWithThumbhashPlaceholderNativeComponentDefault from "ImageWithThumbhashPlaceholderNativeComponent" /* 8443 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

require = fn;
let closure_3 = ["uri", "placeholder", "placeholderVersion", "alt", "style"];
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, requireNativeComponent } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const style = { flex: 1 };
const ImagePlaceholderVersions = { THUMBHASH: 1, [1]: "THUMBHASH" };
const PlatformUtils = fn(1369);
if (PlatformUtils.isAndroid()) {
  let importDefaultResult = ImageWithThumbhashPlaceholderNativeComponentDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDImageWithThumbhashPlaceholderView");
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/ImageWithPlaceholder.tsx");

export { ImagePlaceholderVersions };
export const ImageWithPlaceholder = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const obj = c;
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
    let tmp8 = uri;
    let tmp7 = style;
    let tmp6 = tmp11;
    let tmp5 = placeholderVersion;
    let tmp4 = placeholder;
    let tmp3 = alt;
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
              }
            }
          }
        }
      }
      const obj2 = {};
      const merged = Object.assign(tmp6);
      obj2.style = tmp7;
      obj2.uri = tmp8;
      obj2.placeholder = tmp4;
      obj2.placeholderVersion = tmp5;
      obj2.alt = tmp3;
      const tmp29 = <importDefaultResult />;
      cResult[7] = tmp3;
      cResult[8] = tmp4;
      cResult[9] = tmp5;
      cResult[10] = tmp6;
      cResult[11] = tmp7;
      cResult[12] = tmp8;
      cResult[13] = tmp29;
    }
  }
  if (cResult[14] !== tmp8) {
    const obj3 = { uri: tmp8 };
    cResult[14] = tmp8;
    cResult[15] = obj3;
    let tmp13 = obj3;
  } else {
    tmp13 = cResult[15];
  }
  if (cResult[16] === tmp3) {
    if (cResult[17] === tmp13) {
      let tmp14 = cResult[18];
    }
    if (cResult[19] === tmp6) {
      if (cResult[20] === tmp7) {
        if (cResult[21] === tmp14) {
          let tmp16 = cResult[22];
        }
        return tmp16;
      }
    }
    const obj4 = { style: tmp7 };
    const merged1 = Object.assign(tmp6);
    obj4.children = tmp14;
    const tmp22 = <hasOwnProperty style={tmp7} />;
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
  const obj5 = { style, resizeMode: "cover", source: tmp13, accessibilityLabel: tmp3 };
}) : ((arg0) => {
  ({ uri, placeholder, placeholderVersion, alt, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ uri: 0, placeholder: 0, placeholderVersion: 0, alt: 0, style: 0 }));
  if (null != placeholder) {
    if (placeholderVersion === obj.THUMBHASH) {
      const obj2 = {};
      const merged1 = Object.assign(merged);
      obj2.style = style;
      obj2.uri = uri;
      obj2.placeholder = placeholder;
      obj2.placeholderVersion = placeholderVersion;
      obj2.alt = alt;
      let tmp4 = <importDefaultResult />;
    }
    return tmp4;
  }
  obj = { style };
  const merged2 = Object.assign(merged);
  obj.children = jsx(FastImageDefault, { style, resizeMode: "cover", source: { uri }, accessibilityLabel: alt });
  tmp4 = <hasOwnProperty style={style} />;
  const obj3 = { style, resizeMode: "cover", source: { uri }, accessibilityLabel: alt };
});