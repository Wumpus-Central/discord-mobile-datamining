// _runtime/05791_styles.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import GESTURE_SOURCE from "05590_GESTURE_SOURCE.js";

const StyleSheet = get_ActivityIndicator.StyleSheet;
let obj = { container: { padding: 10, cursor: "grab" }, indicator: null };
obj = { alignSelf: "center", width: 7.5 * GESTURE_SOURCE.WINDOW_WIDTH / 100, height: 4, borderRadius: 4, backgroundColor: "rgba(0, 0, 0, 0.75)" };
obj[1] = obj;

export const styles = StyleSheet.create(obj);