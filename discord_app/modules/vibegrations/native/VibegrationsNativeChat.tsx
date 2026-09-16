// === Module 16762: VibegrationsNativeChat ===

// Module 16762 (VibegrationsNativeChat)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3591 from "module_3591" /* 3591 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4628 */;
import Text_Text from "Text/Text" /* 4634 */;
import Stack_Stack from "Stack/Stack" /* 5058 */;
import components_Button_Button from "components/Button/Button" /* 5060 */;
import Card from "Card" /* 5693 */;
import VibegrationsNativeStatusLineDefault from "VibegrationsNativeStatusLine" /* 16763 */;
import useVibegrationsPlanDesign from "useVibegrationsPlanDesign" /* 16769 */;
import VibegrationsNativeMarkdown from "VibegrationsNativeMarkdown" /* 16770 */;
import VibegrationsTimelineTree from "VibegrationsTimelineTree" /* 16772 */;
import VibegrationsDuration from "VibegrationsDuration" /* 16773 */;
import VibegrationsSubagentMark from "VibegrationsSubagentMark" /* 16774 */;
import VibegrationsTodoAgents from "VibegrationsTodoAgents" /* 16776 */;
import VibegrationsChatGrouping from "VibegrationsChatGrouping" /* 16783 */;
import vibegrations_VibegrationsRepliedMessage from "vibegrations/VibegrationsRepliedMessage" /* 16785 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1896 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 16722 */;
import VibegrationsConnectionStore_mod from "VibegrationsConnectionStore" /* 16725 */;

