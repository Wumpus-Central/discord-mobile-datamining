// === Module 16162: GuildThemeNuxUtils ===

// Module 16162 (GuildThemeNuxUtils)
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 1940 */;
import Client from "Client" /* 4491 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;

require = fn;
let closure_4 = async function _saveGuildThemeNuxPreference(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = closure_0;
          let GuildThemeSourcePreference = Client.GuildThemeSourcePreference;
          if (closure_1) {
            let GUILD = GuildThemeSourcePreference.PERSONAL;
          } else {
            GUILD = GuildThemeSourcePreference.GUILD;
          }
          GuildThemeSourcePreference = UserSettingsProtoActionCreators;
          const result = GuildThemeSourcePreference.setDefaultGuildThemePreference(GUILD);
          c4 = 1;
          c5 = 1;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          let obj1 = { value, done: true };
          return obj1;
        } else {
          obj1 = closure_131_0(closure_131_1[3]);
          c4 = 2;
          c5 = 1;
          const obj2 = { value: obj1.clearGuildThemeSourcePreferenceOverride(closure_130_0), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c5 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp14) {
      c5 = tmp;
      throw tmp14;
    }
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_themes/GuildThemeNuxUtils.tsx");

export const getInitialGuildThemeNuxSelection = function getInitialGuildThemeNuxSelection() {
  const defaultGuildThemePreference = UserSettingsProtoStore.getDefaultGuildThemePreference();
  if (defaultGuildThemePreference === Client.GuildThemeSourcePreference.PERSONAL) {
    let GUILD = Client.GuildThemeSourcePreference.PERSONAL;
  } else {
    GUILD = Client.GuildThemeSourcePreference.GUILD;
  }
  return GUILD;
};
export const saveGuildThemeNuxPreference = function saveGuildThemeNuxPreference() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};