import { GuildScheduledEventPrivacyLevel as closure_0 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { Store } from "initialize";

function handleStageInstanceCreateOrUpdate(instance) {
  instance = instance.instance;
  const guild_id = instance.guild_id;
  const items = [instance];
  let obj;
  obj = dependencyMap[guild_id];
  if (obj == null) {
    obj = {};
  }
  obj = {};
  const merged = Object.assign(obj);
  const item = items.forEach((channel_id) => {
    outer1_2[channel_id.channel_id] = channel_id;
    obj[channel_id.channel_id] = channel_id;
  });
  dependencyMap[guild_id] = obj;
}
let closure_1 = {};
let closure_2 = {};
class StageInstanceStore extends Store {
}
const prototype = StageInstanceStore.prototype;
prototype["getStageInstanceByChannel"] = function getStageInstanceByChannel(id) {
  if (null != id) {
    return table[id];
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
const stageInstanceStore = new StageInstanceStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    let closure_1 = {};
    let closure_2 = {};
    let item = guilds.forEach((arg0) => {
      let id;
      let stage_instances;
      ({ id, stage_instances } = arg0);
      let obj;
      obj = table[id];
      if (obj == null) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      if (stage_instances != null) {
        const item = stage_instances.forEach((channel_id) => {
          outer1_2[channel_id.channel_id] = channel_id;
          obj[channel_id.channel_id] = channel_id;
        });
      }
      table[id] = obj;
    });
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    let id;
    let stage_instances;
    ({ id, stage_instances } = guild.guild);
    let obj;
    obj = dependencyMap[id];
    if (obj == null) {
      obj = {};
    }
    obj = {};
    const merged = Object.assign(obj);
    if (stage_instances != null) {
      const item = stage_instances.forEach((channel_id) => {
        outer1_2[channel_id.channel_id] = channel_id;
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
    const item = keys.forEach((arg0) => {
      delete tmp2[tmp];
    });
  },
  STAGE_INSTANCE_CREATE: handleStageInstanceCreateOrUpdate,
  STAGE_INSTANCE_UPDATE: handleStageInstanceCreateOrUpdate,
  STAGE_INSTANCE_DELETE: function handleStageInstanceDelete(instance) {
    let channel_id;
    let guild_id;
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
    let guild_id;
    let id;
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
    let closure_2 = {};
    let closure_1 = {};
  }
});
const result = require("dispatcher").fileFinishedImporting("modules/stage_channels/StageInstanceStore.tsx");

export default stageInstanceStore;