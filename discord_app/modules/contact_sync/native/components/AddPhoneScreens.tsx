// discord_app/modules/contact_sync/native/components/AddPhoneScreens.tsx
import ContactSyncModes from "ContactSyncModes";
import _slicedToArray from "_slicedToArray";
import VerifyPhone from "VerifyPhone";
import { View } from "runAfterInteractions";
import mergeGuildAvatar from "mergeGuildAvatar";
import { useContactSyncModalStore } from "ContactSyncModes";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let c10;
let c9;
const require = arg1;
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, redesignContainer: null, header: null, title: null, subtitle: null };
createCacheKey = { paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
createCacheKey[2] = { alignItems: "center" };
createCacheKey[3] = { textAlign: "center" };
createCacheKey[4] = { marginTop: 8, lineHeight: 18, textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
let result = require("noop").fileFinishedImporting("modules/contact_sync/native/components/AddPhoneScreens.tsx");

export const AddPhoneScreen = function AddPhoneScreen() {
  let obj = _require(1480);
  _require = obj.useNavigation();
  const tmp = createCacheKey();
  obj = { style: tmp.header, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = _require(1236).intl;
  obj[4] = intl.string(_require(1236).t.Xgb497);
  const items = [callback2(_require(4189).Text, obj), ];
  const obj1 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = _require(1236).intl;
  obj1[3] = intl2.string(_require(1236).t.qFmzyo);
  items[1] = callback2(_require(4189).Text, obj1);
  obj[1] = items;
  const obj2 = { style: tmp.container, reason: null, header: null, onComplete: null };
  const tmp2 = callback3(View, obj);
  obj2[1] = _require(9244).ChangePhoneReason.CONTACT_SYNC;
  obj2[2] = tmp2;
  obj2[3] = function onComplete(arg0) {
    return callback(outer1_2[15]).submitPhone(arg0, callback);
  };
  return callback2(importDefault(9243), obj2);
};
export const VerifyPhoneScreen = function VerifyPhoneScreen() {
  let require;
  let tmp3;
  function _handleCodeEntered(VerifyPhone, arg1) {
    const self = this;
    const tmp = stateFromStores((arg0) => {
      let closure_0 = arg0;
      let c3 = 0;
      let c4 = 0;
      return (function*(arg0) {
        if (c4 === 2) {
          c4 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === error) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let addedPhone = tmp5;
                let codeIntercepted = tmp2;
                let lib;
                codeIntercepted = undefined;
                addedPhone = undefined;
                error = undefined;
                lib(true);
                outer1_1(undefined);
                let obj2 = lib(outer1_2[15]);
                error = 1;
                c4 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = obj2.verifyPhone(lib);
                return obj1;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              lib = arg1;
              codeIntercepted = lib.codeIntercepted;
              addedPhone = lib.addedPhone;
              error = lib.error;
              codeIntercepted(error);
              let tmp7 = addedPhone;
              if (addedPhone) {
                tmp7 = codeIntercepted;
              }
              if (!tmp7) {
                lib(false);
              }
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = codeIntercepted;
              return obj;
            }
          } catch (tmp19) {
            c4 = tmp;
            throw tmp19;
          }
        }
      })();
    });
    const _handleCodeEntered = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = createCacheKey();
  [tmp3, require] = _handleCodeEntered(React.useState(false), 2);
  const tmp4 = _handleCodeEntered(React.useState(), 2);
  const importDefault = tmp4[1];
  let phone = useContactSyncModalStore().phone;
  let obj = require(navigation[10]);
  navigation = obj.useNavigation();
  const tmp2 = _handleCodeEntered(React.useState(false), 2);
  const items = [mergeGuildAvatar];
  const stateFromStores = require(navigation[16]).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    return phone;
  });
  const items1 = [navigation, phone, stateFromStores];
  const effect = React.useEffect(() => {
    let c0 = null;
    if (null != stateFromStores) {
      const result = outer1_0(navigation[15]).handlePhoneVerificationComplete(tmp, navigation);
      result.then(() => {
        let closure_0 = outer2_0(navigation[17]).runAfterInteractions(() => callback(false));
      });
      const obj = outer1_0(navigation[15]);
    }
    return () => {
      if (c0 != null) {
        c0.cancel();
      }
    };
  }, items1);
  importDefault(navigation[18])(null != phone, "Phone shouldn't be null when trying to verify the code");
  obj = {
    phone,
    loading: tmp3,
    error: tmp4[0],
    backgroundStyle: tmp.redesignContainer,
    disableKeyboardAvoidingView: true,
    onCodeEnteredIntercept: function handleCodeEntered(arg0) {
      const self = this;
      const apply = _handleCodeEntered.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    onVerified(arg0) {
      const result = outer1_0(navigation[15]).verifyPhoneWithPassword(arg0, navigation);
    }
  };
  return callback2(importDefault(navigation[19]), obj);
};
export const VerifyPasswordScreen = function VerifyPasswordScreen() {
  const tmp = callback(React.useState(false), 2);
  const _require = tmp[1];
  let obj = _require(phoneToken[10]);
  const navigation = obj.useNavigation();
  phoneToken = useContactSyncModalStore().phoneToken;
  const tmp3 = createCacheKey();
  const items = [mergeGuildAvatar];
  const stateFromStores = _require(phoneToken[16]).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    return phone;
  });
  const items1 = [navigation, stateFromStores];
  const effect = React.useEffect(() => {
    let c0 = null;
    if (null != stateFromStores) {
      const result = callback(phoneToken[15]).handlePhoneVerificationComplete(tmp, navigation);
      result.then(() => {
        _null = _null(phoneToken[17]).runAfterInteractions(() => callback(false));
      });
      const obj = callback(phoneToken[15]);
    }
    return () => {
      if (c0 != null) {
        c0.cancel();
      }
    };
  }, items1);
  navigation(phoneToken[18])(null != phoneToken, "Phone token shouldn't be null when trying to verify the password");
  obj = {
    hideUnverifiedBanner: true,
    parentLoading: tmp[0],
    style: tmp3.redesignContainer,
    onSubmit(closure_02) {
      callback(true);
      return navigation(phoneToken[14]).addPhone(phoneToken, closure_02, callback(phoneToken[14]).ChangePhoneReason.CONTACT_SYNC);
    },
    onError() {
      return callback(false);
    },
    onSuccess() {

    }
  };
  return callback2(navigation(phoneToken[20]), obj);
};