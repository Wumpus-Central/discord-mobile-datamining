// _runtime/04945_FullWindowOverlay.js
import noop from "metro/00019__.js";

get_ActivityIndicator = fn(17);
({ Platform, StyleSheet, View: closure_0, useWindowDimensions: closure_1 } = get_ActivityIndicator);
const jsx = fn(21).jsx;

export default function FullWindowOverlay(arg0) {
  ({ width, height } = framebus());
  console.warn("Using FullWindowOverlay is only valid on iOS devices.");
  const merged = Object.assign(arg0);
  return <React />;
}
