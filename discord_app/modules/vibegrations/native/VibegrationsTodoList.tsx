// === Module 16702: VibegrationsTodoList ===

// Module 16702 (VibegrationsTodoList)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import Text_Text from "Text/Text" /* 4886 */;
import CheckmarkSmallBoldIcon from "CheckmarkSmallBoldIcon" /* 8962 */;
import VibegrationsNativeStatusLine from "VibegrationsNativeStatusLine" /* 16643 */;
import VibegrationsTodoAgents from "VibegrationsTodoAgents" /* 16688 */;
import VibegrationsTodoState from "VibegrationsTodoState" /* 16703 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { list: { gap: nativeDefault.space.PX_8 }, row: null, marker: null, markerCompleted: null, markerUnfinished: null, markerInProgress: null, markerSpinner: null, text: null, agents: null, agentMark: null, agentMarkTint0: null, agentMarkTint1: null, agentMarkTint2: null, agentMarkTint3: null, textCompleted: null };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.row = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
let size = { width: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, height: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_WIDTH, borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT };
obj2.marker = size;
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
obj2.markerCompleted = { borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT };
let obj5 = { borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT };
obj2.markerUnfinished = { borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG };
obj2.markerInProgress = { borderWidth: 0 };
const size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj2.markerSpinner = size1;
obj2.text = { flexShrink: 1 };
let obj6 = { borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG };
obj2.agents = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, marginLeft: "auto", paddingLeft: nativeDefault.space.PX_8 };
const size2 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
obj2.agentMark = size2;
let obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, marginLeft: "auto", paddingLeft: nativeDefault.space.PX_8 };
obj2.agentMarkTint0 = { backgroundColor: nativeDefault.colors.TEXT_BRAND };
let obj8 = { backgroundColor: nativeDefault.colors.TEXT_BRAND };
obj2.agentMarkTint1 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
const obj9 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj2.agentMarkTint2 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
const obj10 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
obj2.agentMarkTint3 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_INFO };
obj2.textCompleted = { textDecorationLine: "line-through" };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((agents) => {
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
                    obj2.accessibilityLabel = intl.formatToPlainString(items1(3723).Vpu1Pd, obj3);
                    const _HermesInternal = HermesInternal;
                    obj2.children = "+" + tmp6;
                    tmp18 = closure_6(tmp(4886).Text, obj2);
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
  const tmpResult = require("VibegrationsTodoAgents");
  ({ shown, overflow } = require("VibegrationsTodoAgents").splitAgentOverflow(agents));
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
      items[1] = items1[VibegrationsNativeStatusLine.laneTintIndexFor(key.key) % VibegrationsNativeStatusLine.LANE_TINT_COUNT];
      obj.style = items;
      const intl = util.intl;
      obj.accessibilityLabel = intl.formatToPlainString(_modDef3723.yTB8eu, { name: key.name, task: key.task });
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
  const splitAgentOverflowResult = require("VibegrationsTodoAgents").splitAgentOverflow(agents);
}) : ((agents) => {
  const tmp = closure_8();
  _require = tmp;
  let obj = require("VibegrationsTodoAgents");
  ({ shown, overflow } = require("VibegrationsTodoAgents").splitAgentOverflow(agents.agents));
  let items = [, , , ];
  ({ agentMarkTint0: arr[0], agentMarkTint1: arr[1], agentMarkTint2: arr[2], agentMarkTint3: arr[3] } = tmp);
  let tmp10Result = null;
  if (0 !== shown.length) {
    let obj2 = { style: tmp.agents, children: null };
    const items1 = [
      shown.map((key) => {
          const obj = { style: null, accessibilityRole: "image", accessibilityLabel: null };
          items = [agentMark.agentMark, ];
          items[1] = items[VibegrationsNativeStatusLine.laneTintIndexFor(key.key) % VibegrationsNativeStatusLine.LANE_TINT_COUNT];
          obj.style = items;
          const intl = util.intl;
          obj.accessibilityLabel = intl.formatToPlainString(_modDef3723.yTB8eu, { name: key.name, task: key.task });
          return timestampProducer(hasOwnProperty, obj, key.key);
        }),

    ];
    let tmp9 = null;
    if (overflow > 0) {
      const obj3 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: null, children: null };
      let intl = tmp2(1126).intl;
      const obj4 = { count: overflow };
      obj3.accessibilityLabel = intl.formatToPlainString(items(3723).Vpu1Pd, obj4);
      const _HermesInternal = HermesInternal;
      obj3.children = "+" + overflow;
      tmp9 = closure_6(tmp2(4886).Text, obj3);
    }
    items1[1] = tmp9;
    obj2.children = items1;
    tmp10Result = closure_7(closure_5, obj2);
  }
  return tmp10Result;
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((status) => {
  const cResult = c.c(17);
  status = status.status;
  const tmp4 = closure_8();
  let markerCompleted = tmp5;
  if ("completed" === status) {
    markerCompleted = tmp4.markerCompleted;
  }
  let markerInProgress = tmp6;
  if ("in_progress" === status) {
    markerInProgress = tmp4.markerInProgress;
  }
  if (cResult[0] === tmp4.marker) {
    if (cResult[1] === markerCompleted) {
      if (cResult[2] === markerInProgress) {
        if (cResult[3] === tmp7) {
          let tmp8 = cResult[4];
        }
        if (cResult[5] !== status) {
          if ("completed" === status) {
            const intl4 = util.intl;
            let stringResult = intl4.string(_modDef3723.TkPGOH);
          } else {
            if ("in_progress" === status) {
              const intl3 = util.intl;
              stringResult = intl3.string(_modDef3723["oK+fmd"]);
            } else if ("unfinished" !== status) {
              const intl = util.intl;
              stringResult = intl.string(_modDef3723.d7lieu);
            }
            const intl2 = util.intl;
            stringResult = intl2.string(_modDef3723["1ley3g"]);
          }
          cResult[5] = status;
          cResult[6] = stringResult;
        } else {
          if (cResult[7] === status) {
            if (cResult[8] === tmp4.markerSpinner) {
              let tmp16 = cResult[9];
            }
            if (cResult[10] !== status) {
              let tmp21 = null;
              if (tmp5) {
                const obj2 = { size: "xs", color: nativeDefault.colors.CHECKBOX_ICON_ACTIVE };
                tmp21 = timestampProducer(CheckmarkSmallBoldIcon.CheckmarkSmallBoldIcon, obj2);
              }
              cResult[10] = status;
              cResult[11] = tmp21;
              let tmp20 = tmp21;
            } else {
              tmp20 = cResult[11];
            }
            if (cResult[12] === tmp8) {
              if (cResult[13] === tmp9) {
                if (cResult[14] === tmp16) {
                  if (cResult[15] === tmp20) {
                    let tmp24 = cResult[16];
                  }
                  return tmp24;
                }
              }
            }
            const obj3 = { style: tmp8, accessibilityRole: "image", accessibilityLabel: tmp9, children: null };
            const items = [tmp16, tmp20];
            obj3.children = items;
            const tmp27 = React5(hasOwnProperty, obj3);
            cResult[12] = tmp8;
            cResult[13] = tmp9;
            cResult[14] = tmp16;
            cResult[15] = tmp20;
            cResult[16] = tmp27;
            tmp24 = tmp27;
          }
          let tmp17 = null;
          if (tmp6) {
            const obj4 = { size: "small", style: tmp4.markerSpinner };
            tmp17 = timestampProducer(React4, obj4);
          }
          cResult[7] = status;
          cResult[8] = tmp4.markerSpinner;
          cResult[9] = tmp17;
          tmp16 = tmp17;
        }
      }
    }
  }
  const items1 = [tmp4.marker, markerCompleted, markerInProgress, "unfinished" === status && tmp4.markerUnfinished];
  cResult[0] = tmp4.marker;
  cResult[1] = markerCompleted;
  cResult[2] = markerInProgress;
  cResult[3] = "unfinished" === status && tmp4.markerUnfinished;
  cResult[4] = items1;
  tmp8 = items1;
}) : ((status) => {
  status = status.status;
  const tmp = closure_8();
  const items = [tmp.marker, , , ];
  let markerCompleted = tmp4;
  if ("completed" === status) {
    markerCompleted = tmp.markerCompleted;
  }
  items[1] = markerCompleted;
  let markerInProgress = tmp5;
  if ("in_progress" === status) {
    markerInProgress = tmp.markerInProgress;
  }
  items[2] = markerInProgress;
  const obj = { style: items, accessibilityRole: "image", accessibilityLabel: null, children: null };
  items[3] = "unfinished" === status && tmp.markerUnfinished;
  if ("completed" === status) {
    const intl4 = util.intl;
    let stringResult = intl4.string(_modDef3723.TkPGOH);
    let tmp11 = importDefault;
    let tmp12 = require;
  } else if ("in_progress" === status) {
    const intl3 = util.intl;
    stringResult = intl3.string(_modDef3723["oK+fmd"]);
    tmp11 = importDefault;
    tmp12 = require;
  } else if ("unfinished" === status) {
    const intl2 = util.intl;
    stringResult = intl2.string(_modDef3723["1ley3g"]);
    tmp11 = importDefault;
    tmp12 = require;
  } else {
    const intl = util.intl;
    stringResult = intl.string(_modDef3723.d7lieu);
    tmp11 = importDefault;
    tmp12 = require;
  }
  obj.accessibilityLabel = stringResult;
  let tmp22 = null;
  if ("in_progress" === status) {
    const obj2 = { size: "small", style: tmp.markerSpinner };
    tmp22 = timestampProducer(React4, obj2);
  }
  const items1 = [tmp22, ];
  let tmp25 = null;
  if ("completed" === status) {
    const obj3 = { size: "xs", color: tmp11(587).colors.CHECKBOX_ICON_ACTIVE };
    tmp25 = timestampProducer(tmp12(8962).CheckmarkSmallBoldIcon, obj3);
  }
  items1[1] = tmp25;
  obj.children = items1;
  return React5(hasOwnProperty, obj);
});
ReactCompilerGating = fn(558);
const obj11 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_INFO };
function todoProgress(arr) {
  return { completed: arr.filter((status) => "completed" === status.status).length, total: arr.length };
}
size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsTodoList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
          const intl3 = tmp(1126).intl;
          const stringResult = intl3.string(textCompleted(3723).qCRC6c);
          cResult[12] = stringResult;
          let tmp24 = stringResult;
        } else {
          tmp24 = cResult[12];
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
              let tmp27 = cResult[16];
            }
            const _Symbol2 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = tmp(1126).intl;
              const stringResult1 = intl4.string(textCompleted(3723).SVhXLT);
              const intl5 = tmp(1126).intl;
              const stringResult2 = intl5.string(textCompleted(3723).fIBJas);
              cResult[17] = stringResult1;
              cResult[18] = stringResult2;
              let tmp32 = stringResult2;
              let tmp31 = stringResult1;
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
                                  let tmp48 = cResult[39];
                                }
                                if (cResult[40] === tmp6) {
                                  if (cResult[41] === onToggleExpanded) {
                                    if (cResult[42] === tmp5) {
                                      if (cResult[43] === tmp30) {
                                        if (cResult[44] === tmp48) {
                                          if (cResult[45] === tmp27) {
                                            let tmp52 = cResult[46];
                                          }
                                          return tmp52;
                                        }
                                      }
                                    }
                                  }
                                }
                                let obj2 = { title: tmp24, meta: tmp27, showHeader: tmp30, superseded: tmp5, expanded: tmp6, onToggleExpanded, showLabel: tmp31, hideLabel: tmp32, children: tmp48 };
                                const tmp55 = closure_6(textCompleted(16653), obj2);
                                cResult[40] = tmp6;
                                cResult[41] = onToggleExpanded;
                                cResult[42] = tmp5;
                                cResult[43] = tmp30;
                                cResult[44] = tmp48;
                                cResult[45] = tmp27;
                                cResult[46] = tmp55;
                                tmp52 = tmp55;
                              }
                            }
                            let obj3 = { style: tmp36, children: null };
                            let items = [tmp37, tmp41];
                            obj3.children = items;
                            const tmp51 = closure_7(closure_5, obj3);
                            cResult[36] = tmp7.list;
                            cResult[37] = tmp37;
                            cResult[38] = tmp41;
                            cResult[39] = tmp51;
                            tmp48 = tmp51;
                          }
                        }
                        let tmp43 = null;
                        if (null != provisional) {
                          tmp43 = null;
                          if ("" !== provisional) {
                            let obj4 = { style: tmp7.row, children: null };
                            let items1 = [closure_6(closure_10, { status: "pending" }), ];
                            const obj5 = { variant: "text-sm/normal", color: "text-muted", style: tmp7.text, children: provisional };
                            items1[1] = closure_6(tmp(4886).Text, obj5);
                            obj4.children = items1;
                            tmp43 = closure_7(closure_5, obj4);
                          }
                        }
                        cResult[32] = provisional;
                        cResult[33] = tmp7.row;
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
                    ({ text: tmp3[22], textCompleted } = tmp7);
                    cResult[23] = textCompleted;
                    cResult[24] = todos;
                    cResult[25] = mapped;
                  }
                }
              }
            }
            const fn = function j(status) {
              const todoMarkResult = VibegrationsTodoState.todoMark(status.status, textCompleted);
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
              obj3.children = VibegrationsTodoState.todoLabel(status, todoMarkResult);
              items[1] = timestampProducer(Text_Text.Text, obj3);
              let tmp7Result = null;
              if ("completed" !== todoMarkResult) {
                let items2 = closure_0.get(status.id);
                if (items2 == null) {
                  items2 = [];
                }
                const obj4 = { agents: items2 };
                tmp7Result = timestampProducer(closure_9, obj4);
              }
              items[2] = tmp7Result;
              obj2.children = items;
              return React5(hasOwnProperty, obj2, status.id);
            };
            cResult[26] = tmp8;
            cResult[27] = textCompleted;
            cResult[28] = tmp7.row;
            cResult[29] = tmp7.text;
            cResult[30] = tmp7.textCompleted;
            cResult[31] = fn;
            tmp38 = fn;
          }
        }
        const obj6 = { accessibilityLiveRegion: str4, accessibilityLabel: tmp10, children: tmp9 };
        const tmp29 = closure_6(tmp(16653).VibegrationsNativeCollapsibleMeta, obj6);
        cResult[13] = tmp9;
        cResult[14] = tmp10;
        cResult[15] = str4;
        cResult[16] = tmp29;
        tmp27 = tmp29;
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
    const groupAgentsByTodoResult = tmp(16688).groupAgentsByTodo(tmp14);
    cResult[10] = tmp14;
    cResult[11] = groupAgentsByTodoResult;
    let tmp16 = groupAgentsByTodoResult;
    const tmpResult = tmp(16688);
  } else {
    tmp16 = cResult[11];
  }
  _require = tmp16;
  if (0 !== todos.length) {
    const intl = tmp(1126).intl;
    const obj7 = { completed: length, total: length2 };
    const formatToPlainStringResult = intl.formatToPlainString(textCompleted(3723).bQvqly, obj7);
    const intl2 = tmp(1126).intl;
    const obj8 = { completed: length, total: length2 };
    const formatToPlainStringResult1 = intl2.formatToPlainString(textCompleted(3723)["QG/EiF"], obj8);
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
  cResult[5] = formatToPlainStringResult1;
  cResult[6] = tmp19;
  cResult[7] = todos.length;
  tmp11 = tmp19;
  tmp10 = formatToPlainStringResult1;
  tmp9 = formatToPlainStringResult;
  forResult = Symbol.for("react.early_return_sentinel");
}) : ((announceProgress) => {
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
    return VibegrationsTodoAgents.groupAgentsByTodo(items);
  }, items);
  if (0 === todos.length) {
    return null;
  }
  const intl = agents(1126).intl;
  const intl2 = agents(1126).intl;
  const formatToPlainStringResult = intl.formatToPlainString(flag2(3723).bQvqly, { completed: length, total: todos.length });
  let obj = { title: null, meta: null, showHeader: null, superseded: null, expanded: null, onToggleExpanded: null, showLabel: null, hideLabel: null, children: null };
  const formatToPlainStringResult1 = intl2.formatToPlainString(flag2(3723)["QG/EiF"], { completed: length, total: todos.length });
  const intl3 = agents(1126).intl;
  obj.title = intl3.string(flag2(3723).qCRC6c);
  let str = "none";
  if (flag) {
    str = "none";
    if (!flag3) {
      str = "polite";
    }
  }
  obj.meta = closure_6(agents(16653).VibegrationsNativeCollapsibleMeta, { accessibilityLiveRegion: str, accessibilityLabel: formatToPlainStringResult1, children: formatToPlainStringResult });
  obj.showHeader = todos.length > 0;
  obj.superseded = flag3;
  obj.expanded = flag4;
  obj.onToggleExpanded = announceProgress.onToggleExpanded;
  const intl4 = agents(1126).intl;
  obj.showLabel = intl4.string(flag2(3723).SVhXLT);
  const intl5 = agents(1126).intl;
  obj.hideLabel = intl5.string(flag2(3723).fIBJas);
  let obj2 = { style: tmp.list, children: null };
  let items1 = [
    todos.map((status) => {
      const todoMarkResult = VibegrationsTodoState.todoMark(status.status, flag2);
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
      obj3.children = VibegrationsTodoState.todoLabel(status, todoMarkResult);
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
      items2[1] = closure_6(agents(4886).Text, obj4);
      obj3.children = items2;
      tmp10Result = closure_7(closure_5, obj3);
    }
  }
  items1[1] = tmp10Result;
  obj2.children = items1;
  obj.children = closure_7(closure_5, obj2);
  return closure_6(flag2(16653), obj);
});
export { todoProgress };