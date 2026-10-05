// _runtime/06297_react-native.js
import react_native from "00017_react-native.js";

let obj2;
const StyleSheet = react_native.StyleSheet;
const obj = { container: obj2 };
const create = StyleSheet.create;
obj2 = { pointerEvents: "box-none" };
const merged = Object.assign(StyleSheet.absoluteFillObject);

export const styles = create(obj);
