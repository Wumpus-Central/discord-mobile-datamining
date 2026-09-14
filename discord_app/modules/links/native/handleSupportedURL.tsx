// discord_app/modules/links/native/handleSupportedURL.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import KeyboardManagerUtils from "../../../utils/native/KeyboardManagerUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import actions_BoostingActionCreators from "../../../actions/native/BoostingActionCreators.tsx";
import QuestContent from "../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import CollectiblesActionCreators from "../../collectibles/CollectiblesActionCreators.tsx";
import AnalyticsActions from "../../quests/lib/analytics/AnalyticsActions.tsx";
import GameProfileActionCreators from "../../game_profile/GameProfileActionCreators.native.tsx";
import GameProfileAnalyticUtils from "../../game_profile/GameProfileAnalyticUtils.tsx";
import DisplayedInviteActionCreators from "../../../actions/native/DisplayedInviteActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../guild_settings/GuildSettingsActionCreators.tsx";
import SecureFramesPlatformUtilsDefault from "../../rtc/SecureFramesPlatformUtils.native.tsx";
import closeVoicePanelsDefault from "../../voice_panel/native/utils/closeVoicePanels.tsx";
import ApplicationUtils from "../../../utils/native/ApplicationUtils.tsx";
import authorizeCallbackDefault from "../../oauth2/native/authorizeCallback.tsx";
import instant_invite_InstantInviteUtils from "../../instant_invite/native/InstantInviteUtils.tsx";
import BountyActionCreators from "../../quests/BountyActionCreators.tsx";
import QuestUtils from "../../quests/native/QuestUtils.native.tsx";
import guild_templates_GuildTemplateActionCreatorsDefault from "../../guild_templates/native/GuildTemplateActionCreators.tsx";
import FamilyCenterNativeUtils from "../../parent_tools/native/FamilyCenterNativeUtils.tsx";
import CreateGuildModalActionCreatorsDefault from "../../create_guild/native/CreateGuildModalActionCreators.tsx";
import MidjourneyOnboardingUtils from "../../midjourney_onboarding/MidjourneyOnboardingUtils.tsx";
import GuildSettingsPickerActionCreators from "../../guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import GuildScheduledEventStore from "../../guild_scheduled_events/GuildScheduledEventStore.tsx";
import PremiumNitroNavigationStore from "../../user_settings/premium/native/PremiumNitroNavigationStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
let closure_4 = ["code", "state"];
fn(5639).addPostConnectionCallback;
let closure_9 = fn(7524).handleMobileWebCheckoutStatus;
const Constants = fn(1074);
({
  AnalyticEvents: closure_12,
  LinkingTypes: map1,
  Routes: closure_14,
  UserSettingsSections: closure_15,
  PlatformTypes: closure_16,
  ME: closure_17,
} = Constants);
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const StreamTypes = fn(4678).StreamTypes;
const NativePermissionTypes = fn(4846).NativePermissionTypes;
let closure_21 = fn(9704).OAUTH2_AUTHORIZE_MODAL_KEY;
let closure_22 = fn(7641).FAMILY_CENTER_LINK_REQUEST_REGEX;
let closure_23 = fn(4618).MobileWebRedirectCheckoutDeepLinkActions;
const SHARE_SCREEN_MODAL_KEY = fn(13940).SHARE_SCREEN_MODAL_KEY;
const MobileUserSettings = fn(8079).MobileUserSettings;
const size = fn(2);
let result = size.fileFinishedImporting("modules/links/native/handleSupportedURL.tsx");

