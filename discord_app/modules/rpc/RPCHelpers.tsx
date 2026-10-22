// discord_app/modules/rpc/RPCHelpers.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import DurationsDefault from "../../utils/Durations.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import UrlDefault from "../../../_runtime/01389_Url.js";
import getURLForApplicationDefault from "../activities/getURLForApplication.tsx";
import NicknameUtilsDefault from "../../utils/NicknameUtils.tsx";
import MessageActionCreatorsDefault from "../../actions/MessageActionCreators.tsx";
import OAuth2Scopes from "../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import transformUserDefault from "helpers/transformUser.tsx";
import RPCErrorDefault from "RPCError.tsx";
import transformMessage from "helpers/transformMessage.tsx";
import LeakyBucketDefault from "../../../discord_common/js/packages/leaky-bucket/LeakyBucket.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import ApplicationRecord from "../../records/ApplicationRecord.tsx";
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
function validateOrigin(arg0) {
  let items = arg1;
  if (arg1 === undefined) {
    items = [];
  }
  return items.indexOf(arg0) > -1;
}
function fetchApplicationRPC(arg0) {
  const HTTP = HTTPUtils.HTTP;
  value = HTTP.get({ url: constants.APPLICATION_RPC(arg0), oldFormErrors: true, retries: 3, rejectWithError: true });
  return value.then(
    (body) => body.body,
    () => {
      throw new RPCErrorDefault({ closeCode: constants.INVALID_CLIENTID }, "Invalid Client ID");
    },
  );
}
let closure_27 = async function _validateSocketApplication(arg0, arg1, arg2) {
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
            closure_5 = tmp4;
            closure_6 = tmp2;
            closure_134_0 = transport;
            closure_134_1 = closure_1;
            closure_134_2 = closure_2;
            let application2;
            closure_134_4 = undefined;
            closure_134_5 = undefined;
            closure_134_6 = undefined;
            let id;
            let name;
            let icon;
            let coverImage;
            let flags;
            let parentId;
            let bot;
            let embeddedSurfaces;
            application2 = application.getApplication(closure_1);
            if (typeof closure_2 === "string") {
              if (transport.transport === constants.POST_MESSAGE) {
                const tmp21 = getURLForApplicationDefault(closure_1);
                if (null != tmp21) {
                  const items = [tmp21];
                }
                const obj4 = { closeCode: constants2.INVALID_ORIGIN };
                const tmp67 = new RPCErrorDefault(obj4, "Invalid Origin");
                throw tmp67;
              } else {
                c7 = 1;
                c8 = 1;
                const obj5 = { value: fetchApplicationRPC(closure_1), done: false };
                return obj5;
              }
            }
            let tmp27 = closure_134_0.transport === closure_133_14.POST_MESSAGE;
            if (tmp27) {
              tmp27 = !closure_133_4.isHydrated(closure_134_1);
            }
            closure_134_5 = tmp27;
            let tmp35 = null == application2;
            if (!tmp35) {
              tmp35 = closure_134_5;
            }
            if (tmp35) {
              closure_4 = closure_133_5;
              createFromServer = closure_133_5.createFromServer;
              c7 = 2;
              c8 = 1;
              const obj6 = { value: closure_133_26(closure_134_1), done: false };
              return obj6;
            } else {
              closure_134_6 = application2;
              id = closure_134_6.id;
              name = closure_134_6.name;
              icon = closure_134_6.icon;
              coverImage = closure_134_6.coverImage;
              flags = closure_134_6.flags;
              parentId = closure_134_6.parentId;
              bot = closure_134_6.bot;
              embeddedSurfaces = closure_134_6.embeddedSurfaces;
              const obj7 = { id, parentId, name, icon, coverImage, flags, bot, embeddedSurfaces };
              closure_134_0.application = obj7;
              c8 = 3;
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_134_4 = value;
            application2 = closure_133_5.createFromServer(closure_134_4);
            if (!closure_133_25(closure_134_2, closure_134_4.rpc_origins)) {
              const obj9 = { closeCode: closure_133_19.INVALID_ORIGIN };
              const tmp16 = new closure_133_1(closure_133_2[23])(obj9, "Invalid Origin");
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
        const obj = { value, done: true };
        return obj;
      } catch (tmp69) {
        c8 = tmp;
        throw tmp69;
      }
    }
  })();
};
let closure_28 = async function _processSocketThrottlers(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
          closure_3 = tmp3;
          let obj3 = VALIDATE_SOCKET_THROTTLERS[closure_0];
          if (null == obj3) {
            let num5 = 60;
            if (tmp35) {
              num5 = 2;
            }
            const tmp24 = new LeakyBucketDefault(num5, MINUTE);
            tmp37[tmp34] = tmp24;
            obj3 = tmp24;
          }
          c6 = 1;
          c4 = 2;
          c7 = 1;
          const obj5 = { value: obj3.process(closure_2), done: false };
          return obj5;
        }
      } else if (1 === tmp7) {
        c6 = 0;
        const obj6 = { closeCode: closure_131_19.CLOSE_ABNORMAL };
        const tmp16 = new closure_131_1(closure_131_2[23])(obj6, "Socket closed during throttle");
        throw tmp16;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c7 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c6 = 0;
        c7 = 3;
        return { value: "IconComponent", done: null };
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
const GUILD_VOCAL_CHANNEL_TYPES = fn(4825).GUILD_VOCAL_CHANNEL_TYPES;
let Constants = fn(6364);
({ RPC_LOCAL_SCOPE: map1, TransportTypes: closure_14 } = Constants);
Constants = fn(1087);
({
  ActivityActionTypes: closure_15,
  ChannelTypes: closure_16,
  Endpoints: closure_17,
  MAX_MESSAGES_PER_CHANNEL: closure_18,
  RPCCloseCodes: closure_19,
  RPCErrors: closure_20,
  RTCConnectionStates: closure_21,
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
function transformBigFlag(permissions) {
  let str = permissions;
  if (typeof permissions !== "bigint") {
    str = permissions.toString();
  }
  return str;
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
    const obj = {
      nick: NicknameUtilsDefault.getName(arg0, id, user),
      mute: MediaEngineStore.isLocalMute(user.id),
      volume: MediaEngineStore.getLocalVolume(user.id),
      pan: MediaEngineStore.getLocalPan(user.id),
      voice_state: null,
      user: null,
    };
    const obj3 = { mute, deaf, self_mute: selfMute, self_deaf: selfDeaf, suppress };
    obj.voice_state = obj3;
    obj.user = transformUserDefault(user);
    return obj;
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
export const containsSameValues = function containsSameValues(arg0, arg1) {
  const obj = _modDef12;
  return obj.isEqual(arg0, _modDef12.pick(arg1, Object.keys(arg0)));
};
export { validateOrigin };
export { transformBigFlag };
export const transformRole = function transformRole(id) {
  const obj = {
    id: id.id,
    name: id.name,
    color: id.color,
    colors: null,
    hoist: null,
    position: null,
    permissions: null,
    managed: null,
    mentionable: null,
    icon: null,
    unicode_emoji: null,
    tags: null,
    flags: null,
  };
  let colors = id.colors;
  if (colors == null) {
    const obj2 = { primary_color: id.color, secondary_color: null, tertiary_color: null };
    colors = obj2;
  }
  obj.colors = colors;
  ({ hoist: obj.hoist, position: obj.position, permissions } = id);
  let str = permissions;
  if (typeof permissions !== "bigint") {
    str = permissions.toString();
  }
  obj.permissions = str;
  ({
    managed: obj.managed,
    mentionable: obj.mentionable,
    icon: obj.icon,
    unicodeEmoji: obj.unicode_emoji,
    tags: obj.tags,
    flags: obj.flags,
  } = id);
  return obj;
};
export const transformChannel = function transformChannel(channel, result) {
  let nSFW = channel;
  closure_1 = result;
  const items = [];
  const guild_id = channel.getGuildId();
  const items1 = [constants3.GUILD_CATEGORY, ...GUILD_VOCAL_CHANNEL_TYPES];
  if (!items1.includes(channel.type)) {
    const promise = new Promise((arg0) => {
      nSFW = arg0;
      MessageStore.whenReady(nSFW.id, () => closure_0());
      const messages = MessageActionCreatorsDefault.fetchMessages({ channelId: nSFW.id, limit });
    });
    items.push(promise);
  }
  return Promise.all(items).then(() => {
    if (!nSFW.isNSFW()) {
      if (closure_1) {
        const messages = MessageStore.getMessages(nSFW.id);
        const mapped = messages.toArray().map(transformMessage.transformMessageRecord);
        const toArrayResult = messages.toArray();
      }
      const _Object = Object;
      const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(nSFW.id));
      let obj = {
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
          const obj = {
            nick: closure_1(5976).getName(dependencyMap, id.id, user),
            mute: MediaEngineStore.isLocalMute(user.id),
            volume: MediaEngineStore.getLocalVolume(user.id),
            pan: MediaEngineStore.getLocalPan(user.id),
            voice_state: null,
            user: null,
          };
          const obj3 = { mute, deaf, self_mute: selfMute, self_deaf: selfDeaf, suppress };
          obj.voice_state = obj3;
          obj.user = closure_1(9231)(user);
          return obj;
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
export { transformVoiceState };
export const transformBaseRelationship = function transformBaseRelationship(relationshipType, user) {
  const obj = {
    type: relationshipType,
    user: transformUserDefault(user),
    presence: { status: PresenceStore.getStatus(user.id, null), activity: null },
  };
  return obj;
};
export const transformApplicationRelationship = function transformApplicationRelationship(presence, id) {
  let tmp = presence;
  if (null != id) {
    const obj = {};
    const merged = Object.assign(presence);
    const obj2 = {};
    const merged1 = Object.assign(presence.presence);
    let applicationActivity = PresenceStore.getApplicationActivity(presence.user.id, id);
    if (applicationActivity == null) {
      applicationActivity = null;
    }
    obj2.activity = applicationActivity;
    obj.presence = obj2;
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
  guild = GuildStore.getGuild(channel.getGuildId());
  if (null != guild) {
    let application_id = guild.application_id;
  } else {
    application_id = channel.getApplicationId();
  }
  let hasItem = application_id === id;
  if (!hasItem) {
    hasItem = scopes.has(OAuth2Scopes.OAuth2Scopes.MESSAGES_READ);
  }
  return hasItem;
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
  const apply = closure_27.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const processSocketThrottlers = function processSocketThrottlers() {
  const self = this;
  const apply = closure_28.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const validateOriginAndUpdateSocket = function validateOriginAndUpdateSocket(authorization, arg1) {
  if (null == arg1) {
    const _Set = Set;
    const items = [map1];
    const set = new Set(items);
    authorization.authorization.scopes = set;
  }
};
export const getDeprecatedVoiceSettingsWithShortcut = function getDeprecatedVoiceSettingsWithShortcut(fn) {
  const settings = MediaEngineStore.getSettings();
  const obj = {
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
  const obj3 = { available_devices: null, device_id: null, volume: null };
  const values = Object.values(MediaEngineStore.getInputDevices());
  const sorted = values.sort((index, index2) => index.index - index2.index);
  obj3.available_devices = sorted.map((id) => ({ id: id.id, name: id.name }));
  ({ inputDeviceId: obj2.device_id, inputVolume: obj2.volume } = settings);
  obj.input = obj3;
  const obj5 = { available_devices: null, device_id: null, volume: null };
  const values2 = Object.values(MediaEngineStore.getOutputDevices());
  const sorted1 = values2.sort((index, index2) => index.index - index2.index);
  obj5.available_devices = sorted1.map((id) => ({ id: id.id, name: id.name }));
  ({ outputDeviceId: obj4.device_id, outputVolume: obj4.volume } = settings);
  obj.output = obj5;
  obj.mode = {
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
  return obj;
};
export const getVoiceSettingsWithShortcut = function getVoiceSettingsWithShortcut(arg0, fn) {
  const settings = MediaEngineStore.getSettings(arg0);
  const obj = {
    input_mode: { type: settings.mode, shortcut: fn(settings) },
    local_mutes: Object.keys(settings.localMutes),
    local_volumes: null,
    self_mute: null,
    self_deaf: null,
  };
  ({ localVolumes: obj.local_volumes, mute: obj.self_mute, deaf: obj.self_deaf } = settings);
  return obj;
};
export const validatePostMessageTransport = function validatePostMessageTransport(transport) {
  if (transport !== constants.POST_MESSAGE) {
    const obj = { errorCode: constants4.INVALID_COMMAND };
    const _HermesInternal = HermesInternal;
    const tmp32 = new RPCErrorDefault(obj, 'command not available from "' + transport + " transport");
    throw tmp32;
  }
};
export const validateApplication = function validateApplication(application) {
  if (null == application.id) {
    const obj = { errorCode: constants4.INVALID_COMMAND };
    const tmp7 = new RPCErrorDefault(obj, "Invalid application");
    throw tmp7;
  } else {
    return application.id;
  }
};
