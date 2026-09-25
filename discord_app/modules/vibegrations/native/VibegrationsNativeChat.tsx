// === Module 16306: VibegrationsNativeChat ===

// Module 16306 (VibegrationsNativeChat)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import util from "util" /* 1115 */;
import _modDef3714 from "module_3714" /* 3714 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4819 */;
import Text_Text from "Text/Text" /* 4825 */;
import Stack_Stack from "Stack/Stack" /* 5272 */;
import components_Button_Button from "components/Button/Button" /* 5274 */;
import LinearGradientDefault from "LinearGradient" /* 5286 */;
import Card from "Card" /* 5914 */;
import _modDef5971 from "module_5971" /* 5971 */;
import VibegrationsDesignFeedback from "VibegrationsDesignFeedback" /* 16214 */;
import VibegrationsNativeStatusLineDefault from "VibegrationsNativeStatusLine" /* 16307 */;
import VibegrationsMessageActionSheet from "VibegrationsMessageActionSheet" /* 16313 */;
import useVibegrationsPlanDesign from "useVibegrationsPlanDesign" /* 16315 */;
import VibegrationsNativeMarkdown from "VibegrationsNativeMarkdown" /* 16316 */;
import VibegrationsTimelineTree from "VibegrationsTimelineTree" /* 16321 */;
import VibegrationsDuration from "VibegrationsDuration" /* 16322 */;
import VibegrationsSubagentMark from "VibegrationsSubagentMark" /* 16324 */;
import VibegrationsTodoAgents from "VibegrationsTodoAgents" /* 16348 */;
import VibegrationsTodoState from "VibegrationsTodoState" /* 16350 */;
import VibegrationsChatGrouping from "VibegrationsChatGrouping" /* 16356 */;
import vibegrations_VibegrationsRepliedMessage from "vibegrations/VibegrationsRepliedMessage" /* 16358 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1979 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 12608 */;
import VibegrationsConnectionStore_mod from "VibegrationsConnectionStore" /* 12607 */;

