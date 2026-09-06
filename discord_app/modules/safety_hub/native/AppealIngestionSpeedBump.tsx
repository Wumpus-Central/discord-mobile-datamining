// discord_app/modules/safety_hub/native/AppealIngestionSpeedBump.tsx
import AppealIngestionActivitySummaryDefault from "AppealIngestionActivitySummary.tsx";
import AppealIngestionPolicySummaryDefault from "AppealIngestionPolicySummary.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SafetyHubStore from "../SafetyHubStore.tsx";

const require = fn;
const View = fn(17).View;
const SafetyHubConstants = fn(8419);
({ SafetyHubAnalyticsActions: hasOwnProperty, SafetyHubLinks: metroRequire } = SafetyHubConstants);
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ container: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionSpeedBump.tsx");

export default function AppealIngestionSpeedBump(arg0) {
  ({ isCoppa, isSpam, isDeveloperClassification } = arg0);
  _require = undefined;
  let obj = require("initialize");
  const items = [SafetyHubStore];
  let stateFromStores = obj.useStateFromStores(items, () => appealClassificationId.getAppealClassificationId());
  let obj1 = require("useSafetyHubClassifications");
  if (stateFromStores == null) {
    stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = obj1.useSafetyHubClassification(stateFromStores);
  const tmp = closure_10();
  _require = require("useEmitAppealIngestionEvent").useEmitAppealIngestionEvent();
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
  const intl = tmp2(1114).intl;
  const tmp2Result = require("useEmitAppealIngestionEvent");
  const intl2 = tmp2(1114).intl;
  const stringResult = intl.string(require("util").t["C5q+pW"]);
  const items1 = [
    closure_8(require("AppealIngestionModal").AppealIngestionModalHeader, {
      headerText: stringResult,
      subHeaderText: intl2.string(require("util").t.URt7VI),
    }),
  ];
  obj = { style: tmp.container, children: null };
  let tmp9Result = flagged_content.length > 0;
  if (tmp9Result) {
    obj = { flaggedContent: flagged_content };
    tmp9Result = tmp9(AppealIngestionActivitySummaryDefault, obj);
  }
  const items2 = [tmp9Result, , , , , ,];
  obj1 = { classification: safetyHubClassification.classification };
  items2[1] = closure_8(AppealIngestionPolicySummaryDefault, obj1);
  tmp9Result = isCoppa;
  if (isCoppa) {
    const obj2 = { text: null, url: null, onPress: null };
    let tmp13Result = tmp13(11900);
    const intl3 = tmp2(1114).intl;
    obj2.text = intl3.string(tmp2(1114).t["gJs+kf"]);
    obj2.url = constants.AGE_VERIFICATION_LINK;
    obj2.onPress = function onPress() {
      return closure_0(hasOwnProperty.ClickAgeVerificationLink);
    };
    tmp9Result = tmp9(tmp13Result, obj2);
  }
  items2[2] = tmp9Result;
  if (isSpam) {
    isSpam = !isCoppa;
  }
  if (isSpam) {
    const obj3 = { text: null, url: null, onPress: null };
    tmp13Result = tmp13(11900);
    const intl4 = tmp2(1114).intl;
    obj3.text = intl4.string(tmp2(1114).t.NBsJvm);
    obj3.url = constants.SPAM_LINK;
    obj3.onPress = function onPress() {
      return closure_0(hasOwnProperty.ClickSpamWebformLink);
    };
    isSpam = tmp9(tmp13Result, obj3);
  }
  items2[3] = isSpam;
  if (isDeveloperClassification) {
    const obj4 = { text: null, url: null, onPress: null };
    const intl5 = tmp2(1114).intl;
    obj4.text = intl5.string(tmp2(1114).t.n9cZTH);
    obj4.url = constants.APP_APPEAL_LINK;
    obj4.onPress = function onPress() {
      return closure_0(hasOwnProperty.ClickAppAppealLink);
    };
    isDeveloperClassification = tmp9(tmp13(11900), obj4);
    const tmp13Result1 = tmp13(11900);
  }
  items2[4] = isDeveloperClassification;
  let tmp9Result1 = !isCoppa;
  if (!isCoppa) {
    const obj5 = { text: null, url: null, onPress: null };
    const intl6 = tmp2(1114).intl;
    obj5.text = intl6.string(tmp2(1114).t["Vtyn/7"]);
    obj5.url = str;
    obj5.onPress = function onPress() {
      return closure_0(hasOwnProperty.ClickLearnMoreLink);
    };
    tmp9Result1 = tmp9(tmp13(11900), obj5);
    const tmp13Result2 = tmp13(11900);
  }
  items2[5] = tmp9Result1;
  if (isDsaEligible) {
    const obj6 = { variant: "text-xs/normal", children: null };
    const intl7 = tmp2(1114).intl;
    obj6.children = intl7.format(tmp2(1114).t.WMUgCX, {});
    isDsaEligible = tmp9(tmp2(4556).Text, obj6);
  }
  const obj7 = { children: null };
  items2[6] = isDsaEligible;
  obj.children = items2;
  items1[1] = closure_9(View, obj);
  obj7.children = items1;
  return closure_9(require("AppealIngestionModal").AppealIngestionModalScreen, obj7);
}
