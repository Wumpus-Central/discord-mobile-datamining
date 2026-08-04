// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModal.tsx
import NavigationStack from "NavigationStack";
import { View } from "useInitialValue";
import { TwoFAModalSetupSections } from "frozen";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, floatingButton: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", bottom: 12, left: 12, right: 12 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_9 = { [TwoFAModalSetupSections.LANDING]: 1, [TwoFAModalSetupSections.SCAN]: 2, [TwoFAModalSetupSections.ENTER_CODE]: 3 };
const result = require("frozen").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModal.tsx");

export default function TwoFASetupModal(initialRouteName) {
  let LANDING = initialRouteName.initialRouteName;
  if (LANDING === undefined) {
    LANDING = TwoFAModalSetupSections.LANDING;
  }
  let obj = {
    initialRouteName: LANDING,
    screens: importDefault(5507)(() => {
      let obj = callback(9208);
      callback = obj.generateTotpSecret();
      obj = {};
      obj = { headerLeft: null, headerTitle: null, render: null };
      obj[0] = callback(5147).getHeaderCloseButton(callback2(13831).close);
      obj[1] = function headerTitle() {
        return callback3(callback(13834).PageMarker, { currentPage: dependencyMap2[constants.LANDING], numMarkers: Object.keys(dependencyMap2).length - 1 });
      };
      obj[2] = function render() {
        return callback3(callback2(13835), {});
      };
      obj[constants.LANDING] = obj;
      obj[constants.SCAN] = {
        headerTitle() {
          return callback3(callback(13834).PageMarker, { currentPage: dependencyMap2[constants.SCAN], numMarkers: Object.keys(dependencyMap2).length - 1 });
        },
        render() {
          return outer1_6(outer1_1(outer1_2[14]), { totpSecret: closure_0 });
        }
      };
      obj[constants.ENTER_CODE] = {
        headerTitle() {
          return callback3(callback(13834).PageMarker, { currentPage: dependencyMap2[constants.ENTER_CODE], numMarkers: Object.keys(dependencyMap2).length - 1 });
        },
        render() {
          return outer1_6(outer1_1(outer1_2[15]), { totpSecret: closure_0 });
        }
      };
      const obj1 = { headerLeft: null, headerTitle: null, render: null };
      const obj4 = callback(5147);
      obj1[0] = callback(5147).getHeaderCloseButton(callback2(13831).close);
      obj1[1] = function headerTitle() {
        return null;
      };
      obj1[2] = function render() {
        return callback3(callback2(13841), {});
      };
      obj[constants.SUCCESS] = obj1;
      return obj;
    }),
    headerBackTitle: null,
    headerTitleAlign: "center"
  };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["13/7kX"]);
  return callback(require(5574) /* NavigationStack */.Navigator, obj);
};
export const TwoFASetupModalScreen = function TwoFASetupModalScreen(children) {
  let navigation;
  let name;
  const tmp = createCacheKey();
  let i4jeWR = dependencyMap;
  let obj = navigation(1480);
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
    let obj1 = { onPress: null, text: null };
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
    obj1 = tmp8(tmp2(4604).Button, obj1);
    obj[2] = obj1;
    closure_6(tmp2(5181).SafeAreaPaddingView, obj);
  }
};