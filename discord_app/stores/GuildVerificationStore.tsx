// === Module 5577: GuildVerificationStore ===

// Module 5577 (GuildVerificationStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4501 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
let metroImportAll;
function recomputeGuild(guildId) {
  let date2;
  let date3;
  _require = guildId;
  clearGuild(guildId);
  set.add(guildId);
  const guild = GuildStore.getGuild(guildId);
  const currentUser = UserStore.getCurrentUser();
  if (null != guild) {
    if (null != currentUser) {
      if (null != guild && guild.verificationLevel !== constants.NONE) {
        if (!isGuildOwner(guild, currentUser)) {
          const member = GuildMemberStore.getMember(guild.id, currentUser.id);
          if (null == member) {
            let tmp14 = tmp6 && null != member;
            let flag = false;
            if (tmp14) {
              const roles = member.roles;
              tmp14 = !roles.includes(guild.verificationRoleId);
              flag = tmp14;
            }
            let role;
            if (tmp14) {
              role = GuildRoleStore.getRole(guild.id, guild.verificationRoleId);
            }
            let num3 = 0;
            let num4 = 0;
            let flag2 = false;
            let flag3 = false;
            let flag4 = false;
            let flag5 = false;
            let flag6 = false;
            if (null != guild && guild.verificationLevel !== constants.NONE) {
              num3 = 0;
              num4 = 0;
              flag2 = false;
              flag3 = false;
              flag4 = false;
              flag5 = false;
              flag6 = false;
              if (!currentUser.isPhoneVerified()) {
                let flag7 = false;
                if (null != member) {
                  const _Set = Set;
                  const self = this;
                  const self2 = this;
                  set = new Set();
                  const roles2 = member.roles;
                  for (const item10071 of roles2) {
                    let role1 = GuildRoleStore.getRole(guild.id, item10071);
                    let managed = null == role1;
                    if (!managed) {
                      managed = tmp24.managed;
                    }
                    if (!managed) {
                      let addResult1 = set.add(item10071);
                    }
                    continue;
                  }
                  const _Date = Date;
                  const self3 = this;
                  let self4 = this;
                  let tmp29 = null == member.joinedAt;
                  const date = new Date("2022-12-02 00:00:00");
                  if (!tmp29) {
                    const _Date2 = Date;
                    const self5 = this;
                    self4 = this;
                    tmp29 = new Date(member.joinedAt) < date;
                    const date1 = new Date(member.joinedAt);
                  }
                  const features = guild.features;
                  flag7 = false;
                  const tmp35 = !(null != guild && null != guild.verificationRoleId) && !(features.has(constants3.GUILD_ONBOARDING_EVER_ENABLED) && !tmp29) && set.size > 0;
                  if (tmp35) {
                    flag7 = true;
                  }
                }
                num3 = 0;
                num4 = 0;
                flag2 = false;
                flag3 = false;
                flag4 = false;
                flag5 = false;
                flag6 = false;
                if (!flag7) {
                  const _Date3 = Date;
                  const result = 60000 * constants2.ACCOUNT_AGE;
                  const tmp36 = +currentUser.createdAt;
                  const diff = tmp36 + result - Date.now();
                  const _Date4 = Date;
                  const result1 = 60000 * constants2.MEMBER_AGE;
                  const tmp41 = +guild.joinedAt;
                  const diff1 = tmp41 + result1 - Date.now();
                  let flag8 = false;
                  let flag9 = false;
                  let flag10 = false;
                  let flag11 = false;
                  const tmp45 = guild.verificationLevel >= constants.LOW && !currentUser.isClaimed();
                  if (!currentUser.isStaff()) {
                    let tmp48 = guild.verificationLevel >= constants.MEDIUM;
                    const tmp46 = guild.verificationLevel >= constants.LOW && !currentUser.verified;
                    const tmp47 = guild.verificationLevel >= constants.VERY_HIGH;
                    if (tmp48) {
                      tmp48 = diff > 0;
                    }
                    flag8 = guild.verificationLevel >= constants.HIGH && diff1 > 0;
                    flag9 = tmp48;
                    flag10 = tmp47;
                    flag11 = tmp46;
                  }
                  flag2 = flag8;
                  flag3 = flag9;
                  flag4 = flag10;
                  flag5 = flag11;
                  num3 = diff1;
                  num4 = diff;
                  flag6 = tmp45;
                }
              }
            }
            const items = [];
            if (flag2) {
              items.push(num3);
            }
            if (flag3) {
              items.push(num4);
            }
            let timerId;
            if (items.length > 0) {
              const _setTimeout = setTimeout;
              const _Math = Math;
              const items1 = [];
              HermesBuiltin.arraySpread(items1, items, 0);
              const _Math2 = Math;
              timerId = setTimeout(() => {
                const obj = DispatcherDefault;
                const obj2 = { type: "GUILD_VERIFICATION_CHECK", guildId };
                return obj.dispatch(obj2);
              }, HermesBuiltin.apply(max, items1, Math));
            }
            let obj = { notClaimed: flag6, notEmailVerified: flag5, notPhoneVerified: flag4, newAccount: flag3, newMember: flag2, missingVerificationRole: flag, verificationRole: role, canChat: !flag6, accountDeadline: date2, memberDeadline: date3, timeoutRef: timerId };
            if (!flag6) {
              flag6 = flag5;
            }
            if (!flag6) {
              flag6 = flag4;
            }
            if (!flag6) {
              flag6 = flag3;
            }
            if (!flag6) {
              flag6 = flag2;
            }
            if (!flag6) {
              flag6 = flag;
            }
            const _Date5 = Date;
            const _Date6 = Date;
            const self6 = this;
            const self7 = this;
            const _Date7 = Date;
            const _Date8 = Date;
            const self8 = this;
            const self9 = this;
            date2 = new Date(Date.now() + num4);
            closure_14[guildId] = obj;
            date3 = new Date(Date.now() + num3);
          } else {
            let num = member.flags;
            const hasFlag = require("FlagUtils").hasFlag;
            require("FlagUtils");
            if (num == null) {
              num = 0;
            }
          }
        }
      }
    }
  }
}
function clearGuild(arg0) {
  const tmp = arg0;
  if (null != closure_14[arg0]) {
    const _clearTimeout = clearTimeout;
    clearTimeout(closure_14[arg0].timeoutRef);
  }
  delete closure_14[tmp];
}
function handleCreateOrUpdateGuild(guild) {
  set.delete(guild.guild.id);
  recomputeGuild(guild.guild.id);
}
const isGuildOwner = GuildRecord.isGuildOwner;
({ VerificationLevels: metroImportAll, VerificationCriteria: c9, GuildFeatures: c10 } = Constants);
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
let closure_12 = { notClaimed: false, notEmailVerified: false, notPhoneVerified: false, newAccount: false, newMember: false, missingVerificationRole: false, canChat: true };
let set = new Set();
const authStore2 = {};
const Store = get_initializedDefault.Store;
class GuildVerificationStore extends Store {
  initialize() {
    this.waitFor(GuildMemberStore, GuildRoleStore, GuildStore, UserStore);
  }
  getCheck(guildId) {
    let tmp5;
    if (null == guildId) {
      tmp5 = closure_12;
    } else {
      if (!set.has(guildId)) {
        recomputeGuild(guildId);
      }
      tmp5 = closure_14[guildId];
      if (tmp5 == null) {
        tmp5 = closure_12;
      }
    }
    return tmp5;
  }
  canChatInGuild(guild_id) {
    return this.getCheck(guild_id).canChat;
  }
}
const prototype = GuildVerificationStore.prototype;
GuildVerificationStore.displayName = "GuildVerificationStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    set.clear();
    for (const key10008 in closure_14) {
      let tmp5 = closure_14[key10008];
      if (null != tmp5) {
        let _clearTimeout = clearTimeout;
        let clearTimeoutResult = clearTimeout(tmp5.timeoutRef);
      }
      delete closure_14[key10008];
      continue;
    }
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    const obj = SnowflakeUtilsDefault;
    const keys = obj.keys(closure_14);
    const item = keys.forEach(clearGuild);
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    set.clear();
  },
  GUILD_CREATE: handleCreateOrUpdateGuild,
  GUILD_UPDATE: handleCreateOrUpdateGuild,
  GUILD_DELETE: function handleDeleteGuild(guild) {
    const id = guild.guild.id;
    if (null != closure_14[id]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_14[id].timeoutRef);
    }
    delete closure_14[id];
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    guildId = guildId.guildId;
    const id = guildId.user.id;
    const currentUser = UserStore.getCurrentUser();
    let id1;
    if (currentUser != null) {
      id1 = currentUser.id;
    }
    if (id !== id1) {
      return false;
    } else {
      set.delete(guildId);
      recomputeGuild(guildId);
    }
  },
  GUILD_VERIFICATION_CHECK: function handleGuildVerificationCheck(guildId) {
    recomputeGuild(guildId.guildId);
  }
};
const guildVerificationStore = new GuildVerificationStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/GuildVerificationStore.tsx");

export default guildVerificationStore;