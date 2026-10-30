// discord_app/modules/conjure/chat/native/ConjureMessageRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import conjureChatTurns from "../conjureChatTurns.tsx";
import ConjureDesignFeedback from "../../design_feedback/ConjureDesignFeedback.tsx";
import ConjureVersionRestoreConfirm from "../../history/native/ConjureVersionRestoreConfirm.tsx";
import ConjureNativeMarkdown from "ConjureNativeMarkdown.tsx";
import conjureQueuedMessage from "../conjureQueuedMessage.tsx";
import ConjureTimelineTree from "../../agent_activity/ConjureTimelineTree.tsx";
import ConjureTodoAgents from "../../agent_activity/ConjureTodoAgents.tsx";
import ConjureMessageActionSheet from "ConjureMessageActionSheet.tsx";
import ConjureChatRestore from "../../history/ConjureChatRestore.tsx";
import ConjureActivityBox from "../../agent_activity/native/ConjureActivityBox.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const ConjureActivityBoxDefault = ConjureActivityBox;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5009);
let obj = {
  row: {
    position: "relative",
    paddingLeft: fn(12587).MESSAGE_CONTENT_INSET,
    paddingRight: fn(12587).MESSAGE_EDGE_INSET,
    paddingVertical: fn(12596).ROW_PAD,
    gap: fn(12596).BLOCK_GAP,
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
  paddingLeft: fn(12587).MESSAGE_CONTENT_INSET,
  paddingRight: fn(12587).MESSAGE_EDGE_INSET,
  paddingVertical: fn(12596).ROW_PAD,
  gap: fn(12596).BLOCK_GAP,
};
obj.rowGroupStart = { marginTop: fn(12596).GROUP_GAP };
let obj4 = { marginTop: fn(12596).GROUP_GAP };
obj.boundaryRow = { paddingHorizontal: fn(12587).MESSAGE_EDGE_INSET, paddingVertical: fn(12596).ROW_PAD };
const rect = { position: "absolute", left: fn(12587).MESSAGE_EDGE_INSET, top: fn(12596).ROW_PAD };
obj.avatar = rect;
let obj5 = { paddingHorizontal: fn(12587).MESSAGE_EDGE_INSET, paddingVertical: fn(12596).ROW_PAD };
obj.spoken = { position: "relative", gap: fn(12596).BLOCK_GAP };
const rect1 = { left: fn(12587).MESSAGE_EDGE_INSET - fn(12587).MESSAGE_CONTENT_INSET, top: 0 };
obj.avatarSpoken = rect1;
let obj6 = { position: "relative", gap: fn(12596).BLOCK_GAP };
obj.avatarSpokenReplying = { top: fn(12597).REPLY_PREVIEW_HEIGHT + fn(12596).BLOCK_GAP };
let obj7 = { top: fn(12597).REPLY_PREVIEW_HEIGHT + fn(12596).BLOCK_GAP };
obj.header = { marginBottom: -nativeDefault.space.PX_4 };
let obj8 = { marginBottom: -nativeDefault.space.PX_4 };
obj.activityBox = { marginLeft: -fn(12596).RAIL_INDENT };
let closure_10 = createStyles.createStyles(obj);
let obj9 = { marginLeft: -fn(12596).RAIL_INDENT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageRow.tsx");

export default noop.memo(function ConjureMessageRow(projectId) {
  projectId = projectId.projectId;
  const message = projectId.message;
  const groupStart = projectId.groupStart;
  ({ isNewest, checklistSuperseded } = projectId);
  ({ secretRequestStatus, onToggleChecklist } = projectId);
  const planSuperseded = projectId.planSuperseded;
  const onTogglePlan = projectId.onTogglePlan;
  const replied = projectId.replied;
  const onJumpToReplied = projectId.onJumpToReplied;
  ({
    onDismissClarification: closure_9,
    onCardInputFocusChange,
    onDismissAppBuildRequest: closure_10,
    onRestoreVersion,
  } = projectId);
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
  ({
    first,
    checklistExpanded,
    planVersion,
    planExpanded,
    onApprovePlan,
    onPickIdea,
    onAnswerClarification,
    clarificationLive,
    clarificationDismissed,
    canSend,
    appBuildRequestDismissed,
  } = projectId);
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
  const callback = checklistSuperseded.useCallback(
    () => onToggleChecklist(message.render_id, checklistSuperseded),
    items4,
  );
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
  const tmp12 = groupStart;
  const conjureMentionNames = projectId(groupStart[13]).useConjureMentionNames(trimmed);
  if ("user" === message.role) {
    let result = tmp11(tmp12[14]).withoutInlineFileMentions(message.attachments, message.content);
    const tmp11Result = tmp11(tmp12[14]);
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
  let obj2 = projectId(groupStart[13]);
  const items9 = [onTogglePlan];
  stateFromStores = projectId(tmp12[15]).useStateFromStores(items9, () => {
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
  const tmp19 = message(tmp12[17])(projectId, message);
  closure_19 = tmp19;
  const items11 = [trimmed, user_id, projectId, message, stateFromStores, memo5, onRestoreVersion, tmp19];
  const callback3 = checklistSuperseded.useCallback(() => {
    const obj2 = { content: trimmed, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
    const obj = ConjureMessageActionSheet;
    obj2.onQueuedAction = conjureQueuedMessage.queuedMessageActionHandler(projectId, message, stateFromStores);
    let fn;
    if (null != memo5) {
      if (null != onRestoreVersion) {
        fn = () =>
          projectId(groupStart[20]).confirmRestoreVersion({
            onConfirm() {
              return closure_1_11(closure_1_18);
            },
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
      if ("user" === message.role) {
        if ("" === trimmed) {
          if (null == memo4) {
            let tmp90Result2 = null;
          }
          return tmp90Result2;
        }
        let obj3 = { style: items8, onLongPress: tmp22, accessible: false, children: null };
        let tmp92 = null;
        if (groupStart) {
          let obj4 = { style: tmp.avatar, children: null };
          const obj5 = { userId: message.user_id };
          obj4.children = replied(tmp11(tmp12[22]).ConjureUserAvatar, obj5);
          tmp92 = replied(planSuperseded, obj4);
        }
        const items12 = [tmp92, , , ,];
        let tmp95 = null;
        if (groupStart) {
          const obj6 = { style: tmp.header, children: null };
          ({ user_id: obj56.userId, created_at: obj56.at } = message);
          obj6.children = replied(tmp11(tmp12[22]).ConjureUserHeader, { userId: null, at: null });
          tmp95 = replied(planSuperseded, obj6);
          const obj7 = { userId: null, at: null };
        }
        items12[1] = tmp95;
        if (tmp21) {
          let str4 = "text-default";
          if (tmp11Result13.isConjureAgentHiddenMessage(trimmed)) {
            str4 = "text-muted";
          }
          const obj8 = { variant: "text-md/normal", color: str4, accessibilityLabel: null, children: null };
          let combined;
          if (!groupStart) {
            const intl3 = tmp11(tmp12[25]).intl;
            const _HermesInternal = HermesInternal;
            combined = "" + intl3.string(tmp11(tmp12[25]).t.KD6OJJ) + ": " + conjureMentionNames;
          }
          obj8.accessibilityLabel = combined;
          let tmp101 = null;
          if (null != memo4) {
            const obj9 = { label: memo4.label, variant: "text-md/medium" };
            tmp101 = replied(tmp18(tmp12[26]), obj9);
          }
          const items13 = [tmp101, ,];
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
          let tmp90Result = tmp90(tmp11(tmp12[23]).Text, obj8);
          tmp11Result13 = tmp11(tmp12[24]);
        } else {
          tmp90Result = null;
        }
        items12[2] = tmp90Result;
        let tmp104 = null;
        if (null != tmp14) {
          const obj11 = { projectId, attachments: tmp14 };
          tmp104 = replied(tmp18(tmp12[28]), obj11);
        }
        items12[3] = tmp104;
        let tmp106 = null;
        if (null != message.agentReaction) {
          const obj12 = { reaction: message.agentReaction };
          tmp106 = replied(tmp18(tmp12[29]), obj12);
        }
        items12[4] = tmp106;
        obj3.children = items12;
        tmp90Result2 = tmp90(onToggleChecklist, obj3);
      } else if ("context_boundary" === message.kind) {
        let tmp86 = null;
        if (null != message.contextSwitch) {
          const obj13 = { style: tmp.boundaryRow, children: null };
          const obj14 = { projectId, contextSwitch: message.contextSwitch };
          obj13.children = replied(tmp18(tmp12[30]), obj14);
          tmp86 = replied(planSuperseded, obj13);
        }
        return tmp86;
      } else {
        if ("project_event" === message.kind) {
          if (null != message.projectEvent) {
            const obj15 = { style: items8, children: null };
            const obj16 = { projectId, event: message.projectEvent };
            obj15.children = replied(tmp18(tmp12[31]), obj16);
            return replied(planSuperseded, obj15);
          }
        }
        if ("publish_notice" === message.kind) {
          if (null != message.publishNotice) {
            const obj17 = { style: items8, children: null };
            const obj18 = { projectId, notice: message.publishNotice };
            obj17.children = replied(tmp18(tmp12[32]), obj18);
            return replied(planSuperseded, obj17);
          }
        }
        if (true === message.interrupted) {
          const obj19 = { style: items8, children: null };
          const obj20 = { style: tmp.activityBox, children: null };
          const obj21 = { line: null, live: false, settled: true, inGutter: true, glyph: null };
          const intl2 = tmp11(tmp12[25]).intl;
          obj21.line = intl2.string(tmp18(tmp12[33]).oOmBdX);
          const obj22 = { size: "refresh_sm", color: tmp18(tmp12[8]).colors.TEXT_MUTED };
          obj21.glyph = replied(tmp11(tmp12[34]).StopIcon, obj22);
          obj20.children = replied(tmp18(tmp12[5]), obj21);
          obj19.children = replied(planSuperseded, obj20);
          return replied(planSuperseded, obj19);
        } else {
          let proposal;
          if ("proposal" === message.kind) {
            proposal = message.proposal;
          }
          const turnSettledResult = tmp11(tmp12[10]).turnSettled(message);
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
            const tmp11Result15 = tmp11(tmp12[35]);
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
          if (clarificationLive) {
            clarification = null;
            if (!clarificationDismissed) {
              clarification = null;
              if (null != message.clarification) {
                clarification = message.clarification;
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
          const tmp11Result14 = tmp11(tmp12[10]);
          const obj23 = {
            steps: message.steps,
            content: trimmed,
            hasProposal: null != proposal,
            hasLiveClarification: null != clarification,
            hasAttachments: null != tmp14,
          };
          const turnPresentation = tmp11(tmp12[36]).resolveTurnPresentation(obj23);
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
          const tmp11Result16 = tmp11(tmp12[36]);
          const turnLeadsWithStretchResult = tmp11(tmp12[36]).turnLeadsWithStretch(tmp41, turnPresentation);
          c24 = turnLeadsWithStretchResult;
          const found = memo1.filter((hasWork) => hasWork.hasWork);
          const atResult = found.at(-1);
          index = undefined;
          if (atResult != null) {
            index = atResult.index;
          }
          const tmp11Result17 = tmp11(tmp12[36]);
          const tmp45 = !tmp11(tmp12[10]).turnSettled(message);
          closure_26 = tmp45;
          const tmp11Result18 = tmp11(tmp12[10]);
          const obj24 = { turnActive: tmp45 };
          open = tmp11(tmp12[9]).turnLifecycle(memo1, obj24).open;
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
            const tmp18Result6 = tmp18(tmp12[7]);
          }
          const items14 = [tmp49Result, ,];
          const items15 = [, ,];
          ({ avatar: arr17[0], avatarSpoken: arr17[1] } = tmp);
          if (avatarSpokenReplying) {
            avatarSpokenReplying = tmp.avatarSpokenReplying;
          }
          const obj26 = { children: null };
          const obj27 = { style: null, children: null };
          items15[2] = avatarSpokenReplying;
          obj27.style = items15;
          obj27.children = replied(tmp11(tmp12[22]).ConjureAvatar, {});
          items14[1] = replied(planSuperseded, obj27);
          const obj28 = { style: tmp.header, children: null };
          const obj29 = { at: message.created_at };
          obj28.children = replied(tmp11(tmp12[22]).ConjureHeader, obj29);
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
              const children = [tmp19Result];
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
              return React6(noop.Fragment, { children }, prose.key);
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
                                  const intl = tmp11(tmp12[25]).intl;
                                  obj33.children = intl.string(tmp18(tmp12[33]).YR8A2v);
                                  obj32.children = tmp52(tmp11(tmp12[23]).Text, obj33);
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
          const items17 = [tmp58, , , , , , , , , , , , ,];
          let tmp52Result16 = null;
          if (showsClosingMessage) {
            const obj35 = { source: turnPresentation.closingContent };
            tmp52Result16 = tmp52(tmp18(tmp12[37]), obj35);
          }
          items17[1] = tmp52Result16;
          let tmp52Result17 = null;
          if ("side_reply" === message.kind) {
            const obj36 = {
              variant: "text-xs/normal",
              color: "text-muted",
              children: tmp11(tmp12[39]).midTurnCaption(message.acknowledges),
            };
            tmp52Result17 = tmp52(tmp11(tmp12[23]).Text, obj36);
            const tmp11Result20 = tmp11(tmp12[39]);
          }
          items17[2] = tmp52Result17;
          let tmp52Result18 = null;
          if (null != tmp14) {
            const obj37 = { projectId, attachments: tmp14 };
            tmp52Result18 = tmp52(tmp18(tmp12[28]), obj37);
          }
          items17[3] = tmp52Result18;
          if (null != items18) {
            const tmp18Result7 = tmp18(tmp12[40]);
            if (items18 == null) {
              items18 = [];
            }
            const obj38 = { children: null };
            const obj39 = {
              todos: items18,
              provisional: provisionalTodo,
              agents: memo3,
              live: null,
              superseded: null,
              expanded: null,
              onToggleExpanded: null,
            };
            const tmp18Result8 = tmp18(tmp12[41]);
            obj39.live = tmp11(tmp12[42]).checklistLive(message);
            obj39.superseded = checklistSuperseded;
            obj39.expanded = checklistExpanded;
            obj39.onToggleExpanded = callback;
            obj38.children = tmp52(tmp18Result8, obj39);
            let tmp52Result19 = tmp52(tmp18Result7, obj38);
            const tmp11Result21 = tmp11(tmp12[42]);
          } else {
            tmp52Result19 = null;
          }
          items17[4] = tmp52Result19;
          let tmp52Result20 = null;
          if (null != proposal) {
            const obj40 = {
              projectId,
              proposal,
              version: planVersion,
              superseded: planSuperseded,
              expanded: planExpanded,
              onToggleExpanded: callback1,
              onApprove: onApprovePlan,
            };
            tmp52Result20 = tmp52(tmp18(tmp12[43]), obj40);
          }
          items17[5] = tmp52Result20;
          if (null == clarification) {
            items17[6] = null;
            let tmp52Result21 = null;
            if (null != tmp37) {
              const obj41 = {
                projectId,
                request: tmp37,
                canSend,
                onDismiss() {
                  return closure_1_10(appBuildRequest.id);
                },
                onInputFocusChange: onCardInputFocusChange,
              };
              tmp52Result21 = tmp52(tmp18(tmp12[46]), obj41);
            }
            items17[7] = tmp52Result21;
            let tmp52Result22 = null;
            if (null != tmp28) {
              const obj42 = {
                projectId,
                cardId: message.render_id,
                request: tmp28,
                status: secretRequestStatus,
                awaiting: tmp30,
              };
              tmp52Result22 = tmp52(tmp18(tmp12[47]), obj42);
            }
            items17[8] = tmp52Result22;
            let tmp52Result23 = null;
            if (null != tmp32) {
              const obj43 = { projectId, request: tmp32, askId: message.id };
              tmp52Result23 = tmp52(tmp18(tmp12[48]), obj43);
            }
            items17[9] = tmp52Result23;
            let tmp52Result24 = null;
            if (null != tmp26) {
              const obj44 = { projectId, turnId: null, cta: null };
              const tmp18Result9 = tmp18(tmp12[49]);
              obj44.turnId = tmp11(tmp12[10]).turnIdOfSegment(message);
              obj44.cta = tmp26;
              tmp52Result24 = tmp52(tmp18Result9, obj44);
              const tmp11Result22 = tmp11(tmp12[10]);
            }
            items17[10] = tmp52Result24;
            let tmp52Result25 = null;
            if (null != ideas) {
              const obj45 = { ideas, onPick: onPickIdea };
              tmp52Result25 = tmp52(tmp18(tmp12[50]), obj45);
            }
            items17[11] = tmp52Result25;
            let tmp52Result26 = null;
            if (null != restoreProposal) {
              const obj46 = { proposal: restoreProposal, onRestore: null };
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
              obj46.onRestore = fn;
              tmp52Result26 = tmp52(tmp18(tmp12[51]), obj46);
              const tmp18Result10 = tmp18(tmp12[51]);
            }
            items17[12] = tmp52Result26;
            let tmp52Result27 = null;
            if (null != prop) {
              const obj47 = { projectId, proposal: prop, current: isNewest };
              tmp52Result27 = tmp52(tmp18(tmp12[52]), obj47);
            }
            items17[13] = tmp52Result27;
            obj34.children = items17;
            tmp46Result2 = tmp46(tmp53, obj34);
          } else if (null != clarification.install_scope_switch) {
            const obj48 = {
              projectId,
              clarification,
              offer: clarification.install_scope_switch,
              onKept() {
                return closure_1_9(clarification.id);
              },
              onInputFocusChange: onCardInputFocusChange,
            };
            clarification = clarification.id;
            let tmp52Result28 = tmp52(tmp18(tmp12[44]), obj48, clarification);
          } else {
            const obj49 = {
              projectId,
              clarification,
              onSubmit: onAnswerClarification,
              onDismiss() {
                return closure_1_9(clarification.id);
              },
              onInputFocusChange: onCardInputFocusChange,
            };
            tmp52Result28 = tmp52(tmp18(tmp12[45]), obj49);
          }
          const tmp11Result19 = tmp11(tmp12[9]);
        }
      }
    }
  }
  const tmp11Result12 = projectId(tmp12[15]);
});
