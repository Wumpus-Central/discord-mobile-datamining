// === Module 15924: handleSupportedURL ===

// Module 15924 (handleSupportedURL)
import DispatcherDefault from "Dispatcher" /* 572 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 2017 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5344 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import BoostingActionCreators from "BoostingActionCreators" /* 6848 */;
import QuestContent from "QuestContent" /* 6866 */;
import AdPlacement from "AdPlacement" /* 6867 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7435 */;
import openUserSettings from "openUserSettings" /* 7658 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7818 */;
import AnalyticsActions from "AnalyticsActions" /* 7961 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9172 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9216 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 9367 */;
import GameProfileActionCreators from "GameProfileActionCreators" /* 9419 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9439 */;
import DisplayedInviteActionCreators from "DisplayedInviteActionCreators" /* 9543 */;
import QuestUtils from "QuestUtils" /* 9785 */;
import ApplicationUtils from "ApplicationUtils" /* 11050 */;
import authorizeCallbackDefault from "authorizeCallback" /* 11052 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 11077 */;
import guild_templates_GuildTemplateActionCreatorsDefault from "guild_templates/GuildTemplateActionCreators" /* 13393 */;
import FamilyCenterNativeUtils from "FamilyCenterNativeUtils" /* 13563 */;
import CreateGuildModalActionCreatorsDefault from "CreateGuildModalActionCreators" /* 14482 */;
import BountyActionCreators from "BountyActionCreators" /* 14893 */;
import MidjourneyOnboardingUtils from "MidjourneyOnboardingUtils" /* 15934 */;
import GuildSettingsPickerActionCreators from "GuildSettingsPickerActionCreators" /* 15967 */;
import AgeKeyReturnHandler from "AgeKeyReturnHandler" /* 16065 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6935 */;
import PremiumNitroNavigationStore from "PremiumNitroNavigationStore" /* 15520 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
let closure_4 = ["code", "state"];
fn(7012).addPostConnectionCallback;
let closure_9 = fn(7705).handleMobileWebCheckoutStatus;
const Constants = fn(1072);
({ AnalyticEvents: closure_12, LinkingTypes: map1, Routes: closure_14, UserSettingsSections: closure_15, PlatformTypes: closure_16, ME: closure_17 } = Constants);
const StaticChannelRoute = fn(5026).StaticChannelRoute;
const StreamTypes = fn(6795).StreamTypes;
const NativePermissionTypes = fn(8031).NativePermissionTypes;
let closure_21 = fn(11051).OAUTH2_AUTHORIZE_MODAL_KEY;
let closure_22 = fn(7815).FAMILY_CENTER_LINK_REQUEST_REGEX;
let closure_23 = fn(5903).MobileWebRedirectCheckoutDeepLinkActions;
const SHARE_SCREEN_MODAL_KEY = fn(15925).SHARE_SCREEN_MODAL_KEY;
const MobileUserSettings = fn(8524).MobileUserSettings;
const size = fn(2);
let result = size.fileFinishedImporting("modules/links/native/handleSupportedURL.tsx");

export default function handleSupportedURL(payload) {
  payload = payload.payload;
  ({ safe, navigationReplace, waitForConnection, skipMessageFetch, isAppStartupNavigation, userProfileNavigationReplace } = payload);
  let rootNavigationRef1;
  let rootNavigationRef2;
  let inviteCode;
  let username;
  let deeplinkAttemptId;
  let guildTemplateCode;
  let pathname;
  let remoteAuthFingerprint;
  let deepLinkAction;
  let gameId;
  let rootNavigationRef3;
  const type = payload.type;
  if (constants2.CONTACT_SYNC === type) {
    let result = payload(inviteCode[16]).openContactSyncModalDeeplink();
    let flag = true;
    const obj51 = payload(inviteCode[16]);
  } else if (constants2.COMPOSE_MESSAGE === type) {
    rootNavigationRef1(inviteCode[17]).popAll();
    const obj47 = rootNavigationRef1(inviteCode[17]);
    const rootNavigationRef = payload(inviteCode[18]).getRootNavigationRef();
    flag = true;
    if (null != rootNavigationRef) {
      let obj3 = { screen: "new-message", params: { sourcePage: "Deeplink" } };
      rootNavigationRef.navigate("friends", obj3);
      flag = true;
    }
    const obj48 = payload(inviteCode[18]);
  } else if (constants2.ADD_FRIENDS === type) {
    rootNavigationRef1(inviteCode[17]).popAll();
    const obj42 = rootNavigationRef1(inviteCode[17]);
    const tmp167 = rootNavigationRef1;
    const tmp168 = inviteCode;
    rootNavigationRef1 = payload(inviteCode[18]).getRootNavigationRef();
    if (null == rootNavigationRef1) {
      const result1 = tmp167(tmp168[19]).openAddFriendModalDeeplink();
      flag = true;
      const tmp167Result = tmp167(tmp168[19]);
    } else if (rootNavigationRef1.isReady()) {
      let obj12 = { screen: "add-friends", params: { sourcePage: "Deeplink" } };
      rootNavigationRef1.navigate("friends", obj12);
      flag = true;
    } else {
      pathname(() => rootNavigationRef1.navigate("friends", { screen: "add-friends", params: { sourcePage: "Deeplink" } }));
      flag = true;
    }
    const obj43 = payload(inviteCode[18]);
  } else if (constants2.FRIENDS === type) {
    rootNavigationRef1(inviteCode[17]).popAll();
    const obj37 = rootNavigationRef1(inviteCode[17]);
    const tmp159 = inviteCode;
    const tmp161 = payload;
    rootNavigationRef2 = payload(inviteCode[18]).getRootNavigationRef();
    if (null != rootNavigationRef2) {
      if (rootNavigationRef2.isReady()) {
        rootNavigationRef2.navigate("friends");
      } else {
        pathname(() => {
          rootNavigationRef2.navigate("friends");
        });
      }
    }
    flag = true;
    if (null != payload.userId) {
      const obj17 = { userId: payload.userId, navigationReplace: userProfileNavigationReplace };
      const result2 = tmp161(tmp159[20]).showUserProfileActionSheetPostConnection(obj17);
      flag = true;
      const tmp161Result = tmp161(tmp159[20]);
    }
    const obj38 = payload(inviteCode[18]);
  } else if (constants2.EDIT_PROFILE === type) {
    pathname(() => {
      rootNavigationRef1(inviteCode[17]).popAll();
      const obj = rootNavigationRef1(inviteCode[17]);
      payload(inviteCode[21]).openUserSettings({ screen: constants3.PROFILE_CUSTOMIZATION });
    });
    flag = true;
  } else if (constants2.BADGE_DIRECTORY === type) {
    pathname(() => {
      rootNavigationRef1(inviteCode[17]).popAll();
      const obj = rootNavigationRef1(inviteCode[17]);
      const result = payload(inviteCode[22]).openBadgeDirectoryScreen();
    });
    flag = true;
  } else if (constants2.INVITE === type) {
    inviteCode = payload.inviteCode;
    username = payload.username;
    deeplinkAttemptId = payload.deeplinkAttemptId;
    if (!rootNavigationRef3.isAuthenticated()) {
      if (null != inviteCode) {
        const obj20 = { deeplinkAttemptId, location: "Deep Link" };
        payload(inviteCode[23]).showInvite(inviteCode, username, obj20);
        flag = true;
        const obj35 = payload(inviteCode[23]);
      }
    }
    pathname(() => {
      guild_templates_GuildTemplateActionCreatorsDefault.hideModal();
      if (null != inviteCode) {
        const result = KeyboardManagerUtils.dismissGlobalKeyboard();
        const obj4 = { deeplinkAttemptId, location: "Deep Link" };
        DisplayedInviteActionCreators.showInvite(tmp3, username, obj4);
      }
    });
    flag = true;
  } else if (constants2.GUILD_TEMPLATE === type) {
    guildTemplateCode = payload.guildTemplateCode;
    pathname(() => {
      DisplayedInviteActionCreators.clearDisplayedInvite();
      if (null != guildTemplateCode) {
        const result = KeyboardManagerUtils.dismissGlobalKeyboard();
        const tmpResult = KeyboardManagerUtils;
        guild_templates_GuildTemplateActionCreatorsDefault.showModal(tmp4);
      }
    });
    flag = true;
  } else if (constants2.GIFT_CODE === type) {
    const giftCode = payload.giftCode;
    let flag3 = null != giftCode;
    if (flag3) {
      const giftCode1 = payload(inviteCode[26]).resolveGiftCode(giftCode);
      const obj34 = payload(inviteCode[26]);
      giftCode1.then((giftCode) => {
        rootNavigationRef1(inviteCode[27]).track(constants.OPEN_MODAL, { type: "gift_accept", location: null });
        const obj = rootNavigationRef1(inviteCode[27]);
        const result = payload(inviteCode[28]).openGiftCodeRedeemModal(giftCode.giftCode.code);
      }).catch(() => {

      });
      flag3 = true;
      let nextPromise = giftCode1.then((giftCode) => {
        rootNavigationRef1(inviteCode[27]).track(constants.OPEN_MODAL, { type: "gift_accept", location: null });
        const obj = rootNavigationRef1(inviteCode[27]);
        const result = payload(inviteCode[28]).openGiftCodeRedeemModal(giftCode.giftCode.code);
      });
    }
    flag = flag3;
  } else if (constants2.ROLL_DICE === type) {
    ({ guildId: guildId2, channelId: channelId2 } = payload);
    let flag2 = null != guildId2;
    ({ diceCount, diceSides } = payload);
    if (flag2) {
      flag2 = null != channelId2;
    }
    if (flag2) {
      payload(inviteCode[29]).startDiceRoll(channelId2, diceCount, diceSides);
      const obj22 = { guildId: guildId2, channelId: channelId2, messageId: "Array", navigationSettings: "png" };
      const obj27 = { safe, navigationReplace, waitForConnection, skipMessageFetch, isAppStartupNavigation };
      obj22.navigationSettings = obj27;
      rootNavigationRef1(inviteCode[30])(obj22);
      flag2 = true;
      const obj31 = payload(inviteCode[29]);
    }
    flag = flag2;
  } else if (constants2.SOCIAL_LAYER_STOREFRONT === type) {
    pathname(guildTemplateCode(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
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
          dependencyMap = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              tmp2(6824).popAll();
              const tmp42 = tmp3(10805);
              const openSocialLayerStorefrontUnsupportedOnMobileAlert = tmp42.openSocialLayerStorefrontUnsupportedOnMobileAlert;
              closure_128_0 = openSocialLayerStorefrontUnsupportedOnMobileAlert;
              closure_128_1 = tmp42.openSocialLayerStorefrontProductDetailsModal;
              if (null != payload.skuId) {
                closure_128_2 = tmp3(6976).default;
                ({ guildId, skuId } = payload);
                c2 = 1;
                dependencyMap = 1;
                const obj4 = { value: tmp3(10806).fetchSocialLayerStorefrontSku(guildId, skuId, tmp3(15932).default()), done: false };
                return obj4;
              } else {
                const result = openSocialLayerStorefrontUnsupportedOnMobileAlert();
                dependencyMap = 3;
              }
              const obj7 = tmp2(6824);
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (null != closure_128_2.get(closure_129_0.skuId)) {
            if (!closure_128_2.didFetchingSkuFail(closure_129_0.skuId)) {
              const obj = { skuId: closure_129_0.skuId, analyticsLocations: null };
              items = [tmp2(7435).URI_SCHEME];
              obj.analyticsLocations = items;
              closure_128_1(obj);
            }
          }
          closure_128_0();
          dependencyMap = 3;
          const obj6 = { value: undefined, done: true };
          return obj6;
        } catch (tmp23) {
          dependencyMap = tmp;
          throw tmp23;
        }
      }
    }));
    flag = true;
  } else {
    if (constants2.CHANNEL !== type) {
      if (constants2.MESSAGE !== type) {
        if (constants2.SESSION_MANAGEMENT === type) {
          pathname(() => {
            rootNavigationRef1(inviteCode[17]).popAll();
            const obj = rootNavigationRef1(inviteCode[17]);
            payload(inviteCode[21]).openUserSettings({ screen: constants3.SESSIONS });
          });
          flag = true;
        } else if (constants2.FAMILY_CENTER === type) {
          let obj28 = payload;
          if (payload == null) {
            obj28 = {};
          }
          pathname = obj28.pathname;
          let tmp122 = null;
          if (undefined !== pathname) {
            tmp122 = pathname;
          }
          pathname = tmp122;
          pathname(() => {
            ModalActionCreatorsDefault.popAll();
            openUserSettings.openUserSettings({ screen: constants3.FAMILY_CENTER });
            let isMatch = null != pathname;
            if (isMatch) {
              isMatch = regex.test(pathname);
            }
            if (isMatch) {
              const result = FamilyCenterNativeUtils.handleFamilyCenterQRCodeScan(pathname, "NativeCameraScan");
              const tmp3Result = FamilyCenterNativeUtils;
            }
            const obj3 = { screen: constants3.FAMILY_CENTER };
          });
          flag = true;
        } else if (constants2.OAUTH2_AUTHORIZE === type) {
          pathname(() => {
            ModalActionCreatorsDefault.popAll();
            if (obj2.isMidjourneyOnboardingFlow()) {
              CreateGuildModalActionCreatorsDefault.openCreateGuildModal(function openOAuth2Modal(guildId) {
                if (type.type === OAUTH2_AUTHORIZE.OAUTH2_AUTHORIZE) {
                  rootNavigationRef1(inviteCode[17]).popAll();
                  const obj = rootNavigationRef1(inviteCode[17]);
                  const obj3 = {};
                  const obj2 = rootNavigationRef1(inviteCode[17]);
                  const merged = Object.assign(tmp.props);
                  obj3.guildId = guildId;
                  obj3.callback = rootNavigationRef1(inviteCode[41]);
                  obj3.dismissOAuthModal = function dismissOAuthModal() {
                    closure_1_1(closure_1_3[17]).popWithKey(closure_1_21);
                  };
                  obj2.pushLazy(payload(inviteCode[40])(inviteCode[39], inviteCode.paths), obj3, closure_2_21);
                  const tmp7 = payload(inviteCode[40])(inviteCode[39], inviteCode.paths);
                }
              });
              const tmpResult = CreateGuildModalActionCreatorsDefault;
            } else {
              let obj3 = {};
              let merged = Object.assign(payload.props);
              obj3.callback = authorizeCallbackDefault;
              ApplicationUtils.openOAuth2Modal(obj3);
              const tmp4Result = ApplicationUtils;
            }
            obj2 = MidjourneyOnboardingUtils;
          });
          flag = true;
        } else if (constants2.ONE_TIME_LOGIN === type) {
          rootNavigationRef1(inviteCode[17]).popAll();
          const obj25 = rootNavigationRef1(inviteCode[17]);
          const obj29 = { token: payload.token };
          rootNavigationRef1(inviteCode[17]).pushLazy(payload(inviteCode[40])(inviteCode[43], inviteCode.paths), obj29, "ONE_TIME_LOGIN_MODAL");
          flag = true;
          const obj26 = rootNavigationRef1(inviteCode[17]);
        } else if (constants2.REMOTE_AUTH === type) {
          remoteAuthFingerprint = payload.remoteAuthFingerprint;
          pathname(null != remoteAuthFingerprint ? (() => {
            ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15938, dependencyMap.paths), { remoteAuthFingerprint }, "REMOTE_AUTH_MODAL");
          }) : (() => {
            let obj = payload(inviteCode[45]);
            const tmp3 = payload(inviteCode[45]).isMetaQuest() ? NativePermissionTypes.HEADSET_CAMERA : NativePermissionTypes.CAMERA;
            const permission = rootNavigationRef1(inviteCode[46]).requestPermission(tmp3);
            const obj2 = rootNavigationRef1(inviteCode[46]);
            permission.then((result) => {
              if (result) {
                rootNavigationRef1(paths[17]).pushLazy(payload(paths[40])(paths[47], paths.paths), { showHelp: true });
                const obj = rootNavigationRef1(paths[17]);
              }
            }).catch(() => {

            });
            const nextPromise = permission.then((result) => {
              if (result) {
                rootNavigationRef1(paths[17]).pushLazy(payload(paths[40])(paths[47], paths.paths), { showHelp: true });
                const obj = rootNavigationRef1(paths[17]);
              }
            });
          }));
          flag = true;
        } else if (constants2.PROMOTIONS === type) {
          rootNavigationRef1(inviteCode[48]).performURLNavigation(payload.url);
          flag = true;
          const obj24 = rootNavigationRef1(inviteCode[48]);
        } else if (constants2.FEATURE_PROMO_URL === type) {
          rootNavigationRef1(inviteCode[48]).openURLExternally(payload.promoUrl);
          flag = true;
          const obj23 = rootNavigationRef1(inviteCode[48]);
        } else if (constants2.USER_PROFILE === type) {
          flag = true;
          if (null != payload.userId) {
            const obj30 = { userId: payload.userId, navigationReplace: userProfileNavigationReplace };
            const result3 = payload(inviteCode[20]).showUserProfileActionSheetPostConnection(obj30);
            flag = true;
            const obj21 = payload(inviteCode[20]);
          }
        } else if (constants2.BUILD_OVERRIDE === type) {
          rootNavigationRef1(inviteCode[17]).popAll();
          const obj18 = rootNavigationRef1(inviteCode[17]);
          const obj32 = { overrideUrl: payload.overrideUrl };
          rootNavigationRef1(inviteCode[17]).pushLazy(payload(inviteCode[40])(inviteCode[49], inviteCode.paths), obj32);
          flag = true;
          const obj19 = rootNavigationRef1(inviteCode[17]);
        } else if (constants2.GUILD_EVENT_DETAILS === type) {
          pathname(guildTemplateCode(function*() {
            if (c4 === 2) {
              c4 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp5 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj4 = { value, done: true };
                return obj4;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c4 = 2;
                if (0 === paths) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    const obj6 = { value, done: true };
                    return obj6;
                  } else {
                    closure_2 = tmp2;
                    closure_129_0 = undefined;
                    closure_129_1 = undefined;
                    closure_129_2 = undefined;
                    tmp3(paths[17]).popAll();
                    ({ guildId: closure_129_0, guildEventId: closure_129_1 } = payload);
                    paths = 1;
                    c4 = 1;
                    const obj7 = { value: payload(paths[40])(paths[50], paths.paths), done: false };
                    return obj7;
                  }
                } else {
                  if (1 === tmp6) {
                    if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      const obj8 = { value, done: true };
                      return obj8;
                    } else {
                      if (null != _default.getGuild(closure_129_0)) {
                        payload(paths[51]).transitionToGuild(closure_129_0);
                        const obj2 = payload(paths[51]);
                      }
                      guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(closure_129_1);
                      payload = guildScheduledEvent;
                      if (guildScheduledEvent == null) {
                        const guildEvent = tmp3(paths[52]).fetchGuildEvent(closure_129_0, closure_129_1, { priority: "foreground" });
                        paths = 2;
                        c4 = 1;
                        const obj9 = { value: guildEvent.catch(() => null), done: false };
                        return obj9;
                      }
                      _default = value.default;
                    }
                  } else if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    payload = value;
                  }
                  closure_129_2 = payload;
                  if (null != closure_129_2) {
                    const obj10 = { eventId: closure_129_2.id, event: closure_129_2 };
                    const result = payload(paths[53]).openGuildEventDetails(obj10);
                    const obj3 = payload(paths[53]);
                  }
                  c4 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp35) {
                c4 = tmp;
                throw tmp35;
              }
            }
          }));
          flag = true;
        } else if (constants2.MOBILE_WEB_HANDOFF === type) {
          const redirectUrl = payload.redirectUrl;
          ({ nonce, fingerprint } = payload);
          const _HermesInternal = HermesInternal;
          const obj33 = { nonce, fingerprint, skipLoginRedirect: true };
          const result4 = rootNavigationRef1(inviteCode[54]).redirectWithHandoffToken("" + redirectUrl.pathname + redirectUrl.search, obj33);
          flag = true;
          const obj16 = rootNavigationRef1(inviteCode[54]);
        } else if (constants2.VOICE_CHANNEL === type) {
          pathname(guildTemplateCode(function*() {
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
                if (0 === v1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    let tmp19 = null != payload.guildId;
                    if (tmp19) {
                      tmp19 = null != payload.channelId;
                    }
                    if (tmp19) {
                      tmp19 = null != payload.userId;
                    }
                    if (tmp19) {
                      v1(paths[17]).popAll();
                      v1 = 1;
                      c2 = 1;
                      const obj6 = { value: tmp4(paths[40])(paths[50], paths.paths), done: false };
                      return obj6;
                    }
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                } else {
                  if (null != _default.getGuild(closure_128_0.guildId)) {
                    tmp4(paths[51]).transitionToGuild(closure_128_0.guildId);
                    const obj = tmp4(paths[51]);
                  }
                  const obj8 = { streamType: constants.GUILD, ownerId: closure_128_0.userId, guildId: closure_128_0.guildId, channelId: closure_128_0.channelId };
                  v1(paths[55])(obj8);
                  _default = value.default;
                }
                let tmp23 = "transfer_cancelled" === closure_128_0.action;
                if (tmp23) {
                  tmp23 = "xbox" === closure_128_0.via;
                }
                if (tmp23) {
                  tmp4(paths[56]).disconnectRemote();
                  const obj4 = tmp4(paths[56]);
                }
                c2 = 3;
                return { value: "HermesInternal", done: null };
              } catch (tmp37) {
                c2 = tmp;
                throw tmp37;
              }
            }
          }));
          flag = true;
        } else if (constants2.ICYMI === type) {
          pathname(() => {
            payload(inviteCode[57]).navigateToRootTab({ screen: "icymi" });
          });
          flag = true;
        } else if (constants2.GUILD_HOME === type) {
          flag = true;
          if (null != payload.guildId) {
            let tmp77;
            if (null != payload.highlightChannelId) {
              if (null != payload.highlightMessageId) {
                const obj36 = { search: null };
                ({ highlightChannelId: obj14.highlight_channel_id, highlightMessageId: obj14.highlight_message_id } = payload);
                obj36.search = payload(inviteCode[58]).stringify({ highlight_channel_id: null, highlight_message_id: null });
                tmp77 = obj36;
                let obj13 = payload(inviteCode[58]);
                const obj39 = { highlight_channel_id: null, highlight_message_id: null };
              }
            }
            payload(inviteCode[59]).transitionTo(closure_14.CHANNEL(payload.guildId, StaticChannelRoute.GUILD_HOME), tmp77);
            flag = true;
            const obj15 = payload(inviteCode[59]);
          }
        } else if (constants2.USER_CONNECTIONS_LINK_CALLBACK === type) {
          pathname(() => {
            let hasItem = null != payload.callbackCode && null != payload.callbackState && null != payload.provider;
            if (hasItem) {
              items = [, , , ];
              ({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = value2);
              hasItem = items.includes(payload.provider);
            }
            if (hasItem) {
              ({ provider: obj2.provider, callbackCode: obj2.callbackCode, callbackState: obj2.callbackState } = payload);
              DispatcherDefault.dispatch({ type: "USER_CONNECTIONS_LINK_CALLBACK", provider: null, callbackCode: null, callbackState: null });
              const obj3 = { type: "USER_CONNECTIONS_LINK_CALLBACK", provider: null, callbackCode: null, callbackState: null };
            }
          });
          flag = true;
        } else if (constants2.USER_CONNECTIONS_CALLBACK === type) {
          pathname(guildTemplateCode(function*() {
            if (c8 === 2) {
              c8 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
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
                c8 = 2;
                if (0 === c7) {
                  if (arg0 === 1) {
                    c8 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c8 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    closure_6 = tmp5;
                    closure_133_0 = undefined;
                    closure_133_1 = undefined;
                    const searchParams = payload.searchParams;
                    state = searchParams.state;
                    const tmp50 = tmp2(searchParams, obj3);
                    if (null != state) {
                      const obj7 = { code: searchParams.code, state };
                      closure_1 = tmp50;
                      const keys = Object.keys();
                      if (keys === undefined) {
                        dependencyMap2 = tmp12;
                        closure_2 = tmp11;
                        closure_1 = tmp50;
                        dependencyMap = keys;
                      } else {
                        dependencyMap2 = tmp12;
                        closure_2 = tmp11;
                        closure_1 = tmp10;
                        dependencyMap = keys;
                        while (dependencyMap[closure_2] !== undefined) {
                          dependencyMap2 = tmp17;
                          closure_2 = tmp16;
                          closure_1 = tmp15;
                          dependencyMap = tmp14;
                          if (!obj3.startsWith("openid.")) {
                            continue;
                          } else {
                            let obj9 = tmp19;
                            if (null == tmp19) {
                              obj9 = {};
                            }
                            obj9[obj3] = searchParams[obj3];
                            continue;
                          }
                          continue;
                        }
                        dependencyMap2 = tmp17;
                        closure_2 = tmp16;
                        closure_1 = tmp15;
                        dependencyMap = tmp14;
                      }
                      if (null != tmp19) {
                        obj7.openid_params = tmp19;
                      }
                      closure_1(6824).popAll();
                      const obj5 = closure_1(6824);
                      tmp10 = tmp50;
                      const obj10 = { screen: constants.CONNECTIONS };
                      dependencyMap(7658).openUserSettings(obj10);
                      const obj6 = dependencyMap(7658);
                      c7 = 1;
                      c8 = 1;
                      const obj11 = { value: closure_1(7431).callback(payload.provider, obj7), done: false };
                      return obj11;
                    } else {
                      c8 = 3;
                    }
                  }
                } else if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  closure_133_0 = value;
                  const body = closure_133_0.body;
                  let redirect;
                  if (body != null) {
                    redirect = body.redirect;
                  }
                  closure_133_1 = closure_1(1378).toURLSafe(redirect);
                  if (null != closure_133_1) {
                    closure_1(5864).openURL(closure_133_1.toString());
                    const obj13 = closure_1(5864);
                  }
                  const obj12 = closure_1(1378);
                }
                c8 = 3;
                const obj = { value, done: true };
                return obj;
              } catch (tmp30) {
                c8 = tmp;
                throw tmp30;
              }
            }
          }));
          flag = true;
        } else if (constants2.CONNECTIONS === type) {
          pathname(() => {
            rootNavigationRef1(inviteCode[17]).popAll();
            const obj = rootNavigationRef1(inviteCode[17]);
            payload(inviteCode[21]).openUserSettings({ screen: constants3.CONNECTIONS });
          });
          flag = true;
        } else if (constants2.GUILD_SETTINGS === type) {
          pathname(() => {
            if (null != payload.guildId) {
              const obj = GuildSettingsActionCreatorsDefault;
              obj.open(payload.guildId, payload.settingsSection, undefined, payload.settingsSubsection);
            }
          });
          flag = true;
        } else if (constants2.ACTIVATE_DEVICE === type) {
          rootNavigationRef1(inviteCode[64]).showModal(payload.userCode);
          flag = true;
          let obj11 = rootNavigationRef1(inviteCode[64]);
        } else if (constants2.GUILD_SETTINGS_PICKER === type) {
          pathname(() => {
            const result = GuildSettingsPickerActionCreators.openGuildSettingsPickerModal({ section: payload.settingsSection, subsection: payload.settingsSubsection, feature: payload.feature });
          });
          flag = true;
        } else if (constants2.SHARE === type) {
          flag = true;
          if (obj6.isIOS()) {
            rootNavigationRef1(tmp54[17]).popAll();
            let obj7 = rootNavigationRef1(tmp54[17]);
            rootNavigationRef1(tmp54[67]).closeAll();
            let obj9 = rootNavigationRef1(tmp54[17]);
            const obj40 = { text: null, channelId: null, shareId: null, attachmentManifest: null };
            ({ text: obj10.text, channelId: obj10.channelId, shareId: obj10.shareId, attachmentManifest: obj10.attachmentManifest } = payload);
            obj9.pushLazy(tmp53(tmp54[40])(tmp54[68], tmp54.paths), obj40, SHARE_SCREEN_MODAL_KEY, { presentation: "modal" });
            flag = true;
            let obj8 = rootNavigationRef1(tmp54[67]);
          }
          obj6 = payload(inviteCode[66]);
          tmp53 = payload;
        } else {
          if (constants2.CREATE_VOICE_INVITE !== type) {
            if (constants2.SEND_VOICE_HANGOUT_WAVE !== type) {
              if (constants2.ACCOUNT_STANDING === type) {
                pathname(() => {
                  rootNavigationRef1(inviteCode[17]).popAll();
                  const obj = rootNavigationRef1(inviteCode[17]);
                  payload(inviteCode[70]).openAccountStanding();
                });
                flag = true;
              } else if (constants2.MOBILE_NATIVE_UPDATE === type) {
                const result5 = rootNavigationRef2(inviteCode[71]).openBuildInstallerUrl(payload.url);
                flag = true;
                let obj5 = rootNavigationRef2(inviteCode[71]);
              } else if (constants2.MOBILE_WEB_REDIRECT_CHECKOUT === type) {
                deepLinkAction = payload.deepLinkAction;
                pathname(guildTemplateCode(function*() {
                  if (paths === 2) {
                    paths = 3;
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
                      paths = 2;
                      if (0 === c2) {
                        if (arg0 === 1) {
                          paths = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          paths = 3;
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          guildId = undefined;
                          guild = undefined;
                          if (deepLinkAction === constants.PREMIUM_CHECKOUT_SUCCESS) {
                            deepLinkAction("succeeded");
                          } else if (deepLinkAction === constants.PREMIUM_SUBSCRIPTION_UPDATE) {
                            const subscriptions = tmp3(paths[72]).fetchSubscriptions();
                            const obj3 = tmp3(paths[72]);
                          } else if (deepLinkAction === constants.GUILD_BOOST_CHECKOUT_SUCCESS) {
                            tmp2(paths[17]).popAll();
                            guildId = payload.guildId;
                            c2 = 1;
                            paths = 1;
                            const obj5 = { value: tmp3(paths[40])(paths[50], paths.paths), done: false };
                            return obj5;
                          }
                          paths = 3;
                        }
                      } else if (arg0 === 1) {
                        paths = 3;
                        throw value;
                      } else if (arg0 !== 2) {
                        guild = value.default.getGuild(guildId);
                        if (null != guild) {
                          tmp3(paths[51]).transitionToGuild(guildId);
                          tmp2(paths[73])(guild);
                          const obj6 = tmp3(paths[51]);
                        }
                        const _default = value.default;
                      }
                      paths = 3;
                      const obj = { value, done: true };
                      return obj;
                    } catch (tmp16) {
                      paths = tmp;
                      throw tmp16;
                    }
                  }
                }));
                flag = true;
              } else if (constants2.SHOP === type) {
                pathname(() => {
                  const obj3 = { analyticsLocations: null, analyticsSource: null, screen: null, initialProductSkuId: null };
                  items = [AnalyticsLocationDefault.DEEPLINK];
                  obj3.analyticsLocations = items;
                  obj3.analyticsSource = AnalyticsLocationDefault.DEEPLINK;
                  ({ screen: obj2.screen, skuId: obj2.initialProductSkuId } = payload);
                  const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj3);
                });
                flag = true;
              } else if (constants2.AUTHORIZED_APPS === type) {
                pathname(() => {
                  rootNavigationRef1(inviteCode[17]).popAll();
                  const obj = rootNavigationRef1(inviteCode[17]);
                  payload(inviteCode[21]).openUserSettings({ screen: constants3.AUTHORIZED_APPS });
                });
                flag = true;
              } else if (constants2.DAVE_PROTOCOL_VERIFICATION === type) {
                pathname(() => {
                  const obj2 = { userId: payload.userId, fingerprint: null };
                  const fingerprint = payload.fingerprint;
                  obj2.fingerprint = fingerprint.replaceAll(" ", "+");
                  const result = SecureFramesPlatformUtilsDefault.handleSecureFramesUserVerificationLink(obj2);
                });
                flag = true;
              } else if (constants2.AGE_VERIFICATION_AGEKEY_RETURN === type) {
                pathname(() => {
                  AgeKeyReturnHandler.handleAgeKeyReturn({ result: payload.result, ageKeySaved: payload.ageKeySaved, verificationId: payload.verificationId });
                });
                flag = true;
              } else if (constants2.QUESTS === type) {
                pathname(() => {
                  if (null != payload.questId) {
                    const obj2 = { questId: payload.questId, event: constants.QUEST_SHARE_LINK_DEEP_LINKED_INTO_MOBILE_CLIENT, sourceQuestContent: QuestContent.QuestContent.QUEST_EMBED_MOBILE, properties: null };
                    const obj3 = { referrer_id: payload.referrerId };
                    obj2.properties = obj3;
                    AnalyticsActions.trackQuestEvent(obj2);
                  }
                  let sort;
                  if (payload != null) {
                    sort = payload.sort;
                  }
                  let filter;
                  if (payload != null) {
                    filter = payload.filter;
                  }
                  const obj5 = { scrollToQuestId: payload.questId, sort: null, filter: null, fromContent: null };
                  let tmp9 = null;
                  if (null != sort) {
                    tmp9 = null;
                    if ("" !== sort) {
                      tmp9 = sort;
                    }
                  }
                  obj5.sort = tmp9;
                  let tmp10 = null;
                  if (null != filter) {
                    tmp10 = null;
                    if ("" !== filter) {
                      tmp10 = filter;
                    }
                  }
                  obj5.filter = tmp10;
                  obj5.fromContent = QuestContent.QuestContent.QUEST_SHARE_LINK;
                  QuestUtils.openQuestHome(obj5);
                });
                flag = true;
              } else if (constants2.QUEST_HOME_PREVIEW === type) {
                pathname(() => {
                  const obj2 = { screen: constants3.QUESTS, params: { previewAdCreativeIds: payload.adCreativeIds } };
                  openUserSettings.openUserSettings(obj2);
                });
                flag = true;
              } else if (constants2.QUEST_BAR_PREVIEW === type) {
                pathname(() => {
                  ModalActionCreatorsDefault.popAll();
                  NavigationRouteUtils.navigateToRootTab({ screen: "guilds", guildId });
                  const obj3 = { screen: "guilds", guildId };
                  const questBarCreativePreview = BountyActionCreators.fetchQuestBarCreativePreview(payload.adCreativeId, AdPlacement.AdPlacement.MOBILE_HOME_DOCK_AREA);
                });
                flag = true;
              } else if (constants2.GIFT === type) {
                pathname(() => {
                  const obj2 = { analyticsLocations: null };
                  items = [rootNavigationRef1(inviteCode[35]).DEEPLINK];
                  obj2.analyticsLocations = items;
                  payload(inviteCode[82]).openGiftModal(obj2);
                });
                flag = true;
              } else if (constants2.NITRO_HOME === type) {
                pathname(() => {
                  const section = payload.section;
                  PremiumNitroNavigationStore.setState({ scrollToSectionId: section });
                  openUserSettings.openUserSettings({ screen: constants3.PREMIUM });
                  const obj2 = { screen: constants3.PREMIUM };
                });
                flag = true;
              } else if (constants2.ACTIVITY === type) {
                ({ applicationId: obj4.applicationId, referrerId: obj4.referrerId, customId: obj4.customId, linkId: obj4.linkId, channelId: obj4.channelId, isDeepLink: obj4.isDeepLink } = payload);
                rootNavigationRef1(inviteCode[83])({ applicationId: null, referrerId: null, customId: null, linkId: null, channelId: null, isDeepLink: null });
                flag = true;
                const obj41 = { applicationId: null, referrerId: null, customId: null, linkId: null, channelId: null, isDeepLink: null };
              } else if (constants2.CONNECTED_GAMES === type) {
                pathname(() => {
                  rootNavigationRef1(inviteCode[17]).popAll();
                  const obj = rootNavigationRef1(inviteCode[17]);
                  const obj3 = { screen: constants3.CONTENT_AND_SOCIAL, params: { tab: constants2.CONNECTED_GAMES } };
                  payload(inviteCode[21]).openUserSettings(obj3);
                });
                flag = true;
              } else if (constants2.BOOST_MARKETING === type) {
                pathname(() => {
                  BoostingActionCreators.openApplyBoostModal(payload.guildId);
                });
                flag = true;
              } else if (constants2.BOOST_SETTINGS === type) {
                pathname(() => {
                  rootNavigationRef1(inviteCode[17]).popAll();
                  const obj = rootNavigationRef1(inviteCode[17]);
                  payload(inviteCode[21]).openUserSettings({ screen: constants3.GUILD_BOOSTING });
                });
                flag = true;
              } else if (constants2.QUEST_PREVIEW_TOOL === type) {
                pathname(() => {
                  ModalActionCreatorsDefault.popAll();
                  closeVoicePanelsDefault();
                  const timerId = setTimeout(() => {
                    const obj2 = { screen: constants3.QUEST_PREVIEW_TOOL_2, params: { questId: questId.questId } };
                    payload(inviteCode[21]).openUserSettings(obj2);
                  }, 1);
                });
                flag = true;
              } else if (constants2.SUBSCRIPTION_SETTINGS === type) {
                pathname(() => {
                  rootNavigationRef1(inviteCode[17]).popAll();
                  const obj = rootNavigationRef1(inviteCode[17]);
                  const result = payload(inviteCode[86]).openSubscriptionSettingsFromDeepLink();
                });
                flag = true;
              } else if (constants2.GAME_PROFILE === type) {
                gameId = payload.gameId;
                pathname(() => {
                  ModalActionCreatorsDefault.popAll();
                  const _default = GameProfileActionCreators.default;
                  _default.openGameProfileModal({ gameId, source: GameProfileAnalyticUtils.GameProfileSources.Deeplink, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId } });
                });
                flag = true;
              } else if (constants2.MESSAGE_REQUESTS === type) {
                rootNavigationRef1(inviteCode[17]).popAll();
                let obj = rootNavigationRef1(inviteCode[17]);
                rootNavigationRef3 = payload(inviteCode[18]).getRootNavigationRef();
                flag = true;
                if (null != rootNavigationRef3) {
                  if (rootNavigationRef3.isReady()) {
                    rootNavigationRef3.navigate("message-requests");
                    flag = true;
                  } else {
                    pathname(() => {
                      rootNavigationRef3.navigate("message-requests");
                    });
                    flag = true;
                  }
                }
                let obj2 = payload(inviteCode[18]);
              } else {
                flag = false;
                if (constants2.CONJURE === type) {
                  rootNavigationRef1(inviteCode[17]).popAll();
                  const obj53 = rootNavigationRef1(inviteCode[17]);
                  const result6 = payload(inviteCode[89]).openConjureHomeScreenWhenReady(payload.projectId);
                  flag = true;
                  const obj54 = payload(inviteCode[89]);
                }
              }
            }
          }
          pathname(() => {
            const result = instant_invite_InstantInviteUtils.showInstantInviteActionSheetForChannel(payload.channelId);
          });
          flag = true;
        }
      }
    }
    ({ guildId, channelId } = payload);
    conversationId = null;
    if (payload.type === constants2.MESSAGE) {
      ({ messageId, summaryId, conversationId } = payload);
    }
    flag = true;
    if (tmp128) {
      const obj44 = { guildId, channelId, messageId, navigationSettings: null, summaryId: null, conversationId: null };
      const obj45 = { safe, navigationReplace, waitForConnection, skipMessageFetch, isAppStartupNavigation };
      obj44.navigationSettings = obj45;
      obj44.summaryId = summaryId;
      obj44.conversationId = conversationId;
      rootNavigationRef1(inviteCode[30])(obj44);
      flag = true;
    }
    tmp128 = null != guildId && null != channelId;
  }
  if (flag) {
    const result7 = payload(inviteCode[90]).browserManagerCloseBrowser();
    const obj52 = payload(inviteCode[90]);
  }
  return flag;
};