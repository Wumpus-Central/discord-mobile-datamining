// discord_app/stores/GuildVerificationStore.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import DISCORD_EPOCHDefault from "../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import GuildNSFWContentLevel from "../records/GuildRecord.tsx";
import GuildMemberFlags2 from "../modules/guild_member/GuildMemberConstants.tsx";
import trackCommunicationDisabled from "GuildMemberStore.tsx";
import createGuildRoleRecordFromRust from "GuildRoleStore.tsx";
import createGuildRecordFromRust from "GuildStore.tsx";
import mergeGuildAvatar from "UserStore.tsx";
import ME from "../Constants.tsx";
import { hasFlag } from "../../discord_common/js/shared/utils/FlagUtils.tsx";

function recomputeGuild(guildId) {
  const _require = guildId;
  clearGuild(guildId);
  set.add(guildId);
  guild = guild.getGuild(guildId);
  const currentUser = authStore.getCurrentUser();
  let tmp4 = null != guild;
  if (tmp4) {
    tmp4 = guild.verificationLevel !== constants.NONE;
  }
  if (null != guild) {
    if (null != currentUser) {
      if (tmp4) {
        if (!isGuildOwner(guild, currentUser)) {
          member = member.getMember(guild.id, currentUser.id);
          if (null == member) {
            let tmp13 = tmp6;
            if (tmp6) {
              tmp13 = null != member;
            }
            let flag = false;
            if (tmp13) {
              const roles = member.roles;
              tmp13 = !roles.includes(guild.verificationRoleId);
              flag = tmp13;
            }
            let role;
            if (tmp13) {
              role = store.getRole(guild.id, guild.verificationRoleId);
            }
            let num3 = 0;
            let num4 = 0;
            let flag2 = false;
            let flag3 = false;
            let flag4 = false;
            let flag5 = false;
            let flag6 = false;
            if (tmp4) {
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
                  set = new Set();
                  const roles2 = member.roles;
                  for (const item10071 of roles2) {
                    let role1 = store.getRole(guild.id, item10071);
                    let managed = null == role1;
                    if (!managed) {
                      managed = tmp25.managed;
                    }
                    if (!managed) {
                      let addResult1 = set.add(item10071);
                    }
                    continue;
                  }
                  const _Date = Date;
                  const date = new Date("2022-12-02 00:00:00");
                  let tmp32 = null == member.joinedAt;
                  if (!tmp32) {
                    const _Date2 = Date;
                    const date1 = new Date(member.joinedAt);
                    tmp32 = date1 < date;
                  }
                  const features = guild.features;
                  let tmp40 = !tmp6;
                  if (!tmp6) {
                    tmp40 = !tmp39;
                  }
                  if (tmp40) {
                    tmp40 = set.size > 0;
                  }
                  flag7 = false;
                  if (tmp40) {
                    flag7 = true;
                  }
                  tmp39 = features.has(constants3.GUILD_ONBOARDING_EVER_ENABLED) && !tmp32;
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
                  const diff = +currentUser.createdAt + result - Date.now();
                  const _Date4 = Date;
                  const result1 = 60000 * constants2.MEMBER_AGE;
                  const diff1 = +guild.joinedAt + result1 - Date.now();
                  let flag8 = false;
                  let flag9 = false;
                  let flag10 = false;
                  let flag11 = false;
                  if (!currentUser.isStaff()) {
                    let tmp53 = guild.verificationLevel >= constants.MEDIUM;
                    if (tmp53) {
                      tmp53 = diff > 0;
                    }
                    flag8 = guild.verificationLevel >= constants.HIGH && diff1 > 0;
                    flag9 = tmp53;
                    flag10 = guild.verificationLevel >= constants.VERY_HIGH;
                    flag11 = guild.verificationLevel >= constants.LOW && !currentUser.verified;
                  }
                  flag2 = flag8;
                  flag3 = flag9;
                  flag4 = flag10;
                  flag5 = flag11;
                  num3 = diff1;
                  num4 = diff;
                  flag6 = guild.verificationLevel >= constants.LOW && !currentUser.isClaimed();
                  const tmp50 = guild.verificationLevel >= constants.LOW && !currentUser.isClaimed();
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
              HermesBuiltin.arraySpread(items, 0);
              const _Math2 = Math;
              timerId = setTimeout(() => {
                const obj = { type: "GUILD_VERIFICATION_CHECK", guildId: closure_0 };
                return obj.dispatch(obj);
              }, HermesBuiltin.apply(items1, Math));
            }
            let obj = { notClaimed: null, notEmailVerified: null, notPhoneVerified: null, newAccount: null, newMember: null, missingVerificationRole: null, verificationRole: null, canChat: null, accountDeadline: null, memberDeadline: null, timeoutRef: null };
            obj[0] = flag6;
            obj[1] = flag5;
            obj[2] = flag4;
            obj[3] = flag3;
            obj[4] = flag2;
            obj[5] = flag;
            obj[6] = role;
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
            obj[7] = !flag6;
            const _Date5 = Date;
            const _Date6 = Date;
            const date2 = new Date(Date.now() + num4);
            obj[8] = date2;
            const _Date7 = Date;
            const _Date8 = Date;
            const date3 = new Date(Date.now() + num3);
            obj[9] = date3;
            obj[10] = timerId;
            closure_14[guildId] = obj;
          } else {
            hasFlag;
            let num = member.flags;
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
  if (null != dependencyMap[arg0]) {
    const _clearTimeout = clearTimeout;
    clearTimeout(tmp3.timeoutRef);
  }
  delete tmp[tmp2];
}
function handleCreateOrUpdateGuild(guild) {
  set.delete(guild.guild.id);
  recomputeGuild(guild.guild.id);
}
const isGuildOwner = GuildNSFWContentLevel.isGuildOwner;
({ VerificationLevels: closure_8, VerificationCriteria: c9, GuildFeatures: c10 } = ME);
const GuildMemberFlags = GuildMemberFlags2.GuildMemberFlags;
let closure_12 = { notClaimed: false, notEmailVerified: false, notPhoneVerified: false, newAccount: false, newMember: false, missingVerificationRole: false, canChat: true };
let set = new Set();
let closure_14 = {};
const Store = initializeDefault.Store;
class GuildVerificationStore extends Store {
}
const prototype = GuildVerificationStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_4, closure_5, closure_6, closure_7);
};
prototype["getCheck"] = function getCheck(guild_id) {
  if (null == guild_id) {
    let tmp5 = closure_12;
  } else {
    if (!set.has(guild_id)) {
      recomputeGuild(guild_id);
    }
    tmp5 = dependencyMap[guild_id];
    if (tmp5 == null) {
      tmp5 = closure_12;
    }
  }
  return tmp5;
};
prototype["canChatInGuild"] = function canChatInGuild(guildId) {
  return this.getCheck(guildId).canChat;
};
GuildVerificationStore.displayName = "GuildVerificationStore";
const guildVerificationStore = new GuildVerificationStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    set.clear();
    for (const key10008 in closure_14) {
      let tmp7 = dependencyMap[key10008];
      if (null != tmp7) {
        let _clearTimeout = clearTimeout;
        let clearTimeoutResult = clearTimeout(tmp7.timeoutRef);
      }
      delete tmp[tmp2];
      continue;
    }
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    const keys = DISCORD_EPOCHDefault.keys(closure_14);
    const item = keys.forEach(clearGuild);
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate() {
    set.clear();
  },
  GUILD_CREATE: handleCreateOrUpdateGuild,
  GUILD_UPDATE: handleCreateOrUpdateGuild,
  GUILD_DELETE: function handleDeleteGuild(arg0) {
    if (null != dependencyMap[arg0.guild.id]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp3.timeoutRef);
    }
    delete tmp[tmp2];
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    guildId = guildId.guildId;
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (guildId.user.id !== id) {
      return false;
    } else {
      set.delete(guildId);
      recomputeGuild(guildId);
    }
  },
  GUILD_VERIFICATION_CHECK: function handleGuildVerificationCheck(guildId) {
    recomputeGuild(guildId.guildId);
  }
});
let result = obj132.fileFinishedImporting("stores/GuildVerificationStore.tsx");

export default guildVerificationStore;