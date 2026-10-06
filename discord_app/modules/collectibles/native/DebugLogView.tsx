// === Module 15787: DebugLogView ===

// Module 15787 (DebugLogView)
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import DevSettingsStore from "DevSettingsStore" /* 4895 */;
import CollectiblesDebugStore from "CollectiblesDebugStore" /* 7080 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c3;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let react = react_mod;
({ View: c3, ScrollView: closure_4, TouchableOpacity: hasOwnProperty } = react_native);
({ useCollectiblesDebugStore: metroImportDefault, addDebugLog: metroImportAll } = CollectiblesDebugStore);
({ jsxs: c9, jsx: c10 } = Fragment);
let obj = { debugLogContainer: { backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 10, maxHeight: 350, width: "100%", position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 9999, borderTopWidth: 1, borderTopColor: "#ff0000" }, debugLogHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }, debugLogText: { color: "#00ff00", fontSize: 12, marginBottom: 2, fontFamily: "monospace" }, clearButton: obj2, clearButtonText: { color: "#ffffff", fontSize: 10, fontWeight: "bold" } };
obj2 = { backgroundColor: "#ff0000", paddingHorizontal: 8, paddingVertical: 2, borderRadius: nativeDefault.radii.xs };
let closure_11 = createStyles.createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let arr;
  let closure_1;
  let debugLogText;
  let first;
  let items1;
  let items2;
  let tmp10;
  let tmp6;
  let tmp9;
  let tmp = arr;
  let obj = arr(576);
  const cResult = obj.c(47);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(logs) {
      return logs.logs;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  arr = closure_7(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function x(clearLogs) {
      return clearLogs.clearLogs;
    };
    cResult[1] = fn2;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[1];
  }
  const tmp5Result = closure_7(tmp6);
  dependencyMap = tmp5Result;
  const tmp8 = closure_11();
  react = tmp8;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DevSettingsStore];
    const fn3 = function p() {
      return DevSettingsStore.get("shop_show_debug_overlay");
    };
    cResult[2] = items;
    cResult[3] = fn3;
    tmp10 = fn3;
    tmp9 = items;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === arr.length) {
    let tmp13;
    let tmp14;
    if (cResult[5] === stateFromStores) {
      tmp13 = cResult[6];
      tmp14 = cResult[7];
    }
    const effect = react.useEffect(tmp13, tmp14);
    if (stateFromStores) {
      if (0 !== arr.length) {
        if (cResult[8] === tmp5Result) {
          if (cResult[9] === arr) {
            if (cResult[10] === tmp8.clearButton) {
              if (cResult[11] === tmp8.clearButtonText) {
                if (cResult[12] === tmp8.debugLogContainer) {
                  if (cResult[13] === tmp8.debugLogHeader) {
                    if (cResult[39] === tmp17) {
                      let tmp38;
                      if (cResult[40] === tmp19) {
                        tmp38 = cResult[41];
                      }
                      if (cResult[42] === tmp18) {
                        if (cResult[43] === tmp20) {
                          if (cResult[44] === tmp21) {
                            let tmp41;
                            if (cResult[45] === tmp38) {
                              tmp41 = cResult[46];
                            }
                            return tmp41;
                          }
                        }
                      }
                      const obj2 = { style: tmp20, children: items1 };
                      items1 = [tmp21, tmp38];
                      const tmp43 = closure_9(tmp18, obj2);
                      cResult[42] = tmp18;
                      cResult[43] = tmp20;
                      cResult[44] = tmp21;
                      cResult[45] = tmp38;
                      cResult[46] = tmp43;
                      tmp41 = tmp43;
                    }
                    const obj3 = { children: tmp19 };
                    const tmp40 = closure_10(tmp17, obj3);
                    cResult[39] = tmp17;
                    cResult[40] = tmp19;
                    cResult[41] = tmp40;
                    tmp38 = tmp40;
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
              closure_1();
            }
          }
          cResult[20] = tmp5Result;
          cResult[21] = I;
        } else {
          class I {
            constructor() {
              closure_1();
            }
          }
        }
        const debugLogContainer = tmp8.debugLogContainer;
        if (cResult[22] !== tmp8.debugLogText) {
          class I {
            constructor() {
              closure_1();
            }
          }
          const merged = Object.assign(tmp8.debugLogText);
          tmp26.color = "#ffffff";
          cResult[22] = tmp8.debugLogText;
          cResult[23] = tmp26;
        } else {
          class I {
            constructor() {
              closure_1();
            }
          }
        }
        if (cResult[24] === arr.length) {
          class I {
            constructor() {
              closure_1();
            }
          }
          if (cResult[27] !== tmp8.clearButtonText) {
            class I {
              constructor() {
                closure_1();
              }
            }
            const obj4 = { variant: "text-xs/bold", style: tmp8.clearButtonText, children: "Clear" };
            cResult[27] = tmp8.clearButtonText;
            cResult[28] = closure_10(tmp(4892).Text, obj4);
            const tmp33 = closure_10(tmp(4892).Text, obj4);
          } else {
            class I {
              constructor() {
                closure_1();
              }
            }
          }
          if (cResult[29] === I) {
            class I {
              constructor() {
                closure_1();
              }
            }
          }
          const obj5 = { onPress: I, style: tmp8.clearButton, children: tmp32 };
          cResult[29] = I;
          cResult[30] = tmp8.clearButton;
          cResult[31] = tmp32;
          cResult[32] = closure_10(closure_5, obj5);
          const tmp37 = closure_10(closure_5, obj5);
        }
        const obj6 = { variant: "text-xs/normal", style: tmp26, children: items2 };
        items2 = ["Debug Log (", arr.length, " entries)"];
        cResult[24] = arr.length;
        cResult[25] = tmp26;
        cResult[26] = closure_9(tmp(4892).Text, obj6);
        const tmp31 = closure_9(tmp(4892).Text, obj6);
      }
    }
    return null;
  }
  class C {
    constructor() {
      const tmp = 0 === arr.length && stateFromStores;
      if (tmp) {
        metroImportAll("Debug log initialized");
      }
    }
  }
  const items3 = [arr.length, stateFromStores];
  cResult[4] = arr.length;
  cResult[5] = stateFromStores;
  cResult[6] = C;
  cResult[7] = items3;
  tmp14 = items3;
  tmp13 = C;
}) : (() => {
  let closure_1;
  let debugLogText;
  let items2;
  let items3;
  let items4;
  let obj5;
  let obj7;
  const arr = closure_7((logs) => logs.logs);
  dependencyMap = closure_7((clearLogs) => clearLogs.clearLogs);
  let tmp = closure_11();
  react = tmp;
  let obj = arr(504);
  const items = [DevSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => DevSettingsStore.get("shop_show_debug_overlay"));
  const items1 = [arr.length, stateFromStores];
  const effect = react.useEffect(() => {
    const tmp = 0 === arr.length && stateFromStores;
    if (tmp) {
      metroImportAll("Debug log initialized");
    }
  }, items1);
  if (stateFromStores) {
    if (0 !== arr.length) {
      const _Math = Math;
      const substr = arr.slice(Math.max(0, arr.length - 10));
      const obj4 = { variant: "text-xs/normal", style: obj5, children: items2 };
      const obj2 = { style: tmp.debugLogContainer, children: items4 };
      const obj3 = { style: tmp.debugLogHeader, children: items3 };
      obj5 = { color: "#ffffff" };
      const Text = tmp2(4892).Text;
      const merged = Object.assign(tmp.debugLogText);
      items2 = ["Debug Log (", arr.length, " entries)"];
      items3 = [closure_9(Text, obj4), ];
      const obj6 = {
        onPress() {
              closure_1();
            },
        style: tmp.clearButton,
        children: closure_10(arr(4892).Text, obj7)
      };
      obj7 = { variant: "text-xs/bold", style: tmp.clearButtonText, children: "Clear" };
      items3[1] = closure_10(closure_5, obj6);
      items4 = [closure_9(stateFromStores, obj3), ];
      const obj8 = {
        children: substr.map((children, index) => {
              const obj = { variant: "text-xs/normal", style: debugLogText.debugLogText, children };
              return authStore(Text_Text.Text, obj, index);
            })
      };
      items4[1] = closure_10(closure_4, obj8);
      return closure_9(stateFromStores, obj2);
    }
  }
  return null;
});
const result = size.fileFinishedImporting("modules/collectibles/native/DebugLogView.tsx");

export default tmp5;