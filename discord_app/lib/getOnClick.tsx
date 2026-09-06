// === Module 8377: getOnClick ===

// Module 8377 (getOnClick)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import URLUtilsDefault from "URLUtils" /* 1365 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import openURLDefault from "openURL" /* 4249 */;
import CodedLink from "CodedLink" /* 4548 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import QuestContent from "QuestContent" /* 5449 */;
import safeTransitionToDefault from "safeTransitionTo" /* 7244 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8378 */;
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators" /* 10797 */;
import QuestUtils from "QuestUtils" /* 11767 */;
import SuspiciousDownloadModalActionCreatorsDefault from "SuspiciousDownloadModalActionCreators" /* 12946 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7526 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 7228 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import InviteStore from "InviteStore" /* 4544 */;
import MessageStore from "MessageStore" /* 4781 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;

require = fn;
function openInviteModal() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _openInviteModal() {
  c3 = 0;
  c2 = 0;
  return (async (arg0, value, arg2) => {
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
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            let obj1 = DispatcherDefault;
            obj1 = { type: "DISPLAYED_INVITE_SHOW", code, username: "Array", deeplinkAttemptId: "accessible", invite_instance_id };
            c3 = 1;
            c2 = 1;
            const obj2 = { value: obj1.dispatch(obj1), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp9) {
        c2 = tmp;
        throw tmp9;
      }
    }
  })();
};
let closure_19 = async function _handleInviteCodedLink(arg0, arg1) {
  let code = arg0;
  closure_1 = arg1;
  c6 = 0;
  c7 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_5 = tmp2;
            closure_4 = tmp3;
            closure_132_0 = undefined;
            closure_132_1 = undefined;
            let invite2;
            let flattenedGuildIds;
            closure_132_4 = undefined;
            closure_132_5 = undefined;
            closure_132_6 = undefined;
            let id2;
            let member;
            closure_132_9 = undefined;
            code = code.code;
            closure_132_0 = code;
            const inviteInstanceId = require("InviteCodeUtils").getInviteInstanceId(code, closure_1);
            closure_132_1 = inviteInstanceId;
            invite2 = invite.getInvite(code);
            let tmp12 = null != invite2;
            if (tmp12) {
              tmp12 = invite2.state !== constants.ERROR;
            }
            if (tmp12) {
              if (null != invite2) {
                if (invite2.state !== closure_133_13.EXPIRED) {
                  if (invite2.state !== closure_133_13.BANNED) {
                    if (invite2.state !== closure_133_13.ERROR) {
                      flattenedGuildIds = closure_133_11.getFlattenedGuildIds();
                      let id;
                      if (invite2 != null) {
                        const guild = invite2.guild;
                        if (guild != null) {
                          id = guild.id;
                        }
                      }
                      closure_132_4 = id;
                      let hasItem = null != closure_132_4;
                      if (hasItem) {
                        hasItem = flattenedGuildIds.includes(closure_132_4);
                      }
                      closure_132_5 = hasItem;
                      closure_132_6 = false;
                      if (closure_132_5) {
                        if (null != invite2.roles) {
                          if (invite2.roles.length > 0) {
                            id2 = closure_133_6.getId();
                            member = closure_133_7.getMember(closure_132_4, id2);
                            let roles;
                            if (member != null) {
                              roles = member.roles;
                            }
                            closure_3 = roles;
                            if (roles == null) {
                              closure_3 = [];
                            }
                            const set = new Set(closure_3);
                            closure_132_9 = set;
                            roles = invite2.roles;
                            closure_132_6 = roles.some((id) => !set.has(id.id));
                          }
                        }
                      }
                      if (closure_132_5) {
                        if (!closure_132_6) {
                          closure_133_1(closure_133_2[18]).transitionToInvite(invite2, { forceTransition: true });
                          const obj8 = closure_133_1(closure_133_2[18]);
                        }
                      }
                      c6 = 3;
                      c7 = 1;
                      const obj1 = { value: closure_133_17(invite2, closure_132_0, closure_132_1), done: false };
                      return obj1;
                    }
                  }
                }
                c6 = 2;
                c7 = 1;
                const obj2 = { value: closure_133_17(invite2, closure_132_0, closure_132_1), done: false };
                return obj2;
              }
            } else {
              let obj3 = InstantInviteActionCreatorsDefault;
              obj3 = { inviteInstanceId };
              c6 = 1;
              c7 = 1;
              const obj4 = { value: obj3.resolveInvite(code, "Markdown Link", obj3), done: false };
              return obj4;
            }
            const obj12 = require("InviteCodeUtils");
          }
        } else if (1 === tmp6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            invite = value.invite;
            c2 = invite;
            if (invite == null) {
              c2 = undefined;
            }
            invite2 = c2;
          }
        } else if (2 === tmp6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj6 = { value, done: true };
            return obj6;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        }
        c7 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp66) {
        c7 = tmp;
        throw tmp66;
      }
    }
  })();
};
const Constants = fn(1074);
({ AbortCodes, AnalyticEvents: closure_12, AppContext, InviteStates: map1, JoinGuildSources, Routes } = Constants);
const CollectiblesShopConstants = fn(1076);
({ CollectibleShopTab: closure_14, CollectiblesMobileShopScreen: closure_15 } = CollectiblesShopConstants);
const isGameShopPath = fn(7229).isGameShopPath;
let obj = { skipExtensionCheck: "Array", analyticsLocations: [] };
const size = fn(2);
let result = size.fileFinishedImporting("lib/getOnClick.tsx");

export default function getOnClick(url) {
  _require = url;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = obj;
  }
  ({ analyticsLocations: importDefault, messageId: dependencyMap, channelId } = tmp);
  pathname = undefined;
  obj = require("findCodedLinks");
  const findCodedLinkResult = obj.findCodedLink(url);
  c3 = findCodedLinkResult;
  if (null != findCodedLinkResult) {
    return (preventDefault) => {
      if (preventDefault != null) {
        preventDefault.preventDefault();
      }
      (function handleInviteCodedLink() {
        const self = this;
        const apply = closure_1_19.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(c3, paths);
      return true;
    };
  }
  if (null != findCodedLinkResult) {
    return (preventDefault) => {
      if (preventDefault != null) {
        preventDefault.preventDefault();
      }
      const code = _undefined.code;
      if (_undefined.type !== CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE) {
        if (_undefined.type !== tmp3(4548).CodedLinkType.APP_DIRECTORY_STOREFRONT) {
          let result = tmp3(7691).parseStorefrontSkuCodedLink(code);
          if (result == null) {
            result = { applicationId: "hash", skuId: "call" };
          }
          const tmp3Result = tmp3(7691);
        }
        ({ applicationId, skuId } = result);
        const guildId = SelectedGuildStore.getGuildId();
        if (null != applicationId) {
          obj = { application_id: applicationId, device_platform: "mobile_native", guild_id: guildId, channel_id: SelectedChannelStore.getChannelId() };
          AnalyticsUtilsDefault.track(closure_2_12.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, obj);
        }
        openURLDefault(closure_0);
        return true;
      }
      result = { applicationId: code, skuId: "a" };
    };
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4548).CodedLinkType.ACTIVITY_BOOKMARK) {
      return (preventDefault) => {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        const code = _undefined.code;
        url = code;
        const application = obj.getApplication(code);
        const uRL = new URL(_undefined.url);
        let searchParams = uRL.searchParams;
        value = searchParams.get("referrer_id");
        closure_2 = value;
        _undefined = analyticsLocations(paths[29])();
        obj = url(paths[30]);
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
            url = pathname((applicationId) => {
              c3 = 0;
              c4 = 0;
              const iter = (function*(arg0) {
                yield applicationId(paths[32]).runPrimaryAppCommandOrJoinEmbeddedActivity({ channelId, applicationId, isStart: null == closure_1_5, embeddedActivitiesManager, customId, referrerId, analyticsLocations: uRL });
                yield "HermesInternal";
                closure_1 = tmp2;
                customId = applicationId.customId;
                return "PX_16";
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
            obj = { recipientIds: id };
            const tmp5Result = tmp5(tmp6[33]);
            url = pathname((targetApplicationId) => {
              c3 = 0;
              c4 = 0;
              return (function*(arg0, value) {
                if (c4 === 2) {
                  c4 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp4 === 3) {
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
                    c4 = 2;
                    if (0 === c3) {
                      if (arg0 === 1) {
                        c4 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c4 = 3;
                        obj = { value, done: true };
                        return obj;
                      } else {
                        referrerId = tmp5;
                        closure_129_0 = targetApplicationId;
                        let customId;
                        const searchParams = tmp2.searchParams;
                        const searchParams2 = tmp2.searchParams;
                        value = searchParams.get("link_id");
                        c3 = 1;
                        c4 = 1;
                        const obj1 = { value: targetApplicationId(paths[31]).getCustomActivityLinkParams(targetApplicationId, value, searchParams2.get("custom_id")), done: false };
                        return obj1;
                      }
                    } else if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      customId = value.customId;
                      const obj2 = { targetApplicationId, channelId: closure_129_0, analyticsLocations: uRL, customId, referrerId };
                      analyticsLocations(paths[34])(obj2);
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
        tmp5 = analyticsLocations;
        tmp7 = url;
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4548).CodedLinkType.GUILD_PRODUCT) {
      return (preventDefault) => {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        [closure_0, closure_1] = _slicedToArray(_undefined.code.split("-"), 2);
        const tmp2 = _slicedToArray(_undefined.code.split("-"), 2);
        asyncRequireImpl(12944, dependencyMap.paths).then((openGuildProductLink) => {
          openGuildProductLink.openGuildProductLink(url, analyticsLocations);
        });
        return true;
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4548).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
      return (preventDefault) => {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        const tmp2 = _slicedToArray(_undefined.code.split("-"), 2);
        const result = SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductDetailsModal({ skuId: _slicedToArray(_undefined.code.split("-"), 2)[0], analyticsLocations });
        return true;
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4548).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
      return (preventDefault) => {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        const tmp2 = _slicedToArray(_undefined.code.split("-"), 2);
        const result = SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductDetailsModal({ skuId: _slicedToArray(_undefined.code.split("-"), 2)[0], analyticsLocations });
        return true;
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4548).CodedLinkType.QUESTS_EMBED) {
      let tmp2Result = tmp2(11484);
      if (tmp2Result.getIsEligibleForQuests()) {
        return (preventDefault) => {
          if (preventDefault != null) {
            preventDefault.preventDefault();
          }
          obj = URLUtilsDefault;
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
            uRLSearchParams.get("sort");
            value = uRLSearchParams.get("filter");
            tmp4 = value;
            tmp5 = value;
          }
          obj = { scrollToQuestId: _undefined.code, sort: null, filter: null, fromContent: null };
          if (tmp5 == null) {
            tmp5 = null;
          }
          obj.sort = tmp5;
          if (tmp4 == null) {
            tmp4 = null;
          }
          obj.filter = tmp4;
          obj.fromContent = QuestContent.QuestContent.QUEST_SHARE_LINK;
          QuestUtils.openQuestHome(obj);
          return true;
        };
      }
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4548).CodedLinkType.COLLECTIBLES_SHOP) {
      return (preventDefault) => {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        const enabled = url(paths[41]).isVirtualCurrencyEnabled().enabled;
        obj = url(paths[41]);
        url(paths[20])(paths[42], paths.paths).then((openCollectiblesShopMobile) => {
          const tmp3 = _slicedToArray(code.code.split("-"), 2)[1];
          if (enabled) {
            if (tmp2 === constants.ORBS) {
              let ORBS = constants2.ORBS;
            }
            obj = { analyticsSource: analyticsLocations[analyticsLocations.length - 1], analyticsLocations, screen: ORBS, initialProductSkuId: null };
            let tmp9;
            if (tmp4) {
              tmp9 = tmp3;
            }
            obj.initialProductSkuId = tmp9;
            const result = openCollectiblesShopMobile.openCollectiblesShopMobile(obj);
          }
          ORBS = tmp4 ? tmp6.SHOP_ALL : tmp6.FEATURED_PAGE;
        });
        return true;
      };
    }
  }
  let toURLSafeResult = URLUtilsDefault.toURLSafe(url);
  if (toURLSafeResult == null) {
    toURLSafeResult = {};
  }
  ({ host, hostname, pathname } = toURLSafeResult);
  ({ search, hash } = toURLSafeResult);
  let tmp5Result = tmp5(1365);
  let tmp6 = hostname;
  if (hostname == null) {
    tmp6 = null;
  }
  let isDiscordHostnameResult = tmp5Result.isDiscordHostname(tmp6);
  if (!isDiscordHostnameResult) {
    tmp5Result = tmp5(1365);
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
          const result = url(paths[36]).openSocialLayerStorefrontUnsupportedOnMobileAlert();
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
          safeTransitionToDefault(pathname, obj);
          return true;
        };
      }
      tmp5Result1 = tmp5(1365);
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4548).CodedLinkType.APP_OAUTH2_LINK) {
      let fn = (preventDefault) => {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        obj = { application_id: _undefined.code };
        obj.trackWithMetadata(closure_2_12.APP_OAUTH2_LINK_EMBED_URL_CLICKED, obj);
        openURLDefault(closure_0);
        return true;
      };
    }
    return fn;
  }
  tmp2Result = tmp2(4714);
  let result = tmp2Result.tryParseEventDetailsPath(pathname);
  if (!tmp.skipExtensionCheck) {
    if (null != tmp2Result1.isSuspiciousDownload(url)) {
      fn = (preventDefault) => {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        SuspiciousDownloadModalActionCreatorsDefault.show(closure_0);
        return true;
      };
    }
    tmp2Result1 = tmp2(8127);
  }
};