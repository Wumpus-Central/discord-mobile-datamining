// === Module 10430: SafetyToolsCrisisTextLineActionSheet ===

// Module 10430 (SafetyToolsCrisisTextLineActionSheet)
import nativeDefault from "native" /* 587 */;
import LinkingDefault from "Linking" /* 4806 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10394 */;
import SafetyToolsActionSheetWrapperDefault from "SafetyToolsActionSheetWrapper" /* 10431 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(10381);
({ CRISIS_TEXT_LINE_SMS_URI: closure_4, CRISIS_TEXT_LINE_URL: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { display: "flex", alignItems: "center", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16, paddingTop: 0 }, description: null };
let obj3 = { display: "flex", alignItems: "center", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16, paddingTop: 0 };
obj2.description = { textAlign: "center", marginBottom: nativeDefault.space.PX_8, maxWidth: 300 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8, maxWidth: 300 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsCrisisTextLineActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SafetyToolsCrisisTextLineActionSheet(arg0) {
  const cResult = trackAnalyticsEvent(576).c(22);
  ({ channelId, recipientId, warningId, warningType, onClose, trackAnalyticsEvent } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = trackAnalyticsEvent(1126).intl;
    const stringResult = intl.string(trackAnalyticsEvent(1126).t.NUMAsF);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  ({ container, description } = tmp4);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = trackAnalyticsEvent(1126).intl;
    const stringResult1 = intl2.string(trackAnalyticsEvent(1126).t.uicS5l);
    cResult[1] = stringResult1;
    let tmp7 = stringResult1;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp4.description) {
    const obj2 = { variant: "text-md/medium", color: "text-default", style: description, children: tmp7 };
    const tmp11 = closure_6(trackAnalyticsEvent(5088).Text, obj2);
    cResult[2] = tmp4.description;
    cResult[3] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = trackAnalyticsEvent(1126).intl;
    const stringResult2 = intl3.string(trackAnalyticsEvent(1126).t.lkUb4S);
    cResult[4] = stringResult2;
    let tmp12 = stringResult2;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== trackAnalyticsEvent) {
    const obj3 = {
      variant: "secondary",
      size: "lg",
      text: tmp12,
      grow: true,
      onPress() {
          LinkingDefault.openURL(React4);
          trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_CTL_SMS);
        }
    };
    const tmp16 = closure_6(trackAnalyticsEvent(5379).Button, obj3);
    cResult[5] = trackAnalyticsEvent;
    cResult[6] = tmp16;
    let tmp14 = tmp16;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = trackAnalyticsEvent(1126).intl;
    const stringResult3 = intl4.string(trackAnalyticsEvent(1126).t.ogLlvy);
    cResult[7] = stringResult3;
    let tmp17 = stringResult3;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] !== trackAnalyticsEvent) {
    const obj4 = {
      variant: "secondary",
      size: "lg",
      text: tmp17,
      grow: true,
      onPress() {
          LinkingDefault.openURL(hasOwnProperty);
          trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_CTL_WEB);
        }
    };
    const tmp21 = closure_6(trackAnalyticsEvent(5379).Button, obj4);
    cResult[8] = trackAnalyticsEvent;
    cResult[9] = tmp21;
    let tmp19 = tmp21;
  } else {
    tmp19 = cResult[9];
  }
  if (cResult[10] === tmp4.container) {
    if (cResult[11] === tmp9) {
      if (cResult[12] === tmp14) {
        if (cResult[13] === tmp19) {
          let tmp22 = cResult[14];
        }
        if (cResult[15] === channelId) {
          if (cResult[16] === onClose) {
            if (cResult[17] === recipientId) {
              if (cResult[18] === tmp22) {
                if (cResult[19] === warningId) {
                  if (cResult[20] === warningType) {
                    let tmp24 = cResult[21];
                  }
                  return tmp24;
                }
              }
            }
          }
        }
        const obj5 = { hasHeaderBack: true, recipientId, warningId, warningType, headerTitle: first, channelId, onClose, children: tmp22 };
        const tmp27 = closure_6(SafetyToolsActionSheetWrapperDefault, obj5);
        cResult[15] = channelId;
        cResult[16] = onClose;
        cResult[17] = recipientId;
        cResult[18] = tmp22;
        cResult[19] = warningId;
        cResult[20] = warningType;
        cResult[21] = tmp27;
        tmp24 = tmp27;
      }
    }
  }
  const obj6 = { style: container, children: null };
  const items = [tmp9, tmp14, tmp19];
  obj6.children = items;
  const tmp23 = closure_7(View, obj6);
  cResult[10] = tmp4.container;
  cResult[11] = tmp9;
  cResult[12] = tmp14;
  cResult[13] = tmp19;
  cResult[14] = tmp23;
  tmp22 = tmp23;
  const obj = trackAnalyticsEvent(576);
}) : (function SafetyToolsCrisisTextLineActionSheet(trackAnalyticsEvent) {
  trackAnalyticsEvent = trackAnalyticsEvent.trackAnalyticsEvent;
  ({ channelId, recipientId, warningId, warningType, onClose } = trackAnalyticsEvent);
  const tmp = closure_8();
  const obj = { hasHeaderBack: true, recipientId, warningId, warningType, headerTitle: null, channelId: null, onClose: null, children: null };
  const intl = trackAnalyticsEvent(1126).intl;
  obj.headerTitle = intl.string(trackAnalyticsEvent(1126).t.NUMAsF);
  obj.channelId = channelId;
  obj.onClose = onClose;
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { variant: "text-md/medium", color: "text-default", style: tmp.description, children: null };
  const intl2 = trackAnalyticsEvent(1126).intl;
  obj3.children = intl2.string(trackAnalyticsEvent(1126).t.uicS5l);
  const items = [closure_6(trackAnalyticsEvent(5088).Text, obj3), , ];
  const obj4 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
  const intl3 = trackAnalyticsEvent(1126).intl;
  obj4.text = intl3.string(trackAnalyticsEvent(1126).t.lkUb4S);
  obj4.onPress = function onPress() {
    LinkingDefault.openURL(React4);
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_CTL_SMS);
  };
  items[1] = closure_6(trackAnalyticsEvent(5379).Button, obj4);
  const obj5 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
  const intl4 = trackAnalyticsEvent(1126).intl;
  obj5.text = intl4.string(trackAnalyticsEvent(1126).t.ogLlvy);
  obj5.onPress = function onPress() {
    LinkingDefault.openURL(hasOwnProperty);
    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_CTL_WEB);
  };
  items[2] = closure_6(trackAnalyticsEvent(5379).Button, obj5);
  obj2.children = items;
  obj.children = closure_7(View, obj2);
  return closure_6(SafetyToolsActionSheetWrapperDefault, obj);
});