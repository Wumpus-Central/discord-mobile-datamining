// === Module 6746: ConjureUtils ===

// Module 6746 (ConjureUtils)
import react from "react" /* 576 */;
import ConjureTypes from "ConjureTypes" /* 6747 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6748 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4507 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c3;
let c9;
let closure_4;
let unpackModuleId;
function conjureChannelAppId(channel) {
  let type;
  if (channel != null) {
    type = channel.type;
  }
  let tmp2 = null;
  if (type === constants2.GUILD_APP) {
    let application_id = channel.application_id;
    if (application_id == null) {
      application_id = null;
    }
    tmp2 = application_id;
  }
  return tmp2;
}
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: c3, GUILD_VOCAL_CHANNELS_KEY: closure_4 } = GuildChannelStore);
GuildChannelStore = GuildChannelStore_mod;
({ Permissions: c9, ChannelTypes: c10, GuildFeatures: unpackModuleId } = Constants);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, location) => {
  const obj = react;
  const cResult = obj.c(5);
  if (cResult[0] === guildId.id) {
    let tmp4;
    let tmp6;
    if (cResult[1] === location) {
      tmp4 = cResult[2];
    }
    const tmpResult = ConjureGuildExperiment;
    let isConjureGuildEnabled = tmpResult.useIsConjureGuildEnabled(tmp4);
    if (cResult[3] !== guildId.features) {
      const features = guildId.features;
      const hasItem = features.has(unpackModuleId.INTERNAL_EMPLOYEE_ONLY);
      cResult[3] = guildId.features;
      cResult[4] = hasItem;
      tmp6 = hasItem;
    } else {
      tmp6 = cResult[4];
    }
    if (isConjureGuildEnabled) {
      isConjureGuildEnabled = !tmp6;
    }
    return isConjureGuildEnabled;
  }
  const obj2 = { guildId: guildId.id, location };
  cResult[0] = guildId.id;
  cResult[1] = location;
  cResult[2] = obj2;
  tmp4 = obj2;
}) : ((guildId, location) => {
  const obj = ConjureGuildExperiment;
  const obj2 = { guildId: guildId.id, location };
  let isConjureGuildEnabled = obj.useIsConjureGuildEnabled(obj2);
  const features = guildId.features;
  if (isConjureGuildEnabled) {
    isConjureGuildEnabled = !features.has(unpackModuleId.INTERNAL_EMPLOYEE_ONLY);
  }
  return isConjureGuildEnabled;
});
ReactCompilerGating = ReactCompilerGating_mod;
function isConjureGuildEligible(guildId, VibegrationsRemixSheet) {
  const obj = ConjureGuildExperiment;
  const obj2 = { guildId: guildId.id, location: VibegrationsRemixSheet };
  let result = obj.isConjureGuildEnabled(obj2);
  if (result) {
    const features = guildId.features;
    result = !features.has(unpackModuleId.INTERNAL_EMPLOYEE_ONLY);
  }
  return result;
}
function eligibleConjureGuilds(guildsArray, useIsOwnedVibegrationsApplication) {
  let closure_0 = useIsOwnedVibegrationsApplication;
  const found = guildsArray.filter((guildId) => {
    const obj = ConjureGuildExperiment;
    const obj2 = { guildId: guildId.id, location: _location };
    let result = obj.isConjureGuildEnabled(obj2);
    if (result) {
      const features = guildId.features;
      result = !features.has(unpackModuleId.INTERNAL_EMPLOYEE_ONLY);
    }
    return result;
  });
  return found.sort((id, id2) => {
    let num = -1;
    if (id.id >= id2.id) {
      let num2 = 0;
      if (id.id > id2.id) {
        num2 = 1;
      }
      num = num2;
    }
    return num;
  });
}
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id, location) => {
  let first;
  let tmp8;
  _require = guild_id;
  const obj = require("react");
  const cResult = obj.c(11);
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
    const fn = function t() {
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
  const tmpResult3 = require("useAppChannelApplication");
  const appChannelApplication = tmpResult3.useAppChannelApplication(guild_id);
  let guild_id2;
  if (guild_id != null) {
    guild_id2 = guild_id.guild_id;
  }
  if (cResult[3] === location) {
    let tmp13;
    if (cResult[4] === guild_id2) {
      tmp13 = cResult[5];
    }
    const tmpResult4 = require("ConjureGuildExperiment");
    const isConjureGuildEnabled = tmpResult4.useIsConjureGuildEnabled(tmp13);
    if (cResult[6] === appChannelApplication) {
      if (cResult[7] === guild_id) {
        if (cResult[8] === stateFromStores) {
          let tmp15;
          if (cResult[9] === isConjureGuildEnabled) {
            tmp15 = cResult[10];
          }
          return tmp15;
        }
      }
    }
    let type;
    if (guild_id != null) {
      type = guild_id.type;
    }
    let tmp18 = type === constants2.GUILD_APP;
    if (tmp18) {
      let prop;
      if (appChannelApplication != null) {
        prop = appChannelApplication.vibegrationsProjectId;
      }
      tmp18 = null != prop;
    }
    if (tmp18) {
      let hasItem;
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
      }
      tmp18 = true !== hasItem;
    }
    if (tmp18) {
      tmp18 = isConjureGuildEnabled;
    }
    cResult[6] = appChannelApplication;
    cResult[7] = guild_id;
    cResult[8] = stateFromStores;
    cResult[9] = isConjureGuildEnabled;
    cResult[10] = tmp18;
    tmp15 = tmp18;
  }
  const obj2 = { guildId: guild_id2, location };
  cResult[3] = location;
  cResult[4] = guild_id2;
  cResult[5] = obj2;
  tmp13 = obj2;
}) : ((guild_id, location) => {
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
  const obj2 = require("useAppChannelApplication");
  const appChannelApplication = obj2.useAppChannelApplication(guild_id);
  guild_id = undefined;
  const useIsConjureGuildEnabled = require("ConjureGuildExperiment").useIsConjureGuildEnabled;
  require("ConjureGuildExperiment");
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  let type;
  const obj3 = { guildId: guild_id, location };
  const isConjureGuildEnabled = useIsConjureGuildEnabled(obj3);
  if (guild_id != null) {
    type = guild_id.type;
  }
  let tmp7 = type === constants2.GUILD_APP;
  if (tmp7) {
    let prop;
    if (appChannelApplication != null) {
      prop = appChannelApplication.vibegrationsProjectId;
    }
    tmp7 = null != prop;
  }
  if (tmp7) {
    let hasItem;
    if (stateFromStores != null) {
      const features = stateFromStores.features;
      hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
    }
    tmp7 = true !== hasItem;
  }
  if (tmp7) {
    tmp7 = isConjureGuildEnabled;
  }
  return tmp7;
});
let result = size.fileFinishedImporting("modules/conjure/shared/ConjureUtils.tsx");

export const conjureSettingsGuildId = function conjureSettingsGuildId(project, isPreview) {
  let tmp = null;
  if (null != project) {
    tmp = null;
    if ("user" !== project.install_scope) {
      let preview_guild_id = null;
      if (isPreview) {
        preview_guild_id = project.preview_guild_id;
      }
      if (preview_guild_id == null) {
        preview_guild_id = project.guild_id;
      }
      if (preview_guild_id == null) {
        preview_guild_id = null;
      }
      tmp = preview_guild_id;
    }
  }
  return tmp;
};
export const conjureSettingChannels = function conjureSettingChannels(stateFromStores1, channel_filter) {
  let items;
  let items2;
  if ("voice" === channel_filter) {
    items = [];
  } else {
    items = stateFromStores1[_false];
  }
  const items1 = [...items];
  if ("text" === channel_filter) {
    items2 = [];
  } else {
    items2 = stateFromStores1[React3];
  }
  HermesBuiltin.arraySpread(items1, items2, tmp3);
  return items1.map((channel) => channel.channel);
};
export const getConjureProjectAccessSettings = function getConjureProjectAccessSettings(flags) {
  const obj = { isPublic: flags & ConjureTypes.ConjureProjectFlags.PUBLIC, isShared: flags & ConjureTypes.ConjureProjectFlags.SHAREABLE };
  return obj;
};
export { conjureChannelAppId };
export const isConjureProjectInGuild = function isConjureProjectInGuild(item10020, guildId) {
  let tmp = null != item10020;
  if (tmp) {
    let tmp3 = item10020.guild_id === guildId || item10020.preview_guild_id === guildId;
    if (!tmp3) {
      tmp3 = null == item10020.guild_id && null == item10020.preview_guild_id;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const findConjureChannelId = function findConjureChannelId(guild_id, application_id) {
  const tmp = GuildChannelStore.getChannels(guild_id)[_false];
  for (const item10012 of tmp) {
    let channel = item10012.channel;
    if (conjureChannelAppId(channel) === application_id) {
      let id = channel.id;
      obj.return();
      return id;
    }
  }
  return null;
};
export { isConjureGuildEligible };
export { eligibleConjureGuilds };
export const resolveConjureWorkspaceGuildId = function resolveConjureWorkspaceGuildId(VibegrationsChatStore) {
  let _location;
  let id;
  const guildId = SelectedGuildStore.getGuildId();
  let guild = null;
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
  }
  if (null != guild) {
    let obj = require("ConjureGuildExperiment");
    let obj2 = { guildId: guild.id, location: VibegrationsChatStore };
    let result = obj.isConjureGuildEnabled(obj2);
    if (result) {
      let features = guild.features;
      result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
    }
    if (result) {
      id = guild.id;
    }
    return id;
  }
  const guildsArray = GuildStore.getGuildsArray();
  _require = VibegrationsChatStore;
  const found = guildsArray.filter((guildId) => {
    const obj = ConjureGuildExperiment;
    const obj2 = { guildId: guildId.id, location: _location };
    let result = obj.isConjureGuildEnabled(obj2);
    if (result) {
      const features = guildId.features;
      result = !features.has(unpackModuleId.INTERNAL_EMPLOYEE_ONLY);
    }
    return result;
  });
  id = undefined;
  const first = found.sort((id, id2) => {
    let num = -1;
    if (id.id >= id2.id) {
      let num2 = 0;
      if (id.id > id2.id) {
        num2 = 1;
      }
      num = num2;
    }
    return num;
  })[0];
  if (first != null) {
    id = first.id;
  }
  if (id == null) {
    id = null;
  }
};
export const canAccessConjure = function canAccessConjure(guild, getChannelIdForGuildTransition) {
  const obj = ConjureGuildExperiment;
  const obj2 = { guildId: guild.id, location: getChannelIdForGuildTransition };
  let result = obj.isConjureGuildEnabled(obj2);
  if (result) {
    const features = guild.features;
    result = !features.has(unpackModuleId.INTERNAL_EMPLOYEE_ONLY);
  }
  return result;
};
export const canStartConjureProject = function canStartConjureProject(features, location) {
  features = features.features;
  const hasItem = features.has(unpackModuleId.INTERNAL_EMPLOYEE_ONLY);
  let canResult = !hasItem && PermissionStore.can(constants.MANAGE_CHANNELS, features) && PermissionStore.can(constants.MANAGE_GUILD, features);
  if (canResult) {
    const obj2 = { guildId: features.id, location };
    const obj = ConjureGuildExperiment;
    canResult = obj.isConjureGuildEnabled(obj2);
  }
  return canResult;
};
export const useCanAccessConjure = tmp4;
export const isConjureChannelCandidate = function isConjureChannelCandidate(channel, ActivitySounds) {
  let type;
  if (channel != null) {
    type = channel.type;
  }
  let tmp3 = null;
  if (type === constants2.GUILD_APP) {
    let application_id = channel.application_id;
    if (application_id == null) {
      application_id = null;
    }
    tmp3 = application_id;
  }
  let application = null;
  if (null != tmp3) {
    application = null;
    if (ApplicationStore.isHydrated(tmp3)) {
      application = ApplicationStore.getApplication(tmp3);
    }
  }
  let guild_id;
  const getGuild = GuildStore.getGuild;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const guild = getGuild(guild_id);
  let type1;
  if (channel != null) {
    type1 = channel.type;
  }
  let result = type1 === constants2.GUILD_APP;
  if (result) {
    let prop;
    if (application != null) {
      prop = application.vibegrationsProjectId;
    }
    result = null != prop;
  }
  if (result) {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(unpackModuleId.INTERNAL_EMPLOYEE_ONLY);
    }
    result = true !== hasItem;
  }
  if (result) {
    let guild_id1;
    const isConjureGuildEnabled = ConjureGuildExperiment.isConjureGuildEnabled;
    ConjureGuildExperiment;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    const obj2 = { guildId: guild_id1, location: ActivitySounds };
    result = isConjureGuildEnabled(obj2);
  }
  return result;
};
export const useIsConjureChannelCandidate = tmp5;