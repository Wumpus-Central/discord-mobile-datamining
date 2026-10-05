// _runtime/06314_react-native.js
import react_native from "00017_react-native.js";
import GESTURE_SOURCE from "06113_GESTURE_SOURCE.js";

let size;
const StyleSheet = react_native.StyleSheet;
const obj = { container: { padding: 10, cursor: "grab" }, indicator: size };
size = {
  alignSelf: "center",
  width: (7.5 * GESTURE_SOURCE.WINDOW_WIDTH) / 100,
  height: 4,
  borderRadius: 4,
  backgroundColor: "rgba(0, 0, 0, 0.75)",
};

export const styles = StyleSheet.create(obj);
