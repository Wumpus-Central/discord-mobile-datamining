// === Module 9049: GuildSettingsStore ===

// Module 9049 (GuildSettingsStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2059 */;
import PlainRecord from "PlainRecord" /* 2060 */;
import GuildRecord from "GuildRecord" /* 2063 */;
import _modDef4421 from "module_4421" /* 4421 */;
import GlobalDiscoveryServersConstants from "GlobalDiscoveryServersConstants" /* 9050 */;
import GuildSettingsServerTagUtils from "GuildSettingsServerTagUtils" /* 9051 */;
import GuildSettingsVanityURLActionCreators from "GuildSettingsVanityURLActionCreators" /* 9053 */;
import getDefaultGuildSettingsSection from "getDefaultGuildSettingsSection" /* 9054 */;
import GuildSettingsFetchActionCreators from "GuildSettingsFetchActionCreators" /* 9055 */;
import GuildProfileStore from "GuildProfileStore" /* 9028 */;
import InviteRecord from "InviteRecord" /* 7828 */;
import UserRecord from "UserRecord" /* 1386 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import PublicGuildsConstants from "PublicGuildsConstants" /* 7479 */;
import size from "module_2" /* 2 */;

function handleFormInit(location) {
  ({ guildId, section, subsection } = location);
  guild = GuildStore.getGuild(guildId);
  if (null == guild) {
    c35 = false;
    CLOSED = FormStates.CLOSED;
    guild = null;
    c39 = false;
    c41 = false;
    c43 = null;
    settings = null;
    c47 = null;
    c48 = 0;
    c55 = null;
    obj = null;
    c59 = null;
    c3 = null;
    c4 = null;
    c5 = null;
    NONE = MFALevels.NONE;
    closure_46 = {};
    c11 = undefined;
  } else {
    profile = GuildProfileStore.getProfile(guildId);
    c41 = enabled;
    c43 = channelId;
    const guildSpaceSettings = guild.guildSpaceSettings;
    settings = guildSpaceSettings;
    CLOSED = FormStates.OPEN;
    errors = {};
    c38 = null;
    c10 = SnowflakeUtilsDefault.castGuildIdAsEveryoneGuildRoleId(guildId);
    NONE = guild.mfaLevel;
    obj = obj2;
    c12 = null;
    closure_46 = {};
    location = location.location;
    if (section === constants.TAG) {
      obj = GuildSettingsServerTagUtils;
      if (!obj.canUseMobileServerTagSettings(guildId)) {
        c11 = undefined;
      }
    }
    if (null != section) {
      const obj3 = { key: "landing", name: constants.LANDING };
      const items = [obj3];
      if (section === constants.TAG_CUSTOMIZE) {
        ({ TAG: obj2.key, TAG: obj2.name } = constants);
        items.push({ key: null, name: null });
        const obj4 = { key: null, name: null };
      }
      const obj6 = { key: section, name: section };
      items.push(obj6);
      const obj10 = { type: "stack", routes: items };
      c11 = obj10;
    }
  }
}
function _createInvite(code) {
  obj = { code: code.code, temporary: code.temporary, revoked: code.revoked, inviter: null, channel: null, guild: null, uses: null, maxUses: null, maxAge: null, createdAt: null, flags: null, roles: null };
  let tmp2 = null;
  if (null != code.inviter) {
    tmp2 = new UserRecord(code.inviter);
  }
  obj.inviter = tmp2;
  obj.channel = closure_15(code.channel);
  let fromInviteGuildResult = null;
  if (null != code.guild) {
    fromInviteGuildResult = GuildRecordUtils.fromInviteGuild(code.guild);
  }
  obj.guild = fromInviteGuildResult;
  ({ uses: obj.uses, max_uses: obj.maxUses, max_age: obj.maxAge } = code);
  const created_at = code.created_at;
  obj.createdAt = _modDef4421(created_at);
  ({ flags: obj.flags, roles: obj.roles } = code);
  return new InviteRecord(obj);
}
function handleIntegrationsUpdate(type) {
  let tmp = null != guild;
  if (tmp) {
    tmp = CLOSED === FormStates.OPEN;
  }
  if (tmp) {
    let tmp5 = "GUILD_INTEGRATIONS_UPDATE" !== type.type;
    if (!tmp5) {
      tmp5 = type.guildId === guild.id;
    }
    if (tmp5) {
      const guildIntegrationsApplications = GuildSettingsFetchActionCreators.fetchGuildIntegrationsApplications(guild.id);
    }
    tmp = tmp5;
  }
  return tmp;
}
function handleProfileUpdateStart(arg0) {
  if (null != guild) {
    if (guild.id === tmp) {
      c38 = null;
    }
  }
  return false;
}
function handleProfileApiUpdateFailure(arg0) {
  if (null != guild) {
    if (guild.id === tmp) {
      c38 = tmp2;
    }
  }
  return false;
}
let closure_15 = ChannelRecord.createChannelRecordFromInvite;
const getGuildEveryoneRoleId = GuildRecord.getGuildEveryoneRoleId;
const FormStates = Constants.FormStates;
const MFALevels = Constants.MFALevels;
({ GuildSettingsSections: closure_23, GuildSettingsSubsections: closure_24, Endpoints: closure_25, GuildFeatures: closure_26 } = Constants);
const DEFAULT_DISCOVERY_CATEGORY_ID = GlobalDiscoveryServersConstants.DEFAULT_DISCOVERY_CATEGORY_ID;
({ PUBLIC_SUCCESS_MODAL_SEEN_KEY: closure_28, CREATE_NEW_CHANNEL_VALUE: closure_29 } = PublicGuildsConstants);
let c30 = true;
let closure_31 = ["name", "description", "icon", "splash", "banner", "homeHeader", "afkChannelId", "afkTimeout", "systemChannelId", "verificationLevel", "defaultMessageNotifications", "explicitContentFilter", "features", "systemChannelFlags", "preferredLocale", "rulesChannelId", "safetyAlertsChannelId", "ownerConfiguredContentLevel", "discoverySplash", "publicUpdatesChannelId", "premiumProgressBarEnabled", "officialMessageColor", "verificationRoleId"];
let closure_32 = ["brandColorPrimary", "description", "icon", "name", "traits", "visibility", "gameApplicationIds", "customBanner", "tag", "badge", "badgeColorPrimary", "badgeColorSecondary"];
let set = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]);
let closure_34 = { icon: "iconOriginalMd5", banner: "bannerOriginalMd5", splash: "splashOriginalMd5", discoverySplash: "discoverySplashOriginalMd5" };
let c35 = false;
let CLOSED = FormStates.CLOSED;
let errors = {};
let c38 = null;
let c39 = false;
let enabled = false;
let c41 = false;
let channelId = null;
let c43 = null;
let settings = null;
let closure_46 = {};
let c47 = null;
let c48 = 0;
let NONE = MFALevels.NONE;
let location = null;
let obj = { primaryCategoryId: DEFAULT_DISCOVERY_CATEGORY_ID, secondaryCategoryIds: [], keywords: [], emojiDiscoverabilityEnabled: true, partnerActionedTimestamp: null, partnerApplicationTimestamp: null, isPublished: false, reasonsToJoin: [], socialLinks: [], about: "" };
let c52 = false;
let obj2 = obj;
let c55 = null;
const bansVersion = 0;
let guildId = null;
obj = null;
let c59 = null;
const Store = initializeDefault.Store;
class GuildSettingsStore extends Store {
}
const prototype = GuildSettingsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildStore, GuildProfileStore, UserStore);
};
prototype["getMetadata"] = function getMetadata() {
  return obj;
};
prototype["widgetHasChanges"] = function widgetHasChanges() {
  let tmp = false !== c39;
  if (tmp) {
    let tmp4 = c41 !== enabled;
    if (!tmp4) {
      tmp4 = c43 !== channelId;
    }
    tmp = tmp4;
  }
  return tmp;
};
prototype["guildSpaceSettingsHasChanges"] = function guildSpaceSettingsHasChanges() {
  enabled = undefined;
  if (settings != null) {
    enabled = settings.enabled;
  }
  let enabled1;
  if (settings != null) {
    enabled1 = settings.enabled;
  }
  return enabled !== enabled1;
};
prototype["hasChanges"] = function hasChanges() {
  obj = _modDef12;
  const isEqualResult = obj.isEqual(closure_7, guild);
  let widgetHasChangesResult = !isEqualResult;
  if (isEqualResult) {
    widgetHasChangesResult = !_modDef12.isEqual(obj, obj2);
    const tmpResult = _modDef12;
  }
  if (!widgetHasChangesResult) {
    widgetHasChangesResult = !_modDef12.isEqual(obj, profile);
    const tmpResult2 = _modDef12;
  }
  const self = this;
  if (!widgetHasChangesResult) {
    widgetHasChangesResult = self.widgetHasChanges();
  }
  if (!widgetHasChangesResult) {
    widgetHasChangesResult = self.guildSpaceSettingsHasChanges();
  }
  return widgetHasChangesResult;
};
prototype["isOpen"] = function isOpen() {
  return c35;
};
prototype["getSavedRouteState"] = function getSavedRouteState() {
  return c11;
};
prototype["getSection"] = function getSection() {
  return c3;
};
prototype["showNotice"] = function showNotice() {
  return this.hasChanges();
};
prototype["getGuildId"] = function getGuildId() {
  let id = null;
  if (null != guild) {
    id = guild.id;
  }
  return id;
};
prototype["showPublicSuccessModal"] = function showPublicSuccessModal() {
  const Storage = Storage2.Storage;
  return !Storage.get(__initData6);
};
prototype["getGuild"] = function getGuild() {
  return closure_7;
};
prototype["getPendingOriginalMd5s"] = function getPendingOriginalMd5s() {
  return closure_46;
};
prototype["getGuildProfile"] = function getGuildProfile() {
  return obj;
};
prototype["getWidget"] = function getWidget() {
  return { enabled, channelId: _null };
};
prototype["getGuildSpaceSettings"] = function getGuildSpaceSettings() {
  return settings;
};
prototype["isSubmitting"] = function isSubmitting() {
  return CLOSED === FormStates.SUBMITTING;
};
prototype["isGuildMetadataLoaded"] = function isGuildMetadataLoaded() {
  return c52;
};
prototype["getErrors"] = function getErrors() {
  return errors;
};
prototype["getError"] = function getError(arg0) {
  let tmp = errors[arg0];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
prototype["getProfileError"] = function getProfileError() {
  return c38;
};
prototype["getSelectedRoleId"] = function getSelectedRoleId() {
  return c10;
};
prototype["getSlug"] = function getSlug() {
  return c12;
};
prototype["getBans"] = function getBans() {
  const items = [c55, closure_56];
  return items;
};
prototype["getProps"] = function getProps() {
  obj = { submitting: this.isSubmitting(), integrations, section, subsection, errors, guild, bans, bansVersion, invites: obj, selectedRoleId, fetchedEmbed, embedEnabled, embedChannelId: _null, guildSpaceSettings: settings, mfaLevel: NONE, searchQuery, vanityURLCode, vanityURLUses, originalGuild: guild, hasChanges: this.hasChanges(), guildMetadata: obj, analyticsLocation: location, isGuildMetadataLoaded, originalProfile: profile, profile: obj };
  return obj;
};
GuildSettingsStore.displayName = "GuildSettingsStore";
obj2 = {
  GUILD_SETTINGS_INIT: handleFormInit,
  GUILD_SETTINGS_OPEN: function handleFormOpen(arg0) {
    c35 = true;
    handleFormInit(arg0);
  },
  GUILD_SETTINGS_CLOSE: function handleFormClose() {
    c35 = false;
    CLOSED = FormStates.CLOSED;
    closure_7 = null;
    guild = null;
    c39 = false;
    c41 = false;
    c43 = null;
    settings = null;
    c47 = null;
    c48 = 0;
    c55 = null;
    c59 = null;
    c3 = null;
    c4 = null;
    c5 = null;
    NONE = MFALevels.NONE;
    closure_46 = {};
    c11 = undefined;
  },
  GUILD_SETTINGS_UPDATE: function handleUpdate(arg0) {
    closure_0 = arg0;
    if (null == closure_7) {
      return false;
    } else {
      const item = closure_31.forEach((item) => {
        let hasOwnPropertyResult = null != closure_7;
        if (hasOwnPropertyResult) {
          hasOwnPropertyResult = closure_0.hasOwnProperty(item);
        }
        if (hasOwnPropertyResult) {
          let tmp6 = closure_0[item];
          if (tmp6 == null) {
            tmp6 = null;
          }
          closure_7 = set(closure_7, item, tmp6);
        }
      });
      const _Object = Object;
      const keys = Object.keys(closure_34);
      for (const item10007 of keys) {
        if (arg0.hasOwnProperty(item10007)) {
          let tmp7 = arg0[closure_34[item10007]];
          if (null != tmp7) {
            closure_46[item10007] = tmp8;
          } else {
            delete tmp2[tmp];
          }
        }
        continue;
      }
      (function validateUpdate() {
        closure_0 = closure_7;
        if (null == closure_7) {
          return false;
        } else if (!closure_31.some((item) => closure_0[item] !== guild[item])) {
          closure_7 = closure_6;
        }
      })();
    }
  },
  GUILD_SETTINGS_PROFILE_UPDATE: function handleSettingsProfileUpdate(arg0) {
    closure_0 = arg0;
    if (null != obj) {
      if (null != guild) {
        if (guild.id === tmp) {
          const item = closure_32.forEach((item) => {
            if (null != obj) {
              if (closure_0.hasOwnProperty(item)) {
                if (undefined !== closure_0[item]) {
                  obj = {};
                  const merged = Object.assign(obj);
                  obj[item] = tmp3;
                }
              }
            }
          });
        }
      }
    }
    return false;
  },
  GUILD_SETTINGS_CANCEL_CHANGES: function handleCancelChanges(guildId) {
    errors = {};
    closure_46 = {};
    guild = GuildStore.getGuild(guildId.guildId);
    if (null != guild) {
      closure_7 = guild;
    }
  },
  GUILD_SETTINGS_SAVE_ROUTE_STACK: function handleSaveRouteStack(state) {
    state = state.state;
    return false;
  },
  GUILD_SETTINGS_SUBMIT: function handleFormSubmit() {
    CLOSED = FormStates.SUBMITTING;
    errors = {};
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function handleSubmitSuccess(guild) {
    CLOSED = FormStates.OPEN;
    closure_46 = {};
    let tmp = null != guild.guild;
    if (tmp) {
      tmp = null != guild;
    }
    if (tmp) {
      tmp = guild.id === guild.guild.id;
    }
    if (tmp) {
      const fromGuildResult = GuildRecordUtils.fromGuild(guild.guild, guild);
      guild = fromGuildResult;
    }
  },
  GUILD_SETTINGS_SUBMIT_FAILURE: function handleFormSubmitFailure(errors) {
    CLOSED = FormStates.OPEN;
    let defaultGuildSettingsSection = c3;
    if (c3 == null) {
      defaultGuildSettingsSection = getDefaultGuildSettingsSection.getDefaultGuildSettingsSection();
    }
    c3 = defaultGuildSettingsSection;
    c4 = null;
    errors = errors.errors;
    if (errors == null) {
      errors = {};
    }
  },
  GUILD_SETTINGS_SET_SECTION: function handleSetSection(section) {
    if (null == guild) {
      return false;
    } else {
      ({ section: c3, subsection: c4 } = section);
      if (c3 !== constants.INSTANT_INVITES) {
        if (c3 !== constants.INVITES) {
          if (c3 !== constants.INTEGRATIONS) {
            if (c3 !== constants.ROLES) {
              if (c3 === constants.MEMBERS) {
                c10 = getGuildEveryoneRoleId(guild);
              } else if (c3 === constants.VANITY_URL) {
                const vanityUrl = GuildSettingsVanityURLActionCreators.fetchVanityUrl(guild.id);
              } else if (c3 === constants.SAFETY) {
                if (null == c4) {
                  let SAFETY_OVERVIEW = constants2.SAFETY_OVERVIEW;
                } else {
                  SAFETY_OVERVIEW = c4;
                }
                obj = { type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION", subsection: SAFETY_OVERVIEW };
                DispatcherDefault.dispatch(obj);
              }
            }
          }
          c10 = null;
          if (tmp25 !== section.section) {
            let tmp12 = null != guild;
            if (tmp12) {
              tmp12 = CLOSED === FormStates.OPEN;
            }
            if (tmp12) {
              let tmp13 = "GUILD_INTEGRATIONS_UPDATE" !== section.type;
              if (!tmp13) {
                tmp13 = section.guildId === guild.id;
              }
              if (tmp13) {
                const guildIntegrationsApplications = GuildSettingsFetchActionCreators.fetchGuildIntegrationsApplications(guild.id);
              }
              tmp12 = tmp13;
            }
            return tmp12;
          }
        }
      }
      const HTTP = HTTPUtils.HTTP;
      const obj4 = { url: closure_1_25.GUILD_INSTANT_INVITES(guild.id), oldFormErrors: true, rejectWithError: true };
      value = HTTP.get(obj4);
      value.then((body) => {
        DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_LOADED_INVITES", invites: body.body });
      });
    }
  },
  GUILD_SETTINGS_SET_SEARCH_QUERY: function handleSetSearchQuery(searchQuery) {
    searchQuery = searchQuery.searchQuery;
  },
  GUILD_SETTINGS_LOADED_BANS: function handleLoadedBans(bans) {
    bans = bans.bans;
    c55 = bans.reduce((set, user) => {
      if (tmp) {
        const result = set.set(user.user.id, user);
      }
      return set;
    }, new Map());
    closure_56 = closure_56 + 1;
  },
  GUILD_SETTINGS_LOADED_BANS_BATCH: function handleLoadedBansBatch(arg0) {
    ({ bans, guildId } = arg0);
    let tmp = guildId === guildId;
    if (tmp) {
      tmp = null != c55;
    }
    if (!tmp) {
      const _Map = Map;
      const map = new Map();
      c55 = map;
    }
    c55 = bans.reduce((set, user) => {
      if (tmp) {
        const result = set.set(user.user.id, user);
      }
      return set;
    }, c55);
    closure_56 = closure_56 + 1;
  },
  GUILD_SETTINGS_LOADED_INVITES: function handleLoadedInvites(invites) {
    invites = invites.invites;
    invites.reduce((acc, code) => {
      acc[code.code] = _createInvite(code);
      return acc;
    }, {});
  },
  GUILD_SETTINGS_SET_WIDGET: function handleSetEmbed(enabled) {
    c39 = true;
    enabled = enabled.enabled;
    c41 = enabled;
    channelId = enabled.channelId;
    c43 = channelId;
  },
  GUILD_SETTINGS_SET_VANITY_URL: function handleSetVanityURL(code) {
    code = code.code;
    if (code == null) {
      code = null;
    }
    c47 = code;
    const uses = code.uses;
  },
  GUILD_SETTINGS_SET_MFA_SUCCESS: function handleSetMFALevelSuccess(level) {
    NONE = level.level;
  },
  GUILD_SETTINGS_ROLE_SELECT: function handleRoleSelect(roleId) {
    roleId = roleId.roleId;
    if (roleId == null) {
      roleId = null;
    }
    c10 = roleId;
  },
  GUILD_SETTINGS_LOADED_INTEGRATIONS: function handleLoadedIntegrations(integrations) {
    integrations = integrations.integrations;
  },
  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function handlePinPermissionMigrated(arg0) {
    if (null != guild) {
      if (tmp === guild.id) {
        const _Set = Set;
        const items = [];
        items[HermesBuiltin.arraySpread(guild.features, 0)] = constants3.PIN_PERMISSION_MIGRATION_COMPLETE;
        set = new Set(items);
        guild = set(guild, "features", set);
      }
    }
    return false;
  },
  GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function handleSlowmodePermissionMigrated(arg0) {
    if (null != guild) {
      if (tmp === guild.id) {
        const _Set = Set;
        const items = [];
        items[HermesBuiltin.arraySpread(guild.features, 0)] = constants3.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE;
        set = new Set(items);
        guild = set(guild, "features", set);
      }
    }
    return false;
  },
  GUILD_BAN_ADD: function handleAddBan(user) {
    user = user.user;
    let tmp2 = null != bans;
    if (tmp2) {
      let tmp4 = null != guild;
      if (tmp4) {
        tmp4 = guild.id === tmp;
      }
      if (tmp4) {
        obj = { user, reason: null };
        const result = bans.set(user.id, obj);
        closure_56 = +closure_56 + 1;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  GUILD_BAN_REMOVE: function handleRemoveBan(arg0) {
    let tmp3 = null != bans;
    if (tmp3) {
      let tmp5 = null != guild;
      if (tmp5) {
        tmp5 = guild.id === tmp2;
      }
      if (tmp5) {
        bans.delete(tmp.id);
        closure_56 = +closure_56 + 1;
      }
      tmp3 = tmp5;
    }
    return tmp3;
  },
  GUILD_ROLE_CREATE: function handleRoleCreate(guildId) {
    guildId = guildId.guildId;
    let flag = false;
    if (null != closure_7) {
      flag = false;
      if (null != guild) {
        flag = false;
        if (guild.id === guildId) {
          guild = GuildStore.getGuild(guildId);
          let flag2 = null != guild;
          if (flag2) {
            if (guild !== closure_7) {
              flag2 = true;
            }
          }
          closure_7 = guild;
          flag2 = true;
        }
      }
    }
    return flag ? undefined : false;
  },
  GUILD_ROLE_UPDATE: function handleRoleUpdate(guildId) {
    guildId = guildId.guildId;
    let flag = false;
    if (null != closure_7) {
      flag = false;
      if (null != guild) {
        flag = false;
        if (guild.id === guildId) {
          guild = GuildStore.getGuild(guildId);
          let flag2 = null != guild;
          if (flag2) {
            if (guild !== closure_7) {
              flag2 = true;
            }
          }
          closure_7 = guild;
          flag2 = true;
        }
      }
    }
    return flag ? undefined : false;
  },
  GUILD_ROLE_DELETE: function handleRoleDelete(guildId) {
    guildId = guildId.guildId;
    let flag = false;
    if (null != closure_7) {
      flag = false;
      if (null != guild) {
        flag = false;
        if (guild.id === guildId) {
          guild = GuildStore.getGuild(guildId);
          let flag2 = null != guild;
          if (flag2) {
            if (guild !== closure_7) {
              flag2 = true;
            }
          }
          closure_7 = guild;
          flag2 = true;
        }
      }
    }
    if (flag) {
      if (c10 === guildId.roleId) {
        c10 = null;
      }
    } else {
      return false;
    }
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    if (null != guild) {
      if (guild.id === guild.guild.id) {
        guild = GuildStore.getGuild(guild.id);
        if (null == guild) {
          return false;
        } else {
          profile = GuildProfileStore.getProfile(guild.id);
          let result = c3 === constants.PROFILE;
          if (!result) {
            result = c3 === constants.TAG;
          }
          if (!result) {
            result = guild(obj2[12]).isServerTagDraftDirty(closure_9, profile);
            obj = guild(obj2[12]);
          }
          if (!result) {
            closure_9 = profile;
          }
          if (c3 !== constants.PROFILE) {
            closure_1 = guild;
            obj2 = {};
            const merged = Object.assign(guild);
            const item = closure_31.forEach((item) => {
              if (!set.has(item)) {
                let tmp = "rulesChannelId" !== item;
                if (tmp) {
                  tmp = "publicUpdatesChannelId" !== item;
                }
                if (!tmp) {
                  tmp = obj2[item] !== __initData7;
                }
                if (tmp) {
                  tmp = "features" !== item;
                }
                if (tmp) {
                  if ("ownerConfiguredContentLevel" !== item) {
                    let tmp7 = obj2[item];
                  } else {
                    tmp7 = guild[item];
                  }
                  closure_1 = set(closure_1, item, tmp7);
                }
              }
            });
            guild = closure_1;
          }
        }
      }
    }
    return false;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    if (null != guild) {
      if (guild.id === guild.guild.id) {
        c35 = false;
        CLOSED = FormStates.CLOSED;
        guild = null;
        c39 = false;
        c41 = false;
        c43 = null;
        settings = null;
        c47 = null;
        c48 = 0;
        c55 = null;
        c59 = null;
        c3 = null;
        c4 = null;
        c5 = null;
        NONE = MFALevels.NONE;
        closure_46 = {};
        c11 = undefined;
      }
    }
    return false;
  },
  GUILD_PROFILE_FETCH_SUCCESS: function handleProfileFetch(profile) {
    profile = profile.profile;
    let id;
    if (guild != null) {
      id = guild.id;
    }
    let tmp2 = profile.id === id;
    if (tmp2) {
      obj = GuildSettingsServerTagUtils;
      const result = obj.isServerTagDraftDirty(obj, profile);
      if (!result) {
        obj = profile;
      }
      tmp2 = !result;
      const tmp8 = !result;
    }
    return tmp2;
  },
  GUILD_PROFILE_UPDATE: handleProfileUpdateStart,
  GUILD_PROFILE_UPDATE_SUCCESS: function handleProfileApiUpdate(profile) {
    profile = profile.profile;
    let id1;
    if (obj != null) {
      id1 = obj.id;
    }
    let tmp2 = null != id1;
    if (tmp2) {
      const id = obj.id;
      let flag = false;
      if (null != guild) {
        flag = false;
        if (null != guild) {
          flag = false;
          if (guild.id === id) {
            guild = GuildStore.getGuild(id);
            let flag2 = null != guild;
            if (flag2) {
              if (guild !== guild) {
                flag2 = true;
              }
            }
            flag2 = true;
          }
        }
      }
      if (flag) {
        let id2;
        if (guild != null) {
          id2 = guild.id;
        }
        if (profile.id === id2) {
          c38 = null;
        }
      }
      tmp2 = tmp12;
    }
    return tmp2;
  },
  GUILD_PROFILE_UPDATE_FAILURE: handleProfileApiUpdateFailure,
  GUILD_PROFILE_UPDATE_VISIBILITY: handleProfileUpdateStart,
  GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function handleProfileApiUpdateVisibility(guildId) {
    guildId = guildId.guildId;
    let id1;
    if (obj != null) {
      id1 = obj.id;
    }
    let tmp2 = null != id1;
    if (tmp2) {
      const id = obj.id;
      let flag = false;
      if (null != guild) {
        flag = false;
        if (null != guild) {
          flag = false;
          if (guild.id === id) {
            guild = GuildStore.getGuild(id);
            let flag2 = null != guild;
            if (flag2) {
              if (guild !== guild) {
                flag2 = true;
              }
            }
            flag2 = true;
          }
        }
      }
      if (flag) {
        let id2;
        if (guild != null) {
          id2 = guild.id;
        }
        if (guildId === id2) {
          profile = GuildProfileStore.getProfile(guildId);
          c38 = null;
        }
      }
      tmp2 = tmp12;
    }
    return tmp2;
  },
  GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: handleProfileApiUpdateFailure,
  USER_CONNECTIONS_UPDATE: handleIntegrationsUpdate,
  GUILD_INTEGRATIONS_UPDATE: handleIntegrationsUpdate,
  INSTANT_INVITE_REVOKE_SUCCESS: function handleInviteRevoke(arg0) {
    obj = {};
    const merged = Object.assign(obj);
    delete tmp2[tmp];
  },
  INSTANT_INVITE_CREATE_SUCCESS: function handleInviteCreateSuccess(invite) {
    obj = {};
    const merged = Object.assign(obj);
    obj[invite.invite.code] = _createInvite(invite.invite);
  },
  GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function handleGuildMetadataServerUpdate(metadata) {
    metadata = metadata.metadata;
    let tmp2 = null != guild;
    if (tmp2) {
      tmp2 = tmp === guild.id;
    }
    if (tmp2) {
      if (false === c52) {
        c52 = true;
      }
      let primaryCategoryId = metadata.primaryCategoryId;
      if (primaryCategoryId == null) {
        primaryCategoryId = DEFAULT_DISCOVERY_CATEGORY_ID;
      }
      obj = { primaryCategoryId, secondaryCategoryIds: null, keywords: null, emojiDiscoverabilityEnabled: null, partnerActionedTimestamp: null, partnerApplicationTimestamp: null, isPublished: null, reasonsToJoin: null, socialLinks: null, about: null };
      let secondaryCategoryIds = metadata.secondaryCategoryIds;
      if (secondaryCategoryIds == null) {
        secondaryCategoryIds = [];
      }
      obj.secondaryCategoryIds = secondaryCategoryIds;
      let keywords = metadata.keywords;
      if (keywords == null) {
        keywords = [];
      }
      obj.keywords = keywords;
      let emojiDiscoverabilityEnabled = metadata.emojiDiscoverabilityEnabled;
      if (emojiDiscoverabilityEnabled == null) {
        emojiDiscoverabilityEnabled = c30;
      }
      obj.emojiDiscoverabilityEnabled = emojiDiscoverabilityEnabled;
      let prop = metadata.partnerActionedTimestamp;
      if (prop == null) {
        prop = null;
      }
      obj.partnerActionedTimestamp = prop;
      let prop1 = metadata.partnerApplicationTimestamp;
      if (prop1 == null) {
        prop1 = null;
      }
      obj.partnerApplicationTimestamp = prop1;
      let flag3 = metadata.isPublished;
      if (flag3 == null) {
        flag3 = false;
      }
      obj.isPublished = flag3;
      let reasonsToJoin = metadata.reasonsToJoin;
      if (reasonsToJoin == null) {
        reasonsToJoin = [];
      }
      obj.reasonsToJoin = reasonsToJoin;
      let socialLinks = metadata.socialLinks;
      if (socialLinks == null) {
        socialLinks = [];
      }
      obj.socialLinks = socialLinks;
      let str = metadata.about;
      if (str == null) {
        str = "";
      }
      obj.about = str;
      errors = {};
    }
  },
  GUILD_DISCOVERY_METADATA_FETCH_FAIL: function handleGuildMetadataFetchFail() {

  },
  GUILD_DISCOVERY_CATEGORY_ADD: function handleGuildCategoryAdd(categoryId) {
    categoryId = categoryId.categoryId;
    let tmp2 = null != guild;
    if (tmp2) {
      tmp2 = tmp === guild.id;
    }
    if (tmp2) {
      obj = {};
      const merged = Object.assign(obj);
      const items = [];
      items[HermesBuiltin.arraySpread(obj.secondaryCategoryIds, 0)] = categoryId;
      obj.secondaryCategoryIds = items;
      obj2 = {};
      const merged1 = Object.assign(obj2);
      const items1 = [];
      items1[HermesBuiltin.arraySpread(obj2.secondaryCategoryIds, 0)] = categoryId;
      obj2.secondaryCategoryIds = items1;
    }
  },
  GUILD_DISCOVERY_CATEGORY_DELETE: function handleGuildCategoryDelete(categoryId) {
    categoryId = categoryId.categoryId;
    if (null != guild) {
      if (tmp === guild.id) {
        const secondaryCategoryIds = obj.secondaryCategoryIds;
        const index = secondaryCategoryIds.indexOf(categoryId);
        if (-1 !== index) {
          const items = [];
          HermesBuiltin.arraySpread(obj.secondaryCategoryIds, 0);
          items.splice(index, 1);
          obj = {};
          const merged = Object.assign(obj);
          obj.secondaryCategoryIds = items;
        }
        const secondaryCategoryIds1 = obj2.secondaryCategoryIds;
        const index1 = secondaryCategoryIds1.indexOf(categoryId);
        if (-1 !== index1) {
          const items1 = [];
          HermesBuiltin.arraySpread(obj2.secondaryCategoryIds, 0);
          items1.splice(index1, 1);
          obj2 = {};
          const merged1 = Object.assign(obj2);
          obj2.secondaryCategoryIds = items1;
        }
      }
    }
  },
  GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function handleGuildCategoryUpdateFail(errors) {
    errors = errors.errors;
    let tmp2 = null != guild;
    if (tmp2) {
      tmp2 = tmp === guild.id;
    }
    if (tmp2) {
      if (errors == null) {
        errors = {};
      }
    }
  },
  GUILD_UPDATE_DISCOVERY_METADATA: function handleGuildUpdateMetadata(arg0) {
    ({ primaryCategoryId, keywords, emojiDiscoverabilityEnabled, isPublished, reasonsToJoin, socialLinks, about } = arg0);
    let tmp2 = null != guild;
    if (tmp2) {
      tmp2 = tmp === guild.id;
    }
    if (tmp2) {
      obj = {};
      const merged = Object.assign(obj);
      if (null == primaryCategoryId) {
        primaryCategoryId = obj.primaryCategoryId;
      }
      obj.primaryCategoryId = primaryCategoryId;
      if (null == keywords) {
        keywords = obj.keywords;
      }
      obj.keywords = keywords;
      if (emojiDiscoverabilityEnabled == null) {
        emojiDiscoverabilityEnabled = obj.emojiDiscoverabilityEnabled;
      }
      obj.emojiDiscoverabilityEnabled = emojiDiscoverabilityEnabled;
      if (isPublished == null) {
        isPublished = obj.isPublished;
      }
      obj.isPublished = isPublished;
      if (null == reasonsToJoin) {
        reasonsToJoin = obj.reasonsToJoin;
      }
      obj.reasonsToJoin = reasonsToJoin;
      if (null == socialLinks) {
        socialLinks = obj.socialLinks;
      }
      obj.socialLinks = socialLinks;
      if (null == about) {
        about = obj.about;
      }
      obj.about = about;
    }
  },
  GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function handleGuildUpdateMetadataFail(errors) {
    errors = errors.errors;
    let tmp2 = null != guild;
    if (tmp2) {
      tmp2 = tmp === guild.id;
    }
    if (tmp2) {
      if (errors == null) {
        errors = {};
      }
    }
  },
  GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function handleGuildDiscoverySlugFetchSuccess(slug) {
    slug = slug.slug;
  },
  GUILD_DISCOVERY_SLUG_FETCH_FAIL: function handleGuildDiscoverySlugFetchFail(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      c12 = null;
    }
  },
  GUILD_SETTINGS_WIDGET_UPDATE: function handleWidgetUpdate(arg0) {
    if (null != guild) {
      if (guild.id === tmp) {
        c41 = tmp2;
        c43 = tmp3;
      }
    }
    return false;
  },
  GUILD_SETTINGS_GUILD_SPACE_SETTINGS_UPDATE: function handleGuildSpaceSettingsUpdate(settings) {
    settings = settings.settings;
    if (null != guild) {
      if (guild.id === tmp) {
        if (null != settings) {
          obj = {};
          const merged = Object.assign(settings);
          const merged1 = Object.assign(settings);
          settings = obj;
        }
      }
    }
    return false;
  },
  GUILD_SETTINGS_SET_GUILD_SPACE_SETTINGS: function handleSetGuildSpaceSettings(settings) {
    settings = settings.settings;
    return false;
  }
};
const guildSettingsStore = new GuildSettingsStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsStore.tsx");

export default guildSettingsStore;
export const EMPTY_METADATA = obj;