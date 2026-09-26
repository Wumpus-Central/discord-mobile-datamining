// === Module 11382: AppealIngestionConfirmSubmission ===

// Module 11382 (AppealIngestionConfirmSubmission)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import SafetyHubUtils from "SafetyHubUtils" /* 7867 */;
import useSafetyHubClassifications from "useSafetyHubClassifications" /* 11359 */;
import AppealIngestionModal from "AppealIngestionModal" /* 11365 */;
import AppealIngestionActivitySummaryDefault from "AppealIngestionActivitySummary" /* 11368 */;
import AppealIngestionPolicySummaryDefault from "AppealIngestionPolicySummary" /* 11378 */;
import AppealIngestionBreadcrumbsDefault from "AppealIngestionBreadcrumbs" /* 11383 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 7881 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4836);
let closure_8 = createStyles.createStyles({ container: { flex: 1, paddingHorizontal: 16 }, detailsAction: { marginBottom: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionConfirmSubmission.tsx");

export default function AppealIngestionConfirmSubmission(isDsaEligible) {
  isDsaEligible = isDsaEligible.isDsaEligible;
  const tmp = closure_8();
  const items = [SafetyHubStore];
  let stateFromStores = initialize.useStateFromStores(items, () => SafetyHubStore.getAppealClassificationId());
  if (stateFromStores == null) {
    stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = useSafetyHubClassifications.useSafetyHubClassification(stateFromStores);
  const items1 = [SafetyHubStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => SafetyHubStore.getAppealSignal());
  const tmp2Result = initialize;
  const items2 = [SafetyHubStore];
  const stateFromStores2 = initialize.useStateFromStores(items2, () => SafetyHubStore.getFreeTextAppealReason());
  const classification = safetyHubClassification.classification;
  let flagged_content;
  if (classification != null) {
    flagged_content = classification.flagged_content;
  }
  if (flagged_content == null) {
    flagged_content = [];
  }
  const intl = util.intl;
  const tmp2Result3 = initialize;
  const intl2 = util.intl;
  const stringResult = intl.string(util.t["C5q+pW"]);
  const items3 = [timestampProducer(AppealIngestionModal.AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(util.t["G2g/g5"]) }), ];
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { reasons: null };
  const stringResult1 = intl2.string(util.t["G2g/g5"]);
  const tmp14 = AppealIngestionBreadcrumbsDefault;
  const items4 = [SafetyHubUtils.getAppealSignalDisplayText(stateFromStores1), stateFromStores2];
  obj4.reasons = items4.filter((item) => item.length > 0);
  const items5 = [timestampProducer(tmp14, obj4), , , ];
  if (!isDsaEligible) {
    items5[1] = isDsaEligible;
    let tmp11Result = flagged_content.length > 0;
    if (tmp11Result) {
      const obj5 = { flaggedContent: flagged_content };
      tmp11Result = timestampProducer(AppealIngestionActivitySummaryDefault, obj5);
    }
    const obj6 = { children: null };
    items5[2] = tmp11Result;
    const obj7 = { classification: safetyHubClassification.classification };
    items5[3] = timestampProducer(AppealIngestionPolicySummaryDefault, obj7);
    obj3.children = items5;
    items3[1] = React5(View, obj3);
    obj6.children = items3;
    return React5(AppealIngestionModal.AppealIngestionModalScreen, obj6);
  } else {
    const obj8 = {
      variant: "heading-md/normal",
      color: "text-link",
      style: tmp.detailsAction,
      onPress() {
          return require("ActionSheetActionCreators").openLazy(require("asyncRequireImpl")(paths[14], paths.paths), "AppealIngestionFreeTextAppealReasonActionSheet", {
            onSave(userInput) {
              closure_1_1(573).dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput });
              const obj = closure_1_1(573);
              const obj2 = { type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput };
              closure_1_1(4800).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
            },
            onClose() {
              return closure_1_1(4800).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
            }
          });
        },
      children: null
    };
    if (stateFromStores2.length > 0) {
      const intl4 = util.intl;
      let stringResult2 = intl4.string(util.t.tnE3bZ);
    } else {
      const intl3 = util.intl;
      stringResult2 = intl3.string(util.t.uoQFIp);
    }
    obj8.children = stringResult2;
    timestampProducer(Text_Text.Text, obj8);
  }
  const tmp2Result4 = SafetyHubUtils;
};