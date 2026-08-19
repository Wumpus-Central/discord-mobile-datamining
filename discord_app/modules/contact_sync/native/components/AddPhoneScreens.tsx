// === Module 11876: AddPhoneScreen ===

// Module 11876 (AddPhoneScreen)
import ThemesDefault from "Themes" /* 712 */;
import AddPhoneDefault from "AddPhone" /* 8628 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { useContactSyncModalStore } from "ContactSyncModes" /* 11850 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ jsx: c9, jsxs: c10 } = jsxProd);
const createCacheKey = { paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
createCacheKey[2] = { alignItems: "center" };
createCacheKey[3] = { textAlign: "center" };
createCacheKey[4] = { marginTop: 8, lineHeight: 18, textAlign: "center" };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj1 = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
let result = require("obj132").fileFinishedImporting("modules/contact_sync/native/components/AddPhoneScreens.tsx");

export const AddPhoneScreen = function AddPhoneScreen() {
  let obj = _require(1500);
  _require = obj.useNavigation();
  const tmp = callback4();
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = _require(1236).intl;
  obj[4] = intl.string(_require(1236).t.Xgb497);
  const items = [callback2(_require(4734).Text, obj), ];
  obj1 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = _require(1236).intl;
  obj1[3] = intl2.string(_require(1236).t.qFmzyo);
  items[1] = callback2(_require(4734).Text, obj1);
  obj[1] = items;
  const obj2 = { style: tmp.container, reason: null, header: null, onComplete: null };
  const tmp2 = callback3(View, obj);
  obj2[1] = _require(8629).ChangePhoneReason.CONTACT_SYNC;
  obj2[2] = tmp2;
  obj2[3] = function onComplete(arg0) {
    return callback(dependencyMap[15]).submitPhone(arg0, callback);
  };
  return callback2(AddPhoneDefault, obj2);
};
export const VerifyPhoneScreen = function VerifyPhoneScreen() {
  function _handleCodeEntered(closure_5, arg1) {
    const self = this;
    const tmp = stateFromStores((arg0) => {
      closure_0 = arg0;
      c3 = 0;
      c4 = 0;
      return (function*(arg0) {
        lib(true);
        closure_1_1(undefined);
        const obj2 = lib(closure_1_2[15]);
        lib = yield obj2.verifyPhone(lib);
        const codeIntercepted = lib.codeIntercepted;
        const addedPhone = lib.addedPhone;
        codeIntercepted(error);
        let tmp7 = addedPhone;
        if (addedPhone) {
          tmp7 = codeIntercepted;
        }
        if (!tmp7) {
          lib(false);
        }
        return codeIntercepted;
      })();
    });
    closure_4 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback4();
  [tmp3, require] = _handleCodeEntered(React.useState(false), 2);
  const tmp4 = _handleCodeEntered(React.useState(), 2);
  importDefault = tmp4[1];
  let phone = useContactSyncModalStore().phone;
  let obj = require(navigation[10]);
  navigation = obj.useNavigation();
  const tmp2 = _handleCodeEntered(React.useState(false), 2);
  const items = [closure_7];
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
    c0 = null;
    if (null != stateFromStores) {
      const result = require(navigation[15]).handlePhoneVerificationComplete(tmp, navigation);
      result.then((result) => {
        closure_0 = require(navigation[17]).runAfterInteractions(() => callback(false));
      });
      const obj = require(navigation[15]);
    }
    return () => {
      if (_null != null) {
        _null.cancel();
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
      const result = require(navigation[15]).verifyPhoneWithPassword(arg0, navigation);
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
  const tmp3 = callback4();
  const items = [closure_7];
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
    c0 = null;
    if (null != stateFromStores) {
      const result = callback(phoneToken[15]).handlePhoneVerificationComplete(tmp, navigation);
      result.then((result) => {
        _null = _null(phoneToken[17]).runAfterInteractions(() => callback(false));
      });
      const obj = callback(phoneToken[15]);
    }
    return () => {
      if (_null != null) {
        _null.cancel();
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