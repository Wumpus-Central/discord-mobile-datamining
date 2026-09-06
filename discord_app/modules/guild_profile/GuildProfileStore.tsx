// === Module 9065: GuildProfileStore ===

// Module 9065 (GuildProfileStore)
import initializeDefault from "initialize" /* 504 */;
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import GuildProfileBuilders from "GuildProfileBuilders" /* 5548 */;
import size from "module_2" /* 2 */;

function handleUpdateStart(guildId) {
  guildId = guildId.guildId;
  obj = map;
  value = map.get(guildId);
  if (null == value) {
    obj = {};
    const merged = Object.assign(closure_7);
    obj.isUpdating = true;
    const result = obj.set(guildId, obj);
  } else {
    obj = {};
    const merged1 = Object.assign(value);
    obj.isUpdating = true;
    const result1 = obj.set(guildId, obj);
  }
}
function handleUpdateFailure(arg0) {
  ({ guildId, error } = arg0);
  obj = map;
  value = map.get(guildId);
  if (null == value) {
    obj = {};
    const merged = Object.assign(closure_7);
    obj.error = error;
    const result = obj.set(guildId, obj);
  } else {
    obj = {};
    const merged1 = Object.assign(value);
    obj.error = error;
    obj.isUpdating = false;
    const result1 = obj.set(guildId, obj);
  }
}
function handleInviteResolveOrCreate(invite) {
  const profile = invite.invite.profile;
  if (null != profile) {
    value = map.get(profile.id);
    const guildProfileFromServer = GuildProfileBuilders.buildGuildProfileFromServer(profile);
    if (null == value) {
      obj = {};
      const merged = Object.assign(closure_7);
      obj.profile = guildProfileFromServer;
      const _Date2 = Date;
      obj.lastSyncTimestamp = Date.now();
      obj.fetchStatus = obj.FETCHED;
      const result = map.set(profile.id, obj);
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
let GuildProfileFetchStatus = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
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
GuildProfileFetchStatus = {
  GUILD_PROFILE_FETCH: function handleFetchStart(guildId) {
    guildId = guildId.guildId;
    obj = map;
    value = map.get(guildId);
    if (null == value) {
      obj = {};
      const merged = Object.assign(closure_7);
      obj.fetchStatus = obj.FETCHING;
      const result = obj.set(guildId, obj);
    } else {
      obj = {};
      const merged1 = Object.assign(value);
      obj.fetchStatus = obj.FETCHING;
      const result1 = obj.set(guildId, obj);
    }
  },
  GUILD_PROFILE_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ guildId, profile } = arg0);
    obj = map1;
    value = map1.get(guildId);
    if (value != null) {
      value.succeed();
    }
    obj.delete(guildId);
    value = map.get(guildId);
    if (null == value) {
      obj = {};
      const merged = Object.assign(closure_7);
      obj.profile = profile;
      const _Date2 = Date;
      obj.lastSyncTimestamp = Date.now();
      obj.fetchStatus = obj.FETCHED;
      const result = map.set(guildId, obj);
    } else {
      obj = {};
      const merged1 = Object.assign(value);
      obj.profile = profile;
      const _Date = Date;
      obj.lastSyncTimestamp = Date.now();
      obj.fetchStatus = obj.FETCHED;
      obj.error = null;
      obj.nextFetchAllowedAt = null;
      const result1 = map.set(guildId, obj);
    }
  },
  GUILD_PROFILE_FETCH_FAILURE: function handleFetchFailure(arg0) {
    ({ guildId, error } = arg0);
    obj = map1;
    value = map1.get(guildId);
    if (null == value) {
      const tmp5 = new BackoffDefault(5000, 300000);
      const result = obj.set(guildId, tmp5);
      value = tmp5;
    }
    const sum = Date.now() + value.fail();
    value = map.get(guildId);
    if (null == value) {
      obj = {};
      const merged = Object.assign(closure_7);
      obj.error = error;
      obj.fetchStatus = obj.FETCHED;
      obj.nextFetchAllowedAt = sum;
      const result1 = map.set(guildId, obj);
    } else {
      obj = {};
      const merged1 = Object.assign(value);
      obj.error = error;
      obj.fetchStatus = obj.FETCHED;
      obj.nextFetchAllowedAt = sum;
      const result2 = map.set(guildId, obj);
    }
    const failResult = value.fail();
  },
  GUILD_PROFILE_UPDATE: handleUpdateStart,
  GUILD_PROFILE_UPDATE_SUCCESS: function handleUpdateSuccess(arg0) {
    ({ guildId, profile } = arg0);
    obj = map;
    value = map.get(guildId);
    if (null == value) {
      obj = {};
      const merged = Object.assign(closure_7);
      obj.profile = profile;
      const result = obj.set(guildId, obj);
    } else {
      obj = {};
      const merged1 = Object.assign(value);
      obj.profile = profile;
      obj.isUpdating = false;
      const result1 = obj.set(guildId, obj);
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
        obj = {};
        const merged = Object.assign(closure_7);
        obj.profile = profile;
        const _Date2 = Date;
        obj.lastSyncTimestamp = Date.now();
        obj.fetchStatus = obj.FETCHED;
        const result = map.set(guildId, obj);
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
    let profile = map;
    value = map.get(guild.id);
    if (null != value) {
      if (null != value.profile) {
        profile = {};
        const merged = Object.assign(value.profile);
        ({ name: obj2.name, icon } = guild);
        if (icon == null) {
          icon = null;
        }
        profile.icon = icon;
        let str = guild.description;
        if (str == null) {
          str = "";
        }
        profile.description = str;
        let discovery_splash = guild.discovery_splash;
        if (discovery_splash == null) {
          discovery_splash = null;
        }
        profile.customBanner = discovery_splash;
        profile = {};
        const merged1 = Object.assign(value);
        profile.profile = profile;
        const result = profile.set(guild.id, profile);
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
      profile = {};
      const merged = Object.assign(value);
      profile.isUpdating = false;
      profile = {};
      const merged1 = Object.assign(profile);
      profile.visibility = guildId.visibility;
      profile.profile = profile;
      const result = profile.set(guildId, profile);
    }
  },
  GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: handleUpdateFailure
};
const guildProfileStore = new GuildProfileStore(DispatcherDefault, GuildProfileFetchStatus);
let result = size.fileFinishedImporting("modules/guild_profile/GuildProfileStore.tsx");

export default guildProfileStore;
export { GuildProfileFetchStatus };