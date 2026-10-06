// === Module 18135: handleIncomingURL ===

// Module 18135 (handleIncomingURL)
import LoggerDefault from "Logger" /* 3 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5103 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 6997 */;
import handleSupportedURLDefault from "handleSupportedURL" /* 13679 */;
import DeepLinkTypes from "DeepLinkTypes" /* 18134 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4919 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let channel, channelId, closure_2, closure_3, closure_4, closure_5, message;

let c9;
let metroImportAll;
let metroImportDefault;
let obj = function _handleIncomingURL() {
  let constants2;
  let constants3;
  let logger;
  let state;
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let url = arg0;
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async function(arg0, value) {
      let Iterable;
      let obj13;
      let obj15;
      let obj17;
      let obj19;
      let obj9;
      let tmp198;
      let tmp199;
      let tmp82;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let str2;
          let closure_7;
          let fingerprint;
          let attemptId;
          let payload;
          let installationId;
          let didRegister;
          let inviteCode;
          let guildTemplateCode;
          let authToken;
          let result1;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp17;
              url = undefined;
              Iterable = undefined;
              str2 = undefined;
              let str35;
              let closure_6;
              closure_7 = undefined;
              fingerprint = undefined;
              attemptId = undefined;
              payload = undefined;
              installationId = undefined;
              didRegister = undefined;
              inviteCode = undefined;
              guildTemplateCode = undefined;
              authToken = undefined;
              result1 = undefined;
              ({ url, source: Iterable } = url);
              const _HermesInternal = HermesInternal;
              logger.log("Opening url: " + url + " [" + Iterable + "]");
              if (state.getState() !== constants.ACTIVE) {
                let str = "deeplink";
                const trackAppOpened = TTIAnalyticsUtils.trackAppOpened;
                TTIAnalyticsUtils;
                if (null == url) {
                  str = "launcher";
                }
                trackAppOpened(str);
              }
              if (null != url) {
                if (url.startsWith("discord://app/open")) {
                  const index = url.indexOf("#");
                  if (-1 !== index) {
                    str2 = url.substring(index + 1);
                    if ("" !== str2) {
                      if ("" !== str2.trim()) {
                        const _URL2 = URL;
                        const self5 = this;
                        const self6 = this;
                        str35 = new URL(str2);
                        closure_6 = ["campaign", "deep_link_value", "media_source"];
                        closure_2 = 0;
                        let searchParams = str35.searchParams;
                        const items = [];
                        closure_2 = HermesBuiltin.arraySpread(items, searchParams.keys(), closure_2);
                        const found = items.filter((item) => {
                          const startsWithResult = item.startsWith("af_") || closure_1_6.includes(item);
                          return startsWithResult;
                        });
                        const item = found.forEach((item) => {
                          let searchParams;
                          searchParams = searchParams.searchParams;
                          return searchParams.delete(item);
                        });
                        url = str35.toString();
                        Iterable = DeepLinkTypes.DeeplinkSource.AppsFlyer;
                        const _HermesInternal2 = HermesInternal;
                        logger.log("Extracted clean URL from AppsFlyer legacy URL: " + url);
                        c6 = 0;
                      }
                    }
                    const obj4 = { originalUrl: url };
                    logger.warn("Empty or whitespace-only URL fragment in AppsFlyer legacy URL", obj4);
                    c8 = 3;
                    return { value: undefined, done: true };
                  } else {
                    const obj7 = { originalUrl: url };
                    logger.warn("No hash mark found in AppsFlyer legacy URL", obj7);
                  }
                }
                if (url.startsWith("discordwidget:///")) {
                  if (url.startsWith("discordwidget:///open-voice-panel")) {
                    channelId = channelId.getChannelId();
                    channel = null;
                    if (null != channelId) {
                      channel = channel.getChannel(channelId);
                    }
                    if (null != channel) {
                      const obj30 = PrivateChannelCallUtils;
                      const result = obj30.navigateToVoiceChannel(channel, "LiveActivity");
                      const index1 = url.indexOf("?");
                      let str3 = "";
                      const _URLSearchParams = URLSearchParams;
                      if (index1 >= 0) {
                        str3 = url.slice(index1 + 1);
                      }
                      const self3 = this;
                      const self4 = this;
                      const _URLSearchParams1 = new _URLSearchParams(str3);
                      value = _URLSearchParams1.get("source");
                      const tmp164 = "lockScreen" !== value && "dynamicIsland" !== value;
                      if (!tmp164) {
                        const obj8 = { action: "Open Voice Panel", channel_id: channel.id, surface: value };
                        const obj22 = AnalyticsUtilsDefault;
                        obj22.track(constants2.LIVE_ACTIVITY_INTERACTED, obj8);
                      }
                    }
                    c8 = 3;
                    return { value: "IconComponent", done: null };
                  } else {
                    const parts = url.split("voice/");
                    if (2 !== parts.length) {
                      c8 = 3;
                      return { value: "IconComponent", done: null };
                    } else {
                      const str36 = parts[1];
                      const parts1 = str36.split("/");
                      if (0 === parts1.length) {
                        c8 = 3;
                        return { value: "IconComponent", done: null };
                      } else if ("user" !== parts1[0]) {
                        if ("invite" === parts1[0]) {
                          const obj12 = { payload: obj13, isAppStartupNavigation };
                          obj13 = { type: constants3.CREATE_VOICE_INVITE, guildId: parts1[1], channelId: parts1[2] };
                          handleSupportedURLDefault(obj12);
                        } else if ("wave" === parts1[0]) {
                          const obj14 = { payload: obj15, isAppStartupNavigation };
                          obj15 = { type: constants3.SEND_VOICE_HANGOUT_WAVE, guildId: parts1[1], channelId: parts1[2] };
                          handleSupportedURLDefault(obj14);
                        } else if ("join" === parts1[0]) {
                          const obj16 = { payload: obj17, isAppStartupNavigation };
                          obj17 = { type: constants3.CHANNEL, guildId: parts1[1], channelId: parts1[2] };
                          handleSupportedURLDefault(obj16);
                        } else if (2 === parts1.length) {
                          [tmp198, tmp199] = parts1;
                          const obj18 = { payload: obj19, isAppStartupNavigation };
                          obj19 = { type: constants3.CHANNEL, guildId: tmp198, channelId: tmp199 };
                          handleSupportedURLDefault(obj18);
                          c8 = 3;
                          return { value: undefined, done: true };
                        }
                      }
                    }
                  }
                } else {
                  const _URL = URL;
                  const self = this;
                  const self2 = this;
                  const uRL = new URL(url);
                  if ("l.discord.com" === uRL.hostname) {
                    const _fetch = fetch;
                    c7 = 2;
                    c8 = 1;
                    const obj21 = { value: fetch(url, { method: "HEAD", redirect: "follow" }), done: false };
                    return obj21;
                  }
                }
              }
              c8 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === tmp4) {
            c6 = 0;
            message = closure_5;
            const obj23 = { originalUrl: url.url, extractedUrlString: str2, error: message.message };
            closure_132_10.warn("Failed to parse URL from AppsFlyer legacy URL", obj23);
            c8 = 3;
            return { value: undefined, done: true };
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            return { value, done: true };
          } else {
            url = value.url;
            Iterable = closure_132_0(closure_132_2[7]).DeeplinkSource.Iterable;
          }
          closure_7 = closure_132_1(closure_132_2[11])(url, true);
          fingerprint = closure_7.fingerprint;
          attemptId = closure_7.attemptId;
          payload = closure_7.payload;
          installationId = closure_7.installationId;
          didRegister = closure_7.didRegister;
          closure_132_10.log("Parsed url as: ", closure_7);
          inviteCode = payload.inviteCode;
          guildTemplateCode = payload.guildTemplateCode;
          authToken = payload.authToken;
          result1 = null;
          if (null != inviteCode) {
            const obj5 = closure_132_0(closure_132_2[12]);
            result1 = obj5.parseInviteCodeFromInviteKey(inviteCode);
          }
          const tmp60 = null == fingerprint && null == attemptId && null == inviteCode && null == guildTemplateCode && null == authToken && null == Iterable && null == installationId;
          if (!tmp60) {
            const obj25 = { invite_code: result1, guild_template_code: guildTemplateCode, has_auth_token: tmp82, is_backgrounded: closure_132_6.getState() === closure_132_7.BACKGROUND, attempt_id: attemptId, deeplink_source: Iterable, link_type: payload.type, is_cold_start: isAppStartupNavigation, received_installation_id: installationId };
            tmp82 = null != authToken;
            const track = closure_132_1(closure_132_2[9]).track;
            const EXTERNAL_DYNAMIC_LINK_RECEIVED = closure_132_8.EXTERNAL_DYNAMIC_LINK_RECEIVED;
            closure_132_1(closure_132_2[9]);
            if (tmp82) {
              tmp82 = 0 === authToken.length;
            }
            let obj26 = null;
            if (didRegister) {
              obj26 = { did_register: true };
            }
            const merged = Object.assign(obj26);
            let tmp100 = null;
            if (null != fingerprint) {
              const obj27 = { fingerprint: obj9.extractId(fingerprint) };
              tmp100 = obj27;
              obj9 = closure_132_0(closure_132_2[13]);
            }
            const merged1 = Object.assign(tmp100);
            track(EXTERNAL_DYNAMIC_LINK_RECEIVED, obj25);
          }
          const tmp112 = null != result1 && null != installationId;
          if (tmp112) {
            const obj10 = closure_132_1(closure_132_2[14]);
            const result2 = obj10.setReceivedInstallationIdForInviteCode(result1, installationId);
          }
          const tmp124 = null != result1 && didRegister;
          if (tmp124) {
            const obj11 = closure_132_0(closure_132_2[15]);
            const result3 = obj11.setRegistrationHandoff();
          }
          closure_132_1(closure_132_2[16])(url);
          const obj28 = { payload, isAppStartupNavigation };
          closure_132_1(closure_132_2[10])(obj28);
        } catch (tmp171) {
          closure_5 = tmp171;
          if (0 === c6) {
            c8 = 3;
            throw tmp171;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
({ AppStates: metroImportDefault, AnalyticEvents: metroImportAll, LinkingTypes: c9 } = Constants);
const tmp3 = new LoggerDefault("index.native.tsx");
let closure_10 = tmp3;
let result = size.fileFinishedImporting("modules/links/native/handleIncomingURL.tsx");

export default function handleIncomingURL() {
  return obj(...arguments);
};