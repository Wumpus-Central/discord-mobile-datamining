// discord_app/modules/conjure/debug/native/ConjureDebugLogsTab.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl6 from "../../../../intl/index.native.tsx";
import _modDef3753 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import Card_Card from "../../../../design/components/Card/native/Card.native.tsx";
import ChevronSmallRightIcon2 from "../../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import ChevronSmallDownIcon from "../../../../design/components/Icon/native/redesign/generated/ChevronSmallDownIcon.tsx";
import ConjureDebugJson from "../ConjureDebugJson.tsx";
import ConjureDebugFormat from "../ConjureDebugFormat.tsx";
import ConjureDebugLabels from "../ConjureDebugLabels.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let item, projectId, set;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function keyOf(key) {
  return String(key.key);
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  list: obj2,
  header: obj3,
  row: obj4,
  rowHead: obj5,
  badge: { textTransform: "uppercase" },
  jsonToggle: obj6,
};
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 };
obj4 = { gap: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8 };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, alignSelf: "flex-start" };
let closure_10 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let ChevronSmallRightIcon;
        let entry;
        let expanded;
        let intl;
        let intl2;
        let items;
        let items2;
        let items4;
        let logKey;
        let obj11;
        let obj6;
        let onToggle;
        let row;
        let rowHead;
        let showSource;
        let tmp12;
        let tmp5;
        let tmp7;
        let tmp9;
        const obj = react2;
        const cResult = obj.c(38);
        ({ entry, logKey } = arg0);
        ({ showSource, expanded, onToggle } = arg0);
        const tmp4 = closure_10();
        if (cResult[0] !== entry.message) {
          const tmpResult = ConjureDebugJson;
          const extractLogJsonResult = tmpResult.extractLogJson(entry.message);
          cResult[0] = entry.message;
          cResult[1] = extractLogJsonResult;
          tmp5 = extractLogJsonResult;
        } else {
          tmp5 = cResult[1];
        }
        let str = "text-default";
        if ("error" === entry.level) {
          str = "text-feedback-critical";
        }
        if (expanded) {
          ChevronSmallRightIcon = ChevronSmallDownIcon.ChevronSmallDownIcon;
        } else {
          ChevronSmallRightIcon = ChevronSmallRightIcon2.ChevronSmallRightIcon;
        }
        ({ row, rowHead } = tmp4);
        if (cResult[2] !== entry.ts) {
          const tmpResult2 = ConjureDebugFormat;
          const formatClockTimeResult = tmpResult2.formatClockTime(entry.ts);
          cResult[2] = entry.ts;
          cResult[3] = formatClockTimeResult;
          tmp7 = formatClockTimeResult;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== tmp7) {
          const obj2 = { variant: "text-xs/normal", color: "text-subtle", children: tmp7 };
          const tmp11 = metroImportDefault(Text_Text.Text, obj2);
          cResult[4] = tmp7;
          cResult[5] = tmp11;
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] !== entry.level) {
          const level = entry.level;
          let str2 = "text-feedback-critical";
          if ("error" !== level) {
            let str3 = "text-muted";
            if ("warn" === level) {
              str3 = "text-feedback-warning";
            }
            str2 = str3;
          }
          cResult[6] = entry.level;
          cResult[7] = str2;
          tmp12 = str2;
        } else {
          tmp12 = cResult[7];
        }
        if (cResult[8] === entry.level) {
          if (cResult[9] === tmp4.badge) {
            let tmp13;
            if (cResult[10] === tmp12) {
              tmp13 = cResult[11];
            }
            if (cResult[12] === entry.source) {
              if (cResult[13] === showSource) {
                let tmp15;
                if (cResult[14] === tmp4.badge) {
                  tmp15 = cResult[15];
                }
                if (cResult[16] === entry.kind) {
                  let tmp19;
                  if (cResult[17] === tmp4.badge) {
                    tmp19 = cResult[18];
                  }
                  if (cResult[19] === tmp4.rowHead) {
                    if (cResult[20] === tmp9) {
                      if (cResult[21] === tmp13) {
                        if (cResult[22] === tmp15) {
                          let tmp23;
                          let tmp31Result;
                          if (cResult[23] === tmp19) {
                            tmp23 = cResult[24];
                          }
                          if (cResult[25] === ChevronSmallRightIcon) {
                            if (cResult[26] === entry.message) {
                              if (cResult[27] === expanded) {
                                if (cResult[28] === tmp5) {
                                  if (cResult[29] === logKey) {
                                    if (cResult[30] === str) {
                                      if (cResult[31] === onToggle) {
                                        let tmp27;
                                        if (cResult[32] === tmp4.jsonToggle) {
                                          tmp27 = cResult[33];
                                        }
                                        if (cResult[34] === tmp4.row) {
                                          if (cResult[35] === tmp23) {
                                            let tmp39;
                                            if (cResult[36] === tmp27) {
                                              tmp39 = cResult[37];
                                            }
                                            return tmp39;
                                          }
                                        }
                                        const obj3 = { style: row, children: items };
                                        items = [tmp23, tmp27];
                                        const tmp42 = metroImportAll(View, obj3);
                                        cResult[34] = tmp4.row;
                                        cResult[35] = tmp23;
                                        cResult[36] = tmp27;
                                        cResult[37] = tmp42;
                                        tmp39 = tmp42;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          if (null != tmp5) {
                            let kUhyUv;
                            let tmp33 = null;
                            if ("" !== tmp5.prefix) {
                              const obj4 = {
                                variant: "text-xs/normal",
                                color: str,
                                selectable: true,
                                children: tmp5.prefix,
                              };
                              tmp33 = metroImportDefault(Text_Text.Text, obj4);
                            }
                            const items1 = [tmp33, ,];
                            const obj5 = {
                              style: tmp4.jsonToggle,
                              accessibilityRole: "button",
                              accessibilityState: obj6,
                              accessibilityLabel: intl2.string(_modDef3753["9CTzyV"]),
                              onPress() {
                                return onToggle(logKey);
                              },
                              children: items2,
                            };
                            obj6 = { expanded };
                            const PressableOpacity = Pressables.PressableOpacity;
                            intl2 = intl6.intl;
                            const obj7 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
                            items2 = [metroImportDefault(ChevronSmallRightIcon, obj7)];
                            const items3 = [tmp5.marker, " "];
                            const Text2 = Text_Text.Text;
                            const intl3 = intl6.intl;
                            const formatToPlainString = intl3.formatToPlainString;
                            if ("[\u2026]" === tmp5.marker) {
                              kUhyUv = _modDef3753.kUhyUv;
                            } else {
                              kUhyUv = _modDef3753["N+fphl"];
                            }
                            const obj8 = { variant: "text-xs/medium", color: "text-muted", children: items3 };
                            const obj9 = { count: tmp5.size };
                            items3[2] = formatToPlainString(kUhyUv, obj9);
                            items2[1] = metroImportAll(Text2, obj8);
                            items1[1] = metroImportAll(PressableOpacity, obj5);
                            let tmp36Result = null;
                            if (expanded) {
                              const obj10 = { variant: "primary", children: metroImportDefault(Text_Text.Text, obj11) };
                              const Card = Card_Card.Card;
                              obj11 = {
                                variant: "text-xs/normal",
                                color: str,
                                selectable: true,
                                children: tmp5.pretty,
                              };
                              tmp36Result = metroImportDefault(Card, obj10);
                            }
                            const obj12 = { children: items1 };
                            items1[2] = tmp36Result;
                            tmp31Result = metroImportAll(React4, obj12);
                          } else {
                            const obj13 = {
                              variant: "text-xs/normal",
                              color: str,
                              selectable: true,
                              children: entry.message,
                            };
                            tmp31Result = metroImportDefault(Text_Text.Text, obj13);
                          }
                          cResult[25] = ChevronSmallRightIcon;
                          cResult[26] = entry.message;
                          cResult[27] = expanded;
                          cResult[28] = tmp5;
                          cResult[29] = logKey;
                          cResult[30] = str;
                          cResult[31] = onToggle;
                          cResult[32] = tmp4.jsonToggle;
                          cResult[33] = tmp31Result;
                          tmp27 = tmp31Result;
                        }
                      }
                    }
                  }
                  const obj14 = { style: rowHead, children: items4 };
                  items4 = [tmp9, tmp13, tmp15, tmp19];
                  const tmp26 = metroImportAll(View, obj14);
                  cResult[19] = tmp4.rowHead;
                  cResult[20] = tmp9;
                  cResult[21] = tmp13;
                  cResult[22] = tmp15;
                  cResult[23] = tmp19;
                  cResult[24] = tmp26;
                  tmp23 = tmp26;
                }
                let tmp20 = null;
                if (null != entry.kind) {
                  const obj15 = {
                    variant: "text-xxs/semibold",
                    color: "text-feedback-critical",
                    style: tmp4.badge,
                    children: intl.string(_modDef3753.TrC9c8),
                  };
                  const Text = Text_Text.Text;
                  intl = intl6.intl;
                  tmp20 = metroImportDefault(Text, obj15);
                }
                cResult[16] = entry.kind;
                cResult[17] = tmp4.badge;
                cResult[18] = tmp20;
                tmp19 = tmp20;
              }
            }
            let tmp17 = null;
            if (showSource) {
              tmp17 = null;
              if (null != entry.source) {
                const obj16 = {
                  variant: "text-xxs/semibold",
                  color: "text-subtle",
                  style: tmp4.badge,
                  children: entry.source,
                };
                tmp17 = metroImportDefault(Text_Text.Text, obj16);
              }
            }
            cResult[12] = entry.source;
            cResult[13] = showSource;
            cResult[14] = tmp4.badge;
            cResult[15] = tmp17;
            tmp15 = tmp17;
          }
        }
        const obj17 = { variant: "text-xxs/semibold", color: tmp12, style: tmp4.badge, children: entry.level };
        const tmp14 = metroImportDefault(Text_Text.Text, obj17);
        cResult[8] = entry.level;
        cResult[9] = tmp4.badge;
        cResult[10] = tmp12;
        cResult[11] = tmp14;
        tmp13 = tmp14;
      }
    : (entry) => {
        let ChevronSmallRightIcon;
        let expanded;
        let intl;
        let intl2;
        let items1;
        let items2;
        let items4;
        let obj14;
        let obj9;
        let tmp6;
        let tmp6Result;
        let tmp9Result7;
        entry = entry.entry;
        ({ logKey: importDefault, expanded, onToggle: dependencyMap } = entry);
        const showSource = entry.showSource;
        const tmp = closure_10();
        const items = [entry.message];
        const memo = react.useMemo(() => {
          const obj = ConjureDebugJson;
          return obj.extractLogJson(entry.message);
        }, items);
        let str = "text-default";
        if ("error" === entry.level) {
          str = "text-feedback-critical";
        }
        if (expanded) {
          ChevronSmallRightIcon = tmp3(10857).ChevronSmallDownIcon;
          tmp6 = tmp3;
        } else {
          ChevronSmallRightIcon = tmp3(6715).ChevronSmallRightIcon;
          tmp6 = tmp3;
        }
        let obj = { style: tmp.row, children: items2 };
        const obj2 = { style: tmp.rowHead, children: items1 };
        const obj3 = {
          variant: "text-xs/normal",
          color: "text-subtle",
          children: tmp6Result.formatClockTime(entry.ts),
        };
        const Text = tmp6(4892).Text;
        tmp6Result = tmp6(16777);
        items1 = [closure_7(Text, obj3), , ,];
        const level = entry.level;
        let str2 = "text-feedback-critical";
        const Text2 = tmp6(4892).Text;
        if ("error" !== level) {
          let str3 = "text-muted";
          if ("warn" === level) {
            str3 = "text-feedback-warning";
          }
          str2 = str3;
        }
        const obj4 = { variant: "text-xxs/semibold", color: str2, style: tmp.badge, children: entry.level };
        items1[1] = closure_7(Text2, obj4);
        let tmp9Result = null;
        if (showSource) {
          tmp9Result = null;
          if (null != entry.source) {
            const obj5 = {
              variant: "text-xxs/semibold",
              color: "text-subtle",
              style: tmp.badge,
              children: entry.source,
            };
            tmp9Result = closure_7(tmp6(4892).Text, obj5);
          }
        }
        items1[2] = tmp9Result;
        let tmp9Result4 = null;
        if (null != entry.kind) {
          const obj6 = {
            variant: "text-xxs/semibold",
            color: "text-feedback-critical",
            style: tmp.badge,
            children: intl.string(_modDef3753.TrC9c8),
          };
          const Text3 = tmp6(4892).Text;
          intl = tmp6(1126).intl;
          tmp9Result4 = closure_7(Text3, obj6);
        }
        items1[3] = tmp9Result4;
        items2 = [closure_8(View, obj2)];
        if (null != memo) {
          let kUhyUv;
          let tmp9Result5 = null;
          if ("" !== memo.prefix) {
            const obj7 = { variant: "text-xs/normal", color: str, selectable: true, children: memo.prefix };
            tmp9Result5 = closure_7(tmp6(4892).Text, obj7);
          }
          const items3 = [tmp9Result5, ,];
          const obj8 = {
            style: tmp.jsonToggle,
            accessibilityRole: "button",
            accessibilityState: obj9,
            accessibilityLabel: intl2.string(_modDef3753["9CTzyV"]),
            onPress() {
              return dependencyMap(importDefault);
            },
            children: items4,
          };
          obj9 = { expanded };
          const PressableOpacity = tmp6(5916).PressableOpacity;
          intl2 = tmp6(1126).intl;
          const obj10 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
          items4 = [closure_7(ChevronSmallRightIcon, obj10)];
          const items5 = [memo.marker, " "];
          const Text4 = tmp6(4892).Text;
          const intl3 = tmp6(1126).intl;
          const formatToPlainString = intl3.formatToPlainString;
          if ("[\u2026]" === memo.marker) {
            kUhyUv = _modDef3753.kUhyUv;
          } else {
            kUhyUv = _modDef3753["N+fphl"];
          }
          const obj11 = { variant: "text-xs/medium", color: "text-muted", children: items5 };
          const obj12 = { count: memo.size };
          items5[2] = formatToPlainString(kUhyUv, obj12);
          items4[1] = closure_8(Text4, obj11);
          items3[1] = closure_8(PressableOpacity, obj8);
          let tmp9Result6 = null;
          if (expanded) {
            const obj13 = { variant: "primary", children: closure_7(tmp6(4892).Text, obj14) };
            const Card = tmp6(6002).Card;
            obj14 = { variant: "text-xs/normal", color: str, selectable: true, children: memo.pretty };
            tmp9Result6 = closure_7(Card, obj13);
          }
          const obj15 = { children: items3 };
          items3[2] = tmp9Result6;
          tmp9Result7 = closure_8(closure_9, obj15);
        } else {
          const obj16 = { variant: "text-xs/normal", color: str, selectable: true, children: entry.message };
          tmp9Result7 = closure_7(tmp6(4892).Text, obj16);
        }
        items2[1] = tmp9Result7;
        return closure_8(View, obj);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (projectId) => {
      let closure_2;
      let closure_3;
      let first;
      let first1;
      let onToggle;
      let showSource;
      let tmp12;
      let tmp7;
      let tmp8;
      let tmp9;
      let obj = projectId(576);
      const cResult = obj.c(42);
      projectId = projectId.projectId;
      const tmp4 = closure_10();
      const bottom = first1(1618)().bottom;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureProjectStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== projectId) {
        const fn = function y() {
          return ConjureProjectStore.getLogs(projectId);
        };
        const items1 = [projectId];
        cResult[1] = projectId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      let tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ConjureProjectStore];
        cResult[4] = items2;
        tmp9 = items2;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] !== projectId) {
        class L {
          constructor() {
            return ConjureProjectStore.getHistoryState(projectId, "logs");
          }
        }
        const items3 = [projectId];
        cResult[5] = projectId;
        cResult[6] = L;
        cResult[7] = items3;
        tmp12 = items3;
      } else {
        class L {
          constructor() {
            return ConjureProjectStore.getHistoryState(projectId, "logs");
          }
        }
        tmp12 = cResult[7];
      }
      const tmpResult3 = projectId(504);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, L, tmp12);
      [first1, dependencyMap] = react.useState("all");
      let str = _slicedToArray(react.useState(""), 2)[0];
      _slicedToArray(react.useState(""), 2);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            return ConjureProjectStore.getHistoryState(projectId, "logs");
          }
        }
        const DEBUG_LOG_FILTERS = tmp(16778).DEBUG_LOG_FILTERS;
        tmp18[1] = DEBUG_LOG_FILTERS.map((id) => {
          let obj2;
          const obj = { id, label: obj2.debugLogFilterLabel(id), page: null };
          obj2 = projectId(closure_2[20]);
          return obj;
        });
        tmp18[2] = function onSetActiveIndex(arg0) {
          let str = ConjureDebugLabels.DEBUG_LOG_FILTERS[arg0];
          if (str == null) {
            str = "all";
          }
          return closure_2(str);
        };
        cResult[8] = tmp18;
      } else {
        class L {
          constructor() {
            return ConjureProjectStore.getHistoryState(projectId, "logs");
          }
        }
      }
      const tmpResult4 = projectId(9317);
      const segmentedControlState = tmpResult4.useSegmentedControlState(tmp18);
      if (cResult[9] === first1) {
        class L {
          constructor() {
            return ConjureProjectStore.getHistoryState(projectId, "logs");
          }
        }
      }
      const str2 = str.trim();
      _slicedToArray = str2.toLowerCase();
      const found = stateFromStores.filter((log) => {
        const obj = ConjureDebugLabels;
        let isRenderableLogResult = obj.isRenderableLog(log.log);
        if (isRenderableLogResult) {
          let tmp5 = "all" === first1;
          if (!tmp5) {
            const tmpResult = ConjureDebugFormat;
            tmp5 = tmpResult.debugLogEnv(log.log.source) === tmp4;
          }
          if (tmp5) {
            let tmp7 = "" === closure_3;
            if (!tmp7) {
              const str3 = log.log.message;
              const formatted = str3.toLowerCase();
              let hasItem = formatted.includes(closure_3);
              if (!hasItem) {
                const level = log.log.level;
                hasItem = level.includes(closure_3);
              }
              if (!hasItem) {
                let flag;
                if (log.log.source != null) {
                  const formatted1 = str4.toLowerCase();
                  flag = formatted1.includes(closure_3);
                }
                if (flag == null) {
                  flag = false;
                }
                hasItem = flag;
              }
              tmp7 = hasItem;
            }
            tmp5 = tmp7;
          }
          isRenderableLogResult = tmp5;
        }
        return isRenderableLogResult;
      });
      cResult[9] = first1;
      cResult[10] = stateFromStores;
      cResult[11] = str;
      cResult[12] = found;
    }
  : (projectId) => {
      let DEBUG_LOG_FILTERS;
      let closure_3;
      let closure_7;
      let first;
      let first1;
      let first2;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let items6;
      let items7;
      let tmp10;
      let tmp19Result;
      projectId = projectId.projectId;
      let stateFromStores;
      first = undefined;
      _slicedToArray = undefined;
      first1 = undefined;
      first2 = undefined;
      closure_7 = undefined;
      const tmp = closure_10();
      const tmp4 = projectId;
      const bottom = stateFromStores(first[18])().bottom;
      let obj = projectId(first[19]);
      const items = [first2];
      const items1 = [projectId];
      stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getLogs(projectId), items1);
      let obj2 = projectId(first[19]);
      const items2 = [first2];
      const items3 = [projectId];
      const stateFromStores1 = obj2.useStateFromStores(
        items2,
        () => ConjureProjectStore.getHistoryState(projectId, "logs"),
        items3,
      );
      [first, _slicedToArray] = first1.useState("all");
      [first1, tmp10] = first1.useState("");
      const obj3 = {
        pageWidth: 0,
        items: DEBUG_LOG_FILTERS.map((id) => {
          let obj2;
          const obj = { id, label: obj2.debugLogFilterLabel(id), page: null };
          obj2 = projectId(first[20]);
          return obj;
        }),
        onSetActiveIndex(arg0) {
          let str = ConjureDebugLabels.DEBUG_LOG_FILTERS[arg0];
          if (str == null) {
            str = "all";
          }
          return closure_3(str);
        },
      };
      const useSegmentedControlState = projectId(first[21]).useSegmentedControlState;
      projectId(first[21]);
      DEBUG_LOG_FILTERS = projectId(first[20]).DEBUG_LOG_FILTERS;
      const items4 = [stateFromStores, first, first1];
      const segmentedControlState = useSegmentedControlState(obj3);
      const showSource = tmp14;
      const memo = first1.useMemo(() => {
        const str = first1.trim();
        let closure_0 = str.toLowerCase();
        return stateFromStores.filter((log) => {
          const obj = ConjureDebugLabels;
          let isRenderableLogResult = obj.isRenderableLog(log.log);
          if (isRenderableLogResult) {
            let tmp5 = "all" === first;
            if (!tmp5) {
              const tmpResult = ConjureDebugFormat;
              tmp5 = tmpResult.debugLogEnv(log.log.source) === tmp4;
            }
            if (tmp5) {
              let tmp7 = "" === closure_0;
              if (!tmp7) {
                const str3 = log.log.message;
                const formatted = str3.toLowerCase();
                let hasItem = formatted.includes(closure_0);
                if (!hasItem) {
                  const level = log.log.level;
                  hasItem = level.includes(closure_0);
                }
                if (!hasItem) {
                  let flag;
                  if (log.log.source != null) {
                    const formatted1 = str4.toLowerCase();
                    flag = formatted1.includes(closure_0);
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  hasItem = flag;
                }
                tmp7 = hasItem;
              }
              tmp5 = tmp7;
            }
            isRenderableLogResult = tmp5;
          }
          return isRenderableLogResult;
        });
      }, items4);
      [first2, closure_7] = first1.useState(() => {
        set = new Set();
        return set;
      });
      const onToggle = first1.useCallback((arg0) => {
        let closure_0 = arg0;
        closure_7((items) => {
          set = new Set(items);
          if (!set.delete(closure_0)) {
            set.add(closure_0);
          }
          return set;
        });
      }, []);
      const items5 = ["all" === first, first2, onToggle];
      const callback1 = first1.useCallback((item) => {
        item = item.item;
        const obj = { entry: item.log, logKey: item.key, showSource, expanded: first2.has(item.key), onToggle };
        return metroImportDefault(closure_11, obj);
      }, items5);
      const obj4 = { style: tmp.header, children: items6 };
      items6 = [
        closure_7(projectId(first[22]).SegmentedControl, {
          state: segmentedControlState,
          variant: "experimental_Small",
        }),
        ,
      ];
      const obj5 = {
        accessibilityLabel: intl.string(stateFromStores(first[15])["m2+37Y"]),
        placeholder: intl2.string(stateFromStores(first[15])["m2+37Y"]),
        size: "sm",
        onChange: tmp10,
      };
      const SearchField = projectId(first[23]).SearchField;
      intl = projectId(first[14]).intl;
      intl2 = projectId(first[14]).intl;
      items6[1] = closure_7(SearchField, obj5);
      const obj6 = { state: stateFromStores1, hasRows: stateFromStores.length > 0 };
      items6[2] = closure_7(projectId(first[24]).ConjureHistoryNotice, obj6);
      const tmp20 = onToggle(showSource, obj4);
      if (0 === stateFromStores.length) {
        const obj7 = {
          state: stateFromStores1,
          emptyTitle: intl4.string(stateFromStores(first[15]).S7qlPG),
          emptyBody: intl5.string(stateFromStores(first[15]).nD0S9z),
        };
        const ConjureHistoryPlaceholder = tmp4(tmp3[24]).ConjureHistoryPlaceholder;
        intl4 = tmp4(tmp3[14]).intl;
        intl5 = tmp4(tmp3[14]).intl;
        tmp19Result = tmp19(ConjureHistoryPlaceholder, obj7);
      } else {
        const obj8 = { children: intl3.string(stateFromStores(first[15])["4SIdrX"]) };
        const DebugNote = tmp4(tmp3[25]).DebugNote;
        intl3 = tmp4(tmp3[14]).intl;
        tmp19Result = tmp19(DebugNote, obj8);
      }
      const obj9 = {
        data: memo,
        keyExtractor: keyOf,
        renderItem: callback1,
        extraData: callback1,
        ListHeaderComponent: tmp20,
        ListEmptyComponent: tmp19Result,
        contentContainerStyle: items7,
        keyboardShouldPersistTaps: "handled",
      };
      items7 = [tmp.list];
      const obj10 = { paddingBottom: stateFromStores(first[6]).space.PX_16 + bottom };
      const FlashList = tmp4(tmp3[26]).FlashList;
      items7[1] = obj10;
      return closure_7(FlashList, obj9);
    };
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugLogsTab.tsx");

export default tmp5;
