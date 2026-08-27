// === Module 8956: _saveGuildIdentityChanges ===

// Module 8956 (_saveGuildIdentityChanges)
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

const require = arg1;
function _saveGuildIdentityChanges() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    const iter = (function*(arg0, arg1) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c4 = tmp4;
              c3 = tmp9;
              let callback2;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              let skuId;
              let skuId2;
              c7 = undefined;
              c8 = undefined;
              let dispatchResult = callback;
              dispatchResult = callback2;
              ({ nick: c1, avatar: c2, avatarDescription: c3, avatarId: c4, avatarDecoration: c5, nameplate: c6, displayNameStyles: c7, avatarOriginalMd5: c8 } = callback2);
              let obj3;
              let body;
              body = undefined;
              body = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp9) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              dispatchResult = callback;
              if (null == callback) {
                const _Error = Error;
                error = new Error("Need guildId");
                throw error;
              } else {
                dispatchResult = c3;
                dispatchResult = c4;
                dispatchResult = callback2;
                dispatchResult = dependencyMap;
                const obj2 = { type: "USER_PROFILE_SETTINGS_SUBMIT", guildId: null };
                dispatchResult = callback;
                obj2[1] = callback;
                dispatchResult = callback2(709).dispatch(obj2);
                obj3 = { nick: null, avatar: null, avatar_description: null, avatar_id: null, avatar_decoration_sku_id: null, collectibles: null, display_name_font_id: null, display_name_effect_id: null, display_name_colors: null };
                dispatchResult = callback2;
                obj3[0] = callback2;
                dispatchResult = dependencyMap;
                obj3[1] = dependencyMap;
                dispatchResult = c3;
                obj3[2] = c3;
                dispatchResult = c4;
                obj3[3] = c4;
                dispatchResult = skuId;
                let tmp36;
                if (undefined !== skuId) {
                  skuId = undefined;
                  if (skuId != null) {
                    skuId = skuId.skuId;
                  }
                  dependencyMap = skuId;
                  if (skuId == null) {
                    dependencyMap = null;
                  }
                  tmp36 = dependencyMap;
                }
                obj3[4] = tmp36;
                let tmp39;
                if (undefined !== skuId2) {
                  let tmp41 = null;
                  if (null !== skuId2) {
                    const obj4 = { sku_id: null };
                    obj4[0] = skuId2.skuId;
                    tmp41 = obj4;
                  }
                  const obj5 = { nameplate: null };
                  obj5[0] = tmp41;
                  tmp39 = obj5;
                }
                obj3[5] = tmp39;
                let tmp45;
                if (undefined !== c7) {
                  let fontId = null;
                  if (null !== c7) {
                    fontId = c7.fontId;
                  }
                  tmp45 = fontId;
                }
                obj3[6] = tmp45;
                let tmp51;
                if (undefined !== c7) {
                  let effectId = null;
                  if (null !== c7) {
                    effectId = c7.effectId;
                  }
                  tmp51 = effectId;
                }
                obj3[7] = tmp51;
                let tmp57;
                if (undefined !== c7) {
                  let colors = null;
                  if (null !== c7) {
                    colors = c7.colors;
                  }
                  tmp57 = colors;
                }
                obj3[8] = tmp57;
                skuId2 = 1;
                const HTTP = callback(530).HTTP;
                const obj6 = { url: null, body: null, headers: null, oldFormErrors: true, rejectWithError: false };
                obj6[0] = c4.SET_GUILD_MEMBER(callback);
                obj6[1] = obj3;
                let obj9 = callback2(5065);
                const obj7 = {};
                obj7[callback(7690).SafetyScannedUploadSurface.USER_GUILD_PROFILE_AVATAR] = c8;
                obj6[2] = obj9.buildHeadersForMd5(obj7);
                c7 = 3;
                c8 = 1;
                const obj8 = { value: null, done: false };
                obj8[0] = HTTP.patch(obj6);
                return obj8;
              }
            }
          } else if (2 === tmp9) {
            skuId2 = 0;
            closure_13 = skuId;
            body = closure_13.body;
            let username;
            if (body != null) {
              username = body.username;
            }
            if (null != username) {
              body.nick = body.username;
              delete tmp6[tmp3];
            }
            obj3 = callback2(709);
            obj9 = { type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", guildId: null, errors: null };
            obj9[1] = callback;
            obj9[2] = closure_13.body;
            obj3.dispatch(obj9);
            c8 = 3;
            const obj10 = { value: null, done: true };
            obj10[0] = closure_13;
            return obj10;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            skuId2 = 0;
            c8 = 3;
            const obj11 = { value: null, done: true };
            obj11[0] = arg1;
            return obj11;
          } else {
            body = arg1;
            body = body.body;
            const obj12 = { type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS", guildId: null };
            obj12[1] = callback;
            callback2(709).dispatch(obj12);
            const obj16 = callback2(709);
            const obj13 = { type: "GUILD_MEMBER_PROFILE_UPDATE", guildMember: null, guildId: null };
            obj13[1] = body;
            obj13[2] = callback;
            callback2(709).dispatch(obj13);
            let tmp12 = null == dependencyMap;
            if (tmp12) {
              tmp12 = null == c4;
            }
            if (!tmp12) {
              obj = callback2(709);
              obj.dispatch({ type: "RECENT_AVATARS_UPDATE" });
            }
            skuId2 = 0;
            c8 = 3;
            const obj14 = { value: null, done: true };
            obj14[0] = body;
            return obj14;
          }
        } catch (tmp76) {
          skuId = tmp76;
          if (tmp5 === skuId2) {
            c8 = tmp2;
            throw tmp76;
          } else {
            c7 = dispatchResult;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/guild_identity/GuildIdentityActionCreators.tsx");

export const saveGuildIdentityChanges = function saveGuildIdentityChanges(id1, guildMemberChangesForUpdateRequest) {
  const self = this;
  const apply = _saveGuildIdentityChanges.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setCurrentGuild = function setCurrentGuild(id) {
  let obj = dispatcherDefault;
  obj = { type: "USER_PROFILE_SETTINGS_SET_GUILD", guildId: id };
  obj.dispatch(obj);
};
export const initGuildIdentitySettings = function initGuildIdentitySettings(id) {
  let obj = dispatcherDefault;
  obj = { type: "USER_PROFILE_SETTINGS_INIT", guildId: id };
  obj.dispatch(obj);
};
export const resetPendingMemberChanges = function resetPendingMemberChanges() {
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
};
export const resetPendingProfileChanges = function resetPendingProfileChanges() {
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
};
export const resetAllPending = function resetAllPending() {
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
};
export const clearErrors = function clearErrors() {
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
};