// === Module 16394: VibegrationsNativeStatusStrip ===

// Module 16394 (VibegrationsNativeStatusStrip)
import nativeDefault from "native" /* 576 */;
import _modDef3715 from "module_3715" /* 3715 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4800 */;
import VibegrationsUsageSheet from "VibegrationsUsageSheet" /* 16395 */;
import VibegrationsNativeTurnTimerDefault from "VibegrationsNativeTurnTimer" /* 16396 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const VibegrationsUsageSheetDefault = VibegrationsUsageSheet;

require = fn;
function ThinkingIndicator(line) {
  line = line.line;
  text = undefined;
  dependencyMap = undefined;
  noop = undefined;
  const tmp = closure_9();
  [text, dependencyMap] = noop.useState(line);
  _slicedToArray = noop.useRef(line);
  noop = noop.useRef(text);
  const ref = noop.useRef(null);
  const items = [line];
  const effect = noop.useEffect(() => {
    closure_3.current = line;
  }, items);
  const items1 = [text];
  const effect1 = noop.useEffect(() => {
    closure_4.current = current;
  }, items1);
  const effect2 = noop.useEffect(() => {
    function beat() {
      if (ref.current !== ref2.current) {
        closure_2(tmp.current);
      } else {
        const current = ref3.current;
        if (current != null) {
          current.play();
        }
      }
    }
    closure_0 = null;
    timeout = setTimeout(() => {
      if (ref.current !== ref2.current) {
        closure_2(tmp2.current);
      } else {
        const current = ref.current;
        if (current != null) {
          current.play();
        }
      }
      const interval = setInterval(beat, AI_LOADER_CYCLE_MS);
    }, line(timeout[7]).INDICATOR_PASS_STAGGER_MS);
    return () => {
      clearTimeout(closure_2);
      if (null != closure_0) {
        const _clearInterval = clearInterval;
        clearInterval(closure_0);
      }
    };
  }, []);
  const obj = { style: tmp.indicator, children: null };
  const items2 = [closure_7(line(13936).AILoader, { size: 10, color: "text-subtle" }), ];
  const obj2 = { style: tmp.label, children: closure_7(line(13940).AIShimmer, { ref, text, variant: "text-xs/medium", color: "text-subtle", duration: line(16388).INDICATOR_PASS_MS, delay: null }) };
  items2[1] = closure_7(ref, obj2);
  obj.children = items2;
  return closure_8(ref, obj);
}
const View = fn(17).View;
const AI_LOADER_CYCLE_MS = fn(13937).AI_LOADER_CYCLE_MS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { row: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, minHeight: nativeDefault.space.PX_4 + nativeDefault.space.PX_24 }, activity: null, live: null, indicator: null, label: null, runes: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, minHeight: nativeDefault.space.PX_4 + nativeDefault.space.PX_24 };
obj2.activity = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_16 };
obj2.live = { flexShrink: 1 };
let obj4 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_16 };
obj2.indicator = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, alignSelf: "flex-start" };
obj2.label = { flexShrink: 1 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, alignSelf: "flex-start" };
obj2.runes = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeStatusStrip.tsx");

export default function VibegrationsNativeStatusStrip(projectId) {
  projectId = projectId.projectId;
  ({ thinking, turnStartedAt, activity, projectUsage, connLabel, thinkingOpen } = projectId);
  ({ compacting, connFailed, controlling, onToggleThinking } = projectId);
  const tmp = closure_9();
  const thinkingLineResult = projectId(16388).thinkingLine({ activity, compacting, controlling });
  let runesUsedLabelsResult = null;
  if (null != projectUsage) {
    runesUsedLabelsResult = tmp2(16388).runesUsedLabels(projectUsage);
    const tmp2Result = tmp2(16388);
  }
  let tmp6 = null != activity;
  if (tmp6) {
    tmp6 = "" !== activity.text;
  }
  if (!tmp6) {
    tmp6 = thinkingOpen;
  }
  const items = [projectId];
  let obj2 = { style: tmp.row, children: null };
  const obj3 = { style: tmp.activity, children: null };
  const obj4 = { style: tmp.live, accessibilityRole: "none", accessibilityLiveRegion: "polite", children: null };
  let tmp10Result = null;
  const callback = noop.useCallback(() => {
    const obj2 = { content: React5(VibegrationsUsageSheetDefault, { projectId }), key: VibegrationsUsageSheet.VIBEGRATIONS_USAGE_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items);
  if (thinking) {
    const obj5 = { accessible: tmp6, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, hitSlop: 8, disabled: null, onPress: null, children: null };
    let str2;
    if (tmp6) {
      str2 = "button";
    }
    obj5.accessibilityRole = str2;
    let tmp12;
    if (tmp6) {
      const obj6 = { expanded: thinkingOpen };
      tmp12 = obj6;
    }
    obj5.accessibilityState = tmp12;
    let tmp13;
    if (tmp6) {
      tmp13 = thinkingLineResult;
    }
    obj5.accessibilityLabel = tmp13;
    let stringResult;
    if (tmp6) {
      const intl = tmp2(1115).intl;
      stringResult = intl.string(_modDef3715["0PGVTy"]);
    }
    obj5.accessibilityHint = stringResult;
    obj5.disabled = !tmp6;
    obj5.onPress = onToggleThinking;
    const obj7 = { line: thinkingLineResult };
    obj5.children = closure_7(ThinkingIndicator, obj7);
    tmp10Result = closure_7(tmp2(5435).PressableOpacity, obj5);
  }
  obj4.children = tmp10Result;
  const items1 = [closure_7(View, obj4), ];
  let tmp10Result3 = null;
  if (thinking) {
    tmp10Result3 = null;
    if (null != turnStartedAt) {
      const obj8 = { startedAt: turnStartedAt, variant: "text-xs/medium" };
      tmp10Result3 = closure_7(VibegrationsNativeTurnTimerDefault, obj8);
    }
  }
  items1[1] = tmp10Result3;
  obj3.children = items1;
  const items2 = [closure_8(View, obj3), , ];
  let tmp10Result4 = null;
  if (null != connLabel) {
    let str3 = "text-muted";
    if (connFailed) {
      str3 = "text-feedback-critical";
    }
    const obj9 = { variant: "text-xs/medium", color: str3, children: connLabel };
    tmp10Result4 = closure_7(tmp2(4832).Text, obj9);
  }
  items2[1] = tmp10Result4;
  let tmp8Result = null;
  if (null != runesUsedLabelsResult) {
    const obj10 = { accessibilityRole: "button", accessibilityLabel: runesUsedLabelsResult.aria, hitSlop: 8, style: tmp.runes, onPress: callback, children: null };
    const obj11 = { variant: "text-xs/medium", color: "text-muted", children: runesUsedLabelsResult.text };
    const items3 = [closure_7(tmp2(4832).Text, obj11), ];
    const obj12 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
    items3[1] = closure_7(tmp2(4787).CircleInformationIcon, obj12);
    obj10.children = items3;
    tmp8Result = closure_8(tmp2(5435).PressableOpacity, obj10);
  }
  items2[2] = tmp8Result;
  obj2.children = items2;
  return closure_8(View, obj2);
};