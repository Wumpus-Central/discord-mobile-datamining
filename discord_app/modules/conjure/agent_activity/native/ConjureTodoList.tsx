// === Module 16714: ConjureTodoList ===

// Module 16714 (ConjureTodoList)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import Text_Text from "Text/Text" /* 4886 */;
import CheckmarkSmallBoldIcon2 from "CheckmarkSmallBoldIcon" /* 8962 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 16654 */;
import ConjureNativeCollapsibleSectionDefault from "ConjureNativeCollapsibleSection" /* 16664 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 16699 */;
import ConjureTodoState from "ConjureTodoState" /* 16715 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, obj1, str2, tmp2, value;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
let size1;
let size2;
const f126090 = (status) => "completed" === status.status;
let react = react_mod;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: obj2, row: obj3, marker: size, markerCompleted: obj4, markerUnfinished: obj5, markerInProgress: { borderWidth: 0 }, markerSpinner: size1, text: { flexShrink: 1 }, agents: obj6, agentMark: size2, agentMarkTint0: obj7, agentMarkTint1: { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE }, agentMarkTint2: { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING }, agentMarkTint3: { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_INFO }, textCompleted: { textDecorationLine: "line-through" } };
obj2 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
size = { width: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, height: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_WIDTH, borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT };
obj4 = { borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT };
obj5 = { borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG };
size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, marginLeft: "auto", paddingLeft: nativeDefault.space.PX_8 };
size2 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
obj7 = { backgroundColor: nativeDefault.colors.TEXT_BRAND };
({ backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE });
({ backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING });
({ backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_INFO });
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((agents) => {
  let agentMark;
  let intl;
  let items;
  let items1;
  let obj3;
  let overflow;
  let shown;
  let obj = require("react");
  const cResult = obj.c(19);
  agents = agents.agents;
  const tmp4 = closure_8();
  _require = tmp4;
  if (cResult[0] === agents) {
    if (cResult[1] === tmp4.agentMark) {
      if (cResult[2] === tmp4.agentMarkTint0) {
        if (cResult[3] === tmp4.agentMarkTint1) {
          if (cResult[4] === tmp4.agentMarkTint2) {
            if (cResult[5] === tmp4.agentMarkTint3) {
              let tmp5;
              let tmp6;
              let tmp7;
              let tmp8;
              let tmp9;
              if (cResult[6] === tmp4.agents) {
                tmp5 = cResult[7];
                tmp6 = cResult[8];
                tmp7 = cResult[9];
                tmp8 = cResult[10];
                tmp9 = cResult[11];
              }
              const _Symbol = Symbol;
              if (tmp9 === Symbol.for("react.early_return_sentinel")) {
                let tmp17;
                if (cResult[12] !== tmp6) {
                  let tmp18 = null;
                  if (tmp6 > 0) {
                    let obj2 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: intl.formatToPlainString(items1(3723).SPGdDc, obj3), children: "+" + tmp6 };
                    const Text = tmp(4886).Text;
                    intl = tmp(1126).intl;
                    obj3 = { count: tmp6 };
                    const _HermesInternal = HermesInternal;
                    tmp18 = closure_6(Text, obj2);
                  }
                  cResult[12] = tmp6;
                  cResult[13] = tmp18;
                  tmp17 = tmp18;
                } else {
                  tmp17 = cResult[13];
                }
                if (cResult[14] === tmp5) {
                  if (cResult[15] === tmp7) {
                    if (cResult[16] === tmp8) {
                      let tmp21;
                      if (cResult[17] === tmp17) {
                        tmp21 = cResult[18];
                      }
                      tmp9 = tmp21;
                    }
                  }
                }
                const obj4 = { style: tmp7, children: items };
                items = [tmp8, tmp17];
                const tmp23 = closure_7(tmp5, obj4);
                cResult[14] = tmp5;
                cResult[15] = tmp7;
                cResult[16] = tmp8;
                cResult[17] = tmp17;
                cResult[18] = tmp23;
                tmp21 = tmp23;
              }
              return tmp9;
            }
          }
        }
      }
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  const tmpResult = require("ConjureTodoAgents");
  ({ shown, overflow } = tmpResult.splitAgentOverflow(agents));
  items1 = [, , , ];
  ({ agentMarkTint0: arr[0], agentMarkTint1: arr[1], agentMarkTint2: arr[2], agentMarkTint3: arr[3] } = tmp4);
  let tmp12 = null;
  let mapped;
  let agents1;
  let tmp15;
  tmpResult.splitAgentOverflow(agents);
  if (0 !== shown.length) {
    tmp15 = closure_5;
    agents1 = tmp4.agents;
    mapped = shown.map((key) => {
      let intl;
      let items;
      let obj3;
      const obj = { style: items, accessibilityRole: "image", accessibilityLabel: intl.formatToPlainString(_modDef3723.TVvPCJ, obj3) };
      items = [agentMark.agentMark, ];
      const obj2 = ConjureNativeStatusLine;
      const laneTintIndexForResult = obj2.laneTintIndexFor(key.key);
      items[1] = items1[laneTintIndexForResult % ConjureNativeStatusLine.LANE_TINT_COUNT];
      intl = intl6.intl;
      obj3 = { name: key.name, task: key.task };
      return metroRequire(hasOwnProperty, obj, key.key);
    });
    tmp12 = forResult;
  }
  cResult[0] = agents;
  cResult[1] = tmp4.agentMark;
  cResult[2] = tmp4.agentMarkTint0;
  cResult[3] = tmp4.agentMarkTint1;
  cResult[4] = tmp4.agentMarkTint2;
  cResult[5] = tmp4.agentMarkTint3;
  cResult[6] = tmp4.agents;
  cResult[7] = tmp15;
  cResult[8] = overflow;
  cResult[9] = agents1;
  cResult[10] = mapped;
  cResult[11] = tmp12;
  tmp9 = tmp12;
  tmp8 = mapped;
  tmp7 = agents1;
  tmp5 = tmp15;
  tmp6 = overflow;
}) : ((agents) => {
  let agentMark;
  let intl;
  let items1;
  let obj4;
  let overflow;
  let shown;
  agents = agents.agents;
  const tmp = closure_8();
  _require = tmp;
  let obj = require("ConjureTodoAgents");
  ({ shown, overflow } = obj.splitAgentOverflow(agents));
  let items = [, , , ];
  ({ agentMarkTint0: arr[0], agentMarkTint1: arr[1], agentMarkTint2: arr[2], agentMarkTint3: arr[3] } = tmp);
  let tmp10Result = null;
  obj.splitAgentOverflow(agents);
  if (0 !== shown.length) {
    let obj2 = { style: tmp.agents, children: items1 };
    items1 = [
      shown.map((key) => {
          let intl;
          let obj3;
          const obj = { style: items, accessibilityRole: "image", accessibilityLabel: intl.formatToPlainString(_modDef3723.TVvPCJ, obj3) };
          items = [agentMark.agentMark, ];
          const obj2 = ConjureNativeStatusLine;
          const laneTintIndexForResult = obj2.laneTintIndexFor(key.key);
          items[1] = items[laneTintIndexForResult % ConjureNativeStatusLine.LANE_TINT_COUNT];
          intl = intl6.intl;
          obj3 = { name: key.name, task: key.task };
          return metroRequire(hasOwnProperty, obj, key.key);
        }),

    ];
    let tmp9 = null;
    if (overflow > 0) {
      let obj3 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: intl.formatToPlainString(items(3723).SPGdDc, obj4), children: "+" + overflow };
      const Text = tmp2(4886).Text;
      intl = tmp2(1126).intl;
      const _HermesInternal = HermesInternal;
      obj4 = { count: overflow };
      tmp9 = closure_6(Text, obj3);
    }
    items1[1] = tmp9;
    tmp10Result = closure_7(closure_5, obj2);
  }
  return tmp10Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((status) => {
  let items;
  const obj = react2;
  const cResult = obj.c(17);
  status = status.status;
  const tmp4 = closure_8();
  if (cResult[0] === tmp4.marker) {
    if (cResult[1] === ("completed" === status && tmp4.markerCompleted)) {
      if (cResult[2] === ("in_progress" === status && tmp4.markerInProgress)) {
        let tmp10;
        let tmp11;
        if (cResult[3] === ("unfinished" === status && tmp4.markerUnfinished)) {
          tmp10 = cResult[4];
        }
        if (cResult[5] !== status) {
          let stringResult;
          if ("completed" === status) {
            const intl4 = intl6.intl;
            stringResult = intl4.string(_modDef3723.KvBdun);
          } else if ("in_progress" === status) {
            const intl3 = intl6.intl;
            stringResult = intl3.string(_modDef3723["m5G9+S"]);
          } else if ("unfinished" === status) {
            const intl2 = intl6.intl;
            stringResult = intl2.string(_modDef3723.lRpwhD);
          } else {
            const intl = intl6.intl;
            stringResult = intl.string(_modDef3723.sPGeWi);
          }
          cResult[5] = status;
          cResult[6] = stringResult;
          tmp11 = stringResult;
        } else {
          tmp11 = cResult[6];
        }
        if (cResult[7] === status) {
          let tmp17;
          let tmp21;
          if (cResult[8] === tmp4.markerSpinner) {
            tmp17 = cResult[9];
          }
          if (cResult[10] !== status) {
            let tmp22 = null;
            if ("completed" === status) {
              const obj2 = { size: "xs", color: nativeDefault.colors.CHECKBOX_ICON_ACTIVE };
              const CheckmarkSmallBoldIcon = CheckmarkSmallBoldIcon2.CheckmarkSmallBoldIcon;
              tmp22 = metroRequire(CheckmarkSmallBoldIcon, obj2);
            }
            cResult[10] = status;
            cResult[11] = tmp22;
            tmp21 = tmp22;
          } else {
            tmp21 = cResult[11];
          }
          if (cResult[12] === tmp10) {
            if (cResult[13] === tmp11) {
              if (cResult[14] === tmp17) {
                let tmp25;
                if (cResult[15] === tmp21) {
                  tmp25 = cResult[16];
                }
                return tmp25;
              }
            }
          }
          const obj3 = { style: tmp10, accessibilityRole: "image", accessibilityLabel: tmp11, children: items };
          items = [tmp17, tmp21];
          const tmp28 = metroImportDefault(hasOwnProperty, obj3);
          cResult[12] = tmp10;
          cResult[13] = tmp11;
          cResult[14] = tmp17;
          cResult[15] = tmp21;
          cResult[16] = tmp28;
          tmp25 = tmp28;
        }
        let tmp18 = null;
        if ("in_progress" === status) {
          const obj4 = { size: "small", style: tmp4.markerSpinner };
          tmp18 = metroRequire(React3, obj4);
        }
        cResult[7] = status;
        cResult[8] = tmp4.markerSpinner;
        cResult[9] = tmp18;
        tmp17 = tmp18;
      }
    }
  }
  const items1 = [tmp4.marker, "completed" === status && tmp4.markerCompleted, "in_progress" === status && tmp4.markerInProgress, "unfinished" === status && tmp4.markerUnfinished];
  cResult[0] = tmp4.marker;
  cResult[1] = "completed" === status && tmp4.markerCompleted;
  cResult[2] = "in_progress" === status && tmp4.markerInProgress;
  cResult[3] = "unfinished" === status && tmp4.markerUnfinished;
  cResult[4] = items1;
  tmp10 = items1;
}) : ((status) => {
  let items1;
  let stringResult;
  let tmp11;
  let tmp12;
  status = status.status;
  const tmp = closure_8();
  const items = [tmp.marker, , , ];
  let markerCompleted = tmp4;
  if ("completed" === status) {
    markerCompleted = tmp.markerCompleted;
  }
  items[1] = markerCompleted;
  items[2] = "in_progress" === status && tmp.markerInProgress;
  const obj = { style: items, accessibilityRole: "image", accessibilityLabel: stringResult, children: items1 };
  const tmp6 = "unfinished" === status && tmp.markerUnfinished;
  items[3] = tmp6;
  if ("completed" === status) {
    const intl4 = intl6.intl;
    stringResult = intl4.string(_modDef3723.KvBdun);
    tmp11 = importDefault;
    tmp12 = require;
  } else if ("in_progress" === status) {
    const intl3 = intl6.intl;
    stringResult = intl3.string(_modDef3723["m5G9+S"]);
    tmp11 = importDefault;
    tmp12 = require;
  } else if ("unfinished" === status) {
    const intl2 = intl6.intl;
    stringResult = intl2.string(_modDef3723.lRpwhD);
    tmp11 = importDefault;
    tmp12 = require;
  } else {
    const intl = intl6.intl;
    stringResult = intl.string(_modDef3723.sPGeWi);
    tmp11 = importDefault;
    tmp12 = require;
  }
  let tmp22 = null;
  if ("in_progress" === status) {
    const obj2 = { size: "small", style: tmp.markerSpinner };
    tmp22 = metroRequire(React3, obj2);
  }
  items1 = [tmp22, ];
  let tmp25 = null;
  if ("completed" === status) {
    const obj3 = { size: "xs", color: tmp11(587).colors.CHECKBOX_ICON_ACTIVE };
    const CheckmarkSmallBoldIcon = tmp12(8962).CheckmarkSmallBoldIcon;
    tmp25 = metroRequire(CheckmarkSmallBoldIcon, obj3);
  }
  items1[1] = tmp25;
  return metroImportDefault(hasOwnProperty, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let agents;
  let announceProgress;
  let closure_0;
  let closure_1;
  let expanded;
  let formatToPlainStringResult;
  let items;
  let items1;
  let live;
  let onToggleExpanded;
  let provisional;
  let row;
  let superseded;
  let tmp15;
  let tmp17;
  let tmp20;
  let tmp24Result;
  let todos;
  let obj = require("react");
  const cResult = obj.c(47);
  ({ todos, provisional, agents, announceProgress, live, superseded, expanded, onToggleExpanded } = arg0);
  importDefault = tmp5;
  const tmp4 = undefined === announceProgress || announceProgress;
  const tmp8 = closure_8();
  dependencyMap = tmp8;
  if (cResult[0] === agents) {
    if (cResult[1] === provisional) {
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp13;
      if (cResult[2] === todos) {
        _require = cResult[3];
        tmp10 = cResult[4];
        tmp11 = cResult[5];
        tmp12 = cResult[6];
        tmp13 = cResult[7];
      }
      const _Symbol = Symbol;
      if (tmp12 !== Symbol.for("react.early_return_sentinel")) {
        return tmp12;
      } else {
        let tmp26;
        const _Symbol3 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult = intl3.string(_modDef3723.RtzECX);
          cResult[12] = stringResult;
          tmp26 = stringResult;
        } else {
          tmp26 = cResult[12];
        }
        let str4 = "none";
        if (tmp4) {
          str4 = "none";
          if (!(undefined !== superseded && superseded)) {
            str4 = "polite";
          }
        }
        if (cResult[13] === tmp10) {
          if (cResult[14] === tmp11) {
            let tmp29;
            let tmp33;
            let tmp32;
            let tmp38;
            if (cResult[15] === str4) {
              tmp29 = cResult[16];
            }
            const _Symbol2 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = tmp(1126).intl;
              const stringResult1 = intl4.string(_modDef3723.RKyN9q);
              const intl5 = tmp(1126).intl;
              const stringResult2 = intl5.string(_modDef3723.xydHoj);
              class G {
                constructor(arg0) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[14]);
                  todoMarkResult = obj.todoMark(arg0.status, live);
                  obj1 = { style: closure_2.row, children: null };
                  tmp6 = closure_2;
                  tmp7 = jsx;
                  tmp4 = jsxs;
                  tmp5 = View;
                  items = [, , ];
                  items[0] = jsx(f74852, { status: todoMarkResult });
                  Text = closure_0(closure_2[11]).Text;
                  if ("in_progress" === todoMarkResult) {
                    str = "text-default";
                  } else {
                    str = "text-muted";
                    str2 = "pending";
                  }
                  obj6 = { variant: "text-sm/normal", color: str, style: null, children: null };
                  items1 = [, ];
                  items1[0] = tmp6.text;
                  items1[1] = "completed" === todoMarkResult && tmp6.textCompleted;
                  obj6.style = items1;
                  tmpResult = tmp(tmp2[14]);
                  obj6.children = tmpResult.todoLabel(arg0, todoMarkResult);
                  items[1] = tmp7(Text, obj6);
                  tmp7Result = null;
                  if ("completed" !== todoMarkResult) {
                    tmp10 = closure_0;
                    tmp9 = f74850;
                    value = closure_0.get(arg0.id);
                    if (value == null) {
                      value = [];
                    }
                    obj7 = { agents: null };
                    obj7.agents = value;
                    tmp7Result = tmp7(tmp9, obj7);
                  }
                  items[2] = tmp7Result;
                  obj1.children = items;
                  return tmp4(tmp5, obj1, arg0.id);
                }
              }
              cResult[18] = stringResult2;
              tmp33 = stringResult2;
              tmp32 = stringResult1;
            } else {
              tmp32 = cResult[17];
              tmp33 = cResult[18];
            }
            if (cResult[19] === tmp9) {
              if (cResult[20] === (undefined === live || live)) {
                if (cResult[21] === tmp8.row) {
                  if (cResult[22] === tmp8.text) {
                    if (cResult[23] === tmp8.textCompleted) {
                      if (cResult[24] === todos) {
                        tmp38 = cResult[25];
                      }
                      if (cResult[32] === provisional) {
                        if (cResult[33] === tmp8.row) {
                          let tmp41;
                          if (cResult[34] === tmp8.text) {
                            tmp41 = cResult[35];
                          }
                          if (cResult[36] === tmp8.list) {
                            if (cResult[37] === tmp38) {
                              let tmp49;
                              if (cResult[38] === tmp41) {
                                tmp49 = cResult[39];
                              }
                              if (cResult[40] === (undefined === expanded || expanded)) {
                                if (cResult[41] === onToggleExpanded) {
                                  if (cResult[42] === (undefined !== superseded && superseded)) {
                                    if (cResult[43] === tmp13 > 0) {
                                      if (cResult[44] === tmp49) {
                                        let tmp53;
                                        if (cResult[45] === tmp29) {
                                          tmp53 = cResult[46];
                                        }
                                        return tmp53;
                                      }
                                    }
                                  }
                                }
                              }
                              let obj2 = { title: tmp26, meta: tmp29, showHeader: tmp13 > 0, superseded: null, expanded: undefined === expanded || expanded, onToggleExpanded, showLabel: tmp32, hideLabel: tmp33, children: tmp49 };
                              class G {
                                constructor(arg0) {
                                  tmp = closure_0;
                                  tmp2 = closure_2;
                                  obj = closure_0(closure_2[14]);
                                  todoMarkResult = obj.todoMark(arg0.status, live);
                                  obj1 = { style: closure_2.row, children: null };
                                  tmp6 = closure_2;
                                  tmp7 = jsx;
                                  tmp4 = jsxs;
                                  tmp5 = View;
                                  items = [, , ];
                                  items[0] = jsx(f74852, { status: todoMarkResult });
                                  Text = closure_0(closure_2[11]).Text;
                                  if ("in_progress" === todoMarkResult) {
                                    str = "text-default";
                                  } else {
                                    str = "text-muted";
                                    str2 = "pending";
                                  }
                                  obj6 = { variant: "text-sm/normal", color: str, style: null, children: null };
                                  items1 = [, ];
                                  items1[0] = tmp6.text;
                                  items1[1] = "completed" === todoMarkResult && tmp6.textCompleted;
                                  obj6.style = items1;
                                  tmpResult = tmp(tmp2[14]);
                                  obj6.children = tmpResult.todoLabel(arg0, todoMarkResult);
                                  items[1] = tmp7(Text, obj6);
                                  tmp7Result = null;
                                  if ("completed" !== todoMarkResult) {
                                    tmp10 = closure_0;
                                    tmp9 = f74850;
                                    value = closure_0.get(arg0.id);
                                    if (value == null) {
                                      value = [];
                                    }
                                    obj7 = { agents: null };
                                    obj7.agents = value;
                                    tmp7Result = tmp7(tmp9, obj7);
                                  }
                                  items[2] = tmp7Result;
                                  obj1.children = items;
                                  return tmp4(tmp5, obj1, arg0.id);
                                }
                              }
                              const tmp56 = closure_6(ConjureNativeCollapsibleSectionDefault, obj2);
                              cResult[40] = undefined === expanded || expanded;
                              cResult[41] = onToggleExpanded;
                              cResult[42] = undefined !== superseded && superseded;
                              cResult[43] = tmp13 > 0;
                              cResult[44] = tmp49;
                              cResult[45] = tmp29;
                              cResult[46] = tmp56;
                              tmp53 = tmp56;
                            }
                          }
                          let obj3 = { style: tmp37, children: items };
                          items = [tmp38, ];
                          class G {
                            constructor(arg0) {
                              tmp = closure_0;
                              tmp2 = closure_2;
                              obj = closure_0(closure_2[14]);
                              todoMarkResult = obj.todoMark(arg0.status, live);
                              obj1 = { style: closure_2.row, children: null };
                              tmp6 = closure_2;
                              tmp7 = jsx;
                              tmp4 = jsxs;
                              tmp5 = View;
                              items = [, , ];
                              items[0] = jsx(f74852, { status: todoMarkResult });
                              Text = closure_0(closure_2[11]).Text;
                              if ("in_progress" === todoMarkResult) {
                                str = "text-default";
                              } else {
                                str = "text-muted";
                                str2 = "pending";
                              }
                              obj6 = { variant: "text-sm/normal", color: str, style: null, children: null };
                              items1 = [, ];
                              items1[0] = tmp6.text;
                              items1[1] = "completed" === todoMarkResult && tmp6.textCompleted;
                              obj6.style = items1;
                              tmpResult = tmp(tmp2[14]);
                              obj6.children = tmpResult.todoLabel(arg0, todoMarkResult);
                              items[1] = tmp7(Text, obj6);
                              tmp7Result = null;
                              if ("completed" !== todoMarkResult) {
                                tmp10 = closure_0;
                                tmp9 = f74850;
                                value = closure_0.get(arg0.id);
                                if (value == null) {
                                  value = [];
                                }
                                obj7 = { agents: null };
                                obj7.agents = value;
                                tmp7Result = tmp7(tmp9, obj7);
                              }
                              items[2] = tmp7Result;
                              obj1.children = items;
                              return tmp4(tmp5, obj1, arg0.id);
                            }
                          }
                          const tmp52 = closure_7(closure_5, obj3);
                          cResult[36] = tmp8.list;
                          cResult[37] = tmp38;
                          cResult[38] = tmp41;
                          cResult[39] = tmp52;
                          tmp49 = tmp52;
                        }
                      }
                      let tmp43 = null;
                      if (null != provisional) {
                        tmp43 = null;
                        if ("" !== provisional) {
                          let obj4 = { style: tmp8.row, children: items1 };
                          items1 = [closure_6(closure_10, { status: "pending" }), ];
                          class G {
                            constructor(arg0) {
                              tmp = closure_0;
                              tmp2 = closure_2;
                              obj = closure_0(closure_2[14]);
                              todoMarkResult = obj.todoMark(arg0.status, live);
                              obj1 = { style: closure_2.row, children: null };
                              tmp6 = closure_2;
                              tmp7 = jsx;
                              tmp4 = jsxs;
                              tmp5 = View;
                              items = [, , ];
                              items[0] = jsx(f74852, { status: todoMarkResult });
                              Text = closure_0(closure_2[11]).Text;
                              if ("in_progress" === todoMarkResult) {
                                str = "text-default";
                              } else {
                                str = "text-muted";
                                str2 = "pending";
                              }
                              obj6 = { variant: "text-sm/normal", color: str, style: null, children: null };
                              items1 = [, ];
                              items1[0] = tmp6.text;
                              items1[1] = "completed" === todoMarkResult && tmp6.textCompleted;
                              obj6.style = items1;
                              tmpResult = tmp(tmp2[14]);
                              obj6.children = tmpResult.todoLabel(arg0, todoMarkResult);
                              items[1] = tmp7(Text, obj6);
                              tmp7Result = null;
                              if ("completed" !== todoMarkResult) {
                                tmp10 = closure_0;
                                tmp9 = f74850;
                                value = closure_0.get(arg0.id);
                                if (value == null) {
                                  value = [];
                                }
                                obj7 = { agents: null };
                                obj7.agents = value;
                                tmp7Result = tmp7(tmp9, obj7);
                              }
                              items[2] = tmp7Result;
                              obj1.children = items;
                              return tmp4(tmp5, obj1, arg0.id);
                            }
                          }
                          tmp48[2] = tmp8.text;
                          tmp48[3] = provisional;
                          items1[1] = closure_6(require("Text/Text").Text, tmp48);
                          tmp43 = closure_7(closure_5, obj4);
                        }
                      }
                      cResult[32] = provisional;
                      class G {
                        constructor(arg0) {
                          tmp = closure_0;
                          tmp2 = closure_2;
                          obj = closure_0(closure_2[14]);
                          todoMarkResult = obj.todoMark(arg0.status, live);
                          obj1 = { style: closure_2.row, children: null };
                          tmp6 = closure_2;
                          tmp7 = jsx;
                          tmp4 = jsxs;
                          tmp5 = View;
                          items = [, , ];
                          items[0] = jsx(f74852, { status: todoMarkResult });
                          Text = closure_0(closure_2[11]).Text;
                          if ("in_progress" === todoMarkResult) {
                            str = "text-default";
                          } else {
                            str = "text-muted";
                            str2 = "pending";
                          }
                          obj6 = { variant: "text-sm/normal", color: str, style: null, children: null };
                          items1 = [, ];
                          items1[0] = tmp6.text;
                          items1[1] = "completed" === todoMarkResult && tmp6.textCompleted;
                          obj6.style = items1;
                          tmpResult = tmp(tmp2[14]);
                          obj6.children = tmpResult.todoLabel(arg0, todoMarkResult);
                          items[1] = tmp7(Text, obj6);
                          tmp7Result = null;
                          if ("completed" !== todoMarkResult) {
                            tmp10 = closure_0;
                            tmp9 = f74850;
                            value = closure_0.get(arg0.id);
                            if (value == null) {
                              value = [];
                            }
                            obj7 = { agents: null };
                            obj7.agents = value;
                            tmp7Result = tmp7(tmp9, obj7);
                          }
                          items[2] = tmp7Result;
                          obj1.children = items;
                          return tmp4(tmp5, obj1, arg0.id);
                        }
                      }
                      cResult[34] = tmp8.text;
                      cResult[35] = tmp43;
                      tmp41 = tmp43;
                    }
                  }
                }
              }
            }
            if (cResult[26] === tmp9) {
              if (cResult[27] === (undefined === live || live)) {
                if (cResult[28] === tmp8.row) {
                  if (cResult[29] === tmp8.text) {
                    let tmp39;
                    if (cResult[30] === tmp8.textCompleted) {
                      tmp39 = cResult[31];
                    }
                    const mapped = todos.map(tmp39);
                    cResult[19] = tmp9;
                    cResult[20] = undefined === live || live;
                    cResult[21] = tmp8.row;
                    class G {
                      constructor(arg0) {
                        tmp = closure_0;
                        tmp2 = closure_2;
                        obj = closure_0(closure_2[14]);
                        todoMarkResult = obj.todoMark(arg0.status, live);
                        obj1 = { style: closure_2.row, children: null };
                        tmp6 = closure_2;
                        tmp7 = jsx;
                        tmp4 = jsxs;
                        tmp5 = View;
                        items = [, , ];
                        items[0] = jsx(f74852, { status: todoMarkResult });
                        Text = closure_0(closure_2[11]).Text;
                        if ("in_progress" === todoMarkResult) {
                          str = "text-default";
                        } else {
                          str = "text-muted";
                          str2 = "pending";
                        }
                        obj6 = { variant: "text-sm/normal", color: str, style: null, children: null };
                        items1 = [, ];
                        items1[0] = tmp6.text;
                        items1[1] = "completed" === todoMarkResult && tmp6.textCompleted;
                        obj6.style = items1;
                        tmpResult = tmp(tmp2[14]);
                        obj6.children = tmpResult.todoLabel(arg0, todoMarkResult);
                        items[1] = tmp7(Text, obj6);
                        tmp7Result = null;
                        if ("completed" !== todoMarkResult) {
                          tmp10 = closure_0;
                          tmp9 = f74850;
                          value = closure_0.get(arg0.id);
                          if (value == null) {
                            value = [];
                          }
                          obj7 = { agents: null };
                          obj7.agents = value;
                          tmp7Result = tmp7(tmp9, obj7);
                        }
                        items[2] = tmp7Result;
                        obj1.children = items;
                        return tmp4(tmp5, obj1, arg0.id);
                      }
                    }
                    cResult[22] = tmp8.text;
                    cResult[23] = tmp8.textCompleted;
                    cResult[24] = todos;
                    cResult[25] = mapped;
                    tmp38 = mapped;
                  }
                }
              }
            }
            class G {
              constructor(arg0) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[14]);
                todoMarkResult = obj.todoMark(arg0.status, live);
                obj1 = { style: closure_2.row, children: null };
                tmp6 = closure_2;
                tmp7 = jsx;
                tmp4 = jsxs;
                tmp5 = View;
                items = [, , ];
                items[0] = jsx(f74852, { status: todoMarkResult });
                Text = closure_0(closure_2[11]).Text;
                if ("in_progress" === todoMarkResult) {
                  str = "text-default";
                } else {
                  str = "text-muted";
                  str2 = "pending";
                }
                obj6 = { variant: "text-sm/normal", color: str, style: null, children: null };
                items1 = [, ];
                items1[0] = tmp6.text;
                items1[1] = "completed" === todoMarkResult && tmp6.textCompleted;
                obj6.style = items1;
                tmpResult = tmp(tmp2[14]);
                obj6.children = tmpResult.todoLabel(arg0, todoMarkResult);
                items[1] = tmp7(Text, obj6);
                tmp7Result = null;
                if ("completed" !== todoMarkResult) {
                  tmp10 = closure_0;
                  tmp9 = f74850;
                  value = closure_0.get(arg0.id);
                  if (value == null) {
                    value = [];
                  }
                  obj7 = { agents: null };
                  obj7.agents = value;
                  tmp7Result = tmp7(tmp9, obj7);
                }
                items[2] = tmp7Result;
                obj1.children = items;
                return tmp4(tmp5, obj1, arg0.id);
              }
            }
            cResult[26] = tmp9;
            cResult[27] = undefined === live || live;
            cResult[28] = tmp8.row;
            cResult[29] = tmp8.text;
            cResult[30] = tmp8.textCompleted;
            cResult[31] = G;
            tmp39 = G;
          }
        }
        const obj5 = { accessibilityLiveRegion: str4, accessibilityLabel: tmp11, children: tmp10 };
        const tmp30 = closure_6(require("ConjureNativeCollapsibleSection").ConjureNativeCollapsibleMeta, obj5);
        cResult[13] = tmp10;
        cResult[14] = tmp11;
        cResult[15] = str4;
        cResult[16] = tmp30;
        tmp29 = tmp30;
      }
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  const length = todos.filter(f126090).length;
  if (cResult[8] !== agents) {
    let items2 = agents;
    if (agents == null) {
      items2 = [];
    }
    cResult[8] = agents;
    cResult[9] = items2;
    tmp15 = items2;
  } else {
    tmp15 = cResult[9];
  }
  if (cResult[10] !== tmp15) {
    let tmpResult = tmp(16699);
    const groupAgentsByTodoResult = tmpResult.groupAgentsByTodo(tmp15);
    cResult[10] = tmp15;
    cResult[11] = groupAgentsByTodoResult;
    tmp17 = groupAgentsByTodoResult;
  } else {
    tmp17 = cResult[11];
  }
  _require = tmp17;
  if (0 !== todos.length) {
    const intl = tmp(1126).intl;
    const obj6 = { completed: length, total: todos.length };
    formatToPlainStringResult = intl.formatToPlainString(_modDef3723["P/I+JW"], obj6);
    const intl2 = tmp(1126).intl;
    class G {
      constructor(arg0) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[14]);
        todoMarkResult = obj.todoMark(arg0.status, live);
        obj1 = { style: closure_2.row, children: null };
        tmp6 = closure_2;
        tmp7 = jsx;
        tmp4 = jsxs;
        tmp5 = View;
        items = [, , ];
        items[0] = jsx(f74852, { status: todoMarkResult });
        Text = closure_0(closure_2[11]).Text;
        if ("in_progress" === todoMarkResult) {
          str = "text-default";
        } else {
          str = "text-muted";
          str2 = "pending";
        }
        obj6 = { variant: "text-sm/normal", color: str, style: null, children: null };
        items1 = [, ];
        items1[0] = tmp6.text;
        items1[1] = "completed" === todoMarkResult && tmp6.textCompleted;
        obj6.style = items1;
        tmpResult = tmp(tmp2[14]);
        obj6.children = tmpResult.todoLabel(arg0, todoMarkResult);
        items[1] = tmp7(Text, obj6);
        tmp7Result = null;
        if ("completed" !== todoMarkResult) {
          tmp10 = closure_0;
          tmp9 = f74850;
          value = closure_0.get(arg0.id);
          if (value == null) {
            value = [];
          }
          obj7 = { agents: null };
          obj7.agents = value;
          tmp7Result = tmp7(tmp9, obj7);
        }
        items[2] = tmp7Result;
        obj1.children = items;
        return tmp4(tmp5, obj1, arg0.id);
      }
    }
    const obj7 = { completed: length, total: todos.length };
    tmp24Result = tmp24(_modDef3723["7tzwKB"], obj7);
    tmp20 = forResult;
  } else {
    tmp20 = null;
    if (null != provisional) {
      let str = "";
      tmp20 = null;
    }
  }
  cResult[0] = agents;
  cResult[1] = provisional;
  cResult[2] = todos;
  cResult[3] = tmp17;
  cResult[4] = formatToPlainStringResult;
  cResult[5] = tmp24Result;
  cResult[6] = tmp20;
  cResult[7] = todos.length;
  tmp12 = tmp20;
  tmp11 = tmp24Result;
  tmp10 = formatToPlainStringResult;
  tmp13 = length2;
}) : ((announceProgress) => {
  let ConjureNativeCollapsibleMeta;
  let agents;
  let closure_3;
  let formatToPlainStringResult1;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let obj2;
  let provisional;
  let row;
  let str;
  let todos;
  ({ todos, provisional, agents } = announceProgress);
  let flag = announceProgress.announceProgress;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = announceProgress.live;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = announceProgress.superseded;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = announceProgress.expanded;
  if (flag4 === undefined) {
    flag4 = true;
  }
  react = undefined;
  const onToggleExpanded = announceProgress.onToggleExpanded;
  const tmp = closure_8();
  dependencyMap = tmp;
  const length = todos.filter(f126090).length;
  let items = [agents];
  react = react.useMemo(() => {
    let items = agents;
    const groupAgentsByTodo = ConjureTodoAgents.groupAgentsByTodo;
    ConjureTodoAgents;
    if (agents == null) {
      items = [];
    }
    return groupAgentsByTodo(items);
  }, items);
  if (0 === todos.length) {
    return null;
  }
  const intl = agents(1126).intl;
  const formatToPlainStringResult = intl.formatToPlainString(flag2(3723)["P/I+JW"], { completed: length, total: todos.length });
  const intl2 = agents(1126).intl;
  let obj = { title: intl3.string(flag2(3723).RtzECX), meta: closure_6(ConjureNativeCollapsibleMeta, { accessibilityLiveRegion: str, accessibilityLabel: formatToPlainStringResult1, children: formatToPlainStringResult }), showHeader: todos.length > 0, superseded: flag3, expanded: flag4, onToggleExpanded, showLabel: intl4.string(flag2(3723).RKyN9q), hideLabel: intl5.string(flag2(3723).xydHoj), children: closure_7(closure_5, obj2) };
  formatToPlainStringResult1 = intl2.formatToPlainString(flag2(3723)["7tzwKB"], { completed: length, total: todos.length });
  const tmp9 = flag2(16664);
  intl3 = agents(1126).intl;
  str = "none";
  ConjureNativeCollapsibleMeta = agents(16664).ConjureNativeCollapsibleMeta;
  if (flag) {
    str = "none";
    if (!flag3) {
      str = "polite";
    }
  }
  intl4 = agents(1126).intl;
  intl5 = agents(1126).intl;
  obj2 = { style: tmp.list, children: items1 };
  items1 = [
    todos.map((status) => {
      let items;
      let items1;
      let str;
      let tmpResult;
      const obj = ConjureTodoState;
      const todoMarkResult = obj.todoMark(status.status, flag2);
      const obj2 = { style: row.row, children: items };
      items = [metroRequire(closure_10, { status: todoMarkResult }), , ];
      const Text = Text_Text.Text;
      if ("in_progress" === todoMarkResult) {
        str = "text-default";
      } else {
        str = "text-muted";
      }
      const obj3 = { variant: "text-sm/normal", color: str, style: items1, children: tmpResult.todoLabel(status, todoMarkResult) };
      items1 = [row.text, "completed" === todoMarkResult && row.textCompleted];
      tmpResult = ConjureTodoState;
      items[1] = metroRequire(Text, obj3);
      let tmp7Result = null;
      if ("completed" !== todoMarkResult) {
        let items2 = closure_3.get(status.id);
        if (items2 == null) {
          items2 = [];
        }
        const obj4 = { agents: items2 };
        tmp7Result = metroRequire(closure_9, obj4);
      }
      items[2] = tmp7Result;
      return metroImportDefault(hasOwnProperty, obj2, status.id);
    }),

  ];
  let tmp10Result = null;
  if (null != provisional) {
    tmp10Result = null;
    if ("" !== provisional) {
      let obj3 = { style: tmp.row, children: items2 };
      items2 = [closure_6(closure_10, { status: "pending" }), ];
      let obj4 = { variant: "text-sm/normal", color: "text-muted", style: tmp.text, children: provisional };
      items2[1] = closure_6(agents(4886).Text, obj4);
      tmp10Result = closure_7(closure_5, obj3);
    }
  }
  items1[1] = tmp10Result;
  return closure_6(tmp9, obj);
});
function todoProgress(arr) {
  const obj = { completed: arr.filter(f126090).length, total: arr.length };
  return obj;
}
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureTodoList.tsx");

export default tmp5;
export { todoProgress };