// === Module 16316: ManageAccountsModal ===

// Module 16316 (ManageAccountsModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import timing from "timing" /* 4891 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import HeaderShared from "HeaderShared" /* 7498 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10662 */;
import MultiAccountStore from "MultiAccountStore" /* 12056 */;
import MultiAccountActionCreatorsAll from "MultiAccountActionCreators" /* 12059 */;
import ManageAccountsConstants from "ManageAccountsConstants" /* 16317 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StreamerModeStore from "StreamerModeStore" /* 4723 */;
import UserStore from "UserStore" /* 1377 */;
import Constants_mod from "Constants" /* 12057 */;
import Constants_mod2 from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7556 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, set;

let closure_14;
let closure_15;
let closure_16;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let obj2;
let obj3;
let obj4;
let closure_4 = ["children"];
let react = react_mod;
const View = react_native.View;
const MultiAccountTokenStatus = MultiAccountStore.MultiAccountTokenStatus;
let Constants = Constants_mod2;
({ MANAGE_EDIT_TRANSITION_DURATION: closure_14, MAX_ACCOUNTS: closure_15, MultiAccountSwitchLocation: closure_16 } = Constants);
const ManageAccountsScreens = ManageAccountsConstants.ManageAccountsScreens;
Constants = Constants_mod2;
({ AnalyticEvents: closure_18, AuthStates: closure_19 } = Constants);
({ jsx: closure_20, jsxs: closure_21 } = Fragment);
let closure_22 = NativeStackView.createNativeStackNavigator();
let createStyles = createStyles_mod;
let obj = { container: obj2, sortableListView: obj3, addAccountLabel: obj4, trailingIconContainer: { width: 24, height: 24 }, trailingIcon: { position: "absolute" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1, paddingTop: 16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4 = { color: nativeDefault.colors.TEXT_LINK };
let closure_23 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let currentUser;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const tmp = user;
  let obj = user(576);
  const cResult = obj.c(16);
  user = user.user;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StreamerModeStore];
    const fn = function o() {
      return StreamerModeStore.hidePersonalInformation;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    const fn2 = function _() {
      return currentUser.getCurrentUser();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  if (id === user.id) {
    let tmp28;
    const _Symbol3 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp30 = closure_20(tmp(1188).Spacer, { size: 21 });
      cResult[4] = tmp30;
      tmp28 = tmp30;
    } else {
      tmp28 = cResult[4];
    }
    return tmp28;
  } else {
    let username;
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === user.discriminator) {
        if (cResult[7] === user.username) {
          username = cResult[8];
        }
        if (cResult[9] === user.id) {
          let tmp17;
          let tmp19;
          let tmp21;
          let tmp25;
          if (cResult[10] === tmp13) {
            tmp17 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t.lSLMaU);
            cResult[12] = stringResult;
            tmp19 = stringResult;
          } else {
            tmp19 = cResult[12];
          }
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            let obj2 = { color: username(587).colors.ICON_FEEDBACK_CRITICAL };
            const CircleMinusIcon = tmp(15132).CircleMinusIcon;
            const tmp24 = closure_20(CircleMinusIcon, obj2);
            cResult[13] = tmp24;
            tmp21 = tmp24;
          } else {
            tmp21 = cResult[13];
          }
          if (cResult[14] !== tmp17) {
            let obj3 = { accessibilityRole: "button", accessibilityLabel: tmp19, onPress: tmp17, children: tmp21 };
            const tmp27 = closure_20(tmp(5909).PressableOpacity, obj3);
            cResult[14] = tmp17;
            cResult[15] = tmp27;
            tmp25 = tmp27;
          } else {
            tmp25 = cResult[15];
          }
          return tmp25;
        }
        let closure_0 = _asyncToGenerator(async () => {
          let intl;
          let intl2;
          let intl3;
          let intl4;
          let obj5;
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c2 = 2;
              if (0 === username) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  const obj4 = { title: intl.string(tmp(dependencyMap[21]).t.n0Fbg6), body: intl2.formatToPlainString(tmp(dependencyMap[21]).t.phEQmS, obj5), confirmText: intl3.string(tmp(dependencyMap[21]).t.N86XcP), confirmColor: tmp(dependencyMap[19]).ButtonColors.RED, cancelText: intl4.string(tmp(dependencyMap[21]).t["ETE/oC"]), isDismissable: true };
                  const _confirm = username(dependencyMap[20]).confirm;
                  const tmp16 = username(dependencyMap[20]);
                  intl = tmp(dependencyMap[21]).intl;
                  intl2 = tmp(dependencyMap[21]).intl;
                  obj5 = { username };
                  intl3 = tmp(dependencyMap[21]).intl;
                  intl4 = tmp(dependencyMap[21]).intl;
                  username = 1;
                  c2 = 1;
                  const obj6 = { value: _confirm(obj4), done: false };
                  return obj6;
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                if (value) {
                  const obj = MultiAccountActionCreatorsAll;
                  obj.removeAccount(tmp.id);
                }
                c2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp10) {
              c2 = 3;
              throw tmp10;
            }
          }
        });
        function handlePressRemove() {
          return closure_0(...arguments);
        }
        cResult[9] = user.id;
        cResult[10] = tmp13;
        cResult[11] = handlePressRemove;
        tmp17 = handlePressRemove;
      }
    }
    username = user.username;
    let tmp14 = stateFromStores;
    if (!tmp14) {
      tmp14 = "0" === user.discriminator;
    }
    let tmp15 = username;
    if (!tmp14) {
      const _HermesInternal = HermesInternal;
      const sum = username + "#" + user.discriminator;
      username = sum;
      tmp15 = sum;
    }
    cResult[5] = stateFromStores;
    cResult[6] = user.discriminator;
    cResult[7] = user.username;
    cResult[8] = tmp15;
  }
}) : ((user) => {
  let CircleMinusIcon;
  let closure_1;
  let currentUser;
  let intl;
  let obj4;
  user = user.user;
  importDefault = undefined;
  let obj = function _handlePressRemove2() {
    let username;
    obj = _asyncToGenerator(async () => {
      let closure_0;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let obj5;
      let v1;
      let v3;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const obj4 = { title: intl.string(tmp(closure_1_3[21]).t.n0Fbg6), body: intl2.formatToPlainString(tmp(closure_1_3[21]).t.phEQmS, obj5), confirmText: intl3.string(tmp(closure_1_3[21]).t.N86XcP), confirmColor: tmp(closure_1_3[19]).ButtonColors.RED, cancelText: intl4.string(tmp(closure_1_3[21]).t["ETE/oC"]), isDismissable: true };
              const _confirm = v1(closure_1_3[20]).confirm;
              const tmp16 = v1(closure_1_3[20]);
              intl = tmp(closure_1_3[21]).intl;
              intl2 = tmp(closure_1_3[21]).intl;
              obj5 = { username };
              intl3 = tmp(closure_1_3[21]).intl;
              intl4 = tmp(closure_1_3[21]).intl;
              v1 = 1;
              v3 = 1;
              const obj6 = { value: _confirm(obj4), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            if (value) {
              obj = v3(closure_1_3[22]);
              obj.removeAccount(closure_128_0.id);
            }
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp10) {
          v3 = 3;
          throw tmp10;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = user;
  obj = user(504);
  const items = [StreamerModeStore];
  let stateFromStores = obj.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation);
  let obj2 = user(504);
  const items1 = [UserStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  if (id === user.id) {
    return closure_20(tmp(1188).Spacer, { size: 21 });
  } else {
    const username = user.username;
    importDefault = username;
    if (!stateFromStores) {
      stateFromStores = "0" === user.discriminator;
    }
    if (!stateFromStores) {
      const _HermesInternal = HermesInternal;
      importDefault = username + "#" + user.discriminator;
    }
    let obj3 = {
      accessibilityRole: "button",
      accessibilityLabel: intl.string(tmp(1126).t.lSLMaU),
      onPress: function handlePressRemove() {
          return obj(...arguments);
        },
      children: closure_20(CircleMinusIcon, obj4)
    };
    const PressableOpacity = tmp(5909).PressableOpacity;
    intl = tmp(1126).intl;
    obj4 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
    CircleMinusIcon = tmp(15132).CircleMinusIcon;
    return closure_20(PressableOpacity, obj3);
  }
});
const __initData = { code: "function ManageAccountsModalTsx1(){const{withTiming,leadingWidth,MANAGE_EDIT_TRANSITION_DURATION}=this.__closure;return{width:withTiming(leadingWidth.get(),{duration:MANAGE_EDIT_TRANSITION_DURATION})};}" };
const __initData2 = { code: "function ManageAccountsModalTsx2(){const{withTiming,leadingWidth,MANAGE_EDIT_TRANSITION_DURATION}=this.__closure;return{width:withTiming(leadingWidth.get(),{duration:MANAGE_EDIT_TRANSITION_DURATION})};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function ManageAccounts(isEditing) {
  let CirclePlusIcon;
  let FormRow;
  let Label;
  let closure_8;
  let component;
  let id;
  let intl;
  let multiAccountUsers;
  let obj10;
  let obj8;
  let obj9;
  let tmp5;
  let tmp6;
  const tmp = isEditing;
  let tmp2 = multiAccountUsers;
  let obj = isEditing(multiAccountUsers[17]);
  const cResult = obj.c(35);
  isEditing = isEditing.isEditing;
  navigation = isEditing.navigation;
  let tmp4 = closure_23();
  let closure_2 = tmp4;
  let obj2 = isEditing(multiAccountUsers[25]);
  multiAccountUsers = obj2.useMultiAccountUsers().multiAccountUsers;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    let fn = function o() {
      const obj = { currentUserId: id.getId() };
      return obj;
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let tmpResult = tmp(tmp2[18]);
  const currentUserId = tmpResult.useStateFromStoresObject(tmp5, tmp6).currentUserId;
  const tmpResult3 = tmp(tmp2[26]);
  const sharedValue = tmpResult3.useSharedValue(0);
  const fn2 = function v() {
    let obj2;
    const obj = { width: obj2.withTiming(sharedValue.get(), obj3) };
    obj2 = timing;
    return obj;
  };
  const tmpResult4 = tmp(tmp2[26]);
  let obj3 = { withTiming: tmp(tmp2[27]).withTiming, leadingWidth: sharedValue, MANAGE_EDIT_TRANSITION_DURATION: duration };
  fn2.__closure = obj3;
  fn2.__workletHash = 3389178545077;
  fn2.__initData = __initData;
  const animatedStyle = tmpResult4.useAnimatedStyle(fn2);
  const tmp11 = navigation;
  const tmp12 = navigation(tmp2[28])(isEditing);
  let closure_7 = tmp12;
  if (cResult[2] === isEditing) {
    if (cResult[3] === sharedValue) {
      let tmp13;
      if (cResult[4] === tmp12) {
        tmp13 = cResult[5];
      }
      const effect = react.useEffect(tmp13);
      if (cResult[6] === multiAccountUsers.length) {
        let tmp16;
        if (cResult[7] === navigation) {
          tmp16 = cResult[8];
        }
        if (cResult[9] === currentUserId) {
          if (cResult[10] === isEditing) {
            let tmp17;
            let tmp18;
            if (cResult[11] === navigation) {
              tmp17 = cResult[12];
            }
            react = tmp17;
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              function handleUserMove(arg0) {
                let from;
                let to;
                ({ from, to } = arg0);
                const obj = closure_2(multiAccountUsers[22]);
                obj.moveAccount(from, to);
              }
              cResult[13] = handleUserMove;
              tmp18 = handleUserMove;
            } else {
              tmp18 = cResult[13];
            }
            if (cResult[14] === tmp17) {
              if (cResult[15] === isEditing) {
                if (cResult[16] === animatedStyle) {
                  if (cResult[17] === tmp4.trailingIcon) {
                    let tmp20;
                    if (cResult[18] === tmp4.trailingIconContainer) {
                      tmp20 = cResult[19];
                    }
                    if (cResult[20] === tmp16) {
                      if (cResult[21] === isEditing) {
                        let tmp21;
                        let tmp25;
                        if (cResult[22] === tmp4.addAccountLabel) {
                          tmp21 = cResult[23];
                        }
                        if (cResult[24] !== tmp21) {
                          let obj4 = { component: View, transitionEnter: true, transitionLeave: true, transitionAppear: true, children: tmp21 };
                          const tmp28 = closure_20(tmp(tmp2[31]).TransitionGroup, obj4);
                          cResult[24] = tmp21;
                          cResult[25] = tmp28;
                          tmp25 = tmp28;
                        } else {
                          tmp25 = cResult[25];
                        }
                        if (cResult[26] === multiAccountUsers) {
                          if (cResult[27] === tmp4.sortableListView) {
                            if (cResult[28] === tmp25) {
                              if (cResult[29] === !isEditing) {
                                let tmp29;
                                if (cResult[30] === tmp20) {
                                  tmp29 = cResult[31];
                                }
                                if (cResult[32] === tmp4.container) {
                                  let tmp32;
                                  if (cResult[33] === tmp29) {
                                    tmp32 = cResult[34];
                                  }
                                  return tmp32;
                                }
                                let obj5 = { style: tmp4.container, bottom: true, children: tmp29 };
                                const tmp34 = closure_20(tmp(tmp2[37]).SafeAreaPaddingView, obj5);
                                cResult[32] = tmp4.container;
                                cResult[33] = tmp29;
                                cResult[34] = tmp34;
                                tmp32 = tmp34;
                              }
                            }
                          }
                        }
                        let obj6 = { data: multiAccountUsers, onRowMoved: tmp18, disableSorting: !isEditing, wrapperStyles: tmp4.sortableListView, renderRow: tmp20, keyboardShouldPersistTaps: "handled", scrollEventThrottle: 16, scrollEnabled: true, footer: tmp25 };
                        const tmp31 = closure_20(tmp11(tmp2[36]), obj6);
                        cResult[26] = multiAccountUsers;
                        cResult[27] = tmp4.sortableListView;
                        cResult[28] = tmp25;
                        cResult[29] = !isEditing;
                        cResult[30] = tmp20;
                        cResult[31] = tmp31;
                        tmp29 = tmp31;
                      }
                    }
                    let tmp22 = !isEditing;
                    if (tmp22) {
                      let obj7 = { duration, children: closure_20(FormRow, obj8) };
                      obj8 = { leading: closure_20(CirclePlusIcon, obj9), label: closure_20(Label, obj10), onPress: tmp16 };
                      const tmp11Result = tmp11(tmp2[32]);
                      FormRow = tmp(tmp2[34]).FormRow;
                      obj9 = { color: tmp11(tmp2[15]).colors.TEXT_LINK };
                      CirclePlusIcon = tmp(tmp2[35]).CirclePlusIcon;
                      obj10 = { style: tmp4.addAccountLabel, text: intl.string(tmp(tmp2[21]).t.bPP34Q) };
                      Label = tmp(tmp2[34]).FormRow.Label;
                      intl = tmp(tmp2[21]).intl;
                      tmp22 = closure_20(tmp11Result, obj7);
                    }
                    cResult[20] = tmp16;
                    cResult[21] = isEditing;
                    cResult[22] = tmp4.addAccountLabel;
                    cResult[23] = tmp22;
                    tmp21 = tmp22;
                  }
                }
              }
            }
            const fn4 = function x(user, arg1) {
              let TransitionGroup;
              let TransitionGroup2;
              let fn;
              let num;
              let obj2;
              let obj4;
              let obj5;
              let tmpResult;
              let tmpResult2;
              let closure_0 = user;
              const obj = { user, onPressUser: fn, showActiveAccountLabel: true, leading: closure_1_20(TransitionGroup, obj2), trailing: closure_1_20(TransitionGroup2, obj5), delayLongPress: num };
              fn = null;
              const tmp4 = navigation(multiAccountUsers[30]);
              if (!closure_0) {
                fn = () => closure_8(user);
              }
              obj2 = { component: navigation(multiAccountUsers[26]).View, transitionEnter: true, transitionLeave: true, style: animatedStyle, children: tmpResult };
              TransitionGroup = isEditing(multiAccountUsers[31]).TransitionGroup;
              tmpResult = tmp5;
              if (tmpResult) {
                const obj3 = { duration, children: closure_1_20(closure_1_24, obj4) };
                obj4 = { user };
                const tmp2Result = navigation(multiAccountUsers[32]);
                tmpResult = closure_1_20(tmp2Result, obj3);
              }
              obj5 = { component, transitionEnter: true, transitionLeave: true, transitionAppear: true, style: closure_2.trailingIconContainer, children: tmpResult2 };
              TransitionGroup2 = isEditing(multiAccountUsers[31]).TransitionGroup;
              const tmp2Result2 = navigation(multiAccountUsers[32]);
              const obj6 = { duration, style: closure_2.trailingIcon, children: null };
              if (closure_0) {
                obj6.children = closure_1_20(isEditing(multiAccountUsers[33]).DragIcon, {});
                tmpResult2 = closure_1_20(tmp2Result2, obj6, "drag");
              } else {
                const obj7 = { user };
                obj6.children = closure_1_20(isEditing(multiAccountUsers[30]).AccountStatusIcon, obj7);
                tmpResult2 = closure_1_20(tmp2Result2, obj6, "status");
              }
              num = undefined;
              if (closure_0) {
                num = 100;
              }
              return closure_1_20(tmp4, obj, arg1);
            };
            cResult[14] = tmp17;
            cResult[15] = isEditing;
            cResult[16] = animatedStyle;
            cResult[17] = tmp4.trailingIcon;
            cResult[18] = tmp4.trailingIconContainer;
            cResult[19] = fn4;
            tmp20 = fn4;
          }
        }
        function handlePressUser(id) {
          if (!isEditing) {
            if (id.id !== currentUserId) {
              if (id.tokenStatus === MultiAccountTokenStatus.INVALID) {
                navigation.push(constants3.LOGIN);
                const obj2 = AnalyticsUtilsDefault;
                obj2.track(constants2.LOGIN_VIEWED, { source: "multi_account_invalid_user" });
              } else {
                const obj = MultiAccountActionCreatorsAll;
                obj.switchAccount(id.id, undefined, constants.MANAGE_ACCOUNTS_MODAL);
              }
              return tmp8;
            }
          }
        }
        cResult[9] = currentUserId;
        cResult[10] = isEditing;
        cResult[11] = navigation;
        cResult[12] = handlePressUser;
        tmp17 = handlePressUser;
      }
      function handlePressAddAccount() {
        let intl;
        let intl2;
        let obj3;
        if (multiAccountUsers.length >= closure_15) {
          const obj2 = { title: intl.string(intl5.t.w7wfXi), body: intl2.formatToPlainString(intl5.t.WOyelG, obj3), isDismissable: true };
          const show = actions_AlertActionCreatorsDefault.show;
          actions_AlertActionCreatorsDefault;
          intl = intl5.intl;
          intl2 = intl5.intl;
          obj3 = { maxNumAccounts: tmp };
          show(obj2);
        } else {
          navigation.push(constants3.LOGIN);
          const obj = AnalyticsUtilsDefault;
          obj.track(constants2.LOGIN_VIEWED, { source: "multi_account_add_account" });
        }
      }
      cResult[6] = multiAccountUsers.length;
      cResult[7] = navigation;
      cResult[8] = handlePressAddAccount;
      tmp16 = handlePressAddAccount;
    }
  }
  const fn3 = function f() {
    const tmp2 = null != closure_7 && tmp !== isEditing;
    if (tmp2) {
      let num = 0;
      set = sharedValue.set;
      if (isEditing) {
        num = 37;
      }
      const result = set(num);
    }
  };
  cResult[2] = isEditing;
  cResult[3] = sharedValue;
  cResult[4] = tmp12;
  cResult[5] = fn3;
  tmp13 = fn3;
}) : (function ManageAccounts(isEditing) {
  let CirclePlusIcon;
  let FormRow;
  let Label;
  let TransitionGroup;
  let component;
  let id;
  let intl;
  let obj10;
  let obj11;
  let obj12;
  let obj7;
  let obj8;
  let tmp8Result;
  let tmp9;
  isEditing = isEditing.isEditing;
  navigation = isEditing.navigation;
  let multiAccountUsers;
  const tmp = closure_23();
  let closure_2 = tmp;
  let tmp2 = isEditing;
  let obj = isEditing(multiAccountUsers[25]);
  multiAccountUsers = obj.useMultiAccountUsers().multiAccountUsers;
  let obj2 = isEditing(multiAccountUsers[18]);
  const items = [AuthenticationStore];
  const currentUserId = obj2.useStateFromStoresObject(items, () => {
    const obj = { currentUserId: id.getId() };
    return obj;
  }).currentUserId;
  let obj3 = isEditing(multiAccountUsers[26]);
  const sharedValue = obj3.useSharedValue(0);
  let obj4 = isEditing(multiAccountUsers[26]);
  let fn = function o() {
    let obj2;
    const obj = { width: obj2.withTiming(sharedValue.get(), obj3) };
    obj2 = timing;
    return obj;
  };
  let obj5 = { withTiming: isEditing(multiAccountUsers[27]).withTiming, leadingWidth: sharedValue, MANAGE_EDIT_TRANSITION_DURATION: duration };
  fn.__closure = obj5;
  fn.__workletHash = 7941413812886;
  fn.__initData = __initData2;
  const style = obj4.useAnimatedStyle(fn);
  let closure_7 = navigation(multiAccountUsers[28])(isEditing);
  const effect = react.useEffect(() => {
    const tmp2 = null != closure_7 && tmp !== isEditing;
    if (tmp2) {
      let num = 0;
      set = sharedValue.set;
      if (isEditing) {
        num = 37;
      }
      const result = set(num);
    }
  });
  let obj6 = { style: tmp.container, bottom: true, children: closure_20(tmp9, obj7) };
  const SafeAreaPaddingView = isEditing(multiAccountUsers[37]).SafeAreaPaddingView;
  obj7 = {
    data: multiAccountUsers,
    onRowMoved: function handleUserMove(arg0) {
      let from;
      let to;
      ({ from, to } = arg0);
      const obj = closure_2(multiAccountUsers[22]);
      obj.moveAccount(from, to);
    },
    disableSorting: !isEditing,
    wrapperStyles: tmp.sortableListView,
    renderRow(user, arg1) {
      let TransitionGroup;
      let TransitionGroup2;
      let fn;
      let num;
      let obj2;
      let obj4;
      let obj5;
      let tmpResult;
      let tmpResult2;
      let obj = { user, onPressUser: fn, showActiveAccountLabel: true, leading: closure_1_20(TransitionGroup, obj2), trailing: closure_1_20(TransitionGroup2, obj5), delayLongPress: num };
      fn = null;
      const tmp4 = navigation(multiAccountUsers[30]);
      if (!user) {
        fn = () => {
          let tmp2;
          if (!isEditing) {
            if (user.id !== currentUserId) {
              if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
                navigation.push(constants3.LOGIN);
                const obj2 = AnalyticsUtilsDefault;
                obj2.track(constants2.LOGIN_VIEWED, { source: "multi_account_invalid_user" });
              } else {
                const obj = MultiAccountActionCreatorsAll;
                obj.switchAccount(user.id, undefined, constants.MANAGE_ACCOUNTS_MODAL);
              }
              tmp2 = tmp8;
            }
          }
          return tmp2;
        };
      }
      obj2 = { component: navigation(multiAccountUsers[26]).View, transitionEnter: true, transitionLeave: true, style, children: tmpResult };
      TransitionGroup = isEditing(multiAccountUsers[31]).TransitionGroup;
      tmpResult = tmp5;
      if (tmpResult) {
        const obj3 = { duration, children: closure_1_20(closure_1_24, obj4) };
        obj4 = { user };
        const tmp2Result = navigation(multiAccountUsers[32]);
        tmpResult = closure_1_20(tmp2Result, obj3);
      }
      obj5 = { component, transitionEnter: true, transitionLeave: true, transitionAppear: true, style: closure_2.trailingIconContainer, children: tmpResult2 };
      TransitionGroup2 = isEditing(multiAccountUsers[31]).TransitionGroup;
      const tmp2Result2 = navigation(multiAccountUsers[32]);
      const obj6 = { duration, style: closure_2.trailingIcon, children: null };
      if (user) {
        obj6.children = closure_1_20(isEditing(multiAccountUsers[33]).DragIcon, {});
        tmpResult2 = closure_1_20(tmp2Result2, obj6, "drag");
      } else {
        const obj7 = { user };
        obj6.children = closure_1_20(isEditing(multiAccountUsers[30]).AccountStatusIcon, obj7);
        tmpResult2 = closure_1_20(tmp2Result2, obj6, "status");
      }
      num = undefined;
      if (user) {
        num = 100;
      }
      return closure_1_20(tmp4, obj, arg1);
    },
    keyboardShouldPersistTaps: "handled",
    scrollEventThrottle: 16,
    scrollEnabled: true,
    footer: closure_20(TransitionGroup, obj8)
  };
  obj8 = { component: View, transitionEnter: true, transitionLeave: true, transitionAppear: true, children: tmp8Result };
  tmp8Result = !isEditing;
  tmp9 = navigation(multiAccountUsers[36]);
  TransitionGroup = isEditing(multiAccountUsers[31]).TransitionGroup;
  if (!isEditing) {
    const obj9 = { duration, children: closure_20(FormRow, obj10) };
    obj10 = {
      leading: closure_20(CirclePlusIcon, obj11),
      label: closure_20(Label, obj12),
      onPress: function handlePressAddAccount() {
          let intl;
          let intl2;
          let obj3;
          if (multiAccountUsers.length >= closure_15) {
            const obj2 = { title: intl.string(intl5.t.w7wfXi), body: intl2.formatToPlainString(intl5.t.WOyelG, obj3), isDismissable: true };
            const show = actions_AlertActionCreatorsDefault.show;
            actions_AlertActionCreatorsDefault;
            intl = intl5.intl;
            intl2 = intl5.intl;
            obj3 = { maxNumAccounts: tmp };
            show(obj2);
          } else {
            navigation.push(constants2.LOGIN);
            const obj = AnalyticsUtilsDefault;
            obj.track(constants.LOGIN_VIEWED, { source: "multi_account_add_account" });
          }
        }
    };
    const tmp6Result = navigation(multiAccountUsers[32]);
    FormRow = tmp2(tmp3[34]).FormRow;
    obj11 = { color: navigation(multiAccountUsers[15]).colors.TEXT_LINK };
    CirclePlusIcon = tmp2(tmp3[35]).CirclePlusIcon;
    obj12 = { style: tmp.addAccountLabel, text: intl.string(tmp2(multiAccountUsers[21]).t.bPP34Q) };
    Label = tmp2(tmp3[34]).FormRow.Label;
    intl = tmp2(tmp3[21]).intl;
    tmp8Result = closure_20(tmp6Result, obj9);
  }
  return closure_20(SafeAreaPaddingView, obj6);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ManageAccountsModal(initialRouteName) {
  let accessibilityNativeStackOptions;
  let closure_2;
  let isEditing;
  let items;
  let tmp = accessibilityNativeStackOptions;
  let obj = accessibilityNativeStackOptions(576);
  const cResult = obj.c(12);
  let MANAGE_ACCOUNTS = initialRouteName.initialRouteName;
  if (undefined === MANAGE_ACCOUNTS) {
    MANAGE_ACCOUNTS = ManageAccountsScreens.MANAGE_ACCOUNTS;
  }
  const tmpResult = tmp(6496);
  accessibilityNativeStackOptions = tmpResult.useAccessibilityNativeStackOptions();
  [isEditing, closure_2] = react.useState(false);
  if (cResult[0] === accessibilityNativeStackOptions) {
    let tmp8;
    let tmp9;
    let tmp15;
    let tmp20;
    let tmp25;
    if (cResult[1] === isEditing) {
      tmp8 = cResult[2];
    }
    if (cResult[3] !== isEditing) {
      let obj2 = {
        name: ManageAccountsScreens.MANAGE_ACCOUNTS,
        options() {
              let intl;
              let renderHeaderTextButton;
              const obj = { title: intl.string(intl5.t.WbFpq4), headerRight: renderHeaderTextButton };
              intl = intl5.intl;
              const getRenderHeaderTextButton = HeaderShared.getRenderHeaderTextButton;
              HeaderShared;
              const intl2 = intl5.intl;
              const string = intl2.string;
              const t = intl5.t;
              if (first) {
                renderHeaderTextButton = getRenderHeaderTextButton(string(t.i4jeWR), () => closure_1_2(false));
              } else {
                renderHeaderTextButton = getRenderHeaderTextButton(string(t.bt75uw), () => closure_1_2(true));
              }
              return obj;
            },
        children(navigation) {
              const obj = { isEditing, navigation: navigation.navigation };
              return closure_20(closure_27, obj);
            }
      };
      const tmp13 = closure_20(closure_22.Screen, obj2);
      cResult[3] = isEditing;
      cResult[4] = tmp13;
      tmp9 = tmp13;
    } else {
      tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = {
        name: ManageAccountsScreens.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED,
        options() {
              let intl;
              const obj = { title: intl.string(accessibilityNativeStackOptions(dependencyMap[21]).t.WbFpq4) };
              intl = accessibilityNativeStackOptions(dependencyMap[21]).intl;
              return obj;
            },
        children() {
              let obj = {
                handleLogin(login, password, undelete) {
                  const obj = isEditing(closure_1_3[42]);
                  const obj2 = { login, password, undelete };
                  obj.login(obj2);
                },
                onReset() {
                  const obj = isEditing(closure_1_3[42]);
                  obj.loginReset(true);
                }
              };
              return closure_1_20(first(dependencyMap[41]), obj);
            }
      };
      const tmp19 = closure_20(closure_22.Screen, obj3);
      cResult[5] = tmp19;
      tmp15 = tmp19;
    } else {
      tmp15 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = {
        name: ManageAccountsScreens.LOGIN,
        options() {
              return { headerShown: false };
            },
        children() {
              return closure_1_20(first(dependencyMap[43]), { isMultiAccount: true });
            }
      };
      const tmp24 = closure_20(closure_22.Screen, obj4);
      cResult[6] = tmp24;
      tmp20 = tmp24;
    } else {
      tmp20 = cResult[6];
    }
    const _Symbol3 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = {
        name: ManageAccountsScreens.MFA,
        options() {
              return { headerShown: false };
            },
        children() {
              return closure_1_20(first(dependencyMap[44]), { isMultiAccount: true });
            }
      };
      const tmp29 = closure_20(closure_22.Screen, obj5);
      cResult[7] = tmp29;
      tmp25 = tmp29;
    } else {
      tmp25 = cResult[7];
    }
    if (cResult[8] === MANAGE_ACCOUNTS) {
      if (cResult[9] === tmp8) {
        let tmp30;
        if (cResult[10] === tmp9) {
          tmp30 = cResult[11];
        }
        return tmp30;
      }
    }
    const obj6 = { initialRouteName: MANAGE_ACCOUNTS, screenOptions: tmp8, children: items };
    items = [tmp9, tmp15, tmp20, tmp25];
    const tmp33 = closure_21(closure_22.Navigator, obj6);
    cResult[8] = MANAGE_ACCOUNTS;
    cResult[9] = tmp8;
    cResult[10] = tmp9;
    cResult[11] = tmp33;
    tmp30 = tmp33;
  }
  const fn = function l(arg0) {
    let renderModalCloseImage;
    let tmp;
    let obj = {
      headerTitle(children) {
        children = children.children;
        const obj = { title: children };
        const tmp = closure_1_5(children, closure_1_4);
        const GenericHeaderTitle = accessibilityNativeStackOptions(closure_1_3[39]).GenericHeaderTitle;
        const merged = Object.assign(tmp);
        return closure_1_20(GenericHeaderTitle, obj);
      },
      headerLeft: renderModalCloseImage,
      headerTitleAlign: "center"
    };
    renderModalCloseImage = undefined;
    if (!first) {
      const obj2 = HeaderShared;
      renderModalCloseImage = obj2.getRenderModalCloseImage(tmp);
    }
    let merged = Object.assign(accessibilityNativeStackOptions);
    const merged1 = Object.assign(getNavigationModalPresentationDefault());
    return obj;
  };
  cResult[0] = accessibilityNativeStackOptions;
  cResult[1] = isEditing;
  cResult[2] = fn;
  tmp8 = fn;
}) : (function ManageAccountsModal(initialRouteName) {
  let c1;
  let c2;
  let closure_0;
  let isEditing;
  let items;
  let MANAGE_ACCOUNTS = initialRouteName.initialRouteName;
  if (MANAGE_ACCOUNTS === undefined) {
    MANAGE_ACCOUNTS = ManageAccountsScreens.MANAGE_ACCOUNTS;
  }
  _require = undefined;
  c1 = undefined;
  c2 = undefined;
  let obj = require("Navigator");
  _require = obj.useAccessibilityNativeStackOptions();
  [c1, c2] = react.useState(false);
  let obj2 = {
    initialRouteName: MANAGE_ACCOUNTS,
    screenOptions(arg0) {
      let renderModalCloseImage;
      let obj = {
        headerTitle(children) {
          children = children.children;
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const obj = { title: children };
          const GenericHeaderTitle = closure_1_0(closure_1_3[39]).GenericHeaderTitle;
          const merged1 = Object.assign(merged);
          return closure_1_20(GenericHeaderTitle, obj);
        },
        headerLeft: renderModalCloseImage,
        headerTitleAlign: "center"
      };
      renderModalCloseImage = undefined;
      if (!c1) {
        const obj2 = HeaderShared;
        renderModalCloseImage = obj2.getRenderModalCloseImage(tmp);
      }
      let merged = Object.assign(closure_0);
      let merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    },
    children: items
  };
  const Navigator = closure_22.Navigator;
  items = [, , , ];
  const obj3 = {
    name: ManageAccountsScreens.MANAGE_ACCOUNTS,
    options() {
      let intl;
      let renderHeaderTextButton;
      const obj = { title: intl.string(intl5.t.WbFpq4), headerRight: renderHeaderTextButton };
      intl = intl5.intl;
      const getRenderHeaderTextButton = HeaderShared.getRenderHeaderTextButton;
      HeaderShared;
      const intl2 = intl5.intl;
      const string = intl2.string;
      const t = intl5.t;
      if (c1) {
        renderHeaderTextButton = getRenderHeaderTextButton(string(t.i4jeWR), () => closure_1_2(false));
      } else {
        renderHeaderTextButton = getRenderHeaderTextButton(string(t.bt75uw), () => closure_1_2(true));
      }
      return obj;
    },
    children(navigation) {
      const obj = { isEditing, navigation: navigation.navigation };
      return closure_20(closure_27, obj);
    }
  };
  _slicedToArray(react.useState(false), 2);
  items[0] = closure_20(closure_22.Screen, obj3);
  const obj4 = {
    name: ManageAccountsScreens.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED,
    options() {
      let intl;
      const obj = { title: intl.string(closure_0(dependencyMap[21]).t.WbFpq4) };
      intl = closure_0(dependencyMap[21]).intl;
      return obj;
    },
    children() {
      let obj = {
        handleLogin(login, password, undelete) {
          const obj = isEditing(closure_1_3[42]);
          const obj2 = { login, password, undelete };
          obj.login(obj2);
        },
        onReset() {
          const obj = isEditing(closure_1_3[42]);
          obj.loginReset(true);
        }
      };
      return closure_1_20(isEditing(dependencyMap[41]), obj);
    }
  };
  items[1] = closure_20(closure_22.Screen, obj4);
  const obj5 = {
    name: ManageAccountsScreens.LOGIN,
    options() {
      return { headerShown: false };
    },
    children() {
      return closure_1_20(isEditing(dependencyMap[43]), { isMultiAccount: true });
    }
  };
  items[2] = closure_20(closure_22.Screen, obj5);
  const obj6 = {
    name: ManageAccountsScreens.MFA,
    options() {
      return { headerShown: false };
    },
    children() {
      return closure_1_20(isEditing(dependencyMap[44]), { isMultiAccount: true });
    }
  };
  items[3] = closure_20(closure_22.Screen, obj6);
  return closure_21(Navigator, obj2);
}));
let result = size.fileFinishedImporting("modules/multi_account/native/ManageAccountsModal.tsx");

export default memoResult;