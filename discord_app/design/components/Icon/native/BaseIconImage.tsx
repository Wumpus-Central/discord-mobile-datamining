// === Module 4525: BaseIconImage ===

// Module 4525 (BaseIconImage)
import useToken from "useToken" /* 4526 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
let closure_4 = { xxs: { width: 12, height: 12 }, xs: { width: 16, height: 16 }, sm: { width: 18, height: 18 }, md: { width: 24, height: 24 }, lg: { width: 32, height: 32 }, custom: { width: "channel", height: "channelId" }, refresh_sm: { width: 18, height: 18 } };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/BaseIconImage.tsx");

export const BaseIconImage = function BaseIconImage(size) {
  let str = size.size;
  if (str === undefined) {
    str = "md";
  }
  const color = size.color;
  ({ resizeMode, style, accessible, accessibilityLabel } = size);
  const token = useToken.useToken(color);
  if (null != token) {
    const obj2 = { tintColor: token };
    let tmp3 = obj2;
  } else {
    if (tmp2) {
      const obj3 = { tintColor: color };
      tmp3 = obj3;
    }
    tmp2 = null != color && typeof color === "string";
  }
  const obj4 = { fadeDuration: 0, source: size.source, resizeMode, style: null, accessible, accessibilityLabel };
  const items = [closure_4[str], tmp3, style];
  obj4.style = items;
  return <Image fadeDuration={0} source={size.source} resizeMode={resizeMode} style={null} accessible={accessible} accessibilityLabel={accessibilityLabel} />;
};