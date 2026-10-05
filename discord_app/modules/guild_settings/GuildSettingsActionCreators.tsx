// === Module 9247: GuildSettingsActionCreators ===

// Module 9247 (GuildSettingsActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 5083 */;
import GuildTemplateTooltipActionCreatorsDefault from "GuildTemplateTooltipActionCreators" /* 6826 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import ImpersonateStore from "ImpersonateStore" /* 2105 */;
import LurkingStore from "LurkingStore" /* 4510 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9248 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c3;

let Layers;
let c10;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
({ Endpoints: c10, Layers, GuildSettingsSubsections: unpackModuleId, GuildSettingsSections: closure_12, GuildFeatures: map1, Routes: closure_14 } = Constants);
let tmp3 = new LoggerDefault("GuildSettingsActionCreators");
let closure_15 = tmp3;
let obj = {
  init(guildId, section, location, subsection) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_INIT", guildId, section, subsection, location };
    obj.dispatch(obj2);
  },
  open(arg0, arg1, arg2, arg3) {
    let closure_3;
    let closure_0 = arg0;
    let SAFETY = arg1;
    let closure_2 = arg2;
    _asyncToGenerator = arg3;
    return (async () => {
      let guild;
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let subsection;
            guild = guild.getGuild(guildId);
            let hasItem;
            if (guild != null) {
              const features = guild.features;
              hasItem = features.has(constants3.COMMUNITY);
            }
            if (hasItem) {
              if (SAFETY === constants2.GUILD_AUTOMOD) {
                SAFETY = constants2.SAFETY;
                subsection = constants.SAFETY_AUTOMOD;
              }
              if (SAFETY === constants2.MEMBER_VERIFICATION) {
                SAFETY = constants2.SAFETY;
                subsection = constants.SAFETY_DM_AND_SPAM_PROTECTION;
              }
            }
            obj.init(guildId, SAFETY, closure_2, subsection);
            if (null != SAFETY) {
              obj.setSection(SAFETY, subsection);
            }
            const obj5 = { type: "GUILD_SETTINGS_OPEN", guildId, section: SAFETY, subsection };
            const obj2 = SAFETY(closure_1_2[9]);
            obj2.dispatch(obj5);
            c0 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp25) {
          c0 = 3;
          throw tmp25;
        }
      }
    })();
  },
  close() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_CLOSE" });
  },
  saveRouteStack(state) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_SAVE_ROUTE_STACK", state };
    obj.dispatch(obj2);
  },
  setSection(arg0, arg1) {
    const guildId = GuildSettingsStore.getGuildId();
    if (null != guildId) {
      const guild = GuildStore.getGuild(guildId);
      let hasItem;
      if (guild != null) {
        const features = guild.features;
        hasItem = features.has(map1.COMMUNITY);
      }
      let SAFETY_DM_AND_SPAM_PROTECTION = arg1;
      let tmp5 = arg1;
      let tmp6 = arg0;
      if (hasItem) {
        let SAFETY = arg0;
        if (arg0 === constants2.GUILD_AUTOMOD) {
          SAFETY = constants2.SAFETY;
          SAFETY_DM_AND_SPAM_PROTECTION = unpackModuleId.SAFETY_AUTOMOD;
        }
        if (SAFETY === constants2.MEMBER_VERIFICATION) {
          SAFETY = constants2.SAFETY;
          SAFETY_DM_AND_SPAM_PROTECTION = unpackModuleId.SAFETY_DM_AND_SPAM_PROTECTION;
        }
        tmp5 = SAFETY_DM_AND_SPAM_PROTECTION;
        tmp6 = SAFETY;
      }
      const obj2 = { type: "GUILD_SETTINGS_SET_SECTION", section: tmp6, subsection: tmp5 };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  },
  setSearchQuery(searchQuery) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_SET_SEARCH_QUERY", searchQuery };
    obj.dispatch(obj2);
  },
  selectRole(roleId, searchQuery) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_ROLE_SELECT", roleId, searchQuery };
    return obj.dispatch(obj2);
  },
  updateEmbed(guildId, enabled, channel_id) {
    let body;
    _require = guildId;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_10.GUILD_WIDGET(guildId), body, oldFormErrors: true, rejectWithError: true };
    body = { enabled, channel_id };
    const patchResult = HTTP.patch(request);
    return patchResult.then((body) => {
      obj = DispatcherDefault;
      const obj2 = { type: "GUILD_SETTINGS_SET_WIDGET", guildId, enabled: body.body.enabled, channelId: body.body.channel_id };
      obj.dispatch(obj2);
    });
  },
  updateMFALevel(arg0) {
    let guildId;
    let level;
    let obj2;
    ({ guildId, level } = arg0);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: authStore.GUILD_MFA(guildId), body: { level }, oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    const post = HTTP.post;
    obj2 = HTTPUtils;
    const postResult = post(request);
    return postResult.then((body) => {
      obj = DispatcherDefault;
      const obj2 = { type: "GUILD_SETTINGS_SET_MFA_SUCCESS", level: body.body.level };
      return obj.dispatch(obj2);
    });
  },
  updateIcon(id, base64) {
    let obj2;
    _require = id;
    const icon = base64;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_10.GUILD(id), body: { icon: base64 }, oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj2 = require("HTTPUtils");
    const patchResult = patch(request);
    patchResult.then(() => {
      obj = DispatcherDefault;
      const obj2 = { type: "GUILD_SETTINGS_UPDATE", icon };
      obj.dispatch(obj2);
      const obj3 = GuildTemplateTooltipActionCreatorsDefault;
      const result = obj3.checkGuildTemplateDirty(id);
    }, (body) => {
      obj = icon(dependencyMap[9]);
      const obj2 = { type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: body.body };
      return obj.dispatch(obj2);
    });
  },
  cancelChanges(id) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_CANCEL_CHANGES", guildId: id };
    obj.dispatch(obj2);
  },
  updateGuild(arg0) {
    let profile;
    let safetyAlertsChannelId;
    ({ safetyAlertsChannelId, profile } = arg0);
    obj = {};
    const merged = Object.assign(Object.assign(arg0, Object.assign({ safetyAlertsChannelId: 0, profile: 0 })));
    if (null != profile) {
      let profile1 = obj.profile;
      if (profile1 == null) {
        profile1 = {};
      }
      const obj2 = {};
      const merged1 = Object.assign(profile1);
      const merged2 = Object.assign(profile);
      obj.profile = obj2;
    }
    const tmp8 = null != GuildSettingsStore.getGuildId() && null != safetyAlertsChannelId;
    if (tmp8) {
      obj.safetyAlertsChannelId = safetyAlertsChannelId;
    }
    const dispatch = DispatcherDefault.dispatch;
    const obj3 = { type: "GUILD_SETTINGS_UPDATE" };
    DispatcherDefault;
    const merged3 = Object.assign(obj);
    dispatch(obj3);
  },
  updateGuildProfile(guildId, arg1) {
    const dispatch = DispatcherDefault.dispatch;
    obj = { type: "GUILD_SETTINGS_PROFILE_UPDATE", guildId };
    DispatcherDefault;
    const merged = Object.assign(arg1);
    dispatch(obj);
  },
  saveGuild(id, arg1, arg2) {
    let afkChannelId;
    let afkTimeout;
    let banner;
    let defaultMessageNotifications;
    let description;
    let discoverySplash;
    let explicitContentFilter;
    let features;
    let homeHeader;
    let icon;
    let logger;
    let moderatorReportingEnabled;
    let name;
    let obj9;
    let officialMessageColor;
    let ownerConfiguredContentLevel;
    let preferredLocale;
    let premiumProgressBarEnabled;
    let profile;
    let publicUpdatesChannelId;
    let rulesChannelId;
    let safetyAlertsChannelId;
    let splash;
    let systemChannelFlags;
    let systemChannelId;
    let toServerGuildProfileResult;
    let verificationLevel;
    let verificationRoleId;
    _require = id;
    ({ premiumProgressBarEnabled, profile } = arg1);
    obj = arg2;
    ({ name, description, icon, splash, banner, homeHeader, afkChannelId, afkTimeout, systemChannelId, verificationLevel, defaultMessageNotifications, explicitContentFilter, features, systemChannelFlags, preferredLocale, rulesChannelId, safetyAlertsChannelId, ownerConfiguredContentLevel, discoverySplash, publicUpdatesChannelId, moderatorReportingEnabled, officialMessageColor, verificationRoleId } = arg1);
    if (arg2 === undefined) {
      obj = {};
    }
    let obj2 = { name, description, icon, splash, banner, home_header: homeHeader, features, preferred_locale: preferredLocale, afk_channel_id: afkChannelId, afk_timeout: afkTimeout, system_channel_id: systemChannelId, verification_level: verificationLevel, default_message_notifications: defaultMessageNotifications, explicit_content_filter: explicitContentFilter, system_channel_flags: systemChannelFlags, rules_channel_id: rulesChannelId, owner_configured_content_level: ownerConfiguredContentLevel, discovery_splash: discoverySplash, public_updates_channel_id: publicUpdatesChannelId, safety_alerts_channel_id: safetyAlertsChannelId, profile: toServerGuildProfileResult, moderator_reporting_enabled: moderatorReportingEnabled, official_message_color: officialMessageColor, verification_role_id: verificationRoleId };
    let tmp = null;
    if (null != premiumProgressBarEnabled) {
      let obj3 = { premium_progress_bar_enabled: premiumProgressBarEnabled };
      tmp = obj3;
    }
    const merged = Object.assign(tmp);
    toServerGuildProfileResult = profile;
    if (null != profile) {
      const obj4 = require("GuildTagTypes");
      toServerGuildProfileResult = obj4.toServerGuildProfile(profile);
    }
    const obj5 = obj(584);
    obj5.dispatch({ type: "GUILD_SETTINGS_SUBMIT" });
    const pendingOriginalMd5s = GuildSettingsStore.getPendingOriginalMd5s();
    const obj6 = obj(6478);
    const obj7 = { [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_ICON]: pendingOriginalMd5s.icon, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_BANNER]: pendingOriginalMd5s.banner, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_INVITE_SPLASH]: pendingOriginalMd5s.splash, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_DISCOVERY_SPLASH]: pendingOriginalMd5s.discoverySplash };
    const headersForMd5 = obj6.buildHeadersForMd5(obj7);
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_10.GUILD(id), query: { for_discovery: obj.isForDiscovery }, body: obj2, headers: headersForMd5, oldFormErrors: true, rejectWithError: obj9.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj9 = require("HTTPUtils");
    const patchResult = patch(request);
    return patchResult.then((body) => {
      obj = DispatcherDefault;
      const obj2 = { type: "GUILD_SETTINGS_SUBMIT_SUCCESS", guild: body.body };
      obj.dispatch(obj2);
      const obj3 = GuildTemplateTooltipActionCreatorsDefault;
      const result = obj3.checkGuildTemplateDirty(id);
    }, (errors) => {
      obj = DispatcherDefault;
      const obj2 = { type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: errors.body };
      obj.dispatch(obj2);
      const obj3 = { errors: errors.body };
      logger.error("Failed to save guild settings", obj3);
      if (obj.throwErr) {
        throw errors.body;
      }
    });
  },
  updateGuildModeration(id, verification_level) {
    let obj2;
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_10.GUILD(id), body: { verification_level: verification_level.verificationLevel, explicit_content_filter: verification_level.explicitContentFilter }, oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj2 = require("HTTPUtils");
    const patchResult = patch(request);
    return patchResult.then((result) => {
      obj = GuildTemplateTooltipActionCreatorsDefault;
      result = obj.checkGuildTemplateDirty(id);
      return result;
    });
  },
  transferOwnership(id, id2) {
    let obj3;
    let trackedActionData;
    let tmp = EMAIL;
    if (EMAIL === undefined) {
      tmp = null;
    }
    let tmp2 = id3;
    if (id3 === undefined) {
      tmp2 = null;
    }
    const tmp3 = TrackedHTTPUtilsDefault;
    const request = { url: authStore.GUILD(id), body: { owner_id: id2, code: tmp2 }, oldFormErrors: true, trackedActionData, rejectWithError: obj3.rejectWithMigratedError() };
    const patch = tmp3.patch;
    trackedActionData = { event: discord_common_AnalyticsUtils.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP, properties: { guild_id: id, verification_type: tmp } };
    obj3 = HTTPUtils;
    return patch(request);
  },
  sendTransferOwnershipPincode(id, arg1) {
    let obj3;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const tmp = TrackedHTTPUtilsDefault;
    const put = tmp.put;
    obj = { url: authStore.GUILD_PINCODE(id), oldFormErrors: true, trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE, properties: { guild_id: id, is_resend: flag } }, rejectWithError: obj3.rejectWithMigratedError() };
    ({ event: discord_common_AnalyticsUtils.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE, properties: { guild_id: id, is_resend: flag } });
    obj3 = HTTPUtils;
    return put(obj);
  },
  deleteGuild(arg0) {
    let obj2;
    const HTTP = HTTPUtils.HTTP;
    obj = { url: authStore.GUILD_DELETE(arg0), oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    const post = HTTP.post;
    obj2 = HTTPUtils;
    const postResult = post(obj);
    return postResult.then(() => {
      obj.close();
    });
  },
  leaveGuild(id) {
    let closure_0 = id;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    return (async () => {
      let closure_0;
      let delResult;
      let obj4;
      let obj5;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let c0;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp2;
              const isLurkingResult = lurking.isLurking(tmp);
              c0 = isLurkingResult;
              const HTTP = tmp(c2[10]).HTTP;
              const request = { url: closure_1_10.GUILD_LEAVE(tmp), body: obj5, oldFormErrors: true, rejectWithError: obj4.rejectWithMigratedError() };
              const del = HTTP.del;
              const isCurrentUserGuestResult = isLurkingResult || currentUserGuest.isCurrentUserGuest(tmp);
              obj5 = { lurking: isCurrentUserGuestResult };
              obj4 = tmp(c2[10]);
              c2 = 1;
              c3 = 1;
              const obj6 = {
                value: delResult.then(() => {
                          const AccessibilityAnnouncer = closure_1_0(closure_1_2[17]).AccessibilityAnnouncer;
                          const announce = AccessibilityAnnouncer.announce;
                          const intl = closure_1_0(closure_1_2[18]).intl;
                          announce(intl.string(closure_1_0(closure_1_2[18]).t["7iPyVW"]));
                        }),
                done: false
              };
              delResult = del(request);
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_1_16.close();
            const tmp9 = closure_129_1 && c0;
            if (tmp9) {
              obj = tmp(c2[19]);
              obj.transitionTo(constants.GUILD_DISCOVERY);
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp20) {
          c3 = 3;
          throw tmp20;
        }
      }
    })();
  },
  updateMemberRoles(arg0, arg1, arg2, arg3, arg4) {
    let closure_3;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    _asyncToGenerator = arg3;
    let closure_4 = arg4;
    return (async () => {
      let obj4;
      let obj5;
      let roles;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === roles) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let c1 = 0;
              const v0 = 0;
              if (fullServerPreview.isFullServerPreview(guildId)) {
                if (userId === id.getId()) {
                  const obj6 = v0(roles[20]);
                  const result = obj6.updateImpersonatedRoles(guildId, roles);
                }
              }
              const HTTP = v0(roles[10]).HTTP;
              const request = { url: closure_1_10.GUILD_MEMBER(guildId, userId), body: obj5, oldFormErrors: true, rejectWithError: obj4.rejectWithMigratedError() };
              const patch = HTTP.patch;
              obj5 = { roles };
              obj4 = v0(roles[10]);
              roles = 1;
              c3 = 1;
              const obj7 = { value: patch(request), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const item = closure_129_3.forEach((roleId) => {
              obj = userId(c2[9]);
              const obj2 = { type: "GUILD_ROLE_MEMBER_ADD", guildId, roleId, userId };
              return obj.dispatch(obj2);
            });
            const item1 = closure_129_4.forEach((roleId) => {
              obj = userId(c2[9]);
              const obj2 = { type: "GUILD_ROLE_MEMBER_REMOVE", guildId, roleId, userId };
              return obj.dispatch(obj2);
            });
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp21) {
          c3 = 3;
          throw tmp21;
        }
      }
    })();
  },
  bulkAddMemberRoles(id, id2, keys) {
    let body;
    let guildId;
    let obj3;
    _require = id;
    const roleId = id2;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_10.GUILD_ROLE_MEMBERS(id, id2), body, rejectWithError: obj3.rejectWithMigratedError() };
    const patch = HTTP.patch;
    body = { member_ids: keys };
    obj3 = require("HTTPUtils");
    const patchResult = patch(request);
    return patchResult.then((added) => {
      obj = DispatcherDefault;
      const obj2 = { type: "GUILD_ROLE_MEMBER_BULK_ADD", guildId, roleId, added: added.body };
      obj.dispatch(obj2);
    });
  },
  enableIntegration(id, type, id2) {
    let body;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: authStore.GUILD_INTEGRATIONS(id), body, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    const post = HTTP.post;
    body = { type, id: id2 };
    obj3 = HTTPUtils;
    return post(request);
  },
  disableIntegration(id, id2) {
    let obj2;
    const HTTP = HTTPUtils.HTTP;
    const del = HTTP.del;
    obj = { url: authStore.GUILD_INTEGRATION(id, id2), oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    obj2 = HTTPUtils;
    return del(obj);
  },
  updateIntegration(guildId, id, expire_behavior, expire_grace_period, enable_emoticons) {
    let body;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: authStore.GUILD_INTEGRATION(guildId, id), body, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    const patch = HTTP.patch;
    body = { expire_behavior, expire_grace_period, enable_emoticons };
    obj3 = HTTPUtils;
    return patch(request);
  },
  syncIntegration(guildId, id) {
    let obj2;
    const HTTP = HTTPUtils.HTTP;
    const post = HTTP.post;
    obj = { url: authStore.GUILD_INTEGRATION_SYNC(guildId, id), oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    obj2 = HTTPUtils;
    post(obj);
  },
  migratePinPermission(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let postResult;
      let v3;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const HTTP = v3(dependencyMap[10]).HTTP;
              const obj4 = { url: closure_1_10.GUILD_MIGRATE_PIN_PERMISSION(guildId), rejectWithError: true };
              const post = HTTP.post;
              c1 = 1;
              v3 = 1;
              const obj5 = {
                value: postResult.then(() => {
                          obj = c1(closure_2_2[9]);
                          const obj2 = { type: "GUILD_SETTINGS_PIN_PERMISSION_MIGRATED", guildId };
                          return obj.dispatch(obj2);
                        }),
                done: false
              };
              postResult = post(obj4);
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          v3 = 3;
          throw tmp8;
        }
      }
    })();
  },
  migrateSlowmodePermission(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let postResult;
      let v3;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const HTTP = v3(dependencyMap[10]).HTTP;
              const obj4 = { url: closure_1_10.GUILD_MIGRATE_SLOWMODE_PERMISSION(guildId), rejectWithError: true };
              const post = HTTP.post;
              c1 = 1;
              v3 = 1;
              const obj5 = {
                value: postResult.then(() => {
                          obj = c1(closure_2_2[9]);
                          const obj2 = { type: "GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED", guildId };
                          return obj.dispatch(obj2);
                        }),
                done: false
              };
              postResult = post(obj4);
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          v3 = 3;
          throw tmp8;
        }
      }
    })();
  },
  migratePermissions(arg0, arg1) {
    let closure_0 = arg0;
    ({ migratePin: importDefault, migrateSlowmode: dependencyMap } = arg1);
    return (async () => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp3;
              if (importDefault) {
                c1 = 1;
                c2 = 1;
                const obj4 = { value: closure_1_16.migratePinPermission(closure_0), done: false };
                return obj4;
              }
            }
          } else {
            if (1 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj5 = { value, done: true };
                return obj5;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            }
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
          if (closure_128_2) {
            c1 = 2;
            c2 = 1;
            const obj6 = { value: closure_1_16.migrateSlowmodePermission(closure_128_0), done: false };
            return obj6;
          }
        } catch (tmp10) {
          c2 = 3;
          throw tmp10;
        }
      }
    })();
  }
};
let result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsActionCreators.tsx");

export default obj;