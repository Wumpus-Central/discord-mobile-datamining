// === Module 9206: GuildSettingsActionCreators ===

// Module 9206 (GuildSettingsActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4831 */;
import GuildTemplateTooltipActionCreatorsDefault from "GuildTemplateTooltipActionCreators" /* 7433 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ImpersonateStore from "ImpersonateStore" /* 2015 */;
import LurkingStore from "LurkingStore" /* 4277 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;
import GuildStore from "GuildStore" /* 1980 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9207 */;

require = fn;
const Constants = fn(1074);
({ Endpoints: c10, Layers, GuildSettingsSubsections: closure_11, GuildSettingsSections: closure_12, GuildFeatures: map1, Routes: closure_14 } = Constants);
let closure_15 = new LoggerDefault("GuildSettingsActionCreators");
let body = {
  init(guildId, section, location, subsection) {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_INIT", guildId, section, subsection, location });
  },
  open(arg0, arg1, arg2, arg3) {
    closure_0 = arg0;
    let SAFETY = arg1;
    closure_2 = arg2;
    asyncGeneratorStep = arg3;
    return (async () => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
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
            guild = guild.getGuild(guildId);
            let hasItem;
            if (guild != null) {
              const features = guild.features;
              hasItem = features.has(constants3.COMMUNITY);
            }
            if (hasItem) {
              if (SAFETY === constants2.GUILD_AUTOMOD) {
                SAFETY = constants2.SAFETY;
                let subsection = constants.SAFETY_AUTOMOD;
              }
              if (SAFETY === constants2.MEMBER_VERIFICATION) {
                SAFETY = constants2.SAFETY;
                subsection = constants.SAFETY_DM_AND_SPAM_PROTECTION;
              }
            }
            body.init(guildId, SAFETY, closure_2, subsection);
            if (null != SAFETY) {
              body.setSection(SAFETY, subsection);
            }
            const obj5 = { type: "GUILD_SETTINGS_OPEN", guildId, section: SAFETY, subsection };
            SAFETY(closure_1_2[9]).dispatch(obj5);
            c0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp26) {
          c0 = tmp;
          throw tmp26;
        }
      }
    })();
  },
  close() {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_CLOSE" });
  },
  saveRouteStack(state) {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SAVE_ROUTE_STACK", state });
  },
  setSection(arg0, arg1) {
    const guildId = GuildSettingsStore.getGuildId();
    if (null != guildId) {
      const guild = GuildStore.getGuild(guildId);
      let hasItem;
      if (guild != null) {
        const features = guild.features;
        hasItem = features.has(constants3.COMMUNITY);
      }
      let SAFETY_DM_AND_SPAM_PROTECTION = arg1;
      let tmp5 = arg1;
      let tmp6 = arg0;
      if (hasItem) {
        let SAFETY = arg0;
        if (arg0 === constants2.GUILD_AUTOMOD) {
          SAFETY = constants2.SAFETY;
          SAFETY_DM_AND_SPAM_PROTECTION = constants.SAFETY_AUTOMOD;
        }
        if (SAFETY === constants2.MEMBER_VERIFICATION) {
          SAFETY = constants2.SAFETY;
          SAFETY_DM_AND_SPAM_PROTECTION = constants.SAFETY_DM_AND_SPAM_PROTECTION;
        }
        tmp5 = SAFETY_DM_AND_SPAM_PROTECTION;
        tmp6 = SAFETY;
      }
      const obj2 = { type: "GUILD_SETTINGS_SET_SECTION", section: tmp6, subsection: tmp5 };
      DispatcherDefault.dispatch(obj2);
    }
  },
  setSearchQuery(searchQuery) {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SET_SEARCH_QUERY", searchQuery });
  },
  selectRole(hideActionSheet, searchQuery) {
    return DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_ROLE_SELECT", roleId: hideActionSheet, searchQuery });
  },
  updateEmbed(guildId, enabled, channel_id) {
    _require = guildId;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_10.GUILD_WIDGET(guildId), body: null, oldFormErrors: true, rejectWithError: true };
    body = { enabled, channel_id };
    request.body = body;
    return HTTP.patch(request).then((body) => {
      DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SET_WIDGET", guildId, enabled: body.body.enabled, channelId: body.body.channel_id });
    });
  },
  updateMFALevel(arg0) {
    ({ guildId, level } = arg0);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_1_10.GUILD_MFA(guildId), body: { level }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.post(request).then((body) => DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SET_MFA_SUCCESS", level: body.body.level }));
  },
  updateIcon(id, icon) {
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_10.GUILD(id), body: { icon }, oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    let obj2 = require("HTTPUtils");
    HTTP.patch(request).then(() => {
      DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_UPDATE", icon });
      const obj2 = { type: "GUILD_SETTINGS_UPDATE", icon };
      const result = GuildTemplateTooltipActionCreatorsDefault.checkGuildTemplateDirty(closure_0);
    }, (body) => icon(dependencyMap[9]).dispatch({ type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: body.body }));
  },
  cancelChanges(id) {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_CANCEL_CHANGES", guildId: id });
  },
  updateGuild(arg0) {
    ({ safetyAlertsChannelId, profile } = arg0);
    const obj = {};
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
    if (tmp8) {
      obj.safetyAlertsChannelId = safetyAlertsChannelId;
    }
    tmp8 = null != GuildSettingsStore.getGuildId() && null != safetyAlertsChannelId;
    const merged3 = Object.assign(obj);
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_UPDATE" });
    const obj3 = { type: "GUILD_SETTINGS_UPDATE" };
  },
  updateGuildProfile(guildId, arg1) {
    const merged = Object.assign(arg1);
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_PROFILE_UPDATE", guildId });
  },
  saveGuild(id, arg1, arg2) {
    _require = id;
    ({ premiumProgressBarEnabled, profile } = arg1);
    let obj = arg2;
    ({ name, description, icon, splash, banner, homeHeader, afkChannelId, afkTimeout, systemChannelId, verificationLevel, defaultMessageNotifications, explicitContentFilter, features, systemChannelFlags, preferredLocale, rulesChannelId, safetyAlertsChannelId, ownerConfiguredContentLevel, discoverySplash, publicUpdatesChannelId, moderatorReportingEnabled, officialMessageColor, verificationRoleId } = arg1);
    if (arg2 === undefined) {
      obj = {};
    }
    let obj2 = { name, description, icon, splash, banner, home_header: homeHeader, features, preferred_locale: preferredLocale, afk_channel_id: afkChannelId, afk_timeout: afkTimeout, system_channel_id: systemChannelId, verification_level: verificationLevel, default_message_notifications: defaultMessageNotifications, explicit_content_filter: explicitContentFilter, system_channel_flags: systemChannelFlags, rules_channel_id: rulesChannelId, owner_configured_content_level: ownerConfiguredContentLevel, discovery_splash: discoverySplash, public_updates_channel_id: publicUpdatesChannelId, safety_alerts_channel_id: safetyAlertsChannelId };
    let tmp = null;
    if (null != premiumProgressBarEnabled) {
      let obj3 = { premium_progress_bar_enabled: premiumProgressBarEnabled };
      tmp = obj3;
    }
    const merged = Object.assign(tmp);
    let toServerGuildProfileResult = profile;
    if (null != profile) {
      toServerGuildProfileResult = require("GuildTagTypes").toServerGuildProfile(profile);
      const obj4 = require("GuildTagTypes");
    }
    obj2.profile = toServerGuildProfileResult;
    obj2.moderator_reporting_enabled = moderatorReportingEnabled;
    obj2.official_message_color = officialMessageColor;
    obj2.verification_role_id = verificationRoleId;
    obj(573).dispatch({ type: "GUILD_SETTINGS_SUBMIT" });
    const pendingOriginalMd5s = GuildSettingsStore.getPendingOriginalMd5s();
    const obj5 = obj(573);
    const obj6 = obj(5254);
    const headersForMd5 = obj6.buildHeadersForMd5({ [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_ICON]: pendingOriginalMd5s.icon, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_BANNER]: pendingOriginalMd5s.banner, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_INVITE_SPLASH]: pendingOriginalMd5s.splash, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_DISCOVERY_SPLASH]: pendingOriginalMd5s.discoverySplash });
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_10.GUILD(id), query: { for_discovery: obj.isForDiscovery }, body: obj2, headers: headersForMd5, oldFormErrors: true, rejectWithError: null };
    const obj7 = { [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_ICON]: pendingOriginalMd5s.icon, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_BANNER]: pendingOriginalMd5s.banner, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_INVITE_SPLASH]: pendingOriginalMd5s.splash, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_DISCOVERY_SPLASH]: pendingOriginalMd5s.discoverySplash };
    request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
    const obj9 = require("HTTPUtils");
    return HTTP.patch(request).then((body) => {
      DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS", guild: body.body });
      const obj2 = { type: "GUILD_SETTINGS_SUBMIT_SUCCESS", guild: body.body };
      const result = GuildTemplateTooltipActionCreatorsDefault.checkGuildTemplateDirty(closure_0);
    }, (errors) => {
      obj = DispatcherDefault;
      obj.dispatch({ type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: errors.body });
      logger.error("Failed to save guild settings", { errors: errors.body });
      if (obj.throwErr) {
        throw errors.body;
      }
      const obj2 = { type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: errors.body };
      const obj3 = { errors: errors.body };
    });
  },
  updateGuildModeration(id, verification_level) {
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_10.GUILD(id), body: { verification_level: verification_level.verificationLevel, explicit_content_filter: verification_level.explicitContentFilter }, oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    const obj2 = require("HTTPUtils");
    return HTTP.patch(request).then((result) => {
      result = GuildTemplateTooltipActionCreatorsDefault.checkGuildTemplateDirty(closure_0);
      return result;
    });
  },
  transferOwnership(id, id2) {
    let tmp = EMAIL;
    if (EMAIL === undefined) {
      tmp = null;
    }
    let tmp2 = id3;
    if (id3 === undefined) {
      tmp2 = null;
    }
    const request = { url: closure_1_10.GUILD(id), body: { owner_id: id2, code: tmp2 }, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    const obj = TrackedHTTPUtilsDefault;
    request.trackedActionData = { event: discord_common_AnalyticsUtils.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP, properties: { guild_id: id, verification_type: tmp } };
    const obj2 = { event: discord_common_AnalyticsUtils.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP, properties: { guild_id: id, verification_type: tmp } };
    request.rejectWithError = HTTPUtils.rejectWithMigratedError();
    return obj.patch(request);
  },
  sendTransferOwnershipPincode(id, arg1) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const obj2 = { url: closure_1_10.GUILD_PINCODE(id), oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    const obj = TrackedHTTPUtilsDefault;
    obj2.trackedActionData = { event: discord_common_AnalyticsUtils.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE, properties: { guild_id: id, is_resend: flag } };
    const obj3 = { event: discord_common_AnalyticsUtils.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE, properties: { guild_id: id, is_resend: flag } };
    obj2.rejectWithError = HTTPUtils.rejectWithMigratedError();
    return obj.put(obj2);
  },
  deleteGuild(arg0) {
    const HTTP = HTTPUtils.HTTP;
    const obj = { url: closure_1_10.GUILD_DELETE(arg0), oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.post(obj).then(() => {
      body.close();
    });
  },
  leaveGuild(id) {
    closure_0 = id;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp3;
              closure_128_0 = undefined;
              const isLurkingResult = lurking.isLurking(tmp2);
              closure_128_0 = isLurkingResult;
              const HTTP = tmp2(1271).HTTP;
              const request = { url: closure_1_10.GUILD_LEAVE(tmp2), body: null, oldFormErrors: true, rejectWithError: null };
              let isCurrentUserGuestResult = isLurkingResult;
              if (!isLurkingResult) {
                isCurrentUserGuestResult = currentUserGuest.isCurrentUserGuest(tmp2);
              }
              const obj5 = { lurking: isCurrentUserGuestResult };
              request.body = obj5;
              request.rejectWithError = tmp2(1271).rejectWithMigratedError();
              const obj4 = tmp2(1271);
              dependencyMap = 1;
              c3 = 1;
              const obj6 = {
                value: HTTP.del(request).then(() => {
                          const AccessibilityAnnouncer = closure_1_0(4490).AccessibilityAnnouncer;
                          const intl = closure_1_0(1115).intl;
                          AccessibilityAnnouncer.announce(intl.string(closure_1_0(1115).t["7iPyVW"]));
                        }),
                done: false
              };
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
            body.close();
            let tmp10 = closure_129_1;
            if (closure_129_1) {
              tmp10 = closure_128_0;
            }
            if (tmp10) {
              tmp2(1101).transitionTo(constants.GUILD_DISCOVERY);
              const obj = tmp2(1101);
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp21) {
          c3 = tmp;
          throw tmp21;
        }
      }
    })();
  },
  updateMemberRoles(arg0, arg1, arg2, arg3, arg4) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    asyncGeneratorStep = arg3;
    closure_4 = arg4;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
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
              c1 = 0;
              const v0 = 0;
              if (fullServerPreview.isFullServerPreview(guildId)) {
                if (userId === id.getId()) {
                  const result = v0(roles[20]).updateImpersonatedRoles(guildId, roles);
                  c3 = 3;
                  const obj6 = v0(roles[20]);
                }
              }
              const HTTP = v0(roles[10]).HTTP;
              const request = { url: closure_1_10.GUILD_MEMBER(guildId, userId), body: null, oldFormErrors: true, rejectWithError: null };
              const obj5 = { roles };
              request.body = obj5;
              request.rejectWithError = v0(roles[10]).rejectWithMigratedError();
              roles = 1;
              c3 = 1;
              const obj7 = { value: HTTP.patch(request), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            const item = closure_129_3.forEach((roleId) => userId(573).dispatch({ type: "GUILD_ROLE_MEMBER_ADD", guildId, roleId, userId }));
            const item1 = closure_129_4.forEach((roleId) => userId(573).dispatch({ type: "GUILD_ROLE_MEMBER_REMOVE", guildId, roleId, userId }));
          }
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp22) {
          c3 = tmp;
          throw tmp22;
        }
      }
    })();
  },
  bulkAddMemberRoles(id, id2, keys) {
    _require = id;
    const roleId = id2;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_10.GUILD_ROLE_MEMBERS(id, id2), body: null, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    body = { member_ids: keys };
    request.body = body;
    const obj3 = require("HTTPUtils");
    return HTTP.patch(request).then((added) => {
      DispatcherDefault.dispatch({ type: "GUILD_ROLE_MEMBER_BULK_ADD", guildId, roleId, added: added.body });
    });
  },
  enableIntegration(id, type, id2) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_1_10.GUILD_INTEGRATIONS(id), body: null, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    body = { type, id: id2 };
    request.body = body;
    return HTTP.post(request);
  },
  disableIntegration(id, id2) {
    const HTTP = HTTPUtils.HTTP;
    const obj = { url: closure_1_10.GUILD_INTEGRATION(id, id2), oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  updateIntegration(guildId, id, expire_behavior, expire_grace_period, enable_emoticons) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_1_10.GUILD_INTEGRATION(guildId, id), body: null, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    body = { expire_behavior, expire_grace_period, enable_emoticons };
    request.body = body;
    return HTTP.patch(request);
  },
  syncIntegration(guildId, id) {
    const HTTP = HTTPUtils.HTTP;
    const obj = { url: closure_1_10.GUILD_INTEGRATION_SYNC(guildId, id), oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    HTTP.post(obj);
  },
  migratePinPermission(arg0) {
    closure_0 = arg0;
    return (async () => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
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
              const HTTP = v3(1271).HTTP;
              const obj4 = { url: closure_1_10.GUILD_MIGRATE_PIN_PERMISSION(guildId), rejectWithError: true };
              c1 = 1;
              v3 = 1;
              const obj5 = { value: HTTP.post(obj4).then(() => c1(573).dispatch({ type: "GUILD_SETTINGS_PIN_PERMISSION_MIGRATED", guildId })), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          v3 = tmp;
          throw tmp9;
        }
      }
    })();
  },
  migrateSlowmodePermission(arg0) {
    closure_0 = arg0;
    return (async () => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
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
              const HTTP = v3(1271).HTTP;
              const obj4 = { url: closure_1_10.GUILD_MIGRATE_SLOWMODE_PERMISSION(guildId), rejectWithError: true };
              c1 = 1;
              v3 = 1;
              const obj5 = { value: HTTP.post(obj4).then(() => c1(573).dispatch({ type: "GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED", guildId })), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          v3 = tmp;
          throw tmp9;
        }
      }
    })();
  },
  migratePermissions(arg0, arg1) {
    closure_0 = arg0;
    ({ migratePin: importDefault, migrateSlowmode: dependencyMap } = arg1);
    return (async () => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
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
              closure_0 = tmp4;
              if (importDefault) {
                c1 = 1;
                c2 = 1;
                const obj4 = { value: body.migratePinPermission(closure_0), done: false };
                return obj4;
              }
            }
          } else {
            if (1 === tmp4) {
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
              const obj = { value, done: true };
              return obj;
            }
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
          if (closure_128_2) {
            c1 = 2;
            c2 = 1;
            const obj6 = { value: body.migrateSlowmodePermission(closure_128_0), done: false };
            return obj6;
          }
        } catch (tmp11) {
          c2 = tmp;
          throw tmp11;
        }
      }
    })();
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsActionCreators.tsx");

export default body;