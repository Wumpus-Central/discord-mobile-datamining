// discord_app/design/void/CloseIcon/native/CloseIcon.tsx
import noopAll from "noop" /* 19 */;
import inlineStyles from "inlineStyles" /* 6571 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/void/CloseIcon/native/CloseIcon.tsx");

export default function Close(width) {
  let num = width.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  let str = width.color;
  if (str === undefined) {
    str = "currentColor";
  }
  const merged = Object.assign(width, Object.create(null));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.width = num;
  obj.height = num2;
  obj.viewBox = "0 0 24 24";
  obj.children = jsx(inlineStyles.Path, { fill: str, d: "M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" });
  return jsx(inlineStyles.Svg, {});
};