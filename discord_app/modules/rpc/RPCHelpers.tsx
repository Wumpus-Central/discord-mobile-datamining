// === Module 9559: recurseReplaceContentTree ===

// Module 9559 (recurseReplaceContentTree)
import applyDefault from "apply" /* 12 */;
import setDefault from "set" /* 1090 */;
import sendRequest from "sendRequest" /* 1272 */;
import UrlDefault from "Url" /* 1367 */;
import get_defaultRulesDefault from "get defaultRules" /* 4550 */;
import getNicknameDefault from "getNickname" /* 4712 */;
import useNullableMessageAuthor from "useNullableMessageAuthor" /* 4793 */;
import set from "set" /* 8339 */;
import prototypeDefault from "prototype" /* 9554 */;
import transformUserDefault from "transformUser" /* 9560 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "addApplication" /* 4788 */;
import closure_5 from "createExecutable" /* 1918 */;
import { GUILD_VOCAL_CHANNEL_TYPES } from "createChannelRecord" /* 1961 */;
import closure_7 from "createdAt" /* 1385 */;
import closure_8 from "ensureGuildLoaded" /* 1957 */;
import closure_9 from "createGuildRecordFromRust" /* 1979 */;
import closure_10 from "_detectH265HardwareDecode" /* 1908 */;
import closure_11 from "reinjectEphemerals" /* 4781 */;
import closure_12 from "sortActivity" /* 4600 */;
import closure_13 from "mergeGuildAvatar" /* 1371 */;
import closure_14 from "updateVoiceState" /* 4579 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4465 */;
import ME from "ME" /* 1074 */;
import importDefaultResult from "isDiscordProxiedAssetUrl" /* 1365 */;
import importDefaultResult1 from "set" /* 4547 */;

