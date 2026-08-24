// === Module 8874: ? ===

// Module 8874
import timestampDefault from "timestamp" /* 3 */;
import encodeProperties from "encodeProperties" /* 503 */;
import sendRequest from "sendRequest" /* 530 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import _modDef5227 from "module_5227" /* 5227 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "initialize" /* 1982 */;
import closure_5 from "initialize" /* 4022 */;
import closure_6 from "fetchFingerprint" /* 1218 */;
import closure_7 from "trackCommunicationDisabled" /* 1990 */;
import closure_8 from "createGuildRecordFromRust" /* 1910 */;
import closure_9 from "handleFormInit" /* 8875 */;
import ME from "ME" /* 676 */;

require = arg1;
({ Endpoints: c10, Layers, GuildSettingsSubsections: unpackModuleId, GuildSettingsSections: closure_12, GuildFeatures: map1, Routes: closure_14 } = ME);
let closure_15 = new timestampDefault("GuildSettingsActionCreators");
let obj = {
  init(guildId, section, location, subsection) {
    obj = dispatcherDefault;
    obj = { type: "GUILD_SETTINGS_INIT", guildId, section, subsection, location };
    obj.dispatch(obj);
  },
  open(arg0, arg1, arg2, arg3) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    const callback = arg3;
    return callback(function*() {
      if (c0 === 2) {
        c0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c0 = 2;
          if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const guild = closure_1_8.getGuild(c0);
            let hasItem;
            if (guild != null) {
              const features = guild.features;
              hasItem = features.has(closure_1_13.COMMUNITY);
            }
            if (hasItem) {
              if (SAFETY === closure_1_12.GUILD_AUTOMOD) {
                SAFETY = tmp7.SAFETY;
                let SAFETY_AUTOMOD = closure_1_11.SAFETY_AUTOMOD;
              }
              if (SAFETY === closure_1_12.MEMBER_VERIFICATION) {
                SAFETY = tmp7.SAFETY;
                SAFETY_AUTOMOD = closure_1_11.SAFETY_DM_AND_SPAM_PROTECTION;
              }
            }
            obj = closure_1_16;
            closure_1_16.init(c0, SAFETY, closure_1_2, SAFETY_AUTOMOD);
            if (null != SAFETY) {
              obj.setSection(SAFETY, SAFETY_AUTOMOD);
            }
            obj1 = SAFETY(closure_1_2[9]);
            obj1 = { type: "GUILD_SETTINGS_OPEN", guildId: null, section: null, subsection: null };
            obj1[1] = c0;
            obj1[2] = SAFETY;
            obj1[3] = SAFETY_AUTOMOD;
            obj1.dispatch(obj1);
            c0 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp26) {
          c0 = tmp;
          throw tmp26;
        }
      }
    })();
  },
  close() {
    dispatcherDefault.dispatch({ type: "GUILD_SETTINGS_CLOSE" });
  },
  saveRouteStack(state) {
    obj = dispatcherDefault;
    obj = { type: "GUILD_SETTINGS_SAVE_ROUTE_STACK", state };
    obj.dispatch(obj);
  },
  setSection(arg0, arg1) {
    const guildId = store.getGuildId();
    if (null != guildId) {
      guild = guild.getGuild(guildId);
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
      obj = dispatcherDefault;
      obj = { type: "GUILD_SETTINGS_SET_SECTION", section: null, subsection: null };
      obj[1] = tmp6;
      obj[2] = tmp5;
      obj.dispatch(obj);
    }
  },
  setSearchQuery(searchQuery) {
    obj = dispatcherDefault;
    obj = { type: "GUILD_SETTINGS_SET_SEARCH_QUERY", searchQuery };
    obj.dispatch(obj);
  },
  selectRole(hideActionSheet) {
    obj = dispatcherDefault;
    obj = { type: "GUILD_SETTINGS_ROLE_SELECT", roleId: hideActionSheet, searchQuery: arg1 };
    return obj.dispatch(obj);
  },
  updateEmbed(arg0, enabled, channel_id) {
    const _require = arg0;
    const HTTP = _require(530).HTTP;
    obj = { url: closure_10.GUILD_WIDGET(arg0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { enabled, channel_id };
    return HTTP.patch(obj).then((body) => {
      obj = closure_1_1(closure_1_2[9]);
      obj = { type: "GUILD_SETTINGS_SET_WIDGET", guildId: closure_0, enabled: body.body.enabled, channelId: body.body.channel_id };
      obj.dispatch(obj);
    });
  },
  updateMFALevel(updateMFALevelResult) {
    ({ guildId, level } = updateMFALevelResult);
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_10.GUILD_MFA(guildId), body: { level }, oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
    const obj2 = sendRequest;
    return HTTP.post(obj).then((body) => {
      obj = callback(table[9]);
      obj = { type: "GUILD_SETTINGS_SET_MFA_SUCCESS", level: body.body.level };
      return obj.dispatch(obj);
    });
  },
  updateIcon(c2, base64) {
    const _require = c2;
    closure_1 = base64;
    const HTTP = _require(530).HTTP;
    obj = { url: closure_10.GUILD(c2), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { icon: base64 };
    obj[3] = _require(530).rejectWithMigratedError();
    const obj3 = _require(530);
    HTTP.patch(obj).then(() => {
      obj = base64(closure_1_2[9]);
      obj = { type: "GUILD_SETTINGS_UPDATE", icon: base64 };
      obj.dispatch(obj);
      const result = base64(closure_1_2[11]).checkGuildTemplateDirty(closure_0);
    }, (body) => {
      obj = base64(table[9]);
      obj = { type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: body.body };
      return obj.dispatch(obj);
    });
  },
  cancelChanges(id) {
    obj = dispatcherDefault;
    obj = { type: "GUILD_SETTINGS_CANCEL_CHANGES", guildId: id };
    obj.dispatch(obj);
  },
  updateGuild(arg0) {
    ({ safetyAlertsChannelId, profile } = arg0);
    obj = {};
    const merged = Object.assign(Object.assign(arg0, Object.create(null)));
    if (null != profile) {
      profile = obj.profile;
      if (profile == null) {
        profile = {};
      }
      obj = {};
      const merged1 = Object.assign(profile);
      const merged2 = Object.assign(profile);
      obj.profile = obj;
    }
    if (tmp8) {
      obj.safetyAlertsChannelId = safetyAlertsChannelId;
    }
    tmp8 = null != store.getGuildId() && null != safetyAlertsChannelId;
    obj = { type: "GUILD_SETTINGS_UPDATE" };
    const merged3 = Object.assign(obj);
    dispatcherDefault.dispatch(obj);
  },
  updateGuildProfile(guildId, arg1) {
    obj = dispatcherDefault;
    obj = { type: "GUILD_SETTINGS_PROFILE_UPDATE", guildId };
    const merged = Object.assign(arg1);
    obj.dispatch(obj);
  },
  saveGuild(id, arg1, arg2) {
    const _require = id;
    ({ premiumProgressBarEnabled, profile } = arg1);
    obj = arg2;
    ({ name, description, icon, splash, banner, homeHeader, afkChannelId, afkTimeout, systemChannelId, verificationLevel, defaultMessageNotifications, explicitContentFilter, features, systemChannelFlags, preferredLocale, rulesChannelId, safetyAlertsChannelId, ownerConfiguredContentLevel, discoverySplash, publicUpdatesChannelId, moderatorReportingEnabled, officialMessageColor, verificationRoleId } = arg1);
    if (arg2 === undefined) {
      obj = {};
    }
    obj = { name, description, icon, splash, banner, home_header: homeHeader, features, preferred_locale: preferredLocale, afk_channel_id: afkChannelId, afk_timeout: afkTimeout, system_channel_id: systemChannelId, verification_level: verificationLevel, default_message_notifications: defaultMessageNotifications, explicit_content_filter: explicitContentFilter, system_channel_flags: systemChannelFlags, rules_channel_id: rulesChannelId, owner_configured_content_level: ownerConfiguredContentLevel, discovery_splash: discoverySplash, public_updates_channel_id: publicUpdatesChannelId, safety_alerts_channel_id: safetyAlertsChannelId };
    let tmp = null;
    if (null != premiumProgressBarEnabled) {
      obj = { premium_progress_bar_enabled: null };
      obj[0] = premiumProgressBarEnabled;
      tmp = obj;
    }
    const merged = Object.assign(tmp);
    let toServerGuildProfileResult = profile;
    if (null != profile) {
      let obj3 = _require(8882);
      toServerGuildProfileResult = obj3.toServerGuildProfile(profile);
    }
    obj.profile = toServerGuildProfileResult;
    obj.moderator_reporting_enabled = moderatorReportingEnabled;
    obj.official_message_color = officialMessageColor;
    obj.verification_role_id = verificationRoleId;
    obj(709).dispatch({ type: "GUILD_SETTINGS_SUBMIT" });
    const pendingOriginalMd5s = store.getPendingOriginalMd5s();
    const obj5 = obj(709);
    const obj6 = obj(8382);
    const headersForMd5 = obj6.buildHeadersForMd5({ [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_ICON]: pendingOriginalMd5s.icon, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_BANNER]: pendingOriginalMd5s.banner, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_INVITE_SPLASH]: pendingOriginalMd5s.splash, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_DISCOVERY_SPLASH]: pendingOriginalMd5s.discoverySplash });
    const HTTP = _require(530).HTTP;
    const obj2 = { url: closure_10.GUILD(id), query: obj3, body: obj, headers: headersForMd5, oldFormErrors: true, rejectWithError: null };
    obj3 = { for_discovery: obj.isForDiscovery };
    obj1 = { [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_ICON]: pendingOriginalMd5s.icon, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_BANNER]: pendingOriginalMd5s.banner, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_INVITE_SPLASH]: pendingOriginalMd5s.splash, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_DISCOVERY_SPLASH]: pendingOriginalMd5s.discoverySplash };
    obj2[5] = _require(530).rejectWithMigratedError();
    const obj10 = _require(530);
    return HTTP.patch(obj2).then((body) => {
      obj = obj(closure_1_2[9]);
      obj = { type: "GUILD_SETTINGS_SUBMIT_SUCCESS", guild: body.body };
      obj.dispatch(obj);
      const result = obj(closure_1_2[11]).checkGuildTemplateDirty(closure_0);
    }, (errors) => {
      obj = obj(closure_1_2[9]);
      obj = { type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: errors.body };
      obj.dispatch(obj);
      obj = { errors: errors.body };
      closure_1_15.error("Failed to save guild settings", obj);
      if (obj.throwErr) {
        throw errors.body;
      }
    });
  },
  updateGuildModeration(id, verificationLevel) {
    const _require = id;
    const HTTP = _require(530).HTTP;
    obj = { url: closure_10.GUILD(id), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { verification_level: verificationLevel.verificationLevel, explicit_content_filter: verificationLevel.explicitContentFilter };
    obj[3] = _require(530).rejectWithMigratedError();
    const obj3 = _require(530);
    return HTTP.patch(obj).then((arg0) => {
      const result = closure_1_1(closure_1_2[11]).checkGuildTemplateDirty(closure_0);
      return arg0;
    });
  },
  transferOwnership(id, id2, EMAIL, closure_0) {
    let tmp = EMAIL;
    if (EMAIL === undefined) {
      tmp = null;
    }
    let tmp2 = closure_0;
    if (closure_0 === undefined) {
      tmp2 = null;
    }
    obj = _modDef5227;
    obj = { url: closure_10.GUILD(id), body: obj, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    obj = { owner_id: id2, code: tmp2 };
    obj[3] = { event: encodeProperties.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP, properties: obj2 };
    obj1 = { event: encodeProperties.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP, properties: obj2 };
    obj[4] = sendRequest.rejectWithMigratedError();
    return obj.patch(obj);
  },
  sendTransferOwnershipPincode(id, arg1) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    obj = _modDef5227;
    obj = { url: closure_10.GUILD_PINCODE(id), oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    obj = { event: encodeProperties.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE, properties: obj1 };
    obj[2] = obj;
    obj[3] = sendRequest.rejectWithMigratedError();
    return obj.put(obj);
  },
  deleteGuild(arg0) {
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_10.GUILD_DELETE(arg0), oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
    const obj2 = sendRequest;
    return HTTP.post(obj).then(() => {
      closure_16.close();
    });
  },
  leaveGuild(id) {
    closure_0 = id;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    return callback(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp3;
              c0 = tmp2;
              c0 = undefined;
              const isLurkingResult = closure_1_5.isLurking(closure_1_0);
              c0 = isLurkingResult;
              const HTTP = closure_1_0(530).HTTP;
              obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
              obj1[0] = closure_1_10.GUILD_LEAVE(closure_1_0);
              let isCurrentUserGuestResult = isLurkingResult;
              if (!isLurkingResult) {
                isCurrentUserGuestResult = closure_1_7.isCurrentUserGuest(closure_1_0);
              }
              const obj2 = { lurking: null };
              obj2[0] = isCurrentUserGuestResult;
              obj1[1] = obj2;
              let obj3 = closure_1_0(530);
              obj1[3] = obj3.rejectWithMigratedError();
              dependencyMap = 1;
              c3 = 1;
              obj3 = { value: null, done: false };
              obj3[0] = HTTP.del(obj1).then(() => {
                const AccessibilityAnnouncer = _undefined(1350).AccessibilityAnnouncer;
                const intl = _undefined(1236).intl;
                AccessibilityAnnouncer.announce(intl.string(_undefined(1236).t["7iPyVW"]));
              });
              return obj3;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            closure_1_16.close();
            let tmp10 = closure_1;
            if (closure_1) {
              tmp10 = closure_1_0;
            }
            if (tmp10) {
              obj = closure_1_0(1222);
              obj.transitionTo(closure_1_14.GUILD_DISCOVERY);
            }
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
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
    const callback = arg3;
    closure_4 = arg4;
    return callback(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c1 = 0;
              c0 = 0;
              if (closure_1_4.isFullServerPreview(closure_1_0)) {
                if (closure_1_1 === closure_1_6.getId()) {
                  const result = closure_1_0(6792).updateImpersonatedRoles(tmp29, dependencyMap);
                  c3 = 3;
                  const obj6 = closure_1_0(6792);
                }
              }
              const HTTP = closure_1_0(530).HTTP;
              obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
              obj1[0] = closure_1_10.GUILD_MEMBER(closure_1_0, closure_1_1);
              const obj2 = { roles: null };
              obj2[0] = dependencyMap;
              obj1[1] = obj2;
              let obj3 = closure_1_0(530);
              obj1[3] = obj3.rejectWithMigratedError();
              dependencyMap = 1;
              c3 = 1;
              obj3 = { value: null, done: false };
              obj3[0] = HTTP.patch(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            const item = c3.forEach((roleId) => {
              obj = v0(709);
              obj = { type: "GUILD_ROLE_MEMBER_ADD", guildId: c0, roleId, userId: v0 };
              return obj.dispatch(obj);
            });
            const item1 = closure_4.forEach((roleId) => {
              obj = v0(709);
              obj = { type: "GUILD_ROLE_MEMBER_REMOVE", guildId: c0, roleId, userId: v0 };
              return obj.dispatch(obj);
            });
          }
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp22) {
          c3 = tmp;
          throw tmp22;
        }
      }
    })();
  },
  bulkAddMemberRoles(id, id2, keys) {
    const _require = id;
    closure_1 = id2;
    const HTTP = _require(530).HTTP;
    obj = { url: closure_10.GUILD_ROLE_MEMBERS(id, id2), body: obj, rejectWithError: null };
    obj = { member_ids: keys };
    obj[2] = _require(530).rejectWithMigratedError();
    const obj3 = _require(530);
    return HTTP.patch(obj).then((added) => {
      obj = id2(closure_1_2[9]);
      obj = { type: "GUILD_ROLE_MEMBER_BULK_ADD", guildId: closure_0, roleId: id2, added: added.body };
      obj.dispatch(obj);
    });
  },
  enableIntegration(id, type, id2) {
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_10.GUILD_INTEGRATIONS(id), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { type, id: id2 };
    obj[3] = sendRequest.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  disableIntegration(id, id2) {
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_10.GUILD_INTEGRATION(id, id2), oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  updateIntegration(guildId, id, expire_behavior, expire_grace_period, enable_emoticons) {
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_10.GUILD_INTEGRATION(guildId, id), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { expire_behavior, expire_grace_period, enable_emoticons };
    obj[3] = sendRequest.rejectWithMigratedError();
    return HTTP.patch(obj);
  },
  syncIntegration(guildId, id) {
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_10.GUILD_INTEGRATION_SYNC(guildId, id), oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
    HTTP.post(obj);
  },
  migratePinPermission(closure_1_0) {
    closure_0 = closure_1_0;
    return callback(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          v0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const HTTP = v0(closure_1_2[10]).HTTP;
              obj1 = { url: null, rejectWithError: true };
              obj1[0] = closure_1_10.GUILD_MIGRATE_PIN_PERMISSION(v0);
              c1 = 1;
              v0 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1).then(() => {
                obj = v1(closure_1_2[9]);
                obj = { type: "GUILD_SETTINGS_PIN_PERMISSION_MIGRATED", guildId: c0 };
                return obj.dispatch(obj);
              });
              return obj2;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp9) {
          v0 = tmp;
          throw tmp9;
        }
      }
    })();
  },
  migrateSlowmodePermission(closure_0) {
    return callback(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          v0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const HTTP = v0(closure_1_2[10]).HTTP;
              obj1 = { url: null, rejectWithError: true };
              obj1[0] = closure_1_10.GUILD_MIGRATE_SLOWMODE_PERMISSION(v0);
              c1 = 1;
              v0 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1).then(() => {
                obj = v1(closure_1_2[9]);
                obj = { type: "GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED", guildId: c0 };
                return obj.dispatch(obj);
              });
              return obj2;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp9) {
          v0 = tmp;
          throw tmp9;
        }
      }
    })();
  },
  migratePermissions(arg0, arg1) {
    closure_0 = arg0;
    ({ migratePin: importDefault, migrateSlowmode: dependencyMap } = arg1);
    return callback(function*() {
      if (c2 === 2) {
        c2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp4;
              if (c1) {
                c1 = 1;
                c2 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_16.migratePinPermission(closure_1_0);
                return obj1;
              }
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c2 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
          if (c2) {
            c1 = 2;
            c2 = 1;
            const obj3 = { value: null, done: false };
            obj3[0] = closure_1_16.migrateSlowmodePermission(closure_0);
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
const tmp3 = new timestampDefault("GuildSettingsActionCreators");
let result = require("set").fileFinishedImporting("modules/guild_settings/GuildSettingsActionCreators.tsx");

export default obj;