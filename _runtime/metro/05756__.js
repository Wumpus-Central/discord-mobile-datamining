// === Module 5756: ? ===

// Module 5756
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5757 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;

const Platform = react_native.Platform;
const jsx = Fragment.jsx;

export default function _default(arg0) {
  let contentStyle;
  let style;
  ({ contentStyle, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ contentStyle: 0, style: 0 }));
  const items = [style, contentStyle];
  ScreenContentWrapperDefault;
  const merged1 = Object.assign(merged);
  return <tmp2 style={items} />;
};