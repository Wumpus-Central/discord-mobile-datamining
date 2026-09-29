// discord_app/modules/vibegrations/native/VibegrationsNativeStatusStrip.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3715 from "../intl/VibegrationsUntranslated.messages.js";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import VibegrationsStatusLabels from "../lib/VibegrationsStatusLabels.tsx";
import VibegrationsUsageSheet from "VibegrationsUsageSheet.tsx";
import VibegrationsNativeTurnTimerDefault from "VibegrationsNativeTurnTimer.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const VibegrationsUsageSheetDefault = VibegrationsUsageSheet;

require = fn;
function ThinkingIndicator(line) {
  line = line.line;
  const rotating = line.rotating;
  text = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_9();
  [text, _slicedToArray] = noop.useState(line);
  noop = noop.useRef(line);
  const ref2 = noop.useRef(text);
  const ref = noop.useRef(null);
  const items = [line];
  const effect = noop.useEffect(() => {
    closure_4.current = line;
  }, items);
  const items1 = [text];
  const effect1 = noop.useEffect(() => {
    closure_5.current = current;
  }, items1);
  closure_7 = noop.useRef(rotating);
  closure_8 = noop.useRef(0);
  const items2 = [rotating];
  const effect2 = noop.useEffect(() => {
    closure_7.current = rotating;
    let isRecallingLineResult = !rotating;
    if (!rotating) {
      isRecallingLineResult = VibegrationsStatusLabels.isRecallingLine(ref2.current);
    }
    if (isRecallingLineResult) {
      closure_3(ref.current);
    }
  }, items2);
  const effect3 = noop.useEffect(() => {
    function beat() {
      if (ref4.current) {
        let num = 0;
        if (obj.isRecallingLine(ref2.current)) {
          num = ref.current + 1;
        }
        ref.current = num;
        obj = line(first[7]);
        closure_1_3(line(first[7]).recallingLine(ref.current));
        const tmp8Result = line(first[7]);
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
    }, line(first[7]).INDICATOR_PASS_STAGGER_MS);
    return () => {
      clearTimeout(closure_2);
      if (null != closure_0) {
        const _clearInterval = clearInterval;
        clearInterval(closure_0);
      }
    };
  }, []);
  let obj = { style: tmp.indicator, children: null };
  const items3 = [closure_7(line(text[8]).AILoader, { size: 10, color: "text-subtle" })];
  const obj2 = {
    style: tmp.label,
    accessibilityElementsHidden: rotating,
    importantForAccessibility: null,
    children: null,
  };
  let str = "auto";
  if (rotating) {
    str = "no-hide-descendants";
  }
  obj2.importantForAccessibility = str;
  obj2.children = closure_7(line(text[9]).AIShimmer, {
    ref,
    text,
    variant: "text-xs/medium",
    color: "text-subtle",
    duration: line(text[7]).INDICATOR_PASS_MS,
    delay: null,
  });
  items3[1] = closure_7(ref2, obj2);
  obj.children = items3;
  return closure_8(ref2, obj);
}
const View = fn(17).View;
const AI_LOADER_CYCLE_MS = fn(14105).AI_LOADER_CYCLE_MS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4836);
let obj2 = {
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_4,
    minHeight: nativeDefault.space.PX_4 + nativeDefault.space.PX_24,
  },
  activity: null,
  live: null,
  indicator: null,
  label: null,
  runes: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_4,
  minHeight: nativeDefault.space.PX_4 + nativeDefault.space.PX_24,
};
obj2.activity = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_16,
};
obj2.live = { flexShrink: 1 };
let obj4 = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_16,
};
obj2.indicator = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, alignSelf: "flex-start" };
obj2.label = { flexShrink: 1 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, alignSelf: "flex-start" };
obj2.runes = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeStatusStrip.tsx");

