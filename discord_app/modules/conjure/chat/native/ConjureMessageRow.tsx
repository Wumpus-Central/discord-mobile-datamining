// discord_app/modules/conjure/chat/native/ConjureMessageRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import conjureChatTurns from "../conjureChatTurns.tsx";
import ConjureDesignFeedback from "../../design_feedback/ConjureDesignFeedback.tsx";
import ConjureVersionRestoreConfirm from "../../history/native/ConjureVersionRestoreConfirm.tsx";
import ConjureTimelineTree from "../../agent_activity/ConjureTimelineTree.tsx";
import ConjureTodoAgents from "../../agent_activity/ConjureTodoAgents.tsx";
import ConjureMessageActionSheet from "ConjureMessageActionSheet.tsx";
import ConjureChatRestore from "../../history/ConjureChatRestore.tsx";
import conjureQueuedMessage from "../conjureQueuedMessage.tsx";
import ConjureNativeMarkdown from "ConjureNativeMarkdown.tsx";
import ConjureActivityBox from "../../agent_activity/native/ConjureActivityBox.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const ConjureActivityBoxDefault = ConjureActivityBox;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5191);
let obj = { row: { position: "relative", paddingLeft: fn(12162).MESSAGE_CONTENT_INSET, paddingRight: fn(12162).MESSAGE_EDGE_INSET, paddingVertical: fn(12171).ROW_PAD, gap: fn(12171).BLOCK_GAP }, rowGroupStart: null, boundaryRow: null, avatar: null, spoken: null, avatarSpoken: null, avatarSpokenReplying: null, header: null, activityBox: null };
let obj3 = { position: "relative", paddingLeft: fn(12162).MESSAGE_CONTENT_INSET, paddingRight: fn(12162).MESSAGE_EDGE_INSET, paddingVertical: fn(12171).ROW_PAD, gap: fn(12171).BLOCK_GAP };
obj.rowGroupStart = { marginTop: fn(12171).GROUP_GAP };
let obj4 = { marginTop: fn(12171).GROUP_GAP };
obj.boundaryRow = { paddingHorizontal: fn(12162).MESSAGE_EDGE_INSET, paddingVertical: fn(12171).ROW_PAD };
const rect = { position: "absolute", left: fn(12162).MESSAGE_EDGE_INSET, top: fn(12171).ROW_PAD };
obj.avatar = rect;
let obj5 = { paddingHorizontal: fn(12162).MESSAGE_EDGE_INSET, paddingVertical: fn(12171).ROW_PAD };
obj.spoken = { position: "relative", gap: fn(12171).BLOCK_GAP };
const rect1 = { left: fn(12162).MESSAGE_EDGE_INSET - fn(12162).MESSAGE_CONTENT_INSET, top: 0 };
obj.avatarSpoken = rect1;
let obj6 = { position: "relative", gap: fn(12171).BLOCK_GAP };
obj.avatarSpokenReplying = { top: fn(12172).REPLY_PREVIEW_HEIGHT + fn(12171).BLOCK_GAP };
let obj7 = { top: fn(12172).REPLY_PREVIEW_HEIGHT + fn(12171).BLOCK_GAP };
obj.header = { marginBottom: -nativeDefault.space.PX_4 };
let obj8 = { marginBottom: -nativeDefault.space.PX_4 };
obj.activityBox = { marginLeft: -fn(12171).RAIL_INDENT };
let closure_10 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj9 = { marginLeft: -fn(12171).RAIL_INDENT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageRow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureMessageRow(projectId) {
  const cResult = projectId(groupStart[10]).c(233);
  projectId = projectId.projectId;
  const message = projectId.message;
  groupStart = projectId.groupStart;
  ({ isNewest, checklistSuperseded } = projectId);
  ({ checklistExpanded, secretRequestStatus, onToggleChecklist } = projectId);
  ({ planVersion, planSuperseded } = projectId);
  ({ planExpanded, onTogglePlan } = projectId);
  const replied = projectId.replied;
  const onJumpToReplied = projectId.onJumpToReplied;
  ({ onApprovePlan, onPickIdea, onAnswerClarification, onDismissClarification } = projectId);
  ({ onClarificationInputFocusChange, canSend, onDismissAppBuildRequest } = projectId);
  const onRestoreVersion = projectId.onRestoreVersion;
  ({ first, clarificationDismissed, appBuildRequestDismissed } = projectId);
  const tmp4 = onDismissAppBuildRequest();
  const spoken = tmp4;
  if (cResult[0] !== message) {
    const turnSettledResult = tmp(tmp2[11]).turnSettled(message);
    cResult[0] = message;
    cResult[1] = turnSettledResult;
    let tmp5 = turnSettledResult;
    const tmpResult = tmp(tmp2[11]);
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === message.steps) {
    if (cResult[3] === tmp7) {
      let tmp8 = cResult[4];
    }
    closure_13 = tmp8;
    if (cResult[5] !== message) {
      const turnSettledResult1 = tmp(tmp2[11]).turnSettled(message);
      cResult[5] = message;
      cResult[6] = turnSettledResult1;
      let tmp10 = turnSettledResult1;
      const tmpResult9 = tmp(tmp2[11]);
    } else {
      tmp10 = cResult[6];
    }
    if (cResult[7] === message.steps) {
      if (cResult[10] !== message.steps) {
        const latestTodosResult = tmp(tmp2[12]).latestTodos(message.steps);
        cResult[10] = message.steps;
        cResult[11] = latestTodosResult;
        const tmpResult10 = tmp(tmp2[12]);
      }
      if (cResult[12] !== tmp8.tasks) {
        const runningTodoAgentsResult = tmp(tmp2[13]).runningTodoAgents(tmp8.tasks);
        cResult[12] = tmp8.tasks;
        cResult[13] = runningTodoAgentsResult;
        const tmpResult11 = tmp(tmp2[13]);
      }
      if (cResult[14] === checklistSuperseded) {
        if (cResult[15] === message.render_id) {
          if (cResult[18] === message.render_id) {
            if (cResult[19] === onTogglePlan) {
              if (cResult[22] === onJumpToReplied) {
                if (cResult[25] !== message.content) {
                  const result = tmp(tmp2[14]).parseConjureDesignRemark(message.content);
                  cResult[25] = message.content;
                  cResult[26] = result;
                  let tmp22 = result;
                  const tmpResult12 = tmp(tmp2[14]);
                } else {
                  tmp22 = cResult[26];
                }
                let body;
                if (tmp22 != null) {
                  body = tmp22.body;
                }
                if (body == null) {
                  body = message.content;
                }
                if (cResult[27] !== body) {
                  const trimmed = body.trim();
                  cResult[27] = body;
                  cResult[28] = trimmed;
                  let tmp26 = trimmed;
                } else {
                  tmp26 = cResult[28];
                }
                content = tmp26;
                const conjureMentionNames = tmp(tmp2[15]).useConjureMentionNames(tmp26);
                if (cResult[29] === message.attachments) {
                  if (cResult[30] === message.content) {
                    if (cResult[31] === message.role) {
                      let tmp32 = null;
                      if (null != cResult[32]) {
                        tmp32 = null;
                        if (arr.length > 0) {
                          tmp32 = arr;
                        }
                      }
                      let rowGroupStart = groupStart;
                      if (groupStart) {
                        rowGroupStart = !first;
                      }
                      if (rowGroupStart) {
                        rowGroupStart = tmp4.rowGroupStart;
                      }
                      if (cResult[33] === tmp4.row) {
                        if (cResult[34] === rowGroupStart) {
                          let tmp33 = cResult[35];
                        }
                        let user_id;
                        if ("user" === message.role) {
                          user_id = message.user_id;
                        }
                        const _Symbol = Symbol;
                        if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                          const items = [onTogglePlan];
                          function fe() {
                            const currentUser = onTogglePlan.getCurrentUser();
                            id = undefined;
                            if (currentUser != null) {
                              id = currentUser.id;
                            }
                            return id;
                          }
                          cResult[36] = items;
                          cResult[37] = fe;
                          let tmp37 = fe;
                          let tmp36 = items;
                        } else {
                          tmp36 = cResult[36];
                          tmp37 = cResult[37];
                        }
                        const stateFromStores = tmp(tmp2[17]).useStateFromStores(tmp36, tmp37);
                        if (cResult[38] === message) {
                          if (cResult[39] === onRestoreVersion) {
                            let tmp40 = cResult[40];
                          }
                          closure_18 = tmp40;
                          const tmp43 = message(tmp2[19])(projectId, message);
                          closure_19 = tmp43;
                          if (cResult[41] === user_id) {
                            if (cResult[42] === tmp26) {
                              if (cResult[43] === stateFromStores) {
                                if (cResult[44] === message) {
                                  if (cResult[45] === onRestoreVersion) {
                                    if (cResult[46] === projectId) {
                                      if (cResult[47] === tmp43) {
                                        if ("" === tmp26) {
                                          if (null == user_id) {
                                            if ("user" === message.role) {
                                              if ("" === tmp26) {
                                                if (null == tmp22) {
                                                  if (null == tmp32) {
                                                    return null;
                                                  }
                                                }
                                              }
                                              if (cResult[50] === groupStart) {
                                                if (cResult[51] === message.user_id) {
                                                  if (cResult[52] === tmp4.avatar) {
                                                    let tmp90 = cResult[53];
                                                  }
                                                  if (cResult[54] === groupStart) {
                                                    if (cResult[55] === message.created_at) {
                                                      if (cResult[56] === message.user_id) {
                                                        if (cResult[57] === tmp4.header) {
                                                          let tmp94 = cResult[58];
                                                        }
                                                        if (cResult[59] === tmp26) {
                                                          if (cResult[60] === groupStart) {
                                                            if (cResult[61] === tmp22) {
                                                              if (cResult[62] === conjureMentionNames) {
                                                                let tmp98 = cResult[63];
                                                              }
                                                              if (cResult[64] === tmp32) {
                                                                if (cResult[65] === projectId) {
                                                                  let tmp105 = cResult[66];
                                                                }
                                                                if (cResult[67] === tmp46) {
                                                                  if (cResult[68] === tmp33) {
                                                                    if (cResult[69] === tmp90) {
                                                                      if (cResult[70] === tmp94) {
                                                                        if (cResult[71] === tmp98) {
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                                let obj2 = { style: tmp33, onLongPress: null, accessible: false, children: null };
                                                                class Ie {
                                                                  constructor() {
                                                                    obj = closure_0(closure_2[20]);
                                                                    obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                    obj3 = closure_0(closure_2[21]);
                                                                    obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                    fn = undefined;
                                                                    if (null != closure_18) {
                                                                      tmp = onRestoreVersion;
                                                                      if (null != onRestoreVersion) {
                                                                        fn = () => projectId(groupStart[22]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                      }
                                                                    }
                                                                    obj1.onRestoreVersion = fn;
                                                                    fn2 = undefined;
                                                                    if (null != closure_19) {
                                                                      fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                    }
                                                                    obj1.onViewTrace = fn2;
                                                                    return obj.showConjureMessageActions(obj1);
                                                                  }
                                                                }
                                                                const items1 = [tmp90, tmp94, tmp98, tmp105];
                                                                obj2.children = items1;
                                                                const tmp111 = onJumpToReplied(onToggleChecklist, obj2);
                                                                cResult[67] = tmp46;
                                                                cResult[68] = tmp33;
                                                                cResult[69] = tmp90;
                                                                cResult[70] = tmp94;
                                                                cResult[71] = tmp98;
                                                                cResult[72] = tmp105;
                                                                cResult[73] = tmp111;
                                                              }
                                                              let tmp106 = null;
                                                              if (null != tmp32) {
                                                                let obj3 = { projectId, attachments: tmp32 };
                                                                tmp106 = replied(tmp42(tmp2[29]), obj3);
                                                              }
                                                              cResult[64] = tmp32;
                                                              class Ie {
                                                                constructor() {
                                                                  obj = closure_0(closure_2[20]);
                                                                  obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                  obj3 = closure_0(closure_2[21]);
                                                                  obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                  fn = undefined;
                                                                  if (null != closure_18) {
                                                                    tmp = onRestoreVersion;
                                                                    if (null != onRestoreVersion) {
                                                                      fn = () => projectId(groupStart[22]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                    }
                                                                  }
                                                                  obj1.onRestoreVersion = fn;
                                                                  fn2 = undefined;
                                                                  if (null != closure_19) {
                                                                    fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                  }
                                                                  obj1.onViewTrace = fn2;
                                                                  return obj.showConjureMessageActions(obj1);
                                                                }
                                                              }
                                                              cResult[65] = projectId;
                                                              cResult[66] = tmp106;
                                                              tmp105 = tmp106;
                                                            }
                                                          }
                                                        }
                                                        if (tmp45) {
                                                          let combined;
                                                          if (!groupStart) {
                                                            const intl2 = tmp(tmp2[26]).intl;
                                                            const _HermesInternal = HermesInternal;
                                                            combined = "" + intl2.string(tmp(tmp2[26]).t.KD6OJJ) + ": " + conjureMentionNames;
                                                          }
                                                          let obj4 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: null };
                                                          class Ie {
                                                            constructor() {
                                                              obj = closure_0(closure_2[20]);
                                                              obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                              obj3 = closure_0(closure_2[21]);
                                                              obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                              fn = undefined;
                                                              if (null != closure_18) {
                                                                tmp = onRestoreVersion;
                                                                if (null != onRestoreVersion) {
                                                                  fn = () => projectId(groupStart[22]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                }
                                                              }
                                                              obj1.onRestoreVersion = fn;
                                                              fn2 = undefined;
                                                              if (null != closure_19) {
                                                                fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
                                                              }
                                                              obj1.onViewTrace = fn2;
                                                              return obj.showConjureMessageActions(obj1);
                                                            }
                                                          }
                                                          if (null != tmp22) {
                                                            const obj6 = { label: tmp22.label, variant: "text-md/medium" };
                                                            const tmp102 = replied(tmp42(tmp2[27]), obj6);
                                                          }
                                                          const items2 = [tmp102, , ];
                                                          let str9 = null;
                                                          if (null != tmp22) {
                                                            str9 = null;
                                                            if (tmp45) {
                                                              str9 = " ";
                                                            }
                                                          }
                                                          items2[1] = str9;
                                                          const obj7 = { text: tmp26, variant: "text-md/normal" };
                                                          items2[2] = replied(tmp42(tmp2[28]), obj7);
                                                          obj4.children = items2;
                                                          let tmp100Result = onJumpToReplied(tmp(tmp2[25]).Text, obj4);
                                                        } else {
                                                          tmp100Result = null;
                                                        }
                                                        cResult[59] = tmp26;
                                                        class Ie {
                                                          constructor() {
                                                            obj = closure_0(closure_2[20]);
                                                            obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                            obj3 = closure_0(closure_2[21]);
                                                            obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                            fn = undefined;
                                                            if (null != closure_18) {
                                                              tmp = onRestoreVersion;
                                                              if (null != onRestoreVersion) {
                                                                fn = () => projectId(groupStart[22]).confirmRestoreVersion({ onConfirm() { ... } });
                                                              }
                                                            }
                                                            obj1.onRestoreVersion = fn;
                                                            fn2 = undefined;
                                                            if (null != closure_19) {
                                                              fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
                                                            }
                                                            obj1.onViewTrace = fn2;
                                                            return obj.showConjureMessageActions(obj1);
                                                          }
                                                        }
                                                        cResult[61] = tmp22;
                                                        cResult[62] = conjureMentionNames;
                                                        cResult[63] = tmp100Result;
                                                        tmp98 = tmp100Result;
                                                      }
                                                    }
                                                  }
                                                  let tmp95 = null;
                                                  if (groupStart) {
                                                    const obj8 = { style: tmp4.header, children: null };
                                                    const obj9 = { userId: message.user_id, at: null };
                                                    class Ie {
                                                      constructor() {
                                                        obj = closure_0(closure_2[20]);
                                                        obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                        obj3 = closure_0(closure_2[21]);
                                                        obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                        fn = undefined;
                                                        if (null != closure_18) {
                                                          tmp = onRestoreVersion;
                                                          if (null != onRestoreVersion) {
                                                            fn = () => projectId(groupStart[22]).confirmRestoreVersion({ onConfirm() { ... } });
                                                          }
                                                        }
                                                        obj1.onRestoreVersion = fn;
                                                        fn2 = undefined;
                                                        if (null != closure_19) {
                                                          fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
                                                        }
                                                        obj1.onViewTrace = fn2;
                                                        return obj.showConjureMessageActions(obj1);
                                                      }
                                                    }
                                                    obj8.children = replied(tmp(tmp2[24]).ConjureUserHeader, obj9);
                                                    tmp95 = replied(planSuperseded, obj8);
                                                  }
                                                  cResult[54] = groupStart;
                                                  class Ie {
                                                    constructor() {
                                                      obj = closure_0(closure_2[20]);
                                                      obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                      obj3 = closure_0(closure_2[21]);
                                                      obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                      fn = undefined;
                                                      if (null != closure_18) {
                                                        tmp = onRestoreVersion;
                                                        if (null != onRestoreVersion) {
                                                          fn = () => projectId(groupStart[22]).confirmRestoreVersion({ onConfirm() { ... } });
                                                        }
                                                      }
                                                      obj1.onRestoreVersion = fn;
                                                      fn2 = undefined;
                                                      if (null != closure_19) {
                                                        fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
                                                      }
                                                      obj1.onViewTrace = fn2;
                                                      return obj.showConjureMessageActions(obj1);
                                                    }
                                                  }
                                                  cResult[55] = message.created_at;
                                                  cResult[56] = message.user_id;
                                                  cResult[57] = tmp4.header;
                                                  cResult[58] = tmp95;
                                                  tmp94 = tmp95;
                                                }
                                              }
                                              let tmp91 = null;
                                              if (groupStart) {
                                                const obj10 = { style: tmp4.avatar, children: null };
                                                { userId: null }.userId = message.user_id;
                                                class Ie {
                                                  constructor() {
                                                    obj = closure_0(closure_2[20]);
                                                    obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                    obj3 = closure_0(closure_2[21]);
                                                    obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                    fn = undefined;
                                                    if (null != closure_18) {
                                                      tmp = onRestoreVersion;
                                                      if (null != onRestoreVersion) {
                                                        fn = () => projectId(groupStart[22]).confirmRestoreVersion({ onConfirm() { ... } });
                                                      }
                                                    }
                                                    obj1.onRestoreVersion = fn;
                                                    fn2 = undefined;
                                                    if (null != closure_19) {
                                                      fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
                                                    }
                                                    obj1.onViewTrace = fn2;
                                                    return obj.showConjureMessageActions(obj1);
                                                  }
                                                }
                                                tmp91 = replied(planSuperseded, obj10);
                                                const obj12 = { userId: null };
                                              }
                                              cResult[50] = groupStart;
                                              class Ie {
                                                constructor() {
                                                  obj = closure_0(closure_2[20]);
                                                  obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                  obj3 = closure_0(closure_2[21]);
                                                  obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                  fn = undefined;
                                                  if (null != closure_18) {
                                                    tmp = onRestoreVersion;
                                                    if (null != onRestoreVersion) {
                                                      fn = () => projectId(groupStart[22]).confirmRestoreVersion({ onConfirm() { ... } });
                                                    }
                                                  }
                                                  obj1.onRestoreVersion = fn;
                                                  fn2 = undefined;
                                                  if (null != closure_19) {
                                                    fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
                                                  }
                                                  obj1.onViewTrace = fn2;
                                                  return obj.showConjureMessageActions(obj1);
                                                }
                                              }
                                              cResult[51] = message.user_id;
                                              cResult[52] = tmp4.avatar;
                                              cResult[53] = tmp91;
                                              tmp90 = tmp91;
                                            } else if ("context_boundary" === message.kind) {
                                              if (cResult[74] === message.contextSwitch) {
                                                if (cResult[75] === projectId) {
                                                  if (cResult[76] === tmp4.boundaryRow) {
                                                    let tmp85 = cResult[77];
                                                  }
                                                  return tmp85;
                                                }
                                              }
                                              let tmp86 = null;
                                              if (null != message.contextSwitch) {
                                                const obj14 = { style: tmp4.boundaryRow, children: null };
                                                const obj16 = { projectId, contextSwitch: null };
                                                class Ie {
                                                  constructor() {
                                                    obj = closure_0(closure_2[20]);
                                                    obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                    obj3 = closure_0(closure_2[21]);
                                                    obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                    fn = undefined;
                                                    if (null != closure_18) {
                                                      tmp = onRestoreVersion;
                                                      if (null != onRestoreVersion) {
                                                        fn = () => projectId(groupStart[22]).confirmRestoreVersion({ onConfirm() { ... } });
                                                      }
                                                    }
                                                    obj1.onRestoreVersion = fn;
                                                    fn2 = undefined;
                                                    if (null != closure_19) {
                                                      fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
                                                    }
                                                    obj1.onViewTrace = fn2;
                                                    return obj.showConjureMessageActions(obj1);
                                                  }
                                                }
                                                obj14.children = replied(tmp42(tmp2[30]), obj16);
                                                tmp86 = replied(planSuperseded, obj14);
                                              }
                                              cResult[74] = message.contextSwitch;
                                              class Ie {
                                                constructor() {
                                                  obj = closure_0(closure_2[20]);
                                                  obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                  obj3 = closure_0(closure_2[21]);
                                                  obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                  fn = undefined;
                                                  if (null != closure_18) {
                                                    tmp = onRestoreVersion;
                                                    if (null != onRestoreVersion) {
                                                      fn = () => projectId(groupStart[22]).confirmRestoreVersion({ onConfirm() { ... } });
                                                    }
                                                  }
                                                  obj1.onRestoreVersion = fn;
                                                  fn2 = undefined;
                                                  if (null != closure_19) {
                                                    fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
                                                  }
                                                  obj1.onViewTrace = fn2;
                                                  return obj.showConjureMessageActions(obj1);
                                                }
                                              }
                                              cResult[76] = tmp4.boundaryRow;
                                              cResult[77] = tmp86;
                                              tmp85 = tmp86;
                                            } else {
                                              if ("project_event" === message.kind) {
                                                if (null != message.projectEvent) {
                                                  if (cResult[78] === message.projectEvent) {
                                                    if (cResult[79] === projectId) {
                                                      let tmp78 = cResult[80];
                                                    }
                                                    if (cResult[81] === tmp33) {
                                                      if (cResult[82] === tmp78) {
                                                        let tmp81 = cResult[83];
                                                      }
                                                      return tmp81;
                                                    }
                                                    const obj17 = { style: tmp33, children: null };
                                                    class Ie {
                                                      constructor() {
                                                        obj = closure_0(closure_2[20]);
                                                        obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                        obj3 = closure_0(closure_2[21]);
                                                        obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                        fn = undefined;
                                                        if (null != closure_18) {
                                                          tmp = onRestoreVersion;
                                                          if (null != onRestoreVersion) {
                                                            fn = () => projectId(groupStart[22]).confirmRestoreVersion({ onConfirm() { ... } });
                                                          }
                                                        }
                                                        obj1.onRestoreVersion = fn;
                                                        fn2 = undefined;
                                                        if (null != closure_19) {
                                                          fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
                                                        }
                                                        obj1.onViewTrace = fn2;
                                                        return obj.showConjureMessageActions(obj1);
                                                      }
                                                    }
                                                    const tmp84 = replied(planSuperseded, obj17);
                                                    cResult[81] = tmp33;
                                                    cResult[82] = tmp78;
                                                    cResult[83] = tmp84;
                                                    tmp81 = tmp84;
                                                  }
                                                  const obj18 = { projectId, event: message.projectEvent };
                                                  const tmp80 = replied(tmp42(tmp2[31]), obj18);
                                                  class Ie {
                                                    constructor() {
                                                      obj = closure_0(closure_2[20]);
                                                      obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                      obj3 = closure_0(closure_2[21]);
                                                      obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                      fn = undefined;
                                                      if (null != closure_18) {
                                                        tmp = onRestoreVersion;
                                                        if (null != onRestoreVersion) {
                                                          fn = () => projectId(groupStart[22]).confirmRestoreVersion({ onConfirm() { ... } });
                                                        }
                                                      }
                                                      obj1.onRestoreVersion = fn;
                                                      fn2 = undefined;
                                                      if (null != closure_19) {
                                                        fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
                                                      }
                                                      obj1.onViewTrace = fn2;
                                                      return obj.showConjureMessageActions(obj1);
                                                    }
                                                  }
                                                  cResult[78] = message.projectEvent;
                                                  cResult[79] = projectId;
                                                  cResult[80] = tmp80;
                                                  tmp78 = tmp80;
                                                }
                                              }
                                              if ("publish_notice" === message.kind) {
                                                if (null != message.publishNotice) {
                                                  if (cResult[84] === message.publishNotice) {
                                                    if (cResult[85] === projectId) {
                                                      let tmp71 = cResult[86];
                                                    }
                                                    if (cResult[87] === tmp33) {
                                                      if (cResult[88] === tmp71) {
                                                        let tmp74 = cResult[89];
                                                      }
                                                      return tmp74;
                                                    }
                                                    const obj19 = { style: tmp33, children: null };
                                                    class Ie {
                                                      constructor() {
                                                        obj = closure_0(closure_2[20]);
                                                        obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                        obj3 = closure_0(closure_2[21]);
                                                        obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                        fn = undefined;
                                                        if (null != closure_18) {
                                                          tmp = onRestoreVersion;
                                                          if (null != onRestoreVersion) {
                                                            fn = () => projectId(groupStart[22]).confirmRestoreVersion({ onConfirm() { ... } });
                                                          }
                                                        }
                                                        obj1.onRestoreVersion = fn;
                                                        fn2 = undefined;
                                                        if (null != closure_19) {
                                                          fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
                                                        }
                                                        obj1.onViewTrace = fn2;
                                                        return obj.showConjureMessageActions(obj1);
                                                      }
                                                    }
                                                    const tmp77 = replied(planSuperseded, obj19);
                                                    cResult[87] = tmp33;
                                                    cResult[88] = tmp71;
                                                    cResult[89] = tmp77;
                                                    tmp74 = tmp77;
                                                  }
                                                  const obj20 = { projectId, notice: message.publishNotice };
                                                  const tmp73 = replied(tmp42(tmp2[32]), obj20);
                                                  class Ie {
                                                    constructor() {
                                                      obj = closure_0(closure_2[20]);
                                                      obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                      obj3 = closure_0(closure_2[21]);
                                                      obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                      fn = undefined;
                                                      if (null != closure_18) {
                                                        tmp = onRestoreVersion;
                                                        if (null != onRestoreVersion) {
                                                          fn = () => projectId(groupStart[22]).confirmRestoreVersion({ onConfirm() { ... } });
                                                        }
                                                      }
                                                      obj1.onRestoreVersion = fn;
                                                      fn2 = undefined;
                                                      if (null != closure_19) {
                                                        fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
                                                      }
                                                      obj1.onViewTrace = fn2;
                                                      return obj.showConjureMessageActions(obj1);
                                                    }
                                                  }
                                                  cResult[84] = message.publishNotice;
                                                  cResult[85] = projectId;
                                                  cResult[86] = tmp73;
                                                  tmp71 = tmp73;
                                                }
                                              }
                                              if (true === message.interrupted) {
                                                const _Symbol3 = Symbol;
                                                if (cResult[90] === Symbol.for("react.memo_cache_sentinel")) {
                                                  const intl = tmp(tmp2[26]).intl;
                                                  const stringResult = intl.string(tmp42(tmp2[33]).oOmBdX);
                                                  cResult[90] = stringResult;
                                                }
                                                const _Symbol4 = Symbol;
                                                class Ie {
                                                  constructor() {
                                                    obj = closure_0(closure_2[20]);
                                                    obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                    obj3 = closure_0(closure_2[21]);
                                                    obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                    fn = undefined;
                                                    if (null != closure_18) {
                                                      tmp = onRestoreVersion;
                                                      if (null != onRestoreVersion) {
                                                        fn = () => projectId(groupStart[22]).confirmRestoreVersion({ onConfirm() { ... } });
                                                      }
                                                    }
                                                    obj1.onRestoreVersion = fn;
                                                    fn2 = undefined;
                                                    if (null != closure_19) {
                                                      fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
                                                    }
                                                    obj1.onViewTrace = fn2;
                                                    return obj.showConjureMessageActions(obj1);
                                                  }
                                                }
                                                if (cResult[92] !== tmp4.activityBox) {
                                                  const obj21 = { style: tmp4.activityBox, children: tmp62 };
                                                  const tmp66 = replied(planSuperseded, obj21);
                                                  class Ie {
                                                    constructor() {
                                                      obj = closure_0(closure_2[20]);
                                                      obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                      obj3 = closure_0(closure_2[21]);
                                                      obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                      fn = undefined;
                                                      if (null != closure_18) {
                                                        tmp = onRestoreVersion;
                                                        if (null != onRestoreVersion) {
                                                          fn = () => projectId(groupStart[22]).confirmRestoreVersion({ onConfirm() { ... } });
                                                        }
                                                      }
                                                      obj1.onRestoreVersion = fn;
                                                      fn2 = undefined;
                                                      if (null != closure_19) {
                                                        fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
                                                      }
                                                      obj1.onViewTrace = fn2;
                                                      return obj.showConjureMessageActions(obj1);
                                                    }
                                                  }
                                                  cResult[92] = tmp4.activityBox;
                                                  cResult[93] = tmp66;
                                                  let tmp63 = tmp66;
                                                } else {
                                                  tmp63 = cResult[93];
                                                }
                                                if (cResult[94] === tmp33) {
                                                  if (cResult[95] === tmp63) {
                                                    let tmp67 = cResult[96];
                                                  }
                                                  return tmp67;
                                                }
                                                const obj22 = { style: tmp33, children: tmp63 };
                                                const tmp70 = replied(planSuperseded, obj22);
                                                cResult[94] = tmp33;
                                                cResult[95] = tmp63;
                                                cResult[96] = tmp70;
                                                tmp67 = tmp70;
                                              } else if (cResult[97] !== message.steps) {
                                                const _Symbol2 = Symbol;
                                                if (cResult[99] === Symbol.for("react.memo_cache_sentinel")) {
                                                  class Oe {
                                                    constructor(arg0) {
                                                      tmp = "error" === projectId.kind;
                                                      if (!tmp) {
                                                        str = "terminal_error";
                                                        tmp = "terminal_error" === projectId.kind;
                                                      }
                                                      return tmp;
                                                    }
                                                  }
                                                  cResult[99] = Oe;
                                                } else {
                                                  class Oe {
                                                    constructor(arg0) {
                                                      tmp = "error" === projectId.kind;
                                                      if (!tmp) {
                                                        str = "terminal_error";
                                                        tmp = "terminal_error" === projectId.kind;
                                                      }
                                                      return tmp;
                                                    }
                                                  }
                                                }
                                                const steps = message.steps;
                                                const found = steps.find(Oe);
                                                class Ie {
                                                  constructor() {
                                                    obj = closure_0(closure_2[20]);
                                                    obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                    obj3 = closure_0(closure_2[21]);
                                                    obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                    fn = undefined;
                                                    if (null != closure_18) {
                                                      tmp = onRestoreVersion;
                                                      if (null != onRestoreVersion) {
                                                        fn = () => projectId(groupStart[22]).confirmRestoreVersion({ onConfirm() { ... } });
                                                      }
                                                    }
                                                    obj1.onRestoreVersion = fn;
                                                    fn2 = undefined;
                                                    if (null != closure_19) {
                                                      fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
                                                    }
                                                    obj1.onViewTrace = fn2;
                                                    return obj.showConjureMessageActions(obj1);
                                                  }
                                                }
                                                cResult[98] = found;
                                              } else {
                                                class Oe {
                                                  constructor(arg0) {
                                                    tmp = "error" === projectId.kind;
                                                    if (!tmp) {
                                                      str = "terminal_error";
                                                      tmp = "terminal_error" === projectId.kind;
                                                    }
                                                    return tmp;
                                                  }
                                                }
                                                if ("proposal" === message.kind) {
                                                  class Oe {
                                                    constructor(arg0) {
                                                      tmp = "error" === projectId.kind;
                                                      if (!tmp) {
                                                        str = "terminal_error";
                                                        tmp = "terminal_error" === projectId.kind;
                                                      }
                                                      return tmp;
                                                    }
                                                  }
                                                }
                                                const turnSettledResult2 = tmp(tmp2[11]).turnSettled(message);
                                                class Ie {
                                                  constructor() {
                                                    obj = closure_0(closure_2[20]);
                                                    obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                    obj3 = closure_0(closure_2[21]);
                                                    obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                    fn = undefined;
                                                    if (null != closure_18) {
                                                      tmp = onRestoreVersion;
                                                      if (null != onRestoreVersion) {
                                                        fn = () => projectId(groupStart[22]).confirmRestoreVersion({ onConfirm() { ... } });
                                                      }
                                                    }
                                                    obj1.onRestoreVersion = fn;
                                                    fn2 = undefined;
                                                    if (null != closure_19) {
                                                      fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
                                                    }
                                                    obj1.onViewTrace = fn2;
                                                    return obj.showConjureMessageActions(obj1);
                                                  }
                                                }
                                                if (turnSettledResult2) {
                                                  class Oe {
                                                    constructor(arg0) {
                                                      tmp = "error" === projectId.kind;
                                                      if (!tmp) {
                                                        str = "terminal_error";
                                                        tmp = "terminal_error" === projectId.kind;
                                                      }
                                                      return tmp;
                                                    }
                                                  }
                                                  if (null != message.ideas) {
                                                    class Oe {
                                                      constructor(arg0) {
                                                        tmp = "error" === projectId.kind;
                                                        if (!tmp) {
                                                          str = "terminal_error";
                                                          tmp = "terminal_error" === projectId.kind;
                                                        }
                                                        return tmp;
                                                      }
                                                    }
                                                    if (message.ideas.length > 0) {
                                                      class Oe {
                                                        constructor(arg0) {
                                                          tmp = "error" === projectId.kind;
                                                          if (!tmp) {
                                                            str = "terminal_error";
                                                            tmp = "terminal_error" === projectId.kind;
                                                          }
                                                          return tmp;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                if (turnSettledResult2) {
                                                  class Oe {
                                                    constructor(arg0) {
                                                      tmp = "error" === projectId.kind;
                                                      if (!tmp) {
                                                        str = "terminal_error";
                                                        tmp = "terminal_error" === projectId.kind;
                                                      }
                                                      return tmp;
                                                    }
                                                  }
                                                  if (tmp53 == null) {
                                                    class Oe {
                                                      constructor(arg0) {
                                                        tmp = "error" === projectId.kind;
                                                        if (!tmp) {
                                                          str = "terminal_error";
                                                          tmp = "terminal_error" === projectId.kind;
                                                        }
                                                        return tmp;
                                                      }
                                                    }
                                                  }
                                                }
                                                if (turnSettledResult2) {
                                                  class Oe {
                                                    constructor(arg0) {
                                                      tmp = "error" === projectId.kind;
                                                      if (!tmp) {
                                                        str = "terminal_error";
                                                        tmp = "terminal_error" === projectId.kind;
                                                      }
                                                      return tmp;
                                                    }
                                                  }
                                                  if (tmp55 == null) {
                                                    class Oe {
                                                      constructor(arg0) {
                                                        tmp = "error" === projectId.kind;
                                                        if (!tmp) {
                                                          str = "terminal_error";
                                                          tmp = "terminal_error" === projectId.kind;
                                                        }
                                                        return tmp;
                                                      }
                                                    }
                                                  }
                                                }
                                                if (cResult[100] === isNewest) {
                                                  class Oe {
                                                    constructor(arg0) {
                                                      tmp = "error" === projectId.kind;
                                                      if (!tmp) {
                                                        str = "terminal_error";
                                                        tmp = "terminal_error" === projectId.kind;
                                                      }
                                                      return tmp;
                                                    }
                                                  }
                                                }
                                                let tmp57;
                                                if ("open" === secretRequestStatus) {
                                                  class Oe {
                                                    constructor(arg0) {
                                                      tmp = "error" === projectId.kind;
                                                      if (!tmp) {
                                                        str = "terminal_error";
                                                        tmp = "terminal_error" === projectId.kind;
                                                      }
                                                      return tmp;
                                                    }
                                                  }
                                                  const activeAwaitingUserResult = obj15.activeAwaitingUser(message, isNewest);
                                                  if (activeAwaitingUserResult == null) {
                                                    class Oe {
                                                      constructor(arg0) {
                                                        tmp = "error" === projectId.kind;
                                                        if (!tmp) {
                                                          str = "terminal_error";
                                                          tmp = "terminal_error" === projectId.kind;
                                                        }
                                                        return tmp;
                                                      }
                                                    }
                                                  }
                                                  tmp57 = activeAwaitingUserResult;
                                                }
                                                cResult[100] = isNewest;
                                                cResult[101] = message;
                                                cResult[102] = secretRequestStatus;
                                                cResult[103] = tmp57;
                                                const tmpResult15 = tmp(tmp2[11]);
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          class Ie {
                            constructor() {
                              obj = closure_0(closure_2[20]);
                              obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                              obj3 = closure_0(closure_2[21]);
                              obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                              fn = undefined;
                              if (null != closure_18) {
                                tmp = onRestoreVersion;
                                if (null != onRestoreVersion) {
                                  fn = () => projectId(groupStart[22]).confirmRestoreVersion({ onConfirm() { ... } });
                                }
                              }
                              obj1.onRestoreVersion = fn;
                              fn2 = undefined;
                              if (null != closure_19) {
                                fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
                              }
                              obj1.onViewTrace = fn2;
                              return obj.showConjureMessageActions(obj1);
                            }
                          }
                          cResult[41] = user_id;
                          cResult[42] = tmp26;
                          cResult[43] = stateFromStores;
                          cResult[44] = message;
                          cResult[45] = onRestoreVersion;
                          cResult[46] = projectId;
                          cResult[47] = tmp43;
                          cResult[48] = tmp40;
                          cResult[49] = Ie;
                        }
                        let turnRestoreEntryResult = null;
                        if (null != onRestoreVersion) {
                          class Oe {
                            constructor(arg0) {
                              tmp = "error" === projectId.kind;
                              if (!tmp) {
                                str = "terminal_error";
                                tmp = "terminal_error" === projectId.kind;
                              }
                              return tmp;
                            }
                          }
                          turnRestoreEntryResult = obj13.turnRestoreEntry(message);
                        }
                        cResult[38] = message;
                        cResult[39] = onRestoreVersion;
                        cResult[40] = turnRestoreEntryResult;
                        tmp40 = turnRestoreEntryResult;
                        const tmpResult14 = tmp(tmp2[17]);
                      }
                      const items3 = [tmp4.row, rowGroupStart];
                      cResult[33] = tmp4.row;
                      cResult[34] = rowGroupStart;
                      cResult[35] = items3;
                      tmp33 = items3;
                    }
                  }
                }
                if ("user" === message.role) {
                  class Oe {
                    constructor(arg0) {
                      tmp = "error" === projectId.kind;
                      if (!tmp) {
                        str = "terminal_error";
                        tmp = "terminal_error" === projectId.kind;
                      }
                      return tmp;
                    }
                  }
                  const result1 = obj11.withoutInlineFileMentions(message.attachments, message.content);
                } else {
                  class Oe {
                    constructor(arg0) {
                      tmp = "error" === projectId.kind;
                      if (!tmp) {
                        str = "terminal_error";
                        tmp = "terminal_error" === projectId.kind;
                      }
                      return tmp;
                    }
                  }
                }
                cResult[29] = message.attachments;
                cResult[30] = message.content;
                cResult[31] = message.role;
                cResult[32] = result1;
                const tmpResult13 = tmp(tmp2[15]);
              }
              function se() {
                if (null != replied) {
                  if (onJumpToReplied != null) {
                    tmp2(tmp.id);
                  }
                }
              }
              cResult[22] = onJumpToReplied;
              cResult[24] = se;
            }
          }
          function re() {
            return onTogglePlan(message.render_id, planSuperseded);
          }
          cResult[18] = message.render_id;
          cResult[20] = planSuperseded;
          cResult[21] = re;
        }
      }
      function le() {
        return onToggleChecklist(message.render_id, checklistSuperseded);
      }
      cResult[14] = checklistSuperseded;
      cResult[15] = message.render_id;
      cResult[16] = onToggleChecklist;
      cResult[17] = le;
    }
    const obj23 = { turnActive: !tmp10 };
    const turnSegmentsResult = obj5.turnSegments(message.steps, obj23);
    cResult[7] = message.steps;
    cResult[8] = !tmp10;
    cResult[9] = turnSegmentsResult;
  }
  let obj = projectId(groupStart[10]);
  const timelineTree = projectId(groupStart[12]).buildTimelineTree(message.steps, { turnActive: tmp7 });
  cResult[2] = message.steps;
  cResult[3] = !tmp5;
  cResult[4] = timelineTree;
  tmp8 = timelineTree;
  const tmpResult16 = projectId(groupStart[12]);
}) : (function ConjureMessageRow(projectId) {
  projectId = projectId.projectId;
  const message = projectId.message;
  const groupStart = projectId.groupStart;
  ({ isNewest, checklistSuperseded } = projectId);
  ({ secretRequestStatus, onToggleChecklist } = projectId);
  const planSuperseded = projectId.planSuperseded;
  const onTogglePlan = projectId.onTogglePlan;
  const replied = projectId.replied;
  const onJumpToReplied = projectId.onJumpToReplied;
  ({ onDismissClarification: closure_9, onDismissAppBuildRequest: closure_10, onRestoreVersion } = projectId);
  let trimmed;
  let user_id;
  let stateFromStores;
  let memo5;
  closure_19 = undefined;
  let restoreProposal;
  let clarification;
  let appBuildRequest;
  c23 = undefined;
  c24 = undefined;
  let index;
  closure_26 = undefined;
  let open;
  ({ first, checklistExpanded, planVersion, planExpanded, onApprovePlan, onPickIdea, onAnswerClarification, clarificationDismissed, onClarificationInputFocusChange, canSend, appBuildRequestDismissed } = projectId);
  let tmp = closure_10();
  const spoken = tmp;
  const items = [message];
  const memo = checklistSuperseded.useMemo(() => {
    const obj2 = { turnActive: null };
    const obj = ConjureTimelineTree;
    obj2.turnActive = !conjureChatTurns.turnSettled(message);
    return obj.buildTimelineTree(message.steps, obj2);
  }, items);
  const items1 = [message];
  const memo1 = checklistSuperseded.useMemo(() => {
    const obj2 = { turnActive: null };
    const obj = ConjureTimelineTree;
    obj2.turnActive = !conjureChatTurns.turnSettled(message);
    return obj.turnSegments(message.steps, obj2);
  }, items1);
  const items2 = [message];
  const memo2 = checklistSuperseded.useMemo(() => ConjureTimelineTree.latestTodos(message.steps), items2);
  const items3 = [memo];
  const items4 = [onToggleChecklist, message.render_id, checklistSuperseded];
  const memo3 = checklistSuperseded.useMemo(() => ConjureTodoAgents.runningTodoAgents(memo.tasks), items3);
  const items5 = [onTogglePlan, message.render_id, planSuperseded];
  const callback = checklistSuperseded.useCallback(() => onToggleChecklist(message.render_id, checklistSuperseded), items4);
  const items6 = [onJumpToReplied, replied];
  const callback1 = checklistSuperseded.useCallback(() => onTogglePlan(message.render_id, planSuperseded), items5);
  const items7 = [message.content];
  const callback2 = checklistSuperseded.useCallback(() => {
    if (null != replied) {
      if (onJumpToReplied != null) {
        tmp2(tmp.id);
      }
    }
  }, items6);
  const memo4 = checklistSuperseded.useMemo(() => ConjureDesignFeedback.parseConjureDesignRemark(message.content), items7);
  let body;
  if (memo4 != null) {
    body = memo4.body;
  }
  if (body == null) {
    body = message.content;
  }
  trimmed = body.trim();
  const conjureMentionNames = projectId(groupStart[15]).useConjureMentionNames(trimmed);
  if ("user" === message.role) {
    let result = tmp11(tmp12[16]).withoutInlineFileMentions(message.attachments, message.content);
    const tmp11Result = tmp11(tmp12[16]);
  } else {
    result = message.attachments;
  }
  let tmp14 = null;
  if (null != result) {
    tmp14 = null;
    if (result.length > 0) {
      tmp14 = result;
    }
  }
  const items8 = [tmp.row, ];
  let rowGroupStart = groupStart;
  if (groupStart) {
    rowGroupStart = !first;
  }
  if (rowGroupStart) {
    rowGroupStart = tmp.rowGroupStart;
  }
  items8[1] = rowGroupStart;
  user_id = undefined;
  if ("user" === message.role) {
    user_id = message.user_id;
  }
  let obj2 = projectId(groupStart[15]);
  const items9 = [onTogglePlan];
  stateFromStores = projectId(groupStart[17]).useStateFromStores(items9, () => {
    const currentUser = onTogglePlan.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items10 = [message, onRestoreVersion];
  memo5 = checklistSuperseded.useMemo(() => {
    let turnRestoreEntryResult = null;
    if (null != onRestoreVersion) {
      turnRestoreEntryResult = ConjureChatRestore.turnRestoreEntry(message);
    }
    return turnRestoreEntryResult;
  }, items10);
  const tmp19 = message(groupStart[19])(projectId, message);
  closure_19 = tmp19;
  const items11 = [trimmed, user_id, projectId, message, stateFromStores, memo5, onRestoreVersion, tmp19];
  const callback3 = checklistSuperseded.useCallback(() => {
    const obj2 = { content: trimmed, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
    const obj = ConjureMessageActionSheet;
    obj2.onQueuedAction = conjureQueuedMessage.queuedMessageActionHandler(projectId, message, stateFromStores);
    let fn;
    if (null != memo5) {
      if (null != onRestoreVersion) {
        fn = () => projectId(groupStart[22]).confirmRestoreVersion({
          onConfirm() {
            return closure_1_11(closure_1_18);
          }
        });
      }
    }
    obj2.onRestoreVersion = fn;
    let fn2;
    if (null != closure_19) {
      fn2 = () => projectId(groupStart[23]).requestConjureTrace(closure_1_0, closure_1_19);
    }
    obj2.onViewTrace = fn2;
    return obj.showConjureMessageActions(obj2);
  }, items11);
  if ("" === trimmed) {
    if (null == user_id) {
      if ("user" === message.role) {
        if ("" === trimmed) {
          if (null == memo4) {
            let tmp88Result2 = null;
          }
          return tmp88Result2;
        }
        let obj3 = { style: items8, onLongPress: tmp22, accessible: false, children: null };
        let tmp90 = null;
        if (groupStart) {
          let obj4 = { style: tmp.avatar, children: null };
          const obj5 = { userId: message.user_id };
          obj4.children = replied(tmp11(tmp12[24]).ConjureUserAvatar, obj5);
          tmp90 = replied(planSuperseded, obj4);
        }
        const items12 = [tmp90, , , ];
        let tmp93 = null;
        if (groupStart) {
          const obj6 = { style: tmp.header, children: null };
          ({ user_id: obj55.userId, created_at: obj55.at } = message);
          obj6.children = replied(tmp11(tmp12[24]).ConjureUserHeader, { userId: null, at: null });
          tmp93 = replied(planSuperseded, obj6);
          const obj7 = { userId: null, at: null };
        }
        items12[1] = tmp93;
        if (tmp21) {
          let combined;
          if (!groupStart) {
            const intl3 = tmp11(tmp12[26]).intl;
            const _HermesInternal = HermesInternal;
            combined = "" + intl3.string(tmp11(tmp12[26]).t.KD6OJJ) + ": " + conjureMentionNames;
          }
          const obj8 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: null };
          let tmp99 = null;
          if (null != memo4) {
            const obj9 = { label: memo4.label, variant: "text-md/medium" };
            tmp99 = replied(tmp18(tmp12[27]), obj9);
          }
          const items13 = [tmp99, , ];
          let str6 = null;
          if (null != memo4) {
            str6 = null;
            if (tmp21) {
              str6 = " ";
            }
          }
          items13[1] = str6;
          const obj10 = { text: trimmed, variant: "text-md/normal" };
          items13[2] = replied(tmp18(tmp12[28]), obj10);
          obj8.children = items13;
          let tmp88Result = tmp88(tmp11(tmp12[25]).Text, obj8);
        } else {
          tmp88Result = null;
        }
        items12[2] = tmp88Result;
        let tmp102 = null;
        if (null != tmp14) {
          const obj11 = { projectId, attachments: tmp14 };
          tmp102 = replied(tmp18(tmp12[29]), obj11);
        }
        items12[3] = tmp102;
        obj3.children = items12;
        tmp88Result2 = tmp88(onToggleChecklist, obj3);
      } else if ("context_boundary" === message.kind) {
        let tmp84 = null;
        if (null != message.contextSwitch) {
          const obj12 = { style: tmp.boundaryRow, children: null };
          const obj13 = { projectId, contextSwitch: message.contextSwitch };
          obj12.children = replied(tmp18(tmp12[30]), obj13);
          tmp84 = replied(planSuperseded, obj12);
        }
        return tmp84;
      } else {
        if ("project_event" === message.kind) {
          if (null != message.projectEvent) {
            const obj14 = { style: items8, children: null };
            const obj15 = { projectId, event: message.projectEvent };
            obj14.children = replied(tmp18(tmp12[31]), obj15);
            return replied(planSuperseded, obj14);
          }
        }
        if ("publish_notice" === message.kind) {
          if (null != message.publishNotice) {
            const obj16 = { style: items8, children: null };
            const obj17 = { projectId, notice: message.publishNotice };
            obj16.children = replied(tmp18(tmp12[32]), obj17);
            return replied(planSuperseded, obj16);
          }
        }
        if (true === message.interrupted) {
          const obj18 = { style: items8, children: null };
          const obj19 = { style: tmp.activityBox, children: null };
          const obj20 = { line: null, live: false, settled: true, inGutter: true, glyph: null };
          const intl2 = tmp11(tmp12[26]).intl;
          obj20.line = intl2.string(tmp18(tmp12[33]).oOmBdX);
          const obj21 = { size: "refresh_sm", color: tmp18(tmp12[8]).colors.TEXT_MUTED };
          obj20.glyph = replied(tmp11(tmp12[34]).StopIcon, obj21);
          obj19.children = replied(tmp18(tmp12[5]), obj20);
          obj18.children = replied(planSuperseded, obj19);
          return replied(planSuperseded, obj18);
        } else {
          const steps = message.steps;
          const found = steps.find((kind) => {
            let tmp = "error" === kind.kind;
            if (!tmp) {
              tmp = "terminal_error" === kind.kind;
            }
            return tmp;
          });
          let proposal;
          if ("proposal" === message.kind) {
            proposal = message.proposal;
          }
          const turnSettledResult = tmp11(tmp12[11]).turnSettled(message);
          let ideas = null;
          if (turnSettledResult) {
            ideas = null;
            if (null != message.ideas) {
              ideas = null;
              if (message.ideas.length > 0) {
                ideas = message.ideas;
              }
            }
          }
          let tmp26 = null;
          if (turnSettledResult) {
            let publishCta = message.publishCta;
            if (publishCta == null) {
              publishCta = null;
            }
            tmp26 = publishCta;
          }
          let tmp28 = null;
          if (turnSettledResult) {
            let secretRequest = message.secretRequest;
            if (secretRequest == null) {
              secretRequest = null;
            }
            tmp28 = secretRequest;
          }
          if ("open" === secretRequestStatus) {
            const tmp11Result12 = tmp11(tmp12[35]);
            const tmp30 = tmp11(tmp12[35]).activeAwaitingUser(message, isNewest);
            const activeAwaitingUserResult = tmp11(tmp12[35]).activeAwaitingUser(message, isNewest);
          }
          let tmp32 = null;
          if (turnSettledResult) {
            let settingsRequest = message.settingsRequest;
            if (settingsRequest == null) {
              settingsRequest = null;
            }
            tmp32 = settingsRequest;
          }
          restoreProposal = message.restoreProposal;
          if (restoreProposal == null) {
            restoreProposal = null;
          }
          let prop = message.publishScheduleProposal;
          if (prop == null) {
            prop = null;
          }
          clarification = null;
          if (isNewest) {
            clarification = null;
            if (!clarificationDismissed) {
              clarification = null;
              if (null != message.clarification) {
                clarification = null;
                if (message.clarification.questions.length > 0) {
                  clarification = message.clarification;
                }
              }
            }
          }
          let tmp37 = null;
          if (isNewest) {
            tmp37 = null;
            if (turnSettledResult) {
              tmp37 = null;
              if (!appBuildRequestDismissed) {
                appBuildRequest = message.appBuildRequest;
                if (appBuildRequest == null) {
                  appBuildRequest = null;
                }
                tmp37 = appBuildRequest;
              }
            }
          }
          appBuildRequest = tmp37;
          let items18 = memo2;
          if (memo2 == null) {
            let todos = null;
            if (null != message.todos) {
              todos = null;
              if (message.todos.length > 0) {
                todos = message.todos;
              }
            }
            items18 = todos;
          }
          if (null == items18) {
            if (null != message.provisionalTodo) {
              if ("" !== message.provisionalTodo) {
                const provisionalTodo = message.provisionalTodo;
              }
            }
          }
          const tmp11Result11 = tmp11(tmp12[11]);
          const obj22 = { steps: message.steps, content: trimmed, hasProposal: null != proposal, hasLiveClarification: null != clarification, hasAttachments: null != tmp14 };
          const turnPresentation = tmp11(tmp12[36]).resolveTurnPresentation(obj22);
          ({ showsClosingMessage, replyKey: c23 } = turnPresentation);
          let tmp41 = memo.steps.length > 0;
          if (!tmp41) {
            tmp41 = memo.tasks.length > 0;
          }
          if (!tmp41) {
            if (0 === turnPresentation.streamed.length) {
              if ("" === trimmed) {
                if (null == proposal) {
                  if (null == found) {
                    if (null == ideas) {
                      if (null == items18) {
                        if (null == provisionalTodo) {
                          if (null == tmp28) {
                            if (null == tmp32) {
                              if (null == tmp14) {
                                if (null == clarification) {
                                  if (null == restoreProposal) {
                                    if (null == prop) {
                                      if (null == tmp37) {
                                        if (null == tmp26) {
                                          return null;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const tmp11Result13 = tmp11(tmp12[36]);
          const turnLeadsWithStretchResult = tmp11(tmp12[36]).turnLeadsWithStretch(tmp41, turnPresentation);
          c24 = turnLeadsWithStretchResult;
          const found1 = memo1.filter((hasWork) => hasWork.hasWork);
          const atResult = found1.at(-1);
          index = undefined;
          if (atResult != null) {
            index = atResult.index;
          }
          const tmp11Result14 = tmp11(tmp12[36]);
          const tmp45 = !tmp11(tmp12[11]).turnSettled(message);
          closure_26 = tmp45;
          const tmp11Result15 = tmp11(tmp12[11]);
          const obj23 = { turnActive: tmp45 };
          open = tmp11(tmp12[12]).turnLifecycle(memo1, obj23).open;
          let avatarSpokenReplying = groupStart;
          if (groupStart) {
            avatarSpokenReplying = null != replied;
          }
          let tmp49Result = null;
          if (avatarSpokenReplying) {
            const obj24 = { replied, onJump: null };
            let tmp51;
            if (null != onJumpToReplied) {
              tmp51 = callback2;
            }
            obj24.onJump = tmp51;
            tmp49Result = replied(tmp18(tmp12[7]), obj24);
            const tmp18Result5 = tmp18(tmp12[7]);
          }
          const items14 = [tmp49Result, , ];
          const items15 = [, , ];
          ({ avatar: arr17[0], avatarSpoken: arr17[1] } = tmp);
          if (avatarSpokenReplying) {
            avatarSpokenReplying = tmp.avatarSpokenReplying;
          }
          const obj25 = { children: null };
          const obj26 = { style: null, children: null };
          items15[2] = avatarSpokenReplying;
          obj26.style = items15;
          obj26.children = replied(tmp11(tmp12[24]).ConjureAvatar, {});
          items14[1] = replied(planSuperseded, obj26);
          const obj27 = { style: tmp.header, children: null };
          const obj28 = { at: message.created_at };
          obj27.children = replied(tmp11(tmp12[24]).ConjureHeader, obj28);
          items14[2] = replied(planSuperseded, obj27);
          obj25.children = items14;
          const tmp46Result = onJumpToReplied(closure_9, obj25);
          const obj29 = { style: items8, onLongPress: tmp22, accessible: false, children: null };
          let tmp52Result = null;
          if (turnLeadsWithStretchResult) {
            tmp52Result = null;
            if (groupStart) {
              const obj30 = { style: tmp.spoken, children: tmp46Result };
              tmp52Result = tmp52(tmp53, obj30);
            }
          }
          const items16 = [
            tmp52Result,
            memo1.map((prose, index) => {
                      let tmp19Result = null;
                      if (null != prose.prose) {
                        tmp19Result = null;
                        if (prose.prose.key !== c23) {
                          const obj3 = { style: spoken.spoken, children: null };
                          const obj4 = { source: prose.prose.content, streaming: null };
                          let tmp5 = closure_26;
                          if (closure_26) {
                            tmp5 = index === memo1.length - 1;
                          }
                          if (tmp5) {
                            tmp5 = !prose.hasWork;
                          }
                          obj4.streaming = tmp5;
                          obj3.children = React5(ConjureNativeMarkdown.ConjureRevealedMarkdown, obj4);
                          tmp19Result = React5(hasOwnProperty, obj3);
                        }
                      }
                      const children = [tmp19Result, ];
                      let tmp7Result = null;
                      if (prose.hasWork) {
                        const obj = { projectId, tree: null, turnActive: null, besideAvatar: null };
                        const tmp10 = ConjureActivityBoxDefault;
                        obj.tree = ConjureActivityBox.stretchOf(memo, prose.index, prose.index === index);
                        obj.turnActive = prose.index === open;
                        let tmp16 = c24;
                        if (c24) {
                          tmp16 = groupStart;
                        }
                        if (tmp16) {
                          tmp16 = 0 === index;
                        }
                        if (tmp16) {
                          let tmp17 = null == prose.prose;
                          if (!tmp17) {
                            tmp17 = prose.prose.key === c23;
                          }
                          tmp16 = tmp17;
                        }
                        obj.besideAvatar = tmp16;
                        tmp7Result = React5(tmp10, obj);
                      }
                      children[1] = tmp7Result;
                      return closure_2_8(noop.Fragment, { children }, prose.key);
                    }),
  ,

          ];
          if (!showsClosingMessage) {
            if (null == proposal) {
              if (null == clarification) {
                if (null == restoreProposal) {
                  if (null == prop) {
                    if (null == tmp37) {
                      if (null == ideas) {
                        if (null == tmp28) {
                          if (null == tmp32) {
                            if (null == tmp14) {
                              if (null == found) {
                                if (null == items18) {
                                  if (null == provisionalTodo) {
                                    let tmp46Result2 = null;
                                  }
                                  items16[2] = tmp46Result2;
                                  let tmp52Result16 = null;
                                  if (null != tmp30) {
                                    const obj31 = { style: tmp.spoken, children: null };
                                    const obj32 = { variant: "text-xs/normal", color: "text-muted", children: null };
                                    const intl = tmp11(tmp12[26]).intl;
                                    obj32.children = intl.string(tmp18(tmp12[33]).YR8A2v);
                                    obj31.children = tmp52(tmp11(tmp12[25]).Text, obj32);
                                    tmp52Result16 = tmp52(tmp53, obj31);
                                  }
                                  items16[3] = tmp52Result16;
                                  obj29.children = items16;
                                  return tmp46(onToggleChecklist, obj29);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj33 = { style: tmp.spoken, children: null };
          let tmp58 = null;
          if (groupStart) {
            tmp58 = null;
            if (!turnLeadsWithStretchResult) {
              tmp58 = tmp46Result;
            }
          }
          const items17 = [tmp58, , , , , , , , , , , , , , ];
          let tmp52Result17 = null;
          if (showsClosingMessage) {
            const obj34 = { source: turnPresentation.closingContent };
            tmp52Result17 = tmp52(tmp18(tmp12[37]), obj34);
          }
          items17[1] = tmp52Result17;
          let tmp52Result18 = null;
          if ("side_reply" === message.kind) {
            const obj35 = { variant: "text-xs/normal", color: "text-muted", children: tmp11(tmp12[39]).midTurnCaption(message.acknowledges) };
            tmp52Result18 = tmp52(tmp11(tmp12[25]).Text, obj35);
            const tmp11Result17 = tmp11(tmp12[39]);
          }
          items17[2] = tmp52Result18;
          let tmp52Result19 = null;
          if (null != tmp14) {
            const obj36 = { projectId, attachments: tmp14 };
            tmp52Result19 = tmp52(tmp18(tmp12[29]), obj36);
          }
          items17[3] = tmp52Result19;
          if (null != items18) {
            const tmp18Result6 = tmp18(tmp12[40]);
            if (items18 == null) {
              items18 = [];
            }
            const obj37 = { children: null };
            const obj38 = { todos: items18, provisional: provisionalTodo, agents: memo3, live: null, superseded: null, expanded: null, onToggleExpanded: null };
            const tmp18Result7 = tmp18(tmp12[41]);
            obj38.live = tmp11(tmp12[42]).checklistLive(message);
            obj38.superseded = checklistSuperseded;
            obj38.expanded = checklistExpanded;
            obj38.onToggleExpanded = callback;
            obj37.children = tmp52(tmp18Result7, obj38);
            let tmp52Result20 = tmp52(tmp18Result6, obj37);
            const tmp11Result18 = tmp11(tmp12[42]);
          } else {
            tmp52Result20 = null;
          }
          items17[4] = tmp52Result20;
          let tmp52Result21 = null;
          if (null != proposal) {
            const obj39 = { projectId, proposal, version: planVersion, superseded: planSuperseded, expanded: planExpanded, onToggleExpanded: callback1, onApprove: onApprovePlan };
            tmp52Result21 = tmp52(tmp18(tmp12[43]), obj39);
          }
          items17[5] = tmp52Result21;
          let tmp52Result22 = null;
          if (null != clarification) {
            const obj40 = {
              projectId,
              clarification,
              onSubmit: onAnswerClarification,
              onDismiss() {
                          return closure_1_9(clarification.id);
                        },
              onInputFocusChange: onClarificationInputFocusChange
            };
            tmp52Result22 = tmp52(tmp18(tmp12[44]), obj40);
          }
          items17[6] = tmp52Result22;
          let tmp52Result23 = null;
          if (null != tmp37) {
            const obj41 = {
              projectId,
              request: tmp37,
              canSend,
              onDismiss() {
                          return closure_1_10(appBuildRequest.id);
                        }
            };
            tmp52Result23 = tmp52(tmp18(tmp12[45]), obj41);
          }
          items17[7] = tmp52Result23;
          let tmp52Result24 = null;
          if (null != tmp28) {
            const obj42 = { projectId, cardId: message.render_id, request: tmp28, status: secretRequestStatus, awaiting: tmp30 };
            tmp52Result24 = tmp52(tmp18(tmp12[46]), obj42);
          }
          items17[8] = tmp52Result24;
          let tmp52Result25 = null;
          if (null != tmp32) {
            const obj43 = { projectId, request: tmp32 };
            tmp52Result25 = tmp52(tmp18(tmp12[47]), obj43);
          }
          items17[9] = tmp52Result25;
          let tmp52Result26 = null;
          if (null != tmp26) {
            const obj44 = { projectId, cta: tmp26 };
            tmp52Result26 = tmp52(tmp18(tmp12[48]), obj44);
          }
          items17[10] = tmp52Result26;
          let tmp52Result27 = null;
          if (null != ideas) {
            const obj45 = { ideas, onPick: onPickIdea };
            tmp52Result27 = tmp52(tmp18(tmp12[49]), obj45);
          }
          items17[11] = tmp52Result27;
          let tmp52Result28 = null;
          if (null != restoreProposal) {
            const obj46 = { proposal: restoreProposal, onRestore: null };
            let fn;
            if (isNewest) {
              if (null != onRestoreVersion) {
                fn = () => ConjureVersionRestoreConfirm.confirmRestoreVersion({
                  onConfirm() {
                    return onRestoreVersion(projectId(groupStart[18]).proposalRestoreEntry(restoreProposal));
                  }
                });
              }
            }
            obj46.onRestore = fn;
            tmp52Result28 = tmp52(tmp18(tmp12[50]), obj46);
            const tmp18Result8 = tmp18(tmp12[50]);
          }
          items17[12] = tmp52Result28;
          let tmp52Result29 = null;
          if (null != prop) {
            const obj47 = { projectId, proposal: prop, current: isNewest };
            tmp52Result29 = tmp52(tmp18(tmp12[51]), obj47);
          }
          items17[13] = tmp52Result29;
          let tmp52Result30 = null;
          if (null != found) {
            tmp52Result30 = null;
            if ("message" in found) {
              const obj48 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
              tmp52Result30 = tmp52(tmp11(tmp12[25]).Text, obj48);
            }
          }
          items17[14] = tmp52Result30;
          obj33.children = items17;
          tmp46Result2 = tmp46(tmp53, obj33);
          const tmp11Result16 = tmp11(tmp12[12]);
        }
      }
    }
  }
  const tmp11Result10 = projectId(groupStart[17]);
}));