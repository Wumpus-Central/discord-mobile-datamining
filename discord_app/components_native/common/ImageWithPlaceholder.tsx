// === Module 8755: ImageWithPlaceholder ===

// Module 8755 (ImageWithPlaceholder)
import jsxProd from "jsxProd" /* 21 */;
import FastImageDefault from "FastImage" /* 5587 */;
import ImageWithThumbhashPlaceholderNativeComponentDefault from "ImageWithThumbhashPlaceholderNativeComponent" /* 8756 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

({ View: c2, requireNativeComponent } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
const style = { flex: 1 };
const ImagePlaceholderVersions = { THUMBHASH: 1, [1]: "THUMBHASH" };
if (PlatformUtils.isAndroid()) {
  let importDefaultResult = ImageWithThumbhashPlaceholderNativeComponentDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDImageWithThumbhashPlaceholderView");
}
const metroRequire = importDefaultResult;
const result = size.fileFinishedImporting("components_native/common/ImageWithPlaceholder.tsx");

export { ImagePlaceholderVersions };
export const ImageWithPlaceholder = function ImageWithPlaceholder(arg0) {
  ({ uri, placeholder, placeholderVersion, alt, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ uri: 0, placeholder: 0, placeholderVersion: 0, alt: 0, style: 0 }));
  if (null != placeholder) {
    if (placeholderVersion === obj.THUMBHASH) {
      obj = {};
      const merged1 = Object.assign(merged);
      obj.style = style;
      obj.uri = uri;
      obj.placeholder = placeholder;
      obj.placeholderVersion = placeholderVersion;
      obj.alt = alt;
      let tmp4 = <importDefaultResult />;
    }
    return tmp4;
  }
  obj = { style };
  const merged2 = Object.assign(merged);
  obj = { style, resizeMode: "cover", source: { uri }, alt };
  obj.children = jsx(FastImageDefault, { style, resizeMode: "cover", source: { uri }, alt });
  tmp4 = <React2 style={style} resizeMode="cover" source={{ uri }} alt={alt} />;
};