// === Module 16085: DebugLogView ===

// Module 16085 (DebugLogView)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4718 */;
import noop from "module_19" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 4721 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4, TouchableOpacity: hasOwnProperty } = get_ActivityIndicator);
const CollectiblesDebugStore = fn(7752);
({ useCollectiblesDebugStore: closure_7, addDebugLog: closure_8 } = CollectiblesDebugStore);
const jsxProd = fn(21);
({ jsxs: closure_9, jsx: c10 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { debugLogContainer: { backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, maxHeight: 350, width: "100%", position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 9999, borderTopWidth: 1, borderTopColor: "#ff0000" }, debugLogHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }, debugLogText: { color: "#00ff00", fontSize: 12, marginBottom: 2, fontFamily: "monospace" }, clearButton: { backgroundColor: "#ff0000", paddingHorizontal: 8, paddingVertical: 2, borderRadius: nativeDefault.radii.xs }, clearButtonText: { color: "#ffffff", fontSize: 10, fontWeight: "bold" } };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/DebugLogView.tsx");

export default function DebugLogView() {
  const arr = closure_7((logs) => logs.logs);
  dependencyMap = closure_7((clearLogs) => clearLogs.clearLogs);
  let tmp = closure_11();
  noop = tmp;
  const items = [DevSettingsStore];
  const stateFromStores = arr(504).useStateFromStores(items, () => DevSettingsStore.get("shop_show_debug_overlay"));
  const items1 = [arr.length, stateFromStores];
  const effect = noop.useEffect(() => {
    if (tmp) {
      React6("Debug log initialized");
    }
    tmp = 0 === arr.length && stateFromStores;
  }, items1);
  if (stateFromStores) {
    if (0 !== arr.length) {
      const _Math = Math;
      const substr = arr.slice(Math.max(0, arr.length - 10));
      const obj2 = { style: tmp.debugLogContainer, children: null };
      const obj3 = { style: tmp.debugLogHeader, children: null };
      const obj4 = { variant: "text-xs/normal", style: null, children: null };
      const obj5 = {};
      const merged = Object.assign(tmp.debugLogText);
      obj5.color = "#ffffff";
      obj4.style = obj5;
      const items2 = ["Debug Log (", arr.length, " entries)"];
      obj4.children = items2;
      const items3 = [closure_9(tmp2(4718).Text, obj4), ];
      const obj6 = {
        onPress() {
              closure_1();
            },
        style: tmp.clearButton,
        children: null
      };
      const obj7 = { variant: "text-xs/bold", style: tmp.clearButtonText, children: "Clear" };
      obj6.children = closure_10(tmp2(4718).Text, obj7);
      items3[1] = closure_10(closure_5, obj6);
      obj3.children = items3;
      const items4 = [closure_9(stateFromStores, obj3), ];
      const obj8 = { children: substr.map((children, index) => closure_2_10(Text_Text.Text, { variant: "text-xs/normal", style: debugLogText.debugLogText, children }, index)) };
      items4[1] = closure_10(closure_4, obj8);
      obj2.children = items4;
      return closure_9(stateFromStores, obj2);
    }
  }
  return null;
};