// === Module 11398: SafetyToolsCrisisTextLineActionSheet ===

// Module 11398 (SafetyToolsCrisisTextLineActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import SafetyToolsActionSheetWrapperDefault from "SafetyToolsActionSheetWrapper" /* 11399 */;
import { View } from "get ActivityIndicator" /* 17 */;
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE" /* 11363 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
noopAll;
({ CRISIS_TEXT_LINE_SMS_URI: c4, CRISIS_TEXT_LINE_URL: c5 } = LOCATION_CONTEXT_MOBILE);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, description: null };
createCacheKey = { display: "flex", alignItems: "center", gap: ThemesDefault.space.PX_16, padding: ThemesDefault.space.PX_16, paddingTop: 0 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginBottom: ThemesDefault.space.PX_8, maxWidth: 300 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { textAlign: "center", marginBottom: ThemesDefault.space.PX_8, maxWidth: 300 };
const result = require("set").fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsCrisisTextLineActionSheet.tsx");

export default function SafetyToolsCrisisTextLineActionSheet(trackAnalyticsEvent) {
  trackAnalyticsEvent = trackAnalyticsEvent.trackAnalyticsEvent;
  ({ channelId, recipientId, warningId, warningType, onClose } = trackAnalyticsEvent);
  const tmp = callback3();
  let obj = { hasHeaderBack: true, recipientId, warningId, warningType, headerTitle: null, channelId: null, onClose: null, children: null };
  const intl = trackAnalyticsEvent(1114).intl;
  obj[4] = intl.string(trackAnalyticsEvent(1114).t.NUMAsF);
  obj[5] = channelId;
  obj[6] = onClose;
  obj = { style: tmp.container, children: null };
  obj = { variant: "text-md/medium", color: "text-default", style: tmp.description, children: null };
  const intl2 = trackAnalyticsEvent(1114).intl;
  obj[3] = intl2.string(trackAnalyticsEvent(1114).t.uicS5l);
  const items = [callback(trackAnalyticsEvent(4556).Text, obj), , ];
  obj1 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
  const intl3 = trackAnalyticsEvent(1114).intl;
  obj1[2] = intl3.string(trackAnalyticsEvent(1114).t.lkUb4S);
  obj1[4] = function onPress() {
    closure_1_1(closure_1_2[10]).openURL(closure_1_4);
    trackAnalyticsEvent(trackAnalyticsEvent(closure_1_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_CTL_SMS);
  };
  items[1] = callback(trackAnalyticsEvent(4975).Button, obj1);
  const obj2 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
  const intl4 = trackAnalyticsEvent(1114).intl;
  obj2[2] = intl4.string(trackAnalyticsEvent(1114).t.ogLlvy);
  obj2[4] = function onPress() {
    closure_1_1(closure_1_2[10]).openURL(closure_1_5);
    trackAnalyticsEvent(trackAnalyticsEvent(closure_1_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_CTL_WEB);
  };
  items[2] = callback(trackAnalyticsEvent(4975).Button, obj2);
  obj[1] = items;
  obj[7] = callback2(View, obj);
  return callback(SafetyToolsActionSheetWrapperDefault, obj);
};