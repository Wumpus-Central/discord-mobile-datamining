// discord_app/modules/guild_themes/GuildThemeNuxUtils.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import { GuildThemeSourcePreference } from "../../flow/Client.tsx";

const require = arg1;
function _saveGuildThemeNuxPreference() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let handleConnectionClosedOrResumed = tmp5;
              let asyncGeneratorStep = tmp2;
              let GuildThemeSourcePreference = callback(4217).GuildThemeSourcePreference;
              if (dependencyMap) {
                let GUILD = GuildThemeSourcePreference.PERSONAL;
              } else {
                GUILD = GuildThemeSourcePreference.GUILD;
              }
              GuildThemeSourcePreference = callback(1355);
              const result = GuildThemeSourcePreference.setDefaultGuildThemePreference(GUILD);
              c4 = 1;
              c5 = 1;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              let obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              obj1 = callback(1355);
              c4 = 2;
              c5 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj1.clearGuildThemeSourcePreferenceOverride(callback);
              return obj2;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
    })();
  });
  const _saveGuildThemeNuxPreference = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("GuildThemeSourcePreference").fileFinishedImporting("modules/guild_themes/GuildThemeNuxUtils.tsx");

export const getInitialGuildThemeNuxSelection = function getInitialGuildThemeNuxSelection() {
  defaultGuildThemePreference = defaultGuildThemePreference.getDefaultGuildThemePreference();
  if (defaultGuildThemePreference === GuildThemeSourcePreference /* GuildThemeSourcePreference */.GuildThemeSourcePreference.PERSONAL) {
    let GUILD = tmp2(4217).GuildThemeSourcePreference.PERSONAL;
  } else {
    GUILD = tmp2(4217).GuildThemeSourcePreference.GUILD;
  }
  return GUILD;
};
export const saveGuildThemeNuxPreference = function saveGuildThemeNuxPreference(arg0, outer1_6) {
  const self = this;
  const apply = _saveGuildThemeNuxPreference.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};