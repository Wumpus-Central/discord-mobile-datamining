// === Module 17797: GuildTemplateSettingsUtils ===

// Module 17797 (GuildTemplateSettingsUtils)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import GuildTemplateStore from "GuildTemplateStore" /* 6966 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1085).Permissions;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      const values = Object.values(ChannelStore.getMutableGuildChannelsForGuild(closure_0));
      return values.every((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : ((arg0) => {
  _require = arg0;
  const items = [ChannelStore, PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const values = Object.values(ChannelStore.getMutableGuildChannelsForGuild(closure_0));
    return values.every((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
  }, items1);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_templates/GuildTemplateSettingsUtils.tsx");

export const isGuildTemplateNameValid = function isGuildTemplateNameValid(str) {
  let tmp = null != str;
  if (tmp) {
    tmp = str.trim().length >= 2;
  }
  return tmp;
};
export const useCanViewAllChannels = tmp2;
export const useGuildTemplate = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(11);
  const obj = require("c");
  const tmp = _require;
  [tmp5, importDefault] = noop.useState(null);
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  [tmp7, dependencyMap] = noop.useState(null);
  if (cResult[0] !== arg0) {
    const fn = function n() {
      if (null != closure_0) {
        closure_0 = asyncGeneratorStep(async (arg0) => {
          closure_129_0 = closure_0;
          tmp3(null);
          await closure_2_1(6827).loadTemplatesForGuild(closure_0);
          if (1 === tmp7) {
            c4 = 0;
            closure_129_1 = closure_3;
            const aPIError = new closure_0(5312).APIError(closure_129_1);
            tmp3(aPIError);
            closure_1(closure_129_0);
            c6 = 3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c4 = 0;
          }
          return value;
        });
        (function fetchGuildTemplate() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(tmp);
      }
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp9 = items;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const effect = noop.useEffect(tmp8, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildTemplateStore];
    cResult[3] = items1;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    class E {
      constructor() {
        forGuild = undefined;
        if (null != closure_0) {
          tmp3 = closure_8;
          forGuild = closure_8.getForGuild(tmp);
        }
        return forGuild;
      }
    }
    const items2 = [arg0];
    cResult[4] = arg0;
    cResult[5] = E;
    cResult[6] = items2;
    let tmp15 = items2;
  } else {
    class E {
      constructor() {
        forGuild = undefined;
        if (null != closure_0) {
          tmp3 = closure_8;
          forGuild = closure_8.getForGuild(tmp);
        }
        return forGuild;
      }
    }
    tmp15 = cResult[6];
  }
  const tmp6 = _slicedToArray(noop.useState(null), 2);
  const stateFromStores = tmp(504).useStateFromStores(tmp12, E, tmp15);
  if (cResult[7] === tmp7) {
    class E {
      constructor() {
        forGuild = undefined;
        if (null != closure_0) {
          tmp3 = closure_8;
          forGuild = closure_8.getForGuild(tmp);
        }
        return forGuild;
      }
    }
  }
  cResult[7] = tmp7;
  cResult[8] = stateFromStores;
  cResult[9] = null != arg0 && tmp5 !== arg0;
  cResult[10] = { loading: null != arg0 && tmp5 !== arg0, guildTemplate: stateFromStores, loadError: tmp7 };
  const obj3 = { loading: null != arg0 && tmp5 !== arg0, guildTemplate: stateFromStores, loadError: tmp7 };
  const tmpResult = tmp(504);
}) : ((arg0) => {
  _require = arg0;
  [tmp2, importDefault] = noop.useState(null);
  const loadError = _slicedToArray(noop.useState(null), 2);
  dependencyMap = loadError[1];
  const items = [arg0];
  const effect = noop.useEffect(() => {
    closure_0 = async function _fetchGuildTemplate2(arg0) {
      closure_129_0 = closure_0;
      tmp3(null);
      await closure_2_1(6827).loadTemplatesForGuild(closure_0);
      if (1 === tmp7) {
        c4 = 0;
        closure_129_1 = closure_3;
        const aPIError = new closure_2_0(5312).APIError(closure_129_1);
        tmp3(aPIError);
        closure_1(closure_129_0);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c4 = 0;
      }
      return value;
    };
    if (null != closure_0) {
      (function fetchGuildTemplate(arg0) {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(tmp);
    }
  }, items);
  const tmp = _slicedToArray(noop.useState(null), 2);
  const items1 = [GuildTemplateStore];
  const items2 = [arg0];
  let loading = null != arg0;
  const guildTemplate = require("initialize").useStateFromStores(items1, () => {
    let forGuild;
    if (null != closure_0) {
      forGuild = GuildTemplateStore.getForGuild(tmp);
    }
    return forGuild;
  }, items2);
  if (loading) {
    loading = tmp2 !== arg0;
  }
  return { loading, guildTemplate, loadError: loadError[0] };
});