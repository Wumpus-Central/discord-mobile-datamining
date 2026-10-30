// === Module 12746: ConjureNativeStatusStrip ===

// Module 12746 (ConjureNativeStatusStrip)
import nativeDefault from "native" /* 575 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5253 */;
import ConjureStatusLabels from "ConjureStatusLabels" /* 12568 */;
import ConjureUsageSheet from "ConjureUsageSheet" /* 12752 */;
import ConjureQueuedSheet from "ConjureQueuedSheet" /* 12753 */;
import ConjureNativeTurnTimerDefault from "ConjureNativeTurnTimer" /* 12754 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10847 */;

const ConjureUsageSheetDefault = ConjureUsageSheet;

require = fn;
function ThinkingIndicator(line) {
  line = line.line;
  const rotating = line.rotating;
  let immediate = line.immediate;
  text = undefined;
  noop = undefined;
  let ref2;
  let ref;
  closure_7 = undefined;
  closure_8 = undefined;
  const tmp = closure_10();
  [text] = noop.useState(line);
  _slicedToArray = tmp4;
  if (!immediate) {
    immediate = line(text[8]).isPublishLineSwitch(line, text);
    const obj2 = line(text[8]);
  }
  if (immediate) {
    immediate = text !== line;
  }
  if (immediate) {
    tmp4(line);
  }
  noop = obj.useRef(line);
  ref2 = obj.useRef(text);
  ref = obj.useRef(null);
  const items = [line];
  const effect = obj.useEffect(() => {
    closure_4.current = line;
  }, items);
  const items1 = [text];
  const effect1 = obj.useEffect(() => {
    closure_5.current = current;
  }, items1);
  closure_7 = obj.useRef(rotating);
  closure_8 = obj.useRef(0);
  const items2 = [rotating];
  const effect2 = obj.useEffect(() => {
    closure_7.current = rotating;
    let isRecallingLineResult = !rotating;
    if (!rotating) {
      isRecallingLineResult = ConjureStatusLabels.isRecallingLine(ref2.current);
    }
    if (isRecallingLineResult) {
      closure_3(ref.current);
    }
  }, items2);
  const effect3 = obj.useEffect(() => {
    function beat() {
      if (ref4.current) {
        let num = 0;
        if (obj.isRecallingLine(ref2.current)) {
          num = ref.current + 1;
        }
        ref.current = num;
        obj = line(first[8]);
        closure_1_3(line(first[8]).recallingLine(ref.current));
        const tmp8Result = line(first[8]);
      } else if (ref.current !== ref2.current) {
        closure_1_3(tmp.current);
      } else {
        const current = ref3.current;
        if (current != null) {
          current.play();
        }
      }
    }
    closure_0 = null;
    const timeout = setTimeout(() => {
      beat();
      const interval = setInterval(beat, AI_LOADER_CYCLE_MS);
    }, line(first[8]).INDICATOR_PASS_STAGGER_MS);
    return () => {
      clearTimeout(closure_2);
      if (null != closure_0) {
        const _clearInterval = clearInterval;
        clearInterval(closure_0);
      }
    };
  }, []);
  const obj3 = { style: tmp.indicator, children: null };
  const items3 = [closure_8(line(text[9]).AILoader, { size: 10, color: "text-subtle" }), ];
  const obj4 = { style: tmp.label, accessibilityElementsHidden: rotating, importantForAccessibility: null, children: null };
  let str = "auto";
  if (rotating) {
    str = "no-hide-descendants";
  }
  obj4.importantForAccessibility = str;
  obj4.children = closure_8(line(text[10]).AIShimmer, { ref, text, variant: "text-xs/medium", color: "text-subtle", duration: line(text[8]).INDICATOR_PASS_MS, delay: null });
  items3[1] = closure_8(ref2, obj4);
  obj3.children = items3;
  return closure_9(ref2, obj3);
}
const View = fn(17).View;
const AI_LOADER_CYCLE_MS = fn(12063).AI_LOADER_CYCLE_MS;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { row: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, minHeight: nativeDefault.space.PX_4 + nativeDefault.space.PX_24 }, activity: null, live: null, indicator: null, label: null, chip: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, minHeight: nativeDefault.space.PX_4 + nativeDefault.space.PX_24 };
obj2.activity = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_16 };
obj2.live = { flexShrink: 1 };
let obj4 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_16 };
obj2.indicator = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, alignSelf: "flex-start" };
obj2.label = { flexShrink: 1 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, alignSelf: "flex-start" };
obj2.chip = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureNativeStatusStrip.tsx");

