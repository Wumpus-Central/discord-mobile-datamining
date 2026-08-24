// === Module 10622: SafetyToolsAboutScreen ===

// Module 10622 (SafetyToolsAboutScreen)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { getSafetyToolsActionSheetKey as closure_6 } from "LOCATION_CONTEXT_MOBILE" /* 10569 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { aboutContainer: null, description: null, reportFalsePositive: null };
createCacheKey = { marginHorizontal: ThemesDefault.space.PX_32 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center", textAlign: "center", marginBottom: ThemesDefault.space.PX_24 };
let obj1 = { alignSelf: "center", textAlign: "center", marginBottom: ThemesDefault.space.PX_24 };
createCacheKey[2] = { alignSelf: "center", textAlign: "center", marginTop: ThemesDefault.space.PX_8 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj2 = { alignSelf: "center", textAlign: "center", marginTop: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsAboutActionSheet.tsx");

export default function SafetyToolsAboutScreen(channelId) {
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  let first;
  closure_5 = undefined;
  closure_6 = undefined;
  HelpdeskArticles = undefined;
  const tmp = warningType(first.useState(false), 2);
  first = tmp[0];
  closure_5 = tmp[1];
  const tmp3 = callback3();
  let obj = channelId(warningId[8]);
  const tmp4 = null != obj.useSafetyToolsButtonTooltipForChannel(channelId);
  closure_6 = tmp4;
  const items = [channelId, warningId, warningType, recipientId, tmp4];
  const items1 = [channelId, first];
  const callback = first.useCallback(() => {
    let obj = recipientId(warningId[9]);
    obj.hideActionSheet(callback2(channelId));
    obj = { channelId, warningId, warningType, senderId: recipientId, cta: channelId(warningId[10]).CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS, isNudgeWarning: callback2 };
    channelId(warningId[10]).trackCtaEvent(obj);
  }, items);
  HelpdeskArticles = first.useCallback(() => {
    if (!first) {
      callback(true);
      let obj = channelId(warningId[11]);
      const reportFalsePositiveResult = channelId(warningId[11]).reportFalsePositive(channelId);
      channelId(warningId[11]).reportFalsePositive(channelId).then(() => {
        callback(false);
        let obj = closure_1_0(closure_1_2[12]);
        obj = { id: "safety-tools-report-false-positive", text: null };
        const intl = closure_1_0(closure_1_2[13]).intl;
        obj[1] = intl.string(closure_1_0(closure_1_2[13]).t.FhgVWi);
        obj.showSafetyToast(obj);
        closure_1_1(closure_1_2[9]).hideActionSheet(closure_1_6(closure_0));
      }).catch(() => {
        callback(false);
        const intl = closure_1_0(closure_1_2[13]).intl;
        closure_1_0(closure_1_2[14]).presentError(intl.string(closure_1_0(closure_1_2[13]).t.R0RpRX));
      });
      const nextPromise = channelId(warningId[11]).reportFalsePositive(channelId).then(() => {
        callback(false);
        let obj = closure_1_0(closure_1_2[12]);
        obj = { id: "safety-tools-report-false-positive", text: null };
        const intl = closure_1_0(closure_1_2[13]).intl;
        obj[1] = intl.string(closure_1_0(closure_1_2[13]).t.FhgVWi);
        obj.showSafetyToast(obj);
        closure_1_1(closure_1_2[9]).hideActionSheet(closure_1_6(closure_0));
      });
    }
  }, items1);
  obj = { hasHeaderBack: true, recipientId, warningId, warningType, headerTitle: null, channelId: null, onClose: null, children: null };
  let intl = channelId(warningId[13]).intl;
  obj[4] = intl.string(channelId(warningId[13]).t.qI14KM);
  obj[5] = channelId;
  obj[6] = channelId.onClose;
  obj = { style: tmp3.aboutContainer, children: null };
  obj1 = { variant: "text-md/medium", style: tmp3.description, children: null };
  const intl2 = channelId(warningId[13]).intl;
  const obj2 = { learnMoreLink: null };
  let obj5 = recipientId(warningId[17]);
  obj2[0] = obj5.getArticleURL(HelpdeskArticles.SAFETY_ALERTS);
  obj1[2] = intl2.format(channelId(warningId[13]).t["njJ/Cg"], obj2);
  const items2 = [callback(channelId(warningId[16]).Text, obj1), ];
  const obj3 = { variant: "secondary", size: "lg", disabled: first, text: null, onPress: null };
  const intl3 = channelId(warningId[13]).intl;
  obj3[3] = intl3.string(channelId(warningId[13]).t.Xb2REN);
  obj3[4] = callback;
  items2[1] = callback(channelId(warningId[18]).Button, obj3);
  obj[1] = items2;
  const items3 = [callback2(closure_5, obj), ];
  const obj4 = { variant: "text-md/medium", style: tmp3.reportFalsePositive, children: null };
  const intl4 = channelId(warningId[13]).intl;
  obj5 = {
    reportFalsePositiveHook(children) {
      return closure_1_8(channelId(warningId[16]).Text, { variant: "text-sm/medium", color: "text-link", disabled: first, onPress: closure_7, children }, arg1);
    }
  };
  obj4[2] = intl4.format(channelId(warningId[13]).t["2uYViD"], obj5);
  items3[1] = callback(channelId(warningId[16]).Text, obj4);
  obj[7] = items3;
  return callback2(recipientId(warningId[15]), obj);
};