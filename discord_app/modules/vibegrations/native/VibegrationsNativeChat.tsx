// discord_app/modules/vibegrations/native/VibegrationsNativeChat.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../_runtime/metro/00672__.js";
import util from "../../../intl/index.native.tsx";
import _modDef3715 from "../intl/VibegrationsUntranslated.messages.js";
import MarkupUtilsDefault from "../../markup/MarkupUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import LinearGradientDefault from "../../../../_runtime/05459_LinearGradient.js";
import Card from "../../../design/components/Card/native/Card.native.tsx";
import _modDef6142 from "../../../../_runtime/metro/06142__.js";
import VibegrationsDesignFeedback from "../lib/VibegrationsDesignFeedback.tsx";
import VibegrationsVersionHistorySheet from "VibegrationsVersionHistorySheet.tsx";
import VibegrationsNativeStatusLineDefault from "VibegrationsNativeStatusLine.tsx";
import VibegrationsMessageActionSheet from "VibegrationsMessageActionSheet.tsx";
import useVibegrationsPlanDesign from "../lib/useVibegrationsPlanDesign.tsx";
import VibegrationsNativeCardSurfaceDefault from "VibegrationsNativeCardSurface.tsx";
import VibegrationsNativeMarkdown from "VibegrationsNativeMarkdown.tsx";
import VibegrationsTimelineTree from "../lib/VibegrationsTimelineTree.tsx";
import VibegrationsDuration from "../lib/VibegrationsDuration.tsx";
import VibegrationsSubagentMark from "VibegrationsSubagentMark.tsx";
import VibegrationsTodoAgents from "../lib/VibegrationsTodoAgents.tsx";
import VibegrationsChatRestore from "../lib/VibegrationsChatRestore.tsx";
import vibegrationsPublishCard from "../lib/vibegrationsPublishCard.tsx";
import VibegrationsTodoState from "../lib/VibegrationsTodoState.tsx";
import VibegrationsChatGrouping from "../lib/VibegrationsChatGrouping.tsx";
import vibegrationsAttachmentDrafts from "../lib/vibegrationsAttachmentDrafts.tsx";
import vibegrations_VibegrationsRepliedMessage from "../lib/VibegrationsRepliedMessage.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import VibegrationsChatStore from "../stores/VibegrationsChatStore.tsx";
import VibegrationsConnectionStore_mod from "../stores/VibegrationsConnectionStore.tsx";
import VibegrationsProjectStore from "../stores/VibegrationsProjectStore.tsx";