require = fn;
function PlanDesign(arg0) {
  ({ projectId, design } = arg0);
  const tmp = closure_24();
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
    items = [closure_1_17(Text_Text.Text, obj2), ];
    if (null == src) {
      const obj3 = { style: tmp.designPlaceholder, children: null };
      const obj4 = { size: "small", accessibilityLabel: stringResult };
      obj3.children = closure_1_17(hasOwnProperty, obj4);
      let tmp9Result = closure_1_17(React6, obj3);
    } else {
      const obj5 = { source: null, style: null, resizeMode: "cover", onError: null, accessible: true, accessibilityRole: "image", accessibilityLabel: null };
      const obj6 = { uri: src };
      obj5.source = obj6;
      obj5.style = tmp.designImage;
      obj5.onError = tmp5;
      obj5.accessibilityLabel = stringResult;
      tmp9Result = closure_1_17(timestampProducer, obj5);
    }
    const obj7 = { direction: "vertical", spacing: 4, children: null };
    items[1] = tmp9Result;
    obj7.children = items;
    return collapsedCategories(Stack_Stack.Stack, obj7);
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
  const obj = { style: closure_24().surface, children: null };
  const obj2 = { variant: "heading-md/bold", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3714["60htw+"]);
  items = [closure_1_17(Text_Text.Text, obj2), , , , , , ];
  if ("" === trimmed) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef3714.IHCafX);
  } else {
    stringResult = MarkupUtilsDefault.parse(trimmed, true, VibegrationsNativeMarkdown.VIBEGRATIONS_MARKUP_OPTIONS);
    const tmp8Result = MarkupUtilsDefault;
  }
  items[1] = closure_1_17(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children: stringResult });
  let tmp3Result = null;
  if (null != proposal.design_image) {
    const obj3 = { projectId, design: proposal.design_image };
    tmp3Result = closure_1_17(PlanDesign, obj3);
  }
  items[2] = tmp3Result;
  let tmp5Result = null;
  if (proposal.changes.length > 0) {
    const obj4 = { direction: "vertical", spacing: 4, children: null };
    const obj5 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl3 = util.intl;
    obj5.children = intl3.string(_modDef3714.KLyB8Y);
    const items1 = [closure_1_17(Text_Text.Text, obj5), ];
    const changes = proposal.changes;
    items1[1] = changes.map((item, index) => closure_1_17(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item }, index));
    obj4.children = items1;
    tmp5Result = collapsedCategories(Stack_Stack.Stack, obj4);
  }
  items[3] = tmp5Result;
  let tmp5Result3 = null;
  if (bot_permissions.length > 0) {
    const obj6 = { direction: "vertical", spacing: 4, children: null };
    const obj7 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl4 = util.intl;
    obj7.children = intl4.string(_modDef3714.ieqTtP);
    const items2 = [closure_1_17(Text_Text.Text, obj7), ];
    const obj8 = { variant: "text-sm/normal", color: "text-default", children: bot_permissions.join(", ") };
    items2[1] = closure_1_17(Text_Text.Text, obj8);
    obj6.children = items2;
    tmp5Result3 = collapsedCategories(Stack_Stack.Stack, obj6);
  }
  items[4] = tmp5Result3;
  let tmp5Result4 = null;
  if (privileged_intents.length > 0) {
    const obj9 = { direction: "vertical", spacing: 4, children: null };
    const obj10 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl5 = util.intl;
    obj10.children = intl5.string(_modDef3714.Cn9qix);
    const items3 = [closure_1_17(Text_Text.Text, obj10), ];
    const obj11 = { variant: "text-sm/normal", color: "text-default", children: privileged_intents.join(", ") };
    items3[1] = closure_1_17(Text_Text.Text, obj11);
    obj9.children = items3;
    tmp5Result4 = collapsedCategories(Stack_Stack.Stack, obj9);
  }
  items[5] = tmp5Result4;
  let tmp3Result2 = null;
  if (actionable) {
    const obj12 = { text: null, variant: "primary", onPress: null };
    const intl6 = util.intl;
    obj12.text = intl6.string(_modDef3714.GYoWRk);
    obj12.onPress = onApprove;
    tmp3Result2 = closure_1_17(components_Button_Button.Button, obj12);
  }
  items[6] = tmp3Result2;
  obj.children = collapsedCategories(Stack_Stack.Stack, { direction: "vertical", spacing: 8, children: items });
  return closure_1_17(React6, obj);
}
function IdeaCards(arg0) {
  ({ ideas, onPick: require } = arg0);
  let obj = { style: closure_24().ideaCards, children: null };
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
  let intl = util.intl;
  obj2.children = intl.string(_modDef3714.DAvYsi);
  items = [
    closure_17(Text_Text.Text, obj2),
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
      obj.accessibilityLabel = intl.formatToPlainString(_modDef3714.pztRGi, { title: title.title });
      items = [closure_1_17(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", children: title.title }), ];
      let tmpResult = null;
      if ("" !== title.value) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = closure_1_17(Text_Text.Text, obj4);
      }
      items[1] = tmpResult;
      obj.children = closure_1_18(Stack_Stack.Stack, { direction: "vertical", spacing: 4, children: items });
      return closure_1_17(Card.Card, obj, title.id);
    })
  ];
  obj.children = items;
  return closure_18(closure_8, obj);
}
function AttachmentPills(projectId) {
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp = closure_24();
  closure_1 = tmp;
  items = [projectId];
  dependencyMap = noop.useCallback((arg0) => {
    const promise = map1(projectId, arg0);
    map1(projectId, arg0).then((result) => closure_1_1(dependencyMap[21]).openURL(result)).catch(() => {

    });
  }, items);
  return closure_17(closure_8, {
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
        obj.accessibilityLabel = intl.formatToPlainString(closure_1(3714).QUFLUq, obj2);
        const obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
        obj.children = closure_1_17(projectId(4825).Text, obj3);
        let tmp12 = closure_1_17(projectId(5914).Card, obj, id.id);
      } else {
        const obj4 = { style: closure_1.attachmentPill, children: null };
        const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
        const intl2 = projectId(1115).intl;
        const obj6 = { name: id.name };
        obj5.children = intl2.formatToPlainString(closure_1(3714).OBr7WW, obj6);
        obj4.children = closure_1_17(projectId(4825).Text, obj5);
        const _HermesInternal = HermesInternal;
        tmp12 = closure_1_17(closure_1_8, obj4, "" + id.name + "-" + index);
      }
      return tmp12;
    })
  });
}
function IdeasOffer(onAsk) {
  onAsk = onAsk.onAsk;
  const tmp = closure_24();
  const obj = { style: tmp.ideasOffer, children: null };
  const obj2 = { style: tmp.ideasOfferHint, children: null };
  const obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj3.children = intl.string(_modDef3714.tG5PBo);
  obj2.children = closure_1_17(Text_Text.Text, obj3);
  items = [closure_1_17(React6, obj2), ];
  const obj4 = { variant: "secondary", size: "sm", disabled: null == onAsk, onPress: onAsk, text: null };
  const intl2 = util.intl;
  obj4.text = intl2.string(_modDef3714.cwTe5o);
  items[1] = closure_1_17(components_Button_Button.Button, obj4);
  obj.children = items;
  return collapsedCategories(React6, obj);
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
  const tmp = closure_24();
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
    tmp4Result = closure_1_17(Text_Text.Text, obj3);
    const tmp7Result = VibegrationsDuration;
  }
  obj.trailing = tmp4Result;
  const children = [closure_1_17(tmp6, obj), ];
  let tmp4Result2 = null;
  if (node.detail.length > 0) {
    const obj4 = { style: tmp.stepDetail, children: null };
    const detail = node.detail;
    obj4.children = detail.map((children, index) => closure_1_17(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children }, index));
    tmp4Result2 = closure_1_17(React6, obj4);
  }
  children[1] = tmp4Result2;
  return collapsedCategories(React6, { children });
}
function TurnStatusLine(epoch) {
  ({ tree, turnActive } = epoch);
  epoch = epoch.epoch;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_24();
  [tmp3, c2] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const currentStepResult = turnActive(16321).currentStep(tree.steps);
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
    groupLabel = turnActive(16322).describeTurnDuration(tmp8);
    const tmp5Result = turnActive(16322);
  } else if (null != currentStepResult) {
    groupLabel = turnActive(16321).describeNode(currentStepResult);
    const tmp5Result2 = turnActive(16321);
  } else if (groupLabel == null) {
    const intl = turnActive(1115).intl;
    groupLabel = intl.string(epoch(3714).nv6pUM);
  }
  let someResult = tree.steps.length > 1;
  if (!someResult) {
    const steps = tree.steps;
    someResult = steps.some((detail) => detail.detail.length > 0);
  }
  const obj2 = { line: groupLabel, live: turnActive, settled: !turnActive, inGutter: true, epoch, expanded: tmp3, onToggle: null };
  let tmp19;
  let obj = turnActive(16321);
  if (someResult) {
    tmp19 = callback;
  }
  obj2.onToggle = tmp19;
  const children = [closure_17(epoch(16307), obj2), ];
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
        return closure_2_17(TimelineRow, obj, node.id);
      });
      tmp17Result = closure_17(closure_8, obj3);
    }
  }
  children[1] = tmp17Result;
  return closure_18(closure_8, { children });
}
function LaneStatusLine(arg0) {
  ({ lane, mark } = arg0);
  ({ turnActive, epoch } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_24();
  [tmp3, c2] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  if (turnActive) {
    turnActive = tmp5;
  }
  let currentStepResult;
  if (turnActive) {
    currentStepResult = mark(16321).currentStep(lane.steps);
    const obj = mark(16321);
  }
  _slicedToArray = currentStepResult;
  const tmp9 = lane.task.detail.length > 0 || lane.steps.length > 0;
  if ("running" === lane.task.status) {
    if (null != currentStepResult) {
      let describeNodeResult = mark(16321).describeNode(currentStepResult);
      const obj4 = mark(16321);
    } else {
      describeNodeResult = mark(16323).taskTitle(lane.task);
      const obj3 = mark(16323);
    }
  } else {
    const obj2 = mark(16323);
    const obj5 = { line: mark(16323).describeTaskOutcome(lane.task), live: turnActive, settled: null, failed: null, glyph: null, crestColor: null, inGutter: true, epoch: null, expanded: null, onToggle: null };
    let tmp26 = !turnActive;
    const describeTaskOutcomeResult = mark(16323).describeTaskOutcome(lane.task);
    if (!turnActive) {
      tmp26 = "failed" !== lane.task.status;
    }
    obj5.settled = tmp26;
    obj5.failed = "failed" === lane.task.status;
    obj5.glyph = closure_17(mark.Illocon, { size: 16, accessible: false });
    obj5.crestColor = mark.tint;
    obj5.epoch = epoch;
    obj5.expanded = tmp3;
    let tmp27;
    if (tmp9) {
      tmp27 = callback;
    }
    obj5.onToggle = tmp27;
    items = [closure_17(epoch(16307), obj5), ];
    let tmp21Result = null;
    if (tmp3) {
      tmp21Result = null;
      if (tmp9) {
        const obj6 = { style: tmp.activityDetail, children: null };
        const detail = lane.task.detail;
        const items1 = [detail.map((children, index) => closure_1_17(mark(_undefined[16]).Text, { variant: "text-xs/normal", color: "text-feedback-critical", children }, index)), ];
        const steps = lane.steps;
        items1[1] = steps.map((node) => closure_2_17(TimelineRow, { node, live: node === c3, crestColor: mark.tint, epoch }, node.id));
        obj6.children = items1;
        tmp21Result = closure_18(closure_8, obj6);
      }
    }
    const obj7 = { children: null };
    items[1] = tmp21Result;
    obj7.children = items;
    return closure_18(closure_8, obj7);
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
  const tmp = closure_24();
  const tasks = tree.tasks;
  dependencyMap = turnActive(16324).subagentIllocons(tasks.map((taskId) => taskId.taskId));
  let obj2 = { style: tmp.activityBox, children: null };
  items = [closure_17(TurnStatusLine, { tree, turnActive, epoch: length }), ];
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
      tmp5 = closure_2_17(LaneStatusLine, obj2, task.taskId);
    }
    return tmp5;
  });
  obj2.children = items;
  return closure_18(closure_8, obj2);
}
function TranscriptFade(children) {
  children = children.children;
  const tmp = closure_24();
  let tmp3 = children;
  if (obj.isIOS()) {
    const obj2 = { style: tmp.transcript, maskElement: null, children: null };
    const obj3 = { style: tmp.transcript, children: null };
    const obj4 = { style: tmp.maskSolid };
    items = [closure_1_17(React6, obj4), , ];
    const obj5 = { style: tmp.maskFade, colors: items, locations, start, end };
    items[1] = closure_1_17(LinearGradientDefault, obj5);
    const obj6 = { style: null };
    const obj7 = { height: null };
    const _Math = Math;
    obj7.height = Math.max(0, children.clearance - 52);
    obj6.style = obj7;
    items[2] = closure_1_17(React6, obj6);
    obj3.children = items;
    obj2.maskElement = collapsedCategories(React6, obj3);
    obj2.children = children;
    tmp3 = closure_1_17(_modDef5971, obj2);
  }
  return tmp3;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, Image: metroRequire, Pressable: closure_7, View: closure_8 } = get_ActivityIndicator);
