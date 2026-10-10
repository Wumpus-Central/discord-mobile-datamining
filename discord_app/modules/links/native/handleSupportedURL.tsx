// discord_app/modules/links/native/handleSupportedURL.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import KeyboardManagerUtils from "../../../utils/native/KeyboardManagerUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import BoostingActionCreators from "../../../actions/native/BoostingActionCreators.tsx";
import QuestContent from "../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdPlacement from "../../../../discord_common/js/shared/shared-constants/AdPlacement.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import CollectiblesActionCreators from "../../collectibles/CollectiblesActionCreators.tsx";
import AnalyticsActions from "../../quests/lib/analytics/AnalyticsActions.tsx";
import GuildSettingsActionCreatorsDefault from "../../guild_settings/GuildSettingsActionCreators.tsx";
import instant_invite_InstantInviteUtils from "../../instant_invite/native/InstantInviteUtils.tsx";
import SecureFramesPlatformUtilsDefault from "../../rtc/SecureFramesPlatformUtils.native.tsx";
import GameProfileAnalyticUtils from "../../game_profile/GameProfileAnalyticUtils.tsx";
import GameProfileActionCreators from "../../game_profile/GameProfileActionCreators.native.tsx";
import DisplayedInviteActionCreators from "../../../actions/native/DisplayedInviteActionCreators.tsx";
import QuestUtils from "../../quests/native/QuestUtils.native.tsx";
import closeVoicePanelsDefault from "../../voice_panel/native/utils/closeVoicePanels.tsx";
import ApplicationUtils from "../../../utils/native/ApplicationUtils.tsx";
import authorizeCallbackDefault from "../../oauth2/native/authorizeCallback.tsx";
import guild_templates_GuildTemplateActionCreatorsDefault from "../../guild_templates/native/GuildTemplateActionCreators.tsx";
import FamilyCenterNativeUtils from "../../parent_tools/native/FamilyCenterNativeUtils.tsx";
import CreateGuildModalActionCreatorsDefault from "../../create_guild/native/CreateGuildModalActionCreators.tsx";
import BountyActionCreators from "../../quests/BountyActionCreators.tsx";
import MidjourneyOnboardingUtils from "../../midjourney_onboarding/MidjourneyOnboardingUtils.tsx";
import GuildSettingsPickerActionCreators from "../../guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx";
import AgeKeyReturnHandler from "../../age_assurance/native/AgeKeyReturnHandler.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import GuildScheduledEventStore from "../../guild_scheduled_events/GuildScheduledEventStore.tsx";
import PremiumNitroNavigationStore from "../../user_settings/premium/native/PremiumNitroNavigationStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
let closure_4 = ["code", "state"];
fn(6132).addPostConnectionCallback;
let closure_10 = fn(7140).handleMobileWebCheckoutStatus;
const Constants = fn(1085);
({
  AnalyticEvents: map1,
  LinkingTypes: closure_14,
  Routes: closure_15,
  UserSettingsSections: closure_16,
  PlatformTypes: closure_17,
  ME: closure_18,
} = Constants);
const StaticChannelRoute = fn(2072).StaticChannelRoute;
const StreamTypes = fn(5898).StreamTypes;
const NativePermissionTypes = fn(7482).NativePermissionTypes;
let closure_22 = fn(10863).OAUTH2_AUTHORIZE_MODAL_KEY;
let closure_23 = fn(7259).FAMILY_CENTER_LINK_REQUEST_REGEX;
let closure_24 = fn(5071).MobileWebRedirectCheckoutDeepLinkActions;
const SHARE_SCREEN_MODAL_KEY = fn(14050).SHARE_SCREEN_MODAL_KEY;
const MobileUserSettings = fn(7992).MobileUserSettings;
const size = fn(2);
let result = size.fileFinishedImporting("modules/links/native/handleSupportedURL.tsx");

