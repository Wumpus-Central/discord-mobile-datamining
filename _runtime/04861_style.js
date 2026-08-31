// _runtime/04861_style.js
import noopAll from "00019_noop.js";
import _objectWithoutPropertiesDefault from "metro/00109__objectWithoutProperties.js";
import ScreenContentWrapperDefault from "04862_ScreenContentWrapper.js";
import { Platform } from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

_objectWithoutPropertiesDefault;
noopAll;

export default function _default(arg0) {
  ({ contentStyle, style } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const items = [style, contentStyle];
  const merged1 = Object.assign(merged);
  return jsx(ScreenContentWrapperDefault, { style: items });
};