// === Module 11903: AppealIngestionConfirmSubmission ===

// Module 11903 (AppealIngestionConfirmSubmission)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import SafetyHubUtils from "SafetyHubUtils" /* 8418 */;
import useSafetyHubClassifications from "useSafetyHubClassifications" /* 11880 */;
import AppealIngestionModal from "AppealIngestionModal" /* 11886 */;
import AppealIngestionBreadcrumbsDefault from "AppealIngestionBreadcrumbs" /* 11904 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8430 */;

require = fn;
const View = fn(17).View;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ container: { flex: 1, paddingHorizontal: 16 }, detailsAction: { marginBottom: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionConfirmSubmission.tsx");

export default function AppealIngestionConfirmSubmission(isDsaEligible) {
  isDsaEligible = isDsaEligible.isDsaEligible;
  const tmp = closure_8();
  let obj = initialize;
  const items = [SafetyHubStore];
  let stateFromStores = obj.useStateFromStores(items, () => SafetyHubStore.getAppealClassificationId());
  let obj1 = useSafetyHubClassifications;
  if (stateFromStores == null) {
    stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = obj1.useSafetyHubClassification(stateFromStores);
  let tmp2Result = tmp2(504);
  const items1 = [SafetyHubStore];
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => SafetyHubStore.getAppealSignal());
  tmp2Result = tmp2(504);
  const items2 = [SafetyHubStore];
  const stateFromStores2 = tmp2Result.useStateFromStores(items2, () => SafetyHubStore.getFreeTextAppealReason());
  const classification = safetyHubClassification.classification;
  let flagged_content;
  if (classification != null) {
    flagged_content = classification.flagged_content;
  }
  if (flagged_content == null) {
    flagged_content = [];
  }
  const intl = tmp2(1114).intl;
  const intl2 = tmp2(1114).intl;
  const stringResult = intl.string(util.t["C5q+pW"]);
  const items3 = [timestampProducer(AppealIngestionModal.AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(util.t["G2g/g5"]) }), ];
  obj = { style: tmp.container, children: null };
  obj = { reasons: null };
  const stringResult1 = intl2.string(util.t["G2g/g5"]);
  const tmp12 = View;
  const tmp14 = AppealIngestionBreadcrumbsDefault;
  const items4 = [SafetyHubUtils.getAppealSignalDisplayText(stateFromStores1), stateFromStores2];
  obj.reasons = items4.filter((item) => item.length > 0);
  const items5 = [timestampProducer(tmp14, obj), , , ];
  if (!isDsaEligible) {
    items5[1] = isDsaEligible;
    let tmp11Result = flagged_content.length > 0;
    if (tmp11Result) {
      obj1 = { flaggedContent: flagged_content };
      tmp11Result = tmp11(tmp13(11889), obj1);
    }
    const obj2 = { children: null };
    items5[2] = tmp11Result;
    const obj3 = { classification: safetyHubClassification.classification };
    items5[3] = tmp11(tmp13(11899), obj3);
    obj.children = items5;
    items3[1] = tmp10(tmp12, obj);
    obj2.children = items3;
    return tmp10(tmp2(11886).AppealIngestionModalScreen, obj2);
  } else {
    const obj4 = {
      variant: "heading-md/normal",
      color: "text-link",
      style: tmp.detailsAction,
      onPress() {
          require("ActionSheetActionCreators");
          let obj = {
            onSave(userInput) {
              closure_1_1(573);
              const obj = { type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput };
              obj.dispatch(obj);
              closure_1_1(4527).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
            },
            onClose() {
              return closure_1_1(4527).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
            }
          };
          return obj.openLazy(require("asyncRequireImpl")(paths[14], paths.paths), "AppealIngestionFreeTextAppealReasonActionSheet", obj);
        },
      children: null
    };
    if (stateFromStores2.length > 0) {
      const intl4 = tmp2(1114).intl;
      let stringResult2 = intl4.string(tmp2(1114).t.tnE3bZ);
    } else {
      const intl3 = tmp2(1114).intl;
      stringResult2 = intl3.string(tmp2(1114).t.uoQFIp);
    }
    obj4.children = stringResult2;
    tmp11Result = tmp11(tmp2(4556).Text, obj4);
  }
};