// _runtime/metro/01877__.js
import noopDefault from "../00019_noop.js";
import TEST_ID_KEYBOARD_TOOLBAR from "../01872_TEST_ID_KEYBOARD_TOOLBAR.js";
import get_ActivityIndicator from "../00017_get_ActivityIndicator.js";
import { jsx } from "../react/00021_jsxProd.js";

require = arg1;
noopDefault;
({ StyleSheet, View: obj1 } = get_ActivityIndicator);
const styles = StyleSheet.create({ flex: { flex: 1 } });

export default function _default(children) {
  return <closure_2 style={styles.flex} testID={TEST_ID_KEYBOARD_TOOLBAR.TEST_ID_KEYBOARD_TOOLBAR_CONTENT}>{arg0.children}</closure_2>;
};