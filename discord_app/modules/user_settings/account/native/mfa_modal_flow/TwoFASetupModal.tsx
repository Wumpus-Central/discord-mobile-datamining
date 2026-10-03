// === Module 14563: TwoFASetupModal ===

// Module 14563 (TwoFASetupModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useInitialValueDefault from "useInitialValue" /* 5984 */;
import Navigator from "Navigator" /* 6496 */;
import TwoFASetupModalActionCreatorsDefault from "TwoFASetupModalActionCreators" /* 14562 */;
import TwoFASetupScanDefault from "TwoFASetupScan" /* 14569 */;
import TwoFASetupEnterCodeDefault from "TwoFASetupEnterCode" /* 14570 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const TwoFAModalSetupSections = fn(14564).TwoFAModalSetupSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, floatingButton: { position: "absolute", bottom: 12, left: 12, right: 12 } };
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = { [TwoFAModalSetupSections.LANDING]: 1, [TwoFAModalSetupSections.SCAN]: 2, [TwoFAModalSetupSections.ENTER_CODE]: 3 };
fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let i4jeWR = dependencyMap;
  const cResult = navigation(576).c(12);
  children = children.children;
  const tmp3 = closure_8();
  let obj = navigation(576);
  navigation = navigation(1490).useNavigation();
  const obj2 = navigation(1490);
  const name = navigation(1491).useRoute().name;
  if (cResult[0] === navigation) {
    if (cResult[1] === name) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] === name !== tmp6) {
      if (cResult[4] === tmp7) {
        if (cResult[5] === name) {
          if (cResult[6] === tmp3.floatingButton) {
            let tmp9 = cResult[7];
          }
          if (cResult[8] === children) {
            if (cResult[9] === tmp3.container) {
              if (cResult[10] === tmp9) {
                let tmp14 = cResult[11];
              }
              return tmp14;
            }
          }
          const obj4 = { style: tmp3.container, children: null };
          const items = [children, tmp9];
          obj4.children = items;
          const tmp17 = closure_7(View, obj4);
          cResult[8] = children;
          cResult[9] = tmp3.container;
          cResult[10] = tmp9;
          cResult[11] = tmp17;
          tmp14 = tmp17;
        }
      }
    }
    if (name === tmp6) {
      cResult[3] = tmp8;
      cResult[4] = tmp7;
      cResult[5] = name;
      cResult[6] = tmp3.floatingButton;
      cResult[7] = tmp8;
      tmp9 = tmp8;
    } else {
      const obj5 = { bottom: true, style: tmp3.floatingButton, children: null };
      let obj6 = { onPress: tmp7, text: null };
      if (name === tmp5.SUCCESS) {
        const intl2 = tmp(1126).intl;
        i4jeWR = tmp(1126).t.i4jeWR;
        let stringResult = intl2.string(i4jeWR);
      } else {
        const intl = tmp(1126).intl;
        stringResult = intl.string(tmp(1126).t.XiOHRX);
      }
      obj6.text = stringResult;
      obj6 = closure_6(tmp(5594).Button, obj6);
      obj5.children = obj6;
      closure_6(tmp(6619).SafeAreaPaddingView, obj5);
    }
  }
  const fn = function l() {
    if (name === TwoFAModalSetupSections.LANDING) {
      navigation.push(TwoFAModalSetupSections.SCAN);
    } else if (name === TwoFAModalSetupSections.SCAN) {
      navigation.push(TwoFAModalSetupSections.ENTER_CODE);
    } else if (name === TwoFAModalSetupSections.ENTER_CODE) {
      navigation.push(TwoFAModalSetupSections.SUCCESS);
    } else {
      TwoFASetupModalActionCreatorsDefault.close();
    }
  };
  cResult[0] = navigation;
  cResult[1] = name;
  cResult[2] = fn;
  tmp7 = fn;
  const obj3 = navigation(1491);
}) : ((children) => {
  let navigation;
  const tmp = closure_8();
  let i4jeWR = dependencyMap;
  navigation = navigation(1490).useNavigation();
  let obj = navigation(1490);
  const name = navigation(1491).useRoute().name;
  const items = [navigation, name];
  const obj3 = { style: tmp.container, children: null };
  const items1 = [children.children, ];
  if (name === TwoFAModalSetupSections.ENTER_CODE) {
    items1[1] = tmp5;
    obj3.children = items1;
    return tmp7(tmp8, obj3);
  } else {
    const obj4 = { bottom: true, style: tmp.floatingButton, children: null };
    let obj5 = { onPress: tmp6, text: null };
    if (name === TwoFAModalSetupSections.SUCCESS) {
      const intl2 = tmp2(1126).intl;
      i4jeWR = tmp2(1126).t.i4jeWR;
      let stringResult = intl2.string(i4jeWR);
    } else {
      const intl = tmp2(1126).intl;
      stringResult = intl.string(tmp2(1126).t.XiOHRX);
    }
    obj5.text = stringResult;
    obj5 = closure_6(tmp2(5594).Button, obj5);
    obj4.children = obj5;
    closure_6(tmp2(6619).SafeAreaPaddingView, obj4);
  }
  const obj2 = navigation(1491);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((initialRouteName) => {
  const cResult = c.c(5);
  let LANDING = initialRouteName.initialRouteName;
  if (undefined === LANDING) {
    LANDING = TwoFAModalSetupSections.LANDING;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      closure_0 = closure_0(6439).generateTotpSecret();
      const obj2 = {};
      const obj3 = { headerLeft: null, headerTitle: null, render: null };
      const obj = closure_0(6439);
      obj3.headerLeft = closure_0(6010).getHeaderCloseButton(closure_1(14562).close);
      obj3.headerTitle = function headerTitle() {
        return closure_1_6(totpSecret(14565).PageMarker, { currentPage: dependencyMap2[constants.LANDING], numMarkers: Object.keys(dependencyMap2).length - 1 });
      };
      obj3.render = function render() {
        return closure_1_6(closure_1_1(14566), {});
      };
      obj2[constants.LANDING] = obj3;
      obj2[constants.SCAN] = {
        headerTitle() {
          return closure_1_6(totpSecret(14565).PageMarker, { currentPage: dependencyMap2[constants.SCAN], numMarkers: Object.keys(dependencyMap2).length - 1 });
        },
        render() {
          return closure_2_6(TwoFASetupScanDefault, { totpSecret });
        }
      };
      obj2[constants.ENTER_CODE] = {
        headerTitle() {
          return closure_1_6(totpSecret(14565).PageMarker, { currentPage: dependencyMap2[constants.ENTER_CODE], numMarkers: Object.keys(dependencyMap2).length - 1 });
        },
        render() {
          return closure_2_6(TwoFASetupEnterCodeDefault, { totpSecret });
        }
      };
      const obj5 = { headerLeft: null, headerTitle: null, render: null };
      const obj4 = closure_0(6010);
      obj5.headerLeft = closure_0(6010).getHeaderCloseButton(closure_1(14562).close);
      obj5.headerTitle = function headerTitle() {
        return null;
      };
      obj5.render = function render() {
        return closure_1_6(closure_1_1(14573), {});
      };
      obj2[constants.SUCCESS] = obj5;
      return obj2;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = useInitialValueDefault(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["13/7kX"]);
    cResult[1] = stringResult;
    let tmp7 = stringResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === LANDING) {
    if (cResult[3] === tmp6) {
      let tmp9 = cResult[4];
    }
    return tmp9;
  }
  const tmp10 = timestampProducer(Navigator.Navigator, { initialRouteName: LANDING, screens: tmp6, headerBackTitle: tmp7, headerTitleAlign: "center" });
  cResult[2] = LANDING;
  cResult[3] = tmp6;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((initialRouteName) => {
  let LANDING = initialRouteName.initialRouteName;
  if (LANDING === undefined) {
    LANDING = TwoFAModalSetupSections.LANDING;
  }
  let obj = {
    initialRouteName: LANDING,
    screens: useInitialValueDefault(() => {
      totpSecret = totpSecret(6439).generateTotpSecret();
      const obj2 = {};
      const obj3 = { headerLeft: null, headerTitle: null, render: null };
      const obj = totpSecret(6439);
      obj3.headerLeft = totpSecret(6010).getHeaderCloseButton(closure_1(14562).close);
      obj3.headerTitle = function headerTitle() {
        return closure_1_6(totpSecret(14565).PageMarker, { currentPage: dependencyMap2[constants.LANDING], numMarkers: Object.keys(dependencyMap2).length - 1 });
      };
      obj3.render = function render() {
        return closure_1_6(closure_1_1(14566), {});
      };
      obj2[constants.LANDING] = obj3;
      obj2[constants.SCAN] = {
        headerTitle() {
          return closure_1_6(totpSecret(14565).PageMarker, { currentPage: dependencyMap2[constants.SCAN], numMarkers: Object.keys(dependencyMap2).length - 1 });
        },
        render() {
          return closure_2_6(TwoFASetupScanDefault, { totpSecret });
        }
      };
      obj2[constants.ENTER_CODE] = {
        headerTitle() {
          return closure_1_6(totpSecret(14565).PageMarker, { currentPage: dependencyMap2[constants.ENTER_CODE], numMarkers: Object.keys(dependencyMap2).length - 1 });
        },
        render() {
          return closure_2_6(TwoFASetupEnterCodeDefault, { totpSecret });
        }
      };
      const obj5 = { headerLeft: null, headerTitle: null, render: null };
      const obj4 = totpSecret(6010);
      obj5.headerLeft = totpSecret(6010).getHeaderCloseButton(closure_1(14562).close);
      obj5.headerTitle = function headerTitle() {
        return null;
      };
      obj5.render = function render() {
        return closure_1_6(closure_1_1(14573), {});
      };
      obj2[constants.SUCCESS] = obj5;
      return obj2;
    }),
    headerBackTitle: null,
    headerTitleAlign: "center"
  };
  const intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  return timestampProducer(Navigator.Navigator, obj);
});
export const TwoFASetupModalScreen = tmp3;