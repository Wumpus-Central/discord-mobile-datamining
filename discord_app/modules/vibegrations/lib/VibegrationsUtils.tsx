// discord_app/modules/vibegrations/lib/VibegrationsUtils.tsx
import c from "../../../../_runtime/00576_c.js";
import VibegrationsTypes from "../VibegrationsTypes.tsx";
import VibegrationsGuildExperiment from "../experiments/VibegrationsGuildExperiment.tsx";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import GuildChannelStore_mod from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";

const require = globalThis.__r;

require = fn;
function vibegrationsChannelAppId(channel) {
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
let GuildChannelStore = fn(4507);
({ GUILD_SELECTABLE_CHANNELS_KEY: c3, GUILD_VOCAL_CHANNELS_KEY: closure_4 } = GuildChannelStore);
let GuildChannelStore = GuildChannelStore_mod;
const Constants = fn(1085);
({ Permissions: closure_9, ChannelTypes: c10, GuildFeatures: closure_11 } = Constants);
fn(558);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId, location) => {
      const cResult = c.c(5);
      if (cResult[0] === guildId.id) {
        if (cResult[1] === location) {
          let tmp4 = cResult[2];
        }
        let isVibegrationsGuildEnabled = VibegrationsGuildExperiment.useIsVibegrationsGuildEnabled(tmp4);
        if (cResult[3] !== guildId.features) {
          const features = guildId.features;
          const hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
          cResult[3] = guildId.features;
          cResult[4] = hasItem;
          let tmp6 = hasItem;
        } else {
          tmp6 = cResult[4];
        }
        if (isVibegrationsGuildEnabled) {
          isVibegrationsGuildEnabled = !tmp6;
        }
        return isVibegrationsGuildEnabled;
      }
      const obj2 = { guildId: guildId.id, location };
      cResult[0] = guildId.id;
      cResult[1] = location;
      cResult[2] = obj2;
      tmp4 = obj2;
    }
  : (guildId, location) => {
      let isVibegrationsGuildEnabled = VibegrationsGuildExperiment.useIsVibegrationsGuildEnabled({
        guildId: guildId.id,
        location,
      });
      const features = guildId.features;
      if (isVibegrationsGuildEnabled) {
        isVibegrationsGuildEnabled = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
      }
      return isVibegrationsGuildEnabled;
    };
