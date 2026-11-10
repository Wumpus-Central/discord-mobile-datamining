// === Module 6144: ? ===

// Module 6144
import _modDef6145 from "module_6145" /* 6145 */;
import noop from "module_19" /* 19 */;

const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const styles = StyleSheet.create({ flex: { flex: 1 } });

export function SafeAreaView(style) {
  const obj = {};
  const merged = Object.assign(style);
  items = [styles.flex, style.style];
  obj.style = items;
  const rect = { top: false, bottom: false, left: false, right: false };
  const merged1 = Object.assign(style.edges);
  obj.edges = rect;
  return jsx(_modDef6145, {});
}