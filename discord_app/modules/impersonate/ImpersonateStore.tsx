// === Module 2014: ImpersonateStore ===

// Module 2014 (ImpersonateStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import FlagUtilsAll from "FlagUtils" /* 1384 */;
import FunctionUtils from "FunctionUtils" /* 1933 */;
import ImpersonateTypes from "ImpersonateTypes" /* 2020 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
const GuildSettingsSections = fn(1074).GuildSettingsSections;
let closure_7 = fn(1084).ChannelNotificationSettingsFlags;
const dependencyMap = {};
const Store = initializeDefault.Store;
class ImpersonateStore extends Store {
}
const prototype = ImpersonateStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildStore, GuildRoleStore);
};
prototype["hasViewingRoles"] = function hasViewingRoles() {
  return !FunctionUtils.isPlainObjectEmpty(closure_8);
};
prototype["isViewingRoles"] = function isViewingRoles(guildId) {
  let tmp = null != guildId;
  if (tmp) {
    tmp = null != dependencyMap[guildId];
  }
  return tmp;
};
prototype["getViewingRoles"] = function getViewingRoles(guildId) {
  let roles;
  if (dependencyMap[guildId] != null) {
    roles = tmp.roles;
  }
  return roles;
};
prototype["getViewingRolesTimestamp"] = function getViewingRolesTimestamp(arg0) {
  let tmp = null;
  if (null != arg0) {
    let timestamp;
    if (dependencyMap[arg0] != null) {
      timestamp = tmp3.timestamp;
    }
    tmp = timestamp;
  }
  return tmp;
};
prototype["getData"] = function getData(arg0) {
  return dependencyMap[arg0];
};
prototype["isFullServerPreview"] = function isFullServerPreview(id) {
  let type;
  if (dependencyMap[id] != null) {
    type = tmp.type;
  }
  return type === ImpersonateTypes.ImpersonateType.NEW_MEMBER;
};
prototype["isOptInEnabled"] = function isOptInEnabled(arg0) {
  let optInEnabled = null != tmp;
  if (optInEnabled) {
    optInEnabled = tmp.type === ImpersonateTypes.ImpersonateType.NEW_MEMBER;
  }
  if (optInEnabled) {
    optInEnabled = tmp.optInEnabled;
  }
  return optInEnabled;
};
prototype["isOnboardingEnabled"] = function isOnboardingEnabled(id) {
  let onboardingEnabled = null != tmp;
  if (onboardingEnabled) {
    onboardingEnabled = tmp.type === ImpersonateTypes.ImpersonateType.NEW_MEMBER;
  }
  if (onboardingEnabled) {
    onboardingEnabled = tmp.onboardingEnabled;
  }
  return onboardingEnabled;
};
prototype["getViewingChannels"] = function getViewingChannels(id) {
  let optInChannels = null;
  if (null != dependencyMap[id]) {
    optInChannels = null;
    if (tmp.type === ImpersonateTypes.ImpersonateType.NEW_MEMBER) {
      optInChannels = tmp.optInChannels;
    }
  }
  return optInChannels;
};
prototype["getOnboardingResponses"] = function getOnboardingResponses(arg0) {
  let onboardingResponses = null;
  if (null != dependencyMap[arg0]) {
    onboardingResponses = null;
    if (tmp.type === ImpersonateTypes.ImpersonateType.NEW_MEMBER) {
      onboardingResponses = tmp.onboardingResponses;
    }
  }
  return onboardingResponses;
};
prototype["getMemberOptions"] = function getMemberOptions(guildId) {
  let memberOptions = null;
  if (null != dependencyMap[guildId]) {
    memberOptions = null;
    if (tmp.type === ImpersonateTypes.ImpersonateType.NEW_MEMBER) {
      memberOptions = tmp.memberOptions;
    }
  }
  return memberOptions;
};
prototype["isChannelOptedIn"] = function isChannelOptedIn(id, arg1) {
  const viewingChannels = this.getViewingChannels(id);
  let hasItem = null != viewingChannels;
  if (hasItem) {
    hasItem = viewingChannels.has(arg1);
  }
  return hasItem;
};
prototype["isViewingServerShop"] = function isViewingServerShop(id) {
  let tmp = null != id;
  if (tmp) {
    let type;
    if (dependencyMap[id] != null) {
      type = tmp3.type;
    }
    tmp = type === ImpersonateTypes.ImpersonateType.SERVER_SHOP;
  }
  return tmp;
};
prototype["getImpersonateType"] = function getImpersonateType(arg0) {
  if (null == arg0) {
    return null;
  } else {
    let type = null;
    if (null != dependencyMap[arg0]) {
      type = tmp2.type;
    }
    return type;
  }
};
prototype["getBackNavigationSection"] = function getBackNavigationSection(arg0) {
  if (null == arg0) {
    return GuildSettingsSections.ROLES;
  } else if (null == dependencyMap[arg0]) {
    return GuildSettingsSections.ROLES;
  } else {
    const type = tmp6.type;
    if (ImpersonateTypes.ImpersonateType.ROLES !== type) {
      if (ImpersonateTypes.ImpersonateType.SERVER_SHOP !== type) {
        if (ImpersonateTypes.ImpersonateType.NEW_MEMBER === type) {
          return GuildSettingsSections.ONBOARDING;
        } else {
          return GuildSettingsSections.ROLES;
        }
      }
    }
    return tmp6.returnToSection;
  }
};
ImpersonateStore.displayName = "ImpersonateStore";
const impersonateStore = new ImpersonateStore(DispatcherDefault, {
  IMPERSONATE_UPDATE: function handleImpersonateUpdate(arg0) {
    ({ guildId, data } = arg0);
    let obj = SnowflakeUtilsDefault;
    const result = obj.castGuildIdAsEveryoneGuildRoleId(guildId);
    delete tmp2[tmp];
    obj = {};
    const merged = Object.assign(data);
    obj.timestamp = Date.now();
    closure_8[guildId] = obj;
  },
  IMPERSONATE_STOP: function handleImpersonateStop(arg0) {
    if (null == dependencyMap[arg0.guildId]) {
      return false;
    } else {
      delete tmp[tmp2];
    }
  },
  GUILD_ROLE_DELETE: function handleGuildRoleDelete(arg0) {
    ({ guildId, roleId } = arg0);
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      const roles = tmp3[guildId].roles;
      delete tmp[tmp2];
    }
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function handleUserGuildSettingsChannelUpdateBulk(arg0) {
    ({ guildId, overrides } = arg0);
    let optInChannels;
    if (null != guildId) {
      if (null != dependencyMap[guildId]) {
        if (null != dependencyMap[guildId]) {
          if (tmp6.type === overrides(2020).ImpersonateType.NEW_MEMBER) {
            optInChannels = tmp6.optInChannels;
            if (optInChannels == null) {
              const _Set = Set;
              optInChannels = new Set();
            }
            const keys = optInChannels(11).keys(overrides);
            const item = keys.forEach((item) => {
              let num = overrides[item].flags;
              if (num == null) {
                num = 0;
              }
              if (obj.hasFlag(num, constants.OPT_IN_ENABLED)) {
                optInChannels.add(item);
              } else {
                optInChannels.delete(item);
              }
              obj = FlagUtilsAll;
            });
            tmp6.optInChannels = optInChannels;
            return true;
          }
        }
        return false;
      }
    }
    return false;
  },
  GUILD_ONBOARDING_SELECT_OPTION: function handleOptionSelect(arg0) {
    ({ guildId, optionId, removedOptionIds } = arg0);
    let onboardingResponses;
    if (null != guildId) {
      if (null != dependencyMap[guildId]) {
        if (null != dependencyMap[guildId]) {
          if (tmp9.type === ImpersonateTypes.ImpersonateType.NEW_MEMBER) {
            onboardingResponses = tmp9.onboardingResponses;
            if (onboardingResponses == null) {
              const _Set = Set;
              onboardingResponses = new Set();
            }
            let tmp5 = null != removedOptionIds;
            if (tmp5) {
              tmp5 = removedOptionIds.length > 0;
            }
            if (tmp5) {
              const item = removedOptionIds.forEach((item) => onboardingResponses.delete(item));
            }
            if (tmp) {
              onboardingResponses.add(optionId);
            } else {
              onboardingResponses.delete(optionId);
            }
            tmp9.onboardingResponses = onboardingResponses;
            return true;
          }
        }
        return false;
      }
    }
    return false;
  },
  GUILD_MEMBER_UPDATE_LOCAL: function handleGuildMemberUpdateLocal(guildId) {
    guildId = guildId.guildId;
    ({ roles, flags } = guildId);
    if (null == guildId) {
      return false;
    } else {
      let flag = null != tmp2;
      if (flag) {
        if (null != roles) {
          tmp2.roles = roles.reduce((acc, item) => {
            const role = GuildRoleStore.getRole(guildId, item);
            if (null != role) {
              acc[item] = role;
            }
            return acc;
          }, {});
        }
        let tmp3 = null != flags;
        if (tmp3) {
          tmp3 = tmp2.type === guildId(2020).ImpersonateType.NEW_MEMBER;
        }
        flag = true;
        if (tmp3) {
          tmp2.memberOptions.flags = flags;
          flag = true;
        }
      }
      return flag;
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/impersonate/ImpersonateStore.tsx");

export default impersonateStore;