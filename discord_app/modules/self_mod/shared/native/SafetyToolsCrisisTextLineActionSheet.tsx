// discord_app/modules/self_mod/shared/native/SafetyToolsCrisisTextLineActionSheet.tsx
import "noop";
import { View } from "get ActivityIndicator";
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { SafetyToolsActionSheetWrapper } from "SafetyToolsActionSheetWrapper.tsx";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ CRISIS_TEXT_LINE_SMS_URI: c4, CRISIS_TEXT_LINE_URL: c5 } = LOCATION_CONTEXT_MOBILE);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, description: null };
createCacheKey = { display: "flex", alignItems: "center", gap: require("Themes").space.PX_16, padding: require("Themes").space.PX_16, paddingTop: 0 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginBottom: require("Themes").space.PX_8, maxWidth: 300 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { textAlign: "center", marginBottom: require("Themes").space.PX_8, maxWidth: 300 };
const result = require("LOCATION_CONTEXT_MOBILE").fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsCrisisTextLineActionSheet.tsx");

export default function SafetyToolsCrisisTextLineActionSheet(trackAnalyticsEvent) {
  let channelId;
  let onClose;
  let recipientId;
  let warningId;
  let warningType;
  trackAnalyticsEvent = trackAnalyticsEvent.trackAnalyticsEvent;
  ({ channelId, recipientId, warningId, warningType, onClose } = trackAnalyticsEvent);
  const tmp = createCacheKey();
  let obj = { hasHeaderBack: true, recipientId, warningId, warningType, headerTitle: null, channelId: null, onClose: null, children: null };
  const intl = trackAnalyticsEvent(1236).intl;
  obj[4] = intl.string(trackAnalyticsEvent(1236).t.NUMAsF);
  obj[5] = channelId;
  obj[6] = onClose;
  obj = { style: tmp.container, children: null };
  obj = { variant: "text-md/medium", color: "text-default", style: tmp.description, children: null };
  const intl2 = trackAnalyticsEvent(1236).intl;
  obj[3] = intl2.string(trackAnalyticsEvent(1236).t.uicS5l);
  const items = [callback(trackAnalyticsEvent(4340).Text, obj), , ];
  const obj1 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
  const intl3 = trackAnalyticsEvent(1236).intl;
  obj1[2] = intl3.string(trackAnalyticsEvent(1236).t.lkUb4S);
  obj1[4] = function onPress() {
    outer1_1(outer1_2[10]).openURL(outer1_4);
    trackAnalyticsEvent(trackAnalyticsEvent(outer1_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_CTL_SMS);
  };
  items[1] = callback(trackAnalyticsEvent(4754).Button, obj1);
  const obj2 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
  const intl4 = trackAnalyticsEvent(1236).intl;
  obj2[2] = intl4.string(trackAnalyticsEvent(1236).t.ogLlvy);
  obj2[4] = function onPress() {
    outer1_1(outer1_2[10]).openURL(outer1_5);
    trackAnalyticsEvent(trackAnalyticsEvent(outer1_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_CTL_WEB);
  };
  items[2] = callback(trackAnalyticsEvent(4754).Button, obj2);
  obj[1] = items;
  obj[7] = callback2(View, obj);
  return callback(SafetyToolsActionSheetWrapper, obj);
};