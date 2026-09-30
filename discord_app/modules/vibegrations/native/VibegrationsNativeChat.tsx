// === Module 16543: VibegrationsNativeChat ===

// Module 16543 (VibegrationsNativeChat)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import util from "util" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4853 */;
import Text_Text from "Text/Text" /* 4862 */;
import Stack_Stack from "Stack/Stack" /* 5475 */;
import components_Button_Button from "components/Button/Button" /* 5477 */;
import LinearGradientDefault from "LinearGradient" /* 5489 */;
import Card from "Card" /* 6115 */;
import _modDef6172 from "module_6172" /* 6172 */;
import VibegrationsDesignFeedback from "VibegrationsDesignFeedback" /* 16443 */;
import VibegrationsVersionHistorySheet from "VibegrationsVersionHistorySheet" /* 16516 */;
import VibegrationsNativeStatusLineDefault from "VibegrationsNativeStatusLine" /* 16544 */;
import VibegrationsMessageActionSheet from "VibegrationsMessageActionSheet" /* 16550 */;
import useVibegrationsPlanDesign from "useVibegrationsPlanDesign" /* 16552 */;
import VibegrationsNativeCardSurfaceDefault from "VibegrationsNativeCardSurface" /* 16553 */;
import VibegrationsNativeMarkdown from "VibegrationsNativeMarkdown" /* 16554 */;
import VibegrationsTimelineTree from "VibegrationsTimelineTree" /* 16559 */;
import VibegrationsDuration from "VibegrationsDuration" /* 16560 */;
import VibegrationsSubagentMark from "VibegrationsSubagentMark" /* 16562 */;
import VibegrationsTodoAgents from "VibegrationsTodoAgents" /* 16586 */;
import VibegrationsChatRestore from "VibegrationsChatRestore" /* 16587 */;
import vibegrationsPublishCard from "vibegrationsPublishCard" /* 16590 */;
import VibegrationsTodoState from "VibegrationsTodoState" /* 16597 */;
import VibegrationsChatGrouping from "VibegrationsChatGrouping" /* 16607 */;
import vibegrationsAttachmentDrafts from "vibegrationsAttachmentDrafts" /* 16608 */;
import vibegrations_VibegrationsRepliedMessage from "vibegrations/VibegrationsRepliedMessage" /* 16613 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1980 */;
import VibegrationsChatStore_mod from "VibegrationsChatStore" /* 12843 */;
import VibegrationsConnectionStore_mod from "VibegrationsConnectionStore" /* 12842 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8694 */;

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
    const stringResult = intl.string(_modDef3715.FW8UcU);
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl2 = util.intl;
    obj2.children = intl2.string(_modDef3715["9W8SbY"]);
    items = [closure_1_19(Text_Text.Text, obj2), ];
    if (null == src) {
      const obj3 = { style: tmp.designPlaceholder, children: null };
      const obj4 = { size: "small", accessibilityLabel: stringResult };
      obj3.children = closure_1_19(hasOwnProperty, obj4);
      let tmp9Result = closure_1_19(React6, obj3);
    } else {
      const obj5 = { source: null, style: null, resizeMode: "cover", onError: null, accessible: true, accessibilityRole: "image", accessibilityLabel: null };
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
  obj.children = intl.string(_modDef3715["60htw+"]);
  items = [closure_1_19(Text_Text.Text, obj), , , , , , ];
  if ("" === trimmed) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef3715.IHCafX);
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
    obj4.children = intl3.string(_modDef3715.KLyB8Y);
    const items1 = [closure_1_19(Text_Text.Text, obj4), ];
    const changes = proposal.changes;
    items1[1] = changes.map((item, index) => closure_1_19(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item }, index));
    obj3.children = items1;
    tmp7Result = closure_1_20(Stack_Stack.Stack, obj3);
  }
  items[3] = tmp7Result;
  let tmp7Result4 = null;
  if (bot_permissions.length > 0) {
    const obj5 = { direction: "vertical", spacing: 4, children: null };
    const obj6 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl4 = util.intl;
    obj6.children = intl4.string(_modDef3715.ieqTtP);
    const items2 = [closure_1_19(Text_Text.Text, obj6), ];
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
    obj9.children = intl5.string(_modDef3715.Cn9qix);
    const items3 = [closure_1_19(Text_Text.Text, obj9), ];
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
    obj12.text = intl6.string(_modDef3715["hG0Y0+"]);
    obj12.onPress = onApprove;
    const items4 = [closure_1_19(components_Button_Button.Button, obj12), ];
    const obj13 = { variant: "text-sm/normal", color: "text-muted", style: tmp.planReplyHint, children: null };
    const intl7 = util.intl;
    obj13.children = intl7.string(_modDef3715.Vl3IL0);
    items4[1] = closure_1_19(Text_Text.Text, obj13);
    obj11.children = items4;
    tmp7Result6 = closure_1_20(React6, obj11);
  }
  const tmp6 = VibegrationsNativeCardSurfaceDefault;
  items[6] = tmp7Result6;
  return closure_1_19(tmp6, { children: closure_1_20(Stack_Stack.Stack, { direction: "vertical", spacing: 8, children: items }) });
}
function IdeaCards(arg0) {
  ({ ideas, onPick: require } = arg0);
  let obj = { style: closure_26().ideaCards, children: null };
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
  let intl = util.intl;
  obj2.children = intl.string(_modDef3715.DAvYsi);
  items = [
    closure_19(Text_Text.Text, obj2),
    ideas.map((title) => {
      closure_0 = title;
      const obj = {
        onPress() {
          return require(closure_0);
        },
        accessibilityLabel: null,
        children: null
      };
      const intl = util.intl;
      obj.accessibilityLabel = intl.formatToPlainString(_modDef3715.pztRGi, { title: title.title });
      items = [closure_1_19(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", children: title.title }), ];
      let tmpResult = null;
      if ("" !== title.value) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = closure_1_19(Text_Text.Text, obj4);
      }
      items[1] = tmpResult;
      obj.children = closure_1_20(Stack_Stack.Stack, { direction: "vertical", spacing: 4, children: items });
      return closure_1_19(Card.Card, obj, title.id);
    })
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
    closure_2_14(projectId, arg0).then((result) => closure_1_1(dependencyMap[23]).openURL(result)).catch(() => {

    });
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
          children: null
        };
        const intl = projectId(1115).intl;
        const obj2 = { name: id.name };
        obj.accessibilityLabel = intl.formatToPlainString(closure_1(3715).QUFLUq, obj2);
        const obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
        obj.children = closure_1_19(projectId(4862).Text, obj3);
        let tmp12 = closure_1_19(projectId(6115).Card, obj, id.id);
      } else {
        const obj4 = { style: closure_1.attachmentPill, children: null };
        const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
        const intl2 = projectId(1115).intl;
        const obj6 = { name: id.name };
        obj5.children = intl2.formatToPlainString(closure_1(3715).OBr7WW, obj6);
        obj4.children = closure_1_19(projectId(4862).Text, obj5);
        const _HermesInternal = HermesInternal;
        tmp12 = closure_1_19(closure_1_8, obj4, "" + id.name + "-" + index);
      }
      return tmp12;
    })
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
  const obj = { line: null, live: null, settled: null, failed: null, presentation: null, crestColor: null, inGutter: null, epoch: null, trailing: null };
  const tmp = closure_26();
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
    const obj3 = { variant: "text-xs/normal", color: "text-subtle", children: VibegrationsDuration.describeDuration(node.durationMs) };
    tmp4Result = closure_1_19(Text_Text.Text, obj3);
    const tmp7Result = VibegrationsDuration;
  }
  obj.trailing = tmp4Result;
  const children = [closure_1_19(tmp6, obj), ];
  let tmp4Result2 = null;
  if (node.detail.length > 0) {
    const obj4 = { style: tmp.stepDetail, children: null };
    const detail = node.detail;
    obj4.children = detail.map((children, index) => closure_1_19(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children }, index));
    tmp4Result2 = closure_1_19(React6, obj4);
  }
  children[1] = tmp4Result2;
  return closure_1_20(React6, { children });
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
  const currentStepResult = turnActive(16559).currentStep(tree.steps);
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
    groupLabel = turnActive(16560).describeTurnDuration(tmp8);
    const tmp5Result = turnActive(16560);
  } else if (null != currentStepResult) {
    groupLabel = turnActive(16559).describeNode(currentStepResult);
    const tmp5Result2 = turnActive(16559);
  } else if (groupLabel == null) {
    const intl = turnActive(1115).intl;
    groupLabel = intl.string(epoch(3715).nv6pUM);
  }
  let someResult = tree.steps.length > 1;
  if (!someResult) {
    const steps = tree.steps;
    someResult = steps.some((detail) => detail.detail.length > 0);
  }
  const obj2 = { line: groupLabel, live: turnActive, settled: !turnActive, inGutter: true, epoch, expanded: tmp3, onToggle: null };
  let tmp19;
  let obj = turnActive(16559);
  if (someResult) {
    tmp19 = callback;
  }
  obj2.onToggle = tmp19;
  const children = [closure_19(epoch(16544), obj2), ];
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
    currentStepResult = mark(16559).currentStep(lane.steps);
    const obj = mark(16559);
  }
  _slicedToArray = currentStepResult;
  const tmp9 = lane.task.detail.length > 0 || lane.steps.length > 0;
  if ("running" === lane.task.status) {
    if (null != currentStepResult) {
      let describeNodeResult = mark(16559).describeNode(currentStepResult);
      const obj4 = mark(16559);
    } else {
      describeNodeResult = mark(16561).taskTitle(lane.task);
      const obj3 = mark(16561);
    }
  } else {
    const obj2 = mark(16561);
    const obj5 = { line: mark(16561).describeTaskOutcome(lane.task), live: turnActive, settled: null, failed: null, glyph: null, crestColor: null, inGutter: true, epoch: null, expanded: null, onToggle: null };
    let tmp26 = !turnActive;
    const describeTaskOutcomeResult = mark(16561).describeTaskOutcome(lane.task);
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
    items = [closure_19(epoch(16544), obj5), ];
    let tmp21Result = null;
    if (tmp3) {
      tmp21Result = null;
      if (tmp9) {
        const obj6 = { style: tmp.activityDetail, children: null };
        const detail = lane.task.detail;
        const items1 = [detail.map((children, index) => closure_1_19(mark(_undefined[17]).Text, { variant: "text-xs/normal", color: "text-feedback-critical", children }, index)), ];
        const steps = lane.steps;
        items1[1] = steps.map((node) => closure_2_19(TimelineRow, { node, live: node === c3, crestColor: mark.tint, epoch }, node.id));
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
  const tmp = closure_26();
  const tasks = tree.tasks;
  dependencyMap = turnActive(16562).subagentIllocons(tasks.map((taskId) => taskId.taskId));
  let obj2 = { style: tmp.activityBox, children: null };
  items = [closure_19(TurnStatusLine, { tree, turnActive, epoch: length }), ];
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
    items = [closure_1_19(React6, obj4), , ];
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
    tmp3 = closure_1_19(_modDef6172, obj2);
  }
  return tmp3;
}
function RestoreProposalCard(arg0) {
  ({ proposal, onRestore } = arg0);
  const authoredAgoResult = VibegrationsVersionHistorySheet.authoredAgo(proposal.authored_at);
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3715.khdMoL);
  items = [closure_1_19(Text_Text.Text, obj2), , ];
  const items1 = [closure_1_19(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: proposal.subject }), ];
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
    obj5.text = intl2.string(_modDef3715.eSDVDt);
    obj5.onPress = onRestore;
    tmp4Result2 = closure_1_19(components_Button_Button.Button, obj5);
  }
  const obj3 = { variant: "text-md/medium", color: "text-default", children: proposal.subject };
  const tmp6 = VibegrationsNativeCardSurfaceDefault;
  items[2] = tmp4Result2;
  return closure_1_19(tmp6, { children: closure_1_20(Stack_Stack.Stack, { direction: "vertical", spacing: 8, children: items }) });
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, Image: metroRequire, Pressable: closure_7, View: closure_8 } = get_ActivityIndicator);
let VibegrationsChatStore = fn(12843);
({ getOlderHistoryCursor: c10, turnSettled: closure_11 } = VibegrationsChatStore);
let VibegrationsChatStore = VibegrationsChatStore_mod;
let VibegrationsConnectionStore = fn(12842);
({ ensureConnection: map1, getAttachmentUrl: closure_14, interruptTurn: closure_15, sendUserMessage: closure_16 } = VibegrationsConnectionStore);
let VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
let diff = fn(16544).MESSAGE_CONTENT_INSET - fn(16544).MESSAGE_EDGE_INSET;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let items = [BLACK, , ];
let obj2 = _modDef672(BLACK);
items[1] = _modDef672(BLACK).alpha(0.2).css();
items[2] = "transparent";
const locations = [0, 0.4, 1];
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const createStyles = fn(4866);
let obj = { container: { flex: 1 }, transcript: { flex: 1 }, transcriptDimmed: { opacity: 0.4 }, maskSolid: { flex: 1, backgroundColor: BLACK }, maskFade: { height: 52 }, transcriptArea: { flex: 1, position: "relative" }, transcriptContent: null, bottomStack: null, row: null, rowGroupStart: null, avatar: null, spoken: null, avatarSpoken: null, avatarSpokenReplying: null, header: null, planActions: null, planReplyHint: null, designImage: null, designPlaceholder: null, ideaCards: null, activityBox: null, activityDetail: null, stepDetail: null, attachmentPills: null, attachmentPill: null, placeholder: null };
const alphaResult = _modDef672(BLACK).alpha(0.2);
obj.transcriptContent = { paddingTop: nativeDefault.space.PX_8 };
obj.bottomStack = { position: "absolute", left: 0, right: 0, bottom: 0 };
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj.row = { position: "relative", paddingLeft: fn(16544).MESSAGE_CONTENT_INSET, paddingRight: fn(16544).MESSAGE_EDGE_INSET, paddingVertical: 2, gap: PX_8 };
obj.rowGroupStart = { marginTop: nativeDefault.space.PX_12 };
const rect = { position: "absolute", left: fn(16544).MESSAGE_EDGE_INSET, top: 2 };
obj.avatar = rect;
obj.spoken = { position: "relative", gap: PX_8 };
const rect1 = { left: fn(16544).MESSAGE_EDGE_INSET - fn(16544).MESSAGE_CONTENT_INSET, top: 0 };
obj.avatarSpoken = rect1;
let obj5 = { position: "relative", paddingLeft: fn(16544).MESSAGE_CONTENT_INSET, paddingRight: fn(16544).MESSAGE_EDGE_INSET, paddingVertical: 2, gap: PX_8 };
obj.avatarSpokenReplying = { top: fn(16546).REPLY_PREVIEW_HEIGHT + PX_8 };
let obj6 = { top: fn(16546).REPLY_PREVIEW_HEIGHT + PX_8 };
obj.header = { marginBottom: -nativeDefault.space.PX_4 };
let obj7 = { marginBottom: -nativeDefault.space.PX_4 };
obj.planActions = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12 };
obj.planReplyHint = { flexShrink: 1 };
let obj8 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12 };
obj.designImage = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj9 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj.designPlaceholder = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
obj.ideaCards = { gap: PX_8 };
obj.activityBox = { marginLeft: -diff };
obj.activityDetail = { paddingLeft: diff };
let obj10 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
obj.stepDetail = { marginTop: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_12, borderLeftWidth: 2, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, gap: 2 };
let obj11 = { marginTop: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_12, borderLeftWidth: 2, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, gap: 2 };
obj.attachmentPills = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj12 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj.attachmentPill = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
let obj13 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
obj.placeholder = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
let closure_26 = createStyles.createStyles(obj);
let closure_37 = noop.memo((onToggleChecklist) => {
  ({ projectId, message } = onToggleChecklist);
  ({ groupStart, isNewest, showsOutdated, checklistSuperseded } = onToggleChecklist);
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
  ({ first, checklistExpanded, onApprovePlan, onPickIdea, onAskForIdeas, draftHasText, onAnswerClarification, clarificationDismissed } = onToggleChecklist);
  let tmp = closure_26();
  const spoken = tmp;
  items = [message];
  const memo = onJumpToReplied.useMemo(() => {
    const obj = VibegrationsTimelineTree;
    return obj.buildTimelineTree(message.steps, { turnActive: !closure_2_11(message) });
  }, items);
  const items1 = [message];
  const memo1 = onJumpToReplied.useMemo(() => {
    const obj = VibegrationsTimelineTree;
    return obj.turnSegments(message.steps, { turnActive: !closure_2_11(message) });
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
  const memo4 = onJumpToReplied.useMemo(() => VibegrationsDesignFeedback.parseVibegrationsDesignRemark(message.content), items6);
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
  const items7 = [tmp.row, ];
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
        obj4.children = closure_19(message(onToggleChecklist[36]).VibegrationsUserAvatar, obj5);
        tmp96 = closure_19(memo, obj4);
      }
      const items10 = [tmp96, , , ];
      let tmp101 = null;
      if (groupStart) {
        let obj6 = { style: tmp.header, children: null };
        ({ user_id: obj47.userId, created_at: obj47.at } = message);
        obj6.children = closure_19(message(onToggleChecklist[36]).VibegrationsUserHeader, { userId: null, at: null });
        tmp101 = closure_19(memo, obj6);
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
          tmp111 = closure_19(checklistSuperseded(tmp108[37]), obj9);
        }
        const items11 = [tmp111, , ];
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
        let tmp94Result = closure_20(message(onToggleChecklist[17]).Text, obj8);
      } else {
        tmp94Result = null;
      }
      items10[2] = tmp94Result;
      let tmp114 = null;
      if (null != attachments) {
        const obj10 = { projectId, attachments };
        tmp114 = closure_19(AttachmentPills, obj10);
      }
      items10[3] = tmp114;
      obj3.children = items10;
      tmp94Result2 = closure_20(spoken, obj3);
    } else {
      if ("publish_notice" === message.kind) {
        if (null != message.publishNotice) {
          const obj11 = { style: items7, children: null };
          const obj12 = { projectId, notice: message.publishNotice };
          obj11.children = closure_19(checklistSuperseded(onToggleChecklist[38]), obj12);
          return closure_19(memo, obj11);
        }
      }
      if (true === message.interrupted) {
        const obj13 = { style: items7, children: null };
        const obj14 = { style: tmp.activityBox, children: null };
        const obj15 = { line: null, live: false, settled: true, inGutter: true, glyph: null };
        const intl3 = message(onToggleChecklist[14]).intl;
        obj15.line = intl3.string(checklistSuperseded(onToggleChecklist[15])["5T7DSm"]);
        const obj16 = { size: "refresh_sm", color: checklistSuperseded(onToggleChecklist[8]).colors.TEXT_MUTED };
        obj15.glyph = closure_19(message(onToggleChecklist[39]).StopIcon, obj16);
        obj14.children = closure_19(checklistSuperseded(onToggleChecklist[9]), obj15);
        obj13.children = closure_19(memo, obj14);
        return closure_19(memo, obj13);
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
        const obj17 = { steps: message.steps, content: trimmed, hasProposal: null != proposal, hasAttachments: null != attachments };
        const turnPresentation = message(onToggleChecklist[41]).resolveTurnPresentation(obj17);
        ({ showsClosingMessage, replyKey: c15 } = turnPresentation);
        let isIdeasOfferTurnResult = isNewest;
        if (isNewest) {
          isIdeasOfferTurnResult = message(tmp25[42]).isIdeasOfferTurn(message);
          const tmp24Result5 = message(tmp25[42]);
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
                                    if (!isIdeasOfferTurnResult) {
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
        const tmp24Result = message(onToggleChecklist[41]);
        const turnLeadsWithStretchResult = message(onToggleChecklist[41]).turnLeadsWithStretch(memo.steps.length > 0 || memo.tasks.length > 0, turnPresentation);
        const found1 = memo1.filter((hasWork) => hasWork.hasWork);
        const atResult = found1.at(-1);
        index = undefined;
        if (atResult != null) {
          index = atResult.index;
        }
        const tmp38 = !tmp17(message);
        closure_17 = tmp38;
        const tmp24Result6 = message(onToggleChecklist[41]);
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
          tmp42Result = closure_19(checklistSuperseded(tmp25[12]), obj19);
          const tmp44 = checklistSuperseded(tmp25[12]);
        }
        const items12 = [tmp42Result, , ];
        const items13 = [, , ];
        ({ avatar: arr14[0], avatarSpoken: arr14[1] } = tmp);
        if (avatarSpokenReplying) {
          avatarSpokenReplying = tmp.avatarSpokenReplying;
        }
        const obj20 = { children: null };
        const obj21 = { style: null, children: null };
        items13[2] = avatarSpokenReplying;
        obj21.style = items13;
        obj21.children = closure_19(message(onToggleChecklist[36]).VibegrationsConjureAvatar, {});
        items12[1] = closure_19(memo, obj21);
        const obj22 = { style: tmp.header, children: null };
        const obj23 = { at: message.created_at };
        obj22.children = closure_19(message(onToggleChecklist[36]).VibegrationsConjureHeader, obj23);
        items12[2] = closure_19(memo, obj22);
        obj20.children = items12;
        const tmp39Result = closure_20(closure_21, obj20);
        const obj24 = { style: items7, onLongPress: tmp15, accessible: false, children: null };
        let tmp46Result = null;
        if (turnLeadsWithStretchResult) {
          tmp46Result = null;
          if (groupStart) {
            const obj25 = { style: tmp.spoken, children: tmp39Result };
            tmp46Result = closure_19(tmp47, obj25);
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
                      obj.children = closure_2_19(VibegrationsNativeMarkdown.VibegrationsRevealedMarkdown, obj2);
                      tmp15Result = closure_2_19(React6, obj);
                    }
                  }
                  items = [tmp15Result, ];
                  if (!prose.hasWork) {
                    const obj3 = { children: null };
                    items[1] = null;
                    obj3.children = items;
                    return closure_2_20(noop.Fragment, obj3, prose.key);
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
                      closure_2_19(ActivityBox, obj5);
                    }
                    const obj6 = { turn: null };
                    turn = turn.turn;
                    obj6.turn = turn;
                    obj4 = obj6;
                  }
                }),
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
                          if (null == items16) {
                            if (null == provisionalTodo) {
                              if (null == tmp20) {
                                let tmp39Result2 = null;
                              }
                              items14[2] = tmp39Result2;
                              let tmp46Result15 = null;
                              if (showsOutdated) {
                                const obj26 = { style: tmp.spoken, children: null };
                                const obj27 = { projectId, notice: "outdated" };
                                obj26.children = closure_19(checklistSuperseded(tmp25[38]), obj27);
                                tmp46Result15 = closure_19(tmp47, obj26);
                              }
                              items14[3] = tmp46Result15;
                              let tmp46Result16 = null;
                              if (null != activeAwaitingUserResult) {
                                const obj28 = { style: tmp.spoken, children: null };
                                const obj29 = { variant: "text-xs/normal", color: "text-muted", children: null };
                                const intl2 = message(tmp25[14]).intl;
                                obj29.children = intl2.string(checklistSuperseded(tmp25[15])["1LEnd8"]);
                                obj28.children = closure_19(message(tmp25[17]).Text, obj29);
                                tmp46Result16 = closure_19(tmp47, obj28);
                              }
                              items14[4] = tmp46Result16;
                              obj24.children = items14;
                              return closure_20(tmp49, obj24);
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
        const obj30 = { style: tmp.spoken, children: null };
        let tmp52 = null;
        if (groupStart) {
          tmp52 = null;
          if (!turnLeadsWithStretchResult) {
            tmp52 = tmp39Result;
          }
        }
        const items15 = [tmp52, , , , , , , , , , , , ];
        let tmp46Result17 = null;
        if (showsClosingMessage) {
          const obj31 = { source: turnPresentation.closingContent };
          tmp46Result17 = closure_19(checklistSuperseded(tmp25[20]), obj31);
        }
        items15[1] = tmp46Result17;
        let tmp46Result18 = null;
        if ("side_reply" === message.kind) {
          const obj32 = { variant: "text-xs/normal", color: "text-muted", children: null };
          const intl = message(tmp25[14]).intl;
          obj32.children = intl.string(checklistSuperseded(tmp25[15]).OAjkIT);
          tmp46Result18 = closure_19(message(tmp25[17]).Text, obj32);
        }
        items15[2] = tmp46Result18;
        let tmp46Result19 = null;
        if (null != attachments) {
          const obj33 = { projectId, attachments };
          tmp46Result19 = closure_19(AttachmentPills, obj33);
        }
        items15[3] = tmp46Result19;
        if (null != items16) {
          const tmp61 = checklistSuperseded(tmp25[18]);
          if (items16 == null) {
            items16 = [];
          }
          const obj34 = { children: null };
          const obj35 = { todos: items16, provisional: provisionalTodo, agents: memo3, live: null, superseded: null, expanded: null, onToggleExpanded: null };
          const tmp62 = checklistSuperseded(tmp25[43]);
          obj35.live = message(tmp25[44]).checklistLive(message);
          obj35.superseded = checklistSuperseded;
          obj35.expanded = checklistExpanded;
          obj35.onToggleExpanded = callback;
          obj34.children = closure_19(tmp62, obj35);
          let tmp46Result20 = closure_19(tmp61, obj34);
          const tmp24Result8 = message(tmp25[44]);
        } else {
          tmp46Result20 = null;
        }
        items15[4] = tmp46Result20;
        let tmp46Result21 = null;
        if (null != proposal) {
          const obj36 = { projectId, proposal, onApprove: null };
          let tmp65;
          if (isNewest) {
            tmp65 = onApprovePlan;
          }
          obj36.onApprove = tmp65;
          tmp46Result21 = closure_19(ProposalCard, obj36);
        }
        items15[5] = tmp46Result21;
        let tmp46Result22 = null;
        if (null != clarification) {
          const obj37 = {
            clarification,
            onSubmit: onAnswerClarification,
            onDismiss() {
                      return closure_1_5(clarification.id);
                    }
          };
          tmp46Result22 = closure_19(checklistSuperseded(tmp25[45]), obj37);
        }
        items15[6] = tmp46Result22;
        let tmp46Result23 = null;
        if (null != tmp22) {
          const obj38 = { projectId, request: tmp22, awaiting: activeAwaitingUserResult };
          tmp46Result23 = closure_19(checklistSuperseded(tmp25[46]), obj38);
        }
        items15[7] = tmp46Result23;
        let tmp46Result24 = null;
        if (null != tmp27) {
          const obj39 = { projectId, request: tmp27 };
          tmp46Result24 = closure_19(checklistSuperseded(tmp25[47]), obj39);
        }
        items15[8] = tmp46Result24;
        if (isIdeasOfferTurnResult) {
          const obj40 = { projectId, publishCta: null != tmp20, draftHasText, onAskForIdeas };
          let tmp46Result25 = closure_19(message(tmp25[48]).VibegrationsPublishOrIdeasOffer, obj40);
        } else {
          tmp46Result25 = null;
          if (null != tmp20) {
            const obj41 = { projectId };
            tmp46Result25 = closure_19(checklistSuperseded(tmp25[48]), obj41);
          }
        }
        items15[9] = tmp46Result25;
        let tmp46Result26 = null;
        if (null != ideas) {
          const obj42 = { ideas, onPick: onPickIdea };
          tmp46Result26 = closure_19(IdeaCards, obj42);
        }
        items15[10] = tmp46Result26;
        let tmp46Result27 = null;
        if (null != restoreProposal) {
          const obj43 = { proposal: restoreProposal, onRestore: null };
          let fn;
          if (isNewest) {
            if (null != onRestoreVersion) {
              fn = () => VibegrationsVersionHistorySheet.confirmRestoreVersion(() => onRestoreVersion(message(onToggleChecklist[34]).proposalRestoreEntry(restoreProposal)));
            }
          }
          obj43.onRestore = fn;
          tmp46Result27 = closure_19(RestoreProposalCard, obj43);
        }
        items15[11] = tmp46Result27;
        let tmp46Result28 = null;
        if (null != found) {
          tmp46Result28 = null;
          if ("message" in found) {
            const obj44 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
            tmp46Result28 = closure_19(message(tmp25[17]).Text, obj44);
          }
        }
        items15[12] = tmp46Result28;
        obj30.children = items15;
        tmp39Result2 = closure_20(tmp47, obj30);
        const tmp24Result7 = message(onToggleChecklist[24]);
        tmp49 = spoken;
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
  let draftHasText;
  closure_20 = undefined;
  closure_21 = undefined;
  c22 = undefined;
  c23 = undefined;
  let canSend;
  let memo2;
  let memo3;
  c27 = undefined;
  c28 = undefined;
  let bound;
  let ref5;
  let ref;
  let callback2;
  let callback3;
  c39 = undefined;
  let callback5;
  closure_43 = undefined;
  let onJumpToReplied;
  c45 = undefined;
  let tmp = memo3();
  items = [stateFromStores9];
  stateFromStores = projectId(stateFromStores[49]).useStateFromStores(items, () => "active" === stateFromStores9.getState(), []);
  let obj2 = stateFromStores2;
  const items1 = [stateFromStores, projectId];
  const effect = stateFromStores2.useEffect(() => {
    if (stateFromStores) {
      map1(projectId);
    }
  }, items1);
  let obj = projectId(stateFromStores[49]);
  const items2 = [set];
  const items3 = [projectId];
  const stateFromStores1 = projectId(stateFromStores[49]).useStateFromStores(items2, () => VibegrationsChatStore.getMessages(projectId), items3);
  const obj3 = projectId(stateFromStores[49]);
  const items4 = [onPickIdea];
  const items5 = [projectId];
  stateFromStores2 = projectId(stateFromStores[49]).useStateFromStores(items4, () => {
    const publishStatus = VibegrationsProjectStore.getPublishStatus(projectId);
    let state;
    if (publishStatus != null) {
      state = publishStatus.state;
    }
    if (state == null) {
      state = null;
    }
    return state;
  }, items5);
  const items6 = [stateFromStores1, stateFromStores2];
  const memo = stateFromStores2.useMemo(() => vibegrationsPublishCard.withLivePublishCard(stateFromStores1, stateFromStores2), items6);
  const obj4 = projectId(stateFromStores[49]);
  let result = null;
  if (obj5.showsOutdatedNotice(onRestoreVersion(stateFromStores[52])(projectId))) {
    result = tmp2(tmp3[51]).outdatedNoticeRenderId(memo, stateFromStores2);
    const tmp2Result = tmp2(tmp3[51]);
  }
  c6 = result;
  obj5 = projectId(stateFromStores[51]);
  const items7 = [set];
  const items8 = [projectId];
  stateFromStores3 = projectId(stateFromStores[49]).useStateFromStores(items7, () => VibegrationsChatStore.isThinking(projectId), items8);
  const tmp2Result20 = projectId(stateFromStores[49]);
  const items9 = [set];
  const items10 = [projectId];
  const stateFromStores4 = projectId(stateFromStores[49]).useStateFromStores(items9, () => VibegrationsChatStore.isCompacting(projectId), items10);
  const tmp2Result21 = projectId(stateFromStores[49]);
  const items11 = [set];
  const items12 = [projectId];
  const stateFromStores5 = projectId(stateFromStores[49]).useStateFromStores(items11, () => VibegrationsChatStore.getThinkingActivity(projectId), items12);
  const tmp2Result22 = projectId(stateFromStores[49]);
  const items13 = [set];
  const items14 = [projectId];
  const stateFromStores6 = projectId(stateFromStores[49]).useStateFromStores(items13, () => VibegrationsChatStore.getProjectUsage(projectId), items14);
  const tmp2Result23 = projectId(stateFromStores[49]);
  [tmp17, tmp18] = stateFromStores1(obj2.useState(null), 2);
  c8 = tmp18;
  let tmp19 = null == tmp17;
  if (!tmp19) {
    let tmp20 = stateFromStores3;
    if (stateFromStores3) {
      tmp20 = tmp17 === projectId;
    }
    tmp19 = tmp20;
  }
  if (!tmp19) {
    tmp18(null);
  }
  const items15 = [projectId];
  let tmp23 = stateFromStores3;
  const callback = obj2.useCallback(() => _undefined((arg0) => {
    let tmp = null;
    if (arg0 !== projectId) {
      tmp = projectId;
    }
    return tmp;
  }), items15);
  if (stateFromStores3) {
    tmp23 = tmp17 === projectId;
  }
  const tmp16 = stateFromStores1(obj2.useState(null), 2);
  const items16 = [closure_17];
  const items17 = [projectId];
  const stateFromStores7 = projectId(stateFromStores[49]).useStateFromStores(items16, () => VibegrationsConnectionStore.getConnState(projectId), items17);
  const tmp2Result24 = projectId(stateFromStores[49]);
  const items18 = [closure_17];
  const items19 = [projectId];
  const stateFromStores8 = projectId(stateFromStores[49]).useStateFromStores(items18, () => VibegrationsConnectionStore.isChatStopped(projectId), items19);
  const tmp2Result25 = projectId(stateFromStores[49]);
  const items20 = [set];
  const items21 = [projectId];
  stateFromStores9 = projectId(stateFromStores[49]).useStateFromStores(items20, () => VibegrationsChatStore.hasLoadedHistory(projectId), items21);
  const tmp2Result26 = projectId(stateFromStores[49]);
  const items22 = [set];
  const items23 = [projectId];
  stateFromStores10 = projectId(stateFromStores[49]).useStateFromStores(items22, () => {
    let hasLoadedHistoryResult = VibegrationsChatStore.hasLoadedHistory(projectId);
    if (hasLoadedHistoryResult) {
      hasLoadedHistoryResult = null != closure_2_10(projectId);
    }
    return hasLoadedHistoryResult;
  }, items23);
  const tmp2Result27 = projectId(stateFromStores[49]);
  const items24 = [set];
  const items25 = [projectId];
  const stateFromStores11 = projectId(stateFromStores[49]).useStateFromStores(items24, () => VibegrationsChatStore.isHistoryUnavailable(projectId), items25);
  const tmp2Result28 = projectId(stateFromStores[49]);
  const chatEmptyStateResult = projectId(stateFromStores[53]).chatEmptyState({ historyLoaded: stateFromStores9, historyUnavailable: stateFromStores11, connState: stateFromStores7 });
  render_id = null;
  if (memo.length > 0) {
    render_id = memo[memo.length - 1].render_id;
  }
  const items26 = [memo];
  set = obj2.useMemo(() => VibegrationsTodoState.supersededChecklists(memo), items26);
  const tmp2Result29 = projectId(stateFromStores[53]);
  [c13, c14] = stateFromStores1(obj2.useState(() => new Map()), 2);
  onToggleChecklist = obj2.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined2((get) => projectId(stateFromStores[44]).toggleChecklist(get, closure_0, closure_1));
  }, []);
  const items27 = [memo];
  closure_16 = obj2.useMemo(() => VibegrationsChatGrouping.groupChatRows(memo.map((key) => {
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
  })), items27);
  const items28 = [projectId];
  closure_17 = obj2.useCallback(() => {
    const intl = util.intl;
    const result = vibegrationsAttachmentDrafts.sendVibegrationsCardReply(projectId, intl.string(_modDef3715.ga8too));
  }, items28);
  const items29 = [projectId];
  onPickIdea = obj2.useCallback((implementation_prompt) => {
    const result = vibegrationsAttachmentDrafts.sendVibegrationsCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items29);
  const tmp15Result7 = stateFromStores1(onRestoreVersion(stateFromStores[56])(projectId), 2);
  draftHasText = tmp15Result7[0];
  const items30 = [projectId];
  closure_20 = obj2.useCallback(() => {
    const intl = util.intl;
    value2(projectId, intl.string(_modDef3715["3sTTBu"]));
  }, items30);
  const items31 = [projectId];
  closure_21 = obj2.useCallback((implementation_prompt, clarificationAnswers) => {
    const result = vibegrationsAttachmentDrafts.sendVibegrationsCardReply(projectId, implementation_prompt, { clarificationAnswers });
  }, items31);
  const tmp15Result = stateFromStores1(obj2.useState(() => new Map()), 2);
  [c22, c23] = stateFromStores1(obj2.useState(null), 2);
  let tmp36 = tmp35;
  if ("open" !== stateFromStores7) {
    tmp36 = "connecting" === stateFromStores7;
  }
  if (tmp36) {
    tmp36 = !stateFromStores8;
  }
  canSend = tmp36;
  const items32 = [result, draftHasText, tmp36];
  const items33 = [memo];
  const memo1 = obj2.useMemo(() => ({ outdatedId, draftHasText, canSend }), items32);
  memo2 = obj2.useMemo(() => {
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
  }, items33);
  const items34 = [memo, memo2];
  memo3 = obj2.useMemo(() => {
    let tmp2;
    if (null != memo2) {
      tmp2 = memo[tmp];
    }
    let timelineTree = null;
    if (null != tmp2) {
      timelineTree = VibegrationsTimelineTree.buildTimelineTree(tmp2.steps, { turnActive: true });
    }
    return timelineTree;
  }, items34);
  let tmp40 = null != memo3;
  if (tmp40) {
    tmp40 = memo3.steps.length > 0 || memo3.tasks.length > 0;
    const tmp41 = memo3.steps.length > 0 || memo3.tasks.length > 0;
  }
  const items35 = [memo3];
  let memo4 = obj2.useMemo(() => {
    let currentStepResult;
    if (null != memo3) {
      currentStepResult = VibegrationsTimelineTree.currentStep(tmp.steps);
    }
    let describeNodeResult = null;
    if (null != currentStepResult) {
      describeNodeResult = VibegrationsTimelineTree.describeNode(currentStepResult);
    }
    return describeNodeResult;
  }, items35);
  const tmp15Result8 = stateFromStores1(obj2.useState(null), 2);
  [obj17, c27] = stateFromStores1(obj2.useState(null), 2);
  const tmp15Result9 = stateFromStores1(obj2.useState(null), 2);
  [tmp45, c28] = stateFromStores1(obj2.useState(64), 2);
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
  const tmp15Result10 = stateFromStores1(obj2.useState(64), 2);
  bound = tmp45;
  if (!tmp2Result30.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp45, 52);
  }
  obj2.useRef(null);
  obj2.useRef(null);
  obj2.useRef(false);
  obj2.useRef(true);
  obj2.useRef(0);
  ref5 = obj2.useRef(0);
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
    closure_34.current = timestamp + 500;
    closure_35.current = timestamp + 2000;
  }, []);
  const items36 = [projectId, callback3];
  const effect1 = obj2.useEffect(() => {
    closure_33.current = true;
    callback3();
  }, items36);
  const items37 = [stateFromStores9, callback3];
  const effect2 = obj2.useEffect(() => {
    if (stateFromStores9) {
      callback3();
    }
  }, items37);
  const items38 = [stateFromStores10, memo.length, callback2, callback3];
  const effect3 = obj2.useEffect(() => {
    if (stateFromStores10) {
      ref.current = true;
      callback3();
    } else if (ref.current) {
      ref.current = false;
      callback3();
      callback2();
    }
  }, items38);
  const callback4 = obj2.useCallback(() => {
    closure_33.current = false;
  }, []);
  tmp2Result30 = projectId(stateFromStores[28]);
  [tmp57, c39] = stateFromStores1(obj2.useState(false), 2);
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
  const items39 = [callback5];
  const items40 = [callback2, callback5];
  const callback6 = obj2.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    closure_31.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
    callback5();
  }, items39);
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
  }, items40);
  const items41 = [callback5];
  const memo5 = obj2.useMemo(() => ({ itemVisiblePercentThreshold: projectId(stateFromStores[57]).MIN_VISIBLE_PERCENT }), []);
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
  }, items41);
  if (stateFromStores4) {
    const intl2 = tmp2(tmp3[14]).intl;
    memo4 = intl2.string(tmp5(tmp3[15])["0vH/5G"]);
  } else if (memo4 == null) {
    let intl = tmp2(tmp3[14]).intl;
    memo4 = intl.string(tmp5(tmp3[15]).QDGuNS);
  }
  const items42 = [memo, memo2];
  let tmp64;
  const memo6 = obj2.useMemo(() => {
    if (null == memo2) {
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
  }, items42);
  if (null != memo2) {
    tmp64 = memo[memo2];
  }
  let checklistLiveResult = null == tmp64;
  if (!checklistLiveResult) {
    checklistLiveResult = tmp2(tmp3[44]).checklistLive(tmp64);
    const tmp2Result31 = tmp2(tmp3[44]);
  }
  if (null != tmp64) {
    const result1 = tmp2(tmp3[58]).vibegrationsTurnStartedAt(tmp64);
    const tmp2Result32 = tmp2(tmp3[58]);
  }
  const items43 = [memo3];
  let tmp68;
  const memo7 = obj2.useMemo(() => {
    if (null != memo3) {
      let runningTodoAgentsResult = VibegrationsTodoAgents.runningTodoAgents(tmp.tasks);
    } else {
      runningTodoAgentsResult = [];
    }
    return runningTodoAgentsResult;
  }, items43);
  if (null != memo2) {
    let render_id1;
    if (memo[memo2] != null) {
      render_id1 = tmp69.render_id;
    }
    tmp68 = render_id1;
  }
  let tmp71 = null != tmp68;
  if (tmp71) {
    tmp71 = null != obj17 && !obj17.has(tmp68) || tmp57;
    const tmp72 = null != obj17 && !obj17.has(tmp68) || tmp57;
  }
  let tmp73 = null;
  if (stateFromStores3) {
    tmp73 = null;
    if (tmp40) {
      tmp73 = null;
      if (tmp71) {
        tmp73 = memo4;
      }
    }
  }
  const items44 = [bound, memo2, callback5];
  const effect4 = obj2.useEffect(() => {
    closure_40.current = memo2;
    closure_41.current = bound;
    closure_0 = requestAnimationFrame(callback5);
    return () => cancelAnimationFrame(closure_0);
  }, items44);
  const items45 = [memo];
  closure_43 = obj2.useMemo(() => {
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
  }, items45);
  const items46 = [memo];
  onJumpToReplied = obj2.useCallback((arg0) => {
    closure_0 = arg0;
    const findIndexResult = memo.findIndex((id) => id.id === closure_0);
    if (findIndexResult >= 0) {
      closure_33.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: findIndexResult, animated: true, viewPosition: 0.5 };
        current.scrollToIndex(obj);
      }
    }
  }, items46);
  const items47 = [bound, memo2];
  const callback9 = obj2.useCallback(() => {
    if (null != memo2) {
      closure_33.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items47);
  const tmp15Result11 = stateFromStores1(obj2.useState(false), 2);
  [tmp77, c45] = stateFromStores1(obj2.useState(false), 2);
  const items48 = [projectId];
  const effect5 = obj2.useEffect(() => {
    if (obj.shouldShowVibegrationsConjureTip(timeout)) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        const result = projectId(stateFromStores[60]).markVibegrationsConjureTipShown();
        _undefined5(true);
      }, 0);
      return () => clearTimeout(closure_0);
    }
    obj = projectId(stateFromStores[60]);
  }, items48);
  const items49 = [projectId];
  const callback10 = obj2.useCallback(() => _undefined5(false), []);
  const items50 = [projectId];
  const callback11 = obj2.useCallback((arg0, arg1) => {
    closure_32.current = true;
    value2(projectId, arg0, arg1);
  }, items49);
  let connectionLabelResult = null;
  const callback12 = obj2.useCallback(() => {
    __initData(projectId);
  }, items50);
  if ("open" !== stateFromStores7) {
    connectionLabelResult = tmp2(tmp3[61]).connectionLabel(stateFromStores7);
    const tmp2Result33 = tmp2(tmp3[61]);
  }
  const tmp15Result12 = stateFromStores1(obj2.useState(false), 2);
  const obj6 = { style: tmp.container, children: null };
  const vibegrationsControlActive = projectId(stateFromStores[62]).useVibegrationsControlActive(projectId);
  const items51 = [draftHasText(onRestoreVersion(stateFromStores[63]), { thinking: stateFromStores3, bleedBottom: onRestoreVersion(stateFromStores[50])().bottom }), , ];
  const obj7 = { style: tmp.transcriptArea, children: null };
  const obj8 = { clearance: tmp45, children: null };
  const obj9 = { ref, fadingEdgeLength: 52, removeClippedSubviews: null, viewabilityConfig: null, onViewableItemsChanged: null, onScroll: null, onScrollBeginDrag: null, onContentSizeChange: null, scrollEventThrottle: 16, contentInset: null, ListHeaderComponent: null, pointerEvents: null, style: null, contentContainerStyle: null, data: null, extraData: null, maintainVisibleContentPosition: null, keyExtractor: null, ListEmptyComponent: null, renderItem: null };
  const tmp2Result34 = projectId(stateFromStores[62]);
  const tmp87 = ref5;
  const tmp2Result35 = projectId(stateFromStores[28]);
  obj9.removeClippedSubviews = projectId(stateFromStores[28]).isIOS() && undefined;
  obj9.viewabilityConfig = memo5;
  obj9.onViewableItemsChanged = callback8;
  obj9.onScroll = callback6;
  obj9.onScrollBeginDrag = callback4;
  obj9.onContentSizeChange = callback7;
  const tmp88 = projectId(stateFromStores[28]).isIOS() && undefined;
  let tmp89;
  if (tmp2Result36.isIOS()) {
    const obj10 = { top: num };
    tmp89 = obj10;
  }
  obj9.contentInset = tmp89;
  tmp2Result36 = projectId(stateFromStores[28]);
  let tmp86Result = null;
  if (!tmp2Result37.isIOS()) {
    tmp86Result = null;
    if (num > 0) {
      const obj11 = { style: null };
      const obj12 = { height: num };
      obj11.style = obj12;
      tmp86Result = tmp86(tmp85, obj11);
    }
  }
  obj9.ListHeaderComponent = tmp86Result;
  let str2 = "auto";
  if (tmp77) {
    str2 = "none";
  }
  obj9.pointerEvents = str2;
  const items52 = [tmp.transcript, , ];
  let transcriptDimmed = tmp77;
  if (tmp77) {
    transcriptDimmed = tmp.transcriptDimmed;
  }
  items52[1] = transcriptDimmed;
  tmp2Result37 = projectId(stateFromStores[28]);
  const isIOSResult = projectId(stateFromStores[28]).isIOS();
  let tmp92 = !isIOSResult;
  if (!isIOSResult) {
    const obj13 = { marginBottom: tmp45 - bound };
    tmp92 = obj13;
  }
  items52[2] = tmp92;
  obj9.style = items52;
  const items53 = [tmp.transcriptContent, ];
  const tmp2Result38 = projectId(stateFromStores[28]);
  items53[1] = { paddingBottom: bound + onRestoreVersion(stateFromStores[8]).space.PX_8 };
  obj9.contentContainerStyle = items53;
  obj9.data = memo;
  obj9.extraData = memo1;
  obj9.maintainVisibleContentPosition = { startRenderingFromBottom: true, autoscrollToBottomThreshold: 0.2 };
  obj9.keyExtractor = function keyExtractor(render_id) {
    return render_id.render_id;
  };
  let tmp93 = "loading" === chatEmptyStateResult;
  if (tmp93) {
    obj9.ListEmptyComponent = null;
    obj9.renderItem = function renderItem(arg0) {
      ({ item, index } = arg0);
      const obj = { projectId, message: item, groupStart: null, first: null, isNewest: null, showsOutdated: null, checklistSuperseded: null, checklistExpanded: null, onToggleChecklist: null, replied: null, onJumpToReplied: null, onApprovePlan: null, onPickIdea: null, onAskForIdeas: null, draftHasText: null, onAnswerClarification: null, clarificationDismissed: null, onDismissClarification: null, onRestoreVersion: null };
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
      obj.replied = closure_43.get(item.render_id);
      obj.onJumpToReplied = onJumpToReplied;
      let tmp5;
      if (closure_24) {
        tmp5 = closure_17;
      }
      obj.onApprovePlan = tmp5;
      obj.onPickIdea = onPickIdea;
      let tmp6;
      if (closure_24) {
        tmp6 = closure_20;
      }
      obj.onAskForIdeas = tmp6;
      obj.draftHasText = item.render_id === render_id && first;
      let tmp7;
      if (closure_24) {
        tmp7 = closure_21;
      }
      obj.onAnswerClarification = tmp7;
      let tmp8 = null != item.clarification;
      if (tmp8) {
        tmp8 = item.clarification.id === c22;
      }
      obj.clarificationDismissed = tmp8;
      obj.onDismissClarification = onDismissClarification;
      let tmp10;
      if (!stateFromStores3) {
        tmp10 = onRestoreVersion;
      }
      obj.onRestoreVersion = tmp10;
      return closure_2_19(closure_37, obj);
    };
    obj8.children = tmp86(tmp2(tmp3[64]).FlashList, obj9);
    const items54 = [tmp86(tmp87, obj8), , ];
    let tmp86Result4 = null;
    if (tmp23) {
      const obj15 = { projectId };
      tmp86Result4 = tmp86(tmp5(tmp3[65]), obj15);
    }
    items54[1] = tmp86Result4;
    let tmp86Result5 = null;
    if (null != tmp73) {
      const obj16 = { line: tmp73, onJumpToActivity: callback9, bottom: tmp5(tmp3[8]).space.PX_12 + tmp45, todos: memo6, todosLive: checklistLiveResult, agents: memo7 };
      tmp86Result5 = tmp86(tmp5(tmp3[66]), obj16);
      const tmp5Result = tmp5(tmp3[66]);
    }
    items54[2] = tmp86Result5;
    obj7.children = items54;
    items51[1] = tmp84(tmp85, obj7);
    const obj18 = { style: tmp.bottomStack, onLayout: callback1, children: null };
    const obj19 = { projectId, thinking: stateFromStores3, turnStartedAt: result1, compacting: stateFromStores4, recalling: null, activity: null, projectUsage: null, connLabel: null, controlling: null, connFailed: null, thinkingOpen: null, onToggleThinking: null };
    if (tmp93) {
      tmp93 = 0 === memo.length;
    }
    obj19.recalling = tmp93;
    obj19.activity = stateFromStores5;
    obj19.projectUsage = stateFromStores6;
    obj19.connLabel = connectionLabelResult;
    obj19.controlling = vibegrationsControlActive;
    obj19.connFailed = "failed" === stateFromStores7;
    obj19.thinkingOpen = tmp23;
    obj19.onToggleThinking = callback;
    const items55 = [tmp86(tmp5(tmp3[67]), obj19), ];
    const obj20 = { projectId, canSend: tmp36, running: stateFromStores3, stopped: stateFromStores8, onSend: callback11, onInterrupt: null, tipOpen: null, onDismissTip: null, onDraftHasTextChange: null };
    let tmp100;
    const tmp5Result3 = tmp5(tmp3[67]);
    if (stateFromStores3) {
      tmp100 = callback12;
    }
    obj20.onInterrupt = tmp100;
    obj20.tipOpen = tmp77;
    obj20.onDismissTip = callback10;
    obj20.onDraftHasTextChange = tmp15Result7[1];
    items55[1] = tmp86(tmp5(tmp3[68]), obj20);
    obj18.children = items55;
    items51[2] = tmp84(tmp85, obj18);
    obj6.children = items51;
    return tmp84(tmp85, obj6);
  } else {
    const obj21 = { style: tmp.placeholder, children: null };
    const intl3 = tmp2(tmp3[14]).intl;
    if ("unavailable" === chatEmptyStateResult) {
      let jTuX7C = tmp5(tmp3[15]).s4oxNv;
    } else {
      jTuX7C = tmp5(tmp3[15]).jTuX7C;
    }
    const obj22 = { variant: "text-sm/normal", color: "text-muted", children: intl3.string(jTuX7C) };
    obj21.children = tmp86(tmp2(tmp3[17]).Text, obj22);
    tmp86(tmp85, obj21);
  }
};