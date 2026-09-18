// discord_app/modules/safety_hub/native/AppealIngestionSpeedBump.tsx
import AppealIngestionActivitySummaryDefault from "AppealIngestionActivitySummary.tsx";
import AppealIngestionPolicySummaryDefault from "AppealIngestionPolicySummary.tsx";
import AppealIngestionExternalLinkDefault from "AppealIngestionExternalLink.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SafetyHubStore from "../SafetyHubStore.tsx";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const SafetyHubConstants = fn(8652);
({ SafetyHubAnalyticsActions: hasOwnProperty, SafetyHubLinks: metroRequire } = SafetyHubConstants);
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4722);
let closure_10 = createStyles.createStyles({ container: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionSpeedBump.tsx");

export default function AppealIngestionSpeedBump(arg0) {
  ({ isCoppa, isSpam, isDeveloperClassification } = arg0);
  _require = undefined;
  const tmp = closure_10();
  const items = [SafetyHubStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () =>
    appealClassificationId.getAppealClassificationId(),
  );
  const obj = require("initialize");
  if (stateFromStores == null) {
    stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = require("useSafetyHubClassifications").useSafetyHubClassification(stateFromStores);
  const obj2 = require("useSafetyHubClassifications");
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
  const intl = tmp2(1115).intl;
  const tmp2Result = require("useEmitAppealIngestionEvent");
  const intl2 = tmp2(1115).intl;
  const stringResult = intl.string(require("util").t["C5q+pW"]);
  const items1 = [
    closure_8(require("AppealIngestionModal").AppealIngestionModalHeader, {
      headerText: stringResult,
      subHeaderText: intl2.string(require("util").t.URt7VI),
    }),
  ];
  const obj3 = { style: tmp.container, children: null };
  let tmp9Result = flagged_content.length > 0;
  if (tmp9Result) {
    const obj4 = { flaggedContent: flagged_content };
    tmp9Result = closure_8(AppealIngestionActivitySummaryDefault, obj4);
  }
  const items2 = [
    tmp9Result,
    closure_8(AppealIngestionPolicySummaryDefault, { classification: safetyHubClassification.classification }),
    ,
    ,
    ,
    ,
  ];
  let tmp9Result3 = isCoppa;
  if (isCoppa) {
    const obj6 = { text: null, url: null, onPress: null };
    const intl3 = tmp2(1115).intl;
    obj6.text = intl3.string(tmp2(1115).t["gJs+kf"]);
    obj6.url = constants.AGE_VERIFICATION_LINK;
    obj6.onPress = function onPress() {
      return closure_0(hasOwnProperty.ClickAgeVerificationLink);
    };
    tmp9Result3 = closure_8(AppealIngestionExternalLinkDefault, obj6);
    const tmp13Result = AppealIngestionExternalLinkDefault;
  }
  items2[2] = tmp9Result3;
  if (isSpam) {
    isSpam = !isCoppa;
  }
  if (isSpam) {
    const obj7 = { text: null, url: null, onPress: null };
    const intl4 = tmp2(1115).intl;
    obj7.text = intl4.string(tmp2(1115).t.NBsJvm);
    obj7.url = constants.SPAM_LINK;
    obj7.onPress = function onPress() {
      return closure_0(hasOwnProperty.ClickSpamWebformLink);
    };
    isSpam = closure_8(AppealIngestionExternalLinkDefault, obj7);
    const tmp13Result4 = AppealIngestionExternalLinkDefault;
  }
  items2[3] = isSpam;
  if (isDeveloperClassification) {
    const obj8 = { text: null, url: null, onPress: null };
    const intl5 = tmp2(1115).intl;
    obj8.text = intl5.string(tmp2(1115).t.n9cZTH);
    obj8.url = constants.APP_APPEAL_LINK;
    obj8.onPress = function onPress() {
      return closure_0(hasOwnProperty.ClickAppAppealLink);
    };
    isDeveloperClassification = closure_8(AppealIngestionExternalLinkDefault, obj8);
    const tmp13Result5 = AppealIngestionExternalLinkDefault;
  }
  items2[4] = isDeveloperClassification;
  let tmp9Result4 = !isCoppa;
  if (!isCoppa) {
    const obj9 = { text: null, url: null, onPress: null };
    const intl6 = tmp2(1115).intl;
    obj9.text = intl6.string(tmp2(1115).t["Vtyn/7"]);
    obj9.url = str;
    obj9.onPress = function onPress() {
      return closure_0(hasOwnProperty.ClickLearnMoreLink);
    };
    tmp9Result4 = closure_8(AppealIngestionExternalLinkDefault, obj9);
    const tmp13Result6 = AppealIngestionExternalLinkDefault;
  }
  items2[5] = tmp9Result4;
  if (isDsaEligible) {
    const obj10 = { variant: "text-xs/normal", children: null };
    const intl7 = tmp2(1115).intl;
    obj10.children = intl7.format(tmp2(1115).t.WMUgCX, {});
    isDsaEligible = closure_8(tmp2(4718).Text, obj10);
  }
  const obj11 = { children: null };
  items2[6] = isDsaEligible;
  obj3.children = items2;
  items1[1] = closure_9(View, obj3);
  obj11.children = items1;
  return closure_9(require("AppealIngestionModal").AppealIngestionModalScreen, obj11);
}
