// === Module 14562: UserSettingsAccountEditPassword ===

// Module 14562 (UserSettingsAccountEditPassword)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import TextInput from "TextInput" /* 6098 */;
import UserSettingsAccountActionCreatorsAll from "UserSettingsAccountActionCreators" /* 6477 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6487 */;
import showInvalidUsernameToastNative from "showInvalidUsernameToastNative" /* 6488 */;
import UserSettingsAccountUnverifiedHeader from "UserSettingsAccountUnverifiedHeader" /* 6494 */;
import _modDef14563 from "module_14563" /* 14563 */;
import noop from "module_19" /* 19 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 2043 */;
import UserSettingsAccountStore from "UserSettingsAccountStore" /* 6886 */;
import UserStore from "UserStore" /* 1377 */;

const UserSettingsAccountUnverifiedHeaderDefault = UserSettingsAccountUnverifiedHeader;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: c10, LoginRequiredActions: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const state = { newPassword: "unicodeVersion", password: 17087297 };
const createStyles = fn(4890);
let obj2 = { onePass: { width: 20, height: 20 }, unverifiedWrapper: { overflow: "hidden", borderRadius: nativeDefault.radii.xs, marginVertical: 16 }, container: { padding: 16 }, header: { marginBottom: 20 }, requiredActionsSubtitle: { textAlign: "center", marginTop: 8 }, requiredActionsTitle: { flex: 1, textAlign: "center" }, image: { marginTop: 12, marginBottom: 16, alignSelf: "center" } };
let closure_15 = createStyles.createLegacyClassComponentStyles(obj2);
const Component = noop.Component;
class EditPassword extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = closure_14;
    applyArgumentsResult.newPasswordRef = null;
    applyArgumentsResult.passwordManagerRef = null;
    applyArgumentsResult.handlePasswordChange = function handlePasswordChange(password) {
      applyArgumentsResult.setState({ password });
      UserSettingsAccountActionCreatorsAll.updateAccount({ password });
    };
    applyArgumentsResult.handleSetNewPasswordRef = function handleSetNewPasswordRef(newPasswordRef) {
      applyArgumentsResult.newPasswordRef = newPasswordRef;
    };
    applyArgumentsResult.handleFocusNewPassword = function handleFocusNewPassword() {
      const newPasswordRef = applyArgumentsResult.newPasswordRef;
      if (newPasswordRef != null) {
        newPasswordRef.focus();
      }
    };
    applyArgumentsResult.handleNewPasswordChange = function handleNewPasswordChange(newPassword) {
      applyArgumentsResult.setState({ newPassword });
      UserSettingsAccountActionCreatorsAll.updateAccount({ newPassword });
    };
    applyArgumentsResult.handleSubmit = function handleSubmit() {
      showForcedPasswordUpdate = showForcedPasswordUpdate.props.showForcedPasswordUpdate;
      ({ password, newPassword } = showForcedPasswordUpdate.state);
      UserSettingsAccountActionCreatorsAll.saveAccountChanges({ password, newPassword }, { close: false }).then((ok) => {
        ok = ok.ok;
        if (!ok) {
          const body = ok.body;
          let username;
          if (body != null) {
            username = body.username;
          }
          ok = null == username;
        }
        if (!ok) {
          const result = showInvalidUsernameToastNative.showInvalidUsernameToast();
        }
        const errors = UserSettingsAccountStore.getErrors();
        let isEmptyResult = null == errors;
        if (!isEmptyResult) {
          isEmptyResult = _modDef12(errors).isEmpty();
          const obj2 = _modDef12(errors);
        }
        if (isEmptyResult) {
          if (showForcedPasswordUpdate) {
            AnalyticsUtilsDefault.track(constants.FORCED_UPDATE_PASSWORD_SUCCEEDED);
            UserSettingsModalActionCreatorsDefault.close();
          } else {
            const navigation = applyArgumentsResult.props.navigation;
            navigation.pop();
          }
        }
      });
    };
    applyArgumentsResult.handleSetPasswordManagerRef = function handleSetPasswordManagerRef(passwordManagerRef) {
      applyArgumentsResult.passwordManagerRef = passwordManagerRef;
    };
    applyArgumentsResult.canSubmit = function canSubmit() {
      ({ password, newPassword } = applyArgumentsResult.state);
      let tmp = null != password;
      if (tmp) {
        tmp = "" !== password;
      }
      if (tmp) {
        tmp = null != newPassword;
      }
      if (tmp) {
        tmp = "" !== newPassword;
      }
      if (tmp) {
        tmp = password.length > 0 && newPassword.length > 0;
        const tmp2 = password.length > 0 && newPassword.length > 0;
      }
      return tmp;
    };
    return applyArgumentsResult;
  }
}
const prototype = EditPassword.prototype;
prototype["componentWillUnmount"] = function componentWillUnmount() {
  try {
    UserSettingsAccountActionCreatorsAll.resetAccount();
  } catch (err) {
  }
};
prototype["getError"] = function getError(arg0) {
  const errors = this.props.errors;
  let first;
  if (null != errors) {
    if (null != errors[arg0]) {
      first = errors[arg0][0];
    }
  }
  return first;
};
prototype["render"] = function render() {
  const self = this;
  const tmp = closure_15(this.context);
  ({ password, newPassword } = this.state);
  const props = this.props;
  ({ showForcedPasswordUpdate, submitting, hasBannerText } = props);
  const obj = { style: tmp.container, children: null };
  ({ passwordLabel, newPasswordLabel } = props);
  if (hasBannerText) {
    const obj2 = { style: tmp.unverifiedWrapper, children: __initData(UserSettingsAccountUnverifiedHeaderDefault, {}) };
    hasBannerText = __initData(hasOwnProperty, obj2);
  }
  const items = [hasBannerText, , , ];
  let tmp4Result = showForcedPasswordUpdate;
  if (showForcedPasswordUpdate) {
    const obj3 = { style: tmp.header, children: null };
    const obj4 = { source: _modDef14563, style: tmp.image };
    const items1 = [__initData(React4, obj4), , ];
    const obj5 = { style: tmp.requiredActionsTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    obj5.children = intl.string(util.t.geta79);
    items1[1] = __initData(Text_Text.Text, obj5);
    const obj6 = { style: tmp.requiredActionsSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = util.intl;
    obj6.children = intl2.string(util.t["37iHbZ"]);
    items1[2] = __initData(Text_Text.Text, obj6);
    obj3.children = items1;
    tmp4Result = __initData2(hasOwnProperty, obj3);
  }
  items[1] = tmp4Result;
  let tmp4Result2 = !showForcedPasswordUpdate;
  if (!showForcedPasswordUpdate) {
    const obj7 = { style: tmp.header, children: null };
    const obj8 = { style: tmp.requiredActionsTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl3 = util.intl;
    obj8.children = intl3.string(util.t.geta79);
    const items2 = [__initData(Text_Text.Text, obj8), ];
    const obj9 = { style: tmp.requiredActionsSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
    const intl4 = util.intl;
    obj9.children = intl4.string(util.t.x5tG4V);
    items2[1] = __initData(Text_Text.Text, obj9);
    obj7.children = items2;
    tmp4Result2 = __initData2(hasOwnProperty, obj7);
  }
  items[2] = tmp4Result2;
  const items3 = [__initData(TextInput.TextInput, { label: passwordLabel, secureTextEntry: true, errorMessage: self.getError("password"), onChange: self.handlePasswordChange, value: password, onSubmitEditing: self.canSubmit() ? self.handleSubmit : self.handleFocusNewPassword, returnKeyType: "next", autoComplete: "current-password", required: true }), , ];
  const obj11 = { label: newPasswordLabel, ref: self.handleSetNewPasswordRef, secureTextEntry: true, errorMessage: self.getError("new_password"), onChange: self.handleNewPasswordChange, value: newPassword, returnKeyType: "done", autoComplete: "new-password", onSubmitEditing: null, required: true };
  let handleSubmit;
  if (self.canSubmit()) {
    handleSubmit = self.handleSubmit;
  }
  obj11.onSubmitEditing = handleSubmit;
  items3[1] = __initData(TextInput.TextInput, obj11);
  const obj12 = { text: null, onPress: null, loading: null, disabled: null };
  const intl5 = util.intl;
  obj12.text = intl5.string(util.t["FRep5/"]);
  obj12.onPress = self.handleSubmit;
  obj12.loading = submitting;
  if (!submitting) {
    submitting = null == password;
  }
  if (!submitting) {
    submitting = null == newPassword;
  }
  const obj13 = { children: null };
  const obj14 = { spacing: 24, children: null };
  obj12.disabled = submitting;
  items3[2] = __initData(components_Button_Button.Button, obj12);
  obj14.children = items3;
  items[3] = __initData2(Stack_Stack.Stack, obj14);
  obj.children = items;
  obj13.children = __initData2(hasOwnProperty, obj);
  return __initData(timestampProducer, obj13);
};
EditPassword.contextType = fn(4589).ThemeContext;
const ReactCompilerGating = fn(558);
let obj3 = { overflow: "hidden", borderRadius: nativeDefault.radii.xs, marginVertical: 16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountEditPassword.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = flag(576).c(6);
  let obj = flag(576);
  const params = flag(6490).useSettingNavigationRoute().params;
  flag = undefined;
  if (params != null) {
    flag = params.isLoginRequiredAction;
  }
  if (flag == null) {
    flag = false;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore, UserSettingsAccountStore, LoginRequiredActionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== flag) {
    const fn = function s() {
      const currentUser = UserStore.getCurrentUser();
      const errors = UserSettingsAccountStore.getErrors();
      const submitting = UserSettingsAccountStore.getSubmitting();
      const settings = UserSettingsAccountStore.getSettings();
      if (!flag) {
        _modDef38(null != currentUser, "EditPasswordWrapper: user cannot be undefined");
      }
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      let result = null != id;
      if (result) {
        const items = [constants2.UPDATE_PASSWORD];
        result = LoginRequiredActionStore.requiredActionsIncludes(id, items);
      }
      const obj2 = { errors, submitting, settings, user: currentUser, verified: null, passwordLabel: null, newPasswordLabel: null, showForcedPasswordUpdate: null, hasBannerText: null };
      flag = undefined;
      if (currentUser != null) {
        flag = currentUser.verified;
      }
      if (flag == null) {
        flag = false;
      }
      obj2.verified = flag;
      const intl = util.intl;
      obj2.passwordLabel = intl.string(util.t.WBqMRQ);
      const intl2 = util.intl;
      obj2.newPasswordLabel = intl2.string(util.t["8dM4FO"]);
      if (result) {
        result = flag;
      }
      obj2.showForcedPasswordUpdate = result;
      obj2.hasBannerText = null != UserSettingsAccountUnverifiedHeader.getBannerText(currentUser);
      return obj2;
    };
    cResult[1] = flag;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj2 = flag(6490);
  const stateFromStoresObject = flag(504).useStateFromStoresObject(first, tmp8);
  const tmpResult = flag(504);
  const navigation = flag(1490).useNavigation();
  if (cResult[3] === navigation) {
    if (cResult[4] === stateFromStoresObject) {
      let tmp11 = cResult[5];
    }
    return tmp11;
  }
  const merged = Object.assign(stateFromStoresObject);
  const tmp13 = closure_12(EditPassword, { navigation });
  cResult[3] = navigation;
  cResult[4] = stateFromStoresObject;
  cResult[5] = tmp13;
  tmp11 = tmp13;
  const obj3 = { navigation };
  const tmpResult2 = flag(1490);
}) : (() => {
  const params = flag(6490).useSettingNavigationRoute().params;
  flag = undefined;
  if (params != null) {
    flag = params.isLoginRequiredAction;
  }
  if (flag == null) {
    flag = false;
  }
  let obj = flag(6490);
  let items = [UserStore, UserSettingsAccountStore, LoginRequiredActionStore];
  const stateFromStoresObject = flag(504).useStateFromStoresObject(items, () => {
    const currentUser = UserStore.getCurrentUser();
    const errors = UserSettingsAccountStore.getErrors();
    const submitting = UserSettingsAccountStore.getSubmitting();
    const settings = UserSettingsAccountStore.getSettings();
    if (!flag) {
      _modDef38(null != currentUser, "EditPasswordWrapper: user cannot be undefined");
    }
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let result = null != id;
    if (result) {
      const items = [constants2.UPDATE_PASSWORD];
      result = LoginRequiredActionStore.requiredActionsIncludes(id, items);
    }
    const obj2 = { errors, submitting, settings, user: currentUser, verified: null, passwordLabel: null, newPasswordLabel: null, showForcedPasswordUpdate: null, hasBannerText: null };
    flag = undefined;
    if (currentUser != null) {
      flag = currentUser.verified;
    }
    if (flag == null) {
      flag = false;
    }
    obj2.verified = flag;
    const intl = util.intl;
    obj2.passwordLabel = intl.string(util.t.WBqMRQ);
    const intl2 = util.intl;
    obj2.newPasswordLabel = intl2.string(util.t["8dM4FO"]);
    if (result) {
      result = flag;
    }
    obj2.showForcedPasswordUpdate = result;
    obj2.hasBannerText = null != UserSettingsAccountUnverifiedHeader.getBannerText(currentUser);
    return obj2;
  });
  const tmpResult = flag(504);
  const tmpResult2 = flag(1490);
  const merged = Object.assign(stateFromStoresObject);
  return closure_12(EditPassword, { navigation: flag(1490).useNavigation() });
});