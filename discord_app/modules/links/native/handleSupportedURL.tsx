// === Module 13008: handleSupportedURL ===

// Module 13008 (handleSupportedURL)
import _objectWithoutProperties from "_objectWithoutProperties";
import zustandStore from "zustandStore";
import scheduledEventSort from "scheduledEventSort";
import { handleMobileWebCheckoutStatus as closure_9 } from "usePremiumPlanPurchasedStore";
import closure_10 from "zustandStore";
import fetchFingerprint from "fetchFingerprint";
import ME from "ME";
import { StaticChannelRoute } from "set";
import { StreamTypes } from "StreamIssueReportReasons";
import { NativePermissionTypes } from "NativePermissionStatus";
import { OAUTH2_AUTHORIZE_MODAL_KEY as closure_20 } from "OAUTH2_AUTHORIZE_MODAL_KEY";
import { FAMILY_CENTER_LINK_REQUEST_REGEX as closure_21 } from "items";
import { MobileWebRedirectCheckoutDeepLinkActions as closure_22 } from "CustomCheckoutFlow";
import { SHARE_SCREEN_MODAL_KEY } from "SHARE_SCREEN_MODAL_KEY";
import { AccountSettingsTabs } from "AccountSettingsTabs";
import { MobileSetting } from "MobileSetting";

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
const require = arg1;
let closure_4 = ["code", "state"];
require("processCallbacks").addPostConnectionCallback;
({ AnalyticEvents: closure_12, LinkingTypes: map1, Routes: closure_14, UserSettingsSections: closure_15, PlatformTypes: closure_16 } = ME);
let result = require("processCallbacks").fileFinishedImporting("modules/links/native/handleSupportedURL.tsx");

