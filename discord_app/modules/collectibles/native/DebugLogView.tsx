// discord_app/modules/collectibles/native/DebugLogView.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import getUserAgnosticState from "getUserAgnosticState";
import useCollectiblesDebugStore from "useCollectiblesDebugStore";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c3;
let c4;
let c5;
let c9;
let error;
let metroImportAll;
const require = arg1;
({ View: c3, ScrollView: c4, TouchableOpacity: c5 } = get_ActivityIndicator);
({ useCollectiblesDebugStore: error, addDebugLog: metroImportAll } = useCollectiblesDebugStore);
({ jsxs: c9, jsx: c10 } = jsxProd);
createCacheKey = { debugLogContainer: { backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, maxHeight: 350, width: "100%", position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 9999, borderTopWidth: 1, borderTopColor: "#ff0000" }, debugLogHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }, debugLogText: { color: "#00ff00", fontSize: 12, marginBottom: 2, fontFamily: "monospace" }, clearButton: null, clearButtonText: null };
createCacheKey = { backgroundColor: "#ff0000", paddingHorizontal: 8, paddingVertical: 2, borderRadius: require("Themes").radii.xs };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { color: "#ffffff", fontSize: 10, fontWeight: "bold" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("getUserAgnosticState").fileFinishedImporting("modules/collectibles/native/DebugLogView.tsx");

export default function DebugLogView() {
  const arr = callback((logs) => logs.logs);
  const dependencyMap = callback((clearLogs) => clearLogs.clearLogs);
  const tmp = createCacheKey();
  const React = tmp;
  let obj = arr(589);
  const items = [getUserAgnosticState];
  const stateFromStores = obj.useStateFromStores(items, () => getUserAgnosticState.get("shop_show_debug_overlay"));
  const items1 = [arr.length, stateFromStores];
  const effect = React.useEffect(() => {
    if (tmp) {
      outer1_8("Debug log initialized");
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
      const obj1 = { variant: "text-xs/normal", style: null, children: null };
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
      obj5[0] = substr.map((children) => outer1_10(arr(4734).Text, { variant: "text-xs/normal", style: tmp.debugLogText, children }, arg1));
      items4[1] = callback3(closure_4, obj5);
      obj[1] = items4;
      return callback2(stateFromStores, obj);
    }
  }
  return null;
};