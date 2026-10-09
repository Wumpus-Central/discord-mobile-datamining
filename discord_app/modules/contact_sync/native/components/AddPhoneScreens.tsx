// discord_app/modules/contact_sync/native/components/AddPhoneScreens.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import RunAfterInteractionsUtils from "../../../../utils/native/RunAfterInteractionsUtils.tsx";
import AddPhoneDefault from "../../../verification/native/components/AddPhone.tsx";
import PhoneActionCreators from "../../../phone/PhoneActionCreators.tsx";
import ContactSyncModalActionCreators from "../ContactSyncModalActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;
const PhoneActionCreatorsDefault = PhoneActionCreators;

require = fn;
const View = fn(17).View;
const useContactSyncModalStore = fn(12355).useContactSyncModalStore;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { paddingTop: fn(6263).NAV_BAR_HEIGHT + 32 }, redesignContainer: null, header: null, title: null, subtitle: null };
let obj3 = { paddingTop: fn(6263).NAV_BAR_HEIGHT + 32 };
obj2.redesignContainer = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: fn(6263).NAV_BAR_HEIGHT + 32 };
obj2.header = { alignItems: "center" };
obj2.title = { textAlign: "center" };
obj2.subtitle = { marginTop: 8, lineHeight: 18, textAlign: "center" };
let closure_11 = createStyles.createStyles(obj2);
fn(558);
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: fn(6263).NAV_BAR_HEIGHT + 32 };
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AddPhoneScreen() {
  const cResult = navigation(576).c(16);
  const obj = navigation(576);
  navigation = navigation(1503).useNavigation();
  const tmp5 = closure_11();
  ({ header, title } = tmp5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.Xgb497);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp5.title) {
    const obj3 = { style: title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: first };
    const tmp10 = closure_9(tmp(5087).Text, obj3);
    cResult[1] = tmp5.title;
    cResult[2] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.qFmzyo);
    cResult[3] = stringResult1;
    let tmp11 = stringResult1;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== tmp5.subtitle) {
    const obj4 = { style: tmp5.subtitle, variant: "text-sm/medium", color: "text-default", children: tmp11 };
    const tmp15 = closure_9(tmp(5087).Text, obj4);
    cResult[4] = tmp5.subtitle;
    cResult[5] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === tmp5.header) {
    if (cResult[7] === tmp8) {
      if (cResult[8] === tmp13) {
        let tmp16 = cResult[9];
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
      const obj5 = { style: tmp5.container, reason: tmp(6732).ChangePhoneReason.CONTACT_SYNC, header: tmp16, onComplete: P };
      const tmp23 = closure_9(AddPhoneDefault, obj5);
      cResult[12] = tmp16;
      cResult[13] = tmp5.container;
      cResult[14] = P;
      cResult[15] = tmp23;
    }
  }
  const obj6 = { style: header, children: null };
  const items = [tmp8, tmp13];
  obj6.children = items;
  const tmp17 = closure_10(View, obj6);
  cResult[6] = tmp5.header;
  cResult[7] = tmp8;
  cResult[8] = tmp13;
  cResult[9] = tmp17;
  tmp16 = tmp17;
  const obj2 = navigation(1503);
}) : (function AddPhoneScreen() {
  _require = require("useNavigation").useNavigation();
  const tmp = closure_11();
  const obj2 = { style: tmp.header, children: null };
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require("util").intl;
  obj3.children = intl.string(require("util").t.Xgb497);
  const items = [closure_9(require("Text/Text").Text, obj3), ];
  const obj4 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = require("util").intl;
  obj4.children = intl2.string(require("util").t.qFmzyo);
  items[1] = closure_9(require("Text/Text").Text, obj4);
  obj2.children = items;
  const obj = require("useNavigation");
  const obj5 = { style: tmp.container, reason: null, header: null, onComplete: null };
  const tmp2 = closure_10(View, obj2);
  obj5.reason = require("PhoneActionCreators").ChangePhoneReason.CONTACT_SYNC;
  obj5.header = tmp2;
  obj5.onComplete = function onComplete(arg0) {
    return ContactSyncModalActionCreators.submitPhone(arg0, closure_0);
  };
  return closure_9(AddPhoneDefault, obj5);
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function VerifyPhoneScreen() {
  const cResult = require("c").c(18);
  const tmp4 = closure_11();
  let obj = require("c");
  const tmp = _require;
  [tmp6, closure_0] = noop.useState(false);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  [tmp8, importDefault] = noop.useState();
  let phone = useContactSyncModalStore().phone;
  let tmp7 = _slicedToArray(noop.useState(), 2);
  navigation = require("useNavigation").useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function h() {
      currentUser = currentUser.getCurrentUser();
      let phone;
      if (currentUser != null) {
        phone = currentUser.phone;
      }
      return phone;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = items;
    tmp11 = fn;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const obj3 = require("useNavigation");
  const stateFromStores = tmp(navigation[18]).useStateFromStores(tmp10, tmp11);
  if (cResult[2] === navigation) {
    if (cResult[3] === stateFromStores) {
      let tmp14 = cResult[4];
    }
    if (cResult[5] === navigation) {
      if (cResult[6] === phone) {
        if (cResult[7] === stateFromStores) {
          let tmp15 = cResult[8];
        }
        const effect = noop.useEffect(tmp14, tmp15);
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          _require = stateFromStores(function*(arg0) {
            closure_2 = tmp5;
            closure_0(true);
            tmp2(undefined);
            yield closure_0(navigation[15]).verifyPhone(closure_0);
            closure_129_0 = value;
            const codeIntercepted = closure_129_0.codeIntercepted;
            const addedPhone = closure_129_0.addedPhone;
            const error = closure_129_0.error;
            tmp2(error);
            let tmp7 = addedPhone;
            if (addedPhone) {
              tmp7 = codeIntercepted;
            }
            if (!tmp7) {
              closure_0(false);
            }
            return codeIntercepted;
          });
          function handleCodeEntered() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }
          cResult[9] = handleCodeEntered;
          let tmp17 = handleCodeEntered;
        } else {
          tmp17 = cResult[9];
        }
        require("../../../../../_runtime/metro/00038__.js")(null != phone, "Phone shouldn't be null when trying to verify the code");
        if (cResult[10] !== navigation) {
          class R {
            constructor(arg0) {
              obj = closure_0(closure_2[15]);
              result = obj.verifyPhoneWithPassword(arg0, closure_2);
              return;
            }
          }
          cResult[10] = navigation;
          cResult[11] = R;
        } else {
          class R {
            constructor(arg0) {
              obj = closure_0(closure_2[15]);
              result = obj.verifyPhoneWithPassword(arg0, closure_2);
              return;
            }
          }
        }
        if (cResult[12] === tmp8) {
          class R {
            constructor(arg0) {
              obj = closure_0(closure_2[15]);
              result = obj.verifyPhoneWithPassword(arg0, closure_2);
              return;
            }
          }
        }
        const obj4 = { phone, loading: tmp6, error: tmp8, backgroundStyle: tmp4.redesignContainer, disableKeyboardAvoidingView: true, onCodeEnteredIntercept: tmp17, onVerified: R };
        cResult[12] = tmp8;
        cResult[13] = tmp6;
        cResult[14] = phone;
        cResult[15] = tmp4.redesignContainer;
        cResult[16] = R;
        cResult[17] = closure_9(require("VerifyPhone"), obj4);
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
                closure_0 = RunAfterInteractionsUtils.runAfterInteractions(() => { ... });
              });
            }
            return () => {
              if (closure_0 != null) {
                closure_0.cancel();
              }
            };
          }
        }
        const tmp24 = closure_9(require("VerifyPhone"), obj4);
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
          closure_0 = RunAfterInteractionsUtils.runAfterInteractions(() => { ... });
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
  const tmpResult = tmp(navigation[18]);
}) : (function VerifyPhoneScreen() {
  _slicedToArray = async function _handleCodeEntered2() {
    closure_1 = tmp2;
    _require(true);
    importDefault(undefined);
    await closure_0(tmp5[15]).verifyPhone(closure_0);
    closure_129_0 = value;
    const codeIntercepted = closure_129_0.codeIntercepted;
    const addedPhone = closure_129_0.addedPhone;
    const error = closure_129_0.error;
    closure_130_1(error);
    let tmp7 = addedPhone;
    if (addedPhone) {
      tmp7 = codeIntercepted;
    }
    if (!tmp7) {
      closure_130_0(false);
    }
    return codeIntercepted;
  };
  const tmp = closure_11();
  [tmp3, require] = noop.useState(false);
  const tmp4 = _slicedToArray(noop.useState(), 2);
  importDefault = tmp4[1];
  let phone = useContactSyncModalStore().phone;
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  navigation = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  const items = [UserStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    return phone;
  });
  const items1 = [navigation, phone, stateFromStores];
  const effect = noop.useEffect(() => {
    closure_0 = null;
    if (null != stateFromStores) {
      const result = require("ContactSyncModalActionCreators").handlePhoneVerificationComplete(tmp, navigation);
      result.then(() => {
        closure_0 = RunAfterInteractionsUtils.runAfterInteractions(() => closure_1_0(false));
      });
      const obj = require("ContactSyncModalActionCreators");
    }
    return () => {
      if (closure_0 != null) {
        closure_0.cancel();
      }
    };
  }, items1);
  require("../../../../../_runtime/metro/00038__.js")(null != phone, "Phone shouldn't be null when trying to verify the code");
  return closure_9(require("VerifyPhone"), {
    phone,
    loading: tmp3,
    error: tmp4[0],
    backgroundStyle: tmp.redesignContainer,
    disableKeyboardAvoidingView: true,
    onCodeEnteredIntercept: function handleCodeEntered(arg0) {
      const self = this;
      const apply = closure_4.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    onVerified(arg0) {
      const result = ContactSyncModalActionCreators.verifyPhoneWithPassword(arg0, navigation);
    }
  });
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/contact_sync/native/components/AddPhoneScreens.tsx");

export const AddPhoneScreen = tmp3;
export const VerifyPhoneScreen = tmp4;
export const VerifyPasswordScreen = ReactCompilerGating.isReactCompilerEnabled() ? (function VerifyPasswordScreen() {
  const cResult = require("c").c(14);
  let obj = require("c");
  [tmp5, require] = noop.useState(false);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  const navigation = require("useNavigation").useNavigation();
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
  const obj3 = require("useNavigation");
  const stateFromStores = require("useStateFromStores").useStateFromStores(tmp8, tmp9);
  if (cResult[2] === navigation) {
    if (cResult[3] === stateFromStores) {
      let tmp12 = cResult[4];
      let tmp13 = cResult[5];
    }
    const effect = noop.useEffect(tmp12, tmp13);
    navigation(tmp2[20])(null != phoneToken, "Phone token shouldn't be null when trying to verify the password");
    if (cResult[6] !== phoneToken) {
      const fn3 = function x(password) {
        _require(true);
        return PhoneActionCreatorsDefault.addPhone(phoneToken, password, PhoneActionCreators.ChangePhoneReason.CONTACT_SYNC);
      };
      cResult[6] = phoneToken;
      cResult[7] = fn3;
      let tmp18 = fn3;
    } else {
      tmp18 = cResult[7];
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          return closure_0(false);
        }
      }
      class T {
        constructor() {
          return;
        }
      }
      cResult[8] = E;
      cResult[9] = T;
    } else {
      class E {
        constructor() {
          return closure_0(false);
        }
      }
      class T {
        constructor() {
          return;
        }
      }
    }
    if (cResult[10] === tmp5) {
      class E {
        constructor() {
          return closure_0(false);
        }
      }
    }
    const obj4 = { hideUnverifiedBanner: true, parentLoading: tmp5, style: tmp7.redesignContainer, onSubmit: tmp18, onError: E, onSuccess: T };
    const tmp23 = closure_9(navigation(tmp2[22]), obj4);
    cResult[10] = tmp5;
    cResult[11] = tmp7.redesignContainer;
    cResult[12] = tmp18;
    cResult[13] = tmp23;
  }
  const fn2 = function _() {
    closure_0 = null;
    if (null != stateFromStores) {
      const result = require("ContactSyncModalActionCreators").handlePhoneVerificationComplete(tmp, navigation);
      result.then(() => {
        closure_0 = RunAfterInteractionsUtils.runAfterInteractions(() => closure_1_0(false));
      });
      const obj = require("ContactSyncModalActionCreators");
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
  const tmpResult = require("useStateFromStores");
}) : (function VerifyPasswordScreen() {
  const tmp = _slicedToArray(noop.useState(false), 2);
  _require = tmp[1];
  const navigation = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  phoneToken = useContactSyncModalStore().phoneToken;
  const tmp3 = closure_11();
  const items = [UserStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    return phone;
  });
  const items1 = [navigation, stateFromStores];
  const effect = noop.useEffect(() => {
    closure_0 = null;
    if (null != stateFromStores) {
      const result = closure_0(phoneToken[15]).handlePhoneVerificationComplete(tmp, navigation);
      result.then(() => {
        closure_0 = RunAfterInteractionsUtils.runAfterInteractions(() => closure_1_0(false));
      });
      const obj = closure_0(phoneToken[15]);
    }
    return () => {
      if (closure_0 != null) {
        closure_0.cancel();
      }
    };
  }, items1);
  navigation(phoneToken[20])(null != phoneToken, "Phone token shouldn't be null when trying to verify the password");
  return closure_9(navigation(phoneToken[22]), {
    hideUnverifiedBanner: true,
    parentLoading: tmp[0],
    style: tmp3.redesignContainer,
    onSubmit(password) {
      closure_0(true);
      return PhoneActionCreatorsDefault.addPhone(phoneToken, password, PhoneActionCreators.ChangePhoneReason.CONTACT_SYNC);
    },
    onError() {
      return closure_0(false);
    },
    onSuccess() {

    }
  });
});