export default function handleSupportedURL(payload) {
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
  AuthenticationStore = undefined;
  c13 = undefined;
  const type = payload.type;
  if (constants2.CONTACT_SYNC === type) {
    let result = payload(inviteCode[17]).openContactSyncModalDeeplink();
    let flag = true;
    const obj49 = payload(inviteCode[17]);
  } else if (constants2.COMPOSE_MESSAGE === type) {
    rootNavigationRef1(inviteCode[18]).popAll();
    const obj45 = rootNavigationRef1(inviteCode[18]);
    const rootNavigationRef = payload(inviteCode[19]).getRootNavigationRef();
    flag = true;
    if (null != rootNavigationRef) {
      let obj3 = { screen: "new-message", params: { sourcePage: "Deeplink" } };
      rootNavigationRef.navigate("friends", obj3);
      flag = true;
    }
    const obj46 = payload(inviteCode[19]);
  } else if (constants2.ADD_FRIENDS === type) {
    rootNavigationRef1(inviteCode[18]).popAll();
    const obj40 = rootNavigationRef1(inviteCode[18]);
    const tmp163 = rootNavigationRef1;
    const tmp164 = inviteCode;
    rootNavigationRef1 = payload(inviteCode[19]).getRootNavigationRef();
    if (null == rootNavigationRef1) {
      const result1 = tmp163(tmp164[20]).openAddFriendModalDeeplink();
      flag = true;
      const tmp163Result = tmp163(tmp164[20]);
    } else if (rootNavigationRef1.isReady()) {
      let obj10 = { screen: "add-friends", params: { sourcePage: "Deeplink" } };
      rootNavigationRef1.navigate("friends", obj10);
      flag = true;
    } else {
      remoteAuthFingerprint(() =>
        rootNavigationRef1.navigate("friends", { screen: "add-friends", params: { sourcePage: "Deeplink" } }),
      );
      flag = true;
    }
    const obj41 = payload(inviteCode[19]);
  } else if (constants2.FRIENDS === type) {
    rootNavigationRef1(inviteCode[18]).popAll();
    const obj35 = rootNavigationRef1(inviteCode[18]);
    const tmp155 = inviteCode;
    const tmp157 = payload;
    rootNavigationRef2 = payload(inviteCode[19]).getRootNavigationRef();
    if (null != rootNavigationRef2) {
      if (rootNavigationRef2.isReady()) {
        rootNavigationRef2.navigate("friends");
      } else {
        remoteAuthFingerprint(() => {
          rootNavigationRef2.navigate("friends");
        });
      }
    }
    flag = true;
    if (null != payload.userId) {
      const obj15 = { userId: payload.userId };
      const result2 = tmp157(tmp155[21]).showUserProfileActionSheetPostConnection(obj15);
      flag = true;
      const tmp157Result = tmp157(tmp155[21]);
    }
    const obj36 = payload(inviteCode[19]);
  } else if (constants2.EDIT_PROFILE === type) {
    remoteAuthFingerprint(() => {
      rootNavigationRef1(inviteCode[18]).popAll();
      const obj = rootNavigationRef1(inviteCode[18]);
      payload(inviteCode[22]).openUserSettings({ screen: constants3.PROFILE_CUSTOMIZATION });
    });
    flag = true;
  } else if (constants2.BADGE_DIRECTORY === type) {
    remoteAuthFingerprint(() => {
      rootNavigationRef1(inviteCode[18]).popAll();
      const obj = rootNavigationRef1(inviteCode[18]);
      const result = payload(inviteCode[23]).openBadgeDirectoryScreen();
    });
    flag = true;
  } else if (constants2.INVITE === type) {
    inviteCode = payload.inviteCode;
    username = payload.username;
    deeplinkAttemptId = payload.deeplinkAttemptId;
    if (!AuthenticationStore.isAuthenticated()) {
      if (null != inviteCode) {
        const obj18 = { deeplinkAttemptId, location: "Deep Link" };
        payload(inviteCode[24]).showInvite(inviteCode, username, obj18);
        flag = true;
        const obj33 = payload(inviteCode[24]);
      }
    }
    remoteAuthFingerprint(() => {
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
    remoteAuthFingerprint(() => {
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
      const giftCode1 = payload(inviteCode[27]).resolveGiftCode(giftCode);
      const obj32 = payload(inviteCode[27]);
      giftCode1
        .then((giftCode) => {
          rootNavigationRef1(inviteCode[28]).track(_undefined.OPEN_MODAL, { type: "gift_accept", location: null });
          const obj = rootNavigationRef1(inviteCode[28]);
          const result = payload(inviteCode[29]).openGiftCodeRedeemModal(giftCode.giftCode.code);
        })
        .catch(() => {});
      flag3 = true;
      let nextPromise = giftCode1.then((giftCode) => {
        rootNavigationRef1(inviteCode[28]).track(_undefined.OPEN_MODAL, { type: "gift_accept", location: null });
        const obj = rootNavigationRef1(inviteCode[28]);
        const result = payload(inviteCode[29]).openGiftCodeRedeemModal(giftCode.giftCode.code);
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
      payload(inviteCode[30]).startDiceRoll(channelId2, diceCount, diceSides);
      const obj20 = { guildId: guildId2, channelId: channelId2, messageId: "Array", navigationSettings: "nuppineula" };
      const obj25 = { safe, navigationReplace, waitForConnection, skipMessageFetch, isAppStartupNavigation };
      obj20.navigationSettings = obj25;
      rootNavigationRef1(inviteCode[31])(obj20);
      flag2 = true;
      const obj29 = payload(inviteCode[30]);
    }
    flag = flag2;
  } else {
    if (constants2.CHANNEL !== type) {
      if (constants2.MESSAGE !== type) {
        if (constants2.SESSION_MANAGEMENT === type) {
          remoteAuthFingerprint(() => {
            rootNavigationRef1(inviteCode[18]).popAll();
            const obj = rootNavigationRef1(inviteCode[18]);
            payload(inviteCode[22]).openUserSettings({ screen: constants3.SESSIONS });
          });
          flag = true;
        } else if (constants2.FAMILY_CENTER === type) {
          let obj26 = payload;
          if (payload == null) {
            obj26 = {};
          }
          pathname = obj26.pathname;
          let tmp121 = null;
          if (undefined !== pathname) {
            tmp121 = pathname;
          }
          pathname = tmp121;
          remoteAuthFingerprint(() => {
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
          remoteAuthFingerprint(() => {
            ModalActionCreatorsDefault.popAll();
            if (obj2.isMidjourneyOnboardingFlow()) {
              CreateGuildModalActionCreatorsDefault.openCreateGuildModal(function openOAuth2Modal(guildId) {
                if (type.type === OAUTH2_AUTHORIZE.OAUTH2_AUTHORIZE) {
                  rootNavigationRef1(inviteCode[18]).popAll();
                  const obj = rootNavigationRef1(inviteCode[18]);
                  const obj3 = {};
                  const obj2 = rootNavigationRef1(inviteCode[18]);
                  const merged = Object.assign(tmp.props);
                  obj3.guildId = guildId;
                  obj3.callback = rootNavigationRef1(inviteCode[37]);
                  obj3.dismissOAuthModal = function dismissOAuthModal() {
                    closure_1_1(closure_1_3[18]).popWithKey(closure_1_22);
                  };
                  obj2.pushLazy(payload(inviteCode[36])(inviteCode[35], inviteCode.paths), obj3, closure_2_22);
                  const tmp7 = payload(inviteCode[36])(inviteCode[35], inviteCode.paths);
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
          rootNavigationRef1(inviteCode[18]).popAll();
          const obj23 = rootNavigationRef1(inviteCode[18]);
          const obj27 = { token: payload.token };
          rootNavigationRef1(inviteCode[18]).pushLazy(
            payload(inviteCode[36])(inviteCode[39], inviteCode.paths),
            obj27,
            "ONE_TIME_LOGIN_MODAL",
          );
          flag = true;
          const obj24 = rootNavigationRef1(inviteCode[18]);
        } else if (constants2.REMOTE_AUTH === type) {
          remoteAuthFingerprint = payload.remoteAuthFingerprint;
          remoteAuthFingerprint(
            null != remoteAuthFingerprint
              ? () => {
                  ModalActionCreatorsDefault.pushLazy(
                    asyncRequireImpl(14062, dependencyMap.paths),
                    { remoteAuthFingerprint },
                    "REMOTE_AUTH_MODAL",
                  );
                }
              : () => {
                  let obj = payload(inviteCode[41]);
                  const tmp3 = payload(inviteCode[41]).isMetaQuest()
                    ? NativePermissionTypes.HEADSET_CAMERA
                    : NativePermissionTypes.CAMERA;
                  const permission = rootNavigationRef1(inviteCode[42]).requestPermission(tmp3);
                  const obj2 = rootNavigationRef1(inviteCode[42]);
                  permission
                    .then((result) => {
                      if (result) {
                        rootNavigationRef1(paths[18]).pushLazy(payload(paths[36])(paths[43], paths.paths), {
                          showHelp: true,
                        });
                        const obj = rootNavigationRef1(paths[18]);
                      }
                    })
                    .catch(() => {});
                  const nextPromise = permission.then((result) => {
                    if (result) {
                      rootNavigationRef1(paths[18]).pushLazy(payload(paths[36])(paths[43], paths.paths), {
                        showHelp: true,
                      });
                      const obj = rootNavigationRef1(paths[18]);
                    }
                  });
                },
          );
          flag = true;
        } else if (constants2.PROMOTIONS === type) {
          rootNavigationRef1(inviteCode[44]).performURLNavigation(payload.url);
          flag = true;
          const obj22 = rootNavigationRef1(inviteCode[44]);
        } else if (constants2.FEATURE_PROMO_URL === type) {
          rootNavigationRef1(inviteCode[44]).openURLExternally(payload.promoUrl);
          flag = true;
          const obj21 = rootNavigationRef1(inviteCode[44]);
        } else if (constants2.USER_PROFILE === type) {
          flag = true;
          if (null != payload.userId) {
            const obj28 = { userId: payload.userId };
            const result3 = payload(inviteCode[21]).showUserProfileActionSheetPostConnection(obj28);
            flag = true;
            const obj19 = payload(inviteCode[21]);
          }
        } else if (constants2.BUILD_OVERRIDE === type) {
          rootNavigationRef1(inviteCode[18]).popAll();
          const obj16 = rootNavigationRef1(inviteCode[18]);
          const obj30 = { overrideUrl: payload.overrideUrl };
          rootNavigationRef1(inviteCode[18]).pushLazy(payload(inviteCode[36])(inviteCode[45], inviteCode.paths), obj30);
          flag = true;
          const obj17 = rootNavigationRef1(inviteCode[18]);
        } else if (constants2.GUILD_EVENT_DETAILS === type) {
          remoteAuthFingerprint(
            pathname(function* () {
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
                  return { value: "IconComponent", done: "+51" };
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
                      tmp3(paths[18]).popAll();
                      ({ guildId: closure_129_0, guildEventId: closure_129_1 } = payload);
                      paths = 1;
                      c4 = 1;
                      const obj7 = { value: payload(paths[36])(paths[46], paths.paths), done: false };
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
                          payload(paths[47]).transitionToGuild(closure_129_0);
                          const obj2 = payload(paths[47]);
                        }
                        guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(closure_129_1);
                        payload = guildScheduledEvent;
                        if (guildScheduledEvent == null) {
                          paths = 2;
                          c4 = 1;
                          const obj9 = {
                            value: tmp3(paths[48]).fetchGuildEvent(closure_129_0, closure_129_1),
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
                      const result = payload(paths[49]).openGuildEventDetails(obj10);
                      const obj3 = payload(paths[49]);
                    }
                    c4 = 3;
                    return { value: "IconComponent", done: "+51" };
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
          const result4 = rootNavigationRef1(inviteCode[50]).redirectWithHandoffToken(
            "" + redirectUrl.pathname + redirectUrl.search,
            obj31,
          );
          flag = true;
          const obj14 = rootNavigationRef1(inviteCode[50]);
        } else if (constants2.VOICE_CHANNEL === type) {
          remoteAuthFingerprint(
            pathname(function* () {
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
                  return { value: "IconComponent", done: "+51" };
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
                        v1(paths[18]).popAll();
                        v1 = 1;
                        c2 = 1;
                        const obj6 = { value: tmp4(paths[36])(paths[46], paths.paths), done: false };
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
                      tmp4(paths[47]).transitionToGuild(closure_128_0.guildId);
                      const obj = tmp4(paths[47]);
                    }
                    const obj8 = {
                      streamType: constants.GUILD,
                      ownerId: closure_128_0.userId,
                      guildId: closure_128_0.guildId,
                      channelId: closure_128_0.channelId,
                    };
                    v1(paths[51])(obj8);
                    _default = value.default;
                  }
                  let tmp23 = "transfer_cancelled" === closure_128_0.action;
                  if (tmp23) {
                    tmp23 = "xbox" === closure_128_0.via;
                  }
                  if (tmp23) {
                    tmp4(paths[52]).disconnectRemote();
                    const obj4 = tmp4(paths[52]);
                  }
                  c2 = 3;
                  return { value: "IconComponent", done: "+51" };
                } catch (tmp37) {
                  c2 = tmp;
                  throw tmp37;
                }
              }
            }),
          );
          flag = true;
        } else if (constants2.ICYMI === type) {
          remoteAuthFingerprint(() => {
            payload(inviteCode[53]).navigateToRootTab({ screen: "icymi" });
          });
          flag = true;
        } else if (constants2.GUILD_HOME === type) {
          flag = true;
          if (null != payload.guildId) {
            let tmp76;
            if (null != payload.highlightChannelId) {
              if (null != payload.highlightMessageId) {
                const obj34 = { search: null };
                ({ highlightChannelId: obj12.highlight_channel_id, highlightMessageId: obj12.highlight_message_id } =
                  payload);
                obj34.search = payload(inviteCode[54]).stringify({
                  highlight_channel_id: null,
                  highlight_message_id: null,
                });
                tmp76 = obj34;
                let obj11 = payload(inviteCode[54]);
                const obj37 = { highlight_channel_id: null, highlight_message_id: null };
              }
            }
            payload(inviteCode[55]).transitionTo(
              closure_15.CHANNEL(payload.guildId, StaticChannelRoute.GUILD_HOME),
              tmp76,
            );
            flag = true;
            let obj13 = payload(inviteCode[55]);
          }
        } else if (constants2.USER_CONNECTIONS_LINK_CALLBACK === type) {
          remoteAuthFingerprint(() => {
            let hasItem = null != payload.callbackCode && null != payload.callbackState && null != payload.provider;
            if (hasItem) {
              const items = [, , ,];
              ({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = constants);
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
          remoteAuthFingerprint(
            pathname(function* () {
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
                  return { value: "IconComponent", done: "+51" };
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
                      closure_5 = tmp2;
                      closure_133_0 = undefined;
                      closure_133_1 = undefined;
                      const searchParams = payload.searchParams;
                      const state = searchParams.state;
                      const tmp50 = tmp5(searchParams, obj3);
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
                        closure_1(5934).popAll();
                        const obj5 = closure_1(5934);
                        tmp10 = tmp50;
                        const obj10 = { screen: constants.CONNECTIONS };
                        dependencyMap(7093).openUserSettings(obj10);
                        const obj6 = dependencyMap(7093);
                        c7 = 1;
                        c8 = 1;
                        const obj11 = { value: closure_1(6874).callback(payload.provider, obj7), done: false };
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
                    closure_133_1 = closure_1(1384).toURLSafe(redirect);
                    if (null != closure_133_1) {
                      closure_1(4806).openURL(closure_133_1.toString());
                      const obj13 = closure_1(4806);
                    }
                    const obj12 = closure_1(1384);
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
          remoteAuthFingerprint(() => {
            rootNavigationRef1(inviteCode[18]).popAll();
            const obj = rootNavigationRef1(inviteCode[18]);
            payload(inviteCode[22]).openUserSettings({ screen: constants3.CONNECTIONS });
          });
          flag = true;
        } else if (constants2.GUILD_SETTINGS === type) {
          remoteAuthFingerprint(() => {
            if (null != payload.guildId) {
              const obj = GuildSettingsActionCreatorsDefault;
              obj.open(payload.guildId, payload.settingsSection, undefined, payload.settingsSubsection);
            }
          });
          flag = true;
        } else if (constants2.ACTIVATE_DEVICE === type) {
          rootNavigationRef1(inviteCode[60]).showModal(payload.userCode);
          flag = true;
          let obj9 = rootNavigationRef1(inviteCode[60]);
        } else if (constants2.GUILD_SETTINGS_PICKER === type) {
          remoteAuthFingerprint(() => {
            const result = GuildSettingsPickerActionCreators.openGuildSettingsPickerModal({
              section: payload.settingsSection,
              subsection: payload.settingsSubsection,
              feature: payload.feature,
            });
          });
          flag = true;
        } else if (constants2.SHARE === type) {
          flag = true;
          if (obj5.isIOS()) {
            rootNavigationRef1(tmp54[18]).popAll();
            let obj7 = rootNavigationRef1(tmp54[18]);
            const obj38 = { text: null, channelId: null, shareId: null, attachmentManifest: null };
            ({
              text: obj8.text,
              channelId: obj8.channelId,
              shareId: obj8.shareId,
              attachmentManifest: obj8.attachmentManifest,
            } = payload);
            obj7.pushLazy(tmp53(tmp54[36])(tmp54[63], tmp54.paths), obj38, SHARE_SCREEN_MODAL_KEY, {
              presentation: "modal",
            });
            flag = true;
            let obj6 = rootNavigationRef1(tmp54[18]);
          }
          obj5 = payload(inviteCode[62]);
          tmp53 = payload;
        } else {
          if (constants2.CREATE_VOICE_INVITE !== type) {
            if (constants2.SEND_VOICE_HANGOUT_WAVE !== type) {
              if (constants2.ACCOUNT_STANDING === type) {
                remoteAuthFingerprint(() => {
                  rootNavigationRef1(inviteCode[18]).popAll();
                  const obj = rootNavigationRef1(inviteCode[18]);
                  payload(inviteCode[65]).openAccountStanding();
                });
                flag = true;
              } else if (constants2.MOBILE_NATIVE_UPDATE === type) {
                const result5 = rootNavigationRef2(inviteCode[66]).openBuildInstallerUrl(payload.url);
                flag = true;
                let obj4 = rootNavigationRef2(inviteCode[66]);
              } else if (constants2.MOBILE_WEB_REDIRECT_CHECKOUT === type) {
                deepLinkAction = payload.deepLinkAction;
                remoteAuthFingerprint(
                  pathname(function* () {
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
                        return { value: "IconComponent", done: "+51" };
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
                              gameId("succeeded");
                            } else if (deepLinkAction === constants.PREMIUM_SUBSCRIPTION_UPDATE) {
                              const subscriptions = tmp3(paths[67]).fetchSubscriptions();
                              const obj3 = tmp3(paths[67]);
                            } else if (deepLinkAction === constants.GUILD_BOOST_CHECKOUT_SUCCESS) {
                              tmp2(paths[18]).popAll();
                              guildId = payload.guildId;
                              c2 = 1;
                              paths = 1;
                              const obj5 = { value: tmp3(paths[36])(paths[46], paths.paths), done: false };
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
                            tmp3(paths[47]).transitionToGuild(guildId);
                            tmp2(paths[68])(guild);
                            const obj6 = tmp3(paths[47]);
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
                remoteAuthFingerprint(() => {
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
                remoteAuthFingerprint(() => {
                  rootNavigationRef1(inviteCode[18]).popAll();
                  const obj = rootNavigationRef1(inviteCode[18]);
                  payload(inviteCode[22]).openUserSettings({ screen: constants3.AUTHORIZED_APPS });
                });
                flag = true;
              } else if (constants2.DAVE_PROTOCOL_VERIFICATION === type) {
                remoteAuthFingerprint(() => {
                  const obj2 = { userId: payload.userId, fingerprint: null };
                  const fingerprint = payload.fingerprint;
                  obj2.fingerprint = fingerprint.replaceAll(" ", "+");
                  const result = SecureFramesPlatformUtilsDefault.handleSecureFramesUserVerificationLink(obj2);
                });
                flag = true;
              } else if (constants2.AGE_VERIFICATION_AGEKEY_RETURN === type) {
                remoteAuthFingerprint(() => {
                  AgeKeyReturnHandler.handleAgeKeyReturn({
                    result: payload.result,
                    ageKeySaved: payload.ageKeySaved,
                    verificationId: payload.verificationId,
                  });
                });
                flag = true;
              } else if (constants2.QUESTS === type) {
                remoteAuthFingerprint(() => {
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
                remoteAuthFingerprint(() => {
                  const obj2 = { screen: constants3.QUESTS, params: { previewAdCreativeIds: payload.adCreativeIds } };
                  openUserSettings.openUserSettings(obj2);
                });
                flag = true;
              } else if (constants2.QUEST_BAR_PREVIEW === type) {
                remoteAuthFingerprint(() => {
                  ModalActionCreatorsDefault.popAll();
                  NavigationRouteUtils.navigateToRootTab({ screen: "guilds", guildId });
                  const obj3 = { screen: "guilds", guildId };
                  const questBarCreativePreview = BountyActionCreators.fetchQuestBarCreativePreview(
                    payload.adCreativeId,
                    AdPlacement.AdPlacement.MOBILE_HOME_DOCK_AREA,
                  );
                });
                flag = true;
              } else if (constants2.GIFT === type) {
                remoteAuthFingerprint(() => {
                  const obj2 = { analyticsLocations: null };
                  const items = [rootNavigationRef1(inviteCode[70]).DEEPLINK];
                  obj2.analyticsLocations = items;
                  payload(inviteCode[78]).openGiftModal(obj2);
                });
                flag = true;
              } else if (constants2.NITRO_HOME === type) {
                remoteAuthFingerprint(() => {
                  const section = payload.section;
                  PremiumNitroNavigationStore.setState({ scrollToSectionId: section });
                  openUserSettings.openUserSettings({ screen: constants3.PREMIUM });
                  const obj2 = { screen: constants3.PREMIUM };
                });
                flag = true;
              } else if (constants2.ACTIVITY === type) {
                rootNavigationRef1(inviteCode[79])(
                  payload.applicationId,
                  payload.referrerId,
                  payload.customId,
                  payload.linkId,
                  payload.isDeepLink,
                );
                flag = true;
              } else if (constants2.CONNECTED_GAMES === type) {
                remoteAuthFingerprint(() => {
                  rootNavigationRef1(inviteCode[18]).popAll();
                  const obj = rootNavigationRef1(inviteCode[18]);
                  const obj3 = { screen: constants3.CONTENT_AND_SOCIAL, params: { tab: constants.CONNECTED_GAMES } };
                  payload(inviteCode[22]).openUserSettings(obj3);
                });
                flag = true;
              } else if (constants2.BOOST_MARKETING === type) {
                remoteAuthFingerprint(() => {
                  BoostingActionCreators.openApplyBoostModal(payload.guildId);
                });
                flag = true;
              } else if (constants2.BOOST_SETTINGS === type) {
                remoteAuthFingerprint(() => {
                  rootNavigationRef1(inviteCode[18]).popAll();
                  const obj = rootNavigationRef1(inviteCode[18]);
                  payload(inviteCode[22]).openUserSettings({ screen: constants3.GUILD_BOOSTING });
                });
                flag = true;
              } else if (constants2.QUEST_PREVIEW_TOOL === type) {
                remoteAuthFingerprint(() => {
                  ModalActionCreatorsDefault.popAll();
                  closeVoicePanelsDefault();
                  const timerId = setTimeout(() => {
                    const obj2 = { screen: constants3.QUEST_PREVIEW_TOOL_2, params: { questId: questId.questId } };
                    payload(inviteCode[22]).openUserSettings(obj2);
                  }, 1);
                });
                flag = true;
              } else if (constants2.SUBSCRIPTION_SETTINGS === type) {
                remoteAuthFingerprint(() => {
                  rootNavigationRef1(inviteCode[18]).popAll();
                  const obj = rootNavigationRef1(inviteCode[18]);
                  const result = payload(inviteCode[82]).openSubscriptionSettingsFromDeepLink();
                });
                flag = true;
              } else if (constants2.GAME_PROFILE === type) {
                gameId = payload.gameId;
                remoteAuthFingerprint(() => {
                  ModalActionCreatorsDefault.popAll();
                  const _default = GameProfileActionCreators.default;
                  _default.openGameProfileModal({
                    gameId,
                    source: GameProfileAnalyticUtils.GameProfileSources.Deeplink,
                    gameProfileModalChecks: { shouldOpenGameProfile: true, gameId },
                  });
                });
                flag = true;
              } else if (constants2.MESSAGE_REQUESTS === type) {
                rootNavigationRef1(inviteCode[18]).popAll();
                let obj = rootNavigationRef1(inviteCode[18]);
                rootNavigationRef3 = payload(inviteCode[19]).getRootNavigationRef();
                flag = true;
                if (null != rootNavigationRef3) {
                  if (rootNavigationRef3.isReady()) {
                    rootNavigationRef3.navigate("message-requests");
                    flag = true;
                  } else {
                    remoteAuthFingerprint(() => {
                      rootNavigationRef3.navigate("message-requests");
                    });
                    flag = true;
                  }
                }
                let obj2 = payload(inviteCode[19]);
              } else {
                flag = false;
                if (constants2.CONJURE === type) {
                  ({ projectId: c12, guildId: c13 } = payload);
                  remoteAuthFingerprint(
                    pathname(function* () {
                      if (c4 === 2) {
                        c4 = 3;
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp4 === 3) {
                        if (arg0 === 1) {
                          throw value;
                        } else if (arg0 === 2) {
                          const obj2 = { value, done: true };
                          return obj2;
                        } else {
                          return { value: "IconComponent", done: "+51" };
                        }
                      } else {
                        try {
                          c4 = 2;
                          if (0 === inviteCode) {
                            if (arg0 === 1) {
                              c4 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c4 = 3;
                              const obj3 = { value, done: true };
                              return obj3;
                            } else {
                              closure_2 = tmp5;
                              closure_129_0 = undefined;
                              closure_129_1 = undefined;
                              closure_129_2 = undefined;
                              let openConjureProject;
                              closure_129_4 = undefined;
                              tmp2(inviteCode[18]).popAll();
                              const items = [
                                payload(inviteCode[36])(inviteCode[85], inviteCode.paths),
                                payload(inviteCode[36])(inviteCode[86], inviteCode.paths),
                              ];
                              inviteCode = 1;
                              c4 = 1;
                              const obj4 = { value: Promise.all(items), done: false };
                              return obj4;
                            }
                          } else if (arg0 === 1) {
                            c4 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c4 = 3;
                            const obj = { value, done: true };
                            return obj;
                          } else {
                            closure_129_0 = value;
                            closure_129_1 = deeplinkAttemptId(closure_129_0, 2);
                            closure_129_2 = closure_129_1[0].resolveConjureWorkspaceGuildId;
                            openConjureProject = closure_129_1[1].openConjureProject;
                            payload = closure_130_13;
                            if (closure_130_13 == null) {
                              payload = closure_129_2("handleSupportedURL");
                            }
                            closure_129_4 = payload;
                            if (null != closure_129_4) {
                              openConjureProject(closure_129_4, closure_130_12);
                            }
                            c4 = 3;
                            return { value: "IconComponent", done: "+51" };
                          }
                        } catch (tmp17) {
                          c4 = tmp;
                          throw tmp17;
                        }
                      }
                    }),
                  );
                  flag = true;
                }
              }
            }
          }
          remoteAuthFingerprint(() => {
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
    if (tmp127) {
      const obj39 = { guildId, channelId, messageId, navigationSettings: null, summaryId: null };
      const obj42 = { safe, navigationReplace, waitForConnection, skipMessageFetch, isAppStartupNavigation };
      obj39.navigationSettings = obj42;
      obj39.summaryId = summaryId;
      rootNavigationRef1(inviteCode[31])(obj39);
      flag = true;
    }
    tmp127 = null != guildId && null != channelId;
  }
  if (flag) {
    const result6 = payload(inviteCode[87]).browserManagerCloseBrowser();
    const obj50 = payload(inviteCode[87]);
  }
  return flag;
}
