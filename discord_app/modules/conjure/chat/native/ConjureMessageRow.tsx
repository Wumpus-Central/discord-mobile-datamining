// discord_app/modules/conjure/chat/native/ConjureMessageRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import conjureChatTurns from "../conjureChatTurns.tsx";
import ConjureVersionRestoreConfirm from "../../history/native/ConjureVersionRestoreConfirm.tsx";
import ConjureNativeMarkdown from "ConjureNativeMarkdown.tsx";
import ConjureDesignFeedback from "../../design_feedback/ConjureDesignFeedback.tsx";
import conjureQueuedMessage from "../conjureQueuedMessage.tsx";
import ConjureTimelineTree from "../../agent_activity/ConjureTimelineTree.tsx";
import conjureAttachmentDrafts from "../conjureAttachmentDrafts.tsx";
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
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5043);
let obj = {
  row: {
    position: "relative",
    paddingLeft: fn(18690).MESSAGE_CONTENT_INSET,
    paddingRight: fn(18690).MESSAGE_EDGE_INSET,
    paddingVertical: fn(18699).ROW_PAD,
    gap: fn(18699).BLOCK_GAP,
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
  paddingLeft: fn(18690).MESSAGE_CONTENT_INSET,
  paddingRight: fn(18690).MESSAGE_EDGE_INSET,
  paddingVertical: fn(18699).ROW_PAD,
  gap: fn(18699).BLOCK_GAP,
};
obj.rowGroupStart = { marginTop: fn(18699).GROUP_GAP };
let obj4 = { marginTop: fn(18699).GROUP_GAP };
obj.boundaryRow = { paddingHorizontal: fn(18690).MESSAGE_EDGE_INSET, paddingVertical: fn(18699).ROW_PAD };
const rect = { position: "absolute", left: fn(18690).MESSAGE_EDGE_INSET, top: fn(18699).ROW_PAD };
obj.avatar = rect;
let obj5 = { paddingHorizontal: fn(18690).MESSAGE_EDGE_INSET, paddingVertical: fn(18699).ROW_PAD };
obj.spoken = { position: "relative", gap: fn(18699).BLOCK_GAP };
const rect1 = { left: fn(18690).MESSAGE_EDGE_INSET - fn(18690).MESSAGE_CONTENT_INSET, top: 0 };
obj.avatarSpoken = rect1;
let obj6 = { position: "relative", gap: fn(18699).BLOCK_GAP };
obj.avatarSpokenReplying = { top: fn(18700).REPLY_PREVIEW_HEIGHT + fn(18699).BLOCK_GAP };
let obj7 = { top: fn(18700).REPLY_PREVIEW_HEIGHT + fn(18699).BLOCK_GAP };
obj.header = { marginBottom: -nativeDefault.space.PX_4 };
let obj8 = { marginBottom: -nativeDefault.space.PX_4 };
obj.activityBox = { marginLeft: -fn(18699).RAIL_INDENT };
let closure_10 = createStyles.createStyles(obj);
let obj9 = { marginLeft: -fn(18699).RAIL_INDENT };
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
    canSend,
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
    appBuildRequestDismissed,
  } = projectId);
  const tmp = closure_10();
  const spoken = tmp;
  items = [message];
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
  const tmp13 = groupStart;
  const conjureMentionNames = projectId(groupStart[13]).useConjureMentionNames(trimmed);
  if ("user" === message.role) {
    let result = tmp12(tmp13[14]).withoutInlineFileMentions(message.attachments, message.content);
    const tmp12Result = tmp12(tmp13[14]);
  } else {
    result = message.attachments;
  }
  let tmp15 = null;
  if (null != result) {
    tmp15 = null;
    if (result.length > 0) {
      tmp15 = result;
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
  stateFromStores = projectId(tmp13[15]).useStateFromStores(items9, () => {
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
  const tmp20 = message(tmp13[17])(projectId, message);
  closure_19 = tmp20;
  const items11 = [trimmed, user_id, projectId, message, stateFromStores, memo5, onRestoreVersion, tmp20];
  const tmp12Result10 = projectId(tmp13[15]);
  const callback3 = checklistSuperseded.useCallback(() => {
    const obj2 = { content: trimmed, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
    const obj = ConjureMessageActionSheet;
    obj2.onQueuedAction = conjureQueuedMessage.queuedMessageActionHandler(projectId, message, stateFromStores);
    let fn;
    if (null != memo5) {
      if (null != onRestoreVersion) {
        fn = () =>
          projectId(groupStart[21]).confirmRestoreVersion({
            onConfirm() {
              return closure_1_11(closure_1_18);
            },
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
            let tmp93Result2 = null;
          }
          return tmp93Result2;
        }
        let obj3 = { style: items8, onLongPress: tmp24, accessible: false, children: null };
        let tmp95 = null;
        if (groupStart) {
          let obj4 = { style: tmp.avatar, children: null };
          const obj5 = { userId: message.user_id };
          obj4.children = replied(tmp12(tmp13[23]).ConjureUserAvatar, obj5);
          tmp95 = replied(planSuperseded, obj4);
        }
        const items12 = [tmp95, , , ,];
        let tmp98 = null;
        if (groupStart) {
          const obj6 = { style: tmp.header, children: null };
          ({ user_id: obj55.userId, created_at: obj55.at } = message);
          obj6.children = replied(tmp12(tmp13[23]).ConjureUserHeader, { userId: null, at: null });
          tmp98 = replied(planSuperseded, obj6);
          const obj7 = { userId: null, at: null };
        }
        items12[1] = tmp98;
        if (tmp23) {
          let combined;
          if (!groupStart) {
            const intl3 = tmp12(tmp13[25]).intl;
            const _HermesInternal = HermesInternal;
            combined = "" + intl3.string(tmp12(tmp13[25]).t.KD6OJJ) + ": " + conjureMentionNames;
          }
          const obj8 = {
            variant: "body-md/normal",
            color: "text-default",
            accessibilityLabel: combined,
            children: null,
          };
          let tmp104 = null;
          if (null != memo4) {
            const obj9 = { label: memo4.label, variant: "body-md/medium" };
            tmp104 = replied(tmp19(tmp13[26]), obj9);
          }
          const items13 = [tmp104, ,];
          let str5 = null;
          if (null != memo4) {
            str5 = null;
            if (tmp23) {
              str5 = " ";
            }
          }
          items13[1] = str5;
          const obj10 = { text: trimmed, variant: "body-md/normal" };
          items13[2] = replied(tmp19(tmp13[27]), obj10);
          obj8.children = items13;
          let tmp93Result = tmp93(tmp12(tmp13[24]).Text, obj8);
        } else {
          tmp93Result = null;
        }
        items12[2] = tmp93Result;
        let tmp107 = null;
        if (null != tmp15) {
          const obj11 = { projectId, attachments: tmp15 };
          tmp107 = replied(tmp19(tmp13[28]), obj11);
        }
        items12[3] = tmp107;
        let tmp109 = null;
        if (null != message.agentReaction) {
          const obj12 = { reaction: message.agentReaction };
          tmp109 = replied(tmp19(tmp13[29]), obj12);
        }
        items12[4] = tmp109;
        obj3.children = items12;
        tmp93Result2 = tmp93(onToggleChecklist, obj3);
      } else if ("context_boundary" === message.kind) {
        let tmp89 = null;
        if (null != message.contextSwitch) {
          const obj13 = { style: tmp.boundaryRow, children: null };
          const obj14 = { projectId, contextSwitch: message.contextSwitch };
          obj13.children = replied(tmp19(tmp13[30]), obj14);
          tmp89 = replied(planSuperseded, obj13);
        }
        return tmp89;
      } else {
        if ("project_event" === message.kind) {
          if (null != message.projectEvent) {
            const obj15 = { style: items8, children: null };
            const obj16 = { projectId, askId: null, event: null, onInputFocusChange: null };
            ({ id: obj48.askId, projectEvent: obj48.event } = message);
            obj16.onInputFocusChange = onCardInputFocusChange;
            obj15.children = replied(tmp19(tmp13[31]), obj16);
            return replied(planSuperseded, obj15);
          }
        }
        if ("publish_notice" === message.kind) {
          if (null != message.publishNotice) {
            const obj17 = { style: items8, children: null };
            const obj18 = { projectId, notice: message.publishNotice };
            obj17.children = replied(tmp19(tmp13[32]), obj18);
            return replied(planSuperseded, obj17);
          }
        }
        if (true === message.interrupted) {
          const obj19 = { style: items8, children: null };
          const obj20 = { style: tmp.activityBox, children: null };
          const obj21 = { line: null, live: false, settled: true, inGutter: true, glyph: null };
          const intl2 = tmp12(tmp13[25]).intl;
          obj21.line = intl2.string(tmp19(tmp13[33]).oOmBdX);
          const obj22 = { size: "refresh_sm", color: tmp19(tmp13[8]).colors.TEXT_MUTED };
          obj21.glyph = replied(tmp12(tmp13[34]).StopIcon, obj22);
          obj20.children = replied(tmp19(tmp13[5]), obj21);
          obj19.children = replied(planSuperseded, obj20);
          return replied(planSuperseded, obj19);
        } else {
          let proposal;
          if ("proposal" === message.kind) {
            proposal = message.proposal;
          }
          const turnSettledResult = tmp12(tmp13[10]).turnSettled(message);
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
          let tmp28 = null;
          if (turnSettledResult) {
            let publishCta = message.publishCta;
            if (publishCta == null) {
              publishCta = null;
            }
            tmp28 = publishCta;
          }
          let tmp30 = null;
          if (turnSettledResult) {
            let secretRequest = message.secretRequest;
            if (secretRequest == null) {
              secretRequest = null;
            }
            tmp30 = secretRequest;
          }
          if ("open" === secretRequestStatus) {
            const tmp12Result12 = tmp12(tmp13[35]);
            const tmp32 = tmp12(tmp13[35]).activeAwaitingUser(message, isNewest);
            const activeAwaitingUserResult = tmp12(tmp13[35]).activeAwaitingUser(message, isNewest);
          }
          let tmp34 = null;
          if (turnSettledResult) {
            tmp34 = null;
            if (tmp21) {
              let settingsRequest = message.settingsRequest;
              if (settingsRequest == null) {
                settingsRequest = null;
              }
              tmp34 = settingsRequest;
            }
          }
          restoreProposal = message.restoreProposal;
          if (restoreProposal == null) {
            restoreProposal = null;
          }
          let prop = message.publishScheduleProposal;
          if (prop == null) {
            prop = null;
          }
          let tmp38 = null;
          if (turnSettledResult) {
            let serverChange = message.serverChange;
            if (serverChange == null) {
              serverChange = null;
            }
            tmp38 = serverChange;
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
          let tmp41 = null;
          if (isNewest) {
            tmp41 = null;
            if (turnSettledResult) {
              tmp41 = null;
              if (!appBuildRequestDismissed) {
                appBuildRequest = message.appBuildRequest;
                if (appBuildRequest == null) {
                  appBuildRequest = null;
                }
                tmp41 = appBuildRequest;
              }
            }
          }
          appBuildRequest = tmp41;
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
          const tmp12Result11 = tmp12(tmp13[10]);
          const obj23 = {
            steps: message.steps,
            content: trimmed,
            hasProposal: null != proposal,
            hasLiveClarification: null != clarification,
            hasAttachments: null != tmp15,
          };
          const turnPresentation = tmp12(tmp13[36]).resolveTurnPresentation(obj23);
          ({ showsClosingMessage, replyKey: c23 } = turnPresentation);
          let tmp45 = memo.steps.length > 0;
          if (!tmp45) {
            tmp45 = memo.tasks.length > 0;
          }
          if (!tmp45) {
            if (0 === turnPresentation.streamed.length) {
              if ("" === trimmed) {
                if (null == proposal) {
                  if (null == ideas) {
                    if (null == items18) {
                      if (null == provisionalTodo) {
                        if (null == tmp30) {
                          if (null == tmp34) {
                            if (null == tmp15) {
                              if (null == clarification) {
                                if (null == restoreProposal) {
                                  if (null == prop) {
                                    if (null == tmp38) {
                                      if (null == tmp41) {
                                        if (null == tmp28) {
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
          const tmp12Result13 = tmp12(tmp13[36]);
          const turnLeadsWithStretchResult = tmp12(tmp13[36]).turnLeadsWithStretch(tmp45, turnPresentation);
          c24 = turnLeadsWithStretchResult;
          const found = memo1.filter((hasWork) => hasWork.hasWork);
          const atResult = found.at(-1);
          index = undefined;
          if (atResult != null) {
            index = atResult.index;
          }
          const tmp12Result14 = tmp12(tmp13[36]);
          const tmp49 = !tmp12(tmp13[10]).turnSettled(message);
          closure_26 = tmp49;
          const tmp12Result15 = tmp12(tmp13[10]);
          const obj24 = { turnActive: tmp49 };
          open = tmp12(tmp13[9]).turnLifecycle(memo1, obj24).open;
          let avatarSpokenReplying = groupStart;
          if (groupStart) {
            avatarSpokenReplying = null != replied;
          }
          let tmp53Result = null;
          if (avatarSpokenReplying) {
            const obj25 = { replied, onJump: null };
            let tmp55;
            if (null != onJumpToReplied) {
              tmp55 = callback2;
            }
            obj25.onJump = tmp55;
            tmp53Result = replied(tmp19(tmp13[7]), obj25);
            const tmp19Result6 = tmp19(tmp13[7]);
          }
          const items14 = [tmp53Result, ,];
          const items15 = [, ,];
          ({ avatar: arr17[0], avatarSpoken: arr17[1] } = tmp);
          if (avatarSpokenReplying) {
            avatarSpokenReplying = tmp.avatarSpokenReplying;
          }
          const obj26 = { children: null };
          const obj27 = { style: null, children: null };
          items15[2] = avatarSpokenReplying;
          obj27.style = items15;
          obj27.children = replied(tmp12(tmp13[23]).ConjureAvatar, {});
          items14[1] = replied(planSuperseded, obj27);
          const obj28 = { style: tmp.header, children: null };
          const obj29 = { at: message.created_at };
          obj28.children = replied(tmp12(tmp13[23]).ConjureHeader, obj29);
          items14[2] = replied(planSuperseded, obj28);
          obj26.children = items14;
          const tmp50Result = onJumpToReplied(closure_9, obj26);
          const obj30 = { style: items8, onLongPress: tmp24, accessible: false, children: null };
          let tmp56Result = null;
          if (turnLeadsWithStretchResult) {
            tmp56Result = null;
            if (groupStart) {
              const obj31 = { style: tmp.spoken, children: tmp50Result };
              tmp56Result = tmp56(tmp57, obj31);
            }
          }
          const items16 = [
            tmp56Result,
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
                  obj3.children = metroImportDefault(ConjureNativeMarkdown.ConjureRevealedMarkdown, obj4);
                  tmp19Result = metroImportDefault(hasOwnProperty, obj3);
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
                tmp7Result = metroImportDefault(tmp10, obj);
              }
              children[1] = tmp7Result;
              return React5(noop.Fragment, { children }, prose.key);
            }),
            ,
          ];
          if (!showsClosingMessage) {
            if (null == proposal) {
              if (null == clarification) {
                if (null == restoreProposal) {
                  if (null == prop) {
                    if (null == tmp38) {
                      if (null == tmp41) {
                        if (null == ideas) {
                          if (null == tmp30) {
                            if (null == tmp34) {
                              if (null == tmp15) {
                                if (null == items18) {
                                  if (null == provisionalTodo) {
                                    let tmp50Result2 = null;
                                  }
                                  items16[2] = tmp50Result2;
                                  let tmp56Result16 = null;
                                  if (null != tmp32) {
                                    const obj32 = { style: tmp.spoken, children: null };
                                    const obj33 = { variant: "body-xs/normal", color: "text-muted", children: null };
                                    const intl = tmp12(tmp13[25]).intl;
                                    obj33.children = intl.string(tmp19(tmp13[33]).YR8A2v);
                                    obj32.children = tmp56(tmp12(tmp13[24]).Text, obj33);
                                    tmp56Result16 = tmp56(tmp57, obj32);
                                  }
                                  items16[3] = tmp56Result16;
                                  obj30.children = items16;
                                  return tmp50(onToggleChecklist, obj30);
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
          const obj34 = { style: tmp.spoken, children: null };
          let tmp62 = null;
          if (groupStart) {
            tmp62 = null;
            if (!turnLeadsWithStretchResult) {
              tmp62 = tmp50Result;
            }
          }
          const items17 = [tmp62, , , , , , , , , , , , , ,];
          let tmp56Result17 = null;
          if (showsClosingMessage) {
            const obj35 = { source: turnPresentation.closingContent };
            tmp56Result17 = tmp56(tmp19(tmp13[37]), obj35);
          }
          items17[1] = tmp56Result17;
          let tmp56Result18 = null;
          if ("side_reply" === message.kind) {
            const obj36 = {
              variant: "body-xs/normal",
              color: "text-muted",
              children: tmp12(tmp13[39]).midTurnCaption(message.acknowledges),
            };
            tmp56Result18 = tmp56(tmp12(tmp13[24]).Text, obj36);
            const tmp12Result17 = tmp12(tmp13[39]);
          }
          items17[2] = tmp56Result18;
          let tmp56Result19 = null;
          if (null != tmp15) {
            const obj37 = { projectId, attachments: tmp15 };
            tmp56Result19 = tmp56(tmp19(tmp13[28]), obj37);
          }
          items17[3] = tmp56Result19;
          if (null != items18) {
            const tmp19Result7 = tmp19(tmp13[40]);
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
            const tmp19Result8 = tmp19(tmp13[41]);
            obj39.live = tmp12(tmp13[42]).checklistLive(message);
            obj39.superseded = checklistSuperseded;
            obj39.expanded = checklistExpanded;
            obj39.onToggleExpanded = callback;
            obj38.children = tmp56(tmp19Result8, obj39);
            let tmp56Result20 = tmp56(tmp19Result7, obj38);
            const tmp12Result18 = tmp12(tmp13[42]);
          } else {
            tmp56Result20 = null;
          }
          items17[4] = tmp56Result20;
          let tmp56Result21 = null;
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
            tmp56Result21 = tmp56(tmp19(tmp13[43]), obj40);
          }
          items17[5] = tmp56Result21;
          let tmp56Result22 = null;
          if (null != clarification) {
            const obj41 = {
              projectId,
              clarification,
              onSubmit: onAnswerClarification,
              onDismiss() {
                return closure_1_9(clarification.id);
              },
              onInputFocusChange: onCardInputFocusChange,
            };
            tmp56Result22 = tmp56(tmp19(tmp13[44]), obj41);
          }
          items17[6] = tmp56Result22;
          let tmp56Result23 = null;
          if (null != tmp41) {
            const obj42 = {
              projectId,
              request: tmp41,
              canSend,
              onDismiss() {
                return closure_1_10(appBuildRequest.id);
              },
              onInputFocusChange: onCardInputFocusChange,
            };
            tmp56Result23 = tmp56(tmp19(tmp13[45]), obj42);
          }
          items17[7] = tmp56Result23;
          let tmp56Result24 = null;
          if (null != tmp30) {
            const obj43 = {
              projectId,
              kind: "keys",
              cardId: message.render_id,
              request: tmp30,
              status: secretRequestStatus,
              awaiting: tmp32,
            };
            tmp56Result24 = tmp56(tmp19(tmp13[46]), obj43);
          }
          items17[8] = tmp56Result24;
          let tmp56Result25 = null;
          if (null != tmp34) {
            const obj44 = {
              projectId,
              kind: "settings",
              request: tmp34,
              askId: message.id,
              onInputFocusChange: onCardInputFocusChange,
            };
            tmp56Result25 = tmp56(tmp19(tmp13[46]), obj44);
          }
          items17[9] = tmp56Result25;
          let tmp56Result26 = null;
          if (null != tmp28) {
            const obj45 = { projectId, cta: tmp28 };
            tmp56Result26 = tmp56(tmp19(tmp13[47]), obj45);
          }
          items17[10] = tmp56Result26;
          let tmp56Result27 = null;
          if (null != ideas) {
            const obj46 = { ideas, onPick: onPickIdea };
            tmp56Result27 = tmp56(tmp19(tmp13[48]), obj46);
          }
          items17[11] = tmp56Result27;
          let tmp56Result28 = null;
          if (null != restoreProposal) {
            const obj47 = { proposal: restoreProposal, onRestore: null };
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
            obj47.onRestore = fn;
            tmp56Result28 = tmp56(tmp19(tmp13[49]), obj47);
            const tmp19Result9 = tmp19(tmp13[49]);
          }
          items17[12] = tmp56Result28;
          let tmp56Result29 = null;
          if (null != prop) {
            const obj49 = { projectId, proposal: prop, current: isNewest };
            tmp56Result29 = tmp56(tmp19(tmp13[50]), obj49);
          }
          items17[13] = tmp56Result29;
          let tmp56Result30 = null;
          if (null != tmp38) {
            const obj50 = { projectId, change: tmp38, current: isNewest, onReply: null };
            let fn2;
            if (canSend) {
              fn2 = (implementation_prompt) =>
                conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt);
            }
            obj50.onReply = fn2;
            tmp56Result30 = tmp56(tmp19(tmp13[51]), obj50);
            const tmp19Result10 = tmp19(tmp13[51]);
          }
          items17[14] = tmp56Result30;
          obj34.children = items17;
          tmp50Result2 = tmp50(tmp57, obj34);
          const tmp12Result16 = tmp12(tmp13[9]);
        }
      }
    }
  }
  tmp21 = message(tmp13[18])(projectId);
});
