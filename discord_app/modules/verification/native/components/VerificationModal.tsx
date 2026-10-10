// discord_app/modules/verification/native/components/VerificationModal.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import Link from "../../../../../_runtime/01504_Link.js";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import ResendEmailDefault from "ResendEmail.tsx";
import ConfirmEmailChangeStartDefault from "ConfirmEmailChangeStart.tsx";
import ConfirmEmailChangeCodeDefault from "ConfirmEmailChangeCode.tsx";
import EnterEmailDefault from "EnterEmail.tsx";
import UserSettingsConfirmPasswordDefault from "../../../user_settings/account/native/UserSettingsConfirmPassword.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import VerifyPhoneDefault from "VerifyPhone.tsx";
import HeaderActionButton from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import _modDef8664 from "../../../../../_runtime/metro/08664__.js";
import OverviewDefault from "Overview.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import PhoneVerificationStore from "../../../../stores/PhoneVerificationStore.tsx";
import UserRequiredActionStore from "../../../../stores/UserRequiredActionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function getScreens() {
  let obj = {};
  let obj2 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_COLLECT_REASONS }, headerTitle: null, render: null };
  let obj3 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_COLLECT_REASONS };
  obj2.headerTitle = NavigatorHeader.getHeaderNoTitle();
  obj2.render = function render() {
    return null;
  };
  obj[constants.CHANGE_EMAIL_COLLECT_REASONS] = obj2;
  let obj5 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
  obj5.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_WARNING };
  let obj6 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_WARNING };
  obj5.headerTitle = NavigatorHeader.getHeaderNoTitle();
  obj5.render = function render() {
    return null;
  };
  obj[constants.CHANGE_EMAIL_WARNING] = obj5;
  let obj8 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, gestureEnabled: false, headerLeft: null, headerTitle: null, headerRight: null, render: null };
  obj8.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.OVERVIEW };
  obj8.headerLeft = function headerLeft() {
    return null;
  };
  let obj9 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.OVERVIEW };
  obj8.headerTitle = NavigatorHeader.getHeaderNoTitle();
  obj8.headerRight = function headerRight() {
    const obj = { source: _modDef8664, accessibilityLabel: null, onPress: null };
    let intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.PdRCRg);
    obj.onPress = function onPress() {
      const obj2 = { key: "VerificationOverviewMore", options: null, hasIcons: false };
      const obj3 = { label: null, isDestructive: true, onPress: null };
      const intl = closure_1_0(1126).intl;
      obj3.label = intl.string(closure_1_0(1126).t["2jxGer"]);
      obj3.onPress = function onPress() {
        return closure_1_1(dependencyMap[21]).logout("verification_modal");
      };
      const items = [obj3];
      obj2.options = items;
      const result = closure_1_0(6890).showSimpleActionSheet(obj2);
    };
    return jsx(HeaderActionButton.HeaderActionButton, { source: _modDef8664, accessibilityLabel: null, onPress: null });
  };
  obj8.render = function render() {
    return jsx(OverviewDefault, {});
  };
  obj[constants.OVERVIEW] = obj8;
  const obj11 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
  obj11.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
  const obj12 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
  obj11.headerTitle = NavigatorHeader.getHeaderNoTitle();
  obj11.render = function render() {
    return jsx(ResendEmailDefault, {});
  };
  obj[constants.RESEND_EMAIL] = obj11;
  const obj14 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
  obj14.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
  const obj15 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL };
  obj14.headerTitle = NavigatorHeader.getHeaderNoTitle();
  obj14.render = function render() {
    return jsx(ResendEmailDefault, {});
  };
  obj[constants.CHANGE_EMAIL_COMPLETE] = obj14;
  const obj17 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
  obj17.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE };
  const obj18 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE };
  obj17.headerTitle = NavigatorHeader.getHeaderNoTitle();
  obj17.render = function render() {
    return jsx(ConfirmEmailChangeCodeDefault, { isChangeEmail: false });
  };
  obj[constants.CONFIRM_EMAIL_CHANGE_CODE] = obj17;
  const obj20 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
  obj20.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_START };
  const obj21 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_START };
  obj20.headerTitle = NavigatorHeader.getHeaderNoTitle();
  obj20.render = function render() {
    return jsx(ConfirmEmailChangeStartDefault, {});
  };
  obj[constants.CONFIRM_EMAIL_CHANGE_START] = obj20;
  const obj23 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
  obj23.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL };
  const obj24 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL };
  obj23.headerTitle = NavigatorHeader.getHeaderNoTitle();
  obj23.render = function render() {
    return jsx(EnterEmailDefault, { isChangeEmail: false });
  };
  obj[constants.ENTER_EMAIL] = obj23;
  const obj26 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
  obj26.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE };
  const obj27 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE };
  obj26.headerTitle = NavigatorHeader.getHeaderNoTitle();
  obj26.render = function render(arg0, arg1) {
    closure_0 = arg1;
    let obj = {};
    const merged = Object.assign(arg0);
    obj.reason = closure_0(6733).ChangePhoneReason.USER_ACTION_REQUIRED;
    obj.onComplete = function onComplete(phone) {
      return closure_0.push(constants.VERIFY_PHONE, {
        phone,
        onVerified(arg0) {
          closure_0 = arg0;
          let obj = { hideUnverifiedBanner: true, onSubmit: null, onSuccess: null };
          closure_2 = closure_1_3(function*(arg0) {
            if (c1 === 2) {
              c1 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp5 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: "+51" };
              }
            } else {
              try {
                c1 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c1 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c1 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    c4 = 1;
                    currentUser = currentUser.getCurrentUser();
                    const result = v3(6274).isPhoneReverification(currentUser, closure_2_7.getAction());
                    const obj10 = v3(6733);
                    if (result) {
                      c2 = 3;
                      c1 = 1;
                      const obj4 = { value: obj10.reverifyPhone(closure_0, closure_0, closure_0(6733).ChangePhoneReason.USER_ACTION_REQUIRED), done: false };
                      return obj4;
                    } else {
                      c2 = 2;
                      c1 = 1;
                      const obj5 = { value: obj10.addPhone(closure_0, closure_0, closure_0(6733).ChangePhoneReason.USER_ACTION_REQUIRED), done: false };
                      return obj5;
                    }
                    const obj9 = v3(6274);
                  }
                } else if (1 === tmp6) {
                  c4 = 0;
                  c1 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  if (2 === tmp6) {
                    if (arg0 === 1) {
                      c1 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 0;
                      c1 = 3;
                      const obj7 = { value, done: true };
                      return obj7;
                    }
                  } else if (arg0 === 1) {
                    c1 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 0;
                    c1 = 3;
                    const obj = { value, done: true };
                    return obj;
                  }
                  c4 = 0;
                  c1 = 3;
                  const obj8 = { value, done: true };
                  return obj8;
                }
              } catch (tmp12) {
                value = tmp12;
                if (tmp3 === c4) {
                  c1 = tmp2;
                  throw tmp12;
                } else {
                  c2 = tmp;
                }
              }
            }
          });
          obj.onSubmit = function onSubmit() {
            const self = this;
            const apply = closure_2.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          closure_1 = closure_1_3(function*() {
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: "+51" };
              }
            } else {
              try {
                c2 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    c1 = 1;
                    c2 = 1;
                    const obj5 = { value: tmp4(closure_2[30]).waitUntil(() => { ... }), done: false };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  if (closure_2_7.getAction() === constants.REQUIRE_VERIFIED_EMAIL) {
                    tmp4.push(constants2.PHONE_THEN_EMAIL_INTERSTITIAL);
                  } else {
                    tmp4.push(constants2.OVERVIEW);
                  }
                  c2 = 3;
                }
              } catch (tmp15) {
                c2 = tmp;
                throw tmp15;
              }
            }
          });
          obj.onSuccess = function onSuccess() {
            const self = this;
            const apply = closure_1.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          closure_0.push(constants.VERIFY_PASSWORD, obj);
        }
      });
    };
    return closure_11(closure_1(6732), obj);
  };
  obj[constants.ADD_PHONE] = obj26;
  const obj29 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
  obj29.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PHONE };
  const obj30 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PHONE };
  obj29.headerTitle = NavigatorHeader.getHeaderNoTitle();
  obj29.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(VerifyPhoneDefault, { disableKeyboardAvoidingView: true });
  };
  obj[constants.VERIFY_PHONE] = obj29;
  const obj32 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
  obj32.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD };
  const obj33 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD };
  obj32.headerTitle = NavigatorHeader.getHeaderNoTitle();
  obj32.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(UserSettingsConfirmPasswordDefault, {});
  };
  obj[constants.VERIFY_PASSWORD] = obj32;
  const obj35 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: null, headerTitle: null, render: null };
  obj35.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL };
  const obj36 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL };
  obj35.headerTitle = NavigatorHeader.getHeaderNoTitle();
  obj35.render = function render(arg0, navigation) {
    return <closure_1_13 navigation={navigation} />;
  };
  obj[constants.PHONE_THEN_EMAIL_INTERSTITIAL] = obj35;
  return obj;
}
const View = fn(17).View;
const Constants = fn(1085);
({ UserRequiredActions: closure_9, VerificationModalScenes: c10 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_12 = createStyles.createStyles({ button: { position: "absolute", right: 32, bottom: 32, left: 32 } });
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function PhoneThenEmailInterstitial(navigation) {
  const cResult = navigation(576).c(8);
  navigation = navigation.navigation;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.KLnLIP);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.XGbCq3);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp5 = stringResult;
    tmp6 = stringResult1;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(tmp(1126).t["3oK4qw"]);
    cResult[2] = stringResult2;
    let tmp9 = stringResult2;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== navigation) {
    const obj2 = {
      text: tmp9,
      onPress() {
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
        }
    };
    const tmp13 = jsx(tmp(5379).Button, {
      text: tmp9,
      onPress() {
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
        }
    });
    cResult[3] = navigation;
    cResult[4] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === tmp4.button) {
    if (cResult[6] === tmp11) {
      let tmp14 = cResult[7];
    }
    return tmp14;
  }
  const obj = navigation(576);
  const tmp15 = jsx(navigation(1200).EmptyState, { Illustration: navigation(18215).VerifyPhone, title: tmp5, body: tmp6, children: <View style={tmp4.button}>{tmp11}</View> });
  cResult[5] = tmp4.button;
  cResult[6] = tmp11;
  cResult[7] = tmp15;
  tmp14 = tmp15;
  const obj3 = { Illustration: navigation(18215).VerifyPhone, title: tmp5, body: tmp6, children: <View style={tmp4.button}>{tmp11}</View> };
}) : (function PhoneThenEmailInterstitial(navigation) {
  navigation = navigation.navigation;
  const obj = { Illustration: navigation(18215).VerifyPhone, title: null, body: null, children: null };
  const intl = navigation(1126).intl;
  obj.title = intl.string(navigation(1126).t.KLnLIP);
  const intl2 = navigation(1126).intl;
  obj.body = intl2.string(navigation(1126).t.XGbCq3);
  const obj2 = { style: closure_12().button, children: null };
  const obj3 = { text: null, onPress: null };
  const intl3 = navigation(1126).intl;
  obj3.text = intl3.string(navigation(1126).t["3oK4qw"]);
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
  obj2.children = jsx(navigation(5379).Button, { text: null, onPress: null });
  obj.children = <View style={closure_12().button}>{null}</View>;
  return jsx(navigation(1200).EmptyState, { Illustration: navigation(18215).VerifyPhone, title: null, body: null, children: null });
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/verification/native/components/VerificationModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VerificationModal() {
  const cResult = c.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PhoneVerificationStore];
    const fn = function s() {
      return countrySelectorOpened.getCountrySelectorOpened();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { name: constants.OVERVIEW };
    cResult[2] = obj2;
    let tmp8 = obj2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    const items1 = [tmp8];
    if (!stateFromStores) {
      cResult[3] = stateFromStores;
      cResult[4] = items1;
      let tmp10 = items1;
    } else {
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { name: constants.ADD_PHONE };
        cResult[5] = obj3;
        let tmp11 = obj3;
      } else {
        tmp11 = cResult[5];
      }
      items1.push(tmp11);
    }
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      ChatInputUtils.dismissKeyboard();
    };
    const items2 = [];
    cResult[6] = fn2;
    cResult[7] = items2;
    let tmp15 = items2;
    let tmp14 = fn2;
  } else {
    tmp14 = cResult[6];
    tmp15 = cResult[7];
  }
  const effect = noop.useEffect(tmp14, tmp15);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp19 = getScreens();
    cResult[8] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["13/7kX"]);
    cResult[9] = stringResult;
    let tmp20 = stringResult;
  } else {
    tmp20 = cResult[9];
  }
  if (cResult[10] !== tmp10) {
    const obj4 = { screens: tmp17, initialRouteStack: tmp10, headerBackTitle: tmp20 };
    const tmp24 = jsx(Navigator.Navigator, { screens: tmp17, initialRouteStack: tmp10, headerBackTitle: tmp20 });
    cResult[10] = tmp10;
    cResult[11] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[11];
  }
  return tmp22;
}) : (function VerificationModal() {
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
    stateFromStores(4985).dismissKeyboard();
  }, []);
  let obj2 = { screens: noop.useMemo(() => getScreens(), []), initialRouteStack: memo, headerBackTitle: null };
  const intl = stateFromStores(1126).intl;
  obj2.headerBackTitle = intl.string(stateFromStores(1126).t["13/7kX"]);
  return jsx(stateFromStores(6687).Navigator, { screens: noop.useMemo(() => getScreens(), []), initialRouteStack: memo, headerBackTitle: null });
});