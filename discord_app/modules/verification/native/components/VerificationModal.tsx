// discord_app/modules/verification/native/components/VerificationModal.tsx
import Link from "../../../../../_runtime/01485_Link.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import PhoneVerificationStore from "../../../../stores/PhoneVerificationStore.tsx";
import UserRequiredActionStore from "../../../../stores/UserRequiredActionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function PhoneThenEmailInterstitial(navigation) {
  navigation = navigation.navigation;
  const obj = { Illustration: navigation(18018).VerifyPhone, title: null, body: null, children: null };
  const intl = navigation(1115).intl;
  obj.title = intl.string(navigation(1115).t.KLnLIP);
  const intl2 = navigation(1115).intl;
  obj.body = intl2.string(navigation(1115).t.XGbCq3);
  const obj2 = { style: closure_12().button, children: null };
  const obj3 = { text: null, onPress: null };
  const intl3 = navigation(1115).intl;
  obj3.text = intl3.string(navigation(1115).t["3oK4qw"]);
  obj3.onPress = function onPress() {
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
  obj2.children = jsx(navigation(5273).Button, { text: null, onPress: null });
  obj.children = <View style={closure_12().button}>{null}</View>;
  return jsx(navigation(1177).EmptyState, { Illustration: navigation(18018).VerifyPhone, title: null, body: null, children: null });
}
const View = fn(17).View;
const Constants = fn(1074);
({ UserRequiredActions: closure_9, VerificationModalScenes: c10 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_12 = createStyles.createStyles({ button: { position: "absolute", right: 32, bottom: 32, left: 32 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/verification/native/components/VerificationModal.tsx");

export default function VerificationModal() {
  let items = [PhoneVerificationStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => countrySelectorOpened.getCountrySelectorOpened());
  const items1 = [stateFromStores];
  const memo = noop.useMemo(() => {
    const items = [{ name: constants.OVERVIEW }];
    if (stateFromStores) {
      const obj2 = { name: tmp.ADD_PHONE };
      items.push(obj2);
    }
    return items;
  }, items1);
  const effect = noop.useEffect(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    stateFromStores(4695).dismissKeyboard();
  }, []);
  let obj2 = {
    screens: noop.useMemo(() => {
      let obj = {};
      let obj2 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_COLLECT_REASONS }, headerTitle: null, render: null };
      let obj3 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_COLLECT_REASONS };
      obj2.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj2.render = function render() {
        return null;
      };
      obj[constants.CHANGE_EMAIL_COLLECT_REASONS] = obj2;
      let obj5 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      let obj4 = stateFromStores(5929);
      obj5.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_WARNING };
      let obj6 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_WARNING };
      obj5.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj5.render = function render() {
        return null;
      };
      obj[constants.CHANGE_EMAIL_WARNING] = obj5;
      let obj8 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, gestureEnabled: false, headerLeft: null, headerTitle: null, headerRight: null, render: null };
      let obj7 = stateFromStores(5929);
      obj8.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.OVERVIEW };
      obj8.headerLeft = function headerLeft() {
        return null;
      };
      let obj9 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.OVERVIEW };
      obj8.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj8.headerRight = function headerRight() {
        const obj = { source: closure_1_1(9982), accessibilityLabel: null, onPress: null };
        let intl = stateFromStores(1115).intl;
        obj.accessibilityLabel = intl.string(stateFromStores(1115).t.PdRCRg);
        obj.onPress = function onPress() {
          const obj2 = { key: "VerificationOverviewMore", options: null, hasIcons: false };
          const obj3 = { label: null, isDestructive: true, onPress: null };
          const intl = closure_1_0(1115).intl;
          obj3.label = intl.string(closure_1_0(1115).t["2jxGer"]);
          obj3.onPress = function onPress() {
            return closure_1_1(dependencyMap[19]).logout("verification_modal");
          };
          const items = [obj3];
          obj2.options = items;
          const result = closure_1_0(7527).showSimpleActionSheet(obj2);
        };
        return closure_1_11(stateFromStores(7707).HeaderActionButton, obj);
      };
      obj8.render = function render() {
        return closure_1_11(closure_1_1(18022), {});
      };
      obj[constants.OVERVIEW] = obj8;
      const obj11 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      let obj10 = stateFromStores(5929);
      obj11.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      const obj12 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      obj11.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj11.render = function render() {
        return closure_1_11(closure_1_1(6920), {});
      };
      obj[constants.RESEND_EMAIL] = obj11;
      const obj14 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj13 = stateFromStores(5929);
      obj14.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      const obj15 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      obj14.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj14.render = function render() {
        return closure_1_11(closure_1_1(6920), {});
      };
      obj[constants.CHANGE_EMAIL_COMPLETE] = obj14;
      const obj17 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj16 = stateFromStores(5929);
      obj17.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE };
      const obj18 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE };
      obj17.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj17.render = function render() {
        return closure_1_11(closure_1_1(6933), { isChangeEmail: false });
      };
      obj[constants.CONFIRM_EMAIL_CHANGE_CODE] = obj17;
      const obj20 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj19 = stateFromStores(5929);
      obj20.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_START };
      const obj21 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_START };
      obj20.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj20.render = function render() {
        return closure_1_11(closure_1_1(6930), {});
      };
      obj[constants.CONFIRM_EMAIL_CHANGE_START] = obj20;
      const obj23 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj22 = stateFromStores(5929);
      obj23.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL };
      const obj24 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL };
      obj23.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj23.render = function render() {
        return closure_1_11(closure_1_1(7315), { isChangeEmail: false });
      };
      obj[constants.ENTER_EMAIL] = obj23;
      const obj26 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj25 = stateFromStores(5929);
      obj26.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE };
      const obj27 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE };
      obj26.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj26.render = function render(arg0, arg1) {
        closure_0 = arg1;
        let obj = {};
        const merged = Object.assign(arg0);
        obj.reason = closure_0(7378).ChangePhoneReason.USER_ACTION_REQUIRED;
        obj.onComplete = function onComplete(phone) {
          return closure_0.push(constants.VERIFY_PHONE, {
            phone,
            onVerified(arg0) {
              closure_0 = arg0;
              let obj = { hideUnverifiedBanner: true, onSubmit: null, onSuccess: null };
              closure_2 = closure_1_3(/* F129237 */ function() { ... });
              obj.onSubmit = function onSubmit() { ... };
              closure_1 = closure_1_3(/* F129239 */ function() { ... });
              obj.onSuccess = function onSuccess() { ... };
              closure_0.push(constants.VERIFY_PASSWORD, obj);
            }
          });
        };
        return closure_11(closure_1(7377), obj);
      };
      obj[constants.ADD_PHONE] = obj26;
      const obj29 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj28 = stateFromStores(5929);
      obj29.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PHONE };
      const obj30 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PHONE };
      obj29.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj29.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_11(closure_1_1(7411), { disableKeyboardAvoidingView: true });
      };
      obj[constants.VERIFY_PHONE] = obj29;
      const obj32 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj31 = stateFromStores(5929);
      obj32.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD };
      const obj33 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD };
      obj32.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj32.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_11(closure_1_1(7326), {});
      };
      obj[constants.VERIFY_PASSWORD] = obj32;
      const obj35 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj34 = stateFromStores(5929);
      obj35.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL };
      const obj36 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL };
      obj35.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj35.render = function render(arg0, navigation) {
        return closure_1_11(closure_1_13, { navigation });
      };
      obj[constants.PHONE_THEN_EMAIL_INTERSTITIAL] = obj35;
      return obj;
    }, []),
    initialRouteStack: memo,
    headerBackTitle: null
  };
  let intl = stateFromStores(1115).intl;
  obj2.headerBackTitle = intl.string(stateFromStores(1115).t["13/7kX"]);
  return jsx(stateFromStores(7333).Navigator, {
    screens: noop.useMemo(() => {
      let obj = {};
      let obj2 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_COLLECT_REASONS }, headerTitle: null, render: null };
      let obj3 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_COLLECT_REASONS };
      obj2.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj2.render = function render() {
        return null;
      };
      obj[constants.CHANGE_EMAIL_COLLECT_REASONS] = obj2;
      let obj5 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      let obj4 = stateFromStores(5929);
      obj5.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_WARNING };
      let obj6 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_WARNING };
      obj5.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj5.render = function render() {
        return null;
      };
      obj[constants.CHANGE_EMAIL_WARNING] = obj5;
      let obj8 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, gestureEnabled: false, headerLeft: null, headerTitle: null, headerRight: null, render: null };
      let obj7 = stateFromStores(5929);
      obj8.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.OVERVIEW };
      obj8.headerLeft = function headerLeft() {
        return null;
      };
      let obj9 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.OVERVIEW };
      obj8.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj8.headerRight = function headerRight() {
        const obj = { source: closure_1_1(9982), accessibilityLabel: null, onPress: null };
        let intl = stateFromStores(1115).intl;
        obj.accessibilityLabel = intl.string(stateFromStores(1115).t.PdRCRg);
        obj.onPress = function onPress() {
          const obj2 = { key: "VerificationOverviewMore", options: null, hasIcons: false };
          const obj3 = { label: null, isDestructive: true, onPress: null };
          const intl = closure_1_0(1115).intl;
          obj3.label = intl.string(closure_1_0(1115).t["2jxGer"]);
          obj3.onPress = function onPress() {
            return closure_1_1(dependencyMap[19]).logout("verification_modal");
          };
          const items = [obj3];
          obj2.options = items;
          const result = closure_1_0(7527).showSimpleActionSheet(obj2);
        };
        return closure_1_11(stateFromStores(7707).HeaderActionButton, obj);
      };
      obj8.render = function render() {
        return closure_1_11(closure_1_1(18022), {});
      };
      obj[constants.OVERVIEW] = obj8;
      const obj11 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      let obj10 = stateFromStores(5929);
      obj11.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      const obj12 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      obj11.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj11.render = function render() {
        return closure_1_11(closure_1_1(6920), {});
      };
      obj[constants.RESEND_EMAIL] = obj11;
      const obj14 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj13 = stateFromStores(5929);
      obj14.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      const obj15 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
      obj14.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj14.render = function render() {
        return closure_1_11(closure_1_1(6920), {});
      };
      obj[constants.CHANGE_EMAIL_COMPLETE] = obj14;
      const obj17 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj16 = stateFromStores(5929);
      obj17.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE };
      const obj18 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE };
      obj17.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj17.render = function render() {
        return closure_1_11(closure_1_1(6933), { isChangeEmail: false });
      };
      obj[constants.CONFIRM_EMAIL_CHANGE_CODE] = obj17;
      const obj20 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj19 = stateFromStores(5929);
      obj20.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_START };
      const obj21 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_START };
      obj20.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj20.render = function render() {
        return closure_1_11(closure_1_1(6930), {});
      };
      obj[constants.CONFIRM_EMAIL_CHANGE_START] = obj20;
      const obj23 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj22 = stateFromStores(5929);
      obj23.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL };
      const obj24 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL };
      obj23.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj23.render = function render() {
        return closure_1_11(closure_1_1(7315), { isChangeEmail: false });
      };
      obj[constants.ENTER_EMAIL] = obj23;
      const obj26 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj25 = stateFromStores(5929);
      obj26.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE };
      const obj27 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE };
      obj26.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj26.render = function render(arg0, arg1) {
        closure_0 = arg1;
        let obj = {};
        const merged = Object.assign(arg0);
        obj.reason = closure_0(7378).ChangePhoneReason.USER_ACTION_REQUIRED;
        obj.onComplete = function onComplete(phone) {
          return closure_0.push(constants.VERIFY_PHONE, {
            phone,
            onVerified(arg0) {
              closure_0 = arg0;
              let obj = { hideUnverifiedBanner: true, onSubmit: null, onSuccess: null };
              closure_2 = closure_1_3(/* F129237 */ function() { ... });
              obj.onSubmit = function onSubmit() { ... };
              closure_1 = closure_1_3(/* F129239 */ function() { ... });
              obj.onSuccess = function onSuccess() { ... };
              closure_0.push(constants.VERIFY_PASSWORD, obj);
            }
          });
        };
        return closure_11(closure_1(7377), obj);
      };
      obj[constants.ADD_PHONE] = obj26;
      const obj29 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj28 = stateFromStores(5929);
      obj29.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PHONE };
      const obj30 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PHONE };
      obj29.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj29.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_11(closure_1_1(7411), { disableKeyboardAvoidingView: true });
      };
      obj[constants.VERIFY_PHONE] = obj29;
      const obj32 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj31 = stateFromStores(5929);
      obj32.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD };
      const obj33 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD };
      obj32.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj32.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_11(closure_1_1(7326), {});
      };
      obj[constants.VERIFY_PASSWORD] = obj32;
      const obj35 = { impressionName: stateFromStores(1249).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
      const obj34 = stateFromStores(5929);
      obj35.impressionProperties = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL };
      const obj36 = { impression_group: stateFromStores(1249).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL };
      obj35.headerTitle = stateFromStores(5929).getHeaderNoTitle();
      obj35.render = function render(arg0, navigation) {
        return closure_1_11(closure_1_13, { navigation });
      };
      obj[constants.PHONE_THEN_EMAIL_INTERSTITIAL] = obj35;
      return obj;
    }, []),
    initialRouteStack: memo,
    headerBackTitle: null
  });
};