require = fn;
function PlanDesign(arg0) {
  ({ projectId, design } = arg0);
  const tmp = closure_19();
  const vibegrationsPlanDesign = useVibegrationsPlanDesign.useVibegrationsPlanDesign(projectId, design.id);
  const src = vibegrationsPlanDesign.src;
  if (vibegrationsPlanDesign.gone) {
    return null;
  } else {
    const intl = util.intl;
    const stringResult = intl.string(_modDef3591.FW8UcU);
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl2 = util.intl;
    obj2.children = intl2.string(_modDef3591["9W8SbY"]);
    const items = [value2(Text_Text.Text, obj2), ];
    if (null == src) {
      const obj3 = { style: tmp.designPlaceholder, children: null };
      const obj4 = { size: "small", accessibilityLabel: stringResult };
      obj3.children = value2(hasOwnProperty, obj4);
      let tmp9Result = value2(React5, obj3);
    } else {
      const obj5 = { source: null, style: null, resizeMode: "cover", onError: null, accessible: true, accessibilityRole: "image", accessibilityLabel: null };
      const obj6 = { uri: src };
      obj5.source = obj6;
      obj5.style = tmp.designImage;
      obj5.onError = tmp5;
      obj5.accessibilityLabel = stringResult;
      tmp9Result = value2(timestampProducer, obj5);
    }
    const obj7 = { direction: "vertical", spacing: 4, children: null };
    items[1] = tmp9Result;
    obj7.children = items;
    return closure_1_17(Stack_Stack.Stack, obj7);
  }
}
function ProposalCard(proposal) {
  proposal = proposal.proposal;
  ({ projectId, actionable, onApprove } = proposal);
  const trimmed = proposal.summary.trim();
  let bot_permissions = proposal.bot_permissions;
  if (bot_permissions == null) {
    bot_permissions = [];
  }
  let privileged_intents = proposal.privileged_intents;
  if (privileged_intents == null) {
    privileged_intents = [];
  }
  const obj = { style: closure_19().surface, children: null };
  const obj2 = { variant: "heading-md/bold", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3591["60htw+"]);
  const items = [value2(Text_Text.Text, obj2), , , , , , ];
  if ("" === trimmed) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef3591.IHCafX);
  } else {
    stringResult = MarkupUtilsDefault.parse(trimmed, true, VibegrationsNativeMarkdown.VIBEGRATIONS_MARKUP_OPTIONS);
    const tmp8Result = MarkupUtilsDefault;
  }
  items[1] = value2(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children: stringResult });
  let tmp3Result = null;
  if (null != proposal.design_image) {
    const obj3 = { projectId, design: proposal.design_image };
    tmp3Result = value2(PlanDesign, obj3);
  }
  items[2] = tmp3Result;
  let tmp5Result = null;
  if (proposal.changes.length > 0) {
    const obj4 = { direction: "vertical", spacing: 4, children: null };
    const obj5 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl3 = util.intl;
    obj5.children = intl3.string(_modDef3591.KLyB8Y);
    const items1 = [value2(Text_Text.Text, obj5), ];
    const changes = proposal.changes;
    items1[1] = changes.map((item, index) => closure_1_16(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item }, index));
    obj4.children = items1;
    tmp5Result = closure_1_17(Stack_Stack.Stack, obj4);
  }
  items[3] = tmp5Result;
  let tmp5Result3 = null;
  if (bot_permissions.length > 0) {
    const obj6 = { direction: "vertical", spacing: 4, children: null };
    const obj7 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl4 = util.intl;
    obj7.children = intl4.string(_modDef3591.ieqTtP);
    const items2 = [value2(Text_Text.Text, obj7), ];
    const obj8 = { variant: "text-sm/normal", color: "text-default", children: bot_permissions.join(", ") };
    items2[1] = value2(Text_Text.Text, obj8);
    obj6.children = items2;
    tmp5Result3 = closure_1_17(Stack_Stack.Stack, obj6);
  }
  items[4] = tmp5Result3;
  let tmp5Result4 = null;
  if (privileged_intents.length > 0) {
    const obj9 = { direction: "vertical", spacing: 4, children: null };
    const obj10 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl5 = util.intl;
    obj10.children = intl5.string(_modDef3591.Cn9qix);
    const items3 = [value2(Text_Text.Text, obj10), ];
    const obj11 = { variant: "text-sm/normal", color: "text-default", children: privileged_intents.join(", ") };
    items3[1] = value2(Text_Text.Text, obj11);
    obj9.children = items3;
    tmp5Result4 = closure_1_17(Stack_Stack.Stack, obj9);
  }
  items[5] = tmp5Result4;
  let tmp3Result2 = null;
  if (actionable) {
    const obj12 = { text: null, variant: "primary", onPress: null };
    const intl6 = util.intl;
    obj12.text = intl6.string(_modDef3591.GYoWRk);
    obj12.onPress = onApprove;
    tmp3Result2 = value2(components_Button_Button.Button, obj12);
  }
  items[6] = tmp3Result2;
  obj.children = closure_1_17(Stack_Stack.Stack, { direction: "vertical", spacing: 8, children: items });
  return value2(React5, obj);
}
function IdeaCards(arg0) {
  ({ ideas, onPick: require } = arg0);
  let obj = { style: closure_19().ideaCards, children: null };
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
  let intl = util.intl;
  obj2.children = intl.string(_modDef3591.DAvYsi);
  let items = [
    closure_16(Text_Text.Text, obj2),
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
      obj.accessibilityLabel = intl.formatToPlainString(_modDef3591.pztRGi, { title: title.title });
      const items = [closure_1_16(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", children: title.title }), ];
      let tmpResult = null;
      if ("" !== title.value) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = closure_1_16(Text_Text.Text, obj4);
      }
      items[1] = tmpResult;
      obj.children = closure_1_17(Stack_Stack.Stack, { direction: "vertical", spacing: 4, children: items });
      return closure_1_16(Card.Card, obj, title.id);
    })
  ];
  obj.children = items;
  return closure_17(closure_7, obj);
}
function AttachmentPills(projectId) {
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp = closure_19();
  closure_1 = tmp;
  const items = [projectId];
  dependencyMap = noop.useCallback((arg0) => {
    const promise = closure_2_12(projectId, arg0);
    closure_2_12(projectId, arg0).then((result) => closure_1_1(dependencyMap[20]).openURL(result)).catch(() => {

    });
  }, items);
  return closure_16(closure_7, {
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
        obj.accessibilityLabel = intl.formatToPlainString(closure_1(3591).QUFLUq, obj2);
        const obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
        obj.children = closure_1_16(projectId(4634).Text, obj3);
        let tmp12 = closure_1_16(projectId(5693).Card, obj, id.id);
      } else {
        const obj4 = { style: closure_1.attachmentPill, children: null };
        const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
        const intl2 = projectId(1115).intl;
        const obj6 = { name: id.name };
        obj5.children = intl2.formatToPlainString(closure_1(3591).OBr7WW, obj6);
        obj4.children = closure_1_16(projectId(4634).Text, obj5);
        const _HermesInternal = HermesInternal;
        tmp12 = closure_1_16(closure_1_7, obj4, "" + id.name + "-" + index);
      }
      return tmp12;
    })
  });
}
function IdeasOffer(onAsk) {
  onAsk = onAsk.onAsk;
  const tmp = closure_19();
  const obj = { style: tmp.ideasOffer, children: null };
  const obj2 = { style: tmp.ideasOfferHint, children: null };
  const obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj3.children = intl.string(_modDef3591.tG5PBo);
  obj2.children = value2(Text_Text.Text, obj3);
  const items = [value2(React5, obj2), ];
  const obj4 = { variant: "secondary", size: "sm", disabled: null == onAsk, onPress: onAsk, text: null };
  const intl2 = util.intl;
  obj4.text = intl2.string(_modDef3591.cwTe5o);
  items[1] = value2(components_Button_Button.Button, obj4);
  obj.children = items;
  return closure_1_17(React5, obj);
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
  const tmp = closure_19();
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
    tmp4Result = value2(Text_Text.Text, obj3);
    const tmp7Result = VibegrationsDuration;
  }
  obj.trailing = tmp4Result;
  const children = [value2(tmp6, obj), ];
  let tmp4Result2 = null;
  if (node.detail.length > 0) {
    const obj4 = { style: tmp.stepDetail, children: null };
    const detail = node.detail;
    obj4.children = detail.map((children, index) => closure_1_16(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children }, index));
    tmp4Result2 = value2(React5, obj4);
  }
  children[1] = tmp4Result2;
  return closure_1_17(React5, { children });
}
function TurnStatusLine(epoch) {
  ({ tree, turnActive } = epoch);
  epoch = epoch.epoch;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_19();
  [tmp3, c2] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const currentStepResult = turnActive(16772).currentStep(tree.steps);
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
    groupLabel = turnActive(16773).describeTurnDuration(tmp8);
    const tmp5Result = turnActive(16773);
  } else if (null != currentStepResult) {
    groupLabel = turnActive(16772).describeNode(currentStepResult);
    const tmp5Result2 = turnActive(16772);
  } else if (groupLabel == null) {
    const intl = turnActive(1115).intl;
    groupLabel = intl.string(epoch(3591).nv6pUM);
  }
  let someResult = tree.steps.length > 1;
  if (!someResult) {
    const steps = tree.steps;
    someResult = steps.some((detail) => detail.detail.length > 0);
  }
  const obj2 = { line: groupLabel, live: turnActive, settled: !turnActive, inGutter: true, epoch, expanded: tmp3, onToggle: null };
  let tmp19;
  let obj = turnActive(16772);
  if (someResult) {
    tmp19 = callback;
  }
  obj2.onToggle = tmp19;
  const children = [closure_16(epoch(16763), obj2), ];
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
        return value2(TimelineRow, obj, node.id);
      });
      tmp17Result = closure_16(closure_7, obj3);
    }
  }
  children[1] = tmp17Result;
  return closure_17(closure_7, { children });
}
function LaneStatusLine(arg0) {
  ({ lane, mark } = arg0);
  ({ turnActive, epoch } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_19();
  [tmp3, c2] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  if (turnActive) {
    turnActive = "running" === lane.task.status;
  }
  let currentStepResult;
  if (turnActive) {
    currentStepResult = mark(16772).currentStep(lane.steps);
    const obj = mark(16772);
  }
  _slicedToArray = currentStepResult;
  const tmp8 = lane.task.detail.length > 0 || lane.steps.length > 0;
  const task = lane.task;
  if (null != task.labelText) {
    if ("" !== task.labelText) {
      let labelText = task.labelText;
    }
    const obj2 = { line: null, live: null, settled: null, failed: null, glyph: null, crestColor: null, inGutter: true, epoch: null, expanded: null, onToggle: null, trailing: null };
    const _HermesInternal = HermesInternal;
    obj2.line = "" + labelText + " \u2014 " + mark(16772).describeTaskStatus(lane.task.status);
    obj2.live = turnActive;
    let tmp17 = !turnActive;
    if (!turnActive) {
      tmp17 = "failed" !== lane.task.status;
    }
    obj2.settled = tmp17;
    obj2.failed = "failed" === lane.task.status;
    obj2.glyph = closure_16(mark.Illocon, { size: 16, accessible: false });
    obj2.crestColor = mark.tint;
    obj2.epoch = epoch;
    obj2.expanded = tmp3;
    let tmp18;
    if (tmp8) {
      tmp18 = callback;
    }
    obj2.onToggle = tmp18;
    let tmp11Result = null;
    if (null != lane.task.durationMs) {
      const obj4 = { variant: "text-xs/normal", color: "text-subtle", children: mark(16773).describeDuration(lane.task.durationMs) };
      tmp11Result = closure_16(mark(4634).Text, obj4);
      const tmp15Result = mark(16773);
    }
    obj2.trailing = tmp11Result;
    const items = [closure_16(tmp14, obj2), ];
    let tmp9Result = null;
    if (tmp3) {
      tmp9Result = null;
      if (tmp8) {
        const obj5 = { style: tmp.activityDetail, children: null };
        const detail = lane.task.detail;
        const items1 = [detail.map((children, index) => closure_1_16(mark(_undefined[15]).Text, { variant: "text-xs/normal", color: "text-feedback-critical", children }, index)), ];
        const steps = lane.steps;
        items1[1] = steps.map((node) => value2(TimelineRow, { node, live: node === c3, crestColor: mark.tint, epoch }, node.id));
        obj5.children = items1;
        tmp9Result = closure_17(closure_7, obj5);
      }
    }
    const obj6 = { children: null };
    items[1] = tmp9Result;
    obj6.children = items;
    return closure_17(closure_7, obj6);
  }
  const intl = mark(1115).intl;
  labelText = intl.string(epoch(3591).MdXWEK);
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
  const tmp = closure_19();
  const tasks = tree.tasks;
  dependencyMap = turnActive(16774).subagentIllocons(tasks.map((taskId) => taskId.taskId));
  let obj2 = { style: tmp.activityBox, children: null };
  const items = [closure_16(TurnStatusLine, { tree, turnActive, epoch: length }), ];
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
      tmp5 = value2(LaneStatusLine, obj2, task.taskId);
    }
    return tmp5;
  });
  obj2.children = items;
  return closure_17(closure_7, obj2);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, Image: metroRequire, View: closure_7 } = get_ActivityIndicator);