require = arg1;
function recurseReplaceContentTree(type) {
  if ("customEmoji" === type.type) {
    type.type = "emoji";
  }
  if (tmp) {
    let combined = str2;
    if (!obj.test(type.src)) {
      const _location = location;
      const _location2 = location;
      let str3 = "/";
      if ("/" === str2.charAt(0)) {
        str3 = "";
      }
      const _HermesInternal = HermesInternal;
      combined = "" + protocol + "//" + host + str3 + str2;
    }
    type.src = combined;
    obj = /^http/;
  }
  if (Array.isArray(type.content)) {
    const content = type.content;
    type.content = content.map(recurseReplaceContentTree);
  }
  return type;
}
function validateOrigin(arg0) {
  let items = arg1;
  if (arg1 === undefined) {
    items = [];
  }
  return items.indexOf(arg0) > -1;
}
function transformInternalTextMessage(message) {
  obj = get_defaultRulesDefault;
  obj = { channelId: message.channel_id };
  const mapped = obj.parseToAST(message.content, true, obj).map(recurseReplaceContentTree);
  let tmp4;
  channel = channel.getChannel(message.channel_id);
  if (null != message.author) {
    tmp4 = new closure_7(message.author);
  }
  let userAuthor;
  if (null != message.author) {
    userAuthor = useNullableMessageAuthor.getUserAuthor(tmp4, channel);
    const obj3 = useNullableMessageAuthor;
  }
  obj = { id: message.id, blocked: message.blocked, bot: message.bot, content: message.content, content_parsed: null, nick: null, author_color: null, edited_timestamp: null, timestamp: null, tts: null, mentions: null, mention_everyone: null, mention_roles: null, embeds: null, attachments: null, author: null, pinned: null, type: null };
  let tmp10;
  if (mapped.length) {
    tmp10 = mapped;
  }
  obj[4] = tmp10;
  let nick;
  if (userAuthor != null) {
    nick = userAuthor.nick;
  }
  obj[5] = nick;
  let colorString;
  if (userAuthor != null) {
    colorString = userAuthor.colorString;
  }
  obj[6] = colorString;
  obj[7] = message.edited_timestamp || message.editedTimestamp;
  ({ timestamp: obj4[8], tts: obj4[9], mentions: obj4[10] } = message);
  obj[11] = message.mention_everyone || message.mentionEveryone;
  obj[12] = message.mention_roles || message.mentionRoles;
  ({ embeds: obj4[13], attachments: obj4[14] } = message);
  let tmp13;
  if (null != tmp4) {
    tmp13 = transformUserDefault(tmp4);
  }
  obj[15] = tmp13;
  ({ pinned: obj4[16], type: obj4[17] } = message);
  return obj;
}
function fetchApplicationRPC(arg0) {
  const HTTP = sendRequest.HTTP;
  const value = HTTP.get({ url: closure_19.APPLICATION_RPC(arg0), oldFormErrors: true, retries: 3, rejectWithError: true });
  return value.then((body) => body.body, () => {
    throw new callback(table[26])({ closeCode: constants.INVALID_CLIENTID }, "Invalid Client ID");
  });
}
function _validateSocketApplication() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    return (function*(arg0, arg1, arg2) {
      if (icon === 2) {
        icon = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          icon = 2;
          if (0 === name) {
            if (arg0 === 1) {
              icon = 3;
              throw arg1;
            } else if (arg0 === 2) {
              icon = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_5 = tmp4;
              let id = tmp2;
              let callback2;
              let rpc_origins;
              closure_5 = undefined;
              id = undefined;
              name = undefined;
              icon = undefined;
              let coverImage;
              let flags;
              let parentId;
              callback2 = closure_1_4.getApplication(callback);
              if (typeof dependencyMap === "string") {
                if (tmp67.transport === closure_1_16.POST_MESSAGE) {
                  const tmp21 = callback(9512)(tmp68);
                  if (null != tmp21) {
                    const items = [tmp21];
                  }
                  obj1 = { closeCode: null };
                  obj1[0] = closure_1_21.INVALID_ORIGIN;
                  const tmp52 = new callback(9554)(obj1, "Invalid Origin");
                  throw tmp52;
                } else {
                  name = 1;
                  icon = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = closure_1_30(tmp68);
                  return obj2;
                }
              }
              if (null == callback2) {
                rpc_origins = closure_5;
                callback2 = closure_5.createFromServer;
                name = 2;
                icon = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = callback4(callback);
                return obj3;
              } else {
                closure_5 = callback2;
                id = closure_5.id;
                name = closure_5.name;
                icon = closure_5.icon;
                coverImage = closure_5.coverImage;
                flags = closure_5.flags;
                parentId = closure_5.parentId;
                const obj4 = { id: null, parentId: null, name: null, icon: null, coverImage: null, flags: null };
                obj4[0] = id;
                obj4[1] = parentId;
                obj4[2] = name;
                obj4[3] = icon;
                obj4[4] = coverImage;
                obj4[5] = flags;
                closure_0.application = obj4;
                icon = 3;
              }
              tmp67 = closure_0;
              const tmp69 = dependencyMap;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              icon = 3;
              throw arg1;
            } else if (arg0 === 2) {
              icon = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              rpc_origins = arg1;
              callback2 = closure_5.createFromServer(rpc_origins);
              if (!callback3(dependencyMap, rpc_origins.rpc_origins)) {
                const obj6 = { closeCode: null };
                obj6[0] = constants.INVALID_ORIGIN;
                const tmp16 = new callback(9554)(obj6, "Invalid Origin");
                throw tmp16;
              }
            }
          } else if (arg0 === 1) {
            icon = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            callback2 = callback2(arg1);
          }
          icon = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp54) {
          icon = tmp;
          throw tmp54;
        }
      }
    })();
  });
  closure_31 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _processSocketThrottlers() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c7 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              let obj2 = closure_1_26[closure_0];
              if (null == obj2) {
                let num5 = 60;
                if (tmp36) {
                  num5 = 2;
                }
                const tmp24 = new callback(9561)(num5, closure_1_25);
                tmp38[tmp35] = tmp24;
                obj2 = tmp24;
              }
              c6 = 1;
              c4 = 2;
              c7 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj2.process(dependencyMap);
              return obj1;
            }
          } else if (1 === tmp7) {
            c6 = 0;
            obj2 = { closeCode: null };
            obj2[0] = constants.CLOSE_ABNORMAL;
            const tmp16 = new callback(9554)(obj2, "Socket closed during throttle");
            throw tmp16;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c6 = 0;
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp26) {
          closure_5 = tmp26;
          if (tmp4 === c6) {
            c7 = tmp2;
            throw tmp26;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  });
  closure_32 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ RPC_LOCAL_SCOPE: closure_15, TransportTypes: closure_16 } = RPC_SCOPE_CONFIG);
