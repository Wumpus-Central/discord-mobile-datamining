// === Module 6142: ? ===

// Module 6142
import _modDef6143 from "module_6143" /* 6143 */;
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
  return jsx(_modDef6143, {});
}