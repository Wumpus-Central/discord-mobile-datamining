// discord_app/modules/guild_progress/native/components/ProgressItem.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(4823);
let obj2 = { container: { marginBottom: nativeDefault.space.PX_8 }, icon: null, completedIcon: null };
let size = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40 };
obj2.icon = size;
obj2.completedIcon = { opacity: 0.3 };
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_progress/native/components/ProgressItem.tsx");

export default function ProgressItem(isCompleted) {
  ({ source, onPress } = isCompleted);
  isCompleted = isCompleted.isCompleted;
  ({ description, analyticsSetupType } = isCompleted);
  const analyticsAction = isCompleted.analyticsAction;
  const renderEndComponent = isCompleted.renderEndComponent;
  ({ title, iconStyle } = isCompleted);
  const tmp = closure_7();
  items = [analyticsAction, analyticsSetupType, onPress, isCompleted];
  const callback = analyticsAction.useCallback(() => {
    let tmp2 = null != analyticsAction;
    if (tmp2) {
      tmp2 = null != analyticsSetupType;
    }
    if (tmp2) {
      const obj2 = { setup_type: analyticsSetupType, action: analyticsAction, action_completed: isCompleted };
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.SERVER_SETUP_CTA_CLICKED, obj2);
    }
    onPress();
  }, items);
  if (isCompleted) {
    let obj = { color: "status-positive", accessible: false, accessibilityLabel: null };
    const intl = onPress(analyticsSetupType[8]).intl;
    obj.accessibilityLabel = intl.string(onPress(analyticsSetupType[8]).t.g62IJl);
    let renderEndComponentResult = jsx(onPress(analyticsSetupType[7]).CheckmarkLargeIcon, {
      color: "status-positive",
      accessible: false,
      accessibilityLabel: null,
    });
  } else if (renderEndComponent != null) {
    renderEndComponentResult = renderEndComponent();
  }
  let obj2 = { style: tmp.container, children: null };
  const obj3 = { onPress: callback, icon: null, label: null, subLabel: null, arrow: null, trailing: null };
  let tmp8Result;
  if (null != source) {
    const obj4 = { source, style: null, accessible: false };
    const items1 = [tmp.icon, iconStyle];
    let completedIcon;
    if (isCompleted) {
      completedIcon = tmp.completedIcon;
    }
    items1[2] = completedIcon;
    obj4.style = items1;
    tmp8Result = jsx(isCompleted(analyticsSetupType[10]), { source, style: null, accessible: false });
    const tmp14 = isCompleted(analyticsSetupType[10]);
  }
  obj3.icon = tmp8Result;
  let str = "mobile-text-heading-primary";
  if (isCompleted) {
    str = "text-muted";
  }
  obj3.label = jsx(onPress(analyticsSetupType[11]).Text, {
    variant: "heading-sm/semibold",
    color: str,
    maxFontSizeMultiplier: 2,
    children: title,
  });
  let tmp8Result2;
  if (null != description) {
    let str2 = "text-subtle";
    if (isCompleted) {
      str2 = "text-muted";
    }
    const obj5 = { variant: "body-xs/medium", color: str2, children: description };
    tmp8Result2 = jsx(onPress(analyticsSetupType[11]).Text, {
      variant: "body-xs/medium",
      color: str2,
      children: description,
    });
  }
  obj3.subLabel = tmp8Result2;
  obj3.arrow = null == renderEndComponentResult;
  obj3.trailing = renderEndComponentResult;
  obj2.children = jsx(onPress(analyticsSetupType[9]).RowButton, {
    onPress: callback,
    icon: null,
    label: null,
    subLabel: null,
    arrow: null,
    trailing: null,
  });
  return <View style={tmp.container}>{null}</View>;
}
