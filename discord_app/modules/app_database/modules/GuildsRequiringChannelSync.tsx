// === Module 7149: GuildsRequiringChannelSync ===

// Module 7149 (GuildsRequiringChannelSync)
import LoggerDefault from "Logger" /* 3 */;
import Constants2 from "Constants" /* 1096 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import v1 from "v1" /* 1266 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 2078 */;
import PremiumRoleUtils from "PremiumRoleUtils" /* 4505 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import Constants from "Constants" /* 1085 */;
import BigFlagUtils from "BigFlagUtils" /* 1097 */;
import size from "module_2" /* 2 */;

let map, set;

let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
({ createChannelRecordFromServer: closure_4, ChannelRecordBase: hasOwnProperty } = ChannelRecord);
({ AnalyticEvents: closure_12, BasicPermissions: map1 } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
const Permissions = Constants2.Permissions;
let closure_15 = BigFlagUtils.combine(Permissions.VIEW_CHANNEL, Permissions.ADMINISTRATOR);
const tmp4 = new LoggerDefault("GuildsRequiringChannelSync");
const authStore3 = tmp4;
let closure_17 = { NewGuild: "new_guild", OwnershipChange: "ownership_change", RolePermissions: "role_permissions", RoleSubscriptionTags: "role_subscription_tags", MemberRoles: "member_roles", ChannelVisibleParentHidden: "channel_visible_parent_hidden", Unknown: "unknown" };
const authStore4 = { ConnectionOpen: "connection_open", GuildCreate: "guild_create", BackgroundSync: "background_sync" };
class GuildsRequiringChannelSync {
  constructor() {
    const obj = Object.create(new.target.prototype);
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
  getAll() {
    let resolved;
    const obj = DatabaseDaosDefault;
    const result = obj.guildsRequiringChannelSync();
    if (null == result) {
      resolved = Promise.resolve([]);
    } else {
      resolved = result.getMany();
    }
    return resolved;
  }
  handleConnectionOpen(guilds, arg1) {
    const self = this;
    guilds = guilds.guilds;
    for (const item10008 of guilds) {
      let handleGuildResult = self.handleGuild(item10008, arg1, closure_18.ConnectionOpen);
      continue;
    }
  }
  handleGuildCreate(guild, arg1) {
    guild = guild.guild;
    if (true !== guild.unavailable) {
      const self = this;
      this.handleGuild(guild, arg1, closure_18.GuildCreate);
    }
  }
  handleBackgroundSync(guilds, database) {
    const self = this;
    guilds = guilds.guilds;
    for (const item10008 of guilds) {
      let result = self.handleBackgroundSyncGuild(item10008, database);
      continue;
    }
  }
  handleUnmarkResyncGuilds(guildIds, database) {
    const self = this;
    guildIds = guildIds.guildIds;
    for (const item10008 of guildIds) {
      let unmarkGuildForResyncResult = self.unmarkGuildForResync(item10008, database);
      continue;
    }
    closure_16.verbose("Unmarked guilds " + JSON.stringify(guildIds));
  }
  detectRoleVisibilityChanges(id, unsafeMutableRoles, role, _Set1) {
    for (const key10008 in role) {
      let tmp17 = role[key10008];
      let tmp18 = unsafeMutableRoles[key10008];
      let isSubscriptionRoleResult = null != tmp18;
      if (isSubscriptionRoleResult) {
        let obj = PremiumRoleUtils;
        isSubscriptionRoleResult = obj.isSubscriptionRole(tmp18);
      }
      if (isSubscriptionRoleResult) {
        let obj2 = PremiumRoleUtils;
        isSubscriptionRoleResult = obj2.isSubscriptionRoleAvailableForPurchase(tmp18);
      }
      let obj3 = PremiumRoleUtils;
      let isSubscriptionRoleResult1 = obj3.isSubscriptionRole(tmp17);
      if (isSubscriptionRoleResult1) {
        let tmp6Result = PremiumRoleUtils;
        isSubscriptionRoleResult1 = tmp6Result.isSubscriptionRoleAvailableForPurchase(tmp17);
      }
      if (!isSubscriptionRoleResult) {
        if (isSubscriptionRoleResult1) {
          return closure_17.RoleSubscriptionTags;
        }
      }
      if (key10008 === id) {
        if (null == tmp18) {
          return closure_17.RolePermissions;
        } else {
          let arr = BigFlagUtils;
          let found = arr.filter(tmp18.permissions, closure_15);
          let arr2 = BigFlagUtils;
          let found1 = arr2.filter(tmp17.permissions, closure_15);
          let obj5 = BigFlagUtils;
          if (obj5.equals(found, found1)) {
            continue;
          } else {
            return closure_17.RolePermissions;
          }
        }
      }
      continue;
    }
    return null;
  }
  processMemberRoleIds(arg0, roles) {
    if (arg0.length !== roles.length) {
      return { rolesAreDifferent: true, allRoleIds: null };
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      const tmp16 = arg0[Symbol.iterator]();
      while (tmp16 !== undefined) {
        let addResult = set.add(tmp2);
        continue;
      }
      const iter = roles[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp9 = nextResult;
        if (set.has(nextResult)) {
          let addResult1 = set.add(tmp9);
          continue;
        } else {
          let obj = { rolesAreDifferent: true, allRoleIds: null };
          iter.return();
          return obj;
        }
      }
      return { rolesAreDifferent: false, allRoleIds: set };
    }
  }
  userBecameGuildOwner(ownerId, owner_id, id) {
    let tmp = null != id;
    if (tmp) {
      tmp = owner_id === id && ownerId !== id;
      const tmp3 = owner_id === id && ownerId !== id;
    }
    return tmp;
  }
  handleBackgroundSyncGuild(item10008, database) {
    let selfMember = GuildMemberStore.getSelfMember(item10008.id);
    if (selfMember == null) {
      selfMember = GuildMemberStore.getCachedSelfMember(item10008.id);
    }
    if (null != selfMember) {
      const self3 = this;
      if ("partial" === item10008.data_mode) {
        if (self3.backgroundSyncGuildHasObfuscatedChannels(item10008)) {
          let flag;
          let ChannelVisibleParentHidden = closure_17.Unknown;
          const obj2 = {};
          if (null != item10008.partial_updates.roles) {
            const roles = item10008.partial_updates.roles;
            for (const item10021 of roles) {
              let obj3 = { id: item10021.id, permissions: deserializer.deserialize(item10021.permissions), tags };
              let id = item10021.id;
              let deserializer = BigFlagUtils;
              let tags = item10021.tags ?? {};
              obj2[id] = obj3;
              continue;
            }
          }
          const properties = item10008.properties;
          const userBecameGuildOwner = self3.userBecameGuildOwner;
          const guild = GuildStore.getGuild(item10008.id);
          let ownerId;
          if (guild != null) {
            ownerId = guild.ownerId;
          }
          let owner_id;
          if (properties != null) {
            owner_id = properties.owner_id;
          }
          const userBecameGuildOwnerResult = userBecameGuildOwner(ownerId, owner_id, AuthenticationStore.getId());
          if (userBecameGuildOwnerResult) {
            ChannelVisibleParentHidden = closure_17.OwnershipChange;
            flag = userBecameGuildOwnerResult;
          } else {
            const unsafeMutableRoles = GuildRoleStore.getUnsafeMutableRoles(item10008.id);
            let roles1;
            const _Set = Set;
            if (selfMember != null) {
              roles1 = selfMember.roles;
            }
            if (roles1 == null) {
              roles1 = [];
            }
            const self = this;
            const self2 = this;
            const _Set1 = new _Set(roles1);
            const result = self3.detectRoleVisibilityChanges(item10008.id, unsafeMutableRoles, obj2, _Set1);
            flag = userBecameGuildOwnerResult;
            if (null != result) {
              flag = true;
              ChannelVisibleParentHidden = result;
            }
          }
          let result1 = !flag;
          if (result1) {
            let channels = item10008.partial_updates.channels;
            const hasNewlyVisibleChannelWithHiddenParent = self3.hasNewlyVisibleChannelWithHiddenParent;
            const id2 = item10008.id;
            if (channels == null) {
              channels = [];
            }
            let deleted_channel_ids = item10008.partial_updates.deleted_channel_ids;
            if (deleted_channel_ids == null) {
              deleted_channel_ids = [];
            }
            result1 = hasNewlyVisibleChannelWithHiddenParent(id2, channels, deleted_channel_ids);
          }
          if (result1) {
            ChannelVisibleParentHidden = closure_17.ChannelVisibleParentHidden;
            flag = true;
          }
          if (flag) {
            self3.markGuildForResync(item10008.id, database, closure_18.BackgroundSync, ChannelVisibleParentHidden);
          }
        } else {
          self3.unmarkGuildForResync(item10008.id, database);
        }
      } else if ("full" === item10008.data_mode) {
        self3.unmarkGuildForResync(item10008.id, database);
      }
    }
  }
  handleGuild(channels, database, BackgroundSync) {
    let allRoleIds;
    let rolesAreDifferent;
    const self = this;
    if ("full_sync" !== channels.channels.op) {
      let MemberRoles;
      let flag;
      const Unknown = closure_17.Unknown;
      const id1 = AuthenticationStore.getId();
      const guild = GuildStore.getGuild(channels.id);
      if (null != guild) {
        const properties = channels.properties;
        let owner_id;
        const userBecameGuildOwner = self.userBecameGuildOwner;
        const ownerId = guild.ownerId;
        if (properties != null) {
          owner_id = properties.owner_id;
        }
        const userBecameGuildOwnerResult = userBecameGuildOwner(ownerId, owner_id, id1);
        MemberRoles = Unknown;
        flag = userBecameGuildOwnerResult;
        if (flag) {
          MemberRoles = closure_17.OwnershipChange;
          flag = userBecameGuildOwnerResult;
        }
      } else {
        MemberRoles = closure_17.NewGuild;
        flag = true;
      }
      let tmp10 = null;
      let tmp11 = MemberRoles;
      if (!flag) {
        let selfMember = GuildMemberStore.getSelfMember(channels.id);
        if (selfMember == null) {
          selfMember = GuildMemberStore.getCachedSelfMember(channels.id);
        }
        const members = channels.members;
        const found = members.find((user) => user.user.id === id1);
        let roles;
        const processMemberRoleIds = self.processMemberRoleIds;
        const tmp14 = null != selfMember ? selfMember.roles : [];
        if (found != null) {
          roles = found.roles;
        }
        if (roles == null) {
          roles = [];
        }
        ({ rolesAreDifferent, allRoleIds } = processMemberRoleIds(tmp14, roles));
        processMemberRoleIds(tmp14, roles);
        if (rolesAreDifferent) {
          MemberRoles = closure_17.MemberRoles;
        }
        tmp10 = null;
        tmp11 = MemberRoles;
        flag = rolesAreDifferent;
        if (null != allRoleIds) {
          tmp10 = allRoleIds;
          tmp11 = MemberRoles;
          flag = rolesAreDifferent;
        }
      }
      let ChannelVisibleParentHidden = tmp11;
      let flag2 = flag;
      if (!flag2) {
        ChannelVisibleParentHidden = tmp11;
        flag2 = flag;
        if (null != tmp10) {
          const unsafeMutableRoles = GuildRoleStore.getUnsafeMutableRoles(channels.id);
          if ("full_sync" === channels.roles.op) {
            let writes = channels.roles.items;
          } else {
            writes = channels.roles.writes;
          }
          const obj2 = {};
          for (const item10057 of writes) {
            let obj3 = { id: item10057.id, permissions: deserializer.deserialize(item10057.permissions), tags };
            let id = item10057.id;
            let deserializer = BigFlagUtils;
            let tags = item10057.tags ?? {};
            obj2[id] = obj3;
            continue;
          }
          const result = self.detectRoleVisibilityChanges(channels.id, unsafeMutableRoles, obj2, tmp10);
          ChannelVisibleParentHidden = tmp11;
          flag2 = flag;
          if (null != result) {
            flag2 = true;
            ChannelVisibleParentHidden = result;
          }
        }
      }
      const tmp25 = !flag2 && self.hasNewlyVisibleChannelWithHiddenParent(channels.id, channels.channels.writes, channels.channels.deletes);
      if (tmp25) {
        ChannelVisibleParentHidden = closure_17.ChannelVisibleParentHidden;
        flag2 = true;
      }
      if (flag2) {
        if (self.gatewayGuildHasObfuscatedChannels(channels)) {
          self.markGuildForResync(channels.id, database, BackgroundSync, ChannelVisibleParentHidden);
        } else {
          self.unmarkGuildForResync(channels.id, database);
        }
      }
    } else {
      self.unmarkGuildForResync(channels.id, database);
    }
  }
  handleChannelSync(integrity_check, database) {
    if (!integrity_check.integrity_check) {
      const self = this;
      this.unmarkGuildForResync(tmp, database);
    }
  }
  markGuildForResync(id, database, BackgroundSync, ChannelVisibleParentHidden) {
    const obj = v1;
    const v4Result = obj.v4();
    const obj2 = AnalyticsUtilsDefault;
    const obj3 = { guild_id: id, request_id: v4Result, trigger: BackgroundSync, change_type: ChannelVisibleParentHidden };
    obj2.track(constants.GUILD_CHANNEL_RESYNC_REQUESTED, obj3);
    const obj4 = DatabaseDaosDefault;
    const result = obj4.guildsRequiringChannelSyncTransaction(database);
    const obj5 = { id, requestId: v4Result };
    result.put(obj5);
  }
  unmarkGuildForResync(id, database) {
    const obj = DatabaseDaosDefault;
    const result = obj.guildsRequiringChannelSyncTransaction(database);
    result.delete(id);
  }
  hasNewlyVisibleChannelWithHiddenParent(id, channels) {
    let items = deleted_channel_ids;
    if (deleted_channel_ids === undefined) {
      items = [];
    }
    if (0 === channels.length) {
      return false;
    } else {
      const mutableBasicGuildChannelsForGuild = ChannelStore.getMutableBasicGuildChannelsForGuild(id);
      const _Set = Set;
      const self = this;
      const self2 = this;
      const _Map = Map;
      const self3 = this;
      const self4 = this;
      set = new Set(items);
      map = new Map();
      const iter2 = channels[Symbol.iterator]();
      const nextResult = iter2.next();
      while (iter2 !== undefined) {
        let tmp8;
        if (nextResult instanceof hasOwnProperty) {
          tmp8 = nextResult;
        } else {
          tmp8 = React3(tmp4, id);
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
          let tmp16 = mutableBasicGuildChannelsForGuild[obj2.id];
          let tmp17 = tmp16;
          let canBasicChannelResult = null != tmp16;
          if (canBasicChannelResult) {
            canBasicChannelResult = PermissionStore.canBasicChannel(map1.VIEW_CHANNEL, tmp17);
          }
          let tmp23 = !obj2.isObfuscated();
          if (canBasicChannelResult) {
          }
          let tmp27 = tmp23;
          if (tmp27) {
            let parent_id = obj2.parent_id;
            let tmp29 = parent_id;
            if (null != parent_id) {
              if (!set.has(tmp29)) {
                if (null == map.get(tmp29)) {
                  let tmp33 = mutableBasicGuildChannelsForGuild[tmp29];
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
  }
  gatewayGuildHasObfuscatedChannels(channels) {
    let items;
    let writes;
    if ("full_sync" === channels.channels.op) {
      writes = channels.channels.items;
      items = [];
    } else {
      writes = channels.channels.writes;
      items = channels.channels.deletes;
    }
    const self = this;
    const tmp = this.guildHasStoredObfuscatedChannels(channels.id, items) || self.anyChannelRecordsObfuscated(writes);
    return tmp;
  }
  backgroundSyncGuildHasObfuscatedChannels(data_mode) {
    let channels;
    let items;
    if ("partial" === data_mode.data_mode) {
      let channels1 = data_mode.partial_updates.channels;
      if (channels1 == null) {
        channels1 = [];
      }
      let deleted_channel_ids = data_mode.partial_updates.deleted_channel_ids;
      if (deleted_channel_ids == null) {
        deleted_channel_ids = [];
      }
      items = deleted_channel_ids;
      channels = channels1;
    } else {
      channels = data_mode.channels;
      items = [];
    }
    const self = this;
    const tmp2 = this.guildHasStoredObfuscatedChannels(data_mode.id, items) || self.anyChannelsObfuscated(channels);
    return tmp2;
  }
  guildHasStoredObfuscatedChannels(id) {
    let items;
    if (items === undefined) {
      items = [];
    }
    const values = Object.values(ChannelStore.getMutableGuildChannelsForGuild(id));
    return this.anyChannelRecordsObfuscated(values.filter((id) => -1 === items.indexOf(id.id)));
  }
  anyChannelRecordsObfuscated(writes) {
    return null != writes.find((isObfuscated) => isObfuscated.isObfuscated());
  }
  anyChannelsObfuscated(channels) {
    return null != channels.find((flags) => {
      let num = flags.flags;
      const hasFlag = FlagUtils.hasFlag;
      FlagUtils;
      if (num == null) {
        num = 0;
      }
      return hasFlag(num, constants.OBFUSCATED);
    });
  }
  resetInMemoryState() {

  }
}
const prototype = GuildsRequiringChannelSync.prototype;
let obj = Object.create(GuildsRequiringChannelSync.prototype);
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
let result = size.fileFinishedImporting("modules/app_database/modules/GuildsRequiringChannelSync.tsx");

export default obj;