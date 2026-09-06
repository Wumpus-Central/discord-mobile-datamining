// === Module 15842: DebugLogView ===

// Module 15842 (DebugLogView)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 4559 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4, TouchableOpacity: hasOwnProperty } = get_ActivityIndicator);
const CollectiblesDebugStore = fn(7557);
({ useCollectiblesDebugStore: closure_7, addDebugLog: closure_8 } = CollectiblesDebugStore);
const jsxProd = fn(21);
({ jsxs: closure_9, jsx: c10 } = jsxProd);
fn(4560);
let createStyles = { debugLogContainer: { backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, maxHeight: 350, width: "100%", position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 9999, borderTopWidth: 1, borderTopColor: "#ff0000" }, debugLogHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }, debugLogText: { color: "#00ff00", fontSize: 12, marginBottom: 2, fontFamily: "monospace" }, clearButton: null, clearButtonText: null };
createStyles = { backgroundColor: "#ff0000", paddingHorizontal: 8, paddingVertical: 2, borderRadius: nativeDefault.radii.xs };
createStyles.clearButton = createStyles;
createStyles.clearButtonText = { color: "#ffffff", fontSize: 10, fontWeight: "bold" };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/DebugLogView.tsx");

export default function DebugLogView() {
  const arr = closure_7((logs) => logs.logs);
  dependencyMap = closure_7((clearLogs) => clearLogs.clearLogs);
  const tmp = closure_11();
  noop = tmp;
  let obj = arr(504);
  const items = [DevSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => DevSettingsStore.get("shop_show_debug_overlay"));
  const items1 = [arr.length, stateFromStores];
  const effect = noop.useEffect(() => {
    if (tmp) {
      React6("Debug log initialized");
    }
  }, items1);
  if (stateFromStores) {
    if (0 !== arr.length) {
      const _Math = Math;
      const substr = arr.slice(Math.max(0, arr.length - 10));
      obj = { style: tmp.debugLogContainer, children: null };
      obj = { style: tmp.debugLogHeader, children: null };
      const obj1 = { variant: "text-xs/normal", style: null, children: null };
      const obj2 = {};
      const merged = Object.assign(tmp.debugLogText);
      obj2.color = "#ffffff";
      obj1.style = obj2;
      const items2 = ["Debug Log (", arr.length, " entries)"];
      obj1.children = items2;
      const items3 = [closure_9(tmp2(4556).Text, obj1), ];
      const obj3 = {
        onPress() {
              closure_1();
            },
        style: tmp.clearButton,
        children: null
      };
      const obj4 = { variant: "text-xs/bold", style: tmp.clearButtonText, children: "Clear" };
      obj3.children = closure_10(tmp2(4556).Text, obj4);
      items3[1] = closure_10(closure_5, obj3);
      obj.children = items3;
      const items4 = [closure_9(stateFromStores, obj), ];
      const obj5 = { children: substr.map((children, index) => closure_2_10(Text_Text.Text, { variant: "text-xs/normal", style: debugLogText.debugLogText, children }, index)) };
      items4[1] = closure_10(closure_4, obj5);
      obj.children = items4;
      return closure_9(stateFromStores, obj);
    }
  }
  return null;
};