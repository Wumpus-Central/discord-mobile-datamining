// discord_common/js/packages/rpc-schema/definitions.tsx
import OAuth2Scopes from "../../shared/shared-constants/OAuth2Scopes.tsx";
import helpers from "helpers.tsx";
import contextMenuIcons from "contextMenuIcons.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function VoiceCapabilities(boolean) {
  const obj = {
    available: boolean.boolean().required(),
    connected: null,
    participant_updates: null,
    binary_speaking: null,
    spatial: null,
  };
  const booleanResult = boolean.boolean();
  obj.connected = boolean.boolean().required();
  const booleanResult1 = boolean.boolean();
  obj.participant_updates = boolean.boolean().required();
  const booleanResult2 = boolean.boolean();
  obj.binary_speaking = boolean.boolean().required();
  const obj2 = {
    available: null,
    source_positioning: null,
    source_gain: null,
    source_spatial_blend: null,
    listener_pose: null,
    room_size: null,
    reflections: null,
    max_sources: null,
    max_updates_per_second: null,
  };
  const booleanResult3 = boolean.boolean();
  obj2.available = boolean.boolean().required();
  const booleanResult4 = boolean.boolean();
  obj2.source_positioning = boolean.boolean().required();
  const booleanResult5 = boolean.boolean();
  obj2.source_gain = boolean.boolean().required();
  const booleanResult6 = boolean.boolean();
  obj2.source_spatial_blend = boolean.boolean().required();
  const booleanResult7 = boolean.boolean();
  obj2.listener_pose = boolean.boolean().required();
  const booleanResult8 = boolean.boolean();
  obj2.room_size = boolean.boolean().required();
  const booleanResult9 = boolean.boolean();
  obj2.reflections = boolean.boolean().required();
  const booleanResult10 = boolean.boolean();
  const numberResult = boolean.number();
  obj2.max_sources = boolean.number().integer().required();
  const integerResult = boolean.number().integer();
  const numberResult1 = boolean.number();
  obj2.max_updates_per_second = boolean.number().integer().required();
  const integerResult1 = boolean.number().integer();
  obj.spatial = boolean.object(obj2).required();
  return boolean.object(obj);
}
let obj = {
  request(string) {
    const obj = { session_id: string.string().required() };
    return obj;
  },
  response(boolean) {
    const obj = { success: boolean.boolean().required() };
    return obj;
  },
};
let obj2 = {
  request(string) {
    const obj = { owner_user_id: string.string().required(), transport_nonce: null };
    const stringResult = string.string();
    const stringResult1 = string.string();
    obj.transport_nonce = string.string().max(128).required();
    return obj;
  },
  response(string) {
    const obj = { session_id: string.string().required(), owner_user_id: null, channel_id: null, transport: null };
    const stringResult = string.string();
    obj.owner_user_id = string.string().required();
    const stringResult1 = string.string();
    obj.channel_id = string.string().required();
    const stringResult2 = string.string();
    const stringResult3 = string.string();
    obj.transport = string.string().valid("rgba").required();
    return obj;
  },
};
let obj3 = {
  request: "Array",
  response(string) {
    const obj = { image_url: string.string().required() };
    return obj;
  },
};
let obj4 = {
  response: "Array",
  request(string) {
    const obj = { mediaUrl: null };
    const stringResult = string.string();
    obj.mediaUrl = string.string().required().max(1024);
    return obj;
  },
};
let obj6 = {
  request: "Array",
  response(array) {
    const obj = { participants: null };
    const arrayResult = array.array();
    const obj2 = { nickname: null };
    const obj3 = User(array);
    obj2.nickname = array.string().description("Server nickname. Not unique.");
    const keys = obj3.keys(obj2);
    const stringResult = array.string();
    obj.participants = arrayResult.items(keys.required()).required();
    return obj;
  },
};
let obj7 = {
  request: "Array",
  response(boolean) {
    return VoiceCapabilities(boolean);
  },
};
let obj9 = {
  request: "Array",
  response(string) {
    const obj = { session_id: string.string().required(), channel_id: null, capabilities: null, participants: null };
    const stringResult = string.string();
    obj.channel_id = string.string().required();
    const stringResult1 = string.string();
    obj.capabilities = VoiceCapabilities(string).required();
    const obj4 = VoiceCapabilities(string);
    const obj2 = {
      user_id: null,
      username: null,
      global_name: null,
      avatar: null,
      mute: null,
      deaf: null,
      self_mute: null,
      self_deaf: null,
    };
    const arrayResult = string.array();
    obj2.user_id = string.string().required();
    const stringResult2 = string.string();
    obj2.username = string.string().required();
    const stringResult3 = string.string();
    const stringResult4 = string.string();
    obj2.global_name = string.string().allow(null).required();
    const allowResult = string.string().allow(null);
    const stringResult5 = string.string();
    obj2.avatar = string.string().allow(null).required();
    const allowResult1 = string.string().allow(null);
    obj2.mute = string.boolean().required();
    const booleanResult = string.boolean();
    obj2.deaf = string.boolean().required();
    const booleanResult1 = string.boolean();
    obj2.self_mute = string.boolean().required();
    const booleanResult2 = string.boolean();
    obj2.self_deaf = string.boolean().required();
    const booleanResult3 = string.boolean();
    const objectResult = string.object(obj2);
    obj.participants = arrayResult.items(string.object(obj2).required()).required();
    return obj;
  },
};
const obj11 = {
  request: "Array",
  response(boolean) {
    const obj = { available: boolean.boolean().required(), transport: null, requires_existing_watch: null };
    const booleanResult = boolean.boolean();
    const stringResult = boolean.string();
    obj.transport = boolean.string().valid("rgba", "none").required();
    const validResult = boolean.string().valid("rgba", "none");
    obj.requires_existing_watch = boolean.boolean().required();
    return obj;
  },
};
let obj12 = {
  request: "Array",
  response(boolean) {
    const obj = { available: boolean.boolean().required(), transport: null };
    const booleanResult = boolean.boolean();
    const stringResult = boolean.string();
    obj.transport = boolean.string().valid("rgba", "none").required();
    return obj;
  },
};
const obj21 = {
  request: "Array",
  response(boolean) {
    const obj = { hidden: boolean.boolean().required() };
    return obj;
  },
};
const obj24 = {
  request: "Array",
  response(array) {
    const arrayResult = array.array();
    const obj = { type: null, user: null, presence: null };
    const requiredResult = array.array().required();
    obj.type = array.number().required();
    const numberResult = array.number();
    obj.user = User(array).required();
    const obj2 = { status: null, activity: null };
    const obj5 = User(array);
    obj2.status = array.string().required();
    if (typeof Activity === "function") {
      const obj3 = { relationships: null };
      const obj4 = {
        session_id: array.string().optional(),
        type: null,
        name: null,
        url: null,
        application_id: null,
        status_display_type: null,
        state: null,
        state_url: null,
        details: null,
        details_url: null,
        emoji: null,
        assets: null,
        timestamps: null,
        party: null,
        secrets: null,
        sync_id: null,
        created_at: null,
        instance: null,
        flags: null,
        metadata: null,
        platform: null,
        supported_platforms: null,
        buttons: null,
        hangStatus: null,
      };
      const stringResult1 = array.string();
      obj4.type = array.number().optional();
      const numberResult1 = array.number();
      obj4.name = array.string().required();
      const stringResult2 = array.string();
      const stringResult3 = array.string();
      obj4.url = array.string().allow(null).optional();
      const allowResult = array.string().allow(null);
      obj4.application_id = array.string().optional();
      const stringResult4 = array.string();
      obj4.status_display_type = array.number().optional();
      const numberResult2 = array.number();
      obj4.state = array.string().optional();
      const stringResult5 = array.string();
      obj4.state_url = array.string().optional();
      const stringResult6 = array.string();
      obj4.details = array.string().optional();
      const stringResult7 = array.string();
      obj4.details_url = array.string().optional();
      const obj6 = { name: null, id: null, animated: null };
      const stringResult8 = array.string();
      obj6.name = array.string().required();
      const stringResult9 = array.string();
      const stringResult10 = array.string();
      obj6.id = array.string().allow(null).optional();
      const allowResult1 = array.string().allow(null);
      const boolResult = array.bool();
      obj6.animated = array.bool().optional().allow(null);
      const optionalResult = array.bool().optional();
      const objectResult = array.object(obj6);
      obj4.emoji = array.object(obj6).allow(null).optional();
      const obj7 = {
        large_image: null,
        large_text: null,
        large_url: null,
        small_image: null,
        small_text: null,
        small_url: null,
      };
      const allowResult2 = array.object(obj6).allow(null);
      obj7.large_image = array.string().optional();
      const stringResult11 = array.string();
      obj7.large_text = array.string().optional();
      const stringResult12 = array.string();
      obj7.large_url = array.string().optional();
      const stringResult13 = array.string();
      obj7.small_image = array.string().optional();
      const stringResult14 = array.string();
      obj7.small_text = array.string().optional();
      const stringResult15 = array.string();
      obj7.small_url = array.string().optional();
      const stringResult16 = array.string();
      obj4.assets = array.object(obj7).optional();
      const obj8 = { start: null, end: null };
      const objectResult7 = array.object(obj7);
      obj8.start = array.number().optional();
      const numberResult3 = array.number();
      obj8.end = array.number().optional();
      const numberResult4 = array.number();
      obj4.timestamps = array.object(obj8).optional();
      const obj9 = { id: null, size: null, privacy: null };
      const objectResult8 = array.object(obj8);
      obj9.id = array.string().optional();
      const stringResult17 = array.string();
      const arrayResult4 = array.array();
      const itemsResult = array.array().items(array.number());
      obj9.size = array.array().items(array.number()).length(2).optional();
      const lengthResult = array.array().items(array.number()).length(2);
      obj9.privacy = array.number().optional();
      const numberResult5 = array.number();
      obj4.party = array.object(obj9).optional();
      const obj10 = { match: null, join: null };
      const objectResult9 = array.object(obj9);
      obj10.match = array.string().optional();
      const stringResult18 = array.string();
      obj10.join = array.string().optional();
      const stringResult19 = array.string();
      obj4.secrets = array.object(obj10).optional();
      const objectResult10 = array.object(obj10);
      obj4.sync_id = array.string().optional();
      const stringResult20 = array.string();
      obj4.created_at = array.number().optional();
      const numberResult6 = array.number();
      obj4.instance = array.bool().optional();
      const boolResult1 = array.bool();
      obj4.flags = array.number().optional();
      const numberResult7 = array.number();
      obj4.metadata = array.object().optional();
      const objectResult11 = array.object();
      obj4.platform = array.string().optional();
      const stringResult21 = array.string();
      const arrayResult5 = array.array();
      obj4.supported_platforms = array.array().items(array.string()).optional();
      const itemsResult1 = array.array().items(array.string());
      const arrayResult6 = array.array();
      obj4.buttons = array.array().items(array.string()).optional();
      const itemsResult2 = array.array().items(array.string());
      obj4.hangStatus = array.string().optional();
      const stringResult22 = array.string();
      obj2.activity = array.object(obj4).allow(null);
      obj.presence = array.object(obj2);
      obj3.relationships = requiredResult.items(array.object(obj));
      return obj3;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    const stringResult = array.string();
  },
};
const obj29 = {
  request: "Array",
  response(string) {
    const obj = { quest_id: string.string().required(), enrolled_at: null, completed_at: null, external_cta_url: null };
    const stringResult = string.string();
    const stringResult1 = string.string();
    obj.enrolled_at = string.string().allow(null).optional();
    const allowResult = string.string().allow(null);
    const stringResult2 = string.string();
    obj.completed_at = string.string().allow(null).optional();
    const allowResult1 = string.string().allow(null);
    obj.external_cta_url = string.string().required();
    return obj;
  },
};
const obj30 = {
  request: "Array",
  response(string) {
    const obj = { ticket: string.string().required() };
    return obj;
  },
};
function Activity(arg0) {}
function User(string) {
  const obj = {
    id: null,
    username: null,
    global_name: null,
    discriminator: null,
    avatar: null,
    flags: null,
    bot: null,
    avatar_decoration_data: null,
    premium_type: null,
  };
  const stringResult = string.string();
  obj.id = string.string().required().description("User ID");
  const requiredResult = string.string().required();
  obj.username = string.string().required();
  const stringResult1 = string.string();
  const stringResult2 = string.string();
  obj.global_name = string.string().allow(null).description("Global Discord name. Not unique.");
  const allowResult = string.string().allow(null);
  const stringResult3 = string.string();
  obj.discriminator = string
    .string()
    .required()
    .description("Global name discriminator. Will be 0 if a unique username");
  const requiredResult1 = string.string().required();
  const stringResult4 = string.string();
  obj.avatar = string.string().allow(null).description("User Avatar ID");
  const allowResult1 = string.string().allow(null);
  const numberResult = string.number();
  obj.flags = string.number().required().description("Public user flags");
  const requiredResult2 = string.number().required();
  const boolResult = string.bool();
  obj.bot = string.bool().required().description("If a bot user.");
  const obj2 = { asset: null, skuId: null, expiresAt: null };
  const requiredResult3 = string.bool().required();
  obj2.asset = string.string().allow(null);
  obj2.skuId = string.string();
  obj2.expiresAt = string.number();
  const stringResult5 = string.string();
  const objectResult = string.object(obj2);
  obj.avatar_decoration_data = string.object(obj2).allow(null).description("Details about avatar decoration");
  const allowResult2 = string.object(obj2).allow(null);
  const numberResult1 = string.number();
  obj.premium_type = string.number().allow(null).description("Nitro premium type");
  const allowResult3 = string.number().allow(null);
  return string.object(obj).description("Discord User");
}
function ContextMenuIcon(arg0) {}
function ContextMenuItem(string, arg1) {
  const obj = {
    id: null,
    type: null,
    label: null,
    subtext: null,
    icon: null,
    color: null,
    disabled: null,
    checked: null,
    group: null,
  };
  const stringResult = string.string();
  obj.id = string.string().max(64).required();
  const maxResult = string.string().max(64);
  obj.type = string.string().valid("item", "checkbox", "radio");
  const stringResult1 = string.string();
  const stringResult2 = string.string();
  obj.label = string.string().max(100).required();
  const maxResult1 = string.string().max(100);
  obj.subtext = string.string().max(100);
  if (typeof ContextMenuIcon === "function") {
    const stringResult4 = string.string();
    const valid = stringResult4.valid;
    const items = [];
    HermesBuiltin.arraySpread(contextMenuIcons.CONTEXT_MENU_ICON_NAMES, 0);
    obj.icon = HermesBuiltin.apply(items, stringResult4).meta({ className: "ContextMenuIconName" });
    const stringResult5 = string.string();
    obj.color = stringResult5.valid("default", "brand", "danger", "premium", "success");
    obj.disabled = string.boolean();
    obj.checked = string.boolean();
    const applyResult = HermesBuiltin.apply(items, stringResult4);
    obj.group = string.string().max(64);
    const stringResult6 = string.string();
    const obj2 = { type: null };
    const alternativesResult = string.alternatives();
    const stringResult7 = string.string();
    obj2.type = string.string().valid("separator").required();
    let tmp12 = obj;
    const validResult = string.string().valid("separator");
    if (arg1) {
      const obj3 = {};
      const merged = Object.assign(obj);
      const arrayResult = string.array();
      obj3.items = string.array().max(30).items(ContextMenuItem(string, false));
      tmp12 = obj3;
      const maxResult2 = string.array().max(30);
    }
    return alternativesResult.try(string.object(obj2), string.object(tmp12));
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const stringResult3 = string.string();
}
function ActionRowComponent(arg0) {}
function ButtonComponent(arg0) {}
const result = size.fileFinishedImporting("../discord_common/js/packages/rpc-schema/definitions.tsx");

export const RPCCommandSchemas = {
  [helpers.RPCCommand.INITIATE_IMAGE_UPLOAD]: obj3,
  [helpers.RPCCommand.OPEN_SHARE_MOMENT_DIALOG]: obj4,
  [helpers.RPCCommand.AUTHENTICATE]: {
    request(string) {
      const obj = { access_token: null };
      const stringResult = string.string();
      obj.access_token = string.string().allow(null).optional();
      return obj;
    },
    response(string) {
      const obj = {
        access_token: string.string().required(),
        user: null,
        scopes: null,
        expires: null,
        application: null,
      };
      const obj2 = {
        username: null,
        discriminator: null,
        id: null,
        avatar: null,
        public_flags: null,
        global_name: null,
      };
      const stringResult = string.string();
      obj2.username = string.string().required();
      const stringResult1 = string.string();
      obj2.discriminator = string.string().required();
      const stringResult2 = string.string();
      obj2.id = string.string().required();
      const stringResult3 = string.string();
      obj2.avatar = string.string().allow(null);
      const stringResult4 = string.string();
      obj2.public_flags = string.number().required();
      const numberResult = string.number();
      obj2.global_name = string.string().allow(null);
      const stringResult5 = string.string();
      obj.user = string.object(obj2).required();
      const objectResult = string.object(obj2);
      const arrayResult = string.array();
      const stringResult6 = string.string();
      const items = [...helpers.joiEnum(OAuth2Scopes.OAuth2Scopes)];
      obj.scopes = arrayResult.items(stringResult6.valid.apply(items)).required();
      const itemsResult = arrayResult.items(stringResult6.valid.apply(items));
      obj.expires = string.string().required();
      const obj3 = { description: null, icon: null, id: null, rpc_origins: null, name: null };
      const stringResult7 = string.string();
      obj3.description = string.string().required();
      const stringResult8 = string.string();
      obj3.icon = string.string().allow(null);
      const stringResult9 = string.string();
      obj3.id = string.string().required();
      const stringResult10 = string.string();
      const arrayResult2 = string.array();
      obj3.rpc_origins = string.array().items(string.string()).optional();
      const itemsResult1 = string.array().items(string.string());
      obj3.name = string.string().required();
      const stringResult11 = string.string();
      obj.application = string.object(obj3).required();
      return obj;
    },
  },
  [helpers.RPCCommand.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: obj6,
  [helpers.RPCCommand.GET_VOICE_CAPABILITIES]: obj7,
  [helpers.RPCCommand.GET_VOICE_SESSION_PARTICIPANTS]: {
    request(string) {
      const obj = { session_id: string.string().required() };
      return obj;
    },
    response(array) {
      const obj = { participants: null };
      const obj2 = {
        user_id: null,
        username: null,
        global_name: null,
        avatar: null,
        mute: null,
        deaf: null,
        self_mute: null,
        self_deaf: null,
      };
      const arrayResult = array.array();
      obj2.user_id = array.string().required();
      const stringResult = array.string();
      obj2.username = array.string().required();
      const stringResult1 = array.string();
      const stringResult2 = array.string();
      obj2.global_name = array.string().allow(null).required();
      const allowResult = array.string().allow(null);
      const stringResult3 = array.string();
      obj2.avatar = array.string().allow(null).required();
      const allowResult1 = array.string().allow(null);
      obj2.mute = array.boolean().required();
      const booleanResult = array.boolean();
      obj2.deaf = array.boolean().required();
      const booleanResult1 = array.boolean();
      obj2.self_mute = array.boolean().required();
      const booleanResult2 = array.boolean();
      obj2.self_deaf = array.boolean().required();
      const booleanResult3 = array.boolean();
      const objectResult = array.object(obj2);
      obj.participants = arrayResult.items(array.object(obj2).required()).required();
      return obj;
    },
  },
  [helpers.RPCCommand.START_VOICE_SESSION]: obj9,
  [helpers.RPCCommand.UPDATE_VOICE_SPATIAL]: {
    request(string) {
      const obj = { session_id: string.string().required(), listener: null, sources: null };
      const obj2 = { position: null, forward: null };
      const point = { x: null, y: null, z: null };
      ({ object, object: object2 } = string);
      const stringResult = string.string();
      const numberResult = string.number();
      const minResult = string.number().min(-100000);
      point.x = string.number().min(-100000).max(100000).required();
      const maxResult = string.number().min(-100000).max(100000);
      const numberResult1 = string.number();
      const minResult1 = string.number().min(-100000);
      point.y = string.number().min(-100000).max(100000).required();
      const maxResult1 = string.number().min(-100000).max(100000);
      const numberResult2 = string.number();
      const minResult2 = string.number().min(-100000);
      point.z = string.number().min(-100000).max(100000).required();
      const maxResult2 = string.number().min(-100000).max(100000);
      obj2.position = object2(point).required();
      const point1 = { x: null, y: null, z: null };
      const object2Result = object2(point);
      const numberResult3 = string.number();
      const minResult3 = string.number().min(-100000);
      point1.x = string.number().min(-100000).max(100000).required();
      const maxResult3 = string.number().min(-100000).max(100000);
      const numberResult4 = string.number();
      const minResult4 = string.number().min(-100000);
      point1.y = string.number().min(-100000).max(100000).required();
      const maxResult4 = string.number().min(-100000).max(100000);
      const numberResult5 = string.number();
      const minResult5 = string.number().min(-100000);
      point1.z = string.number().min(-100000).max(100000).required();
      const maxResult5 = string.number().min(-100000).max(100000);
      obj2.forward = string.object(point1).required();
      const objectResult = string.object(point1);
      obj.listener = object(obj2).required();
      const objectResult4 = object(obj2);
      const arrayResult = string.array();
      const obj3 = { user_id: null, position: null, gain: null };
      const maxResult6 = string.array().max(50);
      obj3.user_id = string.string().required();
      const point2 = { x: null, y: null, z: null };
      const stringResult1 = string.string();
      const numberResult6 = string.number();
      const minResult6 = string.number().min(-100000);
      point2.x = string.number().min(-100000).max(100000).required();
      const maxResult7 = string.number().min(-100000).max(100000);
      const numberResult7 = string.number();
      const minResult7 = string.number().min(-100000);
      point2.y = string.number().min(-100000).max(100000).required();
      const maxResult8 = string.number().min(-100000).max(100000);
      const numberResult8 = string.number();
      const minResult8 = string.number().min(-100000);
      point2.z = string.number().min(-100000).max(100000).required();
      const maxResult9 = string.number().min(-100000).max(100000);
      obj3.position = string.object(point2).required();
      const objectResult5 = string.object(point2);
      const numberResult9 = string.number();
      const minResult9 = string.number().min(0);
      obj3.gain = string.number().min(0).max(1).optional();
      const maxResult10 = string.number().min(0).max(1);
      const objectResult6 = string.object(obj3);
      obj.sources = maxResult6.items(string.object(obj3).required()).required();
      return obj;
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.ENABLE_VOICE_SPATIAL]: obj,
  [helpers.RPCCommand.DISABLE_VOICE_SPATIAL]: obj,
  [helpers.RPCCommand.STOP_VOICE_SESSION]: obj,
  [helpers.RPCCommand.GET_APPLICATION_STREAMING_VIEW_CAPABILITIES]: obj11,
  [helpers.RPCCommand.START_APPLICATION_STREAMING_VIEW]: obj2,
  [helpers.RPCCommand.SUSPEND_APPLICATION_STREAMING_VIEW]: obj,
  [helpers.RPCCommand.RESUME_APPLICATION_STREAMING_VIEW]: obj,
  [helpers.RPCCommand.WATCH_APPLICATION_STREAMING_VIEW_ON_DISCORD]: obj,
  [helpers.RPCCommand.STOP_APPLICATION_STREAMING_VIEW]: obj,
  [helpers.RPCCommand.GET_CAMERA_VIEW_CAPABILITIES]: obj12,
  [helpers.RPCCommand.START_CAMERA_VIEW]: obj2,
  [helpers.RPCCommand.SUSPEND_CAMERA_VIEW]: obj,
  [helpers.RPCCommand.RESUME_CAMERA_VIEW]: obj,
  [helpers.RPCCommand.STOP_CAMERA_VIEW]: obj,
  [helpers.RPCCommand.SHARE_INTERACTION]: {
    request(string) {
      const obj = {
        command: string.string().required(),
        options: null,
        content: null,
        require_launch_channel: null,
        preview_image: null,
        components: null,
        pid: null,
      };
      const stringResult = string.string();
      const obj2 = { name: null, value: null };
      const arrayResult = string.array();
      obj2.name = string.string().required();
      const stringResult1 = string.string();
      obj2.value = string.string().required();
      obj.options = arrayResult.items(string.object(obj2));
      const stringResult2 = string.string();
      obj.content = string.string().max(2000);
      obj.require_launch_channel = string.boolean();
      const size = { height: null, url: null, width: null };
      const stringResult3 = string.string();
      size.height = string.number().required();
      const numberResult = string.number();
      size.url = string.string().required();
      const stringResult4 = string.string();
      size.width = string.number().required();
      obj.preview_image = string.object(size);
      string.array();
      if (typeof ActionRowComponent === "function") {
        const obj3 = { type: null, components: null };
        const numberResult2 = string.number();
        obj3.type = string.number().valid(1).required();
        const validResult = string.number().valid(1);
        string.array().max(5);
        if (typeof ButtonComponent === "function") {
          const obj4 = { type: null, style: null, label: null, custom_id: null };
          const numberResult3 = string.number();
          obj4.type = string.number().valid(2).required();
          const validResult2 = string.number().valid(2);
          const numberResult4 = string.number();
          const minResult = string.number().min(1);
          obj4.style = string.number().min(1).max(5).required();
          const maxResult1 = string.number().min(1).max(5);
          const stringResult5 = string.string();
          obj4.label = string.string().max(80).description("Text that appears on the button");
          const maxResult2 = string.string().max(80);
          const stringResult6 = string.string();
          obj4.custom_id = string
            .string()
            .max(100)
            .description("Developer-defined identifier for the button; max 100 characters");
          obj3.components = tmp4(string.object(obj4));
          obj.components = tmp2(string.object(obj3));
          obj.pid = string.number();
          return obj;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        const arrayResult4 = string.array();
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      const numberResult1 = string.number();
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.SHARE_LINK]: {
    request(string) {
      const obj = { custom_id: string.string().max(64), message: null, link_id: null };
      const stringResult = string.string();
      const stringResult1 = string.string();
      obj.message = string.string().max(1000).required();
      const maxResult = string.string().max(1000);
      obj.link_id = string.string().max(64);
      return obj;
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required(), didCopyLink: null, didSendMessage: null };
      const booleanResult = boolean.boolean();
      obj.didCopyLink = boolean.boolean().required();
      const booleanResult1 = boolean.boolean();
      obj.didSendMessage = boolean.boolean().required();
      return obj;
    },
  },
  [helpers.RPCCommand.SHARE_CONTENT]: {
    request(string) {
      const obj = {
        content: null,
        link: null,
        custom_id: null,
        link_id: null,
        image_url: null,
        attachments: null,
        preview_title: null,
        preview_subtitle: null,
      };
      const stringResult = string.string();
      obj.content = string.string().max(1000).required();
      const maxResult = string.string().max(1000);
      obj.link = string.string().max(1024);
      const stringResult1 = string.string();
      obj.custom_id = string.string().max(64);
      const stringResult2 = string.string();
      obj.link_id = string.string().max(64);
      const stringResult3 = string.string();
      obj.image_url = string.string().max(1024);
      const stringResult4 = string.string();
      const arrayResult = string.array();
      const obj2 = { data: null, filename: null, content_type: null };
      const maxResult1 = string.array().max(10);
      const stringResult5 = string.string();
      obj2.data = string.string().max(14000000).required();
      const maxResult2 = string.string().max(14000000);
      const stringResult6 = string.string();
      obj2.filename = string.string().max(64).required();
      const maxResult3 = string.string().max(64);
      const stringResult7 = string.string();
      obj2.content_type = string
        .string()
        .valid("image/png", "image/jpeg", "image/gif", "image/webp", "video/mp4", "video/webm")
        .required();
      obj.attachments = maxResult1.items(string.object(obj2));
      const validResult = string
        .string()
        .valid("image/png", "image/jpeg", "image/gif", "image/webp", "video/mp4", "video/webm");
      obj.preview_title = string.string().max(100);
      const stringResult8 = string.string();
      obj.preview_subtitle = string.string().max(100);
      return obj;
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required(), didCopyLink: null, didSendMessage: null };
      const booleanResult = boolean.boolean();
      obj.didCopyLink = boolean.boolean().required();
      const booleanResult1 = boolean.boolean();
      obj.didSendMessage = boolean.boolean().required();
      return obj;
    },
  },
  [helpers.RPCCommand.OPEN_CONTEXT_MENU]: {
    request(string) {
      const point = { type: null, id: null, channel_id: null, url: null, items: null, x: null, y: null };
      const stringResult = string.string();
      point.type = string.string().valid("user", "channel", "message", "image", "custom").required();
      const validResult = string.string().valid("user", "channel", "message", "image", "custom");
      point.id = string.string().max(64);
      const stringResult1 = string.string();
      point.channel_id = string.string().max(64);
      const stringResult2 = string.string();
      point.url = string.string().max(1024);
      const stringResult3 = string.string();
      const arrayResult = string.array();
      const minResult = string.array().min(1);
      point.items = string.array().min(1).max(30).items(ContextMenuItem(string, true));
      const maxResult = string.array().min(1).max(30);
      const numberResult = string.number();
      const minResult1 = string.number().min(0);
      point.x = string.number().min(0).max(65535).required();
      const maxResult1 = string.number().min(0).max(65535);
      const numberResult1 = string.number();
      const minResult2 = string.number().min(0);
      point.y = string.number().min(0).max(65535).required();
      return point;
    },
    response(boolean) {
      const obj = { opened: boolean.boolean().required(), selected_id: null };
      const booleanResult = boolean.boolean();
      obj.selected_id = boolean.string().allow(null);
      return obj;
    },
  },
  [helpers.RPCCommand.OPEN_USER_POPOUT]: {
    request(string) {
      const point = { user_id: null, x: null, y: null };
      const stringResult = string.string();
      point.user_id = string.string().max(64).required();
      const maxResult = string.string().max(64);
      const numberResult = string.number();
      const minResult = string.number().min(0);
      point.x = string.number().min(0).max(65535).required();
      const maxResult1 = string.number().min(0).max(65535);
      const numberResult1 = string.number();
      const minResult1 = string.number().min(0);
      point.y = string.number().min(0).max(65535).required();
      return point;
    },
    response(boolean) {
      const obj = { opened: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.OPEN_MEDIA_VIEWER]: {
    request(array) {
      const obj = { items: null, starting_index: null };
      const size = { url: null, type: null, width: null, height: null, alt: null };
      const arrayResult = array.array();
      const stringResult = array.string();
      size.url = array.string().max(1024).required();
      const maxResult = array.string().max(1024);
      size.type = array.string().valid("image", "video");
      const stringResult1 = array.string();
      const numberResult = array.number();
      size.width = array.number().min(1).max(16384);
      const minResult = array.number().min(1);
      const numberResult1 = array.number();
      size.height = array.number().min(1).max(16384);
      const minResult1 = array.number().min(1);
      size.alt = array.string().max(1024);
      const stringResult2 = array.string();
      const itemsResult = arrayResult.items(array.object(size));
      const minResult2 = arrayResult.items(array.object(size)).min(1);
      obj.items = arrayResult.items(array.object(size)).min(1).max(50).required();
      const maxResult1 = arrayResult.items(array.object(size)).min(1).max(50);
      const numberResult2 = array.number();
      obj.starting_index = array.number().min(0).max(49);
      return obj;
    },
    response(boolean) {
      const obj = { opened: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.OPEN_USER_PROFILE]: {
    request(string) {
      const obj = { user_id: null };
      const stringResult = string.string();
      obj.user_id = string.string().max(64).required();
      return obj;
    },
    response(boolean) {
      const obj = { opened: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.SHOW_TOOLTIP]: {
    request(string) {
      const point = { text: null, shortcut: null, x: null, y: null, position: null, align: null };
      const stringResult = string.string();
      point.text = string.string().max(200).required();
      const maxResult = string.string().max(200);
      point.shortcut = string.string().max(32);
      const stringResult1 = string.string();
      const numberResult = string.number();
      const minResult = string.number().min(0);
      point.x = string.number().min(0).max(65535).required();
      const maxResult1 = string.number().min(0).max(65535);
      const numberResult1 = string.number();
      const minResult1 = string.number().min(0);
      point.y = string.number().min(0).max(65535).required();
      const maxResult2 = string.number().min(0).max(65535);
      point.position = string.string().valid("top", "bottom", "left", "right");
      const stringResult2 = string.string();
      point.align = string.string().valid("top", "center", "bottom", "left", "right");
      return point;
    },
    response(boolean) {
      const obj = { shown: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.HIDE_TOOLTIP]: obj21,
  [helpers.RPCCommand.SHOW_TOAST]: {
    request(string) {
      const obj = { message: null, type: null };
      const stringResult = string.string();
      obj.message = string.string().max(200).required();
      const maxResult = string.string().max(200);
      const stringResult1 = string.string();
      obj.type = string.string().valid("message", "success", "failure").required();
      return obj;
    },
    response(boolean) {
      const obj = { shown: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.SHOW_CONFIRM_MODAL]: {
    request(string) {
      const obj = { type: null, title: null, body: null, confirm_text: null, cancel_text: null };
      const stringResult = string.string();
      obj.type = string.string().valid("alert", "confirm").required();
      const validResult = string.string().valid("alert", "confirm");
      const stringResult1 = string.string();
      obj.title = string.string().max(100).required();
      const maxResult = string.string().max(100);
      obj.body = string.string().max(1000);
      const stringResult2 = string.string();
      const stringResult3 = string.string();
      obj.confirm_text = string.string().max(32).required();
      const maxResult1 = string.string().max(32);
      obj.cancel_text = string.string().max(32);
      return obj;
    },
    response(boolean) {
      return { confirmed: boolean.boolean(), acknowledged: boolean.boolean() };
    },
  },
  [helpers.RPCCommand.GET_RELATIONSHIPS]: obj24,
  [helpers.RPCCommand.INVITE_USER_EMBEDDED]: {
    request(string) {
      const obj = { user_id: string.string().required(), content: null };
      const stringResult = string.string();
      const stringResult1 = string.string();
      obj.content = string.string().min(0).max(1024);
      return obj;
    },
    response: "Array",
  },
  [helpers.RPCCommand.GET_USER]: {
    request(string) {
      const obj = { id: null };
      const stringResult = string.string();
      obj.id = string.string().max(64).required();
      return obj;
    },
    response(arg0) {
      return User(arg0).allow(null);
    },
  },
  [helpers.RPCCommand.GET_QUEST_ENROLLMENT_STATUS]: {
    request(string) {
      const obj = { quest_id: string.string().required() };
      return obj;
    },
    response(string) {
      const obj = { quest_id: string.string().required(), is_enrolled: null, enrolled_at: null };
      const stringResult = string.string();
      obj.is_enrolled = string.boolean().required();
      const booleanResult = string.boolean();
      const stringResult1 = string.string();
      obj.enrolled_at = string.string().allow(null).optional();
      return obj;
    },
  },
  [helpers.RPCCommand.QUEST_START_TIMER]: {
    request(string) {
      const obj = { quest_id: string.string().required() };
      return obj;
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.GET_QUEST]: obj29,
  [helpers.RPCCommand.REQUEST_PROXY_TICKET_REFRESH]: obj30,
  [helpers.RPCCommand.SET_PREFERS_PICTURE_IN_PICTURE_ON_NAVIGATE_AWAY]: {
    request(boolean) {
      const obj = { enabled: boolean.boolean().required() };
      return obj;
    },
    response(boolean) {
      const obj = { enabled: boolean.boolean().required() };
      return obj;
    },
  },
};
