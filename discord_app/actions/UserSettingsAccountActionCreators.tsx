// === Module 7057: UserSettingsAccountActionCreators ===

// Module 7057 (UserSettingsAccountActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import router_utils from "router_utils" /* 1100 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6664 */;
import trackUserAvatarUpdated from "trackUserAvatarUpdated" /* 7061 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7063 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function saveProfileAndAccountRequest() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _saveProfileAndAccountRequest() {
  closure_2 = tmp2;
  closure_130_0 = closure_0;
  let obj1 = closure_1;
  if (closure_1 === undefined) {
    obj1 = {};
  }
  closure_130_1 = obj1;
  await "PX_16";
  const HTTP = closure_131_0(closure_131_2[4]).HTTP;
  const request = { url: closure_131_4.ME, oldFormErrors: true, body: closure_130_0, headers: closure_130_1.headers, rejectWithError: closure_131_0(closure_131_2[4]).rejectWithMigratedError() };
  await HTTP.patch(request);
  closure_130_2 = value;
  const body = closure_130_2.body;
  if (body.token) {
    const token = body.token;
    delete tmp4[tmp3];
    closure_131_1(closure_131_2[3]).dispatch({ type: "UPDATE_TOKEN", token, userId: body.id });
    let password;
    if (closure_130_0 != null) {
      password = closure_130_0.password;
    }
    let tmp19 = null != password;
    if (tmp19) {
      let new_password;
      if (closure_130_0 != null) {
        new_password = closure_130_0.new_password;
      }
      tmp19 = null != new_password;
    }
    if (tmp19) {
      closure_131_1(closure_131_2[3]).dispatch({ type: "PASSWORD_UPDATED", userId: body.id });
      closure_131_1(closure_131_2[3]);
    }
    closure_131_1(closure_131_2[3]);
  }
  closure_131_1(closure_131_2[3]).dispatch({ type: "CURRENT_USER_UPDATE", user: body });
  return closure_130_2;
};
const Constants = fn(1074);
({ Endpoints: closure_4, Routes: hasOwnProperty, DEVICE_TOKEN: metroRequire, DEVICE_VOIP_TOKEN: closure_7 } = Constants);
const PushNotificationConstants = fn(6667);
({ DEVICE_PUSH_VOIP_PROVIDER: closure_8, getDevicePushProvider: closure_9 } = PushNotificationConstants);
const size = fn(2);
let result = size.fileFinishedImporting("actions/UserSettingsAccountActionCreators.tsx");

export const accountDetailsInit = function accountDetailsInit() {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
};
export const accountDetailsClose = function accountDetailsClose() {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
};
export const disableAccount = function disableAccount(password, arg1) {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: arg1 ? constants.DELETE_ACCOUNT : constants.DISABLE_ACCOUNT, body: { password }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  const tmp2 = arg1 ? constants.DELETE_ACCOUNT : constants.DISABLE_ACCOUNT;
  return HTTP.post(request).then(() => {
    AuthenticationActionCreatorsDefault.logoutInternal();
    router_utils.transitionTo(constants.DEFAULT_LOGGED_OUT);
  });
};
export { saveProfileAndAccountRequest };
export const saveProfileAndAccountChanges = function saveProfileAndAccountChanges(accountUpdateForUpdateRequest) {
  const avatar = accountUpdateForUpdateRequest.avatar;
  const avatarId = accountUpdateForUpdateRequest.avatarId;
  ({ avatarDecoration, nameplate, primaryGuildId, displayNameStyles, typingIndicatorStyle } = accountUpdateForUpdateRequest);
  ({ username, discriminator, email, emailToken, password, avatarDescription, newPassword, globalName, legacyUsername, avatarOriginalMd5 } = accountUpdateForUpdateRequest);
  let obj = avatarId(573);
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
  const user = { username, email, email_token: emailToken, password, avatar, avatar_description: avatarDescription, avatar_id: avatarId, discriminator, global_name: globalName, legacy_username: legacyUsername, new_password: newPassword };
  if (undefined !== avatarDecoration) {
    let skuId;
    if (avatarDecoration != null) {
      skuId = avatarDecoration.skuId;
    }
    if (skuId == null) {
      skuId = null;
    }
    user.avatar_decoration_sku_id = skuId;
  }
  if (undefined !== nameplate) {
    let skuId1;
    if (nameplate != null) {
      skuId1 = nameplate.skuId;
    }
    if (skuId1 == null) {
      skuId1 = null;
    }
    user.nameplate_sku_id = skuId1;
  }
  if (undefined !== primaryGuildId) {
    user.primary_guild_id = primaryGuildId;
  }
  if (null != displayNameStyles) {
    ({ fontId: obj2.display_name_font_id, effectId: obj2.display_name_effect_id, colors: obj2.display_name_colors } = displayNameStyles);
  } else if (null === displayNameStyles) {
    user.display_name_font_id = null;
    user.display_name_effect_id = null;
    user.display_name_colors = null;
  }
  if (undefined !== typingIndicatorStyle) {
    let result = null;
    if (null != typingIndicatorStyle) {
      result = avatar(1392).serializeTypingIndicatorStyle(typingIndicatorStyle);
      const obj3 = avatar(1392);
    }
    user.typing_indicator_style = result;
  }
  const Storage = avatar(510).Storage;
  value = Storage.get(closure_6);
  const tmp12 = closure_9();
  if (tmp13) {
    user.push_provider = tmp12;
    user.push_token = value;
  }
  const Storage2 = tmp10(510).Storage;
  value = Storage2.get(closure_7);
  let tmp16 = null != push_voip_provider;
  if (tmp16) {
    tmp16 = null != value;
  }
  if (tmp16) {
    user.push_voip_provider = push_voip_provider;
    user.push_voip_token = value;
  }
  obj = { headers: avatarId(5220).buildHeadersForMd5({ [avatar(7058).SafetyScannedUploadSurface.USER_DEFAULT_PROFILE_AVATAR]: avatarOriginalMd5 }) };
  tmp13 = null != tmp12 && null != value;
  let tmpResult = avatarId(5220);
  return saveProfileAndAccountRequest(user, obj).then((result) => {
    DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" });
    let tmp4 = null == avatar;
    if (tmp4) {
      tmp4 = null == avatarId;
    }
    if (!tmp4) {
      DispatcherDefault.dispatch({ type: "RECENT_AVATARS_UPDATE" });
      const tmpResult = DispatcherDefault;
    }
    return result;
  }, (body) => {
    avatarId(dependencyMap[3]);
    const obj = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: body.body };
    obj.dispatch(obj);
    return body;
  });
};
export const getHarvestStatus = function getHarvestStatus() {
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: constants.USER_HARVEST, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.get(obj);
};
export const requestHarvest = function requestHarvest(backends) {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.USER_HARVEST, body: { backends }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.post(request);
};
export const clearErrors = function clearErrors() {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
};
export const resetPendingAccountChanges = function resetPendingAccountChanges() {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
};
export const resetAllPending = function resetAllPending() {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
};
export const resetAllTryItOut = function resetAllTryItOut() {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES" });
};
export const resetAndCloseUserProfileForm = function resetAndCloseUserProfileForm() {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
};
export const resetPendingLegacyUsernameDisabled = function resetPendingLegacyUsernameDisabled() {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
};
export const resetPendingPrimaryGuildChanges = function resetPendingPrimaryGuildChanges() {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
};
export const updateAccount = function updateAccount(settings) {
  const obj = { type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT", settings };
  obj.dispatch(obj);
};
export const resetAccount = function resetAccount() {
  DispatcherDefault.dispatch({ type: "USER_SETTINGS_MODAL_RESET" });
};
export const saveAccountChanges = function saveAccountChanges(user, close) {
  avatar(newPassword[3]).dispatch({ type: "USER_SETTINGS_MODAL_SUBMIT" });
  const password = user.password;
  avatar = user.avatar;
  newPassword = user.newPassword;
  const discriminator = user.discriminator;
  close = close.close;
  user = { username: user.username, email: user.email, email_token: user.emailToken, password, avatar, new_password: newPassword, discriminator: null };
  let tmp3;
  if (null != discriminator) {
    if ("" !== discriminator) {
      tmp3 = discriminator;
    }
  }
  user.discriminator = tmp3;
  const Storage = password(tmp[8]).Storage;
  value = Storage.get(closure_6);
  const tmp6 = closure_9();
  if (tmp7) {
    user.push_provider = tmp6;
    user.push_token = value;
  }
  const Storage2 = tmp4(tmp[8]).Storage;
  value = Storage2.get(closure_7);
  let tmp10 = null != push_voip_provider;
  if (tmp10) {
    tmp10 = null != value;
  }
  if (tmp10) {
    user.push_voip_provider = push_voip_provider;
    user.push_voip_token = value;
  }
  const HTTP = tmp4(tmp[4]).HTTP;
  const request = { url: constants.ME, oldFormErrors: true, body: user, rejectWithError: null };
  let obj = avatar(newPassword[3]);
  tmp7 = null != tmp6 && null != value;
  request.rejectWithError = password(newPassword[4]).rejectWithMigratedError();
  const tmp4Result = password(newPassword[4]);
  return HTTP.patch(request).then((body) => {
    body = body.body;
    delete tmp2[tmp];
    let obj = { type: "UPDATE_TOKEN", token: body.token, userId: body.id };
    obj.dispatch(obj);
    let obj2 = DispatcherDefault;
    obj2.dispatch({ type: "CURRENT_USER_UPDATE", user: body });
    if (undefined !== avatar) {
      obj = { avatarHash: body.avatar };
      const result = trackUserAvatarUpdated.trackUserAvatarUpdated(obj);
    }
    if (null != newPassword) {
      let tmp3Result = DispatcherDefault;
      const obj1 = { type: "USER_PASSWORD_UPDATE", user: body, newPassword };
      tmp3Result.dispatch(obj1);
    }
    if (tmp11) {
      tmp3Result = DispatcherDefault;
      obj2 = { type: "PASSWORD_UPDATED", userId: body.id };
      tmp3Result.dispatch(obj2);
    }
    if (close) {
      UserSettingsModalActionCreatorsDefault.close();
      const tmp3Result1 = UserSettingsModalActionCreatorsDefault;
    } else {
      DispatcherDefault.dispatch({ type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE" });
      const tmp3Result2 = DispatcherDefault;
    }
    return body;
  }, (body) => {
    avatar(newPassword[3]);
    const obj = { type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE", errors: body.body };
    obj.dispatch(obj);
    return body;
  });
};