export default function handleSupportedURL(payload) {
  payload = payload.payload;
  ({ safe, navigationReplace, waitForConnection, skipMessageFetch } = payload);
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
    const obj46 = payload(inviteCode[16]);
  } else if (constants2.COMPOSE_MESSAGE === type) {
    rootNavigationRef1(inviteCode[17]).popAll();
    const obj42 = rootNavigationRef1(inviteCode[17]);
    const rootNavigationRef = payload(inviteCode[18]).getRootNavigationRef();
    flag = true;
    if (null != rootNavigationRef) {
      let obj7 = { screen: "new-message", params: { sourcePage: "Deeplink" } };
      rootNavigationRef.navigate("friends", obj7);
      flag = true;
    }
    const obj43 = payload(inviteCode[18]);
  } else if (constants2.ADD_FRIENDS === type) {
    rootNavigationRef1(inviteCode[17]).popAll();
    const obj37 = rootNavigationRef1(inviteCode[17]);
    const tmp154 = rootNavigationRef1;
    const tmp155 = inviteCode;
    rootNavigationRef1 = payload(inviteCode[18]).getRootNavigationRef();
    if (null == rootNavigationRef1) {
      const result1 = tmp154(tmp155[19]).openAddFriendModalDeeplink();
      flag = true;
      const tmp154Result = tmp154(tmp155[19]);
    } else if (rootNavigationRef1.isReady()) {
      let obj12 = { screen: "add-friends", params: { sourcePage: "Deeplink" } };
      rootNavigationRef1.navigate("friends", obj12);
      flag = true;
    } else {
      pathname(() =>
        rootNavigationRef1.navigate("friends", { screen: "add-friends", params: { sourcePage: "Deeplink" } }),
      );
      flag = true;
    }
    const obj38 = payload(inviteCode[18]);
  } else if (constants2.FRIENDS === type) {
    rootNavigationRef1(inviteCode[17]).popAll();
    const obj32 = rootNavigationRef1(inviteCode[17]);
    const tmp146 = inviteCode;
    const tmp148 = payload;
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
      const obj15 = { userId: payload.userId };
      const result2 = tmp148(tmp146[20]).showUserProfileActionSheetPostConnection(obj15);
      flag = true;
      const tmp148Result = tmp148(tmp146[20]);
    }
    const obj33 = payload(inviteCode[18]);
  } else if (constants2.EDIT_PROFILE === type) {
    pathname(() => {
      rootNavigationRef1(inviteCode[17]).popAll();
      const obj = rootNavigationRef1(inviteCode[17]);
      payload(inviteCode[21]).openUserSettings({ screen: constants3.PROFILE_CUSTOMIZATION });
    });
    flag = true;
  } else if (constants2.INVITE === type) {
    inviteCode = payload.inviteCode;
    username = payload.username;
    deeplinkAttemptId = payload.deeplinkAttemptId;
    if (!rootNavigationRef3.isAuthenticated()) {
      if (null != inviteCode) {
        const obj17 = { deeplinkAttemptId, location: "Deep Link" };
        payload(inviteCode[22]).showInvite(inviteCode, username, obj17);
        flag = true;
        const obj30 = payload(inviteCode[22]);
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
      const giftCode1 = payload(inviteCode[25]).resolveGiftCode(giftCode);
      const obj29 = payload(inviteCode[25]);
      giftCode1
        .then((giftCode) => {
          rootNavigationRef1(inviteCode[26]).track(constants.OPEN_MODAL, { type: "gift_accept", location: null });
          const obj = rootNavigationRef1(inviteCode[26]);
          const result = payload(inviteCode[27]).openGiftCodeRedeemModal(giftCode.giftCode.code);
        })
        .catch(() => {});
      flag3 = true;
      let nextPromise = giftCode1.then((giftCode) => {
        rootNavigationRef1(inviteCode[26]).track(constants.OPEN_MODAL, { type: "gift_accept", location: null });
        const obj = rootNavigationRef1(inviteCode[26]);
        const result = payload(inviteCode[27]).openGiftCodeRedeemModal(giftCode.giftCode.code);
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
      payload(inviteCode[28]).startDiceRoll(channelId2, diceCount, diceSides);
      const obj22 = { guildId: guildId2, channelId: channelId2, messageId: "Array", navigationSettings: -892403711 };
      const obj23 = { safe, navigationReplace, waitForConnection, skipMessageFetch };
      obj22.navigationSettings = obj23;
      rootNavigationRef1(inviteCode[29])(obj22);
      flag2 = true;
      const obj26 = payload(inviteCode[28]);
    }
    flag = flag2;
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
          let obj24 = payload;
          if (payload == null) {
            obj24 = {};
          }
          pathname = obj24.pathname;
          let tmp114 = null;
          if (undefined !== pathname) {
            tmp114 = pathname;
          }
          pathname = tmp114;
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
              CreateGuildModalActionCreatorsDefault.openCreateGuildModal((guildId) => {
                if (type.type === OAUTH2_AUTHORIZE.OAUTH2_AUTHORIZE) {
                  rootNavigationRef1(inviteCode[17]).popAll();
                  const obj = rootNavigationRef1(inviteCode[17]);
                  const obj3 = {};
                  const obj2 = rootNavigationRef1(inviteCode[17]);
                  const merged = Object.assign(tmp.props);
                  obj3.guildId = guildId;
                  obj3.callback = rootNavigationRef1(inviteCode[35]);
                  obj3.dismissOAuthModal = function dismissOAuthModal() {
                    closure_1_1(closure_1_3[17]).popWithKey(closure_1_21);
                  };
                  obj2.pushLazy(payload(inviteCode[34])(inviteCode[33], inviteCode.paths), obj3, closure_2_21);
                  const tmp7 = payload(inviteCode[34])(inviteCode[33], inviteCode.paths);
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
          const obj20 = rootNavigationRef1(inviteCode[17]);
          const obj25 = { token: payload.token };
          rootNavigationRef1(inviteCode[17]).pushLazy(
            payload(inviteCode[34])(inviteCode[37], inviteCode.paths),
            obj25,
            "ONE_TIME_LOGIN_MODAL",
          );
          flag = true;
          const obj21 = rootNavigationRef1(inviteCode[17]);
        } else if (constants2.REMOTE_AUTH === type) {
          remoteAuthFingerprint = payload.remoteAuthFingerprint;
          pathname(
            null != remoteAuthFingerprint
              ? () => {
                  ModalActionCreatorsDefault.pushLazy(
                    asyncRequireImpl(13952, dependencyMap.paths),
                    { remoteAuthFingerprint },
                    "REMOTE_AUTH_MODAL",
                  );
                }
              : () => {
                  let obj = payload(inviteCode[39]);
                  const tmp3 = payload(inviteCode[39]).isMetaQuest()
                    ? NativePermissionTypes.HEADSET_CAMERA
                    : NativePermissionTypes.CAMERA;
                  const permission = rootNavigationRef1(inviteCode[40]).requestPermission(tmp3);
                  const obj2 = rootNavigationRef1(inviteCode[40]);
                  permission
                    .then((result) => {
                      if (result) {
                        rootNavigationRef1(paths[17]).pushLazy(payload(paths[34])(paths[41], paths.paths), {
                          showHelp: true,
                        });
                        const obj = rootNavigationRef1(paths[17]);
                      }
                    })
                    .catch(() => {});
                  const nextPromise = permission.then((result) => {
                    if (result) {
                      rootNavigationRef1(paths[17]).pushLazy(payload(paths[34])(paths[41], paths.paths), {
                        showHelp: true,
                      });
                      const obj = rootNavigationRef1(paths[17]);
                    }
                  });
                },
          );
          flag = true;
        } else if (constants2.PROMOTIONS === type) {
          rootNavigationRef1(inviteCode[42]).performURLNavigation(payload.url);
          flag = true;
          const obj19 = rootNavigationRef1(inviteCode[42]);
        } else if (constants2.FEATURE_PROMO_URL === type) {
          rootNavigationRef1(inviteCode[42]).openURLExternally(payload.promoUrl);
          flag = true;
          const obj18 = rootNavigationRef1(inviteCode[42]);
        } else if (constants2.USER_PROFILE === type) {
          flag = true;
          if (null != payload.userId) {
            const obj27 = { userId: payload.userId };
            const result3 = payload(inviteCode[20]).showUserProfileActionSheetPostConnection(obj27);
            flag = true;
            const obj16 = payload(inviteCode[20]);
          }
        } else if (constants2.BUILD_OVERRIDE === type) {
          rootNavigationRef1(inviteCode[17]).popAll();
          let obj13 = rootNavigationRef1(inviteCode[17]);
          const obj28 = { overrideUrl: payload.overrideUrl };
          rootNavigationRef1(inviteCode[17]).pushLazy(payload(inviteCode[34])(inviteCode[43], inviteCode.paths), obj28);
          flag = true;
          const obj14 = rootNavigationRef1(inviteCode[17]);
        } else if (constants2.GUILD_EVENT_DETAILS === type) {
          pathname(
            guildTemplateCode(function* () {
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
                      const obj7 = { value: payload(paths[34])(paths[44], paths.paths), done: false };
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
                          payload(paths[45]).transitionToGuild(closure_129_0);
                          const obj2 = payload(paths[45]);
                        }
                        guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(closure_129_1);
                        payload = guildScheduledEvent;
                        if (guildScheduledEvent == null) {
                          paths = 2;
                          c4 = 1;
                          const obj9 = {
                            value: tmp3(paths[46]).fetchGuildEvent(closure_129_0, closure_129_1),
                            done: false,
                          };
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
                      const result = payload(paths[47]).openGuildEventDetails(obj10);
                      const obj3 = payload(paths[47]);
                    }
                    c4 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp35) {
                  c4 = tmp;
                  throw tmp35;
                }
              }
            }),
          );
          flag = true;
        } else if (constants2.MOBILE_WEB_HANDOFF === type) {
          const redirectUrl = payload.redirectUrl;
          ({ nonce, fingerprint } = payload);
          const _HermesInternal = HermesInternal;
          const obj31 = { nonce, fingerprint, skipLoginRedirect: true };
          const result4 = rootNavigationRef1(inviteCode[48]).redirectWithHandoffToken(
            "" + redirectUrl.pathname + redirectUrl.search,
            obj31,
          );
          flag = true;
          let obj11 = rootNavigationRef1(inviteCode[48]);
        } else if (constants2.VOICE_CHANNEL === type) {
          pathname(
            guildTemplateCode(function* () {
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
                        const obj6 = { value: tmp4(paths[34])(paths[44], paths.paths), done: false };
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
                      tmp4(paths[45]).transitionToGuild(closure_128_0.guildId);
                      const obj = tmp4(paths[45]);
                    }
                    const obj8 = {
                      streamType: constants.GUILD,
                      ownerId: closure_128_0.userId,
                      guildId: closure_128_0.guildId,
                      channelId: closure_128_0.channelId,
                    };
                    v1(paths[49])(obj8);
                    _default = value.default;
                  }
                  let tmp23 = "transfer_cancelled" === closure_128_0.action;
                  if (tmp23) {
                    tmp23 = "xbox" === closure_128_0.via;
                  }
                  if (tmp23) {
                    tmp4(paths[50]).disconnectRemote();
                    const obj4 = tmp4(paths[50]);
                  }
                  c2 = 3;
                  return { value: "HermesInternal", done: null };
                } catch (tmp37) {
                  c2 = tmp;
                  throw tmp37;
                }
              }
            }),
          );
          flag = true;
        } else if (constants2.ICYMI === type) {
          pathname(() => {
            payload(inviteCode[51]).navigateToRootTab({ screen: "icymi" });
          });
          flag = true;
        } else if (constants2.GUILD_HOME === type) {
          flag = true;
          if (null != payload.guildId) {
            let tmp69;
            if (null != payload.highlightChannelId) {
              if (null != payload.highlightMessageId) {
                const obj34 = { search: null };
                ({ highlightChannelId: obj9.highlight_channel_id, highlightMessageId: obj9.highlight_message_id } =
                  payload);
                obj34.search = payload(inviteCode[52]).stringify({
                  highlight_channel_id: null,
                  highlight_message_id: null,
                });
                tmp69 = obj34;
                const obj35 = { highlight_channel_id: null, highlight_message_id: null };
                let obj8 = payload(inviteCode[52]);
              }
            }
            payload(inviteCode[53]).transitionTo(
              closure_14.CHANNEL(payload.guildId, StaticChannelRoute.GUILD_HOME),
              tmp69,
            );
            flag = true;
            let obj10 = payload(inviteCode[53]);
          }
        } else if (constants2.USER_CONNECTIONS_LINK_CALLBACK === type) {
          pathname(() => {
            let hasItem = null != payload.callbackCode && null != payload.callbackState && null != payload.provider;
            if (hasItem) {
              const items = [, , ,];
              ({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = value2);
              hasItem = items.includes(payload.provider);
            }
            if (hasItem) {
              ({
                provider: obj2.provider,
                callbackCode: obj2.callbackCode,
                callbackState: obj2.callbackState,
              } = payload);
              DispatcherDefault.dispatch({
                type: "USER_CONNECTIONS_LINK_CALLBACK",
                provider: null,
                callbackCode: null,
                callbackState: null,
              });
              const obj3 = {
                type: "USER_CONNECTIONS_LINK_CALLBACK",
                provider: null,
                callbackCode: null,
                callbackState: null,
              };
            }
          });
          flag = true;
        } else if (constants2.USER_CONNECTIONS_CALLBACK === type) {
          pathname(
            guildTemplateCode(function* () {
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
                      const state = searchParams.state;
                      const tmp50 = tmp2(searchParams, obj3);
                      if (null != state) {
                        const obj7 = { code: searchParams.code, state };
                        closure_1 = tmp50;
                        const keys = Object.keys();
                        if (keys === undefined) {
                          let dependencyMap2 = tmp12;
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
                        closure_1(4839).popAll();
                        const obj5 = closure_1(4839);
                        tmp10 = tmp50;
                        const obj10 = { screen: constants.CONNECTIONS };
                        dependencyMap(7485).openUserSettings(obj10);
                        const obj6 = dependencyMap(7485);
                        c7 = 1;
                        c8 = 1;
                        const obj11 = { value: closure_1(5487).callback(payload.provider, obj7), done: false };
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
                    closure_133_1 = closure_1(1365).toURLSafe(redirect);
                    if (null != closure_133_1) {
                      closure_1(4331).openURL(closure_133_1.toString());
                      const obj13 = closure_1(4331);
                    }
                    const obj12 = closure_1(1365);
                  }
                  c8 = 3;
                  const obj = { value, done: true };
                  return obj;
                } catch (tmp30) {
                  c8 = tmp;
                  throw tmp30;
                }
              }
            }),
          );
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
          rootNavigationRef1(inviteCode[58]).showModal(payload.userCode);
          flag = true;
          let obj6 = rootNavigationRef1(inviteCode[58]);
        } else if (constants2.GUILD_SETTINGS_PICKER === type) {
          pathname(() => {
            const result = GuildSettingsPickerActionCreators.openGuildSettingsPickerModal({
              section: payload.settingsSection,
              subsection: payload.settingsSubsection,
              feature: payload.feature,
            });
          });
          flag = true;
        } else if (constants2.SHARE === type) {
          flag = true;
          if (obj2.isIOS()) {
            rootNavigationRef1(tmp47[17]).popAll();
            let obj4 = rootNavigationRef1(tmp47[17]);
            const obj36 = { text: null, channelId: null, shareId: null, attachmentManifest: null };
            ({
              text: obj5.text,
              channelId: obj5.channelId,
              shareId: obj5.shareId,
              attachmentManifest: obj5.attachmentManifest,
            } = payload);
            obj4.pushLazy(tmp46(tmp47[34])(tmp47[61], tmp47.paths), obj36, SHARE_SCREEN_MODAL_KEY, {
              presentation: "modal",
            });
            flag = true;
            let obj3 = rootNavigationRef1(tmp47[17]);
          }
          obj2 = payload(inviteCode[60]);
          tmp46 = payload;
        } else {
          if (constants2.CREATE_VOICE_INVITE !== type) {
            if (constants2.SEND_VOICE_HANGOUT_WAVE !== type) {
              if (constants2.ACCOUNT_STANDING === type) {
                pathname(() => {
                  rootNavigationRef1(inviteCode[17]).popAll();
                  const obj = rootNavigationRef1(inviteCode[17]);
                  payload(inviteCode[63]).openAccountStanding();
                });
                flag = true;
              } else if (constants2.MOBILE_NATIVE_UPDATE === type) {
                const result5 = rootNavigationRef2(inviteCode[64]).openBuildInstallerUrl(payload.url);
                flag = true;
                let obj = rootNavigationRef2(inviteCode[64]);
              } else if (constants2.MOBILE_WEB_REDIRECT_CHECKOUT === type) {
                deepLinkAction = payload.deepLinkAction;
                pathname(
                  guildTemplateCode(function* () {
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
                            let guild;
                            if (deepLinkAction === constants.PREMIUM_CHECKOUT_SUCCESS) {
                              deepLinkAction("succeeded");
                            } else if (deepLinkAction === constants.PREMIUM_SUBSCRIPTION_UPDATE) {
                              const subscriptions = tmp3(paths[65]).fetchSubscriptions();
                              const obj3 = tmp3(paths[65]);
                            } else if (deepLinkAction === constants.GUILD_BOOST_CHECKOUT_SUCCESS) {
                              tmp2(paths[17]).popAll();
                              guildId = payload.guildId;
                              c2 = 1;
                              paths = 1;
                              const obj5 = { value: tmp3(paths[34])(paths[44], paths.paths), done: false };
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
                            tmp3(paths[45]).transitionToGuild(guildId);
                            tmp2(paths[66])(guild);
                            const obj6 = tmp3(paths[45]);
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
                  }),
                );
                flag = true;
              } else if (constants2.SHOP === type) {
                pathname(() => {
                  const obj3 = {
                    analyticsLocations: null,
                    analyticsSource: null,
                    screen: null,
                    initialProductSkuId: null,
                  };
                  const items = [AnalyticsLocationDefault.DEEPLINK];
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
              } else if (constants2.QUESTS === type) {
                pathname(() => {
                  if (null != payload.questId) {
                    const obj2 = {
                      questId: payload.questId,
                      event: constants.QUEST_SHARE_LINK_DEEP_LINKED_INTO_MOBILE_CLIENT,
                      sourceQuestContent: QuestContent.QuestContent.QUEST_EMBED_MOBILE,
                      properties: null,
                    };
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
                  const dockCreativePreview = BountyActionCreators.fetchDockCreativePreview(payload.adCreativeId);
                });
                flag = true;
              } else if (constants2.GIFT === type) {
                pathname(() => {
                  const obj2 = { analyticsLocations: null };
                  const items = [rootNavigationRef1(inviteCode[68]).DEEPLINK];
                  obj2.analyticsLocations = items;
                  payload(inviteCode[74]).openGiftModal(obj2);
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
                rootNavigationRef1(inviteCode[75])(
                  payload.applicationId,
                  payload.referrerId,
                  payload.customId,
                  payload.linkId,
                  payload.isDeepLink,
                );
                flag = true;
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
                  actions_BoostingActionCreators.openApplyBoostModal(payload.guildId);
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
                  payload(inviteCode[21]).openUserSettings({ screen: constants3.GUILD_ROLE_SUBSCRIPTIONS });
                });
                flag = true;
              } else if (constants2.GAME_PROFILE === type) {
                gameId = payload.gameId;
                pathname(() => {
                  ModalActionCreatorsDefault.popAll();
                  const _default = GameProfileActionCreators.default;
                  _default.openGameProfileModal({
                    gameId,
                    source: GameProfileAnalyticUtils.GameProfileSources.Deeplink,
                    gameProfileModalChecks: { shouldOpenGameProfile: true, gameId },
                  });
                });
                flag = true;
              } else {
                flag = false;
                if (constants2.MESSAGE_REQUESTS === type) {
                  rootNavigationRef1(inviteCode[17]).popAll();
                  const obj48 = rootNavigationRef1(inviteCode[17]);
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
                  const obj49 = payload(inviteCode[18]);
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
    if (payload.type === constants2.MESSAGE) {
      ({ messageId, summaryId } = payload);
    }
    flag = true;
    if (tmp120) {
      const obj39 = { guildId, channelId, messageId, navigationSettings: null, summaryId: null };
      const obj40 = { safe, navigationReplace, waitForConnection, skipMessageFetch };
      obj39.navigationSettings = obj40;
      obj39.summaryId = summaryId;
      rootNavigationRef1(inviteCode[29])(obj39);
      flag = true;
    }
    tmp120 = null != guildId && null != channelId;
  }
  if (flag) {
    const result6 = payload(inviteCode[80]).browserManagerCloseBrowser();
    const obj47 = payload(inviteCode[80]);
  }
  return flag;
}
