// === Module 18034: useGuildBotApplications ===

// Module 18034 (useGuildBotApplications)
import GlobalUtils from "GlobalUtils" /* 1387 */;
import GuildSettingsFetchActionCreators from "GuildSettingsFetchActionCreators" /* 8620 */;
import noop from "module_19" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8614 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/useGuildBotApplications.tsx");

export const useGuildBotApplications = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildBotApplications(arg0) {
  _require = arg0;
  let found1 = stateFromStores;
  const cResult = require("c").c(10);
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
  let obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  if (cResult[2] === arg0) {
    if (cResult[3] === stateFromStores) {
      let tmp7 = cResult[4];
      let tmp8 = cResult[5];
    }
    const effect = noop.useEffect(tmp7, tmp8);
    if (null == stateFromStores) {
      return null;
    } else {
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function h(type) {
          return type.type === closure_0(stateFromStores[6]).IntegrationTypes.DISCORD;
        };
        cResult[8] = fn3;
        let mapped = fn3;
      } else {
        mapped = cResult[8];
      }
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const fn4 = function y(application) {
          return application.application;
        };
        cResult[9] = fn4;
        let tmp12 = fn4;
      } else {
        tmp12 = cResult[9];
      }
      const found = stateFromStores.filter(mapped);
      mapped = found.map(tmp12);
      found1 = mapped.filter(tmp(found1[7]).isNotNullish);
      cResult[6] = stateFromStores;
      cResult[7] = found1;
    }
  }
  const fn2 = function c() {
    if (null == stateFromStores) {
      const guildIntegrationsApplications = GuildSettingsFetchActionCreators.fetchGuildIntegrationsApplications(closure_0);
    }
  };
  const items1 = [arg0, stateFromStores];
  cResult[2] = arg0;
  cResult[3] = stateFromStores;
  cResult[4] = fn2;
  cResult[5] = items1;
  tmp8 = items1;
  tmp7 = fn2;
  const tmpResult = require("initialize");
}) : (function useGuildBotApplications(arg0) {
  _require = arg0;
  const items = [GuildSettingsStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => props.getProps().integrations);
  const items1 = [arg0, stateFromStores];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      const guildIntegrationsApplications = GuildSettingsFetchActionCreators.fetchGuildIntegrationsApplications(closure_0);
    }
  }, items1);
  const items2 = [stateFromStores];
  return noop.useMemo(() => {
    let found1 = null;
    if (null != stateFromStores) {
      const found = stateFromStores.filter((type) => type.type === closure_1_0(stateFromStores[6]).IntegrationTypes.DISCORD);
      const mapped = found.map((application) => application.application);
      found1 = mapped.filter(GlobalUtils.isNotNullish);
    }
    return found1;
  }, items2);
});