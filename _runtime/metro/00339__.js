// _runtime/metro/00339__.js
import Fragment from "../react/00021_Fragment.js";
import useWindowDimensionsDefault from "../00340_useWindowDimensions.js";
import react from "../00019_react.js";
import get_hairlineWidth from "../00254_get_hairlineWidth.js";

const jsx = Fragment.jsx;
get_hairlineWidth.create({ container: { position: "absolute" }, safeAreaView: { flex: 1 } });

export default function _default(arg0) {
  const width = useWindowDimensionsDefault().width;
  console.warn("<InputAccessoryView> is only supported on iOS.");
  return null;
}
