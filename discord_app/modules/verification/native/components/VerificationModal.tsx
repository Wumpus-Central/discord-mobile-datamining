// discord_app/modules/verification/native/components/VerificationModal.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import handleLogout from "handleLogout";
import { View } from "registerAsset";
import getCountrySelectorOpened from "getCountrySelectorOpened";
import handleRequiredAction from "handleRequiredAction";
import closure_8 from "mergeGuildAvatar";
import ME from "ME";
import { jsx } from "ResendEmail";
import createCacheKey from "createCacheKey";

let c10;
let c9;
const require = arg1;
function PhoneThenEmailInterstitial(navigation) {
  navigation = navigation.navigation;
  let obj = { Illustration: null, title: null, body: null, children: null };
  obj[0] = navigation(16685).VerifyPhone;
  const intl = navigation(1236).intl;
  obj[1] = intl.string(navigation(1236).t.KLnLIP);
  const intl2 = navigation(1236).intl;
  obj[2] = intl2.string(navigation(1236).t.XGbCq3);
  obj = { style: callback().button, children: null };
  obj = { text: null, onPress: null };
  const intl3 = navigation(1236).intl;
  obj[0] = intl3.string(navigation(1236).t["3oK4qw"]);
  obj[1] = function onPress() {
    const currentUser = outer1_8.getCurrentUser();
    let email;
    if (currentUser != null) {
      email = currentUser.email;
    }
    if (null != email) {
      let ENTER_EMAIL = outer1_10.RESEND_EMAIL;
    } else {
      ENTER_EMAIL = outer1_10.ENTER_EMAIL;
    }
    const StackActions = navigation(outer1_2[13]).StackActions;
    navigation.dispatch(StackActions.push(ENTER_EMAIL));
  };
  obj[1] = jsx(navigation(4777).Button, { text: null, onPress: null });
  obj[3] = <View text={null} onPress={null} />;
  return jsx(navigation(1297).EmptyState, { text: null, onPress: null });
}
({ UserRequiredActions: c9, VerificationModalScenes: c10 } = ME);
let closure_12 = createCacheKey.createStyles({ button: { position: "absolute", right: 32, bottom: 32, left: 32 } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/verification/native/components/VerificationModal.tsx");

export default function VerificationModal() {
  let obj = stateFromStores(589);
  let items = [getCountrySelectorOpened];
  stateFromStores = obj.useStateFromStores(items, () => countrySelectorOpened.getCountrySelectorOpened());
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => {
    let obj = { name: outer1_10.OVERVIEW };
    const items = [obj];
    if (stateFromStores) {
      obj = { name: null };
      obj[0] = tmp.ADD_PHONE;
      items.push(obj);
    }
    return items;
  }, items1);
  const effect = React.useEffect(() => {
    callback(4310).hideActionSheet();
    const obj = callback(4310);
    stateFromStores(4205).dismissKeyboard();
  }, []);
  obj = { screens: null, initialRouteStack: null, headerBackTitle: null };
  obj[0] = React.useMemo(() => {
    let obj = {};
    obj = { impressionName: stateFromStores(503).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
    obj = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_COLLECT_REASONS };
    obj[1] = obj;
    let obj3 = stateFromStores(5331);
    obj[2] = obj3.getHeaderNoTitle();
    obj[3] = function render() {
      return null;
    };
    obj[constants.CHANGE_EMAIL_COLLECT_REASONS] = obj;
    let obj1 = { impressionName: stateFromStores(503).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
    obj1[1] = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_WARNING };
    let obj6 = stateFromStores(5331);
    obj1[2] = obj6.getHeaderNoTitle();
    obj1[3] = function render() {
      return null;
    };
    obj[constants.CHANGE_EMAIL_WARNING] = obj1;
    obj3 = { impressionName: stateFromStores(503).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, gestureEnabled: false, headerLeft: null, headerTitle: null, headerRight: null, render: null };
    let obj2 = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_WARNING };
    obj3[1] = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.OVERVIEW };
    obj3[3] = function headerLeft() {
      return null;
    };
    let obj9 = stateFromStores(5331);
    obj3[4] = obj9.getHeaderNoTitle();
    obj3[5] = function headerRight() {
      let obj = { source: null, accessibilityLabel: null, onPress: null };
      obj[0] = callback2(9114);
      let intl = callback(1236).intl;
      obj[1] = intl.string(callback(1236).t.PdRCRg);
      obj[2] = function onPress() {
        let obj = callback(5822);
        obj = { key: "VerificationOverviewMore", options: null, hasIcons: false };
        obj = { label: null, isDestructive: true, onPress: null };
        const intl = callback(1236).intl;
        obj[0] = intl.string(callback(1236).t["2jxGer"]);
        obj[2] = function onPress() {
          return callback(table[19]).logout("verification_modal");
        };
        const items = [obj];
        obj[1] = items;
        const result = obj.showSimpleActionSheet(obj);
      };
      return callback3(callback(6072).HeaderActionButton, obj);
    };
    obj3[6] = function render() {
      return callback3(callback2(16689), {});
    };
    obj[constants.OVERVIEW] = obj3;
    let obj5 = { impressionName: stateFromStores(503).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
    obj6 = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
    obj5[1] = obj6;
    let obj12 = stateFromStores(5331);
    obj5[2] = obj12.getHeaderNoTitle();
    obj5[3] = function render() {
      return callback3(callback2(8529), {});
    };
    obj[constants.RESEND_EMAIL] = obj5;
    const obj7 = { impressionName: stateFromStores(503).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
    let obj4 = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.OVERVIEW };
    obj7[1] = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
    let obj15 = stateFromStores(5331);
    obj7[2] = obj15.getHeaderNoTitle();
    obj7[3] = function render() {
      return callback3(callback2(8529), {});
    };
    obj[constants.CHANGE_EMAIL_COMPLETE] = obj7;
    obj9 = { impressionName: stateFromStores(503).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
    const obj8 = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
    obj9[1] = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE };
    let obj18 = stateFromStores(5331);
    obj9[2] = obj18.getHeaderNoTitle();
    obj9[3] = function render() {
      return callback3(callback2(8534), { isChangeEmail: false });
    };
    obj[constants.CONFIRM_EMAIL_CHANGE_CODE] = obj9;
    const obj11 = { impressionName: stateFromStores(503).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
    obj12 = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_START };
    obj11[1] = obj12;
    let obj21 = stateFromStores(5331);
    obj11[2] = obj21.getHeaderNoTitle();
    obj11[3] = function render() {
      return callback3(callback2(8531), {});
    };
    obj[constants.CONFIRM_EMAIL_CHANGE_START] = obj11;
    const obj13 = { impressionName: stateFromStores(503).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
    let obj10 = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE };
    obj13[1] = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL };
    const obj14 = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL };
    obj13[2] = stateFromStores(5331).getHeaderNoTitle();
    obj13[3] = function render() {
      return callback3(callback2(8579), { isChangeEmail: false });
    };
    obj[constants.ENTER_EMAIL] = obj13;
    obj15 = { impressionName: stateFromStores(503).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
    const obj25 = stateFromStores(5331);
    obj15[1] = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE };
    const obj16 = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE };
    obj15[2] = stateFromStores(5331).getHeaderNoTitle();
    obj15[3] = function render(arg0, arg1) {
      let callback = arg1;
      let obj = {};
      const merged = Object.assign(arg0);
      obj.reason = callback(8590).ChangePhoneReason.USER_ACTION_REQUIRED;
      obj.onComplete = function onComplete(phone) {
        return arr.push(outer1_10.VERIFY_PHONE, {
          phone,
          onVerified(arg0) {
            let arr = arg0;
            let obj = { hideUnverifiedBanner: true, onSubmit: null, onSuccess: null };
            let closure_2 = outer1_3(/* F120757 */ function() { ... });
            obj[1] = () => { ... };
            let closure_1 = outer1_3(/* F120759 */ function() { ... });
            obj[2] = () => { ... };
            arr = arr.push(outer1_10.VERIFY_PASSWORD, obj);
          }
        });
      };
      return callback3(callback2(8589), obj);
    };
    obj[constants.ADD_PHONE] = obj15;
    const obj17 = { impressionName: stateFromStores(503).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
    obj18 = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PHONE };
    obj17[1] = obj18;
    const obj28 = stateFromStores(5331);
    obj17[2] = stateFromStores(5331).getHeaderNoTitle();
    obj17[3] = function render(arg0) {
      const merged = Object.assign(arg0);
      return callback3(callback2(8616), { disableKeyboardAvoidingView: true });
    };
    obj[constants.VERIFY_PHONE] = obj17;
    const obj19 = { impressionName: stateFromStores(503).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
    const obj31 = stateFromStores(5331);
    obj19[1] = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD };
    const obj20 = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD };
    obj19[2] = stateFromStores(5331).getHeaderNoTitle();
    obj19[3] = function render(arg0) {
      const merged = Object.assign(arg0);
      return callback3(callback2(8584), {});
    };
    obj[constants.VERIFY_PASSWORD] = obj19;
    obj21 = { impressionName: stateFromStores(503).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
    const obj34 = stateFromStores(5331);
    obj21[1] = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL };
    const obj22 = { impression_group: stateFromStores(503).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL };
    obj21[2] = stateFromStores(5331).getHeaderNoTitle();
    obj21[3] = function render(arg0, navigation) {
      return callback3(closure_13, { navigation });
    };
    obj[constants.PHONE_THEN_EMAIL_INTERSTITIAL] = obj21;
    return obj;
  }, []);
  obj[1] = memo;
  let intl = stateFromStores(1236).intl;
  obj[2] = intl.string(stateFromStores(1236).t["13/7kX"]);
  return jsx(stateFromStores(5844).Navigator, { screens: null, initialRouteStack: null, headerBackTitle: null });
};