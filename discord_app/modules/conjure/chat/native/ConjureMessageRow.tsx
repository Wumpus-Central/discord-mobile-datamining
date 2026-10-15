// === Module 12066: ConjureMessageRow ===

// Module 12066 (ConjureMessageRow)
import nativeDefault from "native" /* 587 */;
import conjureChatTurns from "conjureChatTurns" /* 10888 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 11587 */;
import ConjureVersionRestoreConfirm from "ConjureVersionRestoreConfirm" /* 12007 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 12027 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 12036 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 12073 */;
import ConjureChatRestore from "ConjureChatRestore" /* 12077 */;
import conjureQueuedMessage from "conjureQueuedMessage" /* 12079 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 12095 */;
import ConjureActivityBox from "ConjureActivityBox" /* 12100 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

const ConjureActivityBoxDefault = ConjureActivityBox;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5151);
let obj = { row: { position: "relative", paddingLeft: fn(12057).MESSAGE_CONTENT_INSET, paddingRight: fn(12057).MESSAGE_EDGE_INSET, paddingVertical: fn(12067).ROW_PAD, gap: fn(12067).BLOCK_GAP }, rowGroupStart: null, boundaryRow: null, avatar: null, spoken: null, avatarSpoken: null, avatarSpokenReplying: null, header: null, activityBox: null };
let obj3 = { position: "relative", paddingLeft: fn(12057).MESSAGE_CONTENT_INSET, paddingRight: fn(12057).MESSAGE_EDGE_INSET, paddingVertical: fn(12067).ROW_PAD, gap: fn(12067).BLOCK_GAP };
obj.rowGroupStart = { marginTop: fn(12067).GROUP_GAP };
let obj4 = { marginTop: fn(12067).GROUP_GAP };
obj.boundaryRow = { paddingHorizontal: fn(12057).MESSAGE_EDGE_INSET, paddingVertical: fn(12067).ROW_PAD };
const rect = { position: "absolute", left: fn(12057).MESSAGE_EDGE_INSET, top: fn(12067).ROW_PAD };
obj.avatar = rect;
let obj5 = { paddingHorizontal: fn(12057).MESSAGE_EDGE_INSET, paddingVertical: fn(12067).ROW_PAD };
obj.spoken = { position: "relative", gap: fn(12067).BLOCK_GAP };
const rect1 = { left: fn(12057).MESSAGE_EDGE_INSET - fn(12057).MESSAGE_CONTENT_INSET, top: 0 };
obj.avatarSpoken = rect1;
let obj6 = { position: "relative", gap: fn(12067).BLOCK_GAP };
obj.avatarSpokenReplying = { top: fn(12068).REPLY_PREVIEW_HEIGHT + fn(12067).BLOCK_GAP };
let obj7 = { top: fn(12068).REPLY_PREVIEW_HEIGHT + fn(12067).BLOCK_GAP };
obj.header = { marginBottom: -nativeDefault.space.PX_4 };
let obj8 = { marginBottom: -nativeDefault.space.PX_4 };
obj.activityBox = { marginLeft: -fn(12067).RAIL_INDENT };
let closure_10 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj9 = { marginLeft: -fn(12067).RAIL_INDENT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageRow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureMessageRow(projectId) {
  const cResult = projectId(groupStart[10]).c(226);
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
  ({ canSend, onDismissAppBuildRequest } = projectId);
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
      const tmpResult10 = tmp(tmp2[11]);
    } else {
      tmp10 = cResult[6];
    }
    if (cResult[7] === message.steps) {
      if (cResult[10] !== message.steps) {
        const latestTodosResult = tmp(tmp2[12]).latestTodos(message.steps);
        cResult[10] = message.steps;
        cResult[11] = latestTodosResult;
        const tmpResult11 = tmp(tmp2[12]);
      }
      if (cResult[12] !== tmp8.tasks) {
        const runningTodoAgentsResult = tmp(tmp2[13]).runningTodoAgents(tmp8.tasks);
        cResult[12] = tmp8.tasks;
        cResult[13] = runningTodoAgentsResult;
        const tmpResult12 = tmp(tmp2[13]);
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
                  const tmpResult13 = tmp(tmp2[14]);
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
                const content = tmp26;
                const conjureMentionNames = tmp(tmp2[15]).useConjureMentionNames(tmp26);
                let attachments = null;
                if (null != message.attachments) {
                  attachments = null;
                  if (message.attachments.length > 0) {
                    attachments = message.attachments;
                  }
                }
                let rowGroupStart = groupStart;
                if (groupStart) {
                  rowGroupStart = !first;
                }
                if (rowGroupStart) {
                  rowGroupStart = tmp4.rowGroupStart;
                }
                if (cResult[29] === tmp4.row) {
                  if (cResult[30] === rowGroupStart) {
                    let tmp31 = cResult[31];
                  }
                  let user_id;
                  if ("user" === message.role) {
                    user_id = message.user_id;
                  }
                  const _Symbol = Symbol;
                  if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                    const items = [onTogglePlan];
                    function _e() {
                      const currentUser = onTogglePlan.getCurrentUser();
                      id = undefined;
                      if (currentUser != null) {
                        id = currentUser.id;
                      }
                      return id;
                    }
                    cResult[32] = items;
                    cResult[33] = _e;
                    let tmp35 = _e;
                    let tmp34 = items;
                  } else {
                    tmp34 = cResult[32];
                    tmp35 = cResult[33];
                  }
                  const stateFromStores = tmp(tmp2[16]).useStateFromStores(tmp34, tmp35);
                  if (cResult[34] === message) {
                    if (cResult[35] === onRestoreVersion) {
                      let tmp38 = cResult[36];
                    }
                    closure_18 = tmp38;
                    const tmp41 = message(tmp2[18])(projectId, message);
                    closure_19 = tmp41;
                    if (cResult[37] === user_id) {
                      if (cResult[38] === tmp26) {
                        if (cResult[39] === stateFromStores) {
                          if (cResult[40] === message) {
                            if (cResult[41] === onRestoreVersion) {
                              if (cResult[42] === projectId) {
                                if (cResult[43] === tmp41) {
                                  if ("" === tmp26) {
                                    if (null == user_id) {
                                      if ("user" === message.role) {
                                        if ("" === tmp26) {
                                          if (null == tmp22) {
                                            if (null == attachments) {
                                              return null;
                                            }
                                          }
                                        }
                                        if (cResult[46] === groupStart) {
                                          if (cResult[47] === message.user_id) {
                                            if (cResult[48] === tmp4.avatar) {
                                              let tmp90 = cResult[49];
                                            }
                                            if (cResult[50] === groupStart) {
                                              if (cResult[51] === message.created_at) {
                                                if (cResult[52] === message.user_id) {
                                                  if (cResult[53] === tmp4.header) {
                                                    let tmp94 = cResult[54];
                                                  }
                                                  if (cResult[55] === tmp26) {
                                                    if (cResult[56] === groupStart) {
                                                      if (cResult[57] === tmp22) {
                                                        if (cResult[58] === conjureMentionNames) {
                                                          let tmp98 = cResult[59];
                                                        }
                                                        if (cResult[60] === attachments) {
                                                          if (cResult[61] === projectId) {
                                                            let tmp105 = cResult[62];
                                                          }
                                                          if (cResult[63] === tmp44) {
                                                            if (cResult[64] === tmp31) {
                                                              if (cResult[65] === tmp90) {
                                                                if (cResult[66] === tmp94) {
                                                                  if (cResult[67] === tmp98) {
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                          let obj2 = { style: tmp31, onLongPress: tmp44, accessible: false, children: null };
                                                          const items1 = [tmp90, tmp94, tmp98, tmp105];
                                                          obj2.children = items1;
                                                          const tmp111 = onJumpToReplied(onToggleChecklist, obj2);
                                                          cResult[63] = tmp44;
                                                          cResult[64] = tmp31;
                                                          cResult[65] = tmp90;
                                                          cResult[66] = tmp94;
                                                          cResult[67] = tmp98;
                                                          cResult[68] = tmp105;
                                                          cResult[69] = tmp111;
                                                        }
                                                        let tmp106 = null;
                                                        if (null != attachments) {
                                                          let obj3 = { projectId, attachments };
                                                          tmp106 = replied(tmp40(tmp2[28]), obj3);
                                                        }
                                                        cResult[60] = attachments;
                                                        cResult[61] = projectId;
                                                        cResult[62] = tmp106;
                                                        tmp105 = tmp106;
                                                      }
                                                    }
                                                  }
                                                  if (tmp43) {
                                                    let combined;
                                                    if (!groupStart) {
                                                      const intl2 = tmp(tmp2[25]).intl;
                                                      const _HermesInternal = HermesInternal;
                                                      combined = "" + intl2.string(tmp(tmp2[25]).t.KD6OJJ) + ": " + conjureMentionNames;
                                                    }
                                                    let obj4 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: null };
                                                    let tmp102 = null;
                                                    if (null != tmp22) {
                                                      const obj5 = { label: tmp22.label, variant: "text-md/medium" };
                                                      tmp102 = replied(tmp40(tmp2[26]), obj5);
                                                    }
                                                    const items2 = [tmp102, , ];
                                                    let str8 = null;
                                                    if (null != tmp22) {
                                                      str8 = null;
                                                      if (tmp43) {
                                                        str8 = " ";
                                                      }
                                                    }
                                                    items2[1] = str8;
                                                    const obj6 = { text: tmp26, variant: "text-md/normal" };
                                                    items2[2] = replied(tmp40(tmp2[27]), obj6);
                                                    obj4.children = items2;
                                                    let tmp100Result = onJumpToReplied(tmp(tmp2[24]).Text, obj4);
                                                  } else {
                                                    tmp100Result = null;
                                                  }
                                                  cResult[55] = tmp26;
                                                  cResult[56] = groupStart;
                                                  cResult[57] = tmp22;
                                                  cResult[58] = conjureMentionNames;
                                                  cResult[59] = tmp100Result;
                                                  tmp98 = tmp100Result;
                                                }
                                              }
                                            }
                                            let tmp95 = null;
                                            if (groupStart) {
                                              const obj7 = { style: tmp4.header, children: null };
                                              ({ user_id: obj28.userId, created_at: obj28.at } = message);
                                              obj7.children = replied(tmp(tmp2[23]).ConjureUserHeader, { userId: null, at: null });
                                              tmp95 = replied(planSuperseded, obj7);
                                              const obj8 = { userId: null, at: null };
                                            }
                                            cResult[50] = groupStart;
                                            cResult[51] = message.created_at;
                                            cResult[52] = message.user_id;
                                            cResult[53] = tmp4.header;
                                            cResult[54] = tmp95;
                                            tmp94 = tmp95;
                                          }
                                        }
                                        let tmp91 = null;
                                        if (groupStart) {
                                          const obj9 = { style: tmp4.avatar, children: null };
                                          const obj10 = { userId: message.user_id };
                                          obj9.children = replied(tmp(tmp2[23]).ConjureUserAvatar, obj10);
                                          tmp91 = replied(planSuperseded, obj9);
                                        }
                                        cResult[46] = groupStart;
                                        cResult[47] = message.user_id;
                                        cResult[48] = tmp4.avatar;
                                        cResult[49] = tmp91;
                                        tmp90 = tmp91;
                                      } else if ("context_boundary" === message.kind) {
                                        if (cResult[70] === message.contextSwitch) {
                                          if (cResult[71] === projectId) {
                                            if (cResult[72] === tmp4.boundaryRow) {
                                              let tmp85 = cResult[73];
                                            }
                                            return tmp85;
                                          }
                                        }
                                        let tmp86 = null;
                                        if (null != message.contextSwitch) {
                                          const obj11 = { style: tmp4.boundaryRow, children: null };
                                          const obj13 = { projectId, contextSwitch: message.contextSwitch };
                                          obj11.children = replied(tmp40(tmp2[29]), obj13);
                                          tmp86 = replied(planSuperseded, obj11);
                                        }
                                        cResult[70] = message.contextSwitch;
                                        cResult[71] = projectId;
                                        cResult[72] = tmp4.boundaryRow;
                                        cResult[73] = tmp86;
                                        tmp85 = tmp86;
                                      } else {
                                        if ("project_event" === message.kind) {
                                          if (null != message.projectEvent) {
                                            if (cResult[74] === message.projectEvent) {
                                              if (cResult[75] === projectId) {
                                                let tmp78 = cResult[76];
                                              }
                                              if (cResult[77] === tmp31) {
                                                if (cResult[78] === tmp78) {
                                                  let tmp81 = cResult[79];
                                                }
                                                return tmp81;
                                              }
                                              const obj15 = { style: tmp31, children: tmp78 };
                                              const tmp84 = replied(planSuperseded, obj15);
                                              cResult[77] = tmp31;
                                              cResult[78] = tmp78;
                                              cResult[79] = tmp84;
                                              tmp81 = tmp84;
                                            }
                                            const obj16 = { projectId, event: message.projectEvent };
                                            const tmp80 = replied(tmp40(tmp2[30]), obj16);
                                            cResult[74] = message.projectEvent;
                                            cResult[75] = projectId;
                                            cResult[76] = tmp80;
                                            tmp78 = tmp80;
                                          }
                                        }
                                        if ("publish_notice" === message.kind) {
                                          if (null != message.publishNotice) {
                                            if (cResult[80] === message.publishNotice) {
                                              if (cResult[81] === projectId) {
                                                let tmp71 = cResult[82];
                                              }
                                              if (cResult[83] === tmp31) {
                                                if (cResult[84] === tmp71) {
                                                  let tmp74 = cResult[85];
                                                }
                                                return tmp74;
                                              }
                                              const obj17 = { style: tmp31, children: tmp71 };
                                              const tmp77 = replied(planSuperseded, obj17);
                                              cResult[83] = tmp31;
                                              cResult[84] = tmp71;
                                              cResult[85] = tmp77;
                                              tmp74 = tmp77;
                                            }
                                            const obj18 = { projectId, notice: message.publishNotice };
                                            const tmp73 = replied(tmp40(tmp2[31]), obj18);
                                            cResult[80] = message.publishNotice;
                                            cResult[81] = projectId;
                                            cResult[82] = tmp73;
                                            tmp71 = tmp73;
                                          }
                                        }
                                        if (true === message.interrupted) {
                                          const _Symbol3 = Symbol;
                                          if (cResult[86] === Symbol.for("react.memo_cache_sentinel")) {
                                            const intl = tmp(tmp2[25]).intl;
                                            const stringResult = intl.string(tmp40(tmp2[32]).oOmBdX);
                                            cResult[86] = stringResult;
                                            let tmp57 = stringResult;
                                          } else {
                                            tmp57 = cResult[86];
                                          }
                                          const _Symbol4 = Symbol;
                                          if (cResult[87] === Symbol.for("react.memo_cache_sentinel")) {
                                            const obj19 = { line: tmp57, live: false, settled: true, inGutter: true, glyph: null };
                                            const obj20 = { size: "refresh_sm", color: tmp40(tmp2[8]).colors.TEXT_MUTED };
                                            obj19.glyph = replied(tmp(tmp2[33]).StopIcon, obj20);
                                            const tmp62 = replied(tmp40(tmp2[5]), obj19);
                                            cResult[87] = tmp62;
                                            let tmp59 = tmp62;
                                            const tmp40Result = tmp40(tmp2[5]);
                                          } else {
                                            tmp59 = cResult[87];
                                          }
                                          if (cResult[88] !== tmp4.activityBox) {
                                            const obj21 = { style: tmp4.activityBox, children: tmp59 };
                                            const tmp66 = replied(planSuperseded, obj21);
                                            cResult[88] = tmp4.activityBox;
                                            cResult[89] = tmp66;
                                            let tmp63 = tmp66;
                                          } else {
                                            tmp63 = cResult[89];
                                          }
                                          if (cResult[90] === tmp31) {
                                            if (cResult[91] === tmp63) {
                                              let tmp67 = cResult[92];
                                            }
                                            return tmp67;
                                          }
                                          const obj22 = { style: tmp31, children: tmp63 };
                                          const tmp70 = replied(planSuperseded, obj22);
                                          cResult[90] = tmp31;
                                          cResult[91] = tmp63;
                                          cResult[92] = tmp70;
                                          tmp67 = tmp70;
                                        } else if (cResult[93] !== message.steps) {
                                          const _Symbol2 = Symbol;
                                          if (cResult[95] === Symbol.for("react.memo_cache_sentinel")) {
                                            class Ge {
                                              constructor(arg0) {
                                                tmp = "error" === projectId.kind;
                                                if (!tmp) {
                                                  str = "terminal_error";
                                                  tmp = "terminal_error" === projectId.kind;
                                                }
                                                return tmp;
                                              }
                                            }
                                            cResult[95] = Ge;
                                          } else {
                                            class Ge {
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
                                          const found = steps.find(Ge);
                                          cResult[93] = message.steps;
                                          cResult[94] = found;
                                        } else {
                                          class Ge {
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
                                            class Ge {
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
                                          if (turnSettledResult2) {
                                            class Ge {
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
                                              class Ge {
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
                                                class Ge {
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
                                            class Ge {
                                              constructor(arg0) {
                                                tmp = "error" === projectId.kind;
                                                if (!tmp) {
                                                  str = "terminal_error";
                                                  tmp = "terminal_error" === projectId.kind;
                                                }
                                                return tmp;
                                              }
                                            }
                                            if (tmp51 == null) {
                                              class Ge {
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
                                            class Ge {
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
                                              class Ge {
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
                                          if (cResult[96] === isNewest) {
                                            class Ge {
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
                                          let tmp55;
                                          if ("open" === secretRequestStatus) {
                                            class Ge {
                                              constructor(arg0) {
                                                tmp = "error" === projectId.kind;
                                                if (!tmp) {
                                                  str = "terminal_error";
                                                  tmp = "terminal_error" === projectId.kind;
                                                }
                                                return tmp;
                                              }
                                            }
                                            const activeAwaitingUserResult = obj14.activeAwaitingUser(message, isNewest);
                                            if (activeAwaitingUserResult == null) {
                                              class Ge {
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
                                            tmp55 = activeAwaitingUserResult;
                                          }
                                          cResult[96] = isNewest;
                                          cResult[97] = message;
                                          cResult[98] = secretRequestStatus;
                                          cResult[99] = tmp55;
                                          const tmpResult16 = tmp(tmp2[11]);
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
                    function je() {
                      const obj2 = { content, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                      const obj = ConjureMessageActionSheet;
                      obj2.onQueuedAction = conjureQueuedMessage.queuedMessageActionHandler(projectId, message, stateFromStores);
                      let fn;
                      if (null != closure_18) {
                        if (null != onRestoreVersion) {
                          fn = () => projectId(groupStart[21]).confirmRestoreVersion({
                            onConfirm() {
                              return closure_1_11(closure_1_18);
                            }
                          });
                        }
                      }
                      obj2.onRestoreVersion = fn;
                      let fn2;
                      if (null != closure_19) {
                        fn2 = () => projectId(groupStart[22]).requestConjureTrace(closure_1_0, closure_1_19);
                      }
                      obj2.onViewTrace = fn2;
                      return obj.showConjureMessageActions(obj2);
                    }
                    cResult[37] = user_id;
                    cResult[38] = tmp26;
                    cResult[39] = stateFromStores;
                    cResult[40] = message;
                    cResult[41] = onRestoreVersion;
                    cResult[42] = projectId;
                    cResult[43] = tmp41;
                    cResult[44] = tmp38;
                    cResult[45] = je;
                  }
                  let turnRestoreEntryResult = null;
                  if (null != onRestoreVersion) {
                    class Ge {
                      constructor(arg0) {
                        tmp = "error" === projectId.kind;
                        if (!tmp) {
                          str = "terminal_error";
                          tmp = "terminal_error" === projectId.kind;
                        }
                        return tmp;
                      }
                    }
                    turnRestoreEntryResult = obj12.turnRestoreEntry(message);
                  }
                  cResult[34] = message;
                  cResult[35] = onRestoreVersion;
                  cResult[36] = turnRestoreEntryResult;
                  tmp38 = turnRestoreEntryResult;
                  const tmpResult15 = tmp(tmp2[16]);
                }
                const items3 = [tmp4.row, rowGroupStart];
                cResult[29] = tmp4.row;
                cResult[30] = rowGroupStart;
                cResult[31] = items3;
                tmp31 = items3;
                const tmpResult14 = tmp(tmp2[15]);
              }
              function oe() {
                if (null != replied) {
                  if (onJumpToReplied != null) {
                    tmp2(tmp.id);
                  }
                }
              }
              cResult[22] = onJumpToReplied;
              cResult[23] = replied;
              cResult[24] = oe;
            }
          }
          function te() {
            return onTogglePlan(message.render_id, planSuperseded);
          }
          cResult[18] = message.render_id;
          cResult[19] = onTogglePlan;
          cResult[20] = planSuperseded;
          cResult[21] = te;
        }
      }
      function ne() {
        return onToggleChecklist(message.render_id, checklistSuperseded);
      }
      cResult[14] = checklistSuperseded;
      cResult[15] = message.render_id;
      cResult[16] = onToggleChecklist;
      cResult[17] = ne;
    }
    const obj23 = { turnActive: !tmp10 };
    const turnSegmentsResult = tmp(tmp2[12]).turnSegments(message.steps, obj23);
    cResult[7] = message.steps;
    cResult[8] = !tmp10;
    cResult[9] = turnSegmentsResult;
    const tmpResult17 = tmp(tmp2[12]);
  }
  let obj = projectId(groupStart[10]);
  const timelineTree = projectId(groupStart[12]).buildTimelineTree(message.steps, { turnActive: tmp7 });
  cResult[2] = message.steps;
  cResult[3] = !tmp5;
  cResult[4] = timelineTree;
  tmp8 = timelineTree;
  const tmpResult18 = projectId(groupStart[12]);
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
  ({ first, checklistExpanded, planVersion, planExpanded, onApprovePlan, onPickIdea, onAnswerClarification, clarificationDismissed, canSend, appBuildRequestDismissed } = projectId);
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
  let attachments = null;
  const conjureMentionNames = projectId(groupStart[15]).useConjureMentionNames(trimmed);
  if (null != message.attachments) {
    attachments = null;
    if (message.attachments.length > 0) {
      attachments = message.attachments;
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
  stateFromStores = projectId(groupStart[16]).useStateFromStores(items9, () => {
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
  const tmp19 = message(groupStart[18])(projectId, message);
  closure_19 = tmp19;
  const items11 = [trimmed, user_id, projectId, message, stateFromStores, memo5, onRestoreVersion, tmp19];
  const callback3 = checklistSuperseded.useCallback(() => {
    const obj2 = { content: trimmed, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
    const obj = ConjureMessageActionSheet;
    obj2.onQueuedAction = conjureQueuedMessage.queuedMessageActionHandler(projectId, message, stateFromStores);
    let fn;
    if (null != memo5) {
      if (null != onRestoreVersion) {
        fn = () => projectId(groupStart[21]).confirmRestoreVersion({
          onConfirm() {
            return closure_1_11(closure_1_18);
          }
        });
      }
    }
    obj2.onRestoreVersion = fn;
    let fn2;
    if (null != closure_19) {
      fn2 = () => projectId(groupStart[22]).requestConjureTrace(closure_1_0, closure_1_19);
    }
    obj2.onViewTrace = fn2;
    return obj.showConjureMessageActions(obj2);
  }, items11);
  if ("" === trimmed) {
    if (null == user_id) {
      if ("user" === message.role) {
        if ("" === trimmed) {
          if (null == memo4) {
            let tmp86Result2 = null;
          }
          return tmp86Result2;
        }
        let obj3 = { style: items8, onLongPress: tmp22, accessible: false, children: null };
        let tmp88 = null;
        if (groupStart) {
          let obj4 = { style: tmp.avatar, children: null };
          const obj5 = { userId: message.user_id };
          obj4.children = replied(tmp11(tmp12[23]).ConjureUserAvatar, obj5);
          tmp88 = replied(planSuperseded, obj4);
        }
        const items12 = [tmp88, , , ];
        let tmp91 = null;
        if (groupStart) {
          const obj6 = { style: tmp.header, children: null };
          ({ user_id: obj53.userId, created_at: obj53.at } = message);
          obj6.children = replied(tmp11(tmp12[23]).ConjureUserHeader, { userId: null, at: null });
          tmp91 = replied(planSuperseded, obj6);
          const obj7 = { userId: null, at: null };
        }
        items12[1] = tmp91;
        if (tmp21) {
          let combined;
          if (!groupStart) {
            const intl3 = tmp11(tmp12[25]).intl;
            const _HermesInternal = HermesInternal;
            combined = "" + intl3.string(tmp11(tmp12[25]).t.KD6OJJ) + ": " + conjureMentionNames;
          }
          const obj8 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: null };
          let tmp97 = null;
          if (null != memo4) {
            const obj9 = { label: memo4.label, variant: "text-md/medium" };
            tmp97 = replied(tmp18(tmp12[26]), obj9);
          }
          const items13 = [tmp97, , ];
          let str6 = null;
          if (null != memo4) {
            str6 = null;
            if (tmp21) {
              str6 = " ";
            }
          }
          items13[1] = str6;
          const obj10 = { text: trimmed, variant: "text-md/normal" };
          items13[2] = replied(tmp18(tmp12[27]), obj10);
          obj8.children = items13;
          let tmp86Result = tmp86(tmp11(tmp12[24]).Text, obj8);
        } else {
          tmp86Result = null;
        }
        items12[2] = tmp86Result;
        let tmp100 = null;
        if (null != attachments) {
          const obj11 = { projectId, attachments };
          tmp100 = replied(tmp18(tmp12[28]), obj11);
        }
        items12[3] = tmp100;
        obj3.children = items12;
        tmp86Result2 = tmp86(onToggleChecklist, obj3);
      } else if ("context_boundary" === message.kind) {
        let tmp82 = null;
        if (null != message.contextSwitch) {
          const obj12 = { style: tmp.boundaryRow, children: null };
          const obj13 = { projectId, contextSwitch: message.contextSwitch };
          obj12.children = replied(tmp18(tmp12[29]), obj13);
          tmp82 = replied(planSuperseded, obj12);
        }
        return tmp82;
      } else {
        if ("project_event" === message.kind) {
          if (null != message.projectEvent) {
            const obj14 = { style: items8, children: null };
            const obj15 = { projectId, event: message.projectEvent };
            obj14.children = replied(tmp18(tmp12[30]), obj15);
            return replied(planSuperseded, obj14);
          }
        }
        if ("publish_notice" === message.kind) {
          if (null != message.publishNotice) {
            const obj16 = { style: items8, children: null };
            const obj17 = { projectId, notice: message.publishNotice };
            obj16.children = replied(tmp18(tmp12[31]), obj17);
            return replied(planSuperseded, obj16);
          }
        }
        if (true === message.interrupted) {
          const obj18 = { style: items8, children: null };
          const obj19 = { style: tmp.activityBox, children: null };
          const obj20 = { line: null, live: false, settled: true, inGutter: true, glyph: null };
          const intl2 = tmp11(tmp12[25]).intl;
          obj20.line = intl2.string(tmp18(tmp12[32]).oOmBdX);
          const obj21 = { size: "refresh_sm", color: tmp18(tmp12[8]).colors.TEXT_MUTED };
          obj20.glyph = replied(tmp11(tmp12[33]).StopIcon, obj21);
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
            const tmp11Result10 = tmp11(tmp12[34]);
            const tmp30 = tmp11(tmp12[34]).activeAwaitingUser(message, isNewest);
            const activeAwaitingUserResult = tmp11(tmp12[34]).activeAwaitingUser(message, isNewest);
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
          let tmp36 = null;
          if (isNewest) {
            tmp36 = null;
            if (turnSettledResult) {
              tmp36 = null;
              if (!appBuildRequestDismissed) {
                appBuildRequest = message.appBuildRequest;
                if (appBuildRequest == null) {
                  appBuildRequest = null;
                }
                tmp36 = appBuildRequest;
              }
            }
          }
          appBuildRequest = tmp36;
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
          const tmp11Result9 = tmp11(tmp12[11]);
          const obj22 = { steps: message.steps, content: trimmed, hasProposal: null != proposal, hasLiveClarification: null != clarification, hasAttachments: null != attachments };
          const turnPresentation = tmp11(tmp12[35]).resolveTurnPresentation(obj22);
          ({ showsClosingMessage, replyKey: c23 } = turnPresentation);
          let tmp40 = memo.steps.length > 0;
          if (!tmp40) {
            tmp40 = memo.tasks.length > 0;
          }
          if (!tmp40) {
            if (0 === turnPresentation.streamed.length) {
              if ("" === trimmed) {
                if (null == proposal) {
                  if (null == found) {
                    if (null == ideas) {
                      if (null == items18) {
                        if (null == provisionalTodo) {
                          if (null == tmp28) {
                            if (null == tmp32) {
                              if (null == attachments) {
                                if (null == clarification) {
                                  if (null == restoreProposal) {
                                    if (null == tmp36) {
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
          const tmp11Result11 = tmp11(tmp12[35]);
          const turnLeadsWithStretchResult = tmp11(tmp12[35]).turnLeadsWithStretch(tmp40, turnPresentation);
          c24 = turnLeadsWithStretchResult;
          const found1 = memo1.filter((hasWork) => hasWork.hasWork);
          const atResult = found1.at(-1);
          index = undefined;
          if (atResult != null) {
            index = atResult.index;
          }
          const tmp11Result12 = tmp11(tmp12[35]);
          const tmp44 = !tmp11(tmp12[11]).turnSettled(message);
          closure_26 = tmp44;
          const tmp11Result13 = tmp11(tmp12[11]);
          const obj23 = { turnActive: tmp44 };
          open = tmp11(tmp12[12]).turnLifecycle(memo1, obj23).open;
          let avatarSpokenReplying = groupStart;
          if (groupStart) {
            avatarSpokenReplying = null != replied;
          }
          let tmp48Result = null;
          if (avatarSpokenReplying) {
            const obj24 = { replied, onJump: null };
            let tmp50;
            if (null != onJumpToReplied) {
              tmp50 = callback2;
            }
            obj24.onJump = tmp50;
            tmp48Result = replied(tmp18(tmp12[7]), obj24);
            const tmp18Result5 = tmp18(tmp12[7]);
          }
          const items14 = [tmp48Result, , ];
          const items15 = [, , ];
          ({ avatar: arr16[0], avatarSpoken: arr16[1] } = tmp);
          if (avatarSpokenReplying) {
            avatarSpokenReplying = tmp.avatarSpokenReplying;
          }
          const obj25 = { children: null };
          const obj26 = { style: null, children: null };
          items15[2] = avatarSpokenReplying;
          obj26.style = items15;
          obj26.children = replied(tmp11(tmp12[23]).ConjureAvatar, {});
          items14[1] = replied(planSuperseded, obj26);
          const obj27 = { style: tmp.header, children: null };
          const obj28 = { at: message.created_at };
          obj27.children = replied(tmp11(tmp12[23]).ConjureHeader, obj28);
          items14[2] = replied(planSuperseded, obj27);
          obj25.children = items14;
          const tmp45Result = onJumpToReplied(closure_9, obj25);
          const obj29 = { style: items8, onLongPress: tmp22, accessible: false, children: null };
          let tmp51Result = null;
          if (turnLeadsWithStretchResult) {
            tmp51Result = null;
            if (groupStart) {
              const obj30 = { style: tmp.spoken, children: tmp45Result };
              tmp51Result = tmp51(tmp52, obj30);
            }
          }
          const items16 = [
            tmp51Result,
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
                  if (null == tmp36) {
                    if (null == ideas) {
                      if (null == tmp28) {
                        if (null == tmp32) {
                          if (null == attachments) {
                            if (null == found) {
                              if (null == items18) {
                                if (null == provisionalTodo) {
                                  let tmp45Result2 = null;
                                }
                                items16[2] = tmp45Result2;
                                let tmp51Result15 = null;
                                if (null != tmp30) {
                                  const obj31 = { style: tmp.spoken, children: null };
                                  const obj32 = { variant: "text-xs/normal", color: "text-muted", children: null };
                                  const intl = tmp11(tmp12[25]).intl;
                                  obj32.children = intl.string(tmp18(tmp12[32]).YR8A2v);
                                  obj31.children = tmp51(tmp11(tmp12[24]).Text, obj32);
                                  tmp51Result15 = tmp51(tmp52, obj31);
                                }
                                items16[3] = tmp51Result15;
                                obj29.children = items16;
                                return tmp45(onToggleChecklist, obj29);
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
          let tmp57 = null;
          if (groupStart) {
            tmp57 = null;
            if (!turnLeadsWithStretchResult) {
              tmp57 = tmp45Result;
            }
          }
          const items17 = [tmp57, , , , , , , , , , , , , ];
          let tmp51Result16 = null;
          if (showsClosingMessage) {
            const obj34 = { source: turnPresentation.closingContent };
            tmp51Result16 = tmp51(tmp18(tmp12[36]), obj34);
          }
          items17[1] = tmp51Result16;
          let tmp51Result17 = null;
          if ("side_reply" === message.kind) {
            const obj35 = { variant: "text-xs/normal", color: "text-muted", children: tmp11(tmp12[38]).midTurnCaption(message.acknowledges) };
            tmp51Result17 = tmp51(tmp11(tmp12[24]).Text, obj35);
            const tmp11Result15 = tmp11(tmp12[38]);
          }
          items17[2] = tmp51Result17;
          let tmp51Result18 = null;
          if (null != attachments) {
            const obj36 = { projectId, attachments };
            tmp51Result18 = tmp51(tmp18(tmp12[28]), obj36);
          }
          items17[3] = tmp51Result18;
          if (null != items18) {
            const tmp18Result6 = tmp18(tmp12[39]);
            if (items18 == null) {
              items18 = [];
            }
            const obj37 = { children: null };
            const obj38 = { todos: items18, provisional: provisionalTodo, agents: memo3, live: null, superseded: null, expanded: null, onToggleExpanded: null };
            const tmp18Result7 = tmp18(tmp12[40]);
            obj38.live = tmp11(tmp12[41]).checklistLive(message);
            obj38.superseded = checklistSuperseded;
            obj38.expanded = checklistExpanded;
            obj38.onToggleExpanded = callback;
            obj37.children = tmp51(tmp18Result7, obj38);
            let tmp51Result19 = tmp51(tmp18Result6, obj37);
            const tmp11Result16 = tmp11(tmp12[41]);
          } else {
            tmp51Result19 = null;
          }
          items17[4] = tmp51Result19;
          let tmp51Result20 = null;
          if (null != proposal) {
            const obj39 = { projectId, proposal, version: planVersion, superseded: planSuperseded, expanded: planExpanded, onToggleExpanded: callback1, onApprove: onApprovePlan };
            tmp51Result20 = tmp51(tmp18(tmp12[42]), obj39);
          }
          items17[5] = tmp51Result20;
          let tmp51Result21 = null;
          if (null != clarification) {
            const obj40 = {
              projectId,
              clarification,
              onSubmit: onAnswerClarification,
              onDismiss() {
                          return closure_1_9(clarification.id);
                        }
            };
            tmp51Result21 = tmp51(tmp18(tmp12[43]), obj40);
          }
          items17[6] = tmp51Result21;
          let tmp51Result22 = null;
          if (null != tmp36) {
            const obj41 = {
              projectId,
              request: tmp36,
              canSend,
              onDismiss() {
                          return closure_1_10(appBuildRequest.id);
                        }
            };
            tmp51Result22 = tmp51(tmp18(tmp12[44]), obj41);
          }
          items17[7] = tmp51Result22;
          let tmp51Result23 = null;
          if (null != tmp28) {
            const obj42 = { projectId, cardId: message.render_id, request: tmp28, status: secretRequestStatus, awaiting: tmp30 };
            tmp51Result23 = tmp51(tmp18(tmp12[45]), obj42);
          }
          items17[8] = tmp51Result23;
          let tmp51Result24 = null;
          if (null != tmp32) {
            const obj43 = { projectId, request: tmp32 };
            tmp51Result24 = tmp51(tmp18(tmp12[46]), obj43);
          }
          items17[9] = tmp51Result24;
          let tmp51Result25 = null;
          if (null != tmp26) {
            const obj44 = { projectId };
            tmp51Result25 = tmp51(tmp18(tmp12[47]), obj44);
          }
          items17[10] = tmp51Result25;
          let tmp51Result26 = null;
          if (null != ideas) {
            const obj45 = { ideas, onPick: onPickIdea };
            tmp51Result26 = tmp51(tmp18(tmp12[48]), obj45);
          }
          items17[11] = tmp51Result26;
          let tmp51Result27 = null;
          if (null != restoreProposal) {
            const obj46 = { proposal: restoreProposal, onRestore: null };
            let fn;
            if (isNewest) {
              if (null != onRestoreVersion) {
                fn = () => ConjureVersionRestoreConfirm.confirmRestoreVersion({
                  onConfirm() {
                    return onRestoreVersion(projectId(groupStart[17]).proposalRestoreEntry(restoreProposal));
                  }
                });
              }
            }
            obj46.onRestore = fn;
            tmp51Result27 = tmp51(tmp18(tmp12[49]), obj46);
            const tmp18Result8 = tmp18(tmp12[49]);
          }
          items17[12] = tmp51Result27;
          let tmp51Result28 = null;
          if (null != found) {
            tmp51Result28 = null;
            if ("message" in found) {
              const obj47 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
              tmp51Result28 = tmp51(tmp11(tmp12[24]).Text, obj47);
            }
          }
          items17[13] = tmp51Result28;
          obj33.children = items17;
          tmp45Result2 = tmp45(tmp52, obj33);
          const tmp11Result14 = tmp11(tmp12[12]);
        }
      }
    }
  }
  const tmp11Result = projectId(groupStart[16]);
}));