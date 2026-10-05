// discord_app/modules/voice_channel_apps/useVoiceChannelApp.tsx
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import Constants from "../../Constants.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, guild_id;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ ChannelTypes: closure_4, GuildFeatures: hasOwnProperty, Permissions: metroRequire } = Constants);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild_id) => {
      let first;
      let tmp12;
      let tmp8;
      _require = guild_id;
      const obj = require("react");
      const cResult = obj.c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      guild_id = undefined;
      const tmp6 = cResult[1];
      if (guild_id != null) {
        guild_id = guild_id.guild_id;
      }
      if (tmp6 !== guild_id) {
        let guild_id1;
        if (guild_id != null) {
          guild_id1 = guild_id.guild_id;
        }
        const fn = function s() {
          guild_id = undefined;
          const getGuild = GuildStore.getGuild;
          if (guild_id != null) {
            guild_id = guild_id.guild_id;
          }
          return getGuild(guild_id);
        };
        cResult[1] = guild_id1;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
      let guild_id2;
      if (guild_id != null) {
        guild_id2 = guild_id.guild_id;
      }
      if (cResult[3] !== guild_id2) {
        const obj2 = { guildId: guild_id2, location: "VoiceChannelApp" };
        cResult[3] = guild_id2;
        cResult[4] = obj2;
        tmp12 = obj2;
      } else {
        tmp12 = cResult[4];
      }
      const tmpResult2 = require("ConjureGuildExperiment");
      const isConjureGuildEnabled = tmpResult2.useIsConjureGuildEnabled(tmp12);
      if (cResult[5] === guild_id) {
        let features1;
        const tmp14 = cResult[6];
        if (stateFromStores != null) {
          features1 = stateFromStores.features;
        }
        if (tmp14 === features1) {
          let tmp16;
          if (cResult[7] === isConjureGuildEnabled) {
            tmp16 = cResult[8];
          }
          return tmp16;
        }
      }
      let tmp17 = null != guild_id && guild_id.type === constants.GUILD_VOICE && isConjureGuildEnabled;
      if (tmp17) {
        let hasItem;
        if (stateFromStores != null) {
          const features = stateFromStores.features;
          hasItem = features.has(constants2.INTERNAL_EMPLOYEE_ONLY);
        }
        tmp17 = true !== hasItem;
      }
      cResult[5] = guild_id;
      let features2;
      if (stateFromStores != null) {
        features2 = stateFromStores.features;
      }
      cResult[6] = features2;
      cResult[7] = isConjureGuildEnabled;
      cResult[8] = tmp17;
      tmp16 = tmp17;
    }
  : (guild_id) => {
      _require = guild_id;
      const items = [GuildStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => {
        guild_id = undefined;
        const getGuild = GuildStore.getGuild;
        if (guild_id != null) {
          guild_id = guild_id.guild_id;
        }
        return getGuild(guild_id);
      });
      guild_id = undefined;
      const useIsConjureGuildEnabled = require("ConjureGuildExperiment").useIsConjureGuildEnabled;
      require("ConjureGuildExperiment");
      if (guild_id != null) {
        guild_id = guild_id.guild_id;
      }
      let tmp5 = null != guild_id;
      const isConjureGuildEnabled = useIsConjureGuildEnabled({ guildId: guild_id, location: "VoiceChannelApp" });
      if (tmp5) {
        tmp5 = guild_id.type === constants.GUILD_VOICE;
      }
      if (tmp5) {
        tmp5 = isConjureGuildEnabled;
      }
      if (tmp5) {
        let hasItem;
        if (stateFromStores != null) {
          const features = stateFromStores.features;
          hasItem = features.has(constants2.INTERNAL_EMPLOYEE_ONLY);
        }
        tmp5 = true !== hasItem;
      }
      return tmp5;
    };
let closure_7 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp7;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(3);
      let stateFromStores = closure_7(arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function t() {
          const canResult = null != closure_0 && PermissionStore.can(metroRequire.MANAGE_CHANNELS, tmp);
          return canResult;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      if (stateFromStores) {
        stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      }
      return stateFromStores;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let stateFromStores = closure_7(arg0);
      const items = [PermissionStore];
      const obj = require("get initialized");
      if (stateFromStores) {
        stateFromStores = obj.useStateFromStores(items, () => {
          const canResult = null != closure_0 && PermissionStore.can(metroRequire.MANAGE_CHANNELS, tmp);
          return canResult;
        });
      }
      return stateFromStores;
    };
let fn = (application_id) => {
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
const result1 = size.fileFinishedImporting("modules/voice_channel_apps/useVoiceChannelApp.tsx");

export const useIsVoiceChannelAppEnabled = tmp3;
export const useVoiceChannelApplicationId = fn;
export const useCanConfigureVoiceChannelApp = tmp5;