export default function VibegrationsNativeStatusStrip(compacting) {
  const projectId = compacting.projectId;
  ({ thinking, turnStartedAt, recalling } = compacting);
  if (recalling === undefined) {
    recalling = false;
  }
  ({ activity, projectUsage, connLabel, thinkingOpen } = compacting);
  ({ connFailed, controlling, onToggleThinking } = compacting);
  const tmp = closure_9();
  const thinkingLabelResult = projectId(16578).thinkingLabel({
    activity,
    compacting: compacting.compacting,
    recalling,
    controlling,
  });
  const intl = projectId(1115).intl;
  const stringResult = intl.string(thinkingLabelResult);
  let runesUsedLabelsResult = null;
  if (null != projectUsage) {
    runesUsedLabelsResult = tmp2(16578).runesUsedLabels(projectUsage);
    const tmp2Result = tmp2(16578);
  }
  let tmp7 = null != activity;
  if (tmp7) {
    tmp7 = "" !== activity.text;
  }
  let tmp8 = thinking;
  if (thinking) {
    if (!tmp7) {
      tmp7 = thinkingOpen;
    }
    tmp8 = tmp7;
  }
  const items = [projectId];
  let obj2 = { style: tmp.row, children: null };
  const obj3 = { style: tmp.activity, children: null };
  const obj4 = { style: tmp.live, accessibilityRole: "none", accessibilityLiveRegion: "polite", children: null };
  const callback = noop.useCallback(() => {
    const obj2 = {
      content: React5(VibegrationsUsageSheetDefault, { projectId }),
      key: VibegrationsUsageSheet.VIBEGRATIONS_USAGE_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items);
  if (thinking) {
    const tmp14 = thinkingLabelResult === projectId(16578).RECALLING_LINES[0];
    let tmp15 = tmp8;
    if (!tmp8) {
      tmp15 = tmp14;
    }
    const obj5 = {
      accessible: tmp15,
      accessibilityRole: null,
      accessibilityState: null,
      accessibilityLabel: null,
      accessibilityHint: null,
      hitSlop: 8,
      disabled: null,
      onPress: null,
      children: null,
    };
    let str2;
    if (tmp8) {
      str2 = "button";
    }
    obj5.accessibilityRole = str2;
    let tmp16;
    if (tmp8) {
      const obj6 = { expanded: thinkingOpen };
      tmp16 = obj6;
    }
    obj5.accessibilityState = tmp16;
    if (tmp8) {
      const tmp17 = stringResult;
    }
    obj5.accessibilityLabel = tmp17;
    let stringResult1;
    if (tmp8) {
      const intl2 = tmp2(1115).intl;
      stringResult1 = intl2.string(_modDef3715["0PGVTy"]);
    }
    obj5.accessibilityHint = stringResult1;
    obj5.disabled = !tmp8;
    obj5.onPress = onToggleThinking;
    const obj7 = { line: stringResult, rotating: tmp14 };
    obj5.children = closure_7(ThinkingIndicator, obj7);
    let tmp12Result = closure_7(tmp2(5602).PressableOpacity, obj5);
  } else {
    tmp12Result = null;
  }
  obj4.children = tmp12Result;
  const items1 = [closure_7(View, obj4)];
  let tmp12Result3 = null;
  if (thinking) {
    tmp12Result3 = null;
    if (null != turnStartedAt) {
      const obj8 = { startedAt: turnStartedAt, variant: "text-xs/medium" };
      tmp12Result3 = closure_7(VibegrationsNativeTurnTimerDefault, obj8);
    }
  }
  items1[1] = tmp12Result3;
  obj3.children = items1;
  const items2 = [closure_8(View, obj3), ,];
  let tmp12Result4 = null;
  if (null != connLabel) {
    let str3 = "text-muted";
    if (connFailed) {
      str3 = "text-feedback-critical";
    }
    const obj9 = { variant: "text-xs/medium", color: str3, children: connLabel };
    tmp12Result4 = closure_7(tmp2(4832).Text, obj9);
  }
  items2[1] = tmp12Result4;
  let tmp10Result = null;
  if (null != runesUsedLabelsResult) {
    const obj10 = {
      accessibilityRole: "button",
      accessibilityLabel: runesUsedLabelsResult.aria,
      hitSlop: 8,
      style: tmp.runes,
      onPress: callback,
      children: null,
    };
    const obj11 = { variant: "text-xs/medium", color: "text-muted", children: runesUsedLabelsResult.text };
    const items3 = [closure_7(tmp2(4832).Text, obj11)];
    const obj12 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
    items3[1] = closure_7(tmp2(4787).CircleInformationIcon, obj12);
    obj10.children = items3;
    tmp10Result = closure_8(tmp2(5602).PressableOpacity, obj10);
  }
  items2[2] = tmp10Result;
  obj2.children = items2;
  return closure_8(View, obj2);
}
