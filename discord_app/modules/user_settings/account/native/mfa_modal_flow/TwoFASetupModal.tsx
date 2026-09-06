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
const TwoFAModalSetupSections = fn(14783).TwoFAModalSetupSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, floatingButton: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.floatingButton = { position: "absolute", bottom: 12, left: 12, right: 12 };
let closure_8 = createStyles.createStyles(createStyles);
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
      let obj = totpSecret(6951);
      totpSecret = obj.generateTotpSecret();
      obj = {};
      obj = {
        headerLeft: totpSecret(5624).getHeaderCloseButton(closure_1(14781).close),
        headerTitle() {
          return closure_1_6(totpSecret(14784).PageMarker, {
            currentPage: dependencyMap2[constants.LANDING],
            numMarkers: Object.keys(dependencyMap2).length - 1,
          });
        },
        render() {
          return closure_1_6(closure_1_1(14785), {});
        },
      };
      obj[constants.LANDING] = obj;
      obj[constants.SCAN] = {
        headerTitle() {
          return closure_1_6(totpSecret(14784).PageMarker, {
            currentPage: dependencyMap2[constants.SCAN],
            numMarkers: Object.keys(dependencyMap2).length - 1,
          });
        },
        render() {
          return closure_2_6(TwoFASetupScanDefault, { totpSecret });
        },
      };
      obj[constants.ENTER_CODE] = {
        headerTitle() {
          return closure_1_6(totpSecret(14784).PageMarker, {
            currentPage: dependencyMap2[constants.ENTER_CODE],
            numMarkers: Object.keys(dependencyMap2).length - 1,
          });
        },
        render() {
          return closure_2_6(TwoFASetupEnterCodeDefault, { totpSecret });
        },
      };
      const obj1 = { headerLeft: null, headerTitle: null, render: null };
      const obj4 = totpSecret(5624);
      obj1.headerLeft = totpSecret(5624).getHeaderCloseButton(closure_1(14781).close);
      obj1.headerTitle = function headerTitle() {
        return null;
      };
      obj1.render = function render() {
        return closure_1_6(closure_1_1(14791), {});
      };
      obj[constants.SUCCESS] = obj1;
      return obj;
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
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  const name = navigation.getState().routes[navigation.getState(navigation).routes.length - 1].name;
  const items = [navigation, name];
  obj = { style: tmp.container, children: null };
  const items1 = [children.children];
  if (name === TwoFAModalSetupSections.ENTER_CODE) {
    items1[1] = tmp4;
    obj.children = items1;
    return tmp6(tmp7, obj);
  } else {
    obj = { bottom: true, style: tmp.floatingButton, children: null };
    let obj1 = { onPress: tmp5, text: null };
    if (name === TwoFAModalSetupSections.SUCCESS) {
      const intl2 = tmp2(1114).intl;
      i4jeWR = tmp2(1114).t.i4jeWR;
      let stringResult = intl2.string(i4jeWR);
    } else {
      const intl = tmp2(1114).intl;
      stringResult = intl.string(tmp2(1114).t.XiOHRX);
    }
    obj1.text = stringResult;
    obj1 = closure_6(tmp2(4975).Button, obj1);
    obj.children = obj1;
    closure_6(tmp2(7123).SafeAreaPaddingView, obj);
  }
};
