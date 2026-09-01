// _runtime/metro/00339__.js
import noopAll from "../00019_noop.js";
import get_hairlineWidthDefault from "../00254_get_hairlineWidth.js";
import useWindowDimensionsDefault from "../00340_useWindowDimensions.js";
import { jsx } from "../react/00021_jsxProd.js";

noopAll;
get_hairlineWidthDefault.create({ container: { position: "absolute" }, safeAreaView: { flex: 1 } });

export default function _default(arg0) {
  const width = useWindowDimensionsDefault().width;
  console.warn("<InputAccessoryView> is only supported on iOS.");
  return null;
}
