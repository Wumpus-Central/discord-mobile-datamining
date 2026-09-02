// === Module 16419: ProposalCard ===

// Module 16419 (ProposalCard)
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 3500 */;
import get_defaultRulesDefault from "get defaultRules" /* 4468 */;
import Text from "Text" /* 4474 */;
import Stack from "Stack" /* 4926 */;
import Button from "Button" /* 4928 */;
import VibegrationsMessageAuthorDefault from "VibegrationsMessageAuthor" /* 16421 */;
import VibegrationsClarificationCardDefault from "VibegrationsClarificationCard" /* 16423 */;
import VibegrationsSecretRequestCardDefault from "VibegrationsSecretRequestCard" /* 16425 */;
import VibegrationsSettingsRequestCardDefault from "VibegrationsSettingsRequestCard" /* 16427 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "getState" /* 7166 */;
import closure_7 from "newMessage" /* 16405 */;
import { turnSettled } from "newMessage" /* 16405 */;
import rejectPendingPublish from "rejectPendingPublish" /* 16408 */;
import closure_13 from "rejectPendingPublish" /* 16408 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function ProposalCard(proposal) {
  proposal = proposal.proposal;
  ({ actionable, onApprove } = proposal);
  const trimmed = proposal.summary.trim();
  let bot_permissions = proposal.bot_permissions;
  if (bot_permissions == null) {
    bot_permissions = [];
  }
  let privileged_intents = proposal.privileged_intents;
  if (privileged_intents == null) {
    privileged_intents = [];
  }
  let obj = { style: items, children: null };
  items = [, ];
  ({ surface: arr3[0], proposalCard: arr3[1] } = callback3());
  obj = { variant: "heading-md/bold", color: "text-default", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(messagesProxyDefault["60htw+"]);
  const items1 = [callback(Text.Text, obj), , , , , ];
  if ("" === trimmed) {
    const intl2 = tmp6(1233).intl;
    let stringResult = intl2.string(tmp8(3500).IHCafX);
  } else {
    stringResult = tmp8(4468).parse(trimmed, true, closure_16);
    const tmp8Result = tmp8(4468);
  }
  items1[1] = callback(Text.Text, { variant: "text-md/normal", color: "text-default", children: stringResult });
  let tmp5Result = null;
  if (proposal.changes.length > 0) {
    obj = { direction: "vertical", spacing: 4, children: null };
    obj1 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl3 = tmp6(1233).intl;
    obj1[2] = intl3.string(tmp8(3500).KLyB8Y);
    const items2 = [tmp3(tmp6(4474).Text, obj1), ];
    const changes = proposal.changes;
    items2[1] = changes.map((arg0, arg1) => callback2(callback(table[11]).Text, { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + arg0 }, arg1));
    obj[2] = items2;
    tmp5Result = tmp5(tmp6(4926).Stack, obj);
  }
  items1[2] = tmp5Result;
  tmp5Result = null;
  if (bot_permissions.length > 0) {
    const obj2 = { direction: "vertical", spacing: 4, children: null };
    const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl4 = tmp6(1233).intl;
    obj3[2] = intl4.string(tmp8(3500).ieqTtP);
    const items3 = [tmp3(tmp6(4474).Text, obj3), ];
    const obj4 = { variant: "text-sm/normal", color: "text-default", children: null };
    obj4[2] = bot_permissions.join(", ");
    items3[1] = tmp3(tmp6(4474).Text, obj4);
    obj2[2] = items3;
    tmp5Result = tmp5(tmp6(4926).Stack, obj2);
  }
  items1[3] = tmp5Result;
  let tmp5Result1 = null;
  if (privileged_intents.length > 0) {
    const obj5 = { direction: "vertical", spacing: 4, children: null };
    const obj6 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl5 = tmp6(1233).intl;
    obj6[2] = intl5.string(tmp8(3500).Cn9qix);
    const items4 = [tmp3(tmp6(4474).Text, obj6), ];
    const obj7 = { variant: "text-sm/normal", color: "text-default", children: null };
    obj7[2] = privileged_intents.join(", ");
    items4[1] = tmp3(tmp6(4474).Text, obj7);
    obj5[2] = items4;
    tmp5Result1 = tmp5(tmp6(4926).Stack, obj5);
  }
  items1[4] = tmp5Result1;
  let tmp3Result = null;
  if (actionable) {
    const obj8 = { text: null, variant: "primary", onPress: null };
    const intl6 = tmp6(1233).intl;
    obj8[0] = intl6.string(tmp8(3500).GYoWRk);
    obj8[2] = onApprove;
    tmp3Result = tmp3(tmp6(4928).Button, obj8);
  }
  items1[5] = tmp3Result;
  obj[1] = closure_15(Stack.Stack, { direction: "vertical", spacing: 8, children: items1 });
  return callback(closure_5, obj);
}
function IdeaCards(arg0) {
  ({ ideas, onPick: require } = arg0);
  let obj = { style: callback3().ideaCards, children: null };
  obj = { variant: "text-sm/semibold", color: "text-muted", children: null };
  let intl = getSystemLocale.intl;
  obj[2] = intl.string(messagesProxyDefault.DAvYsi);
  let items = [
    callback(Text.Text, obj),
    ideas.map((title) => {
      closure_0 = title;
      let obj = {
        onPress() {
          return title(title);
        },
        accessibilityLabel: null,
        children: null
      };
      const intl = closure_1_0(closure_1_2[8]).intl;
      obj = { title: title.title };
      obj[1] = intl.formatToPlainString(closure_1_1(closure_1_2[9]).pztRGi, obj);
      obj = { variant: "text-md/semibold", color: "text-default", children: title.title };
      const items = [closure_1_14(closure_1_0(closure_1_2[11]).Text, obj), ];
      let tmpResult = null;
      if ("" !== title.value) {
        obj1 = { variant: "text-sm/normal", color: "text-muted", children: null };
        obj1[2] = title.value;
        tmpResult = tmp(closure_1_0(closure_1_2[11]).Text, obj1);
      }
      items[1] = tmpResult;
      obj[2] = closure_1_15(closure_1_0(closure_1_2[10]).Stack, { direction: "vertical", spacing: 4, children: items });
      return closure_1_14(closure_1_0(closure_1_2[14]).Card, obj, title.id);
    })
  ];
  obj[1] = items;
  return callback2(closure_5, obj);
}
function AttachmentPills(projectId) {
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  closure_1 = undefined;
  closure_2 = undefined;
  const tmp = callback3();
  closure_1 = tmp;
  const items = [projectId];
  closure_2 = importAllResult.useCallback((arg0) => {
    const promise = closure_1_10(projectId, arg0);
    closure_1_10(projectId, arg0).then((arg0) => callback(table[15]).openURL(arg0)).catch(() => {

    });
  }, items);
  return callback(closure_5, {
    style: tmp.attachmentPills,
    children: attachments.map((id) => {
      closure_0 = id;
      if (null != id.id) {
        let obj = { style: null, onPress: null, accessibilityLabel: null, children: null };
        obj[0] = lib.attachmentPill;
        obj[1] = function onPress() {
          return closure_1_2(id.id);
        };
        const intl = projectId(1233).intl;
        obj = { name: null };
        obj[0] = id.name;
        obj[2] = intl.formatToPlainString(lib(3500).QUFLUq, obj);
        obj = { variant: "text-xs/medium", color: "text-default", children: null };
        obj[2] = id.name;
        obj[3] = closure_1_14(projectId(4474).Text, obj);
        let tmp12 = closure_1_14(projectId(5609).Card, obj, id.id);
      } else {
        obj1 = { style: null, children: null };
        obj1[0] = lib.attachmentPill;
        const obj2 = { variant: "text-xs/medium", color: "text-muted", children: null };
        const intl2 = projectId(1233).intl;
        const obj3 = { name: null };
        obj3[0] = id.name;
        obj2[2] = intl2.formatToPlainString(lib(3500).OBr7WW, obj3);
        obj1[1] = closure_1_14(projectId(4474).Text, obj2);
        const _HermesInternal = HermesInternal;
        tmp12 = closure_1_14(closure_1_5, obj1, "" + id.name + "-" + arg1);
      }
      return tmp12;
    })
  });
}
function IdeasOffer(onAsk) {
  onAsk = onAsk.onAsk;
  const tmp = callback3();
  let obj = { style: tmp.ideasOffer, children: null };
  obj = { style: tmp.ideasOfferHint, children: null };
  obj = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(messagesProxyDefault.tG5PBo);
  obj[1] = callback(Text.Text, obj);
  const items = [callback(closure_5, obj), ];
  obj1 = { variant: "secondary", size: "sm", disabled: null == onAsk, onPress: onAsk, text: null };
  const intl2 = getSystemLocale.intl;
  obj1[4] = intl2.string(messagesProxyDefault.cwTe5o);
  items[1] = callback(Button.Button, obj1);
  obj[1] = items;
  return callback2(closure_5, obj);
}
function ActivityBox(tree) {
  tree = tree.tree;
  if (0 !== tree.steps.length) {
    let obj = { style: null, children: null };
    const items = [, ];
    ({ surface: arr[0], activityBox: arr[1] } = tmp);
    obj[0] = items;
    const steps = tree.steps;
    const items1 = [
      steps.map((id) => {
          const obj = { variant: "text-sm/normal", color: "text-muted", children: callback(16420).describeNode(id) };
          return callback3(callback(4474).Text, obj, id.id);
        }),

    ];
    const tasks = tree.tasks;
    items1[1] = tasks.map((task) => {
      task = task.task;
      if (null != task.labelText) {
        if ("" !== task.labelText) {
          let labelText = task.labelText;
        }
        const obj = { variant: "text-sm/normal", color: "text-muted", children: null };
        const _HermesInternal = HermesInternal;
        obj[2] = "\u203A " + labelText + " \u2014 " + tmp2(tmp3[16]).describeTaskStatus(task.task.status);
        return closure_14(tmp4, obj, task.taskId);
      }
      const intl = tmp2(tmp3[8]).intl;
      labelText = intl.string(callback2(tmp3[9]).MdXWEK);
    });
    obj[1] = items1;
    let tmp2 = callback2(closure_5, obj);
  } else {
    tmp2 = null;
  }
  return tmp2;
}
function TodoList(todos) {
  todos = todos.todos;
  let _require;
  const tmp = callback3();
  _require = tmp;
  let obj = { style: tmp.todoList, children: null };
  obj = { variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl = _require(1233).intl;
  obj = { completed: todos.filter((status) => "completed" === status.status).length, total: todos.length };
  obj[2] = intl.formatToPlainString(messagesProxyDefault.bQvqly, obj);
  let items = [
    callback(_require(4474).Text, obj),
    todos.map((children) => {
      let obj = { style: lib.todoRow, children: null };
      let str = "text-muted";
      if ("completed" === children.status) {
        str = "text-feedback-positive";
      }
      obj = { variant: "text-sm/semibold", color: str, children: closure_1_23[children.status] };
      const items = [closure_1_14(lib(closure_1_2[11]).Text, obj), ];
      let str2 = "text-default";
      if ("completed" === children.status) {
        str2 = "text-muted";
      }
      obj = { variant: "text-sm/normal", color: str2, children: children.text };
      items[1] = closure_1_14(lib(closure_1_2[11]).Text, obj);
      obj[1] = items;
      return closure_1_15(closure_1_5, obj, children.id);
    })
  ];
  obj[1] = items;
  return callback2(closure_5, obj);
}
let c3 = importAllResult;
({ ActivityIndicator: c4, View: c5 } = get_ActivityIndicator);
({ ensureConnection: c9, getAttachmentUrl: c10, interruptTurn: unpackModuleId, sendUserMessage: closure_12 } = rejectPendingPublish);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = { allowList: true, allowHeading: true, allowLinks: true };
let obj = { container: { flex: 1 }, transcript: { flex: 1 }, transcriptContent: null, row: null, surface: null, userBubble: null, assistantBubble: null, proposalCard: null, ideaCards: null, todoList: null, todoRow: null, activityBox: null, attachmentPills: null, attachmentPill: null, ideasOffer: null, ideasOfferHint: null, statusRow: null, thinkingRow: null, thinkingLabel: null };
obj = { paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_12 };
obj[2] = obj;
createCacheKey = { marginVertical: ThemesDefault.space.PX_4 };
obj[3] = createCacheKey;
obj[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.md, padding: ThemesDefault.space.PX_12 };
let obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.md, padding: ThemesDefault.space.PX_12 };
obj[5] = { alignSelf: "flex-end", maxWidth: "85%", gap: ThemesDefault.space.PX_4 };
let obj3 = { alignSelf: "flex-end", maxWidth: "85%", gap: ThemesDefault.space.PX_4 };
obj[6] = { alignSelf: "flex-start", maxWidth: "95%", gap: ThemesDefault.space.PX_4 };
let obj4 = { alignSelf: "flex-start", maxWidth: "95%", gap: ThemesDefault.space.PX_4 };
obj[7] = { marginTop: ThemesDefault.space.PX_8 };
let obj5 = { marginTop: ThemesDefault.space.PX_8 };
obj[8] = { marginTop: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_8 };
let obj6 = { marginTop: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_8 };
obj[9] = { marginTop: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_4 };
let obj7 = { marginTop: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_4 };
obj[10] = { flexDirection: "row", gap: ThemesDefault.space.PX_8, alignItems: "flex-start" };
let obj8 = { flexDirection: "row", gap: ThemesDefault.space.PX_8, alignItems: "flex-start" };
obj[11] = { gap: ThemesDefault.space.PX_4, paddingVertical: ThemesDefault.space.PX_4 };
let obj9 = { gap: ThemesDefault.space.PX_4, paddingVertical: ThemesDefault.space.PX_4 };
obj[12] = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_4, marginTop: ThemesDefault.space.PX_4 };
let obj10 = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_4, marginTop: ThemesDefault.space.PX_4 };
obj[13] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4 };
let obj11 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4 };
obj[14] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_8 };
obj[15] = { flexShrink: 1 };
let obj12 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_8 };
obj[16] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_4 };
let obj13 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_4 };
obj[17] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4 };
let obj14 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4 };
obj[18] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
let closure_17 = createCacheKey.createStyles(obj);
let closure_23 = { completed: "\u2713", in_progress: "\u203A", pending: "\u00B7" };
let closure_25 = importAllResult.memo((isNewest) => {
  ({ projectId, message } = isNewest);
  isNewest = isNewest.isNewest;
  importDefault = undefined;
  ({ onApprove, onPickIdea, onAskForIdeas, onAnswerClarification } = isNewest);
  let tmp = callback3();
  importDefault = tmp;
  const items = [message];
  const memo = importAllResult.useMemo(() => {
    let obj = message(closure_1_2[16]);
    obj = { turnActive: !closure_1_8(message) };
    return obj.buildTimelineTree(message.steps, obj);
  }, items);
  const items1 = [message];
  const memo1 = importAllResult.useMemo(() => message(closure_1_2[16]).announcementNotes(message.steps), items1);
  const items2 = [message];
  const memo2 = importAllResult.useMemo(() => message(closure_1_2[16]).streamedMessages(message.steps), items2);
  const items3 = [message];
  const memo3 = importAllResult.useMemo(() => message(closure_1_2[16]).latestTodos(message.steps), items3);
  const trimmed = message.content.trim();
  let attachments = null;
  if (null != message.attachments) {
    attachments = null;
    if (message.attachments.length > 0) {
      attachments = message.attachments;
    }
  }
  if ("user" === message.role) {
    if ("" !== trimmed) {
      let obj = { style: null, children: null };
      const items4 = [, , ];
      ({ row: arr9[0], userBubble: arr9[1], surface: arr9[2] } = tmp);
      obj[0] = items4;
      obj = { userId: null };
      obj[0] = message.user_id;
      const items5 = [callback(VibegrationsMessageAuthorDefault, obj), , ];
      let tmp51Result = null;
      if ("" !== trimmed) {
        obj1 = { variant: "text-md/normal", color: "text-default", children: null };
        obj1[2] = trimmed;
        tmp51Result = tmp51(message(4474).Text, obj1);
      }
      items5[1] = tmp51Result;
      tmp51Result = null;
      if (null != attachments) {
        const obj2 = { projectId: null, attachments: null };
        obj2[0] = projectId;
        obj2[1] = attachments;
        tmp51Result = tmp51(AttachmentPills, obj2);
      }
      items5[2] = tmp51Result;
      obj[1] = items5;
      let tmp49Result = closure_15(closure_5, obj);
      const tmp49 = closure_15;
      const tmp50 = closure_5;
    } else {
      tmp49Result = null;
    }
    return tmp49Result;
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
    let ideas = null;
    if (null != message.ideas) {
      ideas = null;
      if (message.ideas.length > 0) {
        ideas = message.ideas;
      }
    }
    let secretRequest = message.secretRequest;
    if (secretRequest == null) {
      secretRequest = null;
    }
    let settingsRequest = message.settingsRequest;
    if (settingsRequest == null) {
      settingsRequest = null;
    }
    let clarification = null;
    if (isNewest) {
      clarification = null;
      if (null != message.clarification) {
        clarification = null;
        if (message.clarification.questions.length > 0) {
          clarification = message.clarification;
        }
      }
    }
    let tmp11 = memo3;
    if (memo3 == null) {
      let todos = null;
      if (null != message.todos) {
        todos = null;
        if (message.todos.length > 0) {
          todos = message.todos;
        }
      }
      tmp11 = todos;
    }
    let tmp14 = null != tmp13;
    if (tmp14) {
      tmp14 = tmp13.content.trim() === trimmed;
      const str2 = tmp13.content;
    }
    if (memo.steps.length <= 0) {
      if (memo.tasks.length <= 0) {
        if (0 === memo1.length) {
          if (0 === memo2.length) {
            if ("" === trimmed) {
              if (null == proposal) {
                if (null == found) {
                  if (null == ideas) {
                    if (null == tmp11) {
                      if (null == secretRequest) {
                        if (null == settingsRequest) {
                          if (null == attachments) {
                            if (null == clarification) {
                              let tmp17Result = null;
                            }
                            return tmp17Result;
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
    obj = { style: null, children: null };
    const items6 = [, ];
    ({ row: arr7[0], assistantBubble: arr7[1] } = tmp);
    obj[0] = items6;
    const items7 = [
      memo1.map((children) => {
          obj = { style: lib.surface, children: closure_1_14(message(closure_1_2[11]).Text, obj) };
          obj = { variant: "text-sm/normal", color: "text-muted", children: children.content };
          return closure_1_14(closure_1_5, obj, children.key);
        }),
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,

    ];
    const obj3 = { tree: null };
    obj3[0] = memo;
    items7[1] = callback(ActivityBox, obj3);
    items7[2] = memo2.map((content) => {
      let obj = { style: lib.surface, children: null };
      obj = { variant: "text-md/normal", color: "text-default", children: lib(closure_1_2[12]).parse(content.content, true, closure_1_16) };
      obj[1] = closure_1_14(message(closure_1_2[11]).Text, obj);
      return closure_1_14(closure_1_5, obj, content.key);
    });
    let tmp19Result = null;
    if (null == proposal) {
      tmp19Result = null;
      if ("" !== trimmed) {
        tmp19Result = null;
        if (!tmp14) {
          let obj4 = { style: null, children: null };
          obj4[0] = tmp.surface;
          const obj5 = { variant: "text-md/normal", color: "text-default", children: null };
          obj4 = get_defaultRulesDefault;
          obj5[2] = obj4.parse(trimmed, true, closure_16);
          obj4[1] = tmp19(message(4474).Text, obj5);
          tmp19Result = tmp19(tmp18, obj4);
        }
      }
    }
    items7[3] = tmp19Result;
    tmp19Result = null;
    if (null != attachments) {
      const obj6 = { projectId: null, attachments: null };
      obj6[0] = projectId;
      obj6[1] = attachments;
      tmp19Result = tmp19(AttachmentPills, obj6);
    }
    items7[4] = tmp19Result;
    let tmp19Result1 = null;
    if (null != tmp11) {
      const obj7 = { style: null, children: null };
      obj7[0] = tmp.surface;
      const obj8 = { todos: null };
      obj8[0] = tmp11;
      obj7[1] = tmp19(TodoList, obj8);
      tmp19Result1 = tmp19(tmp18, obj7);
    }
    items7[5] = tmp19Result1;
    let tmp19Result2 = null;
    if (null != proposal) {
      const obj9 = { proposal: null, actionable: null, onApprove: null };
      obj9[0] = proposal;
      obj9[1] = isNewest;
      obj9[2] = onApprove;
      tmp19Result2 = tmp19(ProposalCard, obj9);
    }
    items7[6] = tmp19Result2;
    let tmp19Result3 = null;
    if (null != clarification) {
      const obj10 = { clarification: null, onSubmit: null };
      obj10[0] = clarification;
      obj10[1] = onAnswerClarification;
      tmp19Result3 = tmp19(VibegrationsClarificationCardDefault, obj10);
    }
    items7[7] = tmp19Result3;
    let tmp19Result4 = null;
    if (null != secretRequest) {
      const obj11 = { projectId: null, request: null };
      obj11[0] = projectId;
      obj11[1] = secretRequest;
      tmp19Result4 = tmp19(VibegrationsSecretRequestCardDefault, obj11);
    }
    items7[8] = tmp19Result4;
    let tmp19Result5 = null;
    if (null != settingsRequest) {
      const obj12 = { projectId: null, request: null };
      obj12[0] = projectId;
      obj12[1] = settingsRequest;
      tmp19Result5 = tmp19(VibegrationsSettingsRequestCardDefault, obj12);
    }
    items7[9] = tmp19Result5;
    let tmp19Result6 = null;
    if (null != ideas) {
      const obj13 = { ideas: null, onPick: null };
      obj13[0] = ideas;
      obj13[1] = onPickIdea;
      tmp19Result6 = tmp19(IdeaCards, obj13);
    }
    items7[10] = tmp19Result6;
    let tmp19Result7 = null;
    if ("plan_implemented" === message.kind && isNewest) {
      const obj14 = { onAsk: null };
      obj14[0] = onAskForIdeas;
      tmp19Result7 = tmp19(IdeasOffer, obj14);
    }
    items7[11] = tmp19Result7;
    let tmp19Result8 = null;
    if (null != found) {
      tmp19Result8 = null;
      if ("message" in found) {
        const obj15 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
        obj15[2] = found.message;
        tmp19Result8 = tmp19(message(4474).Text, obj15);
      }
    }
    items7[12] = tmp19Result8;
    obj[1] = items7;
    tmp17Result = closure_15(tmp18, obj);
    const tmp17 = closure_15;
  }
});
let obj15 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
const result = require("set").fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeChat.tsx");

export default function VibegrationsNativeChat(projectId) {
  projectId = projectId.projectId;
  let stateFromStores;
  let render_id;
  importAllResult = undefined;
  closure_4 = undefined;
  closure_5 = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  const tmp = callback3();
  let obj = projectId(render_id[21]);
  const items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => "active" === state.getState(), []);
  obj1 = importAllResult;
  const items1 = [stateFromStores, projectId];
  const effect = importAllResult.useEffect(() => {
    if (stateFromStores) {
      closure_1_9(projectId);
    }
  }, items1);
  let obj2 = projectId(render_id[21]);
  const items2 = [closure_7];
  const items3 = [projectId];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => closure_7.getMessages(projectId), items3);
  let obj3 = projectId(render_id[21]);
  const items4 = [closure_7];
  const items5 = [projectId];
  const stateFromStores2 = obj3.useStateFromStores(items4, () => closure_7.isThinking(projectId), items5);
  let obj4 = projectId(render_id[21]);
  const items6 = [closure_7];
  const items7 = [projectId];
  const stateFromStores3 = obj4.useStateFromStores(items6, () => closure_7.isCompacting(projectId), items7);
  let obj5 = projectId(render_id[21]);
  const items8 = [closure_13];
  const items9 = [projectId];
  const stateFromStores4 = obj5.useStateFromStores(items8, () => closure_1_13.getConnState(projectId), items9);
  render_id = null;
  if (stateFromStores1.length > 0) {
    render_id = stateFromStores1[stateFromStores1.length - 1].render_id;
  }
  const items10 = [projectId];
  importAllResult = obj1.useCallback(() => {
    const intl = projectId(render_id[8]).intl;
    closure_1_12(projectId, intl.string(stateFromStores(render_id[9]).Jj8Ftb));
  }, items10);
  const items11 = [projectId];
  closure_4 = obj1.useCallback((implementation_prompt) => {
    closure_1_12(projectId, implementation_prompt.implementation_prompt);
  }, items11);
  const items12 = [projectId];
  closure_5 = obj1.useCallback(() => {
    const intl = projectId(render_id[8]).intl;
    closure_1_12(projectId, intl.string(stateFromStores(render_id[9])["3sTTBu"]));
  }, items12);
  const items13 = [projectId];
  closure_6 = obj1.useCallback((arg0) => {
    closure_1_12(projectId, arg0);
  }, items13);
  let tmp10 = "open" === stateFromStores4;
  if (!tmp10) {
    tmp10 = "connecting" === stateFromStores4;
  }
  closure_7 = tmp10;
  const items14 = [projectId];
  const items15 = [projectId];
  const callback = obj1.useCallback((arg0, arg1) => {
    closure_1_12(projectId, arg0, arg1);
  }, items14);
  const callback1 = obj1.useCallback(() => {
    closure_1_11(projectId);
  }, items15);
  if ("connecting" === stateFromStores4) {
    const intl2 = tmp2(tmp3[8]).intl;
    let stringResult = intl2.string(stateFromStores(tmp3[9]).W7oyuf);
  } else if ("closed" === stateFromStores4) {
    let intl = tmp2(tmp3[8]).intl;
    stringResult = intl.string(stateFromStores(tmp3[9])["yBmS+I"]);
  } else {
    stringResult = null;
    if ("failed" === stateFromStores4) {
      const intl5 = tmp2(tmp3[8]).intl;
      stringResult = intl5.string(stateFromStores(tmp3[9]).eE60xI);
    }
  }
  obj = { style: tmp.container, children: null };
  obj = {
    style: tmp.transcript,
    contentContainerStyle: tmp.transcriptContent,
    data: stateFromStores1,
    maintainVisibleContentPosition: { startRenderingFromBottom: true, autoscrollToBottomThreshold: 0.2 },
    keyExtractor(render_id) {
      return render_id.render_id;
    },
    renderItem(item) {
      item = item.item;
      const obj = { projectId, message: item, isNewest: item.render_id === render_id, onApprove: closure_3, onPickIdea: closure_4, onAskForIdeas: null, onAnswerClarification: null };
      let tmp4;
      if (closure_7) {
        tmp4 = closure_5;
      }
      obj[5] = tmp4;
      let tmp5;
      if (closure_7) {
        tmp5 = closure_6;
      }
      obj[6] = tmp5;
      return closure_1_14(closure_1_25, obj);
    },
    ListFooterComponent: null
  };
  if (!stateFromStores2) {
    obj[6] = null;
    const items16 = [tmp18(tmp19, obj), , ];
    let tmp18Result = null;
    if (null != stringResult) {
      obj1 = { style: null, children: null };
      obj1[0] = tmp.statusRow;
      obj2 = { variant: "text-sm/normal", color: "text-muted", children: null };
      obj2[2] = stringResult;
      obj1[1] = tmp18(tmp2(tmp3[11]).Text, obj2);
      tmp18Result = tmp18(tmp17, obj1);
    }
    items16[1] = tmp18Result;
    obj3 = { projectId: null, canSend: null, running: null, onSend: null, onInterrupt: null };
    obj3[0] = projectId;
    obj3[1] = tmp10;
    obj3[2] = stateFromStores2;
    obj3[3] = callback;
    let tmp27;
    if (stateFromStores2) {
      tmp27 = callback1;
    }
    obj3[4] = tmp27;
    items16[2] = tmp18(stateFromStores(tmp3[23]), obj3);
    obj[1] = items16;
    return tmp16(tmp17, obj);
  } else {
    obj4 = { style: null, children: null };
    obj4[0] = tmp.thinkingRow;
    const items17 = [tmp18(closure_4, { size: "small" }), ];
    obj5 = { style: null, children: null };
    obj5[0] = tmp.thinkingLabel;
    const obj6 = { variant: "text-sm/bold", color: "text-subtle", children: null };
    const intl3 = tmp2(tmp3[8]).intl;
    obj6[2] = intl3.string(stateFromStores(tmp3[9]).Xmvb23);
    const items18 = [tmp18(tmp2(tmp3[11]).Text, obj6), ];
    const intl4 = tmp2(tmp3[8]).intl;
    tmp18Result = stateFromStores(tmp3[9]);
    const obj7 = { variant: "text-sm/medium", color: "text-subtle", children: null };
    obj7[2] = intl4.string(stateFromStores3 ? tmp18Result["0vH/5G"] : tmp18Result.QDGuNS);
    tmp18Result = tmp18(tmp2(tmp3[11]).Text, obj7);
    items18[1] = tmp18Result;
    obj5[1] = items18;
    obj5 = tmp16(tmp17, obj5);
    items17[1] = obj5;
    obj4[1] = items17;
    tmp16(tmp17, obj4);
  }
};