// discord_app/modules/guild_settings/GuildSettingsStore.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import applyDefault from "../../../_runtime/00012_apply.js";
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import createChannelRecord from "../../records/ChannelRecord.tsx";
import fromGuildPropertiesWithAdditionalFields from "../../utils/GuildRecordUtils.tsx";
import isValueEqual from "../../lib/PlainRecord.tsx";
import GuildNSFWContentLevel from "../../records/GuildRecord.tsx";
import hooksDefault from "../../../_runtime/04074_hooks.js";
import DEFAULT_DISCOVERY_CATEGORY_ID2 from "../global_discovery_servers/GlobalDiscoveryServersConstants.tsx";
import canUseMobileServerTagSettings from "GuildSettingsServerTagUtils.tsx";
import fetchVanityUrl from "server_monetization/boost_perks/GuildSettingsVanityURLActionCreators.tsx";
import getDefaultGuildSettingsSection from "utils/getDefaultGuildSettingsSection.tsx";
import _fetchGuildIntegrationsApplications from "GuildSettingsFetchActionCreators.tsx";
import closure_14 from "../guild_profile/GuildProfileStore.tsx";
import closure_17 from "../../records/InviteRecord.tsx";
import closure_18 from "../../records/UserRecord.tsx";
import closure_19 from "../../stores/GuildStore.tsx";
import closure_20 from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";
import PUBLIC_SUCCESS_MODAL_SEEN_KEY from "../public_guilds/PublicGuildsConstants.tsx";
import set from "../../../_runtime/00002_set.js";

