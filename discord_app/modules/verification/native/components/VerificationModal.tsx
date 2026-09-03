// discord_app/modules/verification/native/components/VerificationModal.tsx
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../stores/PhoneVerificationStore.tsx";
import closure_7 from "../../../../stores/UserRequiredActionStore.tsx";
import closure_8 from "../../../../stores/UserStore.tsx";
import ME from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function PhoneThenEmailInterstitial(navigation) {
  navigation = navigation.navigation;
  let obj = { Illustration: navigation(17350).VerifyPhone, title: null, body: null, children: null };
  const intl = navigation(1233).intl;
  obj[1] = intl.string(navigation(1233).t.KLnLIP);
  const intl2 = navigation(1233).intl;
  obj[2] = intl2.string(navigation(1233).t.XGbCq3);
  obj = { style: callback().button, children: null };
  obj = { text: null, onPress: null };
  const intl3 = navigation(1233).intl;
  obj[0] = intl3.string(navigation(1233).t["3oK4qw"]);
  obj[1] = function onPress() {
    const currentUser = closure_1_8.getCurrentUser();
    let email;
    if (currentUser != null) {
      email = currentUser.email;
    }
    if (null != email) {
      let ENTER_EMAIL = closure_1_10.RESEND_EMAIL;
    } else {
      ENTER_EMAIL = closure_1_10.ENTER_EMAIL;
    }
    const StackActions = navigation(closure_1_2[13]).StackActions;
    navigation.dispatch(StackActions.push(ENTER_EMAIL));
  };
  obj[1] = jsx(navigation(4929).Button, { text: null, onPress: null });
  obj[3] = <View text={null} onPress={null} />;
  return jsx(navigation(1296).EmptyState, { text: null, onPress: null });
}
({ UserRequiredActions: c9, VerificationModalScenes: c10 } = ME);
let closure_12 = createCacheKey.createStyles({ button: { position: "absolute", right: 32, bottom: 32, left: 32 } });
let result = require("set").fileFinishedImporting("modules/verification/native/components/VerificationModal.tsx");

