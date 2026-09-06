// === Module 14777: UserSettingsAccountEditPassword ===

// Module 14777 (UserSettingsAccountEditPassword)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import TextInput from "TextInput" /* 6606 */;
import UserSettingsAccountActionCreatorsAll from "UserSettingsAccountActionCreators" /* 6984 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6990 */;
import showInvalidUsernameToastNative from "showInvalidUsernameToastNative" /* 6991 */;
import UserSettingsAccountUnverifiedHeader from "UserSettingsAccountUnverifiedHeader" /* 6998 */;
import _modDef14778 from "module_14778" /* 14778 */;
import noop from "module_19" /* 19 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 1950 */;
import UserSettingsAccountStore from "UserSettingsAccountStore" /* 7383 */;
import UserStore from "UserStore" /* 1371 */;

const UserSettingsAccountUnverifiedHeaderDefault = UserSettingsAccountUnverifiedHeader;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: c10, LoginRequiredActions: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const state = { newPassword: "call", password: 17080385 };
fn(4560);
let createStyles = { onePass: { width: 20, height: 20 }, unverifiedWrapper: null, container: null, header: null, requiredActionsSubtitle: null, requiredActionsTitle: null, image: null };
createStyles = { overflow: "hidden", borderRadius: nativeDefault.radii.xs, marginVertical: 16 };
createStyles.unverifiedWrapper = createStyles;
createStyles.container = { padding: 16 };
createStyles.header = { marginBottom: 20 };
createStyles.requiredActionsSubtitle = { textAlign: "center", marginTop: 8 };
createStyles.requiredActionsTitle = { flex: 1, textAlign: "center" };
createStyles.image = { marginTop: 12, marginBottom: 16, alignSelf: "center" };
let closure_15 = createStyles.createLegacyClassComponentStyles(createStyles);
const Component = noop.Component;
class EditPassword extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = closure_14;
    applyArgumentsResult.newPasswordRef = null;
    applyArgumentsResult.passwordManagerRef = null;
    applyArgumentsResult.handlePasswordChange = function handlePasswordChange(password) {
      let obj = { password };
      applyArgumentsResult.setState(obj);
      obj = { password };
      UserSettingsAccountActionCreatorsAll.updateAccount(obj);
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
  let obj = { style: tmp.container, children: null };
  ({ passwordLabel, newPasswordLabel } = props);
  if (hasBannerText) {
    obj = { style: tmp.unverifiedWrapper, children: closure_1_12(UserSettingsAccountUnverifiedHeaderDefault, {}) };
    hasBannerText = closure_1_12(hasOwnProperty, obj);
  }
  const items = [hasBannerText, , , ];
  let tmp4Result = showForcedPasswordUpdate;
  if (showForcedPasswordUpdate) {
    obj = { style: tmp.header, children: null };
    const obj1 = { source: _modDef14778, style: tmp.image };
    const items1 = [closure_1_12(React4, obj1), , ];
    const obj2 = { style: tmp.requiredActionsTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t.geta79);
    items1[1] = closure_1_12(Text_Text.Text, obj2);
    const obj3 = { style: tmp.requiredActionsSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = util.intl;
    obj3.children = intl2.string(util.t["37iHbZ"]);
    items1[2] = closure_1_12(Text_Text.Text, obj3);
    obj.children = items1;
    tmp4Result = map1(hasOwnProperty, obj);
  }
  items[1] = tmp4Result;
  tmp4Result = !showForcedPasswordUpdate;
  if (!showForcedPasswordUpdate) {
    const obj4 = { style: tmp.header, children: null };
    const obj5 = { style: tmp.requiredActionsTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl3 = util.intl;
    obj5.children = intl3.string(util.t.geta79);
    const items2 = [closure_1_12(Text_Text.Text, obj5), ];
    const obj6 = { style: tmp.requiredActionsSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
    const intl4 = util.intl;
    obj6.children = intl4.string(util.t.x5tG4V);
    items2[1] = closure_1_12(Text_Text.Text, obj6);
    obj4.children = items2;
    tmp4Result = map1(hasOwnProperty, obj4);
  }
  items[2] = tmp4Result;
  const items3 = [closure_1_12(TextInput.TextInput, { label: passwordLabel, secureTextEntry: true, errorMessage: self.getError("password"), onChange: self.handlePasswordChange, value: password, onSubmitEditing: self.canSubmit() ? self.handleSubmit : self.handleFocusNewPassword, returnKeyType: "next", autoComplete: "current-password", required: true }), , ];
  const obj8 = { label: newPasswordLabel, ref: self.handleSetNewPasswordRef, secureTextEntry: true, errorMessage: self.getError("new_password"), onChange: self.handleNewPasswordChange, value: newPassword, returnKeyType: "done", autoComplete: "new-password", onSubmitEditing: null, required: true };
  let handleSubmit;
  if (self.canSubmit()) {
    handleSubmit = self.handleSubmit;
  }
  obj8.onSubmitEditing = handleSubmit;
  items3[1] = closure_1_12(TextInput.TextInput, obj8);
  const obj9 = { text: null, onPress: null, loading: null, disabled: null };
  const intl5 = util.intl;
  obj9.text = intl5.string(util.t["FRep5/"]);
  obj9.onPress = self.handleSubmit;
  obj9.loading = submitting;
  if (!submitting) {
    submitting = null == password;
  }
  if (!submitting) {
    submitting = null == newPassword;
  }
  const obj10 = { children: null };
  const obj11 = { spacing: 24, children: null };
  obj9.disabled = submitting;
  items3[2] = closure_1_12(components_Button_Button.Button, obj9);
  obj11.children = items3;
  items[3] = map1(Stack_Stack.Stack, obj11);
  obj.children = items;
  obj10.children = map1(hasOwnProperty, obj);
  return closure_1_12(timestampProducer, obj10);
};
EditPassword.contextType = fn(4271).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountEditPassword.tsx");

export default function EditPasswordWrapper() {
  let obj = flag(6994);
  const params = obj.useSettingNavigationRoute().params;
  flag = undefined;
  if (params != null) {
    flag = params.isLoginRequiredAction;
  }
  if (flag == null) {
    flag = false;
  }
  let tmpResult = tmp(504);
  let items = [UserStore, UserSettingsAccountStore, LoginRequiredActionStore];
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items, () => {
    const currentUser = UserStore.getCurrentUser();
    let obj = UserSettingsAccountUnverifiedHeader;
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
    obj = { errors, submitting, settings, user: currentUser, verified: null, passwordLabel: null, newPasswordLabel: null, showForcedPasswordUpdate: null, hasBannerText: null };
    flag = undefined;
    if (currentUser != null) {
      flag = currentUser.verified;
    }
    if (flag == null) {
      flag = false;
    }
    obj.verified = flag;
    const intl = util.intl;
    obj.passwordLabel = intl.string(util.t.WBqMRQ);
    const intl2 = util.intl;
    obj.newPasswordLabel = intl2.string(util.t["8dM4FO"]);
    if (result) {
      result = flag;
    }
    obj.showForcedPasswordUpdate = result;
    obj.hasBannerText = null != obj.getBannerText(currentUser);
    return obj;
  });
  tmpResult = tmp(1483);
  obj = { navigation: tmpResult.useNavigation() };
  const merged = Object.assign(stateFromStoresObject);
  return closure_12(EditPassword, obj);
};