function isVibegrationsGuildEligible(guildId, VibegrationsRemixSheet) {
  let result = VibegrationsGuildExperiment.isVibegrationsGuildEnabled({
    guildId: guildId.id,
    location: VibegrationsRemixSheet,
  });
  if (result) {
    const features = guildId.features;
    result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  }
  return result;
}
function eligibleVibegrationsGuilds(guildsArray, useIsOwnedVibegrationsApplication) {
  closure_0 = useIsOwnedVibegrationsApplication;
  const found = guildsArray.filter((guildId) => {
    let result = VibegrationsGuildExperiment.isVibegrationsGuildEnabled({ guildId: guildId.id, location: _location });
    if (result) {
      const features = guildId.features;
      result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsUtils.tsx");

export const vibegrationsSettingsGuildId = function vibegrationsSettingsGuildId(project, isPreview) {
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
export const vibegrationsSettingChannels = function vibegrationsSettingChannels(stateFromStores1, channel_filter) {
  if ("voice" === channel_filter) {
    let items = [];
  } else {
    items = stateFromStores1[React3];
  }
  const items1 = [...items];
  if ("text" === channel_filter) {
    let items2 = [];
  } else {
    items2 = stateFromStores1[React4];
  }
  HermesBuiltin.arraySpread(items2, tmp2);
  return items1.map((channel) => channel.channel);
};
export const getVibegrationsProjectAccessSettings = function getVibegrationsProjectAccessSettings(first1) {
  return {
    isPublic: first1 & VibegrationsTypes.VibegrationsProjectFlags.PUBLIC,
    isShared: first1 & VibegrationsTypes.VibegrationsProjectFlags.SHAREABLE,
  };
};
export { vibegrationsChannelAppId };
export const isVibegrationsProjectInGuild = function isVibegrationsProjectInGuild(guild_id, guildId) {
  let tmp = null != guild_id;
  if (tmp) {
    let tmp3 = guild_id.guild_id === guildId || guild_id.preview_guild_id === guildId;
    if (!tmp3) {
      tmp3 = null == guild_id.guild_id && null == guild_id.preview_guild_id;
      const tmp4 = null == guild_id.guild_id && null == guild_id.preview_guild_id;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const findVibegrationChannelId = function findVibegrationChannelId(guild_id, application_id) {
  for (const item10012 of tmp) {
    let channel = item10012.channel;
    if (vibegrationsChannelAppId(channel) === arg1) {
      obj.return();
      return channel.id;
    }
  }
  return null;
};
export { isVibegrationsGuildEligible };
export { eligibleVibegrationsGuilds };
export const resolveVibegrationsWorkspaceGuildId = function resolveVibegrationsWorkspaceGuildId(VibegrationsChatStore) {
  const guildId = SelectedGuildStore.getGuildId();
  guild = null;
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
  }
  if (null != guild) {
    const obj2 = { guildId: guild.id, location: VibegrationsChatStore };
    let result = require("VibegrationsGuildExperiment").isVibegrationsGuildEnabled(obj2);
    if (result) {
      let features = guild.features;
      result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
    }
    if (result) {
      let id = guild.id;
    }
    return id;
  }
  const guildsArray = GuildStore.getGuildsArray();
  _require = VibegrationsChatStore;
  const found = guildsArray.filter((guildId) => {
    let result = VibegrationsGuildExperiment.isVibegrationsGuildEnabled({ guildId: guildId.id, location: _location });
    if (result) {
      const features = guildId.features;
      result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
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
export const canAccessVibegrations = function canAccessVibegrations(guild, getChannelIdForGuildTransition) {
  let result = VibegrationsGuildExperiment.isVibegrationsGuildEnabled({
    guildId: guild.id,
    location: getChannelIdForGuildTransition,
  });
  if (result) {
    const features = guild.features;
    result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  }
  return result;
};
export const canStartVibegrationsProject = function canStartVibegrationsProject(features, location) {
  features = features.features;
  const hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  let canResult = !hasItem;
  if (!hasItem) {
    canResult = PermissionStore.can(constants.MANAGE_CHANNELS, features);
  }
  if (canResult) {
    canResult = PermissionStore.can(constants.MANAGE_GUILD, features);
  }
  if (canResult) {
    const obj2 = { guildId: features.id, location };
    canResult = VibegrationsGuildExperiment.isVibegrationsGuildEnabled(obj2);
  }
  return canResult;
};
export const useCanAccessVibegrations = tmp4;
export const isVibegrationsChannelCandidate = function isVibegrationsChannelCandidate(channel, ActivitySounds) {
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
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  guild = GuildStore.getGuild(guild_id);
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
      hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
    }
    result = true !== hasItem;
  }
  if (result) {
    let guild_id1;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    const obj3 = { guildId: guild_id1, location: ActivitySounds };
    result = VibegrationsGuildExperiment.isVibegrationsGuildEnabled(obj3);
  }
  return result;
};
export const useIsVibegrationsChannelCandidate = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild_id, location) => {
      _require = guild_id;
      const cResult = require("c").c(11);
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
        const fn = function a() {
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
      const tmpResult = require("initialize");
      const appChannelApplication = require("useAppChannelApplication").useAppChannelApplication(guild_id);
      let guild_id2;
      if (guild_id != null) {
        guild_id2 = guild_id.guild_id;
      }
      if (cResult[3] === location) {
        if (cResult[4] === guild_id2) {
          let tmp12 = cResult[5];
        }
        const isVibegrationsGuildEnabled = tmp(6748).useIsVibegrationsGuildEnabled(tmp12);
        if (cResult[6] === appChannelApplication) {
          if (cResult[7] === guild_id) {
            if (cResult[8] === stateFromStores) {
              if (cResult[9] === isVibegrationsGuildEnabled) {
                let tmp14 = cResult[10];
              }
              return tmp14;
            }
          }
        }
        let type;
        if (guild_id != null) {
          type = guild_id.type;
        }
        let tmp17 = type === constants2.GUILD_APP;
        if (tmp17) {
          let prop;
          if (appChannelApplication != null) {
            prop = appChannelApplication.vibegrationsProjectId;
          }
          tmp17 = null != prop;
        }
        if (tmp17) {
          let hasItem;
          if (stateFromStores != null) {
            const features = stateFromStores.features;
            hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
          }
          tmp17 = true !== hasItem;
        }
        if (tmp17) {
          tmp17 = isVibegrationsGuildEnabled;
        }
        cResult[6] = appChannelApplication;
        cResult[7] = guild_id;
        cResult[8] = stateFromStores;
        cResult[9] = isVibegrationsGuildEnabled;
        cResult[10] = tmp17;
        tmp14 = tmp17;
        const tmpResult4 = tmp(6748);
      }
      const obj2 = { guildId: guild_id2, location };
      cResult[3] = location;
      cResult[4] = guild_id2;
      cResult[5] = obj2;
      tmp12 = obj2;
      const tmpResult3 = require("useAppChannelApplication");
    }
  : (guild_id, location) => {
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
      const appChannelApplication = require("useAppChannelApplication").useAppChannelApplication(guild_id);
      const obj2 = require("useAppChannelApplication");
      guild_id = undefined;
      if (guild_id != null) {
        guild_id = guild_id.guild_id;
      }
      let type;
      const isVibegrationsGuildEnabled = require("VibegrationsGuildExperiment").useIsVibegrationsGuildEnabled({
        guildId: guild_id,
        location,
      });
      if (guild_id != null) {
        type = guild_id.type;
      }
      let tmp6 = type === constants2.GUILD_APP;
      if (tmp6) {
        let prop;
        if (appChannelApplication != null) {
          prop = appChannelApplication.vibegrationsProjectId;
        }
        tmp6 = null != prop;
      }
      if (tmp6) {
        let hasItem;
        if (stateFromStores != null) {
          const features = stateFromStores.features;
          hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
        }
        tmp6 = true !== hasItem;
      }
      if (tmp6) {
        tmp6 = isVibegrationsGuildEnabled;
      }
      return tmp6;
    };
