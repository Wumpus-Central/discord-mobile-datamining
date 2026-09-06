// === Module 9063: GuildSettingsActionCreators ===

// Module 9063 (GuildSettingsActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4753 */;
import GuildTemplateTooltipActionCreatorsDefault from "GuildTemplateTooltipActionCreators" /* 7323 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ImpersonateStore from "ImpersonateStore" /* 2014 */;
import LurkingStore from "LurkingStore" /* 4200 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9064 */;

require = fn;
const Constants = fn(1074);
({ Endpoints: c10, Layers, GuildSettingsSubsections: closure_11, GuildSettingsSections: closure_12, GuildFeatures: map1, Routes: closure_14 } = Constants);
let closure_15 = new LoggerDefault("GuildSettingsActionCreators");
let obj = {
  init(guildId, section, location, subsection) {
    obj = { type: "GUILD_SETTINGS_INIT", guildId, section, subsection, location };
    obj.dispatch(obj);
  },
  open(guildId, arg1, arg2, arg3) {
    let SAFETY = arg1;
    closure_2 = arg2;
    asyncGeneratorStep = arg3;
    return (async (arg0, value) => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            guild = guild.getGuild(guildId);
            let hasItem;
            if (guild != null) {
              const features = guild.features;
              hasItem = features.has(constants3.COMMUNITY);
            }
            if (hasItem) {
              if (SAFETY === constants2.GUILD_AUTOMOD) {
                SAFETY = tmp7.SAFETY;
                let subsection = constants.SAFETY_AUTOMOD;
              }
              if (SAFETY === constants2.MEMBER_VERIFICATION) {
                SAFETY = tmp7.SAFETY;
                subsection = constants.SAFETY_DM_AND_SPAM_PROTECTION;
              }
            }
            obj = closure_1_16;
            closure_1_16.init(guildId, SAFETY, closure_2, subsection);
            if (null != SAFETY) {
              obj.setSection(SAFETY, subsection);
            }
            let obj1 = SAFETY(closure_1_2[9]);
            obj1 = { type: "GUILD_SETTINGS_OPEN", guildId, section: SAFETY, subsection };
            obj1.dispatch(obj1);
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
    obj = { type: "GUILD_SETTINGS_SAVE_ROUTE_STACK", state };
    obj.dispatch(obj);
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
          SAFETY = tmp7.SAFETY;
          SAFETY_DM_AND_SPAM_PROTECTION = constants.SAFETY_AUTOMOD;
        }
        if (SAFETY === constants2.MEMBER_VERIFICATION) {
          SAFETY = tmp7.SAFETY;
          SAFETY_DM_AND_SPAM_PROTECTION = constants.SAFETY_DM_AND_SPAM_PROTECTION;
        }
        tmp5 = SAFETY_DM_AND_SPAM_PROTECTION;
        tmp6 = SAFETY;
      }
      obj = { type: "GUILD_SETTINGS_SET_SECTION", section: tmp6, subsection: tmp5 };
      obj.dispatch(obj);
    }
  },
  setSearchQuery(searchQuery) {
    obj = { type: "GUILD_SETTINGS_SET_SEARCH_QUERY", searchQuery };
    obj.dispatch(obj);
  },
  selectRole(hideActionSheet, searchQuery) {
    obj = { type: "GUILD_SETTINGS_ROLE_SELECT", roleId: hideActionSheet, searchQuery };
    return obj.dispatch(obj);
  },
  updateEmbed(guildId, enabled, channel_id) {
    _require = guildId;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_10.GUILD_WIDGET(guildId), body: null, oldFormErrors: true, rejectWithError: true };
    const body = { enabled, channel_id };
    request.body = body;
    return HTTP.patch(request).then((body) => {
      obj = { type: "GUILD_SETTINGS_SET_WIDGET", guildId, enabled: body.body.enabled, channelId: body.body.channel_id };
      obj.dispatch(obj);
    });
  },
  updateMFALevel(updateMFALevelResult) {
    ({ guildId, level } = updateMFALevelResult);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_1_10.GUILD_MFA(guildId), body: { level }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.post(request).then((body) => {
      obj = { type: "GUILD_SETTINGS_SET_MFA_SUCCESS", level: body.body.level };
      return obj.dispatch(obj);
    });
  },
  updateIcon(id, icon) {
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_10.GUILD(id), body: { icon }, oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    const obj2 = require("HTTPUtils");
    HTTP.patch(request).then(() => {
      obj = { type: "GUILD_SETTINGS_UPDATE", icon };
      obj.dispatch(obj);
      const result = GuildTemplateTooltipActionCreatorsDefault.checkGuildTemplateDirty(closure_0);
    }, (body) => {
      icon(dependencyMap[9]);
      obj = { type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: body.body };
      return obj.dispatch(obj);
    });
  },
  cancelChanges(id) {
    obj = { type: "GUILD_SETTINGS_CANCEL_CHANGES", guildId: id };
    obj.dispatch(obj);
  },
  updateGuild(arg0) {
    ({ safetyAlertsChannelId, profile } = arg0);
    profile = {};
    const merged = Object.assign(Object.assign(arg0, Object.assign({ safetyAlertsChannelId: 0, profile: 0 })));
    if (null != profile) {
      profile = profile.profile;
      if (profile == null) {
        profile = {};
      }
      profile = {};
      const merged1 = Object.assign(profile);
      const merged2 = Object.assign(profile);
      profile.profile = profile;
    }
    if (tmp8) {
      profile.safetyAlertsChannelId = safetyAlertsChannelId;
    }
    tmp8 = null != GuildSettingsStore.getGuildId() && null != safetyAlertsChannelId;
    profile = { type: "GUILD_SETTINGS_UPDATE" };
    const merged3 = Object.assign(profile);
    DispatcherDefault.dispatch(profile);
  },
  updateGuildProfile(guildId, arg1) {
    obj = { type: "GUILD_SETTINGS_PROFILE_UPDATE", guildId };
    const merged = Object.assign(arg1);
    obj.dispatch(obj);
  },
  saveGuild(id, arg1, body) {
    _require = id;
    ({ premiumProgressBarEnabled, profile } = arg1);
    ({ name, description, icon, splash, banner, homeHeader, afkChannelId, afkTimeout, systemChannelId, verificationLevel, defaultMessageNotifications, explicitContentFilter, features, systemChannelFlags, preferredLocale, rulesChannelId, safetyAlertsChannelId, ownerConfiguredContentLevel, discoverySplash, publicUpdatesChannelId, moderatorReportingEnabled, officialMessageColor, verificationRoleId } = arg1);
    if (body === undefined) {
      body = {};
    }
    body = { name, description, icon, splash, banner, home_header: homeHeader, features, preferred_locale: preferredLocale, afk_channel_id: afkChannelId, afk_timeout: afkTimeout, system_channel_id: systemChannelId, verification_level: verificationLevel, default_message_notifications: defaultMessageNotifications, explicit_content_filter: explicitContentFilter, system_channel_flags: systemChannelFlags, rules_channel_id: rulesChannelId, owner_configured_content_level: ownerConfiguredContentLevel, discovery_splash: discoverySplash, public_updates_channel_id: publicUpdatesChannelId, safety_alerts_channel_id: safetyAlertsChannelId };
    let tmp = null;
    if (null != premiumProgressBarEnabled) {
      body = { premium_progress_bar_enabled: premiumProgressBarEnabled };
      tmp = body;
    }
    const merged = Object.assign(tmp);
    let toServerGuildProfileResult = profile;
    if (null != profile) {
      toServerGuildProfileResult = require("GuildTagTypes").toServerGuildProfile(profile);
      const obj4 = require("GuildTagTypes");
    }
    body.profile = toServerGuildProfileResult;
    body.moderator_reporting_enabled = moderatorReportingEnabled;
    body.official_message_color = officialMessageColor;
    body.verification_role_id = verificationRoleId;
    body(573).dispatch({ type: "GUILD_SETTINGS_SUBMIT" });
    const pendingOriginalMd5s = GuildSettingsStore.getPendingOriginalMd5s();
    const obj5 = body(573);
    const obj6 = body(5169);
    const headersForMd5 = obj6.buildHeadersForMd5({ [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_ICON]: pendingOriginalMd5s.icon, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_BANNER]: pendingOriginalMd5s.banner, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_INVITE_SPLASH]: pendingOriginalMd5s.splash, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_DISCOVERY_SPLASH]: pendingOriginalMd5s.discoverySplash });
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_10.GUILD(id), query: { for_discovery: body.isForDiscovery }, body, headers: headersForMd5, oldFormErrors: true, rejectWithError: null };
    const obj1 = { [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_ICON]: pendingOriginalMd5s.icon, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_BANNER]: pendingOriginalMd5s.banner, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_INVITE_SPLASH]: pendingOriginalMd5s.splash, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_DISCOVERY_SPLASH]: pendingOriginalMd5s.discoverySplash };
    request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
    const obj9 = require("HTTPUtils");
    return HTTP.patch(request).then((body) => {
      obj = { type: "GUILD_SETTINGS_SUBMIT_SUCCESS", guild: body.body };
      obj.dispatch(obj);
      const result = GuildTemplateTooltipActionCreatorsDefault.checkGuildTemplateDirty(closure_0);
    }, (errors) => {
      obj = { type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: errors.body };
      obj.dispatch(obj);
      obj = { errors: errors.body };
      logger.error("Failed to save guild settings", obj);
      if (obj.throwErr) {
        throw errors.body;
      }
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
  transferOwnership(id, id2, EMAIL, arg3) {
    let tmp = EMAIL;
    if (EMAIL === undefined) {
      tmp = null;
    }
    let tmp2 = arg3;
    if (arg3 === undefined) {
      tmp2 = null;
    }
    const request = { url: closure_1_10.GUILD(id), body: { owner_id: id2, code: tmp2 }, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    const trackedActionData = { event: discord_common_AnalyticsUtils.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP, properties: { guild_id: id, verification_type: tmp } };
    request.trackedActionData = trackedActionData;
    request.rejectWithError = HTTPUtils.rejectWithMigratedError();
    return trackedActionData.patch(request);
  },
  sendTransferOwnershipPincode(id, arg1) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let trackedActionData = { url: closure_1_10.GUILD_PINCODE(id), oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    trackedActionData = { event: discord_common_AnalyticsUtils.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE, properties: { guild_id: id, is_resend: flag } };
    trackedActionData.trackedActionData = trackedActionData;
    trackedActionData.rejectWithError = HTTPUtils.rejectWithMigratedError();
    return trackedActionData.put(trackedActionData);
  },
  deleteGuild(arg0) {
    const HTTP = HTTPUtils.HTTP;
    obj = { url: closure_1_10.GUILD_DELETE(arg0), oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.post(obj).then(() => {
      obj.close();
    });
  },
  leaveGuild(id) {
    closure_0 = id;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp3;
              closure_128_0 = undefined;
              const isLurkingResult = lurking.isLurking(tmp2);
              closure_128_0 = isLurkingResult;
              const HTTP = tmp2(1272).HTTP;
              const request = { url: closure_1_10.GUILD_LEAVE(tmp2), body: null, oldFormErrors: true, rejectWithError: null };
              let isCurrentUserGuestResult = isLurkingResult;
              if (!isLurkingResult) {
                isCurrentUserGuestResult = currentUserGuest.isCurrentUserGuest(tmp2);
              }
              const obj1 = { lurking: isCurrentUserGuestResult };
              request.body = obj1;
              let obj3 = tmp2(1272);
              request.rejectWithError = obj3.rejectWithMigratedError();
              dependencyMap = 1;
              c3 = 1;
              const obj2 = {
                value: HTTP.del(request).then(() => {
                          const AccessibilityAnnouncer = closure_1_0(4412).AccessibilityAnnouncer;
                          const intl = closure_1_0(1114).intl;
                          AccessibilityAnnouncer.announce(intl.string(closure_1_0(1114).t["7iPyVW"]));
                        }),
                done: false
              };
              return obj2;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1_16.close();
            let tmp10 = closure_129_1;
            if (closure_129_1) {
              tmp10 = closure_128_0;
            }
            if (tmp10) {
              obj = tmp2(1100);
              obj.transitionTo(constants.GUILD_DISCOVERY);
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
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              c1 = 0;
              const v0 = 0;
              if (fullServerPreview.isFullServerPreview(guildId)) {
                if (userId === id.getId()) {
                  const result = v0(roles[20]).updateImpersonatedRoles(tmp28, roles);
                  c3 = 3;
                  const obj6 = v0(roles[20]);
                }
              }
              const HTTP = v0(roles[10]).HTTP;
              const request = { url: closure_1_10.GUILD_MEMBER(guildId, userId), body: null, oldFormErrors: true, rejectWithError: null };
              const obj1 = { roles };
              request.body = obj1;
              request.rejectWithError = v0(roles[10]).rejectWithMigratedError();
              roles = 1;
              c3 = 1;
              const obj2 = { value: HTTP.patch(request), done: false };
              return obj2;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            const item = closure_129_3.forEach((roleId) => {
              userId(573);
              obj = { type: "GUILD_ROLE_MEMBER_ADD", guildId, roleId, userId };
              return obj.dispatch(obj);
            });
            const item1 = closure_129_4.forEach((roleId) => {
              userId(573);
              obj = { type: "GUILD_ROLE_MEMBER_REMOVE", guildId, roleId, userId };
              return obj.dispatch(obj);
            });
          }
          c3 = 3;
          obj = { value, done: true };
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
    const body = { member_ids: keys };
    request.body = body;
    const obj3 = require("HTTPUtils");
    return HTTP.patch(request).then((added) => {
      obj = { type: "GUILD_ROLE_MEMBER_BULK_ADD", guildId, roleId, added: added.body };
      obj.dispatch(obj);
    });
  },
  enableIntegration(id, type, id2) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_1_10.GUILD_INTEGRATIONS(id), body: null, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    const body = { type, id: id2 };
    request.body = body;
    return HTTP.post(request);
  },
  disableIntegration(id, id2) {
    const HTTP = HTTPUtils.HTTP;
    obj = { url: closure_1_10.GUILD_INTEGRATION(id, id2), oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  updateIntegration(guildId, id, expire_behavior, expire_grace_period, enable_emoticons) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_1_10.GUILD_INTEGRATION(guildId, id), body: null, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    const body = { expire_behavior, expire_grace_period, enable_emoticons };
    request.body = body;
    return HTTP.patch(request);
  },
  syncIntegration(guildId, id) {
    const HTTP = HTTPUtils.HTTP;
    obj = { url: closure_1_10.GUILD_INTEGRATION_SYNC(guildId, id), oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    HTTP.post(obj);
  },
  migratePinPermission(arg0) {
    closure_0 = arg0;
    return (async (arg0, value) => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              const HTTP = v3(1272).HTTP;
              const obj1 = { url: closure_1_10.GUILD_MIGRATE_PIN_PERMISSION(guildId), rejectWithError: true };
              c1 = 1;
              v3 = 1;
              const obj2 = {
                value: HTTP.post(obj1).then(() => {
                          c1(573);
                          obj = { type: "GUILD_SETTINGS_PIN_PERMISSION_MIGRATED", guildId };
                          return obj.dispatch(obj);
                        }),
                done: false
              };
              return obj2;
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
    return (async (arg0, value) => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              const HTTP = v3(1272).HTTP;
              const obj1 = { url: closure_1_10.GUILD_MIGRATE_SLOWMODE_PERMISSION(guildId), rejectWithError: true };
              c1 = 1;
              v3 = 1;
              const obj2 = {
                value: HTTP.post(obj1).then(() => {
                          c1(573);
                          obj = { type: "GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED", guildId };
                          return obj.dispatch(obj);
                        }),
                done: false
              };
              return obj2;
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
    return (async (arg0, value) => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp4;
              if (importDefault) {
                c1 = 1;
                c2 = 1;
                const obj1 = { value: closure_1_16.migratePinPermission(closure_0), done: false };
                return obj1;
              }
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj2 = { value, done: true };
                return obj2;
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
            return { value: "HermesInternal", done: null };
          }
          if (closure_128_2) {
            c1 = 2;
            c2 = 1;
            const obj3 = { value: closure_1_16.migrateSlowmodePermission(closure_128_0), done: false };
            return obj3;
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

export default obj;