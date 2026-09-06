// discord_app/modules/vibegrations/native/VibegrationsNativeChat.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3547 from "../intl/VibegrationsUntranslated.messages.js";
import MarkupUtilsDefault from "../../markup/MarkupUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import VibegrationsTimelineTree from "../lib/VibegrationsTimelineTree.tsx";
import VibegrationsMessageAuthorDefault from "VibegrationsMessageAuthor.tsx";
import VibegrationsClarificationCardDefault from "VibegrationsClarificationCard.tsx";
import VibegrationsSecretRequestCardDefault from "VibegrationsSecretRequestCard.tsx";
import VibegrationsSettingsRequestCardDefault from "VibegrationsSettingsRequestCard.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import VibegrationsChatStore from "../stores/VibegrationsChatStore.tsx";
import VibegrationsConnectionStore from "../stores/VibegrationsConnectionStore.tsx";

require = fn;
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
  let obj = { style: null, children: null };
  const items = [,];
  ({ surface: arr3[0], proposalCard: arr3[1] } = closure_17());
  obj.style = items;
  obj = { variant: "heading-md/bold", color: "text-default", children: null };
  const intl = util.intl;
  obj.children = intl.string(_modDef3547["60htw+"]);
  const items1 = [closure_1_14(Text_Text.Text, obj), , , , ,];
  if ("" === trimmed) {
    const intl2 = tmp6(1114).intl;
    let stringResult = intl2.string(tmp8(3547).IHCafX);
  } else {
    stringResult = tmp8(4550).parse(trimmed, true, closure_16);
    const tmp8Result = tmp8(4550);
  }
  items1[1] = closure_1_14(Text_Text.Text, {
    variant: "text-md/normal",
    color: "text-default",
    children: stringResult,
  });
  let tmp5Result = null;
  if (proposal.changes.length > 0) {
    obj = { direction: "vertical", spacing: 4, children: null };
    const obj1 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl3 = tmp6(1114).intl;
    obj1.children = intl3.string(tmp8(3547).KLyB8Y);
    const items2 = [tmp3(tmp6(4556).Text, obj1)];
    const changes = proposal.changes;
    items2[1] = changes.map((item, index) =>
      closure_1_14(
        require("Text/Text").Text,
        { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item },
        index,
      ),
    );
    obj.children = items2;
    tmp5Result = tmp5(tmp6(4973).Stack, obj);
  }
  items1[2] = tmp5Result;
  tmp5Result = null;
  if (bot_permissions.length > 0) {
    const obj2 = { direction: "vertical", spacing: 4, children: null };
    const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl4 = tmp6(1114).intl;
    obj3.children = intl4.string(tmp8(3547).ieqTtP);
    const items3 = [tmp3(tmp6(4556).Text, obj3)];
    const obj4 = { variant: "text-sm/normal", color: "text-default", children: bot_permissions.join(", ") };
    items3[1] = tmp3(tmp6(4556).Text, obj4);
    obj2.children = items3;
    tmp5Result = tmp5(tmp6(4973).Stack, obj2);
  }
  items1[3] = tmp5Result;
  let tmp5Result1 = null;
  if (privileged_intents.length > 0) {
    const obj5 = { direction: "vertical", spacing: 4, children: null };
    const obj6 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl5 = tmp6(1114).intl;
    obj6.children = intl5.string(tmp8(3547).Cn9qix);
    const items4 = [tmp3(tmp6(4556).Text, obj6)];
    const obj7 = { variant: "text-sm/normal", color: "text-default", children: privileged_intents.join(", ") };
    items4[1] = tmp3(tmp6(4556).Text, obj7);
    obj5.children = items4;
    tmp5Result1 = tmp5(tmp6(4973).Stack, obj5);
  }
  items1[4] = tmp5Result1;
  let tmp3Result = null;
  if (actionable) {
    const obj8 = { text: null, variant: "primary", onPress: null };
    const intl6 = tmp6(1114).intl;
    obj8.text = intl6.string(tmp8(3547).GYoWRk);
    obj8.onPress = onApprove;
    tmp3Result = tmp3(tmp6(4975).Button, obj8);
  }
  items1[5] = tmp3Result;
  obj.children = __initData(Stack_Stack.Stack, { direction: "vertical", spacing: 8, children: items1 });
  return closure_1_14(hasOwnProperty, obj);
}
function IdeaCards(arg0) {
  ({ ideas, onPick: require } = arg0);
  let obj = { style: closure_17().ideaCards, children: null };
  obj = { variant: "text-sm/semibold", color: "text-muted", children: null };
  let intl = util.intl;
  obj.children = intl.string(_modDef3547.DAvYsi);
  let items = [
    closure_14(Text_Text.Text, obj),
    ideas.map((title) => {
      closure_0 = title;
      let obj = {
        onPress() {
          return _require(closure_0);
        },
        accessibilityLabel: null,
        children: null,
      };
      const intl = require("util").intl;
      obj = { title: title.title };
      obj.accessibilityLabel = intl.formatToPlainString(_modDef3547.pztRGi, obj);
      obj = { variant: "text-md/semibold", color: "text-default", children: title.title };
      const items = [closure_1_14(require("Text/Text").Text, obj)];
      let tmpResult = null;
      if ("" !== title.value) {
        const obj1 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = tmp(require("Text/Text").Text, obj1);
      }
      items[1] = tmpResult;
      obj.children = closure_1_15(require("Stack/Stack").Stack, { direction: "vertical", spacing: 4, children: items });
      return closure_1_14(require("Card").Card, obj, title.id);
    }),
  ];
  obj.children = items;
  return closure_15(closure_5, obj);
}
function AttachmentPills(projectId) {
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp = closure_17();
  closure_1 = tmp;
  const items = [projectId];
  dependencyMap = noop.useCallback((arg0) => {
    const promise = closure_2_10(projectId, arg0);
    closure_2_10(projectId, arg0)
      .then((result) => closure_1_1(dependencyMap[15]).openURL(result))
      .catch(() => {});
  }, items);
  return closure_14(closure_5, {
    style: tmp.attachmentPills,
    children: attachments.map((id, index) => {
      if (null != id.id) {
        let obj = {
          style: closure_1.attachmentPill,
          onPress() {
            return closure_2(id.id);
          },
          accessibilityLabel: null,
          children: null,
        };
        const intl = projectId(1114).intl;
        obj = { name: id.name };
        obj.accessibilityLabel = intl.formatToPlainString(closure_1(3547).QUFLUq, obj);
        obj = { variant: "text-xs/medium", color: "text-default", children: id.name };
        obj.children = closure_1_14(projectId(4556).Text, obj);
        let tmp12 = closure_1_14(projectId(5607).Card, obj, id.id);
      } else {
        const obj1 = { style: closure_1.attachmentPill, children: null };
        const obj2 = { variant: "text-xs/medium", color: "text-muted", children: null };
        const intl2 = projectId(1114).intl;
        const obj3 = { name: id.name };
        obj2.children = intl2.formatToPlainString(closure_1(3547).OBr7WW, obj3);
        obj1.children = closure_1_14(projectId(4556).Text, obj2);
        const _HermesInternal = HermesInternal;
        tmp12 = closure_1_14(closure_1_5, obj1, "" + id.name + "-" + index);
      }
      return tmp12;
    }),
  });
}
function IdeasOffer(onAsk) {
  onAsk = onAsk.onAsk;
  const tmp = closure_17();
  let obj = { style: tmp.ideasOffer, children: null };
  obj = { style: tmp.ideasOfferHint, children: null };
  obj = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj.children = intl.string(_modDef3547.tG5PBo);
  obj.children = closure_1_14(Text_Text.Text, obj);
  const items = [closure_1_14(hasOwnProperty, obj)];
  const obj1 = { variant: "secondary", size: "sm", disabled: null == onAsk, onPress: onAsk, text: null };
  const intl2 = util.intl;
  obj1.text = intl2.string(_modDef3547.cwTe5o);
  items[1] = closure_1_14(components_Button_Button.Button, obj1);
  obj.children = items;
  return __initData(hasOwnProperty, obj);
}
function ActivityBox(tree) {
  tree = tree.tree;
  if (0 !== tree.steps.length) {
    let obj = { style: null, children: null };
    const items = [,];
    ({ surface: arr[0], activityBox: arr[1] } = tmp);
    obj.style = items;
    const steps = tree.steps;
    const items1 = [
      steps.map((id) => {
        const obj = {
          variant: "text-sm/normal",
          color: "text-muted",
          children: require("VibegrationsTimelineTree").describeNode(id),
        };
        return closure_1_14(require("Text/Text").Text, obj, id.id);
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
        obj.children = "\u203A " + labelText + " \u2014 " + tmp2(tmp3[16]).describeTaskStatus(task.task.status);
        return closure_1_14(tmp4, obj, task.taskId);
      }
      const intl = tmp2(tmp3[8]).intl;
      labelText = intl.string(require("../intl/VibegrationsUntranslated.messages.js").MdXWEK);
    });
    obj.children = items1;
    let tmp2 = __initData(hasOwnProperty, obj);
  } else {
    tmp2 = null;
  }
  return tmp2;
}
function TodoList(todos) {
  todos = todos.todos;
  const tmp = closure_17();
  _require = tmp;
  let obj = { style: tmp.todoList, children: null };
  obj = { variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl = require("util").intl;
  obj = { completed: todos.filter((status) => "completed" === status.status).length, total: todos.length };
  obj.children = intl.formatToPlainString(_modDef3547.bQvqly, obj);
  let items = [
    closure_14(require("Text/Text").Text, obj),
    todos.map((children) => {
      let obj = { style: todoRow.todoRow, children: null };
      let str = "text-muted";
      if ("completed" === children.status) {
        str = "text-feedback-positive";
      }
      obj = { variant: "text-sm/semibold", color: str, children: closure_23[children.status] };
      const items = [closure_2_14(Text_Text.Text, obj)];
      let str2 = "text-default";
      if ("completed" === children.status) {
        str2 = "text-muted";
      }
      obj = { variant: "text-sm/normal", color: str2, children: children.text };
      items[1] = closure_2_14(Text_Text.Text, obj);
      obj.children = items;
      return __initData(hasOwnProperty, obj, children.id);
    }),
  ];
  obj.children = items;
  return closure_15(closure_5, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const turnSettled = fn(16586).turnSettled;
let VibegrationsConnectionStore = fn(16589);
({
  ensureConnection: closure_9,
  getAttachmentUrl: c10,
  interruptTurn: closure_11,
  sendUserMessage: closure_12,
} = VibegrationsConnectionStore);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = { allowList: true, allowHeading: true, allowLinks: true };
fn(4560);
let obj = {
  container: { flex: 1 },
  transcript: { flex: 1 },
  transcriptContent: null,
  row: null,
  surface: null,
  userBubble: null,
  assistantBubble: null,
  proposalCard: null,
  ideaCards: null,
  todoList: null,
  todoRow: null,
  activityBox: null,
  attachmentPills: null,
  attachmentPill: null,
  ideasOffer: null,
  ideasOfferHint: null,
  statusRow: null,
  thinkingRow: null,
  thinkingLabel: null,
};
obj = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12 };
obj.transcriptContent = obj;
const createStyles = { marginVertical: nativeDefault.space.PX_4 };
obj.row = createStyles;
obj.surface = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_12,
};
let obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_12,
};
obj.userBubble = { alignSelf: "flex-end", maxWidth: "85%", gap: nativeDefault.space.PX_4 };
let obj3 = { alignSelf: "flex-end", maxWidth: "85%", gap: nativeDefault.space.PX_4 };
obj.assistantBubble = { alignSelf: "flex-start", maxWidth: "95%", gap: nativeDefault.space.PX_4 };
let obj4 = { alignSelf: "flex-start", maxWidth: "95%", gap: nativeDefault.space.PX_4 };
obj.proposalCard = { marginTop: nativeDefault.space.PX_8 };
let obj5 = { marginTop: nativeDefault.space.PX_8 };
obj.ideaCards = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
let obj6 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj.todoList = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
let obj7 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
obj.todoRow = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "flex-start" };
let obj8 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "flex-start" };
obj.activityBox = { gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4 };
let obj9 = { gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4 };
obj.attachmentPills = {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: nativeDefault.space.PX_4,
  marginTop: nativeDefault.space.PX_4,
};
let obj10 = {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: nativeDefault.space.PX_4,
  marginTop: nativeDefault.space.PX_4,
};
obj.attachmentPill = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_4,
};
let obj11 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_4,
};
obj.ideasOffer = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
};
obj.ideasOfferHint = { flexShrink: 1 };
let obj12 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
};
obj.statusRow = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_4,
};
let obj13 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_4,
};
obj.thinkingRow = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_4,
};
let obj14 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_4,
};
obj.thinkingLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_17 = createStyles.createStyles(obj);
let closure_23 = { completed: "\u2713", in_progress: "\u203A", pending: "\u00B7" };
let closure_25 = noop.memo((isNewest) => {
  ({ projectId, message } = isNewest);
  isNewest = isNewest.isNewest;
  ({ onApprove, onPickIdea, onAskForIdeas, onAnswerClarification } = isNewest);
  let tmp = closure_17();
  importDefault = tmp;
  const items = [message];
  const memo = noop.useMemo(() => {
    const obj = { turnActive: !turnSettled(message) };
    return obj.buildTimelineTree(message.steps, obj);
  }, items);
  const items1 = [message];
  const memo1 = noop.useMemo(() => VibegrationsTimelineTree.announcementNotes(message.steps), items1);
  const items2 = [message];
  const memo2 = noop.useMemo(() => VibegrationsTimelineTree.streamedMessages(message.steps), items2);
  const items3 = [message];
  const memo3 = noop.useMemo(() => VibegrationsTimelineTree.latestTodos(message.steps), items3);
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
      const items4 = [, ,];
      ({ row: arr9[0], userBubble: arr9[1], surface: arr9[2] } = tmp);
      obj.style = items4;
      obj = { userId: message.user_id };
      const items5 = [closure_14(VibegrationsMessageAuthorDefault, obj), ,];
      let tmp51Result = null;
      if ("" !== trimmed) {
        const obj1 = { variant: "text-md/normal", color: "text-default", children: trimmed };
        tmp51Result = tmp51(message(4556).Text, obj1);
      }
      items5[1] = tmp51Result;
      tmp51Result = null;
      if (null != attachments) {
        const obj2 = { projectId, attachments };
        tmp51Result = tmp51(AttachmentPills, obj2);
      }
      items5[2] = tmp51Result;
      obj.children = items5;
      let tmp49Result = closure_15(closure_5, obj);
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
    const items6 = [,];
    ({ row: arr7[0], assistantBubble: arr7[1] } = tmp);
    obj.style = items6;
    const items7 = [
      memo1.map((children) => {
        let obj = { style: closure_1.surface, children: null };
        obj = { variant: "text-sm/normal", color: "text-muted", children: children.content };
        obj.children = closure_2_14(Text_Text.Text, obj);
        return closure_2_14(hasOwnProperty, obj, children.key);
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
    const obj3 = { tree: memo };
    items7[1] = closure_14(ActivityBox, obj3);
    items7[2] = memo2.map((content) => {
      let obj = { style: closure_1.surface, children: null };
      obj = {
        variant: "text-md/normal",
        color: "text-default",
        children: MarkupUtilsDefault.parse(content.content, true, closure_16),
      };
      obj.children = closure_2_14(Text_Text.Text, obj);
      return closure_2_14(hasOwnProperty, obj, content.key);
    });
    let tmp19Result = null;
    if (null == proposal) {
      tmp19Result = null;
      if ("" !== trimmed) {
        tmp19Result = null;
        if (!tmp14) {
          let obj4 = { style: tmp.surface, children: null };
          const obj5 = { variant: "text-md/normal", color: "text-default", children: null };
          obj4 = MarkupUtilsDefault;
          obj5.children = obj4.parse(trimmed, true, closure_16);
          obj4.children = tmp19(message(4556).Text, obj5);
          tmp19Result = tmp19(tmp18, obj4);
        }
      }
    }
    items7[3] = tmp19Result;
    tmp19Result = null;
    if (null != attachments) {
      const obj6 = { projectId, attachments };
      tmp19Result = tmp19(AttachmentPills, obj6);
    }
    items7[4] = tmp19Result;
    let tmp19Result1 = null;
    if (null != tmp11) {
      const obj7 = { style: tmp.surface, children: null };
      const obj8 = { todos: tmp11 };
      obj7.children = tmp19(TodoList, obj8);
      tmp19Result1 = tmp19(tmp18, obj7);
    }
    items7[5] = tmp19Result1;
    let tmp19Result2 = null;
    if (null != proposal) {
      const obj9 = { proposal, actionable: isNewest, onApprove };
      tmp19Result2 = tmp19(ProposalCard, obj9);
    }
    items7[6] = tmp19Result2;
    let tmp19Result3 = null;
    if (null != clarification) {
      const obj10 = { clarification, onSubmit: onAnswerClarification };
      tmp19Result3 = tmp19(VibegrationsClarificationCardDefault, obj10);
    }
    items7[7] = tmp19Result3;
    let tmp19Result4 = null;
    if (null != secretRequest) {
      const obj11 = { projectId, request: secretRequest };
      tmp19Result4 = tmp19(VibegrationsSecretRequestCardDefault, obj11);
    }
    items7[8] = tmp19Result4;
    let tmp19Result5 = null;
    if (null != settingsRequest) {
      const obj12 = { projectId, request: settingsRequest };
      tmp19Result5 = tmp19(VibegrationsSettingsRequestCardDefault, obj12);
    }
    items7[9] = tmp19Result5;
    let tmp19Result6 = null;
    if (null != ideas) {
      const obj13 = { ideas, onPick: onPickIdea };
      tmp19Result6 = tmp19(IdeaCards, obj13);
    }
    items7[10] = tmp19Result6;
    let tmp19Result7 = null;
    if ("plan_implemented" === message.kind && isNewest) {
      const obj14 = { onAsk: onAskForIdeas };
      tmp19Result7 = tmp19(IdeasOffer, obj14);
    }
    items7[11] = tmp19Result7;
    let tmp19Result8 = null;
    if (null != found) {
      tmp19Result8 = null;
      if ("message" in found) {
        const obj15 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
        tmp19Result8 = tmp19(message(4556).Text, obj15);
      }
    }
    items7[12] = tmp19Result8;
    obj.children = items7;
    tmp17Result = closure_15(tmp18, obj);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeChat.tsx");

export default function VibegrationsNativeChat(projectId) {
  projectId = projectId.projectId;
  let render_id;
  noop = undefined;
  let onPickIdea;
  closure_5 = undefined;
  let state;
  closure_7 = undefined;
  const tmp = closure_17();
  let obj = projectId(render_id[21]);
  const items = [state];
  const stateFromStores = obj.useStateFromStores(items, () => "active" === state.getState(), []);
  let obj1 = noop;
  const items1 = [stateFromStores, projectId];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      React7(projectId);
    }
  }, items1);
  let obj2 = projectId(render_id[21]);
  const items2 = [closure_7];
  const items3 = [projectId];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => VibegrationsChatStore.getMessages(projectId), items3);
  let obj3 = projectId(render_id[21]);
  const items4 = [closure_7];
  const items5 = [projectId];
  const stateFromStores2 = obj3.useStateFromStores(items4, () => VibegrationsChatStore.isThinking(projectId), items5);
  let obj4 = projectId(render_id[21]);
  const items6 = [closure_7];
  const items7 = [projectId];
  const stateFromStores3 = obj4.useStateFromStores(items6, () => VibegrationsChatStore.isCompacting(projectId), items7);
  let obj5 = projectId(render_id[21]);
  const items8 = [VibegrationsConnectionStore];
  const items9 = [projectId];
  const stateFromStores4 = obj5.useStateFromStores(
    items8,
    () => VibegrationsConnectionStore.getConnState(projectId),
    items9,
  );
  render_id = null;
  if (stateFromStores1.length > 0) {
    render_id = stateFromStores1[stateFromStores1.length - 1].render_id;
  }
  const items10 = [projectId];
  noop = obj1.useCallback(() => {
    const intl = util.intl;
    closure_2_12(projectId, intl.string(_modDef3547.Jj8Ftb));
  }, items10);
  const items11 = [projectId];
  onPickIdea = obj1.useCallback((implementation_prompt) => {
    closure_2_12(projectId, implementation_prompt.implementation_prompt);
  }, items11);
  const items12 = [projectId];
  closure_5 = obj1.useCallback(() => {
    const intl = util.intl;
    closure_2_12(projectId, intl.string(_modDef3547["3sTTBu"]));
  }, items12);
  const items13 = [projectId];
  state = obj1.useCallback((arg0) => {
    closure_2_12(projectId, arg0);
  }, items13);
  let tmp10 = "open" === stateFromStores4;
  if (!tmp10) {
    tmp10 = "connecting" === stateFromStores4;
  }
  closure_7 = tmp10;
  const items14 = [projectId];
  const items15 = [projectId];
  const callback = obj1.useCallback((arg0, arg1) => {
    closure_2_12(projectId, arg0, arg1);
  }, items14);
  const callback1 = obj1.useCallback(() => {
    closure_2_11(projectId);
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
      const obj = {
        projectId,
        message: item,
        isNewest: item.render_id === render_id,
        onApprove,
        onPickIdea,
        onAskForIdeas: null,
        onAnswerClarification: null,
      };
      let tmp4;
      if (closure_7) {
        tmp4 = closure_5;
      }
      obj.onAskForIdeas = tmp4;
      let tmp5;
      if (closure_7) {
        tmp5 = closure_6;
      }
      obj.onAnswerClarification = tmp5;
      return closure_2_14(closure_25, obj);
    },
    ListFooterComponent: null,
  };
  if (!stateFromStores2) {
    obj.ListFooterComponent = null;
    const items16 = [tmp18(tmp19, obj), ,];
    let tmp18Result = null;
    if (null != stringResult) {
      obj1 = { style: tmp.statusRow, children: null };
      obj2 = { variant: "text-sm/normal", color: "text-muted", children: stringResult };
      obj1.children = tmp18(tmp2(tmp3[11]).Text, obj2);
      tmp18Result = tmp18(tmp17, obj1);
    }
    items16[1] = tmp18Result;
    obj3 = { projectId, canSend: tmp10, running: stateFromStores2, onSend: callback, onInterrupt: null };
    let tmp27;
    if (stateFromStores2) {
      tmp27 = callback1;
    }
    obj3.onInterrupt = tmp27;
    items16[2] = tmp18(stateFromStores(tmp3[23]), obj3);
    obj.children = items16;
    return tmp16(tmp17, obj);
  } else {
    obj4 = { style: tmp.thinkingRow, children: null };
    const items17 = [tmp18(onPickIdea, { size: "small" })];
    obj5 = { style: tmp.thinkingLabel, children: null };
    const obj6 = { variant: "text-sm/bold", color: "text-subtle", children: null };
    const intl3 = tmp2(tmp3[8]).intl;
    obj6.children = intl3.string(stateFromStores(tmp3[9]).Xmvb23);
    const items18 = [tmp18(tmp2(tmp3[11]).Text, obj6)];
    const intl4 = tmp2(tmp3[8]).intl;
    tmp18Result = stateFromStores(tmp3[9]);
    const obj7 = {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: intl4.string(stateFromStores3 ? tmp18Result["0vH/5G"] : tmp18Result.QDGuNS),
    };
    tmp18Result = tmp18(tmp2(tmp3[11]).Text, obj7);
    items18[1] = tmp18Result;
    obj5.children = items18;
    obj5 = tmp16(tmp17, obj5);
    items17[1] = obj5;
    obj4.children = items17;
    tmp16(tmp17, obj4);
  }
}
