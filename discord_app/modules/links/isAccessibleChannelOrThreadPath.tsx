// === Module 7213: _isAccessibleChannelOrThreadPath ===

// Module 7213 (_isAccessibleChannelOrThreadPath)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import isSubscriptionGated from "isSubscriptionGated" /* 1981 */;
import shouldShowOnboarding from "shouldShowOnboarding" /* 6784 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import ME from "ME" /* 676 */;
import set from "set" /* 1398 */;

const require = fn;
function _isAccessibleChannelOrThreadPath() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === channelGatedAndVisible) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let unsafeMutableRoles2 = tmp5;
              let guild2 = tmp2;
              let callback;
              obj5 = undefined;
              ({ guildId: c0, channelId: obj5 } = callback);
              guild2 = undefined;
              unsafeMutableRoles2 = undefined;
              channelGatedAndVisible = undefined;
              channelGatedAndVisible = 1;
              c5 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                guild2 = guild.getGuild(callback);
                unsafeMutableRoles2 = unsafeMutableRoles.getUnsafeMutableRoles(callback);
                if (null == guild2) {
                  if (callback !== closure_10) {
                    if (obj5 !== constants2.GAME_SHOP) {
                      c5 = 3;
                      return { value: false, done: true };
                    }
                  }
                }
                if (null == obj5) {
                  c5 = 3;
                  return { value: true, done: true };
                } else {
                  if (callback2(obj5)) {
                    if (constants2.VIBEGRATIONS === obj5) {
                      let result = null != guild2;
                      if (result) {
                        result = callback(guild2[8]).canManageVibegrations(guild2, "isAccessibleChannelOrThreadPath");
                        const obj34 = callback(guild2[8]);
                      }
                      c5 = 3;
                      const obj2 = { value: null, done: true };
                      obj2[0] = result;
                      return obj2;
                    } else if (constants2.ROLE_SUBSCRIPTIONS === tmp31) {
                      c5 = 3;
                      const obj3 = { value: null, done: true };
                      obj3[0] = callback(guild2[9]).areRoleSubscriptionsVisibleInGuild(callback, unsafeMutableRoles2);
                      return obj3;
                    } else if (constants2.SERVER_MONETIZATION_ONBOARDING === tmp31) {
                      let result1 = null != guild2;
                      if (result1) {
                        result1 = callback(guild2[10]).canUserSeeMonetizationOnboarding(guild2);
                        const obj30 = callback(guild2[10]);
                      }
                      c5 = 3;
                      let obj4 = { value: null, done: true };
                      obj4[0] = result1;
                      return obj4;
                    } else if (constants2.GAME_SHOP === tmp31) {
                      obj5 = guild2;
                      if (guild2 == null) {
                        obj5 = { id: null, type: "id-only" };
                        obj5[0] = callback;
                      }
                      c5 = 3;
                      let obj6 = { value: null, done: true };
                      obj6[0] = callback(guild2[11]).hasSocialLayerStorefront(obj5);
                      return obj6;
                    } else if (constants2.GUILD_SHOP === tmp31) {
                      c5 = 3;
                      const obj7 = { value: null, done: true };
                      obj7[0] = callback(guild2[12]).isGuildShopVisibleInGuild(guild2, unsafeMutableRoles2);
                      return obj7;
                    } else if (constants2.MEMBER_APPLICATIONS === tmp31) {
                      c5 = 3;
                      let obj8 = { value: null, done: true };
                      obj8[0] = callback(guild2[13]).canReviewGuildMemberApplications(callback);
                      return obj8;
                    } else if (constants2.GUILD_HOME === tmp31) {
                      let obj20 = callback(guild2[14]);
                      c5 = 3;
                      const obj9 = { value: null, done: true };
                      obj9[0] = obj20.canSeeOnboardingHome(callback);
                      return obj9;
                    } else if (constants2.CHANNEL_BROWSER === tmp31) {
                      let hasItem = null != guild2;
                      if (hasItem) {
                        const features3 = guild2.features;
                        hasItem = features3.has(constants.COMMUNITY);
                      }
                      c5 = 3;
                      let obj10 = { value: null, done: true };
                      obj10[0] = hasItem;
                      return obj10;
                    } else if (constants2.GUILD_ONBOARDING === tmp31) {
                      c5 = 3;
                      const obj11 = { value: null, done: true };
                      obj11[0] = c5.shouldShowOnboarding(callback);
                      return obj11;
                    } else if (constants2.CUSTOMIZE_COMMUNITY === tmp31) {
                      let hasItem1 = null != guild2;
                      if (hasItem1) {
                        const features2 = guild2.features;
                        hasItem1 = features2.has(constants.COMMUNITY);
                      }
                      c5 = 3;
                      let obj12 = { value: null, done: true };
                      obj12[0] = hasItem1;
                      return obj12;
                    } else if (constants2.MEMBER_SAFETY === tmp31) {
                      let obj15 = callback(guild2[15]);
                      c5 = 3;
                      const obj13 = { value: null, done: true };
                      obj13[0] = obj15.canAccessMemberSafetyPage(callback);
                      return obj13;
                    } else if (constants2.GUILD_BOOSTS === tmp31) {
                      c5 = 3;
                      return { value: true, done: true };
                    } else if (constants2.REPORT_TO_MOD === tmp31) {
                      let tmp78 = null != guild2;
                      if (tmp78) {
                        tmp78 = obj5(guild2[16])(guild2);
                      }
                      c5 = 3;
                      const obj14 = { value: null, done: true };
                      obj14[0] = tmp78;
                      return obj14;
                    } else if (constants2.GAME_SERVERS === tmp31) {
                      obj12 = callback(guild2[17]);
                      let gameServerEnabled = obj12.getGameServerEnabled(callback, "isAccessibleChannelOrThreadPath");
                      if (gameServerEnabled) {
                        gameServerEnabled = null != guild2;
                      }
                      if (gameServerEnabled) {
                        const features = guild2.features;
                        gameServerEnabled = features.has(constants.GAME_SERVERS);
                      }
                      c5 = 3;
                      obj15 = { value: null, done: true };
                      obj15[0] = gameServerEnabled;
                      return obj15;
                    } else if (constants2.GUILD_OFFICIAL_MESSAGES === tmp31) {
                      obj10 = callback(guild2[18]);
                      c5 = 3;
                      const obj16 = { value: null, done: true };
                      obj16[0] = obj10.isGuildOfficialMessagesEnabled(guild2, "isAccessibleChannelOrThreadPath");
                      return obj16;
                    } else if (constants2.GUILD_SPACE === tmp31) {
                      obj8 = callback(guild2[19]);
                      c5 = 3;
                      const obj17 = { value: null, done: true };
                      obj17[0] = obj8.canUseGuildSpace(guild2, "isAccessibleChannelOrThreadPath");
                      return obj17;
                    } else {
                      callback(guild2[20]).assertNever(obj5);
                      const obj39 = callback(guild2[20]);
                    }
                  }
                  channelGatedAndVisible = store.getChannel(obj5);
                  let tmp15 = null != channelGatedAndVisible;
                  if (!tmp15) {
                    obj4 = obj5(guild2[21]);
                    channelGatedAndVisible = 2;
                    c5 = 1;
                    const obj18 = { value: null, done: false };
                    obj18[0] = obj4.loadThread(obj5);
                    return obj18;
                  }
                }
              }
            } else {
              if (2 === tmp5) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj19 = { value: null, done: true };
                  obj19[0] = arg1;
                  return obj19;
                } else {
                  const channel = store.getChannel(obj5);
                  channelGatedAndVisible = channel;
                  let tmp11 = null == channel;
                  if (tmp11) {
                    tmp11 = callback === closure_10;
                  }
                  if (tmp11) {
                    obj1 = obj5(guild2[22]);
                    channelGatedAndVisible = 3;
                    c5 = 1;
                    obj20 = { value: null, done: false };
                    obj20[0] = obj1.openChannel(obj5);
                    return obj20;
                  }
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                channelGatedAndVisible = arg1;
              }
              tmp15 = null != channelGatedAndVisible;
            }
            if (tmp15) {
              obj6 = callback(guild2[23]);
              let canViewChannelResult = obj6.canViewChannel(channelGatedAndVisible);
              if (!canViewChannelResult) {
                canViewChannelResult = channelGatedAndVisible.isChannelGatedAndVisible(callback, obj5);
              }
              tmp15 = canViewChannelResult;
            }
            c5 = 3;
            const obj21 = { value: null, done: true };
            obj21[0] = tmp15;
            return obj21;
          }
        } catch (tmp154) {
          c5 = tmp;
          throw tmp154;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ GuildFeatures: c9, ME: c10 } = ME);
({ isStaticChannelRoute: unpackModuleId, StaticChannelRoute: closure_12 } = require("set"));
let result = require("obj132").fileFinishedImporting("modules/links/isAccessibleChannelOrThreadPath.tsx");

export default function isAccessibleChannelOrThreadPath() {
  const self = this;
  const apply = _isAccessibleChannelOrThreadPath.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};