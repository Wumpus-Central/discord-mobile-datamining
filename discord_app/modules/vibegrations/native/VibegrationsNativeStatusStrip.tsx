// discord_app/modules/vibegrations/native/VibegrationsNativeStatusStrip.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3593 from "../intl/VibegrationsUntranslated.messages.js";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import VibegrationsUsageSheet from "VibegrationsUsageSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const VibegrationsUsageSheetDefault = VibegrationsUsageSheet;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4640);
let obj2 = {
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_4,
  },
  activity: null,
  indicator: null,
  label: null,
  runes: null,
};
const obj3 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_4,
};
obj2.activity = { flex: 1, minHeight: nativeDefault.space.PX_16, justifyContent: "center" };
let obj4 = { flex: 1, minHeight: nativeDefault.space.PX_16, justifyContent: "center" };
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
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeStatusStrip.tsx");

export default function VibegrationsNativeStatusStrip(projectId) {
  projectId = projectId.projectId;
  ({ activity, projectUsage, connLabel, thinkingOpen } = projectId);
  ({ thinking, compacting, connFailed, onToggleThinking } = projectId);
  const tmp = closure_7();
  let runesUsedLabelsResult = null;
  const obj = projectId(16818);
  if (null != projectUsage) {
    runesUsedLabelsResult = tmp2(16818).runesUsedLabels(projectUsage);
    const tmp2Result = tmp2(16818);
  }
  let tmp6 = null != activity;
  if (tmp6) {
    tmp6 = "" !== activity.text;
  }
  const items = [projectId];
  let obj2 = { style: tmp.indicator, children: null };
  const callback = noop.useCallback(() => {
    const obj2 = {
      content: hasOwnProperty(VibegrationsUsageSheetDefault, { projectId }),
      key: VibegrationsUsageSheet.VIBEGRATIONS_USAGE_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items);
  const items1 = [closure_5(projectId(14247).AILoader, { size: 10, color: "text-subtle" })];
  const thinkingLineResult = projectId(16818).thinkingLine({ activity, compacting });
  items1[1] = closure_5(View, {
    style: tmp.label,
    children: closure_5(projectId(14251).AIShimmer, {
      text: projectId(16818).thinkingLine({ activity, compacting }),
      variant: "text-xs/medium",
      color: "text-subtle",
    }),
  });
  obj2.children = items1;
  const tmp11 = closure_6(View, obj2);
  const obj4 = { style: tmp.row, children: null };
  const obj5 = { style: tmp.activity, accessibilityRole: "none", accessibilityLiveRegion: "polite", children: null };
  let tmp12 = null;
  if (thinking) {
    if (tmp6) {
      const obj6 = {
        accessibilityRole: "button",
        accessibilityState: null,
        accessibilityLabel: null,
        hitSlop: 8,
        onPress: null,
        children: null,
      };
      const obj7 = { expanded: thinkingOpen };
      obj6.accessibilityState = obj7;
      const intl = tmp2(1115).intl;
      obj6.accessibilityLabel = intl.string(_modDef3593.SzdX35);
      obj6.onPress = onToggleThinking;
      obj6.children = tmp11;
      let tmp10Result = closure_5(tmp2(5210).PressableOpacity, obj6);
    } else {
      tmp10Result = tmp11;
    }
    tmp12 = tmp10Result;
  }
  obj5.children = tmp12;
  const items2 = [closure_5(View, obj5), ,];
  let tmp10Result2 = null;
  if (null != connLabel) {
    let str2 = "text-muted";
    if (connFailed) {
      str2 = "text-feedback-critical";
    }
    const obj8 = { variant: "text-xs/medium", color: str2, children: connLabel };
    tmp10Result2 = closure_5(tmp2(4636).Text, obj8);
  }
  items2[1] = tmp10Result2;
  let tmp8Result = null;
  if (null != runesUsedLabelsResult) {
    const obj9 = {
      accessibilityRole: "button",
      accessibilityLabel: runesUsedLabelsResult.aria,
      hitSlop: 8,
      style: tmp.runes,
      onPress: callback,
      children: null,
    };
    const obj10 = { variant: "text-xs/medium", color: "text-muted", children: runesUsedLabelsResult.text };
    const items3 = [closure_5(tmp2(4636).Text, obj10)];
    const obj11 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
    items3[1] = closure_5(tmp2(4594).CircleInformationIcon, obj11);
    obj9.children = items3;
    tmp8Result = closure_6(tmp2(5210).PressableOpacity, obj9);
  }
  items2[2] = tmp8Result;
  obj4.children = items2;
  return closure_6(View, obj4);
}
