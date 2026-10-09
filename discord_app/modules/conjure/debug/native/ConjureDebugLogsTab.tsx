// === Module 17205: ConjureDebugLogsTab ===

// Module 17205 (ConjureDebugLogsTab)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3827 from "module_3827" /* 3827 */;
import ConjureDebugLabels from "ConjureDebugLabels" /* 17208 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10617 */;

const util = Text(1126);
const Text_Text = Text(5087);
const Card = Text(6188);
const Pressables = Text(6191);
const ChevronSmallRightIcon2 = Text(6899);
const ChevronSmallDownIcon = Text(10498);
const ConjureDebugJson = Text(17206);
const ConjureDebugFormat = Text(17207);
require = fn;
function keyOf(key) {
  return String(key.key);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj = { list: { paddingHorizontal: nativeDefault.space.PX_16 }, header: null, row: null, rowHead: null, badge: null, jsonToggle: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.header = { gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 };
let obj4 = { gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 };
obj.row = { gap: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_8 };
let obj5 = { gap: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_8 };
obj.rowHead = { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8 };
obj.badge = { textTransform: "uppercase" };
let obj6 = { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8 };
obj.jsonToggle = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, alignSelf: "flex-start" };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_11 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function LogRow(arg0) {
  let Text = require;
  let tmp = dependencyMap;
  const cResult = c.c(38);
  ({ entry, logKey } = arg0);
  ({ showSource, expanded, onToggle } = arg0);
  const tmp3 = closure_10();
  if (cResult[0] !== entry.message) {
    const extractLogJsonResult = ConjureDebugJson.extractLogJson(entry.message);
    cResult[0] = entry.message;
    cResult[1] = extractLogJsonResult;
    let tmp4 = extractLogJsonResult;
    const TextResult = ConjureDebugJson;
  } else {
    tmp4 = cResult[1];
  }
  let str = "text-default";
  if ("error" === entry.level) {
    str = "text-feedback-critical";
  }
  if (expanded) {
    let ChevronSmallRightIcon = ChevronSmallDownIcon.ChevronSmallDownIcon;
  } else {
    ChevronSmallRightIcon = ChevronSmallRightIcon2.ChevronSmallRightIcon;
  }
  ({ row, rowHead } = tmp3);
  if (cResult[2] !== entry.ts) {
    const formatClockTimeResult = ConjureDebugFormat.formatClockTime(entry.ts);
    cResult[2] = entry.ts;
    cResult[3] = formatClockTimeResult;
    let tmp6 = formatClockTimeResult;
    const TextResult1 = ConjureDebugFormat;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] !== tmp6) {
    const obj2 = { variant: "text-xs/normal", color: "text-subtle", children: tmp6 };
    const tmp10 = React5(Text_Text.Text, obj2);
    cResult[4] = tmp6;
    cResult[5] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[5];
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
    let tmp11 = str2;
  } else {
    tmp11 = cResult[7];
  }
  if (cResult[8] === entry.level) {
    if (cResult[9] === tmp3.badge) {
      if (cResult[10] === tmp11) {
        let tmp12 = cResult[11];
      }
      if (cResult[12] === entry.source) {
        if (cResult[13] === showSource) {
          if (cResult[14] === tmp3.badge) {
            let tmp14 = cResult[15];
          }
          if (cResult[16] === entry.kind) {
            if (cResult[17] === tmp3.badge) {
              let tmp18 = cResult[18];
            }
            if (cResult[19] === tmp3.rowHead) {
              if (cResult[20] === tmp8) {
                if (cResult[21] === tmp12) {
                  if (cResult[22] === tmp14) {
                    if (cResult[23] === tmp18) {
                      let tmp22 = cResult[24];
                    }
                    if (cResult[25] === ChevronSmallRightIcon) {
                      if (cResult[26] === entry.message) {
                        if (cResult[27] === expanded) {
                          if (cResult[28] === tmp4) {
                            if (cResult[29] === logKey) {
                              if (cResult[30] === str) {
                                if (cResult[31] === onToggle) {
                                  if (cResult[32] === tmp3.jsonToggle) {
                                    if (cResult[34] === tmp3.row) {
                                      if (cResult[35] === tmp22) {
                                        if (cResult[36] === tmp26) {
                                          let tmp39 = cResult[37];
                                        }
                                        return tmp39;
                                      }
                                    }
                                    const obj3 = { style: row, children: null };
                                    const items = [tmp22, cResult[33]];
                                    obj3.children = items;
                                    const tmp42 = closure_1_8(View, obj3);
                                    cResult[34] = tmp3.row;
                                    cResult[35] = tmp22;
                                    cResult[36] = cResult[33];
                                    cResult[37] = tmp42;
                                    tmp39 = tmp42;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    if (null != tmp4) {
                      let tmp32 = null;
                      if ("" !== tmp4.prefix) {
                        const obj4 = { variant: "text-xs/normal", color: str, selectable: true, children: tmp4.prefix };
                        tmp32 = React5(Text_Text.Text, obj4);
                      }
                      const items1 = [tmp32, , ];
                      const obj5 = { style: tmp3.jsonToggle, accessibilityRole: "button", accessibilityState: null, accessibilityLabel: null, onPress: null, children: null };
                      const obj6 = { expanded };
                      obj5.accessibilityState = obj6;
                      const intl2 = util.intl;
                      obj5.accessibilityLabel = intl2.string(_modDef3827["9CTzyV"]);
                      obj5.onPress = function onPress() {
                        return onToggle(logKey);
                      };
                      const obj7 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
                      const items2 = [React5(ChevronSmallRightIcon, obj7), ];
                      const items3 = [tmp4.marker, " ", ];
                      const intl3 = util.intl;
                      if ("[\u2026]" === tmp4.marker) {
                        let kUhyUv = _modDef3827.kUhyUv;
                      } else {
                        kUhyUv = _modDef3827["N+fphl"];
                      }
                      const obj8 = { variant: "text-xs/medium", color: "text-muted", children: null };
                      const obj9 = { count: tmp4.size };
                      items3[2] = intl3.formatToPlainString(kUhyUv, obj9);
                      obj8.children = items3;
                      items2[1] = closure_1_8(Text_Text.Text, obj8);
                      obj5.children = items2;
                      items1[1] = closure_1_8(Pressables.PressableOpacity, obj5);
                      let tmp35Result = null;
                      if (expanded) {
                        const obj10 = { variant: "primary", children: null };
                        Text = Text_Text.Text;
                        const obj11 = { variant: "text-xs/normal", color: str, selectable: true, children: tmp4.pretty };
                        tmp = React5(Text, obj11);
                        obj10.children = tmp;
                        tmp35Result = React5(Card.Card, obj10);
                      }
                      const obj12 = { children: null };
                      items1[2] = tmp35Result;
                      obj12.children = items1;
                      let tmp30Result = closure_1_8(options, obj12);
                    } else {
                      const obj13 = { variant: "text-xs/normal", color: str, selectable: true, children: entry.message };
                      tmp30Result = React5(Text_Text.Text, obj13);
                    }
                    cResult[25] = ChevronSmallRightIcon;
                    entry = entry.message;
                    cResult[26] = entry;
                    cResult[27] = expanded;
                    cResult[28] = tmp4;
                    cResult[29] = logKey;
                    cResult[30] = str;
                    cResult[31] = onToggle;
                    onToggle = tmp3.jsonToggle;
                    cResult[32] = onToggle;
                    cResult[33] = tmp30Result;
                  }
                }
              }
            }
            const obj14 = { style: rowHead, children: null };
            const items4 = [tmp8, tmp12, tmp14, tmp18];
            obj14.children = items4;
            const tmp25 = closure_1_8(View, obj14);
            cResult[19] = tmp3.rowHead;
            cResult[20] = tmp8;
            cResult[21] = tmp12;
            cResult[22] = tmp14;
            cResult[23] = tmp18;
            cResult[24] = tmp25;
            tmp22 = tmp25;
          }
          let tmp19 = null;
          if (null != entry.kind) {
            const obj15 = { variant: "text-xxs/semibold", color: "text-feedback-critical", style: tmp3.badge, children: null };
            const intl = util.intl;
            obj15.children = intl.string(_modDef3827.TrC9c8);
            tmp19 = React5(Text_Text.Text, obj15);
          }
          cResult[16] = entry.kind;
          cResult[17] = tmp3.badge;
          cResult[18] = tmp19;
          tmp18 = tmp19;
        }
      }
      let tmp16 = null;
      if (showSource) {
        tmp16 = null;
        if (null != entry.source) {
          const obj16 = { variant: "text-xxs/semibold", color: "text-subtle", style: tmp3.badge, children: entry.source };
          tmp16 = React5(Text_Text.Text, obj16);
        }
      }
      cResult[12] = entry.source;
      cResult[13] = showSource;
      cResult[14] = tmp3.badge;
      cResult[15] = tmp16;
      tmp14 = tmp16;
    }
  }
  const tmp13 = React5(Text_Text.Text, { variant: "text-xxs/semibold", color: tmp11, style: tmp3.badge, children: entry.level });
  cResult[8] = entry.level;
  cResult[9] = tmp3.badge;
  cResult[10] = tmp11;
  cResult[11] = tmp13;
  tmp12 = tmp13;
  const obj17 = { variant: "text-xxs/semibold", color: tmp11, style: tmp3.badge, children: entry.level };
}) : (function LogRow(entry) {
  entry = entry.entry;
  ({ logKey: importDefault, expanded, onToggle: dependencyMap } = entry);
  const tmp = closure_10();
  const items = [entry.message];
  const memo = noop.useMemo(() => ConjureDebugJson.extractLogJson(entry.message), items);
  let str = "text-default";
  if ("error" === entry.level) {
    str = "text-feedback-critical";
  }
  if (expanded) {
    let ChevronSmallRightIcon = tmp3(10498).ChevronSmallDownIcon;
    let tmp6 = tmp3;
  } else {
    ChevronSmallRightIcon = tmp3(6899).ChevronSmallRightIcon;
    tmp6 = tmp3;
  }
  const obj = { style: tmp.row, children: null };
  const obj2 = { style: tmp.rowHead, children: null };
  const obj3 = { variant: "text-xs/normal", color: "text-subtle", children: tmp6(17207).formatClockTime(entry.ts) };
  const items1 = [closure_7(tmp6(5087).Text, obj3), , , ];
  const level = entry.level;
  let str2 = "text-feedback-critical";
  if ("error" !== level) {
    let str3 = "text-muted";
    if ("warn" === level) {
      str3 = "text-feedback-warning";
    }
    str2 = str3;
  }
  items1[1] = closure_7(tmp6(5087).Text, { variant: "text-xxs/semibold", color: str2, style: tmp.badge, children: entry.level });
  let tmp9Result = null;
  if (entry.showSource) {
    tmp9Result = null;
    if (null != entry.source) {
      const obj5 = { variant: "text-xxs/semibold", color: "text-subtle", style: tmp.badge, children: entry.source };
      tmp9Result = closure_7(tmp6(5087).Text, obj5);
    }
  }
  items1[2] = tmp9Result;
  let tmp9Result4 = null;
  if (null != entry.kind) {
    const obj6 = { variant: "text-xxs/semibold", color: "text-feedback-critical", style: tmp.badge, children: null };
    const intl = tmp6(1126).intl;
    obj6.children = intl.string(_modDef3827.TrC9c8);
    tmp9Result4 = closure_7(tmp6(5087).Text, obj6);
  }
  items1[3] = tmp9Result4;
  obj2.children = items1;
  const items2 = [closure_8(View, obj2), ];
  if (null != memo) {
    let tmp9Result5 = null;
    if ("" !== memo.prefix) {
      const obj7 = { variant: "text-xs/normal", color: str, selectable: true, children: memo.prefix };
      tmp9Result5 = closure_7(tmp6(5087).Text, obj7);
    }
    const items3 = [tmp9Result5, , ];
    const obj8 = { style: tmp.jsonToggle, accessibilityRole: "button", accessibilityState: null, accessibilityLabel: null, onPress: null, children: null };
    const obj9 = { expanded };
    obj8.accessibilityState = obj9;
    const intl2 = tmp6(1126).intl;
    obj8.accessibilityLabel = intl2.string(_modDef3827["9CTzyV"]);
    obj8.onPress = function onPress() {
      return dependencyMap(importDefault);
    };
    const obj10 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
    const items4 = [closure_7(ChevronSmallRightIcon, obj10), ];
    const items5 = [memo.marker, " ", ];
    const intl3 = tmp6(1126).intl;
    if ("[\u2026]" === memo.marker) {
      let kUhyUv = _modDef3827.kUhyUv;
    } else {
      kUhyUv = _modDef3827["N+fphl"];
    }
    const obj11 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const obj12 = { count: memo.size };
    items5[2] = intl3.formatToPlainString(kUhyUv, obj12);
    obj11.children = items5;
    items4[1] = closure_8(tmp6(5087).Text, obj11);
    obj8.children = items4;
    items3[1] = closure_8(tmp6(6191).PressableOpacity, obj8);
    let tmp9Result6 = null;
    if (expanded) {
      const obj13 = { variant: "primary", children: null };
      const obj14 = { variant: "text-xs/normal", color: str, selectable: true, children: memo.pretty };
      obj13.children = closure_7(tmp6(5087).Text, obj14);
      tmp9Result6 = closure_7(tmp6(6188).Card, obj13);
    }
    const obj15 = { children: null };
    items3[2] = tmp9Result6;
    obj15.children = items3;
    let tmp9Result7 = closure_8(closure_9, obj15);
  } else {
    const obj16 = { variant: "text-xs/normal", color: str, selectable: true, children: entry.message };
    tmp9Result7 = closure_7(tmp6(5087).Text, obj16);
  }
  items2[1] = tmp9Result7;
  obj.children = items2;
  return closure_8(View, obj);
}));
ReactCompilerGating = fn(558);
let obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, alignSelf: "flex-start" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugLogsTab.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDebugLogsTab(projectId) {
  const cResult = projectId(576).c(42);
  projectId = projectId.projectId;
  closure_10();
  const bottom = first1(1631)().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    let first = items;
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
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = projectId(576);
  const stateFromStores = projectId(504).useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConjureProjectStore];
    cResult[4] = items2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== projectId) {
    class L {
      constructor() {
        return closure_6.getHistoryState(projectId, "logs");
      }
    }
    const items3 = [projectId];
    cResult[5] = projectId;
    cResult[6] = L;
    cResult[7] = items3;
    let tmp12 = items3;
  } else {
    class L {
      constructor() {
        return closure_6.getHistoryState(projectId, "logs");
      }
    }
    tmp12 = cResult[7];
  }
  let tmpResult = projectId(504);
  const stateFromStores1 = projectId(504).useStateFromStores(tmp9, L, tmp12);
  [first1, dependencyMap] = noop.useState("all");
  const tmpResult3 = projectId(504);
  let str = _slicedToArray(noop.useState(""), 2)[0];
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        return closure_6.getHistoryState(projectId, "logs");
      }
    }
    const DEBUG_LOG_FILTERS = tmp(17208).DEBUG_LOG_FILTERS;
    tmp18[1] = DEBUG_LOG_FILTERS.map((id) => {
      const obj = { id, label: projectId(dependencyMap[20]).debugLogFilterLabel(id), page: null };
      return obj;
    });
    tmp18[2] = function onSetActiveIndex(arg0) {
      let str = ConjureDebugLabels.DEBUG_LOG_FILTERS[arg0];
      if (str == null) {
        str = "all";
      }
      return dependencyMap(str);
    };
    cResult[8] = tmp18;
  } else {
    class L {
      constructor() {
        return closure_6.getHistoryState(projectId, "logs");
      }
    }
  }
  const tmp16 = _slicedToArray(noop.useState(""), 2);
  const segmentedControlState = projectId(8513).useSegmentedControlState(tmp18);
  if (cResult[9] === first1) {
    class L {
      constructor() {
        return closure_6.getHistoryState(projectId, "logs");
      }
    }
  }
  const tmpResult4 = projectId(8513);
  _slicedToArray = str.trim().toLowerCase();
  const found = stateFromStores.filter((log) => {
    let isRenderableLogResult = ConjureDebugLabels.isRenderableLog(log.log);
    if (isRenderableLogResult) {
      let tmp5 = "all" === first1;
      if (!tmp5) {
        tmp5 = ConjureDebugFormat.debugLogEnv(log.log.source) === tmp4;
        const tmpResult = ConjureDebugFormat;
      }
      if (tmp5) {
        let tmp7 = "" === closure_3;
        if (!tmp7) {
          const formatted = log.log.message.toLowerCase();
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
  const str2 = str.trim();
}) : (function ConjureDebugLogsTab(projectId) {
  projectId = projectId.projectId;
  first = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  let first2;
  const tmp = closure_10();
  const items = [first2];
  const items1 = [projectId];
  const stateFromStores = projectId(first[19]).useStateFromStores(items, () => ConjureProjectStore.getLogs(projectId), items1);
  let obj = projectId(first[19]);
  const items2 = [first2];
  const items3 = [projectId];
  const stateFromStores1 = projectId(first[19]).useStateFromStores(items2, () => ConjureProjectStore.getHistoryState(projectId, "logs"), items3);
  [first, _slicedToArray] = first1.useState("all");
  [first1, obj6.onChange] = first1.useState("");
  const obj2 = projectId(first[19]);
  const obj4 = { pageWidth: 0, items: null, onSetActiveIndex: null };
  const DEBUG_LOG_FILTERS = projectId(first[20]).DEBUG_LOG_FILTERS;
  obj4.items = DEBUG_LOG_FILTERS.map((id) => {
    const obj = { id, label: projectId(first[20]).debugLogFilterLabel(id), page: null };
    return obj;
  });
  obj4.onSetActiveIndex = function onSetActiveIndex(arg0) {
    let str = ConjureDebugLabels.DEBUG_LOG_FILTERS[arg0];
    if (str == null) {
      str = "all";
    }
    return closure_3(str);
  };
  const items4 = [stateFromStores, first, first1];
  const segmentedControlState = projectId(first[21]).useSegmentedControlState(obj4);
  const showSource = tmp12;
  const memo = first1.useMemo(() => {
    closure_0 = first1.trim().toLowerCase();
    return stateFromStores.filter((log) => {
      let isRenderableLogResult = ConjureDebugLabels.isRenderableLog(log.log);
      if (isRenderableLogResult) {
        let tmp5 = "all" === first;
        if (!tmp5) {
          tmp5 = ConjureDebugFormat.debugLogEnv(log.log.source) === tmp4;
          const tmpResult = ConjureDebugFormat;
        }
        if (tmp5) {
          let tmp7 = "" === closure_0;
          if (!tmp7) {
            const formatted = log.log.message.toLowerCase();
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
  const tmp13 = _slicedToArray(first1.useState(() => new Set()), 2);
  first2 = tmp13[0];
  closure_7 = tmp13[1];
  const onToggle = first1.useCallback((arg0) => {
    closure_0 = arg0;
    closure_7((items) => {
      const set = new Set(items);
      if (!set.delete(closure_0)) {
        set.add(closure_0);
      }
      return set;
    });
  }, []);
  const items5 = ["all" === first, first2, onToggle];
  const callback1 = first1.useCallback((item) => {
    item = item.item;
    return React5(closure_11, { entry: item.log, logKey: item.key, showSource, expanded: first2.has(item.key), onToggle });
  }, items5);
  const obj5 = { style: tmp.header, children: null };
  const items6 = [closure_7(projectId(first[22]).SegmentedControl, { state: segmentedControlState, variant: "experimental_Small" }), , ];
  const obj6 = { accessibilityLabel: null, placeholder: null, size: "sm", onChange: null };
  const intl = projectId(first[14]).intl;
  obj6.accessibilityLabel = intl.string(stateFromStores(first[15])["m2+37Y"]);
  const intl2 = projectId(first[14]).intl;
  obj6.placeholder = intl2.string(stateFromStores(first[15])["m2+37Y"]);
  items6[1] = closure_7(projectId(first[23]).SearchField, obj6);
  items6[2] = closure_7(projectId(first[24]).ConjureHistoryNotice, { state: stateFromStores1, hasRows: stateFromStores.length > 0 });
  obj5.children = items6;
  const obj3 = projectId(first[21]);
  const obj7 = { state: stateFromStores1, hasRows: stateFromStores.length > 0 };
  if (0 === stateFromStores.length) {
    const obj8 = { state: stateFromStores1, emptyTitle: null, emptyBody: null };
    const intl4 = tmp4(tmp3[14]).intl;
    obj8.emptyTitle = intl4.string(tmp2(tmp3[15]).S7qlPG);
    const intl5 = tmp4(tmp3[14]).intl;
    obj8.emptyBody = intl5.string(tmp2(tmp3[15]).nD0S9z);
    let tmp17Result = tmp17(tmp4(tmp3[24]).ConjureHistoryPlaceholder, obj8);
  } else {
    const obj9 = { children: null };
    const intl3 = tmp4(tmp3[14]).intl;
    obj9.children = intl3.string(tmp2(tmp3[15])["4SIdrX"]);
    tmp17Result = tmp17(tmp4(tmp3[25]).DebugNote, obj9);
  }
  const obj10 = { data: memo, keyExtractor: keyOf, renderItem: callback1, extraData: callback1, ListHeaderComponent: onToggle(showSource, obj5), ListEmptyComponent: tmp17Result, contentContainerStyle: null, keyboardShouldPersistTaps: "handled" };
  const items7 = [tmp.list, ];
  const tmp18 = onToggle(showSource, obj5);
  items7[1] = { paddingBottom: stateFromStores(first[6]).space.PX_16 + stateFromStores(first[18])().bottom };
  obj10.contentContainerStyle = items7;
  return closure_7(projectId(first[26]).FlashList, obj10);
});