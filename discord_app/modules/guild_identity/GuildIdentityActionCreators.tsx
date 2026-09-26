// === Module 9229: GuildIdentityActionCreators ===

// Module 9229 (GuildIdentityActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_5 = async function _saveGuildIdentityChanges(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp4;
          closure_3 = tmp9;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          closure_131_7 = undefined;
          closure_131_8 = undefined;
          closure_131_9 = undefined;
          closure_131_0 = closure_0;
          ({ nick: closure_131_1, avatar: closure_131_2, avatarDescription: closure_131_3, avatarId: closure_131_4, avatarDecoration: closure_131_5, nameplate: closure_131_6, displayNameStyles: closure_131_7, vadColors: closure_131_8, avatarOriginalMd5: closure_131_9 } = closure_1);
          closure_131_10 = undefined;
          closure_131_11 = undefined;
          let body2;
          let body;
          c7 = 1;
          c8 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp9) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else if (null == closure_131_0) {
          const _Error = Error;
          const error = new Error("Need guildId");
          throw error;
        } else {
          const obj6 = { type: "USER_PROFILE_SETTINGS_SUBMIT", guildId: closure_131_0 };
          closure_132_1(closure_132_2[2]).dispatch(obj6);
          const obj7 = { nick: closure_131_1, avatar: closure_131_2, avatar_description: closure_131_3, avatar_id: closure_131_4, avatar_decoration_sku_id: null, collectibles: null, display_name_font_id: null, display_name_effect_id: null, display_name_colors: null, vad_colors: null };
          let tmp36;
          if (undefined !== closure_131_5) {
            let skuId;
            if (closure_131_5 != null) {
              skuId = closure_131_5.skuId;
            }
            c2 = skuId;
            if (skuId == null) {
              c2 = null;
            }
            tmp36 = c2;
          }
          obj7.avatar_decoration_sku_id = tmp36;
          let tmp39;
          if (undefined !== closure_131_6) {
            let tmp41 = null;
            if (null !== closure_131_6) {
              const obj8 = { sku_id: closure_131_6.skuId };
              tmp41 = obj8;
            }
            const obj9 = { nameplate: tmp41 };
            tmp39 = obj9;
          }
          obj7.collectibles = tmp39;
          let tmp45;
          if (undefined !== closure_131_7) {
            let fontId = null;
            if (null !== closure_131_7) {
              fontId = closure_131_7.fontId;
            }
            tmp45 = fontId;
          }
          obj7.display_name_font_id = tmp45;
          let tmp51;
          if (undefined !== closure_131_7) {
            let effectId = null;
            if (null !== closure_131_7) {
              effectId = closure_131_7.effectId;
            }
            tmp51 = effectId;
          }
          obj7.display_name_effect_id = tmp51;
          let tmp57;
          if (undefined !== closure_131_7) {
            let colors = null;
            if (null !== closure_131_7) {
              colors = closure_131_7.colors;
            }
            tmp57 = colors;
          }
          obj7.display_name_colors = tmp57;
          obj7.vad_colors = closure_131_8;
          closure_131_10 = obj7;
          c6 = 1;
          const HTTP = closure_132_0(closure_132_2[3]).HTTP;
          const request = { url: closure_132_4.SET_GUILD_MEMBER(closure_131_0), body: closure_131_10, headers: null, oldFormErrors: true, rejectWithError: false };
          const obj20 = closure_132_1(closure_132_2[2]);
          const obj11 = {};
          obj11[closure_132_0(closure_132_2[5]).SafetyScannedUploadSurface.USER_GUILD_PROFILE_AVATAR] = closure_131_9;
          request.headers = closure_132_1(closure_132_2[4]).buildHeadersForMd5(obj11);
          c7 = 3;
          c8 = 1;
          const obj12 = { value: HTTP.patch(request), done: false };
          return obj12;
        }
      } else if (2 === tmp9) {
        c6 = 0;
        closure_131_14 = closure_5;
        body = closure_131_14.body;
        let username;
        if (body != null) {
          username = body.username;
        }
        if (null != username) {
          body.nick = body.username;
          delete tmp6[tmp3];
        }
        const obj13 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", guildId: closure_131_0, errors: closure_131_14.body };
        closure_132_1(closure_132_2[2]).dispatch(obj13);
        c8 = 3;
        const obj14 = { value: closure_131_14, done: true };
        return obj14;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj15 = { value, done: true };
        return obj15;
      } else {
        closure_131_11 = value;
        body2 = closure_131_11.body;
        const obj17 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS", guildId: closure_131_0 };
        closure_132_1(closure_132_2[2]).dispatch(obj17);
        const obj16 = closure_132_1(closure_132_2[2]);
        const obj19 = { type: "GUILD_MEMBER_PROFILE_UPDATE", guildMember: body2, guildId: closure_131_0 };
        closure_132_1(closure_132_2[2]).dispatch(obj19);
        let tmp12 = null == closure_131_2;
        if (tmp12) {
          tmp12 = null == closure_131_4;
        }
        if (!tmp12) {
          closure_132_1(closure_132_2[2]).dispatch({ type: "RECENT_AVATARS_UPDATE" });
          const obj = closure_132_1(closure_132_2[2]);
        }
        c6 = 0;
        c8 = 3;
        const obj21 = { value: closure_131_11, done: true };
        return obj21;
      }
    } catch (tmp77) {
      closure_5 = tmp77;
      if (tmp5 === c6) {
        c8 = tmp2;
        throw tmp77;
      } else {
        c7 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_identity/GuildIdentityActionCreators.tsx");

export const saveGuildIdentityChanges = function saveGuildIdentityChanges() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setCurrentGuild = function setCurrentGuild(id) {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_SET_GUILD", guildId: id });
};
export const initGuildIdentitySettings = function initGuildIdentitySettings(id) {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_INIT", guildId: id });
};
export const resetPendingMemberChanges = function resetPendingMemberChanges() {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
};
export const resetPendingProfileChanges = function resetPendingProfileChanges() {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
};
export const resetAllPending = function resetAllPending() {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
};
export const clearErrors = function clearErrors() {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
};