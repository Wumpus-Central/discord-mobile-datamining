// === Module 9219: GuildProfileStore ===

// Module 9219 (GuildProfileStore)
import initializeDefault from "initialize" /* 504 */;
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import GuildProfileBuilders from "GuildProfileBuilders" /* 5636 */;
import size from "module_2" /* 2 */;

function handleUpdateStart(guildId) {
  guildId = guildId.guildId;
  value = map.get(guildId);
  if (null == value) {
    const obj2 = {};
    const merged = Object.assign(closure_7);
    obj2.isUpdating = true;
    const result = map.set(guildId, obj2);
  } else {
    const obj3 = {};
    const merged1 = Object.assign(value);
    obj3.isUpdating = true;
    const result1 = map.set(guildId, obj3);
  }
}
function handleUpdateFailure(arg0) {
  ({ guildId, error } = arg0);
  value = map.get(guildId);
  if (null == value) {
    const obj2 = {};
    const merged = Object.assign(closure_7);
    obj2.error = error;
    const result = map.set(guildId, obj2);
  } else {
    const obj3 = {};
    const merged1 = Object.assign(value);
    obj3.error = error;
    obj3.isUpdating = false;
    const result1 = map.set(guildId, obj3);
  }
}
function handleInviteResolveOrCreate(invite) {
  const profile = invite.invite.profile;
  if (null != profile) {
    value = map.get(profile.id);
    const guildProfileFromServer = GuildProfileBuilders.buildGuildProfileFromServer(profile);
    if (null == value) {
      const obj2 = {};
      const merged = Object.assign(closure_7);
      obj2.profile = guildProfileFromServer;
      const _Date2 = Date;
      obj2.lastSyncTimestamp = Date.now();
      obj2.fetchStatus = obj.FETCHED;
      const result = map.set(profile.id, obj2);
    } else {
      obj = {};
      const merged1 = Object.assign(value);
      obj.profile = guildProfileFromServer;
      const _Date = Date;
      obj.lastSyncTimestamp = Date.now();
      obj.fetchStatus = obj.FETCHED;
      const result1 = map.set(profile.id, obj);
    }
  }
}
const ChannelTypes = Constants.ChannelTypes;
const GuildProfileFetchStatus = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
const map = new Map();
const map1 = new Map();
let closure_7 = { profile: null, lastSyncTimestamp: null, fetchStatus: GuildProfileFetchStatus.NOT_FETCHED, isUpdating: false, error: null, nextFetchAllowedAt: null };
const Store = initializeDefault.Store;
class GuildProfileStore extends Store {
}
const prototype = GuildProfileStore.prototype;
prototype["getProfile"] = function getProfile(arg0) {
  let tmp = null;
  if (null != arg0) {
    value = map.get(arg0);
    let profile;
    if (value != null) {
      profile = value.profile;
    }
    if (profile == null) {
      profile = null;
    }
    tmp = profile;
  }
  return tmp;
};
prototype["getFetchStatus"] = function getFetchStatus(guildId) {
  if (null == guildId) {
    let NOT_FETCHED = obj.NOT_FETCHED;
  } else {
    value = map.get(guildId);
    NOT_FETCHED = undefined;
    if (value != null) {
      NOT_FETCHED = value.fetchStatus;
    }
    if (NOT_FETCHED == null) {
      NOT_FETCHED = obj.NOT_FETCHED;
    }
  }
  return NOT_FETCHED;
};
prototype["getLastSyncTimestamp"] = function getLastSyncTimestamp(guildId) {
  let tmp = null;
  if (null != guildId) {
    value = map.get(guildId);
    let lastSyncTimestamp;
    if (value != null) {
      lastSyncTimestamp = value.lastSyncTimestamp;
    }
    if (lastSyncTimestamp == null) {
      lastSyncTimestamp = null;
    }
    tmp = lastSyncTimestamp;
  }
  return tmp;
};
prototype["getNextFetchAllowedAt"] = function getNextFetchAllowedAt(guildId) {
  let tmp = null;
  if (null != guildId) {
    value = map.get(guildId);
    let nextFetchAllowedAt;
    if (value != null) {
      nextFetchAllowedAt = value.nextFetchAllowedAt;
    }
    if (nextFetchAllowedAt == null) {
      nextFetchAllowedAt = null;
    }
    tmp = nextFetchAllowedAt;
  }
  return tmp;
};
prototype["getIsUpdating"] = function getIsUpdating(guildId) {
  let tmp = null != guildId;
  if (tmp) {
    value = map.get(guildId);
    let flag;
    if (value != null) {
      flag = value.isUpdating;
    }
    if (flag == null) {
      flag = false;
    }
    tmp = flag;
  }
  return tmp;
};
prototype["getErrorCode"] = function getErrorCode(guildId) {
  let tmp = null;
  if (null != guildId) {
    value = map.get(guildId);
    let code;
    if (value != null) {
      const error = value.error;
      if (error != null) {
        code = error.code;
      }
    }
    if (code == null) {
      code = null;
    }
    tmp = code;
  }
  return tmp;
};
GuildProfileStore.displayName = "GuildProfileStore";
const guildProfileStore = new GuildProfileStore(DispatcherDefault, {
  GUILD_PROFILE_FETCH: function handleFetchStart(guildId) {
    guildId = guildId.guildId;
    value = map.get(guildId);
    if (null == value) {
      const obj2 = {};
      const merged = Object.assign(closure_7);
      obj2.fetchStatus = map.FETCHING;
      const result = map.set(guildId, obj2);
    } else {
      const obj3 = {};
      const merged1 = Object.assign(value);
      obj3.fetchStatus = map.FETCHING;
      const result1 = map.set(guildId, obj3);
    }
  },
  GUILD_PROFILE_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ guildId, profile } = arg0);
    value = map1.get(guildId);
    if (value != null) {
      value.succeed();
    }
    map1.delete(guildId);
    value2 = map.get(guildId);
    if (null == value2) {
      const obj2 = {};
      const merged = Object.assign(closure_7);
      obj2.profile = profile;
      const _Date2 = Date;
      obj2.lastSyncTimestamp = Date.now();
      obj2.fetchStatus = map1.FETCHED;
      const result = map.set(guildId, obj2);
    } else {
      const obj4 = {};
      const merged1 = Object.assign(value2);
      obj4.profile = profile;
      const _Date = Date;
      obj4.lastSyncTimestamp = Date.now();
      obj4.fetchStatus = map1.FETCHED;
      obj4.error = null;
      obj4.nextFetchAllowedAt = null;
      const result1 = map.set(guildId, obj4);
    }
  },
  GUILD_PROFILE_FETCH_FAILURE: function handleFetchFailure(arg0) {
    ({ guildId, error } = arg0);
    value = map1.get(guildId);
    if (null == value) {
      const tmp5 = new BackoffDefault(5000, 300000);
      const result = map1.set(guildId, tmp5);
      value = tmp5;
    }
    const sum = Date.now() + value.fail();
    value2 = map.get(guildId);
    if (null == value2) {
      const obj2 = {};
      const merged = Object.assign(closure_7);
      obj2.error = error;
      obj2.fetchStatus = map1.FETCHED;
      obj2.nextFetchAllowedAt = sum;
      const result1 = map.set(guildId, obj2);
    } else {
      const obj4 = {};
      const merged1 = Object.assign(value2);
      obj4.error = error;
      obj4.fetchStatus = map1.FETCHED;
      obj4.nextFetchAllowedAt = sum;
      const result2 = map.set(guildId, obj4);
    }
    const failResult = value.fail();
  },
  GUILD_PROFILE_UPDATE: handleUpdateStart,
  GUILD_PROFILE_UPDATE_SUCCESS: function handleUpdateSuccess(arg0) {
    ({ guildId, profile } = arg0);
    value = map.get(guildId);
    if (null == value) {
      const obj2 = {};
      const merged = Object.assign(closure_7);
      obj2.profile = profile;
      const result = map.set(guildId, obj2);
    } else {
      const obj3 = {};
      const merged1 = Object.assign(value);
      obj3.profile = profile;
      obj3.isUpdating = false;
      const result1 = map.set(guildId, obj3);
    }
  },
  GUILD_PROFILE_UPDATE_FAILURE: handleUpdateFailure,
  MEMBER_VERIFICATION_FORM_UPDATE: function handleMemberVerificationFormFetch(arg0) {
    ({ form, guildId } = arg0);
    let profile;
    if (form != null) {
      profile = form.profile;
    }
    if (null != profile) {
      value = map.get(guildId);
      if (null == value) {
        const obj2 = {};
        const merged = Object.assign(closure_7);
        obj2.profile = profile;
        const _Date2 = Date;
        obj2.lastSyncTimestamp = Date.now();
        obj2.fetchStatus = obj.FETCHED;
        const result = map.set(guildId, obj2);
      } else {
        obj = {};
        const merged1 = Object.assign(value);
        obj.profile = profile;
        const _Date = Date;
        obj.lastSyncTimestamp = Date.now();
        obj.fetchStatus = obj.FETCHED;
        const result1 = map.set(guildId, obj);
      }
    }
  },
  INVITE_RESOLVE_SUCCESS: handleInviteResolveOrCreate,
  INSTANT_INVITE_CREATE_SUCCESS: handleInviteResolveOrCreate,
  CHANNEL_CREATE: function handleCreateChannel(channel) {
    channel = channel.channel;
    let tmp = channel.type === ChannelTypes.GUILD_ANNOUNCEMENT;
    if (tmp) {
      tmp = null != channel.guild_id;
    }
    if (tmp) {
      map.delete(channel.guild_id);
      map1.delete(channel.guild_id);
    }
  },
  GUILD_SETTINGS_SET_WIDGET: function handleSetWidget(guildId) {
    guildId = guildId.guildId;
    if (tmp) {
      map.delete(guildId);
      map1.delete(guildId);
    }
    tmp = null != guildId && guildId.enabled;
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    guild = guild.guild;
    value = map.get(guild.id);
    if (null != value) {
      if (null != value.profile) {
        const obj3 = {};
        const merged = Object.assign(value.profile);
        ({ name: obj2.name, icon } = guild);
        if (icon == null) {
          icon = null;
        }
        obj3.icon = icon;
        let str = guild.description;
        if (str == null) {
          str = "";
        }
        obj3.description = str;
        let discovery_splash = guild.discovery_splash;
        if (discovery_splash == null) {
          discovery_splash = null;
        }
        obj3.customBanner = discovery_splash;
        const obj5 = {};
        const merged1 = Object.assign(value);
        obj5.profile = obj3;
        const result = map.set(guild.id, obj5);
      }
    }
    return false;
  },
  GUILD_PROFILE_UPDATE_VISIBILITY: handleUpdateStart,
  GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function handleUpdateVisibilitySuccess(guildId) {
    guildId = guildId.guildId;
    value = map.get(guildId);
    let profile;
    if (value != null) {
      profile = value.profile;
    }
    if (tmp3) {
      const obj2 = {};
      const merged = Object.assign(value);
      obj2.isUpdating = false;
      const obj3 = {};
      const merged1 = Object.assign(profile);
      obj3.visibility = guildId.visibility;
      obj2.profile = obj3;
      const result = map.set(guildId, obj2);
    }
    tmp3 = null != value && null != profile;
  },
  GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: handleUpdateFailure
});
let result = size.fileFinishedImporting("modules/guild_profile/GuildProfileStore.tsx");

export default guildProfileStore;
export { GuildProfileFetchStatus };