// discord_app/modules/links/native/handleSupportedURL.tsx
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import scheduledEventSort from "../../guild_scheduled_events/GuildScheduledEventStore.tsx";
import { handleMobileWebCheckoutStatus as closure_9 } from "../../premium/native/PremiumPlanPurchasedStore.tsx";
import zustandStore from "../../user_settings/premium/native/PremiumNitroNavigationStore.tsx";
import fetchFingerprint from "../../../stores/AuthenticationStore.tsx";
import ME from "../../../Constants.tsx";
import { StaticChannelRoute } from "../../channel/ChannelConstants.tsx";
import { StreamTypes } from "../../go_live/Constants.tsx";
import { NativePermissionTypes } from "../../native_permissions/NativePermissionConstants.tsx";
import { OAUTH2_AUTHORIZE_MODAL_KEY as closure_20 } from "../../oauth2/native/Constants.tsx";
import { FAMILY_CENTER_LINK_REQUEST_REGEX as closure_21 } from "../../parent_tools/FamilyCenterConstants.tsx";
import { MobileWebRedirectCheckoutDeepLinkActions as closure_22 } from "../../payments/PaymentConstants.tsx";
import { SHARE_SCREEN_MODAL_KEY } from "../../share/native/ShareScreenConstants.tsx";
import { AccountSettingsTabs } from "../../user_settings/account/native/SettingsAccountConstants.tsx";
import { MobileUserSettings } from "../../user_settings/core/native/SettingsConstants.tsx";

