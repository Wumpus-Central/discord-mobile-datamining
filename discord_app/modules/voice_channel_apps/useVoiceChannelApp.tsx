// discord_app/modules/voice_channel_apps/useVoiceChannelApp.tsx
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = globalThis.__r;

const require = fn;
const Constants = fn(1085);
({ ChannelTypes: closure_4, GuildFeatures: hasOwnProperty, Permissions: metroRequire } = Constants);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild_id) => {
      _require = guild_id;
      const cResult = require("c").c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      guild_id = undefined;
      if (guild_id != null) {
        guild_id = guild_id.guild_id;
      }
      if (cResult[1] !== guild_id) {
        let guild_id1;
        if (guild_id != null) {
          guild_id1 = guild_id.guild_id;
        }
        const fn = function s() {
          guild_id = undefined;
          if (guild_id != null) {
            guild_id = guild_id.guild_id;
          }
          return GuildStore.getGuild(guild_id);
        };
        cResult[1] = guild_id1;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
      let guild_id2;
      if (guild_id != null) {
        guild_id2 = guild_id.guild_id;
      }
      if (cResult[3] !== guild_id2) {
        const obj2 = { guildId: guild_id2, location: "VoiceChannelApp" };
        cResult[3] = guild_id2;
        cResult[4] = obj2;
        let tmp11 = obj2;
      } else {
        tmp11 = cResult[4];
      }
      const tmpResult = require("initialize");
      const isConjureGuildEnabled = require("ConjureGuildExperiment").useIsConjureGuildEnabled(tmp11);
      if (cResult[5] === guild_id) {
        let features1;
        if (stateFromStores != null) {
          features1 = stateFromStores.features;
        }
        if (cResult[6] === features1) {
          if (cResult[7] === isConjureGuildEnabled) {
            let tmp14 = cResult[8];
          }
          return tmp14;
        }
      }
      let tmp15 = null != guild_id;
      if (tmp15) {
        tmp15 = guild_id.type === constants.GUILD_VOICE;
      }
      if (tmp15) {
        tmp15 = isConjureGuildEnabled;
      }
      if (tmp15) {
        let hasItem;
        if (stateFromStores != null) {
          const features = stateFromStores.features;
          hasItem = features.has(constants2.INTERNAL_EMPLOYEE_ONLY);
        }
        tmp15 = true !== hasItem;
      }
      cResult[5] = guild_id;
      let features2;
      if (stateFromStores != null) {
        features2 = stateFromStores.features;
      }
      cResult[6] = features2;
      cResult[7] = isConjureGuildEnabled;
      cResult[8] = tmp15;
      tmp14 = tmp15;
      const tmpResult2 = require("ConjureGuildExperiment");
    }
  : (guild_id) => {
      _require = guild_id;
      const items = [GuildStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => {
        guild_id = undefined;
        if (guild_id != null) {
          guild_id = guild_id.guild_id;
        }
        return GuildStore.getGuild(guild_id);
      });
      const obj = require("initialize");
      guild_id = undefined;
      if (guild_id != null) {
        guild_id = guild_id.guild_id;
      }
      let tmp4 = null != guild_id;
      const isConjureGuildEnabled = require("ConjureGuildExperiment").useIsConjureGuildEnabled({
        guildId: guild_id,
        location: "VoiceChannelApp",
      });
      if (tmp4) {
        tmp4 = guild_id.type === constants.GUILD_VOICE;
      }
      if (tmp4) {
        tmp4 = isConjureGuildEnabled;
      }
      if (tmp4) {
        let hasItem;
        if (stateFromStores != null) {
          const features = stateFromStores.features;
          hasItem = features.has(constants2.INTERNAL_EMPLOYEE_ONLY);
        }
        tmp4 = true !== hasItem;
      }
      return tmp4;
    };
let closure_7 = tmp3;
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
fn = (application_id) => {
  let tmp = null;
  if (closure_7(application_id)) {
    application_id = undefined;
    if (application_id != null) {
      application_id = application_id.application_id;
    }
    if (application_id == null) {
      application_id = null;
    }
    tmp = application_id;
  }
  return tmp;
};
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/voice_channel_apps/useVoiceChannelApp.tsx");

export const useIsVoiceChannelAppEnabled = tmp3;
export const useVoiceChannelApplicationId = fn;
export const useCanConfigureVoiceChannelApp = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(3);
      let stateFromStores = closure_7(arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function t() {
          let canResult = null != closure_0;
          if (canResult) {
            canResult = PermissionStore.can(constants3.MANAGE_CHANNELS, tmp);
          }
          return canResult;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = require("c");
      if (stateFromStores) {
        stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      }
      return stateFromStores;
    }
  : (arg0) => {
      _require = arg0;
      let stateFromStores = closure_7(arg0);
      const items = [PermissionStore];
      if (stateFromStores) {
        stateFromStores = obj.useStateFromStores(items, () => {
          let canResult = null != closure_0;
          if (canResult) {
            canResult = PermissionStore.can(constants3.MANAGE_CHANNELS, tmp);
          }
          return canResult;
        });
      }
      return stateFromStores;
    };
