// discord_app/lib/getOnClick.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import URLUtilsDefault from "../utils/URLUtils.tsx";
import asyncRequire from "../../_runtime/01987_asyncRequire.js";
import openURLDefault from "openURL.tsx";
import CodedLink from "../modules/coded_links/CodedLink.tsx";
import ChannelActionCreatorsDefault from "../actions/ChannelActionCreators.tsx";
import AppAnalyticsUtilsDefault from "../modules/app_analytics/AppAnalyticsUtils.tsx";
import QuestContent from "../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import SocialLayerStorefrontConstants from "../modules/slayer_storefront/SocialLayerStorefrontConstants.tsx";
import safeTransitionToDefault from "../modules/links/safeTransitionTo.native.tsx";
import _slicedToArray2 from "../modules/application_storefront/storefrontMessageEmbedCodedLink.tsx";
import InstantInviteActionCreatorsDefault from "../actions/InstantInviteActionCreators.tsx";
import getEmbeddedActivitiesManagerDefault from "../modules/activities/utils/getEmbeddedActivitiesManager.native.tsx";
import SocialLayerStorefrontNativeActionCreators from "../modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx";
import QuestUtils from "../modules/quests/native/QuestUtils.native.tsx";
import storefrontCodedLink from "../modules/slayer_storefront/storefrontCodedLink.tsx";
import SuspiciousDownloadModalActionCreatorsDefault from "../modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import ApplicationStore from "../modules/applications/ApplicationStore.tsx";
import GuildScheduledEventStore from "../modules/guild_scheduled_events/GuildScheduledEventStore.tsx";
import SocialLayerStorefrontStore from "../modules/slayer_storefront/SocialLayerStorefrontStore.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../stores/GuildMemberStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import InviteStore from "../stores/InviteStore.tsx";
import MessageStore from "../stores/MessageStore.tsx";
import SelectedChannelStore from "../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../stores/SelectedGuildStore.tsx";
import SortedGuildStore from "../stores/SortedGuildStore.tsx";
import Constants from "../Constants.tsx";
import CollectiblesShopConstants from "../modules/collectibles/CollectiblesShopConstants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, _undefined, c4, closure_4, closure_5, invite, openCollectiblesShopMobile, roles;

