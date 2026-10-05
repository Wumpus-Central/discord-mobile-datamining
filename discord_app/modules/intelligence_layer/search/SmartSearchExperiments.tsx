// discord_app/modules/intelligence_layer/search/SmartSearchExperiments.tsx
import Constants from "../../../Constants.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import ApexExperiment_mod from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
let ApexExperiment = ApexExperiment_mod;
let obj = {
  kind: "user",
  name: "2026-09-mobile-nlp-search-user-flag",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
let obj2 = {
  kind: "guild",
  name: "2026-09-mobile-nlp-search-guild-experiment",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
const apexExperiment1 = ApexExperiment.createApexExperiment(obj2);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, location) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp7;
      let tmp9;
      let str = arg0;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== str) {
        const fn = function c() {
          let tmp2 = null != closure_0;
          if (tmp2) {
            const guild = GuildStore.getGuild(tmp);
            let flag;
            if (guild != null) {
              const features = guild.features;
              flag = features.has(GuildFeatures.DISCOVERABLE);
            }
            if (flag == null) {
              flag = false;
            }
            tmp2 = flag;
          }
          return tmp2;
        };
        const items1 = [str];
        cResult[1] = str;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      let stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      if (cResult[4] !== location) {
        const obj2 = { location };
        cResult[4] = location;
        cResult[5] = obj2;
        tmp9 = obj2;
      } else {
        tmp9 = cResult[5];
      }
      const enabled = apexExperiment.useConfig(tmp9).enabled;
      if (str == null) {
        str = "";
      }
      if (cResult[6] === location) {
        let tmp10;
        if (cResult[7] === str) {
          tmp10 = cResult[8];
        }
        const enabled2 = apexExperiment1.useConfig(tmp10).enabled;
        if (stateFromStores) {
          stateFromStores = enabled;
        }
        if (stateFromStores) {
          stateFromStores = enabled2;
        }
        return stateFromStores;
      }
      const obj3 = { guildId: str, location };
      cResult[6] = location;
      cResult[7] = str;
      cResult[8] = obj3;
      tmp10 = obj3;
    }
  : (arg0, location) => {
      let closure_0;
      let str = arg0;
      _require = arg0;
      const items = [GuildStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      let stateFromStores = obj.useStateFromStores(
        items,
        () => {
          let tmp2 = null != closure_0;
          if (tmp2) {
            const guild = GuildStore.getGuild(tmp);
            let flag;
            if (guild != null) {
              const features = guild.features;
              flag = features.has(GuildFeatures.DISCOVERABLE);
            }
            if (flag == null) {
              flag = false;
            }
            tmp2 = flag;
          }
          return tmp2;
        },
        items1,
      );
      const obj2 = { location };
      const enabled = apexExperiment.useConfig(obj2).enabled;
      const useConfig = apexExperiment1.useConfig;
      if (arg0 == null) {
        str = "";
      }
      const obj3 = { guildId: str, location };
      const enabled2 = useConfig(obj3).enabled;
      if (stateFromStores) {
        stateFromStores = enabled;
      }
      if (stateFromStores) {
        stateFromStores = enabled2;
      }
      return stateFromStores;
    };
const result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchExperiments.tsx");

export const NlpSearchUserExperiment = apexExperiment;
export const NlpSearchGuildExperiment = apexExperiment1;
export const isNlpSearchEnabled = function isNlpSearchEnabled(guildId, suggested_searches) {
  const guild = GuildStore.getGuild(guildId);
  let flag;
  if (guild != null) {
    const features = guild.features;
    flag = features.has(GuildFeatures.DISCOVERABLE);
  }
  if (flag == null) {
    flag = false;
  }
  if (flag) {
    const obj = { location: suggested_searches };
    let enabled = apexExperiment.getConfig(obj).enabled;
    const obj2 = { guildId, location: suggested_searches };
    if (enabled) {
      enabled = apexExperiment1.getConfig(obj2).enabled;
    }
    return enabled;
  } else {
    return false;
  }
};
export const useIsNlpSearchEnabled = tmp4;
