// === Module 4096: BaseIconImage ===

// Module 4096 (BaseIconImage)
import noopAll from "noop" /* 19 */;
import map from "map" /* 4097 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
let closure_4 = { xxs: { width: 12, height: 12 }, xs: { width: 16, height: 16 }, sm: { width: 18, height: 18 }, md: { width: 24, height: 24 }, lg: { width: 32, height: 32 }, custom: { width: "r", height: "accessibilityRole" }, refresh_sm: { width: 18, height: 18 } };
const result = require("obj132").fileFinishedImporting("design/components/Icon/native/BaseIconImage.tsx");

export const BaseIconImage = function BaseIconImage(source) {
  let str = source.size;
  if (str === undefined) {
    str = "md";
  }
  const color = source.color;
  ({ resizeMode, style, accessible, accessibilityLabel } = source);
  let obj = map;
  const token = obj.useToken(color);
  if (null != token) {
    obj = { tintColor: null };
    obj[0] = token;
    let tmp3 = obj;
  } else {
    if (tmp2) {
      obj = { tintColor: null };
      obj[0] = color;
      tmp3 = obj;
    }
    tmp2 = null != color && typeof color === "string";
  }
  style = [table[str], tmp3, ];
  style[2] = style;
  return <Image fadeDuration={0} source={source.source} resizeMode={resizeMode} style={style} accessible={accessible} accessibilityLabel={accessibilityLabel} />;
};