// _runtime/metro/01866__.js
import Fragment from "../react/00021_Fragment.js";
import TEST_ID_KEYBOARD_TOOLBAR from "../01861_TEST_ID_KEYBOARD_TOOLBAR.js";
import react from "../00019_react.js";
import react_native from "../00017_react-native.js";

let StyleSheet;
let c2;
({ StyleSheet, View: c2 } = react_native);
const jsx = Fragment.jsx;
const styles = StyleSheet.create({ flex: { flex: 1 } });

export default function _default(children) {
  return (
    <React2 style={styles.flex} testID={TEST_ID_KEYBOARD_TOOLBAR.TEST_ID_KEYBOARD_TOOLBAR_CONTENT}>
      {children.children}
    </React2>
  );
}
