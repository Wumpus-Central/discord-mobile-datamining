import _runPrimaryAppCommandOrJoinEmbeddedActivity from "_runPrimaryAppCommandOrJoinEmbeddedActivity";
import fetchFingerprint from "fetchFingerprint";
import addApplication from "addApplication";
import "scheduledEventSort";
import "handleUserSettingsStoreUpdate";
import closure_6 from "fetchFingerprint";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import "createGuildRecordFromRust";
import updateInvite from "updateInvite";
import "reinjectEphemerals";
import handleConnectionOpen from "handleConnectionOpen";
import closure_10 from "handleConnectionOpen";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import ME from "ME";
import items from "items";
import { isGameShopPath } from "STOREFRONT_MARKETING_GUILD_ID";

let AbortCodes;
let AppContext;
let JoinGuildSources;
let Routes;
let closure_12;
let closure_14;
let closure_15;
let map1;
const require = arg1;
function openInviteModal() {
  const self = this;
  const apply = _openInviteModal.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _openInviteModal() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg1;
    let closure_1 = arg2;
    let c3 = 0;
    let c2 = 0;
    return (function*(arg0, arg1, arg2) {
      if (table === 2) {
        table = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          table = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              table = 3;
              throw arg1;
            } else if (arg0 === 2) {
              table = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let obj1 = callback(table[16]);
              obj1 = { type: "DISPLAYED_INVITE_SHOW", code: null, username: "Array", deeplinkAttemptId: "accessibilityRole", invite_instance_id: "iconsContainer" };
              obj1[1] = closure_0;
              obj1[4] = callback;
              c3 = 1;
              table = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj1.dispatch(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            table = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          table = tmp;
          throw tmp9;
        }
      }
    })();
  });
  const _openInviteModal = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleInviteCodedLink() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    return (function*(arg0, invite) {
      if (member === 2) {
        member = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw invite;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = invite;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          member = 2;
          if (0 === id) {
            if (arg0 === 1) {
              member = 3;
              throw invite;
            } else if (arg0 === 2) {
              member = 3;
              obj = { value: null, done: true };
              obj[0] = invite;
              return obj;
            } else {
              let hasItem = tmp2;
              id = tmp3;
              let code;
              let inviteInstanceId;
              let invite2;
              let flattenedGuildIds;
              id = undefined;
              hasItem = undefined;
              id = undefined;
              member = undefined;
              let roles;
              let set;
              code = code.code;
              inviteInstanceId = callback(outer1_2[17]).getInviteInstanceId(code, inviteInstanceId);
              invite2 = outer1_8.getInvite(code);
              let tmp12 = null != invite2;
              if (tmp12) {
                tmp12 = invite2.state !== outer1_13.ERROR;
              }
              if (tmp12) {
                if (null != invite2) {
                  if (outer1_2.state !== constants.EXPIRED) {
                    if (outer1_2.state !== constants.BANNED) {
                      if (outer1_2.state !== constants.ERROR) {
                        flattenedGuildIds = outer1_11.getFlattenedGuildIds();
                        id = undefined;
                        if (invite2 != null) {
                          const guild = invite2.guild;
                          if (guild != null) {
                            id = guild.id;
                          }
                        }
                        hasItem = null != id;
                        if (hasItem) {
                          hasItem = flattenedGuildIds.includes(id);
                        }
                        id = false;
                        if (hasItem) {
                          if (null != invite2.roles) {
                            if (invite2.roles.length > 0) {
                              member = id.getId();
                              roles = member.getMember(id, member);
                              roles = undefined;
                              if (roles != null) {
                                roles = roles.roles;
                              }
                              flattenedGuildIds = roles;
                              if (roles == null) {
                                flattenedGuildIds = [];
                              }
                              set = new Set(flattenedGuildIds);
                              roles = invite2.roles;
                              id = roles.some((id) => !set.has(id.id));
                            }
                          }
                        }
                        if (hasItem) {
                          if (!id) {
                            inviteInstanceId(invite2[18]).transitionToInvite(invite2, { forceTransition: true });
                            const obj8 = inviteInstanceId(invite2[18]);
                          }
                        }
                        id = 3;
                        member = 1;
                        const obj1 = { value: null, done: false };
                        obj1[0] = callback3(invite2, code, inviteInstanceId);
                        return obj1;
                      }
                    }
                  }
                  id = 2;
                  member = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = outer1_17(invite2, code, inviteInstanceId);
                  return obj2;
                }
              } else {
                let obj3 = callback2(outer1_2[18]);
                obj3 = { inviteInstanceId: null };
                obj3[0] = inviteInstanceId;
                id = 1;
                member = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = obj3.resolveInvite(code, "Markdown Link", obj3);
                return obj4;
              }
              const obj12 = callback(outer1_2[17]);
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              member = 3;
              throw invite;
            } else if (arg0 === 2) {
              member = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = invite;
              return obj5;
            } else {
              invite = invite.invite;
              invite2 = invite;
              if (invite == null) {
                invite2 = undefined;
              }
            }
          } else if (2 === tmp6) {
            if (arg0 === 1) {
              member = 3;
              throw invite;
            } else if (arg0 === 2) {
              member = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = invite;
              return obj6;
            }
          } else if (arg0 === 1) {
            member = 3;
            throw invite;
          } else if (arg0 === 2) {
            member = 3;
            obj = { value: null, done: true };
            obj[0] = invite;
            return obj;
          }
          member = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp66) {
          member = tmp;
          throw tmp66;
        }
      }
    })();
  });
  const _handleInviteCodedLink = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AbortCodes, AnalyticEvents: closure_12, AppContext, InviteStates: map1, JoinGuildSources, Routes } = ME);
