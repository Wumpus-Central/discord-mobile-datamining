// discord_app/modules/rpc/RPCHelpers.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import DurationsDefault from "../../utils/Durations.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import UrlDefault from "../../../_runtime/01367_Url.js";
import MarkupUtilsDefault from "../markup/MarkupUtils.tsx";
import NicknameUtilsDefault from "../../utils/NicknameUtils.tsx";
import useMessageAuthor from "../messages/useMessageAuthor.tsx";
import MessageActionCreatorsDefault from "../../actions/MessageActionCreators.tsx";
import OAuth2Scopes from "../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import getURLForApplicationDefault from "../activities/getURLForApplication.tsx";
import RPCErrorDefault from "RPCError.tsx";
import transformUserDefault from "helpers/transformUser.tsx";
import LeakyBucketDefault from "../../../discord_common/js/packages/leaky-bucket/LeakyBucket.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
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
import URLUtils from "../../utils/URLUtils.tsx";
import "RegexUtils";
import RegexUtils from "../../utils/RegexUtils.tsx";

require = fn;
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
  obj = { channelId: message.channel_id };
  const mapped = obj.parseToAST(message.content, true, obj).map(recurseReplaceContentTree);
  let tmp4;
  const channel = ChannelStore.getChannel(message.channel_id);
  if (null != message.author) {
    tmp4 = new UserRecord(message.author);
  }
  let userAuthor;
  if (null != message.author) {
    userAuthor = useMessageAuthor.getUserAuthor(tmp4, channel);
  }
  obj = {
    id: message.id,
    blocked: message.blocked,
    bot: message.bot,
    content: message.content,
    content_parsed: null,
    nick: null,
    author_color: null,
    edited_timestamp: null,
    timestamp: null,
    tts: null,
    mentions: null,
    mention_everyone: null,
    mention_roles: null,
    embeds: null,
    attachments: null,
    author: null,
    pinned: null,
    type: null,
  };
  let tmp10;
  if (mapped.length) {
    tmp10 = mapped;
  }
  obj.content_parsed = tmp10;
  let nick;
  if (userAuthor != null) {
    nick = userAuthor.nick;
  }
  obj.nick = nick;
  let colorString;
  if (userAuthor != null) {
    colorString = userAuthor.colorString;
  }
  obj.author_color = colorString;
  obj.edited_timestamp = message.edited_timestamp || message.editedTimestamp;
  ({ timestamp: obj4.timestamp, tts: obj4.tts, mentions: obj4.mentions } = message);
  obj.mention_everyone = message.mention_everyone || message.mentionEveryone;
  obj.mention_roles = message.mention_roles || message.mentionRoles;
  ({ embeds: obj4.embeds, attachments: obj4.attachments } = message);
  let tmp13;
  if (null != tmp4) {
    tmp13 = transformUserDefault(tmp4);
  }
  obj.author = tmp13;
  ({ pinned: obj4.pinned, type: obj4.type } = message);
  return obj;
}
function fetchApplicationRPC(arg0) {
  const HTTP = HTTPUtils.HTTP;
  value = HTTP.get({ url: closure_1_19.APPLICATION_RPC(arg0), oldFormErrors: true, retries: 3, rejectWithError: true });
  return value.then(
    (body) => body.body,
    () => {
      throw new RPCErrorDefault({ closeCode: constants.INVALID_CLIENTID }, "Invalid Client ID");
    },
  );
}
let closure_31 = async function _validateSocketApplication(arg0, arg1, arg2) {
  let transport = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  c7 = 0;
  c8 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
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
            closure_5 = tmp4;
            closure_6 = tmp2;
            closure_134_0 = transport;
            closure_134_1 = closure_1;
            closure_134_2 = closure_2;
            let application2;
            closure_134_4 = undefined;
            closure_134_5 = undefined;
            let id;
            let name;
            let icon;
            let coverImage;
            let flags;
            let parentId;
            application2 = application.getApplication(closure_1);
            if (typeof closure_2 === "string") {
              if (transport.transport === constants.POST_MESSAGE) {
                const tmp21 = getURLForApplicationDefault(closure_1);
                if (null != tmp21) {
                  const items = [tmp21];
                }
                const obj1 = { closeCode: constants2.INVALID_ORIGIN };
                const tmp52 = new RPCErrorDefault(obj1, "Invalid Origin");
                throw tmp52;
              } else {
                c7 = 1;
                c8 = 1;
                const obj2 = { value: fetchApplicationRPC(closure_1), done: false };
                return obj2;
              }
            }
            if (null == application2) {
              closure_4 = closure_133_5;
              createFromServer = closure_133_5.createFromServer;
              c7 = 2;
              c8 = 1;
              const obj3 = { value: closure_133_30(closure_134_1), done: false };
              return obj3;
            } else {
              closure_134_5 = application2;
              id = closure_134_5.id;
              name = closure_134_5.name;
              icon = closure_134_5.icon;
              coverImage = closure_134_5.coverImage;
              flags = closure_134_5.flags;
              parentId = closure_134_5.parentId;
              const obj4 = { id, parentId, name, icon, coverImage, flags };
              closure_134_0.application = obj4;
              c8 = 3;
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_134_4 = value;
            application2 = closure_133_5.createFromServer(closure_134_4);
            if (!closure_133_28(closure_134_2, closure_134_4.rpc_origins)) {
              const obj6 = { closeCode: closure_133_21.INVALID_ORIGIN };
              const tmp16 = new closure_133_1(closure_133_2[26])(obj6, "Invalid Origin");
              throw tmp16;
            }
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 !== 2) {
          application2 = createFromServer(value);
        }
        c8 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp54) {
        c8 = tmp;
        throw tmp54;
      }
    }
  })();
};
let closure_32 = async function _processSocketThrottlers(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          let obj2 = dependencyMap[closure_0];
          if (null == obj2) {
            let num5 = 60;
            if (tmp35) {
              num5 = 2;
            }
            const tmp24 = new LeakyBucketDefault(num5, MINUTE);
            tmp37[tmp34] = tmp24;
            obj2 = tmp24;
          }
          c6 = 1;
          c4 = 2;
          c7 = 1;
          const obj1 = { value: obj2.process(closure_2), done: false };
          return obj1;
        }
      } else if (1 === tmp7) {
        c6 = 0;
        obj2 = { closeCode: closure_131_21.CLOSE_ABNORMAL };
        const tmp16 = new closure_131_1(closure_131_2[26])(obj2, "Socket closed during throttle");
        throw tmp16;
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
};
const GUILD_VOCAL_CHANNEL_TYPES = fn(1961).GUILD_VOCAL_CHANNEL_TYPES;
let Constants = fn(4465);
({ RPC_LOCAL_SCOPE: closure_15, TransportTypes: closure_16 } = Constants);
Constants = fn(1074);
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
  if (!obj2.test(parts[parts.length - 1])) {
    const substr = parts.slice(-2);
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
function transformVoiceState(arg0, id, userId) {
  userId = userId.userId;
  ({ mute, deaf, selfMute, selfDeaf, suppress } = userId);
  const user = UserStore.getUser(userId);
  if (null == user) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Invalid user id: " + userId);
    throw error;
  } else {
    let voice_state = {
      nick: NicknameUtilsDefault.getName(arg0, id, user),
      mute: MediaEngineStore.isLocalMute(user.id),
      volume: MediaEngineStore.getLocalVolume(user.id),
      pan: MediaEngineStore.getLocalPan(user.id),
      voice_state: null,
      user: null,
    };
    voice_state = { mute, deaf, self_mute: selfMute, self_deaf: selfDeaf, suppress };
    voice_state.voice_state = voice_state;
    voice_state.user = transformUserDefault(user);
    return voice_state;
  }
}
const regExp = new RegExp(
  "^" + RegexUtils.escape("https://") + "(?:[a-z]+\\.)?(" + RegexUtils.escape(tmp5) + "|discordapp.com|discord.com)$",
);
const MINUTE = DurationsDefault.Millis.MINUTE;
const VALIDATE_SOCKET_THROTTLERS = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/RPCHelpers.tsx");

