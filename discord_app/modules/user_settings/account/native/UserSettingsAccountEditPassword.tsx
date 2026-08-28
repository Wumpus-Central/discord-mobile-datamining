// === Module 14316: componentWillUnmount ===

// Module 14316 (componentWillUnmount)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4442 */;
import Stack from "Stack" /* 4891 */;
import Button from "Button" /* 4893 */;
import TextInput from "TextInput" /* 7652 */;
import saveProfileAndAccountRequestAll from "saveProfileAndAccountRequest" /* 7703 */;
import handleOpenEmailVerificationDefault from "handleOpenEmailVerification" /* 7713 */;
import registerAssetDefault from "registerAsset" /* 14317 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "handleUpdateUser" /* 1384 */;
import closure_8 from "handleFormClose" /* 6211 */;
import closure_9 from "mergeGuildAvatar" /* 1923 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ Image: c4, View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: c10, LoginRequiredActions: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = { newPassword: "container", password: 17069889 };
createCacheKey = { onePass: { width: 20, height: 20 }, unverifiedWrapper: null, container: null, header: null, requiredActionsSubtitle: null, requiredActionsTitle: null, image: null };
createCacheKey = { overflow: "hidden", borderRadius: ThemesDefault.radii.xs, marginVertical: 16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { padding: 16 };
createCacheKey[3] = { marginBottom: 20 };
createCacheKey[4] = { textAlign: "center", marginTop: 8 };
createCacheKey[5] = { flex: 1, textAlign: "center" };
createCacheKey[6] = { marginTop: 12, marginBottom: 16, alignSelf: "center" };
let closure_15 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const Component = importAllResult.Component;
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
      closure_1_2(closure_1_3[10]).updateAccount(obj);
    };
    applyArgumentsResult.handleSetNewPasswordRef = function handleSetNewPasswordRef(newPasswordRef) {
      closure_0.newPasswordRef = newPasswordRef;
    };
    applyArgumentsResult.handleFocusNewPassword = function handleFocusNewPassword() {
      const newPasswordRef = applyArgumentsResult.newPasswordRef;
      if (newPasswordRef != null) {
        newPasswordRef.focus();
      }
    };
    applyArgumentsResult.handleNewPasswordChange = function handleNewPasswordChange(arg0) {
      applyArgumentsResult.setState({ newPassword: arg0 });
      closure_1_2(closure_1_3[10]).updateAccount({ newPassword: arg0 });
    };
    applyArgumentsResult.handleSubmit = function handleSubmit() {
      showForcedPasswordUpdate = showForcedPasswordUpdate.props.showForcedPasswordUpdate;
      ({ password, newPassword } = showForcedPasswordUpdate.state);
      let obj = closure_1_2(closure_1_3[10]);
      closure_1_2(closure_1_3[10]).saveAccountChanges({ password, newPassword }, { close: false }).then((ok) => {
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
          const result = applyArgumentsResult(closure_2_3[11]).showInvalidUsernameToast();
          const obj = applyArgumentsResult(closure_2_3[11]);
        }
        const errors = closure_2_8.getErrors();
        let isEmptyResult = null == errors;
        if (!isEmptyResult) {
          isEmptyResult = closure_2_1(closure_2_3[12])(errors).isEmpty();
          const obj2 = closure_2_1(closure_2_3[12])(errors);
        }
        if (isEmptyResult) {
          if (showForcedPasswordUpdate) {
            closure_2_1(closure_2_3[13]).track(closure_2_10.FORCED_UPDATE_PASSWORD_SUCCEEDED);
            const obj3 = closure_2_1(closure_2_3[13]);
            closure_2_1(closure_2_3[14]).close();
            const obj4 = closure_2_1(closure_2_3[14]);
          } else {
            const navigation = showForcedPasswordUpdate.props.navigation;
            navigation.pop();
          }
        }
      });
    };
    applyArgumentsResult.handleSetPasswordManagerRef = function handleSetPasswordManagerRef(passwordManagerRef) {
      closure_0.passwordManagerRef = passwordManagerRef;
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
    saveProfileAndAccountRequestAll.resetAccount();
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
  const tmp = callback2(this.context);
  ({ password, newPassword } = this.state);
  const props = this.props;
  ({ showForcedPasswordUpdate, submitting, hasBannerText } = props);
  let obj = { style: tmp.container, children: null };
  ({ passwordLabel, newPasswordLabel } = props);
  if (hasBannerText) {
    obj = { style: null, children: null };
    obj[0] = tmp.unverifiedWrapper;
    obj[1] = tmp2(handleOpenEmailVerificationDefault, {});
    hasBannerText = tmp2(tmp5, obj);
  }
  const items = [hasBannerText, , , ];
  let tmp4Result = showForcedPasswordUpdate;
  if (showForcedPasswordUpdate) {
    obj = { style: null, children: null };
    obj[0] = tmp.header;
    obj1 = { source: null, style: null };
    obj1[0] = registerAssetDefault;
    obj1[1] = tmp.image;
    const items1 = [tmp2(closure_4, obj1), , ];
    const obj2 = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj2[0] = tmp.requiredActionsTitle;
    const intl = getSystemLocale.intl;
    obj2[3] = intl.string(getSystemLocale.t.geta79);
    items1[1] = tmp2(Text.Text, obj2);
    const obj3 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj3[0] = tmp.requiredActionsSubtitle;
    const intl2 = getSystemLocale.intl;
    obj3[3] = intl2.string(getSystemLocale.t["37iHbZ"]);
    items1[2] = tmp2(Text.Text, obj3);
    obj[1] = items1;
    tmp4Result = tmp4(tmp5, obj);
  }
  items[1] = tmp4Result;
  tmp4Result = !showForcedPasswordUpdate;
  if (!showForcedPasswordUpdate) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.header;
    const obj5 = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj5[0] = tmp.requiredActionsTitle;
    const intl3 = getSystemLocale.intl;
    obj5[3] = intl3.string(getSystemLocale.t.geta79);
    const items2 = [tmp2(Text.Text, obj5), ];
    const obj6 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj6[0] = tmp.requiredActionsSubtitle;
    const intl4 = getSystemLocale.intl;
    obj6[3] = intl4.string(getSystemLocale.t.x5tG4V);
    items2[1] = tmp2(Text.Text, obj6);
    obj4[1] = items2;
    tmp4Result = tmp4(tmp5, obj4);
  }
  items[2] = tmp4Result;
  const items3 = [closure_12(TextInput.TextInput, { label: passwordLabel, secureTextEntry: true, errorMessage: self.getError("password"), onChange: self.handlePasswordChange, value: password, onSubmitEditing: self.canSubmit() ? self.handleSubmit : self.handleFocusNewPassword, returnKeyType: "next", autoComplete: "current-password", required: true }), , ];
  const obj8 = { label: newPasswordLabel, ref: self.handleSetNewPasswordRef, secureTextEntry: true, errorMessage: self.getError("new_password"), onChange: self.handleNewPasswordChange, value: newPassword, returnKeyType: "done", autoComplete: "new-password", onSubmitEditing: null, required: true };
  let handleSubmit;
  if (self.canSubmit()) {
    handleSubmit = self.handleSubmit;
  }
  obj8[8] = handleSubmit;
  items3[1] = closure_12(TextInput.TextInput, obj8);
  const obj9 = { text: null, onPress: null, loading: null, disabled: null };
  const intl5 = tmp16(1236).intl;
  obj9[0] = intl5.string(getSystemLocale.t["FRep5/"]);
  obj9[1] = self.handleSubmit;
  obj9[2] = submitting;
  if (!submitting) {
    submitting = null == password;
  }
  if (!submitting) {
    submitting = null == newPassword;
  }
  const obj10 = { children: null };
  const obj11 = { spacing: 24, children: null };
  obj9[3] = submitting;
  items3[2] = closure_12(Button.Button, obj9);
  obj11[1] = items3;
  items[3] = closure_13(Stack.Stack, obj11);
  obj[1] = items;
  obj10[0] = closure_13(closure_5, obj);
  return closure_12(closure_6, obj10);
};
EditPassword.contextType = require("ManaContext").ThemeContext;
let result = require("set").fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountEditPassword.tsx");

export default function EditPasswordWrapper() {
  let obj = flag(7106);
  const params = obj.useSettingNavigationRoute().params;
  flag = undefined;
  if (params != null) {
    flag = params.isLoginRequiredAction;
  }
  if (flag == null) {
    flag = false;
  }
  let tmpResult = tmp(589);
  let items = [closure_9, closure_8, closure_7];
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items, () => {
    const currentUser = closure_1_9.getCurrentUser();
    let obj = flag(closure_1_3[15]);
    const errors = closure_1_8.getErrors();
    const submitting = closure_1_8.getSubmitting();
    const settings = closure_1_8.getSettings();
    if (!flag) {
      closure_1_1(tmp3[24])(null != currentUser, "EditPasswordWrapper: user cannot be undefined");
    }
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let result = null != id;
    if (result) {
      const items = [closure_1_11.UPDATE_PASSWORD];
      result = closure_1_7.requiredActionsIncludes(id, items);
    }
    obj = { errors, submitting, settings, user: currentUser, verified: null, passwordLabel: null, newPasswordLabel: null, showForcedPasswordUpdate: null, hasBannerText: null };
    flag = undefined;
    if (currentUser != null) {
      flag = currentUser.verified;
    }
    if (flag == null) {
      flag = false;
    }
    obj[4] = flag;
    const intl = tmp2(tmp3[18]).intl;
    obj[5] = intl.string(flag(closure_1_3[18]).t.WBqMRQ);
    const intl2 = tmp2(tmp3[18]).intl;
    obj[6] = intl2.string(flag(closure_1_3[18]).t["8dM4FO"]);
    if (result) {
      result = flag;
    }
    obj[7] = result;
    obj[8] = null != obj.getBannerText(currentUser);
    return obj;
  });
  tmpResult = tmp(1500);
  obj = { navigation: tmpResult.useNavigation() };
  const merged = Object.assign(stateFromStoresObject);
  return callback(EditPassword, obj);
};