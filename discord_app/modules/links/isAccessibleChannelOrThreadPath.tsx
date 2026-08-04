// discord_app/modules/links/isAccessibleChannelOrThreadPath.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import isSubscriptionGated from "isSubscriptionGated";
import shouldShowOnboarding from "shouldShowOnboarding";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import closure_8 from "createGuildRecordFromRust";
import ME from "ME";
import set from "set";
import set from "shouldShowOnboarding";

let c10;
let c9;
let closure_12;
let unpackModuleId;
const require = arg1;
function _isAccessibleChannelOrThreadPath() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      let c0;
      let obj5;
      if (c5 === 2) {
        c5 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp3;
        if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
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
                throwTypeErrorResult = callback;
                ({ guildId: c0, channelId: obj5 } = callback);
                guild2 = undefined;
                unsafeMutableRoles2 = undefined;
                channelGatedAndVisible = undefined;
                channelGatedAndVisible = 1;
                c5 = 1;
                return { value: "ct", done: "Array" };
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c5 = 3;
                  let obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  throwTypeErrorResult = guild2;
                  throwTypeErrorResult = unsafeMutableRoles2;
                  throwTypeErrorResult = guild;
                  throwTypeErrorResult = callback;
                  guild2 = guild.getGuild(callback);
                  throwTypeErrorResult = unsafeMutableRoles;
                  throwTypeErrorResult = callback;
                  unsafeMutableRoles2 = unsafeMutableRoles.getUnsafeMutableRoles(callback);
                  throwTypeErrorResult = guild2;
                  throwTypeErrorResult = null;
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
                    throwTypeErrorResult = guild2;
                    throwTypeErrorResult = unsafeMutableRoles2;
                    throwTypeErrorResult = callback2;
                    throwTypeErrorResult = obj5;
                    if (callback2(obj5)) {
                      if (constants2.VIBEGRATIONS === obj5) {
                        throwTypeErrorResult = guild2;
                        throwTypeErrorResult = guild2;
                        throwTypeErrorResult = null != guild2;
                        if (throwTypeErrorResult) {
                          throwTypeErrorResult = guild2;
                          throwTypeErrorResult = unsafeMutableRoles2;
                          throwTypeErrorResult = callback;
                          throwTypeErrorResult = guild2;
                          throwTypeErrorResult = guild2;
                          throwTypeErrorResult = callback(guild2[8]).canManageVibegrations(guild2, "isAccessibleChannelOrThreadPath");
                          const obj34 = callback(guild2[8]);
                        }
                        c5 = 3;
                        const obj2 = { value: null, done: true };
                        obj2[0] = throwTypeErrorResult;
                        return obj2;
                      } else {
                        throwTypeErrorResult = unsafeMutableRoles2;
                        throwTypeErrorResult = constants2;
                        if (constants2.ROLE_SUBSCRIPTIONS === tmp31) {
                          throwTypeErrorResult = guild2;
                          throwTypeErrorResult = unsafeMutableRoles2;
                          throwTypeErrorResult = callback;
                          throwTypeErrorResult = guild2;
                          throwTypeErrorResult = callback;
                          throwTypeErrorResult = unsafeMutableRoles2;
                          c5 = 3;
                          const obj3 = { value: null, done: true };
                          obj3[0] = callback(guild2[9]).areRoleSubscriptionsVisibleInGuild(callback, unsafeMutableRoles2);
                          return obj3;
                        } else {
                          throwTypeErrorResult = unsafeMutableRoles2;
                          throwTypeErrorResult = constants2;
                          if (constants2.SERVER_MONETIZATION_ONBOARDING === tmp31) {
                            throwTypeErrorResult = guild2;
                            throwTypeErrorResult = guild2;
                            throwTypeErrorResult = null != guild2;
                            if (throwTypeErrorResult) {
                              throwTypeErrorResult = guild2;
                              throwTypeErrorResult = unsafeMutableRoles2;
                              throwTypeErrorResult = callback;
                              throwTypeErrorResult = guild2;
                              throwTypeErrorResult = guild2;
                              throwTypeErrorResult = callback(guild2[10]).canUserSeeMonetizationOnboarding(guild2);
                              const obj30 = callback(guild2[10]);
                            }
                            c5 = 3;
                            let obj4 = { value: null, done: true };
                            obj4[0] = throwTypeErrorResult;
                            return obj4;
                          } else {
                            throwTypeErrorResult = unsafeMutableRoles2;
                            throwTypeErrorResult = constants2;
                            if (constants2.GAME_SHOP === tmp31) {
                              throwTypeErrorResult = guild2;
                              throwTypeErrorResult = unsafeMutableRoles2;
                              throwTypeErrorResult = callback;
                              throwTypeErrorResult = guild2;
                              throwTypeErrorResult = guild2;
                              obj5 = guild2;
                              if (guild2 == null) {
                                throwTypeErrorResult = guild2;
                                obj5 = { id: null, type: "id-only" };
                                throwTypeErrorResult = callback;
                                obj5[0] = callback;
                              }
                              throwTypeErrorResult = obj5;
                              c5 = 3;
                              let obj6 = { value: null, done: true };
                              obj6[0] = callback(guild2[11]).hasSocialLayerStorefront(obj5);
                              return obj6;
                            } else {
                              throwTypeErrorResult = unsafeMutableRoles2;
                              throwTypeErrorResult = constants2;
                              if (constants2.GUILD_SHOP === tmp31) {
                                throwTypeErrorResult = guild2;
                                throwTypeErrorResult = unsafeMutableRoles2;
                                throwTypeErrorResult = callback;
                                throwTypeErrorResult = guild2;
                                throwTypeErrorResult = guild2;
                                throwTypeErrorResult = unsafeMutableRoles2;
                                c5 = 3;
                                const obj7 = { value: null, done: true };
                                obj7[0] = callback(guild2[12]).isGuildShopVisibleInGuild(guild2, unsafeMutableRoles2);
                                return obj7;
                              } else {
                                throwTypeErrorResult = unsafeMutableRoles2;
                                throwTypeErrorResult = constants2;
                                if (constants2.MEMBER_APPLICATIONS === tmp31) {
                                  throwTypeErrorResult = guild2;
                                  throwTypeErrorResult = unsafeMutableRoles2;
                                  throwTypeErrorResult = callback;
                                  throwTypeErrorResult = guild2;
                                  throwTypeErrorResult = callback;
                                  c5 = 3;
                                  let obj8 = { value: null, done: true };
                                  obj8[0] = callback(guild2[13]).canReviewGuildMemberApplications(callback);
                                  return obj8;
                                } else {
                                  throwTypeErrorResult = unsafeMutableRoles2;
                                  throwTypeErrorResult = constants2;
                                  if (constants2.GUILD_HOME === tmp31) {
                                    throwTypeErrorResult = guild2;
                                    throwTypeErrorResult = unsafeMutableRoles2;
                                    throwTypeErrorResult = callback;
                                    throwTypeErrorResult = guild2;
                                    let obj20 = callback(guild2[14]);
                                    throwTypeErrorResult = callback;
                                    c5 = 3;
                                    const obj9 = { value: null, done: true };
                                    obj9[0] = obj20.canSeeOnboardingHome(callback);
                                    return obj9;
                                  } else {
                                    throwTypeErrorResult = unsafeMutableRoles2;
                                    throwTypeErrorResult = constants2;
                                    if (constants2.CHANNEL_BROWSER === tmp31) {
                                      throwTypeErrorResult = guild2;
                                      throwTypeErrorResult = guild2;
                                      throwTypeErrorResult = null != guild2;
                                      if (throwTypeErrorResult) {
                                        throwTypeErrorResult = guild2;
                                        throwTypeErrorResult = unsafeMutableRoles2;
                                        throwTypeErrorResult = guild2;
                                        const features3 = guild2.features;
                                        throwTypeErrorResult = constants;
                                        throwTypeErrorResult = features3.has(constants.COMMUNITY);
                                      }
                                      c5 = 3;
                                      let obj10 = { value: null, done: true };
                                      obj10[0] = throwTypeErrorResult;
                                      return obj10;
                                    } else {
                                      throwTypeErrorResult = unsafeMutableRoles2;
                                      throwTypeErrorResult = constants2;
                                      if (constants2.GUILD_ONBOARDING === tmp31) {
                                        c5 = 3;
                                        const obj11 = { value: null, done: true };
                                        obj11[0] = c5.shouldShowOnboarding(callback);
                                        return obj11;
                                      } else {
                                        throwTypeErrorResult = unsafeMutableRoles2;
                                        throwTypeErrorResult = constants2;
                                        if (constants2.CUSTOMIZE_COMMUNITY === tmp31) {
                                          let hasItem = null != guild2;
                                          if (hasItem) {
                                            const features2 = guild2.features;
                                            hasItem = features2.has(constants.COMMUNITY);
                                          }
                                          c5 = 3;
                                          let obj12 = { value: null, done: true };
                                          obj12[0] = hasItem;
                                          return obj12;
                                        } else {
                                          throwTypeErrorResult = unsafeMutableRoles2;
                                          throwTypeErrorResult = constants2;
                                          if (constants2.MEMBER_SAFETY === tmp31) {
                                            let obj15 = callback(guild2[15]);
                                            c5 = 3;
                                            const obj13 = { value: null, done: true };
                                            obj13[0] = obj15.canAccessMemberSafetyPage(callback);
                                            return obj13;
                                          } else {
                                            throwTypeErrorResult = unsafeMutableRoles2;
                                            throwTypeErrorResult = constants2;
                                            if (constants2.GUILD_BOOSTS === tmp31) {
                                              c5 = 3;
                                              return { value: true, done: true };
                                            } else {
                                              throwTypeErrorResult = unsafeMutableRoles2;
                                              throwTypeErrorResult = constants2;
                                              if (constants2.REPORT_TO_MOD === tmp31) {
                                                let tmp78 = null != guild2;
                                                if (tmp78) {
                                                  tmp78 = obj5(guild2[16])(guild2);
                                                }
                                                c5 = 3;
                                                const obj14 = { value: null, done: true };
                                                obj14[0] = tmp78;
                                                return obj14;
                                              } else {
                                                throwTypeErrorResult = unsafeMutableRoles2;
                                                throwTypeErrorResult = constants2;
                                                if (constants2.GAME_SERVERS === tmp31) {
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
                                                } else {
                                                  throwTypeErrorResult = unsafeMutableRoles2;
                                                  throwTypeErrorResult = constants2;
                                                  if (constants2.GUILD_OFFICIAL_MESSAGES === tmp31) {
                                                    obj10 = callback(guild2[18]);
                                                    c5 = 3;
                                                    const obj16 = { value: null, done: true };
                                                    obj16[0] = obj10.isGuildOfficialMessagesEnabled(guild2, "isAccessibleChannelOrThreadPath");
                                                    return obj16;
                                                  } else {
                                                    throwTypeErrorResult = unsafeMutableRoles2;
                                                    throwTypeErrorResult = constants2;
                                                    if (constants2.GUILD_SPACE === tmp31) {
                                                      obj8 = callback(guild2[19]);
                                                      c5 = 3;
                                                      const obj17 = { value: null, done: true };
                                                      obj17[0] = obj8.canUseGuildSpace(guild2, "isAccessibleChannelOrThreadPath");
                                                      return obj17;
                                                    } else {
                                                      throwTypeErrorResult = guild2;
                                                      throwTypeErrorResult = unsafeMutableRoles2;
                                                      throwTypeErrorResult = callback;
                                                      throwTypeErrorResult = guild2;
                                                      throwTypeErrorResult = obj5;
                                                      throwTypeErrorResult = callback(guild2[20]).assertNever(obj5);
                                                      const obj39 = callback(guild2[20]);
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
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
                    throwTypeErrorResult = guild2;
                    throwTypeErrorResult = unsafeMutableRoles2;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = obj5;
                    throwTypeErrorResult = store.getChannel(obj5);
                    channelGatedAndVisible = throwTypeErrorResult;
                    throwTypeErrorResult = null;
                    let tmp11 = null == throwTypeErrorResult;
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
          } catch (throwTypeErrorResult) {
            c5 = throwTypeErrorResult;
            throw throwTypeErrorResult;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _isAccessibleChannelOrThreadPath = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ GuildFeatures: c9, ME: c10 } = ME);
({ isStaticChannelRoute: unpackModuleId, StaticChannelRoute: closure_12 } = set);
const result = set.fileFinishedImporting("modules/links/isAccessibleChannelOrThreadPath.tsx");

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