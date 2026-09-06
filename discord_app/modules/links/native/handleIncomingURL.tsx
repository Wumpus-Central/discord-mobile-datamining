// === Module 17896: handleIncomingURL ===

// Module 17896 (handleIncomingURL)
import LoggerDefault from "Logger" /* 3 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4767 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7475 */;
import handleSupportedURLDefault from "handleSupportedURL" /* 13850 */;
import DeepLinkTypes from "DeepLinkTypes" /* 17895 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import AppStateStore from "AppStateStore" /* 1895 */;

require = fn;
let closure_11 = async function _handleIncomingURL(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let url;
          let AppsFlyer;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          closure_131_7 = undefined;
          let fingerprint;
          let attemptId;
          let payload;
          let installationId;
          let didRegister;
          let inviteCode;
          let guildTemplateCode;
          let authToken;
          closure_131_16 = undefined;
          ({ url: closure_131_2, source: closure_131_3 } = closure_0);
          const _HermesInternal = HermesInternal;
          logger.log("Opening url: " + url + " [" + AppsFlyer + "]");
          if (state.getState() !== constants.ACTIVE) {
            let obj3 = TTIAnalyticsUtils;
            let str = "deeplink";
            if (null == url) {
              str = "launcher";
            }
            obj3.trackAppOpened(str);
          }
          if (null == url) {
            c8 = 3;
          } else {
            if (url.startsWith("discord://app/open")) {
              const index = url.indexOf("#");
              if (-1 !== index) {
                const str2 = url.substring(index + 1);
                closure_131_4 = str2;
                if ("" !== str2) {
                  if ("" !== str2.trim()) {
                    c6 = 1;
                    const _URL2 = URL;
                    const str35 = new URL(str2);
                    closure_131_5 = str35;
                    closure_131_6 = ["campaign", "deep_link_value", "media_source"];
                    closure_2 = 0;
                    let searchParams = str35.searchParams;
                    const items = [];
                    closure_2 = HermesBuiltin.arraySpread(searchParams.keys(), closure_2);
                    const found = items.filter((item) => {
                      let startsWithResult = item.startsWith("af_");
                      if (!startsWithResult) {
                        startsWithResult = closure_1_6.includes(item);
                      }
                      return startsWithResult;
                    });
                    const item = found.forEach((item) => {
                      searchParams = searchParams.searchParams;
                      return searchParams.delete(item);
                    });
                    url = str35.toString();
                    AppsFlyer = DeepLinkTypes.DeeplinkSource.AppsFlyer;
                    const _HermesInternal2 = HermesInternal;
                    logger.log("Extracted clean URL from AppsFlyer legacy URL: " + url);
                    c6 = 0;
                  }
                }
                const obj1 = { originalUrl: url };
                logger.warn("Empty or whitespace-only URL fragment in AppsFlyer legacy URL", obj1);
                c8 = 3;
                const obj2 = { value: undefined, done: true };
                return obj2;
              } else {
                obj3 = { originalUrl: url };
                logger.warn("No hash mark found in AppsFlyer legacy URL", obj3);
              }
            }
            if (url.startsWith("discordwidget:///")) {
              if (url.startsWith("discordwidget:///open-voice-panel")) {
                channelId = channelId.getChannelId();
                let channel = null;
                if (null != channelId) {
                  channel = channel.getChannel(channelId);
                }
                if (null != channel) {
                  const result = PrivateChannelCallUtils.navigateToVoiceChannel(channel, "LiveActivity");
                  const index1 = url.indexOf("?");
                  let str3 = "";
                  if (index1 >= 0) {
                    str3 = url.slice(index1 + 1);
                  }
                  const uRLSearchParams = new URLSearchParams(str3);
                  value = uRLSearchParams.get("source");
                  let tmp168 = "lockScreen" !== value;
                  if (tmp168) {
                    tmp168 = "dynamicIsland" !== value;
                  }
                  if (!tmp168) {
                    const obj4 = { action: "Open Voice Panel", channel_id: channel.id, surface: value };
                    AnalyticsUtilsDefault.track(constants2.LIVE_ACTIVITY_INTERACTED, obj4);
                  }
                }
                c8 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                const parts = url.split("voice/");
                if (2 !== parts.length) {
                  c8 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  const parts1 = parts[1].split("/");
                  if (0 === parts1.length) {
                    c8 = 3;
                    return { value: "HermesInternal", done: null };
                  } else if ("user" !== parts1[0]) {
                    if ("invite" === parts1[0]) {
                      let obj5 = { payload: null };
                      let obj6 = { type: constants3.CREATE_VOICE_INVITE, guildId: parts1[1], channelId: parts1[2] };
                      obj5.payload = obj6;
                      handleSupportedURLDefault(obj5);
                    } else if ("wave" === parts1[0]) {
                      const obj7 = { payload: null };
                      const obj8 = { type: constants3.SEND_VOICE_HANGOUT_WAVE, guildId: parts1[1], channelId: parts1[2] };
                      obj7.payload = obj8;
                      handleSupportedURLDefault(obj7);
                    } else if ("join" === parts1[0]) {
                      const obj9 = { payload: null };
                      let obj10 = { type: constants3.CHANNEL, guildId: parts1[1], channelId: parts1[2] };
                      obj9.payload = obj10;
                      handleSupportedURLDefault(obj9);
                    } else if (2 === parts1.length) {
                      [tmp206, tmp207] = parts1;
                      let obj11 = { payload: null };
                      let obj12 = { type: constants3.CHANNEL, guildId: tmp206, channelId: tmp207 };
                      obj11.payload = obj12;
                      handleSupportedURLDefault(obj11);
                      c8 = 3;
                      const obj13 = { value: undefined, done: true };
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
          c8 = 1;
          const obj14 = { value: fetch(url, { method: "HEAD", redirect: "follow" }), done: false };
          return obj14;
        }
      } else if (1 === tmp8) {
        c6 = 0;
        closure_131_17 = searchParams;
        const obj15 = { originalUrl: closure_131_0.url, extractedUrlString: closure_131_4, error: closure_131_17.message };
        closure_132_10.warn("Failed to parse URL from AppsFlyer legacy URL", obj15);
        c8 = 3;
        const obj16 = { value: undefined, done: true };
        return obj16;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        url = value.url;
        AppsFlyer = closure_132_0(closure_132_2[7]).DeeplinkSource.Iterable;
      }
      closure_131_7 = closure_132_1(closure_132_2[11])(url, true);
      fingerprint = closure_131_7.fingerprint;
      attemptId = closure_131_7.attemptId;
      payload = closure_131_7.payload;
      installationId = closure_131_7.installationId;
      didRegister = closure_131_7.didRegister;
      closure_132_10.log("Parsed url as: ", closure_131_7);
      inviteCode = payload.inviteCode;
      guildTemplateCode = payload.guildTemplateCode;
      authToken = payload.authToken;
      let result1 = null;
      if (null != inviteCode) {
        obj5 = closure_132_0(closure_132_2[12]);
        result1 = obj5.parseInviteCodeFromInviteKey(inviteCode);
      }
      closure_131_16 = result1;
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
        tmp64 = null == AppsFlyer;
      }
      if (tmp64) {
        tmp64 = null == installationId;
      }
      if (!tmp64) {
        obj6 = closure_132_1(closure_132_2[9]);
        const obj17 = { invite_code: closure_131_16, guild_template_code: guildTemplateCode, has_auth_token: null, is_backgrounded: null, attempt_id: null, deeplink_source: null, link_type: null, is_cold_start: null, received_installation_id: null };
        let tmp85 = null != authToken;
        if (tmp85) {
          tmp85 = 0 === authToken.length;
        }
        obj17.has_auth_token = tmp85;
        obj17.is_backgrounded = closure_132_6.getState() === closure_132_7.BACKGROUND;
        obj17.attempt_id = attemptId;
        obj17.deeplink_source = AppsFlyer;
        obj17.link_type = payload.type;
        obj17.is_cold_start = closure_131_1;
        obj17.received_installation_id = installationId;
        let obj18 = null;
        if (didRegister) {
          obj18 = { did_register: true };
        }
        const merged = Object.assign(obj18);
        let tmp103 = null;
        if (null != fingerprint) {
          const obj19 = { fingerprint: null };
          obj10 = closure_132_0(closure_132_2[13]);
          obj19.fingerprint = obj10.extractId(fingerprint);
          tmp103 = obj19;
        }
        const merged1 = Object.assign(tmp103);
        obj6.track(closure_132_8.EXTERNAL_DYNAMIC_LINK_RECEIVED, obj17);
      }
      let tmp115 = null != closure_131_16;
      if (tmp115) {
        tmp115 = null != installationId;
      }
      if (tmp115) {
        obj11 = closure_132_1(closure_132_2[14]);
        const result2 = obj11.setReceivedInstallationIdForInviteCode(closure_131_16, installationId);
      }
      let tmp127 = null != closure_131_16;
      if (tmp127) {
        tmp127 = didRegister;
      }
      if (tmp127) {
        obj12 = closure_132_0(closure_132_2[15]);
        const result3 = obj12.setRegistrationHandoff();
      }
      closure_132_1(closure_132_2[16])(url);
      const obj20 = { payload };
      closure_132_1(closure_132_2[10])(obj20);
    } catch (tmp176) {
      searchParams = tmp176;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp176;
      } else {
        c7 = tmp;
      }
    }
  }
};
const Constants = fn(1074);
({ AppStates: closure_7, AnalyticEvents: closure_8, LinkingTypes: closure_9 } = Constants);
let closure_10 = new LoggerDefault("index.native.tsx");
const size = fn(2);
let result = size.fileFinishedImporting("modules/links/native/handleIncomingURL.tsx");

export default function handleIncomingURL() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};