export default function handleSupportedURL(payload) {
  let channelId;
  let channelId2;
  let diceCount;
  let diceSides;
  let fingerprint;
  let guildId;
  let guildId2;
  let messageId;
  let navigationReplace;
  let nonce;
  let safe;
  let skipMessageFetch;
  let summaryId;
  let waitForConnection;
  payload = payload.payload;
  ({ safe, navigationReplace, waitForConnection, skipMessageFetch } = payload);
  let rootNavigationRef1;
  let rootNavigationRef2;
  let inviteCode;
  let username;
  let deeplinkAttemptId;
  let guildTemplateCode;
  let addPostConnectionCallback;
  let remoteAuthFingerprint;
  let deepLinkAction;
  let gameId;
  let rootNavigationRef3;
  const type = payload.type;
  let result = constants;
  if (constants.CONTACT_SYNC === type) {
    result = payload;
    result = inviteCode;
    result = payload(inviteCode[17]).openContactSyncModalDeeplink();
    let flag = true;
    const obj46 = payload(inviteCode[17]);
  } else if (result.COMPOSE_MESSAGE === type) {
    result = rootNavigationRef1;
    result = inviteCode;
    result = rootNavigationRef1(inviteCode[18]).popAll();
    result = payload;
    const obj42 = rootNavigationRef1(inviteCode[18]);
    const rootNavigationRef = payload(inviteCode[19]).getRootNavigationRef();
    result = null;
    flag = true;
    if (null != rootNavigationRef) {
      let obj = { screen: "new-message", params: null };
      obj[1] = { sourcePage: "Deeplink" };
      result = rootNavigationRef.navigate("friends", obj);
      flag = true;
    }
    const obj43 = payload(inviteCode[19]);
  } else if (result.ADD_FRIENDS === type) {
    result = rootNavigationRef1;
    result = inviteCode;
    result = rootNavigationRef1(inviteCode[18]).popAll();
    result = payload;
    const obj37 = rootNavigationRef1(inviteCode[18]);
    rootNavigationRef1 = payload(inviteCode[19]).getRootNavigationRef();
    result = null;
    if (null == rootNavigationRef1) {
      result = result(result[20]).openAddFriendModalDeeplink();
      flag = true;
      const resultResult = result(result[20]);
    } else if (rootNavigationRef1.isReady()) {
      obj = { screen: "add-friends", params: null };
      obj[1] = { sourcePage: "Deeplink" };
      result = rootNavigationRef1.navigate("friends", obj);
      flag = true;
    } else {
      result = addPostConnectionCallback;
      result = addPostConnectionCallback(() => rootNavigationRef1.navigate("friends", { screen: "add-friends", params: { sourcePage: "Deeplink" } }));
      flag = true;
    }
    const obj38 = payload(inviteCode[19]);
  } else if (result.FRIENDS === type) {
    result = rootNavigationRef1;
    result = inviteCode;
    result = rootNavigationRef1(inviteCode[18]).popAll();
    result = payload;
    const obj32 = rootNavigationRef1(inviteCode[18]);
    rootNavigationRef2 = payload(inviteCode[19]).getRootNavigationRef();
    result = null;
    if (null != rootNavigationRef2) {
      if (rootNavigationRef2.isReady()) {
        result = rootNavigationRef2.navigate("friends");
      } else {
        result = addPostConnectionCallback;
        result = addPostConnectionCallback(() => {
          rootNavigationRef2.navigate("friends");
        });
      }
    }
    flag = true;
    if (null != payload.userId) {
      let obj1 = { userId: null };
      obj1[0] = payload.userId;
      result = result(result[21]).showUserProfileActionSheetPostConnection(obj1);
      flag = true;
      const resultResult1 = result(result[21]);
    }
    const obj33 = payload(inviteCode[19]);
  } else if (result.EDIT_PROFILE === type) {
    result = addPostConnectionCallback;
    result = addPostConnectionCallback(() => {
      let obj = rootNavigationRef1(inviteCode[18]);
      obj.popAll();
      obj = { screen: constants2.PROFILE_CUSTOMIZATION };
      payload(inviteCode[22]).openUserSettings(obj);
    });
    flag = true;
  } else if (result.INVITE === type) {
    inviteCode = payload.inviteCode;
    username = payload.username;
    deeplinkAttemptId = payload.deeplinkAttemptId;
    result = rootNavigationRef3;
    if (!rootNavigationRef3.isAuthenticated()) {
      result = null;
      if (null != inviteCode) {
        result = payload;
        result = inviteCode;
        let obj2 = { deeplinkAttemptId: null, fromDeeplink: true, location: "Deep Link" };
        obj2[0] = deeplinkAttemptId;
        result = payload(inviteCode[23]).showInvite(inviteCode, username, obj2);
        flag = true;
        const obj30 = payload(inviteCode[23]);
      }
    }
    result = addPostConnectionCallback;
    result = addPostConnectionCallback(() => {
      let obj = rootNavigationRef1(inviteCode[24]);
      obj.hideModal();
      if (null != inviteCode) {
        const result = payload(tmp[25]).dismissGlobalKeyboard();
        const obj2 = payload(tmp[25]);
        obj = { deeplinkAttemptId: null, fromDeeplink: true, location: "Deep Link" };
        obj[0] = deeplinkAttemptId;
        payload(tmp[23]).showInvite(tmp3, username, obj);
        const obj3 = payload(tmp[23]);
      }
    });
    flag = true;
  } else if (result.GUILD_TEMPLATE === type) {
    guildTemplateCode = payload.guildTemplateCode;
    result = addPostConnectionCallback;
    result = addPostConnectionCallback(() => {
      payload(inviteCode[23]).clearDisplayedInvite();
      if (null != guildTemplateCode) {
        const result = payload(tmp2[25]).dismissGlobalKeyboard();
        const tmpResult = payload(tmp2[25]);
        rootNavigationRef1(tmp2[24]).showModal(tmp4);
        const obj3 = rootNavigationRef1(tmp2[24]);
      }
    });
    flag = true;
  } else if (result.GIFT_CODE === type) {
    let giftCode = payload.giftCode;
    result = null;
    let flag3 = null != giftCode;
    if (flag3) {
      result = payload;
      result = inviteCode;
      giftCode = payload(inviteCode[26]).resolveGiftCode(giftCode);
      const obj29 = payload(inviteCode[26]);
      result = giftCode.then((giftCode) => {
        rootNavigationRef1(inviteCode[27]).track(constants.OPEN_MODAL, { type: "gift_accept", location: null });
        const obj = rootNavigationRef1(inviteCode[27]);
        const result = payload(inviteCode[28]).openGiftCodeRedeemModal(giftCode.giftCode.code);
      }).catch(() => {

      });
      flag3 = true;
      const nextPromise = giftCode.then((giftCode) => {
        rootNavigationRef1(inviteCode[27]).track(constants.OPEN_MODAL, { type: "gift_accept", location: null });
        const obj = rootNavigationRef1(inviteCode[27]);
        const result = payload(inviteCode[28]).openGiftCodeRedeemModal(giftCode.giftCode.code);
      });
    }
    flag = flag3;
  } else if (result.ROLL_DICE === type) {
    ({ guildId: guildId2, channelId: channelId2 } = payload);
    result = null;
    let flag2 = null != guildId2;
    ({ diceCount, diceSides } = payload);
    if (flag2) {
      flag2 = null != channelId2;
    }
    if (flag2) {
      result = payload;
      result = inviteCode;
      result = payload(inviteCode[29]).startDiceRoll(channelId2, diceCount, diceSides);
      result = rootNavigationRef1;
      let obj3 = { guildId: null, channelId: null, messageId: "Array", navigationSettings: true };
      obj3[0] = guildId2;
      obj3[1] = channelId2;
      let obj4 = { safe: null, navigationReplace: null, waitForConnection: null, skipMessageFetch: null };
      obj4[0] = safe;
      obj4[1] = navigationReplace;
      obj4[2] = waitForConnection;
      obj4[3] = skipMessageFetch;
      obj3[3] = obj4;
      result = rootNavigationRef1(inviteCode[30])(obj3);
      flag2 = true;
      const obj26 = payload(inviteCode[29]);
    }
    flag = flag2;
  } else {
    if (result.CHANNEL !== type) {
      if (result.MESSAGE !== type) {
        if (result.SESSION_MANAGEMENT === type) {
          result = addPostConnectionCallback;
          result = addPostConnectionCallback(() => {
            let obj = rootNavigationRef1(inviteCode[18]);
            obj.popAll();
            obj = { screen: constants2.SESSIONS };
            payload(inviteCode[22]).openUserSettings(obj);
          });
          flag = true;
        } else if (result.FAMILY_CENTER === type) {
          result = null;
          let obj5 = payload;
          if (payload == null) {
            obj5 = {};
          }
          const pathname = obj5.pathname;
          result = null;
          if (undefined !== pathname) {
            result = pathname;
          }
          addPostConnectionCallback = result;
          result = addPostConnectionCallback;
          result = addPostConnectionCallback(() => {
            let obj = rootNavigationRef1(inviteCode[18]);
            obj.popAll();
            obj = { screen: outer1_15.FAMILY_CENTER };
            payload(inviteCode[22]).openUserSettings(obj);
            let isMatch = null != c7;
            if (isMatch) {
              isMatch = outer1_21.test(tmp5);
            }
            if (isMatch) {
              const result = payload(inviteCode[31]).handleFamilyCenterQRCodeScan(tmp5, "NativeCameraScan");
              const tmp3Result = payload(inviteCode[31]);
            }
          });
          flag = true;
        } else if (result.OAUTH2_AUTHORIZE === type) {
          result = addPostConnectionCallback;
          result = addPostConnectionCallback(() => {
            let obj = rootNavigationRef1(inviteCode[18]);
            obj.popAll();
            if (obj2.isMidjourneyOnboardingFlow()) {
              tmp(tmp2[33]).openCreateGuildModal((guildId) => {
                if (type.type === outer1_13.OAUTH2_AUTHORIZE) {
                  let obj = outer1_1(outer1_3[18]);
                  obj.popAll();
                  obj = {};
                  const obj2 = outer1_1(outer1_3[18]);
                  const merged = Object.assign(tmp.props);
                  obj.guildId = guildId;
                  obj.callback = outer1_1(outer1_3[36]);
                  obj.dismissOAuthModal = function dismissOAuthModal() {
                    callback(table[18]).popWithKey(closure_20);
                  };
                  obj2.pushLazy(outer1_0(outer1_3[35])(outer1_3[34], outer1_3.paths), obj, outer1_20);
                  const tmp7 = outer1_0(outer1_3[35])(outer1_3[34], outer1_3.paths);
                }
              });
              const tmpResult = tmp(tmp2[33]);
            } else {
              obj = {};
              let merged = Object.assign(payload.props);
              obj.callback = tmp(tmp2[36]);
              payload(tmp2[37]).openOAuth2Modal(obj);
              const tmp4Result = payload(tmp2[37]);
            }
          });
          flag = true;
        } else if (result.ONE_TIME_LOGIN === type) {
          result = rootNavigationRef1;
          result = inviteCode;
          result = rootNavigationRef1(inviteCode[18]).popAll();
          const obj20 = rootNavigationRef1(inviteCode[18]);
          result = payload;
          let obj6 = { token: null };
          obj6[0] = payload.token;
          result = rootNavigationRef1(inviteCode[18]).pushLazy(payload(inviteCode[35])(inviteCode[38], inviteCode.paths), obj6, "ONE_TIME_LOGIN_MODAL");
          flag = true;
          const obj21 = rootNavigationRef1(inviteCode[18]);
        } else if (result.REMOTE_AUTH === type) {
          remoteAuthFingerprint = payload.remoteAuthFingerprint;
          result = null;
          result = addPostConnectionCallback(null != remoteAuthFingerprint ? (() => {
            let obj = rootNavigationRef1(inviteCode[18]);
            obj = { remoteAuthFingerprint };
            obj.pushLazy(payload(inviteCode[35])(inviteCode[39], inviteCode.paths), obj, "REMOTE_AUTH_MODAL");
          }) : (() => {
            let obj = payload(inviteCode[40]);
            const tmp = inviteCode;
            const tmp3 = payload(inviteCode[40]).isMetaQuest() ? closure_19.HEADSET_CAMERA : closure_19.CAMERA;
            const permission = rootNavigationRef1(tmp[41]).requestPermission(tmp3);
            const obj2 = rootNavigationRef1(tmp[41]);
            permission.then((arg0) => {
              if (arg0) {
                callback2(paths[18]).pushLazy(callback(paths[35])(paths[42], paths.paths), { showHelp: true });
                const obj = callback2(paths[18]);
              }
            }).catch(() => {

            });
          }));
          flag = true;
        } else if (result.PROMOTIONS === type) {
          result = inviteCode;
          result = rootNavigationRef1(inviteCode[43]).performURLNavigation(payload.url);
          flag = true;
          const obj19 = rootNavigationRef1(inviteCode[43]);
        } else if (result.FEATURE_PROMO_URL === type) {
          rootNavigationRef1(inviteCode[43]).openURLExternally(payload.promoUrl);
          flag = true;
          const obj18 = rootNavigationRef1(inviteCode[43]);
        } else if (result.USER_PROFILE === type) {
          flag = true;
          if (null != payload.userId) {
            let obj7 = { userId: null };
            obj7[0] = payload.userId;
            const result1 = payload(inviteCode[21]).showUserProfileActionSheetPostConnection(obj7);
            flag = true;
            const obj16 = payload(inviteCode[21]);
          }
        } else if (result.BUILD_OVERRIDE === type) {
          let obj12 = rootNavigationRef1(inviteCode[18]);
          obj12.popAll();
          let obj13 = rootNavigationRef1(inviteCode[18]);
          const obj8 = { overrideUrl: null };
          obj8[0] = payload.overrideUrl;
          obj13.pushLazy(payload(inviteCode[35])(inviteCode[44], inviteCode.paths), obj8);
          flag = true;
        } else if (result.GUILD_EVENT_DETAILS === type) {
          addPostConnectionCallback(guildTemplateCode(function*() {
            let c1;
            let closure_0;
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
                return { value: "HermesInternal", done: null };
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
                    outer1_1(paths[18]).popAll();
                    ({ guildId: closure_0, guildEventId: c1 } = outer1_0);
                    paths = 1;
                    c4 = 1;
                    let obj1 = { value: null, done: false };
                    obj1[0] = outer1_0(paths[35])(paths[45], paths.paths);
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
                        obj1 = outer1_0(paths[46]);
                        obj1.transitionToGuild(closure_0);
                      }
                      const guildScheduledEvent = outer1_8.getGuildScheduledEvent(c1);
                      closure_0 = guildScheduledEvent;
                      if (guildScheduledEvent == null) {
                        let obj4 = outer1_1(paths[47]);
                        paths = 2;
                        c4 = 1;
                        const obj3 = { value: null, done: false };
                        obj3[0] = obj4.fetchGuildEvent(outer1_0, outer1_1);
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
                    obj2 = outer1_0(paths[48]);
                    obj4 = { eventId: null, event: null };
                    obj4[0] = id.id;
                    obj4[1] = id;
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
          }));
          flag = true;
        } else if (result.MOBILE_WEB_HANDOFF === type) {
          const redirectUrl = payload.redirectUrl;
          ({ nonce, fingerprint } = payload);
          let obj10 = rootNavigationRef1(inviteCode[49]);
          const _HermesInternal = HermesInternal;
          let obj9 = { nonce: null, fingerprint: null, skipLoginRedirect: true };
          obj9[0] = nonce;
          obj9[1] = fingerprint;
          const result2 = obj10.redirectWithHandoffToken("" + redirectUrl.pathname + redirectUrl.search, obj9);
          flag = true;
        } else if (result.VOICE_CHANNEL === type) {
          addPostConnectionCallback(guildTemplateCode(function*() {
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
                return { value: "HermesInternal", done: null };
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
                    let closure_0 = tmp4;
                    let tmp19 = null != outer1_0.guildId;
                    if (tmp19) {
                      tmp19 = null != outer1_0.channelId;
                    }
                    if (tmp19) {
                      tmp19 = null != outer1_0.userId;
                    }
                    if (tmp19) {
                      v0(outer1_3[18]).popAll();
                      v0 = 1;
                      c2 = 1;
                      const obj1 = { value: null, done: false };
                      obj1[0] = outer1_0(outer1_3[35])(outer1_3[45], outer1_3.paths);
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
                    obj = outer1_0(outer1_3[46]);
                    obj.transitionToGuild(closure_0.guildId);
                  }
                  let obj3 = { streamType: null, ownerId: null, guildId: null, channelId: null };
                  obj3[0] = outer1_18.GUILD;
                  obj3[1] = closure_0.userId;
                  obj3[2] = closure_0.guildId;
                  obj3[3] = closure_0.channelId;
                  v0(outer1_3[50])(obj3);
                  _default = arg1.default;
                }
                let tmp23 = "transfer_cancelled" === closure_0.action;
                if (tmp23) {
                  tmp23 = "xbox" === closure_0.via;
                }
                if (tmp23) {
                  obj3 = outer1_0(outer1_3[51]);
                  obj3.disconnectRemote();
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
        } else if (result.ICYMI === type) {
          addPostConnectionCallback(() => {
            payload(inviteCode[52]).navigateToRootTab({ screen: "icymi" });
          });
          flag = true;
        } else if (result.GUILD_HOME === type) {
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
                const obj11 = { highlight_channel_id: null, highlight_message_id: null };
              }
            }
            obj9 = payload(inviteCode[54]);
            obj9.transitionTo(closure_14.CHANNEL(payload.guildId, StaticChannelRoute.GUILD_HOME), tmp67);
            flag = true;
          }
        } else if (result.USER_CONNECTIONS_LINK_CALLBACK === type) {
          addPostConnectionCallback(() => {
            let hasItem = null != payload.callbackCode && null != tmp.callbackState && null != tmp.provider;
            if (hasItem) {
              const items = [, , , ];
              ({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = outer1_16);
              hasItem = items.includes(tmp.provider);
            }
            if (hasItem) {
              let obj = rootNavigationRef1(inviteCode[55]);
              obj = { type: "USER_CONNECTIONS_LINK_CALLBACK", provider: null, callbackCode: null, callbackState: null };
              ({ provider: obj2[1], callbackCode: obj2[2], callbackState: obj2[3] } = tmp);
              obj.dispatch(obj);
            }
          });
          flag = true;
        } else if (result.USER_CONNECTIONS_CALLBACK === type) {
          addPostConnectionCallback(guildTemplateCode(function*() {
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
                return { value: "HermesInternal", done: null };
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
                    let zustandStore = tmp5;
                    let _objectWithoutProperties = tmp2;
                    let body;
                    let closure_1;
                    const searchParams = outer1_0.searchParams;
                    const state = searchParams.state;
                    const tmp51 = outer1_5(searchParams, outer1_4);
                    if (null != state) {
                      const obj1 = { code: null, state: null };
                      obj1[0] = searchParams.code;
                      obj1[1] = state;
                      closure_1 = tmp51;
                      const keys = Object.keys();
                      if (keys === undefined) {
                        let closure_3 = tmp12;
                        let closure_2 = tmp11;
                        closure_1 = tmp51;
                        body = keys;
                      } else {
                        closure_3 = tmp12;
                        closure_2 = tmp11;
                        closure_1 = tmp10;
                        body = keys;
                        let tmp20;
                        let obj2 = body[closure_2];
                        while (obj2 !== undefined) {
                          let tmp57 = obj2;
                          let tmp58 = tmp17;
                          closure_3 = tmp17;
                          let tmp59 = tmp16;
                          closure_2 = tmp16;
                          let tmp60 = tmp15;
                          closure_1 = tmp15;
                          let tmp61 = tmp14;
                          body = tmp14;
                          tmp20 = tmp19;
                          if (!obj2.startsWith("openid.")) {
                            continue;
                          } else {
                            obj2 = tmp19;
                            if (null == tmp19) {
                              obj2 = {};
                            }
                            obj2[obj2] = searchParams[obj2];
                            tmp20 = obj2;
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
                      let obj4 = outer1_1(outer1_3[18]);
                      obj4.popAll();
                      const obj3 = { screen: null };
                      obj3[0] = outer1_15.CONNECTIONS;
                      outer1_0(outer1_3[22]).openUserSettings(obj3);
                      const obj6 = outer1_0(outer1_3[22]);
                      tmp10 = tmp51;
                      c7 = 1;
                      c8 = 1;
                      obj4 = { value: null, done: false };
                      obj4[0] = outer1_1(outer1_3[56]).callback(outer1_0.provider, obj1);
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
                  closure_1 = outer1_1(outer1_3[57]).toURLSafe(redirect);
                  if (null != closure_1) {
                    outer1_1(outer1_3[43]).openURL(closure_1.toString());
                    const obj13 = outer1_1(outer1_3[43]);
                  }
                  const obj12 = outer1_1(outer1_3[57]);
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
        } else if (result.CONNECTIONS === type) {
          addPostConnectionCallback(() => {
            let obj = rootNavigationRef1(inviteCode[18]);
            obj.popAll();
            obj = { screen: constants2.CONNECTIONS };
            payload(inviteCode[22]).openUserSettings(obj);
          });
          flag = true;
        } else if (result.GUILD_SETTINGS === type) {
          addPostConnectionCallback(() => {
            if (null != payload.guildId) {
              const obj = rootNavigationRef1(inviteCode[58]);
              obj.open(tmp.guildId, tmp.settingsSection, undefined, tmp.settingsSubsection);
            }
          });
          flag = true;
        } else if (result.ACTIVATE_DEVICE === type) {
          obj5 = rootNavigationRef1(inviteCode[59]);
          obj5.showModal(payload.userCode);
          flag = true;
        } else if (result.GUILD_SETTINGS_PICKER === type) {
          addPostConnectionCallback(() => {
            let obj = payload(inviteCode[60]);
            obj = { section: payload.settingsSection, subsection: payload.settingsSubsection, feature: payload.feature };
            const result = obj.openGuildSettingsPickerModal(obj);
          });
          flag = true;
        } else if (result.SHARE === type) {
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
          if (result.CREATE_VOICE_INVITE !== type) {
            if (result.SEND_VOICE_HANGOUT_WAVE !== type) {
              if (result.ACCOUNT_STANDING === type) {
                addPostConnectionCallback(() => {
                  let obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  obj = { screen: constants2.ACCOUNT, params: obj };
                  obj = { initialTab: constants3.STANDING };
                  payload(inviteCode[22]).openUserSettings(obj);
                });
                flag = true;
              } else if (result.MOBILE_NATIVE_UPDATE === type) {
                obj = rootNavigationRef2(inviteCode[64]);
                const result3 = obj.openBuildInstallerUrl(payload.url);
                flag = true;
              } else if (result.MOBILE_WEB_REDIRECT_CHECKOUT === type) {
                deepLinkAction = payload.deepLinkAction;
                addPostConnectionCallback(guildTemplateCode(function*() {
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
                      return { value: "HermesInternal", done: null };
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
                          if (outer1_9 === outer1_22.PREMIUM_CHECKOUT_SUCCESS) {
                            outer1_9("succeeded");
                          } else if (tmp32 === tmp33.PREMIUM_SUBSCRIPTION_UPDATE) {
                            const subscriptions = outer1_0(paths[65]).fetchSubscriptions();
                            const obj3 = outer1_0(paths[65]);
                          } else if (tmp32 === tmp33.GUILD_BOOST_CHECKOUT_SUCCESS) {
                            outer1_1(paths[18]).popAll();
                            guildId = outer1_0.guildId;
                            c2 = 1;
                            paths = 1;
                            const obj1 = { value: null, done: false };
                            obj1[0] = outer1_0(paths[35])(paths[45], paths.paths);
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
                          outer1_0(paths[46]).transitionToGuild(guildId);
                          outer1_1(paths[66])(guild);
                          const obj6 = outer1_0(paths[46]);
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
              } else if (result.SHOP === type) {
                addPostConnectionCallback(() => {
                  let obj = payload(inviteCode[67]);
                  obj = { analyticsLocations: null, analyticsSource: null, screen: null, initialProductSkuId: null };
                  const items = [rootNavigationRef1(inviteCode[68]).DEEPLINK];
                  obj[0] = items;
                  obj[1] = rootNavigationRef1(inviteCode[68]).DEEPLINK;
                  ({ screen: obj2[2], skuId: obj2[3] } = payload);
                  const result = obj.openCollectiblesShopMobile(obj);
                });
                flag = true;
              } else if (result.AUTHORIZED_APPS === type) {
                addPostConnectionCallback(() => {
                  let obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  obj = { screen: constants2.AUTHORIZED_APPS };
                  payload(inviteCode[22]).openUserSettings(obj);
                });
                flag = true;
              } else if (result.DAVE_PROTOCOL_VERIFICATION === type) {
                addPostConnectionCallback(() => {
                  let obj = rootNavigationRef1(inviteCode[69]);
                  obj = { userId: payload.userId, fingerprint: fingerprint.replaceAll(" ", "+") };
                  fingerprint = payload.fingerprint;
                  const result = obj.handleSecureFramesUserVerificationLink(obj);
                });
                flag = true;
              } else if (result.QUESTS === type) {
                addPostConnectionCallback(() => {
                  if (null != payload.questId) {
                    let obj = { questId: null, event: null, sourceQuestContent: null, properties: null };
                    obj[0] = arr.questId;
                    obj[1] = outer1_12.QUEST_SHARE_LINK_DEEP_LINKED_INTO_MOBILE_CLIENT;
                    obj[2] = payload(inviteCode[71]).QuestContent.QUEST_EMBED_MOBILE;
                    obj = { referrer_id: null };
                    obj[0] = arr.referrerId;
                    obj[3] = obj;
                    payload(inviteCode[70]).trackQuestEvent(obj);
                    const obj3 = payload(inviteCode[70]);
                  }
                  let sort;
                  if (payload != null) {
                    sort = arr.sort;
                  }
                  let filter;
                  if (payload != null) {
                    filter = arr.filter;
                  }
                  obj = payload(inviteCode[72]);
                  const obj1 = { scrollToQuestId: payload.questId, sort: null, filter: null, fromContent: null };
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
              } else if (result.QUEST_HOME_PREVIEW === type) {
                addPostConnectionCallback(() => {
                  let obj = payload(inviteCode[22]);
                  obj = { screen: outer1_15.QUESTS, params: obj };
                  obj = { previewAdCreativeIds: payload.adCreativeIds };
                  obj.openUserSettings(obj);
                });
                flag = true;
              } else if (result.GIFT === type) {
                addPostConnectionCallback(() => {
                  let obj = payload(inviteCode[73]);
                  obj = { analyticsLocations: null };
                  const items = [rootNavigationRef1(inviteCode[68]).DEEPLINK];
                  obj[0] = items;
                  obj.openGiftModal(obj);
                });
                flag = true;
              } else if (result.NITRO_HOME === type) {
                addPostConnectionCallback(() => {
                  const section = payload.section;
                  gameId.setState({ scrollToSectionId: section });
                  let obj = payload(inviteCode[22]);
                  obj = { screen: outer1_15.PREMIUM };
                  obj.openUserSettings(obj);
                });
                flag = true;
              } else if (result.ACTIVITY === type) {
                rootNavigationRef1(inviteCode[74])(payload.applicationId, payload.referrerId, payload.customId, payload.linkId, payload.isDeepLink);
                flag = true;
              } else if (result.CONNECTED_GAMES === type) {
                addPostConnectionCallback(() => {
                  let obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  obj = { screen: constants2.CONTENT_AND_SOCIAL, params: obj };
                  obj = { tab: constants4.CONNECTED_GAMES };
                  payload(inviteCode[22]).openUserSettings(obj);
                });
                flag = true;
              } else if (result.BOOST_MARKETING === type) {
                addPostConnectionCallback(() => {
                  payload(inviteCode[75]).openApplyBoostModal(payload.guildId);
                });
                flag = true;
              } else if (result.BOOST_SETTINGS === type) {
                addPostConnectionCallback(() => {
                  let obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  obj = { screen: constants2.GUILD_BOOSTING };
                  payload(inviteCode[22]).openUserSettings(obj);
                });
                flag = true;
              } else if (result.QUEST_PREVIEW_TOOL === type) {
                addPostConnectionCallback(() => {
                  rootNavigationRef1(inviteCode[18]).popAll();
                  rootNavigationRef1(inviteCode[76])();
                  const timerId = setTimeout(() => {
                    let obj = outer1_0(outer1_3[22]);
                    obj = { screen: outer1_15.QUEST_PREVIEW_TOOL_2, params: obj };
                    obj = { questId: questId.questId };
                    obj.openUserSettings(obj);
                  }, 1);
                });
                flag = true;
              } else if (result.SUBSCRIPTION_SETTINGS === type) {
                addPostConnectionCallback(() => {
                  let obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  obj = { screen: constants2.GUILD_ROLE_SUBSCRIPTIONS };
                  payload(inviteCode[22]).openUserSettings(obj);
                });
                flag = true;
              } else if (result.GAME_PROFILE === type) {
                gameId = payload.gameId;
                addPostConnectionCallback(() => {
                  let obj = rootNavigationRef1(inviteCode[18]);
                  obj.popAll();
                  obj = { gameId, source: payload(inviteCode[77]).GameProfileSources.Deeplink, gameProfileModalChecks: obj };
                  obj = { shouldOpenGameProfile: true, gameId };
                  payload(inviteCode[78]).default.openGameProfileModal(obj);
                });
                flag = true;
              } else {
                flag = false;
                if (result.MESSAGE_REQUESTS === type) {
                  result = rootNavigationRef1;
                  result = inviteCode;
                  result = rootNavigationRef1(inviteCode[18]).popAll();
                  result = payload;
                  const obj48 = rootNavigationRef1(inviteCode[18]);
                  rootNavigationRef3 = payload(inviteCode[19]).getRootNavigationRef();
                  result = null;
                  flag = true;
                  if (null != rootNavigationRef3) {
                    if (rootNavigationRef3.isReady()) {
                      rootNavigationRef3.navigate("message-requests");
                      flag = true;
                    } else {
                      addPostConnectionCallback(() => {
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
          addPostConnectionCallback(() => {
            const result = payload(inviteCode[63]).showInstantInviteActionSheetForChannel(payload.channelId);
          });
          flag = true;
        }
      }
    }
    ({ guildId, channelId } = payload);
    if (payload.type === result.MESSAGE) {
      ({ messageId, summaryId } = payload);
    }
    result = null;
    result = null != guildId && null != channelId;
    flag = true;
    if (result) {
      result = rootNavigationRef1;
      result = inviteCode;
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
      result = rootNavigationRef1(inviteCode[30])(obj13);
      flag = true;
    }
  }
  if (flag) {
    result = payload;
    result = inviteCode;
    result = payload(inviteCode[79]).browserManagerCloseBrowser();
    const obj47 = payload(inviteCode[79]);
  }
  return flag;
};