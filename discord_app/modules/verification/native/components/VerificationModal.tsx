// === Module 17508: VerificationModal ===

// Module 17508 (VerificationModal)
import Link from "Link" /* 1484 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import PhoneVerificationStore from "PhoneVerificationStore" /* 17509 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 1951 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function PhoneThenEmailInterstitial(navigation) {
  navigation = navigation.navigation;
  let obj = { Illustration: navigation(17510).VerifyPhone, title: null, body: null, children: null };
  const intl = navigation(1114).intl;
  obj.title = intl.string(navigation(1114).t.KLnLIP);
  const intl2 = navigation(1114).intl;
  obj.body = intl2.string(navigation(1114).t.XGbCq3);
  obj = { style: closure_12().button, children: null };
  obj = { text: null, onPress: null };
  const intl3 = navigation(1114).intl;
  obj.text = intl3.string(navigation(1114).t["3oK4qw"]);
  obj.onPress = function onPress() {
    const currentUser = UserStore.getCurrentUser();
    let email;
    if (currentUser != null) {
      email = currentUser.email;
    }
    if (null != email) {
      let ENTER_EMAIL = constants.RESEND_EMAIL;
    } else {
      ENTER_EMAIL = constants.ENTER_EMAIL;
    }
    const StackActions = Link.StackActions;
    navigation.dispatch(StackActions.push(ENTER_EMAIL));
  };
  obj.children = jsx(navigation(4975).Button, { text: null, onPress: null });
  obj.children = <View text={null} onPress={null} />;
  return jsx(navigation(1178).EmptyState, { text: null, onPress: null });
}
const View = fn(17).View;
const Constants = fn(1074);
({ UserRequiredActions: closure_9, VerificationModalScenes: c10 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles({ button: { position: "absolute", right: 32, bottom: 32, left: 32 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/verification/native/components/VerificationModal.tsx");

export default function VerificationModal() {
  let obj = stateFromStores(504);
  let items = [PhoneVerificationStore];
  stateFromStores = obj.useStateFromStores(items, () => countrySelectorOpened.getCountrySelectorOpened());
  const items1 = [stateFromStores];
  const memo = noop.useMemo(() => {
    let obj = { name: constants.OVERVIEW };
    const items = [obj];
    if (stateFromStores) {
      obj = { name: tmp.ADD_PHONE };
      items.push(obj);
    }
    return items;
  }, items1);
  const effect = noop.useEffect(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    stateFromStores(4425).dismissKeyboard();
  }, []);
  obj = {
    screens: noop.useMemo(() => {
      let obj = {};
      obj = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      obj = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_COLLECT_REASONS };
      obj.impressionProperties = obj;
      let obj3 = stateFromStores(5624);
      obj.headerTitle = obj3.getHeaderNoTitle();
      obj.render = function render() {
        return null;
      };
      obj[constants.CHANGE_EMAIL_COLLECT_REASONS] = obj;
      let obj1 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_WARNING }, headerTitle: null, render: null };
      let obj6 = stateFromStores(5624);
      obj1.headerTitle = obj6.getHeaderNoTitle();
      obj1.render = function render() {
        return null;
      };
      obj[constants.CHANGE_EMAIL_WARNING] = obj1;
      obj3 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, gestureEnabled: false, headerLeft: null, headerTitle: null, headerRight: null, render: null };
      let obj2 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_WARNING };
      obj3.impressionProperties = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.OVERVIEW };
      obj3.headerLeft = function headerLeft() {
        return null;
      };
      let obj9 = stateFromStores(5624);
      obj3.headerTitle = obj9.getHeaderNoTitle();
      obj3.headerRight = function headerRight() {
        let obj = { source: closure_1_1(9800), accessibilityLabel: null, onPress: null };
        let intl = stateFromStores(1114).intl;
        obj.accessibilityLabel = intl.string(stateFromStores(1114).t.PdRCRg);
        obj.onPress = function onPress() {
          closure_1_0(7195);
          let obj = { key: "VerificationOverviewMore", options: null, hasIcons: false };
          obj = { label: null, isDestructive: true, onPress: null };
          const intl = closure_1_0(1114).intl;
          obj.label = intl.string(closure_1_0(1114).t["2jxGer"]);
          obj.onPress = function onPress() {
            return closure_1_1(dependencyMap[19]).logout("verification_modal");
          };
          const items = [obj];
          obj.options = items;
          const result = obj.showSimpleActionSheet(obj);
        };
        return closure_1_11(stateFromStores(7377).HeaderActionButton, obj);
      };
      obj3.render = function render() {
        return closure_1_11(closure_1_1(17514), {});
      };
      obj[constants.OVERVIEW] = obj3;
      let obj5 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      obj6 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      obj5.impressionProperties = obj6;
      let obj12 = stateFromStores(5624);
      obj5.headerTitle = obj12.getHeaderNoTitle();
      obj5.render = function render() {
        return closure_1_11(closure_1_1(6591), {});
      };
      obj[constants.RESEND_EMAIL] = obj5;
      const obj7 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      let obj4 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.OVERVIEW };
      obj7.impressionProperties = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      let obj15 = stateFromStores(5624);
      obj7.headerTitle = obj15.getHeaderNoTitle();
      obj7.render = function render() {
        return closure_1_11(closure_1_1(6591), {});
      };
      obj[constants.CHANGE_EMAIL_COMPLETE] = obj7;
      obj9 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj8 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      obj9.impressionProperties = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE };
      let obj18 = stateFromStores(5624);
      obj9.headerTitle = obj18.getHeaderNoTitle();
      obj9.render = function render() {
        return closure_1_11(closure_1_1(6603), { isChangeEmail: false });
      };
      obj[constants.CONFIRM_EMAIL_CHANGE_CODE] = obj9;
      const obj11 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      obj12 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_START };
      obj11.impressionProperties = obj12;
      let obj21 = stateFromStores(5624);
      obj11.headerTitle = obj21.getHeaderNoTitle();
      obj11.render = function render() {
        return closure_1_11(closure_1_1(6600), {});
      };
      obj[constants.CONFIRM_EMAIL_CHANGE_START] = obj11;
      const obj13 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      let obj10 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE };
      obj13.impressionProperties = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL };
      const obj14 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL };
      obj13.headerTitle = stateFromStores(5624).getHeaderNoTitle();
      obj13.render = function render() {
        return closure_1_11(closure_1_1(6982), { isChangeEmail: false });
      };
      obj[constants.ENTER_EMAIL] = obj13;
      obj15 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj25 = stateFromStores(5624);
      obj15.impressionProperties = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE };
      const obj16 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE };
      obj15.headerTitle = stateFromStores(5624).getHeaderNoTitle();
      obj15.render = function render(arg0, arg1) {
        closure_0 = arg1;
        let obj = {};
        const merged = Object.assign(arg0);
        obj.reason = closure_0(7045).ChangePhoneReason.USER_ACTION_REQUIRED;
        obj.onComplete = function onComplete(phone) {
          return closure_0.push(constants.VERIFY_PHONE, {
            phone,
            onVerified(arg0) {
              closure_0 = arg0;
              let obj = { hideUnverifiedBanner: true, onSubmit: null, onSuccess: null };
              closure_2 = closure_1_3(/* F125925 */ function() { ... });
              obj.onSubmit = function onSubmit() { ... };
              closure_1 = closure_1_3(/* F125927 */ function() { ... });
              obj.onSuccess = function onSuccess() { ... };
              closure_0.push(constants.VERIFY_PASSWORD, obj);
            }
          });
        };
        return closure_11(closure_1(7044), obj);
      };
      obj[constants.ADD_PHONE] = obj15;
      const obj17 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      obj18 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PHONE };
      obj17.impressionProperties = obj18;
      const obj28 = stateFromStores(5624);
      obj17.headerTitle = stateFromStores(5624).getHeaderNoTitle();
      obj17.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_11(closure_1_1(7078), { disableKeyboardAvoidingView: true });
      };
      obj[constants.VERIFY_PHONE] = obj17;
      const obj19 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj31 = stateFromStores(5624);
      obj19.impressionProperties = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD };
      const obj20 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD };
      obj19.headerTitle = stateFromStores(5624).getHeaderNoTitle();
      obj19.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_11(closure_1_1(6993), {});
      };
      obj[constants.VERIFY_PASSWORD] = obj19;
      obj21 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj34 = stateFromStores(5624);
      obj21.impressionProperties = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL };
      const obj22 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL };
      obj21.headerTitle = stateFromStores(5624).getHeaderNoTitle();
      obj21.render = function render(arg0, navigation) {
        return closure_1_11(closure_1_13, { navigation });
      };
      obj[constants.PHONE_THEN_EMAIL_INTERSTITIAL] = obj21;
      return obj;
    }, []),
    initialRouteStack: memo,
    headerBackTitle: null
  };
  let intl = stateFromStores(1114).intl;
  obj.headerBackTitle = intl.string(stateFromStores(1114).t["13/7kX"]);
  return jsx(stateFromStores(7000).Navigator, {
    screens: noop.useMemo(() => {
      let obj = {};
      obj = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      obj = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_COLLECT_REASONS };
      obj.impressionProperties = obj;
      let obj3 = stateFromStores(5624);
      obj.headerTitle = obj3.getHeaderNoTitle();
      obj.render = function render() {
        return null;
      };
      obj[constants.CHANGE_EMAIL_COLLECT_REASONS] = obj;
      let obj1 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_WARNING }, headerTitle: null, render: null };
      let obj6 = stateFromStores(5624);
      obj1.headerTitle = obj6.getHeaderNoTitle();
      obj1.render = function render() {
        return null;
      };
      obj[constants.CHANGE_EMAIL_WARNING] = obj1;
      obj3 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, gestureEnabled: false, headerLeft: null, headerTitle: null, headerRight: null, render: null };
      let obj2 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_WARNING };
      obj3.impressionProperties = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.OVERVIEW };
      obj3.headerLeft = function headerLeft() {
        return null;
      };
      let obj9 = stateFromStores(5624);
      obj3.headerTitle = obj9.getHeaderNoTitle();
      obj3.headerRight = function headerRight() {
        let obj = { source: closure_1_1(9800), accessibilityLabel: null, onPress: null };
        let intl = stateFromStores(1114).intl;
        obj.accessibilityLabel = intl.string(stateFromStores(1114).t.PdRCRg);
        obj.onPress = function onPress() {
          closure_1_0(7195);
          let obj = { key: "VerificationOverviewMore", options: null, hasIcons: false };
          obj = { label: null, isDestructive: true, onPress: null };
          const intl = closure_1_0(1114).intl;
          obj.label = intl.string(closure_1_0(1114).t["2jxGer"]);
          obj.onPress = function onPress() {
            return closure_1_1(dependencyMap[19]).logout("verification_modal");
          };
          const items = [obj];
          obj.options = items;
          const result = obj.showSimpleActionSheet(obj);
        };
        return closure_1_11(stateFromStores(7377).HeaderActionButton, obj);
      };
      obj3.render = function render() {
        return closure_1_11(closure_1_1(17514), {});
      };
      obj[constants.OVERVIEW] = obj3;
      let obj5 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      obj6 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      obj5.impressionProperties = obj6;
      let obj12 = stateFromStores(5624);
      obj5.headerTitle = obj12.getHeaderNoTitle();
      obj5.render = function render() {
        return closure_1_11(closure_1_1(6591), {});
      };
      obj[constants.RESEND_EMAIL] = obj5;
      const obj7 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      let obj4 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.OVERVIEW };
      obj7.impressionProperties = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      let obj15 = stateFromStores(5624);
      obj7.headerTitle = obj15.getHeaderNoTitle();
      obj7.render = function render() {
        return closure_1_11(closure_1_1(6591), {});
      };
      obj[constants.CHANGE_EMAIL_COMPLETE] = obj7;
      obj9 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj8 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      obj9.impressionProperties = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE };
      let obj18 = stateFromStores(5624);
      obj9.headerTitle = obj18.getHeaderNoTitle();
      obj9.render = function render() {
        return closure_1_11(closure_1_1(6603), { isChangeEmail: false });
      };
      obj[constants.CONFIRM_EMAIL_CHANGE_CODE] = obj9;
      const obj11 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      obj12 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_START };
      obj11.impressionProperties = obj12;
      let obj21 = stateFromStores(5624);
      obj11.headerTitle = obj21.getHeaderNoTitle();
      obj11.render = function render() {
        return closure_1_11(closure_1_1(6600), {});
      };
      obj[constants.CONFIRM_EMAIL_CHANGE_START] = obj11;
      const obj13 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      let obj10 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE };
      obj13.impressionProperties = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL };
      const obj14 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL };
      obj13.headerTitle = stateFromStores(5624).getHeaderNoTitle();
      obj13.render = function render() {
        return closure_1_11(closure_1_1(6982), { isChangeEmail: false });
      };
      obj[constants.ENTER_EMAIL] = obj13;
      obj15 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj25 = stateFromStores(5624);
      obj15.impressionProperties = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE };
      const obj16 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE };
      obj15.headerTitle = stateFromStores(5624).getHeaderNoTitle();
      obj15.render = function render(arg0, arg1) {
        closure_0 = arg1;
        let obj = {};
        const merged = Object.assign(arg0);
        obj.reason = closure_0(7045).ChangePhoneReason.USER_ACTION_REQUIRED;
        obj.onComplete = function onComplete(phone) {
          return closure_0.push(constants.VERIFY_PHONE, {
            phone,
            onVerified(arg0) {
              closure_0 = arg0;
              let obj = { hideUnverifiedBanner: true, onSubmit: null, onSuccess: null };
              closure_2 = closure_1_3(/* F125925 */ function() { ... });
              obj.onSubmit = function onSubmit() { ... };
              closure_1 = closure_1_3(/* F125927 */ function() { ... });
              obj.onSuccess = function onSuccess() { ... };
              closure_0.push(constants.VERIFY_PASSWORD, obj);
            }
          });
        };
        return closure_11(closure_1(7044), obj);
      };
      obj[constants.ADD_PHONE] = obj15;
      const obj17 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      obj18 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PHONE };
      obj17.impressionProperties = obj18;
      const obj28 = stateFromStores(5624);
      obj17.headerTitle = stateFromStores(5624).getHeaderNoTitle();
      obj17.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_11(closure_1_1(7078), { disableKeyboardAvoidingView: true });
      };
      obj[constants.VERIFY_PHONE] = obj17;
      const obj19 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj31 = stateFromStores(5624);
      obj19.impressionProperties = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD };
      const obj20 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD };
      obj19.headerTitle = stateFromStores(5624).getHeaderNoTitle();
      obj19.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_11(closure_1_1(6993), {});
      };
      obj[constants.VERIFY_PASSWORD] = obj19;
      obj21 = { impressionName: stateFromStores(1250).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj34 = stateFromStores(5624);
      obj21.impressionProperties = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL };
      const obj22 = { impression_group: stateFromStores(1250).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL };
      obj21.headerTitle = stateFromStores(5624).getHeaderNoTitle();
      obj21.render = function render(arg0, navigation) {
        return closure_1_11(closure_1_13, { navigation });
      };
      obj[constants.PHONE_THEN_EMAIL_INTERSTITIAL] = obj21;
      return obj;
    }, []),
    initialRouteStack: memo,
    headerBackTitle: null
  });
};