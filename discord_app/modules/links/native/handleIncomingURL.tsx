// === Module 19157: handleIncomingURL ===

// Module 19157 (handleIncomingURL)
import LoggerDefault from "Logger" /* 3 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7530 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7811 */;
import handleSupportedURLDefault from "handleSupportedURL" /* 14891 */;
import DeepLinkTypes from "DeepLinkTypes" /* 19156 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5676 */;
import AppStateStore from "AppStateStore" /* 2001 */;

require = fn;
let closure_11 = async function _handleIncomingURL(arg0) {
  closure_0 = arg0;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp5;
            closure_131_0 = closure_0;
            closure_131_1 = isAppStartupNavigation;
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
              let str = "deeplink";
              if (null == url) {
                str = "launcher";
              }
              TTIAnalyticsUtils.trackAppOpened(str);
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
                  const obj5 = { originalUrl: url };
                  logger.warn("Empty or whitespace-only URL fragment in AppsFlyer legacy URL", obj5);
                  c8 = 3;
                  const obj9 = { value: undefined, done: true };
                  return obj9;
                } else {
                  const obj10 = { originalUrl: url };
                  logger.warn("No hash mark found in AppsFlyer legacy URL", obj10);
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
                    const result = PrivateChannelCallUtils.navigateToVoiceChannel(channel, "LiveActivity");
                    const index1 = url.indexOf("?");
                    let str3 = "";
                    if (index1 >= 0) {
                      str3 = url.slice(index1 + 1);
                    }
                    const uRLSearchParams = new URLSearchParams(str3);
                    value = uRLSearchParams.get("source");
                    let tmp183 = "lockScreen" !== value;
                    if (tmp183) {
                      tmp183 = "dynamicIsland" !== value;
                    }
                    if (!tmp183) {
                      const obj11 = { action: "Open Voice Panel", channel_id: channel.id, surface: value };
                      AnalyticsUtilsDefault.track(constants2.LIVE_ACTIVITY_INTERACTED, obj11);
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
                    const parts1 = parts[1].split("/");
                    if (0 === parts1.length) {
                      c8 = 3;
                      return { value: "IconComponent", done: null };
                    } else if ("user" !== parts1[0]) {
                      if ("invite" === parts1[0]) {
                        const obj15 = { payload: null, isAppStartupNavigation: null };
                        const obj16 = { type: constants3.CREATE_VOICE_INVITE, guildId: parts1[1], channelId: parts1[2] };
                        obj15.payload = obj16;
                        obj15.isAppStartupNavigation = isAppStartupNavigation;
                        handleSupportedURLDefault(obj15);
                      } else if ("wave" === parts1[0]) {
                        const obj17 = { payload: null, isAppStartupNavigation: null };
                        const obj18 = { type: constants3.SEND_VOICE_HANGOUT_WAVE, guildId: parts1[1], channelId: parts1[2] };
                        obj17.payload = obj18;
                        obj17.isAppStartupNavigation = isAppStartupNavigation;
                        handleSupportedURLDefault(obj17);
                      } else if ("join" === parts1[0]) {
                        const obj19 = { payload: null, isAppStartupNavigation: null };
                        const obj20 = { type: constants3.CHANNEL, guildId: parts1[1], channelId: parts1[2] };
                        obj19.payload = obj20;
                        obj19.isAppStartupNavigation = isAppStartupNavigation;
                        handleSupportedURLDefault(obj19);
                      } else if (2 === parts1.length) {
                        [tmp221, tmp222] = parts1;
                        const obj21 = { payload: null, isAppStartupNavigation: null };
                        const obj22 = { type: constants3.CHANNEL, guildId: tmp221, channelId: tmp222 };
                        obj21.payload = obj22;
                        obj21.isAppStartupNavigation = isAppStartupNavigation;
                        handleSupportedURLDefault(obj21);
                        c8 = 3;
                        const obj23 = { value: undefined, done: true };
                        return obj23;
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
            const obj24 = { value: fetch(url, { method: "HEAD", redirect: "follow" }), done: false };
            return obj24;
          }
        } else if (1 === tmp8) {
          c6 = 0;
          closure_131_17 = searchParams;
          const obj26 = { originalUrl: closure_131_0.url, extractedUrlString: closure_131_4, error: closure_131_17.message };
          closure_132_10.warn("Failed to parse URL from AppsFlyer legacy URL", obj26);
          c8 = 3;
          const obj27 = { value: undefined, done: true };
          return obj27;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj = { value, done: true };
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
        let tmp51 = payload.type === closure_132_9.CHANNEL;
        if (tmp51) {
          tmp51 = null != payload.channelId;
        }
        if (tmp51) {
          const result1 = closure_132_0(closure_132_2[12]).queueFrameDeepLinkFromUrl(payload.channelId, url);
          const obj6 = closure_132_0(closure_132_2[12]);
        }
        closure_132_10.log("Parsed url as: ", closure_131_7);
        inviteCode = payload.inviteCode;
        guildTemplateCode = payload.guildTemplateCode;
        authToken = payload.authToken;
        let result2 = null;
        if (null != inviteCode) {
          result2 = closure_132_0(closure_132_2[13]).parseInviteCodeFromInviteKey(inviteCode);
          const obj7 = closure_132_0(closure_132_2[13]);
        }
        closure_131_16 = result2;
        let tmp78 = null == fingerprint;
        if (tmp78) {
          tmp78 = null == attemptId;
        }
        if (tmp78) {
          tmp78 = null == inviteCode;
        }
        if (tmp78) {
          tmp78 = null == guildTemplateCode;
        }
        if (tmp78) {
          tmp78 = null == authToken;
        }
        if (tmp78) {
          tmp78 = null == AppsFlyer;
        }
        if (tmp78) {
          tmp78 = null == installationId;
        }
        if (!tmp78) {
          const obj28 = { invite_code: closure_131_16, guild_template_code: guildTemplateCode, has_auth_token: null, is_backgrounded: null, attempt_id: null, deeplink_source: null, link_type: null, is_cold_start: null, received_installation_id: null };
          let tmp99 = null != authToken;
          if (tmp99) {
            tmp99 = 0 === authToken.length;
          }
          obj28.has_auth_token = tmp99;
          obj28.is_backgrounded = closure_132_6.getState() === closure_132_7.BACKGROUND;
          obj28.attempt_id = attemptId;
          obj28.deeplink_source = AppsFlyer;
          obj28.link_type = payload.type;
          obj28.is_cold_start = closure_131_1;
          obj28.received_installation_id = installationId;
          let obj29 = null;
          if (didRegister) {
            obj29 = { did_register: true };
          }
          const merged = Object.assign(obj29);
          let tmp117 = null;
          if (null != fingerprint) {
            const obj30 = { fingerprint: closure_132_0(closure_132_2[14]).extractId(fingerprint) };
            tmp117 = obj30;
            const obj12 = closure_132_0(closure_132_2[14]);
          }
          const merged1 = Object.assign(tmp117);
          closure_132_1(closure_132_2[9]).track(closure_132_8.EXTERNAL_DYNAMIC_LINK_RECEIVED, obj28);
          const obj8 = closure_132_1(closure_132_2[9]);
        }
        let tmp129 = null != closure_131_16;
        if (tmp129) {
          tmp129 = null != installationId;
        }
        if (tmp129) {
          const result3 = closure_132_1(closure_132_2[15]).setReceivedInstallationIdForInviteCode(closure_131_16, installationId);
          const obj13 = closure_132_1(closure_132_2[15]);
        }
        let tmp141 = null != closure_131_16;
        if (tmp141) {
          tmp141 = didRegister;
        }
        if (tmp141) {
          const result4 = closure_132_0(closure_132_2[16]).setRegistrationHandoff();
          const obj14 = closure_132_0(closure_132_2[16]);
        }
        closure_132_1(closure_132_2[17])(url);
        const obj31 = { payload, isAppStartupNavigation: closure_131_1 };
        closure_132_1(closure_132_2[10])(obj31);
      } catch (tmp191) {
        searchParams = tmp191;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp191;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
const Constants = fn(1087);
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