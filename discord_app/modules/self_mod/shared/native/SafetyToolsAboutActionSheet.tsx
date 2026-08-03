// === Module 10193: SafetyToolsAboutScreen ===

// Module 10193 (SafetyToolsAboutScreen)
import _slicedToArray from "_slicedToArray";
import set from "set";
import { View } from "combined";
import { getSafetyToolsActionSheetKey as closure_6 } from "LOCATION_CONTEXT_MOBILE";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { aboutContainer: null, description: null, reportFalsePositive: null };
createCacheKey = { marginHorizontal: require("Themes").space.PX_32 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center", textAlign: "center", marginBottom: require("Themes").space.PX_24 };
let obj1 = { alignSelf: "center", textAlign: "center", marginBottom: require("Themes").space.PX_24 };
createCacheKey[2] = { alignSelf: "center", textAlign: "center", marginTop: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { alignSelf: "center", textAlign: "center", marginTop: require("Themes").space.PX_8 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsAboutActionSheet.tsx");

export default function SafetyToolsAboutScreen(channelId) {
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  let first;
  let closure_5;
  let c6;
  let HelpdeskArticles;
  const tmp = warningType(first.useState(false), 2);
  first = tmp[0];
  closure_5 = tmp[1];
  const tmp3 = createCacheKey();
  let obj = channelId(warningId[8]);
  const tmp4 = null != obj.useSafetyToolsButtonTooltipForChannel(channelId);
  c6 = tmp4;
  const items = [channelId, warningId, warningType, recipientId, tmp4];
  const items1 = [channelId, first];
  const callback = first.useCallback(() => {
    let obj = recipientId(warningId[9]);
    obj.hideActionSheet(_undefined(channelId));
    obj = { channelId, warningId, warningType, senderId: recipientId, cta: channelId(warningId[10]).CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS, isNudgeWarning: _undefined };
    channelId(warningId[10]).trackCtaEvent(obj);
  }, items);
  HelpdeskArticles = first.useCallback(() => {
    if (!first) {
      callback(true);
      let obj = channelId(warningId[11]);
      const reportFalsePositiveResult = channelId(warningId[11]).reportFalsePositive(channelId);
      channelId(warningId[11]).reportFalsePositive(channelId).then(() => {
        callback(false);
        let obj = outer1_0(outer1_2[12]);
        obj = { id: "safety-tools-report-false-positive", text: null };
        const intl = outer1_0(outer1_2[13]).intl;
        obj[1] = intl.string(outer1_0(outer1_2[13]).t.FhgVWi);
        obj.showSafetyToast(obj);
        outer1_1(outer1_2[9]).hideActionSheet(outer1_6(closure_0));
      }).catch(() => {
        callback(false);
        const intl = outer1_0(outer1_2[13]).intl;
        outer1_0(outer1_2[14]).presentError(intl.string(outer1_0(outer1_2[13]).t.R0RpRX));
      });
      const nextPromise = channelId(warningId[11]).reportFalsePositive(channelId).then(() => {
        callback(false);
        let obj = outer1_0(outer1_2[12]);
        obj = { id: "safety-tools-report-false-positive", text: null };
        const intl = outer1_0(outer1_2[13]).intl;
        obj[1] = intl.string(outer1_0(outer1_2[13]).t.FhgVWi);
        obj.showSafetyToast(obj);
        outer1_1(outer1_2[9]).hideActionSheet(outer1_6(closure_0));
      });
    }
  }, items1);
  obj = { hasHeaderBack: true, recipientId, warningId, warningType, headerTitle: null, channelId: null, onClose: null, children: null };
  let intl = channelId(warningId[13]).intl;
  obj[4] = intl.string(channelId(warningId[13]).t.qI14KM);
  obj[5] = channelId;
  obj[6] = channelId.onClose;
  obj = { style: tmp3.aboutContainer, children: null };
  const obj1 = { variant: "text-md/medium", style: tmp3.description, children: null };
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
      return outer1_8(channelId(warningId[16]).Text, { variant: "text-sm/medium", color: "text-link", disabled: first, onPress: closure_7, children }, arg1);
    }
  };
  obj4[2] = intl4.format(channelId(warningId[13]).t["2uYViD"], obj5);
  items3[1] = callback(channelId(warningId[16]).Text, obj4);
  obj[7] = items3;
  return callback2(recipientId(warningId[15]), obj);
};