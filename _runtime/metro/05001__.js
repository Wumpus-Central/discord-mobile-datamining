// === Module 5001: ? ===

// Module 5001
import _modDef5002 from "module_5002" /* 5002 */;
import noop from "module_19" /* 19 */;

const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const styles = StyleSheet.create({ flex: { flex: 1 } });

export const SafeAreaView = function SafeAreaView(style) {
  const obj = {};
  const merged = Object.assign(style);
  const items = [styles.flex, style.style];
  obj.style = items;
  const rect = { top: false, bottom: false, left: false, right: false };
  const merged1 = Object.assign(style.edges);
  obj.edges = rect;
  return jsx(_modDef5002, {});
};