// discord_app/modules/collectibles/native/DebugLogView.tsx
import ThemesDefault from "Themes" /* 712 */;
import closure_2 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "getUserAgnosticState" /* 4737 */;
import useCollectiblesDebugStore from "useCollectiblesDebugStore" /* 5323 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ View: c3, ScrollView: c4, TouchableOpacity: c5 } = get_ActivityIndicator);
({ useCollectiblesDebugStore: error, addDebugLog: closure_8 } = useCollectiblesDebugStore);
({ jsxs: c9, jsx: c10 } = jsxProd);
createCacheKey = { debugLogContainer: { backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, maxHeight: 350, width: "100%", position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 9999, borderTopWidth: 1, borderTopColor: "#ff0000" }, debugLogHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }, debugLogText: { color: "#00ff00", fontSize: 12, marginBottom: 2, fontFamily: "monospace" }, clearButton: null, clearButtonText: null };
createCacheKey = { backgroundColor: "#ff0000", paddingHorizontal: 8, paddingVertical: 2, borderRadius: ThemesDefault.radii.xs };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { color: "#ffffff", fontSize: 10, fontWeight: "bold" };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/collectibles/native/DebugLogView.tsx");

export default function DebugLogView() {
  const arr = callback((logs) => logs.logs);
  dependencyMap = callback((clearLogs) => clearLogs.clearLogs);
  const tmp = callback4();
  const React = tmp;
  let obj = arr(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_6.get("shop_show_debug_overlay"));
  const items1 = [arr.length, stateFromStores];
  const effect = React.useEffect(() => {
    if (tmp) {
      closure_1_8("Debug log initialized");
    }
  }, items1);
  if (stateFromStores) {
    if (0 !== arr.length) {
      const _Math = Math;
      const substr = arr.slice(Math.max(0, arr.length - 10));
      obj = { style: null, children: null };
      obj[0] = tmp.debugLogContainer;
      obj = { style: null, children: null };
      obj[0] = tmp.debugLogHeader;
      obj1 = { variant: "text-xs/normal", style: null, children: null };
      const obj2 = {};
      const merged = Object.assign(tmp.debugLogText);
      obj2.color = "#ffffff";
      obj1[1] = obj2;
      const items2 = ["Debug Log (", arr.length, " entries)"];
      obj1[2] = items2;
      const items3 = [callback2(tmp2(4734).Text, obj1), ];
      const obj3 = { onPress: null, style: null, children: null };
      obj3[0] = function onPress() {
        dependencyMap();
      };
      obj3[1] = tmp.clearButton;
      const obj4 = { variant: "text-xs/bold", style: null, children: "Clear" };
      obj4[1] = tmp.clearButtonText;
      obj3[2] = callback3(tmp2(4734).Text, obj4);
      items3[1] = callback3(closure_5, obj3);
      obj[1] = items3;
      const items4 = [callback2(stateFromStores, obj), ];
      const obj5 = { children: null };
      obj5[0] = substr.map((children) => closure_1_10(arr(4734).Text, { variant: "text-xs/normal", style: debugLogText.debugLogText, children }, arg1));
      items4[1] = callback3(closure_4, obj5);
      obj[1] = items4;
      return callback2(stateFromStores, obj);
    }
  }
  return null;
};