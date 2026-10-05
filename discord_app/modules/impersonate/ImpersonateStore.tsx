// discord_app/modules/impersonate/ImpersonateStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import UserSettingsConstants from "../user_settings/UserSettingsConstants.tsx";
import FlagUtilsAll from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import FunctionUtils from "../../utils/FunctionUtils.tsx";
import ImpersonateTypes from "ImpersonateTypes.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const GuildSettingsSections = Constants.GuildSettingsSections;
let closure_7 = UserSettingsConstants.ChannelNotificationSettingsFlags;
const metroImportAll = {};
const Store = get_initializedDefault.Store;
class ImpersonateStore extends Store {
  initialize() {
    this.waitFor(GuildStore, GuildRoleStore);
  }
  hasViewingRoles() {
    const obj = FunctionUtils;
    return !obj.isPlainObjectEmpty(closure_8);
  }
  isViewingRoles(guildId) {
    return null != guildId && null != closure_8[guildId];
  }
  getViewingRoles(guildId) {
    let roles;
    if (closure_8[guildId] != null) {
      roles = tmp.roles;
    }
    return roles;
  }
  getViewingRolesTimestamp(arg0) {
    let tmp = null;
    if (null != arg0) {
      let timestamp;
      if (closure_8[arg0] != null) {
        timestamp = tmp3.timestamp;
      }
      tmp = timestamp;
    }
    return tmp;
  }
  getData(arg0) {
    return closure_8[arg0];
  }
  isFullServerPreview(id) {
    let type;
    if (closure_8[id] != null) {
      type = tmp.type;
    }
    return type === ImpersonateTypes.ImpersonateType.NEW_MEMBER;
  }
  isOptInEnabled(arg0) {
    const optInEnabled = null != tmp && tmp.type === ImpersonateTypes.ImpersonateType.NEW_MEMBER && tmp.optInEnabled;
    return optInEnabled;
  }
  isOnboardingEnabled(id) {
    const onboardingEnabled =
      null != tmp && tmp.type === ImpersonateTypes.ImpersonateType.NEW_MEMBER && tmp.onboardingEnabled;
    return onboardingEnabled;
  }
  getViewingChannels(id) {
    let optInChannels = null;
    if (null != closure_8[id]) {
      optInChannels = null;
      if (closure_8[id].type === ImpersonateTypes.ImpersonateType.NEW_MEMBER) {
        optInChannels = tmp.optInChannels;
      }
    }
    return optInChannels;
  }
  getOnboardingResponses(arg0) {
    let onboardingResponses = null;
    if (null != closure_8[arg0]) {
      onboardingResponses = null;
      if (closure_8[arg0].type === ImpersonateTypes.ImpersonateType.NEW_MEMBER) {
        onboardingResponses = tmp.onboardingResponses;
      }
    }
    return onboardingResponses;
  }
  getMemberOptions(guildId) {
    let memberOptions = null;
    if (null != closure_8[guildId]) {
      memberOptions = null;
      if (closure_8[guildId].type === ImpersonateTypes.ImpersonateType.NEW_MEMBER) {
        memberOptions = tmp.memberOptions;
      }
    }
    return memberOptions;
  }
  isChannelOptedIn(id, arg1) {
    const viewingChannels = this.getViewingChannels(id);
    const hasItem = null != viewingChannels && viewingChannels.has(arg1);
    return hasItem;
  }
  isViewingServerShop(id) {
    let tmp = null != id;
    if (tmp) {
      let type;
      if (closure_8[id] != null) {
        type = tmp3.type;
      }
      tmp = type === ImpersonateTypes.ImpersonateType.SERVER_SHOP;
    }
    return tmp;
  }
  getImpersonateType(arg0) {
    if (null == arg0) {
      return null;
    } else {
      let type = null;
      if (null != closure_8[arg0]) {
        type = tmp2.type;
      }
      return type;
    }
  }
  getBackNavigationSection(arg0) {
    if (null == arg0) {
      return GuildSettingsSections.ROLES;
    } else if (null == closure_8[arg0]) {
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
      return closure_8[arg0].returnToSection;
    }
  }
}
const prototype = ImpersonateStore.prototype;
ImpersonateStore.displayName = "ImpersonateStore";
let obj = {
  IMPERSONATE_UPDATE: function handleImpersonateUpdate(arg0) {
    let data;
    let guildId;
    ({ guildId, data } = arg0);
    const roles = data.roles;
    const obj = SnowflakeUtilsDefault;
    delete roles[obj.castGuildIdAsEveryoneGuildRoleId(obj, guildId)];
    const obj2 = { timestamp: Date.now() };
    const merged = Object.assign(data);
    closure_8[guildId] = obj2;
  },
  IMPERSONATE_STOP: function handleImpersonateStop(guildId) {
    guildId = guildId.guildId;
    if (null == closure_8[guildId]) {
      return false;
    } else {
      delete tmp[guildId];
    }
  },
  GUILD_ROLE_DELETE: function handleGuildRoleDelete(guildId) {
    guildId = guildId.guildId;
    if (null == closure_8[guildId]) {
      return false;
    } else {
      delete tmp2[guildId].roles[tmp];
    }
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function handleUserGuildSettingsChannelUpdateBulk(arg0) {
    let guildId;
    let overrides;
    ({ guildId, overrides } = arg0);
    let optInChannels;
    if (null != guildId) {
      if (null != closure_8[guildId]) {
        if (null != closure_8[guildId]) {
          if (closure_8[guildId].type === overrides(2111).ImpersonateType.NEW_MEMBER) {
            optInChannels = tmp4.optInChannels;
            if (optInChannels == null) {
              let tmp = globalThis;
              const _Set = Set;
              const self = this;
              const self2 = this;
              optInChannels = new Set();
            }
            const obj = optInChannels(11);
            const keys = obj.keys(overrides);
            const item = keys.forEach((item) => {
              let num = overrides[item].flags;
              const hasFlag = FlagUtilsAll.hasFlag;
              FlagUtilsAll;
              if (num == null) {
                num = 0;
              }
              if (hasFlag(num, constants.OPT_IN_ENABLED)) {
                optInChannels.add(item);
              } else {
                optInChannels.delete(item);
              }
            });
            closure_8[guildId].optInChannels = optInChannels;
            return true;
          }
        }
        return false;
      }
    }
    return false;
  },
  GUILD_ONBOARDING_SELECT_OPTION: function handleOptionSelect(arg0) {
    let guildId;
    let optionId;
    let removedOptionIds;
    ({ guildId, optionId, removedOptionIds } = arg0);
    let onboardingResponses;
    if (null != guildId) {
      if (null != closure_8[guildId]) {
        if (null != closure_8[guildId]) {
          if (closure_8[guildId].type === ImpersonateTypes.ImpersonateType.NEW_MEMBER) {
            onboardingResponses = tmp7.onboardingResponses;
            if (onboardingResponses == null) {
              const _Set = Set;
              const self = this;
              const self2 = this;
              onboardingResponses = new Set();
            }
            const tmp3 = null != removedOptionIds && removedOptionIds.length > 0;
            if (tmp3) {
              const item = removedOptionIds.forEach((item) => onboardingResponses.delete(item));
            }
            if (tmp) {
              onboardingResponses.add(optionId);
            } else {
              onboardingResponses.delete(optionId);
            }
            closure_8[guildId].onboardingResponses = onboardingResponses;
            return true;
          }
        }
        return false;
      }
    }
    return false;
  },
  GUILD_MEMBER_UPDATE_LOCAL: function handleGuildMemberUpdateLocal(guildId) {
    let flags;
    let roles;
    guildId = guildId.guildId;
    ({ roles, flags } = guildId);
    if (null == guildId) {
      return false;
    } else {
      let flag = null != tmp2;
      if (flag) {
        if (null != roles) {
          closure_8[guildId].roles = roles.reduce((acc, item) => {
            const role = GuildRoleStore.getRole(guildId, item);
            if (null != role) {
              acc[item] = role;
            }
            return acc;
          }, {});
        }
        flag = true;
        const tmp3 = null != flags && tmp2.type === guildId(2111).ImpersonateType.NEW_MEMBER;
        if (tmp3) {
          closure_8[guildId].memberOptions.flags = flags;
          flag = true;
        }
      }
      return flag;
    }
  },
};
const impersonateStore = new ImpersonateStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/impersonate/ImpersonateStore.tsx");

export default impersonateStore;
