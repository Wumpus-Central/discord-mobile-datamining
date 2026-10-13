// discord_app/modules/conjure/debug/native/ConjureDebugGitSection.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import ConjureDebugPrimitives from "ConjureDebugPrimitives.tsx";
import ConjureDebugGit from "../ConjureDebugGit.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { controls: { gap: nativeDefault.space.PX_8 }, restartAgentRow: null, clearAlarm: null, disabled: null };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.restartAgentRow = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj2.clearAlarm = { flexShrink: 1 };
obj2.disabled = { opacity: 0.5 };
let closure_9 = createStyles.createStyles(obj2);
let obj5 = { checkout: fn(8202).FolderIcon, edit: fn(9724).PencilIcon, remote: fn(11988).CloudIcon, commits: fn(11990).ListNumberedIcon, calendar: fn(8680).CalendarIcon, save: fn(11992).SaveIcon, objects: fn(9244).ServerIcon, download: fn(11994).CloudDownloadIcon, size: fn(11059).SpeedometerIcon, file: fn(11670).FileIcon };
let obj6 = { ok: null, warning: null, error: null, ahead: null, behind: null };
let items = [fn(6868).CircleCheckIcon, nativeDefault.colors.ICON_FEEDBACK_POSITIVE];
obj6.ok = items;
let items1 = [fn(7572).WarningIcon, nativeDefault.colors.ICON_FEEDBACK_WARNING];
obj6.warning = items1;
let items2 = [fn(6296).CircleXIcon, nativeDefault.colors.ICON_FEEDBACK_CRITICAL];
obj6.error = items2;
let items3 = [fn(11996).ArrowSmallUpIcon, nativeDefault.colors.ICON_MUTED];
obj6.ahead = items3;
let items4 = [fn(11998).ArrowSmallDownIcon, nativeDefault.colors.ICON_MUTED];
obj6.behind = items4;
fn(558);
let obj4 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDebugGitSection(projectId) {
  const cResult = c.c(13);
  const tmp4 = closure_9();
  const state = ConjureDebugGit.useConjureDebugGitInfo(projectId.projectId).state;
  if (cResult[0] !== state) {
    const gitInfoStatusResult = ConjureDebugGit.gitInfoStatus(state);
    cResult[0] = state;
    cResult[1] = gitInfoStatusResult;
    let tmp5 = gitInfoStatusResult;
    let tmpResult = ConjureDebugGit;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp5.critical) {
    if (cResult[3] === tmp5.line) {
      let tmp7 = cResult[4];
    }
    if (cResult[5] === tmp4.controls) {
      if (cResult[6] === tmp7) {
        let tmp10 = cResult[7];
      }
      if (cResult[8] !== state.info) {
        let mapped = null;
        if (null != state.info) {
          const tmpResult2 = ConjureDebugGit;
          mapped = ConjureDebugGit.gitInfoRows(state.info).map((item) => {
            ({ label, state } = item);
            ({ value, hint } = item);
            if (null != state) {
              let items = obj6[state];
            } else {
              items = [null, undefined];
            }
            const tmpResult = _slicedToArray(items, 2);
            const first = tmpResult[0];
            const obj = { label, value, hint, critical: "error" === state, icon: closure_1_7(obj5[item.icon], { size: "xs", color: nativeDefault.colors.ICON_MUTED }), state: null };
            let tmp5Result;
            if (null != first) {
              const obj3 = { size: "xs", color: tmpResult[1] };
              tmp5Result = closure_1_7(first, obj3);
            }
            obj.state = tmp5Result;
            return closure_1_7(require("ConjureDebugPrimitives").DebugStatRow, obj, label);
          });
          const gitInfoRowsResult = ConjureDebugGit.gitInfoRows(state.info);
        }
        cResult[8] = state.info;
        cResult[9] = mapped;
        let tmp14 = mapped;
      } else {
        tmp14 = cResult[9];
      }
      if (cResult[10] === tmp10) {
        if (cResult[11] === tmp14) {
          let tmp16 = cResult[12];
        }
        return tmp16;
      }
      let obj3 = { title: "Git", children: null };
      let items = [tmp10, tmp14];
      obj3.children = items;
      const tmp18 = closure_1_8(ConjureDebugPrimitives.DebugSection, obj3);
      cResult[10] = tmp10;
      cResult[11] = tmp14;
      cResult[12] = tmp18;
      tmp16 = tmp18;
    }
    const obj4 = { style: tmp4.controls, children: tmp7 };
    const tmp13 = React5(timestampProducer, obj4);
    cResult[5] = tmp4.controls;
    cResult[6] = tmp7;
    cResult[7] = tmp13;
    tmp10 = tmp13;
  }
  let tmp9Result = null;
  if ("" !== tmp5.line) {
    let str = "text-muted";
    if (tmp5.critical) {
      str = "text-feedback-critical";
    }
    obj5 = { variant: "text-xs/normal", accessibilityLiveRegion: "polite", color: str, children: tmp5.line };
    tmp9Result = React5(Text_Text.Text, obj5);
  }
  cResult[2] = tmp5.critical;
  cResult[3] = tmp5.line;
  cResult[4] = tmp9Result;
  tmp7 = tmp9Result;
}) : (function ConjureDebugGitSection(projectId) {
  const tmp = closure_9();
  const state = ConjureDebugGit.useConjureDebugGitInfo(projectId.projectId).state;
  const gitInfoStatusResult = ConjureDebugGit.gitInfoStatus(state);
  let obj3 = { style: tmp.controls, children: null };
  let tmp6Result = null;
  if ("" !== gitInfoStatusResult.line) {
    let str = "text-muted";
    if (gitInfoStatusResult.critical) {
      str = "text-feedback-critical";
    }
    const obj4 = { variant: "text-xs/normal", accessibilityLiveRegion: "polite", color: str, children: gitInfoStatusResult.line };
    tmp6Result = React5(Text_Text.Text, obj4);
  }
  obj3.children = tmp6Result;
  const children = [React5(timestampProducer, obj3), ];
  let mapped = null;
  if (null != state.info) {
    const tmp2Result = ConjureDebugGit;
    mapped = ConjureDebugGit.gitInfoRows(state.info).map((item) => {
      ({ label, state } = item);
      ({ value, hint } = item);
      if (null != state) {
        let items = obj6[state];
      } else {
        items = [null, undefined];
      }
      const tmpResult = _slicedToArray(items, 2);
      const first = tmpResult[0];
      const obj = { label, value, hint, critical: "error" === state, icon: closure_1_7(obj5[item.icon], { size: "xs", color: nativeDefault.colors.ICON_MUTED }), state: null };
      let tmp5Result;
      if (null != first) {
        const obj3 = { size: "xs", color: tmpResult[1] };
        tmp5Result = closure_1_7(first, obj3);
      }
      obj.state = tmp5Result;
      return closure_1_7(require("ConjureDebugPrimitives").DebugStatRow, obj, label);
    });
    const gitInfoRowsResult = ConjureDebugGit.gitInfoRows(state.info);
  }
  children[1] = mapped;
  return closure_1_8(ConjureDebugPrimitives.DebugSection, { title: "Git", children });
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugGitSection.tsx");

export const ConjureDebugGitSection = tmp4;
export const ConjureDebugRestartAgent = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDebugRestartAgent(projectId) {
  const cResult = clearAlarm(confirmCopy[22]).c(43);
  const tmp4 = closure_9();
  const obj = clearAlarm(confirmCopy[22]);
  const conjureRestartAgent = clearAlarm(confirmCopy[23]).useConjureRestartAgent(projectId.projectId);
  ({ state, busy, clearAlarm } = conjureRestartAgent);
  const setClearAlarm = conjureRestartAgent.setClearAlarm;
  confirmCopy = conjureRestartAgent.confirmCopy;
  const restart = conjureRestartAgent.restart;
  if (cResult[0] === busy) {
    if (cResult[1] === clearAlarm) {
      let tmp6 = cResult[2];
    }
    const checkboxA11yNative = clearAlarm(tmp2[26]).useCheckboxA11yNative(tmp6);
    ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
    if (cResult[3] === confirmCopy.body) {
      if (cResult[4] === confirmCopy.confirm) {
        if (cResult[5] === confirmCopy.title) {
          if (cResult[6] === restart) {
            let tmp8 = cResult[7];
          }
          let disabled = null;
          if (busy) {
            disabled = tmp4.disabled;
          }
          if (cResult[8] === tmp4.clearAlarm) {
            if (cResult[9] === disabled) {
              let tmp10 = cResult[10];
            }
            if (cResult[11] === clearAlarm) {
              if (cResult[12] === setClearAlarm) {
                let tmp11 = cResult[13];
              }
              if (cResult[14] !== clearAlarm) {
                const obj3 = { checked: clearAlarm };
                const tmp14 = closure_7(clearAlarm(tmp2[28]).FormCheckbox, obj3);
                cResult[14] = clearAlarm;
                class T {
                  constructor() {
                    obj = closure_0(closure_2[27]);
                    obj1 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                    showConfirmModalResult = obj.showConfirmModal(obj1);
                    return;
                  }
                }
                cResult[15] = tmp14;
                let tmp12 = tmp14;
              } else {
                tmp12 = cResult[15];
              }
              const _Symbol = Symbol;
              class T {
                constructor() {
                  obj = closure_0(closure_2[27]);
                  obj1 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                  showConfirmModalResult = obj.showConfirmModal(obj1);
                  return;
                }
              }
              if (cResult[17] !== tmp12) {
                const items = [tmp12, tmp17];
                { direction: "horizontal", spacing: 8, align: "center", children: null }.children = items;
                class T {
                  constructor() {
                    obj = closure_0(closure_2[27]);
                    obj1 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                    showConfirmModalResult = obj.showConfirmModal(obj1);
                    return;
                  }
                }
                cResult[17] = tmp12;
                cResult[18] = tmp20;
                let tmp18 = tmp20;
                const obj4 = { direction: "horizontal", spacing: 8, align: "center", children: null };
              } else {
                tmp18 = cResult[18];
              }
              if (cResult[19] === accessibilityRole) {
                if (cResult[20] === accessibilityState) {
                  if (cResult[21] === busy) {
                    if (cResult[22] === tmp10) {
                      if (cResult[23] === tmp11) {
                        if (cResult[24] === tmp18) {
                          let tmp21 = cResult[25];
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                          obj5 = { size: "xs", color: setClearAlarm(tmp2[5]).colors.TEXT_FEEDBACK_CRITICAL };
                          const tmp28 = closure_7(clearAlarm(tmp2[30]).RetryIcon, obj5);
                          class T {
                            constructor() {
                              obj = closure_0(closure_2[27]);
                              obj1 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                              showConfirmModalResult = obj.showConfirmModal(obj1);
                              return;
                            }
                          }
                          cResult[26] = tmp28;
                          let tmp25 = tmp28;
                        } else {
                          tmp25 = cResult[26];
                        }
                        if (cResult[27] === busy) {
                          if (cResult[28] === tmp8) {
                            let tmp29 = cResult[29];
                          }
                          if (cResult[30] === tmp4.restartAgentRow) {
                            if (cResult[31] === tmp21) {
                              if (cResult[32] === tmp29) {
                                let tmp33 = cResult[33];
                              }
                              let str2 = "text-muted";
                              if ("failed" === state.phase) {
                                str2 = "text-feedback-critical";
                              }
                              if (cResult[34] !== state) {
                                const result = clearAlarm(tmp2[23]).restartAgentStatusLine(state);
                                cResult[34] = state;
                                cResult[35] = result;
                                class T {
                                  constructor() {
                                    obj = closure_0(closure_2[27]);
                                    obj1 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                                    showConfirmModalResult = obj.showConfirmModal(obj1);
                                    return;
                                  }
                                }
                                const tmpResult2 = clearAlarm(tmp2[23]);
                              }
                              if (cResult[36] === str2) {
                                if (cResult[37] === tmp38) {
                                  let tmp40 = cResult[38];
                                }
                                if (cResult[39] === tmp4.controls) {
                                  if (cResult[40] === tmp33) {
                                    if (cResult[41] === tmp40) {
                                      let tmp42 = cResult[42];
                                    }
                                    return tmp42;
                                  }
                                }
                                obj6 = { style: tmp4.controls, children: null };
                                class T {
                                  constructor() {
                                    obj = closure_0(closure_2[27]);
                                    obj1 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                                    showConfirmModalResult = obj.showConfirmModal(obj1);
                                    return;
                                  }
                                }
                                tmp45[0] = tmp33;
                                tmp45[1] = tmp40;
                                obj6.children = tmp45;
                                const tmp46 = closure_8(closure_6, obj6);
                                cResult[39] = tmp4.controls;
                                cResult[40] = tmp33;
                                cResult[41] = tmp40;
                                cResult[42] = tmp46;
                                tmp42 = tmp46;
                              }
                              class T {
                                constructor() {
                                  obj = closure_0(closure_2[27]);
                                  obj1 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                                  showConfirmModalResult = obj.showConfirmModal(obj1);
                                  return;
                                }
                              }
                              const obj7 = { variant: "text-xs/normal", accessibilityLiveRegion: "polite", color: str2, children: tmp38 };
                              const tmp41 = closure_7(clearAlarm(tmp2[24]).Text, obj7);
                              cResult[36] = str2;
                              cResult[37] = tmp38;
                              cResult[38] = tmp41;
                              tmp40 = tmp41;
                            }
                          }
                          const obj8 = { style: tmp4.restartAgentRow, children: null };
                          class T {
                            constructor() {
                              obj = closure_0(closure_2[27]);
                              obj1 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                              showConfirmModalResult = obj.showConfirmModal(obj1);
                              return;
                            }
                          }
                          tmp36[0] = tmp21;
                          tmp36[1] = tmp29;
                          obj8.children = tmp36;
                          const tmp37 = closure_8(closure_6, obj8);
                          cResult[30] = tmp4.restartAgentRow;
                          cResult[31] = tmp21;
                          cResult[32] = tmp29;
                          cResult[33] = tmp37;
                          tmp33 = tmp37;
                        }
                        class T {
                          constructor() {
                            obj = closure_0(closure_2[27]);
                            obj1 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                            showConfirmModalResult = obj.showConfirmModal(obj1);
                            return;
                          }
                        }
                        tmp31[2] = tmp25;
                        tmp31[3] = clearAlarm(tmp2[23]).RESTART_AGENT_LABEL;
                        tmp31[4] = busy;
                        tmp31[5] = busy;
                        tmp31[6] = tmp8;
                        const tmp32 = closure_7(clearAlarm(tmp2[31]).Button, tmp31);
                        cResult[27] = busy;
                        cResult[28] = tmp8;
                        cResult[29] = tmp32;
                        tmp29 = tmp32;
                      }
                    }
                  }
                }
              }
              const obj9 = { accessibilityRole, accessibilityState, accessibilityLabel: clearAlarm(tmp2[23]).RESTART_AGENT_CLEAR_ALARM_LABEL, accessibilityHint: clearAlarm(tmp2[23]).RESTART_AGENT_CLEAR_ALARM_HINT, disabled: busy, style: tmp10, onPress: tmp11, children: tmp18 };
              const tmp24 = closure_7(closure_5, obj9);
              cResult[19] = accessibilityRole;
              cResult[20] = accessibilityState;
              cResult[21] = busy;
              cResult[22] = tmp10;
              cResult[23] = tmp11;
              cResult[24] = tmp18;
              cResult[25] = tmp24;
              tmp21 = tmp24;
            }
            const fn = function p() {
              return setClearAlarm(!clearAlarm);
            };
            cResult[11] = clearAlarm;
            class T {
              constructor() {
                obj = closure_0(closure_2[27]);
                obj1 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
                showConfirmModalResult = obj.showConfirmModal(obj1);
                return;
              }
            }
            cResult[13] = fn;
            tmp11 = fn;
          }
          const items1 = [, ];
          class T {
            constructor() {
              obj = closure_0(closure_2[27]);
              obj1 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
              showConfirmModalResult = obj.showConfirmModal(obj1);
              return;
            }
          }
          items1[1] = disabled;
          cResult[8] = tmp4.clearAlarm;
          cResult[9] = disabled;
          cResult[10] = items1;
          tmp10 = items1;
        }
      }
    }
    class T {
      constructor() {
        obj = closure_0(closure_2[27]);
        obj1 = { key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart };
        showConfirmModalResult = obj.showConfirmModal(obj1);
        return;
      }
    }
    cResult[3] = confirmCopy.body;
    cResult[4] = confirmCopy.confirm;
    cResult[5] = confirmCopy.title;
    cResult[6] = restart;
    cResult[7] = T;
    tmp8 = T;
    const tmpResult = clearAlarm(tmp2[26]);
  }
  const obj10 = { checked: clearAlarm, disabled: busy };
  cResult[0] = busy;
  cResult[1] = clearAlarm;
  cResult[2] = obj10;
  tmp6 = obj10;
  const obj2 = clearAlarm(confirmCopy[23]);
}) : (function ConjureDebugRestartAgent(projectId) {
  clearAlarm = undefined;
  importDefault = undefined;
  confirmCopy = undefined;
  const tmp = closure_9();
  const conjureRestartAgent = clearAlarm(confirmCopy[23]).useConjureRestartAgent(projectId.projectId);
  ({ state, busy, clearAlarm } = conjureRestartAgent);
  ({ setClearAlarm: c1, confirmCopy } = conjureRestartAgent);
  const restart = conjureRestartAgent.restart;
  const obj = clearAlarm(confirmCopy[23]);
  const checkboxA11yNative = clearAlarm(confirmCopy[26]).useCheckboxA11yNative({ checked: clearAlarm, disabled: busy });
  const items = [confirmCopy, restart];
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj3 = { style: tmp.controls, children: null };
  const obj4 = { style: tmp.restartAgentRow, children: null };
  obj5 = { accessibilityRole, accessibilityState, accessibilityLabel: null, accessibilityHint: null, disabled: null, style: null, onPress: null, children: null };
  const callback = noop.useCallback(() => {
    AlertModal.showConfirmModal({ key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart });
  }, items);
  obj5.accessibilityLabel = clearAlarm(confirmCopy[23]).RESTART_AGENT_CLEAR_ALARM_LABEL;
  obj5.accessibilityHint = clearAlarm(confirmCopy[23]).RESTART_AGENT_CLEAR_ALARM_HINT;
  obj5.disabled = busy;
  const items1 = [tmp.clearAlarm, ];
  let disabled = null;
  if (busy) {
    disabled = tmp.disabled;
  }
  items1[1] = disabled;
  obj5.style = items1;
  obj5.onPress = function onPress() {
    return _undefined(!clearAlarm);
  };
  obj6 = { direction: "horizontal", spacing: 8, align: "center", children: null };
  const items2 = [closure_7(clearAlarm(confirmCopy[28]).FormCheckbox, { checked: clearAlarm }), ];
  const obj2 = clearAlarm(confirmCopy[26]);
  items2[1] = closure_7(clearAlarm(confirmCopy[24]).Text, { variant: "text-sm/medium", color: "text-default", children: clearAlarm(confirmCopy[23]).RESTART_AGENT_CLEAR_ALARM_LABEL });
  obj6.children = items2;
  obj5.children = closure_8(clearAlarm(confirmCopy[29]).Stack, obj6);
  const items3 = [closure_7(closure_5, obj5), ];
  const obj8 = { variant: "critical-secondary", size: "sm", icon: null, text: null, loading: null, disabled: null, onPress: null };
  const obj7 = { variant: "text-sm/medium", color: "text-default", children: clearAlarm(confirmCopy[23]).RESTART_AGENT_CLEAR_ALARM_LABEL };
  obj8.icon = closure_7(clearAlarm(confirmCopy[30]).RetryIcon, { size: "xs", color: require("native").colors.TEXT_FEEDBACK_CRITICAL });
  obj8.text = clearAlarm(confirmCopy[23]).RESTART_AGENT_LABEL;
  obj8.loading = busy;
  obj8.disabled = busy;
  obj8.onPress = callback;
  items3[1] = closure_7(clearAlarm(confirmCopy[31]).Button, obj8);
  obj4.children = items3;
  const items4 = [closure_8(closure_6, obj4), ];
  let str = "text-muted";
  if ("failed" === state.phase) {
    str = "text-feedback-critical";
  }
  const obj10 = { variant: "text-xs/normal", accessibilityLiveRegion: "polite", color: str, children: null };
  const obj9 = { size: "xs", color: require("native").colors.TEXT_FEEDBACK_CRITICAL };
  obj10.children = clearAlarm(confirmCopy[23]).restartAgentStatusLine(state);
  items4[1] = closure_7(clearAlarm(confirmCopy[24]).Text, obj10);
  obj3.children = items4;
  return closure_8(closure_6, obj3);
});