({ CollectibleShopTab: closure_14, CollectiblesMobileShopScreen: closure_15 } = items);
let obj = { skipExtensionCheck: "Array", analyticsLocations: 0 };
obj[1] = [];
let result = require("addApplication").fileFinishedImporting("lib/getOnClick.tsx");

export default function getOnClick(url) {
  let channelId;
  let dependencyMap;
  let hash;
  let host;
  let hostname;
  let importDefault;
  let pathname;
  let search;
  const _require = url;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = obj;
  }
  ({ analyticsLocations: importDefault, messageId: dependencyMap, channelId } = tmp);
  let c3;
  pathname = undefined;
  obj = undefined;
  obj = _require(4269);
  const findCodedLinkResult = obj.findCodedLink(url);
  c3 = findCodedLinkResult;
  if (null != findCodedLinkResult) {
    return (preventDefault) => {
      if (preventDefault != null) {
        preventDefault.preventDefault();
      }
      (function handleInviteCodedLink(c3, closure_2) {
        const self = this;
        const apply = closure_19.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(c3, closure_2);
      return true;
    };
  }
  if (null != findCodedLinkResult) {
    return (preventDefault) => {
      let applicationId;
      let skuId;
      if (preventDefault != null) {
        preventDefault.preventDefault();
      }
      const code = _undefined.code;
      if (_undefined.type !== url(outer1_2[25]).CodedLinkType.APP_DIRECTORY_PROFILE) {
        if (_undefined.type !== tmp3(tmp4[25]).CodedLinkType.APP_DIRECTORY_STOREFRONT) {
          let result = tmp3(tmp4[26]).parseStorefrontSkuCodedLink(code);
          if (result == null) {
            result = { applicationId: "body", skuId: "useStateFromStores" };
          }
          const tmp3Result = tmp3(tmp4[26]);
        }
        ({ applicationId, skuId } = result);
        const guildId = outer1_10.getGuildId();
        if (null != applicationId) {
          const obj = { application_id: null, device_platform: "mobile_native", guild_id: null, channel_id: null };
          obj[0] = applicationId;
          obj[2] = guildId;
          obj[3] = outer1_9.getChannelId();
          outer1_1(tmp4[28]).track(outer1_12.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, obj);
          const obj3 = outer1_1(tmp4[28]);
        }
        outer1_1(tmp4[27])(url);
        return true;
      }
      result = { applicationId: code, skuId: "a" };
    };
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4274).CodedLinkType.ACTIVITY_BOOKMARK) {
      return (preventDefault) => {
        let isCurrentlyInInstance;
        let obj;
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        const code = _undefined.code;
        let url = code;
        const application = obj.getApplication(code);
        const uRL = new URL(_undefined.url);
        let searchParams = uRL.searchParams;
        let value = searchParams.get("referrer_id");
        let closure_2 = value;
        _undefined = outer1_1(outer1_2[29])();
        obj = url(outer1_2[30]);
        const playInContext = obj.getPlayInContext(code);
        const currentChannelId = playInContext.currentChannelId;
        ({ instanceId: obj, isCurrentlyInInstance } = playInContext);
        if (playInContext.canLaunchInChannel) {
          let flag2 = !isCurrentlyInInstance;
          if (!isCurrentlyInInstance) {
            flag2 = null != currentChannelId;
          }
          if (flag2) {
            let searchParams2 = uRL.searchParams;
            const searchParams3 = uRL.searchParams;
            value = searchParams2.get("link_id");
            const customActivityLinkParams = tmp7(tmp6[31]).getCustomActivityLinkParams(code, value, searchParams3.get("custom_id"));
            url = undefined;
            url = pathname((arg0) => {
              let closure_0 = arg0;
              let c3 = 0;
              let c4 = 0;
              const iter = (function*(arg0) {
                if (c4 === 2) {
                  c4 = 3;
                  HermesBuiltin.throwTypeError();
                } else if (tmp4 === 3) {
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
                    c4 = 2;
                    if (0 === c3) {
                      if (arg0 === 1) {
                        c4 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c4 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        let closure_2 = tmp5;
                        let closure_1 = tmp2;
                        let customId;
                        customId = customId.customId;
                        c3 = 1;
                        c4 = 1;
                        return { value: "ct", done: "Array" };
                      }
                    } else if (1 === tmp5) {
                      if (arg0 === 1) {
                        c4 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c4 = 3;
                        const obj1 = { value: null, done: true };
                        obj1[0] = arg1;
                        return obj1;
                      } else {
                        const obj2 = { channelId: null, applicationId: null, isStart: null, embeddedActivitiesManager: null, customId: null, referrerId: null, analyticsLocations: null };
                        obj2[0] = c4;
                        obj2[1] = callback;
                        obj2[2] = null == outer1_5;
                        obj2[3] = c3;
                        obj2[4] = customId;
                        obj2[5] = outer1_2;
                        obj2[6] = uRL;
                        c3 = 2;
                        c4 = 1;
                        const obj3 = { value: null, done: false };
                        obj3[0] = callback(outer3_2[32]).runPrimaryAppCommandOrJoinEmbeddedActivity(obj2);
                        return obj3;
                      }
                    } else if (arg0 === 1) {
                      c4 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      c4 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  } catch (tmp7) {
                    c4 = tmp;
                    throw tmp7;
                  }
                }
              })();
              iter.next();
              return iter;
            });
            const tmp7Result = tmp7(tmp6[31]);
            customActivityLinkParams.then(function() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }).catch(() => {

            });
            flag2 = true;
            const nextPromise = customActivityLinkParams.then(function() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            });
          }
          return flag2;
        } else {
          let id;
          if (application != null) {
            const bot = application.bot;
            if (bot != null) {
              id = bot.id;
            }
          }
          let flag = null != id;
          if (flag) {
            obj = { recipientIds: null };
            obj[0] = id;
            const tmp5Result = tmp5(tmp6[33]);
            url = undefined;
            url = pathname((arg0) => {
              let closure_0 = arg0;
              let c3 = 0;
              let c4 = 0;
              return (function*(arg0, customId) {
                if (c4 === 2) {
                  c4 = 3;
                  HermesBuiltin.throwTypeError();
                } else if (tmp4 === 3) {
                  if (arg0 === 1) {
                    throw customId;
                  } else if (arg0 === 2) {
                    let obj = { value: null, done: true };
                    obj[0] = customId;
                    return obj;
                  } else {
                    return { value: "HermesInternal", done: null };
                  }
                } else {
                  try {
                    c4 = 2;
                    if (0 === c3) {
                      if (arg0 === 1) {
                        c4 = 3;
                        throw customId;
                      } else if (arg0 === 2) {
                        c4 = 3;
                        obj = { value: null, done: true };
                        obj[0] = customId;
                        return obj;
                      } else {
                        let closure_2 = tmp5;
                        customId = tmp2;
                        customId = undefined;
                        const searchParams = outer1_1.searchParams;
                        const searchParams2 = outer1_1.searchParams;
                        const value = searchParams.get("link_id");
                        c3 = 1;
                        c4 = 1;
                        const obj1 = { value: null, done: false };
                        obj1[0] = callback(outer3_2[31]).getCustomActivityLinkParams(callback, value, searchParams2.get("custom_id"));
                        return obj1;
                      }
                    } else if (arg0 === 1) {
                      c4 = 3;
                      throw customId;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      obj = { value: null, done: true };
                      obj[0] = customId;
                      return obj;
                    } else {
                      customId = customId.customId;
                      const obj2 = { targetApplicationId: null, channelId: null, analyticsLocations: null, customId: null, referrerId: null };
                      obj2[0] = callback;
                      obj2[1] = callback;
                      obj2[2] = uRL;
                      obj2[3] = customId;
                      obj2[4] = outer1_2;
                      outer3_1(outer3_2[34])(obj2);
                      c4 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  } catch (tmp6) {
                    c4 = tmp;
                    throw tmp6;
                  }
                }
              })();
            });
            const openPrivateChannelResult = tmp5(tmp6[33]).openPrivateChannel(obj);
            tmp5(tmp6[33]).openPrivateChannel(obj).then(function() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }).catch(() => {

            });
            flag = true;
            const nextPromise1 = tmp5(tmp6[33]).openPrivateChannel(obj).then(function() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            });
          }
          return flag;
        }
        tmp5 = outer1_1;
        tmp7 = url;
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4274).CodedLinkType.GUILD_PRODUCT) {
      return (preventDefault) => {
        let closure_0;
        let closure_1;
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        [closure_0, closure_1] = _undefined(_undefined.code.split("-"), 2);
        const str = _undefined.code;
        const tmp2 = _undefined(_undefined.code.split("-"), 2);
        url(outer1_2[20])(outer1_2[35], outer1_2.paths).then((openGuildProductLink) => {
          openGuildProductLink.openGuildProductLink(closure_0, closure_1);
        });
        return true;
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4274).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
      return (preventDefault) => {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        const str = _undefined.code;
        const tmp2 = _undefined(_undefined.code.split("-"), 2);
        const result = url(outer1_2[36]).openSocialLayerStorefrontProductDetailsModal({ skuId: _undefined(_undefined.code.split("-"), 2)[0], analyticsLocations: closure_1 });
        return true;
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4274).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
      return (preventDefault) => {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        const str = _undefined.code;
        const tmp2 = _undefined(_undefined.code.split("-"), 2);
        const result = url(outer1_2[36]).openSocialLayerStorefrontProductDetailsModal({ skuId: _undefined(_undefined.code.split("-"), 2)[0], analyticsLocations: closure_1 });
        return true;
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4274).CodedLinkType.QUESTS_EMBED) {
      let tmp2Result = tmp2(10375);
      if (tmp2Result.getIsEligibleForQuests()) {
        return (preventDefault) => {
          if (preventDefault != null) {
            preventDefault.preventDefault();
          }
          let obj = outer1_1(outer1_2[38]);
          let toURLSafeResult = obj.toURLSafe(_undefined.url);
          if (toURLSafeResult == null) {
            toURLSafeResult = {};
          }
          const search = toURLSafeResult.search;
          let tmp4;
          let tmp5;
          if (null != search) {
            const _URLSearchParams = URLSearchParams;
            const uRLSearchParams = new URLSearchParams(search);
            let value = uRLSearchParams.get("sort");
            value = uRLSearchParams.get("filter");
            tmp4 = value;
            tmp5 = value;
          }
          obj = { scrollToQuestId: _undefined.code, sort: null, filter: null, fromContent: null };
          if (tmp5 == null) {
            tmp5 = null;
          }
          obj[1] = tmp5;
          if (tmp4 == null) {
            tmp4 = null;
          }
          obj[2] = tmp4;
          obj[3] = url(outer1_2[40]).QuestContent.QUEST_SHARE_LINK;
          url(outer1_2[39]).openQuestHome(obj);
          return true;
        };
      }
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4274).CodedLinkType.COLLECTIBLES_SHOP) {
      return (preventDefault) => {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        const enabled = url(outer1_2[41]).isVirtualCurrencyEnabled().enabled;
        let obj = url(outer1_2[41]);
        url(outer1_2[20])(outer1_2[42], outer1_2.paths).then((openCollectiblesShopMobile) => {
          const tmp3 = callback(outer1_3.code.split("-"), 2)[1];
          if (enabled) {
            if (tmp2 === outer2_14.ORBS) {
              let ORBS = outer2_15.ORBS;
            }
            const obj = { analyticsSource: null, analyticsLocations: null, screen: null, initialProductSkuId: null };
            obj[0] = outer1_1[outer1_1.length - 1];
            obj[1] = outer1_1;
            obj[2] = ORBS;
            let tmp9;
            if (tmp4) {
              tmp9 = tmp3;
            }
            obj[3] = tmp9;
            const result = openCollectiblesShopMobile.openCollectiblesShopMobile(obj);
          }
          ORBS = tmp4 ? tmp6.SHOP_ALL : tmp6.FEATURED_PAGE;
        });
        return true;
      };
    }
  }
  let toURLSafeResult = importDefault(1467).toURLSafe(url);
  if (toURLSafeResult == null) {
    toURLSafeResult = {};
  }
  ({ host, hostname, pathname } = toURLSafeResult);
  ({ search, hash } = toURLSafeResult);
  let tmp5Result = tmp5(1467);
  let tmp6 = hostname;
  if (hostname == null) {
    tmp6 = null;
  }
  let isDiscordHostnameResult = tmp5Result.isDiscordHostname(tmp6);
  if (!isDiscordHostnameResult) {
    tmp5Result = tmp5(1467);
    if (host == null) {
      host = null;
    }
    if (hostname == null) {
      hostname = null;
    }
    isDiscordHostnameResult = tmp5Result.isDiscordLocalhost(host, hostname);
  }
  if (isDiscordHostnameResult) {
    if (null != pathname) {
      if (isGameShopPath(pathname)) {
        return (preventDefault) => {
          if (preventDefault != null) {
            preventDefault.preventDefault();
          }
          const result = url(table[36]).openSocialLayerStorefrontUnsupportedOnMobileAlert();
          return true;
        };
      }
    }
  }
  if (null != pathname) {
    if (isDiscordHostnameResult) {
      if (tmp5Result1.isAppRoute(pathname)) {
        obj = { navigationReplace: false, openChannel: true };
        if (null != search) {
          obj.search = search;
        }
        if (null != hash) {
          obj.hash = hash;
        }
        return (preventDefault) => {
          if (preventDefault != null) {
            preventDefault.preventDefault();
          }
          outer1_1(outer1_2[22])(pathname, obj);
          return true;
        };
      }
      tmp5Result1 = tmp5(1467);
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4274).CodedLinkType.APP_OAUTH2_LINK) {
      let fn = (preventDefault) => {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        let obj = outer1_1(outer1_2[43]);
        obj = { application_id: _undefined.code };
        obj.trackWithMetadata(outer1_12.APP_OAUTH2_LINK_EMBED_URL_CLICKED, obj);
        outer1_1(outer1_2[27])(closure_0);
        return true;
      };
    }
    return fn;
  }
  tmp2Result = tmp2(4476);
  let result = tmp2Result.tryParseEventDetailsPath(pathname);
  if (!tmp.skipExtensionCheck) {
    if (null != tmp2Result1.isSuspiciousDownload(url)) {
      fn = (preventDefault) => {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        outer1_1(outer1_2[46]).show(closure_0);
        return true;
      };
    }
    tmp2Result1 = tmp2(8041);
  }
};