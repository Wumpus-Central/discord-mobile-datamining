// === Module 12632: ConjureActivityBox ===

// Module 12632 (ConjureActivityBox)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5619 */;
import WarningIcon from "WarningIcon" /* 8018 */;
import ConjureNativeStatusLineDefault from "ConjureNativeStatusLine" /* 12587 */;
import ConjureSubagentMark from "ConjureSubagentMark" /* 12633 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ConjureNativeStepImagesDefault = tmp5(12680);
require = fn;
function TurnStatusLine(epoch) {
  ({ projectId: require, tree, turnActive } = epoch);
  epoch = epoch.epoch;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_8();
  [tmp3, c3] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const currentStepResult = require("ConjureTimelineTree").currentStep(tree.steps);
  noop = currentStepResult;
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
    groupLabel = require("ConjureDuration").describeTurnDuration(tmp8);
    const tmp5Result = require("ConjureDuration");
  } else if (null != currentStepResult) {
    groupLabel = require("ConjureTimelineTree").describeNode(currentStepResult);
    const tmp5Result2 = require("ConjureTimelineTree");
  } else if (groupLabel == null) {
    const intl = require("util").intl;
    groupLabel = intl.string(turnActive(tmp6[12]).t8skVB);
  }
  let someResult = tree.steps.length > 1;
  if (!someResult) {
    const steps = tree.steps;
    someResult = steps.some((detail) => detail.detail.length > 0 || detail.attachments.length > 0);
  }
  const obj2 = { line: groupLabel, live: turnActive, settled: !turnActive, inGutter: true, glyph: null, epoch: null, expanded: null, onToggle: null };
  let tmp19;
  let obj = require("ConjureTimelineTree");
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
  const children = [closure_6(turnActive(epoch[13]), obj2), ];
  let tmp17Result = null;
  if (tmp3) {
    tmp17Result = null;
    if (someResult) {
      const obj3 = { style: tmp.activityDetail, children: null };
      const steps1 = tree.steps;
      obj3.children = steps1.map((node) => {
        const obj = { projectId, node, live: null, epoch: null };
        let tmp3 = turnActive;
        if (turnActive) {
          tmp3 = node === c4;
        }
        obj.live = tmp3;
        obj.epoch = epoch;
        return timestampProducer(TimelineRow, obj, node.id);
      });
      tmp17Result = closure_6(View, obj3);
    }
  }
  children[1] = tmp17Result;
  return closure_7(View, { children });
}
function LaneStatusLine(arg0) {
  ({ projectId: require, lane, mark } = arg0);
  ({ turnActive, epoch } = arg0);
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_8();
  [tmp3, c3] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  if (turnActive) {
    turnActive = tmp5;
  }
  let currentStepResult;
  if (turnActive) {
    currentStepResult = require("ConjureTimelineTree").currentStep(lane.steps);
    const obj = require("ConjureTimelineTree");
  }
  noop = currentStepResult;
  const tmp9 = lane.task.detail.length > 0 || lane.steps.length > 0;
  if ("running" === lane.task.status) {
    if (null != currentStepResult) {
      let describeNodeResult = require("ConjureTimelineTree").describeNode(currentStepResult);
      const obj4 = require("ConjureTimelineTree");
    } else {
      describeNodeResult = require("ConjureTaskOutcome").taskTitle(lane.task);
      const obj3 = require("ConjureTaskOutcome");
    }
  } else {
    const obj2 = require("ConjureTaskOutcome");
    const obj5 = { line: require("ConjureTaskOutcome").describeTaskOutcome(lane.task), live: turnActive, settled: null, failed: null, glyph: null, crestColor: null, inGutter: true, epoch: null, expanded: null, onToggle: null };
    let tmp26 = !turnActive;
    const describeTaskOutcomeResult = require("ConjureTaskOutcome").describeTaskOutcome(lane.task);
    if (!turnActive) {
      tmp26 = "failed" !== lane.task.status;
    }
    obj5.settled = tmp26;
    obj5.failed = "failed" === lane.task.status;
    obj5.glyph = closure_6(mark.Illocon, { size: 16, accessible: false });
    obj5.crestColor = mark.tint;
    obj5.epoch = epoch;
    obj5.expanded = tmp3;
    let tmp27;
    if (tmp9) {
      tmp27 = callback;
    }
    obj5.onToggle = tmp27;
    const items = [closure_6(mark(epoch[13]), obj5), ];
    let tmp21Result = null;
    if (tmp3) {
      tmp21Result = null;
      if (tmp9) {
        const obj6 = { style: tmp.activityDetail, children: null };
        const detail = lane.task.detail;
        const items1 = [detail.map((children, index) => closure_1_6(projectId(epoch[15]).Text, { variant: "text-xs/normal", color: "text-feedback-critical", children }, index)), ];
        const steps = lane.steps;
        items1[1] = steps.map((node) => timestampProducer(TimelineRow, { projectId, node, live: node === c4, crestColor: mark.tint, epoch }, node.id));
        obj6.children = items1;
        tmp21Result = closure_7(View, obj6);
      }
    }
    const obj7 = { children: null };
    items[1] = tmp21Result;
    obj7.children = items;
    return closure_7(View, obj7);
  }
  const tmp2 = _slicedToArray(noop.useState(false), 2);
}
function TimelineRow(inGutter) {
  ({ projectId, node } = inGutter);
  let flag = inGutter.inGutter;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = inGutter.live;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ epoch, crestColor } = inGutter);
  if (epoch === undefined) {
    epoch = 0;
  }
  const tmp = closure_8();
  importDefault = tmp;
  const attachments = node.attachments;
  const flatMapResult = attachments.flatMap((id) => {
    if (null != id.id) {
      const CONJURE_VIEWABLE_IMAGE_TYPES = node(dependencyMap[16]).CONJURE_VIEWABLE_IMAGE_TYPES;
      if (CONJURE_VIEWABLE_IMAGE_TYPES.has(id.content_type)) {
        const obj = {};
        const merged = Object.assign(id);
        obj.id = id.id;
        const items = [obj];
      }
      return [];
    }
  });
  let obj = { line: null, live: null, settled: null, failed: null, presentation: null, crestColor: null, inGutter: null, epoch: null, trailing: null };
  let tmp7 = ConjureNativeStatusLineDefault;
  obj.line = node(12552).describeNode(node);
  obj.live = flag2;
  let tmp9 = !flag2;
  if (!flag2) {
    tmp9 = "failed" !== node.status;
  }
  obj.settled = tmp9;
  obj.failed = "failed" === node.status;
  let str2 = "detail";
  if (flag2) {
    str2 = "headline";
  }
  obj.presentation = str2;
  obj.crestColor = crestColor;
  obj.inGutter = flag;
  obj.epoch = epoch;
  let tmp4Result = null;
  if (null != node.durationMs) {
    let obj3 = { variant: "text-xs/normal", color: "text-subtle", children: node(12404).describeDuration(node.durationMs) };
    tmp4Result = closure_6(node(5619).Text, obj3);
    const tmp8Result = node(12404);
  }
  obj.trailing = tmp4Result;
  const children = [closure_6(tmp7, obj), , ];
  let tmp4Result3 = null;
  if (node.detail.length > 0) {
    let obj4 = { style: tmp.stepDetail, children: null };
    const detail = node.detail;
    obj4.children = detail.map((children, index) => {
      let stepCommand;
      if (children.startsWith("$ ")) {
        stepCommand = closure_1.stepCommand;
      }
      const tmpResult = timestampProducer(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", style: stepCommand, children }, index);
      let tmp7 = node.detailError[index];
      if (tmp7 == null) {
        tmp7 = null;
      }
      let tmp8 = tmpResult;
      if (null != tmp7) {
        const obj2 = { style: closure_1.stepLine, children: null };
        const items = [tmpResult, ];
        const obj3 = { accessible: true, accessibilityRole: "image", accessibilityLabel: tmp7, children: null };
        const obj4 = { size: "xs", color: nativeDefault.colors.STATUS_DANGER };
        obj3.children = timestampProducer(WarningIcon.WarningIcon, obj4);
        items[1] = timestampProducer(View, obj3);
        obj2.children = items;
        tmp8 = React5(View, obj2, index);
      }
      return tmp8;
    });
    tmp4Result3 = closure_6(View, obj4);
  }
  children[1] = tmp4Result3;
  let tmp4Result4 = null;
  if (null != projectId) {
    tmp4Result4 = null;
    if (flatMapResult.length > 0) {
      const obj5 = { style: tmp.stepDetail, children: null };
      const obj6 = { projectId, images: flatMapResult };
      obj5.children = closure_6(ConjureNativeStepImagesDefault, obj6);
      tmp4Result4 = closure_6(View, obj5);
    }
  }
  children[2] = tmp4Result4;
  return closure_7(View, { children });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { activityBox: { marginLeft: -fn(12596).RAIL_INDENT }, activityDetail: null, stepDetail: null, stepLine: null, stepCommand: null };
let obj3 = { marginLeft: -fn(12596).RAIL_INDENT };
obj2.activityDetail = { paddingLeft: fn(12596).RAIL_INDENT };
let obj4 = { paddingLeft: fn(12596).RAIL_INDENT };
obj2.stepDetail = { marginTop: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_12, borderLeftWidth: 2, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, gap: 2 };
let obj5 = { marginTop: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_12, borderLeftWidth: 2, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, gap: 2 };
obj2.stepLine = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.stepCommand = { fontFamily: fn(1072).Fonts.CODE_NORMAL, fontSize: 12, lineHeight: 18 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureActivityBox.tsx");

export default function ConjureActivityBox(projectId) {
  projectId = projectId.projectId;
  ({ tree, turnActive } = projectId);
  let flag = projectId.besideAvatar;
  if (flag === undefined) {
    flag = false;
  }
  let length;
  closure_3 = undefined;
  if (0 === tree.steps.length) {
    if (0 === tree.tasks.length) {
      return null;
    }
  }
  length = tree.tasks.length;
  const tmp = closure_8();
  const tasks = tree.tasks;
  closure_3 = projectId(length[8]).subagentIllocons(tasks.map((taskId) => taskId.taskId));
  let obj2 = { style: tmp.activityBox, children: null };
  const items = [closure_6(TurnStatusLine, { projectId, tree, turnActive, epoch: length, besideAvatar: flag }), ];
  const tasks1 = tree.tasks;
  items[1] = tasks1.map((task) => {
    let familiarMarkResult;
    if (null != task.task.helperMark) {
      familiarMarkResult = ConjureSubagentMark.familiarMark(task.task.helperMark);
    }
    if (familiarMarkResult == null) {
      familiarMarkResult = closure_3.get(task.taskId);
    }
    let tmp5 = null;
    if (null != familiarMarkResult) {
      const obj2 = { projectId, lane: task, mark: familiarMarkResult, turnActive, epoch: length };
      tmp5 = timestampProducer(LaneStatusLine, obj2, task.taskId);
    }
    return tmp5;
  });
  obj2.children = items;
  return closure_7(View, obj2);
};
export function stretchOf(memo, index, arg2) {
  closure_0 = index;
  const obj = { steps: null, tasks: null };
  const steps = memo.steps;
  obj.steps = steps.filter((segment) => segment.segment === closure_0);
  const tasks = memo.tasks;
  obj.tasks = tasks.filter((task) => task.task.segment === closure_0);
  if (arg2) {
    if (null != memo.turn) {
      const obj2 = { turn: memo.turn };
      let obj3 = obj2;
    }
    const merged = Object.assign(obj3);
    return obj;
  }
  obj3 = {};
}