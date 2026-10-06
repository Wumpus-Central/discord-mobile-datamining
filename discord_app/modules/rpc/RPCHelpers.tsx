// discord_app/modules/rpc/RPCHelpers.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import DurationsDefault from "../../utils/Durations.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import urlParseDefault from "../../../_runtime/01373_urlParse.js";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import MarkupUtilsDefault from "../markup/MarkupUtils.tsx";
import NicknameUtilsDefault from "../../utils/NicknameUtils.tsx";
import useMessageAuthor from "../messages/useMessageAuthor.tsx";
import MessageActionCreatorsDefault from "../../actions/MessageActionCreators.tsx";
import OAuth2Scopes from "../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import getURLForApplicationDefault from "../activities/getURLForApplication.tsx";
import RPCErrorDefault from "RPCError.tsx";
import transformUserDefault from "helpers/transformUser.tsx";
import LeakyBucketDefault from "../../../discord_common/js/packages/leaky-bucket/LeakyBucket.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import ApplicationRecord from "../../records/ApplicationRecord.tsx";
import UserRecord from "../../records/UserRecord.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import PresenceStore from "../../stores/PresenceStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import Constants_mod from "Constants.tsx";
import Constants_mod2 from "../../Constants.tsx";
import URLUtils from "../../utils/URLUtils.tsx";
import RegexUtils_mod from "../../utils/RegexUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c4, closure_6, createFromServer, rpc_origins;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
function recurseReplaceContentTree(type) {
  if ("customEmoji" === type.type) {
    type.type = "emoji";
  }
  const tmp = "emoji" === type.type && type.src;
  if (tmp) {
    let combined = str2;
    obj = /^http/;
    if (!obj.test(type.src)) {
      const _location = location;
      const _location2 = location;
      let str3 = "/";
      if ("/" === type.src.charAt(0)) {
        str3 = "";
      }
      const _HermesInternal = HermesInternal;
      combined = "" + protocol + "//" + host + str3 + str2;
    }
    type.src = combined;
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
  let colorString;
  let nick;
  let tmp11;
  let tmp8;
  obj = MarkupUtilsDefault;
  const obj2 = { channelId: message.channel_id };
  const parseToASTResult = obj.parseToAST(message.content, true, obj2);
  const mapped = parseToASTResult.map(recurseReplaceContentTree);
  let tmp4;
  const channel = ChannelStore.getChannel(message.channel_id);
  if (null != message.author) {
    const self = this;
    const self2 = this;
    tmp4 = new UserRecord(message.author);
  }
  let userAuthor;
  if (null != message.author) {
    const obj3 = useMessageAuthor;
    userAuthor = obj3.getUserAuthor(tmp4, channel);
  }
  const obj6 = {
    id: message.id,
    blocked: message.blocked,
    bot: message.bot,
    content: message.content,
    content_parsed: tmp8,
    nick,
    author_color: colorString,
    edited_timestamp: message.edited_timestamp || message.editedTimestamp,
    timestamp: null,
    tts: null,
    mentions: null,
    mention_everyone: message.mention_everyone || message.mentionEveryone,
    mention_roles: message.mention_roles || message.mentionRoles,
    embeds: null,
    attachments: null,
    author: tmp11,
    pinned: null,
    type: null,
  };
  tmp8 = undefined;
  if (mapped.length) {
    tmp8 = mapped;
  }
  nick = undefined;
  if (userAuthor != null) {
    nick = userAuthor.nick;
  }
  colorString = undefined;
  if (userAuthor != null) {
    colorString = userAuthor.colorString;
  }
  ({ timestamp: obj4.timestamp, tts: obj4.tts, mentions: obj4.mentions } = message);
  ({ embeds: obj4.embeds, attachments: obj4.attachments } = message);
  tmp11 = undefined;
  if (null != tmp4) {
    tmp11 = transformUserDefault(tmp4);
  }
  ({ pinned: obj4.pinned, type: obj4.type } = message);
  return obj6;
}
function fetchApplicationRPC(arg0) {
  const HTTP = HTTPUtils.HTTP;
  obj = { url: closure_19.APPLICATION_RPC(arg0), oldFormErrors: true, retries: 3, rejectWithError: true };
  const value = HTTP.get(obj);
  return value.then(
    (body) => body.body,
    () => {
      obj = { closeCode: constants.INVALID_CLIENTID };
      const tmp = new RPCErrorDefault(obj, "Invalid Client ID");
      throw tmp;
    },
  );
}
let obj = function _validateSocketApplication() {
  let application;
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    const transport = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    return (async function (arg0, value, arg2) {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (c8 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let id;
          let name;
          let icon;
          let coverImage;
          let flags;
          let parentId;
          let embeddedSurfaces;
          let application2;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_6 = tmp;
              rpc_origins = undefined;
              user = undefined;
              id = undefined;
              name = undefined;
              icon = undefined;
              coverImage = undefined;
              flags = undefined;
              parentId = undefined;
              embeddedSurfaces = undefined;
              application2 = application.getApplication(closure_1);
              if (typeof closure_2 === "string") {
                if (transport.transport === constants.POST_MESSAGE) {
                  const tmp18 = getURLForApplicationDefault(closure_1);
                  if (null != tmp18) {
                    const items = [tmp18];
                  }
                  const self3 = this;
                  const self4 = this;
                  const obj4 = { closeCode: constants2.INVALID_ORIGIN };
                  const tmp49 = new RPCErrorDefault(obj4, "Invalid Origin");
                  throw tmp49;
                } else {
                  c7 = 1;
                  c8 = 1;
                  const obj5 = { value: fetchApplicationRPC(closure_1), done: false };
                  return obj5;
                }
              }
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                return { value, done: true };
              } else {
                rpc_origins = value;
                application2 = closure_133_5.createFromServer(rpc_origins);
                if (!closure_133_28(closure_2, rpc_origins.rpc_origins)) {
                  const self = this;
                  const self2 = this;
                  const obj7 = { closeCode: closure_133_21.INVALID_ORIGIN };
                  const tmp13 = new closure_133_1(closure_133_2[26])(obj7, "Invalid Origin");
                  throw tmp13;
                }
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              application2 = createFromServer(value);
            }
            user = application2;
            id = user.id;
            name = user.name;
            icon = user.icon;
            coverImage = user.coverImage;
            flags = user.flags;
            parentId = user.parentId;
            embeddedSurfaces = user.embeddedSurfaces;
            const obj8 = { id, parentId, name, icon, coverImage, flags, embeddedSurfaces };
            transport.application = obj8;
            c8 = 3;
            return { value: "IconComponent", done: null };
          }
          if (null == application2) {
            rpc_origins = closure_133_5;
            createFromServer = closure_133_5.createFromServer;
            c7 = 2;
            c8 = 1;
            const obj9 = { value: closure_133_30(closure_1), done: false };
            return obj9;
          }
        } catch (tmp51) {
          c8 = 3;
          throw tmp51;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _processSocketThrottlers() {
  obj = _asyncToGenerator(async function (arg0, arg1, arg2) {
    let closure_1;
    let closure_0 = arg0;
    let closure_2 = arg2;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        c7 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            let obj3 = closure_2_26[closure_0];
            if (null == obj3) {
              let num5 = 60;
              if (tmp27) {
                num5 = 2;
              }
              const self3 = this;
              const self4 = this;
              const tmp17 = new LeakyBucketDefault(num5, MINUTE);
              tmp29[tmp26] = tmp17;
              obj3 = tmp17;
            }
            c6 = 1;
            c4 = 2;
            c7 = 1;
            const obj5 = { value: obj3.process(closure_2), done: false };
            return obj5;
          }
        } else if (1 === tmp4) {
          c6 = 0;
          const obj6 = { closeCode: closure_131_21.CLOSE_ABNORMAL };
          const self = this;
          const self2 = this;
          const tmp11 = new closure_131_1(closure_131_2[26])(obj6, "Socket closed during throttle");
          throw tmp11;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c6 = 0;
          c7 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp19) {
        let closure_5 = tmp19;
        if (0 === c6) {
          c7 = 3;
          throw tmp19;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const GUILD_VOCAL_CHANNEL_TYPES = ChannelRecord.GUILD_VOCAL_CHANNEL_TYPES;
let Constants = Constants_mod2;
({ RPC_LOCAL_SCOPE: closure_15, TransportTypes: closure_16 } = Constants);
Constants = Constants_mod2;
({
  ActivityActionTypes: closure_17,
  ChannelTypes: closure_18,
  Endpoints: closure_19,
  MAX_MESSAGES_PER_CHANNEL: closure_20,
  RPCCloseCodes: closure_21,
  RPCErrors: closure_22,
  RTCConnectionStates: closure_23,
} = Constants);
const toURLSafeResult = URLUtils.toURLSafe(window.GLOBAL_ENV.API_ENDPOINT);
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
  let obj2 = /^\d+$/;
  if (!obj2.test(parts[parts.length - 1])) {
    const substr = parts.slice(-2);
    str2 = substr.join(".");
  }
  tmp5 = str2;
}
function getRemoteIconURL(icon) {
  let combined = icon;
  obj = /^http/;
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
function transformVoiceState(arg0, id, userId) {
  let deaf;
  let mute;
  let obj2;
  let selfDeaf;
  let selfMute;
  let suppress;
  userId = userId.userId;
  ({ mute, deaf, selfMute, selfDeaf, suppress } = userId);
  const user = UserStore.getUser(userId);
  if (null == user) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Invalid user id: " + userId);
    throw error;
  } else {
    obj = {
      nick: obj2.getName(arg0, id, user),
      mute: MediaEngineStore.isLocalMute(user.id),
      volume: MediaEngineStore.getLocalVolume(user.id),
      pan: MediaEngineStore.getLocalPan(user.id),
      voice_state: obj3,
      user: transformUserDefault(user),
    };
    obj2 = NicknameUtilsDefault;
    return obj;
  }
}
let RegexUtils = RegexUtils_mod;
const escapeResult = RegexUtils.escape("https://");
RegexUtils = RegexUtils_mod;
const regExp = new RegExp(
  "^" + escapeResult + "(?:[a-z]+\\.)?(" + RegexUtils.escape(tmp5) + "|discordapp.com|discord.com)$",
);
const MINUTE = DurationsDefault.Millis.MINUTE;
obj = {};
const result = size.fileFinishedImporting("modules/rpc/RPCHelpers.tsx");

export const VALIDATE_SOCKET_CALLS_PER_PERIOD_LOW = 2;
export const VALIDATE_SOCKET_CALLS_PER_PERIOD_HIGH = 60;
export const VALIDATE_SOCKET_PERIOD_MS = MINUTE;
export const VALIDATE_SOCKET_THROTTLERS = obj;
export { getRemoteIconURL };
export const containsSameValues = function containsSameValues(arg0, arg1) {
  const isEqual = _modDef12.isEqual;
  _modDef12;
  obj = _modDef12;
  return isEqual(arg0, obj.pick(arg1, Object.keys(arg0)));
};
export { validateOrigin };
export const transformChannel = function transformChannel(channel, arg1) {
  let closure_1 = arg1;
  const items = [];
  const guild_id = channel.getGuildId();
  const items1 = [constants3.GUILD_CATEGORY, ...GUILD_VOCAL_CHANNEL_TYPES];
  if (!items1.includes(channel.type)) {
    let self = this;
    let self2 = this;
    const push = items.push;
    const promise = new Promise((arg0) => {
      channel = arg0;
      MessageStore.whenReady(channel.id, () => closure_0());
      obj = MessageActionCreatorsDefault;
      const obj2 = { channelId: channel.id, limit };
      const messages = obj.fetchMessages(obj2);
    });
    push(promise);
  }
  const allPromises = Promise.all(items);
  return allPromises.then(() => {
    if (!channel.isNSFW()) {
      if (closure_1) {
        const messages = MessageStore.getMessages(channel.id);
        const toArrayResult = messages.toArray();
        const mapped = toArrayResult.map(transformInternalTextMessage);
      }
      const _Object = Object;
      const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(channel.id));
      obj = {
        id: null,
        name: null,
        type: null,
        topic: null,
        bitrate: null,
        user_limit: null,
        guild_id,
        position: channel.position,
        messages: [],
        voice_states: values.map(function (userId) {
          let deaf;
          let mute;
          let obj2;
          let selfDeaf;
          let selfMute;
          let suppress;
          userId = userId.userId;
          id = id.id;
          ({ mute, deaf, selfMute, selfDeaf, suppress } = userId);
          user = user.getUser(userId);
          if (null == user) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const error = new Error("Invalid user id: " + userId);
            throw error;
          } else {
            obj = {
              nick: obj2.getName(closure_1_2, id, user),
              mute: MediaEngineStore.isLocalMute(user.id),
              volume: MediaEngineStore.getLocalVolume(user.id),
              pan: MediaEngineStore.getLocalPan(user.id),
              voice_state: obj3,
              user: closure_1(closure_2[21])(user),
            };
            obj2 = closure_1(closure_2[22]);
            return obj;
          }
        }),
      };
      ({
        id: obj2.id,
        name: obj2.name,
        type: obj2.type,
        topic: obj2.topic,
        bitrate: obj2.bitrate,
        userLimit: obj2.user_limit,
      } = channel);
      return obj;
    } else {
      const currentUser = UserStore.getCurrentUser();
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
  obj = {
    type: relationshipType,
    user: transformUserDefault(user),
    presence: { status: PresenceStore.getStatus(user.id, null), activity: null },
  };
  ({ status: PresenceStore.getStatus(user.id, null), activity: null });
  return obj;
};
export const transformApplicationRelationship = function transformApplicationRelationship(presence, id) {
  let applicationActivity;
  let obj2;
  let tmp = presence;
  if (null != id) {
    obj = { presence: obj2 };
    const merged = Object.assign(presence);
    obj2 = { activity: applicationActivity };
    const merged1 = Object.assign(presence.presence);
    applicationActivity = PresenceStore.getApplicationActivity(presence.user.id, id);
    if (applicationActivity == null) {
      applicationActivity = null;
    }
    tmp = obj;
  }
  return tmp;
};
export const isMatchingOrigin = function isMatchingOrigin(GUILD_TEMPLATE_HOST) {
  if (null == GUILD_TEMPLATE_HOST) {
    return false;
  } else {
    const _window2 = window;
    if (GUILD_TEMPLATE_HOST === origin) {
      return true;
    } else {
      try {
        obj = urlParseDefault;
        const hostname = obj.parse(GUILD_TEMPLATE_HOST).hostname;
        const _window = window;
        let tmp4 = window.location.hostname === hostname && "localhost" === hostname;
        if (!tmp4) {
          let tmp6 = null == GUILD_TEMPLATE_HOST.match("staging");
          if (tmp6) {
            const isMatch = regExp.test(GUILD_TEMPLATE_HOST);
            tmp6 = !(!isMatch || !regExp.test(origin));
            const tmp8 = !isMatch || !regExp.test(origin);
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
  let application_id;
  const guild = GuildStore.getGuild(channel.getGuildId());
  if (null != guild) {
    application_id = guild.application_id;
  } else {
    application_id = channel.getApplicationId();
  }
  const tmp2 = application_id === id || scopes.indexOf(OAuth2Scopes.OAuth2Scopes.MESSAGES_READ) > -1;
  return tmp2;
};
export const getVoiceConnectionState = function getVoiceConnectionState(state) {
  if (constants5.RTC_CONNECTED !== state) {
    if (constants5.RTC_CONNECTING !== state) {
      if (constants5.RTC_DISCONNECTED !== state) {
        return state;
      }
    }
  }
  return state.replace(/^RTC_/, "VOICE_");
};
export const validateActivityInvite = function validateActivityInvite(arg0, id, join) {
  let tmp = arg0 === constants2.JOIN;
  if (tmp) {
    tmp = null != id && null != id.id && null != join.join;
    const tmp4 = null != id && null != id.id && null != join.join;
  }
  return tmp;
};
export const validateSocketApplication = function validateSocketApplication() {
  return obj(...arguments);
};
export const processSocketThrottlers = function processSocketThrottlers() {
  return obj(...arguments);
};
export const validateOriginAndUpdateSocket = function validateOriginAndUpdateSocket(authorization, arg1) {
  if (null == arg1) {
    const items = [closure_15];
    authorization.authorization.scopes = items;
  }
};
export const getDeprecatedVoiceSettingsWithShortcut = function getDeprecatedVoiceSettingsWithShortcut(fn) {
  let obj3;
  let obj5;
  let sorted;
  let sorted1;
  let tmp2;
  const f139659 = (index, index2) => index.index - index2.index;
  const f139660 = (id) => ({ id: id.id, name: id.name });
  const settings = MediaEngineStore.getSettings();
  obj = {
    input: obj3,
    output: obj5,
    mode: {
      type: settings.mode,
      auto_threshold: settings.modeOptions.autoThreshold,
      threshold: settings.modeOptions.threshold,
      shortcut: tmp2,
      delay: settings.modeOptions.delay,
    },
    automatic_gain_control: null,
    echo_cancellation: null,
    noise_suppression: null,
    qos: null,
    silence_warning: null,
    deaf: null,
    mute: null,
  };
  obj3 = { available_devices: sorted.map(f139660), device_id: null, volume: null };
  tmp2 = fn(settings);
  const values = Object.values(MediaEngineStore.getInputDevices());
  sorted = values.sort(f139659);
  ({ inputDeviceId: obj2.device_id, inputVolume: obj2.volume } = settings);
  obj5 = { available_devices: sorted1.map(f139660), device_id: null, volume: null };
  const values2 = Object.values(MediaEngineStore.getOutputDevices());
  sorted1 = values2.sort(f139659);
  ({ outputDeviceId: obj4.device_id, outputVolume: obj4.volume } = settings);
  ({
    automaticGainControl: obj.automatic_gain_control,
    echoCancellation: obj.echo_cancellation,
    noiseSuppression: obj.noise_suppression,
    qos: obj.qos,
    silenceWarning: obj.silence_warning,
    deaf: obj.deaf,
    mute: obj.mute,
  } = settings);
  return obj;
};
export const getVoiceSettingsWithShortcut = function getVoiceSettingsWithShortcut(arg0, fn) {
  const settings = MediaEngineStore.getSettings(arg0);
  obj = {
    input_mode: { type: settings.mode, shortcut: fn(settings) },
    local_mutes: Object.keys(settings.localMutes),
    local_volumes: null,
    self_mute: null,
    self_deaf: null,
  };
  ({ type: settings.mode, shortcut: fn(settings) });
  ({ localVolumes: obj.local_volumes, mute: obj.self_mute, deaf: obj.self_deaf } = settings);
  return obj;
};
export const validatePostMessageTransport = function validatePostMessageTransport(transport) {
  if (transport !== constants.POST_MESSAGE) {
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    obj = { errorCode: constants4.INVALID_COMMAND };
    const tmp3 = RPCErrorDefault;
    const tmp32 = new tmp3(obj, 'command not available from "' + transport + " transport");
    throw tmp32;
  }
};
export const validateApplication = function validateApplication(application) {
  if (null == application.id) {
    const self = this;
    const self2 = this;
    obj = { errorCode: constants4.INVALID_COMMAND };
    const tmp5 = new RPCErrorDefault(obj, "Invalid application");
    throw tmp5;
  } else {
    return application.id;
  }
};
