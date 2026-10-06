// _runtime/metro/05763__.js
import react_native from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";
import ScreenContentWrapperDefault from "../05764_ScreenContentWrapper.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import react from "../00019_react.js";

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
}
