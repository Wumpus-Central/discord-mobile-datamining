// discord_app/modules/guild_automod/useGuildBotApplications.tsx
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import GuildSettingsFetchActionCreators from "../guild_settings/GuildSettingsFetchActionCreators.tsx";
import react from "../../../_runtime/00019_react.js";
import GuildSettingsStore from "../guild_settings/GuildSettingsStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let props;
      let stateFromStores;
      let tmp4;
      let tmp5;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(10);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildSettingsStore];
        const fn = function s() {
          return props.getProps().integrations;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = require("get initialized");
      stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === arg0) {
        let tmp7;
        let tmp8;
        if (cResult[3] === stateFromStores) {
          tmp7 = cResult[4];
          tmp8 = cResult[5];
        }
        const effect = react.useEffect(tmp7, tmp8);
        let tmp11 = null;
        if (null != stateFromStores) {
          let tmp12;
          if (cResult[6] !== stateFromStores) {
            let tmp13;
            let tmp14;
            const _Symbol = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              const fn3 = function h(type) {
                return type.type === closure_0(stateFromStores[6]).IntegrationTypes.DISCORD;
              };
              cResult[8] = fn3;
              tmp13 = fn3;
            } else {
              tmp13 = cResult[8];
            }
            const _Symbol2 = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const fn4 = function y(application) {
                return application.application;
              };
              cResult[9] = fn4;
              tmp14 = fn4;
            } else {
              tmp14 = cResult[9];
            }
            const found = stateFromStores.filter(tmp13);
            const mapped = found.map(tmp14);
            const found1 = mapped.filter(tmp(tmp2[7]).isNotNullish);
            cResult[6] = stateFromStores;
            cResult[7] = found1;
            tmp12 = found1;
          } else {
            tmp12 = cResult[7];
          }
          tmp11 = tmp12;
        }
        return tmp11;
      }
      const fn2 = function c() {
        if (null == stateFromStores) {
          const obj = GuildSettingsFetchActionCreators;
          const guildIntegrationsApplications = obj.fetchGuildIntegrationsApplications(closure_0);
        }
      };
      const items1 = [arg0, stateFromStores];
      cResult[2] = arg0;
      cResult[3] = stateFromStores;
      cResult[4] = fn2;
      cResult[5] = items1;
      tmp8 = items1;
      tmp7 = fn2;
    }
  : (arg0) => {
      let closure_0;
      let props;
      let stateFromStores;
      _require = arg0;
      let obj = require("get initialized");
      const items = [GuildSettingsStore];
      stateFromStores = obj.useStateFromStores(items, () => props.getProps().integrations);
      const items1 = [arg0, stateFromStores];
      const effect = react.useEffect(() => {
        if (null == stateFromStores) {
          const obj = GuildSettingsFetchActionCreators;
          const guildIntegrationsApplications = obj.fetchGuildIntegrationsApplications(closure_0);
        }
      }, items1);
      const items2 = [stateFromStores];
      return react.useMemo(() => {
        let found1 = null;
        if (null != stateFromStores) {
          const found = stateFromStores.filter(
            (type) => type.type === closure_1_0(stateFromStores[6]).IntegrationTypes.DISCORD,
          );
          const mapped = found.map((application) => application.application);
          found1 = mapped.filter(GlobalUtils.isNotNullish);
        }
        return found1;
      }, items2);
    };
const result = size.fileFinishedImporting("modules/guild_automod/useGuildBotApplications.tsx");

export const useGuildBotApplications = tmp2;
