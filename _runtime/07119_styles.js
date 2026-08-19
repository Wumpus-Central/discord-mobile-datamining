// _runtime/07119_styles.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

const StyleSheet = get_ActivityIndicator.StyleSheet;
const obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.backgroundColor = "black";
obj[0] = obj;

export const styles = StyleSheet.create(obj);