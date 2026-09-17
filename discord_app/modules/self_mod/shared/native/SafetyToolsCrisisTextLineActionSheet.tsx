// === Module 11552: SafetyToolsCrisisTextLineActionSheet ===

// Module 11552 (SafetyToolsCrisisTextLineActionSheet)
import nativeDefault from "native" /* 576 */;
import LinkingDefault from "Linking" /* 4334 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 11524 */;
import SafetyToolsActionSheetWrapperDefault from "SafetyToolsActionSheetWrapper" /* 11553 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(11517);
({ CRISIS_TEXT_LINE_SMS_URI: closure_4, CRISIS_TEXT_LINE_URL: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4640);
let obj2 = { container: { display: "flex", alignItems: "center", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16, paddingTop: 0 }, description: null };
let obj3 = { display: "flex", alignItems: "center", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16, paddingTop: 0 };
obj2.description = { textAlign: "center", marginBottom: nativeDefault.space.PX_8, maxWidth: 300 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsCrisisTextLineActionSheet.tsx");

export default function SafetyToolsCrisisTextLineActionSheet(trackAnalyticsEvent) {
  trackAnalyticsEvent = trackAnalyticsEvent.trackAnalyticsEvent;
  ({ channelId, recipientId, warningId, warningType, onClose } = trackAnalyticsEvent);
  const tmp = closure_8();
  const obj = { hasHeaderBack: true, recipientId, warningId, warningType, headerTitle: null, channelId: null, onClose: null, children: null };
  const intl = trackAnalyticsEvent(1115).intl;
  obj.headerTitle = intl.string(trackAnalyticsEvent(1115).t.NUMAsF);
  obj.channelId = channelId;
  obj.onClose = onClose;
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { variant: "text-md/medium", color: "text-default", style: tmp.description, children: null };
  const intl2 = trackAnalyticsEvent(1115).intl;
  obj3.children = intl2.string(trackAnalyticsEvent(1115).t.uicS5l);
  const items = [closure_6(trackAnalyticsEvent(4636).Text, obj3), , ];
  const obj4 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
  const intl3 = trackAnalyticsEvent(1115).intl;
  obj4.text = intl3.string(trackAnalyticsEvent(1115).t.lkUb4S);
  obj4.onPress = function onPress() {
    LinkingDefault.openURL(React4);
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_CTL_SMS);
  };
  items[1] = closure_6(trackAnalyticsEvent(5062).Button, obj4);
  const obj5 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
  const intl4 = trackAnalyticsEvent(1115).intl;
  obj5.text = intl4.string(trackAnalyticsEvent(1115).t.ogLlvy);
  obj5.onPress = function onPress() {
    LinkingDefault.openURL(hasOwnProperty);
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_CTL_WEB);
  };
  items[2] = closure_6(trackAnalyticsEvent(5062).Button, obj5);
  obj2.children = items;
  obj.children = closure_7(View, obj2);
  return closure_6(SafetyToolsActionSheetWrapperDefault, obj);
};