let AbortCodes;
let AppContext;
let JoinGuildSources;
let Routes;
let closure_12;
let closure_14;
let closure_15;
let map1;
function openInviteModal() {
  return obj(...arguments);
}
let obj = function _openInviteModal() {
  obj = _asyncToGenerator(async (arg0, code, invite_instance_id) => {
    let c3 = 0;
    let c2 = 0;
    return (async (arg0, value, arg2) => {
      let obj2;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              c3 = 1;
              c2 = 1;
              const obj5 = {
                type: "DISPLAYED_INVITE_SHOW",
                code,
                username: "Array",
                deeplinkAttemptId: "applicationId",
                invite_instance_id,
              };
              const obj6 = { value: obj2.dispatch(obj5), done: false };
              obj2 = DispatcherDefault;
              return obj6;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            return { value, done: true };
          } else {
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          c2 = 3;
          throw tmp8;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _handleInviteCodedLink() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_3;
    let code = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    return (async function (arg0, value) {
      let obj4;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_4 = tmp2;
              code = undefined;
              let flattenedGuildIds;
              let id;
              let hasItem;
              let closure_6;
              let id2;
              roles = undefined;
              let _Set1;
              code = code.code;
              const obj12 = require("InviteCodeUtils");
              const inviteInstanceId = obj12.getInviteInstanceId(code, closure_1);
              _undefined = invite.getInvite(code);
              const tmp11 = null != _undefined && _undefined.state !== constants.ERROR;
              if (tmp11) {
                if (null != _undefined) {
                  if (_undefined.state !== closure_133_13.EXPIRED) {
                    if (_undefined.state !== closure_133_13.BANNED) {
                      if (_undefined.state !== closure_133_13.ERROR) {
                        flattenedGuildIds = closure_133_11.getFlattenedGuildIds();
                        id = undefined;
                        if (_undefined != null) {
                          const guild = _undefined.guild;
                          if (guild != null) {
                            id = guild.id;
                          }
                        }
                        hasItem = null != id && flattenedGuildIds.includes(id);
                        closure_6 = false;
                        const tmp42 = hasItem;
                        if (tmp42) {
                          if (null != _undefined.roles) {
                            if (_undefined.roles.length > 0) {
                              id2 = closure_133_6.getId();
                              roles = closure_133_7.getMember(id, id2);
                              let roles1;
                              const _Set = Set;
                              if (roles != null) {
                                roles1 = roles.roles;
                              }
                              flattenedGuildIds = roles1;
                              if (roles1 == null) {
                                flattenedGuildIds = [];
                              }
                              const self = this;
                              const self2 = this;
                              _Set1 = new _Set(flattenedGuildIds);
                              roles = _undefined.roles;
                              closure_6 = roles.some((id) => !set.has(id.id));
                            }
                          }
                        }
                        const tmp51 = hasItem;
                        if (tmp51) {
                          const tmp52 = closure_6;
                          if (!tmp52) {
                            const obj8 = closure_133_1(closure_133_2[18]);
                            obj8.transitionToInvite(_undefined, { forceTransition: true });
                          }
                        }
                        c6 = 3;
                        c7 = 1;
                        const obj5 = { value: closure_133_17(_undefined, code, inviteInstanceId), done: false };
                        return obj5;
                      }
                    }
                  }
                  c6 = 2;
                  c7 = 1;
                  const obj6 = { value: closure_133_17(_undefined, code, inviteInstanceId), done: false };
                  return obj6;
                }
              } else {
                c6 = 1;
                c7 = 1;
                const obj7 = { inviteInstanceId };
                const obj9 = { value: obj4.resolveInvite(code, "Markdown Link", obj7), done: false };
                obj4 = InstantInviteActionCreatorsDefault;
                return obj9;
              }
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              invite = value.invite;
              let c2 = invite;
              if (invite == null) {
                c2 = undefined;
              }
              _undefined = c2;
            }
          } else if (2 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp63) {
          c7 = 3;
          throw tmp63;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ AbortCodes, AnalyticEvents: closure_12, AppContext, InviteStates: map1, JoinGuildSources, Routes } = Constants);
({ CollectibleShopTab: closure_14, CollectiblesMobileShopScreen: closure_15 } = CollectiblesShopConstants);
const isGameShopPath = SocialLayerStorefrontConstants.isGameShopPath;
obj = { skipExtensionCheck: "Array", analyticsLocations: [] };
let result = size.fileFinishedImporting("lib/getOnClick.tsx");

export default function getOnClick(url) {
  let analyticsLocations;
  let channelId;
  let fn;
  let hash;
  let host;
  let hostname;
  let pathname;
  let paths;
  let search;
  _require = url;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = obj;
  }
  ({ analyticsLocations: importDefault, messageId: dependencyMap, channelId } = tmp);
  pathname = undefined;
  let obj2;
  const tmp2 = _require;
  const skipExtensionCheck = tmp.skipExtensionCheck;
  obj = require("findCodedLinks");
  const findCodedLinkResult = obj.findCodedLink(url);
  let c3 = findCodedLinkResult;
  if (null != findCodedLinkResult) {
    return (preventDefault) => {
      function handleInviteCodedLink() {
        return closure_1_19(...arguments);
      }
      if (preventDefault != null) {
        preventDefault.preventDefault();
      }
      handleInviteCodedLink(c3, dependencyMap);
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
      if (_undefined.type !== CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE) {
        let result;
        if (_undefined.type !== CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT) {
          const tmp3Result = _slicedToArray2;
          result = tmp3Result.parseStorefrontSkuCodedLink(code);
          if (result == null) {
            result = { applicationId: "start", skuId: "unicodeVersion" };
          }
        }
        ({ applicationId, skuId } = result);
        const guildId = SelectedGuildStore.getGuildId();
        if (null != applicationId) {
          obj = {
            application_id: applicationId,
            device_platform: "mobile_native",
            guild_id: guildId,
            channel_id: SelectedChannelStore.getChannelId(),
          };
          const track = AnalyticsUtilsDefault.track;
          const APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED = closure_12.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED;
          AnalyticsUtilsDefault;
          track(APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, obj);
        }
        openURLDefault(url);
        return true;
      }
      result = { applicationId: code, skuId: "Array" };
    };
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4881).CodedLinkType.ACTIVITY_BOOKMARK) {
      return (preventDefault) => {
        let closure_3;
        let isCurrentlyInInstance;
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        const code = _undefined.code;
        url = _undefined.url;
        const application = obj2.getApplication(code);
        const uRL = new URL(url);
        let searchParams = uRL.searchParams;
        const value = searchParams.get("referrer_id");
        let closure_2 = value;
        _undefined = getEmbeddedActivitiesManagerDefault();
        obj = url(dependencyMap[30]);
        const playInContext = obj.getPlayInContext(code);
        const currentChannelId = playInContext.currentChannelId;
        ({ instanceId: obj2, isCurrentlyInInstance } = playInContext);
        if (playInContext.canLaunchInChannel) {
          let flag2 = !isCurrentlyInInstance && null != currentChannelId;
          if (flag2) {
            let searchParams2 = uRL.searchParams;
            let getCustomActivityLinkParams = tmp7(dependencyMap[31]).getCustomActivityLinkParams;
            const searchParams3 = uRL.searchParams;
            url(dependencyMap[31]);
            const value2 = searchParams2.get("link_id");
            const customActivityLinkParams = getCustomActivityLinkParams(code, value2, searchParams3.get("custom_id"));
            const then2 = customActivityLinkParams.then;
            url = pathname(function* (applicationId) {
              let channelId;
              let embeddedActivitiesManager;
              let obj6;
              if (channelId === 2) {
                channelId = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (applicationId === 1) {
                  throw value;
                } else if (applicationId === 2) {
                  obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  let referrerId;
                  let customId;
                  channelId = 2;
                  if (0 === embeddedActivitiesManager) {
                    if (applicationId === 1) {
                      channelId = 3;
                      throw value;
                    } else if (applicationId === 2) {
                      channelId = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      referrerId = tmp4;
                      let closure_1 = tmp;
                      customId = applicationId.customId;
                      embeddedActivitiesManager = 1;
                      channelId = 1;
                      return { value: "Reflect", done: true };
                    }
                  } else if (1 === embeddedActivitiesManager) {
                    if (applicationId === 1) {
                      channelId = 3;
                      throw value;
                    } else if (applicationId === 2) {
                      channelId = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      const obj5 = {
                        channelId,
                        applicationId,
                        isStart: null == closure_1_5,
                        embeddedActivitiesManager,
                        customId,
                        referrerId,
                        analyticsLocations,
                      };
                      embeddedActivitiesManager = 2;
                      channelId = 1;
                      const obj7 = { value: obj6.runPrimaryAppCommandOrJoinEmbeddedActivity(obj5), done: false };
                      obj6 = code(referrerId[32]);
                      return obj7;
                    }
                  } else if (applicationId === 1) {
                    channelId = 3;
                    throw value;
                  } else if (applicationId === 2) {
                    channelId = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    channelId = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp6) {
                  channelId = 3;
                  throw tmp6;
                }
              }
            });
            const then2Result = then2(function () {
              return closure_0(...arguments);
            });
            then2Result.catch(() => {});
            flag2 = true;
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
            obj2 = { recipientIds: id };
            const tmp5Result = ChannelActionCreatorsDefault;
            const then = tmp5Result.openPrivateChannel(obj2).then;
            tmp5Result.openPrivateChannel(obj2);
            url = pathname(function* (arg0) {
              let closure_1;
              if (c4 === 2) {
                c4 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  let referrerId;
                  let customId;
                  c4 = 2;
                  if (0 === c3) {
                    if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      referrerId = tmp4;
                      customId = undefined;
                      const searchParams = tmp.searchParams;
                      const getCustomActivityLinkParams = code(referrerId[31]).getCustomActivityLinkParams;
                      const searchParams2 = tmp.searchParams;
                      const tmp22 = code(referrerId[31]);
                      referrerId = searchParams.get("link_id");
                      c3 = 1;
                      c4 = 1;
                      const obj4 = {
                        value: getCustomActivityLinkParams(channelId, referrerId, searchParams2.get("custom_id")),
                        done: false,
                      };
                      return obj4;
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
                    const obj5 = {
                      targetApplicationId: channelId,
                      channelId,
                      analyticsLocations,
                      customId,
                      referrerId,
                    };
                    uRL(referrerId[34])(obj5);
                    c4 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp5) {
                  c4 = 3;
                  throw tmp5;
                }
              }
            });
            const nextPromise = then(function () {
              return closure_0(...arguments);
            });
            nextPromise.catch(() => {});
            flag = true;
          }
          return flag;
        }
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4881).CodedLinkType.GUILD_PRODUCT) {
      return (preventDefault) => {
        let closure_129_0;
        let closure_129_1;
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        [closure_129_0, closure_129_1] = _undefined.code.split("-");
        _slicedToArray(_undefined.code.split("-"), 2);
        const promise = asyncRequire(12762, dependencyMap.paths);
        promise.then((openGuildProductLink) => {
          openGuildProductLink.openGuildProductLink(closure_1_0, closure_1_1);
        });
        return true;
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4881).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
      return (preventDefault) => {
        obj = storefrontCodedLink;
        const result = obj.parseStorefrontCodedLink(_undefined.code);
        if (null == result) {
          return false;
        } else {
          const scopeId = result.scopeId;
          if (result.skuIds.length > 1) {
            return false;
          } else {
            if (preventDefault != null) {
              preventDefault.preventDefault();
            }
            obj2 = { skuId: _slicedToArray(result.skuIds, 1)[0], analyticsLocations: importDefault };
            const result1 =
              SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductDetailsModal(obj2);
            return true;
          }
        }
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4881).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
      return (preventDefault) => {
        obj = storefrontCodedLink;
        const result = obj.parseStorefrontCodedLink(_undefined.code);
        if (null == result) {
          return false;
        } else {
          const scopeId = result.scopeId;
          if (result.skuIds.length > 1) {
            return false;
          } else {
            if (preventDefault != null) {
              preventDefault.preventDefault();
            }
            obj2 = { skuId: _slicedToArray(result.skuIds, 1)[0], analyticsLocations: importDefault };
            const result1 =
              SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductDetailsModal(obj2);
            return true;
          }
        }
      };
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4881).CodedLinkType.QUESTS_EMBED) {
      const tmp2Result = tmp2(10925);
      if (tmp2Result.getIsEligibleForQuests()) {
        return function (preventDefault) {
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
            const self = this;
            const self2 = this;
            const uRLSearchParams = new URLSearchParams(search);
            const value = uRLSearchParams.get("sort");
            const value2 = uRLSearchParams.get("filter");
            tmp4 = value2;
            tmp5 = value;
          }
          obj2 = {
            scrollToQuestId: _undefined.code,
            sort: tmp5,
            filter: tmp4,
            fromContent: QuestContent.QuestContent.QUEST_SHARE_LINK,
          };
          const openQuestHome = QuestUtils.openQuestHome;
          if (tmp5 == null) {
            tmp5 = null;
          }
          if (tmp4 == null) {
            tmp4 = null;
          }
          openQuestHome(obj2);
          return true;
        };
      }
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4881).CodedLinkType.COLLECTIBLES_SHOP) {
      return (preventDefault) => {
        let code;
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        obj = url(dependencyMap[42]);
        const enabled = obj.isVirtualCurrencyEnabled().enabled;
        const promise = url(dependencyMap[20])(dependencyMap[43], dependencyMap.paths);
        promise.then((openCollectiblesShopMobile) => {
          let tmp10;
          openCollectiblesShopMobile = openCollectiblesShopMobile.openCollectiblesShopMobile;
          const str = code.code;
          const tmp3 = _slicedToArray(str.split("-"), 2)[1];
          if (enabled) {
            let ORBS;
            if (tmp2 === constants.ORBS) {
              ORBS = constants2.ORBS;
            }
            obj = {
              analyticsSource: importDefault[importDefault.length - 1],
              analyticsLocations: importDefault,
              screen: ORBS,
              initialProductSkuId: tmp10,
            };
            tmp10 = undefined;
            if ("" !== tmp3) {
              tmp10 = tmp3;
            }
            const result = openCollectiblesShopMobile(obj);
          }
          ORBS = tmp4 ? constants2.SHOP_ALL : constants2.FEATURED_PAGE;
        });
        return true;
      };
    }
  }
  let obj3 = URLUtilsDefault;
  let toURLSafeResult = obj3.toURLSafe(url);
  if (toURLSafeResult == null) {
    toURLSafeResult = {};
  }
  ({ host, hostname, pathname } = toURLSafeResult);
  ({ search, hash } = toURLSafeResult);
  let tmp5Result = URLUtilsDefault;
  let tmp7 = hostname;
  const isDiscordHostname = tmp5Result.isDiscordHostname;
  if (hostname == null) {
    tmp7 = null;
  }
  let isDiscordHostnameResult = isDiscordHostname(tmp7);
  if (!isDiscordHostnameResult) {
    const isDiscordLocalhost = URLUtilsDefault.isDiscordLocalhost;
    URLUtilsDefault;
    if (host == null) {
      host = null;
    }
    if (hostname == null) {
      hostname = null;
    }
    isDiscordHostnameResult = isDiscordLocalhost(host, hostname);
  }
  if (isDiscordHostnameResult) {
    if (null != pathname) {
      if (isGameShopPath(pathname)) {
        return (preventDefault) => {
          if (preventDefault != null) {
            preventDefault.preventDefault();
          }
          const result = url(dependencyMap[37]).openSocialLayerStorefrontUnsupportedOnMobileAlert();
          return true;
        };
      }
    }
  }
  if (null != pathname) {
    if (isDiscordHostnameResult) {
      const tmp5Result4 = URLUtilsDefault;
      if (tmp5Result4.isAppRoute(pathname)) {
        obj2 = { navigationReplace: false, openChannel: true };
        if (null != search) {
          obj2.search = search;
        }
        if (null != hash) {
          obj2.hash = hash;
        }
        return (preventDefault) => {
          if (preventDefault != null) {
            preventDefault.preventDefault();
          }
          safeTransitionToDefault(pathname, obj2);
          return true;
        };
      }
    }
  }
  if (null != findCodedLinkResult) {
    if (findCodedLinkResult.type === tmp2(4881).CodedLinkType.APP_OAUTH2_LINK) {
      fn = (preventDefault) => {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        obj = AppAnalyticsUtilsDefault;
        obj2 = { application_id: _undefined.code };
        obj.trackWithMetadata(closure_12.APP_OAUTH2_LINK_EMBED_URL_CLICKED, obj2);
        openURLDefault(url);
        return true;
      };
    }
    return fn;
  }
  const tmp2Result3 = tmp2(5050);
  let result = tmp2Result3.tryParseEventDetailsPath(pathname);
  if (!skipExtensionCheck) {
    const tmp2Result4 = tmp2(7821);
    if (null != tmp2Result4.isSuspiciousDownload(url)) {
      fn = (preventDefault) => {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        obj = SuspiciousDownloadModalActionCreatorsDefault;
        obj.show(url);
        return true;
      };
    }
  }
}
