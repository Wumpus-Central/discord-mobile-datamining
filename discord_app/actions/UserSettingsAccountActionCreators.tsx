// discord_app/actions/UserSettingsAccountActionCreators.tsx
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import ME from "../Constants.tsx";
import str2 from "../modules/push_notifications/PushNotificationConstants.tsx";

require = fn;
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
    const iter = (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === token) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let body = tmp7;
              body = tmp2;
              obj1 = undefined;
              if (obj1 === undefined) {
                obj1 = {};
              }
              body = undefined;
              body = undefined;
              token = undefined;
              token = 1;
              c5 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              const HTTP = lib(body[4]).HTTP;
              const obj3 = { url: null, oldFormErrors: true, body: null, headers: null, rejectWithError: null };
              obj3[0] = token.ME;
              obj3[2] = lib;
              obj3[3] = obj1.headers;
              obj3[4] = lib(body[4]).rejectWithMigratedError();
              token = 2;
              c5 = 1;
              let obj4 = { value: null, done: false };
              obj4[0] = HTTP.patch(obj3);
              return obj4;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            body = arg1;
            body = body.body;
            if (body.token) {
              token = body.token;
              delete tmp4[tmp3];
              obj = obj1(body[3]);
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
                obj2 = obj1(body[3]);
                const obj7 = { type: "PASSWORD_UPDATED", userId: null };
                obj7[1] = body.id;
                obj2.dispatch(obj7);
              }
            }
            obj4 = obj1(body[3]);
            const obj8 = { type: "CURRENT_USER_UPDATE", user: null };
            obj8[1] = body;
            obj4.dispatch(obj8);
            c5 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = body;
            return obj9;
          }
        } catch (tmp35) {
          c5 = tmp;
          throw tmp35;
        }
      }
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
let result = require("obj132").fileFinishedImporting("actions/UserSettingsAccountActionCreators.tsx");

