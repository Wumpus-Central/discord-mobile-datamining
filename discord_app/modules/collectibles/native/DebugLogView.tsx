// === Module 16228: DebugLogView ===

// Module 16228 (DebugLogView)
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5088 */;
import noop from "module_19" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 5091 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4, TouchableOpacity: hasOwnProperty } = get_ActivityIndicator);
const CollectiblesDebugStore = fn(7277);
({ useCollectiblesDebugStore: closure_7, addDebugLog: closure_8 } = CollectiblesDebugStore);
const jsxProd = fn(21);
({ jsxs: closure_9, jsx: c10 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { debugLogContainer: { backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, maxHeight: 350, width: "100%", position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 9999, borderTopWidth: 1, borderTopColor: "#ff0000" }, debugLogHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }, debugLogText: { color: "#00ff00", fontSize: 12, marginBottom: 2, fontFamily: "monospace" }, clearButton: { backgroundColor: "#ff0000", paddingHorizontal: 8, paddingVertical: 2, borderRadius: nativeDefault.radii.xs }, clearButtonText: { color: "#ffffff", fontSize: 10, fontWeight: "bold" } };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: "#ff0000", paddingHorizontal: 8, paddingVertical: 2, borderRadius: nativeDefault.radii.xs };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/DebugLogView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DebugLogView() {
  const cResult = debugLogHeader(576).c(47);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(logs) {
      return logs.logs;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  debugLogHeader = closure_7(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function h(clearLogs) {
      return clearLogs.clearLogs;
    };
    cResult[1] = fn2;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[1];
  }
  const tmp5Result = closure_7(tmp6);
  dependencyMap = tmp5Result;
  let debugLogText = closure_11();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DevSettingsStore];
    const fn3 = function p() {
      return DevSettingsStore.get("shop_show_debug_overlay");
    };
    cResult[2] = items;
    cResult[3] = fn3;
    let tmp9 = fn3;
    let tmp8 = items;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const obj = debugLogHeader(576);
  const stateFromStores = debugLogHeader(504).useStateFromStores(tmp8, tmp9);
  if (cResult[4] === debugLogHeader.length) {
    if (cResult[5] === stateFromStores) {
      let tmp12 = cResult[6];
      let tmp13 = cResult[7];
    }
    const effect = debugLogText.useEffect(tmp12, tmp13);
    if (stateFromStores) {
      if (0 !== debugLogHeader.length) {
        if (cResult[8] === tmp5Result) {
          if (cResult[9] === debugLogHeader) {
            if (cResult[10] === debugLogText.clearButton) {
              if (cResult[11] === debugLogText.clearButtonText) {
                if (cResult[12] === debugLogText.debugLogContainer) {
                  if (cResult[13] === debugLogText.debugLogHeader) {
                    if (cResult[14] === debugLogText.debugLogText) {
                      if (cResult[39] === cResult[15]) {
                        if (cResult[40] === tmp18) {
                          let tmp46 = cResult[41];
                        }
                        if (cResult[42] === tmp17) {
                          if (cResult[43] === tmp19) {
                            if (cResult[44] === tmp20) {
                              if (cResult[45] === tmp46) {
                                let tmp49 = cResult[46];
                              }
                              return tmp49;
                            }
                          }
                        }
                        const obj2 = { style: tmp19, children: null };
                        const items1 = [tmp20, tmp46];
                        obj2.children = items1;
                        const tmp51 = closure_9(tmp17, obj2);
                        cResult[42] = tmp17;
                        cResult[43] = tmp19;
                        cResult[44] = tmp20;
                        cResult[45] = tmp46;
                        cResult[46] = tmp51;
                        tmp49 = tmp51;
                      }
                      const obj3 = { children: cResult[17] };
                      const tmp48 = closure_10(cResult[15], obj3);
                      cResult[39] = cResult[15];
                      cResult[40] = cResult[17];
                      cResult[41] = tmp48;
                      tmp46 = tmp48;
                    }
                  }
                }
              }
            }
          }
        }
        const _Math = Math;
        let num6 = 10;
        const substr = debugLogHeader.slice(Math.max(0, debugLogHeader.length - 10));
        if (cResult[20] !== tmp5Result) {
          function handleClear() {
            closure_1();
          }
          cResult[20] = tmp5Result;
          cResult[21] = handleClear;
          let tmp21 = handleClear;
        } else {
          tmp21 = cResult[21];
        }
        const debugLogContainer = debugLogText.debugLogContainer;
        if (cResult[22] !== debugLogText.debugLogText) {
          const obj4 = {};
          const merged = Object.assign(debugLogText.debugLogText);
          obj4.color = "#ffffff";
          cResult[22] = debugLogText.debugLogText;
          cResult[23] = obj4;
          let tmp23 = obj4;
        } else {
          tmp23 = cResult[23];
        }
        if (cResult[24] === debugLogHeader.length) {
          if (cResult[25] === tmp23) {
            let tmp26 = cResult[26];
          }
          if (cResult[27] !== debugLogText.clearButtonText) {
            const obj5 = { variant: "text-xs/bold", style: debugLogText.clearButtonText, children: "Clear" };
            const tmp31 = closure_10(tmp(5088).Text, obj5);
            cResult[27] = debugLogText.clearButtonText;
            cResult[28] = tmp31;
            let tmp29 = tmp31;
          } else {
            tmp29 = cResult[28];
          }
          if (cResult[29] === tmp21) {
            if (cResult[30] === debugLogText.clearButton) {
              if (cResult[31] === tmp29) {
                let tmp32 = cResult[32];
              }
              if (cResult[33] === debugLogText.debugLogHeader) {
                if (cResult[34] === tmp26) {
                  if (cResult[35] === tmp32) {
                    let tmp36 = cResult[36];
                  }
                  if (cResult[37] !== debugLogText.debugLogText) {
                    class W {
                      constructor(arg0, arg1) {
                        obj = { variant: "text-xs/normal", style: closure_2.debugLogText, children: arg0 };
                        return jsx(closure_0(closure_1[10]).Text, obj, arg1);
                      }
                    }
                    cResult[37] = debugLogText.debugLogText;
                    cResult[38] = W;
                  } else {
                    class W {
                      constructor(arg0, arg1) {
                        obj = { variant: "text-xs/normal", style: closure_2.debugLogText, children: arg0 };
                        return jsx(closure_0(closure_1[10]).Text, obj, arg1);
                      }
                    }
                  }
                  const mapped = substr.map(W);
                  cResult[8] = tmp5Result;
                  cResult[9] = debugLogHeader;
                  cResult[num6] = debugLogText.clearButton;
                  cResult[11] = debugLogText.clearButtonText;
                  ({ debugLogContainer: tmp3[12], debugLogHeader } = debugLogText);
                  cResult[13] = debugLogHeader;
                  debugLogText = debugLogText.debugLogText;
                  cResult[14] = debugLogText;
                  cResult[15] = closure_4;
                  cResult[16] = tmp22;
                  cResult[17] = mapped;
                  cResult[18] = debugLogContainer;
                  num6 = 19;
                  cResult[19] = tmp36;
                  class C {
                    constructor() {
                      tmp = 0 === closure_0.length && closure_3;
                      if (tmp) {
                        tmp2 = addDebugLog;
                        str = "Debug log initialized";
                        tmp3 = addDebugLog("Debug log initialized");
                      }
                      return;
                    }
                  }
                }
              }
              const obj6 = { style: debugLogText.debugLogHeader, children: null };
              const items2 = [tmp26, tmp32];
              obj6.children = items2;
              const tmp38 = closure_9(tmp22, obj6);
              cResult[33] = debugLogText.debugLogHeader;
              cResult[34] = tmp26;
              cResult[35] = tmp32;
              cResult[36] = tmp38;
              tmp36 = tmp38;
            }
          }
          const obj7 = { onPress: tmp21, style: debugLogText.clearButton, children: tmp29 };
          const tmp35 = closure_10(closure_5, obj7);
          cResult[29] = tmp21;
          cResult[30] = debugLogText.clearButton;
          cResult[31] = tmp29;
          cResult[32] = tmp35;
          tmp32 = tmp35;
        }
        const obj8 = { variant: "text-xs/normal", style: tmp23, children: null };
        const items3 = ["Debug Log (", debugLogHeader.length, " entries)"];
        obj8.children = items3;
        const tmp28 = closure_9(tmp(5088).Text, obj8);
        cResult[24] = debugLogHeader.length;
        cResult[25] = tmp23;
        cResult[26] = tmp28;
        tmp26 = tmp28;
      }
    }
    return null;
  }
  class C {
    constructor() {
      tmp = 0 === closure_0.length && closure_3;
      if (tmp) {
        tmp2 = addDebugLog;
        str = "Debug log initialized";
        tmp3 = addDebugLog("Debug log initialized");
      }
      return;
    }
  }
  const items4 = [debugLogHeader.length, stateFromStores];
  cResult[4] = debugLogHeader.length;
  cResult[5] = stateFromStores;
  cResult[6] = C;
  cResult[7] = items4;
  tmp13 = items4;
  tmp12 = C;
  const tmpResult = debugLogHeader(504);
}) : (function DebugLogView() {
  const arr = closure_7((logs) => logs.logs);
  dependencyMap = closure_7((clearLogs) => clearLogs.clearLogs);
  let tmp = closure_11();
  noop = tmp;
  const items = [DevSettingsStore];
  const stateFromStores = arr(504).useStateFromStores(items, () => DevSettingsStore.get("shop_show_debug_overlay"));
  const items1 = [arr.length, stateFromStores];
  const effect = noop.useEffect(() => {
    if (tmp) {
      closure_2_8("Debug log initialized");
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
      const items3 = [closure_9(tmp2(5088).Text, obj4), ];
      const obj6 = {
        onPress: function handleClear() {
              closure_1();
            },
        style: tmp.clearButton,
        children: null
      };
      const obj7 = { variant: "text-xs/bold", style: tmp.clearButtonText, children: "Clear" };
      obj6.children = closure_10(tmp2(5088).Text, obj7);
      items3[1] = closure_10(closure_5, obj6);
      obj3.children = items3;
      const items4 = [closure_9(stateFromStores, obj3), ];
      const obj8 = { children: substr.map((children, index) => collapsed(Text_Text.Text, { variant: "text-xs/normal", style: debugLogText.debugLogText, children }, index)) };
      items4[1] = closure_10(closure_4, obj8);
      obj2.children = items4;
      return closure_9(stateFromStores, obj2);
    }
  }
  return null;
});