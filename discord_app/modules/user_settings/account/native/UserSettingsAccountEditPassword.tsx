// === Module 14134: componentWillUnmount ===

// Module 14134 (componentWillUnmount)
import applyDefault from "apply" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Stack from "Stack" /* 4733 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import dispatcherDefault from "dispatcher" /* 7877 */;
import TextInput from "TextInput" /* 8071 */;
import saveProfileAndAccountRequestAll from "saveProfileAndAccountRequest" /* 8620 */;
import handleOpenEmailVerificationDefault from "handleOpenEmailVerification" /* 8624 */;
import registerAssetDefault from "registerAsset" /* 14135 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import handleUpdateUser from "handleUpdateUser" /* 1384 */;
import handleFormClose from "handleFormClose" /* 7361 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import importAllResult from "noop" /* 19 */;

require = fn;
({ Image: c4, View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: c10, LoginRequiredActions: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = { newPassword: "call", password: 17077313 };
const createCacheKey = { overflow: "hidden", borderRadius: ThemesDefault.radii.xs, marginVertical: 16 };
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
      saveProfileAndAccountRequestAll.updateAccount(obj);
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
      saveProfileAndAccountRequestAll.updateAccount({ newPassword: arg0 });
    };
    applyArgumentsResult.handleSubmit = function handleSubmit() {
      showForcedPasswordUpdate = showForcedPasswordUpdate.props.showForcedPasswordUpdate;
      ({ password, newPassword } = showForcedPasswordUpdate.state);
      saveProfileAndAccountRequestAll.saveAccountChanges({ password, newPassword }, { close: false }).then((result) => {
        let ok = result.ok;
        if (!ok) {
          const body = result.body;
          let username;
          if (body != null) {
            username = body.username;
          }
          ok = null == username;
        }
        if (!ok) {
          result = applyArgumentsResult(dependencyMap[11]).showInvalidUsernameToast();
          const obj = applyArgumentsResult(dependencyMap[11]);
        }
        const errors = closure_2_8.getErrors();
        let isEmptyResult = null == errors;
        if (!isEmptyResult) {
          isEmptyResult = applyDefault(errors).isEmpty();
          const obj2 = applyDefault(errors);
        }
        if (isEmptyResult) {
          if (showForcedPasswordUpdate) {
            expandEventPropertiesDefault.track(closure_2_10.FORCED_UPDATE_PASSWORD_SUCCEEDED);
            dispatcherDefault.close();
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
    obj[1] = callback(handleOpenEmailVerificationDefault, {});
    hasBannerText = callback(closure_5, obj);
  }
  const items = [hasBannerText, , , ];
  let tmp4Result = showForcedPasswordUpdate;
  if (showForcedPasswordUpdate) {
    obj = { style: null, children: null };
    obj[0] = tmp.header;
    obj1 = { source: null, style: null };
    obj1[0] = registerAssetDefault;
    obj1[1] = tmp.image;
    const items1 = [callback(closure_4, obj1), , ];
    const obj2 = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj2[0] = tmp.requiredActionsTitle;
    const intl = getSystemLocale.intl;
    obj2[3] = intl.string(getSystemLocale.t.geta79);
    items1[1] = callback(Text.Text, obj2);
    const obj3 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj3[0] = tmp.requiredActionsSubtitle;
    const intl2 = getSystemLocale.intl;
    obj3[3] = intl2.string(getSystemLocale.t["37iHbZ"]);
    items1[2] = callback(Text.Text, obj3);
    obj[1] = items1;
    tmp4Result = callback2(closure_5, obj);
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
    const items2 = [callback(Text.Text, obj5), ];
    const obj6 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj6[0] = tmp.requiredActionsSubtitle;
    const intl4 = getSystemLocale.intl;
    obj6[3] = intl4.string(getSystemLocale.t.x5tG4V);
    items2[1] = callback(Text.Text, obj6);
    obj4[1] = items2;
    tmp4Result = callback2(closure_5, obj4);
  }
  items[2] = tmp4Result;
  const items3 = [callback(TextInput.TextInput, { label: passwordLabel, secureTextEntry: true, errorMessage: self.getError("password"), onChange: self.handlePasswordChange, value: password, onSubmitEditing: self.canSubmit() ? self.handleSubmit : self.handleFocusNewPassword, returnKeyType: "next", autoComplete: "current-password", required: true }), , ];
  const obj8 = { label: newPasswordLabel, ref: self.handleSetNewPasswordRef, secureTextEntry: true, errorMessage: self.getError("new_password"), onChange: self.handleNewPasswordChange, value: newPassword, returnKeyType: "done", autoComplete: "new-password", onSubmitEditing: null, required: true };
  let handleSubmit;
  if (self.canSubmit()) {
    handleSubmit = self.handleSubmit;
  }
  obj8[8] = handleSubmit;
  items3[1] = callback(TextInput.TextInput, obj8);
  const obj9 = { text: null, onPress: null, loading: null, disabled: null };
  const intl5 = getSystemLocale.intl;
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
  items3[2] = callback(Button.Button, obj9);
  obj11[1] = items3;
  items[3] = callback2(Stack.Stack, obj11);
  obj[1] = items;
  obj10[0] = callback2(closure_5, obj);
  return callback(closure_6, obj10);
};
EditPassword.contextType = require("ManaContext").ThemeContext;
let result = require("obj132").fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountEditPassword.tsx");

export default function EditPasswordWrapper() {
  let obj = flag(7385);
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
    let obj = flag(dependencyMap[15]);
    const errors = closure_1_8.getErrors();
    const submitting = closure_1_8.getSubmitting();
    const settings = closure_1_8.getSettings();
    if (!flag) {
      _modDef38(null != currentUser, "EditPasswordWrapper: user cannot be undefined");
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
    const intl = tmp2(dependencyMap[18]).intl;
    obj[5] = intl.string(flag(dependencyMap[18]).t.WBqMRQ);
    const intl2 = tmp2(dependencyMap[18]).intl;
    obj[6] = intl2.string(flag(dependencyMap[18]).t["8dM4FO"]);
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