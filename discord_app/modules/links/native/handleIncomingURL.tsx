// === Module 17112: _handleIncomingURL ===

// Module 17112 (_handleIncomingURL)
import timestampDefault from "timestamp" /* 3 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;
import getState from "getState" /* 7383 */;
import ME from "ME" /* 676 */;

const require = fn;
function _handleIncomingURL() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, url) {
      if (fingerprint === 2) {
        fingerprint = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw url;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = url;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          fingerprint = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              fingerprint = 3;
              throw url;
            } else if (arg0 === 2) {
              fingerprint = 3;
              obj = { value: null, done: true };
              obj[0] = url;
              return obj;
            } else {
              let str2 = tmp3;
              Iterable = tmp5;
              url = undefined;
              Iterable = undefined;
              str2 = undefined;
              let str35;
              let store;
              c7 = undefined;
              fingerprint = undefined;
              let attemptId;
              let payload;
              let installationId;
              let inviteCode;
              let guildTemplateCode;
              let authToken;
              let result1;
              ({ url, source: Iterable } = lib);
              const _HermesInternal = HermesInternal;
              closure_1_10.log("Opening url: " + url + " [" + Iterable + "]");
              if (store.getState() !== c7.ACTIVE) {
                let obj3 = lib(closure_1_2[6]);
                let str = "deeplink";
                if (null == url) {
                  str = "launcher";
                }
                obj3.trackAppOpened(str);
              }
              if (null == url) {
                fingerprint = 3;
              } else {
                if (url.startsWith("discord://app/open")) {
                  const index = url.indexOf("#");
                  if (-1 !== index) {
                    str2 = url.substring(index + 1);
                    if ("" !== str2) {
                      if ("" !== str2.trim()) {
                        store = 1;
                        const _URL2 = URL;
                        str35 = new URL(str2);
                        store = ["campaign", "deep_link_value", "media_source"];
                        url = 0;
                        let searchParams = str35.searchParams;
                        const items = [];
                        url = HermesBuiltin.arraySpread(searchParams.keys(), url);
                        const found = items.filter((item, index) => {
                          let startsWithResult = item.startsWith("af_");
                          if (!startsWithResult) {
                            startsWithResult = c6.includes(item);
                          }
                          return startsWithResult;
                        });
                        const item = found.forEach((item, index) => {
                          const searchParams = str35.searchParams;
                          return searchParams.delete(item);
                        });
                        url = str35.toString();
                        Iterable = lib(closure_1_2[7]).DeeplinkSource.AppsFlyer;
                        const _HermesInternal2 = HermesInternal;
                        closure_1_10.log("Extracted clean URL from AppsFlyer legacy URL: " + url);
                        store = 0;
                      }
                    }
                    obj1 = { originalUrl: null };
                    obj1[0] = url;
                    closure_1_10.warn("Empty or whitespace-only URL fragment in AppsFlyer legacy URL", obj1);
                    fingerprint = 3;
                    const obj2 = { value: null, done: true };
                    obj2[0] = undefined;
                    return obj2;
                  } else {
                    obj3 = { originalUrl: null };
                    obj3[0] = url;
                    closure_1_10.warn("No hash mark found in AppsFlyer legacy URL", obj3);
                  }
                }
                if (url.startsWith("discordwidget:///")) {
                  if (url.startsWith("discordwidget:///open-voice-panel")) {
                    const channelId = closure_1_5.getChannelId();
                    let channel = null;
                    if (null != channelId) {
                      channel = closure_1_4.getChannel(channelId);
                    }
                    if (null != channel) {
                      const result = lib(closure_1_2[8]).navigateToVoiceChannel(channel, "LiveActivity");
                      const index1 = url.indexOf("?");
                      let str3 = "";
                      if (index1 >= 0) {
                        str3 = url.slice(index1 + 1);
                      }
                      const uRLSearchParams = new URLSearchParams(str3);
                      const value = uRLSearchParams.get("source");
                      let tmp154 = "lockScreen" !== value;
                      if (tmp154) {
                        tmp154 = "dynamicIsland" !== value;
                      }
                      if (!tmp154) {
                        const obj4 = { action: "Open Voice Panel", channel_id: null, surface: null };
                        obj4[1] = channel.id;
                        obj4[2] = value;
                        callback(closure_1_2[9]).track(constants.LIVE_ACTIVITY_INTERACTED, obj4);
                        const obj22 = callback(closure_1_2[9]);
                      }
                      const obj30 = lib(closure_1_2[8]);
                    }
                    fingerprint = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
                  } else {
                    const parts = url.split("voice/");
                    if (2 !== parts.length) {
                      fingerprint = 3;
                      return { value: "HermesInternal", done: "HermesInternal" };
                    } else {
                      const parts1 = parts[1].split("/");
                      if (0 === parts1.length) {
                        fingerprint = 3;
                        return { value: "HermesInternal", done: "HermesInternal" };
                      } else if ("user" !== parts1[0]) {
                        if ("invite" === parts1[0]) {
                          let obj5 = { payload: null };
                          let obj6 = { type: null, guildId: null, channelId: null };
                          obj6[0] = closure_1_9.CREATE_VOICE_INVITE;
                          obj6[1] = parts1[1];
                          obj6[2] = parts1[2];
                          obj5[0] = obj6;
                          callback(closure_1_2[10])(obj5);
                        } else if ("wave" === parts1[0]) {
                          const obj7 = { payload: null };
                          const obj8 = { type: null, guildId: null, channelId: null };
                          obj8[0] = closure_1_9.SEND_VOICE_HANGOUT_WAVE;
                          obj8[1] = parts1[1];
                          obj8[2] = parts1[2];
                          obj7[0] = obj8;
                          callback(closure_1_2[10])(obj7);
                        } else if ("join" === parts1[0]) {
                          let obj9 = { payload: null };
                          let obj10 = { type: null, guildId: null, channelId: null };
                          obj10[0] = closure_1_9.CHANNEL;
                          obj10[1] = parts1[1];
                          obj10[2] = parts1[2];
                          obj9[0] = obj10;
                          callback(closure_1_2[10])(obj9);
                        } else if (2 === parts1.length) {
                          [tmp193, tmp194] = parts1;
                          const obj11 = { payload: null };
                          const obj12 = { type: null, guildId: null, channelId: null };
                          obj12[0] = closure_1_9.CHANNEL;
                          obj12[1] = tmp193;
                          obj12[2] = tmp194;
                          obj11[0] = obj12;
                          callback(closure_1_2[10])(obj11);
                          fingerprint = 3;
                          const obj13 = { value: null, done: true };
                          obj13[0] = undefined;
                          return obj13;
                        }
                      }
                    }
                  }
                } else {
                  const _URL = URL;
                  const uRL = new URL(url);
                }
              }
              const _fetch = fetch;
              c7 = 2;
              fingerprint = 1;
              const obj14 = { value: null, done: false };
              obj14[0] = fetch(url, { method: "HEAD", redirect: "follow" });
              return obj14;
            }
          } else if (1 === tmp8) {
            store = 0;
            const message = str35;
            const obj15 = { originalUrl: null, extractedUrlString: null, error: null };
            obj15[0] = lib.url;
            obj15[1] = str2;
            obj15[2] = message.message;
            payload.warn("Failed to parse URL from AppsFlyer legacy URL", obj15);
            fingerprint = 3;
            const obj16 = { value: null, done: true };
            obj16[0] = undefined;
            return obj16;
          } else if (arg0 === 1) {
            fingerprint = 3;
            throw url;
          } else if (arg0 === 2) {
            fingerprint = 3;
            obj = { value: null, done: true };
            obj[0] = url;
            return obj;
          } else {
            url = url.url;
            Iterable = lib(url[7]).DeeplinkSource.Iterable;
          }
          c7 = callback(url[11])(url, true);
          fingerprint = c7.fingerprint;
          attemptId = c7.attemptId;
          payload = c7.payload;
          installationId = c7.installationId;
          payload.log("Parsed url as: ", c7);
          inviteCode = payload.inviteCode;
          guildTemplateCode = payload.guildTemplateCode;
          authToken = payload.authToken;
          result1 = null;
          if (null != inviteCode) {
            obj5 = lib(url[12]);
            result1 = obj5.parseInviteCodeFromInviteKey(inviteCode);
          }
          let tmp63 = null == fingerprint;
          if (tmp63) {
            tmp63 = null == attemptId;
          }
          if (tmp63) {
            tmp63 = null == inviteCode;
          }
          if (tmp63) {
            tmp63 = null == guildTemplateCode;
          }
          if (tmp63) {
            tmp63 = null == authToken;
          }
          if (tmp63) {
            tmp63 = null == Iterable;
          }
          if (tmp63) {
            tmp63 = null == installationId;
          }
          if (!tmp63) {
            obj6 = callback(url[9]);
            const obj17 = { invite_code: null, guild_template_code: null, has_auth_token: null, is_backgrounded: null, attempt_id: null, deeplink_source: null, link_type: null, is_cold_start: null, received_installation_id: null };
            obj17[0] = result1;
            obj17[1] = guildTemplateCode;
            let tmp84 = null != authToken;
            if (tmp84) {
              tmp84 = 0 === authToken.length;
            }
            obj17[2] = tmp84;
            obj17[3] = store.getState() === c7.BACKGROUND;
            obj17[4] = attemptId;
            obj17[5] = Iterable;
            obj17[6] = payload.type;
            obj17[7] = callback;
            obj17[8] = installationId;
            let tmp97 = null;
            if (null != fingerprint) {
              const obj18 = { fingerprint: null };
              obj9 = lib(url[13]);
              obj18[0] = obj9.extractId(fingerprint);
              tmp97 = obj18;
            }
            const merged = Object.assign(tmp97);
            obj6.track(fingerprint.EXTERNAL_DYNAMIC_LINK_RECEIVED, obj17);
          }
          let tmp109 = null != result1;
          if (tmp109) {
            tmp109 = null != installationId;
          }
          if (tmp109) {
            obj10 = callback(url[14]);
            const result2 = obj10.setReceivedInstallationIdForInviteCode(result1, installationId);
          }
          callback(url[15])(url);
          const obj19 = { payload: null };
          obj19[0] = payload;
          callback(url[10])(obj19);
        } catch (tmp162) {
          str35 = tmp162;
          if (tmp4 === store) {
            fingerprint = tmp2;
            throw tmp162;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AppStates: error, AnalyticEvents: closure_8, LinkingTypes: c9 } = ME);
let closure_10 = new timestampDefault("index.native.tsx");
const tmp3 = new timestampDefault("index.native.tsx");
let result = require("obj132").fileFinishedImporting("modules/links/native/handleIncomingURL.tsx");

export default function handleIncomingURL() {
  const self = this;
  const apply = _handleIncomingURL.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};