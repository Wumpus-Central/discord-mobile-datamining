// === Module 15603: DevToolsAgeVerificationScreen ===

// Module 15603 (DevToolsAgeVerificationScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import TableRow3 from "TableRow" /* 6000 */;
import TableRowArrow from "TableRowArrow" /* 6007 */;
import TableRowGroup2 from "TableRowGroup" /* 6081 */;
import KeyIcon from "KeyIcon" /* 6453 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8117 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8119 */;
import AgeVerificationURLActionCreators from "AgeVerificationURLActionCreators" /* 8124 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c4, c5;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function showAgeVerificationTestModal() {
  return obj(...arguments);
}
let obj = function _showAgeVerificationTestModal() {
  obj = _asyncToGenerator(async () => {
    let obj3;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_1 = tmp;
            closure_0 = undefined;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj6 = { value: obj3.requestAgeVerification({}), done: false };
            obj3 = AgeVerificationURLActionCreators;
            return obj6;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            const obj2 = closure_129_1(closure_129_2[8]);
            const openResult = obj2.open({ content: "Failed to show age verification test modal", key: "age-verification-test-failure" });
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = value;
            const obj7 = {
              webviewUrl: closure_0.verification_webview_url,
              verificationRequestId: closure_0.verification_request_id,
              verificationVendorName: closure_0.verification_vendor_name,
              incodeParameters: closure_0.incode_parameters,
              onComplete() {
                        obj = closure_1_1(closure_1_2[8]);
                        obj.open({ content: "[On Complete] Successfully age verified", key: "age-verification-test-success" });
                      },
              entryPoint: closure_129_0(closure_129_2[9]).AgeVerificationModalEntryPoint.DEV_TOOLS_QUICK_ACTIONS
            };
            const showAgeVerification = closure_129_1(closure_129_2[7]).showAgeVerification;
            const tmp22 = closure_129_1(closure_129_2[7]);
            showAgeVerification(obj7);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp12) {
        let closure_2 = tmp12;
        if (0 === c3) {
          c5 = 3;
          throw tmp12;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const ScrollView = react_native.ScrollView;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
obj = { container: obj2, content: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items;
  let tmp6;
  obj = react2;
  const cResult = obj.c(10);
  const tmp4 = closure_7();
  const sum = tmp4.content.padding + useSafeAreaInsetsDefault().bottom;
  if (cResult[0] !== sum) {
    let obj2 = { paddingBottom: sum };
    cResult[0] = sum;
    cResult[1] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp4.content) {
    let tmp7;
    let tmp9;
    let tmp13;
    if (cResult[3] === tmp6) {
      tmp7 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { label: "Launch Age Verification Test Tool", onPress: showAgeVerificationTestModal, icon: hasOwnProperty(KeyIcon.KeyIcon, {}), trailing: hasOwnProperty(TableRowArrow.TableRowArrow, {}) };
      const TableRow = TableRow3.TableRow;
      const tmp12 = hasOwnProperty(TableRow, obj3);
      cResult[5] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { title: "Quick Actions", hasIcons: true, children: items };
      items = [tmp9, ];
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      const obj5 = {
        label: "Launch Age Verification Modal",
        onPress() {
              obj = AgeVerificationActionCreatorsDefault;
              const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.DEV_TOOLS_QUICK_ACTIONS };
              return obj.showAgeVerificationGetStartedModal(obj2);
            },
        icon: hasOwnProperty(KeyIcon.KeyIcon, {}),
        trailing: hasOwnProperty(TableRowArrow.TableRowArrow, {})
      };
      const TableRow2 = TableRow3.TableRow;
      items[1] = hasOwnProperty(TableRow2, obj5);
      const tmp16 = metroRequire(TableRowGroup, obj4);
      cResult[6] = tmp16;
      tmp13 = tmp16;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] === tmp4.container) {
      let tmp17;
      if (cResult[8] === tmp7) {
        tmp17 = cResult[9];
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
}) : (() => {
  let TableRowGroup;
  let items;
  let items1;
  let obj3;
  const tmp = closure_7();
  obj = { style: tmp.container, contentContainerStyle: items, children: metroRequire(TableRowGroup, obj3) };
  items = [tmp.content, ];
  let obj2 = { paddingBottom: tmp.content.padding + useSafeAreaInsetsDefault().bottom };
  items[1] = obj2;
  obj3 = { title: "Quick Actions", hasIcons: true, children: items1 };
  TableRowGroup = TableRowGroup2.TableRowGroup;
  const obj4 = { label: "Launch Age Verification Test Tool", onPress: showAgeVerificationTestModal, icon: hasOwnProperty(KeyIcon.KeyIcon, {}), trailing: hasOwnProperty(TableRowArrow.TableRowArrow, {}) };
  const TableRow = TableRow3.TableRow;
  items1 = [hasOwnProperty(TableRow, obj4), ];
  const obj5 = {
    label: "Launch Age Verification Modal",
    onPress() {
      obj = AgeVerificationActionCreatorsDefault;
      const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.DEV_TOOLS_QUICK_ACTIONS };
      return obj.showAgeVerificationGetStartedModal(obj2);
    },
    icon: hasOwnProperty(KeyIcon.KeyIcon, {}),
    trailing: hasOwnProperty(TableRowArrow.TableRowArrow, {})
  };
  const TableRow2 = TableRow3.TableRow;
  items1[1] = hasOwnProperty(TableRow2, obj5);
  return hasOwnProperty(ScrollView, obj);
});
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAgeVerificationScreen.tsx");

export default tmp5;