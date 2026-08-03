import "set";
import { View } from "AppealIngestionActivitySummary";
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { flex: 1, paddingHorizontal: 16 }, detailsAction: { marginBottom: 16 } });
const result = require("handleSafetyHubRequestAgeVerificationResetModalAction").fileFinishedImporting("modules/safety_hub/native/AppealIngestionConfirmSubmission.tsx");

export default function AppealIngestionConfirmSubmission(isDsaEligible) {
  isDsaEligible = isDsaEligible.isDsaEligible;
  const tmp = callback2();
  let obj = require(589) /* initialize */;
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  let stateFromStores = obj.useStateFromStores(items, () => store.getAppealClassificationId());
  let obj1 = require(11207) /* useSafetyHubClassifications */;
  if (stateFromStores == null) {
    stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = obj1.useSafetyHubClassification(stateFromStores);
  let tmp2Result = tmp2(589);
  const items1 = [handleSafetyHubRequestAgeVerificationResetModalAction];
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => store.getAppealSignal());
  tmp2Result = tmp2(589);
  const items2 = [handleSafetyHubRequestAgeVerificationResetModalAction];
  const stateFromStores2 = tmp2Result.useStateFromStores(items2, () => store.getFreeTextAppealReason());
  const classification = safetyHubClassification.classification;
  let flagged_content;
  if (classification != null) {
    flagged_content = classification.flagged_content;
  }
  if (flagged_content == null) {
    flagged_content = [];
  }
  const intl = tmp2(1236).intl;
  const intl2 = tmp2(1236).intl;
  const stringResult = intl.string(require(1236) /* getSystemLocale */.t["C5q+pW"]);
  const items3 = [callback(require(11217) /* AppealIngestionModal */.AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(require(1236) /* getSystemLocale */.t["G2g/g5"]) }), ];
  obj = { style: tmp.container, children: null };
  obj = { reasons: null };
  const stringResult1 = intl2.string(require(1236) /* getSystemLocale */.t["G2g/g5"]);
  const tmp12 = View;
  const tmp14 = importDefault(11226);
  const items4 = [require(7715) /* parseMessageEmbedForProps */.getAppealSignalDisplayText(stateFromStores1), stateFromStores2];
  obj[0] = items4.filter((arg0) => arg0.length > 0);
  const items5 = [callback(tmp14, obj), , , ];
  if (!isDsaEligible) {
    items5[1] = isDsaEligible;
    let tmp11Result = flagged_content.length > 0;
    if (tmp11Result) {
      obj1 = { flaggedContent: null };
      obj1[0] = flagged_content;
      tmp11Result = tmp11(tmp13(11220), obj1);
    }
    const obj2 = { children: null };
    items5[2] = tmp11Result;
    const obj3 = { classification: null };
    obj3[0] = safetyHubClassification.classification;
    items5[3] = tmp11(tmp13(11221), obj3);
    obj[1] = items5;
    items3[1] = tmp10(tmp12, obj);
    obj2[0] = items3;
    return tmp10(tmp2(11217).AppealIngestionModalScreen, obj2);
  } else {
    const obj4 = { variant: "heading-md/normal", color: "text-link", style: null, onPress: null, children: null };
    obj4[2] = tmp.detailsAction;
    obj4[3] = function onPress() {
      let obj = callback2(paths[13]);
      obj = {
        onSave(userInput) {
          let obj = callback(709);
          obj = { type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput };
          obj.dispatch(obj);
          callback(4223).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
        },
        onClose() {
          return callback(4223).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
        }
      };
      return obj.openLazy(callback(paths[15])(paths[14], paths.paths), "AppealIngestionFreeTextAppealReasonActionSheet", obj);
    };
    if (stateFromStores2.length > 0) {
      const intl4 = tmp2(1236).intl;
      let stringResult2 = intl4.string(tmp2(1236).t.tnE3bZ);
    } else {
      const intl3 = tmp2(1236).intl;
      stringResult2 = intl3.string(tmp2(1236).t.uoQFIp);
    }
    obj4[4] = stringResult2;
    tmp11Result = tmp11(tmp2(4251).Text, obj4);
  }
};