function handleFormInit(location) {
  ({ guildId, section, subsection } = location);
  let guild = store2.getGuild(guildId);
  if (null == guild) {
    c35 = false;
    let OPEN = FormStates.CLOSED;
    guild = null;
    guild = null;
    c39 = false;
    closure_41 = false;
    closure_43 = null;
    c45 = null;
    c46 = 0;
    c53 = null;
    c56 = null;
    c57 = null;
    c3 = null;
    c4 = null;
    c5 = null;
    let mfaLevel = MFALevels.NONE;
    closure_44 = {};
    let obj2;
  } else {
    const profile = store.getProfile(guildId);
    closure_41 = c40;
    closure_43 = c42;
    OPEN = FormStates.OPEN;
    closure_37 = {};
    c38 = null;
    closure_10 = DISCORD_EPOCHDefault.castGuildIdAsEveryoneGuildRoleId(guildId);
    mfaLevel = guild.mfaLevel;
    closure_52 = obj;
    c12 = null;
    closure_44 = {};
    location = location.location;
    if (section === constants.TAG) {
      obj = canUseMobileServerTagSettings;
      if (!obj.canUseMobileServerTagSettings(guildId)) {
        obj2 = undefined;
      }
    }
    if (null != section) {
      obj = { key: "landing", name: null };
      obj[1] = tmp16.LANDING;
      const items = [obj];
      if (section === tmp16.TAG_CUSTOMIZE) {
        obj = { key: null, name: null };
        ({ TAG: obj2[0], TAG: obj2[1] } = tmp16);
        items.push(obj);
      }
      obj1 = { key: null, name: null };
      obj1[0] = section;
      obj1[1] = section;
      items.push(obj1);
      obj2 = { type: "stack", routes: null };
      obj2[1] = items;
    }
    const obj5 = DISCORD_EPOCHDefault;
  }
}
function _createInvite(code) {
  obj = {
    code: code.code,
    temporary: code.temporary,
    revoked: code.revoked,
    inviter: null,
    channel: null,
    guild: null,
    uses: null,
    maxUses: null,
    maxAge: null,
    createdAt: null,
    flags: null,
    roles: null,
  };
  let tmp2 = null;
  let tmp = closure_17;
  if (null != code.inviter) {
    tmp2 = new closure_18(code.inviter);
  }
  obj[3] = tmp2;
  obj[4] = callback(code.channel);
  let fromInviteGuildResult = null;
  if (null != code.guild) {
    fromInviteGuildResult = fromGuildPropertiesWithAdditionalFields.fromInviteGuild(code.guild);
    const obj2 = fromGuildPropertiesWithAdditionalFields;
  }
  obj[5] = fromInviteGuildResult;
  ({ uses: obj[6], max_uses: obj[7], max_age: obj[8] } = code);
  const created_at = code.created_at;
  obj[9] = hooksDefault(created_at);
  ({ flags: obj[10], roles: obj[11] } = code);
  tmp = new tmp(obj);
  return tmp;
}
function handleIntegrationsUpdate(type) {
  let tmp = null != user;
  if (tmp) {
    tmp = CLOSED === FormStates.OPEN;
  }
  if (tmp) {
    let tmp5 = "GUILD_INTEGRATIONS_UPDATE" !== type.type;
    if (!tmp5) {
      tmp5 = type.guildId === user.id;
    }
    if (tmp5) {
      const guildIntegrationsApplications = _fetchGuildIntegrationsApplications.fetchGuildIntegrationsApplications(
        user.id,
      );
      obj = _fetchGuildIntegrationsApplications;
    }
    tmp = tmp5;
  }
  return tmp;
}
function handleProfileUpdateStart(arg0) {
  if (null != user) {
    if (user.id === tmp) {
      c38 = null;
    }
  }
  return false;
}
function handleProfileApiUpdateFailure(arg0) {
  if (null != user) {
    if (user.id === tmp) {
      c38 = tmp2;
    }
  }
  return false;
}
let set = isValueEqual.set;
let closure_15 = createChannelRecord.createChannelRecordFromInvite;
const getGuildEveryoneRoleId = GuildNSFWContentLevel.getGuildEveryoneRoleId;
const FormStates = ME.FormStates;
const MFALevels = ME.MFALevels;
({
  GuildSettingsSections: closure_23,
  GuildSettingsSubsections: closure_24,
  Endpoints: closure_25,
  GuildFeatures: closure_26,
} = ME);
const DEFAULT_DISCOVERY_CATEGORY_ID = DEFAULT_DISCOVERY_CATEGORY_ID2.DEFAULT_DISCOVERY_CATEGORY_ID;
({ PUBLIC_SUCCESS_MODAL_SEEN_KEY: closure_28, CREATE_NEW_CHANNEL_VALUE: closure_29 } = PUBLIC_SUCCESS_MODAL_SEEN_KEY);
let c30 = true;
let closure_31 = [
  "name",
  "description",
  "icon",
  "splash",
  "banner",
  "homeHeader",
  "afkChannelId",
  "afkTimeout",
  "systemChannelId",
  "verificationLevel",
  "defaultMessageNotifications",
  "explicitContentFilter",
  "features",
  "systemChannelFlags",
  "preferredLocale",
  "rulesChannelId",
  "safetyAlertsChannelId",
  "ownerConfiguredContentLevel",
  "discoverySplash",
  "publicUpdatesChannelId",
  "premiumProgressBarEnabled",
  "officialMessageColor",
  "verificationRoleId",
];
let closure_32 = [
  "brandColorPrimary",
  "description",
  "icon",
  "name",
  "traits",
  "visibility",
  "gameApplicationIds",
  "customBanner",
  "tag",
  "badge",
  "badgeColorPrimary",
  "badgeColorSecondary",
];
set = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]);
let closure_34 = {
  icon: "iconOriginalMd5",
  banner: "bannerOriginalMd5",
  splash: "splashOriginalMd5",
  discoverySplash: "discoverySplashOriginalMd5",
};
let c35 = false;
let CLOSED = FormStates.CLOSED;
let closure_37 = {};
let c38 = null;
let c39 = false;
let c40 = false;
let c41 = false;
let c42 = null;
let c43 = null;
let closure_44 = {};
let c45 = null;
let c46 = 0;
let NONE = MFALevels.NONE;
let c48 = null;
let obj = {
  primaryCategoryId: DEFAULT_DISCOVERY_CATEGORY_ID,
  secondaryCategoryIds: [],
  keywords: [],
  emojiDiscoverabilityEnabled: true,
  partnerActionedTimestamp: null,
  partnerApplicationTimestamp: null,
  isPublished: false,
  reasonsToJoin: [],
  socialLinks: [],
  about: "",
};
let c50 = false;
let c53 = null;
let c54 = 0;
let c55 = null;
let c56 = null;
let c57 = null;
const Store = initializeDefault.Store;
class GuildSettingsStore extends Store {}
const prototype = GuildSettingsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_19, closure_14, closure_20);
};
prototype["getMetadata"] = function getMetadata() {
  return obj;
};
prototype["widgetHasChanges"] = function widgetHasChanges() {
  let tmp = false !== c39;
  if (tmp) {
    let tmp4 = c41 !== c40;
    if (!tmp4) {
      tmp4 = c43 !== c42;
    }
    tmp = tmp4;
  }
  return tmp;
};
prototype["hasChanges"] = function hasChanges() {
  obj = applyDefault;
  const isEqualResult = obj.isEqual(closure_7, closure_6);
  let widgetHasChangesResult = !isEqualResult;
  if (isEqualResult) {
    let tmpResult = tmp(12);
    widgetHasChangesResult = !tmpResult.isEqual(obj, obj);
  }
  if (!widgetHasChangesResult) {
    tmpResult = tmp(12);
    widgetHasChangesResult = !tmpResult.isEqual(closure_9, closure_8);
  }
  if (!widgetHasChangesResult) {
    const self = this;
    widgetHasChangesResult = this.widgetHasChanges();
  }
  return widgetHasChangesResult;
};
prototype["isOpen"] = function isOpen() {
  return c35;
};
prototype["getSavedRouteState"] = function getSavedRouteState() {
  return closure_11;
};
prototype["getSection"] = function getSection() {
  return closure_3;
};
prototype["showNotice"] = function showNotice() {
  return this.hasChanges();
};
prototype["getGuildId"] = function getGuildId() {
  let id = null;
  if (null != user) {
    id = user.id;
  }
  return id;
};
prototype["showPublicSuccessModal"] = function showPublicSuccessModal() {
  const Storage = Storage2.Storage;
  return !Storage.get(closure_28);
};
prototype["getGuild"] = function getGuild() {
  return closure_7;
};
prototype["getPendingOriginalMd5s"] = function getPendingOriginalMd5s() {
  return closure_44;
};
prototype["getGuildProfile"] = function getGuildProfile() {
  return closure_9;
};
prototype["getWidget"] = function getWidget() {
  return { enabled: c41, channelId: c43 };
};
prototype["isSubmitting"] = function isSubmitting() {
  return CLOSED === FormStates.SUBMITTING;
};
prototype["isGuildMetadataLoaded"] = function isGuildMetadataLoaded() {
  return c50;
};
prototype["getErrors"] = function getErrors() {
  return closure_37;
};
prototype["getError"] = function getError(arg0) {
  let tmp = table2[arg0];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
prototype["getProfileError"] = function getProfileError() {
  return c38;
};
prototype["getSelectedRoleId"] = function getSelectedRoleId() {
  return closure_10;
};
prototype["getSlug"] = function getSlug() {
  return closure_12;
};
prototype["getBans"] = function getBans() {
  const items = [c53, c54];
  return items;
};
prototype["getProps"] = function getProps() {
  obj = {
    submitting: this.isSubmitting(),
    integrations: c57,
    section: closure_3,
    subsection: closure_4,
    errors: closure_37,
    guild: closure_7,
    bans: c53,
    bansVersion: c54,
    invites: c56,
    selectedRoleId: closure_10,
    fetchedEmbed: c39,
    embedEnabled: c41,
    embedChannelId: c43,
    mfaLevel: NONE,
    searchQuery: closure_5,
    vanityURLCode: c45,
    vanityURLUses: c46,
    originalGuild: closure_6,
    hasChanges: this.hasChanges(),
    guildMetadata: obj,
    analyticsLocation: c48,
    isGuildMetadataLoaded: c50,
    originalProfile: closure_8,
    profile: closure_9,
  };
  return obj;
};
GuildSettingsStore.displayName = "GuildSettingsStore";
obj = {
  GUILD_SETTINGS_INIT: handleFormInit,
  GUILD_SETTINGS_OPEN: function handleFormOpen(arg0) {
    c35 = true;
    handleFormInit(arg0);
  },
  GUILD_SETTINGS_CLOSE: function handleFormClose() {
    c35 = false;
    CLOSED = FormStates.CLOSED;
    c7 = null;
    c6 = null;
    c39 = false;
    c41 = false;
    c43 = null;
    c45 = null;
    c46 = 0;
    c53 = null;
    c56 = null;
    c57 = null;
    c3 = null;
    c4 = null;
    c5 = null;
    NONE = MFALevels.NONE;
    closure_44 = {};
    c11 = undefined;
  },
  GUILD_SETTINGS_UPDATE: function handleUpdate(arg0) {
    closure_0 = arg0;
    if (null == closure_7) {
      return false;
    } else {
      const item = closure_31.forEach((key10009) => {
        let hasOwnPropertyResult = null != closure_7;
        if (hasOwnPropertyResult) {
          hasOwnPropertyResult = closure_0.hasOwnProperty(key10009);
        }
        if (hasOwnPropertyResult) {
          let tmp6 = closure_0[key10009];
          if (tmp6 == null) {
            tmp6 = null;
          }
          closure_7 = closure_1_13(closure_7, key10009, tmp6);
          const tmp3 = closure_1_13;
          const tmp4 = closure_7;
        }
      });
      const _Object = Object;
      const keys = Object.keys(table);
      for (const item10007 of keys) {
        let tmp4 = item10007;
        if (arg0.hasOwnProperty(item10007)) {
          let tmp5 = table;
          let tmp6 = item10007;
          let tmp7 = arg0[table[tmp4]];
          if (null != tmp7) {
            let tmp11 = closure_44;
            let tmp12 = item10007;
            let tmp13 = tmp7;
            closure_44[tmp4] = tmp8;
          } else {
            let tmp9 = closure_44;
            let tmp10 = item10007;
            delete tmp2[tmp];
          }
        }
        continue;
      }
      (function validateUpdate() {
        closure_0 = closure_7;
        if (null == closure_7) {
          return false;
        } else if (!closure_31.some((arg0) => table[arg0] !== closure_1_6[arg0])) {
          closure_7 = closure_6;
        }
      })();
    }
  },
  GUILD_SETTINGS_PROFILE_UPDATE: function handleSettingsProfileUpdate(arg0) {
    closure_0 = arg0;
    if (null != obj) {
      if (null != user) {
        if (user.id === tmp) {
          const item = closure_32.forEach((key10009) => {
            if (null != obj) {
              if (closure_0.hasOwnProperty(key10009)) {
                if (undefined !== tmp2[key10009]) {
                  obj = {};
                  const merged = Object.assign(obj);
                  obj[key10009] = tmp3;
                }
              }
              tmp2 = closure_0;
            }
          });
        }
      }
    }
    return false;
  },
  GUILD_SETTINGS_CANCEL_CHANGES: function handleCancelChanges(guildId) {
    closure_37 = {};
    closure_44 = {};
    const guild = store2.getGuild(guildId.guildId);
  },
  GUILD_SETTINGS_SAVE_ROUTE_STACK: function handleSaveRouteStack(state) {
    state = state.state;
    return false;
  },
  GUILD_SETTINGS_SUBMIT: function handleFormSubmit() {
    const SUBMITTING = FormStates.SUBMITTING;
    closure_37 = {};
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function handleSubmitSuccess(guild) {
    const OPEN = FormStates.OPEN;
    closure_44 = {};
    let tmp = null != guild.guild;
    if (tmp) {
      tmp = null != user;
    }
    if (tmp) {
      tmp = user.id === guild.guild.id;
    }
    if (tmp) {
      fromGuildResult = fromGuildPropertiesWithAdditionalFields.fromGuild(guild.guild, fromGuildResult);
      user = fromGuildResult;
      obj = fromGuildPropertiesWithAdditionalFields;
    }
  },
  GUILD_SETTINGS_SUBMIT_FAILURE: function handleFormSubmitFailure(errors) {
    const OPEN = FormStates.OPEN;
    if (defaultGuildSettingsSection == null) {
      defaultGuildSettingsSection = getDefaultGuildSettingsSection.getDefaultGuildSettingsSection();
      obj = getDefaultGuildSettingsSection;
    }
    c4 = null;
    errors = errors.errors;
    if (errors == null) {
      errors = {};
    }
  },
  GUILD_SETTINGS_SET_SECTION: function handleSetSection(section) {
    if (null == user) {
      return false;
    } else {
      ({ section: closure_3, subsection: closure_4 } = section);
      if (closure_3 !== constants.INSTANT_INVITES) {
        if (closure_3 !== tmp27.INVITES) {
          if (closure_3 !== tmp27.INTEGRATIONS) {
            if (closure_3 !== tmp27.ROLES) {
              if (closure_3 === tmp27.MEMBERS) {
                c10 = getGuildEveryoneRoleId(user);
              } else if (closure_3 === tmp27.VANITY_URL) {
                const vanityUrl = fetchVanityUrl.fetchVanityUrl(user.id);
                const obj2 = fetchVanityUrl;
              } else if (closure_3 === tmp27.SAFETY) {
                if (null == closure_4) {
                  let SAFETY_OVERVIEW = constants2.SAFETY_OVERVIEW;
                } else {
                  SAFETY_OVERVIEW = closure_4;
                }
                obj = { type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION", subsection: null };
                obj[1] = SAFETY_OVERVIEW;
                dispatcherDefault.dispatch(obj);
                const obj5 = dispatcherDefault;
              }
            }
          }
          c10 = null;
          if (tmp25 !== section.section) {
            let tmp12 = null != user;
            if (tmp12) {
              tmp12 = CLOSED === FormStates.OPEN;
            }
            if (tmp12) {
              let tmp13 = "GUILD_INTEGRATIONS_UPDATE" !== section.type;
              if (!tmp13) {
                tmp13 = section.guildId === user.id;
              }
              if (tmp13) {
                const guildIntegrationsApplications =
                  _fetchGuildIntegrationsApplications.fetchGuildIntegrationsApplications(user.id);
                const obj3 = _fetchGuildIntegrationsApplications;
              }
              tmp12 = tmp13;
            }
            return tmp12;
          }
        }
      }
      const HTTP = sendRequest.HTTP;
      obj = { url: null, oldFormErrors: true, rejectWithError: true };
      obj[0] = closure_25.GUILD_INSTANT_INVITES(user.id);
      const value = HTTP.get(obj);
      value.then((body) => {
        obj = callback(table[14]);
        obj = { type: "GUILD_SETTINGS_LOADED_INVITES", invites: body.body };
        obj.dispatch(obj);
      });
    }
  },
  GUILD_SETTINGS_SET_SEARCH_QUERY: function handleSetSearchQuery(searchQuery) {
    searchQuery = searchQuery.searchQuery;
  },
  GUILD_SETTINGS_LOADED_BANS: function handleLoadedBans(bans) {
    bans = bans.bans;
    closure_53 = bans.reduce((set, user) => {
      if (tmp) {
        const result = set.set(user.user.id, user);
      }
      return set;
    }, new Map());
    closure_54 = closure_54 + 1;
  },
  GUILD_SETTINGS_LOADED_BANS_BATCH: function handleLoadedBansBatch(arg0) {
    ({ bans, guildId } = arg0);
    let tmp = guildId === guildId;
    if (tmp) {
      tmp = null != closure_53;
    }
    if (!tmp) {
      const _Map = Map;
      const map = new Map();
      closure_53 = map;
    }
    closure_53 = bans.reduce((set, user) => {
      if (tmp) {
        const result = set.set(user.user.id, user);
      }
      return set;
    }, closure_53);
    closure_54 = closure_54 + 1;
  },
  GUILD_SETTINGS_LOADED_INVITES: function handleLoadedInvites(invites) {
    invites = invites.invites;
    closure_56 = invites.reduce((arg0, code) => {
      arg0[code.code] = callback(code);
      return arg0;
    }, {});
  },
  GUILD_SETTINGS_SET_WIDGET: function handleSetEmbed(enabled) {
    c39 = true;
    enabled = enabled.enabled;
    const channelId = enabled.channelId;
  },
  GUILD_SETTINGS_SET_VANITY_URL: function handleSetVanityURL(code) {
    code = code.code;
    if (code == null) {
      code = null;
    }
    const uses = code.uses;
  },
  GUILD_SETTINGS_SET_MFA_SUCCESS: function handleSetMFALevelSuccess(level) {
    level = level.level;
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
    if (null != user) {
      if (tmp === user.id) {
        const _Set = Set;
        const items = [];
        items[HermesBuiltin.arraySpread(user.features, 0)] = constants3.PIN_PERMISSION_MIGRATION_COMPLETE;
        set = new Set(items);
        user = set(user, "features", set);
      }
    }
    return false;
  },
  GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function handleSlowmodePermissionMigrated(arg0) {
    if (null != user) {
      if (tmp === user.id) {
        const _Set = Set;
        const items = [];
        items[HermesBuiltin.arraySpread(user.features, 0)] = constants3.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE;
        set = new Set(items);
        user = set(user, "features", set);
      }
    }
    return false;
  },
  GUILD_BAN_ADD: function handleAddBan(user) {
    user = user.user;
    let tmp2 = null != _null;
    if (tmp2) {
      let tmp4 = null != user;
      if (tmp4) {
        tmp4 = user.id === tmp;
      }
      if (tmp4) {
        obj = { user: null, reason: null };
        obj[0] = user;
        const result = _null.set(user.id, obj);
        closure_54 = +closure_54 + 1;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  GUILD_BAN_REMOVE: function handleRemoveBan(arg0) {
    let tmp3 = null != _null;
    if (tmp3) {
      let tmp5 = null != user;
      if (tmp5) {
        tmp5 = user.id === tmp2;
      }
      if (tmp5) {
        _null.delete(tmp.id);
        closure_54 = +closure_54 + 1;
      }
      tmp3 = tmp5;
    }
    return tmp3;
  },
  GUILD_ROLE_CREATE: function handleRoleCreate(guildId) {
    guildId = guildId.guildId;
    let flag = false;
    if (null != guild) {
      flag = false;
      if (null != guild) {
        flag = false;
        if (guild.id === guildId) {
          guild = store2.getGuild(guildId);
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
    return flag ? undefined : false;
  },
  GUILD_ROLE_UPDATE: function handleRoleUpdate(guildId) {
    guildId = guildId.guildId;
    let flag = false;
    if (null != guild) {
      flag = false;
      if (null != guild) {
        flag = false;
        if (guild.id === guildId) {
          guild = store2.getGuild(guildId);
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
    return flag ? undefined : false;
  },
  GUILD_ROLE_DELETE: function handleRoleDelete(guildId) {
    guildId = guildId.guildId;
    let flag = false;
    if (null != guild) {
      flag = false;
      if (null != guild) {
        flag = false;
        if (guild.id === guildId) {
          guild = store2.getGuild(guildId);
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
      if (c10 === guildId.roleId) {
        c10 = null;
      }
    } else {
      return false;
    }
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    if (null != user) {
      if (user.id === guild.guild.id) {
        guild = store2.getGuild(user.id);
        if (null == guild) {
          return false;
        } else {
          const profile = store.getProfile(user.id);
          let result = closure_3 === constants.PROFILE;
          if (!result) {
            result = closure_3 === tmp23.TAG;
          }
          if (!result) {
            obj = guild(obj[12]);
            result = obj.isServerTagDraftDirty(closure_9, profile);
          }
          if (!result) {
            closure_9 = profile;
          }
          if (closure_3 === constants.PROFILE) {
            user = guild;
          } else {
            obj = {};
            const merged = Object.assign(user);
            const item = closure_31.forEach((arg0) => {
              if (!closure_1_33.has(arg0)) {
                let tmp = "rulesChannelId" !== arg0;
                if (tmp) {
                  tmp = "publicUpdatesChannelId" !== arg0;
                }
                if (!tmp) {
                  tmp = obj[arg0] !== closure_1_29;
                }
                if (tmp) {
                  tmp = "features" !== arg0;
                }
                if (tmp) {
                  if ("ownerConfiguredContentLevel" !== arg0) {
                    let tmp7 = obj[arg0];
                  } else {
                    tmp7 = guild[arg0];
                  }
                  closure_1 = closure_1_13(closure_1, arg0, tmp7);
                  const tmp4 = closure_1_13;
                  const tmp5 = closure_1;
                }
              }
            });
            user = guild;
          }
        }
      }
    }
    return false;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    if (null != user) {
      if (user.id === guild.guild.id) {
        c35 = false;
        CLOSED = FormStates.CLOSED;
        user = null;
        c6 = null;
        c39 = false;
        c41 = false;
        c43 = null;
        c45 = null;
        c46 = 0;
        c53 = null;
        c56 = null;
        c57 = null;
        c3 = null;
        c4 = null;
        c5 = null;
        NONE = MFALevels.NONE;
        closure_44 = {};
        c11 = undefined;
      }
    }
    return false;
  },
  GUILD_PROFILE_FETCH_SUCCESS: function handleProfileFetch(profile) {
    profile = profile.profile;
    let id;
    if (user != null) {
      id = user.id;
    }
    let tmp2 = profile.id === id;
    if (tmp2) {
      const result = canUseMobileServerTagSettings.isServerTagDraftDirty(profile, profile);
      tmp2 = !result;
      obj = canUseMobileServerTagSettings;
      const tmp8 = !result;
    }
    return tmp2;
  },
  GUILD_PROFILE_UPDATE: handleProfileUpdateStart,
  GUILD_PROFILE_UPDATE_SUCCESS: function handleProfileApiUpdate(profile) {
    profile = profile.profile;
    let id;
    if (profile != null) {
      id = profile.id;
    }
    let tmp2 = null != id;
    if (tmp2) {
      id = profile.id;
      let flag = false;
      if (null != guild) {
        flag = false;
        if (null != guild) {
          flag = false;
          if (guild.id === id) {
            guild = store2.getGuild(id);
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
        let id1;
        if (guild != null) {
          id1 = guild.id;
        }
        if (profile.id === id1) {
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
    let id;
    if (profile != null) {
      id = profile.id;
    }
    let tmp2 = null != id;
    if (tmp2) {
      id = profile.id;
      let flag = false;
      if (null != guild) {
        flag = false;
        if (null != guild) {
          flag = false;
          if (guild.id === id) {
            guild = store2.getGuild(id);
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
        let id1;
        if (guild != null) {
          id1 = guild.id;
        }
        if (guildId === id1) {
          profile = store.getProfile(guildId);
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
    let tmp2 = null != user;
    if (tmp2) {
      tmp2 = tmp === user.id;
    }
    if (tmp2) {
      if (false === c50) {
        c50 = true;
      }
      let primaryCategoryId = metadata.primaryCategoryId;
      if (primaryCategoryId == null) {
        primaryCategoryId = DEFAULT_DISCOVERY_CATEGORY_ID;
      }
      obj = {
        primaryCategoryId: null,
        secondaryCategoryIds: null,
        keywords: null,
        emojiDiscoverabilityEnabled: null,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: null,
        reasonsToJoin: null,
        socialLinks: null,
        about: null,
      };
      obj[0] = primaryCategoryId;
      let secondaryCategoryIds = metadata.secondaryCategoryIds;
      if (secondaryCategoryIds == null) {
        secondaryCategoryIds = [];
      }
      obj[1] = secondaryCategoryIds;
      let keywords = metadata.keywords;
      if (keywords == null) {
        keywords = [];
      }
      obj[2] = keywords;
      let emojiDiscoverabilityEnabled = metadata.emojiDiscoverabilityEnabled;
      if (emojiDiscoverabilityEnabled == null) {
        emojiDiscoverabilityEnabled = c30;
      }
      obj[3] = emojiDiscoverabilityEnabled;
      let prop = metadata.partnerActionedTimestamp;
      if (prop == null) {
        prop = null;
      }
      obj[4] = prop;
      let prop1 = metadata.partnerApplicationTimestamp;
      if (prop1 == null) {
        prop1 = null;
      }
      obj[5] = prop1;
      let flag3 = metadata.isPublished;
      if (flag3 == null) {
        flag3 = false;
      }
      obj[6] = flag3;
      let reasonsToJoin = metadata.reasonsToJoin;
      if (reasonsToJoin == null) {
        reasonsToJoin = [];
      }
      obj[7] = reasonsToJoin;
      let socialLinks = metadata.socialLinks;
      if (socialLinks == null) {
        socialLinks = [];
      }
      obj[8] = socialLinks;
      let str = metadata.about;
      if (str == null) {
        str = "";
      }
      obj[9] = str;
      closure_37 = {};
    }
  },
  GUILD_DISCOVERY_METADATA_FETCH_FAIL: function handleGuildMetadataFetchFail() {
    closure_52 = obj;
    closure_51 = obj;
  },
  GUILD_DISCOVERY_CATEGORY_ADD: function handleGuildCategoryAdd(categoryId) {
    categoryId = categoryId.categoryId;
    let tmp2 = null != user;
    if (tmp2) {
      tmp2 = tmp === user.id;
    }
    if (tmp2) {
      obj = {};
      const merged = Object.assign(obj);
      const items = [];
      items[HermesBuiltin.arraySpread(obj.secondaryCategoryIds, 0)] = categoryId;
      obj.secondaryCategoryIds = items;
      obj = {};
      const merged1 = Object.assign(obj);
      const items1 = [];
      items1[HermesBuiltin.arraySpread(obj.secondaryCategoryIds, 0)] = categoryId;
      obj.secondaryCategoryIds = items1;
    }
  },
  GUILD_DISCOVERY_CATEGORY_DELETE: function handleGuildCategoryDelete(categoryId) {
    categoryId = categoryId.categoryId;
    if (null != user) {
      if (tmp === user.id) {
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
        const secondaryCategoryIds1 = obj.secondaryCategoryIds;
        const index1 = secondaryCategoryIds1.indexOf(categoryId);
        if (-1 !== index1) {
          const items1 = [];
          HermesBuiltin.arraySpread(obj.secondaryCategoryIds, 0);
          items1.splice(index1, 1);
          obj = {};
          const merged1 = Object.assign(obj);
          obj.secondaryCategoryIds = items1;
        }
      }
    }
  },
  GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function handleGuildCategoryUpdateFail(errors) {
    errors = errors.errors;
    let tmp2 = null != user;
    if (tmp2) {
      tmp2 = tmp === user.id;
    }
    if (tmp2) {
      if (errors == null) {
        errors = {};
      }
    }
  },
  GUILD_UPDATE_DISCOVERY_METADATA: function handleGuildUpdateMetadata(arg0) {
    ({ primaryCategoryId, keywords, emojiDiscoverabilityEnabled, isPublished, reasonsToJoin, socialLinks, about } =
      arg0);
    let tmp2 = null != user;
    if (tmp2) {
      tmp2 = tmp === user.id;
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
    let tmp2 = null != user;
    if (tmp2) {
      tmp2 = tmp === user.id;
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
      HermesBuiltin.throwTypeError();
    } else {
      c12 = null;
    }
  },
  GUILD_SETTINGS_WIDGET_UPDATE: function handleWidgetUpdate(arg0) {
    if (null != user) {
      if (user.id === tmp) {
        c41 = tmp2;
        c43 = tmp3;
      }
    }
    return false;
  },
};
const guildSettingsStore = new GuildSettingsStore(dispatcherDefault, obj);
let result = set.fileFinishedImporting("modules/guild_settings/GuildSettingsStore.tsx");

export default guildSettingsStore;
export const EMPTY_METADATA = obj;
