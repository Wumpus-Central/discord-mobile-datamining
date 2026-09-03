// === Module 8899: ImagePlaceholderVersions ===

// Module 8899 (ImagePlaceholderVersions)
import jsxProd from "jsxProd" /* 21 */;
import preloadDefault from "preload" /* 5502 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 8900 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import set from "set" /* 1234 */;

({ View: obj1, requireNativeComponent } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
let closure_4 = { flex: 1 };
let obj = { THUMBHASH: 1, [1]: "THUMBHASH" };
if (set.isAndroid()) {
  let importDefaultResult = __INTERNAL_VIEW_CONFIGDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDImageWithThumbhashPlaceholderView");
}
const result = set.fileFinishedImporting("components_native/common/ImageWithPlaceholder.tsx");

export const ImagePlaceholderVersions = obj;
export const ImageWithPlaceholder = function ImageWithPlaceholder(arg0) {
  ({ uri, placeholder, placeholderVersion, alt, style } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  if (null != placeholder) {
    if (placeholderVersion === obj.THUMBHASH) {
      obj = {};
      const merged1 = Object.assign(merged);
      obj.style = style;
      obj.uri = uri;
      obj.placeholder = placeholder;
      obj.placeholderVersion = placeholderVersion;
      obj.alt = alt;
      let tmp4 = <closure_6 />;
    }
    return tmp4;
  }
  obj = { style };
  const merged2 = Object.assign(merged);
  obj = { style: closure_4, resizeMode: "cover", source: { uri }, alt };
  obj.children = jsx(preloadDefault, { style: closure_4, resizeMode: "cover", source: { uri }, alt });
  tmp4 = <closure_2 style={closure_4} resizeMode="cover" source={{ uri }} alt={alt} />;
};