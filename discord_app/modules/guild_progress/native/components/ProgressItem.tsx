// === Module 12478: ProgressItem ===

// Module 12478 (ProgressItem)
import nativeDefault from "native" /* 576 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { formCTAContainer: { marginBottom: 8 }, formCTA: null, formCTAFullWidth: null };
createStyles = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
createStyles.formCTA = createStyles;
createStyles.formCTAFullWidth = { width: "100%" };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_progress/native/components/ProgressItem.tsx");

export default function ProgressItem(onPress) {
  onPress = onPress.onPress;
  const isCompleted = onPress.isCompleted;
  const analyticsSetupType = onPress.analyticsSetupType;
  const analyticsAction = onPress.analyticsAction;
  const renderEndComponent = onPress.renderEndComponent;
  ({ title, source, description, fullWidth, iconStyle } = onPress);
  const tmp = closure_7();
  const items = [analyticsAction, analyticsSetupType, onPress, isCompleted];
  let obj = { style: tmp.formCTAContainer, children: null };
  const callback = analyticsAction.useCallback(() => {
    let tmp2 = null != analyticsAction;
    if (tmp2) {
      tmp2 = null != analyticsSetupType;
    }
    if (tmp2) {
      const obj = { setup_type: analyticsSetupType, action: analyticsAction, action_completed: isCompleted };
      obj.trackWithMetadata(AnalyticEvents.SERVER_SETUP_CTA_CLICKED, obj);
    }
    onPress();
  }, items);
  const items1 = [tmp.formCTA, ];
  let formCTAFullWidth;
  if (fullWidth) {
    formCTAFullWidth = tmp.formCTAFullWidth;
  }
  obj = { variant: "row-button", style: items1, onPress: callback, iconSource: source, iconStyle, title, subtitle: description, completed: isCompleted, trailing: null };
  items1[1] = formCTAFullWidth;
  let renderEndComponentResult;
  if (renderEndComponent != null) {
    renderEndComponentResult = renderEndComponent();
  }
  if (renderEndComponentResult == null) {
    renderEndComponentResult = null;
  }
  obj.trailing = renderEndComponentResult;
  obj.children = jsx(onPress(analyticsSetupType[7]).FormCTA, { variant: "row-button", style: items1, onPress: callback, iconSource: source, iconStyle, title, subtitle: description, completed: isCompleted, trailing: null });
  return <View variant="row-button" style={items1} onPress={callback} iconSource={source} iconStyle={iconStyle} title={title} subtitle={description} completed={isCompleted} trailing={null} />;
};