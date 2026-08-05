import { registerAsset } from "../../../../../_runtime/13928_registerAsset.js";
import { Button } from "../../../../design/components/Button/native/Button.native.tsx";
import { Stack } from "../../../../design/components/Stack/native/Stack.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { TextInput } from "../../../../design/components/TextInput/native/TextInput.native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { handleOpenEmailVerification } from "UserSettingsAccountUnverifiedHeader.tsx";
// discord_app/modules/user_settings/account/native/UserSettingsAccountEditPassword.tsx
import get_ActivityIndicator from "Text";
import handleUpdateUser from "handleUpdateUser";
import handleFormClose from "handleFormClose";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import jsxProd from "Button";
import createCacheKey from "createCacheKey";
import { Component } from "Stack";
import importAllResult from "Stack";

let c10;
let c4;
let c5;
let closure_12;
let closure_6;
let map1;
let unpackModuleId;
let require = arg1;
({ Image: c4, View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: c10, LoginRequiredActions: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = { newPassword: "call", password: 17070913 };
createCacheKey = { onePass: { width: 20, height: 20 }, unverifiedWrapper: null, container: null, header: null, requiredActionsSubtitle: null, requiredActionsTitle: null, image: null };
createCacheKey = { overflow: "hidden", borderRadius: require("Themes").radii.xs, marginVertical: 16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { padding: 16 };
createCacheKey[3] = { marginBottom: 20 };
createCacheKey[4] = { textAlign: "center", marginTop: 8 };
createCacheKey[5] = { flex: 1, textAlign: "center" };
createCacheKey[6] = { marginTop: 12, marginBottom: 16, alignSelf: "center" };
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
class EditPassword extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = jsxs;
    applyArgumentsResult.newPasswordRef = null;
    applyArgumentsResult.passwordManagerRef = null;
    applyArgumentsResult.handlePasswordChange = function handlePasswordChange(password) {
      let obj = { password };
      applyArgumentsResult.setState(obj);
      obj = { password };
      outer1_2(outer1_3[10]).updateAccount(obj);
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
      outer1_2(outer1_3[10]).updateAccount({ newPassword: arg0 });
    };
    applyArgumentsResult.handleSubmit = function handleSubmit() {
      let newPassword;
      let password;
      showForcedPasswordUpdate = showForcedPasswordUpdate.props.showForcedPasswordUpdate;
      ({ password, newPassword } = showForcedPasswordUpdate.state);
      let obj = outer1_2(outer1_3[10]);
      outer1_2(outer1_3[10]).saveAccountChanges({ password, newPassword }, { close: false }).then((ok) => {
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
          const result = applyArgumentsResult(outer2_3[11]).showInvalidUsernameToast();
          const obj = applyArgumentsResult(outer2_3[11]);
        }
        const errors = outer2_8.getErrors();
        let isEmptyResult = null == errors;
        if (!isEmptyResult) {
          isEmptyResult = outer2_1(outer2_3[12])(errors).isEmpty();
          const obj2 = outer2_1(outer2_3[12])(errors);
        }
        if (isEmptyResult) {
          if (showForcedPasswordUpdate) {
            outer2_1(outer2_3[13]).track(outer2_10.FORCED_UPDATE_PASSWORD_SUCCEEDED);
            const obj3 = outer2_1(outer2_3[13]);
            outer2_1(outer2_3[14]).close();
            const obj4 = outer2_1(outer2_3[14]);
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
      let newPassword;
      let password;
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
    importAll(8321).resetAccount();
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
  let hasBannerText;
  let newPassword;
  let newPasswordLabel;
  let password;
  let passwordLabel;
  let showForcedPasswordUpdate;
  let submitting;
  const self = this;
  const tmp = createCacheKey(this.context);
  ({ password, newPassword } = this.state);
  const props = this.props;
  ({ showForcedPasswordUpdate, submitting, hasBannerText } = props);
  let obj = { style: tmp.container, children: null };
  ({ passwordLabel, newPasswordLabel } = props);
  if (hasBannerText) {
    obj = { style: null, children: null };
    obj[0] = tmp.unverifiedWrapper;
    obj[1] = tmp2(handleOpenEmailVerification, {});
    hasBannerText = tmp2(tmp5, obj);
  }
  const items = [hasBannerText, , , ];
  let tmp4Result = showForcedPasswordUpdate;
  if (showForcedPasswordUpdate) {
    obj = { style: null, children: null };
    obj[0] = tmp.header;
    const obj1 = { source: null, style: null };
    obj1[0] = registerAsset;
    obj1[1] = tmp.image;
    const items1 = [tmp2(closure_4, obj1), , ];
    const obj2 = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj2[0] = tmp.requiredActionsTitle;
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj2[3] = intl.string(getSystemLocale /* getSystemLocale */.t.geta79);
    items1[1] = tmp2(Text /* Text */.Text, obj2);
    const obj3 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj3[0] = tmp.requiredActionsSubtitle;
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    obj3[3] = intl2.string(getSystemLocale /* getSystemLocale */.t["37iHbZ"]);
    items1[2] = tmp2(Text /* Text */.Text, obj3);
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
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    obj5[3] = intl3.string(getSystemLocale /* getSystemLocale */.t.geta79);
    const items2 = [tmp2(Text /* Text */.Text, obj5), ];
    const obj6 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj6[0] = tmp.requiredActionsSubtitle;
    const intl4 = getSystemLocale /* getSystemLocale */.intl;
    obj6[3] = intl4.string(getSystemLocale /* getSystemLocale */.t.x5tG4V);
    items2[1] = tmp2(Text /* Text */.Text, obj6);
    obj4[1] = items2;
    tmp4Result = tmp4(tmp5, obj4);
  }
  items[2] = tmp4Result;
  const obj7 = { label: passwordLabel, secureTextEntry: true, errorMessage: null, onChange: null, value: null, onSubmitEditing: null, returnKeyType: "next", autoComplete: "current-password", required: true };
  obj7[2] = self.getError("password");
  obj7[3] = self.handlePasswordChange;
  obj7[4] = password;
  obj7[5] = self.canSubmit() ? self.handleSubmit : self.handleFocusNewPassword;
  const items3 = [closure_12(TextInput /* TextInput */.TextInput, obj7), , ];
  const obj8 = { label: newPasswordLabel, ref: self.handleSetNewPasswordRef, secureTextEntry: true, errorMessage: null, onChange: null, value: null, returnKeyType: "done", autoComplete: "new-password", onSubmitEditing: null, required: true };
  obj8[3] = self.getError("new_password");
  obj8[4] = self.handleNewPasswordChange;
  obj8[5] = newPassword;
  let handleSubmit;
  if (self.canSubmit()) {
    handleSubmit = self.handleSubmit;
  }
  obj8[8] = handleSubmit;
  items3[1] = closure_12(TextInput /* TextInput */.TextInput, obj8);
  const obj9 = { text: null, onPress: null, loading: null, disabled: null };
  const intl5 = tmp16(1236).intl;
  obj9[0] = intl5.string(getSystemLocale /* getSystemLocale */.t["FRep5/"]);
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
  items3[2] = closure_12(Button /* Button */.Button, obj9);
  obj11[1] = items3;
  items[3] = closure_13(Stack /* Stack */.Stack, obj11);
  obj[1] = items;
  obj10[0] = closure_13(closure_5, obj);
  return closure_12(closure_6, obj10);
};
EditPassword.contextType = require("ManaContext").ThemeContext;
let result = require("handleUpdateUser").fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountEditPassword.tsx");

export default function EditPasswordWrapper() {
  let obj = flag(6787);
  const params = obj.useSettingNavigationRoute().params;
  flag = undefined;
  if (params != null) {
    flag = params.isLoginRequiredAction;
  }
  if (flag == null) {
    flag = false;
  }
  let tmpResult = tmp(589);
  let items = [mergeGuildAvatar, handleFormClose, handleUpdateUser];
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items, () => {
    const currentUser = outer1_9.getCurrentUser();
    let obj = flag(outer1_3[15]);
    const errors = outer1_8.getErrors();
    const submitting = outer1_8.getSubmitting();
    const settings = outer1_8.getSettings();
    if (!flag) {
      outer1_1(tmp3[24])(null != currentUser, "EditPasswordWrapper: user cannot be undefined");
    }
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let result = null != id;
    if (result) {
      const items = [outer1_11.UPDATE_PASSWORD];
      result = outer1_7.requiredActionsIncludes(id, items);
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
    obj[5] = intl.string(flag(outer1_3[18]).t.WBqMRQ);
    const intl2 = tmp2(tmp3[18]).intl;
    obj[6] = intl2.string(flag(outer1_3[18]).t["8dM4FO"]);
    if (result) {
      result = flag;
    }
    obj[7] = result;
    obj[8] = null != obj.getBannerText(currentUser);
    return obj;
  });
  tmpResult = tmp(1480);
  obj = { navigation: tmpResult.useNavigation() };
  const merged = Object.assign(stateFromStoresObject);
  return callback(EditPassword, obj);
};