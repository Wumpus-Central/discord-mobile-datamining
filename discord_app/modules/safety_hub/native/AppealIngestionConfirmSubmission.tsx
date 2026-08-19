// === Module 11089: AppealIngestionConfirmSubmission ===

// Module 11089 (AppealIngestionConfirmSubmission)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import parseMessageEmbedForProps from "parseMessageEmbedForProps" /* 5437 */;
import useSafetyHubClassifications from "useSafetyHubClassifications" /* 11066 */;
import AppealIngestionModal from "AppealIngestionModal" /* 11081 */;
import AppealIngestionActivitySummaryDefault from "AppealIngestionActivitySummary" /* 11084 */;
import AppealIngestionPolicySummaryDefault from "AppealIngestionPolicySummary" /* 11085 */;
import AppealIngestionBreadcrumbsDefault from "AppealIngestionBreadcrumbs" /* 11090 */;
import { View } from "get ActivityIndicator" /* 17 */;
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 11061 */;
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { flex: 1, paddingHorizontal: 16 }, detailsAction: { marginBottom: 16 } });
const result = require("obj132").fileFinishedImporting("modules/safety_hub/native/AppealIngestionConfirmSubmission.tsx");

export default function AppealIngestionConfirmSubmission(isDsaEligible) {
  isDsaEligible = isDsaEligible.isDsaEligible;
  const tmp = callback2();
  let obj = initialize;
  const items = [closure_4];
  let stateFromStores = obj.useStateFromStores(items, () => store.getAppealClassificationId());
  obj1 = useSafetyHubClassifications;
  if (stateFromStores == null) {
    stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = obj1.useSafetyHubClassification(stateFromStores);
  let tmp2Result = initialize;
  const items1 = [closure_4];
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => store.getAppealSignal());
  tmp2Result = initialize;
  const items2 = [closure_4];
  const stateFromStores2 = tmp2Result.useStateFromStores(items2, () => store.getFreeTextAppealReason());
  const classification = safetyHubClassification.classification;
  let flagged_content;
  if (classification != null) {
    flagged_content = classification.flagged_content;
  }
  if (flagged_content == null) {
    flagged_content = [];
  }
  const intl = getSystemLocale.intl;
  const intl2 = getSystemLocale.intl;
  const stringResult = intl.string(getSystemLocale.t["C5q+pW"]);
  const items3 = [callback(AppealIngestionModal.AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(getSystemLocale.t["G2g/g5"]) }), ];
  obj = { reasons: null };
  const stringResult1 = intl2.string(getSystemLocale.t["G2g/g5"]);
  const tmp14 = AppealIngestionBreadcrumbsDefault;
  const items4 = [parseMessageEmbedForProps.getAppealSignalDisplayText(stateFromStores1), stateFromStores2];
  obj[0] = items4.filter((item, index) => item.length > 0);
  const items5 = [callback(tmp14, obj), , , ];
  if (!isDsaEligible) {
    items5[1] = isDsaEligible;
    let tmp11Result = flagged_content.length > 0;
    if (tmp11Result) {
      obj1 = { flaggedContent: null };
      obj1[0] = flagged_content;
      tmp11Result = callback(AppealIngestionActivitySummaryDefault, obj1);
    }
    const obj2 = { children: null };
    items5[2] = tmp11Result;
    const obj3 = { classification: null };
    obj3[0] = safetyHubClassification.classification;
    items5[3] = callback(AppealIngestionPolicySummaryDefault, obj3);
    obj[1] = items5;
    items3[1] = callback(View, obj);
    obj2[0] = items3;
    return callback(AppealIngestionModal.AppealIngestionModalScreen, obj2);
  } else {
    const obj4 = { variant: "heading-md/normal", color: "text-link", style: null, onPress: null, children: null };
    obj4[2] = tmp.detailsAction;
    obj4[3] = function onPress() {
      callback2(paths[13]);
      let obj = {
        onSave(userInput) {
          callback(709);
          const obj = { type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput };
          obj.dispatch(obj);
          callback(4342).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
        },
        onClose() {
          return callback(4342).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
        }
      };
      return obj.openLazy(callback(paths[15])(paths[14], paths.paths), "AppealIngestionFreeTextAppealReasonActionSheet", obj);
    };
    if (stateFromStores2.length > 0) {
      const intl4 = getSystemLocale.intl;
      let stringResult2 = intl4.string(getSystemLocale.t.tnE3bZ);
    } else {
      const intl3 = getSystemLocale.intl;
      stringResult2 = intl3.string(getSystemLocale.t.uoQFIp);
    }
    obj4[4] = stringResult2;
    tmp11Result = callback(Text.Text, obj4);
  }
  const tmp2Result1 = parseMessageEmbedForProps;
};