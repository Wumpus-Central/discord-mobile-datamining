// === Module 12200: AddPhoneScreens ===

// Module 12200 (AddPhoneScreens)
import nativeDefault from "native" /* 576 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 6459 */;
import AddPhoneDefault from "AddPhone" /* 6465 */;
import PhoneActionCreators from "PhoneActionCreators" /* 6466 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12173 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;
const PhoneActionCreatorsDefault = PhoneActionCreators;

require = fn;
const View = fn(17).View;
const useContactSyncModalStore = fn(12174).useContactSyncModalStore;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { container: { paddingTop: fn(5994).NAV_BAR_HEIGHT + 32 }, redesignContainer: null, header: null, title: null, subtitle: null };
let obj3 = { paddingTop: fn(5994).NAV_BAR_HEIGHT + 32 };
obj2.redesignContainer = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: fn(5994).NAV_BAR_HEIGHT + 32 };
obj2.header = { alignItems: "center" };
obj2.title = { textAlign: "center" };
obj2.subtitle = { marginTop: 8, lineHeight: 18, textAlign: "center" };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/contact_sync/native/components/AddPhoneScreens.tsx");

export const AddPhoneScreen = function AddPhoneScreen() {
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
};
export const VerifyPhoneScreen = function VerifyPhoneScreen() {
  _slicedToArray = async function _handleCodeEntered() {
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
  require("module_38")(null != phone, "Phone shouldn't be null when trying to verify the code");
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
};
export const VerifyPasswordScreen = function VerifyPasswordScreen() {
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
  navigation(phoneToken[18])(null != phoneToken, "Phone token shouldn't be null when trying to verify the password");
  return closure_9(navigation(phoneToken[20]), {
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
};