export const VALIDATE_SOCKET_CALLS_PER_PERIOD_LOW = 2;
export const VALIDATE_SOCKET_CALLS_PER_PERIOD_HIGH = 60;
export const VALIDATE_SOCKET_PERIOD_MS = MINUTE;
export { VALIDATE_SOCKET_THROTTLERS };
export { getRemoteIconURL };
export const containsSameValues = function containsSameValues(arg0, arg1) {
  obj = _modDef12;
  return obj.isEqual(arg0, _modDef12.pick(arg1, Object.keys(arg0)));
};
export { validateOrigin };
export const transformChannel = function transformChannel(channel, arg1) {
  let nSFW = channel;
  closure_1 = arg1;
  const items = [];
  const guild_id = channel.getGuildId();
  const items1 = [constants3.GUILD_CATEGORY, ...GUILD_VOCAL_CHANNEL_TYPES];
  if (!items1.includes(channel.type)) {
    const promise = new Promise((arg0) => {
      nSFW = arg0;
      MessageStore.whenReady(nSFW.id, () => closure_0());
      obj = { channelId: nSFW.id, limit };
      const messages = obj.fetchMessages(obj);
    });
    items.push(promise);
  }
  return Promise.all(items).then(() => {
    if (!nSFW.isNSFW()) {
      if (closure_1) {
        const messages = MessageStore.getMessages(nSFW.id);
        const mapped = messages.toArray().map(transformInternalTextMessage);
        const toArrayResult = messages.toArray();
      }
      const _Object = Object;
      const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(nSFW.id));
      obj = {
        id: null,
        name: null,
        type: null,
        topic: null,
        bitrate: null,
        user_limit: null,
        guild_id: null,
        position: null,
        messages: null,
        voice_states: null,
      };
      ({
        id: obj2.id,
        name: obj2.name,
        type: obj2.type,
        topic: obj2.topic,
        bitrate: obj2.bitrate,
        userLimit: obj2.user_limit,
      } = nSFW);
      obj.guild_id = guild_id;
      obj.position = nSFW.position;
      obj.messages = [];
      obj.voice_states = values.map((userId) => {
        userId = userId.userId;
        ({ mute, deaf, selfMute, selfDeaf, suppress } = userId);
        user = user.getUser(userId);
        if (null == user) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Invalid user id: " + userId);
          throw error;
        } else {
          let voice_state = {
            nick: closure_1(4712).getName(dependencyMap, id.id, user),
            mute: MediaEngineStore.isLocalMute(user.id),
            volume: MediaEngineStore.getLocalVolume(user.id),
            pan: MediaEngineStore.getLocalPan(user.id),
            voice_state: null,
            user: null,
          };
          voice_state = { mute, deaf, self_mute: selfMute, self_deaf: selfDeaf, suppress };
          voice_state.voice_state = voice_state;
          voice_state.user = closure_1(9560)(user);
          return voice_state;
        }
      });
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
  let presence = { type: relationshipType, user: transformUserDefault(user), presence: null };
  presence = { status: PresenceStore.getStatus(user.id, null), activity: null };
  presence.presence = presence;
  return presence;
};
export const transformApplicationRelationship = function transformApplicationRelationship(presence, id) {
  let tmp = presence;
  if (null != id) {
    presence = {};
    const merged = Object.assign(presence);
    presence = {};
    const merged1 = Object.assign(presence.presence);
    let applicationActivity = PresenceStore.getApplicationActivity(presence.user.id, id);
    if (applicationActivity == null) {
      applicationActivity = null;
    }
    presence.activity = applicationActivity;
    presence.presence = presence;
    tmp = presence;
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
              tmp8 = !regExp.test(origin);
            }
            tmp6 = !tmp8;
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
  const guild = GuildStore.getGuild(channel.getGuildId());
  if (null != guild) {
    let application_id = guild.application_id;
  } else {
    application_id = channel.getApplicationId();
  }
  let tmp2 = application_id === id;
  if (!tmp2) {
    tmp2 = scopes.indexOf(OAuth2Scopes.OAuth2Scopes.MESSAGES_READ) > -1;
  }
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
    let tmp4 = null != id && null != id.id;
    if (tmp4) {
      tmp4 = null != join.join;
    }
    tmp = tmp4;
  }
  return tmp;
};
export const validateSocketApplication = function validateSocketApplication() {
  const self = this;
  const apply = closure_31.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const processSocketThrottlers = function processSocketThrottlers() {
  const self = this;
  const apply = closure_32.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const validateOriginAndUpdateSocket = function validateOriginAndUpdateSocket(authorization, arg1) {
  if (null == arg1) {
    const items = [__initData];
    authorization.authorization.scopes = items;
  }
};
export const getDeprecatedVoiceSettingsWithShortcut = function getDeprecatedVoiceSettingsWithShortcut(fn) {
  const settings = MediaEngineStore.getSettings();
  let output = {
    input: null,
    output: null,
    mode: null,
    automatic_gain_control: null,
    echo_cancellation: null,
    noise_suppression: null,
    qos: null,
    silence_warning: null,
    deaf: null,
    mute: null,
  };
  output = { available_devices: null, device_id: null, volume: null };
  let values = Object.values(MediaEngineStore.getInputDevices());
  const sorted = values.sort((index, index2) => index.index - index2.index);
  output.available_devices = sorted.map((id) => ({ id: id.id, name: id.name }));
  ({ inputDeviceId: obj2.device_id, inputVolume: obj2.volume } = settings);
  output.input = output;
  output = { available_devices: null, device_id: null, volume: null };
  values = Object.values(MediaEngineStore.getOutputDevices());
  const sorted1 = values.sort((index, index2) => index.index - index2.index);
  output.available_devices = sorted1.map((id) => ({ id: id.id, name: id.name }));
  ({ outputDeviceId: obj4.device_id, outputVolume: obj4.volume } = settings);
  output.output = output;
  output.mode = {
    type: settings.mode,
    auto_threshold: settings.modeOptions.autoThreshold,
    threshold: settings.modeOptions.threshold,
    shortcut: fn(settings),
    delay: settings.modeOptions.delay,
  };
  ({
    automaticGainControl: obj.automatic_gain_control,
    echoCancellation: obj.echo_cancellation,
    noiseSuppression: obj.noise_suppression,
    qos: obj.qos,
    silenceWarning: obj.silence_warning,
    deaf: obj.deaf,
    mute: obj.mute,
  } = settings);
  return output;
};
export const getVoiceSettingsWithShortcut = function getVoiceSettingsWithShortcut(arg0, fn) {
  const settings = MediaEngineStore.getSettings(arg0);
  let input_mode = { input_mode: null, local_mutes: null, local_volumes: null, self_mute: null, self_deaf: null };
  input_mode = { type: settings.mode, shortcut: fn(settings) };
  input_mode.input_mode = input_mode;
  input_mode.local_mutes = Object.keys(settings.localMutes);
  ({ localVolumes: obj.local_volumes, mute: obj.self_mute, deaf: obj.self_deaf } = settings);
  return input_mode;
};
export const validatePostMessageTransport = function validatePostMessageTransport(transport) {
  if (transport !== constants.POST_MESSAGE) {
    obj = { errorCode: constants4.INVALID_COMMAND };
    const _HermesInternal = HermesInternal;
    let tmp3 = RPCErrorDefault;
    tmp3 = new tmp3(obj, 'command not available from "' + transport + " transport");
    throw tmp3;
  }
};
export const validateApplication = function validateApplication(application) {
  if (null == application.id) {
    obj = { errorCode: constants4.INVALID_COMMAND };
    const tmp7 = new RPCErrorDefault(obj, "Invalid application");
    throw tmp7;
  } else {
    return application.id;
  }
};
