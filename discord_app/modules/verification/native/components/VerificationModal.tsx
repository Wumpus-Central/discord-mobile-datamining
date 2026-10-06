// === Module 17692: VerificationModal ===

// Module 17692 (VerificationModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import Link from "Link" /* 1491 */;
import ChatInputUtils from "ChatInputUtils" /* 4751 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import ResendEmailDefault from "ResendEmail" /* 6087 */;
import ConfirmEmailChangeStartDefault from "ConfirmEmailChangeStart" /* 6099 */;
import ConfirmEmailChangeCodeDefault from "ConfirmEmailChangeCode" /* 6102 */;
import EnterEmailDefault from "EnterEmail" /* 6482 */;
import UserSettingsConfirmPasswordDefault from "UserSettingsConfirmPassword" /* 6496 */;
import Navigator2 from "Navigator" /* 6503 */;
import VerifyPhoneDefault from "VerifyPhone" /* 6582 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6890 */;
import AssetRegistryDefault from "AssetRegistry" /* 9325 */;
import OverviewDefault from "Overview" /* 17698 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import PhoneVerificationStore from "PhoneVerificationStore" /* 17693 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2044 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c2;

let c10;
let c9;
function getScreens() {
  let obj10;
  let obj13;
  let obj16;
  let obj19;
  let obj22;
  let obj25;
  let obj28;
  let obj3;
  let obj31;
  let obj34;
  let obj37;
  let obj4;
  let obj6;
  let obj7;
  let obj9;
  let obj = {};
  let obj2 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL,
    impressionProperties: obj3,
    headerTitle: obj4.getHeaderNoTitle(),
    render() {
      return null;
    }
  };
  const CHANGE_EMAIL_COLLECT_REASONS = constants.CHANGE_EMAIL_COLLECT_REASONS;
  obj3 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_COLLECT_REASONS };
  obj4 = NavigatorHeader;
  obj[CHANGE_EMAIL_COLLECT_REASONS] = obj2;
  let obj5 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL,
    impressionProperties: obj6,
    headerTitle: obj7.getHeaderNoTitle(),
    render() {
      return null;
    }
  };
  const CHANGE_EMAIL_WARNING = constants.CHANGE_EMAIL_WARNING;
  obj6 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CHANGE_EMAIL_WARNING };
  obj7 = NavigatorHeader;
  obj[CHANGE_EMAIL_WARNING] = obj5;
  let obj8 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL,
    impressionProperties: obj9,
    gestureEnabled: false,
    headerLeft() {
      return null;
    },
    headerTitle: obj10.getHeaderNoTitle(),
    headerRight() {
      const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
      let intl = intl4.intl;
      return <HeaderActionButton source={AssetRegistryDefault} accessibilityLabel={intl.string(intl4.t.PdRCRg)} onPress={function onPress() {
        let intl;
        let items;
        let obj = { key: "VerificationOverviewMore", options: items, hasIcons: false };
        const obj2 = {
          label: intl.string(closure_1_0(closure_1_2[11]).t["2jxGer"]),
          isDestructive: true,
          onPress() {
            const obj = closure_1_1(closure_1_2[21]);
            return obj.logout("verification_modal");
          }
        };
        const showSimpleActionSheet = closure_1_0(closure_1_2[20]).showSimpleActionSheet;
        closure_1_0(closure_1_2[20]);
        intl = closure_1_0(closure_1_2[11]).intl;
        items = [obj2];
        const result = showSimpleActionSheet(obj);
      }} />;
    },
    render() {
      return jsx(OverviewDefault, {});
    }
  };
  const OVERVIEW = constants.OVERVIEW;
  obj9 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.OVERVIEW };
  obj[OVERVIEW] = obj8;
  obj10 = NavigatorHeader;
  const RESEND_EMAIL = constants.RESEND_EMAIL;
  const obj11 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL },
    headerTitle: obj13.getHeaderNoTitle(),
    render() {
      return jsx(ResendEmailDefault, {});
    }
  };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL });
  obj[RESEND_EMAIL] = obj11;
  obj13 = NavigatorHeader;
  const CHANGE_EMAIL_COMPLETE = constants.CHANGE_EMAIL_COMPLETE;
  const obj14 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL },
    headerTitle: obj16.getHeaderNoTitle(),
    render() {
      return jsx(ResendEmailDefault, {});
    }
  };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.RESEND_EMAIL });
  obj[CHANGE_EMAIL_COMPLETE] = obj14;
  obj16 = NavigatorHeader;
  const CONFIRM_EMAIL_CHANGE_CODE = constants.CONFIRM_EMAIL_CHANGE_CODE;
  const obj17 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE },
    headerTitle: obj19.getHeaderNoTitle(),
    render() {
      return jsx(ConfirmEmailChangeCodeDefault, { isChangeEmail: false });
    }
  };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_CODE });
  obj[CONFIRM_EMAIL_CHANGE_CODE] = obj17;
  obj19 = NavigatorHeader;
  const CONFIRM_EMAIL_CHANGE_START = constants.CONFIRM_EMAIL_CHANGE_START;
  const obj20 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_START },
    headerTitle: obj22.getHeaderNoTitle(),
    render() {
      return jsx(ConfirmEmailChangeStartDefault, {});
    }
  };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.CONFIRM_EMAIL_CHANGE_START });
  obj[CONFIRM_EMAIL_CHANGE_START] = obj20;
  obj22 = NavigatorHeader;
  const ENTER_EMAIL = constants.ENTER_EMAIL;
  const obj23 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL },
    headerTitle: obj25.getHeaderNoTitle(),
    render() {
      return jsx(EnterEmailDefault, { isChangeEmail: false });
    }
  };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ENTER_EMAIL });
  obj[ENTER_EMAIL] = obj23;
  obj25 = NavigatorHeader;
  const ADD_PHONE = constants.ADD_PHONE;
  const obj26 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE },
    headerTitle: obj28.getHeaderNoTitle(),
    render(arg0, arg1) {
      let closure_0 = arg1;
      let obj = {
        reason: closure_0(closure_2[28]).ChangePhoneReason.USER_ACTION_REQUIRED,
        onComplete(phone) {
          let obj = {
            phone,
            onVerified(arg0) {
              let constants2;
              navigation = arg0;
              let obj = {
                hideUnverifiedBanner: true,
                onSubmit: function() {
                  return closure_2(...arguments);
                },
                onSuccess: function() {
                  return closure_1(...arguments);
                }
              };
              const push = navigation.push;
              const VERIFY_PASSWORD = constants.VERIFY_PASSWORD;
              let closure_2 = closure_1_3(function*(arg0) {
                let value;
                closure_0 = arg0;
                if (c1 === 2) {
                  c1 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp2 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  let c4;
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
                        const isPhoneReverification = v3(closure_2[29]).isPhoneReverification;
                        const tmp18 = v3(closure_2[29]);
                        currentUser = currentUser.getCurrentUser();
                        const result = isPhoneReverification(currentUser, closure_2_7.getAction());
                        const obj9 = v3(closure_2[28]);
                        if (result) {
                          c2 = 3;
                          c1 = 1;
                          const obj4 = { value: obj9.reverifyPhone(closure_0, closure_0, closure_0(closure_2[28]).ChangePhoneReason.USER_ACTION_REQUIRED), done: false };
                          return obj4;
                        } else {
                          c2 = 2;
                          c1 = 1;
                          const obj5 = { value: obj9.addPhone(closure_0, closure_0, closure_0(closure_2[28]).ChangePhoneReason.USER_ACTION_REQUIRED), done: false };
                          return obj5;
                        }
                      }
                    } else if (1 === c2) {
                      c4 = 0;
                      c1 = 3;
                      const obj6 = { value, done: true };
                      return obj6;
                    } else {
                      if (2 === c2) {
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
                  } catch (tmp9) {
                    value = tmp9;
                    if (0 === c4) {
                      c1 = 3;
                      throw tmp9;
                    } else {
                      c2 = 1;
                    }
                  }
                }
              });
              let closure_1 = closure_1_3(function*() {
                let obj2;
                if (c2 === 2) {
                  c2 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp2 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    return { value: "IconComponent", done: null };
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
                        closure_0 = tmp3;
                        c1 = 1;
                        c2 = 1;
                        const obj5 = { value: obj2.waitUntil(() => action.getAction() !== constants.REQUIRE_VERIFIED_PHONE), done: false };
                        obj2 = closure_0(closure_2[30]);
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
                        closure_0.push(constants2.PHONE_THEN_EMAIL_INTERSTITIAL);
                      } else {
                        closure_0.push(constants2.OVERVIEW);
                      }
                      c2 = 3;
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp14) {
                    c2 = 3;
                    throw tmp14;
                  }
                }
              });
              push(VERIFY_PASSWORD, obj);
            }
          };
          return navigation.push(constants.VERIFY_PHONE, obj);
        }
      };
      const tmp = closure_1(closure_2[27]);
      const merged = Object.assign(arg0);
      return closure_11(tmp, obj);
    }
  };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.ADD_PHONE });
  obj[ADD_PHONE] = obj26;
  obj28 = NavigatorHeader;
  const VERIFY_PHONE = constants.VERIFY_PHONE;
  const obj29 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PHONE },
    headerTitle: obj31.getHeaderNoTitle(),
    render(arg0) {
      VerifyPhoneDefault;
      const merged = Object.assign(arg0);
      return <tmp disableKeyboardAvoidingView />;
    }
  };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PHONE });
  obj[VERIFY_PHONE] = obj29;
  obj31 = NavigatorHeader;
  let VERIFY_PASSWORD = constants.VERIFY_PASSWORD;
  const obj32 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD },
    headerTitle: obj34.getHeaderNoTitle(),
    render(arg0) {
      UserSettingsConfirmPasswordDefault;
      const merged = Object.assign(arg0);
      return <tmp />;
    }
  };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.VERIFY_PASSWORD });
  obj[VERIFY_PASSWORD] = obj32;
  obj34 = NavigatorHeader;
  const PHONE_THEN_EMAIL_INTERSTITIAL = constants.PHONE_THEN_EMAIL_INTERSTITIAL;
  const obj35 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFICATION_MODAL,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL },
    headerTitle: obj37.getHeaderNoTitle(),
    render(arg0, navigation) {
      return <closure_1_13 navigation={navigation} />;
    }
  };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: constants.PHONE_THEN_EMAIL_INTERSTITIAL });
  obj[PHONE_THEN_EMAIL_INTERSTITIAL] = obj35;
  obj37 = NavigatorHeader;
  return obj;
}
const View = react_native.View;
({ UserRequiredActions: c9, VerificationModalScenes: c10 } = Constants);
const jsx = Fragment.jsx;
let closure_12 = createStyles.createStyles({ button: { position: "absolute", right: 32, bottom: 32, left: 32 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((navigation) => {
  let tmp11;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = navigation(576);
  const cResult = obj.c(8);
  navigation = navigation.navigation;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(navigation(1126).t.KLnLIP);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(navigation(1126).t.XGbCq3);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp5 = stringResult;
    tmp6 = stringResult1;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const button = tmp4.button;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(navigation(1126).t["3oK4qw"]);
    cResult[2] = stringResult2;
    tmp9 = stringResult2;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== navigation) {
    const tmp13 = jsx(navigation(5601).Button, {
      text: tmp9,
      onPress() {
          let ENTER_EMAIL;
          const currentUser = UserStore.getCurrentUser();
          let email;
          if (currentUser != null) {
            email = currentUser.email;
          }
          if (null != email) {
            ENTER_EMAIL = constants.RESEND_EMAIL;
          } else {
            ENTER_EMAIL = constants.ENTER_EMAIL;
          }
          const dispatch = navigation.dispatch;
          const StackActions = Link.StackActions;
          dispatch(StackActions.push(ENTER_EMAIL));
        }
    });
    cResult[3] = navigation;
    cResult[4] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === tmp4.button) {
    let tmp14;
    if (cResult[6] === tmp11) {
      tmp14 = cResult[7];
    }
    return tmp14;
  }
  const EmptyState = tmp(1188).EmptyState;
  const tmp15 = <EmptyState Illustration={navigation(17694).VerifyPhone} title={tmp5} body={tmp6}>{null}</EmptyState>;
  cResult[5] = tmp4.button;
  cResult[6] = tmp11;
  cResult[7] = tmp15;
  tmp14 = tmp15;
}) : ((navigation) => {
  let intl3;
  navigation = navigation.navigation;
  const tmp = closure_12();
  const EmptyState = navigation(1188).EmptyState;
  const intl = navigation(1126).intl;
  const intl2 = navigation(1126).intl;
  ({
    text: intl3.string(navigation(1126).t["3oK4qw"]),
    onPress() {
      let ENTER_EMAIL;
      const currentUser = UserStore.getCurrentUser();
      let email;
      if (currentUser != null) {
        email = currentUser.email;
      }
      if (null != email) {
        ENTER_EMAIL = constants.RESEND_EMAIL;
      } else {
        ENTER_EMAIL = constants.ENTER_EMAIL;
      }
      const dispatch = navigation.dispatch;
      const StackActions = Link.StackActions;
      dispatch(StackActions.push(ENTER_EMAIL));
    }
  });
  const Button = navigation(5601).Button;
  intl3 = navigation(1126).intl;
  return <EmptyState Illustration={navigation(17694).VerifyPhone} title={intl.string(navigation(1126).t.KLnLIP)} body={intl2.string(navigation(1126).t.XGbCq3)}>{null}</EmptyState>;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let countrySelectorOpened;
  let tmp10;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp20;
  let tmp22;
  let tmp4;
  let tmp5;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(12);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { name: constants.OVERVIEW };
    cResult[2] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    const items1 = [tmp8];
    if (stateFromStores) {
      let tmp11;
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { name: constants.ADD_PHONE };
        cResult[5] = obj3;
        tmp11 = obj3;
      } else {
        tmp11 = cResult[5];
      }
      items1.push(tmp11);
    }
    cResult[3] = stateFromStores;
    cResult[4] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = ChatInputUtils;
      obj2.dismissKeyboard();
    };
    const items2 = [];
    cResult[6] = fn2;
    cResult[7] = items2;
    tmp15 = items2;
    tmp14 = fn2;
  } else {
    tmp14 = cResult[6];
    tmp15 = cResult[7];
  }
  const effect = react.useEffect(tmp14, tmp15);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp19 = getScreens();
    cResult[8] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t["13/7kX"]);
    cResult[9] = stringResult;
    tmp20 = stringResult;
  } else {
    tmp20 = cResult[9];
  }
  if (cResult[10] !== tmp10) {
    const tmp24 = jsx(Navigator2.Navigator, { screens: tmp17, initialRouteStack: tmp10, headerBackTitle: tmp20 });
    cResult[10] = tmp10;
    cResult[11] = tmp24;
    tmp22 = tmp24;
  } else {
    tmp22 = cResult[11];
  }
  return tmp22;
}) : (() => {
  let countrySelectorOpened;
  let stateFromStores;
  let obj = stateFromStores(504);
  let items = [PhoneVerificationStore];
  stateFromStores = obj.useStateFromStores(items, () => countrySelectorOpened.getCountrySelectorOpened());
  const items1 = [stateFromStores];
  const memo = react.useMemo(() => {
    const items = [];
    const obj = { name: constants.OVERVIEW };
    items[0] = obj;
    if (stateFromStores) {
      const obj2 = { name: tmp.ADD_PHONE };
      items.push(obj2);
    }
    return items;
  }, items1);
  const effect = react.useEffect(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = stateFromStores(dependencyMap[35]);
    obj2.dismissKeyboard();
  }, []);
  const Navigator = stateFromStores(6503).Navigator;
  const intl = stateFromStores(1126).intl;
  return <Navigator screens={react.useMemo(() => getScreens(), [])} initialRouteStack={memo} headerBackTitle={intl.string(stateFromStores(1126).t["13/7kX"])} />;
});
let result = size.fileFinishedImporting("modules/verification/native/components/VerificationModal.tsx");

export default tmp3;