// discord_app/actions/UserSettingsAccountActionCreators.tsx
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import closure_3 from "../../_runtime/00005_asyncGeneratorStep.js";
import ME from "../Constants.tsx";
import str2 from "../modules/push_notifications/PushNotificationConstants.tsx";

require = arg1;
function saveProfileAndAccountRequest(arg0, arg1) {
  const self = this;
  const apply = _saveProfileAndAccountRequest.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _saveProfileAndAccountRequest() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    const iter = (function* (arg0) {
      let body = tmp2;
      if (obj1 === undefined) {
        obj1 = {};
      }
      yield "PX_16";
      const HTTP = lib(body[4]).HTTP;
      const obj3 = { url: null, oldFormErrors: true, body: null, headers: null, rejectWithError: null };
      obj3[0] = token.ME;
      obj3[2] = lib;
      obj3[3] = obj1.headers;
      obj3[4] = lib(body[4]).rejectWithMigratedError();
      body = yield HTTP.patch(obj3);
      body = body.body;
      if (body.token) {
        token = body.token;
        delete tmp4[tmp3];
        const obj = obj1(body[3]);
        const obj6 = { type: "UPDATE_TOKEN", token: null, userId: null };
        obj6[1] = token;
        obj6[2] = body.id;
        obj.dispatch(obj6);
        let password;
        if (lib != null) {
          password = lib.password;
        }
        let tmp19 = null != password;
        if (tmp19) {
          let new_password;
          if (lib != null) {
            new_password = lib.new_password;
          }
          tmp19 = null != new_password;
        }
        if (tmp19) {
          const obj2 = obj1(body[3]);
          const obj7 = { type: "PASSWORD_UPDATED", userId: null };
          obj7[1] = body.id;
          obj2.dispatch(obj7);
        }
      }
      const obj4 = obj1(body[3]);
      const obj8 = { type: "CURRENT_USER_UPDATE", user: null };
      obj8[1] = body;
      obj4.dispatch(obj8);
      return body;
    })();
    iter.next();
    return iter;
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Endpoints: c4, Routes: c5, DEVICE_TOKEN: closure_6, DEVICE_VOIP_TOKEN: error } = ME);
({ DEVICE_PUSH_VOIP_PROVIDER: closure_8, getDevicePushProvider: c9 } = require("str2"));
let result = require("set").fileFinishedImporting("actions/UserSettingsAccountActionCreators.tsx");

