// discord_app/modules/stage_channels/StageInstanceStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GuildScheduledEventsConstants from "../guild_scheduled_events/GuildScheduledEventsConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

function handleStageInstanceCreateOrUpdate(instance) {
  instance = instance.instance;
  const guild_id = instance.guild_id;
  const items = [instance];
  let obj = dependencyMap[guild_id];
  if (obj == null) {
    obj = {};
  }
  obj = {};
  const merged = Object.assign(obj);
  const item = items.forEach((channel_id) => {
    closure_2_2[channel_id.channel_id] = channel_id;
    obj[channel_id.channel_id] = channel_id;
  });
  dependencyMap[guild_id] = obj;
}
const constants = GuildScheduledEventsConstants.GuildScheduledEventPrivacyLevel;
const dependencyMap = {};
let closure_2 = {};
const Store = initializeDefault.Store;
class StageInstanceStore extends Store {}
const prototype = StageInstanceStore.prototype;
prototype["getStageInstanceByChannel"] = function getStageInstanceByChannel(id) {
  if (null != id) {
    return closure_2[id];
  }
};
prototype["isLive"] = function isLive(id) {
  return null != this.getStageInstanceByChannel(id);
};
prototype["isPublic"] = function isPublic(id) {
  const stageInstanceByChannel = this.getStageInstanceByChannel(id);
  let privacy_level;
  if (stageInstanceByChannel != null) {
    privacy_level = stageInstanceByChannel.privacy_level;
  }
  return privacy_level === constants.PUBLIC;
};
prototype["getStageInstancesByGuild"] = function getStageInstancesByGuild(id) {
  if (null == id) {
    let obj = {};
  } else {
    obj = dependencyMap[id];
    if (obj == null) {
      obj = {};
    }
  }
  return obj;
};
prototype["getAllStageInstances"] = function getAllStageInstances() {
  return Object.values(closure_2);
};
StageInstanceStore.displayName = "StageInstanceStore";
const stageInstanceStore = new StageInstanceStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    closure_1 = {};
    closure_2 = {};
    let item = guilds.forEach((item) => {
      ({ id, stage_instances } = item);
      let obj = closure_1[id];
      if (obj == null) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      if (stage_instances != null) {
        item = stage_instances.forEach((channel_id) => {
          closure_2_2[channel_id.channel_id] = channel_id;
          obj[channel_id.channel_id] = channel_id;
        });
      }
      closure_1[id] = obj;
    });
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    ({ id, stage_instances } = guild.guild);
    let obj = dependencyMap[id];
    if (obj == null) {
      obj = {};
    }
    obj = {};
    const merged = Object.assign(obj);
    if (stage_instances != null) {
      const item = stage_instances.forEach((channel_id) => {
        closure_2_2[channel_id.channel_id] = channel_id;
        obj[channel_id.channel_id] = channel_id;
      });
    }
    dependencyMap[id] = obj;
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    let obj = dependencyMap[arg0.guild.id];
    if (obj == null) {
      obj = {};
    }
    delete tmp2[tmp];
    const keys = Object.keys(obj);
    const item = keys.forEach((item) => {
      delete tmp2[tmp];
    });
  },
  STAGE_INSTANCE_CREATE: handleStageInstanceCreateOrUpdate,
  STAGE_INSTANCE_UPDATE: handleStageInstanceCreateOrUpdate,
  STAGE_INSTANCE_DELETE: function handleStageInstanceDelete(instance) {
    ({ guild_id, channel_id } = instance.instance);
    delete tmp[tmp2];
    if (null != guild_id) {
      let obj = dependencyMap[guild_id];
      if (obj == null) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      delete tmp[tmp2];
      dependencyMap[guild_id] = obj;
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    ({ guild_id, id } = channel.channel);
    delete tmp[tmp2];
    if (null != guild_id) {
      let obj = dependencyMap[guild_id];
      if (obj == null) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      delete tmp[tmp2];
      dependencyMap[guild_id] = obj;
    }
  },
  LOGOUT: function handleLogout() {
    closure_2 = {};
    closure_1 = {};
  },
});
const result = size.fileFinishedImporting("modules/stage_channels/StageInstanceStore.tsx");

export default stageInstanceStore;
