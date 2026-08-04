// discord_app/components_native/common/ImageWithPlaceholder.tsx
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import set from "set";
import set from "set";

let obj1;
let requireNativeComponent;
({ View: obj1, requireNativeComponent } = get_ActivityIndicator);
let closure_4 = { flex: 1 };
let obj = { THUMBHASH: 1, [1]: "THUMBHASH" };
if (set.isAndroid()) {
  let importDefaultResult = require("__INTERNAL_VIEW_CONFIG");
} else {
  importDefaultResult = requireNativeComponent("DCDImageWithThumbhashPlaceholderView");
}
const result = set.fileFinishedImporting("components_native/common/ImageWithPlaceholder.tsx");

export const ImagePlaceholderVersions = obj;
export const ImageWithPlaceholder = function ImageWithPlaceholder(arg0) {
  let alt;
  let placeholder;
  let placeholderVersion;
  let style;
  let uri;
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
  obj.children = jsx(importDefault(5145), { style: closure_4, resizeMode: "cover", source: { uri }, alt });
  tmp4 = <closure_2 style={closure_4} resizeMode="cover" source={{ uri }} alt={alt} />;
};