export default function VerificationModal() {
  let obj = stateFromStores(586);
  let items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => countrySelectorOpened.getCountrySelectorOpened());
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => {
    let obj = { name: closure_1_10.OVERVIEW };
    const items = [obj];
    if (stateFromStores) {
      obj = { name: null };
      obj[0] = tmp.ADD_PHONE;
      items.push(obj);
    }
    return items;
  }, items1);
  const effect = React.useEffect(() => {
    callback(4445).hideActionSheet();
    const obj = callback(4445);
    stateFromStores(4340).dismissKeyboard();
  }, []);
  obj = {
    screens: React.useMemo(() => {
      let obj = {};
      obj = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      obj = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_COLLECT_REASONS };
      obj[1] = obj;
      let obj3 = stateFromStores(5504);
      obj[2] = obj3.getHeaderNoTitle();
      obj[3] = function render() {
        return null;
      };
      obj[constants.CHANGE_EMAIL_COLLECT_REASONS] = obj;
      obj1 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_WARNING }, headerTitle: null, render: null };
      let obj6 = stateFromStores(5504);
      obj1[2] = obj6.getHeaderNoTitle();
      obj1[3] = function render() {
        return null;
      };
      obj[constants.CHANGE_EMAIL_WARNING] = obj1;
      obj3 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, gestureEnabled: false, headerLeft: null, headerTitle: null, headerRight: null, render: null };
      let obj2 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_WARNING };
      obj3[1] = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.OVERVIEW };
      obj3[3] = function headerLeft() {
        return null;
      };
      let obj9 = stateFromStores(5504);
      obj3[4] = obj9.getHeaderNoTitle();
      obj3[5] = function headerRight() {
        let obj = { source: callback2(9794), accessibilityLabel: null, onPress: null };
        let intl = callback(1233).intl;
        obj[1] = intl.string(callback(1233).t.PdRCRg);
        obj[2] = function onPress() {
          let obj = callback(5995);
          obj = { key: "VerificationOverviewMore", options: null, hasIcons: false };
          obj = { label: null, isDestructive: true, onPress: null };
          const intl = callback(1233).intl;
          obj[0] = intl.string(callback(1233).t["2jxGer"]);
          obj[2] = function onPress() {
            return callback(table[19]).logout("verification_modal");
          };
          const items = [obj];
          obj[1] = items;
          const result = obj.showSimpleActionSheet(obj);
        };
        return callback3(callback(6247).HeaderActionButton, obj);
      };
      obj3[6] = function render() {
        return callback3(callback2(17354), {});
      };
      obj[constants.OVERVIEW] = obj3;
      let obj5 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      obj6 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      obj5[1] = obj6;
      let obj12 = stateFromStores(5504);
      obj5[2] = obj12.getHeaderNoTitle();
      obj5[3] = function render() {
        return callback3(callback2(7709), {});
      };
      obj[constants.RESEND_EMAIL] = obj5;
      const obj7 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      let obj4 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.OVERVIEW };
      obj7[1] = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      let obj15 = stateFromStores(5504);
      obj7[2] = obj15.getHeaderNoTitle();
      obj7[3] = function render() {
        return callback3(callback2(7709), {});
      };
      obj[constants.CHANGE_EMAIL_COMPLETE] = obj7;
      obj9 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj8 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      obj9[1] = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE };
      let obj18 = stateFromStores(5504);
      obj9[2] = obj18.getHeaderNoTitle();
      obj9[3] = function render() {
        return callback3(callback2(7714), { isChangeEmail: false });
      };
      obj[constants.CONFIRM_EMAIL_CHANGE_CODE] = obj9;
      const obj11 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      obj12 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_START };
      obj11[1] = obj12;
      let obj21 = stateFromStores(5504);
      obj11[2] = obj21.getHeaderNoTitle();
      obj11[3] = function render() {
        return callback3(callback2(7711), {});
      };
      obj[constants.CONFIRM_EMAIL_CHANGE_START] = obj11;
      const obj13 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      let obj10 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE };
      obj13[1] = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL };
      const obj14 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL };
      obj13[2] = stateFromStores(5504).getHeaderNoTitle();
      obj13[3] = function render() {
        return callback3(callback2(7766), { isChangeEmail: false });
      };
      obj[constants.ENTER_EMAIL] = obj13;
      obj15 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj25 = stateFromStores(5504);
      obj15[1] = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE };
      const obj16 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE };
      obj15[2] = stateFromStores(5504).getHeaderNoTitle();
      obj15[3] = function render(arg0, arg1) {
        let callback = arg1;
        let obj = {};
        const merged = Object.assign(arg0);
        obj.reason = callback(7783).ChangePhoneReason.USER_ACTION_REQUIRED;
        obj.onComplete = function onComplete(phone) {
          return arr.push(closure_1_10.VERIFY_PHONE, {
            phone,
            onVerified(arg0) {
              let arr = arg0;
              let obj = { hideUnverifiedBanner: true, onSubmit: null, onSuccess: null };
              closure_2 = closure_1_3(/* F125293 */ function() { ... });
              obj[1] = () => { ... };
              closure_1 = closure_1_3(/* F125295 */ function() { ... });
              obj[2] = () => { ... };
              arr = arr.push(closure_1_10.VERIFY_PASSWORD, obj);
            }
          });
        };
        return callback3(callback2(7782), obj);
      };
      obj[constants.ADD_PHONE] = obj15;
      const obj17 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      obj18 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PHONE };
      obj17[1] = obj18;
      const obj28 = stateFromStores(5504);
      obj17[2] = stateFromStores(5504).getHeaderNoTitle();
      obj17[3] = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback3(callback2(7813), { disableKeyboardAvoidingView: true });
      };
      obj[constants.VERIFY_PHONE] = obj17;
      const obj19 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj31 = stateFromStores(5504);
      obj19[1] = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD };
      const obj20 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD };
      obj19[2] = stateFromStores(5504).getHeaderNoTitle();
      obj19[3] = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback3(callback2(7777), {});
      };
      obj[constants.VERIFY_PASSWORD] = obj19;
      obj21 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj34 = stateFromStores(5504);
      obj21[1] = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL };
      const obj22 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL };
      obj21[2] = stateFromStores(5504).getHeaderNoTitle();
      obj21[3] = function render(arg0, navigation) {
        return callback3(closure_13, { navigation });
      };
      obj[constants.PHONE_THEN_EMAIL_INTERSTITIAL] = obj21;
      return obj;
    }, []),
    initialRouteStack: memo,
    headerBackTitle: null
  };
  let intl = stateFromStores(1233).intl;
  obj[2] = intl.string(stateFromStores(1233).t["13/7kX"]);
  return jsx(stateFromStores(6017).Navigator, {
    screens: React.useMemo(() => {
      let obj = {};
      obj = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      obj = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_COLLECT_REASONS };
      obj[1] = obj;
      let obj3 = stateFromStores(5504);
      obj[2] = obj3.getHeaderNoTitle();
      obj[3] = function render() {
        return null;
      };
      obj[constants.CHANGE_EMAIL_COLLECT_REASONS] = obj;
      obj1 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_WARNING }, headerTitle: null, render: null };
      let obj6 = stateFromStores(5504);
      obj1[2] = obj6.getHeaderNoTitle();
      obj1[3] = function render() {
        return null;
      };
      obj[constants.CHANGE_EMAIL_WARNING] = obj1;
      obj3 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, gestureEnabled: false, headerLeft: null, headerTitle: null, headerRight: null, render: null };
      let obj2 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_WARNING };
      obj3[1] = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.OVERVIEW };
      obj3[3] = function headerLeft() {
        return null;
      };
      let obj9 = stateFromStores(5504);
      obj3[4] = obj9.getHeaderNoTitle();
      obj3[5] = function headerRight() {
        let obj = { source: callback2(9794), accessibilityLabel: null, onPress: null };
        let intl = callback(1233).intl;
        obj[1] = intl.string(callback(1233).t.PdRCRg);
        obj[2] = function onPress() {
          let obj = callback(5995);
          obj = { key: "VerificationOverviewMore", options: null, hasIcons: false };
          obj = { label: null, isDestructive: true, onPress: null };
          const intl = callback(1233).intl;
          obj[0] = intl.string(callback(1233).t["2jxGer"]);
          obj[2] = function onPress() {
            return callback(table[19]).logout("verification_modal");
          };
          const items = [obj];
          obj[1] = items;
          const result = obj.showSimpleActionSheet(obj);
        };
        return callback3(callback(6247).HeaderActionButton, obj);
      };
      obj3[6] = function render() {
        return callback3(callback2(17354), {});
      };
      obj[constants.OVERVIEW] = obj3;
      let obj5 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      obj6 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      obj5[1] = obj6;
      let obj12 = stateFromStores(5504);
      obj5[2] = obj12.getHeaderNoTitle();
      obj5[3] = function render() {
        return callback3(callback2(7709), {});
      };
      obj[constants.RESEND_EMAIL] = obj5;
      const obj7 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      let obj4 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.OVERVIEW };
      obj7[1] = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      let obj15 = stateFromStores(5504);
      obj7[2] = obj15.getHeaderNoTitle();
      obj7[3] = function render() {
        return callback3(callback2(7709), {});
      };
      obj[constants.CHANGE_EMAIL_COMPLETE] = obj7;
      obj9 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj8 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      obj9[1] = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE };
      let obj18 = stateFromStores(5504);
      obj9[2] = obj18.getHeaderNoTitle();
      obj9[3] = function render() {
        return callback3(callback2(7714), { isChangeEmail: false });
      };
      obj[constants.CONFIRM_EMAIL_CHANGE_CODE] = obj9;
      const obj11 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      obj12 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_START };
      obj11[1] = obj12;
      let obj21 = stateFromStores(5504);
      obj11[2] = obj21.getHeaderNoTitle();
      obj11[3] = function render() {
        return callback3(callback2(7711), {});
      };
      obj[constants.CONFIRM_EMAIL_CHANGE_START] = obj11;
      const obj13 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      let obj10 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE };
      obj13[1] = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL };
      const obj14 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL };
      obj13[2] = stateFromStores(5504).getHeaderNoTitle();
      obj13[3] = function render() {
        return callback3(callback2(7766), { isChangeEmail: false });
      };
      obj[constants.ENTER_EMAIL] = obj13;
      obj15 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj25 = stateFromStores(5504);
      obj15[1] = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE };
      const obj16 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE };
      obj15[2] = stateFromStores(5504).getHeaderNoTitle();
      obj15[3] = function render(arg0, arg1) {
        let callback = arg1;
        let obj = {};
        const merged = Object.assign(arg0);
        obj.reason = callback(7783).ChangePhoneReason.USER_ACTION_REQUIRED;
        obj.onComplete = function onComplete(phone) {
          return arr.push(closure_1_10.VERIFY_PHONE, {
            phone,
            onVerified(arg0) {
              let arr = arg0;
              let obj = { hideUnverifiedBanner: true, onSubmit: null, onSuccess: null };
              closure_2 = closure_1_3(/* F125293 */ function() { ... });
              obj[1] = () => { ... };
              closure_1 = closure_1_3(/* F125295 */ function() { ... });
              obj[2] = () => { ... };
              arr = arr.push(closure_1_10.VERIFY_PASSWORD, obj);
            }
          });
        };
        return callback3(callback2(7782), obj);
      };
      obj[constants.ADD_PHONE] = obj15;
      const obj17 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      obj18 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PHONE };
      obj17[1] = obj18;
      const obj28 = stateFromStores(5504);
      obj17[2] = stateFromStores(5504).getHeaderNoTitle();
      obj17[3] = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback3(callback2(7813), { disableKeyboardAvoidingView: true });
      };
      obj[constants.VERIFY_PHONE] = obj17;
      const obj19 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj31 = stateFromStores(5504);
      obj19[1] = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD };
      const obj20 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD };
      obj19[2] = stateFromStores(5504).getHeaderNoTitle();
      obj19[3] = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback3(callback2(7777), {});
      };
      obj[constants.VERIFY_PASSWORD] = obj19;
      obj21 = { impressionName: stateFromStores(500).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj34 = stateFromStores(5504);
      obj21[1] = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL };
      const obj22 = { impression_group: stateFromStores(500).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL };
      obj21[2] = stateFromStores(5504).getHeaderNoTitle();
      obj21[3] = function render(arg0, navigation) {
        return callback3(closure_13, { navigation });
      };
      obj[constants.PHONE_THEN_EMAIL_INTERSTITIAL] = obj21;
      return obj;
    }, []),
    initialRouteStack: memo,
    headerBackTitle: null
  });
};