// discord_app/design/components/Icon/native/BaseIconImage.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import map from "../../../tokens/native/useToken.tsx";
import { Image } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
let closure_4 = {
  xxs: { width: 12, height: 12 },
  xs: { width: 16, height: 16 },
  sm: { width: 18, height: 18 },
  md: { width: 24, height: 24 },
  lg: { width: 32, height: 32 },
  custom: { width: "children", height: "c" },
  refresh_sm: { width: 18, height: 18 },
};
const result = require("set").fileFinishedImporting("design/components/Icon/native/BaseIconImage.tsx");

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
  style = [table[str], tmp3];
  style[2] = style;
  return (
    <Image
      fadeDuration={0}
      source={arg0.source}
      resizeMode={resizeMode}
      style={style}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
    />
  );
};
