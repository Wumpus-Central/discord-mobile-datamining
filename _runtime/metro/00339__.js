import { useWindowDimensions } from "../00340_useWindowDimensions.js";
// _runtime/metro/00339__.js
import "noop";
import { jsx } from "jsxProd";

require("get hairlineWidth").create({ container: { position: "absolute" }, safeAreaView: { flex: 1 } });

export default function _default(arg0) {
  const width = useWindowDimensions().width;
  console.warn("<InputAccessoryView> is only supported on iOS.");
  return null;
};