require = fn;
function PlanDesign(arg0) {
  ({ projectId, design } = arg0);
  const tmp = closure_25();
  const vibegrationsPlanDesign = useVibegrationsPlanDesign.useVibegrationsPlanDesign(projectId, design.id);
  const src = vibegrationsPlanDesign.src;
  if (vibegrationsPlanDesign.gone) {
    return null;
  } else {
    const intl = util.intl;
    const stringResult = intl.string(_modDef3715.FW8UcU);
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl2 = util.intl;
    obj2.children = intl2.string(_modDef3715["9W8SbY"]);
    items = [collapsedCategories(Text_Text.Text, obj2)];
    if (null == src) {
      const obj3 = { style: tmp.designPlaceholder, children: null };
      const obj4 = { size: "small", accessibilityLabel: stringResult };
      obj3.children = collapsedCategories(hasOwnProperty, obj4);
      let tmp9Result = collapsedCategories(React6, obj3);
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
      tmp9Result = collapsedCategories(timestampProducer, obj5);
    }
    const obj7 = { direction: "vertical", spacing: 4, children: null };
    items[1] = tmp9Result;
    obj7.children = items;
    return closure_1_19(Stack_Stack.Stack, obj7);
  }
}
function ProposalCard(projectId) {
  ({ proposal, onApprove } = projectId);
  const tmp = closure_25();
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
  obj.children = intl.string(_modDef3715["60htw+"]);
  items = [collapsedCategories(Text_Text.Text, obj), , , , , ,];
  if ("" === trimmed) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef3715.IHCafX);
  } else {
    stringResult = MarkupUtilsDefault.parse(trimmed, true, VibegrationsNativeMarkdown.VIBEGRATIONS_MARKUP_OPTIONS);
    const tmp4Result = MarkupUtilsDefault;
  }
  items[1] = collapsedCategories(Text_Text.Text, {
    variant: "text-md/normal",
    color: "text-default",
    children: stringResult,
  });
  let tmp3Result = null;
  if (null != proposal.design_image) {
    const obj2 = { projectId: projectId.projectId, design: proposal.design_image };
    tmp3Result = collapsedCategories(PlanDesign, obj2);
  }
  items[2] = tmp3Result;
  let tmp7Result = null;
  if (proposal.changes.length > 0) {
    const obj3 = { direction: "vertical", spacing: 4, children: null };
    const obj4 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl3 = util.intl;
    obj4.children = intl3.string(_modDef3715.KLyB8Y);
    const items1 = [collapsedCategories(Text_Text.Text, obj4)];
    const changes = proposal.changes;
    items1[1] = changes.map((item, index) =>
      closure_1_18(
        Text_Text.Text,
        { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item },
        index,
      ),
    );
    obj3.children = items1;
    tmp7Result = closure_1_19(Stack_Stack.Stack, obj3);
  }
  items[3] = tmp7Result;
  let tmp7Result4 = null;
  if (bot_permissions.length > 0) {
    const obj5 = { direction: "vertical", spacing: 4, children: null };
    const obj6 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl4 = util.intl;
    obj6.children = intl4.string(_modDef3715.ieqTtP);
    const items2 = [collapsedCategories(Text_Text.Text, obj6)];
    const obj7 = { variant: "text-sm/normal", color: "text-default", children: bot_permissions.join(", ") };
    items2[1] = collapsedCategories(Text_Text.Text, obj7);
    obj5.children = items2;
    tmp7Result4 = closure_1_19(Stack_Stack.Stack, obj5);
  }
  items[4] = tmp7Result4;
  let tmp7Result5 = null;
  if (privileged_intents.length > 0) {
    const obj8 = { direction: "vertical", spacing: 4, children: null };
    const obj9 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl5 = util.intl;
    obj9.children = intl5.string(_modDef3715.Cn9qix);
    const items3 = [collapsedCategories(Text_Text.Text, obj9)];
    const obj10 = { variant: "text-sm/normal", color: "text-default", children: privileged_intents.join(", ") };
    items3[1] = collapsedCategories(Text_Text.Text, obj10);
    obj8.children = items3;
    tmp7Result5 = closure_1_19(Stack_Stack.Stack, obj8);
  }
  items[5] = tmp7Result5;
  let tmp7Result6 = null;
  if (null != onApprove) {
    const obj11 = { style: tmp.planActions, children: null };
    const obj12 = { text: null, variant: "primary", onPress: null };
    const intl6 = util.intl;
    obj12.text = intl6.string(_modDef3715["hG0Y0+"]);
    obj12.onPress = onApprove;
    const items4 = [collapsedCategories(components_Button_Button.Button, obj12)];
    const obj13 = { variant: "text-sm/normal", color: "text-muted", style: tmp.planReplyHint, children: null };
    const intl7 = util.intl;
    obj13.children = intl7.string(_modDef3715.Vl3IL0);
    items4[1] = collapsedCategories(Text_Text.Text, obj13);
    obj11.children = items4;
    tmp7Result6 = closure_1_19(React6, obj11);
  }
  const tmp6 = VibegrationsNativeCardSurfaceDefault;
  items[6] = tmp7Result6;
  return collapsedCategories(tmp6, {
    children: closure_1_19(Stack_Stack.Stack, { direction: "vertical", spacing: 8, children: items }),
  });
}
function IdeaCards(arg0) {
  ({ ideas, onPick: require } = arg0);
  let obj = { style: closure_25().ideaCards, children: null };
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
  let intl = util.intl;
  obj2.children = intl.string(_modDef3715.DAvYsi);
  items = [
    closure_18(Text_Text.Text, obj2),
    ideas.map((title) => {
      closure_0 = title;
      const obj = {
        onPress() {
          return require(closure_0);
        },
        accessibilityLabel: null,
        children: null,
      };
      const intl = util.intl;
      obj.accessibilityLabel = intl.formatToPlainString(_modDef3715.pztRGi, { title: title.title });
      items = [
        closure_1_18(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", children: title.title }),
      ];
      let tmpResult = null;
      if ("" !== title.value) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = closure_1_18(Text_Text.Text, obj4);
      }
      items[1] = tmpResult;
      obj.children = closure_1_19(Stack_Stack.Stack, { direction: "vertical", spacing: 4, children: items });
      return closure_1_18(Card.Card, obj, title.id);
    }),
  ];
  obj.children = items;
  return closure_19(closure_8, obj);
}
function AttachmentPills(projectId) {
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp = closure_25();
  closure_1 = tmp;
  items = [projectId];
  dependencyMap = noop.useCallback((arg0) => {
    const promise = map1(projectId, arg0);
    map1(projectId, arg0)
      .then((result) => closure_1_1(dependencyMap[23]).openURL(result))
      .catch(() => {});
  }, items);
  return closure_18(closure_8, {
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
        obj.accessibilityLabel = intl.formatToPlainString(closure_1(3715).QUFLUq, obj2);
        const obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
        obj.children = closure_1_18(projectId(4832).Text, obj3);
        let tmp12 = closure_1_18(projectId(6085).Card, obj, id.id);
      } else {
        const obj4 = { style: closure_1.attachmentPill, children: null };
        const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
        const intl2 = projectId(1115).intl;
        const obj6 = { name: id.name };
        obj5.children = intl2.formatToPlainString(closure_1(3715).OBr7WW, obj6);
        obj4.children = closure_1_18(projectId(4832).Text, obj5);
        const _HermesInternal = HermesInternal;
        tmp12 = closure_1_18(closure_1_8, obj4, "" + id.name + "-" + index);
      }
      return tmp12;
    }),
  });
}
function IdeasOffer(onAsk) {
  onAsk = onAsk.onAsk;
  const tmp = closure_25();
  const obj = { style: tmp.ideasOffer, children: null };
  const obj2 = { style: tmp.ideasOfferHint, children: null };
  const obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj3.children = intl.string(_modDef3715.tG5PBo);
  obj2.children = collapsedCategories(Text_Text.Text, obj3);
  items = [collapsedCategories(React6, obj2)];
  const obj4 = { variant: "secondary", size: "sm", disabled: null == onAsk, onPress: onAsk, text: null };
  const intl2 = util.intl;
  obj4.text = intl2.string(_modDef3715.cwTe5o);
  items[1] = collapsedCategories(components_Button_Button.Button, obj4);
  obj.children = items;
  return closure_1_19(React6, obj);
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
  const tmp = closure_25();
  const tmp6 = VibegrationsNativeStatusLineDefault;
  obj.line = VibegrationsTimelineTree.describeNode(node);
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
      children: VibegrationsDuration.describeDuration(node.durationMs),
    };
    tmp4Result = collapsedCategories(Text_Text.Text, obj3);
    const tmp7Result = VibegrationsDuration;
  }
  obj.trailing = tmp4Result;
  const children = [collapsedCategories(tmp6, obj)];
  let tmp4Result2 = null;
  if (node.detail.length > 0) {
    const obj4 = { style: tmp.stepDetail, children: null };
    const detail = node.detail;
    obj4.children = detail.map((children, index) =>
      closure_1_18(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children }, index),
    );
    tmp4Result2 = collapsedCategories(React6, obj4);
  }
  children[1] = tmp4Result2;
  return closure_1_19(React6, { children });
}
function TurnStatusLine(epoch) {
  ({ tree, turnActive } = epoch);
  epoch = epoch.epoch;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_25();
  [tmp3, c2] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const currentStepResult = turnActive(16529).currentStep(tree.steps);
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
    groupLabel = turnActive(16530).describeTurnDuration(tmp8);
    const tmp5Result = turnActive(16530);
  } else if (null != currentStepResult) {
    groupLabel = turnActive(16529).describeNode(currentStepResult);
    const tmp5Result2 = turnActive(16529);
  } else if (groupLabel == null) {
    const intl = turnActive(1115).intl;
    groupLabel = intl.string(epoch(3715).nv6pUM);
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
    epoch,
    expanded: tmp3,
    onToggle: null,
  };
  let tmp19;
  let obj = turnActive(16529);
  if (someResult) {
    tmp19 = callback;
  }
  obj2.onToggle = tmp19;
  const children = [closure_18(epoch(16514), obj2)];
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
        return collapsedCategories(TimelineRow, obj, node.id);
      });
      tmp17Result = closure_18(closure_8, obj3);
    }
  }
  children[1] = tmp17Result;
  return closure_19(closure_8, { children });
}
function LaneStatusLine(arg0) {
  ({ lane, mark } = arg0);
  ({ turnActive, epoch } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_25();
  [tmp3, c2] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  if (turnActive) {
    turnActive = tmp5;
  }
  let currentStepResult;
  if (turnActive) {
    currentStepResult = mark(16529).currentStep(lane.steps);
    const obj = mark(16529);
  }
  _slicedToArray = currentStepResult;
  const tmp9 = lane.task.detail.length > 0 || lane.steps.length > 0;
  if ("running" === lane.task.status) {
    if (null != currentStepResult) {
      let describeNodeResult = mark(16529).describeNode(currentStepResult);
      const obj4 = mark(16529);
    } else {
      describeNodeResult = mark(16531).taskTitle(lane.task);
      const obj3 = mark(16531);
    }
  } else {
    const obj2 = mark(16531);
    const obj5 = {
      line: mark(16531).describeTaskOutcome(lane.task),
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
    const describeTaskOutcomeResult = mark(16531).describeTaskOutcome(lane.task);
    if (!turnActive) {
      tmp26 = "failed" !== lane.task.status;
    }
    obj5.settled = tmp26;
    obj5.failed = "failed" === lane.task.status;
    obj5.glyph = closure_18(mark.Illocon, { size: 16, accessible: false });
    obj5.crestColor = mark.tint;
    obj5.epoch = epoch;
    obj5.expanded = tmp3;
    let tmp27;
    if (tmp9) {
      tmp27 = callback;
    }
    obj5.onToggle = tmp27;
    items = [closure_18(epoch(16514), obj5)];
    let tmp21Result = null;
    if (tmp3) {
      tmp21Result = null;
      if (tmp9) {
        const obj6 = { style: tmp.activityDetail, children: null };
        const detail = lane.task.detail;
        const items1 = [
          detail.map((children, index) =>
            closure_1_18(
              mark(_undefined[17]).Text,
              { variant: "text-xs/normal", color: "text-feedback-critical", children },
              index,
            ),
          ),
        ];
        const steps = lane.steps;
        items1[1] = steps.map((node) =>
          collapsedCategories(TimelineRow, { node, live: node === c3, crestColor: mark.tint, epoch }, node.id),
        );
        obj6.children = items1;
        tmp21Result = closure_19(closure_8, obj6);
      }
    }
    const obj7 = { children: null };
    items[1] = tmp21Result;
    obj7.children = items;
    return closure_19(closure_8, obj7);
  }
  const tmp2 = _slicedToArray(noop.useState(false), 2);
}
function ActivityBox(arg0) {
  ({ tree, turnActive } = arg0);
  let length;
  dependencyMap = undefined;
  if (0 === tree.steps.length) {
    if (0 === tree.tasks.length) {
      return null;
    }
  }
  length = tree.tasks.length;
  const tmp = closure_25();
  const tasks = tree.tasks;
  dependencyMap = turnActive(16532).subagentIllocons(tasks.map((taskId) => taskId.taskId));
  let obj2 = { style: tmp.activityBox, children: null };
  items = [closure_18(TurnStatusLine, { tree, turnActive, epoch: length })];
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
      tmp5 = collapsedCategories(LaneStatusLine, obj2, task.taskId);
    }
    return tmp5;
  });
  obj2.children = items;
  return closure_19(closure_8, obj2);
}
function TranscriptFade(children) {
  children = children.children;
  const tmp = closure_25();
  let tmp3 = children;
  if (obj.isIOS()) {
    const obj2 = { style: tmp.transcript, maskElement: null, children: null };
    const obj3 = { style: tmp.transcript, children: null };
    const obj4 = { style: tmp.maskSolid };
    items = [collapsedCategories(React6, obj4), ,];
    const obj5 = { style: tmp.maskFade, colors: items, locations, start, end };
    items[1] = collapsedCategories(LinearGradientDefault, obj5);
    const obj6 = { style: null };
    const obj7 = { height: null };
    const _Math = Math;
    obj7.height = Math.max(0, children.clearance - 52);
    obj6.style = obj7;
    items[2] = collapsedCategories(React6, obj6);
    obj3.children = items;
    obj2.maskElement = closure_1_19(React6, obj3);
    obj2.children = children;
    tmp3 = collapsedCategories(_modDef6142, obj2);
  }
  return tmp3;
}
function RestoreProposalCard(arg0) {
  ({ proposal, onRestore } = arg0);
  const authoredAgoResult = VibegrationsVersionHistorySheet.authoredAgo(proposal.authored_at);
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3715.khdMoL);
  items = [collapsedCategories(Text_Text.Text, obj2), ,];
  const items1 = [
    collapsedCategories(Text_Text.Text, {
      variant: "text-md/medium",
      color: "text-default",
      children: proposal.subject,
    }),
  ];
  let tmp4Result = null;
  if (null != authoredAgoResult) {
    const obj4 = { variant: "text-sm/normal", color: "text-muted", children: authoredAgoResult };
    tmp4Result = collapsedCategories(Text_Text.Text, obj4);
  }
  items1[1] = tmp4Result;
  items[1] = closure_1_19(Stack_Stack.Stack, { direction: "vertical", spacing: 4, children: items1 });
  let tmp4Result2 = null;
  if (null != onRestore) {
    const obj5 = { text: null, variant: "secondary", onPress: null };
    const intl2 = util.intl;
    obj5.text = intl2.string(_modDef3715.eSDVDt);
    obj5.onPress = onRestore;
    tmp4Result2 = collapsedCategories(components_Button_Button.Button, obj5);
  }
  const obj3 = { variant: "text-md/medium", color: "text-default", children: proposal.subject };
  const tmp6 = VibegrationsNativeCardSurfaceDefault;
  items[2] = tmp4Result2;
  return collapsedCategories(tmp6, {
    children: closure_1_19(Stack_Stack.Stack, { direction: "vertical", spacing: 8, children: items }),
  });
}
get_ActivityIndicator = fn(17);
({
  ActivityIndicator: hasOwnProperty,
  Image: metroRequire,
  Pressable: closure_7,
  View: closure_8,
} = get_ActivityIndicator);
const turnSettled = fn(12813).turnSettled;
let VibegrationsConnectionStore = fn(12812);
({
  ensureConnection: closure_12,
  getAttachmentUrl: map1,
  interruptTurn: closure_14,
  sendUserMessage: closure_15,
} = VibegrationsConnectionStore);
let VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
let diff = fn(16514).MESSAGE_CONTENT_INSET - fn(16514).MESSAGE_EDGE_INSET;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let items = [BLACK, ,];
let obj2 = _modDef672(BLACK);
items[1] = _modDef672(BLACK).alpha(0.2).css();
items[2] = "transparent";
const locations = [0, 0.4, 1];
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const createStyles = fn(4836);
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
  header: null,
  planActions: null,
  planReplyHint: null,
  designImage: null,
  designPlaceholder: null,
  ideaCards: null,
  activityBox: null,
  activityDetail: null,
  stepDetail: null,
  attachmentPills: null,
  attachmentPill: null,
  ideasOffer: null,
  ideasOfferHint: null,
  placeholder: null,
};
const alphaResult = _modDef672(BLACK).alpha(0.2);
obj.transcriptContent = { paddingTop: nativeDefault.space.PX_8 };
obj.bottomStack = { position: "absolute", left: 0, right: 0, bottom: 0 };
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj.row = {
  position: "relative",
  paddingLeft: fn(16514).MESSAGE_CONTENT_INSET,
  paddingRight: fn(16514).MESSAGE_EDGE_INSET,
  paddingVertical: 2,
  gap: PX_8,
};
obj.rowGroupStart = { marginTop: nativeDefault.space.PX_12 };
const rect = { position: "absolute", left: fn(16514).MESSAGE_EDGE_INSET, top: 2 };
obj.avatar = rect;
obj.spoken = { position: "relative", gap: PX_8 };
const rect1 = { left: fn(16514).MESSAGE_EDGE_INSET - fn(16514).MESSAGE_CONTENT_INSET, top: 0 };
obj.avatarSpoken = rect1;
let obj5 = {
  position: "relative",
  paddingLeft: fn(16514).MESSAGE_CONTENT_INSET,
  paddingRight: fn(16514).MESSAGE_EDGE_INSET,
  paddingVertical: 2,
  gap: PX_8,
};
obj.avatarSpokenReplying = { top: fn(16516).REPLY_PREVIEW_HEIGHT + PX_8 };
let obj6 = { top: fn(16516).REPLY_PREVIEW_HEIGHT + PX_8 };
obj.header = { marginBottom: -nativeDefault.space.PX_4 };
let obj7 = { marginBottom: -nativeDefault.space.PX_4 };
obj.planActions = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  rowGap: nativeDefault.space.PX_8,
  columnGap: nativeDefault.space.PX_12,
};
obj.planReplyHint = { flexShrink: 1 };
let obj8 = {
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
let obj9 = {
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
let obj10 = {
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
let obj11 = {
  marginTop: nativeDefault.space.PX_4,
  paddingLeft: nativeDefault.space.PX_12,
  borderLeftWidth: 2,
  borderLeftColor: nativeDefault.colors.BORDER_SUBTLE,
  gap: 2,
};
obj.attachmentPills = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj12 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj.attachmentPill = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_4,
};
obj.ideasOffer = { flexDirection: "row", alignItems: "center", gap: PX_8 };
obj.ideasOfferHint = { flexShrink: 1 };
let obj13 = {
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
let closure_25 = createStyles.createStyles(obj);
let closure_37 = noop.memo((onToggleChecklist) => {
  ({ projectId, message } = onToggleChecklist);
  ({ groupStart, isNewest, checklistSuperseded } = onToggleChecklist);
  onToggleChecklist = onToggleChecklist.onToggleChecklist;
  const replied = onToggleChecklist.replied;
  const onJumpToReplied = onToggleChecklist.onJumpToReplied;
  ({ onDismissClarification: closure_5, onRestoreVersion } = onToggleChecklist);
  let trimmed;
  let user_id;
  let memo5;
  let restoreProposal;
  let clarification;
  c15 = undefined;
  let index;
  closure_17 = undefined;
  let open;
  ({
    first,
    checklistExpanded,
    onApprovePlan,
    onPickIdea,
    onAskForIdeas,
    onAnswerClarification,
    clarificationDismissed,
  } = onToggleChecklist);
  let tmp = closure_25();
  const spoken = tmp;
  items = [message];
  const memo = onJumpToReplied.useMemo(() => {
    const obj = VibegrationsTimelineTree;
    return obj.buildTimelineTree(message.steps, { turnActive: !turnSettled(message) });
  }, items);
  const items1 = [message];
  const memo1 = onJumpToReplied.useMemo(() => {
    const obj = VibegrationsTimelineTree;
    return obj.turnSegments(message.steps, { turnActive: !turnSettled(message) });
  }, items1);
  const items2 = [message];
  const memo2 = onJumpToReplied.useMemo(() => VibegrationsTimelineTree.latestTodos(message.steps), items2);
  const items3 = [memo];
  const items4 = [onToggleChecklist, message.render_id, checklistSuperseded];
  const memo3 = onJumpToReplied.useMemo(() => VibegrationsTodoAgents.runningTodoAgents(memo.tasks), items3);
  const items5 = [onJumpToReplied, replied];
  const callback = onJumpToReplied.useCallback(() => onToggleChecklist(message.render_id, checklistSuperseded), items4);
  const items6 = [message.content];
  const callback1 = onJumpToReplied.useCallback(() => {
    if (null != replied) {
      if (onJumpToReplied != null) {
        tmp2(tmp.id);
      }
    }
  }, items5);
  const memo4 = onJumpToReplied.useMemo(
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
        fn = () => message(onToggleChecklist[31]).confirmRestoreVersion(() => closure_1_6(closure_1_12));
      }
    }
    obj2.onRestoreVersion = fn;
    return VibegrationsMessageActionSheet.showVibegrationsMessageActions(obj2);
  }, items9);
  if ("" === trimmed) {
    if ("user" === message.role) {
      if ("" === trimmed) {
        if (null == memo4) {
          let tmp94Result2 = null;
        }
        return tmp94Result2;
      }
      let obj3 = { style: items7, onLongPress: tmp15, accessible: false, children: null };
      let tmp96 = null;
      if (groupStart) {
        let obj4 = { style: tmp.avatar, children: null };
        let obj5 = { userId: message.user_id };
        obj4.children = open(message(onToggleChecklist[36]).VibegrationsUserAvatar, obj5);
        tmp96 = open(memo, obj4);
      }
      const items10 = [tmp96, , ,];
      let tmp101 = null;
      if (groupStart) {
        let obj6 = { style: tmp.header, children: null };
        ({ user_id: obj44.userId, created_at: obj44.at } = message);
        obj6.children = open(message(onToggleChecklist[36]).VibegrationsUserHeader, { userId: null, at: null });
        tmp101 = open(memo, obj6);
        const obj7 = { userId: null, at: null };
      }
      items10[1] = tmp101;
      if (tmp14) {
        let combined;
        if (!groupStart) {
          const intl4 = message(tmp108[14]).intl;
          const _HermesInternal = HermesInternal;
          combined = "" + intl4.string(message(tmp108[14]).t.KD6OJJ) + ": " + trimmed;
        }
        const obj8 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: null };
        let tmp111 = null;
        if (null != memo4) {
          const obj9 = { label: memo4.label, variant: "text-md/medium" };
          tmp111 = open(checklistSuperseded(tmp108[37]), obj9);
        }
        const items11 = [tmp111, ,];
        let str5 = null;
        if (null != memo4) {
          str5 = null;
          if (tmp14) {
            str5 = " ";
          }
        }
        items11[1] = str5;
        items11[2] = trimmed;
        obj8.children = items11;
        let tmp94Result = closure_19(message(onToggleChecklist[17]).Text, obj8);
      } else {
        tmp94Result = null;
      }
      items10[2] = tmp94Result;
      let tmp114 = null;
      if (null != attachments) {
        const obj10 = { projectId, attachments };
        tmp114 = open(AttachmentPills, obj10);
      }
      items10[3] = tmp114;
      obj3.children = items10;
      tmp94Result2 = closure_19(spoken, obj3);
    } else {
      if ("publish_notice" === message.kind) {
        if (null != message.publishNotice) {
          const obj11 = { style: items7, children: null };
          const obj12 = { projectId, notice: message.publishNotice };
          obj11.children = open(checklistSuperseded(onToggleChecklist[38]), obj12);
          return open(memo, obj11);
        }
      }
      if (true === message.interrupted) {
        const obj13 = { style: items7, children: null };
        const obj14 = { style: tmp.activityBox, children: null };
        const obj15 = { line: null, live: false, settled: true, inGutter: true, glyph: null };
        const intl3 = message(onToggleChecklist[14]).intl;
        obj15.line = intl3.string(checklistSuperseded(onToggleChecklist[15])["5T7DSm"]);
        const obj16 = { size: "refresh_sm", color: checklistSuperseded(onToggleChecklist[8]).colors.TEXT_MUTED };
        obj15.glyph = open(message(onToggleChecklist[39]).StopIcon, obj16);
        obj14.children = open(checklistSuperseded(onToggleChecklist[9]), obj15);
        obj13.children = open(memo, obj14);
        return open(memo, obj13);
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
        const tmp18 = user_id(message);
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
        const activeAwaitingUserResult = message(onToggleChecklist[40]).activeAwaitingUser(message, isNewest);
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
        let items16 = memo2;
        if (memo2 == null) {
          let todos = null;
          if (null != message.todos) {
            todos = null;
            if (message.todos.length > 0) {
              todos = message.todos;
            }
          }
          items16 = todos;
        }
        if (null == items16) {
          if (null != message.provisionalTodo) {
            if ("" !== message.provisionalTodo) {
              const provisionalTodo = message.provisionalTodo;
            }
          }
        }
        let obj2 = message(onToggleChecklist[40]);
        const tmp17 = user_id;
        const obj17 = {
          steps: message.steps,
          content: trimmed,
          hasProposal: null != proposal,
          hasAttachments: null != attachments,
        };
        const turnPresentation = message(onToggleChecklist[41]).resolveTurnPresentation(obj17);
        ({ showsClosingMessage, replyKey: c15 } = turnPresentation);
        let tmp33 = "plan_implemented" === message.kind;
        if (tmp33) {
          tmp33 = isNewest;
        }
        if (!(memo.steps.length > 0 || memo.tasks.length > 0)) {
          if (0 === turnPresentation.streamed.length) {
            if ("" === trimmed) {
              if (null == proposal) {
                if (null == found) {
                  if (null == ideas) {
                    if (null == items16) {
                      if (null == provisionalTodo) {
                        if (null == tmp22) {
                          if (null == tmp27) {
                            if (null == attachments) {
                              if (null == clarification) {
                                if (null == restoreProposal) {
                                  if (null == tmp20) {
                                    if (!tmp33) {
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
        const tmp24Result = message(onToggleChecklist[41]);
        const turnLeadsWithStretchResult = message(onToggleChecklist[41]).turnLeadsWithStretch(
          memo.steps.length > 0 || memo.tasks.length > 0,
          turnPresentation,
        );
        const found1 = memo1.filter((hasWork) => hasWork.hasWork);
        const atResult = found1.at(-1);
        index = undefined;
        if (atResult != null) {
          index = atResult.index;
        }
        const tmp38 = !tmp17(message);
        closure_17 = tmp38;
        const tmp24Result4 = message(onToggleChecklist[41]);
        const obj18 = { turnActive: tmp38 };
        open = message(onToggleChecklist[24]).turnLifecycle(memo1, obj18).open;
        let avatarSpokenReplying = groupStart;
        if (groupStart) {
          avatarSpokenReplying = null != replied;
        }
        let tmp42Result = null;
        if (avatarSpokenReplying) {
          const obj19 = { replied, onJump: null };
          let tmp45;
          if (null != onJumpToReplied) {
            tmp45 = callback1;
          }
          obj19.onJump = tmp45;
          tmp42Result = open(checklistSuperseded(tmp25[12]), obj19);
          const tmp44 = checklistSuperseded(tmp25[12]);
        }
        const items12 = [tmp42Result, ,];
        const items13 = [, ,];
        ({ avatar: arr14[0], avatarSpoken: arr14[1] } = tmp);
        if (avatarSpokenReplying) {
          avatarSpokenReplying = tmp.avatarSpokenReplying;
        }
        const obj20 = { children: null };
        const obj21 = { style: null, children: null };
        items13[2] = avatarSpokenReplying;
        obj21.style = items13;
        obj21.children = open(message(onToggleChecklist[36]).VibegrationsConjureAvatar, {});
        items12[1] = open(memo, obj21);
        const obj22 = { style: tmp.header, children: null };
        const obj23 = { at: message.created_at };
        obj22.children = open(message(onToggleChecklist[36]).VibegrationsConjureHeader, obj23);
        items12[2] = open(memo, obj22);
        obj20.children = items12;
        const tmp39Result = closure_19(closure_20, obj20);
        const obj24 = { style: items7, onLongPress: tmp15, accessible: false, children: null };
        let tmp46Result = null;
        if (turnLeadsWithStretchResult) {
          tmp46Result = null;
          if (groupStart) {
            const obj25 = { style: tmp.spoken, children: tmp39Result };
            tmp46Result = tmp46(tmp47, obj25);
          }
        }
        const items14 = [
          tmp46Result,
          memo1.map((prose, index) => {
            let tmp15Result = null;
            if (null != prose.prose) {
              tmp15Result = null;
              if (prose.prose.key !== c15) {
                const obj = { style: spoken.spoken, children: null };
                const obj2 = { source: prose.prose.content, streaming: null };
                let tmp6 = closure_17;
                if (closure_17) {
                  tmp6 = index === memo1.length - 1;
                }
                if (tmp6) {
                  tmp6 = !prose.hasWork;
                }
                obj2.streaming = tmp6;
                obj.children = collapsedCategories(VibegrationsNativeMarkdown.VibegrationsRevealedMarkdown, obj2);
                tmp15Result = collapsedCategories(React6, obj);
              }
            }
            items = [tmp15Result];
            if (!prose.hasWork) {
              const obj3 = { children: null };
              items[1] = null;
              obj3.children = items;
              return closure_2_19(noop.Fragment, obj3, prose.key);
            } else {
              let turn = memo;
              index = { steps: null, tasks: null };
              const steps = memo.steps;
              index.steps = steps.filter((segment) => segment.segment === index);
              const tasks = memo.tasks;
              index.tasks = tasks.filter((task) => task.task.segment === index);
              if (prose.index !== index) {
                let obj4 = {};
                const obj5 = { tree: null, turnActive: null };
                const merged = Object.assign(obj4);
                obj5.tree = index;
                index = prose.index;
                obj5.turnActive = index === open;
                collapsedCategories(ActivityBox, obj5);
              }
              const obj6 = { turn: null };
              turn = turn.turn;
              obj6.turn = turn;
              obj4 = obj6;
            }
          }),
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
                          if (null == items16) {
                            if (null == provisionalTodo) {
                              if (null == tmp20) {
                                let tmp39Result2 = null;
                              }
                              items14[2] = tmp39Result2;
                              let tmp46Result15 = null;
                              if (null != activeAwaitingUserResult) {
                                const obj26 = { style: tmp.spoken, children: null };
                                const obj27 = { variant: "text-xs/normal", color: "text-muted", children: null };
                                const intl2 = message(tmp25[14]).intl;
                                obj27.children = intl2.string(checklistSuperseded(tmp25[15])["1LEnd8"]);
                                obj26.children = tmp46(message(tmp25[17]).Text, obj27);
                                tmp46Result15 = tmp46(tmp47, obj26);
                              }
                              items14[3] = tmp46Result15;
                              obj24.children = items14;
                              return closure_19(tmp49, obj24);
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
        const obj28 = { style: tmp.spoken, children: null };
        let tmp52 = null;
        if (groupStart) {
          tmp52 = null;
          if (!turnLeadsWithStretchResult) {
            tmp52 = tmp39Result;
          }
        }
        const items15 = [tmp52, , , , , , , , , , , , ,];
        let tmp46Result16 = null;
        if (showsClosingMessage) {
          const obj29 = { source: turnPresentation.closingContent };
          tmp46Result16 = tmp46(checklistSuperseded(tmp25[20]), obj29);
        }
        items15[1] = tmp46Result16;
        let tmp46Result17 = null;
        if ("side_reply" === message.kind) {
          const obj30 = { variant: "text-xs/normal", color: "text-muted", children: null };
          const intl = message(tmp25[14]).intl;
          obj30.children = intl.string(checklistSuperseded(tmp25[15]).OAjkIT);
          tmp46Result17 = tmp46(message(tmp25[17]).Text, obj30);
        }
        items15[2] = tmp46Result17;
        let tmp46Result18 = null;
        if (null != attachments) {
          const obj31 = { projectId, attachments };
          tmp46Result18 = tmp46(AttachmentPills, obj31);
        }
        items15[3] = tmp46Result18;
        if (null != items16) {
          const tmp61 = checklistSuperseded(tmp25[18]);
          if (items16 == null) {
            items16 = [];
          }
          const obj32 = { children: null };
          const obj33 = {
            todos: items16,
            provisional: provisionalTodo,
            agents: memo3,
            live: null,
            superseded: null,
            expanded: null,
            onToggleExpanded: null,
          };
          const tmp62 = checklistSuperseded(tmp25[42]);
          obj33.live = message(tmp25[43]).checklistLive(message);
          obj33.superseded = checklistSuperseded;
          obj33.expanded = checklistExpanded;
          obj33.onToggleExpanded = callback;
          obj32.children = tmp46(tmp62, obj33);
          let tmp46Result19 = tmp46(tmp61, obj32);
          const tmp24Result6 = message(tmp25[43]);
        } else {
          tmp46Result19 = null;
        }
        items15[4] = tmp46Result19;
        let tmp46Result20 = null;
        if (null != proposal) {
          const obj34 = { projectId, proposal, onApprove: null };
          let tmp65;
          if (isNewest) {
            tmp65 = onApprovePlan;
          }
          obj34.onApprove = tmp65;
          tmp46Result20 = tmp46(ProposalCard, obj34);
        }
        items15[5] = tmp46Result20;
        let tmp46Result21 = null;
        if (null != clarification) {
          const obj35 = {
            clarification,
            onSubmit: onAnswerClarification,
            onDismiss() {
              return closure_1_5(clarification.id);
            },
          };
          tmp46Result21 = tmp46(checklistSuperseded(tmp25[44]), obj35);
        }
        items15[6] = tmp46Result21;
        let tmp46Result22 = null;
        if (null != tmp22) {
          const obj36 = { projectId, request: tmp22, awaiting: activeAwaitingUserResult };
          tmp46Result22 = tmp46(checklistSuperseded(tmp25[45]), obj36);
        }
        items15[7] = tmp46Result22;
        let tmp46Result23 = null;
        if (null != tmp27) {
          const obj37 = { projectId, request: tmp27 };
          tmp46Result23 = tmp46(checklistSuperseded(tmp25[46]), obj37);
        }
        items15[8] = tmp46Result23;
        let tmp46Result24 = null;
        if (null != tmp20) {
          const obj38 = { projectId };
          tmp46Result24 = tmp46(checklistSuperseded(tmp25[47]), obj38);
        }
        items15[9] = tmp46Result24;
        let tmp46Result25 = null;
        if (null != ideas) {
          const obj39 = { ideas, onPick: onPickIdea };
          tmp46Result25 = tmp46(IdeaCards, obj39);
        }
        items15[10] = tmp46Result25;
        let tmp46Result26 = null;
        if (null != restoreProposal) {
          const obj40 = { proposal: restoreProposal, onRestore: null };
          let fn;
          if (isNewest) {
            if (null != onRestoreVersion) {
              fn = () =>
                VibegrationsVersionHistorySheet.confirmRestoreVersion(() =>
                  onRestoreVersion(message(onToggleChecklist[34]).proposalRestoreEntry(restoreProposal)),
                );
            }
          }
          obj40.onRestore = fn;
          tmp46Result26 = tmp46(RestoreProposalCard, obj40);
        }
        items15[11] = tmp46Result26;
        let tmp46Result27 = null;
        if (tmp33) {
          const obj41 = { onAsk: onAskForIdeas };
          tmp46Result27 = tmp46(IdeasOffer, obj41);
        }
        items15[12] = tmp46Result27;
        let tmp46Result28 = null;
        if (null != found) {
          tmp46Result28 = null;
          if ("message" in found) {
            const obj42 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
            tmp46Result28 = tmp46(message(tmp25[17]).Text, obj42);
          }
        }
        items15[13] = tmp46Result28;
        obj28.children = items15;
        tmp39Result2 = closure_19(tmp47, obj28);
        const tmp24Result5 = message(onToggleChecklist[24]);
        tmp49 = spoken;
      }
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeChat.tsx");

export default function VibegrationsNativeChat(projectId) {
  projectId = projectId.projectId;
  const onRestoreVersion = projectId.onRestoreVersion;
  let stateFromStores;
  let stateFromStores2;
  let render_id;
  let set;
  c10 = undefined;
  c11 = undefined;
  let onToggleChecklist;
  closure_13 = undefined;
  closure_14 = undefined;
  let onPickIdea;
  closure_16 = undefined;
  closure_17 = undefined;
  c18 = undefined;
  c19 = undefined;
  closure_20 = undefined;
  let memo1;
  let memo2;
  c23 = undefined;
  c24 = undefined;
  let bound;
  let ref;
  c29 = undefined;
  let callback2;
  closure_33 = undefined;
  let onJumpToReplied;
  c35 = undefined;
  let tmp = bound();
  items = [set];
  stateFromStores = projectId(stateFromStores[48]).useStateFromStores(items, () => "active" === set.getState(), []);
  const items1 = [stateFromStores, projectId];
  const effect = stateFromStores2.useEffect(() => {
    if (stateFromStores) {
      closure_2_12(projectId);
    }
  }, items1);
  let obj = projectId(stateFromStores[48]);
  const items2 = [c10];
  const items3 = [projectId];
  const stateFromStores1 = projectId(stateFromStores[48]).useStateFromStores(
    items2,
    () => VibegrationsChatStore.getMessages(projectId),
    items3,
  );
  const obj3 = projectId(stateFromStores[48]);
  const items4 = [closure_17];
  const items5 = [projectId];
  stateFromStores2 = projectId(stateFromStores[48]).useStateFromStores(
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
  const obj4 = projectId(stateFromStores[48]);
  const items7 = [c10];
  const items8 = [projectId];
  const stateFromStores3 = projectId(stateFromStores[48]).useStateFromStores(
    items7,
    () => VibegrationsChatStore.isThinking(projectId),
    items8,
  );
  const obj5 = projectId(stateFromStores[48]);
  const items9 = [c10];
  const items10 = [projectId];
  const stateFromStores4 = projectId(stateFromStores[48]).useStateFromStores(
    items9,
    () => VibegrationsChatStore.isCompacting(projectId),
    items10,
  );
  const obj6 = projectId(stateFromStores[48]);
  const items11 = [c10];
  const items12 = [projectId];
  const stateFromStores5 = projectId(stateFromStores[48]).useStateFromStores(
    items11,
    () => VibegrationsChatStore.getThinkingActivity(projectId),
    items12,
  );
  const obj7 = projectId(stateFromStores[48]);
  const items13 = [c10];
  const items14 = [projectId];
  const stateFromStores6 = projectId(stateFromStores[48]).useStateFromStores(
    items13,
    () => VibegrationsChatStore.getProjectUsage(projectId),
    items14,
  );
  const obj8 = projectId(stateFromStores[48]);
  [tmp16, tmp17] = stateFromStores1(stateFromStores2.useState(null), 2);
  c7 = tmp17;
  let tmp18 = null == tmp16;
  if (!tmp18) {
    let tmp19 = stateFromStores3;
    if (stateFromStores3) {
      tmp19 = tmp16 === projectId;
    }
    tmp18 = tmp19;
  }
  if (!tmp18) {
    tmp17(null);
  }
  const items15 = [projectId];
  let tmp22 = stateFromStores3;
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
    tmp22 = tmp16 === projectId;
  }
  const tmp15 = stateFromStores1(stateFromStores2.useState(null), 2);
  const items16 = [closure_16];
  const items17 = [projectId];
  const stateFromStores7 = projectId(stateFromStores[48]).useStateFromStores(
    items16,
    () => VibegrationsConnectionStore.getConnState(projectId),
    items17,
  );
  const tmp2Result = projectId(stateFromStores[48]);
  const items18 = [closure_16];
  const items19 = [projectId];
  const stateFromStores8 = projectId(stateFromStores[48]).useStateFromStores(
    items18,
    () => VibegrationsConnectionStore.isChatStopped(projectId),
    items19,
  );
  const tmp2Result12 = projectId(stateFromStores[48]);
  const items20 = [c10];
  const items21 = [projectId];
  const stateFromStores9 = projectId(stateFromStores[48]).useStateFromStores(
    items20,
    () => VibegrationsChatStore.hasLoadedHistory(projectId),
    items21,
  );
  const tmp2Result13 = projectId(stateFromStores[48]);
  const items22 = [c10];
  const items23 = [projectId];
  const stateFromStores10 = projectId(stateFromStores[48]).useStateFromStores(
    items22,
    () => VibegrationsChatStore.isHistoryUnavailable(projectId),
    items23,
  );
  const tmp2Result14 = projectId(stateFromStores[48]);
  const chatEmptyStateResult = projectId(stateFromStores[51]).chatEmptyState({
    historyLoaded: stateFromStores9,
    historyUnavailable: stateFromStores10,
    connState: stateFromStores7,
  });
  render_id = null;
  if (memo.length > 0) {
    render_id = memo[memo.length - 1].render_id;
  }
  const items24 = [memo];
  set = obj2.useMemo(() => VibegrationsTodoState.supersededChecklists(memo), items24);
  const tmp2Result15 = projectId(stateFromStores[51]);
  [c10, c11] = stateFromStores1(
    stateFromStores2.useState(() => new Map()),
    2,
  );
  onToggleChecklist = obj2.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined2((get) => projectId(stateFromStores[43]).toggleChecklist(get, closure_0, closure_1));
  }, []);
  const items25 = [memo];
  closure_13 = obj2.useMemo(
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
    items25,
  );
  const items26 = [projectId];
  closure_14 = obj2.useCallback(() => {
    const intl = util.intl;
    const result = vibegrationsAttachmentDrafts.sendVibegrationsCardReply(projectId, intl.string(_modDef3715.ga8too));
  }, items26);
  const items27 = [projectId];
  onPickIdea = obj2.useCallback((implementation_prompt) => {
    const result = vibegrationsAttachmentDrafts.sendVibegrationsCardReply(
      projectId,
      implementation_prompt.implementation_prompt,
    );
  }, items27);
  const items28 = [projectId];
  closure_16 = obj2.useCallback(() => {
    const intl = util.intl;
    __initData(projectId, intl.string(_modDef3715["3sTTBu"]));
  }, items28);
  const items29 = [projectId];
  closure_17 = obj2.useCallback((implementation_prompt, clarificationAnswers) => {
    const result = vibegrationsAttachmentDrafts.sendVibegrationsCardReply(projectId, implementation_prompt, {
      clarificationAnswers,
    });
  }, items29);
  const tmp14Result = stateFromStores1(
    stateFromStores2.useState(() => new Map()),
    2,
  );
  [c18, c19] = stateFromStores1(stateFromStores2.useState(null), 2);
  let tmp32 = tmp31;
  if ("open" !== stateFromStores7) {
    tmp32 = "connecting" === stateFromStores7;
  }
  if (tmp32) {
    tmp32 = !stateFromStores8;
  }
  closure_20 = tmp32;
  const items30 = [memo];
  memo1 = obj2.useMemo(() => {
    let diff = memo.length - 1;
    if (0 <= diff) {
      while (true) {
        let tmp3 = memo[diff];
        if ("assistant" === tmp3.role) {
          if (!turnSettled(tmp3)) {
            break;
          }
        }
        diff = diff - 1;
      }
      return diff;
    }
    return null;
  }, items30);
  const items31 = [memo, memo1];
  memo2 = obj2.useMemo(() => {
    let tmp2;
    if (null != memo1) {
      tmp2 = memo[tmp];
    }
    let timelineTree = null;
    if (null != tmp2) {
      timelineTree = VibegrationsTimelineTree.buildTimelineTree(tmp2.steps, { turnActive: true });
    }
    return timelineTree;
  }, items31);
  let tmp35 = null != memo2;
  if (tmp35) {
    tmp35 = memo2.steps.length > 0 || memo2.tasks.length > 0;
    const tmp36 = memo2.steps.length > 0 || memo2.tasks.length > 0;
  }
  const items32 = [memo2];
  let memo3 = obj2.useMemo(() => {
    let currentStepResult;
    if (null != memo2) {
      currentStepResult = VibegrationsTimelineTree.currentStep(tmp.steps);
    }
    let describeNodeResult = null;
    if (null != currentStepResult) {
      describeNodeResult = VibegrationsTimelineTree.describeNode(currentStepResult);
    }
    return describeNodeResult;
  }, items32);
  const tmp14Result6 = stateFromStores1(stateFromStores2.useState(null), 2);
  [obj14, c23] = stateFromStores1(stateFromStores2.useState(null), 2);
  const tmp14Result7 = stateFromStores1(stateFromStores2.useState(null), 2);
  [tmp40, c24] = stateFromStores1(stateFromStores2.useState(64), 2);
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
  const tmp14Result8 = stateFromStores1(stateFromStores2.useState(64), 2);
  bound = tmp40;
  if (!tmp2Result16.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp40, 52);
  }
  obj2.useRef(null);
  ref = obj2.useRef(null);
  stateFromStores2.useRef(false);
  tmp2Result16 = projectId(stateFromStores[28]);
  [tmp46, c29] = stateFromStores1(stateFromStores2.useState(false), 2);
  stateFromStores2.useRef(null);
  stateFromStores2.useRef(0);
  callback2 = obj2.useCallback(() => {
    const current = ref3.current;
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
      tmp5 = tmp.y >= current2.offsetY + current2.viewportHeight - ref4.current;
    }
    _undefined(tmp5);
  }, []);
  const items33 = [callback2];
  const items34 = [callback2];
  const callback3 = obj2.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    closure_27.current = {
      offsetY: nativeEvent.contentOffset.y,
      viewportHeight: nativeEvent.layoutMeasurement.height,
      contentHeight: nativeEvent.contentSize.height,
    };
    callback2();
  }, items33);
  const callback4 = obj2.useCallback((arg0, contentHeight) => {
    const current = ref.current;
    if (null != current) {
      if (current.contentHeight - current.offsetY - current.viewportHeight <= 0.2 * current.viewportHeight) {
        const obj2 = {};
        const merged = Object.assign(current);
        obj2.contentHeight = contentHeight;
        const _Math = Math;
        obj2.offsetY = Math.max(0, contentHeight - current.viewportHeight);
        let obj = obj2;
      } else {
        obj = {};
        const merged1 = Object.assign(current);
        obj.contentHeight = contentHeight;
      }
      tmp.current = obj;
      if (ref2.current) {
        tmp9.current = false;
        const current2 = ref.current;
        if (current2 != null) {
          current2.scrollToEnd({ animated: true });
        }
      }
      callback2();
    }
  }, items34);
  const items35 = [callback2];
  const memo4 = obj2.useMemo(
    () => ({ itemVisiblePercentThreshold: projectId(stateFromStores[54]).MIN_VISIBLE_PERCENT }),
    [],
  );
  const callback5 = obj2.useCallback((arg0) => {
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
    callback2();
  }, items35);
  if (stateFromStores4) {
    const intl2 = tmp2(tmp3[14]).intl;
    memo3 = intl2.string(tmp5(tmp3[15])["0vH/5G"]);
  } else if (memo3 == null) {
    let intl = tmp2(tmp3[14]).intl;
    memo3 = intl.string(tmp5(tmp3[15]).QDGuNS);
  }
  const items36 = [memo, memo1];
  let tmp53;
  const memo5 = obj2.useMemo(() => {
    if (null == memo1) {
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
  }, items36);
  if (null != memo1) {
    tmp53 = memo[memo1];
  }
  let checklistLiveResult = null == tmp53;
  if (!checklistLiveResult) {
    checklistLiveResult = tmp2(tmp3[43]).checklistLive(tmp53);
    const tmp2Result17 = tmp2(tmp3[43]);
  }
  if (null != tmp53) {
    let result = tmp2(tmp3[55]).vibegrationsTurnStartedAt(tmp53);
    const tmp2Result18 = tmp2(tmp3[55]);
  }
  const items37 = [memo2];
  let tmp57;
  const memo6 = obj2.useMemo(() => {
    if (null != memo2) {
      let runningTodoAgentsResult = VibegrationsTodoAgents.runningTodoAgents(tmp.tasks);
    } else {
      runningTodoAgentsResult = [];
    }
    return runningTodoAgentsResult;
  }, items37);
  if (null != memo1) {
    let render_id1;
    if (memo[memo1] != null) {
      render_id1 = tmp58.render_id;
    }
    tmp57 = render_id1;
  }
  let tmp60 = null != tmp57;
  if (tmp60) {
    tmp60 = (null != obj14 && !obj14.has(tmp57)) || tmp46;
    const tmp61 = (null != obj14 && !obj14.has(tmp57)) || tmp46;
  }
  let tmp62 = null;
  if (stateFromStores3) {
    tmp62 = null;
    if (tmp35) {
      tmp62 = null;
      if (tmp60) {
        tmp62 = memo3;
      }
    }
  }
  const items38 = [bound, memo1, callback2];
  const effect1 = obj2.useEffect(() => {
    closure_30.current = memo1;
    closure_31.current = bound;
    closure_0 = requestAnimationFrame(callback2);
    return () => cancelAnimationFrame(closure_0);
  }, items38);
  const items39 = [memo];
  closure_33 = obj2.useMemo(() => {
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
  }, items39);
  const items40 = [memo];
  onJumpToReplied = obj2.useCallback((arg0) => {
    closure_0 = arg0;
    const findIndexResult = memo.findIndex((id) => id.id === closure_0);
    if (findIndexResult >= 0) {
      const current = ref.current;
      if (current != null) {
        const obj = { index: findIndexResult, animated: true, viewPosition: 0.5 };
        current.scrollToIndex(obj);
      }
    }
  }, items40);
  const items41 = [bound, memo1];
  const callback6 = obj2.useCallback(() => {
    if (null != memo1) {
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items41);
  const tmp14Result9 = stateFromStores1(stateFromStores2.useState(false), 2);
  [tmp66, c35] = stateFromStores1(stateFromStores2.useState(false), 2);
  const items42 = [projectId];
  const effect2 = obj2.useEffect(() => {
    if (obj.shouldShowVibegrationsConjureTip(timeout)) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        const result = projectId(stateFromStores[57]).markVibegrationsConjureTipShown();
        _undefined5(true);
      }, 0);
      return () => clearTimeout(closure_0);
    }
    obj = projectId(stateFromStores[57]);
  }, items42);
  const items43 = [projectId];
  const callback7 = obj2.useCallback(() => _undefined5(false), []);
  const items44 = [projectId];
  const callback8 = obj2.useCallback((arg0, arg1) => {
    closure_28.current = true;
    __initData(projectId, arg0, arg1);
  }, items43);
  let connectionLabelResult = null;
  const callback9 = obj2.useCallback(() => {
    closure_2_14(projectId);
  }, items44);
  if ("open" !== stateFromStores7) {
    connectionLabelResult = tmp2(tmp3[58]).connectionLabel(stateFromStores7);
    const tmp2Result19 = tmp2(tmp3[58]);
  }
  const tmp14Result10 = stateFromStores1(stateFromStores2.useState(false), 2);
  const obj9 = { style: tmp.container, children: null };
  const vibegrationsControlActive = projectId(stateFromStores[59]).useVibegrationsControlActive(projectId);
  const items45 = [
    c18(onRestoreVersion(stateFromStores[60]), {
      thinking: stateFromStores3,
      bleedBottom: onRestoreVersion(stateFromStores[49])().bottom,
    }),
    ,
  ];
  const obj10 = { style: tmp.transcriptArea, children: null };
  const obj11 = { clearance: tmp40, children: null };
  const obj12 = {
    ref,
    fadingEdgeLength: 52,
    removeClippedSubviews: null,
    viewabilityConfig: null,
    onViewableItemsChanged: null,
    onScroll: null,
    onContentSizeChange: null,
    scrollEventThrottle: 16,
    pointerEvents: null,
    style: null,
    contentContainerStyle: null,
    data: null,
    maintainVisibleContentPosition: null,
    keyExtractor: null,
    ListEmptyComponent: null,
    renderItem: null,
  };
  const tmp2Result20 = projectId(stateFromStores[59]);
  const tmp76 = c35;
  const tmp2Result21 = projectId(stateFromStores[28]);
  obj12.removeClippedSubviews = projectId(stateFromStores[28]).isIOS() && undefined;
  obj12.viewabilityConfig = memo4;
  obj12.onViewableItemsChanged = callback5;
  obj12.onScroll = callback3;
  obj12.onContentSizeChange = callback4;
  let str2 = "auto";
  if (tmp66) {
    str2 = "none";
  }
  obj12.pointerEvents = str2;
  const items46 = [tmp.transcript, ,];
  let transcriptDimmed = tmp66;
  if (tmp66) {
    transcriptDimmed = tmp.transcriptDimmed;
  }
  items46[1] = transcriptDimmed;
  const tmp77 = projectId(stateFromStores[28]).isIOS() && undefined;
  const isIOSResult = projectId(stateFromStores[28]).isIOS();
  let tmp79 = !isIOSResult;
  if (!isIOSResult) {
    const obj13 = { marginBottom: tmp40 - bound };
    tmp79 = obj13;
  }
  items46[2] = tmp79;
  obj12.style = items46;
  const items47 = [tmp.transcriptContent];
  const tmp2Result22 = projectId(stateFromStores[28]);
  items47[1] = { paddingBottom: bound + onRestoreVersion(stateFromStores[8]).space.PX_8 };
  obj12.contentContainerStyle = items47;
  obj12.data = memo;
  obj12.maintainVisibleContentPosition = { startRenderingFromBottom: true, autoscrollToBottomThreshold: 0.2 };
  obj12.keyExtractor = function keyExtractor(render_id) {
    return render_id.render_id;
  };
  let tmp80 = "loading" === chatEmptyStateResult;
  if (tmp80) {
    obj12.ListEmptyComponent = null;
    obj12.renderItem = function renderItem(arg0) {
      ({ item, index } = arg0);
      const obj = {
        projectId,
        message: item,
        groupStart: null,
        first: null,
        isNewest: null,
        checklistSuperseded: null,
        checklistExpanded: null,
        onToggleChecklist: null,
        replied: null,
        onJumpToReplied: null,
        onApprovePlan: null,
        onPickIdea: null,
        onAskForIdeas: null,
        onAnswerClarification: null,
        clarificationDismissed: null,
        onDismissClarification: null,
        onRestoreVersion: null,
      };
      let flag = closure_13[index];
      if (flag == null) {
        flag = true;
      }
      obj.groupStart = flag;
      obj.first = 0 === index;
      obj.isNewest = item.render_id === render_id;
      obj.checklistSuperseded = set.has(item.render_id);
      obj.checklistExpanded = VibegrationsTodoState.checklistExpanded(c10, item.render_id, set.has(item.render_id));
      obj.onToggleChecklist = onToggleChecklist;
      obj.replied = closure_33.get(item.render_id);
      obj.onJumpToReplied = onJumpToReplied;
      let tmp4;
      if (closure_20) {
        tmp4 = closure_14;
      }
      obj.onApprovePlan = tmp4;
      obj.onPickIdea = onPickIdea;
      let tmp5;
      if (closure_20) {
        tmp5 = closure_16;
      }
      obj.onAskForIdeas = tmp5;
      let tmp6;
      if (closure_20) {
        tmp6 = closure_17;
      }
      obj.onAnswerClarification = tmp6;
      let tmp7 = null != item.clarification;
      if (tmp7) {
        tmp7 = item.clarification.id === c18;
      }
      obj.clarificationDismissed = tmp7;
      obj.onDismissClarification = onDismissClarification;
      let tmp9;
      if (!stateFromStores3) {
        tmp9 = onRestoreVersion;
      }
      obj.onRestoreVersion = tmp9;
      return collapsedCategories(closure_37, obj);
    };
    obj11.children = tmp75(tmp2(tmp3[61]).FlashList, obj12);
    const items48 = [tmp75(tmp76, obj11), ,];
    let tmp75Result = null;
    if (tmp22) {
      const obj16 = { projectId };
      tmp75Result = tmp75(tmp5(tmp3[62]), obj16);
    }
    items48[1] = tmp75Result;
    let tmp75Result3 = null;
    if (null != tmp62) {
      const obj17 = {
        line: tmp62,
        onJumpToActivity: callback6,
        bottom: tmp5(tmp3[8]).space.PX_12 + tmp40,
        todos: memo5,
        todosLive: checklistLiveResult,
        agents: memo6,
      };
      tmp75Result3 = tmp75(tmp5(tmp3[63]), obj17);
      const tmp5Result = tmp5(tmp3[63]);
    }
    items48[2] = tmp75Result3;
    obj10.children = items48;
    items45[1] = tmp73(tmp74, obj10);
    const obj18 = { style: tmp.bottomStack, onLayout: callback1, children: null };
    const obj19 = {
      projectId,
      thinking: stateFromStores3,
      turnStartedAt: result,
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
    if (tmp80) {
      tmp80 = 0 === memo.length;
    }
    obj19.recalling = tmp80;
    obj19.activity = stateFromStores5;
    obj19.projectUsage = stateFromStores6;
    obj19.connLabel = connectionLabelResult;
    obj19.controlling = vibegrationsControlActive;
    obj19.connFailed = "failed" === stateFromStores7;
    obj19.thinkingOpen = tmp22;
    obj19.onToggleThinking = callback;
    const items49 = [tmp75(tmp5(tmp3[64]), obj19)];
    const obj20 = {
      projectId,
      canSend: tmp32,
      running: stateFromStores3,
      stopped: stateFromStores8,
      onSend: callback8,
      onInterrupt: null,
      tipOpen: null,
      onDismissTip: null,
    };
    let tmp87;
    const tmp5Result3 = tmp5(tmp3[64]);
    if (stateFromStores3) {
      tmp87 = callback9;
    }
    obj20.onInterrupt = tmp87;
    obj20.tipOpen = tmp66;
    obj20.onDismissTip = callback7;
    items49[1] = tmp75(tmp5(tmp3[65]), obj20);
    obj18.children = items49;
    items45[2] = tmp73(tmp74, obj18);
    obj9.children = items45;
    return tmp73(tmp74, obj9);
  } else {
    const obj21 = { style: tmp.placeholder, children: null };
    const intl3 = tmp2(tmp3[14]).intl;
    if ("unavailable" === chatEmptyStateResult) {
      let jTuX7C = tmp5(tmp3[15]).s4oxNv;
    } else {
      jTuX7C = tmp5(tmp3[15]).jTuX7C;
    }
    const obj22 = { variant: "text-sm/normal", color: "text-muted", children: intl3.string(jTuX7C) };
    obj21.children = tmp75(tmp2(tmp3[17]).Text, obj22);
    tmp75(tmp74, obj21);
  }
}
