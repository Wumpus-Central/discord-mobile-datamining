// discord_app/modules/self_mod/shared/native/SafetyToolsCrisisTextLineActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import SafetyWarningUtils from "../SafetyWarningUtils.tsx";
import SafetyToolsActionSheetWrapperDefault from "SafetyToolsActionSheetWrapper.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(11363);
({ CRISIS_TEXT_LINE_SMS_URI: closure_4, CRISIS_TEXT_LINE_URL: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, description: null };
createStyles = {
  display: "flex",
  alignItems: "center",
  gap: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_16,
  paddingTop: 0,
};
createStyles.container = createStyles;
createStyles.description = { textAlign: "center", marginBottom: nativeDefault.space.PX_8, maxWidth: 300 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsCrisisTextLineActionSheet.tsx");

export default function SafetyToolsCrisisTextLineActionSheet(trackAnalyticsEvent) {
  trackAnalyticsEvent = trackAnalyticsEvent.trackAnalyticsEvent;
  ({ channelId, recipientId, warningId, warningType, onClose } = trackAnalyticsEvent);
  const tmp = closure_8();
  let obj = {
    hasHeaderBack: true,
    recipientId,
    warningId,
    warningType,
    headerTitle: null,
    channelId: null,
    onClose: null,
    children: null,
  };
  const intl = trackAnalyticsEvent(1114).intl;
  obj.headerTitle = intl.string(trackAnalyticsEvent(1114).t.NUMAsF);
  obj.channelId = channelId;
  obj.onClose = onClose;
  obj = { style: tmp.container, children: null };
  obj = { variant: "text-md/medium", color: "text-default", style: tmp.description, children: null };
  const intl2 = trackAnalyticsEvent(1114).intl;
  obj.children = intl2.string(trackAnalyticsEvent(1114).t.uicS5l);
  const items = [closure_6(trackAnalyticsEvent(4556).Text, obj), ,];
  const obj1 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
  const intl3 = trackAnalyticsEvent(1114).intl;
  obj1.text = intl3.string(trackAnalyticsEvent(1114).t.lkUb4S);
  obj1.onPress = function onPress() {
    LinkingDefault.openURL(React4);
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_CTL_SMS);
  };
  items[1] = closure_6(trackAnalyticsEvent(4975).Button, obj1);
  const obj2 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
  const intl4 = trackAnalyticsEvent(1114).intl;
  obj2.text = intl4.string(trackAnalyticsEvent(1114).t.ogLlvy);
  obj2.onPress = function onPress() {
    LinkingDefault.openURL(hasOwnProperty);
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_CTL_WEB);
  };
  items[2] = closure_6(trackAnalyticsEvent(4975).Button, obj2);
  obj.children = items;
  obj.children = closure_7(View, obj);
  return closure_6(SafetyToolsActionSheetWrapperDefault, obj);
}
