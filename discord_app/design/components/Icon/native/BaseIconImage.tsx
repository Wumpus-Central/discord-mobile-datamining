// discord_app/design/components/Icon/native/BaseIconImage.tsx
import useToken from "../../../tokens/native/useToken.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
let closure_4 = {
  xxs: { width: 12, height: 12 },
  xs: { width: 16, height: 16 },
  sm: { width: 18, height: 18 },
  md: { width: 24, height: 24 },
  lg: { width: 32, height: 32 },
  custom: { width: "hash", height: "call" },
  refresh_sm: { width: 18, height: 18 },
};
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/BaseIconImage.tsx");

export const BaseIconImage = function BaseIconImage(size) {
  let str = size.size;
  if (str === undefined) {
    str = "md";
  }
  const color = size.color;
  ({ resizeMode, style, accessible, accessibilityLabel } = size);
  let obj = useToken;
  const token = obj.useToken(color);
  if (null != token) {
    obj = { tintColor: token };
    let tmp3 = obj;
  } else {
    if (tmp2) {
      obj = { tintColor: color };
      tmp3 = obj;
    }
    tmp2 = null != color && typeof color === "string";
  }
  const obj1 = { fadeDuration: 0, source: size.source, resizeMode, style: null, accessible, accessibilityLabel };
  const items = [closure_4[str], tmp3, style];
  obj1.style = items;
  return (
    <Image
      fadeDuration={0}
      source={size.source}
      resizeMode={resizeMode}
      style={null}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
    />
  );
};