const turnSettled = fn(12608).turnSettled;
let VibegrationsConnectionStore = fn(12607);
({ ensureConnection: closure_12, getAttachmentUrl: map1, interruptTurn: closure_14, sendUserMessage: closure_15 } = VibegrationsConnectionStore);
let VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
let diff = fn(16307).MESSAGE_CONTENT_INSET - fn(16307).MESSAGE_EDGE_INSET;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let items = [BLACK, , ];
let obj2 = _modDef672(BLACK);
items[1] = _modDef672(BLACK).alpha(0.2).css();
items[2] = "transparent";
const locations = [0, 0.4, 1];
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const createStyles = fn(4829);
let obj = { container: { flex: 1 }, transcript: { flex: 1 }, transcriptDimmed: { opacity: 0.4 }, maskSolid: { flex: 1, backgroundColor: BLACK }, maskFade: { height: 52 }, transcriptArea: { flex: 1, position: "relative" }, transcriptContent: null, bottomStack: null, row: null, rowGroupStart: null, avatar: null, spoken: null, spokenAfterWork: null, avatarSpoken: null, avatarSpokenReplying: null, header: null, surface: null, designImage: null, designPlaceholder: null, ideaCards: null, activityBox: null, activityDetail: null, stepDetail: null, attachmentPills: null, attachmentPill: null, ideasOffer: null, ideasOfferHint: null, placeholder: null };
const alphaResult = _modDef672(BLACK).alpha(0.2);
obj.transcriptContent = { paddingTop: nativeDefault.space.PX_8 };
obj.bottomStack = { position: "absolute", left: 0, right: 0, bottom: 0 };
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj.row = { position: "relative", paddingLeft: fn(16307).MESSAGE_CONTENT_INSET, paddingRight: fn(16307).MESSAGE_EDGE_INSET, paddingVertical: 2, gap: PX_8 };
obj.rowGroupStart = { marginTop: nativeDefault.space.PX_12 };
const rect = { position: "absolute", left: fn(16307).MESSAGE_EDGE_INSET, top: 2 };
obj.avatar = rect;
obj.spoken = { position: "relative", gap: PX_8 };
obj.spokenAfterWork = { marginTop: PX_8 };
const rect1 = { left: fn(16307).MESSAGE_EDGE_INSET - fn(16307).MESSAGE_CONTENT_INSET, top: 0 };
obj.avatarSpoken = rect1;
let obj5 = { position: "relative", paddingLeft: fn(16307).MESSAGE_CONTENT_INSET, paddingRight: fn(16307).MESSAGE_EDGE_INSET, paddingVertical: 2, gap: PX_8 };
obj.avatarSpokenReplying = { top: fn(16309).REPLY_PREVIEW_HEIGHT + PX_8 };
let obj6 = { top: fn(16309).REPLY_PREVIEW_HEIGHT + PX_8 };
obj.header = { marginBottom: -nativeDefault.space.PX_4 };
let obj7 = { marginBottom: -nativeDefault.space.PX_4 };
obj.surface = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12 };
let obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12 };
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
obj.ideasOffer = { flexDirection: "row", alignItems: "center", gap: PX_8 };
obj.ideasOfferHint = { flexShrink: 1 };
let obj13 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
obj.placeholder = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
let closure_24 = createStyles.createStyles(obj);
let closure_35 = noop.memo((onToggleChecklist) => {
  ({ projectId, message } = onToggleChecklist);
  ({ groupStart, isNewest, checklistSuperseded } = onToggleChecklist);
  onToggleChecklist = onToggleChecklist.onToggleChecklist;
  const replied = onToggleChecklist.replied;
  const onJumpToReplied = onToggleChecklist.onJumpToReplied;
  let trimmed;
  let user_id;
  ({ first, checklistExpanded, onApprove, onPickIdea, onAskForIdeas, onAnswerClarification } = onToggleChecklist);
  let tmp = closure_24();
  items = [message];
  const memo = onJumpToReplied.useMemo(() => {
    const obj = VibegrationsTimelineTree;
    return obj.buildTimelineTree(message.steps, { turnActive: !turnSettled(message) });
  }, items);
  const items1 = [message];
  const memo1 = onJumpToReplied.useMemo(() => VibegrationsTimelineTree.announcementNotes(message.steps), items1);
  const items2 = [message];
  const memo2 = onJumpToReplied.useMemo(() => VibegrationsTimelineTree.streamedMessages(message.steps), items2);
  const items3 = [message];
  const memo3 = onJumpToReplied.useMemo(() => VibegrationsTimelineTree.latestTodos(message.steps), items3);
  const items4 = [memo];
  const items5 = [onToggleChecklist, message.render_id, checklistSuperseded];
  const memo4 = onJumpToReplied.useMemo(() => VibegrationsTodoAgents.runningTodoAgents(memo.tasks), items4);
  const items6 = [onJumpToReplied, replied];
  const callback = onJumpToReplied.useCallback(() => onToggleChecklist(message.render_id, checklistSuperseded), items5);
  const items7 = [message.content];
  const callback1 = onJumpToReplied.useCallback(() => {
    if (null != replied) {
      if (onJumpToReplied != null) {
        tmp2(tmp.id);
      }
    }
  }, items6);
  const memo5 = onJumpToReplied.useMemo(() => VibegrationsDesignFeedback.parseVibegrationsDesignRemark(message.content), items7);
  let body;
  if (memo5 != null) {
    body = memo5.body;
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
  const items8 = [tmp.row, ];
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
  const items9 = [trimmed, user_id];
  if ("" !== trimmed) {
    const callback2 = obj.useCallback(() => VibegrationsMessageActionSheet.showVibegrationsMessageActions({ content: trimmed, userId: user_id }), items9);
  }
  if ("user" === message.role) {
    if ("" === trimmed) {
      if (null == memo5) {
        let tmp76Result2 = null;
      }
      return tmp76Result2;
    }
    const obj2 = { style: items8, onLongPress: callback2, accessible: false, children: null };
    let tmp78 = null;
    if (groupStart) {
      const obj3 = { style: tmp.avatar, children: null };
      const obj4 = { userId: message.user_id };
      obj3.children = closure_17(message(onToggleChecklist[32]).VibegrationsUserAvatar, obj4);
      tmp78 = closure_17(user_id, obj3);
    }
    const items10 = [tmp78, , , ];
    let tmp83 = null;
    if (groupStart) {
      const obj5 = { style: tmp.header, children: null };
      ({ user_id: obj32.userId, created_at: obj32.at } = message);
      obj5.children = closure_17(message(onToggleChecklist[32]).VibegrationsUserHeader, { userId: null, at: null });
      tmp83 = closure_17(user_id, obj5);
      const obj6 = { userId: null, at: null };
    }
    items10[1] = tmp83;
    if (tmp12) {
      let combined;
      if (!groupStart) {
        const intl3 = message(tmp90[13]).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + intl3.string(message(tmp90[13]).t.KD6OJJ) + ": " + trimmed;
      }
      const obj7 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: null };
      let tmp93 = null;
      if (null != memo5) {
        const obj8 = { label: memo5.label, variant: "text-md/medium" };
        tmp93 = closure_17(checklistSuperseded(tmp90[33]), obj8);
      }
      const items11 = [tmp93, , ];
      let str6 = null;
      if (null != memo5) {
        str6 = null;
        if (tmp12) {
          str6 = " ";
        }
      }
      items11[1] = str6;
      items11[2] = trimmed;
      obj7.children = items11;
      let tmp76Result = closure_18(message(onToggleChecklist[16]).Text, obj7);
    } else {
      tmp76Result = null;
    }
    items10[2] = tmp76Result;
    let tmp96 = null;
    if (null != attachments) {
      const obj9 = { projectId, attachments };
      tmp96 = closure_17(AttachmentPills, obj9);
    }
    items10[3] = tmp96;
    obj2.children = items10;
    tmp76Result2 = closure_18(trimmed, obj2);
  } else if (true === message.interrupted) {
    const obj10 = { style: items8, children: null };
    const obj11 = { style: tmp.activityBox, children: null };
    const obj12 = { line: null, live: false, settled: true, inGutter: true, glyph: null };
    const intl2 = message(onToggleChecklist[13]).intl;
    obj12.line = intl2.string(checklistSuperseded(onToggleChecklist[14])["5T7DSm"]);
    const obj13 = { size: "refresh_sm", color: checklistSuperseded(onToggleChecklist[7]).colors.TEXT_MUTED };
    obj12.glyph = closure_17(message(onToggleChecklist[34]).StopIcon, obj13);
    obj11.children = closure_17(checklistSuperseded(onToggleChecklist[8]), obj12);
    obj10.children = closure_17(user_id, obj11);
    return closure_17(user_id, obj10);
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
    let items18 = memo3;
    if (memo3 == null) {
      let todos = null;
      if (null != message.todos) {
        todos = null;
        if (message.todos.length > 0) {
          todos = message.todos;
        }
      }
      items18 = todos;
    }
    let provisionalTodo;
    if (null == items18) {
      if (null != message.provisionalTodo) {
        if ("" !== message.provisionalTodo) {
          provisionalTodo = message.provisionalTodo;
        }
      }
    }
    let tmp22 = null != tmp21;
    if (tmp22) {
      tmp22 = tmp21.content.trim() === trimmed;
    }
    let spokenAfterWork = memo.steps.length > 0 || memo.tasks.length > 0;
    if (!spokenAfterWork) {
      if (0 === memo1.length) {
        if (0 === memo2.length) {
          if ("" === trimmed) {
            if (null == proposal) {
              if (null == found) {
                if (null == ideas) {
                  if (null == items18) {
                    if (null == provisionalTodo) {
                      if (null == secretRequest) {
                        if (null == settingsRequest) {
                          if (null == attachments) {
                            if (null == clarification) {
                              if (!tmp24) {
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
    let tmp30Result = null;
    if (avatarSpokenReplying) {
      const obj14 = { replied, onJump: null };
      let tmp34;
      if (null != onJumpToReplied) {
        tmp34 = callback1;
      }
      obj14.onJump = tmp34;
      tmp30Result = closure_17(checklistSuperseded(onToggleChecklist[11]), obj14);
      const tmp33 = checklistSuperseded(onToggleChecklist[11]);
    }
    const items12 = [tmp30Result, , ];
    const items13 = [, , ];
    ({ avatar: arr15[0], avatarSpoken: arr15[1] } = tmp);
    if (avatarSpokenReplying) {
      avatarSpokenReplying = tmp.avatarSpokenReplying;
    }
    const obj15 = { children: null };
    const obj16 = { style: null, children: null };
    items13[2] = avatarSpokenReplying;
    obj16.style = items13;
    obj16.children = closure_17(message(onToggleChecklist[32]).VibegrationsConjureAvatar, {});
    items12[1] = closure_17(user_id, obj16);
    const obj17 = { style: tmp.header, children: null };
    const obj18 = { at: message.created_at };
    obj17.children = closure_17(message(onToggleChecklist[32]).VibegrationsConjureHeader, obj18);
    items12[2] = closure_17(user_id, obj17);
    obj15.children = items12;
    const tmp27Result = closure_18(closure_19, obj15);
    const obj19 = { style: items8, onLongPress: callback2, accessible: false, children: null };
    let tmp27Result3 = null;
    if (memo1.length > 0) {
      const obj20 = { style: tmp.spoken, children: null };
      let tmp42 = null;
      if (groupStart) {
        tmp42 = tmp27Result;
      }
      const items14 = [tmp42, memo1.map((children) => closure_1_17(message(onToggleChecklist[16]).Text, { variant: "text-md/normal", color: "text-default", children: children.content }, children.key))];
      obj20.children = items14;
      tmp27Result3 = closure_18(tmp36, obj20);
    }
    const items15 = [tmp27Result3, , ];
    const obj21 = { tree: memo, turnActive: !turnSettled(message) };
    items15[1] = closure_17(ActivityBox, obj21);
    let tmp27Result4 = null;
    if (tmp26) {
      const items16 = [tmp.spoken, ];
      if (spokenAfterWork) {
        spokenAfterWork = groupStart;
      }
      if (spokenAfterWork) {
        spokenAfterWork = !tmp25;
      }
      if (spokenAfterWork) {
        spokenAfterWork = tmp.spokenAfterWork;
      }
      const obj22 = { style: null, children: null };
      items16[1] = spokenAfterWork;
      obj22.style = items16;
      let tmp46 = null;
      if (groupStart) {
        tmp46 = null;
        if (!tmp25) {
          tmp46 = tmp27Result;
        }
      }
      const items17 = [
        tmp46,
        memo2.map((content, index) => {
              const obj = { source: content.content, streaming: null };
              const tmp2 = turnSettled(message);
              let tmp3 = !tmp2;
              if (!tmp2) {
                tmp3 = index === memo2.length - 1;
              }
              obj.streaming = tmp3;
              return closure_2_17(VibegrationsNativeMarkdown.VibegrationsRevealedMarkdown, obj, content.key);
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

      ];
      let tmp35Result = null;
      if (tmp23) {
        const obj23 = { source: trimmed };
        tmp35Result = closure_17(checklistSuperseded(tmp38[18]), obj23);
      }
      items17[2] = tmp35Result;
      let tmp35Result11 = null;
      if ("side_reply" === message.kind) {
        const obj24 = { variant: "text-xs/normal", color: "text-muted", children: null };
        const intl = message(tmp38[13]).intl;
        obj24.children = intl.string(checklistSuperseded(tmp38[14]).OAjkIT);
        tmp35Result11 = closure_17(message(tmp38[16]).Text, obj24);
      }
      items17[3] = tmp35Result11;
      let tmp35Result12 = null;
      if (null != attachments) {
        const obj25 = { projectId, attachments };
        tmp35Result12 = closure_17(AttachmentPills, obj25);
      }
      items17[4] = tmp35Result12;
      if (null != items18) {
        const obj26 = { style: tmp.surface, children: null };
        if (items18 == null) {
          items18 = [];
        }
        const obj27 = { todos: items18, provisional: provisionalTodo, agents: memo4, live: null, superseded: null, expanded: null, onToggleExpanded: null };
        const tmp55 = checklistSuperseded(tmp38[35]);
        obj27.live = message(tmp38[36]).checklistLive(message);
        obj27.superseded = checklistSuperseded;
        obj27.expanded = checklistExpanded;
        obj27.onToggleExpanded = callback;
        obj26.children = closure_17(tmp55, obj27);
        let tmp35Result13 = closure_17(tmp36, obj26);
        const tmp37Result = message(tmp38[36]);
      } else {
        tmp35Result13 = null;
      }
      items17[5] = tmp35Result13;
      let tmp35Result14 = null;
      if (null != proposal) {
        const obj28 = { projectId, proposal, actionable: isNewest, onApprove };
        tmp35Result14 = closure_17(ProposalCard, obj28);
      }
      items17[6] = tmp35Result14;
      let tmp35Result15 = null;
      if (null != clarification) {
        const obj29 = { clarification, onSubmit: onAnswerClarification };
        tmp35Result15 = closure_17(checklistSuperseded(tmp38[37]), obj29);
      }
      items17[7] = tmp35Result15;
      let tmp35Result16 = null;
      if (null != secretRequest) {
        const obj30 = { projectId, request: secretRequest };
        tmp35Result16 = closure_17(checklistSuperseded(tmp38[38]), obj30);
      }
      items17[8] = tmp35Result16;
      let tmp35Result17 = null;
      if (null != settingsRequest) {
        const obj31 = { projectId, request: settingsRequest };
        tmp35Result17 = closure_17(checklistSuperseded(tmp38[39]), obj31);
      }
      items17[9] = tmp35Result17;
      let tmp35Result18 = null;
      if (null != ideas) {
        const obj33 = { ideas, onPick: onPickIdea };
        tmp35Result18 = closure_17(IdeaCards, obj33);
      }
      items17[10] = tmp35Result18;
      let tmp35Result19 = null;
      if (tmp24) {
        const obj34 = { onAsk: onAskForIdeas };
        tmp35Result19 = closure_17(IdeasOffer, obj34);
      }
      items17[11] = tmp35Result19;
      let tmp35Result20 = null;
      if (null != found) {
        tmp35Result20 = null;
        if ("message" in found) {
          const obj35 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
          tmp35Result20 = closure_17(message(tmp38[16]).Text, obj35);
        }
      }
      items17[12] = tmp35Result20;
      obj22.children = items17;
      tmp27Result4 = closure_18(tmp36, obj22);
    }
    items15[2] = tmp27Result4;
    obj19.children = items15;
    return closure_18(trimmed, obj19);
  }
  obj = onJumpToReplied;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeChat.tsx");

export default function VibegrationsNativeChat(projectId) {
  projectId = projectId.projectId;
  let stateFromStores1;
  let render_id;
  let set;
  c6 = undefined;
  c7 = undefined;
  let onToggleChecklist;
  let state;
  let onApprove;
  let onPickIdea;
  closure_12 = undefined;
  closure_13 = undefined;
  closure_14 = undefined;
  let memo;
  let memo1;
  c17 = undefined;
  c18 = undefined;
  let bound;
  let ref;
  c23 = undefined;
  let ref3;
  let callback2;
  closure_27 = undefined;
  let onJumpToReplied;
  c29 = undefined;
  let tmp = ref3();
  items = [state];
  const stateFromStores = projectId(stateFromStores1[40]).useStateFromStores(items, () => "active" === state.getState(), []);
  const items1 = [stateFromStores, projectId];
  const effect = render_id.useEffect(() => {
    if (stateFromStores) {
      closure_2_12(projectId);
    }
  }, items1);
  let obj = projectId(stateFromStores1[40]);
  const items2 = [onApprove];
  const items3 = [projectId];
  stateFromStores1 = projectId(stateFromStores1[40]).useStateFromStores(items2, () => VibegrationsChatStore.getMessages(projectId), items3);
  const obj3 = projectId(stateFromStores1[40]);
  const tmp7 = onApprove;
  const items4 = [onApprove];
  const items5 = [projectId];
  const stateFromStores2 = projectId(stateFromStores1[40]).useStateFromStores(items4, () => VibegrationsChatStore.isThinking(projectId), items5);
  const obj4 = projectId(stateFromStores1[40]);
  const items6 = [onApprove];
  const items7 = [projectId];
  const stateFromStores3 = projectId(stateFromStores1[40]).useStateFromStores(items6, () => VibegrationsChatStore.isCompacting(projectId), items7);
  const obj5 = projectId(stateFromStores1[40]);
  const items8 = [onApprove];
  const items9 = [projectId];
  const stateFromStores4 = projectId(stateFromStores1[40]).useStateFromStores(items8, () => VibegrationsChatStore.getThinkingActivity(projectId), items9);
  const obj6 = projectId(stateFromStores1[40]);
  const items10 = [onApprove];
  const items11 = [projectId];
  const stateFromStores5 = projectId(stateFromStores1[40]).useStateFromStores(items10, () => VibegrationsChatStore.getProjectUsage(projectId), items11);
  const obj7 = projectId(stateFromStores1[40]);
  [tmp14, tmp15] = render_id.useState(null);
  _slicedToArray = tmp15;
  let tmp16 = null == tmp14;
  if (!tmp16) {
    let tmp17 = stateFromStores2;
    if (stateFromStores2) {
      tmp17 = tmp14 === projectId;
    }
    tmp16 = tmp17;
  }
  if (!tmp16) {
    tmp15(null);
  }
  const items12 = [projectId];
  let tmp20 = stateFromStores2;
  const callback = obj2.useCallback(() => _undefined((arg0) => {
    let tmp = null;
    if (arg0 !== projectId) {
      tmp = projectId;
    }
    return tmp;
  }), items12);
  if (stateFromStores2) {
    tmp20 = tmp14 === projectId;
  }
  const tmp13 = _slicedToArray(render_id.useState(null), 2);
  const items13 = [memo1];
  const items14 = [projectId];
  const stateFromStores6 = projectId(stateFromStores1[40]).useStateFromStores(items13, () => VibegrationsConnectionStore.getConnState(projectId), items14);
  const tmp2Result = projectId(stateFromStores1[40]);
  const items15 = [memo1];
  const items16 = [projectId];
  const stateFromStores7 = projectId(stateFromStores1[40]).useStateFromStores(items15, () => VibegrationsConnectionStore.isChatStopped(projectId), items16);
  const tmp2Result9 = projectId(stateFromStores1[40]);
  const items17 = [tmp7];
  const items18 = [projectId];
  render_id = null;
  const stateFromStores8 = projectId(stateFromStores1[40]).useStateFromStores(items17, () => VibegrationsChatStore.hasLoadedHistory(projectId), items18);
  if (stateFromStores1.length > 0) {
    render_id = stateFromStores1[stateFromStores1.length - 1].render_id;
  }
  const items19 = [stateFromStores1];
  set = obj2.useMemo(() => VibegrationsTodoState.supersededChecklists(stateFromStores1), items19);
  const tmp2Result10 = projectId(stateFromStores1[40]);
  [c6, c7] = render_id.useState(() => new Map());
  onToggleChecklist = obj2.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined2((get) => projectId(stateFromStores1[36]).toggleChecklist(get, closure_0, closure_1));
  }, []);
  const items20 = [stateFromStores1];
  state = obj2.useMemo(() => VibegrationsChatGrouping.groupChatRows(stateFromStores1.map((key) => {
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
  })), items20);
  const items21 = [projectId];
  onApprove = obj2.useCallback(() => {
    const intl = util.intl;
    __initData(projectId, intl.string(_modDef3714.Jj8Ftb));
  }, items21);
  const items22 = [projectId];
  onPickIdea = obj2.useCallback((implementation_prompt) => {
    __initData(projectId, implementation_prompt.implementation_prompt);
  }, items22);
  const items23 = [projectId];
  closure_12 = obj2.useCallback(() => {
    const intl = util.intl;
    __initData(projectId, intl.string(_modDef3714["3sTTBu"]));
  }, items23);
  const items24 = [projectId];
  closure_13 = obj2.useCallback((arg0) => {
    __initData(projectId, arg0);
  }, items24);
  let tmp27 = tmp26;
  if ("open" !== stateFromStores6) {
    tmp27 = "connecting" === stateFromStores6;
  }
  if (tmp27) {
    tmp27 = !stateFromStores7;
  }
  closure_14 = tmp27;
  const items25 = [stateFromStores1];
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
  }, items25);
  const items26 = [stateFromStores1, memo];
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
  }, items26);
  let tmp30 = null != memo1;
  if (tmp30) {
    tmp30 = memo1.steps.length > 0 || memo1.tasks.length > 0;
    const tmp31 = memo1.steps.length > 0 || memo1.tasks.length > 0;
  }
  const items27 = [memo1];
  let memo2 = obj2.useMemo(() => {
    let currentStepResult;
    if (null != memo1) {
      currentStepResult = VibegrationsTimelineTree.currentStep(tmp.steps);
    }
    let describeNodeResult = null;
    if (null != currentStepResult) {
      describeNodeResult = VibegrationsTimelineTree.describeNode(currentStepResult);
    }
    return describeNodeResult;
  }, items27);
  const tmp12Result = _slicedToArray(render_id.useState(() => new Map()), 2);
  [obj11, c17] = render_id.useState(null);
  const tmp12Result5 = _slicedToArray(render_id.useState(null), 2);
  [tmp35, c18] = render_id.useState(64);
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
  const tmp12Result6 = _slicedToArray(render_id.useState(64), 2);
  bound = tmp35;
  if (!tmp2Result11.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp35, 52);
  }
  obj2.useRef(null);
  ref = obj2.useRef(null);
  render_id.useRef(false);
  tmp2Result11 = projectId(stateFromStores1[26]);
  [tmp41, c23] = render_id.useState(false);
  ref3 = obj2.useRef(null);
  render_id.useRef(0);
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
  const items28 = [callback2];
  const items29 = [callback2];
  const callback3 = obj2.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    closure_21.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
    callback2();
  }, items28);
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
  }, items29);
  const items30 = [callback2];
  const memo3 = obj2.useMemo(() => ({ itemVisiblePercentThreshold: projectId(stateFromStores1[43]).MIN_VISIBLE_PERCENT }), []);
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
  }, items30);
  if (stateFromStores3) {
    const intl2 = tmp2(tmp3[13]).intl;
    memo2 = intl2.string(tmp5(tmp3[14])["0vH/5G"]);
  } else if (memo2 == null) {
    let intl = tmp2(tmp3[13]).intl;
    memo2 = intl.string(tmp5(tmp3[14]).QDGuNS);
  }
  const items31 = [stateFromStores1, memo];
  let tmp48;
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
  }, items31);
  if (null != memo) {
    tmp48 = stateFromStores1[memo];
  }
  let checklistLiveResult = null == tmp48;
  if (!checklistLiveResult) {
    checklistLiveResult = tmp2(tmp3[36]).checklistLive(tmp48);
    const tmp2Result12 = tmp2(tmp3[36]);
  }
  const items32 = [memo1];
  let tmp51;
  const memo5 = obj2.useMemo(() => {
    if (null != memo1) {
      let runningTodoAgentsResult = VibegrationsTodoAgents.runningTodoAgents(tmp.tasks);
    } else {
      runningTodoAgentsResult = [];
    }
    return runningTodoAgentsResult;
  }, items32);
  if (null != memo) {
    let render_id1;
    if (stateFromStores1[memo] != null) {
      render_id1 = tmp52.render_id;
    }
    tmp51 = render_id1;
  }
  let tmp54 = null != tmp51;
  if (tmp54) {
    tmp54 = null != obj11 && !obj11.has(tmp51) || tmp41;
    const tmp55 = null != obj11 && !obj11.has(tmp51) || tmp41;
  }
  let tmp56 = null;
  if (stateFromStores2) {
    tmp56 = null;
    if (tmp30) {
      tmp56 = null;
      if (tmp54) {
        tmp56 = memo2;
      }
    }
  }
  const items33 = [bound, memo, callback2];
  const effect1 = obj2.useEffect(() => {
    closure_24.current = memo;
    closure_25.current = bound;
    closure_0 = requestAnimationFrame(callback2);
    return () => cancelAnimationFrame(closure_0);
  }, items33);
  const items34 = [stateFromStores1];
  closure_27 = obj2.useMemo(() => {
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
  }, items34);
  const items35 = [stateFromStores1];
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
  }, items35);
  const items36 = [bound, memo];
  const callback6 = obj2.useCallback(() => {
    if (null != memo) {
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items36);
  const tmp12Result7 = _slicedToArray(render_id.useState(false), 2);
  [tmp60, c29] = render_id.useState(false);
  const items37 = [projectId];
  const effect2 = obj2.useEffect(() => {
    if (obj.shouldShowVibegrationsConjureTip(timeout)) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        const result = projectId(stateFromStores1[45]).markVibegrationsConjureTipShown();
        _undefined5(true);
      }, 0);
      return () => clearTimeout(closure_0);
    }
    obj = projectId(stateFromStores1[45]);
  }, items37);
  const items38 = [projectId];
  const callback7 = obj2.useCallback(() => _undefined5(false), []);
  const items39 = [projectId];
  const callback8 = obj2.useCallback((arg0, arg1) => {
    closure_22.current = true;
    __initData(projectId, arg0, arg1);
  }, items38);
  let connectionLabelResult = null;
  const callback9 = obj2.useCallback(() => {
    closure_2_14(projectId);
  }, items39);
  if ("open" !== stateFromStores6) {
    connectionLabelResult = tmp2(tmp3[46]).connectionLabel(stateFromStores6);
    const tmp2Result13 = tmp2(tmp3[46]);
  }
  const tmp12Result8 = _slicedToArray(render_id.useState(false), 2);
  const obj8 = { style: tmp.container, children: null };
  const vibegrationsControlActive = projectId(stateFromStores1[47]).useVibegrationsControlActive(projectId);
  const items40 = [c17(stateFromStores(stateFromStores1[48]), { thinking: stateFromStores2, bleedBottom: stateFromStores(stateFromStores1[41])().bottom }), , ];
  const obj9 = { style: tmp.transcriptArea, children: null };
  const obj10 = { clearance: tmp35, children: null };
  const obj12 = { ref, fadingEdgeLength: 52, removeClippedSubviews: null, viewabilityConfig: null, onViewableItemsChanged: null, onScroll: null, onContentSizeChange: null, scrollEventThrottle: 16, pointerEvents: null, style: null, contentContainerStyle: null, data: null, maintainVisibleContentPosition: null, keyExtractor: null, ListEmptyComponent: null, renderItem: null };
  const tmp2Result14 = projectId(stateFromStores1[47]);
  const tmp2Result15 = projectId(stateFromStores1[26]);
  obj12.removeClippedSubviews = projectId(stateFromStores1[26]).isIOS() && undefined;
  obj12.viewabilityConfig = memo3;
  obj12.onViewableItemsChanged = callback5;
  obj12.onScroll = callback3;
  obj12.onContentSizeChange = callback4;
  let str2 = "auto";
  if (tmp60) {
    str2 = "none";
  }
  obj12.pointerEvents = str2;
  const items41 = [tmp.transcript, , ];
  let transcriptDimmed = tmp60;
  if (tmp60) {
    transcriptDimmed = tmp.transcriptDimmed;
  }
  items41[1] = transcriptDimmed;
  const tmp71 = projectId(stateFromStores1[26]).isIOS() && undefined;
  const isIOSResult = projectId(stateFromStores1[26]).isIOS();
  let tmp73 = !isIOSResult;
  if (!isIOSResult) {
    const obj13 = { marginBottom: tmp35 - bound };
    tmp73 = obj13;
  }
  items41[2] = tmp73;
  obj12.style = items41;
  const items42 = [tmp.transcriptContent, ];
  const tmp2Result16 = projectId(stateFromStores1[26]);
  items42[1] = { paddingBottom: bound + stateFromStores(stateFromStores1[7]).space.PX_8 };
  obj12.contentContainerStyle = items42;
  obj12.data = stateFromStores1;
  obj12.maintainVisibleContentPosition = { startRenderingFromBottom: true, autoscrollToBottomThreshold: 0.2 };
  obj12.keyExtractor = function keyExtractor(render_id) {
    return render_id.render_id;
  };
  const obj15 = { style: tmp.placeholder, children: null };
  if (stateFromStores8) {
    const obj16 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl4 = tmp2(tmp3[13]).intl;
    obj16.children = intl4.string(tmp5(tmp3[14]).jTuX7C);
    let tmp69Result = tmp69(tmp2(tmp3[16]).Text, obj16);
  } else {
    const obj17 = { size: "small", accessibilityLabel: null };
    const intl3 = tmp2(tmp3[13]).intl;
    obj17.accessibilityLabel = intl3.string(tmp2(tmp3[13]).t.ZTNur7);
    tmp69Result = tmp69(set, obj17);
  }
  obj15.children = tmp69Result;
  obj12.ListEmptyComponent = c17(onToggleChecklist, obj15);
  obj12.renderItem = function renderItem(arg0) {
    ({ item, index } = arg0);
    const obj = { projectId, message: item, groupStart: null, first: null, isNewest: null, checklistSuperseded: null, checklistExpanded: null, onToggleChecklist: null, replied: null, onJumpToReplied: null, onApprove: null, onPickIdea: null, onAskForIdeas: null, onAnswerClarification: null };
    let flag = state[index];
    if (flag == null) {
      flag = true;
    }
    obj.groupStart = flag;
    obj.first = 0 === index;
    obj.isNewest = item.render_id === render_id;
    obj.checklistSuperseded = set.has(item.render_id);
    obj.checklistExpanded = VibegrationsTodoState.checklistExpanded(c6, item.render_id, set.has(item.render_id));
    obj.onToggleChecklist = onToggleChecklist;
    obj.replied = closure_27.get(item.render_id);
    obj.onJumpToReplied = onJumpToReplied;
    obj.onApprove = onApprove;
    obj.onPickIdea = onPickIdea;
    let tmp4;
    if (closure_14) {
      tmp4 = closure_12;
    }
    obj.onAskForIdeas = tmp4;
    let tmp5;
    if (closure_14) {
      tmp5 = closure_13;
    }
    obj.onAnswerClarification = tmp5;
    return closure_2_17(closure_35, obj);
  };
  obj10.children = c17(projectId(stateFromStores1[49]).FlashList, obj12);
  const items43 = [c17(TranscriptFade, obj10), , , ];
  let tmp77 = stateFromStores2;
  const obj14 = { paddingBottom: bound + stateFromStores(stateFromStores1[7]).space.PX_8 };
  if (stateFromStores2) {
    tmp77 = !tmp20;
  }
  items43[1] = c17(stateFromStores(stateFromStores1[50]), { open: tmp77 });
  let tmp69Result3 = null;
  if (tmp20) {
    const obj18 = { projectId };
    tmp69Result3 = tmp69(tmp5(tmp3[51]), obj18);
  }
  items43[2] = tmp69Result3;
  let tmp69Result4 = null;
  if (null != tmp56) {
    const obj19 = { line: tmp56, onJumpToActivity: callback6, bottom: tmp5(tmp3[7]).space.PX_12 + tmp35, todos: memo4, todosLive: checklistLiveResult, agents: memo5 };
    tmp69Result4 = tmp69(tmp5(tmp3[52]), obj19);
    const tmp5Result3 = tmp5(tmp3[52]);
  }
  items43[3] = tmp69Result4;
  obj9.children = items43;
  items40[1] = c18(onToggleChecklist, obj9);
  const obj20 = { style: tmp.bottomStack, onLayout: callback1, children: null };
  const items44 = [c17(stateFromStores(stateFromStores1[53]), { projectId, thinking: stateFromStores2, compacting: stateFromStores3, activity: stateFromStores4, projectUsage: stateFromStores5, connLabel: connectionLabelResult, controlling: vibegrationsControlActive, connFailed: "failed" === stateFromStores6, thinkingOpen: tmp20, onToggleThinking: callback }), ];
  const obj22 = { projectId, canSend: tmp27, running: stateFromStores2, stopped: stateFromStores7, onSend: callback8, onInterrupt: null, tipOpen: null, onDismissTip: null };
  let tmp82;
  const obj21 = { projectId, thinking: stateFromStores2, compacting: stateFromStores3, activity: stateFromStores4, projectUsage: stateFromStores5, connLabel: connectionLabelResult, controlling: vibegrationsControlActive, connFailed: "failed" === stateFromStores6, thinkingOpen: tmp20, onToggleThinking: callback };
  const tmp5Result = stateFromStores(stateFromStores1[50]);
  if (stateFromStores2) {
    tmp82 = callback9;
  }
  obj22.onInterrupt = tmp82;
  obj22.tipOpen = tmp60;
  obj22.onDismissTip = callback7;
  items44[1] = c17(stateFromStores(stateFromStores1[54]), obj22);
  obj20.children = items44;
  items40[2] = c18(onToggleChecklist, obj20);
  obj8.children = items40;
  return c18(onToggleChecklist, obj8);
};