// === Module 9283: GuildSettingsStore ===

// Module 9283 (GuildSettingsStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2066 */;
import PlainRecord from "PlainRecord" /* 2067 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import _modDef4467 from "module_4467" /* 4467 */;
import GlobalDiscoveryServersConstants from "GlobalDiscoveryServersConstants" /* 9284 */;
import GuildSettingsServerTagUtils from "GuildSettingsServerTagUtils" /* 9285 */;
import GuildSettingsVanityURLActionCreators from "GuildSettingsVanityURLActionCreators" /* 9287 */;
import getDefaultGuildSettingsSection from "getDefaultGuildSettingsSection" /* 9288 */;
import GuildSettingsFetchActionCreators from "GuildSettingsFetchActionCreators" /* 9289 */;
import GuildProfileStore from "GuildProfileStore" /* 9262 */;
import InviteRecord from "InviteRecord" /* 8066 */;
import UserRecord from "UserRecord" /* 1391 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import PublicGuildsConstants from "PublicGuildsConstants" /* 7717 */;
import size from "module_2" /* 2 */;

let c11, c12, c52, closure_56, closure_9, defaultGuildSettingsSection, map;

let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_28;
let closure_29;
function handleFormInit(location) {
  let section;
  ({ guildId, section, subsection } = location);
  _location = location.location;
  guild = GuildStore.getGuild(guildId);
  if (null == guild) {
    c35 = false;
    CLOSED = FormStates.CLOSED;
    guild = null;
    let c39 = false;
    enabled = false;
    channelId = null;
    settings = null;
    code = null;
    let c48 = 0;
    let c55 = null;
    obj = null;
    let c59 = null;
    defaultGuildSettingsSection = null;
    let c4 = null;
    let c5 = null;
    NONE = MFALevels.NONE;
    closure_46 = {};
    c11 = undefined;
  } else {
    profile = GuildProfileStore.getProfile(guildId);
    const guildSpaceSettings = guild.guildSpaceSettings;
    settings = guildSpaceSettings;
    CLOSED = FormStates.OPEN;
    errors = {};
    c38 = null;
    const obj5 = SnowflakeUtilsDefault;
    roleId = obj5.castGuildIdAsEveryoneGuildRoleId(guildId);
    NONE = guild.mfaLevel;
    obj = obj2;
    c12 = null;
    closure_46 = {};
    if (section === constants.TAG) {
      obj = GuildSettingsServerTagUtils;
      if (!obj.canUseMobileServerTagSettings(guildId)) {
        c11 = undefined;
      }
    }
    if (null != section) {
      const items = [{ key: "landing", name: constants.LANDING }];
      const obj3 = { key: "landing", name: constants.LANDING };
      if (section === constants.TAG_CUSTOMIZE) {
        const obj4 = { key: null, name: null };
        ({ TAG: obj2.key, TAG: obj2.name } = constants);
        items.push(obj4);
      }
      const obj6 = { key: section, name: section };
      items.push(obj6);
      c11 = { type: "stack", routes: items };
      const obj10 = { type: "stack", routes: items };
    }
  }
}
function _createInvite(code) {
  let created_at;
  let fromInviteGuildResult;
  let tmp2;
  let tmp7;
  obj = { code: code.code, temporary: code.temporary, revoked: code.revoked, inviter: tmp2, channel: closure_15(code.channel), guild: fromInviteGuildResult, uses: null, maxUses: null, maxAge: null, createdAt: tmp7(created_at), flags: null, roles: null };
  tmp2 = null;
  if (null != code.inviter) {
    const self = this;
    const self2 = this;
    tmp2 = new UserRecord(code.inviter);
  }
  fromInviteGuildResult = null;
  if (null != code.guild) {
    obj2 = GuildRecordUtils;
    fromInviteGuildResult = obj2.fromInviteGuild(code.guild);
  }
  ({ uses: obj.uses, max_uses: obj.maxUses, max_age: obj.maxAge } = code);
  created_at = code.created_at;
  ({ flags: obj.flags, roles: obj.roles } = code);
  tmp7 = _modDef4467;
  const tmp4 = new InviteRecord(obj);
  return tmp4;
}
function handleIntegrationsUpdate(type) {
  let tmp = null != guild && CLOSED === FormStates.OPEN;
  if (tmp) {
    if ("GUILD_INTEGRATIONS_UPDATE" !== type.type || type.guildId === guild.id) {
      obj = GuildSettingsFetchActionCreators;
      const guildIntegrationsApplications = obj.fetchGuildIntegrationsApplications(guild.id);
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
let channelId = null;
let settings = null;
let closure_46 = {};
let code = null;
let c48 = 0;
let NONE = MFALevels.NONE;
let _location = null;
let obj = { primaryCategoryId: DEFAULT_DISCOVERY_CATEGORY_ID, secondaryCategoryIds: [], keywords: [], emojiDiscoverabilityEnabled: true, partnerActionedTimestamp: null, partnerApplicationTimestamp: null, isPublished: false, reasonsToJoin: [], socialLinks: [], about: "" };
const isGuildMetadataLoaded = false;
let obj2 = obj;
let bans = null;
const bansVersion = 0;
let guildId = null;
obj = null;
let integrations = null;
const Store = get_initializedDefault.Store;
class GuildSettingsStore extends Store {
  initialize() {
    this.waitFor(GuildStore, GuildProfileStore, UserStore);
  }
  getMetadata() {
    return obj;
  }
  widgetHasChanges() {
    let tmp = false !== c39;
    if (tmp) {
      tmp = enabled !== enabled || channelId !== channelId;
      const tmp4 = enabled !== enabled || channelId !== channelId;
    }
    return tmp;
  }
  guildSpaceSettingsHasChanges() {
    enabled = undefined;
    if (settings != null) {
      enabled = settings.enabled;
    }
    let enabled1;
    if (settings != null) {
      enabled1 = settings.enabled;
    }
    return enabled !== enabled1;
  }
  hasChanges() {
    obj = _modDef12;
    const isEqualResult = obj.isEqual(closure_7, guild);
    let widgetHasChangesResult = !isEqualResult;
    if (isEqualResult) {
      const tmpResult = _modDef12;
      widgetHasChangesResult = !tmpResult.isEqual(obj, obj2);
    }
    if (!widgetHasChangesResult) {
      const tmpResult2 = _modDef12;
      widgetHasChangesResult = !tmpResult2.isEqual(obj, profile);
    }
    const self = this;
    if (!widgetHasChangesResult) {
      widgetHasChangesResult = self.widgetHasChanges();
    }
    if (!widgetHasChangesResult) {
      widgetHasChangesResult = self.guildSpaceSettingsHasChanges();
    }
    return widgetHasChangesResult;
  }
  isOpen() {
    return c35;
  }
  getSavedRouteState() {
    return c11;
  }
  getSection() {
    return defaultGuildSettingsSection;
  }
  showNotice() {
    return this.hasChanges();
  }
  getGuildId() {
    let id = null;
    if (null != guild) {
      id = guild.id;
    }
    return id;
  }
  showPublicSuccessModal() {
    const Storage = Storage2.Storage;
    return !Storage.get(closure_28);
  }
  getGuild() {
    return guild;
  }
  getPendingOriginalMd5s() {
    return closure_46;
  }
  getGuildProfile() {
    return obj;
  }
  getWidget() {
    return { enabled, channelId };
  }
  getGuildSpaceSettings() {
    return settings;
  }
  isSubmitting() {
    return CLOSED === FormStates.SUBMITTING;
  }
  isGuildMetadataLoaded() {
    return c52;
  }
  getErrors() {
    return errors;
  }
  getError(arg0) {
    let tmp = errors[arg0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }
  getProfileError() {
    return c38;
  }
  getSelectedRoleId() {
    return roleId;
  }
  getSlug() {
    return c12;
  }
  getBans() {
    const items = [c55, bansVersion];
    return items;
  }
  getProps() {
    obj = { submitting: this.isSubmitting(), integrations, section: defaultGuildSettingsSection, subsection, errors, guild, bans, bansVersion, invites: obj, selectedRoleId: roleId, fetchedEmbed, embedEnabled: enabled, embedChannelId: channelId, guildSpaceSettings: settings, mfaLevel: NONE, searchQuery, vanityURLCode: code, vanityURLUses, originalGuild: guild, hasChanges: this.hasChanges(), guildMetadata: obj, analyticsLocation: _location, isGuildMetadataLoaded, originalProfile: profile, profile: obj };
    return obj;
  }
}
const prototype = GuildSettingsStore.prototype;
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
    let closure_7 = null;
    guild = null;
    let c39 = false;
    enabled = false;
    channelId = null;
    settings = null;
    code = null;
    let c48 = 0;
    let c55 = null;
    let c59 = null;
    defaultGuildSettingsSection = null;
    let c4 = null;
    let c5 = null;
    NONE = MFALevels.NONE;
    closure_46 = {};
    c11 = undefined;
  },
  GUILD_SETTINGS_UPDATE: function handleUpdate(arg0) {
    function validateUpdate() {
      closure_0 = closure_7;
      if (null == closure_7) {
        return false;
      } else if (!closure_31.some((item) => closure_0[item] !== guild[item])) {
        closure_7 = closure_6;
      }
    }
    let closure_0 = arg0;
    if (null == closure_7) {
      return false;
    } else {
      const item = closure_31.forEach((item) => {
        const hasOwnPropertyResult = null != closure_7 && closure_0.hasOwnProperty(item);
        if (hasOwnPropertyResult) {
          let tmp6 = closure_0[item];
          const tmp4 = closure_7;
          if (tmp6 == null) {
            tmp6 = null;
          }
          closure_7 = set(tmp4, item, tmp6);
        }
      });
      const _Object = Object;
      const keys = Object.keys(closure_34);
      for (const item10007 of keys) {
        if (arg0.hasOwnProperty(item10007)) {
          let tmp5 = arg0[closure_34[item10007]];
          if (null != tmp5) {
            closure_46[item10007] = tmp6;
          } else {
            delete closure_46[item10007];
          }
        }
        continue;
      }
      validateUpdate();
    }
  },
  GUILD_SETTINGS_PROFILE_UPDATE: function handleSettingsProfileUpdate(arg0) {
    let closure_0 = arg0;
    if (null != obj) {
      if (null != guild) {
        if (guild.id === tmp) {
          const item = closure_32.forEach((item) => {
            if (null != obj) {
              if (closure_0.hasOwnProperty(item)) {
                if (undefined !== closure_0[item]) {
                  obj = {};
                  const merged = Object.assign(obj);
                  obj[item] = closure_0[item];
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
      let closure_7 = guild;
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
    const tmp = null != guild.guild && null != guild && guild.id === guild.guild.id;
    if (tmp) {
      obj = GuildRecordUtils;
      const fromGuildResult = obj.fromGuild(guild.guild, guild);
      guild = fromGuildResult;
    }
  },
  GUILD_SETTINGS_SUBMIT_FAILURE: function handleFormSubmitFailure(errors) {
    CLOSED = FormStates.OPEN;
    if (defaultGuildSettingsSection == null) {
      obj = getDefaultGuildSettingsSection;
      defaultGuildSettingsSection = obj.getDefaultGuildSettingsSection();
    }
    let c4 = null;
    errors = errors.errors;
    if (errors == null) {
      errors = {};
    }
  },
  GUILD_SETTINGS_SET_SECTION: function handleSetSection(section) {
    let c4;
    if (null == guild) {
      return false;
    } else {
      ({ section: defaultGuildSettingsSection, subsection: c4 } = section);
      if (defaultGuildSettingsSection !== constants.INSTANT_INVITES) {
        if (defaultGuildSettingsSection !== constants.INVITES) {
          if (defaultGuildSettingsSection !== constants.INTEGRATIONS) {
            if (defaultGuildSettingsSection !== constants.ROLES) {
              if (defaultGuildSettingsSection === constants.MEMBERS) {
                roleId = getGuildEveryoneRoleId(guild);
              } else if (defaultGuildSettingsSection === constants.VANITY_URL) {
                obj2 = GuildSettingsVanityURLActionCreators;
                const vanityUrl = obj2.fetchVanityUrl(guild.id);
              } else if (defaultGuildSettingsSection === constants.SAFETY) {
                let SAFETY_OVERVIEW;
                const dispatch = DispatcherDefault.dispatch;
                DispatcherDefault;
                if (null == c4) {
                  SAFETY_OVERVIEW = constants2.SAFETY_OVERVIEW;
                } else {
                  SAFETY_OVERVIEW = c4;
                }
                obj = { type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION", subsection: SAFETY_OVERVIEW };
                dispatch(obj);
              }
            }
          }
          roleId = null;
          if (tmp25 !== section.section) {
            let tmp12 = null != guild && CLOSED === FormStates.OPEN;
            if (tmp12) {
              if ("GUILD_INTEGRATIONS_UPDATE" !== section.type || section.guildId === guild.id) {
                const obj3 = GuildSettingsFetchActionCreators;
                const guildIntegrationsApplications = obj3.fetchGuildIntegrationsApplications(guild.id);
              }
              tmp12 = tmp13;
            }
            return tmp12;
          }
        }
      }
      const HTTP = HTTPUtils.HTTP;
      const get = HTTP.get;
      const obj4 = { url: closure_25.GUILD_INSTANT_INVITES(guild.id), oldFormErrors: true, rejectWithError: true };
      const value = get(obj4);
      value.then((body) => {
        obj = DispatcherDefault;
        obj2 = { type: "GUILD_SETTINGS_LOADED_INVITES", invites: body.body };
        obj.dispatch(obj2);
      });
    }
  },
  GUILD_SETTINGS_SET_SEARCH_QUERY: function handleSetSearchQuery(searchQuery) {
    searchQuery = searchQuery.searchQuery;
  },
  GUILD_SETTINGS_LOADED_BANS: function handleLoadedBans(bans) {
    bans = bans.bans;
    const reduce = bans.reduce;
    map = new Map();
    let c55 = reduce((set, user) => {
      const tmp = null != user.user && null != user.user.id;
      if (tmp) {
        const result = set.set(user.user.id, user);
      }
      return set;
    }, map);
    closure_56 = closure_56 + 1;
  },
  GUILD_SETTINGS_LOADED_BANS_BATCH: function handleLoadedBansBatch(arg0) {
    ({ bans, guildId } = arg0);
    let tmp = guildId === guildId && null != c55;
    if (!tmp) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      c55 = new Map();
      map = new Map();
    }
    c55 = bans.reduce((set, user) => {
      const tmp = null != user.user && null != user.user.id;
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
    let c39 = true;
    enabled = enabled.enabled;
    channelId = enabled.channelId;
  },
  GUILD_SETTINGS_SET_VANITY_URL: function handleSetVanityURL(code) {
    code = code.code;
    if (code == null) {
      code = null;
    }
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
  },
  GUILD_SETTINGS_LOADED_INTEGRATIONS: function handleLoadedIntegrations(integrations) {
    integrations = integrations.integrations;
  },
  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function handlePinPermissionMigrated(arg0) {
    if (null != guild) {
      if (tmp2 === guild.id) {
        const _Set = Set;
        const items = [];
        items[HermesBuiltin.arraySpread(items, guild.features, 0)] = constants3.PIN_PERMISSION_MIGRATION_COMPLETE;
        const self = this;
        const self2 = this;
        set = new Set(items);
        guild = set(guild, "features", set);
      }
    }
    return false;
  },
  GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function handleSlowmodePermissionMigrated(arg0) {
    if (null != guild) {
      if (tmp2 === guild.id) {
        const _Set = Set;
        const items = [];
        items[HermesBuiltin.arraySpread(items, guild.features, 0)] = constants3.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE;
        const self = this;
        const self2 = this;
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
      if (null != guild && guild.id === tmp) {
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
      if (null != guild && guild.id === tmp2) {
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
            if (guild === closure_7) {
              closure_7 = guild;
              flag2 = true;
            } else {
              flag2 = true;
            }
          }
          flag = flag2;
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
            if (guild === closure_7) {
              closure_7 = guild;
              flag2 = true;
            } else {
              flag2 = true;
            }
          }
          flag = flag2;
        }
      }
    }
    return flag ? undefined : false;
  },
  GUILD_ROLE_DELETE: function handleRoleDelete(guildId) {
    guildId = guildId.guildId;
    let flag = false;
    roleId = guildId.roleId;
    if (null != closure_7) {
      flag = false;
      if (null != guild) {
        flag = false;
        if (guild.id === guildId) {
          guild = GuildStore.getGuild(guildId);
          let flag2 = null != guild;
          if (flag2) {
            if (guild === closure_7) {
              closure_7 = guild;
              flag2 = true;
            } else {
              flag2 = true;
            }
          }
          flag = flag2;
        }
      }
    }
    if (flag) {
      if (roleId === roleId) {
        roleId = null;
      }
    } else {
      return false;
    }
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    let closure_7;
    let closure_8;
    if (null != guild) {
      if (guild.id === guild.guild.id) {
        guild = GuildStore.getGuild(guild.id);
        if (null == guild) {
          return false;
        } else {
          profile = GuildProfileStore.getProfile(guild.id);
          let result = defaultGuildSettingsSection === constants.PROFILE || defaultGuildSettingsSection === constants.TAG;
          if (!result) {
            let tmp5 = closure_9;
            obj = guild(obj2[12]);
            result = obj.isServerTagDraftDirty(closure_9, profile);
          }
          if (!result) {
            let tmp7 = profile;
            closure_9 = profile;
          }
          if (defaultGuildSettingsSection !== constants.PROFILE) {
            let closure_1 = guild;
            obj2 = {};
            const merged = Object.assign(guild);
            const item = closure_31.forEach((item) => {
              if (!set.has(item)) {
                const tmp = ("rulesChannelId" !== item && "publicUpdatesChannelId" !== item || obj2[item] !== closure_29) && "features" !== item;
                if (tmp) {
                  let tmp7;
                  const tmp5 = closure_1;
                  if ("ownerConfiguredContentLevel" !== item) {
                    tmp7 = obj2[item];
                  } else {
                    tmp7 = guild[item];
                  }
                  closure_1 = set(tmp5, item, tmp7);
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
        let c39 = false;
        enabled = false;
        channelId = null;
        settings = null;
        code = null;
        let c48 = 0;
        let c55 = null;
        let c59 = null;
        defaultGuildSettingsSection = null;
        let c4 = null;
        let c5 = null;
        NONE = MFALevels.NONE;
        closure_46 = {};
        c11 = undefined;
      }
    }
    return false;
  },
  GUILD_PROFILE_FETCH_SUCCESS: function handleProfileFetch(profile) {
    profile = profile.profile;
    let id1;
    const id = profile.id;
    if (guild != null) {
      id1 = guild.id;
    }
    let tmp2 = id === id1;
    if (tmp2) {
      obj = GuildSettingsServerTagUtils;
      const result = obj.isServerTagDraftDirty(obj, profile);
      if (!result) {
        obj = profile;
      }
      tmp2 = tmp8;
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
              if (guild === guild) {
                flag2 = true;
              } else {
                flag2 = true;
              }
            }
            flag = flag2;
          }
        }
      }
      if (flag) {
        let id3;
        const id2 = profile.id;
        if (guild != null) {
          id3 = guild.id;
        }
        if (id2 === id3) {
          c38 = null;
        }
      }
      tmp2 = tmp11;
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
              if (guild === guild) {
                flag2 = true;
              } else {
                flag2 = true;
              }
            }
            flag = flag2;
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
      tmp2 = tmp11;
    }
    return tmp2;
  },
  GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: handleProfileApiUpdateFailure,
  USER_CONNECTIONS_UPDATE: handleIntegrationsUpdate,
  GUILD_INTEGRATIONS_UPDATE: handleIntegrationsUpdate,
  INSTANT_INVITE_REVOKE_SUCCESS: function handleInviteRevoke(arg0) {
    obj = {};
    const merged = Object.assign(obj);
    delete obj[arg0.code];
  },
  INSTANT_INVITE_CREATE_SUCCESS: function handleInviteCreateSuccess(invite) {
    obj = {};
    const merged = Object.assign(obj);
    obj[invite.invite.code] = _createInvite(invite.invite);
  },
  GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function handleGuildMetadataServerUpdate(metadata) {
    metadata = metadata.metadata;
    const tmp2 = null != guild && tmp === guild.id;
    if (tmp2) {
      if (false === c52) {
        c52 = true;
      }
      let primaryCategoryId = metadata.primaryCategoryId;
      if (primaryCategoryId == null) {
        primaryCategoryId = DEFAULT_DISCOVERY_CATEGORY_ID;
      }
      let secondaryCategoryIds = metadata.secondaryCategoryIds;
      if (secondaryCategoryIds == null) {
        secondaryCategoryIds = [];
      }
      let keywords = metadata.keywords;
      if (keywords == null) {
        keywords = [];
      }
      let emojiDiscoverabilityEnabled = metadata.emojiDiscoverabilityEnabled;
      if (emojiDiscoverabilityEnabled == null) {
        emojiDiscoverabilityEnabled = c30;
      }
      let prop = metadata.partnerActionedTimestamp;
      if (prop == null) {
        prop = null;
      }
      let prop1 = metadata.partnerApplicationTimestamp;
      if (prop1 == null) {
        prop1 = null;
      }
      let flag3 = metadata.isPublished;
      if (flag3 == null) {
        flag3 = false;
      }
      let reasonsToJoin = metadata.reasonsToJoin;
      if (reasonsToJoin == null) {
        reasonsToJoin = [];
      }
      let socialLinks = metadata.socialLinks;
      if (socialLinks == null) {
        socialLinks = [];
      }
      let str = metadata.about;
      if (str == null) {
        str = "";
      }
      errors = {};
    }
  },
  GUILD_DISCOVERY_METADATA_FETCH_FAIL: function handleGuildMetadataFetchFail() {

  },
  GUILD_DISCOVERY_CATEGORY_ADD: function handleGuildCategoryAdd(categoryId) {
    let items;
    let items1;
    categoryId = categoryId.categoryId;
    const tmp3 = null != guild && tmp2 === guild.id;
    if (tmp3) {
      obj = { secondaryCategoryIds: items };
      const merged = Object.assign(obj);
      items = [];
      items[HermesBuiltin.arraySpread(items, obj.secondaryCategoryIds, 0)] = categoryId;
      obj2 = { secondaryCategoryIds: items1 };
      const merged1 = Object.assign(obj2);
      items1 = [];
      items1[HermesBuiltin.arraySpread(items1, obj2.secondaryCategoryIds, 0)] = categoryId;
    }
  },
  GUILD_DISCOVERY_CATEGORY_DELETE: function handleGuildCategoryDelete(categoryId) {
    categoryId = categoryId.categoryId;
    if (null != guild) {
      if (tmp2 === guild.id) {
        const secondaryCategoryIds = obj.secondaryCategoryIds;
        const index = secondaryCategoryIds.indexOf(categoryId);
        if (-1 !== index) {
          const items = [];
          HermesBuiltin.arraySpread(items, obj.secondaryCategoryIds, 0);
          items.splice(index, 1);
          obj = { secondaryCategoryIds: items };
          const merged = Object.assign(obj);
        }
        const secondaryCategoryIds1 = obj2.secondaryCategoryIds;
        const index1 = secondaryCategoryIds1.indexOf(categoryId);
        if (-1 !== index1) {
          const items1 = [];
          HermesBuiltin.arraySpread(items1, obj2.secondaryCategoryIds, 0);
          items1.splice(index1, 1);
          obj2 = { secondaryCategoryIds: items1 };
          const merged1 = Object.assign(obj2);
        }
      }
    }
  },
  GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function handleGuildCategoryUpdateFail(errors) {
    errors = errors.errors;
    const tmp2 = null != guild && tmp === guild.id;
    if (tmp2) {
      if (errors == null) {
        errors = {};
      }
    }
  },
  GUILD_UPDATE_DISCOVERY_METADATA: function handleGuildUpdateMetadata(arg0) {
    let about;
    let emojiDiscoverabilityEnabled;
    let isPublished;
    let keywords;
    let primaryCategoryId;
    let reasonsToJoin;
    let socialLinks;
    ({ primaryCategoryId, keywords, emojiDiscoverabilityEnabled, isPublished, reasonsToJoin, socialLinks, about } = arg0);
    const tmp2 = null != guild && tmp === guild.id;
    if (tmp2) {
      obj = { primaryCategoryId, keywords, emojiDiscoverabilityEnabled, isPublished, reasonsToJoin, socialLinks, about };
      const merged = Object.assign(obj);
      if (null == primaryCategoryId) {
        primaryCategoryId = obj.primaryCategoryId;
      }
      if (null == keywords) {
        keywords = obj.keywords;
      }
      if (emojiDiscoverabilityEnabled == null) {
        emojiDiscoverabilityEnabled = obj.emojiDiscoverabilityEnabled;
      }
      if (isPublished == null) {
        isPublished = obj.isPublished;
      }
      if (null == reasonsToJoin) {
        reasonsToJoin = obj.reasonsToJoin;
      }
      if (null == socialLinks) {
        socialLinks = obj.socialLinks;
      }
      if (null == about) {
        about = obj.about;
      }
    }
  },
  GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function handleGuildUpdateMetadataFail(errors) {
    errors = errors.errors;
    const tmp2 = null != guild && tmp === guild.id;
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
        enabled = tmp2;
        channelId = tmp3;
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