export const accountDetailsInit = function accountDetailsInit() {
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
};
export const accountDetailsClose = function accountDetailsClose() {
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
};
export const disableAccount = function disableAccount(password, arg1) {
  const HTTP = sendRequest.HTTP;
  let obj = { password };
  obj[3] = sendRequest.rejectWithMigratedError();
  return HTTP.post(obj).then((result) => {
    callback2(5256).logoutInternal();
    const obj = callback2(5256);
    callback(1222).transitionTo(constants.DEFAULT_LOGGED_OUT);
  });
};
export { saveProfileAndAccountRequest };
export const saveProfileAndAccountChanges = function saveProfileAndAccountChanges(accountUpdateForUpdateRequest) {
  const avatar = accountUpdateForUpdateRequest.avatar;
  const avatarId = accountUpdateForUpdateRequest.avatarId;
  ({ avatarDecoration, nameplate, primaryGuildId, displayNameStyles } = accountUpdateForUpdateRequest);
  ({ username, discriminator, email, emailToken, password, avatarDescription, newPassword, globalName, legacyUsername, avatarOriginalMd5 } = accountUpdateForUpdateRequest);
  let obj = avatarId(709);
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
  obj = { username, email, email_token: emailToken, password, avatar, avatar_description: avatarDescription, avatar_id: avatarId, discriminator, global_name: globalName, legacy_username: legacyUsername, new_password: newPassword };
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
    ({ fontId: obj2.display_name_font_id, effectId: obj2.display_name_effect_id, colors: obj2.display_name_colors } = displayNameStyles);
  } else if (null === displayNameStyles) {
    obj.display_name_font_id = null;
    obj.display_name_effect_id = null;
    obj.display_name_colors = null;
  }
  const Storage = avatar(595).Storage;
  let value = Storage.get(closure_6);
  const tmp10 = callback2();
  if (tmp11) {
    obj.push_provider = tmp10;
    obj.push_token = value;
  }
  const Storage2 = tmp8(595).Storage;
  value = Storage2.get(closure_7);
  let tmp14 = null != closure_8;
  if (tmp14) {
    tmp14 = null != value;
  }
  if (tmp14) {
    obj.push_voip_provider = closure_8;
    obj.push_voip_token = value;
  }
  obj = { headers: avatarId(8382).buildHeadersForMd5({ [avatar(8379).SafetyScannedUploadSurface.USER_DEFAULT_PROFILE_AVATAR]: avatarOriginalMd5 }) };
  tmp11 = null != tmp10 && null != value;
  let tmpResult = avatarId(8382);
  return saveProfileAndAccountRequest(obj, obj).then((result) => {
    avatarId(dependencyMap[3]).dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" });
    let tmp4 = null == avatar;
    if (tmp4) {
      tmp4 = null == avatarId;
    }
    if (!tmp4) {
      avatarId(dependencyMap[3]).dispatch({ type: "RECENT_AVATARS_UPDATE" });
      const tmpResult = avatarId(dependencyMap[3]);
    }
    return result;
  }, (body) => {
    avatarId(table[3]);
    const obj = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: body.body };
    obj.dispatch(obj);
    return body;
  });
};
export const getHarvestStatus = function getHarvestStatus() {
  const HTTP = sendRequest.HTTP;
  const obj = { url: constants.USER_HARVEST, oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
  return HTTP.get(obj);
};
export const requestHarvest = function requestHarvest(backends) {
  const HTTP = sendRequest.HTTP;
  const obj = { backends };
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
  const obj = { type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT", settings };
  obj.dispatch(obj);
};
export const resetAccount = function resetAccount() {
  dispatcherDefault.dispatch({ type: "USER_SETTINGS_MODAL_RESET" });
};
export const saveAccountChanges = function saveAccountChanges(closure_0, close) {
  let obj = avatar(newPassword[3]);
  obj.dispatch({ type: "USER_SETTINGS_MODAL_SUBMIT" });
  const password = _require.password;
  avatar = _require.avatar;
  newPassword = _require.newPassword;
  const discriminator = _require.discriminator;
  close = close.close;
  obj = { username: _require.username, email: _require.email, email_token: _require.emailToken, password, avatar, new_password: newPassword, discriminator: null };
  let tmp3;
  if (null != discriminator) {
    if ("" !== discriminator) {
      tmp3 = discriminator;
    }
  }
  obj[6] = tmp3;
  const Storage = password(tmp[7]).Storage;
  let value = Storage.get(closure_6);
  const tmp6 = callback2();
  if (tmp7) {
    obj.push_provider = tmp6;
    obj.push_token = value;
  }
  const Storage2 = tmp4(tmp[7]).Storage;
  value = Storage2.get(closure_7);
  let tmp10 = null != closure_8;
  if (tmp10) {
    tmp10 = null != value;
  }
  if (tmp10) {
    obj.push_voip_provider = closure_8;
    obj.push_voip_token = value;
  }
  const HTTP = tmp4(tmp[4]).HTTP;
  obj = { url: constants.ME, oldFormErrors: true, body: obj, rejectWithError: password(newPassword[4]).rejectWithMigratedError() };
  const tmp4Result = password(newPassword[4]);
  tmp7 = null != tmp6 && null != value;
  return HTTP.patch(obj).then((result) => {
    const body = result.body;
    delete tmp2[tmp];
    avatar(newPassword[3]);
    let obj = { type: "UPDATE_TOKEN", token: body.token, userId: body.id };
    obj.dispatch(obj);
    let obj2 = avatar(newPassword[3]);
    obj2.dispatch({ type: "CURRENT_USER_UPDATE", user: body });
    if (undefined !== avatar) {
      obj = { avatarHash: null };
      obj[0] = body.avatar;
      result = password(newPassword[10]).trackUserAvatarUpdated(obj);
      const obj4 = password(newPassword[10]);
    }
    if (null != newPassword) {
      let tmp3Result = avatar(newPassword[3]);
      obj1 = { type: "USER_PASSWORD_UPDATE", user: null, newPassword: null };
      obj1[1] = body;
      obj1[2] = newPassword;
      tmp3Result.dispatch(obj1);
    }
    if (tmp11) {
      tmp3Result = avatar(newPassword[3]);
      obj2 = { type: "PASSWORD_UPDATED", userId: null };
      obj2[1] = body.id;
      tmp3Result.dispatch(obj2);
    }
    if (close) {
      avatar(newPassword[11]).close();
      const tmp3Result1 = avatar(newPassword[11]);
    } else {
      avatar(newPassword[3]).dispatch({ type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE" });
      const tmp3Result2 = avatar(newPassword[3]);
    }
    return result;
  }, (body) => {
    avatar(newPassword[3]);
    const obj = { type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE", errors: body.body };
    obj.dispatch(obj);
    return body;
  });
};