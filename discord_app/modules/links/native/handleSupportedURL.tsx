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
fn(5558).addPostConnectionCallback;
let closure_9 = fn(7421).handleMobileWebCheckoutStatus;
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
const StreamTypes = fn(4602).StreamTypes;
const NativePermissionTypes = fn(4770).NativePermissionTypes;
let closure_21 = fn(9574).OAUTH2_AUTHORIZE_MODAL_KEY;
let closure_22 = fn(7538).FAMILY_CENTER_LINK_REQUEST_REGEX;
let closure_23 = fn(4542).MobileWebRedirectCheckoutDeepLinkActions;
const SHARE_SCREEN_MODAL_KEY = fn(13851).SHARE_SCREEN_MODAL_KEY;
const MobileUserSettings = fn(7975).MobileUserSettings;
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
      let obj = { screen: "new-message", params: { sourcePage: "Deeplink" } };
      rootNavigationRef.navigate("friends", obj);
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
      obj = { screen: "add-friends", params: { sourcePage: "Deeplink" } };
      rootNavigationRef1.navigate("friends", obj);
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
      let obj1 = { userId: payload.userId };
      const result2 = tmp148(tmp146[20]).showUserProfileActionSheetPostConnection(obj1);
      flag = true;
      const tmp148Result = tmp148(tmp146[20]);
    }
    const obj33 = payload(inviteCode[18]);
  } else if (constants2.EDIT_PROFILE === type) {
    pathname(() => {
      let obj = rootNavigationRef1(inviteCode[17]);
      obj.popAll();
      obj = { screen: constants3.PROFILE_CUSTOMIZATION };
      payload(inviteCode[21]).openUserSettings(obj);
    });
    flag = true;
  } else if (constants2.INVITE === type) {
    inviteCode = payload.inviteCode;
    username = payload.username;
    deeplinkAttemptId = payload.deeplinkAttemptId;
    if (!rootNavigationRef3.isAuthenticated()) {
      if (null != inviteCode) {
        let obj2 = { deeplinkAttemptId, location: "Deep Link" };
        payload(inviteCode[22]).showInvite(inviteCode, username, obj2);
        flag = true;
        const obj30 = payload(inviteCode[22]);
      }
    }
    pathname(() => {
      let obj = guild_templates_GuildTemplateActionCreatorsDefault;
      obj.hideModal();
      if (null != inviteCode) {
        const result = KeyboardManagerUtils.dismissGlobalKeyboard();
        obj = { deeplinkAttemptId, location: "Deep Link" };
        DisplayedInviteActionCreators.showInvite(tmp3, username, obj);
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
    let giftCode = payload.giftCode;
    let flag3 = null != giftCode;
    if (flag3) {
      giftCode = payload(inviteCode[25]).resolveGiftCode(giftCode);
      const obj29 = payload(inviteCode[25]);
      giftCode
        .then((giftCode) => {
          rootNavigationRef1(inviteCode[26]).track(constants.OPEN_MODAL, { type: "gift_accept", location: null });
          const obj = rootNavigationRef1(inviteCode[26]);
          const result = payload(inviteCode[27]).openGiftCodeRedeemModal(giftCode.giftCode.code);
        })
        .catch(() => {});
      flag3 = true;
      let nextPromise = giftCode.then((giftCode) => {
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
      let obj3 = { guildId: guildId2, channelId: channelId2, messageId: "Array", navigationSettings: false };
      let obj4 = { safe, navigationReplace, waitForConnection, skipMessageFetch };
      obj3.navigationSettings = obj4;
      rootNavigationRef1(inviteCode[29])(obj3);
      flag2 = true;
      const obj26 = payload(inviteCode[28]);
    }
    flag = flag2;
  } else {
    if (constants2.CHANNEL !== type) {
      if (constants2.MESSAGE !== type) {
        if (constants2.SESSION_MANAGEMENT === type) {
          pathname(() => {
            let obj = rootNavigationRef1(inviteCode[17]);
            obj.popAll();
            obj = { screen: constants3.SESSIONS };
            payload(inviteCode[21]).openUserSettings(obj);
          });
          flag = true;
        } else if (constants2.FAMILY_CENTER === type) {
          let obj5 = payload;
          if (payload == null) {
            obj5 = {};
          }
          pathname = obj5.pathname;
          let tmp114 = null;
          if (undefined !== pathname) {
            tmp114 = pathname;
          }
          pathname = tmp114;
          pathname(() => {
            let obj = ModalActionCreatorsDefault;
            obj.popAll();
            obj = { screen: constants3.FAMILY_CENTER };
            openUserSettings.openUserSettings(obj);
            let isMatch = null != pathname;
            if (isMatch) {
              isMatch = regex.test(pathname);
            }
            if (isMatch) {
              const result = FamilyCenterNativeUtils.handleFamilyCenterQRCodeScan(pathname, "NativeCameraScan");
              const tmp3Result = FamilyCenterNativeUtils;
            }
          });
          flag = true;
        } else if (constants2.OAUTH2_AUTHORIZE === type) {
          pathname(() => {
            let obj = ModalActionCreatorsDefault;
            obj.popAll();
            if (obj2.isMidjourneyOnboardingFlow()) {
              CreateGuildModalActionCreatorsDefault.openCreateGuildModal((guildId) => {
                if (type.type === OAUTH2_AUTHORIZE.OAUTH2_AUTHORIZE) {
                  let obj = rootNavigationRef1(inviteCode[17]);
                  obj.popAll();
                  obj = {};
                  const obj2 = rootNavigationRef1(inviteCode[17]);
                  const merged = Object.assign(tmp.props);
                  obj.guildId = guildId;
                  obj.callback = rootNavigationRef1(inviteCode[35]);
                  obj.dismissOAuthModal = function dismissOAuthModal() {
                    closure_1_1(closure_1_3[17]).popWithKey(closure_1_21);
                  };
                  obj2.pushLazy(payload(inviteCode[34])(inviteCode[33], inviteCode.paths), obj, closure_2_21);
                  const tmp7 = payload(inviteCode[34])(inviteCode[33], inviteCode.paths);
                }
              });
              const tmpResult = CreateGuildModalActionCreatorsDefault;
            } else {
              obj = {};
              let merged = Object.assign(payload.props);
              obj.callback = authorizeCallbackDefault;
              ApplicationUtils.openOAuth2Modal(obj);
              const tmp4Result = ApplicationUtils;
            }
            obj2 = MidjourneyOnboardingUtils;
          });
          flag = true;
        } else if (constants2.ONE_TIME_LOGIN === type) {
          rootNavigationRef1(inviteCode[17]).popAll();
          const obj20 = rootNavigationRef1(inviteCode[17]);
          let obj6 = { token: payload.token };
          rootNavigationRef1(inviteCode[17]).pushLazy(
            payload(inviteCode[34])(inviteCode[37], inviteCode.paths),
            obj6,
            "ONE_TIME_LOGIN_MODAL",
          );
          flag = true;
          const obj21 = rootNavigationRef1(inviteCode[17]);
        } else if (constants2.REMOTE_AUTH === type) {
          remoteAuthFingerprint = payload.remoteAuthFingerprint;
          pathname(
            null != remoteAuthFingerprint
              ? () => {
                  const obj = { remoteAuthFingerprint };
                  obj.pushLazy(asyncRequireImpl(13863, dependencyMap.paths), obj, "REMOTE_AUTH_MODAL");
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
            let obj7 = { userId: payload.userId };
            const result3 = payload(inviteCode[20]).showUserProfileActionSheetPostConnection(obj7);
            flag = true;
            const obj16 = payload(inviteCode[20]);
          }
        } else if (constants2.BUILD_OVERRIDE === type) {
          let obj12 = rootNavigationRef1(inviteCode[17]);
          obj12.popAll();
          let obj13 = rootNavigationRef1(inviteCode[17]);
          const obj8 = { overrideUrl: payload.overrideUrl };
          obj13.pushLazy(payload(inviteCode[34])(inviteCode[43], inviteCode.paths), obj8);
          flag = true;
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
                  let obj = { value, done: true };
                  return obj;
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
                      obj = { value, done: true };
                      return obj;
                    } else {
                      closure_2 = tmp2;
                      closure_129_0 = undefined;
                      closure_129_1 = undefined;
                      closure_129_2 = undefined;
                      tmp3(paths[17]).popAll();
                      ({ guildId: closure_129_0, guildEventId: closure_129_1 } = payload);
                      paths = 1;
                      c4 = 1;
                      let obj1 = { value: payload(paths[34])(paths[44], paths.paths), done: false };
                      return obj1;
                    }
                  } else {
                    if (1 === tmp6) {
                      if (arg0 === 1) {
                        c4 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c4 = 3;
                        let obj2 = { value, done: true };
                        return obj2;
                      } else {
                        if (null != _default.getGuild(closure_129_0)) {
                          obj1 = payload(paths[45]);
                          obj1.transitionToGuild(closure_129_0);
                        }
                        guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(closure_129_1);
                        payload = guildScheduledEvent;
                        if (guildScheduledEvent == null) {
                          let obj4 = tmp3(paths[46]);
                          paths = 2;
                          c4 = 1;
                          const obj3 = { value: obj4.fetchGuildEvent(closure_129_0, closure_129_1), done: false };
                          return obj3;
                        }
                        _default = value.default;
                      }
                    } else if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      payload = value;
                    }
                    closure_129_2 = payload;
                    if (null != closure_129_2) {
                      obj2 = payload(paths[47]);
                      obj4 = { eventId: closure_129_2.id, event: closure_129_2 };
                      const result = obj2.openGuildEventDetails(obj4);
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
          let obj10 = rootNavigationRef1(inviteCode[48]);
          const _HermesInternal = HermesInternal;
          let obj9 = { nonce, fingerprint, skipLoginRedirect: true };
          const result4 = obj10.redirectWithHandoffToken("" + redirectUrl.pathname + redirectUrl.search, obj9);
          flag = true;
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
                  let obj = { value, done: true };
                  return obj;
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
                      obj = { value, done: true };
                      return obj;
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
                        const obj1 = { value: tmp4(paths[34])(paths[44], paths.paths), done: false };
                        return obj1;
                      }
                    }
                  } else if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    if (null != _default.getGuild(closure_128_0.guildId)) {
                      obj = tmp4(paths[45]);
                      obj.transitionToGuild(closure_128_0.guildId);
                    }
                    let obj3 = {
                      streamType: constants.GUILD,
                      ownerId: closure_128_0.userId,
                      guildId: closure_128_0.guildId,
                      channelId: closure_128_0.channelId,
                    };
                    v1(paths[49])(obj3);
                    _default = value.default;
                  }
                  let tmp23 = "transfer_cancelled" === closure_128_0.action;
                  if (tmp23) {
                    tmp23 = "xbox" === closure_128_0.via;
                  }
                  if (tmp23) {
                    obj3 = tmp4(paths[50]);
                    obj3.disconnectRemote();
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
                obj10 = { search: null };
                obj7 = payload(inviteCode[52]);
                ({ highlightChannelId: obj9.highlight_channel_id, highlightMessageId: obj9.highlight_message_id } =
                  payload);
                obj10.search = obj7.stringify({ highlight_channel_id: null, highlight_message_id: null });
                tmp69 = obj10;
                const obj11 = { highlight_channel_id: null, highlight_message_id: null };
              }
            }
            obj9 = payload(inviteCode[53]);
            obj9.transitionTo(closure_14.CHANNEL(payload.guildId, StaticChannelRoute.GUILD_HOME), tmp69);
            flag = true;
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
              const obj = {
                type: "USER_CONNECTIONS_LINK_CALLBACK",
                provider: null,
                callbackCode: null,
                callbackState: null,
              };
              ({
                provider: obj2.provider,
                callbackCode: obj2.callbackCode,
                callbackState: obj2.callbackState,
              } = payload);
              obj.dispatch(obj);
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
                  let obj = { value, done: true };
                  return obj;
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
                      obj = { value, done: true };
                      return obj;
                    } else {
                      closure_6 = tmp5;
                      closure_133_0 = undefined;
                      closure_133_1 = undefined;
                      const searchParams = payload.searchParams;
                      const state = searchParams.state;
                      const tmp50 = tmp2(searchParams, obj2);
                      if (null != state) {
                        const obj1 = { code: searchParams.code, state };
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
                          obj2 = dependencyMap[closure_2];
                          while (obj2 !== undefined) {
                            dependencyMap2 = tmp17;
                            closure_2 = tmp16;
                            closure_1 = tmp15;
                            dependencyMap = tmp14;
                            if (!obj2.startsWith("openid.")) {
                              continue;
                            } else {
                              obj2 = tmp19;
                              if (null == tmp19) {
                                obj2 = {};
                              }
                              obj2[obj2] = searchParams[obj2];
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
                          obj1.openid_params = tmp19;
                        }
                        let obj4 = closure_1(4763);
                        obj4.popAll();
                        const obj3 = { screen: constants.CONNECTIONS };
                        dependencyMap(7382).openUserSettings(obj3);
                        const obj6 = dependencyMap(7382);
                        tmp10 = tmp50;
                        c7 = 1;
                        c8 = 1;
                        obj4 = { value: closure_1(5406).callback(payload.provider, obj1), done: false };
                        return obj4;
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
                      closure_1(4255).openURL(closure_133_1.toString());
                      const obj13 = closure_1(4255);
                    }
                    const obj12 = closure_1(1365);
                  }
                  c8 = 3;
                  obj = { value, done: true };
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
            let obj = rootNavigationRef1(inviteCode[17]);
            obj.popAll();
            obj = { screen: constants3.CONNECTIONS };
            payload(inviteCode[21]).openUserSettings(obj);
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
          obj5 = rootNavigationRef1(inviteCode[58]);
          obj5.showModal(payload.userCode);
          flag = true;
        } else if (constants2.GUILD_SETTINGS_PICKER === type) {
          pathname(() => {
            const obj = {
              section: payload.settingsSection,
              subsection: payload.settingsSubsection,
              feature: payload.feature,
            };
            const result = obj.openGuildSettingsPickerModal(obj);
          });
          flag = true;
        } else if (constants2.SHARE === type) {
          obj1 = payload(inviteCode[60]);
          flag = true;
          if (obj1.isIOS()) {
            obj2 = rootNavigationRef1(tmp47[17]);
            obj2.popAll();
            obj3 = rootNavigationRef1(tmp47[17]);
            obj12 = { text: null, channelId: null, shareId: null, attachmentManifest: null };
            ({
              text: obj5.text,
              channelId: obj5.channelId,
              shareId: obj5.shareId,
              attachmentManifest: obj5.attachmentManifest,
            } = payload);
            obj3.pushLazy(tmp46(tmp47[34])(tmp47[61], tmp47.paths), obj12, SHARE_SCREEN_MODAL_KEY, {
              presentation: "modal",
            });
            flag = true;
          }
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
                obj = rootNavigationRef2(inviteCode[64]);
                const result5 = obj.openBuildInstallerUrl(payload.url);
                flag = true;
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
                        let obj = { value, done: true };
                        return obj;
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
                            obj = { value, done: true };
                            return obj;
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
                              const obj1 = { value: tmp3(paths[34])(paths[44], paths.paths), done: false };
                              return obj1;
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
                        obj = { value, done: true };
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
                  const obj = {
                    analyticsLocations: null,
                    analyticsSource: null,
                    screen: null,
                    initialProductSkuId: null,
                  };
                  const items = [AnalyticsLocationDefault.DEEPLINK];
                  obj.analyticsLocations = items;
                  obj.analyticsSource = AnalyticsLocationDefault.DEEPLINK;
                  ({ screen: obj2.screen, skuId: obj2.initialProductSkuId } = payload);
                  const result = obj.openCollectiblesShopMobile(obj);
                });
                flag = true;
              } else if (constants2.AUTHORIZED_APPS === type) {
                pathname(() => {
                  let obj = rootNavigationRef1(inviteCode[17]);
                  obj.popAll();
                  obj = { screen: constants3.AUTHORIZED_APPS };
                  payload(inviteCode[21]).openUserSettings(obj);
                });
                flag = true;
              } else if (constants2.DAVE_PROTOCOL_VERIFICATION === type) {
                pathname(() => {
                  const obj = { userId: payload.userId, fingerprint: null };
                  const fingerprint = payload.fingerprint;
                  obj.fingerprint = fingerprint.replaceAll(" ", "+");
                  const result = obj.handleSecureFramesUserVerificationLink(obj);
                });
                flag = true;
              } else if (constants2.QUESTS === type) {
                pathname(() => {
                  if (null != payload.questId) {
                    let obj = {
                      questId: payload.questId,
                      event: constants.QUEST_SHARE_LINK_DEEP_LINKED_INTO_MOBILE_CLIENT,
                      sourceQuestContent: QuestContent.QuestContent.QUEST_EMBED_MOBILE,
                      properties: null,
                    };
                    obj = { referrer_id: payload.referrerId };
                    obj.properties = obj;
                    obj.trackQuestEvent(obj);
                  }
                  let sort;
                  if (payload != null) {
                    sort = payload.sort;
                  }
                  let filter;
                  if (payload != null) {
                    filter = payload.filter;
                  }
                  const obj1 = { scrollToQuestId: payload.questId, sort: null, filter: null, fromContent: null };
                  let tmp9 = null;
                  if (null != sort) {
                    tmp9 = null;
                    if ("" !== sort) {
                      tmp9 = sort;
                    }
                  }
                  obj1.sort = tmp9;
                  let tmp10 = null;
                  if (null != filter) {
                    tmp10 = null;
                    if ("" !== filter) {
                      tmp10 = filter;
                    }
                  }
                  obj1.filter = tmp10;
                  obj1.fromContent = QuestContent.QuestContent.QUEST_SHARE_LINK;
                  QuestUtils.openQuestHome(obj1);
                });
                flag = true;
              } else if (constants2.QUEST_HOME_PREVIEW === type) {
                pathname(() => {
                  let obj = { screen: constants3.QUESTS, params: null };
                  obj = { previewAdCreativeIds: payload.adCreativeIds };
                  obj.params = obj;
                  obj.openUserSettings(obj);
                });
                flag = true;
              } else if (constants2.QUEST_BAR_PREVIEW === type) {
                pathname(() => {
                  let obj = ModalActionCreatorsDefault;
                  obj.popAll();
                  obj = { screen: "guilds", guildId };
                  NavigationRouteUtils.navigateToRootTab(obj);
                  const dockCreativePreview = BountyActionCreators.fetchDockCreativePreview(payload.adCreativeId);
                });
                flag = true;
              } else if (constants2.GIFT === type) {
                pathname(() => {
                  payload(inviteCode[74]);
                  const obj = { analyticsLocations: null };
                  const items = [rootNavigationRef1(inviteCode[68]).DEEPLINK];
                  obj.analyticsLocations = items;
                  obj.openGiftModal(obj);
                });
                flag = true;
              } else if (constants2.NITRO_HOME === type) {
                pathname(() => {
                  const section = payload.section;
                  PremiumNitroNavigationStore.setState({ scrollToSectionId: section });
                  const obj = { screen: constants3.PREMIUM };
                  obj.openUserSettings(obj);
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
                  let obj = rootNavigationRef1(inviteCode[17]);
                  obj.popAll();
                  obj = { screen: constants3.CONTENT_AND_SOCIAL, params: null };
                  obj = { tab: constants2.CONNECTED_GAMES };
                  obj.params = obj;
                  payload(inviteCode[21]).openUserSettings(obj);
                });
                flag = true;
              } else if (constants2.BOOST_MARKETING === type) {
                pathname(() => {
                  actions_BoostingActionCreators.openApplyBoostModal(payload.guildId);
                });
                flag = true;
              } else if (constants2.BOOST_SETTINGS === type) {
                pathname(() => {
                  let obj = rootNavigationRef1(inviteCode[17]);
                  obj.popAll();
                  obj = { screen: constants3.GUILD_BOOSTING };
                  payload(inviteCode[21]).openUserSettings(obj);
                });
                flag = true;
              } else if (constants2.QUEST_PREVIEW_TOOL === type) {
                pathname(() => {
                  ModalActionCreatorsDefault.popAll();
                  closeVoicePanelsDefault();
                  const timerId = setTimeout(() => {
                    payload(inviteCode[21]);
                    let obj = { screen: constants3.QUEST_PREVIEW_TOOL_2, params: null };
                    obj = { questId: questId.questId };
                    obj.params = obj;
                    obj.openUserSettings(obj);
                  }, 1);
                });
                flag = true;
              } else if (constants2.SUBSCRIPTION_SETTINGS === type) {
                pathname(() => {
                  let obj = rootNavigationRef1(inviteCode[17]);
                  obj.popAll();
                  obj = { screen: constants3.GUILD_ROLE_SUBSCRIPTIONS };
                  payload(inviteCode[21]).openUserSettings(obj);
                });
                flag = true;
              } else if (constants2.GAME_PROFILE === type) {
                gameId = payload.gameId;
                pathname(() => {
                  let obj = ModalActionCreatorsDefault;
                  obj.popAll();
                  obj = {
                    gameId,
                    source: GameProfileAnalyticUtils.GameProfileSources.Deeplink,
                    gameProfileModalChecks: { shouldOpenGameProfile: true, gameId },
                  };
                  GameProfileActionCreators.default.openGameProfileModal(obj);
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
      obj13 = { guildId, channelId, messageId, navigationSettings: null, summaryId: null };
      const obj14 = { safe, navigationReplace, waitForConnection, skipMessageFetch };
      obj13.navigationSettings = obj14;
      obj13.summaryId = summaryId;
      rootNavigationRef1(inviteCode[29])(obj13);
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
