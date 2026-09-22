// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModal.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import useInitialValueDefault from "../../../../../hooks/useInitialValue.tsx";
import Navigator from "../../../../../design/components/Navigator/native/Navigator.native.tsx";
import TwoFASetupModalActionCreatorsDefault from "TwoFASetupModalActionCreators.tsx";
import TwoFASetupScanDefault from "TwoFASetupScan.tsx";
import TwoFASetupEnterCodeDefault from "TwoFASetupEnterCode.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const TwoFAModalSetupSections = fn(15067).TwoFAModalSetupSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  floatingButton: { position: "absolute", bottom: 12, left: 12, right: 12 },
};
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = {
  [TwoFAModalSetupSections.LANDING]: 1,
  [TwoFAModalSetupSections.SCAN]: 2,
  [TwoFAModalSetupSections.ENTER_CODE]: 3,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModal.tsx");

export default function TwoFASetupModal(initialRouteName) {
  let LANDING = initialRouteName.initialRouteName;
  if (LANDING === undefined) {
    LANDING = TwoFAModalSetupSections.LANDING;
  }
  let obj = {
    initialRouteName: LANDING,
    screens: useInitialValueDefault(() => {
      totpSecret = totpSecret(7196).generateTotpSecret();
      const obj2 = {};
      const obj3 = { headerLeft: null, headerTitle: null, render: null };
      const obj = totpSecret(7196);
      obj3.headerLeft = totpSecret(5843).getHeaderCloseButton(closure_1(15065).close);
      obj3.headerTitle = function headerTitle() {
        return closure_1_6(totpSecret(15068).PageMarker, {
          currentPage: dependencyMap2[constants.LANDING],
          numMarkers: Object.keys(dependencyMap2).length - 1,
        });
      };
      obj3.render = function render() {
        return closure_1_6(closure_1_1(15069), {});
      };
      obj2[constants.LANDING] = obj3;
      obj2[constants.SCAN] = {
        headerTitle() {
          return closure_1_6(totpSecret(15068).PageMarker, {
            currentPage: dependencyMap2[constants.SCAN],
            numMarkers: Object.keys(dependencyMap2).length - 1,
          });
        },
        render() {
          return closure_2_6(TwoFASetupScanDefault, { totpSecret });
        },
      };
      obj2[constants.ENTER_CODE] = {
        headerTitle() {
          return closure_1_6(totpSecret(15068).PageMarker, {
            currentPage: dependencyMap2[constants.ENTER_CODE],
            numMarkers: Object.keys(dependencyMap2).length - 1,
          });
        },
        render() {
          return closure_2_6(TwoFASetupEnterCodeDefault, { totpSecret });
        },
      };
      const obj5 = { headerLeft: null, headerTitle: null, render: null };
      const obj4 = totpSecret(5843);
      obj5.headerLeft = totpSecret(5843).getHeaderCloseButton(closure_1(15065).close);
      obj5.headerTitle = function headerTitle() {
        return null;
      };
      obj5.render = function render() {
        return closure_1_6(closure_1_1(15075), {});
      };
      obj2[constants.SUCCESS] = obj5;
      return obj2;
    }),
    headerBackTitle: null,
    headerTitleAlign: "center",
  };
  const intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  return timestampProducer(Navigator.Navigator, obj);
}
export const TwoFASetupModalScreen = function TwoFASetupModalScreen(children) {
  let navigation;
  const tmp = closure_8();
  let i4jeWR = dependencyMap;
  navigation = navigation(1484).useNavigation();
  let obj = navigation(1484);
  const name = navigation(1485).useRoute().name;
  const items = [navigation, name];
  const obj3 = { style: tmp.container, children: null };
  const items1 = [children.children];
  if (name === TwoFAModalSetupSections.ENTER_CODE) {
    items1[1] = tmp5;
    obj3.children = items1;
    return tmp7(tmp8, obj3);
  } else {
    const obj4 = { bottom: true, style: tmp.floatingButton, children: null };
    let obj5 = { onPress: tmp6, text: null };
    if (name === TwoFAModalSetupSections.SUCCESS) {
      const intl2 = tmp2(1115).intl;
      i4jeWR = tmp2(1115).t.i4jeWR;
      let stringResult = intl2.string(i4jeWR);
    } else {
      const intl = tmp2(1115).intl;
      stringResult = intl.string(tmp2(1115).t.XiOHRX);
    }
    obj5.text = stringResult;
    obj5 = closure_6(tmp2(5187).Button, obj5);
    obj4.children = obj5;
    closure_6(tmp2(7370).SafeAreaPaddingView, obj4);
  }
  const obj2 = navigation(1485);
};
