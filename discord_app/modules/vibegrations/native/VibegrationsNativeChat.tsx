// discord_app/modules/vibegrations/native/VibegrationsNativeChat.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../_runtime/metro/00672__.js";
import util from "../../../intl/index.native.tsx";
import _modDef3714 from "../intl/VibegrationsUntranslated.messages.js";
import MarkupUtilsDefault from "../../markup/MarkupUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import LinearGradientDefault from "../../../../_runtime/05477_LinearGradient.js";
import _modDef6162 from "../../../../_runtime/metro/06162__.js";
import VibegrationsDesignFeedback from "../lib/VibegrationsDesignFeedback.tsx";
import VibegrationsVersionHistorySheet from "VibegrationsVersionHistorySheet.tsx";
import VibegrationsNativeStatusLineDefault from "VibegrationsNativeStatusLine.tsx";
import VibegrationsMessageActionSheet from "VibegrationsMessageActionSheet.tsx";
import useVibegrationsPlanDesign from "../lib/useVibegrationsPlanDesign.tsx";
import VibegrationsNativeCardSurfaceDefault from "VibegrationsNativeCardSurface.tsx";
import VibegrationsNativeMarkdown from "VibegrationsNativeMarkdown.tsx";
import VibegrationsTimelineTree from "../lib/VibegrationsTimelineTree.tsx";
import VibegrationsSubagentMark from "VibegrationsSubagentMark.tsx";
import VibegrationsTodoAgents from "../lib/VibegrationsTodoAgents.tsx";
import VibegrationsChatRestore from "../lib/VibegrationsChatRestore.tsx";
import vibegrationsPublishCard from "../lib/vibegrationsPublishCard.tsx";
import VibegrationsTodoState from "../lib/VibegrationsTodoState.tsx";
import VibegrationsChatGrouping from "../lib/VibegrationsChatGrouping.tsx";
import vibegrationsAttachmentDrafts from "../lib/vibegrationsAttachmentDrafts.tsx";
import vibegrationsPendingPlan from "../lib/vibegrationsPendingPlan.tsx";
import vibegrations_VibegrationsRepliedMessage from "../lib/VibegrationsRepliedMessage.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import VibegrationsChatStore_mod from "../stores/VibegrationsChatStore.tsx";
import VibegrationsConnectionStore_mod from "../stores/VibegrationsConnectionStore.tsx";
import VibegrationsProjectStore from "../stores/VibegrationsProjectStore.tsx";

