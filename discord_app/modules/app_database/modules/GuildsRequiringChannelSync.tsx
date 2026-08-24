// discord_app/modules/app_database/modules/GuildsRequiringChannelSync.tsx
import set2 from "../../../../_runtime/00002_set.js";
import timestampDefault from "../../debug/Logger.tsx";
import sum from "../../../../discord_common/js/shared/Constants.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import set3 from "../../channel/ChannelConstants.tsx";
import itemsDefault from "../DatabaseDaos.tsx";
import createChannelRecord from "../../../records/ChannelRecord.tsx";
import closure_6 from "../../../stores/AuthenticationStore.tsx";
import closure_7 from "../../../stores/ChannelStore.tsx";
import closure_8 from "../../../stores/GuildMemberStore.tsx";
import closure_9 from "../../../stores/GuildRoleStore.tsx";
import closure_10 from "../../../stores/GuildStore.tsx";
import closure_11 from "../../../stores/PermissionStore.tsx";
import ME from "../../../Constants.tsx";
import importAllResult from "../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";

let obj = require;
({ createChannelRecordFromServer: c4, ChannelRecordBase: c5 } = createChannelRecord);
({ AnalyticEvents: closure_12, BasicPermissions: map1 } = ME);
const ChannelFlags = set3.ChannelFlags;
const Permissions = sum.Permissions;
let closure_15 = importAllResult.combine(Permissions.VIEW_CHANNEL, Permissions.ADMINISTRATOR);
let closure_16 = new timestampDefault("GuildsRequiringChannelSync");
let closure_17 = { NewGuild: "new_guild", OwnershipChange: "ownership_change", RolePermissions: "role_permissions", RoleSubscriptionTags: "role_subscription_tags", MemberRoles: "member_roles", ChannelVisibleParentHidden: "channel_visible_parent_hidden", Unknown: "unknown" };
let closure_18 = { ConnectionOpen: "connection_open", GuildCreate: "guild_create", BackgroundSync: "background_sync" };
class GuildsRequiringChannelSync {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.actions = {
      BACKGROUND_SYNC(arg0, arg1) {
            return obj.handleBackgroundSync(arg0, arg1);
          },
      CONNECTION_OPEN(arg0, arg1) {
            return obj.handleConnectionOpen(arg0, arg1);
          },
      GUILD_CREATE(arg0, arg1) {
            return obj.handleGuildCreate(arg0, arg1);
          },
      CHANNEL_SYNC(arg0, arg1) {
            return obj.handleChannelSync(arg0, arg1);
          },
      UNMARK_RESYNC_GUILDS(guildIds, database) {
            return obj.handleUnmarkResyncGuilds(guildIds, database);
          }
    };
    return obj;
  }
}
const prototype = GuildsRequiringChannelSync.prototype;
prototype["getAll"] = function getAll() {
  const result = itemsDefault.guildsRequiringChannelSync();
  if (null == result) {
    let resolved = Promise.resolve([]);
  } else {
    resolved = result.getMany();
  }
  return resolved;
};
prototype["handleConnectionOpen"] = function handleConnectionOpen(arg0, arg1) {
  const self = this;
  for (const item10008 of tmp) {
    let tmp2 = closure_18;
    let handleGuildResult = self.handleGuild(item10008, arg1, closure_18.ConnectionOpen);
    continue;
  }
};
prototype["handleGuildCreate"] = function handleGuildCreate(guild) {
  guild = guild.guild;
  if (true !== guild.unavailable) {
    const self = this;
    this.handleGuild(guild, arg1, closure_18.GuildCreate);
  }
};
prototype["handleBackgroundSync"] = function handleBackgroundSync(arg0, database) {
  const self = this;
  for (const item10008 of tmp) {
    let result = self.handleBackgroundSyncGuild(item10008, arg1);
    continue;
  }
};
prototype["handleUnmarkResyncGuilds"] = function handleUnmarkResyncGuilds(guildIds, database) {
  const self = this;
  guildIds = guildIds.guildIds;
  for (const item10008 of guildIds) {
    let unmarkGuildForResyncResult = self.unmarkGuildForResync(item10008, arg1);
    continue;
  }
  closure_16.verbose("Unmarked guilds " + JSON.stringify(guildIds));
};
prototype["detectRoleVisibilityChanges"] = function detectRoleVisibilityChanges(id, unsafeMutableRoles, obj, set) {
  for (const key10008 in arg2) {
    let tmp16 = key10008;
    let tmp17 = arg2[key10008];
    let tmp18 = arg1[key10008];
    let isSubscriptionRoleResult = null != tmp18;
    if (isSubscriptionRoleResult) {
      let tmp = obj;
      let tmp2 = dependencyMap;
      obj = obj(4015);
      isSubscriptionRoleResult = obj.isSubscriptionRole(tmp18);
    }
    if (isSubscriptionRoleResult) {
      let tmp4 = obj;
      let tmp5 = dependencyMap;
      let obj2 = obj(4015);
      isSubscriptionRoleResult = obj2.isSubscriptionRoleAvailableForPurchase(tmp18);
    }
    let tmp7 = dependencyMap;
    let tmp6 = obj;
    let obj3 = obj(4015);
    let isSubscriptionRoleResult1 = obj3.isSubscriptionRole(tmp17);
    if (isSubscriptionRoleResult1) {
      let tmp6Result = tmp6(4015);
      isSubscriptionRoleResult1 = tmp6Result.isSubscriptionRoleAvailableForPurchase(tmp17);
    }
    if (!isSubscriptionRoleResult) {
      if (isSubscriptionRoleResult1) {
        let tmp9 = closure_17;
        return closure_17.RoleSubscriptionTags;
      }
    }
    if (key10008 === arg0) {
      if (null == tmp18) {
        let tmp15 = closure_17;
        return closure_17.RolePermissions;
      } else {
        let tmp10 = importAll;
        let arr = importAllResult;
        let tmp11 = closure_15;
        let found = arr.filter(tmp18.permissions, closure_15);
        let arr2 = importAllResult;
        let found1 = arr2.filter(tmp17.permissions, closure_15);
        let obj5 = importAllResult;
        if (obj5.equals(found, found1)) {
          continue;
        } else {
          let tmp14 = closure_17;
          return closure_17.RolePermissions;
        }
      }
    }
    continue;
  }
  return null;
};
prototype["processMemberRoleIds"] = function processMemberRoleIds(arg0, roles) {
  if (arg0.length !== roles.length) {
    return { rolesAreDifferent: true, allRoleIds: null };
  } else {
    const _Set = Set;
    const set = new Set();
    const tmp18 = arg0[Symbol.iterator]();
    while (tmp18 !== undefined) {
      let addResult = set.add(tmp2);
      continue;
    }
    const iter = roles[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp9 = nextResult;
      if (set.has(nextResult)) {
        let tmp11 = nextResult;
        let addResult1 = set.add(tmp9);
        continue;
      } else {
        let tmp10 = iter;
        obj = { rolesAreDifferent: true, allRoleIds: null };
        iter.return();
        return obj;
      }
    }
    obj = { rolesAreDifferent: false, allRoleIds: null };
    obj[1] = set;
    return obj;
  }
};
prototype["userBecameGuildOwner"] = function userBecameGuildOwner(ownerId, owner_id, id) {
  let tmp = null != id;
  if (tmp) {
    let tmp3 = owner_id === id;
    if (tmp3) {
      tmp3 = ownerId !== id;
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype["handleBackgroundSyncGuild"] = function handleBackgroundSyncGuild(item10008, database) {
  obj = store3;
  let selfMember = store3.getSelfMember(item10008.id);
  if (selfMember == null) {
    selfMember = obj.getCachedSelfMember(item10008.id);
  }
  if (null != selfMember) {
    const self = this;
    if ("partial" === item10008.data_mode) {
      if (self.backgroundSyncGuildHasObfuscatedChannels(item10008)) {
        let ChannelVisibleParentHidden = closure_17.Unknown;
        obj = {};
        if (null != item10008.partial_updates.roles) {
          let roles = item10008.partial_updates.roles;
          for (const item10021 of roles) {
            obj = { id: null, permissions: null, tags: null };
            obj[0] = item10021.id;
            let tmp5 = importAll;
            let tmp6 = dependencyMap;
            let obj4 = importAllResult;
            obj[1] = obj4.deserialize(item10021.permissions);
            let tags = item10021.tags;
            if (tags == null) {
              tags = {};
            }
            obj[2] = tags;
            obj[item10021.id] = obj;
            continue;
          }
        }
        const properties = item10008.properties;
        const guild = store5.getGuild(item10008.id);
        let ownerId;
        if (guild != null) {
          ownerId = guild.ownerId;
        }
        let owner_id;
        if (properties != null) {
          owner_id = properties.owner_id;
        }
        const userBecameGuildOwnerResult = self.userBecameGuildOwner(ownerId, owner_id, store.getId());
        if (userBecameGuildOwnerResult) {
          ChannelVisibleParentHidden = closure_17.OwnershipChange;
          let flag = userBecameGuildOwnerResult;
        } else {
          const unsafeMutableRoles = store4.getUnsafeMutableRoles(item10008.id);
          roles = undefined;
          if (selfMember != null) {
            roles = selfMember.roles;
          }
          if (roles == null) {
            roles = [];
          }
          const set = new Set(roles);
          const result = self.detectRoleVisibilityChanges(item10008.id, unsafeMutableRoles, obj, set);
          flag = userBecameGuildOwnerResult;
          if (null != result) {
            flag = true;
            ChannelVisibleParentHidden = result;
          }
        }
        let result1 = !flag;
        if (!flag) {
          let channels = item10008.partial_updates.channels;
          if (channels == null) {
            channels = [];
          }
          let deleted_channel_ids = item10008.partial_updates.deleted_channel_ids;
          if (deleted_channel_ids == null) {
            deleted_channel_ids = [];
          }
          result1 = self.hasNewlyVisibleChannelWithHiddenParent(item10008.id, channels, deleted_channel_ids);
        }
        if (result1) {
          ChannelVisibleParentHidden = closure_17.ChannelVisibleParentHidden;
          flag = true;
        }
        if (flag) {
          self.markGuildForResync(item10008.id, database, closure_18.BackgroundSync, ChannelVisibleParentHidden);
        }
      } else {
        self.unmarkGuildForResync(item10008.id, database);
      }
    } else if ("full" === item10008.data_mode) {
      self.unmarkGuildForResync(item10008.id, database);
    }
  }
};
prototype["handleGuild"] = function handleGuild(channels, database, BackgroundSync) {
  const self = this;
  if ("full_sync" !== channels.channels.op) {
    const id = store.getId();
    const guild = store5.getGuild(channels.id);
    if (null != guild) {
      const properties = channels.properties;
      let owner_id;
      if (properties != null) {
        owner_id = properties.owner_id;
      }
      const userBecameGuildOwnerResult = self.userBecameGuildOwner(guild.ownerId, owner_id, id);
      let MemberRoles = closure_17.Unknown;
      let flag = userBecameGuildOwnerResult;
      if (userBecameGuildOwnerResult) {
        MemberRoles = tmp2.OwnershipChange;
        flag = userBecameGuildOwnerResult;
      }
    } else {
      MemberRoles = tmp2.NewGuild;
      flag = true;
    }
    let tmp10 = null;
    let tmp11 = MemberRoles;
    if (!flag) {
      obj = store3;
      let selfMember = store3.getSelfMember(channels.id);
      if (selfMember == null) {
        selfMember = obj.getCachedSelfMember(channels.id);
      }
      const members = channels.members;
      const found = members.find((user) => user.user.id === id);
      let roles;
      if (found != null) {
        roles = found.roles;
      }
      if (roles == null) {
        roles = [];
      }
      ({ rolesAreDifferent, allRoleIds } = self.processMemberRoleIds(null != selfMember ? selfMember.roles : [], roles));
      if (rolesAreDifferent) {
        MemberRoles = tmp2.MemberRoles;
      }
      tmp10 = null;
      tmp11 = MemberRoles;
      flag = rolesAreDifferent;
      if (null != allRoleIds) {
        tmp10 = allRoleIds;
        tmp11 = MemberRoles;
        flag = rolesAreDifferent;
      }
      const processMemberRoleIdsResult = self.processMemberRoleIds(null != selfMember ? selfMember.roles : [], roles);
      const tmp14 = null != selfMember ? selfMember.roles : [];
    }
    let ChannelVisibleParentHidden = tmp11;
    let flag2 = flag;
    if (!flag) {
      ChannelVisibleParentHidden = tmp11;
      flag2 = flag;
      if (null != tmp10) {
        const unsafeMutableRoles = store4.getUnsafeMutableRoles(channels.id);
        if ("full_sync" === channels.roles.op) {
          let writes = channels.roles.items;
        } else {
          writes = channels.roles.writes;
        }
        obj = {};
        writes[Symbol.iterator]();
      }
    }
    while (true) {
      let result = !flag2;
      if (flag2) {
        break;
      } else {
        result = self.hasNewlyVisibleChannelWithHiddenParent(channels.id, channels.channels.writes, channels.channels.deletes);
        break;
      }
      if (result) {
        let tmp19 = closure_17;
        ChannelVisibleParentHidden = closure_17.ChannelVisibleParentHidden;
        flag2 = true;
      }
      if (flag2) {
        if (self.gatewayGuildHasObfuscatedChannels(channels)) {
          let tmp21 = BackgroundSync;
          let tmp22 = self;
          let tmp23 = database;
          let tmp24 = ChannelVisibleParentHidden;
          let markGuildForResyncResult = self.markGuildForResync(channels.id, database, BackgroundSync, ChannelVisibleParentHidden);
        } else {
          let unmarkGuildForResyncResult = self.unmarkGuildForResync(channels.id, database);
        }
      }
    }
  } else {
    self.unmarkGuildForResync(channels.id, database);
  }
};
prototype["handleChannelSync"] = function handleChannelSync(integrity_check, database) {
  if (!integrity_check.integrity_check) {
    const self = this;
    this.unmarkGuildForResync(tmp, database);
  }
};
prototype["markGuildForResync"] = function markGuildForResync(id, database, BackgroundSync, ChannelVisibleParentHidden) {
  obj = obj(514);
  const v4Result = obj.v4();
  obj = { guild_id: id, request_id: v4Result, trigger: BackgroundSync, change_type: ChannelVisibleParentHidden };
  expandEventPropertiesDefault.track(constants.GUILD_CHANNEL_RESYNC_REQUESTED, obj);
  const obj2 = expandEventPropertiesDefault;
  const result = itemsDefault.guildsRequiringChannelSyncTransaction(database);
  obj = { id, requestId: v4Result };
  result.put(obj);
};
prototype["unmarkGuildForResync"] = function unmarkGuildForResync(id, database) {
  const result = itemsDefault.guildsRequiringChannelSyncTransaction(database);
  result.delete(id);
};
prototype["hasNewlyVisibleChannelWithHiddenParent"] = function hasNewlyVisibleChannelWithHiddenParent(id, channels, deleted_channel_ids) {
  let items = deleted_channel_ids;
  if (deleted_channel_ids === undefined) {
    items = [];
  }
  if (0 === channels.length) {
    return false;
  } else {
    const mutableBasicGuildChannelsForGuild = store2.getMutableBasicGuildChannelsForGuild(id);
    const _Set = Set;
    const set = new Set(items);
    const _Map = Map;
    const map = new Map();
    const iter2 = channels[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let tmp5 = closure_5;
      if (nextResult instanceof closure_5) {
        let tmp8 = nextResult;
      } else {
        let tmp6 = callback;
        let tmp7 = nextResult;
        tmp8 = callback(tmp4, id);
      }
      let result = map.set(tmp8.id, tmp8);
      continue;
    }
    const values = map.values();
    const iter = values[Symbol.iterator]();
    const nextResult1 = iter.next();
    while (iter !== undefined) {
      let obj2 = nextResult1;
      if (!nextResult1.isCategory()) {
        let tmp15 = nextResult1;
        let tmp16 = mutableBasicGuildChannelsForGuild[obj2.id];
        let tmp17 = tmp16;
        let canBasicChannelResult = null != tmp16;
        if (canBasicChannelResult) {
          let tmp19 = closure_11;
          let tmp20 = constants2;
          let tmp21 = tmp16;
          canBasicChannelResult = closure_11.canBasicChannel(constants2.VIEW_CHANNEL, tmp17);
        }
        let tmp22 = nextResult1;
        let tmp23 = !obj2.isObfuscated();
        if (canBasicChannelResult) {
          let tmp24 = tmp16;
          if (null != tmp17) {
            let tmp25 = tmp16;
            let tmp26 = nextResult1;
          }
        }
        let tmp27 = tmp23;
        if (tmp23) {
          let tmp28 = nextResult1;
          let parent_id = obj2.parent_id;
          let tmp29 = parent_id;
          if (null != parent_id) {
            let tmp30 = parent_id;
            if (!set.has(tmp29)) {
              let tmp31 = parent_id;
              if (null == map.get(tmp29)) {
                let tmp32 = parent_id;
                let tmp33 = mutableBasicGuildChannelsForGuild[tmp29];
                if (null != tmp33) {
                  let tmp35 = closure_11;
                  let tmp36 = constants2;
                  let tmp37 = tmp33;
                }
                let tmp38 = iter;
                iter.return();
                let flag = true;
                return true;
              }
            }
          }
        }
      }
      continue;
    }
    return false;
  }
};
prototype["gatewayGuildHasObfuscatedChannels"] = function gatewayGuildHasObfuscatedChannels(channels) {
  if ("full_sync" === channels.channels.op) {
    let writes = channels.channels.items;
    let items = [];
  } else {
    writes = channels.channels.writes;
    items = channels.channels.deletes;
  }
  const self = this;
  return this.guildHasStoredObfuscatedChannels(channels.id, items) || self.anyChannelRecordsObfuscated(writes);
};
prototype["backgroundSyncGuildHasObfuscatedChannels"] = function backgroundSyncGuildHasObfuscatedChannels(data_mode) {
  if ("partial" === data_mode.data_mode) {
    let channels = data_mode.partial_updates.channels;
    if (channels == null) {
      channels = [];
    }
    let deleted_channel_ids = data_mode.partial_updates.deleted_channel_ids;
    if (deleted_channel_ids == null) {
      deleted_channel_ids = [];
    }
    let items = deleted_channel_ids;
  } else {
    channels = data_mode.channels;
    items = [];
  }
  const self = this;
  return this.guildHasStoredObfuscatedChannels(data_mode.id, items) || self.anyChannelsObfuscated(channels);
};
prototype["guildHasStoredObfuscatedChannels"] = function guildHasStoredObfuscatedChannels(id, items) {
  if (items === undefined) {
    items = [];
  }
  const values = Object.values(store2.getMutableGuildChannelsForGuild(id));
  return this.anyChannelRecordsObfuscated(values.filter((id) => -1 === items.indexOf(id.id)));
};
prototype["anyChannelRecordsObfuscated"] = function anyChannelRecordsObfuscated(values) {
  return null != values.find((isObfuscated) => isObfuscated.isObfuscated());
};
prototype["anyChannelsObfuscated"] = function anyChannelsObfuscated(channels) {
  return null != channels.find((flags) => {
    let num = flags.flags;
    if (num == null) {
      num = 0;
    }
    return callback(table[16]).hasFlag(num, constants.OBFUSCATED);
  });
};
prototype["resetInMemoryState"] = function resetInMemoryState() {

};
obj = Object.create(GuildsRequiringChannelSync.prototype);
obj.actions = {
  BACKGROUND_SYNC(arg0, arg1) {
    return obj.handleBackgroundSync(arg0, arg1);
  },
  CONNECTION_OPEN(arg0, arg1) {
    return obj.handleConnectionOpen(arg0, arg1);
  },
  GUILD_CREATE(arg0, arg1) {
    return obj.handleGuildCreate(arg0, arg1);
  },
  CHANNEL_SYNC(arg0, arg1) {
    return obj.handleChannelSync(arg0, arg1);
  },
  UNMARK_RESYNC_GUILDS(guildIds, database) {
    return obj.handleUnmarkResyncGuilds(guildIds, database);
  }
};
let tmp4 = new timestampDefault("GuildsRequiringChannelSync");
let result = set2.fileFinishedImporting("modules/app_database/modules/GuildsRequiringChannelSync.tsx");

export default obj;