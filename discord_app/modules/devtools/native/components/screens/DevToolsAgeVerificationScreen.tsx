// === Module 15998: DevToolsAgeVerificationScreen ===

// Module 15998 (DevToolsAgeVerificationScreen)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5916 */;
import TableRow from "TableRow" /* 6186 */;
import TableRowArrow from "TableRowArrow" /* 6195 */;
import TableRowGroup from "TableRowGroup" /* 6269 */;
import KeyIcon from "KeyIcon" /* 6638 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7497 */;
import AgeVerificationURLActionCreators from "AgeVerificationURLActionCreators" /* 7510 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

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
  await AgeVerificationURLActionCreators.requestAgeVerification({});
  if (1 === tmp7) {
    c3 = 0;
    closure_129_1(closure_129_2[8]).open({ content: "Failed to show age verification test modal", key: "age-verification-test-failure" });
    c5 = 3;
    closure_129_1(closure_129_2[8]);
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_128_0 = value;
    closure_129_1(closure_129_2[7]).showAgeVerification({
      webviewUrl: closure_128_0.verification_webview_url,
      verificationRequestId: closure_128_0.verification_request_id,
      verificationVendorName: closure_128_0.verification_vendor_name,
      incodeParameters: closure_128_0.incode_parameters,
      onComplete() {
          closure_1_1(closure_1_2[8]).open({ content: "[On Complete] Successfully age verified", key: "age-verification-test-success" });
        },
      entryPoint: closure_129_0(closure_129_2[9]).AgeVerificationModalEntryPoint.DEV_TOOLS_QUICK_ACTIONS
    });
    c3 = 0;
    closure_129_1(closure_129_2[7]);
    {
      webviewUrl: closure_128_0.verification_webview_url,
      verificationRequestId: closure_128_0.verification_request_id,
      verificationVendorName: closure_128_0.verification_vendor_name,
      incodeParameters: closure_128_0.incode_parameters,
      onComplete() {
          closure_1_1(closure_1_2[8]).open({ content: "[On Complete] Successfully age verified", key: "age-verification-test-success" });
        },
      entryPoint: closure_129_0(closure_129_2[9]).AgeVerificationModalEntryPoint.DEV_TOOLS_QUICK_ACTIONS
    };
  }
  return value;
};
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { padding: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAgeVerificationScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DevToolsAgeVerificationScreen() {
  const cResult = c.c(10);
  const tmp4 = closure_7();
  const sum = tmp4.content.padding + useSafeAreaInsetsDefault().bottom;
  if (cResult[0] !== sum) {
    const obj2 = { paddingBottom: sum };
    cResult[0] = sum;
    cResult[1] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp4.content) {
    if (cResult[3] === tmp6) {
      let tmp7 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { label: "Launch Age Verification Test Tool", onPress: showAgeVerificationTestModal, icon: hasOwnProperty(KeyIcon.KeyIcon, {}), trailing: hasOwnProperty(TableRowArrow.TableRowArrow, {}) };
      const tmp12 = hasOwnProperty(TableRow.TableRow, obj3);
      cResult[5] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { title: "Quick Actions", hasIcons: true, children: null };
      const items = [tmp9, ];
      const obj5 = {
        label: "Launch Age Verification Modal",
        onPress() {
              const obj = AgeVerificationActionCreatorsDefault;
              return obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.DEV_TOOLS_QUICK_ACTIONS });
            },
        icon: hasOwnProperty(KeyIcon.KeyIcon, {}),
        trailing: hasOwnProperty(TableRowArrow.TableRowArrow, {})
      };
      items[1] = hasOwnProperty(TableRow.TableRow, obj5);
      obj4.children = items;
      const tmp16 = timestampProducer(TableRowGroup.TableRowGroup, obj4);
      cResult[6] = tmp16;
      let tmp13 = tmp16;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] === tmp4.container) {
      if (cResult[8] === tmp7) {
        let tmp17 = cResult[9];
      }
      return tmp17;
    }
    const obj6 = { style: tmp4.container, contentContainerStyle: tmp7, children: tmp13 };
    const tmp20 = hasOwnProperty(ScrollView, obj6);
    cResult[7] = tmp4.container;
    cResult[8] = tmp7;
    cResult[9] = tmp20;
    tmp17 = tmp20;
  }
  const items1 = [tmp4.content, tmp6];
  cResult[2] = tmp4.content;
  cResult[3] = tmp6;
  cResult[4] = items1;
  tmp7 = items1;
}) : (function DevToolsAgeVerificationScreen() {
  const tmp = closure_7();
  let obj = { style: tmp.container, contentContainerStyle: null, children: null };
  const items = [tmp.content, { paddingBottom: tmp.content.padding + useSafeAreaInsetsDefault().bottom }];
  obj.contentContainerStyle = items;
  const obj3 = { title: "Quick Actions", hasIcons: true, children: null };
  const obj2 = { paddingBottom: tmp.content.padding + useSafeAreaInsetsDefault().bottom };
  const items1 = [hasOwnProperty(TableRow.TableRow, { label: "Launch Age Verification Test Tool", onPress: showAgeVerificationTestModal, icon: hasOwnProperty(KeyIcon.KeyIcon, {}), trailing: hasOwnProperty(TableRowArrow.TableRowArrow, {}) }), ];
  const obj4 = { label: "Launch Age Verification Test Tool", onPress: showAgeVerificationTestModal, icon: hasOwnProperty(KeyIcon.KeyIcon, {}), trailing: hasOwnProperty(TableRowArrow.TableRowArrow, {}) };
  items1[1] = hasOwnProperty(TableRow.TableRow, {
    label: "Launch Age Verification Modal",
    onPress() {
      const obj = AgeVerificationActionCreatorsDefault;
      return obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.DEV_TOOLS_QUICK_ACTIONS });
    },
    icon: hasOwnProperty(KeyIcon.KeyIcon, {}),
    trailing: hasOwnProperty(TableRowArrow.TableRowArrow, {})
  });
  obj3.children = items1;
  obj.children = timestampProducer(TableRowGroup.TableRowGroup, obj3);
  return hasOwnProperty(ScrollView, obj);
});