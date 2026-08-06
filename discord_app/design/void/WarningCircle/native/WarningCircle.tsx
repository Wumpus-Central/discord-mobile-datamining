// discord_app/design/void/WarningCircle/native/WarningCircle.tsx
import "noop";
import { jsx } from "jsxProd";
import { inlineStyles } from "../../../../../_runtime/07758_inlineStyles.js";

const require = arg1;
const result = require("inlineStyles").fileFinishedImporting("design/void/WarningCircle/native/WarningCircle.tsx");

export default function WarningCircle(width) {
  let num = width.width;
  if (num === undefined) {
    num = 20;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 20;
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
  obj.viewBox = "0 0 20 20";
  obj.children = jsx(inlineStyles.Path, { d: "M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z", fillRule: "evenodd", clipRule: "evenodd", fill: str });
  return jsx(inlineStyles.Svg, {});
};