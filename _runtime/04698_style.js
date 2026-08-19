// === Module 4698: style ===

// Module 4698 (style)
import noopAll from "noop" /* 19 */;
import _objectWithoutPropertiesDefault from "_objectWithoutProperties" /* 109 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 4699 */;
import { Platform } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

_objectWithoutPropertiesDefault;
noopAll;

export default function _default(arg0) {
  ({ contentStyle, style } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const items = [style, contentStyle];
  const merged1 = Object.assign(merged);
  return jsx(ScreenContentWrapperDefault, { style: items });
};