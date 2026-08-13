// _runtime/04719_style.js
import "_objectWithoutProperties";
import "noop";
import { Platform } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { ScreenContentWrapper } from "04720_ScreenContentWrapper.js";


export default function _default(arg0) {
  let contentStyle;
  let style;
  ({ contentStyle, style } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const items = [style, contentStyle];
  const merged1 = Object.assign(merged);
  return jsx(ScreenContentWrapper, { style: items });
};