require = fn;
function PlanDesign(arg0) {
  ({ projectId, design } = arg0);
  const tmp = closure_26();
  const vibegrationsPlanDesign = useVibegrationsPlanDesign.useVibegrationsPlanDesign(projectId, design.id);
  const src = vibegrationsPlanDesign.src;
  if (vibegrationsPlanDesign.gone) {
    return null;
  } else {
    const intl = util.intl;
    const stringResult = intl.string(_modDef3714.FW8UcU);
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl2 = util.intl;
    obj2.children = intl2.string(_modDef3714["9W8SbY"]);
    items = [closure_1_19(Text_Text.Text, obj2)];
    if (null == src) {
      const obj3 = { style: tmp.designPlaceholder, children: null };
      const obj4 = { size: "small", accessibilityLabel: stringResult };
      obj3.children = closure_1_19(hasOwnProperty, obj4);
      let tmp9Result = closure_1_19(React6, obj3);
    } else {
      const obj5 = {
        source: null,
        style: null,
        resizeMode: "cover",
        onError: null,
        accessible: true,
        accessibilityRole: "image",
        accessibilityLabel: null,
      };
      const obj6 = { uri: src };
      obj5.source = obj6;
      obj5.style = tmp.designImage;
      obj5.onError = tmp5;
      obj5.accessibilityLabel = stringResult;
      tmp9Result = closure_1_19(timestampProducer, obj5);
    }
    const obj7 = { direction: "vertical", spacing: 4, children: null };
    items[1] = tmp9Result;
    obj7.children = items;
    return closure_1_20(Stack_Stack.Stack, obj7);
  }
}
function ProposalCard(projectId) {
  ({ proposal, onApprove } = projectId);
  const tmp = closure_26();
  const trimmed = proposal.summary.trim();
  let bot_permissions = proposal.bot_permissions;
  if (bot_permissions == null) {
    bot_permissions = [];
  }
  let privileged_intents = proposal.privileged_intents;
  if (privileged_intents == null) {
    privileged_intents = [];
  }
  const obj = { variant: "heading-md/bold", color: "text-default", children: null };
  const intl = util.intl;
  obj.children = intl.string(_modDef3714["60htw+"]);
  items = [closure_1_19(Text_Text.Text, obj), , , , , ,];
  if ("" === trimmed) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef3714.IHCafX);
  } else {
    stringResult = MarkupUtilsDefault.parse(trimmed, true, VibegrationsNativeMarkdown.VIBEGRATIONS_MARKUP_OPTIONS);
    const tmp4Result = MarkupUtilsDefault;
  }
  items[1] = closure_1_19(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children: stringResult });
  let tmp3Result = null;
  if (null != proposal.design_image) {
    const obj2 = { projectId: projectId.projectId, design: proposal.design_image };
    tmp3Result = closure_1_19(PlanDesign, obj2);
  }
  items[2] = tmp3Result;
  let tmp7Result = null;
  if (proposal.changes.length > 0) {
    const obj3 = { direction: "vertical", spacing: 4, children: null };
    const obj4 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl3 = util.intl;
    obj4.children = intl3.string(_modDef3714.KLyB8Y);
    const items1 = [closure_1_19(Text_Text.Text, obj4)];
    const changes = proposal.changes;
    items1[1] = changes.map((item, index) =>
      closure_1_19(
        require("Text/Text").Text,
        { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item },
        index,
      ),
    );
    obj3.children = items1;
    tmp7Result = closure_1_20(Stack_Stack.Stack, obj3);
  }
  items[3] = tmp7Result;
  let tmp7Result4 = null;
  if (bot_permissions.length > 0) {
    const obj5 = { direction: "vertical", spacing: 4, children: null };
    const obj6 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl4 = util.intl;
    obj6.children = intl4.string(_modDef3714.ieqTtP);
    const items2 = [closure_1_19(Text_Text.Text, obj6)];
    const obj7 = { variant: "text-sm/normal", color: "text-default", children: bot_permissions.join(", ") };
    items2[1] = closure_1_19(Text_Text.Text, obj7);
    obj5.children = items2;
    tmp7Result4 = closure_1_20(Stack_Stack.Stack, obj5);
  }
  items[4] = tmp7Result4;
  let tmp7Result5 = null;
  if (privileged_intents.length > 0) {
    const obj8 = { direction: "vertical", spacing: 4, children: null };
    const obj9 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl5 = util.intl;
    obj9.children = intl5.string(_modDef3714.Cn9qix);
    const items3 = [closure_1_19(Text_Text.Text, obj9)];
    const obj10 = { variant: "text-sm/normal", color: "text-default", children: privileged_intents.join(", ") };
    items3[1] = closure_1_19(Text_Text.Text, obj10);
    obj8.children = items3;
    tmp7Result5 = closure_1_20(Stack_Stack.Stack, obj8);
  }
  items[5] = tmp7Result5;
  let tmp7Result6 = null;
  if (null != onApprove) {
    const obj11 = { style: tmp.planActions, children: null };
    const obj12 = { text: null, variant: "primary", onPress: null };
    const intl6 = util.intl;
    obj12.text = intl6.string(_modDef3714["hG0Y0+"]);
    obj12.onPress = onApprove;
    const items4 = [closure_1_19(components_Button_Button.Button, obj12)];
    const obj13 = { variant: "text-sm/normal", color: "text-muted", style: tmp.planReplyHint, children: null };
    const intl7 = util.intl;
    obj13.children = intl7.string(_modDef3714.Vl3IL0);
    items4[1] = closure_1_19(Text_Text.Text, obj13);
    obj11.children = items4;
    tmp7Result6 = closure_1_20(React6, obj11);
  }
  const tmp6 = VibegrationsNativeCardSurfaceDefault;
  items[6] = tmp7Result6;
  return closure_1_19(tmp6, {
    children: closure_1_20(Stack_Stack.Stack, { direction: "vertical", spacing: 8, children: items }),
  });
}
function IdeaCards(arg0) {
  ({ ideas, onPick: require } = arg0);
  let obj = { style: closure_26().ideaCards, children: null };
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
  let intl = util.intl;
  obj2.children = intl.string(_modDef3714.DAvYsi);
  items = [
    closure_19(Text_Text.Text, obj2),
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
      obj.accessibilityLabel = intl.formatToPlainString(_modDef3714.pztRGi, { title: title.title });
      items = [
        closure_1_19(require("Text/Text").Text, {
          variant: "text-md/semibold",
          color: "text-default",
          children: title.title,
        }),
      ];
      let tmpResult = null;
      if ("" !== title.value) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = closure_1_19(require("Text/Text").Text, obj4);
      }
      items[1] = tmpResult;
      obj.children = closure_1_20(require("Stack/Stack").Stack, { direction: "vertical", spacing: 4, children: items });
      return closure_1_19(require("Card").Card, obj, title.id);
    }),
  ];
  obj.children = items;
  return closure_20(closure_8, obj);
}
function AttachmentPills(projectId) {
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp = closure_26();
  closure_1 = tmp;
  items = [projectId];
  dependencyMap = noop.useCallback((arg0) => {
    const promise = closure_2_14(projectId, arg0);
    closure_2_14(projectId, arg0)
      .then((result) => closure_1_1(dependencyMap[24]).openURL(result))
      .catch(() => {});
  }, items);
  return closure_19(closure_8, {
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
        const intl = projectId(1115).intl;
        const obj2 = { name: id.name };
        obj.accessibilityLabel = intl.formatToPlainString(closure_1(3714).QUFLUq, obj2);
        const obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
        obj.children = closure_1_19(projectId(4841).Text, obj3);
        let tmp12 = closure_1_19(projectId(6105).Card, obj, id.id);
      } else {
        const obj4 = { style: closure_1.attachmentPill, children: null };
        const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
        const intl2 = projectId(1115).intl;
        const obj6 = { name: id.name };
        obj5.children = intl2.formatToPlainString(closure_1(3714).OBr7WW, obj6);
        obj4.children = closure_1_19(projectId(4841).Text, obj5);
        const _HermesInternal = HermesInternal;
        tmp12 = closure_1_19(closure_1_8, obj4, "" + id.name + "-" + index);
      }
      return tmp12;
    }),
  });
}
function TimelineRow(live) {
  ({ node, inGutter } = live);
  if (inGutter === undefined) {
    inGutter = false;
  }
  let flag = live.live;
  if (flag === undefined) {
    flag = false;
  }
  ({ epoch, crestColor } = live);
  if (epoch === undefined) {
    epoch = 0;
  }
  const tmp = closure_26();
  _require = tmp;
  const obj = {
    line: null,
    live: null,
    settled: null,
    failed: null,
    presentation: null,
    crestColor: null,
    inGutter: null,
    epoch: null,
    trailing: null,
  };
  const tmp6 = VibegrationsNativeStatusLineDefault;
  obj.line = require("VibegrationsTimelineTree").describeNode(node);
  obj.live = flag;
  let tmp8 = !flag;
  if (!flag) {
    tmp8 = "failed" !== node.status;
  }
  obj.settled = tmp8;
  obj.failed = "failed" === node.status;
  let str2 = "detail";
  if (flag) {
    str2 = "headline";
  }
  obj.presentation = str2;
  obj.crestColor = crestColor;
  obj.inGutter = inGutter;
  obj.epoch = epoch;
  let tmp4Result = null;
  if (null != node.durationMs) {
    const obj3 = {
      variant: "text-xs/normal",
      color: "text-subtle",
      children: tmp7(16582).describeDuration(node.durationMs),
    };
    tmp4Result = closure_19(tmp7(4841).Text, obj3);
    const tmp7Result = tmp7(16582);
  }
  obj.trailing = tmp4Result;
  const children = [closure_19(tmp6, obj)];
  let tmp4Result2 = null;
  if (node.detail.length > 0) {
    const obj4 = { style: tmp.stepDetail, children: null };
    const detail = node.detail;
    obj4.children = detail.map((children, index) => {
      stepCommand = undefined;
      if (children.startsWith("$ ")) {
        stepCommand = stepCommand.stepCommand;
      }
      return closure_2_19(
        Text_Text.Text,
        { variant: "text-sm/normal", color: "text-muted", style: stepCommand, children },
        index,
      );
    });
    tmp4Result2 = closure_19(closure_8, obj4);
  }
  children[1] = tmp4Result2;
  return closure_20(closure_8, { children });
}
function TurnStatusLine(epoch) {
  ({ tree, turnActive } = epoch);
  epoch = epoch.epoch;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_26();
  [tmp3, c2] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const currentStepResult = turnActive(16581).currentStep(tree.steps);
  _slicedToArray = currentStepResult;
  let tmp8;
  if (!turnActive) {
    const turn = tree.turn;
    let durationMs;
    if (turn != null) {
      durationMs = turn.durationMs;
    }
    tmp8 = durationMs;
  }
  const tasks = tree.tasks;
  const found = tasks.find((task) => null != task.task.groupLabel);
  let groupLabel;
  if (found != null) {
    groupLabel = found.task.groupLabel;
  }
  if (null != tmp8) {
    groupLabel = turnActive(16582).describeTurnDuration(tmp8);
    const tmp5Result = turnActive(16582);
  } else if (null != currentStepResult) {
    groupLabel = turnActive(16581).describeNode(currentStepResult);
    const tmp5Result2 = turnActive(16581);
  } else if (groupLabel == null) {
    const intl = turnActive(1115).intl;
    groupLabel = intl.string(epoch(3714).nv6pUM);
  }
  let someResult = tree.steps.length > 1;
  if (!someResult) {
    const steps = tree.steps;
    someResult = steps.some((detail) => detail.detail.length > 0);
  }
  const obj2 = {
    line: groupLabel,
    live: turnActive,
    settled: !turnActive,
    inGutter: true,
    glyph: null,
    epoch: null,
    expanded: null,
    onToggle: null,
  };
  let tmp19;
  let obj = turnActive(16581);
  if (epoch.besideAvatar) {
    tmp19 = null;
  }
  obj2.glyph = tmp19;
  obj2.epoch = epoch;
  obj2.expanded = tmp3;
  let tmp20;
  if (someResult) {
    tmp20 = callback;
  }
  obj2.onToggle = tmp20;
  const children = [closure_19(epoch(16566), obj2)];
  let tmp17Result = null;
  if (tmp3) {
    tmp17Result = null;
    if (someResult) {
      const obj3 = { style: tmp.activityDetail, children: null };
      const steps1 = tree.steps;
      obj3.children = steps1.map((node) => {
        const obj = { node, live: null, epoch: null };
        let tmp3 = turnActive;
        if (turnActive) {
          tmp3 = node === c3;
        }
        obj.live = tmp3;
        obj.epoch = epoch;
        return closure_2_19(TimelineRow, obj, node.id);
      });
      tmp17Result = closure_19(closure_8, obj3);
    }
  }
  children[1] = tmp17Result;
  return closure_20(closure_8, { children });
}
function LaneStatusLine(arg0) {
  ({ lane, mark } = arg0);
  ({ turnActive, epoch } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_26();
  [tmp3, c2] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  if (turnActive) {
    turnActive = tmp5;
  }
  let currentStepResult;
  if (turnActive) {
    currentStepResult = mark(16581).currentStep(lane.steps);
    const obj = mark(16581);
  }
  _slicedToArray = currentStepResult;
  const tmp9 = lane.task.detail.length > 0 || lane.steps.length > 0;
  if ("running" === lane.task.status) {
    if (null != currentStepResult) {
      let describeNodeResult = mark(16581).describeNode(currentStepResult);
      const obj4 = mark(16581);
    } else {
      describeNodeResult = mark(16583).taskTitle(lane.task);
      const obj3 = mark(16583);
    }
  } else {
    const obj2 = mark(16583);
    const obj5 = {
      line: mark(16583).describeTaskOutcome(lane.task),
      live: turnActive,
      settled: null,
      failed: null,
      glyph: null,
      crestColor: null,
      inGutter: true,
      epoch: null,
      expanded: null,
      onToggle: null,
    };
    let tmp26 = !turnActive;
    const describeTaskOutcomeResult = mark(16583).describeTaskOutcome(lane.task);
    if (!turnActive) {
      tmp26 = "failed" !== lane.task.status;
    }
    obj5.settled = tmp26;
    obj5.failed = "failed" === lane.task.status;
    obj5.glyph = closure_19(mark.Illocon, { size: 16, accessible: false });
    obj5.crestColor = mark.tint;
    obj5.epoch = epoch;
    obj5.expanded = tmp3;
    let tmp27;
    if (tmp9) {
      tmp27 = callback;
    }
    obj5.onToggle = tmp27;
    items = [closure_19(epoch(16566), obj5)];
    let tmp21Result = null;
    if (tmp3) {
      tmp21Result = null;
      if (tmp9) {
        const obj6 = { style: tmp.activityDetail, children: null };
        const detail = lane.task.detail;
        const items1 = [
          detail.map((children, index) =>
            closure_1_19(
              mark(_undefined[18]).Text,
              { variant: "text-xs/normal", color: "text-feedback-critical", children },
              index,
            ),
          ),
        ];
        const steps = lane.steps;
        items1[1] = steps.map((node) =>
          closure_2_19(TimelineRow, { node, live: node === c3, crestColor: mark.tint, epoch }, node.id),
        );
        obj6.children = items1;
        tmp21Result = closure_20(closure_8, obj6);
      }
    }
    const obj7 = { children: null };
    items[1] = tmp21Result;
    obj7.children = items;
    return closure_20(closure_8, obj7);
  }
  const tmp2 = _slicedToArray(noop.useState(false), 2);
}
function ActivityBox(besideAvatar) {
  ({ tree, turnActive } = besideAvatar);
  let flag = besideAvatar.besideAvatar;
  if (flag === undefined) {
    flag = false;
  }
  let length;
  dependencyMap = undefined;
  if (0 === tree.steps.length) {
    if (0 === tree.tasks.length) {
      return null;
    }
  }
  length = tree.tasks.length;
  const tmp = closure_26();
  const tasks = tree.tasks;
  dependencyMap = turnActive(16584).subagentIllocons(tasks.map((taskId) => taskId.taskId));
  let obj2 = { style: tmp.activityBox, children: null };
  items = [closure_19(TurnStatusLine, { tree, turnActive, epoch: length, besideAvatar: flag })];
  const tasks1 = tree.tasks;
  items[1] = tasks1.map((task) => {
    let familiarMarkResult;
    if (null != task.task.helperMark) {
      familiarMarkResult = VibegrationsSubagentMark.familiarMark(task.task.helperMark);
    }
    if (familiarMarkResult == null) {
      familiarMarkResult = closure_2.get(task.taskId);
    }
    let tmp5 = null;
    if (null != familiarMarkResult) {
      const obj2 = { lane: task, mark: familiarMarkResult, turnActive, epoch: length };
      tmp5 = closure_2_19(LaneStatusLine, obj2, task.taskId);
    }
    return tmp5;
  });
  obj2.children = items;
  return closure_20(closure_8, obj2);
}
function TranscriptFade(children) {
  children = children.children;
  const tmp = closure_26();
  let tmp3 = children;
  if (obj.isIOS()) {
    const obj2 = { style: tmp.transcript, maskElement: null, children: null };
    const obj3 = { style: tmp.transcript, children: null };
    const obj4 = { style: tmp.maskSolid };
    items = [closure_1_19(React6, obj4), ,];
    const obj5 = { style: tmp.maskFade, colors: items, locations, start, end };
    items[1] = closure_1_19(LinearGradientDefault, obj5);
    const obj6 = { style: null };
    const obj7 = { height: null };
    const _Math = Math;
    obj7.height = Math.max(0, children.clearance - 52);
    obj6.style = obj7;
    items[2] = closure_1_19(React6, obj6);
    obj3.children = items;
    obj2.maskElement = closure_1_20(React6, obj3);
    obj2.children = children;
    tmp3 = closure_1_19(_modDef6162, obj2);
  }
  return tmp3;
}
function RestoreProposalCard(arg0) {
  ({ proposal, onRestore } = arg0);
  const authoredAgoResult = VibegrationsVersionHistorySheet.authoredAgo(proposal.authored_at);
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3714.khdMoL);
  items = [closure_1_19(Text_Text.Text, obj2), ,];
  const items1 = [
    closure_1_19(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: proposal.subject }),
  ];
  let tmp4Result = null;
  if (null != authoredAgoResult) {
    const obj4 = { variant: "text-sm/normal", color: "text-muted", children: authoredAgoResult };
    tmp4Result = closure_1_19(Text_Text.Text, obj4);
  }
  items1[1] = tmp4Result;
  items[1] = closure_1_20(Stack_Stack.Stack, { direction: "vertical", spacing: 4, children: items1 });
  let tmp4Result2 = null;
  if (null != onRestore) {
    const obj5 = { text: null, variant: "secondary", onPress: null };
    const intl2 = util.intl;
    obj5.text = intl2.string(_modDef3714.eSDVDt);
    obj5.onPress = onRestore;
    tmp4Result2 = closure_1_19(components_Button_Button.Button, obj5);
  }
  const obj3 = { variant: "text-md/medium", color: "text-default", children: proposal.subject };
  const tmp6 = VibegrationsNativeCardSurfaceDefault;
  items[2] = tmp4Result2;
  return closure_1_19(tmp6, {
    children: closure_1_20(Stack_Stack.Stack, { direction: "vertical", spacing: 8, children: items }),
  });
}
get_ActivityIndicator = fn(17);
({
  ActivityIndicator: hasOwnProperty,
  Image: metroRequire,
  Pressable: closure_7,
  View: closure_8,
} = get_ActivityIndicator);
let VibegrationsChatStore = fn(12852);
({ getOlderHistoryCursor: c10, turnSettled: closure_11 } = VibegrationsChatStore);
let VibegrationsChatStore = VibegrationsChatStore_mod;
let VibegrationsConnectionStore = fn(12851);
({
  ensureConnection: map1,
  getAttachmentUrl: closure_14,
  interruptTurn: closure_15,
  sendUserMessage: closure_16,
} = VibegrationsConnectionStore);
let VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
let diff = fn(16566).MESSAGE_CONTENT_INSET - fn(16566).MESSAGE_EDGE_INSET;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let items = [BLACK, ,];
let obj2 = _modDef672(BLACK);
items[1] = _modDef672(BLACK).alpha(0.2).css();
items[2] = "transparent";
const locations = [0, 0.4, 1];
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const createStyles = fn(4845);
let obj = {
  container: { flex: 1 },
  transcript: { flex: 1 },
  transcriptDimmed: { opacity: 0.4 },
  maskSolid: { flex: 1, backgroundColor: BLACK },
  maskFade: { height: 52 },
  transcriptArea: { flex: 1, position: "relative" },
  transcriptContent: null,
  bottomStack: null,
  row: null,
  rowGroupStart: null,
  avatar: null,
  spoken: null,
  avatarSpoken: null,
  avatarSpokenReplying: null,
  ideasOffer: null,
  header: null,
  planActions: null,
  planReplyHint: null,
  designImage: null,
  designPlaceholder: null,
  ideaCards: null,
  activityBox: null,
  activityDetail: null,
  stepDetail: null,
  stepCommand: null,
  attachmentPills: null,
  attachmentPill: null,
  placeholder: null,
};
const alphaResult = _modDef672(BLACK).alpha(0.2);
obj.transcriptContent = { paddingTop: nativeDefault.space.PX_8 };
obj.bottomStack = { position: "absolute", left: 0, right: 0, bottom: 0 };
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj.row = {
  position: "relative",
  paddingLeft: fn(16566).MESSAGE_CONTENT_INSET,
  paddingRight: fn(16566).MESSAGE_EDGE_INSET,
  paddingVertical: 2,
  gap: PX_8,
};
obj.rowGroupStart = { marginTop: PX_12 };
const rect = { position: "absolute", left: fn(16566).MESSAGE_EDGE_INSET, top: 2 };
obj.avatar = rect;
obj.spoken = { position: "relative", gap: PX_8 };
const rect1 = { left: fn(16566).MESSAGE_EDGE_INSET - fn(16566).MESSAGE_CONTENT_INSET, top: 0 };
obj.avatarSpoken = rect1;
let obj5 = {
  position: "relative",
  paddingLeft: fn(16566).MESSAGE_CONTENT_INSET,
  paddingRight: fn(16566).MESSAGE_EDGE_INSET,
  paddingVertical: 2,
  gap: PX_8,
};
obj.avatarSpokenReplying = { top: fn(16568).REPLY_PREVIEW_HEIGHT + PX_8 };
obj.ideasOffer = { marginTop: PX_12 + 4 - PX_8 };
let obj6 = { top: fn(16568).REPLY_PREVIEW_HEIGHT + PX_8 };
let obj7 = { marginTop: PX_12 + 4 - PX_8 };
obj.header = { marginBottom: -nativeDefault.space.PX_4 };
let obj8 = { marginBottom: -nativeDefault.space.PX_4 };
obj.planActions = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  rowGap: nativeDefault.space.PX_8,
  columnGap: nativeDefault.space.PX_12,
};
obj.planReplyHint = { flexShrink: 1 };
let obj9 = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  rowGap: nativeDefault.space.PX_8,
  columnGap: nativeDefault.space.PX_12,
};
obj.designImage = {
  width: "100%",
  aspectRatio: 1.6,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
let obj10 = {
  width: "100%",
  aspectRatio: 1.6,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj.designPlaceholder = {
  width: "100%",
  aspectRatio: 1.6,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  alignItems: "center",
  justifyContent: "center",
};
obj.ideaCards = { gap: PX_8 };
obj.activityBox = { marginLeft: -diff };
obj.activityDetail = { paddingLeft: diff };
let obj11 = {
  width: "100%",
  aspectRatio: 1.6,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  alignItems: "center",
  justifyContent: "center",
};
obj.stepDetail = {
  marginTop: nativeDefault.space.PX_4,
  paddingLeft: nativeDefault.space.PX_12,
  borderLeftWidth: 2,
  borderLeftColor: nativeDefault.colors.BORDER_SUBTLE,
  gap: 2,
};
obj.stepCommand = { fontFamily: fn(1074).Fonts.CODE_NORMAL, fontSize: 12, lineHeight: 18 };
let obj12 = {
  marginTop: nativeDefault.space.PX_4,
  paddingLeft: nativeDefault.space.PX_12,
  borderLeftWidth: 2,
  borderLeftColor: nativeDefault.colors.BORDER_SUBTLE,
  gap: 2,
};
obj.attachmentPills = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj13 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
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
obj.placeholder = {
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_24,
};
let closure_26 = createStyles.createStyles(obj);
let closure_37 = noop.memo((groupStart) => {
  ({ projectId, message } = groupStart);
  groupStart = groupStart.groupStart;
  ({ isNewest, showsOutdated, checklistSuperseded } = groupStart);
  const onToggleChecklist = groupStart.onToggleChecklist;
  const replied = groupStart.replied;
  const onJumpToReplied = groupStart.onJumpToReplied;
  ({ offersIdeas, onDismissClarification: closure_6, onRestoreVersion } = groupStart);
  let trimmed;
  let user_id;
  let memo5;
  let restoreProposal;
  let clarification;
  c16 = undefined;
  c17 = undefined;
  let index;
  closure_19 = undefined;
  let open;
  ({
    first,
    checklistExpanded,
    onApprovePlan,
    onPickIdea,
    onAskForIdeas,
    onAnswerClarification,
    clarificationDismissed,
  } = groupStart);
  let tmp = closure_26();
  const spoken = tmp;
  items = [message];
  const memo = replied.useMemo(() => {
    const obj = VibegrationsTimelineTree;
    return obj.buildTimelineTree(message.steps, { turnActive: !closure_2_11(message) });
  }, items);
  const items1 = [message];
  const memo1 = replied.useMemo(() => {
    const obj = VibegrationsTimelineTree;
    return obj.turnSegments(message.steps, { turnActive: !closure_2_11(message) });
  }, items1);
  const items2 = [message];
  const memo2 = replied.useMemo(() => VibegrationsTimelineTree.latestTodos(message.steps), items2);
  const items3 = [memo];
  const items4 = [onToggleChecklist, message.render_id, checklistSuperseded];
  const memo3 = replied.useMemo(() => VibegrationsTodoAgents.runningTodoAgents(memo.tasks), items3);
  const items5 = [onJumpToReplied, replied];
  const callback = replied.useCallback(() => onToggleChecklist(message.render_id, checklistSuperseded), items4);
  const items6 = [message.content];
  const callback1 = replied.useCallback(() => {
    if (null != replied) {
      if (onJumpToReplied != null) {
        tmp2(tmp.id);
      }
    }
  }, items5);
  const memo4 = replied.useMemo(
    () => VibegrationsDesignFeedback.parseVibegrationsDesignRemark(message.content),
    items6,
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
  const items7 = [tmp.row];
  let rowGroupStart = groupStart;
  if (groupStart) {
    rowGroupStart = !first;
  }
  if (rowGroupStart) {
    rowGroupStart = tmp.rowGroupStart;
  }
  items7[1] = rowGroupStart;
  user_id = undefined;
  if ("user" === message.role) {
    user_id = message.user_id;
  }
  const items8 = [message, onRestoreVersion];
  memo5 = obj.useMemo(() => {
    let turnRestoreEntryResult = null;
    if (null != onRestoreVersion) {
      turnRestoreEntryResult = VibegrationsChatRestore.turnRestoreEntry(message);
    }
    return turnRestoreEntryResult;
  }, items8);
  const items9 = [trimmed, user_id, memo5, onRestoreVersion];
  const callback2 = obj.useCallback(() => {
    const obj2 = { content: trimmed, userId: user_id, onRestoreVersion: null };
    let fn;
    if (null != memo5) {
      if (null != onRestoreVersion) {
        fn = () => message(checklistSuperseded[32]).confirmRestoreVersion(() => closure_1_7(closure_1_13));
      }
    }
    obj2.onRestoreVersion = fn;
    return VibegrationsMessageActionSheet.showVibegrationsMessageActions(obj2);
  }, items9);
  if ("" === trimmed) {
    if ("user" === message.role) {
      if ("" === trimmed) {
        if (null == memo4) {
          let tmp95Result2 = null;
        }
        return tmp95Result2;
      }
      let obj3 = { style: items7, onLongPress: tmp15, accessible: false, children: null };
      let tmp97 = null;
      if (groupStart) {
        let obj4 = { style: tmp.avatar, children: null };
        let obj5 = { userId: message.user_id };
        obj4.children = closure_19(message(checklistSuperseded[37]).VibegrationsUserAvatar, obj5);
        tmp97 = closure_19(spoken, obj4);
      }
      const items10 = [tmp97, , ,];
      let tmp102 = null;
      if (groupStart) {
        let obj6 = { style: tmp.header, children: null };
        ({ user_id: obj49.userId, created_at: obj49.at } = message);
        obj6.children = closure_19(message(checklistSuperseded[37]).VibegrationsUserHeader, { userId: null, at: null });
        tmp102 = closure_19(spoken, obj6);
        const obj7 = { userId: null, at: null };
      }
      items10[1] = tmp102;
      if (tmp14) {
        let combined;
        if (!groupStart) {
          const intl4 = message(checklistSuperseded[15]).intl;
          const _HermesInternal = HermesInternal;
          combined = "" + intl4.string(message(checklistSuperseded[15]).t.KD6OJJ) + ": " + trimmed;
        }
        const obj8 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: null };
        let tmp112 = null;
        if (null != memo4) {
          const obj9 = { label: memo4.label, variant: "text-md/medium" };
          tmp112 = closure_19(groupStart(checklistSuperseded[38]), obj9);
        }
        const items11 = [tmp112, ,];
        let str4 = null;
        if (null != memo4) {
          str4 = null;
          if (tmp14) {
            str4 = " ";
          }
        }
        items11[1] = str4;
        items11[2] = trimmed;
        obj8.children = items11;
        let tmp95Result = tmp95(message(checklistSuperseded[18]).Text, obj8);
      } else {
        tmp95Result = null;
      }
      items10[2] = tmp95Result;
      let tmp115 = null;
      if (null != attachments) {
        const obj10 = { projectId, attachments };
        tmp115 = closure_19(AttachmentPills, obj10);
      }
      items10[3] = tmp115;
      obj3.children = items10;
      tmp95Result2 = tmp95(onRestoreVersion, obj3);
    } else {
      if ("publish_notice" === message.kind) {
        if (null != message.publishNotice) {
          const obj11 = { style: items7, children: null };
          const obj12 = { projectId, notice: message.publishNotice };
          obj11.children = closure_19(groupStart(checklistSuperseded[39]), obj12);
          return closure_19(spoken, obj11);
        }
      }
      if (true === message.interrupted) {
        const obj13 = { style: items7, children: null };
        const obj14 = { style: tmp.activityBox, children: null };
        const obj15 = { line: null, live: false, settled: true, inGutter: true, glyph: null };
        const intl3 = message(checklistSuperseded[15]).intl;
        obj15.line = intl3.string(groupStart(checklistSuperseded[16])["5T7DSm"]);
        const obj16 = { size: "refresh_sm", color: groupStart(checklistSuperseded[9]).colors.TEXT_MUTED };
        obj15.glyph = closure_19(message(checklistSuperseded[40]).StopIcon, obj16);
        obj14.children = closure_19(groupStart(checklistSuperseded[10]), obj15);
        obj13.children = closure_19(spoken, obj14);
        return closure_19(spoken, obj13);
      } else {
        let steps = message.steps;
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
        const tmp18 = trimmed(message);
        let ideas = null;
        if (tmp18) {
          ideas = null;
          if (null != message.ideas) {
            ideas = null;
            if (message.ideas.length > 0) {
              ideas = message.ideas;
            }
          }
        }
        let tmp20 = null;
        if (tmp18) {
          let publishCta = message.publishCta;
          if (publishCta == null) {
            publishCta = null;
          }
          tmp20 = publishCta;
        }
        let tmp22 = null;
        if (tmp18) {
          let secretRequest = message.secretRequest;
          if (secretRequest == null) {
            secretRequest = null;
          }
          tmp22 = secretRequest;
        }
        const activeAwaitingUserResult = message(checklistSuperseded[41]).activeAwaitingUser(message, isNewest);
        let tmp27 = null;
        if (tmp18) {
          let settingsRequest = message.settingsRequest;
          if (settingsRequest == null) {
            settingsRequest = null;
          }
          tmp27 = settingsRequest;
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
        let items19 = memo2;
        if (memo2 == null) {
          let todos = null;
          if (null != message.todos) {
            todos = null;
            if (message.todos.length > 0) {
              todos = message.todos;
            }
          }
          items19 = todos;
        }
        if (null == items19) {
          if (null != message.provisionalTodo) {
            if ("" !== message.provisionalTodo) {
              const provisionalTodo = message.provisionalTodo;
            }
          }
        }
        let obj2 = message(checklistSuperseded[41]);
        const tmp17 = trimmed;
        const obj17 = {
          steps: message.steps,
          content: trimmed,
          hasProposal: null != proposal,
          hasAttachments: null != attachments,
        };
        const turnPresentation = message(checklistSuperseded[42]).resolveTurnPresentation(obj17);
        ({ showsClosingMessage, replyKey: c16 } = turnPresentation);
        let tmp33 = memo.steps.length > 0;
        if (!tmp33) {
          tmp33 = memo.tasks.length > 0;
        }
        if (!tmp33) {
          if (0 === turnPresentation.streamed.length) {
            if ("" === trimmed) {
              if (null == proposal) {
                if (null == found) {
                  if (null == ideas) {
                    if (null == items19) {
                      if (null == provisionalTodo) {
                        if (null == tmp22) {
                          if (null == tmp27) {
                            if (null == attachments) {
                              if (null == clarification) {
                                if (null == restoreProposal) {
                                  if (null == tmp20) {
                                    if (!offersIdeas) {
                                      if (!showsOutdated) {
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
        const tmp24Result = message(checklistSuperseded[42]);
        const turnLeadsWithStretchResult = message(checklistSuperseded[42]).turnLeadsWithStretch(
          tmp33,
          turnPresentation,
        );
        c17 = turnLeadsWithStretchResult;
        const found1 = memo1.filter((hasWork) => hasWork.hasWork);
        const atResult = found1.at(-1);
        index = undefined;
        if (atResult != null) {
          index = atResult.index;
        }
        const tmp37 = !tmp17(message);
        closure_19 = tmp37;
        const tmp24Result4 = message(checklistSuperseded[42]);
        const obj18 = { turnActive: tmp37 };
        open = message(checklistSuperseded[25]).turnLifecycle(memo1, obj18).open;
        let avatarSpokenReplying = groupStart;
        if (groupStart) {
          avatarSpokenReplying = null != replied;
        }
        let tmp41Result = null;
        if (avatarSpokenReplying) {
          const obj19 = { replied, onJump: null };
          let tmp44;
          if (null != onJumpToReplied) {
            tmp44 = callback1;
          }
          obj19.onJump = tmp44;
          tmp41Result = closure_19(groupStart(checklistSuperseded[13]), obj19);
          const tmp43 = groupStart(checklistSuperseded[13]);
        }
        const items12 = [tmp41Result, ,];
        const items13 = [, ,];
        ({ avatar: arr14[0], avatarSpoken: arr14[1] } = tmp);
        if (avatarSpokenReplying) {
          avatarSpokenReplying = tmp.avatarSpokenReplying;
        }
        const obj20 = { children: null };
        const obj21 = { style: null, children: null };
        items13[2] = avatarSpokenReplying;
        obj21.style = items13;
        obj21.children = closure_19(message(checklistSuperseded[37]).VibegrationsConjureAvatar, {});
        items12[1] = closure_19(spoken, obj21);
        const obj22 = { style: tmp.header, children: null };
        const obj23 = { at: message.created_at };
        obj22.children = closure_19(message(checklistSuperseded[37]).VibegrationsConjureHeader, obj23);
        items12[2] = closure_19(spoken, obj22);
        obj20.children = items12;
        const tmp38Result = open(closure_21, obj20);
        const obj24 = { style: items7, onLongPress: tmp15, accessible: false, children: null };
        let tmp45Result = null;
        if (turnLeadsWithStretchResult) {
          tmp45Result = null;
          if (groupStart) {
            const obj25 = { style: tmp.spoken, children: tmp38Result };
            tmp45Result = tmp45(tmp46, obj25);
          }
        }
        const items14 = [
          tmp45Result,
          memo1.map((prose, index) => {
            let tmp18Result = null;
            if (null != prose.prose) {
              tmp18Result = null;
              if (prose.prose.key !== c16) {
                const obj2 = { style: spoken.spoken, children: null };
                const obj3 = { source: prose.prose.content, streaming: null };
                let tmp5 = closure_19;
                if (closure_19) {
                  tmp5 = index === memo1.length - 1;
                }
                if (tmp5) {
                  tmp5 = !prose.hasWork;
                }
                obj3.streaming = tmp5;
                obj2.children = closure_2_19(VibegrationsNativeMarkdown.VibegrationsRevealedMarkdown, obj3);
                tmp18Result = closure_2_19(React6, obj2);
              }
            }
            const children = [tmp18Result];
            let tmp7Result = null;
            if (prose.hasWork) {
              index = prose.index;
              const obj = { steps: null, tasks: null };
              const steps = memo.steps;
              obj.steps = steps.filter((segment) => segment.segment === index);
              const tasks = memo.tasks;
              obj.tasks = tasks.filter((task) => task.task.segment === index);
              if (prose.index === index) {
                if (null != memo.turn) {
                  const obj4 = { turn: memo.turn };
                  let obj6 = obj4;
                }
                const obj5 = { tree: null, turnActive: null, besideAvatar: null };
                const merged = Object.assign(obj6);
                obj5.tree = obj;
                obj5.turnActive = prose.index === open;
                let tmp15 = c17;
                if (c17) {
                  tmp15 = groupStart;
                }
                if (tmp15) {
                  tmp15 = 0 === index;
                }
                if (tmp15) {
                  let tmp16 = null == prose.prose;
                  if (!tmp16) {
                    tmp16 = prose.prose.key === c16;
                  }
                  tmp15 = tmp16;
                }
                obj5.besideAvatar = tmp15;
                tmp7Result = closure_2_19(ActivityBox, obj5);
              }
              obj6 = {};
            }
            children[1] = tmp7Result;
            return closure_2_20(noop.Fragment, { children }, prose.key);
          }),
          ,
          ,
          ,
        ];
        if (!showsClosingMessage) {
          if (null == proposal) {
            if (null == clarification) {
              if (null == restoreProposal) {
                if (null == ideas) {
                  if (null == tmp22) {
                    if (null == tmp27) {
                      if (null == attachments) {
                        if (null == found) {
                          if (null == items19) {
                            if (null == provisionalTodo) {
                              let tmp38Result2 = null;
                            }
                            items14[2] = tmp38Result2;
                            let tmp45Result16 = null;
                            if (showsOutdated) {
                              const obj26 = { style: tmp.spoken, children: null };
                              const obj27 = { projectId, notice: "outdated" };
                              obj26.children = tmp45(groupStart(checklistSuperseded[39]), obj27);
                              tmp45Result16 = tmp45(tmp46, obj26);
                            }
                            items14[3] = tmp45Result16;
                            let tmp45Result17 = null;
                            if (null != activeAwaitingUserResult) {
                              const obj28 = { style: tmp.spoken, children: null };
                              const obj29 = { variant: "text-xs/normal", color: "text-muted", children: null };
                              const intl2 = message(checklistSuperseded[15]).intl;
                              obj29.children = intl2.string(groupStart(checklistSuperseded[16])["1LEnd8"]);
                              obj28.children = tmp45(message(checklistSuperseded[18]).Text, obj29);
                              tmp45Result17 = tmp45(tmp46, obj28);
                            }
                            items14[4] = tmp45Result17;
                            let tmp45Result18 = null;
                            if (offersIdeas) {
                              const obj30 = { style: null, onAsk: null, attribution: null };
                              const items15 = [,];
                              ({ spoken: arr17[0], ideasOffer: arr17[1] } = tmp);
                              obj30.style = items15;
                              obj30.onAsk = onAskForIdeas;
                              const obj31 = { children: null };
                              const obj32 = { style: null, children: null };
                              const items16 = [,];
                              ({ avatar: arr18[0], avatarSpoken: arr18[1] } = tmp);
                              obj32.style = items16;
                              obj32.children = tmp45(message(checklistSuperseded[37]).VibegrationsConjureAvatar, {});
                              const items17 = [tmp45(tmp46, obj32)];
                              const obj33 = {
                                style: tmp.header,
                                children: tmp45(message(checklistSuperseded[37]).VibegrationsConjureHeader, {}),
                              };
                              items17[1] = tmp45(tmp46, obj33);
                              obj31.children = items17;
                              obj30.attribution = tmp38(closure_21, obj31);
                              tmp45Result18 = tmp45(groupStart(checklistSuperseded[49]), obj30);
                              const tmp83 = groupStart(checklistSuperseded[49]);
                            }
                            items14[5] = tmp45Result18;
                            obj24.children = items14;
                            return tmp38(onRestoreVersion, obj24);
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
        let tmp51 = null;
        if (groupStart) {
          tmp51 = null;
          if (!turnLeadsWithStretchResult) {
            tmp51 = tmp38Result;
          }
        }
        const items18 = [tmp51, , , , , , , , , , , ,];
        let tmp45Result19 = null;
        if (showsClosingMessage) {
          const obj35 = { source: turnPresentation.closingContent };
          tmp45Result19 = tmp45(groupStart(checklistSuperseded[21]), obj35);
        }
        items18[1] = tmp45Result19;
        let tmp45Result20 = null;
        if ("side_reply" === message.kind) {
          const obj36 = { variant: "text-xs/normal", color: "text-muted", children: null };
          const intl = message(checklistSuperseded[15]).intl;
          obj36.children = intl.string(groupStart(checklistSuperseded[16]).OAjkIT);
          tmp45Result20 = tmp45(message(checklistSuperseded[18]).Text, obj36);
        }
        items18[2] = tmp45Result20;
        let tmp45Result21 = null;
        if (null != attachments) {
          const obj37 = { projectId, attachments };
          tmp45Result21 = tmp45(AttachmentPills, obj37);
        }
        items18[3] = tmp45Result21;
        if (null != items19) {
          const tmp60 = groupStart(checklistSuperseded[19]);
          if (items19 == null) {
            items19 = [];
          }
          const obj38 = { children: null };
          const obj39 = {
            todos: items19,
            provisional: provisionalTodo,
            agents: memo3,
            live: null,
            superseded: null,
            expanded: null,
            onToggleExpanded: null,
          };
          const tmp61 = groupStart(checklistSuperseded[43]);
          obj39.live = message(checklistSuperseded[44]).checklistLive(message);
          obj39.superseded = checklistSuperseded;
          obj39.expanded = checklistExpanded;
          obj39.onToggleExpanded = callback;
          obj38.children = tmp45(tmp61, obj39);
          let tmp45Result22 = tmp45(tmp60, obj38);
          const tmp24Result6 = message(checklistSuperseded[44]);
        } else {
          tmp45Result22 = null;
        }
        items18[4] = tmp45Result22;
        let tmp45Result23 = null;
        if (null != proposal) {
          const obj40 = { projectId, proposal, onApprove: onApprovePlan };
          tmp45Result23 = tmp45(ProposalCard, obj40);
        }
        items18[5] = tmp45Result23;
        let tmp45Result24 = null;
        if (null != clarification) {
          const obj41 = {
            clarification,
            onSubmit: onAnswerClarification,
            onDismiss() {
              return closure_1_6(clarification.id);
            },
          };
          tmp45Result24 = tmp45(groupStart(checklistSuperseded[45]), obj41);
        }
        items18[6] = tmp45Result24;
        let tmp45Result25 = null;
        if (null != tmp22) {
          const obj42 = { projectId, request: tmp22, awaiting: activeAwaitingUserResult };
          tmp45Result25 = tmp45(groupStart(checklistSuperseded[46]), obj42);
        }
        items18[7] = tmp45Result25;
        let tmp45Result26 = null;
        if (null != tmp27) {
          const obj43 = { projectId, request: tmp27 };
          tmp45Result26 = tmp45(groupStart(checklistSuperseded[47]), obj43);
        }
        items18[8] = tmp45Result26;
        let tmp45Result27 = null;
        if (null != tmp20) {
          const obj44 = { projectId };
          tmp45Result27 = tmp45(groupStart(checklistSuperseded[48]), obj44);
        }
        items18[9] = tmp45Result27;
        let tmp45Result28 = null;
        if (null != ideas) {
          const obj45 = { ideas, onPick: onPickIdea };
          tmp45Result28 = tmp45(IdeaCards, obj45);
        }
        items18[10] = tmp45Result28;
        let tmp45Result29 = null;
        if (null != restoreProposal) {
          const obj46 = { proposal: restoreProposal, onRestore: null };
          let fn;
          if (isNewest) {
            if (null != onRestoreVersion) {
              fn = () =>
                VibegrationsVersionHistorySheet.confirmRestoreVersion(() =>
                  onRestoreVersion(message(checklistSuperseded[35]).proposalRestoreEntry(restoreProposal)),
                );
            }
          }
          obj46.onRestore = fn;
          tmp45Result29 = tmp45(RestoreProposalCard, obj46);
        }
        items18[11] = tmp45Result29;
        let tmp45Result30 = null;
        if (null != found) {
          tmp45Result30 = null;
          if ("message" in found) {
            const obj47 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
            tmp45Result30 = tmp45(message(checklistSuperseded[18]).Text, obj47);
          }
        }
        items18[12] = tmp45Result30;
        obj34.children = items18;
        tmp38Result2 = tmp38(tmp46, obj34);
        const tmp24Result5 = message(checklistSuperseded[25]);
      }
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeChat.tsx");

export default function VibegrationsNativeChat(projectId) {
  projectId = projectId.projectId;
  let num = projectId.transcriptTopInset;
  if (num === undefined) {
    num = 0;
  }
  const onRestoreVersion = projectId.onRestoreVersion;
  let stateFromStores;
  let stateFromStores2;
  c6 = undefined;
  let stateFromStores3;
  c8 = undefined;
  let stateFromStores9;
  let stateFromStores10;
  let render_id;
  let set;
  c13 = undefined;
  c14 = undefined;
  let onToggleChecklist;
  closure_16 = undefined;
  closure_17 = undefined;
  let onPickIdea;
  let vibegrationsIdeasOfferShown;
  closure_20 = undefined;
  closure_21 = undefined;
  c22 = undefined;
  c23 = undefined;
  let canSend;
  let memo1;
  let memo3;
  let memo4;
  c28 = undefined;
  c29 = undefined;
  let bound;
  let ref4;
  let ref;
  let callback2;
  let callback3;
  c40 = undefined;
  let callback5;
  closure_44 = undefined;
  let onJumpToReplied;
  c46 = undefined;
  let tmp = memo3();
  items = [stateFromStores9];
  stateFromStores = projectId(stateFromStores[50]).useStateFromStores(
    items,
    () => "active" === stateFromStores9.getState(),
    [],
  );
  let obj2 = stateFromStores2;
  const items1 = [stateFromStores, projectId];
  const effect = stateFromStores2.useEffect(() => {
    if (stateFromStores) {
      map1(projectId);
    }
  }, items1);
  let obj = projectId(stateFromStores[50]);
  const ackVibegrationsProjectWhileViewing = projectId(stateFromStores[52]).useAckVibegrationsProjectWhileViewing(
    projectId,
  );
  const obj3 = projectId(stateFromStores[52]);
  const items2 = [set];
  const items3 = [projectId];
  const stateFromStores1 = projectId(stateFromStores[50]).useStateFromStores(
    items2,
    () => VibegrationsChatStore.getMessages(projectId),
    items3,
  );
  const obj4 = projectId(stateFromStores[50]);
  const items4 = [onPickIdea];
  const items5 = [projectId];
  stateFromStores2 = projectId(stateFromStores[50]).useStateFromStores(
    items4,
    () => {
      const publishStatus = VibegrationsProjectStore.getPublishStatus(projectId);
      let state;
      if (publishStatus != null) {
        state = publishStatus.state;
      }
      if (state == null) {
        state = null;
      }
      return state;
    },
    items5,
  );
  const items6 = [stateFromStores1, stateFromStores2];
  const memo = stateFromStores2.useMemo(
    () => vibegrationsPublishCard.withLivePublishCard(stateFromStores1, stateFromStores2),
    items6,
  );
  const obj5 = projectId(stateFromStores[50]);
  let result = null;
  if (obj6.showsOutdatedNotice(onRestoreVersion(stateFromStores[54])(projectId))) {
    result = tmp2(tmp3[53]).outdatedNoticeRenderId(memo, stateFromStores2);
    const tmp2Result = tmp2(tmp3[53]);
  }
  c6 = result;
  obj6 = projectId(stateFromStores[53]);
  const items7 = [set];
  const items8 = [projectId];
  stateFromStores3 = projectId(stateFromStores[50]).useStateFromStores(
    items7,
    () => VibegrationsChatStore.isThinking(projectId),
    items8,
  );
  const tmp2Result21 = projectId(stateFromStores[50]);
  const items9 = [set];
  const items10 = [projectId];
  const stateFromStores4 = projectId(stateFromStores[50]).useStateFromStores(
    items9,
    () => VibegrationsChatStore.isCompacting(projectId),
    items10,
  );
  const tmp2Result22 = projectId(stateFromStores[50]);
  const items11 = [set];
  const items12 = [projectId];
  const stateFromStores5 = projectId(stateFromStores[50]).useStateFromStores(
    items11,
    () => VibegrationsChatStore.getThinkingActivity(projectId),
    items12,
  );
  const tmp2Result23 = projectId(stateFromStores[50]);
  const items13 = [set];
  const items14 = [projectId];
  const stateFromStores6 = projectId(stateFromStores[50]).useStateFromStores(
    items13,
    () => VibegrationsChatStore.getProjectUsage(projectId),
    items14,
  );
  const tmp2Result24 = projectId(stateFromStores[50]);
  [tmp18, tmp19] = stateFromStores1(obj2.useState(null), 2);
  c8 = tmp19;
  let tmp20 = null == tmp18;
  if (!tmp20) {
    let tmp21 = stateFromStores3;
    if (stateFromStores3) {
      tmp21 = tmp18 === projectId;
    }
    tmp20 = tmp21;
  }
  if (!tmp20) {
    tmp19(null);
  }
  const items15 = [projectId];
  let tmp24 = stateFromStores3;
  const callback = obj2.useCallback(
    () =>
      _undefined((arg0) => {
        let tmp = null;
        if (arg0 !== projectId) {
          tmp = projectId;
        }
        return tmp;
      }),
    items15,
  );
  if (stateFromStores3) {
    tmp24 = tmp18 === projectId;
  }
  const tmp17 = stateFromStores1(obj2.useState(null), 2);
  const items16 = [closure_17];
  const items17 = [projectId];
  const stateFromStores7 = projectId(stateFromStores[50]).useStateFromStores(
    items16,
    () => VibegrationsConnectionStore.getConnState(projectId),
    items17,
  );
  const tmp2Result25 = projectId(stateFromStores[50]);
  const items18 = [closure_17];
  const items19 = [projectId];
  const stateFromStores8 = projectId(stateFromStores[50]).useStateFromStores(
    items18,
    () => VibegrationsConnectionStore.isChatStopped(projectId),
    items19,
  );
  const tmp2Result26 = projectId(stateFromStores[50]);
  const items20 = [set];
  const items21 = [projectId];
  stateFromStores9 = projectId(stateFromStores[50]).useStateFromStores(
    items20,
    () => VibegrationsChatStore.hasLoadedHistory(projectId),
    items21,
  );
  const tmp2Result27 = projectId(stateFromStores[50]);
  const items22 = [set];
  const items23 = [projectId];
  stateFromStores10 = projectId(stateFromStores[50]).useStateFromStores(
    items22,
    () => {
      let hasLoadedHistoryResult = VibegrationsChatStore.hasLoadedHistory(projectId);
      if (hasLoadedHistoryResult) {
        hasLoadedHistoryResult = null != closure_2_10(projectId);
      }
      return hasLoadedHistoryResult;
    },
    items23,
  );
  const tmp2Result28 = projectId(stateFromStores[50]);
  const items24 = [set];
  const items25 = [projectId];
  const stateFromStores11 = projectId(stateFromStores[50]).useStateFromStores(
    items24,
    () => VibegrationsChatStore.isHistoryUnavailable(projectId),
    items25,
  );
  const tmp2Result29 = projectId(stateFromStores[50]);
  const chatEmptyStateResult = projectId(stateFromStores[55]).chatEmptyState({
    historyLoaded: stateFromStores9,
    historyUnavailable: stateFromStores11,
    connState: stateFromStores7,
  });
  render_id = null;
  if (memo.length > 0) {
    render_id = memo[memo.length - 1].render_id;
  }
  const items26 = [memo];
  set = obj2.useMemo(() => VibegrationsTodoState.supersededChecklists(memo), items26);
  const tmp2Result30 = projectId(stateFromStores[55]);
  [c13, c14] = stateFromStores1(
    obj2.useState(() => new Map()),
    2,
  );
  onToggleChecklist = obj2.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined2((get) => projectId(stateFromStores[44]).toggleChecklist(get, closure_0, closure_1));
  }, []);
  const items27 = [memo];
  closure_16 = obj2.useMemo(
    () =>
      VibegrationsChatGrouping.groupChatRows(
        memo.map((key) => {
          const obj = { key: key.render_id, actor: null, authorId: null, boundary: null, separate: null };
          let str = "assistant";
          if ("user" === key.role) {
            str = "user";
          }
          obj.actor = str;
          let user_id;
          if ("user" === key.role) {
            user_id = key.user_id;
          }
          obj.authorId = user_id;
          render_id = undefined;
          if ("user" !== key.role) {
            render_id = key.render_id;
          }
          obj.boundary = render_id;
          let tmp3 = "assistant" === key.role;
          if (tmp3) {
            let tmp5 = null != key.proposal || null != key.clarification;
            if (!tmp5) {
              tmp5 = "side_reply" === key.kind;
            }
            if (!tmp5) {
              tmp5 = null != key.in_reply_to;
            }
            tmp3 = tmp5;
          }
          obj.separate = tmp3;
          return obj;
        }),
      ),
    items27,
  );
  const items28 = [projectId];
  closure_17 = obj2.useCallback(() => {
    const intl = util.intl;
    const result = vibegrationsAttachmentDrafts.sendVibegrationsCardReply(projectId, intl.string(_modDef3714.ga8too));
  }, items28);
  const items29 = [projectId];
  onPickIdea = obj2.useCallback((implementation_prompt) => {
    const result = vibegrationsAttachmentDrafts.sendVibegrationsCardReply(
      projectId,
      implementation_prompt.implementation_prompt,
    );
  }, items29);
  const tmp16Result = stateFromStores1(
    obj2.useState(() => new Map()),
    2,
  );
  [tmp34, tmp35] = stateFromStores1(onRestoreVersion(stateFromStores[58])(projectId), 2);
  const tmp16Result7 = stateFromStores1(onRestoreVersion(stateFromStores[58])(projectId), 2);
  vibegrationsIdeasOfferShown = projectId(stateFromStores[59]).useVibegrationsIdeasOfferShown(
    projectId,
    memo.at(-1),
    tmp34,
  );
  const items30 = [projectId];
  closure_20 = obj2.useCallback(() => {
    const intl = util.intl;
    value2(projectId, intl.string(_modDef3714["3sTTBu"]));
  }, items30);
  const items31 = [projectId];
  closure_21 = obj2.useCallback((implementation_prompt, clarificationAnswers) => {
    const result = vibegrationsAttachmentDrafts.sendVibegrationsCardReply(projectId, implementation_prompt, {
      clarificationAnswers,
    });
  }, items31);
  const tmp2Result31 = projectId(stateFromStores[59]);
  [c22, c23] = stateFromStores1(obj2.useState(null), 2);
  let tmp39 = tmp38;
  if ("open" !== stateFromStores7) {
    tmp39 = "connecting" === stateFromStores7;
  }
  if (tmp39) {
    tmp39 = !stateFromStores8;
  }
  canSend = tmp39;
  const items32 = [memo];
  memo1 = obj2.useMemo(() => vibegrationsPendingPlan.pendingPlanRenderId(memo), items32);
  const items33 = [result, vibegrationsIdeasOfferShown, tmp39, memo1];
  const items34 = [memo];
  const memo2 = obj2.useMemo(
    () => ({ outdatedId, ideasOfferShown: vibegrationsIdeasOfferShown, canSend, pendingPlanId: memo1 }),
    items33,
  );
  memo3 = obj2.useMemo(() => {
    let diff = memo.length - 1;
    if (0 <= diff) {
      while (true) {
        let tmp3 = memo[diff];
        if ("assistant" === tmp3.role) {
          if (!closure_2_11(tmp3)) {
            break;
          }
        }
        diff = diff - 1;
      }
      return diff;
    }
    return null;
  }, items34);
  const items35 = [memo, memo3];
  memo4 = obj2.useMemo(() => {
    let tmp2;
    if (null != memo3) {
      tmp2 = memo[tmp];
    }
    let timelineTree = null;
    if (null != tmp2) {
      timelineTree = VibegrationsTimelineTree.buildTimelineTree(tmp2.steps, { turnActive: true });
    }
    return timelineTree;
  }, items35);
  let tmp44 = null != memo4;
  if (tmp44) {
    tmp44 = memo4.steps.length > 0 || memo4.tasks.length > 0;
    const tmp45 = memo4.steps.length > 0 || memo4.tasks.length > 0;
  }
  const items36 = [memo4];
  let memo5 = obj2.useMemo(() => {
    let currentStepResult;
    if (null != memo4) {
      currentStepResult = VibegrationsTimelineTree.currentStep(tmp.steps);
    }
    let describeNodeResult = null;
    if (null != currentStepResult) {
      describeNodeResult = VibegrationsTimelineTree.describeNode(currentStepResult);
    }
    return describeNodeResult;
  }, items36);
  const tmp16Result8 = stateFromStores1(obj2.useState(null), 2);
  [obj19, c28] = stateFromStores1(obj2.useState(null), 2);
  const tmp16Result9 = stateFromStores1(obj2.useState(null), 2);
  [tmp49, c29] = stateFromStores1(obj2.useState(64), 2);
  const callback1 = obj2.useCallback((nativeEvent) => {
    closure_0 = Math.round(nativeEvent.nativeEvent.layout.height);
    _undefined4((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  const tmp16Result10 = stateFromStores1(obj2.useState(64), 2);
  bound = tmp49;
  if (!tmp2Result32.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp49, 52);
  }
  obj2.useRef(null);
  obj2.useRef(null);
  obj2.useRef(false);
  obj2.useRef(true);
  ref4 = obj2.useRef(0);
  obj2.useRef(0);
  ref = obj2.useRef(false);
  callback2 = obj2.useCallback(() => {
    const animationFrame = requestAnimationFrame(() => {
      if (ref2.current) {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd({ animated: false });
        }
      }
    });
  }, []);
  callback3 = obj2.useCallback(() => {
    const timestamp = Date.now();
    closure_35.current = timestamp + 500;
    closure_36.current = timestamp + 2000;
  }, []);
  const items37 = [projectId, callback3];
  const effect1 = obj2.useEffect(() => {
    closure_34.current = true;
    callback3();
  }, items37);
  const items38 = [stateFromStores9, callback3];
  const effect2 = obj2.useEffect(() => {
    if (stateFromStores9) {
      callback3();
    }
  }, items38);
  const items39 = [stateFromStores10, memo.length, callback2, callback3];
  const effect3 = obj2.useEffect(() => {
    if (stateFromStores10) {
      ref.current = true;
      callback3();
    } else if (ref.current) {
      ref.current = false;
      callback3();
      callback2();
    }
  }, items39);
  const callback4 = obj2.useCallback(() => {
    closure_34.current = false;
  }, []);
  tmp2Result32 = projectId(stateFromStores[29]);
  [tmp61, c40] = stateFromStores1(obj2.useState(false), 2);
  obj2.useRef(null);
  obj2.useRef(0);
  callback5 = obj2.useCallback(() => {
    const current = ref6.current;
    const current2 = ref.current;
    if (null != current) {
      const current3 = ref.current;
      let layout;
      if (current3 != null) {
        layout = current3.getLayout(current);
      }
    }
    let tmp5 = null != current2;
    if (tmp5) {
      tmp5 = null != tmp;
    }
    if (tmp5) {
      tmp5 = tmp.y >= current2.offsetY + current2.viewportHeight - ref7.current;
    }
    _undefined(tmp5);
  }, []);
  const items40 = [callback5];
  const items41 = [callback2, callback5];
  const callback6 = obj2.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    closure_32.current = {
      offsetY: nativeEvent.contentOffset.y,
      viewportHeight: nativeEvent.layoutMeasurement.height,
      contentHeight: nativeEvent.contentSize.height,
    };
    callback5();
  }, items40);
  const callback7 = obj2.useCallback((arg0, contentHeight) => {
    const timestamp = Date.now();
    let current = ref3.current;
    if (current) {
      current = timestamp < ref4.current;
    }
    if (current) {
      const _Math = Math;
      ref4.current = Math.min(timestamp + 500, ref5.current);
      callback2();
    }
    const current2 = ref.current;
    if (null != current2) {
      if (current2.contentHeight - current2.offsetY - current2.viewportHeight <= 0.2 * current2.viewportHeight) {
        const obj2 = {};
        const merged = Object.assign(current2);
        obj2.contentHeight = contentHeight;
        const _Math2 = Math;
        obj2.offsetY = Math.max(0, contentHeight - current2.viewportHeight);
        let obj = obj2;
      } else {
        obj = {};
        const merged1 = Object.assign(current2);
        obj.contentHeight = contentHeight;
      }
      tmp7.current = obj;
      if (ref2.current) {
        tmp14.current = false;
        const current3 = ref.current;
        if (current3 != null) {
          current3.scrollToEnd({ animated: true });
        }
      }
      callback5();
    }
  }, items41);
  const items42 = [callback5];
  const memo6 = obj2.useMemo(
    () => ({ itemVisiblePercentThreshold: projectId(stateFromStores[61]).MIN_VISIBLE_PERCENT }),
    [],
  );
  const callback8 = obj2.useCallback((arg0) => {
    set = new Set();
    const iter = arg0.viewableItems[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult.key) {
        let addResult = set.add(tmp2.key);
      }
      continue;
    }
    _undefined3(set);
    callback5();
  }, items42);
  if (stateFromStores4) {
    const intl2 = tmp2(tmp3[15]).intl;
    memo5 = intl2.string(tmp5(tmp3[16])["0vH/5G"]);
  } else if (memo5 == null) {
    let intl = tmp2(tmp3[15]).intl;
    memo5 = intl.string(tmp5(tmp3[16]).QDGuNS);
  }
  const items43 = [memo, memo3];
  let tmp68;
  const memo7 = obj2.useMemo(() => {
    if (null == memo3) {
      return null;
    } else if (null == memo[tmp]) {
      return null;
    } else {
      let latestTodosResult = VibegrationsTimelineTree.latestTodos(tmp3.steps);
      if (null == latestTodosResult) {
        let todos = null;
        if (null != tmp3.todos) {
          todos = null;
          if (tmp3.todos.length > 0) {
            todos = tmp3.todos;
          }
        }
        latestTodosResult = todos;
      }
      return latestTodosResult;
    }
  }, items43);
  if (null != memo3) {
    tmp68 = memo[memo3];
  }
  let checklistLiveResult = null == tmp68;
  if (!checklistLiveResult) {
    checklistLiveResult = tmp2(tmp3[44]).checklistLive(tmp68);
    const tmp2Result33 = tmp2(tmp3[44]);
  }
  if (null != tmp68) {
    const result1 = tmp2(tmp3[62]).vibegrationsTurnStartedAt(tmp68);
    const tmp2Result34 = tmp2(tmp3[62]);
  }
  const items44 = [memo4];
  let tmp72;
  const memo8 = obj2.useMemo(() => {
    if (null != memo4) {
      let runningTodoAgentsResult = VibegrationsTodoAgents.runningTodoAgents(tmp.tasks);
    } else {
      runningTodoAgentsResult = [];
    }
    return runningTodoAgentsResult;
  }, items44);
  if (null != memo3) {
    let render_id1;
    if (memo[memo3] != null) {
      render_id1 = tmp73.render_id;
    }
    tmp72 = render_id1;
  }
  let tmp75 = null != tmp72;
  if (tmp75) {
    tmp75 = (null != obj19 && !obj19.has(tmp72)) || tmp61;
    const tmp76 = (null != obj19 && !obj19.has(tmp72)) || tmp61;
  }
  let tmp77 = null;
  if (stateFromStores3) {
    tmp77 = null;
    if (tmp44) {
      tmp77 = null;
      if (tmp75) {
        tmp77 = memo5;
      }
    }
  }
  const items45 = [bound, memo3, callback5];
  const effect4 = obj2.useEffect(() => {
    closure_41.current = memo3;
    closure_42.current = bound;
    closure_0 = requestAnimationFrame(callback5);
    return () => cancelAnimationFrame(closure_0);
  }, items45);
  const items46 = [memo];
  closure_44 = obj2.useMemo(() => {
    const map = new Map();
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if ("assistant" === nextResult.role) {
        if (null != tmp3.in_reply_to) {
          let obj2 = vibegrations_VibegrationsRepliedMessage;
          let repliedMessageResult = obj2.repliedMessage(memo, tmp3.in_reply_to);
          if (null != repliedMessageResult) {
            let result = map.set(tmp3.render_id, tmp10);
          }
        }
      }
      continue;
    }
    return map;
  }, items46);
  const items47 = [memo];
  onJumpToReplied = obj2.useCallback((arg0) => {
    closure_0 = arg0;
    const findIndexResult = memo.findIndex((id) => id.id === closure_0);
    if (findIndexResult >= 0) {
      closure_34.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: findIndexResult, animated: true, viewPosition: 0.5 };
        current.scrollToIndex(obj);
      }
    }
  }, items47);
  const items48 = [bound, memo3];
  const callback9 = obj2.useCallback(() => {
    if (null != memo3) {
      closure_34.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items48);
  const tmp16Result11 = stateFromStores1(obj2.useState(false), 2);
  [tmp81, c46] = stateFromStores1(obj2.useState(false), 2);
  const items49 = [projectId];
  const effect5 = obj2.useEffect(() => {
    if (obj.shouldShowVibegrationsConjureTip(timeout)) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        const result = projectId(stateFromStores[64]).markVibegrationsConjureTipShown();
        _undefined5(true);
      }, 0);
      return () => clearTimeout(closure_0);
    }
    obj = projectId(stateFromStores[64]);
  }, items49);
  const items50 = [projectId];
  const callback10 = obj2.useCallback(() => _undefined5(false), []);
  const items51 = [projectId];
  const callback11 = obj2.useCallback((arg0, arg1) => {
    closure_33.current = true;
    value2(projectId, arg0, arg1);
  }, items50);
  let connectionLabelResult = null;
  const callback12 = obj2.useCallback(() => {
    __initData(projectId);
  }, items51);
  if ("open" !== stateFromStores7) {
    connectionLabelResult = tmp2(tmp3[65]).connectionLabel(stateFromStores7);
    const tmp2Result35 = tmp2(tmp3[65]);
  }
  const tmp16Result12 = stateFromStores1(obj2.useState(false), 2);
  const obj7 = { style: tmp.container, children: null };
  const vibegrationsControlActive = projectId(stateFromStores[66]).useVibegrationsControlActive(projectId);
  const items52 = [
    vibegrationsIdeasOfferShown(onRestoreVersion(stateFromStores[67]), {
      thinking: stateFromStores3,
      bleedBottom: onRestoreVersion(stateFromStores[51])().bottom,
    }),
    ,
  ];
  const obj8 = { style: tmp.transcriptArea, children: null };
  const obj9 = { clearance: tmp49, children: null };
  const obj10 = {
    ref,
    fadingEdgeLength: 52,
    removeClippedSubviews: null,
    viewabilityConfig: null,
    onViewableItemsChanged: null,
    onScroll: null,
    onScrollBeginDrag: null,
    onContentSizeChange: null,
    scrollEventThrottle: 16,
    contentInset: null,
    ListHeaderComponent: null,
    pointerEvents: null,
    style: null,
    contentContainerStyle: null,
    data: null,
    extraData: null,
    maintainVisibleContentPosition: null,
    keyExtractor: null,
    ListEmptyComponent: null,
    renderItem: null,
  };
  const tmp2Result36 = projectId(stateFromStores[66]);
  const tmp91 = ref4;
  const tmp2Result37 = projectId(stateFromStores[29]);
  obj10.removeClippedSubviews = projectId(stateFromStores[29]).isIOS() && undefined;
  obj10.viewabilityConfig = memo6;
  obj10.onViewableItemsChanged = callback8;
  obj10.onScroll = callback6;
  obj10.onScrollBeginDrag = callback4;
  obj10.onContentSizeChange = callback7;
  const tmp92 = projectId(stateFromStores[29]).isIOS() && undefined;
  let tmp93;
  if (tmp2Result38.isIOS()) {
    const obj11 = { top: num };
    tmp93 = obj11;
  }
  obj10.contentInset = tmp93;
  tmp2Result38 = projectId(stateFromStores[29]);
  let tmp90Result = null;
  if (!tmp2Result39.isIOS()) {
    tmp90Result = null;
    if (num > 0) {
      const obj12 = { style: null };
      const obj13 = { height: num };
      obj12.style = obj13;
      tmp90Result = tmp90(tmp89, obj12);
    }
  }
  obj10.ListHeaderComponent = tmp90Result;
  let str2 = "auto";
  if (tmp81) {
    str2 = "none";
  }
  obj10.pointerEvents = str2;
  const items53 = [tmp.transcript, ,];
  let transcriptDimmed = tmp81;
  if (tmp81) {
    transcriptDimmed = tmp.transcriptDimmed;
  }
  items53[1] = transcriptDimmed;
  tmp2Result39 = projectId(stateFromStores[29]);
  const isIOSResult = projectId(stateFromStores[29]).isIOS();
  let tmp96 = !isIOSResult;
  if (!isIOSResult) {
    const obj14 = { marginBottom: tmp49 - bound };
    tmp96 = obj14;
  }
  items53[2] = tmp96;
  obj10.style = items53;
  const items54 = [tmp.transcriptContent];
  const tmp2Result40 = projectId(stateFromStores[29]);
  items54[1] = { paddingBottom: bound + onRestoreVersion(stateFromStores[9]).space.PX_8 };
  obj10.contentContainerStyle = items54;
  obj10.data = memo;
  obj10.extraData = memo2;
  obj10.maintainVisibleContentPosition = { startRenderingFromBottom: true, autoscrollToBottomThreshold: 0.2 };
  obj10.keyExtractor = function keyExtractor(render_id) {
    return render_id.render_id;
  };
  let tmp97 = "loading" === chatEmptyStateResult;
  if (tmp97) {
    obj10.ListEmptyComponent = null;
    obj10.renderItem = function renderItem(arg0) {
      ({ item, index } = arg0);
      const obj = {
        projectId,
        message: item,
        groupStart: null,
        first: null,
        isNewest: null,
        showsOutdated: null,
        checklistSuperseded: null,
        checklistExpanded: null,
        onToggleChecklist: null,
        replied: null,
        onJumpToReplied: null,
        onApprovePlan: null,
        onPickIdea: null,
        offersIdeas: null,
        onAskForIdeas: null,
        onAnswerClarification: null,
        clarificationDismissed: null,
        onDismissClarification: null,
        onRestoreVersion: null,
      };
      let flag = closure_16[index];
      if (flag == null) {
        flag = true;
      }
      obj.groupStart = flag;
      obj.first = 0 === index;
      obj.isNewest = item.render_id === render_id;
      obj.showsOutdated = item.render_id === c6;
      obj.checklistSuperseded = set.has(item.render_id);
      obj.checklistExpanded = VibegrationsTodoState.checklistExpanded(c13, item.render_id, set.has(item.render_id));
      obj.onToggleChecklist = onToggleChecklist;
      obj.replied = closure_44.get(item.render_id);
      obj.onJumpToReplied = onJumpToReplied;
      let tmp5;
      if (closure_24) {
        if (item.render_id === memo1) {
          tmp5 = closure_17;
        }
      }
      obj.onApprovePlan = tmp5;
      obj.onPickIdea = onPickIdea;
      obj.offersIdeas = item.render_id === render_id && vibegrationsIdeasOfferShown;
      let tmp7;
      if (closure_24) {
        tmp7 = closure_20;
      }
      obj.onAskForIdeas = tmp7;
      let tmp8;
      if (closure_24) {
        tmp8 = closure_21;
      }
      obj.onAnswerClarification = tmp8;
      let tmp9 = null != item.clarification;
      if (tmp9) {
        tmp9 = item.clarification.id === c22;
      }
      obj.clarificationDismissed = tmp9;
      obj.onDismissClarification = onDismissClarification;
      let tmp11;
      if (!stateFromStores3) {
        tmp11 = onRestoreVersion;
      }
      obj.onRestoreVersion = tmp11;
      return closure_2_19(closure_37, obj);
    };
    obj9.children = tmp90(tmp2(tmp3[68]).FlashList, obj10);
    const items55 = [tmp90(tmp91, obj9), ,];
    let tmp90Result4 = null;
    if (tmp24) {
      const obj16 = { projectId };
      tmp90Result4 = tmp90(tmp5(tmp3[69]), obj16);
    }
    items55[1] = tmp90Result4;
    let tmp90Result5 = null;
    if (null != tmp77) {
      const obj17 = {
        line: tmp77,
        onJumpToActivity: callback9,
        bottom: tmp5(tmp3[9]).space.PX_12 + tmp49,
        todos: memo7,
        todosLive: checklistLiveResult,
        agents: memo8,
      };
      tmp90Result5 = tmp90(tmp5(tmp3[70]), obj17);
      const tmp5Result = tmp5(tmp3[70]);
    }
    items55[2] = tmp90Result5;
    obj8.children = items55;
    items52[1] = tmp88(tmp89, obj8);
    const obj18 = { style: tmp.bottomStack, onLayout: callback1, children: null };
    const obj20 = {
      projectId,
      thinking: stateFromStores3,
      turnStartedAt: result1,
      compacting: stateFromStores4,
      recalling: null,
      activity: null,
      projectUsage: null,
      connLabel: null,
      controlling: null,
      connFailed: null,
      thinkingOpen: null,
      onToggleThinking: null,
    };
    if (tmp97) {
      tmp97 = 0 === memo.length;
    }
    obj20.recalling = tmp97;
    obj20.activity = stateFromStores5;
    obj20.projectUsage = stateFromStores6;
    obj20.connLabel = connectionLabelResult;
    obj20.controlling = vibegrationsControlActive;
    obj20.connFailed = "failed" === stateFromStores7;
    obj20.thinkingOpen = tmp24;
    obj20.onToggleThinking = callback;
    const items56 = [tmp90(tmp5(tmp3[71]), obj20)];
    const obj21 = {
      projectId,
      canSend: tmp39,
      running: stateFromStores3,
      stopped: stateFromStores8,
      onSend: callback11,
      onInterrupt: null,
      tipOpen: null,
      onDismissTip: null,
      onDraftHasTextChange: null,
    };
    let tmp104;
    const tmp5Result3 = tmp5(tmp3[71]);
    if (stateFromStores3) {
      tmp104 = callback12;
    }
    obj21.onInterrupt = tmp104;
    obj21.tipOpen = tmp81;
    obj21.onDismissTip = callback10;
    obj21.onDraftHasTextChange = tmp35;
    items56[1] = tmp90(tmp5(tmp3[72]), obj21);
    obj18.children = items56;
    items52[2] = tmp88(tmp89, obj18);
    obj7.children = items52;
    return tmp88(tmp89, obj7);
  } else {
    const obj22 = { style: tmp.placeholder, children: null };
    const intl3 = tmp2(tmp3[15]).intl;
    if ("unavailable" === chatEmptyStateResult) {
      let jTuX7C = tmp5(tmp3[16]).s4oxNv;
    } else {
      jTuX7C = tmp5(tmp3[16]).jTuX7C;
    }
    const obj23 = { variant: "text-sm/normal", color: "text-muted", children: intl3.string(jTuX7C) };
    obj22.children = tmp90(tmp2(tmp3[18]).Text, obj23);
    tmp90(tmp89, obj22);
  }
}
