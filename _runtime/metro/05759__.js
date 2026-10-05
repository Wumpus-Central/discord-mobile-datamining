// _runtime/metro/05759__.js
import react_native from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";
import react_nativeDefault from "../05760_react-native.js";
import react from "../00019_react.js";

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const styles = StyleSheet.create({ flex: { flex: 1 } });

export const SafeAreaView = function SafeAreaView(style) {
  react_nativeDefault;
  const merged = Object.assign(style);
  const items = [styles.flex, style.style];
  const rect = { top: false, bottom: false, left: false, right: false };
  const merged1 = Object.assign(style.edges);
  return <tmp style={items} edges={rect} />;
};
