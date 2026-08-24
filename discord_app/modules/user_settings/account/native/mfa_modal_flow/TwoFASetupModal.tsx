// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModal.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import NavigationStack from "../../../../../design/components/Navigator/native/Navigator.native.tsx";
import useInitialValueDefault from "../../../../../hooks/useInitialValue.tsx";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { TwoFAModalSetupSections } from "TwoFAConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, floatingButton: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", bottom: 12, left: 12, right: 12 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let closure_9 = { [TwoFAModalSetupSections.LANDING]: 1, [TwoFAModalSetupSections.SCAN]: 2, [TwoFAModalSetupSections.ENTER_CODE]: 3 };
const result = require("set").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModal.tsx");

export default function TwoFASetupModal(initialRouteName) {
  let LANDING = initialRouteName.initialRouteName;
  if (LANDING === undefined) {
    LANDING = TwoFAModalSetupSections.LANDING;
  }
  let obj = {
    initialRouteName: LANDING,
    screens: useInitialValueDefault(() => {
      let obj = callback(8627);
      callback = obj.generateTotpSecret();
      obj = {};
      obj = {
        headerLeft: callback(6345).getHeaderCloseButton(callback2(14206).close),
        headerTitle() {
          return callback3(callback(14209).PageMarker, { currentPage: dependencyMap2[constants.LANDING], numMarkers: Object.keys(dependencyMap2).length - 1 });
        },
        render() {
          return callback3(callback2(14210), {});
        }
      };
      obj[constants.LANDING] = obj;
      obj[constants.SCAN] = {
        headerTitle() {
          return callback3(callback(14209).PageMarker, { currentPage: dependencyMap2[constants.SCAN], numMarkers: Object.keys(dependencyMap2).length - 1 });
        },
        render() {
          return closure_1_6(closure_1_1(closure_1_2[14]), { totpSecret: closure_0 });
        }
      };
      obj[constants.ENTER_CODE] = {
        headerTitle() {
          return callback3(callback(14209).PageMarker, { currentPage: dependencyMap2[constants.ENTER_CODE], numMarkers: Object.keys(dependencyMap2).length - 1 });
        },
        render() {
          return closure_1_6(closure_1_1(closure_1_2[15]), { totpSecret: closure_0 });
        }
      };
      obj1 = { headerLeft: null, headerTitle: null, render: null };
      const obj4 = callback(6345);
      obj1[0] = callback(6345).getHeaderCloseButton(callback2(14206).close);
      obj1[1] = function headerTitle() {
        return null;
      };
      obj1[2] = function render() {
        return callback3(callback2(14216), {});
      };
      obj[constants.SUCCESS] = obj1;
      return obj;
    }),
    headerBackTitle: null,
    headerTitleAlign: "center"
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
  return callback(NavigationStack.Navigator, obj);
};
export const TwoFASetupModalScreen = function TwoFASetupModalScreen(children) {
  let navigation;
  let name;
  const tmp = callback2();
  let i4jeWR = dependencyMap;
  let obj = navigation(1500);
  navigation = obj.useNavigation();
  name = navigation.getState().routes[navigation.getState(navigation).routes.length - 1].name;
  const items = [navigation, name];
  obj = { style: tmp.container, children: null };
  const items1 = [children.children, ];
  if (name === TwoFAModalSetupSections.ENTER_CODE) {
    items1[1] = tmp4;
    obj[1] = items1;
    return tmp6(tmp7, obj);
  } else {
    obj = { bottom: true, style: null, children: null };
    obj[1] = tmp.floatingButton;
    obj1 = { onPress: null, text: null };
    obj1[0] = tmp5;
    if (name === TwoFAModalSetupSections.SUCCESS) {
      const intl2 = tmp2(1236).intl;
      i4jeWR = tmp2(1236).t.i4jeWR;
      let stringResult = intl2.string(i4jeWR);
    } else {
      const intl = tmp2(1236).intl;
      stringResult = intl.string(tmp2(1236).t.XiOHRX);
    }
    obj1[1] = stringResult;
    obj1 = tmp8(tmp2(4750).Button, obj1);
    obj[2] = obj1;
    closure_6(tmp2(6840).SafeAreaPaddingView, obj);
  }
};