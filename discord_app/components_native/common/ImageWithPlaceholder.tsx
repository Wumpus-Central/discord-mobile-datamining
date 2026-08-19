// discord_app/components_native/common/ImageWithPlaceholder.tsx
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import preloadDefault from "FastImage.tsx";
import __INTERNAL_VIEW_CONFIGDefault from "../../../discord_common/js/packages/rtn-codegen/js/ImageWithThumbhashPlaceholderNativeComponent.tsx";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import obj132 from "../../utils/PlatformUtils.tsx";

({ View: obj1, requireNativeComponent } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
let closure_4 = { flex: 1 };
let obj = { THUMBHASH: 1, [1]: "THUMBHASH" };
if (obj132.isAndroid()) {
  let importDefaultResult = __INTERNAL_VIEW_CONFIGDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDImageWithThumbhashPlaceholderView");
}
const result = obj132.fileFinishedImporting("components_native/common/ImageWithPlaceholder.tsx");

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
  const merged2 = Object.assign(merged);
  obj = { style: closure_4, resizeMode: "cover", source: { uri }, alt };
  obj.children = jsx(preloadDefault, { style: closure_4, resizeMode: "cover", source: { uri }, alt });
  tmp4 = <closure_2 style={closure_4} resizeMode="cover" source={{ uri }} alt={alt} />;
};