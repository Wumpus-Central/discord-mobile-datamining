// _runtime/metro/06247__.js
import _mod17 from "00017__.js";
import value2 from "../06046_value2.js";

const StyleSheet = _mod17.StyleSheet;
const obj = { container: { padding: 10, cursor: "grab" }, indicator: null };
const size = {
  alignSelf: "center",
  width: (7.5 * value2.WINDOW_WIDTH) / 100,
  height: 4,
  borderRadius: 4,
  backgroundColor: "rgba(0, 0, 0, 0.75)",
};
obj.indicator = size;

export const styles = StyleSheet.create(obj);
