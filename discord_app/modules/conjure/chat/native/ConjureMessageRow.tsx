// === Module 12271: ConjureMessageRow ===

// Module 12271 (ConjureMessageRow)
import nativeDefault from "native" /* 587 */;
import conjureChatTurns from "conjureChatTurns" /* 10658 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 11769 */;
import ConjureVersionRestoreConfirm from "ConjureVersionRestoreConfirm" /* 12193 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 12200 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 12228 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 12242 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 12278 */;
import ConjureChatRestore from "ConjureChatRestore" /* 12282 */;
import conjureQueuedMessage from "conjureQueuedMessage" /* 12284 */;
import ConjureActivityBox from "ConjureActivityBox" /* 12304 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1392 */;

const ConjureActivityBoxDefault = ConjureActivityBox;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4966);
let obj = { row: { position: "relative", paddingLeft: fn(12263).MESSAGE_CONTENT_INSET, paddingRight: fn(12263).MESSAGE_EDGE_INSET, paddingVertical: fn(12272).ROW_PAD, gap: fn(12272).BLOCK_GAP }, rowGroupStart: null, boundaryRow: null, avatar: null, spoken: null, avatarSpoken: null, avatarSpokenReplying: null, header: null, activityBox: null };
let obj3 = { position: "relative", paddingLeft: fn(12263).MESSAGE_CONTENT_INSET, paddingRight: fn(12263).MESSAGE_EDGE_INSET, paddingVertical: fn(12272).ROW_PAD, gap: fn(12272).BLOCK_GAP };
obj.rowGroupStart = { marginTop: fn(12272).GROUP_GAP };
let obj4 = { marginTop: fn(12272).GROUP_GAP };
obj.boundaryRow = { paddingHorizontal: fn(12263).MESSAGE_EDGE_INSET, paddingVertical: fn(12272).ROW_PAD };
const rect = { position: "absolute", left: fn(12263).MESSAGE_EDGE_INSET, top: fn(12272).ROW_PAD };
obj.avatar = rect;
let obj5 = { paddingHorizontal: fn(12263).MESSAGE_EDGE_INSET, paddingVertical: fn(12272).ROW_PAD };
obj.spoken = { position: "relative", gap: fn(12272).BLOCK_GAP };
const rect1 = { left: fn(12263).MESSAGE_EDGE_INSET - fn(12263).MESSAGE_CONTENT_INSET, top: 0 };
obj.avatarSpoken = rect1;
let obj6 = { position: "relative", gap: fn(12272).BLOCK_GAP };
obj.avatarSpokenReplying = { top: fn(12273).REPLY_PREVIEW_HEIGHT + fn(12272).BLOCK_GAP };
let obj7 = { top: fn(12273).REPLY_PREVIEW_HEIGHT + fn(12272).BLOCK_GAP };
obj.header = { marginBottom: -nativeDefault.space.PX_4 };
let obj8 = { marginBottom: -nativeDefault.space.PX_4 };
obj.activityBox = { marginLeft: -fn(12272).RAIL_INDENT };
let closure_10 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj9 = { marginLeft: -fn(12272).RAIL_INDENT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageRow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureMessageRow(projectId) {
  const cResult = projectId(groupStart[10]).c(231);
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
  ({ onCardInputFocusChange, canSend, onDismissAppBuildRequest } = projectId);
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
      const tmpResult16 = tmp(tmp2[11]);
    } else {
      tmp10 = cResult[6];
    }
    if (cResult[7] === message.steps) {
      if (cResult[8] === tmp12) {
        let arr = cResult[9];
      }
      if (cResult[10] !== message.steps) {
        const latestTodosResult = tmp(tmp2[12]).latestTodos(message.steps);
        cResult[10] = message.steps;
        cResult[11] = latestTodosResult;
        let tmp14 = latestTodosResult;
        const tmpResult17 = tmp(tmp2[12]);
      } else {
        tmp14 = cResult[11];
      }
      if (cResult[12] !== tmp8.tasks) {
        const runningTodoAgentsResult = tmp(tmp2[13]).runningTodoAgents(tmp8.tasks);
        cResult[12] = tmp8.tasks;
        cResult[13] = runningTodoAgentsResult;
        const tmpResult18 = tmp(tmp2[13]);
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
                  let tmp21 = result;
                  const tmpResult19 = tmp(tmp2[14]);
                } else {
                  tmp21 = cResult[26];
                }
                let body;
                if (tmp21 != null) {
                  body = tmp21.body;
                }
                if (body == null) {
                  body = message.content;
                }
                if (cResult[27] !== body) {
                  const trimmed = body.trim();
                  cResult[27] = body;
                  cResult[28] = trimmed;
                  let tmp25 = trimmed;
                } else {
                  tmp25 = cResult[28];
                }
                content = tmp25;
                const conjureMentionNames = tmp(tmp2[15]).useConjureMentionNames(tmp25);
                if (cResult[29] === message.attachments) {
                  if (cResult[30] === message.content) {
                    if (cResult[31] === message.role) {
                      let tmp30 = null;
                      if (null != cResult[32]) {
                        tmp30 = null;
                        if (arr2.length > 0) {
                          tmp30 = arr2;
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
                          let tmp31 = cResult[35];
                        }
                        let user_id;
                        if ("user" === message.role) {
                          user_id = message.user_id;
                        }
                        const _Symbol = Symbol;
                        if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                          const items = [onTogglePlan];
                          function xe() {
                            const currentUser = onTogglePlan.getCurrentUser();
                            let id;
                            if (currentUser != null) {
                              id = currentUser.id;
                            }
                            return id;
                          }
                          cResult[36] = items;
                          cResult[37] = xe;
                          let tmp35 = xe;
                          let tmp34 = items;
                        } else {
                          tmp34 = cResult[36];
                          tmp35 = cResult[37];
                        }
                        const stateFromStores = tmp(tmp2[17]).useStateFromStores(tmp34, tmp35);
                        if (cResult[38] === message) {
                          if (cResult[39] === onRestoreVersion) {
                            let tmp38 = cResult[40];
                          }
                          closure_18 = tmp38;
                          const tmp41 = message(tmp2[19])(projectId, message);
                          closure_19 = tmp41;
                          if (cResult[41] === user_id) {
                            if (cResult[42] === tmp25) {
                              if (cResult[43] === stateFromStores) {
                                if (cResult[44] === message) {
                                  if (cResult[45] === onRestoreVersion) {
                                    if (cResult[46] === projectId) {
                                      if (cResult[47] === tmp41) {
                                        if ("" === tmp25) {
                                          if (null == user_id) {
                                            if ("user" === message.role) {
                                              if ("" === tmp25) {
                                                if (null == tmp21) {
                                                  if (null == tmp30) {
                                                    return null;
                                                  }
                                                }
                                              }
                                              if (cResult[50] === groupStart) {
                                                if (cResult[51] === message.user_id) {
                                                  if (cResult[52] === tmp4.avatar) {
                                                    let tmp111 = cResult[53];
                                                  }
                                                  if (cResult[54] === groupStart) {
                                                    if (cResult[55] === message.created_at) {
                                                      if (cResult[56] === message.user_id) {
                                                        if (cResult[57] === tmp4.header) {
                                                          let tmp115 = cResult[58];
                                                        }
                                                        if (cResult[59] === tmp25) {
                                                          if (cResult[60] === groupStart) {
                                                            if (cResult[61] === tmp21) {
                                                              if (cResult[62] === conjureMentionNames) {
                                                                let tmp119 = cResult[63];
                                                              }
                                                              if (cResult[64] === tmp30) {
                                                                if (cResult[65] === projectId) {
                                                                  let tmp126 = cResult[66];
                                                                }
                                                                if (cResult[67] !== message.agentReaction) {
                                                                  let tmp130 = null;
                                                                  if (null != message.agentReaction) {
                                                                    let obj2 = { reaction: message.agentReaction };
                                                                    tmp130 = replied(tmp40(tmp2[30]), obj2);
                                                                  }
                                                                  cResult[67] = message.agentReaction;
                                                                  cResult[68] = tmp130;
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
                                                                }
                                                                if (cResult[69] === tmp44) {
                                                                  if (cResult[70] === tmp31) {
                                                                    if (cResult[71] === tmp111) {
                                                                      if (cResult[72] === tmp115) {
                                                                        if (cResult[73] === tmp119) {
                                                                          if (cResult[74] === tmp126) {
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                                let obj3 = { style: null, onLongPress: null, accessible: false, children: null };
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
                                                                obj3.onLongPress = tmp44;
                                                                const items1 = [tmp111, tmp115, tmp119, tmp126, tmp129];
                                                                obj3.children = items1;
                                                                const tmp135 = onJumpToReplied(onToggleChecklist, obj3);
                                                                cResult[69] = tmp44;
                                                                cResult[70] = tmp31;
                                                                cResult[71] = tmp111;
                                                                cResult[72] = tmp115;
                                                                cResult[73] = tmp119;
                                                                cResult[74] = tmp126;
                                                                cResult[75] = tmp129;
                                                                cResult[76] = tmp135;
                                                              }
                                                              let tmp127 = null;
                                                              if (null != tmp30) {
                                                                let obj4 = { projectId, attachments: tmp30 };
                                                                tmp127 = replied(tmp40(tmp2[29]), obj4);
                                                              }
                                                              cResult[64] = tmp30;
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
                                                              cResult[66] = tmp127;
                                                              tmp126 = tmp127;
                                                            }
                                                          }
                                                        }
                                                        if (tmp43) {
                                                          let combined;
                                                          if (!groupStart) {
                                                            const intl2 = tmp(tmp2[26]).intl;
                                                            const _HermesInternal = HermesInternal;
                                                            combined = "" + intl2.string(tmp(tmp2[26]).t.KD6OJJ) + ": " + conjureMentionNames;
                                                          }
                                                          const obj6 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: null };
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
                                                          if (null != tmp21) {
                                                            const obj7 = { label: tmp21.label, variant: "text-md/medium" };
                                                            const tmp123 = replied(tmp40(tmp2[27]), obj7);
                                                          }
                                                          const items2 = [tmp123, , ];
                                                          let str10 = null;
                                                          if (null != tmp21) {
                                                            str10 = null;
                                                            if (tmp43) {
                                                              str10 = " ";
                                                            }
                                                          }
                                                          items2[1] = str10;
                                                          const obj8 = { text: tmp25, variant: "text-md/normal" };
                                                          items2[2] = replied(tmp40(tmp2[28]), obj8);
                                                          obj6.children = items2;
                                                          let tmp121Result = onJumpToReplied(tmp(tmp2[25]).Text, obj6);
                                                        } else {
                                                          tmp121Result = null;
                                                        }
                                                        cResult[59] = tmp25;
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
                                                        cResult[61] = tmp21;
                                                        cResult[62] = conjureMentionNames;
                                                        cResult[63] = tmp121Result;
                                                        tmp119 = tmp121Result;
                                                      }
                                                    }
                                                  }
                                                  let tmp116 = null;
                                                  if (groupStart) {
                                                    const obj9 = { style: tmp4.header, children: null };
                                                    const obj10 = { userId: message.user_id, at: null };
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
                                                    obj9.children = replied(tmp(tmp2[24]).ConjureUserHeader, obj10);
                                                    tmp116 = replied(planSuperseded, obj9);
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
                                                  cResult[58] = tmp116;
                                                  tmp115 = tmp116;
                                                }
                                              }
                                              let tmp112 = null;
                                              if (groupStart) {
                                                const obj11 = { style: tmp4.avatar, children: null };
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
                                                tmp112 = replied(planSuperseded, obj11);
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
                                              cResult[53] = tmp112;
                                              tmp111 = tmp112;
                                            } else if ("context_boundary" === message.kind) {
                                              if (cResult[77] === message.contextSwitch) {
                                                if (cResult[78] === projectId) {
                                                  if (cResult[79] === tmp4.boundaryRow) {
                                                    let tmp106 = cResult[80];
                                                  }
                                                  return tmp106;
                                                }
                                              }
                                              let tmp107 = null;
                                              if (null != message.contextSwitch) {
                                                const obj13 = { style: tmp4.boundaryRow, children: null };
                                                const obj14 = { projectId, contextSwitch: null };
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
                                                obj13.children = replied(tmp40(tmp2[31]), obj14);
                                                tmp107 = replied(planSuperseded, obj13);
                                              }
                                              cResult[77] = message.contextSwitch;
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
                                              cResult[79] = tmp4.boundaryRow;
                                              cResult[80] = tmp107;
                                              tmp106 = tmp107;
                                            } else {
                                              if ("project_event" === message.kind) {
                                                if (null != message.projectEvent) {
                                                  if (cResult[81] === message.projectEvent) {
                                                    if (cResult[82] === projectId) {
                                                      let tmp99 = cResult[83];
                                                    }
                                                    if (cResult[84] === tmp31) {
                                                      if (cResult[85] === tmp99) {
                                                        let tmp102 = cResult[86];
                                                      }
                                                      return tmp102;
                                                    }
                                                    const obj15 = { style: tmp31, children: null };
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
                                                    const tmp105 = replied(planSuperseded, obj15);
                                                    cResult[84] = tmp31;
                                                    cResult[85] = tmp99;
                                                    cResult[86] = tmp105;
                                                    tmp102 = tmp105;
                                                  }
                                                  const obj16 = { projectId, event: message.projectEvent };
                                                  const tmp101 = replied(tmp40(tmp2[32]), obj16);
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
                                                  cResult[81] = message.projectEvent;
                                                  cResult[82] = projectId;
                                                  cResult[83] = tmp101;
                                                  tmp99 = tmp101;
                                                }
                                              }
                                              if ("publish_notice" === message.kind) {
                                                if (null != message.publishNotice) {
                                                  if (cResult[87] === message.publishNotice) {
                                                    if (cResult[88] === projectId) {
                                                      let tmp92 = cResult[89];
                                                    }
                                                    if (cResult[90] === tmp31) {
                                                      if (cResult[91] === tmp92) {
                                                        let tmp95 = cResult[92];
                                                      }
                                                      return tmp95;
                                                    }
                                                    const obj17 = { style: tmp31, children: null };
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
                                                    const tmp98 = replied(planSuperseded, obj17);
                                                    cResult[90] = tmp31;
                                                    cResult[91] = tmp92;
                                                    cResult[92] = tmp98;
                                                    tmp95 = tmp98;
                                                  }
                                                  const obj18 = { projectId, notice: message.publishNotice };
                                                  const tmp94 = replied(tmp40(tmp2[33]), obj18);
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
                                                  cResult[87] = message.publishNotice;
                                                  cResult[88] = projectId;
                                                  cResult[89] = tmp94;
                                                  tmp92 = tmp94;
                                                }
                                              }
                                              if (true === message.interrupted) {
                                                const _Symbol4 = Symbol;
                                                if (cResult[93] === Symbol.for("react.memo_cache_sentinel")) {
                                                  const intl = tmp(tmp2[26]).intl;
                                                  const stringResult = intl.string(tmp40(tmp2[34]).oOmBdX);
                                                  cResult[93] = stringResult;
                                                }
                                                const _Symbol5 = Symbol;
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
                                                if (cResult[95] !== tmp4.activityBox) {
                                                  const obj19 = { style: tmp4.activityBox, children: tmp83 };
                                                  const tmp87 = replied(planSuperseded, obj19);
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
                                                  cResult[95] = tmp4.activityBox;
                                                  cResult[96] = tmp87;
                                                  let tmp84 = tmp87;
                                                } else {
                                                  tmp84 = cResult[96];
                                                }
                                                if (cResult[97] === tmp31) {
                                                  if (cResult[98] === tmp84) {
                                                    let tmp88 = cResult[99];
                                                  }
                                                  return tmp88;
                                                }
                                                const obj20 = { style: tmp31, children: tmp84 };
                                                const tmp91 = replied(planSuperseded, obj20);
                                                cResult[97] = tmp31;
                                                cResult[98] = tmp84;
                                                cResult[99] = tmp91;
                                                tmp88 = tmp91;
                                              } else {
                                                if ("proposal" === message.kind) {
                                                  const proposal = message.proposal;
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
                                                let tmp47 = null;
                                                if (turnSettledResult2) {
                                                  let publishCta = message.publishCta;
                                                  if (publishCta == null) {
                                                    publishCta = null;
                                                  }
                                                  tmp47 = publishCta;
                                                }
                                                let tmp49 = null;
                                                if (turnSettledResult2) {
                                                  let secretRequest = message.secretRequest;
                                                  if (secretRequest == null) {
                                                    secretRequest = null;
                                                  }
                                                  tmp49 = secretRequest;
                                                }
                                                if (cResult[100] === isNewest) {
                                                  if (cResult[101] === message) {
                                                    let tmp54 = null;
                                                    if (turnSettledResult2) {
                                                      let settingsRequest = message.settingsRequest;
                                                      if (settingsRequest == null) {
                                                        settingsRequest = null;
                                                      }
                                                      tmp54 = settingsRequest;
                                                    }
                                                    let restoreProposal = message.restoreProposal;
                                                    if (restoreProposal == null) {
                                                      restoreProposal = null;
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
                                                    let clarification = null;
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
                                                    let tmp59 = null;
                                                    if (isNewest) {
                                                      tmp59 = null;
                                                      if (turnSettledResult2) {
                                                        tmp59 = null;
                                                        if (!appBuildRequestDismissed) {
                                                          let appBuildRequest = message.appBuildRequest;
                                                          if (appBuildRequest == null) {
                                                            appBuildRequest = null;
                                                          }
                                                          tmp59 = appBuildRequest;
                                                        }
                                                      }
                                                    }
                                                    appBuildRequest = tmp59;
                                                    if (tmp14 == null) {
                                                      let todos = null;
                                                      if (null != message.todos) {
                                                        todos = null;
                                                        if (message.todos.length > 0) {
                                                          todos = message.todos;
                                                        }
                                                      }
                                                      tmp14 = todos;
                                                    }
                                                    if (null == tmp14) {
                                                      if (null != message.provisionalTodo) {
                                                        if ("" !== message.provisionalTodo) {
                                                          const provisionalTodo = message.provisionalTodo;
                                                        }
                                                      }
                                                    }
                                                    if (cResult[104] === tmp59) {
                                                      if (cResult[105] === tmp30) {
                                                        if (cResult[106] === clarification) {
                                                          if (cResult[107] === tmp25) {
                                                            if (cResult[108] === tmp46) {
                                                              if (cResult[109] === message.steps) {
                                                                if (cResult[110] === proposal) {
                                                                  if (cResult[111] === provisionalTodo) {
                                                                    if (cResult[112] === tmp47) {
                                                                      if (cResult[113] === tmp57) {
                                                                        if (cResult[114] === restoreProposal) {
                                                                          if (cResult[115] === tmp49) {
                                                                            if (cResult[116] === tmp54) {
                                                                              if (cResult[117] === tmp14) {
                                                                                if (cResult[118] === tmp8.steps.length) {
                                                                                  if (cResult[119] === tmp8.tasks) {
                                                                                    replyKey = cResult[121];
                                                                                    let tmp65 = cResult[123];
                                                                                    let tmp66 = cResult[124];
                                                                                  }
                                                                                  const _Symbol3 = Symbol;
                                                                                  if (tmp66 !== Symbol.for("react.early_return_sentinel")) {
                                                                                    return tmp66;
                                                                                  } else {
                                                                                    closure_24 = tmp65;
                                                                                    if (cResult[125] !== arr) {
                                                                                      const found = arr.filter((hasWork) => hasWork.hasWork);
                                                                                      const atResult = found.at(-1);
                                                                                      let index;
                                                                                      if (atResult != null) {
                                                                                        index = atResult.index;
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
                                                                                      cResult[126] = index;
                                                                                      let tmp72 = index;
                                                                                    } else {
                                                                                      tmp72 = cResult[126];
                                                                                    }
                                                                                    closure_25 = tmp72;
                                                                                    if (cResult[127] !== message) {
                                                                                      const tmpResult23 = tmp(tmp2[11]);
                                                                                      cResult[127] = message;
                                                                                      cResult[128] = tmp(tmp2[11]).turnSettled(message);
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
                                                                                      const turnSettledResult3 = tmp(tmp2[11]).turnSettled(message);
                                                                                    } else {
                                                                                      const tmp75 = cResult[128];
                                                                                    }
                                                                                    closure_26 = tmp77;
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
                                                                                    const obj21 = { turnActive: !tmp75 };
                                                                                    const turnLifecycleResult = tmp(tmp2[12]).turnLifecycle(arr, obj21);
                                                                                    cResult[129] = !tmp75;
                                                                                    cResult[130] = arr;
                                                                                    cResult[131] = turnLifecycleResult;
                                                                                    const tmpResult24 = tmp(tmp2[12]);
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
                                                    const _Symbol2 = Symbol;
                                                    const forResult = Symbol.for("react.early_return_sentinel");
                                                    const obj22 = { steps: message.steps, content: tmp25, hasProposal: null != proposal, hasLiveClarification: null != clarification, hasAttachments: null != tmp30 };
                                                    const turnPresentation = tmp(tmp2[37]).resolveTurnPresentation(obj22);
                                                    ({ showsClosingMessage, closingContent, replyKey } = turnPresentation);
                                                    if (!(tmp8.steps.length > 0 || tmp8.tasks.length > 0)) {
                                                      if (0 === turnPresentation.streamed.length) {
                                                        if (!tmp43) {
                                                          if (null == proposal) {
                                                            if (null == tmp46) {
                                                              if (null == tmp14) {
                                                                if (null == provisionalTodo) {
                                                                  if (null == tmp49) {
                                                                    if (null == tmp54) {
                                                                      if (null == tmp30) {
                                                                        if (null == clarification) {
                                                                          if (null == restoreProposal) {
                                                                            if (null == tmp57) {
                                                                              if (null == tmp59) {
                                                                                let tmp70 = null;
                                                                              }
                                                                              cResult[104] = tmp59;
                                                                              cResult[105] = tmp30;
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
                                                                              cResult[107] = tmp25;
                                                                              cResult[108] = tmp46;
                                                                              cResult[109] = message.steps;
                                                                              cResult[110] = proposal;
                                                                              cResult[111] = provisionalTodo;
                                                                              cResult[112] = tmp47;
                                                                              cResult[113] = tmp57;
                                                                              cResult[114] = restoreProposal;
                                                                              cResult[115] = tmp49;
                                                                              cResult[116] = tmp54;
                                                                              cResult[117] = tmp14;
                                                                              cResult[118] = tmp8.steps.length;
                                                                              cResult[119] = tmp8.tasks;
                                                                              cResult[120] = closingContent;
                                                                              cResult[121] = replyKey;
                                                                              cResult[122] = showsClosingMessage;
                                                                              cResult[123] = turnLeadsWithStretchResult;
                                                                              cResult[124] = tmp70;
                                                                              tmp66 = tmp70;
                                                                              tmp65 = turnLeadsWithStretchResult;
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
                                                    const tmpResult25 = tmp(tmp2[37]);
                                                    turnLeadsWithStretchResult = tmp(tmp2[37]).turnLeadsWithStretch(tmp8.steps.length > 0 || tmp8.tasks.length > 0, turnPresentation);
                                                    tmp70 = forResult;
                                                    const tmpResult26 = tmp(tmp2[37]);
                                                  }
                                                }
                                                let tmp52;
                                                if ("open" === secretRequestStatus) {
                                                  const activeAwaitingUserResult = tmp(tmp2[36]).activeAwaitingUser(message, isNewest);
                                                  tmp52 = activeAwaitingUserResult;
                                                  const tmpResult27 = tmp(tmp2[36]);
                                                }
                                                cResult[100] = isNewest;
                                                cResult[101] = message;
                                                cResult[102] = secretRequestStatus;
                                                cResult[103] = tmp52;
                                                const tmpResult22 = tmp(tmp2[11]);
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
                          cResult[42] = tmp25;
                          cResult[43] = stateFromStores;
                          cResult[44] = message;
                          cResult[45] = onRestoreVersion;
                          cResult[46] = projectId;
                          cResult[47] = tmp41;
                          cResult[48] = tmp38;
                          cResult[49] = Ie;
                        }
                        let turnRestoreEntryResult = null;
                        if (null != onRestoreVersion) {
                          turnRestoreEntryResult = tmp(tmp2[18]).turnRestoreEntry(message);
                          const tmpResult28 = tmp(tmp2[18]);
                        }
                        cResult[38] = message;
                        cResult[39] = onRestoreVersion;
                        cResult[40] = turnRestoreEntryResult;
                        tmp38 = turnRestoreEntryResult;
                        const tmpResult21 = tmp(tmp2[17]);
                      }
                      const items3 = [tmp4.row, rowGroupStart];
                      cResult[33] = tmp4.row;
                      cResult[34] = rowGroupStart;
                      cResult[35] = items3;
                      tmp31 = items3;
                    }
                  }
                }
                if ("user" === message.role) {
                  let attachments = tmp(tmp2[16]).withoutInlineFileMentions(message.attachments, message.content);
                  const tmpResult29 = tmp(tmp2[16]);
                } else {
                  attachments = message.attachments;
                }
                cResult[29] = message.attachments;
                cResult[30] = message.content;
                cResult[31] = message.role;
                cResult[32] = attachments;
                const tmpResult20 = tmp(tmp2[15]);
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
    arr = turnSegmentsResult;
  }
  let obj = projectId(groupStart[10]);
  const timelineTree = projectId(groupStart[12]).buildTimelineTree(message.steps, { turnActive: tmp7 });
  cResult[2] = message.steps;
  cResult[3] = !tmp5;
  cResult[4] = timelineTree;
  tmp8 = timelineTree;
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
  ({ onDismissClarification: closure_9, onCardInputFocusChange, onDismissAppBuildRequest: closure_10, onRestoreVersion } = projectId);
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
  ({ first, checklistExpanded, planVersion, planExpanded, onApprovePlan, onPickIdea, onAnswerClarification, clarificationDismissed, canSend, appBuildRequestDismissed } = projectId);
  const tmp = closure_10();
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
            let tmp87Result2 = null;
          }
          return tmp87Result2;
        }
        let obj3 = { style: items8, onLongPress: tmp22, accessible: false, children: null };
        let tmp89 = null;
        if (groupStart) {
          let obj4 = { style: tmp.avatar, children: null };
          const obj5 = { userId: message.user_id };
          obj4.children = replied(tmp11(tmp12[24]).ConjureUserAvatar, obj5);
          tmp89 = replied(planSuperseded, obj4);
        }
        const items12 = [tmp89, , , , ];
        let tmp92 = null;
        if (groupStart) {
          const obj6 = { style: tmp.header, children: null };
          ({ user_id: obj54.userId, created_at: obj54.at } = message);
          obj6.children = replied(tmp11(tmp12[24]).ConjureUserHeader, { userId: null, at: null });
          tmp92 = replied(planSuperseded, obj6);
          const obj7 = { userId: null, at: null };
        }
        items12[1] = tmp92;
        if (tmp21) {
          let combined;
          if (!groupStart) {
            const intl3 = tmp11(tmp12[26]).intl;
            const _HermesInternal = HermesInternal;
            combined = "" + intl3.string(tmp11(tmp12[26]).t.KD6OJJ) + ": " + conjureMentionNames;
          }
          const obj8 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: null };
          let tmp98 = null;
          if (null != memo4) {
            const obj9 = { label: memo4.label, variant: "text-md/medium" };
            tmp98 = replied(tmp18(tmp12[27]), obj9);
          }
          const items13 = [tmp98, , ];
          let str5 = null;
          if (null != memo4) {
            str5 = null;
            if (tmp21) {
              str5 = " ";
            }
          }
          items13[1] = str5;
          const obj10 = { text: trimmed, variant: "text-md/normal" };
          items13[2] = replied(tmp18(tmp12[28]), obj10);
          obj8.children = items13;
          let tmp87Result = tmp87(tmp11(tmp12[25]).Text, obj8);
        } else {
          tmp87Result = null;
        }
        items12[2] = tmp87Result;
        let tmp101 = null;
        if (null != tmp14) {
          const obj11 = { projectId, attachments: tmp14 };
          tmp101 = replied(tmp18(tmp12[29]), obj11);
        }
        items12[3] = tmp101;
        let tmp103 = null;
        if (null != message.agentReaction) {
          const obj12 = { reaction: message.agentReaction };
          tmp103 = replied(tmp18(tmp12[30]), obj12);
        }
        items12[4] = tmp103;
        obj3.children = items12;
        tmp87Result2 = tmp87(onToggleChecklist, obj3);
      } else if ("context_boundary" === message.kind) {
        let tmp83 = null;
        if (null != message.contextSwitch) {
          const obj13 = { style: tmp.boundaryRow, children: null };
          const obj14 = { projectId, contextSwitch: message.contextSwitch };
          obj13.children = replied(tmp18(tmp12[31]), obj14);
          tmp83 = replied(planSuperseded, obj13);
        }
        return tmp83;
      } else {
        if ("project_event" === message.kind) {
          if (null != message.projectEvent) {
            const obj15 = { style: items8, children: null };
            const obj16 = { projectId, event: message.projectEvent };
            obj15.children = replied(tmp18(tmp12[32]), obj16);
            return replied(planSuperseded, obj15);
          }
        }
        if ("publish_notice" === message.kind) {
          if (null != message.publishNotice) {
            const obj17 = { style: items8, children: null };
            const obj18 = { projectId, notice: message.publishNotice };
            obj17.children = replied(tmp18(tmp12[33]), obj18);
            return replied(planSuperseded, obj17);
          }
        }
        if (true === message.interrupted) {
          const obj19 = { style: items8, children: null };
          const obj20 = { style: tmp.activityBox, children: null };
          const obj21 = { line: null, live: false, settled: true, inGutter: true, glyph: null };
          const intl2 = tmp11(tmp12[26]).intl;
          obj21.line = intl2.string(tmp18(tmp12[34]).oOmBdX);
          const obj22 = { size: "refresh_sm", color: tmp18(tmp12[8]).colors.TEXT_MUTED };
          obj21.glyph = replied(tmp11(tmp12[35]).StopIcon, obj22);
          obj20.children = replied(tmp18(tmp12[5]), obj21);
          obj19.children = replied(planSuperseded, obj20);
          return replied(planSuperseded, obj19);
        } else {
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
            const tmp11Result12 = tmp11(tmp12[36]);
            const tmp30 = tmp11(tmp12[36]).activeAwaitingUser(message, isNewest);
            const activeAwaitingUserResult = tmp11(tmp12[36]).activeAwaitingUser(message, isNewest);
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
          const obj23 = { steps: message.steps, content: trimmed, hasProposal: null != proposal, hasLiveClarification: null != clarification, hasAttachments: null != tmp14 };
          const turnPresentation = tmp11(tmp12[37]).resolveTurnPresentation(obj23);
          ({ showsClosingMessage, replyKey: c23 } = turnPresentation);
          let tmp41 = memo.steps.length > 0;
          if (!tmp41) {
            tmp41 = memo.tasks.length > 0;
          }
          if (!tmp41) {
            if (0 === turnPresentation.streamed.length) {
              if ("" === trimmed) {
                if (null == proposal) {
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
          const tmp11Result13 = tmp11(tmp12[37]);
          const turnLeadsWithStretchResult = tmp11(tmp12[37]).turnLeadsWithStretch(tmp41, turnPresentation);
          c24 = turnLeadsWithStretchResult;
          const found = memo1.filter((hasWork) => hasWork.hasWork);
          const atResult = found.at(-1);
          index = undefined;
          if (atResult != null) {
            index = atResult.index;
          }
          const tmp11Result14 = tmp11(tmp12[37]);
          const tmp45 = !tmp11(tmp12[11]).turnSettled(message);
          closure_26 = tmp45;
          const tmp11Result15 = tmp11(tmp12[11]);
          const obj24 = { turnActive: tmp45 };
          open = tmp11(tmp12[12]).turnLifecycle(memo1, obj24).open;
          let avatarSpokenReplying = groupStart;
          if (groupStart) {
            avatarSpokenReplying = null != replied;
          }
          let tmp49Result = null;
          if (avatarSpokenReplying) {
            const obj25 = { replied, onJump: null };
            let tmp51;
            if (null != onJumpToReplied) {
              tmp51 = callback2;
            }
            obj25.onJump = tmp51;
            tmp49Result = replied(tmp18(tmp12[7]), obj25);
            const tmp18Result5 = tmp18(tmp12[7]);
          }
          const items14 = [tmp49Result, , ];
          const items15 = [, , ];
          ({ avatar: arr17[0], avatarSpoken: arr17[1] } = tmp);
          if (avatarSpokenReplying) {
            avatarSpokenReplying = tmp.avatarSpokenReplying;
          }
          const obj26 = { children: null };
          const obj27 = { style: null, children: null };
          items15[2] = avatarSpokenReplying;
          obj27.style = items15;
          obj27.children = replied(tmp11(tmp12[24]).ConjureAvatar, {});
          items14[1] = replied(planSuperseded, obj27);
          const obj28 = { style: tmp.header, children: null };
          const obj29 = { at: message.created_at };
          obj28.children = replied(tmp11(tmp12[24]).ConjureHeader, obj29);
          items14[2] = replied(planSuperseded, obj28);
          obj26.children = items14;
          const tmp46Result = onJumpToReplied(closure_9, obj26);
          const obj30 = { style: items8, onLongPress: tmp22, accessible: false, children: null };
          let tmp52Result = null;
          if (turnLeadsWithStretchResult) {
            tmp52Result = null;
            if (groupStart) {
              const obj31 = { style: tmp.spoken, children: tmp46Result };
              tmp52Result = tmp52(tmp53, obj31);
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
                              if (null == items18) {
                                if (null == provisionalTodo) {
                                  let tmp46Result2 = null;
                                }
                                items16[2] = tmp46Result2;
                                let tmp52Result15 = null;
                                if (null != tmp30) {
                                  const obj32 = { style: tmp.spoken, children: null };
                                  const obj33 = { variant: "text-xs/normal", color: "text-muted", children: null };
                                  const intl = tmp11(tmp12[26]).intl;
                                  obj33.children = intl.string(tmp18(tmp12[34]).YR8A2v);
                                  obj32.children = tmp52(tmp11(tmp12[25]).Text, obj33);
                                  tmp52Result15 = tmp52(tmp53, obj32);
                                }
                                items16[3] = tmp52Result15;
                                obj30.children = items16;
                                return tmp46(onToggleChecklist, obj30);
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
          const obj34 = { style: tmp.spoken, children: null };
          let tmp58 = null;
          if (groupStart) {
            tmp58 = null;
            if (!turnLeadsWithStretchResult) {
              tmp58 = tmp46Result;
            }
          }
          const items17 = [tmp58, , , , , , , , , , , , , ];
          let tmp52Result16 = null;
          if (showsClosingMessage) {
            const obj35 = { source: turnPresentation.closingContent };
            tmp52Result16 = tmp52(tmp18(tmp12[38]), obj35);
          }
          items17[1] = tmp52Result16;
          let tmp52Result17 = null;
          if ("side_reply" === message.kind) {
            const obj36 = { variant: "text-xs/normal", color: "text-muted", children: tmp11(tmp12[40]).midTurnCaption(message.acknowledges) };
            tmp52Result17 = tmp52(tmp11(tmp12[25]).Text, obj36);
            const tmp11Result17 = tmp11(tmp12[40]);
          }
          items17[2] = tmp52Result17;
          let tmp52Result18 = null;
          if (null != tmp14) {
            const obj37 = { projectId, attachments: tmp14 };
            tmp52Result18 = tmp52(tmp18(tmp12[29]), obj37);
          }
          items17[3] = tmp52Result18;
          if (null != items18) {
            const tmp18Result6 = tmp18(tmp12[41]);
            if (items18 == null) {
              items18 = [];
            }
            const obj38 = { children: null };
            const obj39 = { todos: items18, provisional: provisionalTodo, agents: memo3, live: null, superseded: null, expanded: null, onToggleExpanded: null };
            const tmp18Result7 = tmp18(tmp12[42]);
            obj39.live = tmp11(tmp12[43]).checklistLive(message);
            obj39.superseded = checklistSuperseded;
            obj39.expanded = checklistExpanded;
            obj39.onToggleExpanded = callback;
            obj38.children = tmp52(tmp18Result7, obj39);
            let tmp52Result19 = tmp52(tmp18Result6, obj38);
            const tmp11Result18 = tmp11(tmp12[43]);
          } else {
            tmp52Result19 = null;
          }
          items17[4] = tmp52Result19;
          let tmp52Result20 = null;
          if (null != proposal) {
            const obj40 = { projectId, proposal, version: planVersion, superseded: planSuperseded, expanded: planExpanded, onToggleExpanded: callback1, onApprove: onApprovePlan };
            tmp52Result20 = tmp52(tmp18(tmp12[44]), obj40);
          }
          items17[5] = tmp52Result20;
          let tmp52Result21 = null;
          if (null != clarification) {
            const obj41 = {
              projectId,
              clarification,
              onSubmit: onAnswerClarification,
              onDismiss() {
                          return closure_1_9(clarification.id);
                        },
              onInputFocusChange: onCardInputFocusChange
            };
            tmp52Result21 = tmp52(tmp18(tmp12[45]), obj41);
          }
          items17[6] = tmp52Result21;
          let tmp52Result22 = null;
          if (null != tmp37) {
            const obj42 = {
              projectId,
              request: tmp37,
              canSend,
              onDismiss() {
                          return closure_1_10(appBuildRequest.id);
                        },
              onInputFocusChange: onCardInputFocusChange
            };
            tmp52Result22 = tmp52(tmp18(tmp12[46]), obj42);
          }
          items17[7] = tmp52Result22;
          let tmp52Result23 = null;
          if (null != tmp28) {
            const obj43 = { projectId, cardId: message.render_id, request: tmp28, status: secretRequestStatus, awaiting: tmp30 };
            tmp52Result23 = tmp52(tmp18(tmp12[47]), obj43);
          }
          items17[8] = tmp52Result23;
          let tmp52Result24 = null;
          if (null != tmp32) {
            const obj44 = { projectId, request: tmp32 };
            tmp52Result24 = tmp52(tmp18(tmp12[48]), obj44);
          }
          items17[9] = tmp52Result24;
          let tmp52Result25 = null;
          if (null != tmp26) {
            const obj45 = { projectId, cta: tmp26 };
            tmp52Result25 = tmp52(tmp18(tmp12[49]), obj45);
          }
          items17[10] = tmp52Result25;
          let tmp52Result26 = null;
          if (null != ideas) {
            const obj46 = { ideas, onPick: onPickIdea };
            tmp52Result26 = tmp52(tmp18(tmp12[50]), obj46);
          }
          items17[11] = tmp52Result26;
          let tmp52Result27 = null;
          if (null != restoreProposal) {
            const obj47 = { proposal: restoreProposal, onRestore: null };
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
            obj47.onRestore = fn;
            tmp52Result27 = tmp52(tmp18(tmp12[51]), obj47);
            const tmp18Result8 = tmp18(tmp12[51]);
          }
          items17[12] = tmp52Result27;
          let tmp52Result28 = null;
          if (null != prop) {
            const obj48 = { projectId, proposal: prop, current: isNewest };
            tmp52Result28 = tmp52(tmp18(tmp12[52]), obj48);
          }
          items17[13] = tmp52Result28;
          obj34.children = items17;
          tmp46Result2 = tmp46(tmp53, obj34);
          const tmp11Result16 = tmp11(tmp12[12]);
        }
      }
    }
  }
  const tmp11Result10 = projectId(groupStart[17]);
}));