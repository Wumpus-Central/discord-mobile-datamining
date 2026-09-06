// discord_app/actions/UserSettingsAccountActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import router_utils from "../modules/routing/router_utils.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators.tsx";
import trackUserAvatarUpdated from "../modules/user_profile/utils/trackUserAvatarUpdated.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";

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
let closure_11 = async function _saveProfileAndAccountRequest(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp7;
          closure_2 = tmp2;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let obj1 = closure_1;
          if (closure_1 === undefined) {
            obj1 = {};
          }
          closure_130_1 = obj1;
          closure_130_2 = undefined;
          let body;
          let token;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          const HTTP = closure_131_0(closure_131_2[4]).HTTP;
          const request = {
            url: closure_131_4.ME,
            oldFormErrors: true,
            body: closure_130_0,
            headers: closure_130_1.headers,
            rejectWithError: closure_131_0(closure_131_2[4]).rejectWithMigratedError(),
          };
          c4 = 2;
          c5 = 1;
          const obj3 = { value: HTTP.patch(request), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        let obj4 = { value, done: true };
        return obj4;
      } else {
        closure_130_2 = value;
        body = closure_130_2.body;
        if (body.token) {
          token = body.token;
          delete tmp4[tmp3];
          obj = closure_131_1(closure_131_2[3]);
          const obj5 = { type: "UPDATE_TOKEN", token, userId: body.id };
          obj.dispatch(obj5);
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
            obj2 = closure_131_1(closure_131_2[3]);
            const obj6 = { type: "PASSWORD_UPDATED", userId: body.id };
            obj2.dispatch(obj6);
          }
        }
        obj4 = closure_131_1(closure_131_2[3]);
        const obj7 = { type: "CURRENT_USER_UPDATE", user: body };
        obj4.dispatch(obj7);
        c5 = 3;
        const obj8 = { value: closure_130_2, done: true };
        return obj8;
      }
    } catch (tmp35) {
      c5 = tmp;
      throw tmp35;
    }
  }
};
const Constants = fn(1074);
({
  Endpoints: closure_4,
  Routes: hasOwnProperty,
  DEVICE_TOKEN: metroRequire,
  DEVICE_VOIP_TOKEN: closure_7,
} = Constants);
const PushNotificationConstants = fn(6596);
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
  const request = {
    url: arg1 ? constants.DELETE_ACCOUNT : constants.DISABLE_ACCOUNT,
    body: { password },
    oldFormErrors: true,
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
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
  ({ avatarDecoration, nameplate, primaryGuildId, displayNameStyles, typingIndicatorStyle } =
    accountUpdateForUpdateRequest);
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
  } = accountUpdateForUpdateRequest);
  let obj = avatarId(573);
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
  const user = {
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
    ({
      fontId: obj2.display_name_font_id,
      effectId: obj2.display_name_effect_id,
      colors: obj2.display_name_colors,
    } = displayNameStyles);
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
  let tmp16 = null != closure_8;
  if (tmp16) {
    tmp16 = null != value;
  }
  if (tmp16) {
    user.push_voip_provider = tmp15;
    user.push_voip_token = value;
  }
  obj = {
    headers: avatarId(5169).buildHeadersForMd5({
      [avatar(6985).SafetyScannedUploadSurface.USER_DEFAULT_PROFILE_AVATAR]: avatarOriginalMd5,
    }),
  };
  tmp13 = null != tmp12 && null != value;
  tmp15 = closure_8;
  let tmpResult = avatarId(5169);
  return saveProfileAndAccountRequest(user, obj).then(
    (result) => {
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
    },
    (body) => {
      avatarId(dependencyMap[3]);
      const obj = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: body.body };
      obj.dispatch(obj);
      return body;
    },
  );
};
export const getHarvestStatus = function getHarvestStatus() {
  const HTTP = HTTPUtils.HTTP;
  const obj = {
    url: constants.USER_HARVEST,
    oldFormErrors: true,
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  return HTTP.get(obj);
};
export const requestHarvest = function requestHarvest(backends) {
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: constants.USER_HARVEST,
    body: { backends },
    oldFormErrors: true,
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
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
  user = {
    username: user.username,
    email: user.email,
    email_token: user.emailToken,
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
  let tmp10 = null != closure_8;
  if (tmp10) {
    tmp10 = null != value;
  }
  if (tmp10) {
    user.push_voip_provider = tmp9;
    user.push_voip_token = value;
  }
  const HTTP = tmp4(tmp[4]).HTTP;
  const request = { url: constants.ME, oldFormErrors: true, body: user, rejectWithError: null };
  let obj = avatar(newPassword[3]);
  tmp7 = null != tmp6 && null != value;
  tmp9 = closure_8;
  request.rejectWithError = password(newPassword[4]).rejectWithMigratedError();
  const tmp4Result = password(newPassword[4]);
  return HTTP.patch(request).then(
    (body) => {
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
        let tmp3Result = tmp3(573);
        const obj1 = { type: "USER_PASSWORD_UPDATE", user: body, newPassword: tmp9 };
        tmp3Result.dispatch(obj1);
      }
      if (tmp11) {
        tmp3Result = tmp3(573);
        obj2 = { type: "PASSWORD_UPDATED", userId: body.id };
        tmp3Result.dispatch(obj2);
      }
      if (close) {
        tmp3(6990).close();
        const tmp3Result1 = tmp3(6990);
      } else {
        tmp3(573).dispatch({ type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE" });
        const tmp3Result2 = tmp3(573);
      }
      return body;
    },
    (body) => {
      avatar(newPassword[3]);
      const obj = { type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE", errors: body.body };
      obj.dispatch(obj);
      return body;
    },
  );
};
