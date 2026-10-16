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
const createStyles = fn(5154);
let obj = { row: { position: "relative", paddingLeft: fn(12080).MESSAGE_CONTENT_INSET, paddingRight: fn(12080).MESSAGE_EDGE_INSET, paddingVertical: fn(12090).ROW_PAD, gap: fn(12090).BLOCK_GAP }, rowGroupStart: null, boundaryRow: null, avatar: null, spoken: null, avatarSpoken: null, avatarSpokenReplying: null, header: null, activityBox: null };
let obj3 = { position: "relative", paddingLeft: fn(12080).MESSAGE_CONTENT_INSET, paddingRight: fn(12080).MESSAGE_EDGE_INSET, paddingVertical: fn(12090).ROW_PAD, gap: fn(12090).BLOCK_GAP };
obj.rowGroupStart = { marginTop: fn(12090).GROUP_GAP };
let obj4 = { marginTop: fn(12090).GROUP_GAP };
obj.boundaryRow = { paddingHorizontal: fn(12080).MESSAGE_EDGE_INSET, paddingVertical: fn(12090).ROW_PAD };
const rect = { position: "absolute", left: fn(12080).MESSAGE_EDGE_INSET, top: fn(12090).ROW_PAD };
obj.avatar = rect;
let obj5 = { paddingHorizontal: fn(12080).MESSAGE_EDGE_INSET, paddingVertical: fn(12090).ROW_PAD };
obj.spoken = { position: "relative", gap: fn(12090).BLOCK_GAP };
const rect1 = { left: fn(12080).MESSAGE_EDGE_INSET - fn(12080).MESSAGE_CONTENT_INSET, top: 0 };
obj.avatarSpoken = rect1;
let obj6 = { position: "relative", gap: fn(12090).BLOCK_GAP };
obj.avatarSpokenReplying = { top: fn(12091).REPLY_PREVIEW_HEIGHT + fn(12090).BLOCK_GAP };
let obj7 = { top: fn(12091).REPLY_PREVIEW_HEIGHT + fn(12090).BLOCK_GAP };
obj.header = { marginBottom: -nativeDefault.space.PX_4 };
let obj8 = { marginBottom: -nativeDefault.space.PX_4 };
obj.activityBox = { marginLeft: -fn(12090).RAIL_INDENT };
let closure_10 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj9 = { marginLeft: -fn(12090).RAIL_INDENT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageRow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureMessageRow(projectId) {
  const cResult = projectId(groupStart[10]).c(230);
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
                content = tmp26;
                const conjureMentionNames = tmp(tmp2[15]).useConjureMentionNames(tmp26);
                if (cResult[29] === message.attachments) {
                  if (cResult[30] === message.content) {
                    if (cResult[31] === message.role) {
                      let rowGroupStart = groupStart;
                      if (groupStart) {
                        rowGroupStart = !first;
                      }
                      if (rowGroupStart) {
                        rowGroupStart = tmp4.rowGroupStart;
                      }
                      if (cResult[33] === tmp4.row) {
                        let user_id;
                        if ("user" === message.role) {
                          user_id = message.user_id;
                        }
                        const _Symbol = Symbol;
                        if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                          const items = [onTogglePlan];
                          class Se {
                            constructor() {
                              currentUser = onTogglePlan.getCurrentUser();
                              id = undefined;
                              if (currentUser != null) {
                                id = currentUser.id;
                              }
                              return id;
                            }
                          }
                          cResult[36] = items;
                          cResult[37] = Se;
                          let tmp36 = Se;
                          let tmp35 = items;
                        } else {
                          tmp35 = cResult[36];
                          tmp36 = cResult[37];
                        }
                        const stateFromStores = tmp(tmp2[17]).useStateFromStores(tmp35, tmp36);
                        if (cResult[38] === message) {
                          if (cResult[39] === onRestoreVersion) {
                            let tmp39 = cResult[40];
                          }
                          closure_18 = tmp39;
                          class Se {
                            constructor() {
                              currentUser = onTogglePlan.getCurrentUser();
                              id = undefined;
                              if (currentUser != null) {
                                id = currentUser.id;
                              }
                              return id;
                            }
                          }
                          closure_19 = tmp42;
                          if (cResult[41] === user_id) {
                            if (cResult[42] === tmp26) {
                              if (cResult[43] === stateFromStores) {
                                if (cResult[44] === message) {
                                  if (cResult[45] === onRestoreVersion) {
                                    if (cResult[46] === projectId) {
                                      if (cResult[47] === tmp42) {
                                        class Se {
                                          constructor() {
                                            currentUser = onTogglePlan.getCurrentUser();
                                            id = undefined;
                                            if (currentUser != null) {
                                              id = currentUser.id;
                                            }
                                            return id;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          class Ee {
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
                          cResult[47] = tmp42;
                          cResult[48] = tmp39;
                          cResult[49] = Ee;
                        }
                        let turnRestoreEntryResult = null;
                        if (null != onRestoreVersion) {
                          turnRestoreEntryResult = tmp(tmp2[18]).turnRestoreEntry(message);
                          const tmpResult16 = tmp(tmp2[18]);
                        }
                        cResult[38] = message;
                        cResult[39] = onRestoreVersion;
                        cResult[40] = turnRestoreEntryResult;
                        tmp39 = turnRestoreEntryResult;
                        const tmpResult15 = tmp(tmp2[17]);
                      }
                      const items1 = [tmp4.row, rowGroupStart];
                      cResult[33] = tmp4.row;
                      cResult[34] = rowGroupStart;
                      cResult[35] = items1;
                    }
                  }
                }
                if ("user" === message.role) {
                  let attachments = tmp(tmp2[16]).withoutInlineFileMentions(message.attachments, message.content);
                  const tmpResult17 = tmp(tmp2[16]);
                } else {
                  attachments = message.attachments;
                }
                cResult[29] = message.attachments;
                cResult[30] = message.content;
                cResult[31] = message.role;
                cResult[32] = attachments;
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
              cResult[24] = oe;
            }
          }
          function te() {
            return onTogglePlan(message.render_id, planSuperseded);
          }
          cResult[18] = message.render_id;
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
    let obj2 = { turnActive: !tmp10 };
    const turnSegmentsResult = obj5.turnSegments(message.steps, obj2);
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
            let tmp86Result2 = null;
          }
          return tmp86Result2;
        }
        let obj3 = { style: items8, onLongPress: tmp22, accessible: false, children: null };
        let tmp88 = null;
        if (groupStart) {
          let obj4 = { style: tmp.avatar, children: null };
          const obj5 = { userId: message.user_id };
          obj4.children = replied(tmp11(tmp12[24]).ConjureUserAvatar, obj5);
          tmp88 = replied(planSuperseded, obj4);
        }
        const items12 = [tmp88, , , ];
        let tmp91 = null;
        if (groupStart) {
          const obj6 = { style: tmp.header, children: null };
          ({ user_id: obj54.userId, created_at: obj54.at } = message);
          obj6.children = replied(tmp11(tmp12[24]).ConjureUserHeader, { userId: null, at: null });
          tmp91 = replied(planSuperseded, obj6);
          const obj7 = { userId: null, at: null };
        }
        items12[1] = tmp91;
        if (tmp21) {
          let combined;
          if (!groupStart) {
            const intl3 = tmp11(tmp12[26]).intl;
            const _HermesInternal = HermesInternal;
            combined = "" + intl3.string(tmp11(tmp12[26]).t.KD6OJJ) + ": " + conjureMentionNames;
          }
          const obj8 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: null };
          let tmp97 = null;
          if (null != memo4) {
            const obj9 = { label: memo4.label, variant: "text-md/medium" };
            tmp97 = replied(tmp18(tmp12[27]), obj9);
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
          items13[2] = replied(tmp18(tmp12[28]), obj10);
          obj8.children = items13;
          let tmp86Result = tmp86(tmp11(tmp12[25]).Text, obj8);
        } else {
          tmp86Result = null;
        }
        items12[2] = tmp86Result;
        let tmp100 = null;
        if (null != tmp14) {
          const obj11 = { projectId, attachments: tmp14 };
          tmp100 = replied(tmp18(tmp12[29]), obj11);
        }
        items12[3] = tmp100;
        obj3.children = items12;
        tmp86Result2 = tmp86(onToggleChecklist, obj3);
      } else if ("context_boundary" === message.kind) {
        let tmp82 = null;
        if (null != message.contextSwitch) {
          const obj12 = { style: tmp.boundaryRow, children: null };
          const obj13 = { projectId, contextSwitch: message.contextSwitch };
          obj12.children = replied(tmp18(tmp12[30]), obj13);
          tmp82 = replied(planSuperseded, obj12);
        }
        return tmp82;
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
          const tmp11Result11 = tmp11(tmp12[11]);
          const obj22 = { steps: message.steps, content: trimmed, hasProposal: null != proposal, hasLiveClarification: null != clarification, hasAttachments: null != tmp14 };
          const turnPresentation = tmp11(tmp12[36]).resolveTurnPresentation(obj22);
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
                              if (null == tmp14) {
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
          const tmp11Result13 = tmp11(tmp12[36]);
          const turnLeadsWithStretchResult = tmp11(tmp12[36]).turnLeadsWithStretch(tmp40, turnPresentation);
          c24 = turnLeadsWithStretchResult;
          const found1 = memo1.filter((hasWork) => hasWork.hasWork);
          const atResult = found1.at(-1);
          index = undefined;
          if (atResult != null) {
            index = atResult.index;
          }
          const tmp11Result14 = tmp11(tmp12[36]);
          const tmp44 = !tmp11(tmp12[11]).turnSettled(message);
          closure_26 = tmp44;
          const tmp11Result15 = tmp11(tmp12[11]);
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
                          if (null == tmp14) {
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
                                  const intl = tmp11(tmp12[26]).intl;
                                  obj32.children = intl.string(tmp18(tmp12[33]).YR8A2v);
                                  obj31.children = tmp51(tmp11(tmp12[25]).Text, obj32);
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
            tmp51Result16 = tmp51(tmp18(tmp12[37]), obj34);
          }
          items17[1] = tmp51Result16;
          let tmp51Result17 = null;
          if ("side_reply" === message.kind) {
            const obj35 = { variant: "text-xs/normal", color: "text-muted", children: tmp11(tmp12[39]).midTurnCaption(message.acknowledges) };
            tmp51Result17 = tmp51(tmp11(tmp12[25]).Text, obj35);
            const tmp11Result17 = tmp11(tmp12[39]);
          }
          items17[2] = tmp51Result17;
          let tmp51Result18 = null;
          if (null != tmp14) {
            const obj36 = { projectId, attachments: tmp14 };
            tmp51Result18 = tmp51(tmp18(tmp12[29]), obj36);
          }
          items17[3] = tmp51Result18;
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
            obj37.children = tmp51(tmp18Result7, obj38);
            let tmp51Result19 = tmp51(tmp18Result6, obj37);
            const tmp11Result18 = tmp11(tmp12[42]);
          } else {
            tmp51Result19 = null;
          }
          items17[4] = tmp51Result19;
          let tmp51Result20 = null;
          if (null != proposal) {
            const obj39 = { projectId, proposal, version: planVersion, superseded: planSuperseded, expanded: planExpanded, onToggleExpanded: callback1, onApprove: onApprovePlan };
            tmp51Result20 = tmp51(tmp18(tmp12[43]), obj39);
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
            tmp51Result21 = tmp51(tmp18(tmp12[44]), obj40);
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
            tmp51Result22 = tmp51(tmp18(tmp12[45]), obj41);
          }
          items17[7] = tmp51Result22;
          let tmp51Result23 = null;
          if (null != tmp28) {
            const obj42 = { projectId, cardId: message.render_id, request: tmp28, status: secretRequestStatus, awaiting: tmp30 };
            tmp51Result23 = tmp51(tmp18(tmp12[46]), obj42);
          }
          items17[8] = tmp51Result23;
          let tmp51Result24 = null;
          if (null != tmp32) {
            const obj43 = { projectId, request: tmp32 };
            tmp51Result24 = tmp51(tmp18(tmp12[47]), obj43);
          }
          items17[9] = tmp51Result24;
          let tmp51Result25 = null;
          if (null != tmp26) {
            const obj44 = { projectId };
            tmp51Result25 = tmp51(tmp18(tmp12[48]), obj44);
          }
          items17[10] = tmp51Result25;
          let tmp51Result26 = null;
          if (null != ideas) {
            const obj45 = { ideas, onPick: onPickIdea };
            tmp51Result26 = tmp51(tmp18(tmp12[49]), obj45);
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
                    return onRestoreVersion(projectId(groupStart[18]).proposalRestoreEntry(restoreProposal));
                  }
                });
              }
            }
            obj46.onRestore = fn;
            tmp51Result27 = tmp51(tmp18(tmp12[50]), obj46);
            const tmp18Result8 = tmp18(tmp12[50]);
          }
          items17[12] = tmp51Result27;
          let tmp51Result28 = null;
          if (null != found) {
            tmp51Result28 = null;
            if ("message" in found) {
              const obj47 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
              tmp51Result28 = tmp51(tmp11(tmp12[25]).Text, obj47);
            }
          }
          items17[13] = tmp51Result28;
          obj33.children = items17;
          tmp45Result2 = tmp45(tmp52, obj33);
          const tmp11Result16 = tmp11(tmp12[12]);
        }
      }
    }
  }
  const tmp11Result10 = projectId(groupStart[17]);
}));