// discord_app/modules/safety_hub/native/AppealIngestionSpeedBump.tsx
import "noop";
import { View } from "get ActivityIndicator";
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";
import SafetyHubView from "SafetyHubView";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let c9;
let closure_6;
let metroImportAll;
const require = arg1;
({ SafetyHubAnalyticsActions: c5, SafetyHubLinks: closure_6 } = SafetyHubView);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ container: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 } });
const result = require("handleSafetyHubRequestAgeVerificationResetModalAction").fileFinishedImporting("modules/safety_hub/native/AppealIngestionSpeedBump.tsx");

export default function AppealIngestionSpeedBump(arg0) {
  let classification;
  let isCoppa;
  let isDsaEligible;
  let isSpam;
  ({ isCoppa, isSpam } = arg0);
  let _require;
  let obj = _require(589);
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  let stateFromStores = obj.useStateFromStores(items, () => appealClassificationId.getAppealClassificationId());
  let obj1 = _require(11091);
  if (stateFromStores == null) {
    stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = obj1.useSafetyHubClassification(stateFromStores);
  const tmp = callback2();
  _require = _require(11103).useEmitAppealIngestionEvent();
  ({ isDsaEligible, classification } = safetyHubClassification);
  let str;
  if (classification != null) {
    str = classification.explainer_link;
  }
  if (str == null) {
    str = "";
  }
  const classification2 = safetyHubClassification.classification;
  let flagged_content;
  if (classification2 != null) {
    flagged_content = classification2.flagged_content;
  }
  if (flagged_content == null) {
    flagged_content = [];
  }
  const intl = tmp2(1236).intl;
  const tmp2Result = _require(11103);
  const intl2 = tmp2(1236).intl;
  const stringResult = intl.string(_require(1236).t["C5q+pW"]);
  const items1 = [callback(_require(11101).AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(_require(1236).t.URt7VI) }), ];
  obj = { style: tmp.container, children: null };
  let tmp9Result = flagged_content.length > 0;
  if (tmp9Result) {
    obj = { flaggedContent: null };
    obj[0] = flagged_content;
    tmp9Result = tmp9(importDefault(11104), obj);
  }
  const items2 = [tmp9Result, , , , , ];
  obj1 = { classification: safetyHubClassification.classification };
  items2[1] = callback(importDefault(11105), obj1);
  tmp9Result = isCoppa;
  if (isCoppa) {
    const obj2 = { text: null, url: null, onPress: null };
    let tmp13Result = tmp13(11106);
    const intl3 = tmp2(1236).intl;
    obj2[0] = intl3.string(tmp2(1236).t["gJs+kf"]);
    obj2[1] = constants.AGE_VERIFICATION_LINK;
    obj2[2] = function onPress() {
      return callback(outer1_5.ClickAgeVerificationLink);
    };
    tmp9Result = tmp9(tmp13Result, obj2);
  }
  items2[2] = tmp9Result;
  if (isSpam) {
    isSpam = !isCoppa;
  }
  if (isSpam) {
    const obj3 = { text: null, url: null, onPress: null };
    tmp13Result = tmp13(11106);
    const intl4 = tmp2(1236).intl;
    obj3[0] = intl4.string(tmp2(1236).t.NBsJvm);
    obj3[1] = constants.SPAM_LINK;
    obj3[2] = function onPress() {
      return callback(outer1_5.ClickSpamWebformLink);
    };
    isSpam = tmp9(tmp13Result, obj3);
  }
  items2[3] = isSpam;
  let tmp9Result1 = !isCoppa;
  if (!isCoppa) {
    const obj4 = { text: null, url: null, onPress: null };
    const intl5 = tmp2(1236).intl;
    obj4[0] = intl5.string(tmp2(1236).t["Vtyn/7"]);
    obj4[1] = str;
    obj4[2] = function onPress() {
      return callback(outer1_5.ClickLearnMoreLink);
    };
    tmp9Result1 = tmp9(tmp13(11106), obj4);
    const tmp13Result1 = tmp13(11106);
  }
  items2[4] = tmp9Result1;
  if (isDsaEligible) {
    const obj5 = { variant: "text-xs/normal", children: null };
    const intl6 = tmp2(1236).intl;
    obj5[1] = intl6.format(tmp2(1236).t.WMUgCX, {});
    isDsaEligible = tmp9(tmp2(4189).Text, obj5);
  }
  const obj6 = { children: null };
  items2[5] = isDsaEligible;
  obj[1] = items2;
  items1[1] = closure_9(View, obj);
  obj6[0] = items1;
  return closure_9(_require(11101).AppealIngestionModalScreen, obj6);
};