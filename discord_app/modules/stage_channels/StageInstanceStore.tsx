// discord_app/modules/stage_channels/StageInstanceStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GuildScheduledEventsConstants from "../guild_scheduled_events/GuildScheduledEventsConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_1, closure_2;

function handleStageInstanceCreateOrUpdate(instance) {
  instance = instance.instance;
  const guild_id = instance.guild_id;
  const items = [instance];
  let obj2;
  let obj = closure_1[guild_id];
  if (obj == null) {
    obj = {};
  }
  obj2 = {};
  const merged = Object.assign(obj);
  const item = items.forEach((channel_id) => {
    closure_2_2[channel_id.channel_id] = channel_id;
    obj2[channel_id.channel_id] = channel_id;
  });
  closure_1[guild_id] = obj2;
}
const React = GuildScheduledEventsConstants.GuildScheduledEventPrivacyLevel;
const React2 = {};
const Store = get_initializedDefault.Store;
class StageInstanceStore extends Store {
  getStageInstanceByChannel(id) {
    if (null != id) {
      return closure_2[id];
    }
  }
  isLive(first1) {
    return null != this.getStageInstanceByChannel(first1);
  }
  isPublic(id) {
    const stageInstanceByChannel = this.getStageInstanceByChannel(id);
    let privacy_level;
    if (stageInstanceByChannel != null) {
      privacy_level = stageInstanceByChannel.privacy_level;
    }
    return privacy_level === constants.PUBLIC;
  }
  getStageInstancesByGuild(id) {
    let obj;
    if (null == id) {
      obj = {};
    } else {
      obj = closure_1[id];
      if (obj == null) {
        obj = {};
      }
    }
    return obj;
  }
  getAllStageInstances() {
    return Object.values(closure_2);
  }
}
const prototype = StageInstanceStore.prototype;
StageInstanceStore.displayName = "StageInstanceStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    closure_1 = {};
    closure_2 = {};
    let item = guilds.forEach((item) => {
      let id;
      let stage_instances;
      ({ id, stage_instances } = item);
      let obj2;
      let obj = closure_1[id];
      if (obj == null) {
        obj = {};
      }
      obj2 = {};
      const merged = Object.assign(obj);
      if (stage_instances != null) {
        item = stage_instances.forEach((channel_id) => {
          closure_2_2[channel_id.channel_id] = channel_id;
          obj2[channel_id.channel_id] = channel_id;
        });
      }
      closure_1[id] = obj2;
    });
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    let id;
    let stage_instances;
    ({ id, stage_instances } = guild.guild);
    let obj2;
    let obj = closure_1[id];
    if (obj == null) {
      obj = {};
    }
    obj2 = {};
    const merged = Object.assign(obj);
    if (stage_instances != null) {
      const item = stage_instances.forEach((channel_id) => {
        closure_2_2[channel_id.channel_id] = channel_id;
        obj2[channel_id.channel_id] = channel_id;
      });
    }
    closure_1[id] = obj2;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    let obj = closure_1[guild.id];
    if (obj == null) {
      obj = {};
    }
    delete closure_1[guild.id];
    const keys = Object.keys(obj);
    const item = keys.forEach((item) => {
      delete closure_1_2[item];
    });
  },
  STAGE_INSTANCE_CREATE: handleStageInstanceCreateOrUpdate,
  STAGE_INSTANCE_UPDATE: handleStageInstanceCreateOrUpdate,
  STAGE_INSTANCE_DELETE: function handleStageInstanceDelete(instance) {
    let channel_id;
    let guild_id;
    ({ guild_id, channel_id } = instance.instance);
    delete closure_2[channel_id];
    if (null != guild_id) {
      let obj = closure_1[guild_id];
      if (obj == null) {
        obj = {};
      }
      const obj3 = {};
      const merged = Object.assign(obj);
      delete obj2[channel_id];
      closure_1[guild_id] = obj3;
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    let guild_id;
    let id;
    ({ guild_id, id } = channel.channel);
    delete closure_2[id];
    if (null != guild_id) {
      let obj = closure_1[guild_id];
      if (obj == null) {
        obj = {};
      }
      const obj3 = {};
      const merged = Object.assign(obj);
      delete obj2[id];
      closure_1[guild_id] = obj3;
    }
  },
  LOGOUT: function handleLogout() {
    closure_2 = {};
    closure_1 = {};
  },
};
const stageInstanceStore = new StageInstanceStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/stage_channels/StageInstanceStore.tsx");

export default stageInstanceStore;
