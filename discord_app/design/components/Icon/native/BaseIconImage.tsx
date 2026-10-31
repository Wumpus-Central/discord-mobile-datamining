// === Module 5716: BaseIconImage ===

// Module 5716 (BaseIconImage)
import useToken from "useToken" /* 5596 */;
import FastImageDefault from "FastImage" /* 5717 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let closure_4 = { xxs: { width: 12, height: 12 }, xs: { width: 16, height: 16 }, sm: { width: 18, height: 18 }, md: { width: 24, height: 24 }, lg: { width: 32, height: 32 }, custom: { width: "Array", height: "flexDirection" }, refresh_sm: { width: 18, height: 18 } };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/BaseIconImage.tsx");

export function BaseIconImage(size) {
  let str = size.size;
  if (str === undefined) {
    str = "md";
  }
  const color = size.color;
  ({ resizeMode, style, accessible, accessibilityLabel } = size);
  const token = useToken.useToken(color);
  if (null != token) {
    const obj2 = { tintColor: token };
    let tmp4 = obj2;
  } else {
    if (tmp3) {
      const obj3 = { tintColor: color };
      tmp4 = obj3;
    }
    tmp3 = null != color && typeof color === "string";
  }
  const obj4 = { fadeDuration: 0, source: size.source, resizeMode, style: null, accessible, accessibilityLabel };
  const items = [closure_4[str], tmp4, style];
  obj4.style = items;
  return jsx(FastImageDefault, { fadeDuration: 0, source: size.source, resizeMode, style: null, accessible, accessibilityLabel });
}