const turnSettled = fn(16722).turnSettled;
let VibegrationsConnectionStore = fn(16725);
({ ensureConnection: closure_11, getAttachmentUrl: closure_12, interruptTurn: map1, sendUserMessage: closure_14 } = VibegrationsConnectionStore);
let VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
let diff = fn(16763).MESSAGE_CONTENT_INSET - fn(16763).MESSAGE_EDGE_INSET;
const createStyles = fn(4638);
let obj = { container: { flex: 1 }, transcript: { flex: 1 }, transcriptArea: { flex: 1, position: "relative" }, transcriptContent: { paddingVertical: nativeDefault.space.PX_8 }, row: null, rowGroupStart: null, avatar: null, spoken: null, spokenAfterWork: null, avatarSpoken: null, avatarSpokenReplying: null, header: null, surface: null, designImage: null, designPlaceholder: null, ideaCards: null, activityBox: null, activityDetail: null, stepDetail: null, attachmentPills: null, attachmentPill: null, ideasOffer: null, ideasOfferHint: null, footerStatus: null, statusRow: null, placeholder: null };
let obj3 = { paddingVertical: nativeDefault.space.PX_8 };
obj.row = { position: "relative", paddingLeft: fn(16763).MESSAGE_CONTENT_INSET, paddingRight: fn(16763).MESSAGE_EDGE_INSET, paddingVertical: 2, gap: PX_8 };
obj.rowGroupStart = { marginTop: PX_12 };
const rect = { position: "absolute", left: fn(16763).MESSAGE_EDGE_INSET, top: 2 };
obj.avatar = rect;
obj.spoken = { position: "relative", gap: PX_8 };
obj.spokenAfterWork = { marginTop: PX_8 };
const rect1 = { left: fn(16763).MESSAGE_EDGE_INSET - fn(16763).MESSAGE_CONTENT_INSET, top: 0 };
obj.avatarSpoken = rect1;
let obj4 = { position: "relative", paddingLeft: fn(16763).MESSAGE_CONTENT_INSET, paddingRight: fn(16763).MESSAGE_EDGE_INSET, paddingVertical: 2, gap: PX_8 };
obj.avatarSpokenReplying = { top: fn(16765).REPLY_PREVIEW_HEIGHT + PX_8 };
let obj5 = { top: fn(16765).REPLY_PREVIEW_HEIGHT + PX_8 };
obj.header = { marginBottom: -nativeDefault.space.PX_4 };
let obj6 = { marginBottom: -nativeDefault.space.PX_4 };
obj.surface = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12 };
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12 };
obj.designImage = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj8 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj.designPlaceholder = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
obj.ideaCards = { gap: PX_8 };
obj.activityBox = { marginLeft: -diff };
obj.activityDetail = { paddingLeft: diff };
let obj9 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
obj.stepDetail = { marginTop: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_12, borderLeftWidth: 2, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, gap: 2 };
let obj10 = { marginTop: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_12, borderLeftWidth: 2, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, gap: 2 };
obj.attachmentPills = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj11 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj.attachmentPill = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
obj.ideasOffer = { flexDirection: "row", alignItems: "center", gap: PX_8 };
obj.ideasOfferHint = { flexShrink: 1 };
let obj12 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
obj.footerStatus = { marginTop: PX_12, paddingHorizontal: fn(16763).MESSAGE_EDGE_INSET };
let obj13 = { marginTop: PX_12, paddingHorizontal: fn(16763).MESSAGE_EDGE_INSET };
obj.statusRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 };
let obj14 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 };
obj.placeholder = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
let closure_19 = createStyles.createStyles(obj);
let closure_29 = noop.memo((onJumpToReplied) => {
  ({ projectId, message } = onJumpToReplied);
  ({ groupStart, isNewest, replied } = onJumpToReplied);
  onJumpToReplied = onJumpToReplied.onJumpToReplied;
  ({ first, onApprove, onPickIdea, onAskForIdeas, onAnswerClarification } = onJumpToReplied);
  let tmp = closure_19();
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
  const items4 = [memo];
  const items5 = [onJumpToReplied, replied];
  const memo4 = noop.useMemo(() => VibegrationsTodoAgents.runningTodoAgents(memo.tasks), items4);
  const callback = noop.useCallback(() => {
    if (null != replied) {
      if (onJumpToReplied != null) {
        tmp2(tmp.id);
      }
    }
  }, items5);
  const trimmed = message.content.trim();
  let attachments = null;
  if (null != message.attachments) {
    attachments = null;
    if (message.attachments.length > 0) {
      attachments = message.attachments;
    }
  }
  const items6 = [tmp.row, ];
  let rowGroupStart = groupStart;
  if (groupStart) {
    rowGroupStart = !first;
  }
  if (rowGroupStart) {
    rowGroupStart = tmp.rowGroupStart;
  }
  items6[1] = rowGroupStart;
  if ("user" === message.role) {
    if ("" !== trimmed) {
      const obj2 = { style: items6, children: null };
      let tmp69 = null;
      if (groupStart) {
        const obj3 = { style: tmp.avatar, children: null };
        const obj4 = { userId: message.user_id };
        obj3.children = closure_16(message(onJumpToReplied[25]).VibegrationsUserAvatar, obj4);
        tmp69 = closure_16(closure_7, obj3);
      }
      const items7 = [tmp69, , , ];
      let tmp73 = null;
      if (groupStart) {
        const obj5 = { style: tmp.header, children: null };
        ({ user_id: obj29.userId, created_at: obj29.at } = message);
        obj5.children = closure_16(message(onJumpToReplied[25]).VibegrationsUserHeader, { userId: null, at: null });
        tmp73 = closure_16(closure_7, obj5);
        const obj6 = { userId: null, at: null };
      }
      items7[1] = tmp73;
      let tmp84Result = null;
      if ("" !== trimmed) {
        let combined;
        if (!groupStart) {
          const intl2 = message(tmp86[11]).intl;
          const _HermesInternal = HermesInternal;
          combined = "" + intl2.string(message(tmp86[11]).t.KD6OJJ) + ": " + trimmed;
        }
        const obj7 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: trimmed };
        tmp84Result = closure_16(message(onJumpToReplied[15]).Text, obj7);
      }
      items7[2] = tmp84Result;
      let tmp80 = null;
      if (null != attachments) {
        const obj8 = { projectId, attachments };
        tmp80 = closure_16(AttachmentPills, obj8);
      }
      items7[3] = tmp80;
      obj2.children = items7;
      let tmp67Result = closure_17(closure_7, obj2);
    } else {
      tmp67Result = null;
    }
    return tmp67Result;
  } else if (true === message.interrupted) {
    const obj9 = { style: items6, children: null };
    const obj10 = { style: tmp.activityBox, children: null };
    const obj11 = { line: null, live: false, settled: true, inGutter: true, glyph: null };
    const intl = message(onJumpToReplied[11]).intl;
    obj11.line = intl.string(replied(onJumpToReplied[12])["5T7DSm"]);
    const obj12 = { size: "refresh_sm", color: replied(onJumpToReplied[7]).colors.TEXT_MUTED };
    obj11.glyph = closure_16(message(onJumpToReplied[26]).StopIcon, obj12);
    obj10.children = closure_16(replied(onJumpToReplied[8]), obj11);
    obj9.children = closure_16(closure_7, obj10);
    return closure_16(closure_7, obj9);
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
    let items14 = memo3;
    if (memo3 == null) {
      let todos = null;
      if (null != message.todos) {
        todos = null;
        if (message.todos.length > 0) {
          todos = message.todos;
        }
      }
      items14 = todos;
    }
    let provisionalTodo;
    if (null == items14) {
      if (null != message.provisionalTodo) {
        if ("" !== message.provisionalTodo) {
          provisionalTodo = message.provisionalTodo;
        }
      }
    }
    let tmp16 = null != tmp15;
    if (tmp16) {
      tmp16 = tmp15.content.trim() === trimmed;
    }
    let tmp17 = null == proposal;
    if (tmp17) {
      tmp17 = "" !== trimmed;
    }
    if (tmp17) {
      tmp17 = !tmp16;
    }
    let spokenAfterWork = memo.steps.length > 0 || memo.tasks.length > 0;
    if (!spokenAfterWork) {
      if (0 === memo1.length) {
        if (0 === memo2.length) {
          if ("" === trimmed) {
            if (null == proposal) {
              if (null == found) {
                if (null == ideas) {
                  if (null == items14) {
                    if (null == provisionalTodo) {
                      if (null == secretRequest) {
                        if (null == settingsRequest) {
                          if (null == attachments) {
                            if (null == clarification) {
                              if (!tmp18) {
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
    let avatarSpokenReplying = groupStart;
    if (groupStart) {
      avatarSpokenReplying = null != replied;
    }
    let tmp24Result = null;
    if (avatarSpokenReplying) {
      let obj = { replied, onJump: null };
      let tmp28;
      if (null != onJumpToReplied) {
        tmp28 = callback;
      }
      obj.onJump = tmp28;
      tmp24Result = closure_16(replied(onJumpToReplied[10]), obj);
      const tmp27 = replied(onJumpToReplied[10]);
    }
    const items8 = [tmp24Result, , ];
    const items9 = [, , ];
    ({ avatar: arr12[0], avatarSpoken: arr12[1] } = tmp);
    if (avatarSpokenReplying) {
      avatarSpokenReplying = tmp.avatarSpokenReplying;
    }
    const obj13 = { children: null };
    const obj14 = { style: null, children: null };
    items9[2] = avatarSpokenReplying;
    obj14.style = items9;
    obj14.children = closure_16(message(onJumpToReplied[25]).VibegrationsConjureAvatar, {});
    items8[1] = closure_16(closure_7, obj14);
    const obj15 = { style: tmp.header, children: null };
    const obj16 = { at: message.created_at };
    obj15.children = closure_16(message(onJumpToReplied[25]).VibegrationsConjureHeader, obj16);
    items8[2] = closure_16(closure_7, obj15);
    obj13.children = items8;
    const tmp21Result = closure_17(closure_18, obj13);
    const obj17 = { style: items6, children: null };
    let tmp21Result3 = null;
    if (memo1.length > 0) {
      const obj18 = { style: tmp.spoken, children: null };
      let tmp35 = null;
      if (groupStart) {
        tmp35 = tmp21Result;
      }
      const items10 = [tmp35, memo1.map((children) => closure_1_16(message(onJumpToReplied[15]).Text, { variant: "text-md/normal", color: "text-default", children: children.content }, children.key))];
      obj18.children = items10;
      tmp21Result3 = closure_17(closure_7, obj18);
    }
    const items11 = [tmp21Result3, , ];
    const obj19 = { tree: memo, turnActive: !turnSettled(message) };
    items11[1] = closure_16(ActivityBox, obj19);
    let tmp21Result4 = null;
    if (tmp20) {
      const items12 = [tmp.spoken, ];
      if (spokenAfterWork) {
        spokenAfterWork = groupStart;
      }
      if (spokenAfterWork) {
        spokenAfterWork = !tmp19;
      }
      if (spokenAfterWork) {
        spokenAfterWork = tmp.spokenAfterWork;
      }
      const obj20 = { style: null, children: null };
      items12[1] = spokenAfterWork;
      obj20.style = items12;
      let tmp39 = null;
      if (groupStart) {
        tmp39 = null;
        if (!tmp19) {
          tmp39 = tmp21Result;
        }
      }
      const items13 = [tmp39, memo2.map((content) => closure_1_16(replied(onJumpToReplied[17]), { source: content.content }, content.key)), , , , , , , , , , ];
      let tmp29Result = null;
      if (tmp17) {
        const obj21 = { source: trimmed };
        tmp29Result = closure_16(replied(tmp32[17]), obj21);
      }
      items13[2] = tmp29Result;
      let tmp29Result10 = null;
      if (null != attachments) {
        const obj22 = { projectId, attachments };
        tmp29Result10 = closure_16(AttachmentPills, obj22);
      }
      items13[3] = tmp29Result10;
      if (null != items14) {
        const obj23 = { style: tmp.surface, children: null };
        if (items14 == null) {
          items14 = [];
        }
        const obj24 = { todos: items14, provisional: provisionalTodo, agents: memo4 };
        obj23.children = closure_16(replied(tmp32[27]), obj24);
        let tmp29Result11 = closure_16(closure_7, obj23);
        const tmp46 = replied(tmp32[27]);
      } else {
        tmp29Result11 = null;
      }
      items13[4] = tmp29Result11;
      let tmp29Result12 = null;
      if (null != proposal) {
        const obj25 = { projectId, proposal, actionable: isNewest, onApprove };
        tmp29Result12 = closure_16(ProposalCard, obj25);
      }
      items13[5] = tmp29Result12;
      let tmp29Result13 = null;
      if (null != clarification) {
        const obj26 = { clarification, onSubmit: onAnswerClarification };
        tmp29Result13 = closure_16(replied(tmp32[28]), obj26);
      }
      items13[6] = tmp29Result13;
      let tmp29Result14 = null;
      if (null != secretRequest) {
        const obj27 = { projectId, request: secretRequest };
        tmp29Result14 = closure_16(replied(tmp32[29]), obj27);
      }
      items13[7] = tmp29Result14;
      let tmp29Result15 = null;
      if (null != settingsRequest) {
        const obj28 = { projectId, request: settingsRequest };
        tmp29Result15 = closure_16(replied(tmp32[30]), obj28);
      }
      items13[8] = tmp29Result15;
      let tmp29Result16 = null;
      if (null != ideas) {
        const obj30 = { ideas, onPick: onPickIdea };
        tmp29Result16 = closure_16(IdeaCards, obj30);
      }
      items13[9] = tmp29Result16;
      let tmp29Result17 = null;
      if (tmp18) {
        const obj31 = { onAsk: onAskForIdeas };
        tmp29Result17 = closure_16(IdeasOffer, obj31);
      }
      items13[10] = tmp29Result17;
      let tmp29Result18 = null;
      if (null != found) {
        tmp29Result18 = null;
        if ("message" in found) {
          const obj61 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
          tmp29Result18 = closure_16(message(tmp32[15]).Text, obj61);
        }
      }
      items13[11] = tmp29Result18;
      obj20.children = items13;
      tmp21Result4 = closure_17(closure_7, obj20);
    }
    items11[2] = tmp21Result4;
    obj17.children = items11;
    return closure_17(closure_7, obj17);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeChat.tsx");

export default function VibegrationsNativeChat(projectId) {
  projectId = projectId.projectId;
  let stateFromStores1;
  noop = undefined;
  let onApprove;
  let onPickIdea;
  closure_7 = undefined;
  let state;
  closure_9 = undefined;
  let memo;
  let memo1;
  c12 = undefined;
  c13 = undefined;
  let ref2;
  let callback;
  closure_18 = undefined;
  let ref;
  let onJumpToReplied;
  const tmp = ref();
  const items = [state];
  const stateFromStores = projectId(stateFromStores1[31]).useStateFromStores(items, () => "active" === state.getState(), []);
  const items1 = [stateFromStores, projectId];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      closure_2_11(projectId);
    }
  }, items1);
  let obj = projectId(stateFromStores1[31]);
  const items2 = [closure_9];
  const items3 = [projectId];
  stateFromStores1 = projectId(stateFromStores1[31]).useStateFromStores(items2, () => VibegrationsChatStore.getMessages(projectId), items3);
  const obj3 = projectId(stateFromStores1[31]);
  const items4 = [closure_9];
  const items5 = [projectId];
  const stateFromStores2 = projectId(stateFromStores1[31]).useStateFromStores(items4, () => VibegrationsChatStore.isThinking(projectId), items5);
  const obj4 = projectId(stateFromStores1[31]);
  const items6 = [closure_9];
  const items7 = [projectId];
  let stateFromStores3 = projectId(stateFromStores1[31]).useStateFromStores(items6, () => VibegrationsChatStore.isCompacting(projectId), items7);
  const obj5 = projectId(stateFromStores1[31]);
  const items8 = [ref2];
  const items9 = [projectId];
  const stateFromStores4 = projectId(stateFromStores1[31]).useStateFromStores(items8, () => VibegrationsConnectionStore.getConnState(projectId), items9);
  const obj6 = projectId(stateFromStores1[31]);
  const items10 = [ref2];
  const items11 = [projectId];
  const stateFromStores5 = projectId(stateFromStores1[31]).useStateFromStores(items10, () => VibegrationsConnectionStore.isChatStopped(projectId), items11);
  const obj7 = projectId(stateFromStores1[31]);
  const items12 = [closure_9];
  const items13 = [projectId];
  let render_id = null;
  const stateFromStores6 = projectId(stateFromStores1[31]).useStateFromStores(items12, () => VibegrationsChatStore.hasLoadedHistory(projectId), items13);
  if (stateFromStores1.length > 0) {
    render_id = stateFromStores1[stateFromStores1.length - 1].render_id;
  }
  const items14 = [stateFromStores1];
  noop = obj2.useMemo(() => VibegrationsChatGrouping.groupChatRows(stateFromStores1.map((key) => {
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
  })), items14);
  const items15 = [projectId];
  onApprove = obj2.useCallback(() => {
    const intl = util.intl;
    closure_2_14(projectId, intl.string(_modDef3591.Jj8Ftb));
  }, items15);
  const items16 = [projectId];
  onPickIdea = obj2.useCallback((implementation_prompt) => {
    closure_2_14(projectId, implementation_prompt.implementation_prompt);
  }, items16);
  const items17 = [projectId];
  closure_7 = obj2.useCallback(() => {
    const intl = util.intl;
    closure_2_14(projectId, intl.string(_modDef3591["3sTTBu"]));
  }, items17);
  const items18 = [projectId];
  state = obj2.useCallback((arg0) => {
    closure_2_14(projectId, arg0);
  }, items18);
  let tmp13 = "open" === stateFromStores4;
  if (!tmp13) {
    tmp13 = "connecting" === stateFromStores4;
  }
  if (tmp13) {
    tmp13 = !stateFromStores5;
  }
  closure_9 = tmp13;
  const items19 = [stateFromStores1];
  memo = obj2.useMemo(() => {
    let diff = stateFromStores1.length - 1;
    if (0 <= diff) {
      while (true) {
        let tmp3 = stateFromStores1[diff];
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
  }, items19);
  const items20 = [stateFromStores1, memo];
  memo1 = obj2.useMemo(() => {
    let tmp2;
    if (null != memo) {
      tmp2 = stateFromStores1[tmp];
    }
    let timelineTree = null;
    if (null != tmp2) {
      timelineTree = VibegrationsTimelineTree.buildTimelineTree(tmp2.steps, { turnActive: true });
    }
    return timelineTree;
  }, items20);
  let tmp16 = null != memo1;
  if (tmp16) {
    tmp16 = memo1.steps.length > 0 || memo1.tasks.length > 0;
    const tmp17 = memo1.steps.length > 0 || memo1.tasks.length > 0;
  }
  const items21 = [memo1];
  const memo2 = obj2.useMemo(() => {
    let currentStepResult;
    if (null != memo1) {
      currentStepResult = VibegrationsTimelineTree.currentStep(tmp.steps);
    }
    let describeNodeResult = null;
    if (null != currentStepResult) {
      describeNodeResult = VibegrationsTimelineTree.describeNode(currentStepResult);
    }
    return describeNodeResult;
  }, items21);
  const obj8 = projectId(stateFromStores1[31]);
  [obj9, c12] = render_id(noop.useState(null), 2);
  const tmp19 = render_id(noop.useState(null), 2);
  [tmp21, c13] = render_id(noop.useState(null), 2);
  ref = obj2.useRef(null);
  ref2 = obj2.useRef(0);
  callback = obj2.useCallback(() => {
    const current = ref.current;
    const current2 = ref2.current;
    if (null != current) {
      if (current2 > 0) {
        _undefined2(current.contentHeight - current.offsetY - current.viewportHeight < current2);
      }
    }
    _undefined2(null);
  }, []);
  const items22 = [callback];
  const items23 = [callback];
  const callback1 = obj2.useCallback((nativeEvent) => {
    closure_15.current = nativeEvent.nativeEvent.layout.height;
    callback();
  }, items22);
  const items24 = [callback];
  const callback2 = obj2.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    closure_14.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
    callback();
  }, items23);
  const callback3 = obj2.useCallback((arg0, contentHeight) => {
    let current = ref.current;
    if (null != current) {
      if (current.contentHeight - current.offsetY - current.viewportHeight <= 0.2 * current.viewportHeight) {
        const obj2 = {};
        const merged = Object.assign(current);
        obj2.contentHeight = contentHeight;
        const _Math = Math;
        current = Math.max(0, contentHeight - current.viewportHeight);
        obj2.offsetY = current;
        let obj = obj2;
      } else {
        obj = {};
        const merged1 = Object.assign(current);
        obj.contentHeight = contentHeight;
      }
      tmp.current = obj;
      callback();
    }
  }, items24);
  const memo3 = obj2.useMemo(() => ({ itemVisiblePercentThreshold: projectId(stateFromStores1[34]).MIN_VISIBLE_PERCENT }), []);
  const callback4 = obj2.useCallback((arg0) => {
    const set = new Set();
    const iter = arg0.viewableItems[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult.key) {
        let addResult = set.add(tmp2.key);
      }
      continue;
    }
    _undefined(set);
  }, []);
  if (stateFromStores3) {
    const intl2 = tmp2(tmp3[11]).intl;
    let stringResult = intl2.string(tmp5(tmp3[12])["0vH/5G"]);
  } else {
    stringResult = memo2;
    if (memo2 == null) {
      let intl = tmp2(tmp3[11]).intl;
      stringResult = intl.string(tmp5(tmp3[12]).QDGuNS);
    }
  }
  const items25 = [stateFromStores1, memo];
  const items26 = [memo1];
  const memo4 = obj2.useMemo(() => {
    if (null == memo) {
      return null;
    } else if (null == stateFromStores1[tmp]) {
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
  }, items25);
  const memo5 = obj2.useMemo(() => {
    if (null != memo1) {
      let runningTodoAgentsResult = VibegrationsTodoAgents.runningTodoAgents(tmp.tasks);
    } else {
      runningTodoAgentsResult = [];
    }
    return runningTodoAgentsResult;
  }, items26);
  if (null != memo) {
    let render_id1;
    if (stateFromStores1[memo] != null) {
      render_id1 = tmp32.render_id;
    }
  }
  let tmp34 = stateFromStores2;
  if (stateFromStores2) {
    if (!stateFromStores3) {
      stateFromStores3 = !tmp16;
    }
    tmp34 = stateFromStores3;
  }
  stateFromStores3 = tmp34;
  if (tmp34) {
    let tmp35 = false === tmp21;
  } else {
    tmp35 = null != tmp31 && null != obj9 && !obj9.has(tmp31);
  }
  let tmp36 = null;
  if (stateFromStores2) {
    tmp36 = null;
    if (tmp35) {
      tmp36 = stringResult;
    }
  }
  const items27 = [stateFromStores1];
  closure_18 = obj2.useMemo(() => {
    const map = new Map();
    const iter = stateFromStores1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if ("assistant" === nextResult.role) {
        if (null != tmp3.in_reply_to) {
          let obj2 = vibegrations_VibegrationsRepliedMessage;
          let repliedMessageResult = obj2.repliedMessage(stateFromStores1, tmp3.in_reply_to);
          if (null != repliedMessageResult) {
            let result = map.set(tmp3.render_id, tmp10);
          }
        }
      }
      continue;
    }
    return map;
  }, items27);
  ref = obj2.useRef(null);
  const items28 = [stateFromStores1];
  onJumpToReplied = obj2.useCallback((arg0) => {
    closure_0 = arg0;
    const findIndexResult = stateFromStores1.findIndex((id) => id.id === closure_0);
    if (findIndexResult >= 0) {
      const current = ref.current;
      if (current != null) {
        const obj = { index: findIndexResult, animated: true, viewPosition: 0.5 };
        current.scrollToIndex(obj);
      }
    }
  }, items28);
  const items29 = [memo, tmp34];
  const items30 = [projectId];
  const callback5 = obj2.useCallback(() => {
    if (stateFromStores3) {
      const current2 = ref.current;
      if (current2 != null) {
        current2.scrollToEnd({ animated: true });
      }
    } else if (null != memo) {
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1 };
        current.scrollToIndex(obj);
      }
    }
  }, items29);
  const items31 = [projectId];
  const callback6 = obj2.useCallback((arg0, arg1) => {
    closure_2_14(projectId, arg0, arg1);
  }, items30);
  const callback7 = obj2.useCallback(() => {
    map1(projectId);
  }, items31);
  if ("connecting" === stateFromStores4) {
    const intl4 = tmp2(tmp3[11]).intl;
    let stringResult1 = intl4.string(tmp5(tmp3[12]).W7oyuf);
  } else if ("closed" === stateFromStores4) {
    const intl3 = tmp2(tmp3[11]).intl;
    stringResult1 = intl3.string(tmp5(tmp3[12])["yBmS+I"]);
  } else {
    stringResult1 = null;
    if ("failed" === stateFromStores4) {
      const intl7 = tmp2(tmp3[11]).intl;
      stringResult1 = intl7.string(tmp5(tmp3[12]).eE60xI);
    }
  }
  const obj10 = { style: tmp.container, children: null };
  const items32 = [callback(stateFromStores(stateFromStores1[36]), { thinking: stateFromStores2, bleedBottom: stateFromStores(stateFromStores1[32])().bottom }), , , ];
  const obj11 = { style: tmp.transcriptArea, children: null };
  const obj12 = {
    ref,
    viewabilityConfig: memo3,
    onViewableItemsChanged: callback4,
    onScroll: callback2,
    onContentSizeChange: callback3,
    scrollEventThrottle: 16,
    style: tmp.transcript,
    contentContainerStyle: tmp.transcriptContent,
    data: stateFromStores1,
    maintainVisibleContentPosition: { startRenderingFromBottom: true, autoscrollToBottomThreshold: 0.2 },
    keyExtractor(render_id) {
      return render_id.render_id;
    },
    ListEmptyComponent: null,
    renderItem: null,
    ListFooterComponent: null
  };
  const obj13 = { style: tmp.placeholder, children: null };
  if (stateFromStores6) {
    const obj14 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl6 = tmp2(tmp3[11]).intl;
    obj14.children = intl6.string(tmp5(tmp3[12]).jTuX7C);
    let tmp44Result = tmp44(tmp2(tmp3[15]).Text, obj14);
  } else {
    const obj15 = { size: "small", accessibilityLabel: null };
    const intl5 = tmp2(tmp3[11]).intl;
    obj15.accessibilityLabel = intl5.string(tmp2(tmp3[11]).t.ZTNur7);
    tmp44Result = tmp44(onApprove, obj15);
  }
  obj13.children = tmp44Result;
  obj12.ListEmptyComponent = callback(closure_7, obj13);
  obj12.renderItem = function renderItem(arg0) {
    ({ item, index } = arg0);
    const obj = { projectId, message: item, groupStart: null, first: null, isNewest: null, replied: null, onJumpToReplied: null, onApprove: null, onPickIdea: null, onAskForIdeas: null, onAnswerClarification: null };
    let flag = closure_4[index];
    if (flag == null) {
      flag = true;
    }
    obj.groupStart = flag;
    obj.first = 0 === index;
    obj.isNewest = item.render_id === render_id;
    obj.replied = closure_18.get(item.render_id);
    obj.onJumpToReplied = onJumpToReplied;
    obj.onApprove = onApprove;
    obj.onPickIdea = onPickIdea;
    let tmp4;
    if (closure_9) {
      tmp4 = closure_7;
    }
    obj.onAskForIdeas = tmp4;
    let tmp5;
    if (closure_9) {
      tmp5 = closure_8;
    }
    obj.onAnswerClarification = tmp5;
    return value2(closure_29, obj);
  };
  const obj16 = { onLayout: callback1, children: null };
  let tmp44Result4 = null;
  if (tmp34) {
    const obj17 = { style: tmp.footerStatus, children: null };
    const obj18 = { live: true, inGutter: true, line: stringResult };
    obj17.children = tmp44(tmp5(tmp3[8]), obj18);
    tmp44Result4 = tmp44(tmp43, obj17);
  }
  obj16.children = tmp44Result4;
  obj12.ListFooterComponent = callback(closure_7, obj16);
  const items33 = [callback(projectId(stateFromStores1[37]).FlashList, obj12), ];
  let tmp44Result5 = null;
  if (null != tmp36) {
    const obj19 = { line: tmp36, onJumpToActivity: callback5, bottom: tmp5(tmp3[7]).space.PX_12, todos: memo4, agents: memo5 };
    tmp44Result5 = tmp44(tmp5(tmp3[38]), obj19);
    const tmp5Result = tmp5(tmp3[38]);
  }
  items33[1] = tmp44Result5;
  obj11.children = items33;
  items32[1] = stateFromStores3(closure_7, obj11);
  let tmp44Result6 = null;
  if (null != stringResult1) {
    const obj20 = { style: tmp.statusRow, children: null };
    const obj21 = { variant: "text-sm/normal", color: "text-muted", children: stringResult1 };
    obj20.children = tmp44(tmp2(tmp3[15]).Text, obj21);
    tmp44Result6 = tmp44(tmp43, obj20);
  }
  items32[2] = tmp44Result6;
  const obj22 = { projectId, canSend: tmp13, running: stateFromStores2, stopped: stateFromStores5, onSend: callback6, onInterrupt: null };
  let tmp52;
  const tmp20 = render_id(noop.useState(null), 2);
  if (stateFromStores2) {
    tmp52 = callback7;
  }
  obj22.onInterrupt = tmp52;
  items32[3] = callback(stateFromStores(stateFromStores1[39]), obj22);
  obj10.children = items32;
  return stateFromStores3(closure_7, obj10);
};