// discord_app/modules/conjure/agent_activity/native/ConjureTodoList.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3864 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FormCheckbox from "../../../../design/components/Forms/native/FormCheckbox.native.tsx";
import ConjureTodoState from "../ConjureTodoState.tsx";
import ConjureTodoAgents from "../ConjureTodoAgents.tsx";
import ConjureNativeStatusLine from "ConjureNativeStatusLine.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5005);
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
                    let intl = tmp(1125).intl;
                    const obj3 = { count: tmp6 };
                    obj2.accessibilityLabel = intl.formatToPlainString(items1(3864).SPGdDc, obj3);
                    const _HermesInternal = HermesInternal;
                    obj2.children = "+" + tmp6;
                    tmp18 = closure_6(tmp(5271).Text, obj2);
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
      obj.accessibilityLabel = intl.formatToPlainString(_modDef3864.TVvPCJ, { name: key.name, task: key.task });
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
          obj.accessibilityLabel = intl.formatToPlainString(_modDef3864.TVvPCJ, { name: key.name, task: key.task });
          return timestampProducer(hasOwnProperty, obj, key.key);
        }),

    ];
    let tmp9 = null;
    if (overflow > 0) {
      const obj3 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: null, children: null };
      let intl = tmp2(1125).intl;
      const obj4 = { count: overflow };
      obj3.accessibilityLabel = intl.formatToPlainString(items(3864).SPGdDc, obj4);
      const _HermesInternal = HermesInternal;
      obj3.children = "+" + overflow;
      tmp9 = closure_6(tmp2(5271).Text, obj3);
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
              let stringResult = intl4.string(_modDef3864.KvBdun);
            } else {
              if ("in_progress" === status) {
                const intl3 = util.intl;
                stringResult = intl3.string(_modDef3864["m5G9+S"]);
              } else if ("unfinished" !== status) {
                const intl = util.intl;
                stringResult = intl.string(_modDef3864.sPGeWi);
              }
              const intl2 = util.intl;
              stringResult = intl2.string(_modDef3864.lRpwhD);
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
      let stringResult1 = intl8.string(_modDef3864.KvBdun);
    } else {
      if ("in_progress" === status) {
        const intl7 = util.intl;
        stringResult1 = intl7.string(_modDef3864["m5G9+S"]);
      } else if ("unfinished" !== status) {
        const intl5 = util.intl;
        stringResult1 = intl5.string(_modDef3864.sPGeWi);
      }
      const intl6 = util.intl;
      stringResult1 = intl6.string(_modDef3864.lRpwhD);
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
        let stringResult = intl4.string(_modDef3864.KvBdun);
      } else if ("in_progress" === status) {
        const intl3 = util.intl;
        stringResult = intl3.string(_modDef3864["m5G9+S"]);
      } else if ("unfinished" === status) {
        const intl2 = util.intl;
        stringResult = intl2.string(_modDef3864.lRpwhD);
      } else {
        const intl = util.intl;
        stringResult = intl.string(_modDef3864.sPGeWi);
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
    let stringResult1 = intl8.string(_modDef3864.KvBdun);
    let tmp21 = require;
  } else {
    if ("in_progress" === status) {
      const intl7 = util.intl;
      stringResult1 = intl7.string(_modDef3864["m5G9+S"]);
      tmp21 = require;
    } else if ("unfinished" !== status) {
      tmp21 = require;
      const intl5 = util.intl;
      stringResult1 = intl5.string(_modDef3864.sPGeWi);
    }
    const intl6 = util.intl;
    stringResult1 = intl6.string(_modDef3864.lRpwhD);
    tmp21 = require;
  }
  { accessible: true, accessibilityRole: "image", accessibilityLabel: stringResult1, children: timestampProducer(tmp21(6961).FormCheckbox, { checked: "completed" === status }) };
});
ReactCompilerGating = fn(558);
const obj10 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_INFO };
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
          const intl2 = tmp(1125).intl;
          const stringResult = intl2.string(textCompleted(3864).RtzECX);
          cResult[12] = stringResult;
          let tmp26 = stringResult;
        } else {
          tmp26 = cResult[12];
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
              let tmp29 = cResult[16];
            }
            const _Symbol2 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(1125).intl;
              const intl4 = tmp(1125).intl;
              const stringResult2 = intl4.string(textCompleted(3864).xydHoj);
              class W {
                constructor(arg0) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[13]);
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
                  tmpResult = tmp(tmp2[13]);
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
              let tmp33 = stringResult2;
              let tmp32 = intl3.string(textCompleted(3864).RKyN9q);
              const stringResult1 = intl3.string(textCompleted(3864).RKyN9q);
            } else {
              tmp32 = cResult[17];
              tmp33 = cResult[18];
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
                              let tmp42 = cResult[35];
                            }
                            if (cResult[36] === tmp7.list) {
                              if (cResult[37] === tmp38) {
                                if (cResult[38] === tmp42) {
                                  let tmp50 = cResult[39];
                                }
                                if (cResult[40] === tmp6) {
                                  if (cResult[41] === onToggleExpanded) {
                                    if (cResult[42] === tmp5) {
                                      if (cResult[43] === tmp31) {
                                        if (cResult[44] === tmp50) {
                                          if (cResult[45] === tmp29) {
                                            let tmp54 = cResult[46];
                                          }
                                          return tmp54;
                                        }
                                      }
                                    }
                                  }
                                }
                                let obj2 = { title: tmp26, meta: tmp29, showHeader: tmp31, superseded: null, expanded: null, onToggleExpanded: null, showLabel: null, hideLabel: null, children: null };
                                class W {
                                  constructor(arg0) {
                                    tmp = closure_0;
                                    tmp2 = closure_2;
                                    obj = closure_0(closure_2[13]);
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
                                    tmpResult = tmp(tmp2[13]);
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
                                obj2.showLabel = tmp32;
                                obj2.hideLabel = tmp33;
                                obj2.children = tmp50;
                                const tmp57 = closure_6(textCompleted(12531), obj2);
                                cResult[40] = tmp6;
                                cResult[41] = onToggleExpanded;
                                cResult[42] = tmp5;
                                cResult[43] = tmp31;
                                cResult[44] = tmp50;
                                cResult[45] = tmp29;
                                cResult[46] = tmp57;
                                tmp54 = tmp57;
                              }
                            }
                            let obj3 = { style: tmp37, children: null };
                            let items = [tmp38, ];
                            class W {
                              constructor(arg0) {
                                tmp = closure_0;
                                tmp2 = closure_2;
                                obj = closure_0(closure_2[13]);
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
                                tmpResult = tmp(tmp2[13]);
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
                            const tmp53 = closure_7(closure_5, obj3);
                            cResult[36] = tmp7.list;
                            cResult[37] = tmp38;
                            cResult[38] = tmp42;
                            cResult[39] = tmp53;
                            tmp50 = tmp53;
                          }
                        }
                        let tmp44 = null;
                        if (null != provisional) {
                          tmp44 = null;
                          if ("" !== provisional) {
                            let obj4 = { style: tmp7.row, children: null };
                            let items1 = [closure_6(closure_10, { status: "pending" }), ];
                            class W {
                              constructor(arg0) {
                                tmp = closure_0;
                                tmp2 = closure_2;
                                obj = closure_0(closure_2[13]);
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
                                tmpResult = tmp(tmp2[13]);
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
                            tmp49[2] = tmp7.text;
                            tmp49[3] = provisional;
                            items1[1] = closure_6(tmp(5271).Text, tmp49);
                            obj4.children = items1;
                            tmp44 = closure_7(closure_5, obj4);
                          }
                        }
                        cResult[32] = provisional;
                        class W {
                          constructor(arg0) {
                            tmp = closure_0;
                            tmp2 = closure_2;
                            obj = closure_0(closure_2[13]);
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
                            tmpResult = tmp(tmp2[13]);
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
                        cResult[35] = tmp44;
                        tmp42 = tmp44;
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
                      let tmp39 = cResult[31];
                    }
                    const mapped = todos.map(tmp39);
                    cResult[19] = tmp8;
                    cResult[20] = textCompleted;
                    cResult[21] = tmp7.row;
                    class W {
                      constructor(arg0) {
                        tmp = closure_0;
                        tmp2 = closure_2;
                        obj = closure_0(closure_2[13]);
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
                        tmpResult = tmp(tmp2[13]);
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
                obj = closure_0(closure_2[13]);
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
                tmpResult = tmp(tmp2[13]);
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
            tmp39 = W;
          }
        }
        const obj5 = { accessibilityLiveRegion: str4, accessibilityLabel: tmp10, children: tmp9 };
        const tmp30 = closure_6(tmp(12531).ConjureNativeCollapsibleMeta, obj5);
        cResult[13] = tmp9;
        cResult[14] = tmp10;
        cResult[15] = str4;
        cResult[16] = tmp30;
        tmp29 = tmp30;
      }
    }
  }
  let obj = require("c");
  tmp4 = undefined === announceProgress || announceProgress;
  const forResult = Symbol.for("react.early_return_sentinel");
  const tmpResult = require("ConjureTodoState");
  ({ completed, total } = require("ConjureTodoState").todoProgress(todos));
  if (cResult[8] !== agents) {
    let items2 = agents;
    if (agents == null) {
      items2 = [];
    }
    cResult[8] = agents;
    cResult[9] = items2;
    let tmp15 = items2;
  } else {
    tmp15 = cResult[9];
  }
  if (cResult[10] !== tmp15) {
    const groupAgentsByTodoResult = tmp(12414).groupAgentsByTodo(tmp15);
    cResult[10] = tmp15;
    cResult[11] = groupAgentsByTodoResult;
    let tmp17 = groupAgentsByTodoResult;
    const tmpResult2 = tmp(12414);
  } else {
    tmp17 = cResult[11];
  }
  _require = tmp17;
  if (0 !== total) {
    const intl = tmp(1125).intl;
    const obj6 = { completed, total };
    const formatToPlainStringResult = intl.formatToPlainString(textCompleted(3864)["P/I+JW"], obj6);
    class W {
      constructor(arg0) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[13]);
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
        tmpResult = tmp(tmp2[13]);
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
    const obj7 = { completed, total };
    const tmp24Result = tmp24(textCompleted(3864)["7tzwKB"], obj7);
    let tmp20 = forResult;
  } else {
    tmp20 = null;
    if (null != provisional) {
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
  cResult[7] = total;
  tmp11 = tmp20;
  tmp10 = tmp24Result;
  tmp9 = formatToPlainStringResult;
  const todoProgressResult = require("ConjureTodoState").todoProgress(todos);
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
  let obj = agents(12399);
  ({ completed, total } = agents(12399).todoProgress(todos));
  let items = [agents];
  noop = noop.useMemo(() => {
    let items = agents;
    if (agents == null) {
      items = [];
    }
    return ConjureTodoAgents.groupAgentsByTodo(items);
  }, items);
  if (0 === total) {
    return null;
  }
  const intl = agents(1125).intl;
  const todoProgressResult = agents(12399).todoProgress(todos);
  const intl2 = agents(1125).intl;
  const formatToPlainStringResult = intl.formatToPlainString(flag2(3864)["P/I+JW"], { completed, total });
  let obj2 = { title: null, meta: null, showHeader: null, superseded: null, expanded: null, onToggleExpanded: null, showLabel: null, hideLabel: null, children: null };
  const formatToPlainStringResult1 = intl2.formatToPlainString(flag2(3864)["7tzwKB"], { completed, total });
  const intl3 = agents(1125).intl;
  obj2.title = intl3.string(flag2(3864).RtzECX);
  let str = "none";
  if (flag) {
    str = "none";
    if (!flag3) {
      str = "polite";
    }
  }
  obj2.meta = closure_6(agents(12531).ConjureNativeCollapsibleMeta, { accessibilityLiveRegion: str, accessibilityLabel: formatToPlainStringResult1, children: formatToPlainStringResult });
  obj2.showHeader = total > 0;
  obj2.superseded = flag3;
  obj2.expanded = flag4;
  obj2.onToggleExpanded = announceProgress.onToggleExpanded;
  const intl4 = agents(1125).intl;
  obj2.showLabel = intl4.string(flag2(3864).RKyN9q);
  const intl5 = agents(1125).intl;
  obj2.hideLabel = intl5.string(flag2(3864).xydHoj);
  let obj3 = { style: tmp.list, children: null };
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
  let tmp11Result = null;
  if (null != provisional) {
    tmp11Result = null;
    if ("" !== provisional) {
      let obj4 = { style: tmp.row, children: null };
      let items2 = [closure_6(closure_10, { status: "pending" }), ];
      const obj5 = { variant: "text-sm/normal", color: "text-muted", style: tmp.text, children: provisional };
      items2[1] = closure_6(agents(5271).Text, obj5);
      obj4.children = items2;
      tmp11Result = closure_7(closure_5, obj4);
    }
  }
  items1[1] = tmp11Result;
  obj3.children = items1;
  obj2.children = closure_7(closure_5, obj3);
  return closure_6(flag2(12531), obj2);
});