({ ActivityActionTypes: closure_17, ChannelTypes: closure_18, Endpoints: closure_19, MAX_MESSAGES_PER_CHANNEL: closure_20, RPCCloseCodes: closure_21, RPCErrors: closure_22, RTCConnectionStates: closure_23 } = ME);
const toURLSafeResult = importDefaultResult.toURLSafe(window.GLOBAL_ENV.API_ENDPOINT);
let str;
if (toURLSafeResult != null) {
  str = toURLSafeResult.host;
}
if (str == null) {
  str = "localhost";
}
let str2 = str.split(":")[0];
let tmp5 = str2;
if (str2.includes(".")) {
  const parts = str2.split(".");
  if (!obj2.test(parts[parts.length - 1])) {
    const substr = require("module_4294967294");
    str2 = substr.join(".");
  }
  tmp5 = str2;
  obj2 = /^\d+$/;
}
function getRemoteIconURL(icon) {
  let combined = icon;
  if (!obj.test(icon)) {
    const _location = location;
    const _location2 = location;
    let str = "/";
    if ("/" === icon.charAt(0)) {
      str = "";
    }
    const _HermesInternal = HermesInternal;
    combined = "" + protocol + "//" + host + str + icon;
  }
  return combined;
}
function transformVoiceState(closure_2, id, userId) {
  userId = userId.userId;
  ({ mute, deaf, selfMute, selfDeaf, suppress } = userId);
  user = user.getUser(userId);
  if (null == user) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("Invalid user id: " + userId);
    throw error;
  } else {
    obj = { nick: null, mute: null, volume: null, pan: null, voice_state: null, user: null };
    obj[0] = getNicknameDefault.getName(closure_2, id, user);
    obj[1] = store.isLocalMute(user.id);
    obj[2] = store.getLocalVolume(user.id);
    obj[3] = store.getLocalPan(user.id);
    obj = { mute: null, deaf: null, self_mute: null, self_deaf: null, suppress: null };
    obj[0] = mute;
    obj[1] = deaf;
    obj[2] = selfMute;
    obj[3] = selfDeaf;
    obj[4] = suppress;
    obj[4] = obj;
    obj[5] = transformUserDefault(user);
    return obj;
  }
}
const escapeResult = importDefaultResult1.escape("https://");
const regExp = new RegExp("^" + escapeResult + "(?:[a-z]+\\.)?(" + importDefaultResult1.escape(tmp5) + "|discordapp.com|discord.com)$");
const MINUTE = setDefault.Millis.MINUTE;
let obj = {};
const importDefaultResult2 = importDefaultResult1;
const result = require("set").fileFinishedImporting("modules/rpc/RPCHelpers.tsx");

