// discord_app/modules/safety_hub/native/AppealIngestionSpeedBump.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import AppealIngestionActivitySummaryDefault from "AppealIngestionActivitySummary.tsx";
import AppealIngestionPolicySummaryDefault from "AppealIngestionPolicySummary.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../SafetyHubStore.tsx";
import SafetyHubView from "../SafetyHubConstants.tsx";
import { EMPTY_STRING_SNOWFLAKE_ID } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { useEmitAppealIngestionEvent } from "../hooks/useEmitAppealIngestionEvent.tsx";
import { useSafetyHubClassifications } from "../hooks/useSafetyHubClassifications.tsx";
import { AppealIngestionModal } from "AppealIngestionModal.tsx";

const require = arg1;
noopAll;
({ SafetyHubAnalyticsActions: c5, SafetyHubLinks: closure_6 } = SafetyHubView);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ container: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 } });
const result = require("set").fileFinishedImporting("modules/safety_hub/native/AppealIngestionSpeedBump.tsx");

export default function AppealIngestionSpeedBump(arg0) {
  ({ isCoppa, isSpam, isDeveloperClassification } = arg0);
  let _require;
  let obj = _initialize;
  const items = [closure_4];
  let stateFromStores = obj.useStateFromStores(items, () => appealClassificationId.getAppealClassificationId());
  obj1 = _useSafetyHubClassifications;
  if (stateFromStores == null) {
    stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = obj1.useSafetyHubClassification(stateFromStores);
  const tmp = callback2();
  _require = _useEmitAppealIngestionEvent.useEmitAppealIngestionEvent();
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
  const tmp2Result = _useEmitAppealIngestionEvent;
  const intl2 = tmp2(1236).intl;
  const stringResult = intl.string(_getSystemLocale.t["C5q+pW"]);
  const items1 = [callback(_AppealIngestionModal.AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(_getSystemLocale.t.URt7VI) }), ];
  obj = { style: tmp.container, children: null };
  let tmp9Result = flagged_content.length > 0;
  if (tmp9Result) {
    obj = { flaggedContent: null };
    obj[0] = flagged_content;
    tmp9Result = tmp9(AppealIngestionActivitySummaryDefault, obj);
  }
  const items2 = [tmp9Result, , , , , , ];
  obj1 = { classification: safetyHubClassification.classification };
  items2[1] = callback(AppealIngestionPolicySummaryDefault, obj1);
  tmp9Result = isCoppa;
  if (isCoppa) {
    const obj2 = { text: null, url: null, onPress: null };
    let tmp13Result = tmp13(11086);
    const intl3 = tmp2(1236).intl;
    obj2[0] = intl3.string(tmp2(1236).t["gJs+kf"]);
    obj2[1] = constants.AGE_VERIFICATION_LINK;
    obj2[2] = function onPress() {
      return callback(closure_1_5.ClickAgeVerificationLink);
    };
    tmp9Result = tmp9(tmp13Result, obj2);
  }
  items2[2] = tmp9Result;
  if (isSpam) {
    isSpam = !isCoppa;
  }
  if (isSpam) {
    const obj3 = { text: null, url: null, onPress: null };
    tmp13Result = tmp13(11086);
    const intl4 = tmp2(1236).intl;
    obj3[0] = intl4.string(tmp2(1236).t.NBsJvm);
    obj3[1] = constants.SPAM_LINK;
    obj3[2] = function onPress() {
      return callback(closure_1_5.ClickSpamWebformLink);
    };
    isSpam = tmp9(tmp13Result, obj3);
  }
  items2[3] = isSpam;
  if (isDeveloperClassification) {
    const obj4 = { text: null, url: null, onPress: null };
    const intl5 = tmp2(1236).intl;
    obj4[0] = intl5.string(tmp2(1236).t.n9cZTH);
    obj4[1] = constants.APP_APPEAL_LINK;
    obj4[2] = function onPress() {
      return callback(closure_1_5.ClickAppAppealLink);
    };
    isDeveloperClassification = tmp9(tmp13(11086), obj4);
    const tmp13Result1 = tmp13(11086);
  }
  items2[4] = isDeveloperClassification;
  let tmp9Result1 = !isCoppa;
  if (!isCoppa) {
    const obj5 = { text: null, url: null, onPress: null };
    const intl6 = tmp2(1236).intl;
    obj5[0] = intl6.string(tmp2(1236).t["Vtyn/7"]);
    obj5[1] = str;
    obj5[2] = function onPress() {
      return callback(closure_1_5.ClickLearnMoreLink);
    };
    tmp9Result1 = tmp9(tmp13(11086), obj5);
    const tmp13Result2 = tmp13(11086);
  }
  items2[5] = tmp9Result1;
  if (isDsaEligible) {
    const obj6 = { variant: "text-xs/normal", children: null };
    const intl7 = tmp2(1236).intl;
    obj6[1] = intl7.format(tmp2(1236).t.WMUgCX, {});
    isDsaEligible = tmp9(tmp2(4734).Text, obj6);
  }
  const obj7 = { children: null };
  items2[6] = isDsaEligible;
  obj[1] = items2;
  items1[1] = closure_9(View, obj);
  obj7[0] = items1;
  return closure_9(_AppealIngestionModal.AppealIngestionModalScreen, obj7);
};