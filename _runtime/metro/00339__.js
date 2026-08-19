// === Module 339: ? ===

// Module 339
import noopAll from "noop" /* 19 */;
import get_hairlineWidthDefault from "get hairlineWidth" /* 254 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 340 */;
import { jsx } from "jsxProd" /* 21 */;

noopAll;
get_hairlineWidthDefault.create({ container: { position: "absolute" }, safeAreaView: { flex: 1 } });

export default function _default(arg0) {
  const width = useWindowDimensionsDefault().width;
  console.warn("<InputAccessoryView> is only supported on iOS.");
  return null;
};