export const VALIDATE_SOCKET_CALLS_PER_PERIOD_LOW = 2;
export const VALIDATE_SOCKET_CALLS_PER_PERIOD_HIGH = 60;
export const VALIDATE_SOCKET_PERIOD_MS = MINUTE;
export const VALIDATE_SOCKET_THROTTLERS = obj;
export { getRemoteIconURL };
export const containsSameValues = function containsSameValues(arg0, arg1) {
  obj = applyDefault;
  return obj.isEqual(arg0, applyDefault.pick(arg1, Object.keys(arg0)));
};
export { validateOrigin };
export const transformChannel = function transformChannel(channel, arg1) {
  closure_0 = channel;
  closure_1 = arg1;
  const items = [];
  const guildId = channel.getGuildId();
  const items1 = [constants3.GUILD_CATEGORY, ...GUILD_VOCAL_CHANNEL_TYPES];
  if (!items1.includes(channel.type)) {
    const promise = new Promise((arg0) => {
      const nSFW = arg0;
      closure_1_11.whenReady(nSFW.id, () => callback());
      obj = callback(table[18]);
      obj = { channelId: nSFW.id, limit: closure_1_20 };
      const messages = obj.fetchMessages(obj);
    });
    items.push(promise);
  }
  return Promise.all(items).then(() => {
    if (!nSFW.isNSFW()) {
      if (closure_1) {
        const messages = closure_1_11.getMessages(tmp.id);
        const mapped = messages.toArray().map(closure_1_29);
        const toArrayResult = messages.toArray();
      }
      const _Object = Object;
      const values = Object.values(closure_1_14.getVoiceStatesForChannel(tmp.id));
      obj = { id: null, name: null, type: null, topic: null, bitrate: null, user_limit: null, guild_id: null, position: null, messages: null, voice_states: null };
      ({ id: obj2[0], name: obj2[1], type: obj2[2], topic: obj2[3], bitrate: obj2[4], userLimit: obj2[5] } = tmp);
      obj[6] = closure_2;
      obj[7] = tmp.position;
      obj[8] = [];
      obj[9] = values.map((userId) => {
        userId = userId.userId;
        ({ mute, deaf, selfMute, selfDeaf, suppress } = userId);
        const user = closure_1_13.getUser(userId);
        if (null == user) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          error = new Error("Invalid user id: " + userId);
          throw error;
        } else {
          obj = { nick: null, mute: null, volume: null, pan: null, voice_state: null, user: null };
          obj[0] = closure_1_1(closure_1_2[22]).getName(tmp, id.id, user);
          obj[1] = closure_1_10.isLocalMute(user.id);
          obj[2] = closure_1_10.getLocalVolume(user.id);
          obj[3] = closure_1_10.getLocalPan(user.id);
          obj = { mute: null, deaf: null, self_mute: null, self_deaf: null, suppress: null };
          obj[0] = mute;
          obj[1] = deaf;
          obj[2] = selfMute;
          obj[3] = selfDeaf;
          obj[4] = suppress;
          obj[4] = obj;
          obj[5] = closure_1_1(closure_1_2[21])(user);
          return obj;
        }
        tmp = closure_2;
      });
      return obj;
    } else {
      const currentUser = closure_1_13.getCurrentUser();
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
    }
  });
};
export { transformInternalTextMessage };
export { transformVoiceState };
export const transformBaseRelationship = function transformBaseRelationship(relationshipType, user) {
  obj = { type: relationshipType, user: transformUserDefault(user), presence: null };
  obj = { status: store2.getStatus(user.id, null), activity: null };
  obj[2] = obj;
  return obj;
};
export const transformApplicationRelationship = function transformApplicationRelationship(closure_0, id) {
  let tmp = closure_0;
  if (null != id) {
    obj = {};
    const merged = Object.assign(closure_0);
    obj = {};
    const merged1 = Object.assign(closure_0.presence);
    let applicationActivity = store2.getApplicationActivity(closure_0.user.id, id);
    if (applicationActivity == null) {
      applicationActivity = null;
    }
    obj.activity = applicationActivity;
    obj.presence = obj;
    tmp = obj;
  }
  return tmp;
};
export const isMatchingOrigin = function isMatchingOrigin(str) {
  if (null == str) {
    return false;
  } else {
    const _window2 = window;
    if (str === origin) {
      return true;
    } else {
      try {
        const hostname = UrlDefault.parse(str).hostname;
        const _window = window;
        let tmp4 = window.location.hostname === hostname;
        if (tmp4) {
          tmp4 = "localhost" === hostname;
        }
        if (!tmp4) {
          let tmp6 = null == str.match("staging");
          if (tmp6) {
            const isMatch = regExp.test(str);
            let tmp8 = !isMatch;
            if (isMatch) {
              tmp8 = !obj2.test(origin);
            }
            tmp6 = !tmp8;
            obj2 = regExp;
          }
          tmp4 = tmp6;
        }
        return tmp4;
      } catch (err) {
        return false;
      }
    }
  }
};
export const hasMessageReadPermission = function hasMessageReadPermission(channel, id, scopes) {
  guild = guild.getGuild(channel.getGuildId());
  if (null != guild) {
    let application_id = guild.application_id;
  } else {
    application_id = channel.getApplicationId();
  }
  let tmp2 = application_id === id;
  if (!tmp2) {
    tmp2 = scopes.indexOf(set.OAuth2Scopes.MESSAGES_READ) > -1;
  }
  return tmp2;
};
export const getVoiceConnectionState = function getVoiceConnectionState(state) {
  if (constants5.RTC_CONNECTED !== state) {
    if (tmp.RTC_CONNECTING !== state) {
      if (tmp.RTC_DISCONNECTED !== state) {
        return state;
      }
    }
  }
  return state.replace(/^RTC_/, "VOICE_");
};
export const validateActivityInvite = function validateActivityInvite(arg0, id, join) {
  let tmp = arg0 === constants2.JOIN;
  if (tmp) {
    let tmp4 = null != id && null != id.id;
    if (tmp4) {
      tmp4 = null != join.join;
    }
    tmp = tmp4;
  }
  return tmp;
};
export const validateSocketApplication = function validateSocketApplication(closure_0, closure_2, closure_1) {
  const self = this;
  const apply = _validateSocketApplication.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const processSocketThrottlers = function processSocketThrottlers(arg0, arg1, signal) {
  const self = this;
  const apply = _processSocketThrottlers.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const validateOriginAndUpdateSocket = function validateOriginAndUpdateSocket(closure_0, closure_1) {
  if (null == closure_1) {
    const items = [closure_15];
    closure_0.authorization.scopes = items;
  }
};
export const getDeprecatedVoiceSettingsWithShortcut = function getDeprecatedVoiceSettingsWithShortcut(arg0) {
  const settings = store.getSettings();
  obj = { input: null, output: null, mode: null, automatic_gain_control: null, echo_cancellation: null, noise_suppression: null, qos: null, silence_warning: null, deaf: null, mute: null };
  obj = { available_devices: null, device_id: null, volume: null };
  let values = Object.values(store.getInputDevices());
  const sorted = values.sort((index, index2) => index.index - index2.index);
  obj[0] = sorted.map((id) => ({ id: id.id, name: id.name }));
  ({ inputDeviceId: obj2[1], inputVolume: obj2[2] } = settings);
  obj[0] = obj;
  obj = { available_devices: null, device_id: null, volume: null };
  values = Object.values(store.getOutputDevices());
  const sorted1 = values.sort((index, index2) => index.index - index2.index);
  obj[0] = sorted1.map((id) => ({ id: id.id, name: id.name }));
  ({ outputDeviceId: obj4[1], outputVolume: obj4[2] } = settings);
  obj[1] = obj;
  obj[2] = { type: settings.mode, auto_threshold: settings.modeOptions.autoThreshold, threshold: settings.modeOptions.threshold, shortcut: arg0(settings), delay: settings.modeOptions.delay };
  ({ automaticGainControl: obj[3], echoCancellation: obj[4], noiseSuppression: obj[5], qos: obj[6], silenceWarning: obj[7], deaf: obj[8], mute: obj[9] } = settings);
  return obj;
};
export const getVoiceSettingsWithShortcut = function getVoiceSettingsWithShortcut(arg0, arg1) {
  const settings = store.getSettings(arg0);
  obj = { input_mode: null, local_mutes: null, local_volumes: null, self_mute: null, self_deaf: null };
  obj = { type: settings.mode, shortcut: arg1(settings) };
  obj[0] = obj;
  obj[1] = Object.keys(settings.localMutes);
  ({ localVolumes: obj[2], mute: obj[3], deaf: obj[4] } = settings);
  return obj;
};
export const validatePostMessageTransport = function validatePostMessageTransport(transport) {
  if (transport !== constants.POST_MESSAGE) {
    obj = { errorCode: null };
    obj[0] = constants4.INVALID_COMMAND;
    const _HermesInternal = HermesInternal;
    let tmp3 = prototypeDefault;
    tmp3 = new tmp3(obj, "command not available from \"" + transport + " transport");
    throw tmp3;
  }
};
export const validateApplication = function validateApplication(application) {
  if (null == application.id) {
    obj = { errorCode: null };
    obj[0] = constants4.INVALID_COMMAND;
    const tmp7 = new prototypeDefault(obj, "Invalid application");
    throw tmp7;
  } else {
    return application.id;
  }
};