// discord_app/modules/guild_identity/GuildIdentityActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_5;

let obj = function _saveGuildIdentityChanges() {
  obj = _asyncToGenerator(async function (guildId, nick) {
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let c9;
    let obj10;
    let obj11;
    let tmp30;
    let tmp33;
    let tmp39;
    let tmp45;
    let tmp51;
    let vad_colors;
    let value;
    if (vad_colors === 2) {
      vad_colors = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (guildId === 1) {
        throw value;
      } else if (guildId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let skuId2;
      try {
        let avatar;
        let avatar_description;
        let avatar_id;
        let skuId;
        let obj7;
        let body;
        vad_colors = 2;
        if (0 === c7) {
          if (guildId === 1) {
            vad_colors = 3;
            throw value;
          } else if (guildId === 2) {
            vad_colors = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp;
            let closure_3 = tmp4;
            nick = undefined;
            avatar = undefined;
            avatar_description = undefined;
            avatar_id = undefined;
            skuId = undefined;
            skuId2 = undefined;
            c9 = undefined;
            ({
              nick: c1,
              avatar: c2,
              avatarDescription: c3,
              avatarId: c4,
              avatarDecoration: c5,
              nameplate: c6,
              displayNameStyles: c7,
              vadColors: c8,
              avatarOriginalMd5: c9,
            } = closure_1);
            obj7 = undefined;
            value = undefined;
            body = undefined;
            c7 = 1;
            vad_colors = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c7) {
          if (guildId === 1) {
            vad_colors = 3;
            throw value;
          } else if (guildId === 2) {
            vad_colors = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (null == guildId) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Need guildId");
            throw error;
          } else {
            const obj6 = { type: "USER_PROFILE_SETTINGS_SUBMIT", guildId };
            const obj20 = closure_132_1(closure_132_2[2]);
            obj20.dispatch(obj6);
            obj7 = {
              nick,
              avatar,
              avatar_description,
              avatar_id,
              avatar_decoration_sku_id: tmp30,
              collectibles: tmp33,
              display_name_font_id: tmp39,
              display_name_effect_id: tmp45,
              display_name_colors: tmp51,
              vad_colors,
            };
            tmp30 = undefined;
            if (undefined !== skuId) {
              skuId = undefined;
              if (skuId != null) {
                skuId = skuId.skuId;
              }
              avatar = skuId;
              if (skuId == null) {
                avatar = null;
              }
              tmp30 = avatar;
            }
            tmp33 = undefined;
            if (undefined !== skuId2) {
              let tmp35 = null;
              if (null !== skuId2) {
                const obj8 = { sku_id: skuId2.skuId };
                tmp35 = obj8;
              }
              const obj9 = { nameplate: tmp35 };
              tmp33 = obj9;
            }
            tmp39 = undefined;
            if (undefined !== c7) {
              let fontId = null;
              if (null !== c7) {
                fontId = c7.fontId;
              }
              tmp39 = fontId;
            }
            tmp45 = undefined;
            if (undefined !== c7) {
              let effectId = null;
              if (null !== c7) {
                effectId = c7.effectId;
              }
              tmp45 = effectId;
            }
            tmp51 = undefined;
            if (undefined !== c7) {
              let colors = null;
              if (null !== c7) {
                colors = c7.colors;
              }
              tmp51 = colors;
            }
            skuId2 = 1;
            const HTTP = closure_132_0(closure_132_2[3]).HTTP;
            const request = {
              url: closure_132_4.SET_GUILD_MEMBER(guildId),
              body: obj7,
              headers: obj10.buildHeadersForMd5(obj11),
              oldFormErrors: true,
              rejectWithError: false,
            };
            const patch = HTTP.patch;
            obj11 = {};
            obj11[closure_132_0(closure_132_2[5]).SafetyScannedUploadSurface.USER_GUILD_PROFILE_AVATAR] = c9;
            obj10 = closure_132_1(closure_132_2[4]);
            c7 = 3;
            vad_colors = 1;
            const obj12 = { value: patch(request), done: false };
            return obj12;
          }
        } else if (2 === c7) {
          skuId2 = 0;
          const value2 = closure_5;
          body = value2.body;
          let username;
          if (body != null) {
            username = body.username;
          }
          if (null != username) {
            body.nick = body.username;
            delete body[tmp77];
          }
          const obj13 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", guildId, errors: value2.body };
          const obj4 = closure_132_1(closure_132_2[2]);
          obj4.dispatch(obj13);
          vad_colors = 3;
          const obj14 = { value: value2, done: true };
          return obj14;
        } else if (guildId === 1) {
          vad_colors = 3;
          throw value;
        } else if (guildId === 2) {
          skuId2 = 0;
          vad_colors = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          body = value.body;
          const obj17 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS", guildId };
          const obj16 = closure_132_1(closure_132_2[2]);
          obj16.dispatch(obj17);
          const obj19 = { type: "GUILD_MEMBER_PROFILE_UPDATE", guildMember: body, guildId };
          const obj18 = closure_132_1(closure_132_2[2]);
          obj18.dispatch(obj19);
          const tmp7 = null == avatar && null == avatar_id;
          if (!tmp7) {
            obj = closure_132_1(closure_132_2[2]);
            obj.dispatch({ type: "RECENT_AVATARS_UPDATE" });
          }
          skuId2 = 0;
          vad_colors = 3;
          const obj21 = { value, done: true };
          return obj21;
        }
      } catch (tmp69) {
        closure_5 = tmp69;
        if (0 === skuId2) {
          vad_colors = 3;
          throw tmp69;
        } else {
          c7 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/guild_identity/GuildIdentityActionCreators.tsx");

export const saveGuildIdentityChanges = function saveGuildIdentityChanges() {
  return obj(...arguments);
};
export const setCurrentGuild = function setCurrentGuild(id) {
  obj = DispatcherDefault;
  const obj2 = { type: "USER_PROFILE_SETTINGS_SET_GUILD", guildId: id };
  obj.dispatch(obj2);
};
export const initGuildIdentitySettings = function initGuildIdentitySettings(id) {
  obj = DispatcherDefault;
  const obj2 = { type: "USER_PROFILE_SETTINGS_INIT", guildId: id };
  obj.dispatch(obj2);
};
export const resetPendingMemberChanges = function resetPendingMemberChanges() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
};
export const resetPendingProfileChanges = function resetPendingProfileChanges() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
};
export const resetAllPending = function resetAllPending() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
};
export const clearErrors = function clearErrors() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
};
