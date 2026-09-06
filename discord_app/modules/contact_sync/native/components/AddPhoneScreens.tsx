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

const PhoneActionCreatorsDefault = PhoneActionCreators;

require = fn;
const View = fn(17).View;
const useContactSyncModalStore = fn(12677).useContactSyncModalStore;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { container: null, redesignContainer: null, header: null, title: null, subtitle: null };
createStyles = { paddingTop: fn(5682).NAV_BAR_HEIGHT + 32 };
createStyles.container = createStyles;
createStyles.redesignContainer = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  paddingTop: fn(5682).NAV_BAR_HEIGHT + 32,
};
createStyles.header = { alignItems: "center" };
createStyles.title = { textAlign: "center" };
createStyles.subtitle = { marginTop: 8, lineHeight: 18, textAlign: "center" };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/contact_sync/native/components/AddPhoneScreens.tsx");

export const AddPhoneScreen = function AddPhoneScreen() {
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  const tmp = closure_11();
  obj = { style: tmp.header, children: null };
  obj = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = require("util").intl;
  obj.children = intl.string(require("util").t.Xgb497);
  const items = [closure_9(require("Text/Text").Text, obj)];
  const obj1 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = require("util").intl;
  obj1.children = intl2.string(require("util").t.qFmzyo);
  items[1] = closure_9(require("Text/Text").Text, obj1);
  obj.children = items;
  const obj2 = { style: tmp.container, reason: null, header: null, onComplete: null };
  const tmp2 = closure_10(View, obj);
  obj2.reason = require("PhoneActionCreators").ChangePhoneReason.CONTACT_SYNC;
  obj2.header = tmp2;
  obj2.onComplete = function onComplete(arg0) {
    return ContactSyncModalActionCreators.submitPhone(arg0, closure_0);
  };
  return closure_9(AddPhoneDefault, obj2);
};
export const VerifyPhoneScreen = function VerifyPhoneScreen() {
  _slicedToArray = async function _handleCodeEntered() {
    closure_1 = tmp2;
    _require(true);
    importDefault(undefined);
    closure_129_0 = await closure_0(tmp5[15]).verifyPhone(closure_0);
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
  [tmp3, require] = _slicedToArray(noop.useState(false), 2);
  const tmp4 = _slicedToArray(noop.useState(), 2);
  importDefault = tmp4[1];
  let phone = useContactSyncModalStore().phone;
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  const tmp2 = _slicedToArray(noop.useState(false), 2);
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
  require("../../../../../_runtime/metro/00038__.js")(
    null != phone,
    "Phone shouldn't be null when trying to verify the code",
  );
  obj = {
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
    },
  };
  return closure_9(require("VerifyPhone"), obj);
};
export const VerifyPasswordScreen = function VerifyPasswordScreen() {
  const tmp = _slicedToArray(noop.useState(false), 2);
  _require = tmp[1];
  let obj = require("useNavigation");
  const navigation = obj.useNavigation();
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
  obj = {
    hideUnverifiedBanner: true,
    parentLoading: tmp[0],
    style: tmp3.redesignContainer,
    onSubmit(password) {
      closure_0(true);
      return PhoneActionCreatorsDefault.addPhone(
        phoneToken,
        password,
        PhoneActionCreators.ChangePhoneReason.CONTACT_SYNC,
      );
    },
    onError() {
      return closure_0(false);
    },
    onSuccess() {},
  };
  return closure_9(navigation(phoneToken[20]), obj);
};
