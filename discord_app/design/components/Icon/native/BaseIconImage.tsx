// discord_app/design/components/Icon/native/BaseIconImage.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { map } from "../../../tokens/native/useToken.tsx";

const require = arg1;
let closure_4 = { xxs: { width: 12, height: 12 }, xs: { width: 16, height: 16 }, sm: { width: 18, height: 18 }, md: { width: 24, height: 24 }, lg: { width: 32, height: 32 }, custom: { width: "r", height: "accessibilityRole" }, refresh_sm: { width: 18, height: 18 } };
const result = require("jsxProd").fileFinishedImporting("design/components/Icon/native/BaseIconImage.tsx");

export const BaseIconImage = function BaseIconImage(source) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let style;
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
  return <Image fadeDuration={0} source={arg0.source} resizeMode={resizeMode} style={style} accessible={accessible} accessibilityLabel={accessibilityLabel} />;
};