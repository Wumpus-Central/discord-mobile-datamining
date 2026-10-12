// === Module 17193: ConjureMessageRow ===

// Module 17193 (ConjureMessageRow)
import nativeDefault from "native" /* 587 */;
import conjureChatTurns from "conjureChatTurns" /* 12999 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 17105 */;
import ConjureVersionRestoreConfirm from "ConjureVersionRestoreConfirm" /* 17159 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 17176 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 17187 */;
import ConjureMessageAuthor from "ConjureMessageAuthor" /* 17198 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 17201 */;
import ConjureChatRestore from "ConjureChatRestore" /* 17205 */;
import conjureQueuedMessage from "conjureQueuedMessage" /* 17207 */;
import ConjurePublishNoticeLineDefault from "ConjurePublishNoticeLine" /* 17208 */;
import ConjureIdeasOfferDefault from "ConjureIdeasOffer" /* 17211 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 17212 */;
import ConjureActivityBox from "ConjureActivityBox" /* 17226 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

const ConjureActivityBoxDefault = ConjureActivityBox;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5092);
let obj = { row: { position: "relative", paddingLeft: fn(17194).MESSAGE_CONTENT_INSET, paddingRight: fn(17194).MESSAGE_EDGE_INSET, paddingVertical: fn(17196).ROW_PAD, gap: fn(17196).BLOCK_GAP }, rowGroupStart: null, boundaryRow: null, avatar: null, spoken: null, avatarSpoken: null, avatarSpokenReplying: null, reminderSlot: null, reminderTip: null, reminderSeparated: null, header: null, activityBox: null };
let obj3 = { position: "relative", paddingLeft: fn(17194).MESSAGE_CONTENT_INSET, paddingRight: fn(17194).MESSAGE_EDGE_INSET, paddingVertical: fn(17196).ROW_PAD, gap: fn(17196).BLOCK_GAP };
obj.rowGroupStart = { marginTop: fn(17196).GROUP_GAP };
let obj4 = { marginTop: fn(17196).GROUP_GAP };
obj.boundaryRow = { paddingHorizontal: fn(17194).MESSAGE_EDGE_INSET, paddingVertical: fn(17196).ROW_PAD };
const rect = { position: "absolute", left: fn(17194).MESSAGE_EDGE_INSET, top: fn(17196).ROW_PAD };
obj.avatar = rect;
let obj5 = { paddingHorizontal: fn(17194).MESSAGE_EDGE_INSET, paddingVertical: fn(17196).ROW_PAD };
obj.spoken = { position: "relative", gap: fn(17196).BLOCK_GAP };
const rect1 = { left: fn(17194).MESSAGE_EDGE_INSET - fn(17194).MESSAGE_CONTENT_INSET, top: 0 };
obj.avatarSpoken = rect1;
let obj6 = { position: "relative", gap: fn(17196).BLOCK_GAP };
obj.avatarSpokenReplying = { top: fn(17197).REPLY_PREVIEW_HEIGHT + fn(17196).BLOCK_GAP };
let obj7 = { top: fn(17197).REPLY_PREVIEW_HEIGHT + fn(17196).BLOCK_GAP };
obj.reminderSlot = { marginTop: -fn(17196).BLOCK_GAP };
let obj8 = { marginTop: -fn(17196).BLOCK_GAP };
obj.reminderTip = { paddingTop: fn(17196).BLOCK_GAP };
let obj9 = { paddingTop: fn(17196).BLOCK_GAP };
obj.reminderSeparated = { paddingTop: fn(17196).GROUP_GAP + 2 * fn(17196).ROW_PAD };
let obj10 = { paddingTop: fn(17196).GROUP_GAP + 2 * fn(17196).ROW_PAD };
obj.header = { marginBottom: -nativeDefault.space.PX_4 };
let obj11 = { marginBottom: -nativeDefault.space.PX_4 };
obj.activityBox = { marginLeft: -fn(17196).RAIL_INDENT };
let closure_10 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj12 = { marginLeft: -fn(17196).RAIL_INDENT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageRow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureMessageRow(projectId) {
  const cResult = projectId(groupStart[10]).c(239);
  projectId = projectId.projectId;
  const message = projectId.message;
  groupStart = projectId.groupStart;
  ({ isNewest, hostsReminder, reminder, checklistSuperseded } = projectId);
  ({ checklistExpanded, secretRequestStatus, onToggleChecklist } = projectId);
  ({ planVersion, planSuperseded } = projectId);
  ({ planExpanded, onTogglePlan } = projectId);
  const replied = projectId.replied;
  const onJumpToReplied = projectId.onJumpToReplied;
  ({ onApprovePlan, onPickIdea, onAskForIdeas } = projectId);
  ({ onAnswerClarification, onDismissClarification } = projectId);
  const onRestoreVersion = projectId.onRestoreVersion;
  ({ first, clarificationDismissed } = projectId);
  const tmp4 = onDismissClarification();
  closure_12 = tmp4;
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
                const content = tmp26;
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
                    let tmp29 = cResult[31];
                  }
                  let user_id;
                  if ("user" === message.role) {
                    user_id = message.user_id;
                  }
                  const _Symbol = Symbol;
                  if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                    let items = [onTogglePlan];
                    function ke() {
                      const currentUser = onTogglePlan.getCurrentUser();
                      id = undefined;
                      if (currentUser != null) {
                        id = currentUser.id;
                      }
                      return id;
                    }
                    cResult[32] = items;
                    cResult[33] = ke;
                    let tmp33 = ke;
                    let tmp32 = items;
                  } else {
                    tmp32 = cResult[32];
                    tmp33 = cResult[33];
                  }
                  const stateFromStores = tmp(tmp2[15]).useStateFromStores(tmp32, tmp33);
                  if (cResult[34] === message) {
                    if (cResult[35] === onRestoreVersion) {
                      let tmp36 = cResult[36];
                    }
                    closure_18 = tmp36;
                    const tmp39 = message(tmp2[17])(projectId, message);
                    closure_19 = tmp39;
                    if (cResult[37] === user_id) {
                      if (cResult[38] === tmp26) {
                        if (cResult[39] === stateFromStores) {
                          if (cResult[40] === message) {
                            if (cResult[41] === onRestoreVersion) {
                              if (cResult[42] === projectId) {
                                if (cResult[43] === tmp39) {
                                  if ("" === tmp26) {
                                    if (null == user_id) {
                                      if (cResult[46] === onAskForIdeas) {
                                        if (cResult[47] === projectId) {
                                          if (cResult[48] === tmp4.avatar) {
                                            if (cResult[49] === tmp4.avatarSpoken) {
                                              if (cResult[50] === tmp4.header) {
                                                if (cResult[51] === tmp4.reminderSeparated) {
                                                  if (cResult[52] === tmp4.reminderTip) {
                                                    if (cResult[53] === tmp4.spoken) {
                                                      let tmp43 = cResult[54];
                                                    }
                                                    if (cResult[55] === hostsReminder) {
                                                      if (cResult[56] === reminder) {
                                                        if (cResult[57] === tmp43) {
                                                          if (cResult[58] === tmp4.reminderSlot) {
                                                            let tmp44 = cResult[59];
                                                          }
                                                          if ("user" === message.role) {
                                                            if ("" === tmp26) {
                                                              if (null == tmp22) {
                                                                if (null == attachments) {
                                                                  return null;
                                                                }
                                                              }
                                                            }
                                                            if (cResult[60] === groupStart) {
                                                              if (cResult[61] === message.user_id) {
                                                                if (cResult[62] === tmp4.avatar) {
                                                                  let tmp91 = cResult[63];
                                                                }
                                                                if (cResult[64] === groupStart) {
                                                                  if (cResult[65] === message.created_at) {
                                                                    if (cResult[66] === message.user_id) {
                                                                      if (cResult[67] === tmp4.header) {
                                                                        let tmp95 = cResult[68];
                                                                      }
                                                                      if (cResult[69] === tmp26) {
                                                                        if (cResult[70] === groupStart) {
                                                                          if (cResult[71] === tmp22) {
                                                                            let tmp99 = cResult[72];
                                                                          }
                                                                          if (cResult[73] === attachments) {
                                                                            if (cResult[74] === projectId) {
                                                                              let tmp105 = cResult[75];
                                                                            }
                                                                            if (cResult[76] === tmp42) {
                                                                              if (cResult[77] === tmp29) {
                                                                                if (cResult[78] === tmp91) {
                                                                                  if (cResult[79] === tmp95) {
                                                                                    if (cResult[80] === tmp99) {
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                            let obj2 = { style: tmp29, onLongPress: tmp42, accessible: false, children: null };
                                                                            let items1 = [tmp91, tmp95, tmp99, tmp105];
                                                                            obj2.children = items1;
                                                                            const tmp111 = onAskForIdeas(onToggleChecklist, obj2);
                                                                            cResult[76] = tmp42;
                                                                            cResult[77] = tmp29;
                                                                            cResult[78] = tmp91;
                                                                            cResult[79] = tmp95;
                                                                            cResult[80] = tmp99;
                                                                            cResult[81] = tmp105;
                                                                            cResult[82] = tmp111;
                                                                          }
                                                                          let tmp106 = null;
                                                                          if (null != attachments) {
                                                                            let obj3 = { projectId, attachments };
                                                                            tmp106 = replied(tmp38(tmp2[29]), obj3);
                                                                          }
                                                                          cResult[73] = attachments;
                                                                          cResult[74] = projectId;
                                                                          cResult[75] = tmp106;
                                                                          tmp105 = tmp106;
                                                                        }
                                                                      }
                                                                      if (tmp41) {
                                                                        let combined;
                                                                        if (!groupStart) {
                                                                          const intl2 = tmp(tmp2[27]).intl;
                                                                          const _HermesInternal = HermesInternal;
                                                                          combined = "" + intl2.string(tmp(tmp2[27]).t.KD6OJJ) + ": " + tmp26;
                                                                        }
                                                                        let obj4 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: null };
                                                                        let tmp103 = null;
                                                                        if (null != tmp22) {
                                                                          let obj5 = { label: tmp22.label, variant: "text-md/medium" };
                                                                          tmp103 = replied(tmp38(tmp2[28]), obj5);
                                                                        }
                                                                        const items2 = [tmp103, , ];
                                                                        let str8 = null;
                                                                        if (null != tmp22) {
                                                                          str8 = null;
                                                                          if (tmp41) {
                                                                            str8 = " ";
                                                                          }
                                                                        }
                                                                        items2[1] = str8;
                                                                        items2[2] = tmp26;
                                                                        obj4.children = items2;
                                                                        let tmp101Result = onAskForIdeas(tmp(tmp2[26]).Text, obj4);
                                                                      } else {
                                                                        tmp101Result = null;
                                                                      }
                                                                      cResult[69] = tmp26;
                                                                      cResult[70] = groupStart;
                                                                      cResult[71] = tmp22;
                                                                      cResult[72] = tmp101Result;
                                                                      tmp99 = tmp101Result;
                                                                    }
                                                                  }
                                                                }
                                                                let tmp96 = null;
                                                                if (groupStart) {
                                                                  let obj6 = { style: tmp4.header, children: null };
                                                                  ({ user_id: obj28.userId, created_at: obj28.at } = message);
                                                                  obj6.children = replied(tmp(tmp2[24]).ConjureUserHeader, { userId: null, at: null });
                                                                  tmp96 = replied(planSuperseded, obj6);
                                                                  let obj7 = { userId: null, at: null };
                                                                }
                                                                cResult[64] = groupStart;
                                                                cResult[65] = message.created_at;
                                                                cResult[66] = message.user_id;
                                                                cResult[67] = tmp4.header;
                                                                cResult[68] = tmp96;
                                                                tmp95 = tmp96;
                                                              }
                                                            }
                                                            let tmp92 = null;
                                                            if (groupStart) {
                                                              let obj8 = { style: tmp4.avatar, children: null };
                                                              const obj9 = { userId: message.user_id };
                                                              obj8.children = replied(tmp(tmp2[24]).ConjureUserAvatar, obj9);
                                                              tmp92 = replied(planSuperseded, obj8);
                                                            }
                                                            cResult[60] = groupStart;
                                                            cResult[61] = message.user_id;
                                                            cResult[62] = tmp4.avatar;
                                                            cResult[63] = tmp92;
                                                            tmp91 = tmp92;
                                                          } else if ("context_boundary" === message.kind) {
                                                            if (cResult[83] === message.contextSwitch) {
                                                              if (cResult[84] === projectId) {
                                                                if (cResult[85] === tmp4.boundaryRow) {
                                                                  let tmp86 = cResult[86];
                                                                }
                                                                return tmp86;
                                                              }
                                                            }
                                                            let tmp87 = null;
                                                            if (null != message.contextSwitch) {
                                                              const obj10 = { style: tmp4.boundaryRow, children: null };
                                                              const obj12 = { projectId, contextSwitch: message.contextSwitch };
                                                              obj10.children = replied(tmp38(tmp2[30]), obj12);
                                                              tmp87 = replied(planSuperseded, obj10);
                                                            }
                                                            cResult[83] = message.contextSwitch;
                                                            cResult[84] = projectId;
                                                            cResult[85] = tmp4.boundaryRow;
                                                            cResult[86] = tmp87;
                                                            tmp86 = tmp87;
                                                          } else {
                                                            if ("project_event" === message.kind) {
                                                              if (null != message.projectEvent) {
                                                                if (cResult[87] === message.projectEvent) {
                                                                  if (cResult[88] === projectId) {
                                                                    let tmp79 = cResult[89];
                                                                  }
                                                                  if (cResult[90] === tmp29) {
                                                                    if (cResult[91] === tmp79) {
                                                                      let tmp82 = cResult[92];
                                                                    }
                                                                    return tmp82;
                                                                  }
                                                                  const obj13 = { style: tmp29, children: tmp79 };
                                                                  const tmp85 = replied(planSuperseded, obj13);
                                                                  cResult[90] = tmp29;
                                                                  cResult[91] = tmp79;
                                                                  cResult[92] = tmp85;
                                                                  tmp82 = tmp85;
                                                                }
                                                                const obj15 = { projectId, event: message.projectEvent };
                                                                const tmp81 = replied(tmp38(tmp2[31]), obj15);
                                                                cResult[87] = message.projectEvent;
                                                                cResult[88] = projectId;
                                                                cResult[89] = tmp81;
                                                                tmp79 = tmp81;
                                                              }
                                                            }
                                                            if ("publish_notice" === message.kind) {
                                                              if (null != message.publishNotice) {
                                                                if (cResult[93] === message.publishNotice) {
                                                                  if (cResult[94] === projectId) {
                                                                    let tmp72 = cResult[95];
                                                                  }
                                                                  if (cResult[96] === tmp44) {
                                                                    if (cResult[97] === tmp29) {
                                                                      if (cResult[98] === tmp72) {
                                                                        let tmp75 = cResult[99];
                                                                      }
                                                                      return tmp75;
                                                                    }
                                                                  }
                                                                  const obj16 = { style: tmp29, children: null };
                                                                  const items3 = [tmp72, tmp44];
                                                                  obj16.children = items3;
                                                                  const tmp78 = onAskForIdeas(planSuperseded, obj16);
                                                                  cResult[96] = tmp44;
                                                                  cResult[97] = tmp29;
                                                                  cResult[98] = tmp72;
                                                                  cResult[99] = tmp78;
                                                                  tmp75 = tmp78;
                                                                }
                                                                const obj17 = { projectId, notice: message.publishNotice };
                                                                const tmp74 = replied(tmp38(tmp2[22]), obj17);
                                                                cResult[93] = message.publishNotice;
                                                                cResult[94] = projectId;
                                                                cResult[95] = tmp74;
                                                                tmp72 = tmp74;
                                                              }
                                                            }
                                                            if (true === message.interrupted) {
                                                              const _Symbol3 = Symbol;
                                                              if (cResult[100] === Symbol.for("react.memo_cache_sentinel")) {
                                                                const intl = tmp(tmp2[27]).intl;
                                                                const stringResult = intl.string(tmp38(tmp2[32]).oOmBdX);
                                                                cResult[100] = stringResult;
                                                                let tmp58 = stringResult;
                                                              } else {
                                                                tmp58 = cResult[100];
                                                              }
                                                              const _Symbol4 = Symbol;
                                                              if (cResult[101] === Symbol.for("react.memo_cache_sentinel")) {
                                                                const obj18 = { line: tmp58, live: false, settled: true, inGutter: true, glyph: null };
                                                                const obj19 = { size: "refresh_sm", color: tmp38(tmp2[8]).colors.TEXT_MUTED };
                                                                obj18.glyph = replied(tmp(tmp2[33]).StopIcon, obj19);
                                                                const tmp63 = replied(tmp38(tmp2[5]), obj18);
                                                                cResult[101] = tmp63;
                                                                let tmp60 = tmp63;
                                                                const tmp38Result = tmp38(tmp2[5]);
                                                              } else {
                                                                tmp60 = cResult[101];
                                                              }
                                                              if (cResult[102] !== tmp4.activityBox) {
                                                                const obj20 = { style: tmp4.activityBox, children: tmp60 };
                                                                const tmp67 = replied(planSuperseded, obj20);
                                                                cResult[102] = tmp4.activityBox;
                                                                cResult[103] = tmp67;
                                                                let tmp64 = tmp67;
                                                              } else {
                                                                tmp64 = cResult[103];
                                                              }
                                                              if (cResult[104] === tmp44) {
                                                                if (cResult[105] === tmp29) {
                                                                  if (cResult[106] === tmp64) {
                                                                    let tmp68 = cResult[107];
                                                                  }
                                                                  return tmp68;
                                                                }
                                                              }
                                                              const obj21 = { style: tmp29, children: null };
                                                              const items4 = [tmp64, tmp44];
                                                              obj21.children = items4;
                                                              const tmp71 = onAskForIdeas(planSuperseded, obj21);
                                                              cResult[104] = tmp44;
                                                              cResult[105] = tmp29;
                                                              cResult[106] = tmp64;
                                                              cResult[107] = tmp71;
                                                              tmp68 = tmp71;
                                                            } else if (cResult[108] !== message.steps) {
                                                              const _Symbol2 = Symbol;
                                                              if (cResult[110] === Symbol.for("react.memo_cache_sentinel")) {
                                                                class Ve {
                                                                  constructor(arg0) {
                                                                    tmp = "error" === projectId.kind;
                                                                    if (!tmp) {
                                                                      str = "terminal_error";
                                                                      tmp = "terminal_error" === projectId.kind;
                                                                    }
                                                                    return tmp;
                                                                  }
                                                                }
                                                                cResult[110] = Ve;
                                                              } else {
                                                                class Ve {
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
                                                              const found = steps.find(Ve);
                                                              cResult[108] = message.steps;
                                                              cResult[109] = found;
                                                            } else {
                                                              class Ve {
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
                                                                class Ve {
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
                                                                class Ve {
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
                                                                  class Ve {
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
                                                                    class Ve {
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
                                                                class Ve {
                                                                  constructor(arg0) {
                                                                    tmp = "error" === projectId.kind;
                                                                    if (!tmp) {
                                                                      str = "terminal_error";
                                                                      tmp = "terminal_error" === projectId.kind;
                                                                    }
                                                                    return tmp;
                                                                  }
                                                                }
                                                                if (tmp52 == null) {
                                                                  class Ve {
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
                                                                class Ve {
                                                                  constructor(arg0) {
                                                                    tmp = "error" === projectId.kind;
                                                                    if (!tmp) {
                                                                      str = "terminal_error";
                                                                      tmp = "terminal_error" === projectId.kind;
                                                                    }
                                                                    return tmp;
                                                                  }
                                                                }
                                                                if (tmp54 == null) {
                                                                  class Ve {
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
                                                              if (cResult[111] === isNewest) {
                                                                class Ve {
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
                                                              let tmp56;
                                                              if ("open" === secretRequestStatus) {
                                                                class Ve {
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
                                                                  class Ve {
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
                                                                tmp56 = activeAwaitingUserResult;
                                                              }
                                                              cResult[111] = isNewest;
                                                              cResult[112] = message;
                                                              cResult[113] = secretRequestStatus;
                                                              cResult[114] = tmp56;
                                                              const tmpResult14 = tmp(tmp2[11]);
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    let tmp45 = null;
                                                    if (hostsReminder) {
                                                      class Ve {
                                                        constructor(arg0) {
                                                          tmp = "error" === projectId.kind;
                                                          if (!tmp) {
                                                            str = "terminal_error";
                                                            tmp = "terminal_error" === projectId.kind;
                                                          }
                                                          return tmp;
                                                        }
                                                      }
                                                      const obj22 = { style: tmp4.reminderSlot, reminder, renderReminder: tmp43 };
                                                      tmp45 = replied(tmp38(tmp2[25]), obj22);
                                                    }
                                                    cResult[55] = hostsReminder;
                                                    cResult[56] = reminder;
                                                    cResult[57] = tmp43;
                                                    cResult[58] = tmp4.reminderSlot;
                                                    cResult[59] = tmp45;
                                                    tmp44 = tmp45;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      function renderReminder(arg0) {
                                        if ("outdated" === arg0) {
                                          const obj2 = { style: closure_12.reminderTip, children: null };
                                          const obj3 = { style: closure_12.spoken, children: null };
                                          const obj4 = { projectId, notice: "outdated" };
                                          obj3.children = React5(ConjurePublishNoticeLineDefault, obj4);
                                          obj2.children = React5(hasOwnProperty, obj3);
                                          return React5(hasOwnProperty, obj2);
                                        } else if ("ideas" === arg0) {
                                          const obj = { style: closure_12.reminderSeparated, children: null };
                                          const obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: null };
                                          const obj6 = { children: null };
                                          const obj7 = { style: null, children: null };
                                          const items = [, ];
                                          ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                          obj7.style = items;
                                          obj7.children = React5(ConjureMessageAuthor.ConjureAvatar, {});
                                          const items1 = [React5(hasOwnProperty, obj7), ];
                                          const obj8 = { style: closure_12.header, children: React5(ConjureMessageAuthor.ConjureHeader, {}) };
                                          items1[1] = React5(hasOwnProperty, obj8);
                                          obj6.children = items1;
                                          obj5.attribution = options(closure_2_8, obj6);
                                          obj.children = React5(ConjureIdeasOfferDefault, obj5);
                                          return React5(hasOwnProperty, obj);
                                        }
                                      }
                                      cResult[46] = onAskForIdeas;
                                      cResult[47] = projectId;
                                      cResult[48] = tmp4.avatar;
                                      cResult[49] = tmp4.avatarSpoken;
                                      cResult[50] = tmp4.header;
                                      cResult[51] = tmp4.reminderSeparated;
                                      cResult[52] = tmp4.reminderTip;
                                      cResult[53] = tmp4.spoken;
                                      cResult[54] = renderReminder;
                                      tmp43 = renderReminder;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    function xe() {
                      const obj2 = { content, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                      const obj = ConjureMessageActionSheet;
                      obj2.onQueuedAction = conjureQueuedMessage.queuedMessageActionHandler(projectId, message, stateFromStores);
                      let fn;
                      if (null != closure_18) {
                        if (null != onRestoreVersion) {
                          fn = () => projectId(groupStart[20]).confirmRestoreVersion({
                            onConfirm() {
                              return closure_1_11(closure_1_18);
                            }
                          });
                        }
                      }
                      obj2.onRestoreVersion = fn;
                      let fn2;
                      if (null != closure_19) {
                        fn2 = () => projectId(groupStart[21]).requestConjureTrace(closure_1_0, closure_1_19);
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
                    cResult[43] = tmp39;
                    cResult[44] = tmp36;
                    cResult[45] = xe;
                  }
                  let turnRestoreEntryResult = null;
                  if (null != onRestoreVersion) {
                    class Ve {
                      constructor(arg0) {
                        tmp = "error" === projectId.kind;
                        if (!tmp) {
                          str = "terminal_error";
                          tmp = "terminal_error" === projectId.kind;
                        }
                        return tmp;
                      }
                    }
                    turnRestoreEntryResult = obj11.turnRestoreEntry(message);
                  }
                  cResult[34] = message;
                  cResult[35] = onRestoreVersion;
                  cResult[36] = turnRestoreEntryResult;
                  tmp36 = turnRestoreEntryResult;
                  const tmpResult13 = tmp(tmp2[15]);
                }
                const items5 = [tmp4.row, rowGroupStart];
                cResult[29] = tmp4.row;
                cResult[30] = rowGroupStart;
                cResult[31] = items5;
                tmp29 = items5;
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
    const tmpResult15 = tmp(tmp2[12]);
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
  ({ isNewest, reminder, checklistSuperseded } = projectId);
  ({ secretRequestStatus, onToggleChecklist } = projectId);
  const planSuperseded = projectId.planSuperseded;
  const onTogglePlan = projectId.onTogglePlan;
  const replied = projectId.replied;
  const onJumpToReplied = projectId.onJumpToReplied;
  ({ onAskForIdeas: closure_9, onDismissClarification: closure_10, onRestoreVersion } = projectId);
  let trimmed;
  let user_id;
  let stateFromStores;
  let memo5;
  closure_19 = undefined;
  let restoreProposal;
  let clarification;
  c22 = undefined;
  c23 = undefined;
  let index;
  closure_25 = undefined;
  let open;
  ({ first, hostsReminder, checklistExpanded, planVersion, planExpanded, onApprovePlan, onPickIdea, onAnswerClarification, clarificationDismissed } = projectId);
  let tmp = closure_10();
  closure_12 = tmp;
  let items = [message];
  const memo = checklistSuperseded.useMemo(() => {
    const obj2 = { turnActive: null };
    const obj = ConjureTimelineTree;
    obj2.turnActive = !conjureChatTurns.turnSettled(message);
    return obj.buildTimelineTree(message.steps, obj2);
  }, items);
  let items1 = [message];
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
  const items9 = [onTogglePlan];
  stateFromStores = projectId(groupStart[15]).useStateFromStores(items9, () => {
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
  const tmp18 = message(groupStart[17])(projectId, message);
  closure_19 = tmp18;
  const items11 = [trimmed, user_id, projectId, message, stateFromStores, memo5, onRestoreVersion, tmp18];
  const callback3 = checklistSuperseded.useCallback(() => {
    const obj2 = { content: trimmed, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
    const obj = ConjureMessageActionSheet;
    obj2.onQueuedAction = conjureQueuedMessage.queuedMessageActionHandler(projectId, message, stateFromStores);
    let fn;
    if (null != memo5) {
      if (null != onRestoreVersion) {
        fn = () => projectId(groupStart[20]).confirmRestoreVersion({
          onConfirm() {
            return closure_1_11(closure_1_18);
          }
        });
      }
    }
    obj2.onRestoreVersion = fn;
    let fn2;
    if (null != closure_19) {
      fn2 = () => projectId(groupStart[21]).requestConjureTrace(closure_1_0, closure_1_19);
    }
    obj2.onViewTrace = fn2;
    return obj.showConjureMessageActions(obj2);
  }, items11);
  if ("" === trimmed) {
    if (null == user_id) {
      let tmp22 = null;
      if (hostsReminder) {
        let obj3 = {
          style: tmp.reminderSlot,
          reminder,
          renderReminder(arg0) {
                  if ("outdated" === arg0) {
                    const obj2 = { style: closure_12.reminderTip, children: null };
                    const obj3 = { style: closure_12.spoken, children: null };
                    const obj4 = { projectId, notice: "outdated" };
                    obj3.children = React5(ConjurePublishNoticeLineDefault, obj4);
                    obj2.children = React5(hasOwnProperty, obj3);
                    return React5(hasOwnProperty, obj2);
                  } else if ("ideas" === arg0) {
                    const obj = { style: closure_12.reminderSeparated, children: null };
                    const obj5 = { style: closure_12.spoken, onAsk, attribution: null };
                    const obj6 = { children: null };
                    const obj7 = { style: null, children: null };
                    const items = [, ];
                    ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                    obj7.style = items;
                    obj7.children = React5(ConjureMessageAuthor.ConjureAvatar, {});
                    const items1 = [React5(hasOwnProperty, obj7), ];
                    const obj8 = { style: closure_12.header, children: React5(ConjureMessageAuthor.ConjureHeader, {}) };
                    items1[1] = React5(hasOwnProperty, obj8);
                    obj6.children = items1;
                    obj5.attribution = options(closure_2_8, obj6);
                    obj.children = React5(ConjureIdeasOfferDefault, obj5);
                    return React5(hasOwnProperty, obj);
                  }
                }
        };
        tmp22 = replied(tmp17(tmp14[25]), obj3);
      }
      if ("user" === message.role) {
        if ("" === trimmed) {
          if (null == memo4) {
            let tmp86Result2 = null;
          }
          return tmp86Result2;
        }
        let obj4 = { style: items8, onLongPress: tmp21, accessible: false, children: null };
        let tmp88 = null;
        if (groupStart) {
          let obj5 = { style: tmp.avatar, children: null };
          let obj6 = { userId: message.user_id };
          obj5.children = replied(tmp13(tmp14[24]).ConjureUserAvatar, obj6);
          tmp88 = replied(planSuperseded, obj5);
        }
        const items12 = [tmp88, , , ];
        let tmp91 = null;
        if (groupStart) {
          let obj7 = { style: tmp.header, children: null };
          ({ user_id: obj52.userId, created_at: obj52.at } = message);
          obj7.children = replied(tmp13(tmp14[24]).ConjureUserHeader, { userId: null, at: null });
          tmp91 = replied(planSuperseded, obj7);
          let obj8 = { userId: null, at: null };
        }
        items12[1] = tmp91;
        if (tmp20) {
          let combined;
          if (!groupStart) {
            const intl3 = tmp13(tmp14[27]).intl;
            const _HermesInternal = HermesInternal;
            combined = "" + intl3.string(tmp13(tmp14[27]).t.KD6OJJ) + ": " + trimmed;
          }
          const obj9 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: null };
          let tmp97 = null;
          if (null != memo4) {
            const obj10 = { label: memo4.label, variant: "text-md/medium" };
            tmp97 = replied(tmp17(tmp14[28]), obj10);
          }
          const items13 = [tmp97, , ];
          let str6 = null;
          if (null != memo4) {
            str6 = null;
            if (tmp20) {
              str6 = " ";
            }
          }
          items13[1] = str6;
          items13[2] = trimmed;
          obj9.children = items13;
          let tmp86Result = onAsk(tmp13(tmp14[26]).Text, obj9);
        } else {
          tmp86Result = null;
        }
        items12[2] = tmp86Result;
        let tmp99 = null;
        if (null != attachments) {
          const obj11 = { projectId, attachments };
          tmp99 = replied(tmp17(tmp14[29]), obj11);
        }
        items12[3] = tmp99;
        obj4.children = items12;
        tmp86Result2 = onAsk(onToggleChecklist, obj4);
      } else if ("context_boundary" === message.kind) {
        let tmp82 = null;
        if (null != message.contextSwitch) {
          const obj12 = { style: tmp.boundaryRow, children: null };
          const obj13 = { projectId, contextSwitch: message.contextSwitch };
          obj12.children = replied(tmp17(tmp14[30]), obj13);
          tmp82 = replied(planSuperseded, obj12);
        }
        return tmp82;
      } else {
        if ("project_event" === message.kind) {
          if (null != message.projectEvent) {
            const obj14 = { style: items8, children: null };
            const obj15 = { projectId, event: message.projectEvent };
            obj14.children = replied(tmp17(tmp14[31]), obj15);
            return replied(planSuperseded, obj14);
          }
        }
        if ("publish_notice" === message.kind) {
          if (null != message.publishNotice) {
            const obj16 = { style: items8, children: null };
            const obj17 = { projectId, notice: message.publishNotice };
            const items14 = [replied(tmp17(tmp14[22]), obj17), tmp22];
            obj16.children = items14;
            return onAsk(planSuperseded, obj16);
          }
        }
        if (true === message.interrupted) {
          const obj18 = { style: items8, children: null };
          const obj19 = { style: tmp.activityBox, children: null };
          const obj20 = { line: null, live: false, settled: true, inGutter: true, glyph: null };
          const intl2 = tmp13(tmp14[27]).intl;
          obj20.line = intl2.string(tmp17(tmp14[32]).oOmBdX);
          const obj21 = { size: "refresh_sm", color: tmp17(tmp14[8]).colors.TEXT_MUTED };
          obj20.glyph = replied(tmp13(tmp14[33]).StopIcon, obj21);
          obj19.children = replied(tmp17(tmp14[5]), obj20);
          const items15 = [replied(planSuperseded, obj19), tmp22];
          obj18.children = items15;
          return onAsk(planSuperseded, obj18);
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
          const turnSettledResult = tmp13(tmp14[11]).turnSettled(message);
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
          let tmp27 = null;
          if (turnSettledResult) {
            let publishCta = message.publishCta;
            if (publishCta == null) {
              publishCta = null;
            }
            tmp27 = publishCta;
          }
          let tmp29 = null;
          if (turnSettledResult) {
            let secretRequest = message.secretRequest;
            if (secretRequest == null) {
              secretRequest = null;
            }
            tmp29 = secretRequest;
          }
          if ("open" === secretRequestStatus) {
            const tmp13Result8 = tmp13(tmp14[34]);
            const tmp31 = tmp13(tmp14[34]).activeAwaitingUser(message, isNewest);
            const activeAwaitingUserResult = tmp13(tmp14[34]).activeAwaitingUser(message, isNewest);
          }
          let tmp33 = null;
          if (turnSettledResult) {
            let settingsRequest = message.settingsRequest;
            if (settingsRequest == null) {
              settingsRequest = null;
            }
            tmp33 = settingsRequest;
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
          let items20 = memo2;
          if (memo2 == null) {
            let todos = null;
            if (null != message.todos) {
              todos = null;
              if (message.todos.length > 0) {
                todos = message.todos;
              }
            }
            items20 = todos;
          }
          if (null == items20) {
            if (null != message.provisionalTodo) {
              if ("" !== message.provisionalTodo) {
                const provisionalTodo = message.provisionalTodo;
              }
            }
          }
          const tmp13Result = tmp13(tmp14[11]);
          const obj22 = { steps: message.steps, content: trimmed, hasProposal: null != proposal, hasLiveClarification: null != clarification, hasAttachments: null != attachments };
          const turnPresentation = tmp13(tmp14[35]).resolveTurnPresentation(obj22);
          ({ showsClosingMessage, replyKey: c22 } = turnPresentation);
          let tmp39 = memo.steps.length > 0;
          if (!tmp39) {
            tmp39 = memo.tasks.length > 0;
          }
          if (!tmp39) {
            if (0 === turnPresentation.streamed.length) {
              if ("" === trimmed) {
                if (null == proposal) {
                  if (null == found) {
                    if (null == ideas) {
                      if (null == items20) {
                        if (null == provisionalTodo) {
                          if (null == tmp29) {
                            if (null == tmp33) {
                              if (null == attachments) {
                                if (null == clarification) {
                                  if (null == restoreProposal) {
                                    if (null == tmp27) {
                                      if (null == reminder) {
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
          const tmp13Result9 = tmp13(tmp14[35]);
          const turnLeadsWithStretchResult = tmp13(tmp14[35]).turnLeadsWithStretch(tmp39, turnPresentation);
          c23 = turnLeadsWithStretchResult;
          const found1 = memo1.filter((hasWork) => hasWork.hasWork);
          const atResult = found1.at(-1);
          index = undefined;
          if (atResult != null) {
            index = atResult.index;
          }
          const tmp13Result10 = tmp13(tmp14[35]);
          const tmp43 = !tmp13(tmp14[11]).turnSettled(message);
          closure_25 = tmp43;
          const tmp13Result11 = tmp13(tmp14[11]);
          const obj23 = { turnActive: tmp43 };
          open = tmp13(tmp14[12]).turnLifecycle(memo1, obj23).open;
          let avatarSpokenReplying = groupStart;
          if (groupStart) {
            avatarSpokenReplying = null != replied;
          }
          let tmp47Result = null;
          if (avatarSpokenReplying) {
            const obj24 = { replied, onJump: null };
            let tmp49;
            if (null != onJumpToReplied) {
              tmp49 = callback2;
            }
            obj24.onJump = tmp49;
            tmp47Result = replied(tmp17(tmp14[7]), obj24);
            const tmp17Result5 = tmp17(tmp14[7]);
          }
          const items16 = [tmp47Result, , ];
          const items17 = [, , ];
          ({ avatar: arr16[0], avatarSpoken: arr16[1] } = tmp);
          if (avatarSpokenReplying) {
            avatarSpokenReplying = tmp.avatarSpokenReplying;
          }
          const obj25 = { children: null };
          const obj26 = { style: null, children: null };
          items17[2] = avatarSpokenReplying;
          obj26.style = items17;
          obj26.children = replied(tmp13(tmp14[24]).ConjureAvatar, {});
          items16[1] = replied(planSuperseded, obj26);
          const obj27 = { style: tmp.header, children: null };
          const obj28 = { at: message.created_at };
          obj27.children = replied(tmp13(tmp14[24]).ConjureHeader, obj28);
          items16[2] = replied(planSuperseded, obj27);
          obj25.children = items16;
          const tmp44Result = onAsk(onJumpToReplied, obj25);
          const obj29 = { style: items8, onLongPress: tmp21, accessible: false, children: null };
          let tmp50Result = null;
          if (turnLeadsWithStretchResult) {
            tmp50Result = null;
            if (groupStart) {
              const obj30 = { style: tmp.spoken, children: tmp44Result };
              tmp50Result = tmp50(tmp51, obj30);
            }
          }
          const items18 = [
            tmp50Result,
            memo1.map((prose, index) => {
                      let tmp19Result = null;
                      if (null != prose.prose) {
                        tmp19Result = null;
                        if (prose.prose.key !== c22) {
                          const obj3 = { style: closure_12.spoken, children: null };
                          const obj4 = { source: prose.prose.content, streaming: null };
                          let tmp5 = closure_25;
                          if (closure_25) {
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
                        let tmp16 = c23;
                        if (c23) {
                          tmp16 = groupStart;
                        }
                        if (tmp16) {
                          tmp16 = 0 === index;
                        }
                        if (tmp16) {
                          let tmp17 = null == prose.prose;
                          if (!tmp17) {
                            tmp17 = prose.prose.key === c22;
                          }
                          tmp16 = tmp17;
                        }
                        obj.besideAvatar = tmp16;
                        tmp7Result = React5(tmp10, obj);
                      }
                      children[1] = tmp7Result;
                      return options(noop.Fragment, { children }, prose.key);
                    }),
  ,
  ,

          ];
          if (!showsClosingMessage) {
            if (null == proposal) {
              if (null == clarification) {
                if (null == restoreProposal) {
                  if (null == ideas) {
                    if (null == tmp29) {
                      if (null == tmp33) {
                        if (null == attachments) {
                          if (null == found) {
                            if (null == items20) {
                              if (null == provisionalTodo) {
                                let tmp44Result2 = null;
                              }
                              items18[2] = tmp44Result2;
                              let tmp50Result14 = null;
                              if (null != tmp31) {
                                const obj31 = { style: tmp.spoken, children: null };
                                const obj32 = { variant: "text-xs/normal", color: "text-muted", children: null };
                                const intl = tmp13(tmp14[27]).intl;
                                obj32.children = intl.string(tmp17(tmp14[32]).YR8A2v);
                                obj31.children = tmp50(tmp13(tmp14[26]).Text, obj32);
                                tmp50Result14 = tmp50(tmp51, obj31);
                              }
                              items18[3] = tmp50Result14;
                              items18[4] = tmp22;
                              obj29.children = items18;
                              return onAsk(onToggleChecklist, obj29);
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
          let tmp56 = null;
          if (groupStart) {
            tmp56 = null;
            if (!turnLeadsWithStretchResult) {
              tmp56 = tmp44Result;
            }
          }
          const items19 = [tmp56, , , , , , , , , , , , ];
          let tmp50Result15 = null;
          if (showsClosingMessage) {
            const obj34 = { source: turnPresentation.closingContent };
            tmp50Result15 = tmp50(tmp17(tmp14[36]), obj34);
          }
          items19[1] = tmp50Result15;
          let tmp50Result16 = null;
          if ("side_reply" === message.kind) {
            const obj35 = { variant: "text-xs/normal", color: "text-muted", children: tmp13(tmp14[38]).midTurnCaption(message.acknowledges) };
            tmp50Result16 = tmp50(tmp13(tmp14[26]).Text, obj35);
            const tmp13Result13 = tmp13(tmp14[38]);
          }
          items19[2] = tmp50Result16;
          let tmp50Result17 = null;
          if (null != attachments) {
            const obj36 = { projectId, attachments };
            tmp50Result17 = tmp50(tmp17(tmp14[29]), obj36);
          }
          items19[3] = tmp50Result17;
          if (null != items20) {
            const tmp17Result6 = tmp17(tmp14[39]);
            if (items20 == null) {
              items20 = [];
            }
            const obj37 = { children: null };
            const obj38 = { todos: items20, provisional: provisionalTodo, agents: memo3, live: null, superseded: null, expanded: null, onToggleExpanded: null };
            const tmp17Result7 = tmp17(tmp14[40]);
            obj38.live = tmp13(tmp14[41]).checklistLive(message);
            obj38.superseded = checklistSuperseded;
            obj38.expanded = checklistExpanded;
            obj38.onToggleExpanded = callback;
            obj37.children = tmp50(tmp17Result7, obj38);
            let tmp50Result18 = tmp50(tmp17Result6, obj37);
            const tmp13Result14 = tmp13(tmp14[41]);
          } else {
            tmp50Result18 = null;
          }
          items19[4] = tmp50Result18;
          let tmp50Result19 = null;
          if (null != proposal) {
            const obj39 = { projectId, proposal, version: planVersion, superseded: planSuperseded, expanded: planExpanded, onToggleExpanded: callback1, onApprove: onApprovePlan };
            tmp50Result19 = tmp50(tmp17(tmp14[42]), obj39);
          }
          items19[5] = tmp50Result19;
          let tmp50Result20 = null;
          if (null != clarification) {
            const obj40 = {
              projectId,
              clarification,
              onSubmit: onAnswerClarification,
              onDismiss() {
                          return closure_1_10(clarification.id);
                        }
            };
            tmp50Result20 = tmp50(tmp17(tmp14[43]), obj40);
          }
          items19[6] = tmp50Result20;
          let tmp50Result21 = null;
          if (null != tmp29) {
            const obj41 = { projectId, cardId: message.render_id, request: tmp29, status: secretRequestStatus, awaiting: tmp31 };
            tmp50Result21 = tmp50(tmp17(tmp14[44]), obj41);
          }
          items19[7] = tmp50Result21;
          let tmp50Result22 = null;
          if (null != tmp33) {
            const obj42 = { projectId, request: tmp33 };
            tmp50Result22 = tmp50(tmp17(tmp14[45]), obj42);
          }
          items19[8] = tmp50Result22;
          let tmp50Result23 = null;
          if (null != tmp27) {
            const obj43 = { projectId };
            tmp50Result23 = tmp50(tmp17(tmp14[46]), obj43);
          }
          items19[9] = tmp50Result23;
          let tmp50Result24 = null;
          if (null != ideas) {
            const obj44 = { ideas, onPick: onPickIdea };
            tmp50Result24 = tmp50(tmp17(tmp14[47]), obj44);
          }
          items19[10] = tmp50Result24;
          let tmp50Result25 = null;
          if (null != restoreProposal) {
            const obj45 = { proposal: restoreProposal, onRestore: null };
            let fn;
            if (isNewest) {
              if (null != onRestoreVersion) {
                fn = () => ConjureVersionRestoreConfirm.confirmRestoreVersion({
                  onConfirm() {
                    return onRestoreVersion(projectId(groupStart[16]).proposalRestoreEntry(restoreProposal));
                  }
                });
              }
            }
            obj45.onRestore = fn;
            tmp50Result25 = tmp50(tmp17(tmp14[48]), obj45);
            const tmp17Result8 = tmp17(tmp14[48]);
          }
          items19[11] = tmp50Result25;
          let tmp50Result26 = null;
          if (null != found) {
            tmp50Result26 = null;
            if ("message" in found) {
              const obj46 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
              tmp50Result26 = tmp50(tmp13(tmp14[26]).Text, obj46);
            }
          }
          items19[12] = tmp50Result26;
          obj33.children = items19;
          tmp44Result2 = onAsk(tmp51, obj33);
          const tmp13Result12 = tmp13(tmp14[12]);
        }
      }
    }
  }
  let obj2 = projectId(groupStart[15]);
}));