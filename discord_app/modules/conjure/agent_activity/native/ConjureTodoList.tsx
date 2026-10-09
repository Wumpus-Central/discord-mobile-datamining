// discord_app/modules/conjure/agent_activity/native/ConjureTodoList.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3827 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FormCheckbox from "../../../../design/components/Forms/native/FormCheckbox.native.tsx";
import ConjureNativeStatusLine from "ConjureNativeStatusLine.tsx";
import ConjureTodoAgents from "../ConjureTodoAgents.tsx";
import ConjureTodoState from "../ConjureTodoState.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { list: { gap: nativeDefault.space.PX_8 }, row: null, marker: null, markerUnfinished: null, markerInProgress: null, markerSpinner: null, text: null, agents: null, agentMark: null, agentMarkTint0: null, agentMarkTint1: null, agentMarkTint2: null, agentMarkTint3: null, textCompleted: null };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.row = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
let size = { width: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, height: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_WIDTH, borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT };
obj2.marker = size;
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
obj2.markerUnfinished = { borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG };
obj2.markerInProgress = { borderWidth: 0 };
const size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj2.markerSpinner = size1;
obj2.text = { flexShrink: 1 };
let obj5 = { borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG };
obj2.agents = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, marginLeft: "auto", paddingLeft: nativeDefault.space.PX_8 };
const size2 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
obj2.agentMark = size2;
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, marginLeft: "auto", paddingLeft: nativeDefault.space.PX_8 };
obj2.agentMarkTint0 = { backgroundColor: nativeDefault.colors.TEXT_BRAND };
let obj7 = { backgroundColor: nativeDefault.colors.TEXT_BRAND };
obj2.agentMarkTint1 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
const obj8 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj2.agentMarkTint2 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
const obj9 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
obj2.agentMarkTint3 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_INFO };
obj2.textCompleted = { textDecorationLine: "line-through" };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function TodoAgents(agents) {
  const cResult = require("c").c(19);
  agents = agents.agents;
  const tmp4 = closure_8();
  _require = tmp4;
  if (cResult[0] === agents) {
    if (cResult[1] === tmp4.agentMark) {
      if (cResult[2] === tmp4.agentMarkTint0) {
        if (cResult[3] === tmp4.agentMarkTint1) {
          if (cResult[4] === tmp4.agentMarkTint2) {
            if (cResult[5] === tmp4.agentMarkTint3) {
              if (cResult[6] === tmp4.agents) {
                let tmp5 = cResult[7];
                let tmp6 = cResult[8];
                let tmp7 = cResult[9];
                let tmp8 = cResult[10];
                let tmp9 = cResult[11];
              }
              const _Symbol = Symbol;
              if (tmp9 !== Symbol.for("react.early_return_sentinel")) {
                return tmp9;
              } else {
                if (cResult[12] !== tmp6) {
                  let tmp18 = null;
                  if (tmp6 > 0) {
                    let obj2 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: null, children: null };
                    let intl = tmp(1126).intl;
                    const obj3 = { count: tmp6 };
                    obj2.accessibilityLabel = intl.formatToPlainString(items1(3827).SPGdDc, obj3);
                    const _HermesInternal = HermesInternal;
                    obj2.children = "+" + tmp6;
                    tmp18 = closure_6(tmp(5087).Text, obj2);
                  }
                  cResult[12] = tmp6;
                  cResult[13] = tmp18;
                  let tmp17 = tmp18;
                } else {
                  tmp17 = cResult[13];
                }
                if (cResult[14] === tmp5) {
                  if (cResult[15] === tmp7) {
                    if (cResult[16] === tmp8) {
                    }
                  }
                }
                const obj4 = { style: tmp7, children: null };
                let items = [tmp8, tmp17];
                obj4.children = items;
                const tmp23 = closure_7(tmp5, obj4);
                cResult[14] = tmp5;
                cResult[15] = tmp7;
                cResult[16] = tmp8;
                cResult[17] = tmp17;
                cResult[18] = tmp23;
              }
            }
          }
        }
      }
    }
  }
  let obj = require("c");
  const forResult = Symbol.for("react.early_return_sentinel");
  const tmpResult = require("ConjureTodoAgents");
  ({ shown, overflow } = require("ConjureTodoAgents").splitAgentOverflow(agents));
  items1 = [, , , ];
  ({ agentMarkTint0: arr[0], agentMarkTint1: arr[1], agentMarkTint2: arr[2], agentMarkTint3: arr[3] } = tmp4);
  let tmp12 = null;
  let mapped;
  let agents1;
  let tmp15;
  if (0 !== shown.length) {
    tmp15 = closure_5;
    agents1 = tmp4.agents;
    mapped = shown.map((key) => {
      const obj = { style: null, accessibilityRole: "image", accessibilityLabel: null };
      const items = [agentMark.agentMark, ];
      items[1] = items1[ConjureNativeStatusLine.laneTintIndexFor(key.key) % ConjureNativeStatusLine.LANE_TINT_COUNT];
      obj.style = items;
      const intl = util.intl;
      obj.accessibilityLabel = intl.formatToPlainString(_modDef3827.TVvPCJ, { name: key.name, task: key.task });
      return timestampProducer(hasOwnProperty, obj, key.key);
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
  const splitAgentOverflowResult = require("ConjureTodoAgents").splitAgentOverflow(agents);
}) : (function TodoAgents(agents) {
  const tmp = closure_8();
  _require = tmp;
  let obj = require("ConjureTodoAgents");
  ({ shown, overflow } = require("ConjureTodoAgents").splitAgentOverflow(agents.agents));
  let items = [, , , ];
  ({ agentMarkTint0: arr[0], agentMarkTint1: arr[1], agentMarkTint2: arr[2], agentMarkTint3: arr[3] } = tmp);
  let tmp10Result = null;
  if (0 !== shown.length) {
    let obj2 = { style: tmp.agents, children: null };
    const items1 = [
      shown.map((key) => {
          const obj = { style: null, accessibilityRole: "image", accessibilityLabel: null };
          items = [agentMark.agentMark, ];
          items[1] = items[ConjureNativeStatusLine.laneTintIndexFor(key.key) % ConjureNativeStatusLine.LANE_TINT_COUNT];
          obj.style = items;
          const intl = util.intl;
          obj.accessibilityLabel = intl.formatToPlainString(_modDef3827.TVvPCJ, { name: key.name, task: key.task });
          return timestampProducer(hasOwnProperty, obj, key.key);
        }),

    ];
    let tmp9 = null;
    if (overflow > 0) {
      const obj3 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: null, children: null };
      let intl = tmp2(1126).intl;
      const obj4 = { count: overflow };
      obj3.accessibilityLabel = intl.formatToPlainString(items(3827).SPGdDc, obj4);
      const _HermesInternal = HermesInternal;
      obj3.children = "+" + overflow;
      tmp9 = closure_6(tmp2(5087).Text, obj3);
    }
    items1[1] = tmp9;
    obj2.children = items1;
    tmp10Result = closure_7(closure_5, obj2);
  }
  return tmp10Result;
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function TodoMarker(status) {
  const cResult = c.c(20);
  status = status.status;
  const tmp4 = closure_8();
  if ("completed" !== status) {
    if ("pending" !== status) {
      let markerInProgress = tmp37;
      if ("in_progress" === status) {
        markerInProgress = tmp4.markerInProgress;
      }
      if (cResult[7] === tmp4.marker) {
        if (cResult[8] === markerInProgress) {
          if (cResult[9] === tmp6) {
            let tmp7 = cResult[10];
          }
          if (cResult[11] !== status) {
            if ("completed" === status) {
              const intl4 = util.intl;
              let stringResult = intl4.string(_modDef3827.KvBdun);
            } else {
              if ("in_progress" === status) {
                const intl3 = util.intl;
                stringResult = intl3.string(_modDef3827["m5G9+S"]);
              } else if ("unfinished" !== status) {
                const intl = util.intl;
                stringResult = intl.string(_modDef3827.sPGeWi);
              }
              const intl2 = util.intl;
              stringResult = intl2.string(_modDef3827.lRpwhD);
            }
            cResult[11] = status;
            cResult[12] = stringResult;
          } else {
            if (cResult[13] === status) {
              if (cResult[14] === tmp4.markerSpinner) {
                let tmp15 = cResult[15];
              }
              if (cResult[16] === tmp7) {
                if (cResult[17] === tmp8) {
                  if (cResult[18] === tmp15) {
                    let tmp19 = cResult[19];
                  }
                  return tmp19;
                }
              }
              const obj2 = { style: tmp7, accessibilityRole: "image", accessibilityLabel: tmp8, children: tmp15 };
              const tmp22 = timestampProducer(hasOwnProperty, obj2);
              cResult[16] = tmp7;
              cResult[17] = tmp8;
              cResult[18] = tmp15;
              cResult[19] = tmp22;
              tmp19 = tmp22;
            }
            let tmp16 = null;
            if (tmp37) {
              const obj3 = { size: "small", style: tmp4.markerSpinner };
              tmp16 = timestampProducer(React4, obj3);
            }
            cResult[13] = status;
            cResult[14] = tmp4.markerSpinner;
            cResult[15] = tmp16;
            tmp15 = tmp16;
          }
        }
      }
      const items = [tmp4.marker, markerInProgress, "unfinished" === status && tmp4.markerUnfinished];
      cResult[7] = tmp4.marker;
      cResult[8] = markerInProgress;
      cResult[9] = "unfinished" === status && tmp4.markerUnfinished;
      cResult[10] = items;
      tmp7 = items;
    }
  }
  if (cResult[0] !== status) {
    if ("completed" === status) {
      const intl8 = util.intl;
      let stringResult1 = intl8.string(_modDef3827.KvBdun);
    } else {
      if ("in_progress" === status) {
        const intl7 = util.intl;
        stringResult1 = intl7.string(_modDef3827["m5G9+S"]);
      } else if ("unfinished" !== status) {
        const intl5 = util.intl;
        stringResult1 = intl5.string(_modDef3827.sPGeWi);
      }
      const intl6 = util.intl;
      stringResult1 = intl6.string(_modDef3827.lRpwhD);
    }
    cResult[0] = status;
    cResult[1] = stringResult1;
  } else {
    if (cResult[2] !== tmp5) {
      const obj4 = { checked: tmp5 };
      const tmp32 = timestampProducer(FormCheckbox.FormCheckbox, obj4);
      cResult[2] = tmp5;
      cResult[3] = tmp32;
      let tmp30 = tmp32;
    } else {
      tmp30 = cResult[3];
    }
    if (cResult[4] === cResult[1]) {
      if (cResult[5] === tmp30) {
        let tmp33 = cResult[6];
      }
      return tmp33;
    }
    const obj5 = { accessible: true, accessibilityRole: "image", accessibilityLabel: cResult[1], children: tmp30 };
    const tmp36 = timestampProducer(hasOwnProperty, obj5);
    cResult[4] = cResult[1];
    cResult[5] = tmp30;
    cResult[6] = tmp36;
    tmp33 = tmp36;
  }
}) : (function TodoMarker(status) {
  status = status.status;
  const tmp = closure_8();
  if ("completed" !== status) {
    if ("pending" !== status) {
      const items = [tmp.marker, , ];
      let markerInProgress = tmp34;
      if ("in_progress" === status) {
        markerInProgress = tmp.markerInProgress;
      }
      items[1] = markerInProgress;
      const obj = { style: null, accessibilityRole: "image", accessibilityLabel: null, children: null };
      items[2] = "unfinished" === status && tmp.markerUnfinished;
      obj.style = items;
      if ("completed" === status) {
        const intl4 = util.intl;
        let stringResult = intl4.string(_modDef3827.KvBdun);
      } else if ("in_progress" === status) {
        const intl3 = util.intl;
        stringResult = intl3.string(_modDef3827["m5G9+S"]);
      } else if ("unfinished" === status) {
        const intl2 = util.intl;
        stringResult = intl2.string(_modDef3827.lRpwhD);
      } else {
        const intl = util.intl;
        stringResult = intl.string(_modDef3827.sPGeWi);
      }
      obj.accessibilityLabel = stringResult;
      let tmp2Result = null;
      if ("in_progress" === status) {
        const obj2 = { size: "small", style: tmp.markerSpinner };
        tmp2Result = timestampProducer(React4, obj2);
      }
      obj.children = tmp2Result;
      return timestampProducer(tmp3, obj);
    }
  }
  if ("completed" === status) {
    const intl8 = util.intl;
    let stringResult1 = intl8.string(_modDef3827.KvBdun);
    let tmp21 = require;
  } else {
    if ("in_progress" === status) {
      const intl7 = util.intl;
      stringResult1 = intl7.string(_modDef3827["m5G9+S"]);
      tmp21 = require;
    } else if ("unfinished" !== status) {
      tmp21 = require;
      const intl5 = util.intl;
      stringResult1 = intl5.string(_modDef3827.sPGeWi);
    }
    const intl6 = util.intl;
    stringResult1 = intl6.string(_modDef3827.lRpwhD);
    tmp21 = require;
  }
  { accessible: true, accessibilityRole: "image", accessibilityLabel: stringResult1, children: timestampProducer(tmp21(6184).FormCheckbox, { checked: "completed" === status }) };
});
ReactCompilerGating = fn(558);
const obj10 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_INFO };
function todoProgress(arr) {
  return { completed: arr.filter((status) => "completed" === status.status).length, total: arr.length };
}
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureTodoList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureTodoList(arg0) {
  const cResult = require("c").c(47);
  ({ todos, provisional, agents, announceProgress, live, superseded, expanded, onToggleExpanded } = arg0);
  textCompleted = undefined === live || live;
  const tmp7 = closure_8();
  dependencyMap = tmp7;
  if (cResult[0] === agents) {
    if (cResult[1] === provisional) {
      if (cResult[2] === todos) {
        _require = cResult[3];
        let tmp9 = cResult[4];
        let tmp10 = cResult[5];
        let tmp11 = cResult[6];
      }
      const _Symbol = Symbol;
      if (tmp11 !== Symbol.for("react.early_return_sentinel")) {
        return tmp11;
      } else {
        const _Symbol3 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult = intl2.string(textCompleted(3827).RtzECX);
          cResult[12] = stringResult;
          let tmp25 = stringResult;
        } else {
          tmp25 = cResult[12];
        }
        let str4 = "none";
        if (tmp4) {
          str4 = "none";
          if (!tmp5) {
            str4 = "polite";
          }
        }
        if (cResult[13] === tmp9) {
          if (cResult[14] === tmp10) {
            if (cResult[15] === str4) {
              let tmp28 = cResult[16];
            }
            const _Symbol2 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(1126).intl;
              const intl4 = tmp(1126).intl;
              const stringResult2 = intl4.string(textCompleted(3827).xydHoj);
              class W {
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
                  items[0] = jsx(TodoMarker, { status: todoMarkResult });
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
                  items[1] = tmp7(closure_0(closure_2[11]).Text, obj6);
                  tmp7Result = null;
                  if ("completed" !== todoMarkResult) {
                    tmp10 = closure_0;
                    tmp9 = TodoAgents;
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
              let tmp32 = stringResult2;
              let tmp31 = intl3.string(textCompleted(3827).RKyN9q);
              const stringResult1 = intl3.string(textCompleted(3827).RKyN9q);
            } else {
              tmp31 = cResult[17];
              tmp32 = cResult[18];
            }
            if (cResult[19] === tmp8) {
              if (cResult[20] === textCompleted) {
                if (cResult[21] === tmp7.row) {
                  if (cResult[22] === tmp7.text) {
                    if (cResult[23] === tmp7.textCompleted) {
                      if (cResult[24] === todos) {
                        if (cResult[32] === provisional) {
                          if (cResult[33] === tmp7.row) {
                            if (cResult[34] === tmp7.text) {
                              let tmp41 = cResult[35];
                            }
                            if (cResult[36] === tmp7.list) {
                              if (cResult[37] === tmp37) {
                                if (cResult[38] === tmp41) {
                                  let tmp49 = cResult[39];
                                }
                                if (cResult[40] === tmp6) {
                                  if (cResult[41] === onToggleExpanded) {
                                    if (cResult[42] === tmp5) {
                                      if (cResult[43] === tmp30) {
                                        if (cResult[44] === tmp49) {
                                          if (cResult[45] === tmp28) {
                                            let tmp53 = cResult[46];
                                          }
                                          return tmp53;
                                        }
                                      }
                                    }
                                  }
                                }
                                let obj2 = { title: tmp25, meta: tmp28, showHeader: tmp30, superseded: null, expanded: null, onToggleExpanded: null, showLabel: null, hideLabel: null, children: null };
                                class W {
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
                                    items[0] = jsx(TodoMarker, { status: todoMarkResult });
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
                                    items[1] = tmp7(closure_0(closure_2[11]).Text, obj6);
                                    tmp7Result = null;
                                    if ("completed" !== todoMarkResult) {
                                      tmp10 = closure_0;
                                      tmp9 = TodoAgents;
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
                                obj2.expanded = tmp6;
                                obj2.onToggleExpanded = onToggleExpanded;
                                obj2.showLabel = tmp31;
                                obj2.hideLabel = tmp32;
                                obj2.children = tmp49;
                                const tmp56 = closure_6(textCompleted(17081), obj2);
                                cResult[40] = tmp6;
                                cResult[41] = onToggleExpanded;
                                cResult[42] = tmp5;
                                cResult[43] = tmp30;
                                cResult[44] = tmp49;
                                cResult[45] = tmp28;
                                cResult[46] = tmp56;
                                tmp53 = tmp56;
                              }
                            }
                            let obj3 = { style: tmp36, children: null };
                            let items = [tmp37, ];
                            class W {
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
                                items[0] = jsx(TodoMarker, { status: todoMarkResult });
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
                                items[1] = tmp7(closure_0(closure_2[11]).Text, obj6);
                                tmp7Result = null;
                                if ("completed" !== todoMarkResult) {
                                  tmp10 = closure_0;
                                  tmp9 = TodoAgents;
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
                            obj3.children = items;
                            const tmp52 = closure_7(closure_5, obj3);
                            cResult[36] = tmp7.list;
                            cResult[37] = tmp37;
                            cResult[38] = tmp41;
                            cResult[39] = tmp52;
                            tmp49 = tmp52;
                          }
                        }
                        let tmp43 = null;
                        if (null != provisional) {
                          tmp43 = null;
                          if ("" !== provisional) {
                            let obj4 = { style: tmp7.row, children: null };
                            let items1 = [closure_6(closure_10, { status: "pending" }), ];
                            class W {
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
                                items[0] = jsx(TodoMarker, { status: todoMarkResult });
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
                                items[1] = tmp7(closure_0(closure_2[11]).Text, obj6);
                                tmp7Result = null;
                                if ("completed" !== todoMarkResult) {
                                  tmp10 = closure_0;
                                  tmp9 = TodoAgents;
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
                            tmp48[2] = tmp7.text;
                            tmp48[3] = provisional;
                            items1[1] = closure_6(tmp(5087).Text, tmp48);
                            obj4.children = items1;
                            tmp43 = closure_7(closure_5, obj4);
                          }
                        }
                        cResult[32] = provisional;
                        class W {
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
                            items[0] = jsx(TodoMarker, { status: todoMarkResult });
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
                            items[1] = tmp7(closure_0(closure_2[11]).Text, obj6);
                            tmp7Result = null;
                            if ("completed" !== todoMarkResult) {
                              tmp10 = closure_0;
                              tmp9 = TodoAgents;
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
                        cResult[34] = tmp7.text;
                        cResult[35] = tmp43;
                        tmp41 = tmp43;
                      }
                    }
                  }
                }
              }
            }
            if (cResult[26] === tmp8) {
              if (cResult[27] === textCompleted) {
                if (cResult[28] === tmp7.row) {
                  if (cResult[29] === tmp7.text) {
                    if (cResult[30] === tmp7.textCompleted) {
                      let tmp38 = cResult[31];
                    }
                    const mapped = todos.map(tmp38);
                    cResult[19] = tmp8;
                    cResult[20] = textCompleted;
                    cResult[21] = tmp7.row;
                    class W {
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
                        items[0] = jsx(TodoMarker, { status: todoMarkResult });
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
                        items[1] = tmp7(closure_0(closure_2[11]).Text, obj6);
                        tmp7Result = null;
                        if ("completed" !== todoMarkResult) {
                          tmp10 = closure_0;
                          tmp9 = TodoAgents;
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
                    ({ text: tmp3[22], textCompleted } = tmp7);
                    cResult[23] = textCompleted;
                    cResult[24] = todos;
                    cResult[25] = mapped;
                  }
                }
              }
            }
            class W {
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
                items[0] = jsx(TodoMarker, { status: todoMarkResult });
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
                items[1] = tmp7(closure_0(closure_2[11]).Text, obj6);
                tmp7Result = null;
                if ("completed" !== todoMarkResult) {
                  tmp10 = closure_0;
                  tmp9 = TodoAgents;
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
            cResult[26] = tmp8;
            cResult[27] = textCompleted;
            cResult[28] = tmp7.row;
            cResult[29] = tmp7.text;
            cResult[30] = tmp7.textCompleted;
            cResult[31] = W;
            tmp38 = W;
          }
        }
        const obj5 = { accessibilityLiveRegion: str4, accessibilityLabel: tmp10, children: tmp9 };
        const tmp29 = closure_6(tmp(17081).ConjureNativeCollapsibleMeta, obj5);
        cResult[13] = tmp9;
        cResult[14] = tmp10;
        cResult[15] = str4;
        cResult[16] = tmp29;
        tmp28 = tmp29;
      }
    }
  }
  let obj = require("c");
  tmp4 = undefined === announceProgress || announceProgress;
  const length = todos.filter((status) => "completed" === status.status).length;
  if (cResult[8] !== agents) {
    let items2 = agents;
    if (agents == null) {
      items2 = [];
    }
    cResult[8] = agents;
    cResult[9] = items2;
    let tmp14 = items2;
  } else {
    tmp14 = cResult[9];
  }
  if (cResult[10] !== tmp14) {
    const groupAgentsByTodoResult = tmp(17147).groupAgentsByTodo(tmp14);
    cResult[10] = tmp14;
    cResult[11] = groupAgentsByTodoResult;
    let tmp16 = groupAgentsByTodoResult;
    const tmpResult = tmp(17147);
  } else {
    tmp16 = cResult[11];
  }
  _require = tmp16;
  if (0 !== todos.length) {
    const intl = tmp(1126).intl;
    const obj6 = { completed: length, total: length2 };
    const formatToPlainStringResult = intl.formatToPlainString(textCompleted(3827)["P/I+JW"], obj6);
    class W {
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
        items[0] = jsx(TodoMarker, { status: todoMarkResult });
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
        items[1] = tmp7(closure_0(closure_2[11]).Text, obj6);
        tmp7Result = null;
        if ("completed" !== todoMarkResult) {
          tmp10 = closure_0;
          tmp9 = TodoAgents;
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
    const obj7 = { completed: length, total: length2 };
    const tmp23Result = tmp23(textCompleted(3827)["7tzwKB"], obj7);
    let tmp19 = forResult;
  } else {
    tmp19 = null;
    if (null != provisional) {
      tmp19 = null;
    }
  }
  cResult[0] = agents;
  cResult[1] = provisional;
  cResult[2] = todos;
  cResult[3] = tmp16;
  cResult[4] = formatToPlainStringResult;
  cResult[5] = tmp23Result;
  cResult[6] = tmp19;
  cResult[7] = todos.length;
  tmp11 = tmp19;
  tmp10 = tmp23Result;
  tmp9 = formatToPlainStringResult;
  forResult = Symbol.for("react.early_return_sentinel");
}) : (function ConjureTodoList(announceProgress) {
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
  noop = undefined;
  const tmp = closure_8();
  dependencyMap = tmp;
  const length = todos.filter((status) => "completed" === status.status).length;
  let items = [agents];
  noop = noop.useMemo(() => {
    let items = agents;
    if (agents == null) {
      items = [];
    }
    return ConjureTodoAgents.groupAgentsByTodo(items);
  }, items);
  if (0 === todos.length) {
    return null;
  }
  const intl = agents(1126).intl;
  const intl2 = agents(1126).intl;
  const formatToPlainStringResult = intl.formatToPlainString(flag2(3827)["P/I+JW"], { completed: length, total: todos.length });
  let obj = { title: null, meta: null, showHeader: null, superseded: null, expanded: null, onToggleExpanded: null, showLabel: null, hideLabel: null, children: null };
  const formatToPlainStringResult1 = intl2.formatToPlainString(flag2(3827)["7tzwKB"], { completed: length, total: todos.length });
  const intl3 = agents(1126).intl;
  obj.title = intl3.string(flag2(3827).RtzECX);
  let str = "none";
  if (flag) {
    str = "none";
    if (!flag3) {
      str = "polite";
    }
  }
  obj.meta = closure_6(agents(17081).ConjureNativeCollapsibleMeta, { accessibilityLiveRegion: str, accessibilityLabel: formatToPlainStringResult1, children: formatToPlainStringResult });
  obj.showHeader = todos.length > 0;
  obj.superseded = flag3;
  obj.expanded = flag4;
  obj.onToggleExpanded = announceProgress.onToggleExpanded;
  const intl4 = agents(1126).intl;
  obj.showLabel = intl4.string(flag2(3827).RKyN9q);
  const intl5 = agents(1126).intl;
  obj.hideLabel = intl5.string(flag2(3827).xydHoj);
  let obj2 = { style: tmp.list, children: null };
  let items1 = [
    todos.map((status) => {
      const todoMarkResult = ConjureTodoState.todoMark(status.status, flag2);
      const obj2 = { style: row.row, children: null };
      const items = [timestampProducer(closure_10, { status: todoMarkResult }), , ];
      if ("in_progress" === todoMarkResult) {
        let str = "text-default";
      } else {
        str = "text-muted";
      }
      const obj3 = { variant: "text-sm/normal", color: str, style: null, children: null };
      const items1 = [row.text, "completed" === todoMarkResult && row.textCompleted];
      obj3.style = items1;
      obj3.children = ConjureTodoState.todoLabel(status, todoMarkResult);
      items[1] = timestampProducer(Text_Text.Text, obj3);
      let tmp7Result = null;
      if ("completed" !== todoMarkResult) {
        let items2 = closure_3.get(status.id);
        if (items2 == null) {
          items2 = [];
        }
        const obj4 = { agents: items2 };
        tmp7Result = timestampProducer(closure_9, obj4);
      }
      items[2] = tmp7Result;
      obj2.children = items;
      return React5(hasOwnProperty, obj2, status.id);
    }),

  ];
  let tmp10Result = null;
  if (null != provisional) {
    tmp10Result = null;
    if ("" !== provisional) {
      let obj3 = { style: tmp.row, children: null };
      let items2 = [closure_6(closure_10, { status: "pending" }), ];
      let obj4 = { variant: "text-sm/normal", color: "text-muted", style: tmp.text, children: provisional };
      items2[1] = closure_6(agents(5087).Text, obj4);
      obj3.children = items2;
      tmp10Result = closure_7(closure_5, obj3);
    }
  }
  items1[1] = tmp10Result;
  obj2.children = items1;
  obj.children = closure_7(closure_5, obj2);
  return closure_6(flag2(17081), obj);
});
export { todoProgress };