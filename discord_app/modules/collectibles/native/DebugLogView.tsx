// === Module 15747: DebugLogView ===

// Module 15747 (DebugLogView)
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import noop from "module_19" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 4889 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4, TouchableOpacity: hasOwnProperty } = get_ActivityIndicator);
const CollectiblesDebugStore = fn(7067);
({ useCollectiblesDebugStore: closure_7, addDebugLog: closure_8 } = CollectiblesDebugStore);
const jsxProd = fn(21);
({ jsxs: closure_9, jsx: c10 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { debugLogContainer: { backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, maxHeight: 350, width: "100%", position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 9999, borderTopWidth: 1, borderTopColor: "#ff0000" }, debugLogHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }, debugLogText: { color: "#00ff00", fontSize: 12, marginBottom: 2, fontFamily: "monospace" }, clearButton: { backgroundColor: "#ff0000", paddingHorizontal: 8, paddingVertical: 2, borderRadius: nativeDefault.radii.xs }, clearButtonText: { color: "#ffffff", fontSize: 10, fontWeight: "bold" } };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: "#ff0000", paddingHorizontal: 8, paddingVertical: 2, borderRadius: nativeDefault.radii.xs };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/DebugLogView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = arr(576).c(47);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(logs) {
      return logs.logs;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  arr = closure_7(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function x(clearLogs) {
      return clearLogs.clearLogs;
    };
    cResult[1] = fn2;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[1];
  }
  const tmp5Result = closure_7(tmp6);
  dependencyMap = tmp5Result;
  const tmp8 = closure_11();
  noop = tmp8;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DevSettingsStore];
    const fn3 = function p() {
      return DevSettingsStore.get("shop_show_debug_overlay");
    };
    cResult[2] = items;
    cResult[3] = fn3;
    let tmp10 = fn3;
    let tmp9 = items;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const obj = arr(576);
  const stateFromStores = arr(504).useStateFromStores(tmp9, tmp10);
  if (cResult[4] === arr.length) {
    if (cResult[5] === stateFromStores) {
      let tmp13 = cResult[6];
      let tmp14 = cResult[7];
    }
    const effect = noop.useEffect(tmp13, tmp14);
    if (stateFromStores) {
      if (0 !== arr.length) {
        if (cResult[8] === tmp5Result) {
          if (cResult[9] === arr) {
            if (cResult[10] === tmp8.clearButton) {
              if (cResult[11] === tmp8.clearButtonText) {
                if (cResult[12] === tmp8.debugLogContainer) {
                  if (cResult[13] === tmp8.debugLogHeader) {
                    if (cResult[14] === tmp8.debugLogText) {
                      if (cResult[39] === cResult[15]) {
                        if (cResult[40] === tmp19) {
                          let tmp38 = cResult[41];
                        }
                        if (cResult[42] === tmp18) {
                          if (cResult[43] === tmp20) {
                            if (cResult[44] === tmp21) {
                              if (cResult[45] === tmp38) {
                                let tmp41 = cResult[46];
                              }
                              return tmp41;
                            }
                          }
                        }
                        const obj2 = { style: tmp20, children: null };
                        const items1 = [tmp21, tmp38];
                        obj2.children = items1;
                        const tmp43 = closure_9(tmp18, obj2);
                        cResult[42] = tmp18;
                        cResult[43] = tmp20;
                        cResult[44] = tmp21;
                        cResult[45] = tmp38;
                        cResult[46] = tmp43;
                        tmp41 = tmp43;
                      }
                      const obj3 = { children: cResult[17] };
                      const tmp40 = closure_10(cResult[15], obj3);
                      cResult[39] = cResult[15];
                      cResult[40] = cResult[17];
                      cResult[41] = tmp40;
                      tmp38 = tmp40;
                    }
                  }
                }
              }
            }
          }
        }
        const _Math = Math;
        const substr = arr.slice(Math.max(0, arr.length - 10));
        if (cResult[20] !== tmp5Result) {
          class I {
            constructor() {
              tmp = closure_1();
              return;
            }
          }
          cResult[20] = tmp5Result;
          cResult[21] = I;
        } else {
          class I {
            constructor() {
              tmp = closure_1();
              return;
            }
          }
        }
        const debugLogContainer = tmp8.debugLogContainer;
        if (cResult[22] !== tmp8.debugLogText) {
          class I {
            constructor() {
              tmp = closure_1();
              return;
            }
          }
          const merged = Object.assign(tmp8.debugLogText);
          tmp26.color = "#ffffff";
          cResult[22] = tmp8.debugLogText;
          cResult[23] = tmp26;
        } else {
          class I {
            constructor() {
              tmp = closure_1();
              return;
            }
          }
        }
        if (cResult[24] === arr.length) {
          class I {
            constructor() {
              tmp = closure_1();
              return;
            }
          }
          if (cResult[27] !== tmp8.clearButtonText) {
            class I {
              constructor() {
                tmp = closure_1();
                return;
              }
            }
            const obj4 = { variant: "text-xs/bold", style: tmp8.clearButtonText, children: "Clear" };
            const tmp33 = closure_10(tmp(4886).Text, obj4);
            cResult[27] = tmp8.clearButtonText;
            cResult[28] = tmp33;
          } else {
            class I {
              constructor() {
                tmp = closure_1();
                return;
              }
            }
          }
          if (cResult[29] === I) {
            class I {
              constructor() {
                tmp = closure_1();
                return;
              }
            }
          }
          const obj5 = { onPress: I, style: tmp8.clearButton, children: tmp32 };
          const tmp37 = closure_10(closure_5, obj5);
          cResult[29] = I;
          cResult[30] = tmp8.clearButton;
          cResult[31] = tmp32;
          cResult[32] = tmp37;
        }
        const obj6 = { variant: "text-xs/normal", style: tmp26, children: null };
        const items2 = ["Debug Log (", arr.length, " entries)"];
        obj6.children = items2;
        const tmp31 = closure_9(tmp(4886).Text, obj6);
        cResult[24] = arr.length;
        cResult[25] = tmp26;
        cResult[26] = tmp31;
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
  const items3 = [arr.length, stateFromStores];
  cResult[4] = arr.length;
  cResult[5] = stateFromStores;
  cResult[6] = C;
  cResult[7] = items3;
  tmp14 = items3;
  tmp13 = C;
  const tmpResult = arr(504);
}) : (() => {
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
      const items3 = [closure_9(tmp2(4886).Text, obj4), ];
      const obj6 = {
        onPress() {
              closure_1();
            },
        style: tmp.clearButton,
        children: null
      };
      const obj7 = { variant: "text-xs/bold", style: tmp.clearButtonText, children: "Clear" };
      obj6.children = closure_10(tmp2(4886).Text, obj7);
      items3[1] = closure_10(closure_5, obj6);
      obj3.children = items3;
      const items4 = [closure_9(stateFromStores, obj3), ];
      const obj8 = { children: substr.map((children, index) => v65535(Text_Text.Text, { variant: "text-xs/normal", style: debugLogText.debugLogText, children }, index)) };
      items4[1] = closure_10(closure_4, obj8);
      obj2.children = items4;
      return closure_9(stateFromStores, obj2);
    }
  }
  return null;
});