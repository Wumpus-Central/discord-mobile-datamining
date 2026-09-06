// _runtime/04940_style.js
import ScreenContentWrapperDefault from "04941_ScreenContentWrapper.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop from "metro/00019__.js";

const Platform = fn(17).Platform;
const jsx = fn(21).jsx;

export default function _default(arg0) {
  ({ contentStyle, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ contentStyle: 0, style: 0 }));
  const obj = { style: null };
  const items = [style, contentStyle];
  obj.style = items;
  const merged1 = Object.assign(merged);
  return jsx(ScreenContentWrapperDefault, { style: null });
}