const require = fn;
let closure_4 = ["code", "state"];
require("processCallbacks").addPostConnectionCallback;
({ AnalyticEvents: closure_12, LinkingTypes: map1, Routes: closure_14, UserSettingsSections: closure_15, PlatformTypes: closure_16 } = ME);
let result = require("obj132").fileFinishedImporting("modules/links/native/handleSupportedURL.tsx");

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
  if (constants.CONTACT_SYNC === type) {
    let result = payload(inviteCode[17]).openContactSyncModalDeeplink();
    let flag = true;
    const obj46 = payload(inviteCode[17]);
  } else if (constants.COMPOSE_MESSAGE === type) {
    rootNavigationRef1(inviteCode[18]).popAll();
    const obj42 = rootNavigationRef1(inviteCode[18]);
    const rootNavigationRef = payload(inviteCode[19]).getRootNavigationRef();
    flag = true;
    if (null != rootNavigationRef) {
      let obj = { screen: "new-message", params: null };
      obj[1] = { sourcePage: "Deeplink" };
      rootNavigationRef.navigate("friends", obj);
      flag = true;
    }
    const obj43 = payload(inviteCode[19]);
  } else if (constants.ADD_FRIENDS === type) {
    rootNavigationRef1(inviteCode[18]).popAll();
    const obj37 = rootNavigationRef1(inviteCode[18]);
    const tmp152 = rootNavigationRef1;
    const tmp153 = inviteCode;
    rootNavigationRef1 = payload(inviteCode[19]).getRootNavigationRef();
    if (null == rootNavigationRef1) {
      const result1 = tmp152(tmp153[20]).openAddFriendModalDeeplink();
      flag = true;
      const tmp152Result = tmp152(tmp153[20]);
    } else if (rootNavigationRef1.isReady()) {
      obj = { screen: "add-friends", params: null };
      obj[1] = { sourcePage: "Deeplink" };
      rootNavigationRef1.navigate("friends", obj);
      flag = true;
    } else {
      pathname(() => rootNavigationRef1.navigate("friends", { screen: "add-friends", params: { sourcePage: "Deeplink" } }));
      flag = true;
    }
    const obj38 = payload(inviteCode[19]);
  } else if (constants.FRIENDS === type) {
    rootNavigationRef1(inviteCode[18]).popAll();
    const obj32 = rootNavigationRef1(inviteCode[18]);
    const tmp144 = inviteCode;
    const tmp146 = payload;
    rootNavigationRef2 = payload(inviteCode[19]).getRootNavigationRef();
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
      obj1 = { userId: null };
      obj1[0] = payload.userId;
      const result2 = tmp146(tmp144[21]).showUserProfileActionSheetPostConnection(obj1);
      flag = true;
      const tmp146Result = tmp146(tmp144[21]);
    }
    const obj33 = payload(inviteCode[19]);
  } else if (constants.EDIT_PROFILE === type) {
    pathname(() => {
      let obj = rootNavigationRef1(inviteCode[18]);
      obj.popAll();
      obj = { screen: constants2.PROFILE_CUSTOMIZATION };
      payload(inviteCode[22]).openUserSettings(obj);
    });
    flag = true;
  } else if (constants.INVITE === type) {
    inviteCode = payload.inviteCode;
    username = payload.username;
    deeplinkAttemptId = payload.deeplinkAttemptId;
    if (!rootNavigationRef3.isAuthenticated()) {
      if (null != inviteCode) {
        let obj2 = { deeplinkAttemptId: null, location: "Deep Link" };
        obj2[0] = deeplinkAttemptId;
        payload(inviteCode[23]).showInvite(inviteCode, username, obj2);
        flag = true;
        const obj30 = payload(inviteCode[23]);
      }
    }
    pathname(() => {
      let obj = rootNavigationRef1(inviteCode[24]);
      obj.hideModal();
      if (null != inviteCode) {
        const result = payload(inviteCode[25]).dismissGlobalKeyboard();
        const obj2 = payload(inviteCode[25]);
        obj = { deeplinkAttemptId: null, location: "Deep Link" };
        obj[0] = deeplinkAttemptId;
        payload(inviteCode[23]).showInvite(tmp3, username, obj);
        const obj3 = payload(inviteCode[23]);
      }
    });
    flag = true;
  } else if (constants.GUILD_TEMPLATE === type) {
    guildTemplateCode = payload.guildTemplateCode;
    pathname(() => {
      payload(inviteCode[23]).clearDisplayedInvite();
      if (null != guildTemplateCode) {
        const result = payload(inviteCode[25]).dismissGlobalKeyboard();
        const tmpResult = payload(inviteCode[25]);
        rootNavigationRef1(inviteCode[24]).showModal(tmp4);
        const obj3 = rootNavigationRef1(inviteCode[24]);
      }
      const obj = payload(inviteCode[23]);
    });
    flag = true;
  } else if (constants.GIFT_CODE === type) {
    let giftCode = payload.giftCode;
    let flag3 = null != giftCode;
    if (flag3) {
      giftCode = payload(inviteCode[26]).resolveGiftCode(giftCode);
      const obj29 = payload(inviteCode[26]);
      giftCode.then((result) => {
        rootNavigationRef1(inviteCode[27]).track(constants.OPEN_MODAL, { type: "gift_accept", location: null });
        const obj = rootNavigationRef1(inviteCode[27]);
        result = payload(inviteCode[28]).openGiftCodeRedeemModal(result.giftCode.code);
      }).catch((error) => {

      });
      flag3 = true;
      let nextPromise = giftCode.then((result) => {
        rootNavigationRef1(inviteCode[27]).track(constants.OPEN_MODAL, { type: "gift_accept", location: null });
        const obj = rootNavigationRef1(inviteCode[27]);
        result = payload(inviteCode[28]).openGiftCodeRedeemModal(result.giftCode.code);
      });
    }
    flag = flag3;
  } else if (constants.ROLL_DICE === type) {
    ({ guildId: guildId2, channelId: channelId2 } = payload);
    let flag2 = null != guildId2;
    ({ diceCount, diceSides } = payload);
    if (flag2) {
      flag2 = null != channelId2;
    }
    if (flag2) {
      payload(inviteCode[29]).startDiceRoll(channelId2, diceCount, diceSides);
      let obj3 = { guildId: null, channelId: null, messageId: "Array", navigationSettings: true };
      obj3[0] = guildId2;
      obj3[1] = channelId2;
      let obj4 = { safe: null, navigationReplace: null, waitForConnection: null, skipMessageFetch: null };
      obj4[0] = safe;
      obj4[1] = navigationReplace;
      obj4[2] = waitForConnection;
      obj4[3] = skipMessageFetch;
      obj3[3] = obj4;
      rootNavigationRef1(inviteCode[30])(obj3);
      flag2 = true;
      const obj26 = payload(inviteCode[29]);
    }
    flag = flag2;
  } else {
    if (constants.CHANNEL !== type) {
      if (constants.MESSAGE !== type) {
        if (constants.SESSION_MANAGEMENT === type) {
          pathname(() => {
            let obj = rootNavigationRef1(inviteCode[18]);
            obj.popAll();
            obj = { screen: constants2.SESSIONS };
            payload(inviteCode[22]).openUserSettings(obj);
          });
          flag = true;
        } else if (constants.FAMILY_CENTER === type) {
          let obj5 = payload;
          if (payload == null) {
            obj5 = {};
          }
          pathname = obj5.pathname;
          let tmp112 = null;
          if (undefined !== pathname) {
            tmp112 = pathname;
          }
          pathname = tmp112;
          pathname(() => {
            let obj = rootNavigationRef1(inviteCode[18]);
            obj.popAll();
            obj = { screen: closure_1_15.FAMILY_CENTER };
            payload(inviteCode[22]).openUserSettings(obj);
            let isMatch = null != pathname;
            if (isMatch) {
              isMatch = closure_1_21.test(pathname);
            }
            if (isMatch) {
              const result = payload(inviteCode[31]).handleFamilyCenterQRCodeScan(pathname, "NativeCameraScan");
              const tmp3Result = payload(inviteCode[31]);
            }
            const obj2 = payload(inviteCode[22]);
          });
          flag = true;
        } else if (constants.OAUTH2_AUTHORIZE === type) {
          pathname(() => {
            let obj = rootNavigationRef1(inviteCode[18]);
            obj.popAll();
            if (obj2.isMidjourneyOnboardingFlow()) {
              rootNavigationRef1(inviteCode[33]).openCreateGuildModal((guildId) => {
                if (type.type === closure_1_13.OAUTH2_AUTHORIZE) {
                  let obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  obj = {};
                  const obj2 = rootNavigationRef1(inviteCode[18]);
                  const merged = Object.assign(tmp.props);
                  obj.guildId = guildId;
                  obj.callback = rootNavigationRef1(inviteCode[36]);
                  obj.dismissOAuthModal = function dismissOAuthModal() {
                    callback(table[18]).popWithKey(closure_20);
                  };
                  obj2.pushLazy(payload(inviteCode[35])(inviteCode[34], inviteCode.paths), obj, closure_1_20);
                  const tmp7 = payload(inviteCode[35])(inviteCode[34], inviteCode.paths);
                }
              });
              const tmpResult = rootNavigationRef1(inviteCode[33]);
            } else {
              obj = {};
              let merged = Object.assign(payload.props);
              obj.callback = rootNavigationRef1(inviteCode[36]);
              payload(inviteCode[37]).openOAuth2Modal(obj);
              const tmp4Result = payload(inviteCode[37]);
            }
            obj2 = payload(inviteCode[32]);
          });
          flag = true;
        } else if (constants.ONE_TIME_LOGIN === type) {
          rootNavigationRef1(inviteCode[18]).popAll();
          const obj20 = rootNavigationRef1(inviteCode[18]);
          let obj6 = { token: null };
          obj6[0] = payload.token;
          rootNavigationRef1(inviteCode[18]).pushLazy(payload(inviteCode[35])(inviteCode[38], inviteCode.paths), obj6, "ONE_TIME_LOGIN_MODAL");
          flag = true;
          const obj21 = rootNavigationRef1(inviteCode[18]);
        } else if (constants.REMOTE_AUTH === type) {
          remoteAuthFingerprint = payload.remoteAuthFingerprint;
          pathname(null != remoteAuthFingerprint ? (() => {
            rootNavigationRef1(inviteCode[18]);
            const obj = { remoteAuthFingerprint };
            obj.pushLazy(payload(inviteCode[35])(inviteCode[39], inviteCode.paths), obj, "REMOTE_AUTH_MODAL");
          }) : (() => {
            let obj = payload(inviteCode[40]);
            const tmp3 = payload(inviteCode[40]).isMetaQuest() ? constants.HEADSET_CAMERA : constants.CAMERA;
            const permission = rootNavigationRef1(inviteCode[41]).requestPermission(tmp3);
            const obj2 = rootNavigationRef1(inviteCode[41]);
            permission.then((result) => {
              if (result) {
                callback2(paths[18]).pushLazy(callback(paths[35])(paths[42], paths.paths), { showHelp: true });
                const obj = callback2(paths[18]);
              }
            }).catch((error) => {

            });
            const nextPromise = permission.then((result) => {
              if (result) {
                callback2(paths[18]).pushLazy(callback(paths[35])(paths[42], paths.paths), { showHelp: true });
                const obj = callback2(paths[18]);
              }
            });
          }));
          flag = true;
        } else if (constants.PROMOTIONS === type) {
          rootNavigationRef1(inviteCode[43]).performURLNavigation(payload.url);
          flag = true;
          const obj19 = rootNavigationRef1(inviteCode[43]);
        } else if (constants.FEATURE_PROMO_URL === type) {
          rootNavigationRef1(inviteCode[43]).openURLExternally(payload.promoUrl);
          flag = true;
          const obj18 = rootNavigationRef1(inviteCode[43]);
        } else if (constants.USER_PROFILE === type) {
          flag = true;
          if (null != payload.userId) {
            let obj7 = { userId: null };
            obj7[0] = payload.userId;
            const result3 = payload(inviteCode[21]).showUserProfileActionSheetPostConnection(obj7);
            flag = true;
            const obj16 = payload(inviteCode[21]);
          }
        } else if (constants.BUILD_OVERRIDE === type) {
          let obj12 = rootNavigationRef1(inviteCode[18]);
          obj12.popAll();
          let obj13 = rootNavigationRef1(inviteCode[18]);
          const obj8 = { overrideUrl: null };
          obj8[0] = payload.overrideUrl;
          obj13.pushLazy(payload(inviteCode[35])(inviteCode[44], inviteCode.paths), obj8);
          flag = true;
        } else if (constants.GUILD_EVENT_DETAILS === type) {
          pathname(guildTemplateCode(function*() {
            if (c4 === 2) {
              c4 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp5 === 3) {
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
                c4 = 2;
                if (0 === paths) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let id = tmp2;
                    c1 = tmp3;
                    closure_0 = undefined;
                    c1 = undefined;
                    id = undefined;
                    rootNavigationRef1(paths[18]).popAll();
                    ({ guildId: closure_0, guildEventId: c1 } = payload);
                    paths = 1;
                    c4 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = payload(paths[35])(paths[45], paths.paths);
                    return obj1;
                  }
                } else {
                  if (1 === tmp6) {
                    if (arg0 === 1) {
                      c4 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      let obj2 = { value: null, done: true };
                      obj2[0] = arg1;
                      return obj2;
                    } else {
                      if (null != _default.getGuild(closure_0)) {
                        obj1 = payload(paths[46]);
                        obj1.transitionToGuild(closure_0);
                      }
                      const guildScheduledEvent = remoteAuthFingerprint.getGuildScheduledEvent(c1);
                      closure_0 = guildScheduledEvent;
                      if (guildScheduledEvent == null) {
                        let obj4 = rootNavigationRef1(paths[47]);
                        paths = 2;
                        c4 = 1;
                        const obj3 = { value: null, done: false };
                        obj3[0] = obj4.fetchGuildEvent(payload, rootNavigationRef1);
                        return obj3;
                      }
                      _default = arg1.default;
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
                    closure_0 = arg1;
                  }
                  id = closure_0;
                  if (null != id) {
                    obj2 = payload(paths[48]);
                    obj4 = { eventId: null, event: null };
                    obj4[0] = id.id;
                    obj4[1] = id;
                    const result = obj2.openGuildEventDetails(obj4);
                  }
                  c4 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                }
              } catch (tmp35) {
                c4 = tmp;
                throw tmp35;
              }
            }
          }));
          flag = true;
        } else if (constants.MOBILE_WEB_HANDOFF === type) {
          const redirectUrl = payload.redirectUrl;
          ({ nonce, fingerprint } = payload);
          let obj10 = rootNavigationRef1(inviteCode[49]);
          const _HermesInternal = HermesInternal;
          let obj9 = { nonce: null, fingerprint: null, skipLoginRedirect: true };
          obj9[0] = nonce;
          obj9[1] = fingerprint;
          const result4 = obj10.redirectWithHandoffToken("" + redirectUrl.pathname + redirectUrl.search, obj9);
          flag = true;
        } else if (constants.VOICE_CHANNEL === type) {
          pathname(guildTemplateCode(function*() {
            if (c2 === 2) {
              c2 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp3 === 3) {
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
                c2 = 2;
                if (0 === v0) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    closure_0 = tmp4;
                    let tmp19 = null != payload.guildId;
                    if (tmp19) {
                      tmp19 = null != payload.channelId;
                    }
                    if (tmp19) {
                      tmp19 = null != payload.userId;
                    }
                    if (tmp19) {
                      v0(inviteCode[18]).popAll();
                      v0 = 1;
                      c2 = 1;
                      obj1 = { value: null, done: false };
                      obj1[0] = payload(inviteCode[35])(inviteCode[45], inviteCode.paths);
                      return obj1;
                    }
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else {
                  if (null != _default.getGuild(closure_0.guildId)) {
                    obj = payload(inviteCode[46]);
                    obj.transitionToGuild(closure_0.guildId);
                  }
                  let obj3 = { streamType: null, ownerId: null, guildId: null, channelId: null };
                  obj3[0] = closure_1_18.GUILD;
                  obj3[1] = closure_0.userId;
                  obj3[2] = closure_0.guildId;
                  obj3[3] = closure_0.channelId;
                  v0(inviteCode[50])(obj3);
                  _default = arg1.default;
                }
                let tmp23 = "transfer_cancelled" === closure_0.action;
                if (tmp23) {
                  tmp23 = "xbox" === closure_0.via;
                }
                if (tmp23) {
                  obj3 = payload(inviteCode[51]);
                  obj3.disconnectRemote();
                }
                c2 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              } catch (tmp37) {
                c2 = tmp;
                throw tmp37;
              }
            }
          }));
          flag = true;
        } else if (constants.ICYMI === type) {
          pathname(() => {
            payload(inviteCode[52]).navigateToRootTab({ screen: "icymi" });
          });
          flag = true;
        } else if (constants.GUILD_HOME === type) {
          flag = true;
          if (null != payload.guildId) {
            let tmp67;
            if (null != payload.highlightChannelId) {
              if (null != payload.highlightMessageId) {
                obj10 = { search: null };
                obj7 = payload(inviteCode[53]);
                ({ highlightChannelId: obj9[0], highlightMessageId: obj9[1] } = payload);
                obj10[0] = obj7.stringify({ highlight_channel_id: null, highlight_message_id: null });
                tmp67 = obj10;
              }
            }
            obj9 = payload(inviteCode[54]);
            obj9.transitionTo(closure_14.CHANNEL(payload.guildId, StaticChannelRoute.GUILD_HOME), tmp67);
            flag = true;
          }
        } else if (constants.USER_CONNECTIONS_LINK_CALLBACK === type) {
          pathname(() => {
            let hasItem = null != payload.callbackCode && null != payload.callbackState && null != payload.provider;
            if (hasItem) {
              const items = [, , , ];
              ({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = closure_1_16);
              hasItem = items.includes(payload.provider);
            }
            if (hasItem) {
              rootNavigationRef1(inviteCode[55]);
              const obj = { type: "USER_CONNECTIONS_LINK_CALLBACK", provider: null, callbackCode: null, callbackState: null };
              ({ provider: obj2[1], callbackCode: obj2[2], callbackState: obj2[3] } = payload);
              obj.dispatch(obj);
            }
          });
          flag = true;
        } else if (constants.USER_CONNECTIONS_CALLBACK === type) {
          pathname(guildTemplateCode(function*() {
            if (c8 === 2) {
              c8 = 3;
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
                c8 = 2;
                if (0 === c7) {
                  if (arg0 === 1) {
                    c8 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c8 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    closure_6 = tmp5;
                    closure_5 = tmp2;
                    let body;
                    closure_1 = undefined;
                    const searchParams = payload.searchParams;
                    const state = searchParams.state;
                    const tmp51 = deeplinkAttemptId(searchParams, username);
                    if (null != state) {
                      obj1 = { code: null, state: null };
                      obj1[0] = searchParams.code;
                      obj1[1] = state;
                      closure_1 = tmp51;
                      const keys = Object.keys();
                      if (keys === undefined) {
                        closure_3 = tmp12;
                        closure_2 = tmp11;
                        closure_1 = tmp51;
                        body = keys;
                      } else {
                        closure_3 = tmp12;
                        closure_2 = tmp11;
                        closure_1 = tmp10;
                        body = keys;
                        let obj2 = body[closure_2];
                        while (obj2 !== undefined) {
                          closure_3 = tmp17;
                          closure_2 = tmp16;
                          closure_1 = tmp15;
                          body = tmp14;
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
                        closure_3 = tmp17;
                        closure_2 = tmp16;
                        closure_1 = tmp15;
                        body = tmp14;
                      }
                      if (null != tmp19) {
                        obj1.openid_params = tmp19;
                      }
                      let obj4 = rootNavigationRef1(inviteCode[18]);
                      obj4.popAll();
                      const obj3 = { screen: null };
                      obj3[0] = closure_1_15.CONNECTIONS;
                      payload(inviteCode[22]).openUserSettings(obj3);
                      const obj6 = payload(inviteCode[22]);
                      tmp10 = tmp51;
                      c7 = 1;
                      c8 = 1;
                      obj4 = { value: null, done: false };
                      obj4[0] = rootNavigationRef1(inviteCode[56]).callback(payload.provider, obj1);
                      return obj4;
                    } else {
                      c8 = 3;
                    }
                  }
                } else if (arg0 === 1) {
                  c8 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  body = arg1;
                  body = body.body;
                  let redirect;
                  if (body != null) {
                    redirect = body.redirect;
                  }
                  closure_1 = rootNavigationRef1(inviteCode[57]).toURLSafe(redirect);
                  if (null != closure_1) {
                    rootNavigationRef1(inviteCode[43]).openURL(closure_1.toString());
                    const obj13 = rootNavigationRef1(inviteCode[43]);
                  }
                  const obj12 = rootNavigationRef1(inviteCode[57]);
                }
                c8 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } catch (tmp30) {
                c8 = tmp;
                throw tmp30;
              }
            }
          }));
          flag = true;
        } else if (constants.CONNECTIONS === type) {
          pathname(() => {
            let obj = rootNavigationRef1(inviteCode[18]);
            obj.popAll();
            obj = { screen: constants2.CONNECTIONS };
            payload(inviteCode[22]).openUserSettings(obj);
          });
          flag = true;
        } else if (constants.GUILD_SETTINGS === type) {
          pathname(() => {
            if (null != payload.guildId) {
              const obj = rootNavigationRef1(inviteCode[58]);
              obj.open(payload.guildId, payload.settingsSection, undefined, payload.settingsSubsection);
            }
          });
          flag = true;
        } else if (constants.ACTIVATE_DEVICE === type) {
          obj5 = rootNavigationRef1(inviteCode[59]);
          obj5.showModal(payload.userCode);
          flag = true;
        } else if (constants.GUILD_SETTINGS_PICKER === type) {
          pathname(() => {
            payload(inviteCode[60]);
            const obj = { section: payload.settingsSection, subsection: payload.settingsSubsection, feature: payload.feature };
            const result = obj.openGuildSettingsPickerModal(obj);
          });
          flag = true;
        } else if (constants.SHARE === type) {
          obj1 = payload(inviteCode[61]);
          flag = true;
          if (obj1.isIOS()) {
            obj2 = rootNavigationRef1(tmp45[18]);
            obj2.popAll();
            obj3 = rootNavigationRef1(tmp45[18]);
            obj12 = { text: null, channelId: null, shareId: null, attachmentManifest: null };
            ({ text: obj5[0], channelId: obj5[1], shareId: obj5[2], attachmentManifest: obj5[3] } = payload);
            obj3.pushLazy(tmp44(tmp45[35])(tmp45[62], tmp45.paths), obj12, SHARE_SCREEN_MODAL_KEY, { presentation: "modal" });
            flag = true;
          }
          tmp44 = payload;
        } else {
          if (constants.CREATE_VOICE_INVITE !== type) {
            if (constants.SEND_VOICE_HANGOUT_WAVE !== type) {
              if (constants.ACCOUNT_STANDING === type) {
                pathname(() => {
                  let obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  obj = { initialTab: constants3.STANDING };
                  payload(inviteCode[22]).openUserSettings(obj);
                });
                flag = true;
              } else if (constants.MOBILE_NATIVE_UPDATE === type) {
                obj = rootNavigationRef2(inviteCode[64]);
                const result5 = obj.openBuildInstallerUrl(payload.url);
                flag = true;
              } else if (constants.MOBILE_WEB_REDIRECT_CHECKOUT === type) {
                deepLinkAction = payload.deepLinkAction;
                pathname(guildTemplateCode(function*() {
                  if (paths === 2) {
                    paths = 3;
                    HermesBuiltin.throwTypeError();
                  } else if (tmp5 === 3) {
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
                      paths = 2;
                      if (0 === c2) {
                        if (arg0 === 1) {
                          paths = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          paths = 3;
                          obj = { value: null, done: true };
                          obj[0] = arg1;
                          return obj;
                        } else {
                          let guild = tmp2;
                          let guildId = tmp3;
                          guildId = undefined;
                          guild = undefined;
                          if (deepLinkAction === closure_1_22.PREMIUM_CHECKOUT_SUCCESS) {
                            deepLinkAction("succeeded");
                          } else if (deepLinkAction === closure_1_22.PREMIUM_SUBSCRIPTION_UPDATE) {
                            const subscriptions = payload(paths[65]).fetchSubscriptions();
                            const obj3 = payload(paths[65]);
                          } else if (deepLinkAction === closure_1_22.GUILD_BOOST_CHECKOUT_SUCCESS) {
                            rootNavigationRef1(paths[18]).popAll();
                            guildId = payload.guildId;
                            c2 = 1;
                            paths = 1;
                            obj1 = { value: null, done: false };
                            obj1[0] = payload(paths[35])(paths[45], paths.paths);
                            return obj1;
                          }
                          paths = 3;
                        }
                      } else if (arg0 === 1) {
                        paths = 3;
                        throw arg1;
                      } else if (arg0 !== 2) {
                        guild = arg1.default.getGuild(guildId);
                        if (null != guild) {
                          payload(paths[46]).transitionToGuild(guildId);
                          rootNavigationRef1(paths[66])(guild);
                          const obj6 = payload(paths[46]);
                        }
                        const _default = arg1.default;
                      }
                      paths = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } catch (tmp16) {
                      paths = tmp;
                      throw tmp16;
                    }
                  }
                }));
                flag = true;
              } else if (constants.SHOP === type) {
                pathname(() => {
                  payload(inviteCode[67]);
                  const obj = { analyticsLocations: null, analyticsSource: null, screen: null, initialProductSkuId: null };
                  const items = [rootNavigationRef1(inviteCode[68]).DEEPLINK];
                  obj[0] = items;
                  obj[1] = rootNavigationRef1(inviteCode[68]).DEEPLINK;
                  ({ screen: obj2[2], skuId: obj2[3] } = payload);
                  const result = obj.openCollectiblesShopMobile(obj);
                });
                flag = true;
              } else if (constants.AUTHORIZED_APPS === type) {
                pathname(() => {
                  let obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  obj = { screen: constants2.AUTHORIZED_APPS };
                  payload(inviteCode[22]).openUserSettings(obj);
                });
                flag = true;
              } else if (constants.DAVE_PROTOCOL_VERIFICATION === type) {
                pathname(() => {
                  rootNavigationRef1(inviteCode[69]);
                  const obj = { userId: payload.userId, fingerprint: fingerprint.replaceAll(" ", "+") };
                  fingerprint = payload.fingerprint;
                  const result = obj.handleSecureFramesUserVerificationLink(obj);
                });
                flag = true;
              } else if (constants.QUESTS === type) {
                pathname(() => {
                  if (null != payload.questId) {
                    let obj = { questId: null, event: null, sourceQuestContent: null, properties: null };
                    obj[0] = payload.questId;
                    obj[1] = closure_1_12.QUEST_SHARE_LINK_DEEP_LINKED_INTO_MOBILE_CLIENT;
                    obj[2] = payload(inviteCode[71]).QuestContent.QUEST_EMBED_MOBILE;
                    obj = { referrer_id: null };
                    obj[0] = payload.referrerId;
                    obj[3] = obj;
                    payload(inviteCode[70]).trackQuestEvent(obj);
                    const obj3 = payload(inviteCode[70]);
                  }
                  let sort;
                  if (payload != null) {
                    sort = payload.sort;
                  }
                  let filter;
                  if (payload != null) {
                    filter = payload.filter;
                  }
                  obj = payload(inviteCode[72]);
                  obj1 = { scrollToQuestId: payload.questId, sort: null, filter: null, fromContent: null };
                  let tmp3 = null;
                  if (null != sort) {
                    tmp3 = null;
                    if ("" !== sort) {
                      tmp3 = sort;
                    }
                  }
                  obj1[1] = tmp3;
                  let tmp4 = null;
                  if (null != filter) {
                    tmp4 = null;
                    if ("" !== filter) {
                      tmp4 = filter;
                    }
                  }
                  obj1[2] = tmp4;
                  obj1[3] = payload(inviteCode[71]).QuestContent.QUEST_SHARE_LINK;
                  obj.openQuestHome(obj1);
                });
                flag = true;
              } else if (constants.QUEST_HOME_PREVIEW === type) {
                pathname(() => {
                  let obj = payload(inviteCode[22]);
                  obj = { previewAdCreativeIds: payload.adCreativeIds };
                  obj.openUserSettings(obj);
                });
                flag = true;
              } else if (constants.GIFT === type) {
                pathname(() => {
                  payload(inviteCode[73]);
                  const obj = { analyticsLocations: null };
                  const items = [rootNavigationRef1(inviteCode[68]).DEEPLINK];
                  obj[0] = items;
                  obj.openGiftModal(obj);
                });
                flag = true;
              } else if (constants.NITRO_HOME === type) {
                pathname(() => {
                  const section = payload.section;
                  gameId.setState({ scrollToSectionId: section });
                  payload(inviteCode[22]);
                  const obj = { screen: closure_1_15.PREMIUM };
                  obj.openUserSettings(obj);
                });
                flag = true;
              } else if (constants.ACTIVITY === type) {
                rootNavigationRef1(inviteCode[74])(payload.applicationId, payload.referrerId, payload.customId, payload.linkId, payload.isDeepLink);
                flag = true;
              } else if (constants.CONNECTED_GAMES === type) {
                pathname(() => {
                  let obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  obj = { tab: constants4.CONNECTED_GAMES };
                  payload(inviteCode[22]).openUserSettings(obj);
                });
                flag = true;
              } else if (constants.BOOST_MARKETING === type) {
                pathname(() => {
                  payload(inviteCode[75]).openApplyBoostModal(payload.guildId);
                });
                flag = true;
              } else if (constants.BOOST_SETTINGS === type) {
                pathname(() => {
                  let obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  obj = { screen: constants2.GUILD_BOOSTING };
                  payload(inviteCode[22]).openUserSettings(obj);
                });
                flag = true;
              } else if (constants.QUEST_PREVIEW_TOOL === type) {
                pathname(() => {
                  rootNavigationRef1(inviteCode[18]).popAll();
                  rootNavigationRef1(inviteCode[76])();
                  const timerId = setTimeout(() => {
                    let obj = payload(inviteCode[22]);
                    obj = { questId: questId.questId };
                    obj.openUserSettings(obj);
                  }, 1);
                });
                flag = true;
              } else if (constants.SUBSCRIPTION_SETTINGS === type) {
                pathname(() => {
                  let obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  obj = { screen: constants2.GUILD_ROLE_SUBSCRIPTIONS };
                  payload(inviteCode[22]).openUserSettings(obj);
                });
                flag = true;
              } else if (constants.GAME_PROFILE === type) {
                gameId = payload.gameId;
                pathname(() => {
                  let obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  { gameId, source: payload(inviteCode[77]).GameProfileSources.Deeplink, gameProfileModalChecks: obj };
                  obj = { shouldOpenGameProfile: true, gameId };
                  payload(inviteCode[78]).default.openGameProfileModal(obj);
                });
                flag = true;
              } else {
                flag = false;
                if (constants.MESSAGE_REQUESTS === type) {
                  rootNavigationRef1(inviteCode[18]).popAll();
                  const obj48 = rootNavigationRef1(inviteCode[18]);
                  rootNavigationRef3 = payload(inviteCode[19]).getRootNavigationRef();
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
                  const obj49 = payload(inviteCode[19]);
                }
              }
            }
          }
          pathname(() => {
            const result = payload(inviteCode[63]).showInstantInviteActionSheetForChannel(payload.channelId);
          });
          flag = true;
        }
      }
    }
    ({ guildId, channelId } = payload);
    if (payload.type === constants.MESSAGE) {
      ({ messageId, summaryId } = payload);
    }
    flag = true;
    if (tmp118) {
      obj13 = { guildId: null, channelId: null, messageId: null, navigationSettings: null, summaryId: null };
      obj13[0] = guildId;
      obj13[1] = channelId;
      obj13[2] = messageId;
      const obj14 = { safe: null, navigationReplace: null, waitForConnection: null, skipMessageFetch: null };
      obj14[0] = safe;
      obj14[1] = navigationReplace;
      obj14[2] = waitForConnection;
      obj14[3] = skipMessageFetch;
      obj13[3] = obj14;
      obj13[4] = summaryId;
      rootNavigationRef1(inviteCode[30])(obj13);
      flag = true;
    }
    tmp118 = null != guildId && null != channelId;
  }
  if (flag) {
    const result6 = payload(inviteCode[79]).browserManagerCloseBrowser();
    const obj47 = payload(inviteCode[79]);
  }
  return flag;
};