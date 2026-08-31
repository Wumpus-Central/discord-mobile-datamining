// discord_app/modules/links/native/handleIncomingURL.tsx
import timestampDefault from "../../debug/Logger.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../stores/ChannelStore.tsx";
import closure_5 from "../../../stores/RTCConnectionStore.tsx";
import closure_6 from "../../../stores/native/AppStateStore.tsx";
import ME from "../../../Constants.tsx";

const require = arg1;
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
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = url;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp6;
        throwTypeErrorResult = globalThis;
        throwTypeErrorResult = null;
        if (tmp7 === 3) {
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
                throwTypeErrorResult = lib;
                throwTypeErrorResult = callback;
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
                let didRegister;
                let inviteCode;
                let guildTemplateCode;
                let authToken;
                c16 = undefined;
                ({ url, source: Iterable } = lib);
                throwTypeErrorResult = closure_1_10;
                throwTypeErrorResult = url;
                throwTypeErrorResult = Iterable;
                const _HermesInternal = HermesInternal;
                throwTypeErrorResult = closure_1_10.log("Opening url: " + url + " [" + Iterable + "]");
                throwTypeErrorResult = store;
                throwTypeErrorResult = c7;
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
                  throwTypeErrorResult = url;
                  if (url.startsWith("discord://app/open")) {
                    const index = url.indexOf("#");
                    if (-1 !== index) {
                      str2 = url.substring(index + 1);
                      if ("" !== str2) {
                        if ("" !== str2.trim()) {
                          store = 1;
                          const _URL2 = URL;
                          throwTypeErrorResult = new.target;
                          throwTypeErrorResult = new.target;
                          throwTypeErrorResult = str2;
                          str35 = new URL(str2);
                          throwTypeErrorResult = str35;
                          store = ["campaign", "deep_link_value", "media_source"];
                          url = 0;
                          let searchParams = str35.searchParams;
                          const items = [];
                          throwTypeErrorResult = url;
                          throwTypeErrorResult = items;
                          url = HermesBuiltin.arraySpread(searchParams.keys(), url);
                          const found = items.filter((str) => {
                            let startsWithResult = str.startsWith("af_");
                            if (!startsWithResult) {
                              startsWithResult = c6.includes(str);
                            }
                            return startsWithResult;
                          });
                          throwTypeErrorResult = found.forEach((arg0) => {
                            const searchParams = str35.searchParams;
                            return searchParams.delete(arg0);
                          });
                          url = str35.toString();
                          throwTypeErrorResult = lib;
                          throwTypeErrorResult = closure_1_2;
                          Iterable = lib(closure_1_2[7]).DeeplinkSource.AppsFlyer;
                          throwTypeErrorResult = closure_1_10;
                          throwTypeErrorResult = url;
                          const _HermesInternal2 = HermesInternal;
                          throwTypeErrorResult = closure_1_10.log("Extracted clean URL from AppsFlyer legacy URL: " + url);
                          store = 0;
                        }
                      }
                      throwTypeErrorResult = closure_1_10;
                      obj1 = { originalUrl: null };
                      throwTypeErrorResult = url;
                      obj1[0] = url;
                      throwTypeErrorResult = closure_1_10.warn("Empty or whitespace-only URL fragment in AppsFlyer legacy URL", obj1);
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
                    throwTypeErrorResult = url;
                    if (url.startsWith("discordwidget:///open-voice-panel")) {
                      throwTypeErrorResult = closure_1_5;
                      throwTypeErrorResult = closure_1_5.getChannelId();
                      throwTypeErrorResult = null;
                      if (null != throwTypeErrorResult) {
                        throwTypeErrorResult = closure_1_4;
                        throwTypeErrorResult = closure_1_4.getChannel(throwTypeErrorResult);
                      }
                      if (null != throwTypeErrorResult) {
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = closure_1_2;
                        throwTypeErrorResult = lib(closure_1_2[8]).navigateToVoiceChannel(throwTypeErrorResult, "LiveActivity");
                        throwTypeErrorResult = url;
                        throwTypeErrorResult = url.indexOf("?");
                        let str3 = "";
                        if (throwTypeErrorResult >= 0) {
                          throwTypeErrorResult = url;
                          str3 = url.slice(throwTypeErrorResult + 1);
                        }
                        throwTypeErrorResult = new.target;
                        throwTypeErrorResult = new.target;
                        throwTypeErrorResult = str3;
                        const uRLSearchParams = new URLSearchParams(str3);
                        throwTypeErrorResult = uRLSearchParams;
                        throwTypeErrorResult = uRLSearchParams.get("source");
                        throwTypeErrorResult = "lockScreen" !== throwTypeErrorResult;
                        if (throwTypeErrorResult) {
                          throwTypeErrorResult = "dynamicIsland" !== throwTypeErrorResult;
                        }
                        if (!throwTypeErrorResult) {
                          throwTypeErrorResult = callback;
                          throwTypeErrorResult = closure_1_2;
                          throwTypeErrorResult = constants;
                          const obj4 = { action: "Open Voice Panel", channel_id: null, surface: null };
                          obj4[1] = throwTypeErrorResult.id;
                          obj4[2] = throwTypeErrorResult;
                          throwTypeErrorResult = callback(closure_1_2[9]).track(constants.LIVE_ACTIVITY_INTERACTED, obj4);
                          const obj24 = callback(closure_1_2[9]);
                        }
                        const obj32 = lib(closure_1_2[8]);
                      }
                      fingerprint = 3;
                      return { value: "HermesInternal", done: "HermesInternal" };
                    } else {
                      throwTypeErrorResult = url;
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
                            throwTypeErrorResult = callback;
                            throwTypeErrorResult = closure_1_2;
                            let obj5 = { payload: null };
                            let obj6 = { type: null, guildId: null, channelId: null };
                            throwTypeErrorResult = closure_1_9;
                            obj6[0] = closure_1_9.CREATE_VOICE_INVITE;
                            obj6[1] = parts1[1];
                            obj6[2] = parts1[2];
                            obj5[0] = obj6;
                            throwTypeErrorResult = callback(closure_1_2[10])(obj5);
                          } else if ("wave" === parts1[0]) {
                            throwTypeErrorResult = callback;
                            throwTypeErrorResult = closure_1_2;
                            const obj7 = { payload: null };
                            const obj8 = { type: null, guildId: null, channelId: null };
                            throwTypeErrorResult = closure_1_9;
                            obj8[0] = closure_1_9.SEND_VOICE_HANGOUT_WAVE;
                            obj8[1] = parts1[1];
                            obj8[2] = parts1[2];
                            obj7[0] = obj8;
                            throwTypeErrorResult = callback(closure_1_2[10])(obj7);
                          } else if ("join" === parts1[0]) {
                            throwTypeErrorResult = callback;
                            throwTypeErrorResult = closure_1_2;
                            const obj9 = { payload: null };
                            let obj10 = { type: null, guildId: null, channelId: null };
                            throwTypeErrorResult = closure_1_9;
                            obj10[0] = closure_1_9.CHANNEL;
                            obj10[1] = parts1[1];
                            obj10[2] = parts1[2];
                            obj9[0] = obj10;
                            throwTypeErrorResult = callback(closure_1_2[10])(obj9);
                          } else if (2 === parts1.length) {
                            throwTypeErrorResult = callback;
                            throwTypeErrorResult = closure_1_2;
                            [tmp, tmp] = parts1;
                            let obj11 = { payload: null };
                            let obj12 = { type: null, guildId: null, channelId: null };
                            throwTypeErrorResult = closure_1_9;
                            obj12[0] = closure_1_9.CHANNEL;
                            obj12[1] = throwTypeErrorResult;
                            obj12[2] = throwTypeErrorResult;
                            obj11[0] = obj12;
                            throwTypeErrorResult = callback(closure_1_2[10])(obj11);
                            fingerprint = 3;
                            const obj13 = { value: null, done: true };
                            obj13[0] = undefined;
                            return obj13;
                          }
                        }
                        const str36 = parts[1];
                      }
                    }
                  } else {
                    const _URL = URL;
                    const uRL = new URL(url);
                  }
                }
                const _fetch = fetch;
                throwTypeErrorResult = url;
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
            didRegister = c7.didRegister;
            payload.log("Parsed url as: ", c7);
            inviteCode = payload.inviteCode;
            guildTemplateCode = payload.guildTemplateCode;
            authToken = payload.authToken;
            let result = null;
            if (null != inviteCode) {
              obj5 = lib(url[12]);
              result = obj5.parseInviteCodeFromInviteKey(inviteCode);
            }
            c16 = result;
            let tmp64 = null == fingerprint;
            if (tmp64) {
              tmp64 = null == attemptId;
            }
            if (tmp64) {
              tmp64 = null == inviteCode;
            }
            if (tmp64) {
              tmp64 = null == guildTemplateCode;
            }
            if (tmp64) {
              tmp64 = null == authToken;
            }
            if (tmp64) {
              tmp64 = null == Iterable;
            }
            if (tmp64) {
              tmp64 = null == installationId;
            }
            if (!tmp64) {
              obj6 = callback(url[9]);
              const obj17 = { invite_code: null, guild_template_code: null, has_auth_token: null, is_backgrounded: null, attempt_id: null, deeplink_source: null, link_type: null, is_cold_start: null, received_installation_id: null };
              obj17[0] = c16;
              obj17[1] = guildTemplateCode;
              let tmp85 = null != authToken;
              if (tmp85) {
                tmp85 = 0 === authToken.length;
              }
              obj17[2] = tmp85;
              obj17[3] = store.getState() === c7.BACKGROUND;
              obj17[4] = attemptId;
              obj17[5] = Iterable;
              obj17[6] = payload.type;
              obj17[7] = callback;
              obj17[8] = installationId;
              let obj18 = null;
              if (didRegister) {
                obj18 = { did_register: true };
              }
              throwTypeErrorResult = obj18;
              throwTypeErrorResult = Object.assign(obj18);
              throwTypeErrorResult = fingerprint;
              throwTypeErrorResult = null;
              if (null != fingerprint) {
                throwTypeErrorResult = Iterable;
                throwTypeErrorResult = str2;
                const obj19 = { fingerprint: null };
                throwTypeErrorResult = lib;
                throwTypeErrorResult = url;
                obj10 = lib(url[13]);
                throwTypeErrorResult = fingerprint;
                obj19[0] = obj10.extractId(fingerprint);
                throwTypeErrorResult = obj19;
              }
              throwTypeErrorResult = obj17;
              throwTypeErrorResult = Object.assign(throwTypeErrorResult);
              throwTypeErrorResult = obj6.track(fingerprint.EXTERNAL_DYNAMIC_LINK_RECEIVED, obj17);
            }
            throwTypeErrorResult = Iterable;
            throwTypeErrorResult = c16;
            throwTypeErrorResult = null != c16;
            if (throwTypeErrorResult) {
              throwTypeErrorResult = Iterable;
              throwTypeErrorResult = installationId;
              throwTypeErrorResult = null != installationId;
            }
            if (throwTypeErrorResult) {
              throwTypeErrorResult = Iterable;
              throwTypeErrorResult = str2;
              throwTypeErrorResult = callback;
              throwTypeErrorResult = url;
              obj11 = callback(url[14]);
              throwTypeErrorResult = c16;
              throwTypeErrorResult = installationId;
              throwTypeErrorResult = obj11.setReceivedInstallationIdForInviteCode(c16, installationId);
            }
            throwTypeErrorResult = Iterable;
            throwTypeErrorResult = c16;
            throwTypeErrorResult = null != c16;
            if (throwTypeErrorResult) {
              throwTypeErrorResult = Iterable;
              throwTypeErrorResult = didRegister;
            }
            if (throwTypeErrorResult) {
              throwTypeErrorResult = str2;
              throwTypeErrorResult = lib;
              throwTypeErrorResult = url;
              obj12 = lib(url[15]);
              throwTypeErrorResult = obj12.setRegistrationHandoff();
            }
            throwTypeErrorResult = Iterable;
            throwTypeErrorResult = str2;
            throwTypeErrorResult = callback;
            throwTypeErrorResult = url;
            throwTypeErrorResult = url;
            throwTypeErrorResult = callback(url[16])(url);
            throwTypeErrorResult = callback;
            throwTypeErrorResult = url;
            const obj20 = { payload: null };
            throwTypeErrorResult = payload;
            obj20[0] = payload;
            throwTypeErrorResult = callback(url[10])(obj20);
          } catch (throwTypeErrorResult) {
            str35 = throwTypeErrorResult;
            throwTypeErrorResult = store;
            if (tmp4 === store) {
              throwTypeErrorResult = tmp2;
              fingerprint = tmp2;
              throw throwTypeErrorResult;
            } else {
              c7 = throwTypeErrorResult;
            }
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
let result = require("set").fileFinishedImporting("modules/links/native/handleIncomingURL.tsx");

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