// discord_app/modules/vibegrations/native/VibegrationsNativeChat.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3590 from "../intl/VibegrationsUntranslated.messages.js";
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
import VibegrationsConnectionStore_mod from "../stores/VibegrationsConnectionStore.tsx";

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
  const obj = { style: null, children: null };
  const items = [,];
  ({ surface: arr3[0], proposalCard: arr3[1] } = closure_17());
  obj.style = items;
  const obj2 = { variant: "heading-md/bold", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3590["60htw+"]);
  const items1 = [closure_1_14(Text_Text.Text, obj2), , , , ,];
  if ("" === trimmed) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef3590.IHCafX);
  } else {
    stringResult = MarkupUtilsDefault.parse(trimmed, true, closure_16);
    const tmp8Result = MarkupUtilsDefault;
  }
  items1[1] = closure_1_14(Text_Text.Text, {
    variant: "text-md/normal",
    color: "text-default",
    children: stringResult,
  });
  let tmp5Result = null;
  if (proposal.changes.length > 0) {
    const obj3 = { direction: "vertical", spacing: 4, children: null };
    const obj4 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl3 = util.intl;
    obj4.children = intl3.string(_modDef3590.KLyB8Y);
    const items2 = [closure_1_14(Text_Text.Text, obj4)];
    const changes = proposal.changes;
    items2[1] = changes.map((item, index) =>
      closure_1_14(
        require("Text/Text").Text,
        { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item },
        index,
      ),
    );
    obj3.children = items2;
    tmp5Result = __initData(Stack_Stack.Stack, obj3);
  }
  items1[2] = tmp5Result;
  let tmp5Result3 = null;
  if (bot_permissions.length > 0) {
    const obj5 = { direction: "vertical", spacing: 4, children: null };
    const obj6 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl4 = util.intl;
    obj6.children = intl4.string(_modDef3590.ieqTtP);
    const items3 = [closure_1_14(Text_Text.Text, obj6)];
    const obj7 = { variant: "text-sm/normal", color: "text-default", children: bot_permissions.join(", ") };
    items3[1] = closure_1_14(Text_Text.Text, obj7);
    obj5.children = items3;
    tmp5Result3 = __initData(Stack_Stack.Stack, obj5);
  }
  items1[3] = tmp5Result3;
  let tmp5Result4 = null;
  if (privileged_intents.length > 0) {
    const obj8 = { direction: "vertical", spacing: 4, children: null };
    const obj9 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl5 = util.intl;
    obj9.children = intl5.string(_modDef3590.Cn9qix);
    const items4 = [closure_1_14(Text_Text.Text, obj9)];
    const obj10 = { variant: "text-sm/normal", color: "text-default", children: privileged_intents.join(", ") };
    items4[1] = closure_1_14(Text_Text.Text, obj10);
    obj8.children = items4;
    tmp5Result4 = __initData(Stack_Stack.Stack, obj8);
  }
  items1[4] = tmp5Result4;
  let tmp3Result = null;
  if (actionable) {
    const obj11 = { text: null, variant: "primary", onPress: null };
    const intl6 = util.intl;
    obj11.text = intl6.string(_modDef3590.GYoWRk);
    obj11.onPress = onApprove;
    tmp3Result = closure_1_14(components_Button_Button.Button, obj11);
  }
  items1[5] = tmp3Result;
  obj.children = __initData(Stack_Stack.Stack, { direction: "vertical", spacing: 8, children: items1 });
  return closure_1_14(hasOwnProperty, obj);
}
function IdeaCards(arg0) {
  ({ ideas, onPick: require } = arg0);
  let obj = { style: closure_17().ideaCards, children: null };
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
  let intl = util.intl;
  obj2.children = intl.string(_modDef3590.DAvYsi);
  let items = [
    closure_14(Text_Text.Text, obj2),
    ideas.map((title) => {
      closure_0 = title;
      const obj = {
        onPress() {
          return _require(closure_0);
        },
        accessibilityLabel: null,
        children: null,
      };
      const intl = require("util").intl;
      obj.accessibilityLabel = intl.formatToPlainString(_modDef3590.pztRGi, { title: title.title });
      const items = [
        closure_1_14(require("Text/Text").Text, {
          variant: "text-md/semibold",
          color: "text-default",
          children: title.title,
        }),
      ];
      let tmpResult = null;
      if ("" !== title.value) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = closure_1_14(require("Text/Text").Text, obj4);
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
        const obj = {
          style: closure_1.attachmentPill,
          onPress() {
            return closure_2(id.id);
          },
          accessibilityLabel: null,
          children: null,
        };
        const intl = projectId(1114).intl;
        const obj2 = { name: id.name };
        obj.accessibilityLabel = intl.formatToPlainString(closure_1(3590).QUFLUq, obj2);
        const obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
        obj.children = closure_1_14(projectId(4632).Text, obj3);
        let tmp12 = closure_1_14(projectId(5688).Card, obj, id.id);
      } else {
        const obj4 = { style: closure_1.attachmentPill, children: null };
        const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
        const intl2 = projectId(1114).intl;
        const obj6 = { name: id.name };
        obj5.children = intl2.formatToPlainString(closure_1(3590).OBr7WW, obj6);
        obj4.children = closure_1_14(projectId(4632).Text, obj5);
        const _HermesInternal = HermesInternal;
        tmp12 = closure_1_14(closure_1_5, obj4, "" + id.name + "-" + index);
      }
      return tmp12;
    }),
  });
}
function IdeasOffer(onAsk) {
  onAsk = onAsk.onAsk;
  const tmp = closure_17();
  const obj = { style: tmp.ideasOffer, children: null };
  const obj2 = { style: tmp.ideasOfferHint, children: null };
  const obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj3.children = intl.string(_modDef3590.tG5PBo);
  obj2.children = closure_1_14(Text_Text.Text, obj3);
  const items = [closure_1_14(hasOwnProperty, obj2)];
  const obj4 = { variant: "secondary", size: "sm", disabled: null == onAsk, onPress: onAsk, text: null };
  const intl2 = util.intl;
  obj4.text = intl2.string(_modDef3590.cwTe5o);
  items[1] = closure_1_14(components_Button_Button.Button, obj4);
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
        obj.children =
          "\u203A " + labelText + " \u2014 " + require("VibegrationsTimelineTree").describeTaskStatus(task.task.status);
        return closure_1_14(tmp4, obj, task.taskId);
      }
      const intl = require("util").intl;
      labelText = intl.string(_modDef3590.MdXWEK);
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
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl = require("util").intl;
  obj2.children = intl.formatToPlainString(_modDef3590.bQvqly, {
    completed: todos.filter((status) => "completed" === status.status).length,
    total: todos.length,
  });
  let items = [
    closure_14(require("Text/Text").Text, obj2),
    todos.map((children) => {
      const obj = { style: todoRow.todoRow, children: null };
      let str = "text-muted";
      if ("completed" === children.status) {
        str = "text-feedback-positive";
      }
      const items = [
        closure_2_14(Text_Text.Text, {
          variant: "text-sm/semibold",
          color: str,
          children: closure_23[children.status],
        }),
      ];
      let str2 = "text-default";
      if ("completed" === children.status) {
        str2 = "text-muted";
      }
      items[1] = closure_2_14(Text_Text.Text, { variant: "text-sm/normal", color: str2, children: children.text });
      obj.children = items;
      return __initData(hasOwnProperty, obj, children.id);
    }),
  ];
  obj.children = items;
  return closure_15(closure_5, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const turnSettled = fn(16689).turnSettled;
let VibegrationsConnectionStore = fn(16692);
({
  ensureConnection: closure_9,
  getAttachmentUrl: c10,
  interruptTurn: closure_11,
  sendUserMessage: closure_12,
} = VibegrationsConnectionStore);
let VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = { allowList: true, allowHeading: true, allowLinks: true };
const createStyles = fn(4636);
let obj = {
  container: { flex: 1 },
  transcript: { flex: 1 },
  transcriptContent: { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12 },
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
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12 };
obj.row = { marginVertical: nativeDefault.space.PX_4 };
let obj4 = { marginVertical: nativeDefault.space.PX_4 };
obj.surface = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_12,
};
let obj5 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_12,
};
obj.userBubble = { alignSelf: "flex-end", maxWidth: "85%", gap: nativeDefault.space.PX_4 };
let obj6 = { alignSelf: "flex-end", maxWidth: "85%", gap: nativeDefault.space.PX_4 };
obj.assistantBubble = { alignSelf: "flex-start", maxWidth: "95%", gap: nativeDefault.space.PX_4 };
let obj7 = { alignSelf: "flex-start", maxWidth: "95%", gap: nativeDefault.space.PX_4 };
obj.proposalCard = { marginTop: nativeDefault.space.PX_8 };
let obj8 = { marginTop: nativeDefault.space.PX_8 };
obj.ideaCards = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
let obj9 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj.todoList = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
let obj10 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
obj.todoRow = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "flex-start" };
let obj11 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "flex-start" };
obj.activityBox = { gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4 };
let obj12 = { gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4 };
obj.attachmentPills = {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: nativeDefault.space.PX_4,
  marginTop: nativeDefault.space.PX_4,
};
let obj13 = {
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
let obj14 = {
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
let obj15 = {
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
let obj16 = {
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
let obj17 = {
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
    const obj = VibegrationsTimelineTree;
    return obj.buildTimelineTree(message.steps, { turnActive: !turnSettled(message) });
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
      let obj2 = { style: null, children: null };
      const items4 = [, ,];
      ({ row: arr9[0], userBubble: arr9[1], surface: arr9[2] } = tmp);
      obj2.style = items4;
      const obj3 = { userId: message.user_id };
      const items5 = [closure_14(VibegrationsMessageAuthorDefault, obj3), ,];
      let tmp51Result = null;
      if ("" !== trimmed) {
        const obj4 = { variant: "text-md/normal", color: "text-default", children: trimmed };
        tmp51Result = closure_14(message(4632).Text, obj4);
      }
      items5[1] = tmp51Result;
      let tmp51Result2 = null;
      if (null != attachments) {
        const obj6 = { projectId, attachments };
        tmp51Result2 = closure_14(AttachmentPills, obj6);
      }
      items5[2] = tmp51Result2;
      obj2.children = items5;
      let tmp49Result = closure_15(closure_5, obj2);
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
    let obj = { style: null, children: null };
    const items6 = [,];
    ({ row: arr7[0], assistantBubble: arr7[1] } = tmp);
    obj.style = items6;
    const items7 = [
      memo1.map((children) => {
        const obj = {
          style: closure_1.surface,
          children: closure_2_14(Text_Text.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: children.content,
          }),
        };
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
    const obj7 = { tree: memo };
    items7[1] = closure_14(ActivityBox, obj7);
    items7[2] = memo2.map((content) => {
      const obj = { style: closure_1.surface, children: null };
      const obj2 = {
        variant: "text-md/normal",
        color: "text-default",
        children: MarkupUtilsDefault.parse(content.content, true, closure_16),
      };
      obj.children = closure_2_14(Text_Text.Text, obj2);
      return closure_2_14(hasOwnProperty, obj, content.key);
    });
    let tmp19Result = null;
    if (null == proposal) {
      tmp19Result = null;
      if ("" !== trimmed) {
        tmp19Result = null;
        if (!tmp14) {
          const obj8 = { style: tmp.surface, children: null };
          const obj9 = {
            variant: "text-md/normal",
            color: "text-default",
            children: MarkupUtilsDefault.parse(trimmed, true, closure_16),
          };
          obj8.children = closure_14(message(4632).Text, obj9);
          tmp19Result = closure_14(closure_5, obj8);
        }
      }
    }
    items7[3] = tmp19Result;
    let tmp19Result10 = null;
    if (null != attachments) {
      const obj10 = { projectId, attachments };
      tmp19Result10 = closure_14(AttachmentPills, obj10);
    }
    items7[4] = tmp19Result10;
    let tmp19Result11 = null;
    if (null != tmp11) {
      const obj11 = { style: tmp.surface, children: null };
      const obj12 = { todos: tmp11 };
      obj11.children = closure_14(TodoList, obj12);
      tmp19Result11 = closure_14(closure_5, obj11);
    }
    items7[5] = tmp19Result11;
    let tmp19Result12 = null;
    if (null != proposal) {
      const obj13 = { proposal, actionable: isNewest, onApprove };
      tmp19Result12 = closure_14(ProposalCard, obj13);
    }
    items7[6] = tmp19Result12;
    let tmp19Result13 = null;
    if (null != clarification) {
      const obj14 = { clarification, onSubmit: onAnswerClarification };
      tmp19Result13 = closure_14(VibegrationsClarificationCardDefault, obj14);
    }
    items7[7] = tmp19Result13;
    let tmp19Result14 = null;
    if (null != secretRequest) {
      const obj15 = { projectId, request: secretRequest };
      tmp19Result14 = closure_14(VibegrationsSecretRequestCardDefault, obj15);
    }
    items7[8] = tmp19Result14;
    let tmp19Result15 = null;
    if (null != settingsRequest) {
      const obj16 = { projectId, request: settingsRequest };
      tmp19Result15 = closure_14(VibegrationsSettingsRequestCardDefault, obj16);
    }
    items7[9] = tmp19Result15;
    let tmp19Result16 = null;
    if (null != ideas) {
      const obj17 = { ideas, onPick: onPickIdea };
      tmp19Result16 = closure_14(IdeaCards, obj17);
    }
    items7[10] = tmp19Result16;
    let tmp19Result17 = null;
    if (tmp15) {
      const obj18 = { onAsk: onAskForIdeas };
      tmp19Result17 = closure_14(IdeasOffer, obj18);
    }
    items7[11] = tmp19Result17;
    let tmp19Result18 = null;
    if (null != found) {
      tmp19Result18 = null;
      if ("message" in found) {
        const obj19 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
        tmp19Result18 = closure_14(message(4632).Text, obj19);
      }
    }
    items7[12] = tmp19Result18;
    obj.children = items7;
    tmp17Result = closure_15(closure_5, obj);
    tmp15 = "plan_implemented" === message.kind && isNewest;
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
  const items = [state];
  const stateFromStores = projectId(render_id[21]).useStateFromStores(items, () => "active" === state.getState(), []);
  const items1 = [stateFromStores, projectId];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      React7(projectId);
    }
  }, items1);
  let obj = projectId(render_id[21]);
  const items2 = [closure_7];
  const items3 = [projectId];
  const stateFromStores1 = projectId(render_id[21]).useStateFromStores(
    items2,
    () => VibegrationsChatStore.getMessages(projectId),
    items3,
  );
  const obj3 = projectId(render_id[21]);
  const items4 = [closure_7];
  const items5 = [projectId];
  const stateFromStores2 = projectId(render_id[21]).useStateFromStores(
    items4,
    () => VibegrationsChatStore.isThinking(projectId),
    items5,
  );
  const obj4 = projectId(render_id[21]);
  const items6 = [closure_7];
  const items7 = [projectId];
  const stateFromStores3 = projectId(render_id[21]).useStateFromStores(
    items6,
    () => VibegrationsChatStore.isCompacting(projectId),
    items7,
  );
  const obj5 = projectId(render_id[21]);
  const items8 = [VibegrationsConnectionStore];
  const items9 = [projectId];
  const stateFromStores4 = projectId(render_id[21]).useStateFromStores(
    items8,
    () => VibegrationsConnectionStore.getConnState(projectId),
    items9,
  );
  render_id = null;
  if (stateFromStores1.length > 0) {
    render_id = stateFromStores1[stateFromStores1.length - 1].render_id;
  }
  const items10 = [projectId];
  noop = obj2.useCallback(() => {
    const intl = util.intl;
    closure_2_12(projectId, intl.string(_modDef3590.Jj8Ftb));
  }, items10);
  const items11 = [projectId];
  onPickIdea = obj2.useCallback((implementation_prompt) => {
    closure_2_12(projectId, implementation_prompt.implementation_prompt);
  }, items11);
  const items12 = [projectId];
  closure_5 = obj2.useCallback(() => {
    const intl = util.intl;
    closure_2_12(projectId, intl.string(_modDef3590["3sTTBu"]));
  }, items12);
  const items13 = [projectId];
  state = obj2.useCallback((arg0) => {
    closure_2_12(projectId, arg0);
  }, items13);
  let tmp10 = "open" === stateFromStores4;
  if (!tmp10) {
    tmp10 = "connecting" === stateFromStores4;
  }
  closure_7 = tmp10;
  const items14 = [projectId];
  const items15 = [projectId];
  const callback = obj2.useCallback((arg0, arg1) => {
    closure_2_12(projectId, arg0, arg1);
  }, items14);
  const callback1 = obj2.useCallback(() => {
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
  const obj7 = { style: tmp.container, children: null };
  const obj8 = {
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
    obj8.ListFooterComponent = null;
    const items16 = [closure_14(tmp19, obj8), ,];
    let tmp18Result = null;
    if (null != stringResult) {
      const obj9 = { style: tmp.statusRow, children: null };
      const obj10 = { variant: "text-sm/normal", color: "text-muted", children: stringResult };
      obj9.children = closure_14(tmp2(tmp3[11]).Text, obj10);
      tmp18Result = closure_14(tmp17, obj9);
    }
    items16[1] = tmp18Result;
    const obj11 = { projectId, canSend: tmp10, running: stateFromStores2, onSend: callback, onInterrupt: null };
    let tmp27;
    if (stateFromStores2) {
      tmp27 = callback1;
    }
    obj11.onInterrupt = tmp27;
    items16[2] = closure_14(stateFromStores(tmp3[23]), obj11);
    obj7.children = items16;
    return closure_15(tmp17, obj7);
  } else {
    const obj12 = { style: tmp.thinkingRow, children: null };
    const items17 = [closure_14(onPickIdea, { size: "small" })];
    let obj13 = { style: tmp.thinkingLabel, children: null };
    const obj14 = { variant: "text-sm/bold", color: "text-subtle", children: null };
    const intl3 = tmp2(tmp3[8]).intl;
    obj14.children = intl3.string(stateFromStores(tmp3[9]).Xmvb23);
    const items18 = [closure_14(tmp2(tmp3[11]).Text, obj14)];
    const intl4 = tmp2(tmp3[8]).intl;
    let tmp18Result2 = stateFromStores(tmp3[9]);
    const obj15 = {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: intl4.string(stateFromStores3 ? tmp18Result2["0vH/5G"] : tmp18Result2.QDGuNS),
    };
    tmp18Result2 = closure_14(tmp2(tmp3[11]).Text, obj15);
    items18[1] = tmp18Result2;
    obj13.children = items18;
    obj13 = closure_15(tmp17, obj13);
    items17[1] = obj13;
    obj12.children = items17;
    closure_15(tmp17, obj12);
  }
  const obj6 = projectId(render_id[21]);
}