export const accountDetailsInit = function accountDetailsInit() {
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
};
export const accountDetailsClose = function accountDetailsClose() {
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
};
export const disableAccount = function disableAccount(password, arg1) {
  const HTTP = sendRequest.HTTP;
  obj = {
    url: arg1 ? closure_4.DELETE_ACCOUNT : closure_4.DISABLE_ACCOUNT,
    body: obj,
    oldFormErrors: true,
    rejectWithError: null,
  };
  obj = { password };
  obj[3] = sendRequest.rejectWithMigratedError();
  const obj3 = sendRequest;
  const tmp2 = arg1 ? closure_4.DELETE_ACCOUNT : closure_4.DISABLE_ACCOUNT;
  return HTTP.post(obj).then(() => {
    callback2(6052).logoutInternal();
    const obj = callback2(6052);
    callback(1222).transitionTo(constants.DEFAULT_LOGGED_OUT);
  });
};
export { saveProfileAndAccountRequest };
export const saveProfileAndAccountChanges = function saveProfileAndAccountChanges(c0) {
  const avatar = c0.avatar;
  const avatarId = c0.avatarId;
  ({ avatarDecoration, nameplate, primaryGuildId, displayNameStyles, typingIndicatorStyle } = c0);
  ({
    username,
    discriminator,
    email,
    emailToken,
    password,
    avatarDescription,
    newPassword,
    globalName,
    legacyUsername,
    avatarOriginalMd5,
  } = c0);
  let obj = avatarId(709);
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
  obj = {
    username,
    email,
    email_token: emailToken,
    password,
    avatar,
    avatar_description: avatarDescription,
    avatar_id: avatarId,
    discriminator,
    global_name: globalName,
    legacy_username: legacyUsername,
    new_password: newPassword,
  };
  if (undefined !== avatarDecoration) {
    let skuId;
    if (avatarDecoration != null) {
      skuId = avatarDecoration.skuId;
    }
    if (skuId == null) {
      skuId = null;
    }
    obj.avatar_decoration_sku_id = skuId;
  }
  if (undefined !== nameplate) {
    let skuId1;
    if (nameplate != null) {
      skuId1 = nameplate.skuId;
    }
    if (skuId1 == null) {
      skuId1 = null;
    }
    obj.nameplate_sku_id = skuId1;
  }
  if (undefined !== primaryGuildId) {
    obj.primary_guild_id = primaryGuildId;
  }
  if (null != displayNameStyles) {
    ({
      fontId: obj2.display_name_font_id,
      effectId: obj2.display_name_effect_id,
      colors: obj2.display_name_colors,
    } = displayNameStyles);
  } else if (null === displayNameStyles) {
    obj.display_name_font_id = null;
    obj.display_name_effect_id = null;
    obj.display_name_colors = null;
  }
  if (undefined !== typingIndicatorStyle) {
    let result = null;
    if (null != typingIndicatorStyle) {
      result = avatar(1942).serializeTypingIndicatorStyle(typingIndicatorStyle);
      const obj3 = avatar(1942);
    }
    obj.typing_indicator_style = result;
  }
  const Storage = avatar(595).Storage;
  let value = Storage.get(closure_6);
  const tmp12 = callback2();
  if (tmp13) {
    obj.push_provider = tmp12;
    obj.push_token = value;
  }
  const Storage2 = tmp10(595).Storage;
  value = Storage2.get(closure_7);
  let tmp16 = null != closure_8;
  if (tmp16) {
    tmp16 = null != value;
  }
  if (tmp16) {
    obj.push_voip_provider = tmp15;
    obj.push_voip_token = value;
  }
  obj = {
    headers: avatarId(5113).buildHeadersForMd5({
      [avatar(7757).SafetyScannedUploadSurface.USER_DEFAULT_PROFILE_AVATAR]: avatarOriginalMd5,
    }),
  };
  const tmp = avatarId;
  tmp13 = null != tmp12 && null != value;
  tmp15 = closure_8;
  let tmpResult = avatarId(5113);
  return saveProfileAndAccountRequest(obj, obj).then(
    (arg0) => {
      avatarId(closure_1_2[3]).dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" });
      let tmp4 = null == avatar;
      if (tmp4) {
        tmp4 = null == avatarId;
      }
      if (!tmp4) {
        avatarId(closure_1_2[3]).dispatch({ type: "RECENT_AVATARS_UPDATE" });
        const tmpResult = avatarId(closure_1_2[3]);
      }
      return arg0;
    },
    (body) => {
      let obj = avatarId(table[3]);
      obj = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: body.body };
      obj.dispatch(obj);
      return body;
    },
  );
};
export const getHarvestStatus = function getHarvestStatus() {
  const HTTP = sendRequest.HTTP;
  const obj = {
    url: constants.USER_HARVEST,
    oldFormErrors: true,
    rejectWithError: sendRequest.rejectWithMigratedError(),
  };
  return HTTP.get(obj);
};
export const requestHarvest = function requestHarvest(backends) {
  const HTTP = sendRequest.HTTP;
  obj = { url: constants.USER_HARVEST, body: obj, oldFormErrors: true, rejectWithError: null };
  obj = { backends };
  obj[3] = sendRequest.rejectWithMigratedError();
  return HTTP.post(obj);
};
export const clearErrors = function clearErrors() {
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
};
export const resetPendingAccountChanges = function resetPendingAccountChanges() {
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
};
export const resetAllPending = function resetAllPending() {
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
};
export const resetAllTryItOut = function resetAllTryItOut() {
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES" });
};
export const resetAndCloseUserProfileForm = function resetAndCloseUserProfileForm() {
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
};
export const resetPendingLegacyUsernameDisabled = function resetPendingLegacyUsernameDisabled() {
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
};
export const resetPendingPrimaryGuildChanges = function resetPendingPrimaryGuildChanges() {
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
};
export const updateAccount = function updateAccount(settings) {
  let obj = dispatcherDefault;
  obj = { type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT", settings };
  obj.dispatch(obj);
};
export const resetAccount = function resetAccount() {
  dispatcherDefault.dispatch({ type: "USER_SETTINGS_MODAL_RESET" });
};
export const saveAccountChanges = function saveAccountChanges(closure_0, close) {
  let obj = avatar(newPassword[3]);
  obj.dispatch({ type: "USER_SETTINGS_MODAL_SUBMIT" });
  const password = closure_0.password;
  avatar = closure_0.avatar;
  newPassword = closure_0.newPassword;
  const discriminator = closure_0.discriminator;
  close = close.close;
  obj = {
    username: closure_0.username,
    email: closure_0.email,
    email_token: closure_0.emailToken,
    password,
    avatar,
    new_password: newPassword,
    discriminator: null,
  };
  let tmp3;
  if (null != discriminator) {
    if ("" !== discriminator) {
      tmp3 = discriminator;
    }
  }
  obj[6] = tmp3;
  const Storage = password(tmp[8]).Storage;
  let value = Storage.get(closure_6);
  const tmp6 = callback2();
  if (tmp7) {
    obj.push_provider = tmp6;
    obj.push_token = value;
  }
  const Storage2 = tmp4(tmp[8]).Storage;
  value = Storage2.get(closure_7);
  let tmp10 = null != closure_8;
  if (tmp10) {
    tmp10 = null != value;
  }
  if (tmp10) {
    obj.push_voip_provider = tmp9;
    obj.push_voip_token = value;
  }
  const HTTP = tmp4(tmp[4]).HTTP;
  obj = {
    url: constants.ME,
    oldFormErrors: true,
    body: obj,
    rejectWithError: password(newPassword[4]).rejectWithMigratedError(),
  };
  const tmp4Result = password(newPassword[4]);
  tmp7 = null != tmp6 && null != value;
  tmp9 = closure_8;
  return HTTP.patch(obj).then(
    (body) => {
      body = body.body;
      delete tmp2[tmp];
      let obj = avatar(newPassword[3]);
      obj = { type: "UPDATE_TOKEN", token: body.token, userId: body.id };
      obj.dispatch(obj);
      let obj2 = avatar(newPassword[3]);
      obj2.dispatch({ type: "CURRENT_USER_UPDATE", user: body });
      if (undefined !== avatar) {
        obj = { avatarHash: null };
        obj[0] = body.avatar;
        const result = password(tmp4[11]).trackUserAvatarUpdated(obj);
        const obj4 = password(tmp4[11]);
      }
      if (null != newPassword) {
        let tmp3Result = tmp3(tmp4[3]);
        obj1 = { type: "USER_PASSWORD_UPDATE", user: null, newPassword: null };
        obj1[1] = body;
        obj1[2] = tmp9;
        tmp3Result.dispatch(obj1);
      }
      if (tmp11) {
        tmp3Result = tmp3(tmp4[3]);
        obj2 = { type: "PASSWORD_UPDATED", userId: null };
        obj2[1] = body.id;
        tmp3Result.dispatch(obj2);
      }
      if (close) {
        tmp3(tmp4[12]).close();
        const tmp3Result1 = tmp3(tmp4[12]);
      } else {
        tmp3(tmp4[3]).dispatch({ type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE" });
        const tmp3Result2 = tmp3(tmp4[3]);
      }
      return body;
    },
    (body) => {
      let obj = avatar(newPassword[3]);
      obj = { type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE", errors: body.body };
      obj.dispatch(obj);
      return body;
    },
  );
};
