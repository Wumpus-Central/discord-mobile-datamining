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
const createStyles = fn(5096);
let obj = {
  row: {
    position: "relative",
    paddingLeft: fn(11832).MESSAGE_CONTENT_INSET,
    paddingRight: fn(11832).MESSAGE_EDGE_INSET,
    paddingVertical: fn(11842).ROW_PAD,
    gap: fn(11842).BLOCK_GAP,
  },
  rowGroupStart: null,
  boundaryRow: null,
  avatar: null,
  spoken: null,
  avatarSpoken: null,
  avatarSpokenReplying: null,
  header: null,
  activityBox: null,
};
let obj3 = {
  position: "relative",
  paddingLeft: fn(11832).MESSAGE_CONTENT_INSET,
  paddingRight: fn(11832).MESSAGE_EDGE_INSET,
  paddingVertical: fn(11842).ROW_PAD,
  gap: fn(11842).BLOCK_GAP,
};
obj.rowGroupStart = { marginTop: fn(11842).GROUP_GAP };
let obj4 = { marginTop: fn(11842).GROUP_GAP };
obj.boundaryRow = { paddingHorizontal: fn(11832).MESSAGE_EDGE_INSET, paddingVertical: fn(11842).ROW_PAD };
const rect = { position: "absolute", left: fn(11832).MESSAGE_EDGE_INSET, top: fn(11842).ROW_PAD };
obj.avatar = rect;
let obj5 = { paddingHorizontal: fn(11832).MESSAGE_EDGE_INSET, paddingVertical: fn(11842).ROW_PAD };
obj.spoken = { position: "relative", gap: fn(11842).BLOCK_GAP };
const rect1 = { left: fn(11832).MESSAGE_EDGE_INSET - fn(11832).MESSAGE_CONTENT_INSET, top: 0 };
obj.avatarSpoken = rect1;
let obj6 = { position: "relative", gap: fn(11842).BLOCK_GAP };
obj.avatarSpokenReplying = { top: fn(11843).REPLY_PREVIEW_HEIGHT + fn(11842).BLOCK_GAP };
let obj7 = { top: fn(11843).REPLY_PREVIEW_HEIGHT + fn(11842).BLOCK_GAP };
obj.header = { marginBottom: -nativeDefault.space.PX_4 };
let obj8 = { marginBottom: -nativeDefault.space.PX_4 };
obj.activityBox = { marginLeft: -fn(11842).RAIL_INDENT };
let closure_10 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj9 = { marginLeft: -fn(11842).RAIL_INDENT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageRow.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ConjureMessageRow(projectId) {
        const cResult = projectId(groupStart[10]).c(221);
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
        const onRestoreVersion = projectId.onRestoreVersion;
        ({ first, clarificationDismissed } = projectId);
        const tmp4 = onRestoreVersion();
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
          closure_12 = tmp8;
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
              const tmpResult10 = tmp(tmp2[12]);
              cResult[10] = message.steps;
              class Q {
                constructor() {
                  return onToggleChecklist(message.render_id, checklistSuperseded);
                }
              }
              const latestTodosResult = tmp(tmp2[12]).latestTodos(message.steps);
            }
            if (cResult[12] !== tmp8.tasks) {
              const tmpResult11 = tmp(tmp2[13]);
              cResult[12] = tmp8.tasks;
              class Q {
                constructor() {
                  return onToggleChecklist(message.render_id, checklistSuperseded);
                }
              }
              const runningTodoAgentsResult = tmp(tmp2[13]).runningTodoAgents(tmp8.tasks);
            }
            if (cResult[14] === checklistSuperseded) {
              if (cResult[15] === message.render_id) {
                if (cResult[18] === message.render_id) {
                  if (cResult[19] === onTogglePlan) {
                    if (cResult[22] === onJumpToReplied) {
                      if (cResult[25] !== message.content) {
                        const result = tmp(tmp2[14]).parseConjureDesignRemark(message.content);
                        cResult[25] = message.content;
                        class Q {
                          constructor() {
                            return onToggleChecklist(message.render_id, checklistSuperseded);
                          }
                        }
                        let tmp22 = result;
                        const tmpResult12 = tmp(tmp2[14]);
                      } else {
                        tmp22 = cResult[26];
                      }
                      let body;
                      if (tmp22 != null) {
                        body = tmp22.body;
                      }
                      class Q {
                        constructor() {
                          return onToggleChecklist(message.render_id, checklistSuperseded);
                        }
                      }
                      if (cResult[27] !== body) {
                        const trimmed = body.trim();
                        cResult[27] = body;
                        cResult[28] = trimmed;
                        class Q {
                          constructor() {
                            return onToggleChecklist(message.render_id, checklistSuperseded);
                          }
                        }
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
                        let user_id;
                        if ("user" === message.role) {
                          user_id = message.user_id;
                        }
                        class Q {
                          constructor() {
                            return onToggleChecklist(message.render_id, checklistSuperseded);
                          }
                        }
                        const _Symbol = Symbol;
                        if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                          const items = [onTogglePlan];
                          function ve() {
                            const currentUser = onTogglePlan.getCurrentUser();
                            id = undefined;
                            if (currentUser != null) {
                              id = currentUser.id;
                            }
                            return id;
                          }
                          class Q {
                            constructor() {
                              return onToggleChecklist(message.render_id, checklistSuperseded);
                            }
                          }
                          cResult[33] = ve;
                          let tmp32 = ve;
                          let tmp31 = items;
                        } else {
                          tmp31 = cResult[32];
                          tmp32 = cResult[33];
                        }
                        const stateFromStores = tmp(tmp2[15]).useStateFromStores(tmp31, tmp32);
                        if (cResult[34] === message) {
                          if (cResult[35] === onRestoreVersion) {
                            let tmp35 = cResult[36];
                          }
                          closure_17 = tmp35;
                          const tmp38 = message(tmp2[17])(projectId, message);
                          closure_18 = tmp38;
                          class Q {
                            constructor() {
                              return onToggleChecklist(message.render_id, checklistSuperseded);
                            }
                          }
                          function ye() {
                            const obj2 = {
                              content,
                              userId: user_id,
                              onQueuedAction: null,
                              onRestoreVersion: null,
                              onViewTrace: null,
                            };
                            const obj = ConjureMessageActionSheet;
                            obj2.onQueuedAction = conjureQueuedMessage.queuedMessageActionHandler(
                              projectId,
                              message,
                              stateFromStores,
                            );
                            let fn;
                            if (null != closure_17) {
                              if (null != onRestoreVersion) {
                                fn = () =>
                                  projectId(groupStart[20]).confirmRestoreVersion({
                                    onConfirm() {
                                      return closure_1_10(closure_1_17);
                                    },
                                  });
                              }
                            }
                            obj2.onRestoreVersion = fn;
                            let fn2;
                            if (null != closure_18) {
                              fn2 = () => projectId(groupStart[21]).requestConjureTrace(closure_1_0, closure_1_18);
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
                          cResult[43] = tmp38;
                          cResult[44] = tmp35;
                          cResult[45] = ye;
                        }
                        let turnRestoreEntryResult = null;
                        if (null != onRestoreVersion) {
                          turnRestoreEntryResult = tmp(tmp2[16]).turnRestoreEntry(message);
                          const tmpResult14 = tmp(tmp2[16]);
                        }
                        cResult[34] = message;
                        cResult[35] = onRestoreVersion;
                        cResult[36] = turnRestoreEntryResult;
                        tmp35 = turnRestoreEntryResult;
                        const tmpResult13 = tmp(tmp2[15]);
                      }
                      const items1 = [tmp4.row, rowGroupStart];
                      cResult[29] = tmp4.row;
                      cResult[30] = rowGroupStart;
                      cResult[31] = items1;
                    }
                    function ne() {
                      if (null != replied) {
                        if (onJumpToReplied != null) {
                          tmp2(tmp.id);
                        }
                      }
                    }
                    cResult[22] = onJumpToReplied;
                    class Q {
                      constructor() {
                        return onToggleChecklist(message.render_id, checklistSuperseded);
                      }
                    }
                    cResult[23] = replied;
                    cResult[24] = ne;
                  }
                }
                function ee() {
                  return onTogglePlan(message.render_id, planSuperseded);
                }
                cResult[18] = message.render_id;
                class Q {
                  constructor() {
                    return onToggleChecklist(message.render_id, checklistSuperseded);
                  }
                }
                cResult[19] = onTogglePlan;
                cResult[20] = planSuperseded;
                cResult[21] = ee;
              }
            }
            class Q {
              constructor() {
                return onToggleChecklist(message.render_id, checklistSuperseded);
              }
            }
            cResult[14] = checklistSuperseded;
            cResult[15] = message.render_id;
            cResult[16] = onToggleChecklist;
            cResult[17] = Q;
          }
          let obj2 = { turnActive: !tmp10 };
          const turnSegmentsResult = tmp(tmp2[12]).turnSegments(message.steps, obj2);
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
      }
    : function ConjureMessageRow(projectId) {
        projectId = projectId.projectId;
        const message = projectId.message;
        const groupStart = projectId.groupStart;
        ({ isNewest, checklistSuperseded } = projectId);
        ({ secretRequestStatus, onToggleChecklist } = projectId);
        const planSuperseded = projectId.planSuperseded;
        const onTogglePlan = projectId.onTogglePlan;
        const replied = projectId.replied;
        const onJumpToReplied = projectId.onJumpToReplied;
        ({ onDismissClarification: closure_9, onRestoreVersion } = projectId);
        let trimmed;
        let user_id;
        let stateFromStores;
        let memo5;
        closure_18 = undefined;
        let restoreProposal;
        let clarification;
        c21 = undefined;
        c22 = undefined;
        let index;
        closure_24 = undefined;
        let open;
        ({
          first,
          checklistExpanded,
          planVersion,
          planExpanded,
          onApprovePlan,
          onPickIdea,
          onAnswerClarification,
          clarificationDismissed,
        } = projectId);
        let tmp = onRestoreVersion();
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
        const callback = checklistSuperseded.useCallback(
          () => onToggleChecklist(message.render_id, checklistSuperseded),
          items4,
        );
        const items6 = [onJumpToReplied, replied];
        const callback1 = checklistSuperseded.useCallback(
          () => onTogglePlan(message.render_id, planSuperseded),
          items5,
        );
        const items7 = [message.content];
        const callback2 = checklistSuperseded.useCallback(() => {
          if (null != replied) {
            if (onJumpToReplied != null) {
              tmp2(tmp.id);
            }
          }
        }, items6);
        const memo4 = checklistSuperseded.useMemo(
          () => ConjureDesignFeedback.parseConjureDesignRemark(message.content),
          items7,
        );
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
        const items8 = [tmp.row];
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
        closure_18 = tmp18;
        const items11 = [trimmed, user_id, projectId, message, stateFromStores, memo5, onRestoreVersion, tmp18];
        const callback3 = checklistSuperseded.useCallback(() => {
          const obj2 = {
            content: trimmed,
            userId: user_id,
            onQueuedAction: null,
            onRestoreVersion: null,
            onViewTrace: null,
          };
          const obj = ConjureMessageActionSheet;
          obj2.onQueuedAction = conjureQueuedMessage.queuedMessageActionHandler(projectId, message, stateFromStores);
          let fn;
          if (null != memo5) {
            if (null != onRestoreVersion) {
              fn = () =>
                projectId(groupStart[20]).confirmRestoreVersion({
                  onConfirm() {
                    return closure_1_10(closure_1_17);
                  },
                });
            }
          }
          obj2.onRestoreVersion = fn;
          let fn2;
          if (null != closure_18) {
            fn2 = () => projectId(groupStart[21]).requestConjureTrace(closure_1_0, closure_1_18);
          }
          obj2.onViewTrace = fn2;
          return obj.showConjureMessageActions(obj2);
        }, items11);
        if ("" === trimmed) {
          if (null == user_id) {
            if ("user" === message.role) {
              if ("" === trimmed) {
                if (null == memo4) {
                  let tmp82Result2 = null;
                }
                return tmp82Result2;
              }
              let obj3 = { style: items8, onLongPress: tmp21, accessible: false, children: null };
              let tmp84 = null;
              if (groupStart) {
                let obj4 = { style: tmp.avatar, children: null };
                const obj5 = { userId: message.user_id };
                obj4.children = replied(tmp13(tmp14[22]).ConjureUserAvatar, obj5);
                tmp84 = replied(planSuperseded, obj4);
              }
              const items12 = [tmp84, , ,];
              let tmp87 = null;
              if (groupStart) {
                const obj6 = { style: tmp.header, children: null };
                ({ user_id: obj51.userId, created_at: obj51.at } = message);
                obj6.children = replied(tmp13(tmp14[22]).ConjureUserHeader, { userId: null, at: null });
                tmp87 = replied(planSuperseded, obj6);
                const obj7 = { userId: null, at: null };
              }
              items12[1] = tmp87;
              if (tmp20) {
                let combined;
                if (!groupStart) {
                  const intl3 = tmp13(tmp14[24]).intl;
                  const _HermesInternal = HermesInternal;
                  combined = "" + intl3.string(tmp13(tmp14[24]).t.KD6OJJ) + ": " + trimmed;
                }
                const obj8 = {
                  variant: "text-md/normal",
                  color: "text-default",
                  accessibilityLabel: combined,
                  children: null,
                };
                let tmp93 = null;
                if (null != memo4) {
                  const obj9 = { label: memo4.label, variant: "text-md/medium" };
                  tmp93 = replied(tmp17(tmp14[25]), obj9);
                }
                const items13 = [tmp93, ,];
                let str6 = null;
                if (null != memo4) {
                  str6 = null;
                  if (tmp20) {
                    str6 = " ";
                  }
                }
                items13[1] = str6;
                items13[2] = trimmed;
                obj8.children = items13;
                let tmp82Result = tmp82(tmp13(tmp14[23]).Text, obj8);
              } else {
                tmp82Result = null;
              }
              items12[2] = tmp82Result;
              let tmp95 = null;
              if (null != attachments) {
                const obj10 = { projectId, attachments };
                tmp95 = replied(tmp17(tmp14[26]), obj10);
              }
              items12[3] = tmp95;
              obj3.children = items12;
              tmp82Result2 = tmp82(onToggleChecklist, obj3);
            } else if ("context_boundary" === message.kind) {
              let tmp78 = null;
              if (null != message.contextSwitch) {
                const obj11 = { style: tmp.boundaryRow, children: null };
                const obj12 = { projectId, contextSwitch: message.contextSwitch };
                obj11.children = replied(tmp17(tmp14[27]), obj12);
                tmp78 = replied(planSuperseded, obj11);
              }
              return tmp78;
            } else {
              if ("project_event" === message.kind) {
                if (null != message.projectEvent) {
                  const obj13 = { style: items8, children: null };
                  const obj14 = { projectId, event: message.projectEvent };
                  obj13.children = replied(tmp17(tmp14[28]), obj14);
                  return replied(planSuperseded, obj13);
                }
              }
              if ("publish_notice" === message.kind) {
                if (null != message.publishNotice) {
                  const obj15 = { style: items8, children: null };
                  const obj16 = { projectId, notice: message.publishNotice };
                  obj15.children = replied(tmp17(tmp14[29]), obj16);
                  return replied(planSuperseded, obj15);
                }
              }
              if (true === message.interrupted) {
                const obj17 = { style: items8, children: null };
                const obj18 = { style: tmp.activityBox, children: null };
                const obj19 = { line: null, live: false, settled: true, inGutter: true, glyph: null };
                const intl2 = tmp13(tmp14[24]).intl;
                obj19.line = intl2.string(tmp17(tmp14[30]).oOmBdX);
                const obj20 = { size: "refresh_sm", color: tmp17(tmp14[8]).colors.TEXT_MUTED };
                obj19.glyph = replied(tmp13(tmp14[31]).StopIcon, obj20);
                obj18.children = replied(tmp17(tmp14[5]), obj19);
                obj17.children = replied(planSuperseded, obj18);
                return replied(planSuperseded, obj17);
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
                let tmp25 = null;
                if (turnSettledResult) {
                  let publishCta = message.publishCta;
                  if (publishCta == null) {
                    publishCta = null;
                  }
                  tmp25 = publishCta;
                }
                let tmp27 = null;
                if (turnSettledResult) {
                  let secretRequest = message.secretRequest;
                  if (secretRequest == null) {
                    secretRequest = null;
                  }
                  tmp27 = secretRequest;
                }
                if ("open" === secretRequestStatus) {
                  const tmp13Result8 = tmp13(tmp14[32]);
                  const tmp29 = tmp13(tmp14[32]).activeAwaitingUser(message, isNewest);
                  const activeAwaitingUserResult = tmp13(tmp14[32]).activeAwaitingUser(message, isNewest);
                }
                let tmp31 = null;
                if (turnSettledResult) {
                  let settingsRequest = message.settingsRequest;
                  if (settingsRequest == null) {
                    settingsRequest = null;
                  }
                  tmp31 = settingsRequest;
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
                const tmp13Result = tmp13(tmp14[11]);
                const obj21 = {
                  steps: message.steps,
                  content: trimmed,
                  hasProposal: null != proposal,
                  hasLiveClarification: null != clarification,
                  hasAttachments: null != attachments,
                };
                const turnPresentation = tmp13(tmp14[33]).resolveTurnPresentation(obj21);
                ({ showsClosingMessage, replyKey: c21 } = turnPresentation);
                let tmp37 = memo.steps.length > 0;
                if (!tmp37) {
                  tmp37 = memo.tasks.length > 0;
                }
                if (!tmp37) {
                  if (0 === turnPresentation.streamed.length) {
                    if ("" === trimmed) {
                      if (null == proposal) {
                        if (null == found) {
                          if (null == ideas) {
                            if (null == items18) {
                              if (null == provisionalTodo) {
                                if (null == tmp27) {
                                  if (null == tmp31) {
                                    if (null == attachments) {
                                      if (null == clarification) {
                                        if (null == restoreProposal) {
                                          if (null == tmp25) {
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
                const tmp13Result9 = tmp13(tmp14[33]);
                const turnLeadsWithStretchResult = tmp13(tmp14[33]).turnLeadsWithStretch(tmp37, turnPresentation);
                c22 = turnLeadsWithStretchResult;
                const found1 = memo1.filter((hasWork) => hasWork.hasWork);
                const atResult = found1.at(-1);
                index = undefined;
                if (atResult != null) {
                  index = atResult.index;
                }
                const tmp13Result10 = tmp13(tmp14[33]);
                const tmp41 = !tmp13(tmp14[11]).turnSettled(message);
                closure_24 = tmp41;
                const tmp13Result11 = tmp13(tmp14[11]);
                const obj22 = { turnActive: tmp41 };
                open = tmp13(tmp14[12]).turnLifecycle(memo1, obj22).open;
                let avatarSpokenReplying = groupStart;
                if (groupStart) {
                  avatarSpokenReplying = null != replied;
                }
                let tmp45Result = null;
                if (avatarSpokenReplying) {
                  const obj23 = { replied, onJump: null };
                  let tmp47;
                  if (null != onJumpToReplied) {
                    tmp47 = callback2;
                  }
                  obj23.onJump = tmp47;
                  tmp45Result = replied(tmp17(tmp14[7]), obj23);
                  const tmp17Result5 = tmp17(tmp14[7]);
                }
                const items14 = [tmp45Result, ,];
                const items15 = [, ,];
                ({ avatar: arr16[0], avatarSpoken: arr16[1] } = tmp);
                if (avatarSpokenReplying) {
                  avatarSpokenReplying = tmp.avatarSpokenReplying;
                }
                const obj24 = { children: null };
                const obj25 = { style: null, children: null };
                items15[2] = avatarSpokenReplying;
                obj25.style = items15;
                obj25.children = replied(tmp13(tmp14[22]).ConjureAvatar, {});
                items14[1] = replied(planSuperseded, obj25);
                const obj26 = { style: tmp.header, children: null };
                const obj27 = { at: message.created_at };
                obj26.children = replied(tmp13(tmp14[22]).ConjureHeader, obj27);
                items14[2] = replied(planSuperseded, obj26);
                obj24.children = items14;
                const tmp42Result = onJumpToReplied(closure_9, obj24);
                const obj28 = { style: items8, onLongPress: tmp21, accessible: false, children: null };
                let tmp48Result = null;
                if (turnLeadsWithStretchResult) {
                  tmp48Result = null;
                  if (groupStart) {
                    const obj29 = { style: tmp.spoken, children: tmp42Result };
                    tmp48Result = tmp48(tmp49, obj29);
                  }
                }
                const items16 = [
                  tmp48Result,
                  memo1.map((prose, index) => {
                    let tmp19Result = null;
                    if (null != prose.prose) {
                      tmp19Result = null;
                      if (prose.prose.key !== c21) {
                        const obj3 = { style: spoken.spoken, children: null };
                        const obj4 = { source: prose.prose.content, streaming: null };
                        let tmp5 = closure_24;
                        if (closure_24) {
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
                    const children = [tmp19Result];
                    let tmp7Result = null;
                    if (prose.hasWork) {
                      const obj = { projectId, tree: null, turnActive: null, besideAvatar: null };
                      const tmp10 = ConjureActivityBoxDefault;
                      obj.tree = ConjureActivityBox.stretchOf(memo, prose.index, prose.index === index);
                      obj.turnActive = prose.index === open;
                      let tmp16 = c22;
                      if (c22) {
                        tmp16 = groupStart;
                      }
                      if (tmp16) {
                        tmp16 = 0 === index;
                      }
                      if (tmp16) {
                        let tmp17 = null == prose.prose;
                        if (!tmp17) {
                          tmp17 = prose.prose.key === c21;
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
                        if (null == ideas) {
                          if (null == tmp27) {
                            if (null == tmp31) {
                              if (null == attachments) {
                                if (null == found) {
                                  if (null == items18) {
                                    if (null == provisionalTodo) {
                                      let tmp42Result2 = null;
                                    }
                                    items16[2] = tmp42Result2;
                                    let tmp48Result14 = null;
                                    if (null != tmp29) {
                                      const obj30 = { style: tmp.spoken, children: null };
                                      const obj31 = { variant: "text-xs/normal", color: "text-muted", children: null };
                                      const intl = tmp13(tmp14[24]).intl;
                                      obj31.children = intl.string(tmp17(tmp14[30]).YR8A2v);
                                      obj30.children = tmp48(tmp13(tmp14[23]).Text, obj31);
                                      tmp48Result14 = tmp48(tmp49, obj30);
                                    }
                                    items16[3] = tmp48Result14;
                                    obj28.children = items16;
                                    return tmp42(onToggleChecklist, obj28);
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
                const obj32 = { style: tmp.spoken, children: null };
                let tmp54 = null;
                if (groupStart) {
                  tmp54 = null;
                  if (!turnLeadsWithStretchResult) {
                    tmp54 = tmp42Result;
                  }
                }
                const items17 = [tmp54, , , , , , , , , , , ,];
                let tmp48Result15 = null;
                if (showsClosingMessage) {
                  const obj33 = { source: turnPresentation.closingContent };
                  tmp48Result15 = tmp48(tmp17(tmp14[34]), obj33);
                }
                items17[1] = tmp48Result15;
                let tmp48Result16 = null;
                if ("side_reply" === message.kind) {
                  const obj34 = {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: tmp13(tmp14[36]).midTurnCaption(message.acknowledges),
                  };
                  tmp48Result16 = tmp48(tmp13(tmp14[23]).Text, obj34);
                  const tmp13Result13 = tmp13(tmp14[36]);
                }
                items17[2] = tmp48Result16;
                let tmp48Result17 = null;
                if (null != attachments) {
                  const obj35 = { projectId, attachments };
                  tmp48Result17 = tmp48(tmp17(tmp14[26]), obj35);
                }
                items17[3] = tmp48Result17;
                if (null != items18) {
                  const tmp17Result6 = tmp17(tmp14[37]);
                  if (items18 == null) {
                    items18 = [];
                  }
                  const obj36 = { children: null };
                  const obj37 = {
                    todos: items18,
                    provisional: provisionalTodo,
                    agents: memo3,
                    live: null,
                    superseded: null,
                    expanded: null,
                    onToggleExpanded: null,
                  };
                  const tmp17Result7 = tmp17(tmp14[38]);
                  obj37.live = tmp13(tmp14[39]).checklistLive(message);
                  obj37.superseded = checklistSuperseded;
                  obj37.expanded = checklistExpanded;
                  obj37.onToggleExpanded = callback;
                  obj36.children = tmp48(tmp17Result7, obj37);
                  let tmp48Result18 = tmp48(tmp17Result6, obj36);
                  const tmp13Result14 = tmp13(tmp14[39]);
                } else {
                  tmp48Result18 = null;
                }
                items17[4] = tmp48Result18;
                let tmp48Result19 = null;
                if (null != proposal) {
                  const obj38 = {
                    projectId,
                    proposal,
                    version: planVersion,
                    superseded: planSuperseded,
                    expanded: planExpanded,
                    onToggleExpanded: callback1,
                    onApprove: onApprovePlan,
                  };
                  tmp48Result19 = tmp48(tmp17(tmp14[40]), obj38);
                }
                items17[5] = tmp48Result19;
                let tmp48Result20 = null;
                if (null != clarification) {
                  const obj39 = {
                    projectId,
                    clarification,
                    onSubmit: onAnswerClarification,
                    onDismiss() {
                      return closure_1_9(clarification.id);
                    },
                  };
                  tmp48Result20 = tmp48(tmp17(tmp14[41]), obj39);
                }
                items17[6] = tmp48Result20;
                let tmp48Result21 = null;
                if (null != tmp27) {
                  const obj40 = {
                    projectId,
                    cardId: message.render_id,
                    request: tmp27,
                    status: secretRequestStatus,
                    awaiting: tmp29,
                  };
                  tmp48Result21 = tmp48(tmp17(tmp14[42]), obj40);
                }
                items17[7] = tmp48Result21;
                let tmp48Result22 = null;
                if (null != tmp31) {
                  const obj41 = { projectId, request: tmp31 };
                  tmp48Result22 = tmp48(tmp17(tmp14[43]), obj41);
                }
                items17[8] = tmp48Result22;
                let tmp48Result23 = null;
                if (null != tmp25) {
                  const obj42 = { projectId };
                  tmp48Result23 = tmp48(tmp17(tmp14[44]), obj42);
                }
                items17[9] = tmp48Result23;
                let tmp48Result24 = null;
                if (null != ideas) {
                  const obj43 = { ideas, onPick: onPickIdea };
                  tmp48Result24 = tmp48(tmp17(tmp14[45]), obj43);
                }
                items17[10] = tmp48Result24;
                let tmp48Result25 = null;
                if (null != restoreProposal) {
                  const obj44 = { proposal: restoreProposal, onRestore: null };
                  let fn;
                  if (isNewest) {
                    if (null != onRestoreVersion) {
                      fn = () =>
                        ConjureVersionRestoreConfirm.confirmRestoreVersion({
                          onConfirm() {
                            return onRestoreVersion(projectId(groupStart[16]).proposalRestoreEntry(restoreProposal));
                          },
                        });
                    }
                  }
                  obj44.onRestore = fn;
                  tmp48Result25 = tmp48(tmp17(tmp14[46]), obj44);
                  const tmp17Result8 = tmp17(tmp14[46]);
                }
                items17[11] = tmp48Result25;
                let tmp48Result26 = null;
                if (null != found) {
                  tmp48Result26 = null;
                  if ("message" in found) {
                    const obj45 = {
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      children: found.message,
                    };
                    tmp48Result26 = tmp48(tmp13(tmp14[23]).Text, obj45);
                  }
                }
                items17[12] = tmp48Result26;
                obj32.children = items17;
                tmp42Result2 = tmp42(tmp49, obj32);
                const tmp13Result12 = tmp13(tmp14[12]);
              }
            }
          }
        }
        let obj2 = projectId(groupStart[15]);
      },
);
