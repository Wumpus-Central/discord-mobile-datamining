// discord_app/modules/devtools/native/components/screens/DevToolsAgeVerificationScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowArrow from "../../../../../design/components/TableRow/native/TableRowArrow.native.tsx";
import TableRowGroup from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import KeyIcon from "../../../../../design/components/Icon/native/redesign/generated/KeyIcon.tsx";
import AgeVerificationActionCreatorsDefault from "../../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import AgeVerificationURLActionCreators from "../../../../age_assurance/AgeVerificationURLActionCreators.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function showAgeVerificationTestModal() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_9 = async function _showAgeVerificationTestModal() {
  closure_1 = tmp3;
  let obj2 = AgeVerificationURLActionCreators;
  await obj2.requestAgeVerification({});
  if (1 === tmp7) {
    c3 = 0;
    closure_129_1(closure_129_2[8]).open({
      content: "Failed to show age verification test modal",
      key: "age-verification-test-failure",
    });
    c5 = 3;
    closure_129_1(closure_129_2[8]);
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_128_0 = value;
    obj2 = {
      webviewUrl: closure_128_0.verification_webview_url,
      verificationRequestId: closure_128_0.verification_request_id,
      verificationVendorName: closure_128_0.verification_vendor_name,
      incodeParameters: closure_128_0.incode_parameters,
      onComplete() {
        closure_1_1(closure_1_2[8]).open({
          content: "[On Complete] Successfully age verified",
          key: "age-verification-test-success",
        });
      },
      entryPoint: closure_129_0(closure_129_2[9]).AgeVerificationModalEntryPoint.DEV_TOOLS_QUICK_ACTIONS,
    };
    closure_129_1(closure_129_2[7]).showAgeVerification(obj2);
    c3 = 0;
    closure_129_1(closure_129_2[7]);
  }
  return value;
};
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, content: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.content = { padding: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/devtools/native/components/screens/DevToolsAgeVerificationScreen.tsx",
);

export default function DevToolsAgeVerificationScreen() {
  const tmp = closure_7();
  let obj = { style: tmp.container, contentContainerStyle: null, children: null };
  const items = [tmp.content];
  obj = { paddingBottom: tmp.content.padding + useSafeAreaInsetsDefault().bottom };
  items[1] = obj;
  obj.contentContainerStyle = items;
  obj = { title: "Quick Actions", hasIcons: true, children: null };
  const items1 = [
    hasOwnProperty(TableRow.TableRow, {
      label: "Launch Age Verification Test Tool",
      onPress: showAgeVerificationTestModal,
      icon: hasOwnProperty(KeyIcon.KeyIcon, {}),
      trailing: hasOwnProperty(TableRowArrow.TableRowArrow, {}),
    }),
  ];
  const obj1 = {
    label: "Launch Age Verification Test Tool",
    onPress: showAgeVerificationTestModal,
    icon: hasOwnProperty(KeyIcon.KeyIcon, {}),
    trailing: hasOwnProperty(TableRowArrow.TableRowArrow, {}),
  };
  items1[1] = hasOwnProperty(TableRow.TableRow, {
    label: "Launch Age Verification Modal",
    onPress() {
      const obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.DEV_TOOLS_QUICK_ACTIONS };
      return obj.showAgeVerificationGetStartedModal(obj);
    },
    icon: hasOwnProperty(KeyIcon.KeyIcon, {}),
    trailing: hasOwnProperty(TableRowArrow.TableRowArrow, {}),
  });
  obj.children = items1;
  obj.children = timestampProducer(TableRowGroup.TableRowGroup, obj);
  return hasOwnProperty(ScrollView, obj);
}
