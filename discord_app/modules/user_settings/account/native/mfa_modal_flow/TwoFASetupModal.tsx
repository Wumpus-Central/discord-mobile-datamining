// === Module 14583: TwoFASetupModal ===

// Module 14583 (TwoFASetupModal)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import useInitialValueDefault from "useInitialValue" /* 5991 */;
import Navigator2 from "Navigator" /* 6503 */;
import TwoFASetupModalActionCreatorsDefault from "TwoFASetupModalActionCreators" /* 14582 */;
import TwoFAConstants from "TwoFAConstants" /* 14584 */;
import TwoFASetupScanDefault from "TwoFASetupScan" /* 14589 */;
import TwoFASetupEnterCodeDefault from "TwoFASetupEnterCode" /* 14590 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children, closure_0, navigation;

let metroImportDefault;
let metroRequire;
let obj2;
function render() {
  return closure_1_6(closure_1_1(closure_1_2[16]), {});
}
function headerTitle() {
  return null;
}
const render2 = function render() {
  return closure_1_6(closure_1_1(closure_1_2[19]), {});
};
const View = react_native.View;
const TwoFAModalSetupSections = TwoFAConstants.TwoFAModalSetupSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: obj2, floatingButton: { position: "absolute", bottom: 12, left: 12, right: 12 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_8 = createStyles.createStyles(obj);
let closure_9 = { [TwoFAModalSetupSections.LANDING]: 1, [TwoFAModalSetupSections.SCAN]: 2, [TwoFAModalSetupSections.ENTER_CODE]: 3 };
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let Button;
  let items;
  let obj6;
  let stringResult;
  let obj = navigation(576);
  const cResult = obj.c(12);
  children = children.children;
  const tmp4 = closure_8();
  const obj2 = navigation(1490);
  navigation = obj2.useNavigation();
  const obj3 = navigation(1491);
  const name = obj3.useRoute().name;
  if (cResult[0] === navigation) {
    let tmp8;
    if (cResult[1] === name) {
      tmp8 = cResult[2];
    }
    if (cResult[3] === name !== tmp7) {
      if (cResult[4] === tmp8) {
        if (cResult[5] === name) {
          let tmp10;
          if (cResult[6] === tmp4.floatingButton) {
            tmp10 = cResult[7];
          }
          if (cResult[8] === children) {
            if (cResult[9] === tmp4.container) {
              let tmp14;
              if (cResult[10] === tmp10) {
                tmp14 = cResult[11];
              }
              return tmp14;
            }
          }
          const obj4 = { style: tmp4.container, children: items };
          items = [children, tmp10];
          const tmp17 = closure_7(View, obj4);
          cResult[8] = children;
          cResult[9] = tmp4.container;
          cResult[10] = tmp10;
          cResult[11] = tmp17;
          tmp14 = tmp17;
        }
      }
    }
    let tmp12Result = tmp9;
    if (tmp12Result) {
      const obj5 = { bottom: true, style: tmp4.floatingButton, children: closure_6(Button, obj6) };
      const SafeAreaPaddingView = tmp(6626).SafeAreaPaddingView;
      obj6 = { onPress: tmp8, text: stringResult };
      Button = tmp(5601).Button;
      if (name === tmp6.SUCCESS) {
        const intl2 = tmp(1126).intl;
        stringResult = intl2.string(tmp(1126).t.i4jeWR);
      } else {
        const intl = tmp(1126).intl;
        stringResult = intl.string(tmp(1126).t.XiOHRX);
      }
      tmp12Result = closure_6(SafeAreaPaddingView, obj5);
    }
    cResult[3] = name !== tmp7;
    cResult[4] = tmp8;
    cResult[5] = name;
    cResult[6] = tmp4.floatingButton;
    cResult[7] = tmp12Result;
    tmp10 = tmp12Result;
  }
  const fn = function l() {
    if (name === TwoFAModalSetupSections.LANDING) {
      navigation.push(TwoFAModalSetupSections.SCAN);
    } else if (name === TwoFAModalSetupSections.SCAN) {
      navigation.push(TwoFAModalSetupSections.ENTER_CODE);
    } else if (name === TwoFAModalSetupSections.ENTER_CODE) {
      navigation.push(TwoFAModalSetupSections.SUCCESS);
    } else {
      const obj = TwoFASetupModalActionCreatorsDefault;
      obj.close();
    }
  };
  cResult[0] = navigation;
  cResult[1] = name;
  cResult[2] = fn;
  tmp8 = fn;
}) : ((children) => {
  let Button;
  let items1;
  let obj5;
  let stringResult;
  navigation = undefined;
  children = children.children;
  const tmp = closure_8();
  let obj = navigation(1490);
  navigation = obj.useNavigation();
  const obj2 = navigation(1491);
  const name = obj2.useRoute().name;
  let tmp10Result = name !== TwoFAModalSetupSections.ENTER_CODE;
  const items = [navigation, name];
  const obj3 = { style: tmp.container, children: items1 };
  items1 = [children, ];
  if (tmp10Result) {
    const obj4 = { bottom: true, style: tmp.floatingButton, children: closure_6(Button, obj5) };
    const SafeAreaPaddingView = tmp2(6626).SafeAreaPaddingView;
    obj5 = { onPress: tmp7, text: stringResult };
    Button = tmp2(5601).Button;
    if (name === TwoFAModalSetupSections.SUCCESS) {
      const intl2 = tmp2(1126).intl;
      stringResult = intl2.string(tmp2(1126).t.i4jeWR);
    } else {
      const intl = tmp2(1126).intl;
      stringResult = intl.string(tmp2(1126).t.XiOHRX);
    }
    tmp10Result = closure_6(SafeAreaPaddingView, obj4);
  }
  items1[1] = tmp10Result;
  return closure_7(View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((initialRouteName) => {
  let first;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(5);
  let LANDING = initialRouteName.initialRouteName;
  if (undefined === LANDING) {
    LANDING = TwoFAModalSetupSections.LANDING;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      let obj4;
      let obj6;
      const obj = closure_0(closure_2[20]);
      closure_0 = obj.generateTotpSecret();
      const obj2 = {};
      const LANDING = constants.LANDING;
      const obj3 = {
        headerLeft: obj4.getHeaderCloseButton(closure_1(closure_2[10]).close),
        headerTitle() {
          const LANDING = constants.LANDING;
          const obj = { currentPage: closure_1_9[LANDING], numMarkers: Object.keys(closure_1_9).length - 1 };
          return closure_1_6(totpSecret(closure_1_2[14]).PageMarker, obj);
        },
        render
      };
      obj2[LANDING] = obj3;
      obj2[constants.SCAN] = {
        headerTitle() {
          const SCAN = constants.SCAN;
          const obj = { currentPage: closure_1_9[SCAN], numMarkers: Object.keys(closure_1_9).length - 1 };
          return closure_1_6(totpSecret(closure_1_2[14]).PageMarker, obj);
        },
        render() {
          const obj = { totpSecret };
          return closure_2_6(TwoFASetupScanDefault, obj);
        }
      };
      obj2[constants.ENTER_CODE] = {
        headerTitle() {
          const ENTER_CODE = constants.ENTER_CODE;
          const obj = { currentPage: closure_1_9[ENTER_CODE], numMarkers: Object.keys(closure_1_9).length - 1 };
          return closure_1_6(totpSecret(closure_1_2[14]).PageMarker, obj);
        },
        render() {
          const obj = { totpSecret };
          return closure_2_6(TwoFASetupEnterCodeDefault, obj);
        }
      };
      obj4 = closure_0(closure_2[15]);
      const SUCCESS = constants.SUCCESS;
      const obj5 = { headerLeft: obj6.getHeaderCloseButton(closure_1(closure_2[10]).close), headerTitle, render: render2 };
      obj2[SUCCESS] = obj5;
      obj6 = closure_0(closure_2[15]);
      return obj2;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = useInitialValueDefault(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t["13/7kX"]);
    cResult[1] = stringResult;
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === LANDING) {
    let tmp9;
    if (cResult[3] === tmp6) {
      tmp9 = cResult[4];
    }
    return tmp9;
  }
  const tmp10 = metroRequire(Navigator2.Navigator, { initialRouteName: LANDING, screens: tmp6, headerBackTitle: tmp7, headerTitleAlign: "center" });
  cResult[2] = LANDING;
  cResult[3] = tmp6;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((initialRouteName) => {
  let intl;
  const f117479 = () => {
    let obj4;
    let obj6;
    let totpSecret;
    let obj = totpSecret(closure_2[20]);
    totpSecret = obj.generateTotpSecret();
    const obj2 = {};
    let LANDING = constants.LANDING;
    const obj3 = {
      headerLeft: obj4.getHeaderCloseButton(closure_1(closure_2[10]).close),
      headerTitle() {
        const LANDING = constants.LANDING;
        const obj = { currentPage: closure_1_9[LANDING], numMarkers: Object.keys(closure_1_9).length - 1 };
        return closure_1_6(totpSecret(closure_1_2[14]).PageMarker, obj);
      },
      render
    };
    obj2[LANDING] = obj3;
    obj2[constants.SCAN] = {
      headerTitle() {
        const SCAN = constants.SCAN;
        const obj = { currentPage: closure_1_9[SCAN], numMarkers: Object.keys(closure_1_9).length - 1 };
        return closure_1_6(totpSecret(closure_1_2[14]).PageMarker, obj);
      },
      render() {
        const obj = { totpSecret };
        return closure_2_6(TwoFASetupScanDefault, obj);
      }
    };
    obj2[constants.ENTER_CODE] = {
      headerTitle() {
        const ENTER_CODE = constants.ENTER_CODE;
        const obj = { currentPage: closure_1_9[ENTER_CODE], numMarkers: Object.keys(closure_1_9).length - 1 };
        return closure_1_6(totpSecret(closure_1_2[14]).PageMarker, obj);
      },
      render() {
        const obj = { totpSecret };
        return closure_2_6(TwoFASetupEnterCodeDefault, obj);
      }
    };
    obj4 = totpSecret(closure_2[15]);
    const SUCCESS = constants.SUCCESS;
    const obj5 = { headerLeft: obj6.getHeaderCloseButton(closure_1(closure_2[10]).close), headerTitle, render: render2 };
    obj2[SUCCESS] = obj5;
    obj6 = totpSecret(closure_2[15]);
    return obj2;
  };
  let LANDING = initialRouteName.initialRouteName;
  if (LANDING === undefined) {
    LANDING = TwoFAModalSetupSections.LANDING;
  }
  let obj = { initialRouteName: LANDING, screens: useInitialValueDefault(f117479), headerBackTitle: intl.string(intl3.t["13/7kX"]), headerTitleAlign: "center" };
  useInitialValueDefault(f117479);
  const Navigator = Navigator2.Navigator;
  intl = intl3.intl;
  return metroRequire(Navigator, obj);
});
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModal.tsx");

export default tmp4;
export const TwoFASetupModalScreen = tmp3;