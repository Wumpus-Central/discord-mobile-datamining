// discord_app/modules/safety_hub/native/AppealIngestionConfirmSubmission.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import SafetyHubUtils from "../SafetyHubUtils.tsx";
import useSafetyHubClassifications from "../hooks/useSafetyHubClassifications.tsx";
import AppealIngestionModal from "AppealIngestionModal.tsx";
import AppealIngestionActivitySummaryDefault from "AppealIngestionActivitySummary.tsx";
import AppealIngestionPolicySummaryDefault from "AppealIngestionPolicySummary.tsx";
import AppealIngestionBreadcrumbsDefault from "AppealIngestionBreadcrumbs.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SafetyHubStore from "../SafetyHubStore.tsx";

require = fn;
const View = fn(17).View;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({
  container: { flex: 1, paddingHorizontal: 16 },
  detailsAction: { marginBottom: 16 },
});
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
  let tmp2Result = initialize;
  const items1 = [SafetyHubStore];
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => SafetyHubStore.getAppealSignal());
  tmp2Result = initialize;
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
  const intl = util.intl;
  const intl2 = util.intl;
  const stringResult = intl.string(util.t["C5q+pW"]);
  const items3 = [
    timestampProducer(AppealIngestionModal.AppealIngestionModalHeader, {
      headerText: stringResult,
      subHeaderText: intl2.string(util.t["G2g/g5"]),
    }),
  ];
  obj = { style: tmp.container, children: null };
  obj = { reasons: null };
  const stringResult1 = intl2.string(util.t["G2g/g5"]);
  const tmp14 = AppealIngestionBreadcrumbsDefault;
  const items4 = [SafetyHubUtils.getAppealSignalDisplayText(stateFromStores1), stateFromStores2];
  obj.reasons = items4.filter((item) => item.length > 0);
  const items5 = [timestampProducer(tmp14, obj), , ,];
  if (!isDsaEligible) {
    items5[1] = isDsaEligible;
    let tmp11Result = flagged_content.length > 0;
    if (tmp11Result) {
      obj1 = { flaggedContent: flagged_content };
      tmp11Result = timestampProducer(AppealIngestionActivitySummaryDefault, obj1);
    }
    const obj2 = { children: null };
    items5[2] = tmp11Result;
    const obj3 = { classification: safetyHubClassification.classification };
    items5[3] = timestampProducer(AppealIngestionPolicySummaryDefault, obj3);
    obj.children = items5;
    items3[1] = React5(View, obj);
    obj2.children = items3;
    return React5(AppealIngestionModal.AppealIngestionModalScreen, obj2);
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
          },
        };
        return obj.openLazy(
          require("asyncRequireImpl")(paths[14], paths.paths),
          "AppealIngestionFreeTextAppealReasonActionSheet",
          obj,
        );
      },
      children: null,
    };
    if (stateFromStores2.length > 0) {
      const intl4 = util.intl;
      let stringResult2 = intl4.string(util.t.tnE3bZ);
    } else {
      const intl3 = util.intl;
      stringResult2 = intl3.string(util.t.uoQFIp);
    }
    obj4.children = stringResult2;
    tmp11Result = timestampProducer(Text_Text.Text, obj4);
  }
  const tmp2Result1 = SafetyHubUtils;
}
