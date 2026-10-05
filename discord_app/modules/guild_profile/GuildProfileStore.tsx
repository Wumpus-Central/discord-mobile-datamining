// === Module 9227: GuildProfileStore ===

// Module 9227 (GuildProfileStore)
import get_initializedDefault from "get initialized" /* 504 */;
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import GuildProfileBuilders from "GuildProfileBuilders" /* 5938 */;
import size from "module_2" /* 2 */;

let obj, set, set2;

function handleUpdateStart(guildId) {
  guildId = guildId.guildId;
  const value = map.get(guildId);
  if (null == value) {
    const obj2 = { isUpdating: true };
    set2 = map.set;
    const merged = Object.assign(closure_7);
    set2(guildId, obj2);
  } else {
    obj = { isUpdating: true };
    set = map.set;
    const merged1 = Object.assign(value);
    const result = set(guildId, obj);
  }
}
function handleUpdateFailure(arg0) {
  let error;
  let guildId;
  ({ guildId, error } = arg0);
  const value = map.get(guildId);
  if (null == value) {
    const obj2 = { error };
    set2 = map.set;
    const merged = Object.assign(closure_7);
    set2(guildId, obj2);
  } else {
    obj = { error, isUpdating: false };
    set = map.set;
    const merged1 = Object.assign(value);
    const result = set(guildId, obj);
  }
}
function handleInviteResolveOrCreate(invite) {
  const profile = invite.invite.profile;
  if (null != profile) {
    const value = map.get(profile.id);
    const obj3 = GuildProfileBuilders;
    const guildProfileFromServer = obj3.buildGuildProfileFromServer(profile);
    if (null == value) {
      const id2 = profile.id;
      const obj2 = { profile: guildProfileFromServer, lastSyncTimestamp: Date.now(), fetchStatus: obj.FETCHED };
      set2 = map.set;
      const merged = Object.assign(closure_7);
      const _Date2 = Date;
      set2(id2, obj2);
    } else {
      obj = { profile: guildProfileFromServer, lastSyncTimestamp: Date.now(), fetchStatus: obj.FETCHED };
      const id = profile.id;
      set = map.set;
      const merged1 = Object.assign(value);
      const _Date = Date;
      const result = set(id, obj);
    }
  }
}
const ChannelTypes = Constants.ChannelTypes;
const GuildProfileFetchStatus = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
const map = new Map();
const map1 = new Map();
let closure_7 = { profile: null, lastSyncTimestamp: null, fetchStatus: GuildProfileFetchStatus.NOT_FETCHED, isUpdating: false, error: null, nextFetchAllowedAt: null };
const Store = get_initializedDefault.Store;
class GuildProfileStore extends Store {
  getProfile(arg0) {
    let tmp = null;
    if (null != arg0) {
      const value = map.get(arg0);
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
  }
  getFetchStatus(guildId) {
    let NOT_FETCHED;
    if (null == guildId) {
      NOT_FETCHED = obj.NOT_FETCHED;
    } else {
      const value = map.get(guildId);
      NOT_FETCHED = undefined;
      if (value != null) {
        NOT_FETCHED = value.fetchStatus;
      }
      if (NOT_FETCHED == null) {
        NOT_FETCHED = obj.NOT_FETCHED;
      }
    }
    return NOT_FETCHED;
  }
  getLastSyncTimestamp(guildId) {
    let tmp = null;
    if (null != guildId) {
      const value = map.get(guildId);
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
  }
  getNextFetchAllowedAt(guildId) {
    let tmp = null;
    if (null != guildId) {
      const value = map.get(guildId);
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
  }
  getIsUpdating(guildId) {
    let tmp = null != guildId;
    if (tmp) {
      const value = map.get(guildId);
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
  }
  getErrorCode(guildId) {
    let tmp = null;
    if (null != guildId) {
      const value = map.get(guildId);
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
  }
}
const prototype = GuildProfileStore.prototype;
GuildProfileStore.displayName = "GuildProfileStore";
let obj2 = {
  GUILD_PROFILE_FETCH: function handleFetchStart(guildId) {
    guildId = guildId.guildId;
    const value = map.get(guildId);
    if (null == value) {
      const obj2 = { fetchStatus: obj.FETCHING };
      set2 = map.set;
      const merged = Object.assign(closure_7);
      set2(guildId, obj2);
    } else {
      obj = { fetchStatus: obj.FETCHING };
      set = map.set;
      const merged1 = Object.assign(value);
      const result = set(guildId, obj);
    }
  },
  GUILD_PROFILE_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let guildId;
    let profile;
    ({ guildId, profile } = arg0);
    const value = map1.get(guildId);
    if (value != null) {
      value.succeed();
    }
    map1.delete(guildId);
    const value2 = map.get(guildId);
    if (null == value2) {
      const obj2 = { profile, lastSyncTimestamp: Date.now(), fetchStatus: map1.FETCHED };
      set2 = map.set;
      const merged = Object.assign(closure_7);
      const _Date2 = Date;
      set2(guildId, obj2);
    } else {
      const obj3 = { profile, lastSyncTimestamp: Date.now(), fetchStatus: map1.FETCHED, error: null, nextFetchAllowedAt: null };
      set = map.set;
      const merged1 = Object.assign(value2);
      const _Date = Date;
      const result = set(guildId, obj3);
    }
  },
  GUILD_PROFILE_FETCH_FAILURE: function handleFetchFailure(arg0) {
    let error;
    let guildId;
    ({ guildId, error } = arg0);
    let value = map1.get(guildId);
    if (null == value) {
      const self = this;
      const self2 = this;
      const tmp3 = new BackoffDefault(5000, 300000);
      const result = map1.set(guildId, tmp3);
      value = tmp3;
    }
    const failResult = value.fail();
    const sum = Date.now() + failResult;
    const value2 = map.get(guildId);
    if (null == value2) {
      const obj2 = { error, fetchStatus: map1.FETCHED, nextFetchAllowedAt: sum };
      set2 = map.set;
      const merged = Object.assign(closure_7);
      set2(guildId, obj2);
    } else {
      const obj3 = { error, fetchStatus: map1.FETCHED, nextFetchAllowedAt: sum };
      set = map.set;
      const merged1 = Object.assign(value2);
      const result1 = set(guildId, obj3);
    }
  },
  GUILD_PROFILE_UPDATE: handleUpdateStart,
  GUILD_PROFILE_UPDATE_SUCCESS: function handleUpdateSuccess(arg0) {
    let guildId;
    let profile;
    ({ guildId, profile } = arg0);
    const value = map.get(guildId);
    if (null == value) {
      const obj2 = { profile };
      set2 = map.set;
      const merged = Object.assign(closure_7);
      set2(guildId, obj2);
    } else {
      obj = { profile, isUpdating: false };
      set = map.set;
      const merged1 = Object.assign(value);
      const result = set(guildId, obj);
    }
  },
  GUILD_PROFILE_UPDATE_FAILURE: handleUpdateFailure,
  MEMBER_VERIFICATION_FORM_UPDATE: function handleMemberVerificationFormFetch(arg0) {
    let form;
    let guildId;
    ({ form, guildId } = arg0);
    let profile;
    if (form != null) {
      profile = form.profile;
    }
    if (null != profile) {
      const value = map.get(guildId);
      if (null == value) {
        const obj2 = { profile, lastSyncTimestamp: Date.now(), fetchStatus: obj.FETCHED };
        set2 = map.set;
        const merged = Object.assign(closure_7);
        const _Date2 = Date;
        set2(guildId, obj2);
      } else {
        obj = { profile, lastSyncTimestamp: Date.now(), fetchStatus: obj.FETCHED };
        set = map.set;
        const merged1 = Object.assign(value);
        const _Date = Date;
        const result = set(guildId, obj);
      }
    }
  },
  INVITE_RESOLVE_SUCCESS: handleInviteResolveOrCreate,
  INSTANT_INVITE_CREATE_SUCCESS: handleInviteResolveOrCreate,
  CHANNEL_CREATE: function handleCreateChannel(channel) {
    channel = channel.channel;
    const tmp = channel.type === ChannelTypes.GUILD_ANNOUNCEMENT && null != channel.guild_id;
    if (tmp) {
      map.delete(channel.guild_id);
      map1.delete(channel.guild_id);
    }
  },
  GUILD_SETTINGS_SET_WIDGET: function handleSetWidget(guildId) {
    guildId = guildId.guildId;
    const tmp = null != guildId && guildId.enabled;
    if (tmp) {
      map.delete(guildId);
      map1.delete(guildId);
    }
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    let discovery_splash;
    let icon;
    let str;
    guild = guild.guild;
    const value = map.get(guild.id);
    if (null != value) {
      if (null != value.profile) {
        const profile = { icon, description: str, customBanner: discovery_splash };
        const merged = Object.assign(value.profile);
        ({ name: obj.name, icon } = guild);
        if (icon == null) {
          icon = null;
        }
        str = guild.description;
        if (str == null) {
          str = "";
        }
        discovery_splash = guild.discovery_splash;
        if (discovery_splash == null) {
          discovery_splash = null;
        }
        const id = guild.id;
        const obj2 = { profile };
        set = map.set;
        const merged1 = Object.assign(value);
        const result = set(id, obj2);
      }
    }
    return false;
  },
  GUILD_PROFILE_UPDATE_VISIBILITY: handleUpdateStart,
  GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function handleUpdateVisibilitySuccess(guildId) {
    let obj2;
    guildId = guildId.guildId;
    const visibility = guildId.visibility;
    const value = map.get(guildId);
    let profile;
    if (value != null) {
      profile = value.profile;
    }
    const tmp4 = null != value && null != profile;
    if (tmp4) {
      obj = { isUpdating: false, profile: obj2 };
      set = map.set;
      const merged = Object.assign(value);
      obj2 = { visibility };
      const merged1 = Object.assign(profile);
      const result = set(guildId, obj);
    }
  },
  GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: handleUpdateFailure
};
const guildProfileStore = new GuildProfileStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/guild_profile/GuildProfileStore.tsx");

export default guildProfileStore;
export { GuildProfileFetchStatus };