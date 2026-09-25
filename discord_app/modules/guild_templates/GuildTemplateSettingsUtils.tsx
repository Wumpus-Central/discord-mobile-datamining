// discord_app/modules/guild_templates/GuildTemplateSettingsUtils.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import GuildTemplateStore from "GuildTemplateStore.tsx";

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_templates/GuildTemplateSettingsUtils.tsx");

export const isGuildTemplateNameValid = function isGuildTemplateNameValid(str) {
  let tmp = null != str;
  if (tmp) {
    tmp = str.trim().length >= 2;
  }
  return tmp;
};
export const useCanViewAllChannels = function useCanViewAllChannels(guildId) {
  _require = guildId;
  const items = [ChannelStore, PermissionStore];
  const items1 = [guildId];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const values = Object.values(ChannelStore.getMutableGuildChannelsForGuild(closure_0));
      return values.every((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
    },
    items1,
  );
};
export const useGuildTemplate = function useGuildTemplate(guildId) {
  _require = guildId;
  [tmp2, importDefault] = noop.useState(null);
  const loadError = _slicedToArray(noop.useState(null), 2);
  dependencyMap = loadError[1];
  const items = [guildId];
  const effect = noop.useEffect(() => {
    closure_0 = async function _fetchGuildTemplate(arg0) {
      closure_129_0 = closure_0;
      tmp3(null);
      await closure_2_1(6737).loadTemplatesForGuild(closure_0);
      if (1 === tmp7) {
        c4 = 0;
        closure_129_1 = closure_3;
        const aPIError = new guildId(4731).APIError(closure_129_1);
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
  const items2 = [guildId];
  let loading = null != guildId;
  const guildTemplate = require("initialize").useStateFromStores(
    items1,
    () => {
      let forGuild;
      if (null != closure_0) {
        forGuild = GuildTemplateStore.getForGuild(tmp);
      }
      return forGuild;
    },
    items2,
  );
  if (loading) {
    loading = tmp2 !== guildId;
  }
  return { loading, guildTemplate, loadError: loadError[0] };
};
