// === Module 16616: ManageAccountsModal ===

// Module 16616 (ManageAccountsModal)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import timing from "timing" /* 5091 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5298 */;
import HeaderShared from "HeaderShared" /* 9232 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 9588 */;
import MultiAccountActionCreatorsAll from "MultiAccountActionCreators" /* 12148 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StreamerModeStore from "StreamerModeStore" /* 4923 */;
import UserStore from "UserStore" /* 1389 */;

const require = globalThis.__r;

require = fn;
let closure_4 = ["children"];
const View = fn(17).View;
const MultiAccountTokenStatus = fn(12144).MultiAccountTokenStatus;
let Constants = fn(12145);
({ MANAGE_EDIT_TRANSITION_DURATION: closure_14, MAX_ACCOUNTS: closure_15, MultiAccountSwitchLocation: closure_16 } = Constants);
const ManageAccountsScreens = fn(16617).ManageAccountsScreens;
Constants = fn(1085);
({ AnalyticEvents: closure_18, AuthStates: closure_19 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
const NativeStackNavigator = fn(9279);
let closure_22 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(5090);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1, paddingTop: 16 }, sortableListView: null, addAccountLabel: null, trailingIconContainer: null, trailingIcon: null };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1, paddingTop: 16 };
obj.sortableListView = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj5 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.addAccountLabel = { color: nativeDefault.colors.TEXT_LINK };
obj.trailingIconContainer = { width: 24, height: 24 };
obj.trailingIcon = { position: "absolute" };
let closure_23 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function RemoveMultiAccountUserButton(user) {
  const cResult = require("c").c(16);
  user = user.user;
  _require = user;
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
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    const fn2 = function _() {
      return currentUser.getCurrentUser();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp9);
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  if (id === user.id) {
    const _Symbol3 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp30 = closure_20(tmp(1200).Spacer, { size: 21 });
      cResult[4] = tmp30;
      let tmp28 = tmp30;
    } else {
      tmp28 = cResult[4];
    }
    return tmp28;
  } else {
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === user.discriminator) {
        if (cResult[7] === user.username) {
          let username = cResult[8];
        }
        if (cResult[9] === user.id) {
          if (cResult[10] === tmp13) {
            let tmp17 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t.lSLMaU);
            cResult[12] = stringResult;
            let tmp19 = stringResult;
          } else {
            tmp19 = cResult[12];
          }
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            let obj2 = { color: username(587).colors.ICON_FEEDBACK_CRITICAL };
            const tmp24 = closure_20(tmp(15409).CircleMinusIcon, obj2);
            cResult[13] = tmp24;
            let tmp21 = tmp24;
          } else {
            tmp21 = cResult[13];
          }
          if (cResult[14] !== tmp17) {
            let obj3 = { accessibilityRole: "button", accessibilityLabel: tmp19, onPress: tmp17, children: tmp21 };
            const tmp27 = closure_20(tmp(6189).PressableOpacity, obj3);
            cResult[14] = tmp17;
            cResult[15] = tmp27;
            let tmp25 = tmp27;
          } else {
            tmp25 = cResult[15];
          }
          return tmp25;
        }
        _require = asyncGeneratorStep(async () => {
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
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
                  const obj4 = { title: null, body: null, confirmText: null, confirmColor: null, cancelText: null, isDismissable: true };
                  const intl = tmp2(1126).intl;
                  obj4.title = intl.string(tmp2(1126).t.n0Fbg6);
                  const intl2 = tmp2(1126).intl;
                  const obj5 = { username };
                  obj4.body = intl2.formatToPlainString(tmp2(1126).t.phEQmS, obj5);
                  const intl3 = tmp2(1126).intl;
                  obj4.confirmText = intl3.string(tmp2(1126).t.N86XcP);
                  obj4.confirmColor = tmp2(1200).ButtonColors.RED;
                  const intl4 = tmp2(1126).intl;
                  obj4.cancelText = intl4.string(tmp2(1126).t["ETE/oC"]);
                  username = 1;
                  c2 = 1;
                  const obj7 = { value: username(5298).confirm(obj4), done: false };
                  return obj7;
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                if (value) {
                  MultiAccountActionCreatorsAll.removeAccount(tmp2.id);
                }
                c2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp11) {
              c2 = tmp;
              throw tmp11;
            }
          }
        });
        function handlePressRemove() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        cResult[9] = user.id;
        cResult[10] = tmp13;
        cResult[11] = handlePressRemove;
        tmp17 = handlePressRemove;
      }
    }
    username = user.username;
    let tmp14 = stateFromStores;
    if (!stateFromStores) {
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
  const tmpResult2 = require("initialize");
}) : (function RemoveMultiAccountUserButton(user) {
  user = user.user;
  importDefault = undefined;
  closure_2 = async function _handlePressRemove2() {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
            const obj4 = { title: null, body: null, confirmText: null, confirmColor: null, cancelText: null, isDismissable: true };
            const intl = tmp2(1126).intl;
            obj4.title = intl.string(tmp2(1126).t.n0Fbg6);
            const intl2 = tmp2(1126).intl;
            const obj5 = { username };
            obj4.body = intl2.formatToPlainString(tmp2(1126).t.phEQmS, obj5);
            const intl3 = tmp2(1126).intl;
            obj4.confirmText = intl3.string(tmp2(1126).t.N86XcP);
            obj4.confirmColor = tmp2(1200).ButtonColors.RED;
            const intl4 = tmp2(1126).intl;
            obj4.cancelText = intl4.string(tmp2(1126).t["ETE/oC"]);
            v1 = 1;
            v3 = 1;
            const obj7 = { value: v1(5298).confirm(obj4), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          if (value) {
            v3(12148).removeAccount(closure_128_0.id);
            const obj = v3(12148);
          }
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp11) {
        v3 = tmp;
        throw tmp11;
      }
    }
  };
  const items = [StreamerModeStore];
  let stateFromStores = user(504).useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation);
  let obj = user(504);
  const items1 = [UserStore];
  const stateFromStores1 = user(504).useStateFromStores(items1, () => currentUser.getCurrentUser());
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  if (id === user.id) {
    return closure_20(tmp(1200).Spacer, { size: 21 });
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
    let obj3 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    let intl = tmp(1126).intl;
    obj3.accessibilityLabel = intl.string(tmp(1126).t.lSLMaU);
    obj3.onPress = function handlePressRemove() {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    let obj4 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
    obj3.children = closure_20(tmp(15409).CircleMinusIcon, obj4);
    return closure_20(tmp(6189).PressableOpacity, obj3);
  }
  let obj2 = user(504);
});
const __initData = { code: "function ManageAccountsModalTsx1(){const{withTiming,leadingWidth,MANAGE_EDIT_TRANSITION_DURATION}=this.__closure;return{width:withTiming(leadingWidth.get(),{duration:MANAGE_EDIT_TRANSITION_DURATION})};}" };
const __initData2 = { code: "function ManageAccountsModalTsx2(){const{withTiming,leadingWidth,MANAGE_EDIT_TRANSITION_DURATION}=this.__closure;return{width:withTiming(leadingWidth.get(),{duration:MANAGE_EDIT_TRANSITION_DURATION})};}" };
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function ManageAccounts(isEditing) {
  const cResult = isEditing(multiAccountUsers[17]).c(35);
  isEditing = isEditing.isEditing;
  const navigation = isEditing.navigation;
  const tmp4 = closure_23();
  closure_2 = tmp4;
  let obj = isEditing(multiAccountUsers[17]);
  multiAccountUsers = isEditing(multiAccountUsers[25]).useMultiAccountUsers().multiAccountUsers;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    let fn = function o() {
      return { currentUserId: id.getId() };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj2 = isEditing(multiAccountUsers[25]);
  const currentUserId = isEditing(multiAccountUsers[18]).useStateFromStoresObject(tmp5, tmp6).currentUserId;
  let tmpResult = isEditing(multiAccountUsers[18]);
  const sharedValue = isEditing(multiAccountUsers[26]).useSharedValue(0);
  const tmpResult3 = isEditing(multiAccountUsers[26]);
  class E {
    constructor() {
      obj = { width: null };
      obj2 = closure_0(closure_3[27]);
      obj1 = { duration: closure_14 };
      obj.width = obj2.withTiming(closure_5.get(), obj1);
      return obj;
    }
  }
  const tmpResult4 = isEditing(multiAccountUsers[26]);
  E.__closure = { withTiming: isEditing(multiAccountUsers[27]).withTiming, leadingWidth: sharedValue, MANAGE_EDIT_TRANSITION_DURATION: duration };
  E.__workletHash = 3389178545077;
  E.__initData = __initData;
  const animatedStyle = tmpResult4.useAnimatedStyle(E);
  const tmp12 = navigation(multiAccountUsers[28])(isEditing);
  closure_7 = tmp12;
  if (cResult[2] === isEditing) {
    if (cResult[3] === sharedValue) {
      if (cResult[4] === tmp12) {
        let tmp13 = cResult[5];
      }
      const effect = noop.useEffect(tmp13);
      if (cResult[6] === multiAccountUsers.length) {
        if (cResult[7] === navigation) {
          let tmp16 = cResult[8];
        }
        if (cResult[9] === currentUserId) {
          if (cResult[10] === isEditing) {
            if (cResult[11] === navigation) {
              let tmp17 = cResult[12];
            }
            noop = tmp17;
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              function handleUserMove(arg0) {
                ({ from, to } = arg0);
                closure_2(multiAccountUsers[22]).moveAccount(from, to);
              }
              cResult[13] = handleUserMove;
              let tmp18 = handleUserMove;
            } else {
              tmp18 = cResult[13];
            }
            if (cResult[14] === tmp17) {
              if (cResult[15] === isEditing) {
                if (cResult[16] === animatedStyle) {
                  if (cResult[17] === tmp4.trailingIcon) {
                    if (cResult[18] === tmp4.trailingIconContainer) {
                      let tmp20 = cResult[19];
                    }
                    if (cResult[20] === tmp16) {
                      if (cResult[21] === isEditing) {
                        if (cResult[22] === tmp4.addAccountLabel) {
                          let tmp21 = cResult[23];
                        }
                        if (cResult[24] !== tmp21) {
                          let obj4 = { component: View, transitionEnter: true, transitionLeave: true, transitionAppear: true, children: tmp21 };
                          const tmp28 = closure_20(tmp(tmp2[31]).TransitionGroup, obj4);
                          cResult[24] = tmp21;
                          cResult[25] = tmp28;
                          let tmp25 = tmp28;
                        } else {
                          tmp25 = cResult[25];
                        }
                        if (cResult[26] === multiAccountUsers) {
                          if (cResult[27] === tmp4.sortableListView) {
                            if (cResult[28] === tmp25) {
                              if (cResult[29] === tmp19) {
                                if (cResult[30] === tmp20) {
                                  let tmp29 = cResult[31];
                                }
                                if (cResult[32] === tmp4.container) {
                                  if (cResult[33] === tmp29) {
                                    let tmp32 = cResult[34];
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
                        let obj6 = { data: multiAccountUsers, onRowMoved: tmp18, disableSorting: tmp19, wrapperStyles: tmp4.sortableListView, renderRow: tmp20, keyboardShouldPersistTaps: "handled", scrollEventThrottle: 16, scrollEnabled: true, footer: tmp25 };
                        const tmp31 = closure_20(tmp11(tmp2[36]), obj6);
                        cResult[26] = multiAccountUsers;
                        cResult[27] = tmp4.sortableListView;
                        cResult[28] = tmp25;
                        cResult[29] = tmp19;
                        cResult[30] = tmp20;
                        cResult[31] = tmp31;
                        tmp29 = tmp31;
                      }
                    }
                    let tmp22 = !isEditing;
                    if (!isEditing) {
                      let obj7 = { duration, children: null };
                      const obj8 = { leading: null, label: null, onPress: null };
                      const obj9 = { color: tmp11(tmp2[15]).colors.TEXT_LINK };
                      obj8.leading = closure_20(tmp(tmp2[35]).CirclePlusIcon, obj9);
                      const obj10 = { style: tmp4.addAccountLabel, text: null };
                      let intl = tmp(tmp2[21]).intl;
                      obj10.text = intl.string(tmp(tmp2[21]).t.bPP34Q);
                      obj8.label = closure_20(tmp(tmp2[34]).FormRow.Label, obj10);
                      obj8.onPress = tmp16;
                      obj7.children = closure_20(tmp(tmp2[34]).FormRow, obj8);
                      tmp22 = closure_20(tmp11(tmp2[32]), obj7);
                      const tmp11Result = tmp11(tmp2[32]);
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
            const fn3 = function x(user, arg1) {
              closure_0 = user;
              const obj = { user, onPressUser: null, showActiveAccountLabel: true, leading: null, trailing: null, delayLongPress: null };
              let fn = null;
              if (!closure_0) {
                fn = () => closure_8(closure_0);
              }
              obj.onPressUser = fn;
              const obj2 = { component: navigation(multiAccountUsers[26]).View, transitionEnter: true, transitionLeave: true, style: animatedStyle, children: null };
              let tmpResult = tmp5;
              if (closure_0) {
                const obj3 = { duration, children: null };
                const obj4 = { user };
                obj3.children = closure_1_20(closure_1_24, obj4);
                tmpResult = closure_1_20(navigation(multiAccountUsers[32]), obj3);
                const tmp2Result = navigation(multiAccountUsers[32]);
              }
              obj2.children = tmpResult;
              obj.leading = closure_1_20(isEditing(multiAccountUsers[31]).TransitionGroup, obj2);
              const obj5 = { component, transitionEnter: true, transitionLeave: true, transitionAppear: true, style: closure_2.trailingIconContainer, children: null };
              const tmp2Result2 = navigation(multiAccountUsers[32]);
              const obj6 = { duration, style: closure_2.trailingIcon, children: null };
              if (closure_0) {
                obj6.children = closure_1_20(isEditing(multiAccountUsers[33]).DragIcon, {});
                let tmpResult2 = closure_1_20(tmp2Result2, obj6, "drag");
              } else {
                const obj7 = { user };
                obj6.children = closure_1_20(isEditing(multiAccountUsers[30]).AccountStatusIcon, obj7);
                tmpResult2 = closure_1_20(tmp2Result2, obj6, "status");
              }
              obj5.children = tmpResult2;
              obj.trailing = closure_1_20(isEditing(multiAccountUsers[31]).TransitionGroup, obj5);
              let num;
              if (closure_0) {
                num = 100;
              }
              obj.delayLongPress = num;
              return closure_1_20(navigation(multiAccountUsers[30]), obj, arg1);
            };
            cResult[14] = tmp17;
            cResult[15] = isEditing;
            cResult[16] = animatedStyle;
            cResult[17] = tmp4.trailingIcon;
            cResult[18] = tmp4.trailingIconContainer;
            cResult[19] = fn3;
            tmp20 = fn3;
          }
        }
        function handlePressUser(id) {
          if (!isEditing) {
            if (id.id !== currentUserId) {
              if (id.tokenStatus === MultiAccountTokenStatus.INVALID) {
                navigation.push(constants3.LOGIN);
                AnalyticsUtilsDefault.track(constants2.LOGIN_VIEWED, { source: "multi_account_invalid_user" });
              } else {
                MultiAccountActionCreatorsAll.switchAccount(id.id, undefined, constants.MANAGE_ACCOUNTS_MODAL);
              }
              return tmp7;
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
        if (multiAccountUsers.length >= closure_2_15) {
          const obj3 = { title: null, body: null, isDismissable: true };
          const intl = util.intl;
          obj3.title = intl.string(util.t.w7wfXi);
          const intl2 = util.intl;
          const obj4 = { maxNumAccounts: tmp };
          obj3.body = intl2.formatToPlainString(util.t.WOyelG, obj4);
          actions_AlertActionCreatorsDefault.show(obj3);
        } else {
          navigation.push(constants3.LOGIN);
          AnalyticsUtilsDefault.track(constants2.LOGIN_VIEWED, { source: "multi_account_add_account" });
        }
      }
      cResult[6] = multiAccountUsers.length;
      cResult[7] = navigation;
      cResult[8] = handlePressAddAccount;
      tmp16 = handlePressAddAccount;
    }
  }
  const fn2 = function f() {
    let tmp2 = null != closure_7;
    if (tmp2) {
      tmp2 = tmp !== isEditing;
    }
    if (tmp2) {
      let num = 0;
      if (isEditing) {
        num = 37;
      }
      const result = sharedValue.set(num);
    }
  };
  cResult[2] = isEditing;
  cResult[3] = sharedValue;
  cResult[4] = tmp12;
  cResult[5] = fn2;
  tmp13 = fn2;
  let obj3 = { withTiming: isEditing(multiAccountUsers[27]).withTiming, leadingWidth: sharedValue, MANAGE_EDIT_TRANSITION_DURATION: duration };
}) : (function ManageAccounts(isEditing) {
  isEditing = isEditing.isEditing;
  const navigation = isEditing.navigation;
  let multiAccountUsers;
  const tmp = closure_23();
  closure_2 = tmp;
  multiAccountUsers = isEditing(multiAccountUsers[25]).useMultiAccountUsers().multiAccountUsers;
  let obj = isEditing(multiAccountUsers[25]);
  const items = [AuthenticationStore];
  const currentUserId = isEditing(multiAccountUsers[18]).useStateFromStoresObject(items, () => ({ currentUserId: id.getId() })).currentUserId;
  let obj2 = isEditing(multiAccountUsers[18]);
  const sharedValue = isEditing(multiAccountUsers[26]).useSharedValue(0);
  let obj3 = isEditing(multiAccountUsers[26]);
  let fn = function o() {
    const obj = { width: timing.withTiming(sharedValue.get(), { duration }) };
    return obj;
  };
  let obj4 = isEditing(multiAccountUsers[26]);
  fn.__closure = { withTiming: isEditing(multiAccountUsers[27]).withTiming, leadingWidth: sharedValue, MANAGE_EDIT_TRANSITION_DURATION: duration };
  fn.__workletHash = 7941413812886;
  fn.__initData = __initData2;
  const style = obj4.useAnimatedStyle(fn);
  closure_7 = navigation(multiAccountUsers[28])(isEditing);
  const effect = noop.useEffect(() => {
    let tmp2 = null != closure_7;
    if (tmp2) {
      tmp2 = tmp !== isEditing;
    }
    if (tmp2) {
      let num = 0;
      if (isEditing) {
        num = 37;
      }
      const result = sharedValue.set(num);
    }
  });
  let obj6 = { style: tmp.container, bottom: true, children: null };
  let obj7 = {
    data: multiAccountUsers,
    onRowMoved: function handleUserMove(arg0) {
      ({ from, to } = arg0);
      closure_2(multiAccountUsers[22]).moveAccount(from, to);
    },
    disableSorting: !isEditing,
    wrapperStyles: tmp.sortableListView,
    renderRow(user, arg1) {
      let obj = { user, onPressUser: null, showActiveAccountLabel: true, leading: null, trailing: null, delayLongPress: null };
      let fn = null;
      if (!user) {
        fn = () => {
          if (!isEditing) {
            if (user.id !== currentUserId) {
              if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
                navigation.push(constants3.LOGIN);
                AnalyticsUtilsDefault.track(constants2.LOGIN_VIEWED, { source: "multi_account_invalid_user" });
              } else {
                MultiAccountActionCreatorsAll.switchAccount(user.id, undefined, constants.MANAGE_ACCOUNTS_MODAL);
              }
            }
          }
        };
      }
      obj.onPressUser = fn;
      let obj2 = { component: navigation(multiAccountUsers[26]).View, transitionEnter: true, transitionLeave: true, style, children: null };
      let tmpResult = tmp5;
      if (user) {
        const obj3 = { duration, children: null };
        const obj4 = { user };
        obj3.children = closure_1_20(closure_1_24, obj4);
        tmpResult = closure_1_20(navigation(multiAccountUsers[32]), obj3);
        const tmp2Result = navigation(multiAccountUsers[32]);
      }
      obj2.children = tmpResult;
      obj.leading = closure_1_20(isEditing(multiAccountUsers[31]).TransitionGroup, obj2);
      const obj5 = { component, transitionEnter: true, transitionLeave: true, transitionAppear: true, style: closure_2.trailingIconContainer, children: null };
      const tmp2Result2 = navigation(multiAccountUsers[32]);
      const obj6 = { duration, style: closure_2.trailingIcon, children: null };
      if (user) {
        obj6.children = closure_1_20(isEditing(multiAccountUsers[33]).DragIcon, {});
        let tmpResult2 = closure_1_20(tmp2Result2, obj6, "drag");
      } else {
        const obj7 = { user };
        obj6.children = closure_1_20(isEditing(multiAccountUsers[30]).AccountStatusIcon, obj7);
        tmpResult2 = closure_1_20(tmp2Result2, obj6, "status");
      }
      obj5.children = tmpResult2;
      obj.trailing = closure_1_20(isEditing(multiAccountUsers[31]).TransitionGroup, obj5);
      let num;
      if (user) {
        num = 100;
      }
      obj.delayLongPress = num;
      return closure_1_20(navigation(multiAccountUsers[30]), obj, arg1);
    },
    keyboardShouldPersistTaps: "handled",
    scrollEventThrottle: 16,
    scrollEnabled: true,
    footer: null
  };
  let obj5 = { withTiming: isEditing(multiAccountUsers[27]).withTiming, leadingWidth: sharedValue, MANAGE_EDIT_TRANSITION_DURATION: duration };
  const obj8 = { component: View, transitionEnter: true, transitionLeave: true, transitionAppear: true, children: null };
  let tmp8Result = !isEditing;
  if (!isEditing) {
    const obj9 = { duration, children: null };
    const obj10 = { leading: null, label: null, onPress: null };
    const obj11 = { color: tmp6(tmp3[15]).colors.TEXT_LINK };
    obj10.leading = closure_20(tmp2(tmp3[35]).CirclePlusIcon, obj11);
    const obj12 = { style: tmp.addAccountLabel, text: null };
    let intl = tmp2(tmp3[21]).intl;
    obj12.text = intl.string(tmp2(tmp3[21]).t.bPP34Q);
    obj10.label = closure_20(tmp2(tmp3[34]).FormRow.Label, obj12);
    obj10.onPress = function handlePressAddAccount() {
      if (multiAccountUsers.length >= closure_2_15) {
        const obj3 = { title: null, body: null, isDismissable: true };
        const intl = util.intl;
        obj3.title = intl.string(util.t.w7wfXi);
        const intl2 = util.intl;
        const obj4 = { maxNumAccounts: tmp };
        obj3.body = intl2.formatToPlainString(util.t.WOyelG, obj4);
        actions_AlertActionCreatorsDefault.show(obj3);
      } else {
        navigation.push(constants3.LOGIN);
        AnalyticsUtilsDefault.track(constants2.LOGIN_VIEWED, { source: "multi_account_add_account" });
      }
    };
    obj9.children = closure_20(tmp2(tmp3[34]).FormRow, obj10);
    tmp8Result = closure_20(tmp6(tmp3[32]), obj9);
    const tmp6Result = tmp6(tmp3[32]);
  }
  obj8.children = tmp8Result;
  obj7.footer = closure_20(isEditing(multiAccountUsers[31]).TransitionGroup, obj8);
  obj6.children = closure_20(navigation(multiAccountUsers[36]), obj7);
  return closure_20(isEditing(multiAccountUsers[37]).SafeAreaPaddingView, obj6);
});
ReactCompilerGating = fn(558);
let obj6 = { color: nativeDefault.colors.TEXT_LINK };
const size = fn(2);
let result = size.fileFinishedImporting("modules/multi_account/native/ManageAccountsModal.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ManageAccountsModal(initialRouteName) {
  const cResult = accessibilityNativeStackOptions(576).c(12);
  let MANAGE_ACCOUNTS = initialRouteName.initialRouteName;
  if (undefined === MANAGE_ACCOUNTS) {
    MANAGE_ACCOUNTS = ManageAccountsScreens.MANAGE_ACCOUNTS;
  }
  let obj = accessibilityNativeStackOptions(576);
  accessibilityNativeStackOptions = accessibilityNativeStackOptions(6679).useAccessibilityNativeStackOptions();
  [isEditing, closure_2] = noop.useState(false);
  if (cResult[0] === accessibilityNativeStackOptions) {
    if (cResult[1] === isEditing) {
      let tmp8 = cResult[2];
    }
    if (cResult[3] !== isEditing) {
      let obj2 = {
        name: ManageAccountsScreens.MANAGE_ACCOUNTS,
        options() {
              const obj = { title: null, headerRight: null };
              const intl = util.intl;
              obj.title = intl.string(util.t.WbFpq4);
              const getRenderHeaderTextButton = HeaderShared.getRenderHeaderTextButton;
              const intl2 = util.intl;
              const string = intl2.string;
              const t = util.t;
              if (first) {
                let renderHeaderTextButton = getRenderHeaderTextButton(string(t.i4jeWR), () => closure_1_2(false));
              } else {
                renderHeaderTextButton = getRenderHeaderTextButton(string(t.bt75uw), () => closure_1_2(true));
              }
              obj.headerRight = renderHeaderTextButton;
              return obj;
            },
        children(navigation) {
              return constants2(closure_27, { isEditing, navigation: navigation.navigation });
            }
      };
      const tmp13 = closure_20(closure_22.Screen, obj2);
      cResult[3] = isEditing;
      cResult[4] = tmp13;
      let tmp9 = tmp13;
    } else {
      tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = {
        name: ManageAccountsScreens.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED,
        options() {
              const obj = { title: null };
              const intl = accessibilityNativeStackOptions(1126).intl;
              obj.title = intl.string(accessibilityNativeStackOptions(1126).t.WbFpq4);
              return obj;
            },
        children() {
              return closure_1_20(first(16196), {
                handleLogin(login, password, undelete) {
                  isEditing(5936).login({ login, password, undelete });
                },
                onReset() {
                  isEditing(5936).loginReset(true);
                }
              });
            }
      };
      const tmp19 = closure_20(closure_22.Screen, obj3);
      cResult[5] = tmp19;
      let tmp15 = tmp19;
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
              return closure_1_20(first(6614), { isMultiAccount: true });
            }
      };
      const tmp24 = closure_20(closure_22.Screen, obj4);
      cResult[6] = tmp24;
      let tmp20 = tmp24;
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
              return closure_1_20(first(16195), { isMultiAccount: true });
            }
      };
      const tmp29 = closure_20(closure_22.Screen, obj5);
      cResult[7] = tmp29;
      let tmp25 = tmp29;
    } else {
      tmp25 = cResult[7];
    }
    if (cResult[8] === MANAGE_ACCOUNTS) {
      if (cResult[9] === tmp8) {
        if (cResult[10] === tmp9) {
          let tmp30 = cResult[11];
        }
        return tmp30;
      }
    }
    const obj6 = { initialRouteName: MANAGE_ACCOUNTS, screenOptions: tmp8, children: null };
    const items = [tmp9, tmp15, tmp20, tmp25];
    obj6.children = items;
    const tmp33 = closure_21(closure_22.Navigator, obj6);
    cResult[8] = MANAGE_ACCOUNTS;
    cResult[9] = tmp8;
    cResult[10] = tmp9;
    cResult[11] = tmp33;
    tmp30 = tmp33;
  }
  const fn = function l(arg0) {
    const obj = {
      headerTitle(children) {
        const merged = Object.assign(closure_1_5(children, closure_1_4));
        return closure_1_20(accessibilityNativeStackOptions(dependencyMap[39]).GenericHeaderTitle, { title: children.children });
      },
      headerLeft: null,
      headerTitleAlign: "center"
    };
    let renderModalCloseImage;
    if (!first) {
      renderModalCloseImage = HeaderShared.getRenderModalCloseImage(tmp);
    }
    obj.headerLeft = renderModalCloseImage;
    let merged = Object.assign(accessibilityNativeStackOptions);
    const merged1 = Object.assign(getNavigationModalPresentationDefault());
    return obj;
  };
  cResult[0] = accessibilityNativeStackOptions;
  cResult[1] = isEditing;
  cResult[2] = fn;
  tmp8 = fn;
  const tmpResult = accessibilityNativeStackOptions(6679);
}) : (function ManageAccountsModal(initialRouteName) {
  let MANAGE_ACCOUNTS = initialRouteName.initialRouteName;
  if (MANAGE_ACCOUNTS === undefined) {
    MANAGE_ACCOUNTS = ManageAccountsScreens.MANAGE_ACCOUNTS;
  }
  _require = undefined;
  c1 = undefined;
  c2 = undefined;
  _require = require("Navigator").useAccessibilityNativeStackOptions();
  let obj = require("Navigator");
  [c1, c2] = noop.useState(false);
  let obj2 = {
    initialRouteName: MANAGE_ACCOUNTS,
    screenOptions(arg0) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_20(closure_1_0(dependencyMap[39]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: null,
        headerTitleAlign: "center"
      };
      let renderModalCloseImage;
      if (!c1) {
        renderModalCloseImage = HeaderShared.getRenderModalCloseImage(tmp);
      }
      obj.headerLeft = renderModalCloseImage;
      let merged = Object.assign(closure_0);
      let merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    },
    children: null
  };
  const items = [
    closure_20(closure_22.Screen, {
      name: ManageAccountsScreens.MANAGE_ACCOUNTS,
      options() {
        const obj = { title: null, headerRight: null };
        const intl = util.intl;
        obj.title = intl.string(util.t.WbFpq4);
        const getRenderHeaderTextButton = HeaderShared.getRenderHeaderTextButton;
        const intl2 = util.intl;
        const string = intl2.string;
        const t = util.t;
        if (c1) {
          let renderHeaderTextButton = getRenderHeaderTextButton(string(t.i4jeWR), () => closure_1_2(false));
        } else {
          renderHeaderTextButton = getRenderHeaderTextButton(string(t.bt75uw), () => closure_1_2(true));
        }
        obj.headerRight = renderHeaderTextButton;
        return obj;
      },
      children(navigation) {
        return constants2(closure_27, { isEditing, navigation: navigation.navigation });
      }
    }),
    closure_20(closure_22.Screen, {
      name: ManageAccountsScreens.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED,
      options() {
        const obj = { title: null };
        const intl = closure_0(1126).intl;
        obj.title = intl.string(closure_0(1126).t.WbFpq4);
        return obj;
      },
      children() {
        return closure_1_20(isEditing(16196), {
          handleLogin(login, password, undelete) {
            isEditing(5936).login({ login, password, undelete });
          },
          onReset() {
            isEditing(5936).loginReset(true);
          }
        });
      }
    }),
    closure_20(closure_22.Screen, {
      name: ManageAccountsScreens.LOGIN,
      options() {
        return { headerShown: false };
      },
      children() {
        return closure_1_20(isEditing(6614), { isMultiAccount: true });
      }
    }),
    closure_20(closure_22.Screen, {
      name: ManageAccountsScreens.MFA,
      options() {
        return { headerShown: false };
      },
      children() {
        return closure_1_20(isEditing(16195), { isMultiAccount: true });
      }
    })
  ];
  obj2.children = items;
  return closure_21(closure_22.Navigator, obj2);
}));