export default function ConjureNativeStatusStrip(projectId) {
  projectId = projectId.projectId;
  ({ thinking, remixStartedAt, saving } = projectId);
  ({ turnStartedAt, compacting } = projectId);
  if (saving === undefined) {
    saving = false;
  }
  let flag = projectId.recalling;
  if (flag === undefined) {
    flag = false;
  }
  ({ activity, projectUsage, connLabel, controlling, thinkingOpen, queuedCount, connFailed, onToggleThinking } = projectId);
  if (queuedCount === undefined) {
    queuedCount = 0;
  }
  const tmp = closure_10();
  const items = [ConjurePublishStatusStore];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(items, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
    let publishing;
    if (publishStatus != null) {
      publishing = publishStatus.publishing;
    }
    return true === publishing;
  }, items1);
  if (remixStartedAt == null) {
    let tmp6;
    if (thinking) {
      tmp6 = turnStartedAt;
    }
    remixStartedAt = tmp6;
  }
  let tmp7 = thinking;
  if (!thinking) {
    tmp7 = tmp5;
  }
  if (!tmp7) {
    tmp7 = saving;
  }
  const obj = projectId(504);
  let obj2 = { activity, compacting, saving, remixing: null != remixStartedAt, recalling: flag, controlling, publishPending: null, publishing: null };
  let tmp8 = stateFromStores;
  if (stateFromStores) {
    tmp8 = tmp7;
  }
  obj2.publishPending = tmp8;
  obj2.publishing = stateFromStores;
  const thinkingLabelResult = projectId(12568).thinkingLabel(obj2);
  const intl = tmp2(1114).intl;
  const stringResult = intl.string(thinkingLabelResult);
  let runesUsedLabelsResult = null;
  if (null != projectUsage) {
    runesUsedLabelsResult = tmp2(12568).runesUsedLabels(projectUsage);
    const tmp2Result2 = tmp2(12568);
  }
  let tmp12 = null != activity;
  if (tmp12) {
    tmp12 = "" !== activity.text;
  }
  if (thinking) {
    if (!tmp12) {
      tmp12 = thinkingOpen;
    }
    thinking = tmp12;
  }
  const items2 = [projectId];
  [][0] = projectId;
  const callback = noop.useCallback(() => {
    const obj2 = { content: React6(ConjureUsageSheetDefault, { projectId }), key: ConjureUsageSheet.CONJURE_USAGE_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items2);
  const obj3 = { style: tmp.row, children: null };
  const obj4 = { style: tmp.activity, children: null };
  const obj5 = { style: tmp.live, accessibilityRole: "none", accessibilityLiveRegion: "polite", children: null };
  if (!tmp7) {
    if (!flag) {
      if (!controlling) {
        let tmp17Result6 = null;
      }
      obj5.children = tmp17Result6;
      const items3 = [closure_8(View, obj5), ];
      let tmp17Result = null;
      if (null != remixStartedAt) {
        const obj6 = { startedAt: remixStartedAt, variant: "text-xs/medium" };
        tmp17Result = closure_8(ConjureNativeTurnTimerDefault, obj6);
      }
      items3[1] = tmp17Result;
      obj4.children = items3;
      const items4 = [closure_9(View, obj4), , , ];
      let tmp17Result4 = null;
      if (null != connLabel) {
        let str3 = "text-muted";
        if (connFailed) {
          str3 = "text-feedback-critical";
        }
        const obj7 = { variant: "text-xs/medium", color: str3, children: connLabel };
        tmp17Result4 = closure_8(tmp2(5619).Text, obj7);
      }
      items4[1] = tmp17Result4;
      let tmp17Result5 = null;
      if (queuedCount > 0) {
        const obj8 = { accessibilityRole: "button", hitSlop: 8, style: tmp.chip, onPress: tmp14, children: null };
        const obj9 = { variant: "text-xs/medium", color: "text-muted", children: null };
        const intl3 = tmp2(1114).intl;
        const obj10 = { count: queuedCount };
        obj9.children = intl3.formatToPlainString(_modDef3865.REnNUn, obj10);
        obj8.children = closure_8(tmp2(5619).Text, obj9);
        tmp17Result5 = closure_8(tmp2(6974).PressableOpacity, obj8);
      }
      items4[2] = tmp17Result5;
      let tmp15Result = null;
      if (null != runesUsedLabelsResult) {
        const obj11 = { accessibilityRole: "button", accessibilityLabel: runesUsedLabelsResult.aria, hitSlop: 8, style: tmp.chip, onPress: callback, children: null };
        const obj12 = { variant: "text-xs/medium", color: "text-muted", children: runesUsedLabelsResult.text };
        const items5 = [closure_8(tmp2(5619).Text, obj12), ];
        const obj13 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
        items5[1] = closure_8(tmp2(5730).CircleInformationIcon, obj13);
        obj11.children = items5;
        tmp15Result = closure_9(tmp2(6974).PressableOpacity, obj11);
      }
      items4[3] = tmp15Result;
      obj3.children = items4;
      return closure_9(View, obj3);
    }
  }
  const tmp19 = thinkingLabelResult === projectId(12568).RECALLING_LINES[0];
  let tmp20 = thinking;
  if (!thinking) {
    tmp20 = tmp19;
  }
  const obj14 = { accessible: tmp20, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, hitSlop: 8, disabled: null, onPress: null, children: null };
  let str2;
  if (thinking) {
    str2 = "button";
  }
  obj14.accessibilityRole = str2;
  let tmp21;
  if (thinking) {
    const obj15 = { expanded: thinkingOpen };
    tmp21 = obj15;
  }
  obj14.accessibilityState = tmp21;
  if (thinking) {
    const tmp22 = stringResult;
  }
  obj14.accessibilityLabel = tmp22;
  let stringResult1;
  if (thinking) {
    const intl2 = tmp2(1114).intl;
    stringResult1 = intl2.string(_modDef3865["0Kemnh"]);
  }
  obj14.accessibilityHint = stringResult1;
  obj14.disabled = !thinking;
  obj14.onPress = onToggleThinking;
  obj14.children = closure_8(ThinkingIndicator, { line: stringResult, rotating: tmp19, immediate: saving });
  tmp17Result6 = closure_8(tmp2(6974).PressableOpacity, obj14);
  const tmp2Result = projectId(12568);
};