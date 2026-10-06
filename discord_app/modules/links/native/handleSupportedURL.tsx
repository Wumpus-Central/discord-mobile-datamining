// === Module 13679: handleSupportedURL ===

// Module 13679 (handleSupportedURL)
import DispatcherDefault from "Dispatcher" /* 584 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1881 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4742 */;
import PaymentConstants from "PaymentConstants" /* 4875 */;
import Constants2 from "Constants" /* 4938 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5105 */;
import BoostingActionCreators from "BoostingActionCreators" /* 5619 */;
import QuestContent from "QuestContent" /* 5635 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 5955 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6688 */;
import openUserSettings from "openUserSettings" /* 6895 */;
import PremiumPlanPurchasedStore from "PremiumPlanPurchasedStore" /* 6940 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7062 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7065 */;
import AnalyticsActions from "AnalyticsActions" /* 7215 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8352 */;
import GameProfileActionCreators from "GameProfileActionCreators" /* 8358 */;
import DisplayedInviteActionCreators from "DisplayedInviteActionCreators" /* 8425 */;
import ApplicationUtils from "ApplicationUtils" /* 8741 */;
import Constants3 from "Constants" /* 8742 */;
import authorizeCallbackDefault from "authorizeCallback" /* 8743 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 9020 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9282 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 9383 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9494 */;
import QuestUtils from "QuestUtils" /* 10921 */;
import BountyActionCreators from "BountyActionCreators" /* 10962 */;
import guild_templates_GuildTemplateActionCreatorsDefault from "guild_templates/GuildTemplateActionCreators" /* 11415 */;
import FamilyCenterNativeUtils from "FamilyCenterNativeUtils" /* 11538 */;
import CreateGuildModalActionCreatorsDefault from "CreateGuildModalActionCreators" /* 12372 */;
import ShareScreenConstants from "ShareScreenConstants" /* 13680 */;
import MidjourneyOnboardingUtils from "MidjourneyOnboardingUtils" /* 13688 */;
import GuildSettingsPickerActionCreators from "GuildSettingsPickerActionCreators" /* 13718 */;
import AgeKeyReturnHandler from "AgeKeyReturnHandler" /* 13813 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7050 */;
import PremiumNitroNavigationStore from "PremiumNitroNavigationStore" /* 13220 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c2, c4, c7, c8, guildId;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let map1;
let closure_4 = ["code", "state"];
PostConnectionCallbackStore.addPostConnectionCallback;
let closure_9 = PremiumPlanPurchasedStore.handleMobileWebCheckoutStatus;
({ AnalyticEvents: closure_12, LinkingTypes: map1, Routes: closure_14, UserSettingsSections: closure_15, PlatformTypes: closure_16, ME: closure_17 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const StreamTypes = Constants2.StreamTypes;
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
let closure_21 = Constants3.OAUTH2_AUTHORIZE_MODAL_KEY;
let closure_22 = FamilyCenterConstants.FAMILY_CENTER_LINK_REQUEST_REGEX;
let closure_23 = PaymentConstants.MobileWebRedirectCheckoutDeepLinkActions;
const SHARE_SCREEN_MODAL_KEY = ShareScreenConstants.SHARE_SCREEN_MODAL_KEY;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let result = size.fileFinishedImporting("modules/links/native/handleSupportedURL.tsx");

export default function handleSupportedURL(payload) {
  let OAUTH2_AUTHORIZE;
  let channelId;
  let channelId2;
  let diceCount;
  let diceSides;
  let fingerprint;
  let flag;
  let guildId2;
  let isAppStartupNavigation;
  let messageId;
  let navigationReplace;
  let nonce;
  let obj23;
  let obj35;
  let obj40;
  let obj8;
  let regex;
  let safe;
  let skipMessageFetch;
  let summaryId;
  let waitForConnection;
  payload = payload.payload;
  ({ safe, navigationReplace, waitForConnection, skipMessageFetch, isAppStartupNavigation } = payload);
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
    const obj46 = payload(inviteCode[16]);
    let result = obj46.openContactSyncModalDeeplink();
    flag = true;
  } else if (constants2.COMPOSE_MESSAGE === type) {
    const obj42 = rootNavigationRef1(inviteCode[17]);
    const popAllResult = obj42.popAll();
    const obj43 = payload(inviteCode[18]);
    const rootNavigationRef = obj43.getRootNavigationRef();
    flag = true;
    if (null != rootNavigationRef) {
      let obj7 = { screen: "new-message", params: { sourcePage: "Deeplink" } };
      rootNavigationRef.navigate("friends", obj7);
      flag = true;
    }
  } else if (constants2.ADD_FRIENDS === type) {
    const obj37 = rootNavigationRef1(inviteCode[17]);
    obj37.popAll();
    const obj38 = payload(inviteCode[18]);
    const tmp158 = rootNavigationRef1;
    rootNavigationRef1 = obj38.getRootNavigationRef();
    const tmp159 = inviteCode;
    if (null == rootNavigationRef1) {
      const tmp158Result = tmp158(tmp159[19]);
      const result1 = tmp158Result.openAddFriendModalDeeplink();
      flag = true;
    } else if (rootNavigationRef1.isReady()) {
      let obj12 = { screen: "add-friends", params: { sourcePage: "Deeplink" } };
      rootNavigationRef1.navigate("friends", obj12);
      flag = true;
    } else {
      pathname(() => rootNavigationRef1.navigate("friends", { screen: "add-friends", params: { sourcePage: "Deeplink" } }));
      flag = true;
    }
  } else if (constants2.FRIENDS === type) {
    const obj32 = rootNavigationRef1(inviteCode[17]);
    obj32.popAll();
    const obj33 = payload(inviteCode[18]);
    rootNavigationRef2 = obj33.getRootNavigationRef();
    const tmp150 = inviteCode;
    const tmp152 = payload;
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
      const obj15 = { userId: payload.userId };
      const tmp152Result = tmp152(tmp150[20]);
      const result2 = tmp152Result.showUserProfileActionSheetPostConnection(obj15);
      flag = true;
    }
  } else if (constants2.EDIT_PROFILE === type) {
    pathname(() => {
      const obj = rootNavigationRef1(inviteCode[17]);
      obj.popAll();
      const obj2 = payload(inviteCode[21]);
      const obj3 = { screen: constants3.PROFILE_CUSTOMIZATION };
      obj2.openUserSettings(obj3);
    });
    flag = true;
  } else if (constants2.BADGE_DIRECTORY === type) {
    pathname(() => {
      const obj = rootNavigationRef1(inviteCode[17]);
      obj.popAll();
      const obj2 = payload(inviteCode[22]);
      const result = obj2.openBadgeDirectoryScreen();
    });
    flag = true;
  } else if (constants2.INVITE === type) {
    inviteCode = payload.inviteCode;
    username = payload.username;
    deeplinkAttemptId = payload.deeplinkAttemptId;
    if (!rootNavigationRef3.isAuthenticated()) {
      if (null != inviteCode) {
        const obj17 = { deeplinkAttemptId, location: "Deep Link" };
        const obj30 = payload(inviteCode[23]);
        obj30.showInvite(inviteCode, username, obj17);
        flag = true;
      }
    }
    pathname(() => {
      const obj = guild_templates_GuildTemplateActionCreatorsDefault;
      obj.hideModal();
      if (null != inviteCode) {
        const obj2 = KeyboardManagerUtils;
        const result = obj2.dismissGlobalKeyboard();
        const obj4 = { deeplinkAttemptId, location: "Deep Link" };
        const obj3 = DisplayedInviteActionCreators;
        obj3.showInvite(tmp3, username, obj4);
      }
    });
    flag = true;
  } else if (constants2.GUILD_TEMPLATE === type) {
    guildTemplateCode = payload.guildTemplateCode;
    pathname(() => {
      const obj = DisplayedInviteActionCreators;
      obj.clearDisplayedInvite();
      if (null != guildTemplateCode) {
        const tmpResult = KeyboardManagerUtils;
        const result = tmpResult.dismissGlobalKeyboard();
        const obj3 = guild_templates_GuildTemplateActionCreatorsDefault;
        obj3.showModal(tmp4);
      }
    });
    flag = true;
  } else if (constants2.GIFT_CODE === type) {
    let giftCode = payload.giftCode;
    let flag3 = null != giftCode;
    if (flag3) {
      const obj29 = payload(inviteCode[26]);
      const giftCode1 = obj29.resolveGiftCode(giftCode);
      let nextPromise = giftCode1.then((giftCode) => {
        giftCode = giftCode.giftCode;
        const obj = rootNavigationRef1(inviteCode[27]);
        obj.track(constants.OPEN_MODAL, { type: "gift_accept", location: null });
        const obj2 = payload(inviteCode[28]);
        const result = obj2.openGiftCodeRedeemModal(giftCode.code);
      });
      nextPromise.catch(() => {

      });
      flag3 = true;
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
      const obj26 = payload(inviteCode[29]);
      obj26.startDiceRoll(channelId2, diceCount, diceSides);
      const obj22 = { guildId: guildId2, channelId: channelId2, messageId: "Array", navigationSettings: obj23 };
      obj23 = { safe, navigationReplace, waitForConnection, skipMessageFetch, isAppStartupNavigation };
      rootNavigationRef1(inviteCode[30])(obj22);
      flag2 = true;
    }
    flag = flag2;
  } else {
    if (constants2.CHANNEL !== type) {
      if (constants2.MESSAGE !== type) {
        if (constants2.SESSION_MANAGEMENT === type) {
          pathname(() => {
            const obj = rootNavigationRef1(inviteCode[17]);
            obj.popAll();
            const obj2 = payload(inviteCode[21]);
            const obj3 = { screen: constants3.SESSIONS };
            obj2.openUserSettings(obj3);
          });
          flag = true;
        } else if (constants2.FAMILY_CENTER === type) {
          let obj24 = payload;
          if (payload == null) {
            obj24 = {};
          }
          pathname = obj24.pathname;
          let tmp116 = null;
          if (undefined !== pathname) {
            tmp116 = pathname;
          }
          pathname = tmp116;
          pathname(() => {
            const obj = ModalActionCreatorsDefault;
            obj.popAll();
            const obj2 = openUserSettings;
            const obj3 = { screen: constants2.FAMILY_CENTER };
            obj2.openUserSettings(obj3);
            const isMatch = null != pathname && regex.test(pathname);
            if (isMatch) {
              const tmp3Result = FamilyCenterNativeUtils;
              const result = tmp3Result.handleFamilyCenterQRCodeScan(pathname, "NativeCameraScan");
            }
          });
          flag = true;
        } else if (constants2.OAUTH2_AUTHORIZE === type) {
          pathname(() => {
            let type;
            let obj = ModalActionCreatorsDefault;
            obj.popAll();
            let obj2 = MidjourneyOnboardingUtils;
            if (obj2.isMidjourneyOnboardingFlow()) {
              const tmpResult = CreateGuildModalActionCreatorsDefault;
              tmpResult.openCreateGuildModal((guildId) => {
                if (type.type === OAUTH2_AUTHORIZE.OAUTH2_AUTHORIZE) {
                  let obj = rootNavigationRef1(inviteCode[17]);
                  obj.popAll();
                  const pushLazy = rootNavigationRef1(inviteCode[17]).pushLazy;
                  const obj2 = {
                    guildId,
                    callback: rootNavigationRef1(inviteCode[36]),
                    dismissOAuthModal() {
                        const obj = closure_1_1(closure_1_3[17]);
                        obj.popWithKey(closure_1_21);
                      }
                  };
                  rootNavigationRef1(inviteCode[17]);
                  const tmp8 = payload(inviteCode[35])(inviteCode[34], inviteCode.paths);
                  const merged = Object.assign(tmp.props);
                  pushLazy(tmp8, obj2, closure_2_21);
                }
              });
            } else {
              const obj3 = { callback: authorizeCallbackDefault };
              const openOAuth2Modal = ApplicationUtils.openOAuth2Modal;
              ApplicationUtils;
              let merged = Object.assign(payload.props);
              openOAuth2Modal(obj3);
            }
          });
          flag = true;
        } else if (constants2.ONE_TIME_LOGIN === type) {
          const obj20 = rootNavigationRef1(inviteCode[17]);
          obj20.popAll();
          const obj25 = { token: payload.token };
          const obj21 = rootNavigationRef1(inviteCode[17]);
          obj21.pushLazy(payload(inviteCode[35])(inviteCode[38], inviteCode.paths), obj25, "ONE_TIME_LOGIN_MODAL");
          flag = true;
        } else if (constants2.REMOTE_AUTH === type) {
          remoteAuthFingerprint = payload.remoteAuthFingerprint;
          pathname(null != remoteAuthFingerprint ? (() => {
            const obj = ModalActionCreatorsDefault;
            const obj2 = { remoteAuthFingerprint };
            obj.pushLazy(asyncRequire(13692, dependencyMap.paths), obj2, "REMOTE_AUTH_MODAL");
          }) : (() => {
            let paths;
            let obj = payload(inviteCode[40]);
            const tmp3 = obj.isMetaQuest() ? NativePermissionTypes.HEADSET_CAMERA : NativePermissionTypes.CAMERA;
            const obj2 = rootNavigationRef1(inviteCode[41]);
            const permission = obj2.requestPermission(tmp3);
            const nextPromise = permission.then((result) => {
              const tmp = result;
              if (tmp) {
                const obj = rootNavigationRef1(paths[17]);
                obj.pushLazy(payload(paths[35])(paths[42], paths.paths), { showHelp: true });
              }
            });
            nextPromise.catch(() => {

            });
          }));
          flag = true;
        } else if (constants2.PROMOTIONS === type) {
          const obj19 = rootNavigationRef1(inviteCode[43]);
          obj19.performURLNavigation(payload.url);
          flag = true;
        } else if (constants2.FEATURE_PROMO_URL === type) {
          const obj18 = rootNavigationRef1(inviteCode[43]);
          obj18.openURLExternally(payload.promoUrl);
          flag = true;
        } else if (constants2.USER_PROFILE === type) {
          flag = true;
          if (null != payload.userId) {
            const obj27 = { userId: payload.userId };
            const obj16 = payload(inviteCode[20]);
            const result3 = obj16.showUserProfileActionSheetPostConnection(obj27);
            flag = true;
          }
        } else if (constants2.BUILD_OVERRIDE === type) {
          const overrideUrl = payload.overrideUrl;
          const obj13 = rootNavigationRef1(inviteCode[17]);
          obj13.popAll();
          const obj28 = { overrideUrl };
          const obj14 = rootNavigationRef1(inviteCode[17]);
          obj14.pushLazy(payload(inviteCode[35])(inviteCode[44], inviteCode.paths), obj28);
          flag = true;
        } else if (constants2.GUILD_EVENT_DETAILS === type) {
          pathname(guildTemplateCode(function*() {
            let c0;
            let c1;
            let closure_1;
            let guildScheduledEvent;
            let paths;
            if (c4 === 2) {
              c4 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj4 = { value, done: true };
                return obj4;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                let event;
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
                    c0 = undefined;
                    c1 = undefined;
                    event = undefined;
                    const obj11 = tmp2(paths[17]);
                    obj11.popAll();
                    ({ guildId: c0, guildEventId: c1 } = payload);
                    paths = 1;
                    c4 = 1;
                    const obj7 = { value: guildScheduledEvent(paths[35])(paths[45], paths.paths), done: false };
                    return obj7;
                  }
                } else {
                  if (1 === tmp5) {
                    if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      const obj8 = { value, done: true };
                      return obj8;
                    } else {
                      const _default = value.default;
                      if (null != _default.getGuild(c0)) {
                        const obj2 = guildScheduledEvent(paths[46]);
                        obj2.transitionToGuild(c0);
                      }
                      guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(c1);
                      if (guildScheduledEvent == null) {
                        const obj5 = tmp2(paths[47]);
                        paths = 2;
                        c4 = 1;
                        const obj9 = { value: obj5.fetchGuildEvent(c0, c1), done: false };
                        return obj9;
                      }
                    }
                  } else if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    guildScheduledEvent = value;
                  }
                  event = guildScheduledEvent;
                  if (null != event) {
                    const obj10 = { eventId: event.id, event };
                    const obj3 = guildScheduledEvent(paths[48]);
                    const result = obj3.openGuildEventDetails(obj10);
                  }
                  c4 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp34) {
                c4 = 3;
                throw tmp34;
              }
            }
          }));
          flag = true;
        } else if (constants2.MOBILE_WEB_HANDOFF === type) {
          const redirectUrl = payload.redirectUrl;
          ({ nonce, fingerprint } = payload);
          let obj11 = rootNavigationRef1(inviteCode[49]);
          const _HermesInternal = HermesInternal;
          const obj31 = { nonce, fingerprint, skipLoginRedirect: true };
          const result4 = obj11.redirectWithHandoffToken("" + redirectUrl.pathname + redirectUrl.search, obj31);
          flag = true;
        } else if (constants2.VOICE_CHANNEL === type) {
          pathname(guildTemplateCode(function*() {
            let closure_0;
            let v1;
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
                if (0 === v1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    const tmp18 = null != payload.guildId && null != payload.channelId && null != payload.userId;
                    if (tmp18) {
                      const obj5 = v1(paths[17]);
                      obj5.popAll();
                      v1 = 1;
                      c2 = 1;
                      const obj6 = { value: tmp3(paths[35])(paths[45], paths.paths), done: false };
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
                  const _default = value.default;
                  if (null != _default.getGuild(closure_128_0.guildId)) {
                    const obj = tmp3(paths[46]);
                    obj.transitionToGuild(closure_128_0.guildId);
                  }
                  const obj8 = { streamType: constants.GUILD, ownerId: closure_128_0.userId, guildId: closure_128_0.guildId, channelId: closure_128_0.channelId };
                  v1(paths[50])(obj8);
                }
                const tmp22 = "transfer_cancelled" === closure_128_0.action && "xbox" === closure_128_0.via;
                if (tmp22) {
                  const obj4 = tmp3(paths[51]);
                  obj4.disconnectRemote();
                }
                c2 = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp36) {
                c2 = 3;
                throw tmp36;
              }
            }
          }));
          flag = true;
        } else if (constants2.ICYMI === type) {
          pathname(() => {
            const obj = payload(inviteCode[52]);
            obj.navigateToRootTab({ screen: "icymi" });
          });
          flag = true;
        } else if (constants2.GUILD_HOME === type) {
          flag = true;
          if (null != payload.guildId) {
            let tmp71;
            if (null != payload.highlightChannelId) {
              if (null != payload.highlightMessageId) {
                const obj34 = { search: obj8.stringify(obj35) };
                obj8 = payload(inviteCode[53]);
                obj35 = { highlight_channel_id: null, highlight_message_id: null };
                ({ highlightChannelId: obj9.highlight_channel_id, highlightMessageId: obj9.highlight_message_id } = payload);
                tmp71 = obj34;
              }
            }
            let obj10 = payload(inviteCode[54]);
            obj10.transitionTo(closure_14.CHANNEL(payload.guildId, StaticChannelRoute.GUILD_HOME), tmp71);
            flag = true;
          }
        } else if (constants2.USER_CONNECTIONS_LINK_CALLBACK === type) {
          pathname(() => {
            let hasItem = null != payload.callbackCode && null != payload.callbackState && null != payload.provider;
            if (hasItem) {
              const items = [, , , ];
              ({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = authStore3);
              hasItem = items.includes(payload.provider);
            }
            if (hasItem) {
              const obj3 = { type: "USER_CONNECTIONS_LINK_CALLBACK", provider: null, callbackCode: null, callbackState: null };
              ({ provider: obj2.provider, callbackCode: obj2.callbackCode, callbackState: obj2.callbackState } = payload);
              const obj = DispatcherDefault;
              obj.dispatch(obj3);
            }
          });
          flag = true;
        } else if (constants2.USER_CONNECTIONS_CALLBACK === type) {
          pathname(guildTemplateCode(function*() {
            let closure_0;
            let closure_1;
            let closure_3;
            let closure_5;
            let obj8;
            if (c8 === 2) {
              c8 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
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
                    let closure_6 = tmp4;
                    payload = undefined;
                    rootNavigationRef1 = undefined;
                    const searchParams = payload.searchParams;
                    const state = searchParams.state;
                    const provider = payload.provider;
                    const code = searchParams.code;
                    const tmp49 = tmp(searchParams, obj3);
                    if (null != state) {
                      let closure_2;
                      const obj7 = { code, state };
                      rootNavigationRef1 = tmp49;
                      const keys = Object.keys();
                      const tmp9 = tmp49;
                      if (keys === undefined) {
                        inviteCode = tmp11;
                        closure_2 = tmp10;
                        rootNavigationRef1 = tmp49;
                        payload = keys;
                      } else {
                        inviteCode = tmp11;
                        closure_2 = tmp10;
                        rootNavigationRef1 = tmp9;
                        payload = keys;
                        while (payload[closure_2] !== undefined) {
                          inviteCode = tmp16;
                          closure_2 = tmp15;
                          rootNavigationRef1 = tmp14;
                          payload = tmp13;
                          if (!obj3.startsWith("openid.")) {
                            continue;
                          } else {
                            let obj9 = tmp18;
                            if (null == tmp18) {
                              obj9 = {};
                            }
                            obj9[obj3] = searchParams[obj3];
                            continue;
                          }
                          continue;
                        }
                        inviteCode = tmp16;
                        closure_2 = tmp15;
                        rootNavigationRef1 = tmp14;
                        payload = tmp13;
                      }
                      if (null != tmp18) {
                        obj7.openid_params = tmp18;
                      }
                      const obj5 = rootNavigationRef1(inviteCode[17]);
                      obj5.popAll();
                      const obj10 = { screen: constants.CONNECTIONS };
                      const obj6 = payload(inviteCode[21]);
                      obj6.openUserSettings(obj10);
                      c7 = 1;
                      c8 = 1;
                      const obj11 = { value: obj8.callback(provider, obj7), done: false };
                      obj8 = rootNavigationRef1(inviteCode[56]);
                      return obj11;
                    }
                  }
                } else if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c8 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  payload = value;
                  const body = payload.body;
                  let redirect;
                  const toURLSafe = rootNavigationRef1(inviteCode[57]).toURLSafe;
                  const tmp37 = rootNavigationRef1(inviteCode[57]);
                  if (body != null) {
                    redirect = body.redirect;
                  }
                  rootNavigationRef1 = toURLSafe(redirect);
                  if (null != rootNavigationRef1) {
                    const obj12 = rootNavigationRef1(inviteCode[43]);
                    obj12.openURL(rootNavigationRef1.toString());
                  }
                }
                c8 = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp29) {
                c8 = 3;
                throw tmp29;
              }
            }
          }));
          flag = true;
        } else if (constants2.CONNECTIONS === type) {
          pathname(() => {
            const obj = rootNavigationRef1(inviteCode[17]);
            obj.popAll();
            const obj2 = payload(inviteCode[21]);
            const obj3 = { screen: constants3.CONNECTIONS };
            obj2.openUserSettings(obj3);
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
          let tmp58 = rootNavigationRef1;
          let tmp59 = inviteCode;
          let obj6 = rootNavigationRef1(inviteCode[59]);
          obj6.showModal(payload.userCode);
          flag = true;
        } else if (constants2.GUILD_SETTINGS_PICKER === type) {
          let tmp56 = pathname;
          let tmp57 = pathname(() => {
            const obj = GuildSettingsPickerActionCreators;
            const obj2 = { section: payload.settingsSection, subsection: payload.settingsSubsection, feature: payload.feature };
            const result = obj.openGuildSettingsPickerModal(obj2);
          });
          flag = true;
        } else if (constants2.SHARE === type) {
          let tmp49 = inviteCode;
          let obj2 = payload(inviteCode[61]);
          flag = true;
          const tmp48 = payload;
          if (obj2.isIOS()) {
            let obj3 = rootNavigationRef1(tmp49[17]);
            obj3.popAll();
            let obj4 = rootNavigationRef1(tmp49[17]);
            const obj36 = { text: null, channelId: null, shareId: null, attachmentManifest: null };
            ({ text: obj5.text, channelId: obj5.channelId, shareId: obj5.shareId, attachmentManifest: obj5.attachmentManifest } = payload);
            obj4.pushLazy(tmp48(tmp49[35])(tmp49[62], tmp49.paths), obj36, SHARE_SCREEN_MODAL_KEY, { presentation: "modal" });
            flag = true;
          }
        } else {
          if (constants2.CREATE_VOICE_INVITE !== type) {
            if (constants2.SEND_VOICE_HANGOUT_WAVE !== type) {
              if (constants2.ACCOUNT_STANDING === type) {
                pathname(() => {
                  const obj = rootNavigationRef1(inviteCode[17]);
                  obj.popAll();
                  const obj2 = payload(inviteCode[64]);
                  obj2.openAccountStanding();
                });
                flag = true;
              } else if (constants2.MOBILE_NATIVE_UPDATE === type) {
                let obj = rootNavigationRef2(inviteCode[65]);
                const result5 = obj.openBuildInstallerUrl(payload.url);
                flag = true;
              } else if (constants2.MOBILE_WEB_REDIRECT_CHECKOUT === type) {
                deepLinkAction = payload.deepLinkAction;
                pathname(guildTemplateCode(function*() {
                  let closure_0;
                  let closure_1;
                  let paths;
                  if (paths === 2) {
                    paths = 3;
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
                      let tmp;
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
                          tmp = undefined;
                          if (deepLinkAction === constants.PREMIUM_CHECKOUT_SUCCESS) {
                            deepLinkAction("succeeded");
                          } else if (deepLinkAction === constants.PREMIUM_SUBSCRIPTION_UPDATE) {
                            const obj3 = tmp2(paths[66]);
                            const subscriptions = obj3.fetchSubscriptions();
                          } else if (deepLinkAction === constants.GUILD_BOOST_CHECKOUT_SUCCESS) {
                            const obj7 = tmp(paths[17]);
                            obj7.popAll();
                            guildId = payload.guildId;
                            c2 = 1;
                            paths = 1;
                            const obj5 = { value: tmp2(paths[35])(paths[45], paths.paths), done: false };
                            return obj5;
                          }
                        }
                      } else if (arg0 === 1) {
                        paths = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        paths = 3;
                        const obj = { value, done: true };
                        return obj;
                      } else {
                        const _default = value.default;
                        tmp = _default.getGuild(guildId);
                        if (null != tmp) {
                          const obj6 = tmp2(paths[46]);
                          obj6.transitionToGuild(guildId);
                          tmp(paths[67])(tmp);
                        }
                      }
                      paths = 3;
                      return { value: "IconComponent", done: null };
                    } catch (tmp15) {
                      paths = 3;
                      throw tmp15;
                    }
                  }
                }));
                flag = true;
              } else if (constants2.SHOP === type) {
                const tmp36 = pathname;
                let tmp37 = pathname(() => {
                  let items;
                  const obj = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.DEEPLINK, screen: null, initialProductSkuId: null };
                  const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
                  items = [];
                  CollectiblesActionCreators;
                  items[0] = AnalyticsLocationDefault.DEEPLINK;
                  ({ screen: obj.screen, skuId: obj.initialProductSkuId } = payload);
                  const result = openCollectiblesShopMobile(obj);
                });
                flag = true;
              } else if (constants2.AUTHORIZED_APPS === type) {
                const tmp34 = pathname;
                pathname(() => {
                  const obj = rootNavigationRef1(inviteCode[17]);
                  obj.popAll();
                  const obj2 = payload(inviteCode[21]);
                  const obj3 = { screen: constants3.AUTHORIZED_APPS };
                  obj2.openUserSettings(obj3);
                });
                flag = true;
              } else if (constants2.DAVE_PROTOCOL_VERIFICATION === type) {
                pathname(() => {
                  let fingerprint;
                  const obj = { userId: payload.userId, fingerprint: fingerprint.replaceAll(" ", "+") };
                  fingerprint = payload.fingerprint;
                  const handleSecureFramesUserVerificationLink = SecureFramesPlatformUtilsDefault.handleSecureFramesUserVerificationLink;
                  SecureFramesPlatformUtilsDefault;
                  const result = handleSecureFramesUserVerificationLink(obj);
                });
                flag = true;
              } else if (constants2.AGE_VERIFICATION_AGEKEY_RETURN === type) {
                pathname(() => {
                  const obj = AgeKeyReturnHandler;
                  const obj2 = { result: payload.result, ageKeySaved: payload.ageKeySaved, verificationId: payload.verificationId };
                  obj.handleAgeKeyReturn(obj2);
                });
                flag = true;
              } else if (constants2.QUESTS === type) {
                const tmp29 = pathname(() => {
                  let obj2;
                  let tmp11;
                  let tmp12;
                  if (null != payload.questId) {
                    const obj = { questId: payload.questId, event: constants.QUEST_SHARE_LINK_DEEP_LINKED_INTO_MOBILE_CLIENT, sourceQuestContent: QuestContent.QuestContent.QUEST_EMBED_MOBILE, properties: obj2 };
                    const trackQuestEvent = AnalyticsActions.trackQuestEvent;
                    AnalyticsActions;
                    obj2 = { referrer_id: payload.referrerId };
                    trackQuestEvent(obj);
                  }
                  let sort;
                  if (payload != null) {
                    sort = payload.sort;
                  }
                  let filter;
                  if (payload != null) {
                    filter = payload.filter;
                  }
                  const obj3 = { scrollToQuestId: payload.questId, sort: tmp11, filter: tmp12, fromContent: QuestContent.QuestContent.QUEST_SHARE_LINK };
                  tmp11 = null;
                  const openQuestHome = QuestUtils.openQuestHome;
                  QuestUtils;
                  if (null != sort) {
                    tmp11 = null;
                    if ("" !== sort) {
                      tmp11 = sort;
                    }
                  }
                  tmp12 = null;
                  if (null != filter) {
                    tmp12 = null;
                    if ("" !== filter) {
                      tmp12 = filter;
                    }
                  }
                  openQuestHome(obj3);
                });
                flag = true;
              } else if (constants2.QUEST_HOME_PREVIEW === type) {
                pathname(() => {
                  let obj3;
                  const obj2 = { screen: constants2.QUESTS, params: obj3 };
                  obj3 = { previewAdCreativeIds: payload.adCreativeIds };
                  const obj = openUserSettings;
                  obj.openUserSettings(obj2);
                });
                flag = true;
              } else if (constants2.QUEST_BAR_PREVIEW === type) {
                pathname(() => {
                  const obj = ModalActionCreatorsDefault;
                  obj.popAll();
                  const obj2 = NavigationRouteUtils;
                  const obj3 = { screen: "guilds", guildId };
                  obj2.navigateToRootTab(obj3);
                  const obj4 = BountyActionCreators;
                  const dockCreativePreview = obj4.fetchDockCreativePreview(payload.adCreativeId);
                });
                flag = true;
              } else if (constants2.GIFT === type) {
                let tmp22 = pathname;
                pathname(() => {
                  let items;
                  const obj = { analyticsLocations: items };
                  const openGiftModal = payload(inviteCode[76]).openGiftModal;
                  items = [];
                  payload(inviteCode[76]);
                  items[0] = rootNavigationRef1(inviteCode[69]).DEEPLINK;
                  openGiftModal(obj);
                });
                flag = true;
              } else if (constants2.NITRO_HOME === type) {
                pathname(() => {
                  const section = payload.section;
                  const setState = PremiumNitroNavigationStore.setState;
                  setState({ scrollToSectionId: section });
                  const obj = openUserSettings;
                  const obj2 = { screen: constants2.PREMIUM };
                  obj.openUserSettings(obj2);
                });
                flag = true;
              } else if (constants2.ACTIVITY === type) {
                let tmp18 = inviteCode;
                let tmp19 = rootNavigationRef1(inviteCode[77])(payload.applicationId, payload.referrerId, payload.customId, payload.linkId, payload.isDeepLink);
                flag = true;
              } else if (constants2.CONNECTED_GAMES === type) {
                const tmp15 = pathname;
                const tmp16 = pathname(() => {
                  let obj4;
                  const obj = rootNavigationRef1(inviteCode[17]);
                  obj.popAll();
                  const obj3 = { screen: constants3.CONTENT_AND_SOCIAL, params: obj4 };
                  obj4 = { tab: constants2.CONNECTED_GAMES };
                  const obj2 = payload(inviteCode[21]);
                  obj2.openUserSettings(obj3);
                });
                flag = true;
              } else if (constants2.BOOST_MARKETING === type) {
                const tmp13 = pathname;
                const tmp14 = pathname(() => {
                  const obj = BoostingActionCreators;
                  obj.openApplyBoostModal(payload.guildId);
                });
                flag = true;
              } else if (constants2.BOOST_SETTINGS === type) {
                let tmp11 = pathname;
                let tmp12 = pathname(() => {
                  const obj = rootNavigationRef1(inviteCode[17]);
                  obj.popAll();
                  const obj2 = payload(inviteCode[21]);
                  const obj3 = { screen: constants3.GUILD_BOOSTING };
                  obj2.openUserSettings(obj3);
                });
                flag = true;
              } else if (constants2.QUEST_PREVIEW_TOOL === type) {
                let tmp9 = pathname;
                const tmp10 = pathname(() => {
                  let questId;
                  let obj = ModalActionCreatorsDefault;
                  obj.popAll();
                  closeVoicePanelsDefault();
                  const timerId = setTimeout(() => {
                    let obj3;
                    const obj2 = { screen: constants3.QUEST_PREVIEW_TOOL_2, params: obj3 };
                    obj3 = { questId: questId.questId };
                    const obj = payload(inviteCode[21]);
                    obj.openUserSettings(obj2);
                  }, 1);
                });
                flag = true;
              } else if (constants2.SUBSCRIPTION_SETTINGS === type) {
                let tmp8 = pathname(() => {
                  const obj = rootNavigationRef1(inviteCode[17]);
                  obj.popAll();
                  const obj2 = payload(inviteCode[21]);
                  const obj3 = { screen: constants3.GUILD_ROLE_SUBSCRIPTIONS };
                  obj2.openUserSettings(obj3);
                });
                flag = true;
              } else if (constants2.GAME_PROFILE === type) {
                gameId = payload.gameId;
                const tmp5 = pathname;
                const tmp6 = pathname(() => {
                  const obj = ModalActionCreatorsDefault;
                  obj.popAll();
                  const GameProfileSources = GameProfileAnalyticUtils.GameProfileSources;
                  const _default = GameProfileActionCreators.default;
                  const obj2 = { gameId, source: GameProfileSources.Deeplink, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId } };
                  _default.openGameProfileModal(obj2);
                });
                flag = true;
              } else {
                flag = false;
                if (constants2.MESSAGE_REQUESTS === type) {
                  const obj48 = rootNavigationRef1(inviteCode[17]);
                  obj48.popAll();
                  const obj49 = payload(inviteCode[18]);
                  rootNavigationRef3 = obj49.getRootNavigationRef();
                  flag = true;
                  if (null != rootNavigationRef3) {
                    if (rootNavigationRef3.isReady()) {
                      rootNavigationRef3.navigate("message-requests");
                      flag = true;
                    } else {
                      const tmp2 = pathname;
                      let tmp3 = pathname(() => {
                        rootNavigationRef3.navigate("message-requests");
                      });
                      flag = true;
                    }
                  }
                }
              }
            }
          }
          pathname(() => {
            const obj = instant_invite_InstantInviteUtils;
            const result = obj.showInstantInviteActionSheetForChannel(payload.channelId);
          });
          flag = true;
        }
      }
    }
    ({ guildId, channelId } = payload);
    if (payload.type === constants2.MESSAGE) {
      ({ messageId, summaryId } = payload);
    }
    flag = true;
    const tmp122 = null != guildId && null != channelId;
    if (tmp122) {
      const obj39 = { guildId, channelId, messageId, navigationSettings: obj40, summaryId };
      obj40 = { safe, navigationReplace, waitForConnection, skipMessageFetch, isAppStartupNavigation };
      rootNavigationRef1(inviteCode[30])(obj39);
      flag = true;
    }
  }
  if (flag) {
    const obj47 = payload(inviteCode[82]);
    const result6 = obj47.browserManagerCloseBrowser();
  }
  return flag;
};