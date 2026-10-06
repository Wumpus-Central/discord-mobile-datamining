// === Module 12367: AddPhoneScreens ===

// Module 12367 (AddPhoneScreens)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import NavigatorConstants from "NavigatorConstants" /* 6075 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 6541 */;
import AddPhoneDefault from "AddPhone" /* 6548 */;
import PhoneActionCreators from "PhoneActionCreators" /* 6549 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12340 */;
import ContactSyncModalStore from "ContactSyncModalStore" /* 12341 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PhoneActionCreatorsDefault = PhoneActionCreators;
let _require, c3, c4, currentUser, importDefault, navigation, nextPromise;

let c10;
let c9;
let obj2;
let obj3;
const View = react_native.View;
const useContactSyncModalStore = ContactSyncModalStore.useContactSyncModalStore;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, redesignContainer: obj3, header: { alignItems: "center" }, title: { textAlign: "center" }, subtitle: { marginTop: 8, lineHeight: 18, textAlign: "center" } };
obj2 = { paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32 };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let header;
  let items;
  let title;
  let tmp11;
  let tmp13;
  let tmp8;
  let obj = navigation(576);
  const cResult = obj.c(16);
  const obj2 = navigation(1490);
  navigation = obj2.useNavigation();
  const tmp5 = closure_11();
  ({ header, title } = tmp5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(navigation(1126).t.Xgb497);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp5.title) {
    const obj3 = { style: title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: first };
    const tmp10 = closure_9(navigation(4892).Text, obj3);
    cResult[1] = tmp5.title;
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  const subtitle = tmp5.subtitle;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(navigation(1126).t.qFmzyo);
    cResult[3] = stringResult1;
    tmp11 = stringResult1;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== tmp5.subtitle) {
    const obj4 = { style: subtitle, variant: "text-sm/medium", color: "text-default", children: tmp11 };
    const tmp15 = closure_9(navigation(4892).Text, obj4);
    cResult[4] = tmp5.subtitle;
    cResult[5] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === tmp5.header) {
    if (cResult[7] === tmp8) {
      let tmp16;
      if (cResult[8] === tmp13) {
        tmp16 = cResult[9];
      }
      if (cResult[10] !== navigation) {
        class P {
          constructor(arg0) {
            obj = closure_0(closure_2[15]);
            return obj.submitPhone(arg0, closure_0);
          }
        }
        cResult[10] = navigation;
        cResult[11] = P;
      } else {
        class P {
          constructor(arg0) {
            obj = closure_0(closure_2[15]);
            return obj.submitPhone(arg0, closure_0);
          }
        }
      }
      if (cResult[12] === tmp16) {
        class P {
          constructor(arg0) {
            obj = closure_0(closure_2[15]);
            return obj.submitPhone(arg0, closure_0);
          }
        }
      }
      const obj5 = { style: tmp5.container, reason: navigation(6549).ChangePhoneReason.CONTACT_SYNC, header: tmp16, onComplete: P };
      const tmp22 = AddPhoneDefault;
      cResult[12] = tmp16;
      cResult[13] = tmp5.container;
      cResult[14] = P;
      cResult[15] = closure_9(tmp22, obj5);
      const tmp23 = closure_9(tmp22, obj5);
    }
  }
  const obj6 = { style: header, children: items };
  items = [tmp8, tmp13];
  const tmp17 = closure_10(View, obj6);
  cResult[6] = tmp5.header;
  cResult[7] = tmp8;
  cResult[8] = tmp13;
  cResult[9] = tmp17;
  tmp16 = tmp17;
}) : (() => {
  let closure_0;
  let intl;
  let intl2;
  let items;
  let tmp2;
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  const tmp = closure_11();
  const obj2 = { style: tmp.header, children: items };
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(require("intl").t.Xgb497) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items = [closure_9(Text, obj3), ];
  const obj4 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: intl2.string(require("intl").t.qFmzyo) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items[1] = closure_9(Text2, obj4);
  const obj5 = {
    style: tmp.container,
    reason: require("PhoneActionCreators").ChangePhoneReason.CONTACT_SYNC,
    header: tmp2,
    onComplete(arg0) {
      const obj = ContactSyncModalActionCreators;
      return obj.submitPhone(arg0, closure_0);
    }
  };
  tmp2 = closure_10(View, obj2);
  const tmp3 = AddPhoneDefault;
  return closure_9(tmp3, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let require;
  let tmp10;
  let tmp11;
  let tmp6;
  let tmp8;
  let obj = require("react");
  const cResult = obj.c(18);
  const tmp4 = closure_11();
  [tmp6, require] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp8, importDefault] = _slicedToArray(react.useState(), 2);
  const tmp7 = _slicedToArray(react.useState(), 2);
  let phone = useContactSyncModalStore().phone;
  let obj3 = require("useNavigation");
  navigation = obj3.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      currentUser = currentUser.getCurrentUser();
      let phone;
      if (currentUser != null) {
        phone = currentUser.phone;
      }
      return phone;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp11 = fn;
    tmp10 = items;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp11);
  if (cResult[2] === navigation) {
    let tmp14;
    if (cResult[3] === stateFromStores) {
      tmp14 = cResult[4];
    }
    if (cResult[5] === navigation) {
      if (cResult[6] === phone) {
        let tmp15;
        let tmp17;
        if (cResult[7] === stateFromStores) {
          tmp15 = cResult[8];
        }
        const effect = react.useEffect(tmp14, tmp15);
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          _require = stateFromStores(function*(arg0) {
            let closure_1;
            let obj6;
            closure_0 = arg0;
            if (c4 === 2) {
              c4 = 3;
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
                let codeIntercepted;
                let addedPhone;
                let error;
                c4 = 2;
                if (0 === c3) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    let closure_2 = tmp4;
                    closure_0 = undefined;
                    codeIntercepted = undefined;
                    addedPhone = undefined;
                    error = undefined;
                    closure_0(true);
                    tmp(undefined);
                    c3 = 1;
                    c4 = 1;
                    const obj4 = { value: obj6.verifyPhone(closure_0), done: false };
                    obj6 = closure_0(navigation[15]);
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  closure_0 = value;
                  codeIntercepted = closure_0.codeIntercepted;
                  addedPhone = closure_0.addedPhone;
                  error = closure_0.error;
                  tmp(error);
                  const tmp6 = addedPhone && codeIntercepted;
                  if (!tmp6) {
                    closure_0(false);
                  }
                  c4 = 3;
                  const obj = { value: codeIntercepted, done: true };
                  return obj;
                }
              } catch (tmp11) {
                c4 = 3;
                throw tmp11;
              }
            }
          });
          function handleCodeEntered() {
            return closure_0(...arguments);
          }
          cResult[9] = handleCodeEntered;
          tmp17 = handleCodeEntered;
        } else {
          tmp17 = cResult[9];
        }
        require("module_38")(null != phone, "Phone shouldn't be null when trying to verify the code");
        if (cResult[10] !== navigation) {
          class R {
            constructor(arg0) {
              const obj = ContactSyncModalActionCreators;
              const result = obj.verifyPhoneWithPassword(arg0, navigation);
            }
          }
          cResult[10] = navigation;
          cResult[11] = R;
        } else {
          class R {
            constructor(arg0) {
              const obj = ContactSyncModalActionCreators;
              const result = obj.verifyPhoneWithPassword(arg0, navigation);
            }
          }
        }
        if (cResult[12] === tmp8) {
          class R {
            constructor(arg0) {
              const obj = ContactSyncModalActionCreators;
              const result = obj.verifyPhoneWithPassword(arg0, navigation);
            }
          }
        }
        let obj4 = { phone, loading: tmp6, error: tmp8, backgroundStyle: tmp4.redesignContainer, disableKeyboardAvoidingView: true, onCodeEnteredIntercept: tmp17, onVerified: R };
        cResult[12] = tmp8;
        cResult[13] = tmp6;
        cResult[14] = phone;
        cResult[15] = tmp4.redesignContainer;
        cResult[16] = R;
        cResult[17] = closure_9(require("VerifyPhone"), obj4);
        const tmp24 = closure_9(require("VerifyPhone"), obj4);
        class N {
          constructor() {
            closure_0 = null;
            if (null != closure_3) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[15]);
              tmp4 = closure_2;
              result = obj.handlePhoneVerificationComplete(tmp, closure_2);
              nextPromise = result.then(() => {
                const obj = RunAfterInteractionsUtils;
                closure_0 = obj.runAfterInteractions(() => { /* body not rendered: F152868 */ });
              });
            }
            return () => {
              if (closure_0 != null) {
                closure_0.cancel();
              }
            };
          }
        }
      }
    }
    const items1 = [navigation, phone, stateFromStores];
    cResult[5] = navigation;
    cResult[6] = phone;
    cResult[7] = stateFromStores;
    cResult[8] = items1;
    tmp15 = items1;
  }
  class N {
    constructor() {
      closure_0 = null;
      if (null != closure_3) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[15]);
        tmp4 = closure_2;
        result = obj.handlePhoneVerificationComplete(tmp, closure_2);
        nextPromise = result.then(() => {
          const obj = RunAfterInteractionsUtils;
          closure_0 = obj.runAfterInteractions(() => { /* body not rendered: F152868 */ });
        });
      }
      return () => {
        if (closure_0 != null) {
          closure_0.cancel();
        }
      };
    }
  }
  cResult[2] = navigation;
  cResult[3] = stateFromStores;
  cResult[4] = N;
  tmp14 = N;
}) : (() => {
  let require;
  let tmp3;
  let obj = function _handleCodeEntered2() {
    obj = _asyncToGenerator(async (arg0) => {
      let obj3;
      let closure_0 = arg0;
      if (c4 === 2) {
        c4 = 3;
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
          let codeIntercepted;
          let addedPhone;
          let error;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_2 = tmp4;
              closure_1 = tmp;
              closure_0 = undefined;
              codeIntercepted = undefined;
              addedPhone = undefined;
              error = undefined;
              _require(true);
              closure_2_1(undefined);
              c3 = 1;
              c4 = 1;
              const obj5 = { value: obj3.verifyPhone(closure_0), done: false };
              obj3 = closure_0(closure_2[15]);
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_0 = value;
            codeIntercepted = closure_0.codeIntercepted;
            addedPhone = closure_0.addedPhone;
            error = closure_0.error;
            closure_130_1(error);
            const tmp6 = addedPhone && codeIntercepted;
            if (!tmp6) {
              closure_130_0(false);
            }
            c4 = 3;
            obj = { value: codeIntercepted, done: true };
            return obj;
          }
        } catch (tmp18) {
          c4 = 3;
          throw tmp18;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_11();
  [tmp3, require] = obj(react.useState(false), 2);
  obj(react.useState(false), 2);
  const tmp4 = obj(react.useState(), 2);
  importDefault = tmp4[1];
  const first = tmp4[0];
  let phone = useContactSyncModalStore().phone;
  obj = require("useNavigation");
  navigation = obj.useNavigation();
  let obj2 = require("useStateFromStores");
  const items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    return phone;
  });
  const items1 = [navigation, phone, stateFromStores];
  const effect = react.useEffect(() => {
    const require = null;
    if (null != stateFromStores) {
      obj = require("ContactSyncModalActionCreators");
      const result = obj.handlePhoneVerificationComplete(tmp, navigation);
      result.then(() => {
        obj = RunAfterInteractionsUtils;
        closure_0 = obj.runAfterInteractions(() => closure_1_0(false));
      });
    }
    return () => {
      if (closure_0 != null) {
        closure_0.cancel();
      }
    };
  }, items1);
  require("module_38")(null != phone, "Phone shouldn't be null when trying to verify the code");
  let obj3 = {
    phone,
    loading: tmp3,
    error: first,
    backgroundStyle: tmp.redesignContainer,
    disableKeyboardAvoidingView: true,
    onCodeEnteredIntercept: function handleCodeEntered(arg0) {
      return obj(...arguments);
    },
    onVerified(arg0) {
      obj = ContactSyncModalActionCreators;
      const result = obj.verifyPhoneWithPassword(arg0, navigation);
    }
  };
  return closure_9(require("VerifyPhone"), obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function VerifyPasswordScreen() {
  let phoneToken;
  let require;
  let tmp5;
  let tmp8;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(14);
  [tmp5, require] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const obj3 = require("useNavigation");
  navigation = obj3.useNavigation();
  const tmp7 = closure_11();
  phoneToken = useContactSyncModalStore().phoneToken;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      currentUser = currentUser.getCurrentUser();
      let phone;
      if (currentUser != null) {
        phone = currentUser.phone;
      }
      return phone;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  if (cResult[2] === navigation) {
    let tmp12;
    let tmp13;
    if (cResult[3] === stateFromStores) {
      tmp12 = cResult[4];
      tmp13 = cResult[5];
    }
    const effect = react.useEffect(tmp12, tmp13);
    navigation(phoneToken[20])(null != phoneToken, "Phone token shouldn't be null when trying to verify the password");
    const tmp15 = navigation;
    if (cResult[6] !== phoneToken) {
      class A {
        constructor(password) {
          _require(true);
          const obj = PhoneActionCreatorsDefault;
          return obj.addPhone(phoneToken, password, PhoneActionCreators.ChangePhoneReason.CONTACT_SYNC);
        }
      }
      cResult[6] = phoneToken;
      cResult[7] = A;
    } else {
      class A {
        constructor(password) {
          _require(true);
          const obj = PhoneActionCreatorsDefault;
          return obj.addPhone(phoneToken, password, PhoneActionCreators.ChangePhoneReason.CONTACT_SYNC);
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          return _require(false);
        }
      }
      class T {
        constructor() {

        }
      }
      cResult[8] = E;
      cResult[9] = T;
    } else {
      class E {
        constructor() {
          return _require(false);
        }
      }
      class T {
        constructor() {

        }
      }
    }
    if (cResult[10] === tmp5) {
      class E {
        constructor() {
          return _require(false);
        }
      }
    }
    const obj4 = { hideUnverifiedBanner: true, parentLoading: tmp5, style: tmp7.redesignContainer, onSubmit: A, onError: E, onSuccess: T };
    cResult[10] = tmp5;
    cResult[11] = tmp7.redesignContainer;
    cResult[12] = A;
    cResult[13] = closure_9(tmp15(phoneToken[22]), obj4);
    const tmp23 = closure_9(tmp15(phoneToken[22]), obj4);
  }
  const fn2 = function _() {
    const require = null;
    if (null != stateFromStores) {
      let obj = require("ContactSyncModalActionCreators");
      const result = obj.handlePhoneVerificationComplete(tmp, navigation);
      result.then(() => {
        const obj = RunAfterInteractionsUtils;
        closure_0 = obj.runAfterInteractions(() => closure_1_0(false));
      });
    }
    return () => {
      if (closure_0 != null) {
        closure_0.cancel();
      }
    };
  };
  const items1 = [navigation, stateFromStores];
  cResult[2] = navigation;
  cResult[3] = stateFromStores;
  cResult[4] = fn2;
  cResult[5] = items1;
  tmp13 = items1;
  tmp12 = fn2;
}) : (function VerifyPasswordScreen() {
  let first;
  let phoneToken;
  [first, _require] = react.useState(false);
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  const tmp4 = closure_11();
  phoneToken = useContactSyncModalStore().phoneToken;
  const items = [UserStore];
  const obj2 = require("useStateFromStores");
  const stateFromStores = obj2.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    return phone;
  });
  const items1 = [navigation, stateFromStores];
  const effect = react.useEffect(() => {
    closure_0 = null;
    if (null != stateFromStores) {
      let obj = closure_0(phoneToken[15]);
      const result = obj.handlePhoneVerificationComplete(tmp, navigation);
      result.then(() => {
        const obj = RunAfterInteractionsUtils;
        closure_0 = obj.runAfterInteractions(() => closure_1_0(false));
      });
    }
    return () => {
      if (closure_0 != null) {
        closure_0.cancel();
      }
    };
  }, items1);
  navigation(phoneToken[20])(null != phoneToken, "Phone token shouldn't be null when trying to verify the password");
  const obj3 = {
    hideUnverifiedBanner: true,
    parentLoading: first,
    style: tmp4.redesignContainer,
    onSubmit(password) {
      closure_0(true);
      const obj = PhoneActionCreatorsDefault;
      return obj.addPhone(phoneToken, password, PhoneActionCreators.ChangePhoneReason.CONTACT_SYNC);
    },
    onError() {
      return closure_0(false);
    },
    onSuccess() {

    }
  };
  return closure_9(navigation(phoneToken[22]), obj3);
});
let result = size.fileFinishedImporting("modules/contact_sync/native/components/AddPhoneScreens.tsx");

export const AddPhoneScreen = tmp4;
export const VerifyPhoneScreen = tmp5;
export const VerifyPasswordScreen = tmp6;