// discord_common/js/packages/rpc-schema/definitions.tsx
import set from "../../../../_runtime/00002_set.js";
import set2 from "../../shared/shared-constants/OAuth2Scopes.tsx";
import RPCCommands from "helpers.tsx";
import CONTEXT_MENU_ICON_NAMES from "contextMenuIcons.tsx";

function VoiceCapabilities(boolean) {
  let obj = { available: boolean.boolean().required(), connected: null, participant_updates: null, binary_speaking: null, spatial: null };
  const booleanResult = boolean.boolean();
  obj[1] = boolean.boolean().required();
  const booleanResult1 = boolean.boolean();
  obj[2] = boolean.boolean().required();
  const booleanResult2 = boolean.boolean();
  obj[3] = boolean.boolean().required();
  obj = { available: null, source_positioning: null, source_gain: null, source_spatial_blend: null, listener_pose: null, room_size: null, reflections: null, max_sources: null, max_updates_per_second: null };
  const booleanResult3 = boolean.boolean();
  obj[0] = boolean.boolean().required();
  const booleanResult4 = boolean.boolean();
  obj[1] = boolean.boolean().required();
  const booleanResult5 = boolean.boolean();
  obj[2] = boolean.boolean().required();
  const booleanResult6 = boolean.boolean();
  obj[3] = boolean.boolean().required();
  const booleanResult7 = boolean.boolean();
  obj[4] = boolean.boolean().required();
  const booleanResult8 = boolean.boolean();
  obj[5] = boolean.boolean().required();
  const booleanResult9 = boolean.boolean();
  obj[6] = boolean.boolean().required();
  const booleanResult10 = boolean.boolean();
  const numberResult = boolean.number();
  obj[7] = boolean.number().integer().required();
  const integerResult = boolean.number().integer();
  const numberResult1 = boolean.number();
  obj[8] = boolean.number().integer().required();
  const integerResult1 = boolean.number().integer();
  obj[4] = boolean.object(obj).required();
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
  }
};
obj = {
  request(string) {
    const obj = { owner_user_id: string.string().required(), transport_nonce: null };
    const stringResult = string.string();
    const stringResult1 = string.string();
    obj[1] = string.string().max(128).required();
    return obj;
  },
  response(string) {
    const obj = { session_id: string.string().required(), owner_user_id: null, channel_id: null, transport: null };
    const stringResult = string.string();
    obj[1] = string.string().required();
    const stringResult1 = string.string();
    obj[2] = string.string().required();
    const stringResult2 = string.string();
    const stringResult3 = string.string();
    obj[3] = string.string().valid("rgba").required();
    return obj;
  }
};
obj = { request: "Array", response: 0 };
obj[1] = function response(string) {
  const obj = { image_url: string.string().required() };
  return obj;
};
let obj1 = { response: "Array", request: 0 };
obj1[1] = function request(string) {
  const obj = { mediaUrl: null };
  const stringResult = string.string();
  obj[0] = string.string().required().max(1024);
  return obj;
};
let obj3 = { request: "Array", response: 0 };
obj3[1] = function response(array) {
  let obj = { participants: null };
  const arrayResult = array.array();
  obj = { nickname: null };
  const obj3 = User(array);
  obj[0] = array.string().description("Server nickname. Not unique.");
  const keys = obj3.keys(obj);
  const stringResult = array.string();
  obj[0] = arrayResult.items(keys.required()).required();
  return obj;
};
let obj4 = { request: "Array", response: 0 };
obj4[1] = function response(boolean) {
  return VoiceCapabilities(boolean);
};
let obj6 = { request: "Array", response: 0 };
obj6[1] = function response(string) {
  let obj = { session_id: string.string().required(), channel_id: null, capabilities: null, participants: null };
  const stringResult = string.string();
  obj[1] = string.string().required();
  const stringResult1 = string.string();
  obj[2] = VoiceCapabilities(string).required();
  const obj4 = VoiceCapabilities(string);
  obj = { user_id: null, username: null, global_name: null, avatar: null, mute: null, deaf: null, self_mute: null, self_deaf: null };
  const arrayResult = string.array();
  obj[0] = string.string().required();
  const stringResult2 = string.string();
  obj[1] = string.string().required();
  const stringResult3 = string.string();
  const stringResult4 = string.string();
  obj[2] = string.string().allow(null).required();
  const allowResult = string.string().allow(null);
  const stringResult5 = string.string();
  obj[3] = string.string().allow(null).required();
  const allowResult1 = string.string().allow(null);
  obj[4] = string.boolean().required();
  const booleanResult = string.boolean();
  obj[5] = string.boolean().required();
  const booleanResult1 = string.boolean();
  obj[6] = string.boolean().required();
  const booleanResult2 = string.boolean();
  obj[7] = string.boolean().required();
  const booleanResult3 = string.boolean();
  const objectResult = string.object(obj);
  obj[3] = arrayResult.items(string.object(obj).required()).required();
  return obj;
};
const obj8 = { request: "Array", response: 0 };
obj8[1] = function response(boolean) {
  const obj = { available: boolean.boolean().required(), transport: null, requires_existing_watch: null };
  const booleanResult = boolean.boolean();
  const stringResult = boolean.string();
  obj[1] = boolean.string().valid("rgba", "none").required();
  const validResult = boolean.string().valid("rgba", "none");
  obj[2] = boolean.boolean().required();
  return obj;
};
const obj9 = { request: "Array", response: 0 };
obj9[1] = function response(boolean) {
  const obj = { available: boolean.boolean().required(), transport: null };
  const booleanResult = boolean.boolean();
  const stringResult = boolean.string();
  obj[1] = boolean.string().valid("rgba", "none").required();
  return obj;
};
const obj17 = { request: "Array", response: 0 };
obj17[1] = function response(boolean) {
  const obj = { hidden: boolean.boolean().required() };
  return obj;
};
const obj20 = { request: "Array", response: 0 };
obj20[1] = function response(array) {
  let arrayResult = array.array();
  let obj = { type: null, user: null, presence: null };
  const requiredResult = arrayResult.required();
  obj[0] = array.number().required();
  let obj4 = User(array);
  obj[1] = obj4.required();
  obj = { status: null, activity: null };
  const numberResult = array.number();
  obj[0] = array.string().required();
  if (typeof Activity !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj1 = { relationships: null };
  const obj2 = { session_id: null, type: null, name: null, url: null, application_id: null, status_display_type: null, state: null, state_url: null, details: null, details_url: null, emoji: null, assets: null, timestamps: null, party: null, secrets: null, sync_id: null, created_at: null, instance: null, flags: null, metadata: null, platform: null, supported_platforms: null, buttons: null, hangStatus: null };
  const stringResult = array.string();
  obj2[0] = array.string().optional();
  const stringResult1 = array.string();
  obj2[1] = array.number().optional();
  const numberResult1 = array.number();
  obj2[2] = array.string().required();
  const stringResult2 = array.string();
  const stringResult3 = array.string();
  obj2[3] = array.string().allow(null).optional();
  const allowResult = array.string().allow(null);
  obj2[4] = array.string().optional();
  const stringResult4 = array.string();
  obj2[5] = array.number().optional();
  const numberResult2 = array.number();
  obj2[6] = array.string().optional();
  const stringResult5 = array.string();
  obj2[7] = array.string().optional();
  const stringResult6 = array.string();
  obj2[8] = array.string().optional();
  const stringResult7 = array.string();
  obj2[9] = array.string().optional();
  const obj3 = { name: null, id: null, animated: null };
  const stringResult8 = array.string();
  obj3[0] = array.string().required();
  const stringResult9 = array.string();
  const stringResult10 = array.string();
  obj3[1] = array.string().allow(null).optional();
  const allowResult1 = array.string().allow(null);
  const boolResult = array.bool();
  obj3[2] = array.bool().optional().allow(null);
  let objectResult = array.object(obj3);
  const optionalResult = array.bool().optional();
  obj2[10] = objectResult.allow(null).optional();
  obj4 = { large_image: null, large_text: null, large_url: null, small_image: null, small_text: null, small_url: null };
  const allowResult2 = objectResult.allow(null);
  obj4[0] = array.string().optional();
  const stringResult11 = array.string();
  obj4[1] = array.string().optional();
  const stringResult12 = array.string();
  obj4[2] = array.string().optional();
  const stringResult13 = array.string();
  obj4[3] = array.string().optional();
  const stringResult14 = array.string();
  obj4[4] = array.string().optional();
  const stringResult15 = array.string();
  obj4[5] = array.string().optional();
  objectResult = array.object(obj4);
  obj2[11] = objectResult.optional();
  const obj5 = { start: null, end: null };
  const stringResult16 = array.string();
  obj5[0] = array.number().optional();
  const numberResult3 = array.number();
  obj5[1] = array.number().optional();
  const numberResult4 = array.number();
  obj2[12] = array.object(obj5).optional();
  const obj6 = { id: null, size: null, privacy: null };
  const objectResult1 = array.object(obj5);
  obj6[0] = array.string().optional();
  arrayResult = array.array();
  const stringResult17 = array.string();
  const itemsResult = arrayResult.items(array.number());
  obj6[1] = arrayResult.items(array.number()).length(2).optional();
  const lengthResult = arrayResult.items(array.number()).length(2);
  obj6[2] = array.number().optional();
  const numberResult5 = array.number();
  obj2[13] = array.object(obj6).optional();
  const obj7 = { match: null, join: null };
  const objectResult2 = array.object(obj6);
  obj7[0] = array.string().optional();
  const stringResult18 = array.string();
  obj7[1] = array.string().optional();
  const stringResult19 = array.string();
  obj2[14] = array.object(obj7).optional();
  const objectResult3 = array.object(obj7);
  obj2[15] = array.string().optional();
  const stringResult20 = array.string();
  obj2[16] = array.number().optional();
  const numberResult6 = array.number();
  obj2[17] = array.bool().optional();
  const boolResult1 = array.bool();
  obj2[18] = array.number().optional();
  const numberResult7 = array.number();
  obj2[19] = array.object().optional();
  const objectResult4 = array.object();
  obj2[20] = array.string().optional();
  const stringResult21 = array.string();
  const arrayResult1 = array.array();
  obj2[21] = array.array().items(array.string()).optional();
  const itemsResult1 = array.array().items(array.string());
  const arrayResult2 = array.array();
  obj2[22] = array.array().items(array.string()).optional();
  const itemsResult2 = array.array().items(array.string());
  obj2[23] = array.string().optional();
  const stringResult22 = array.string();
  obj[1] = array.object(obj2).allow(null);
  obj[2] = array.object(obj);
  obj1[0] = requiredResult.items(array.object(obj));
  return obj1;
};
const obj25 = { request: "Array", response: 0 };
obj25[1] = function response(string) {
  const obj = { quest_id: string.string().required(), enrolled_at: null, completed_at: null, external_cta_url: null };
  const stringResult = string.string();
  const stringResult1 = string.string();
  obj[1] = string.string().allow(null).optional();
  const allowResult = string.string().allow(null);
  const stringResult2 = string.string();
  obj[2] = string.string().allow(null).optional();
  const allowResult1 = string.string().allow(null);
  obj[3] = string.string().required();
  return obj;
};
const obj26 = { request: "Array", response: 0 };
obj26[1] = function response(string) {
  const obj = { ticket: string.string().required() };
  return obj;
};
function Activity(arg0) {

}
function User(string) {
  let obj = { id: null, username: null, global_name: null, discriminator: null, avatar: null, flags: null, bot: null, avatar_decoration_data: null, premium_type: null };
  const stringResult = string.string();
  obj[0] = string.string().required().description("User ID");
  const requiredResult = string.string().required();
  obj[1] = string.string().required();
  const stringResult1 = string.string();
  const stringResult2 = string.string();
  obj[2] = string.string().allow(null).description("Global Discord name. Not unique.");
  const allowResult = string.string().allow(null);
  const stringResult3 = string.string();
  obj[3] = string.string().required().description("Global name discriminator. Will be 0 if a unique username");
  const requiredResult1 = string.string().required();
  const stringResult4 = string.string();
  obj[4] = string.string().allow(null).description("User Avatar ID");
  const allowResult1 = string.string().allow(null);
  const numberResult = string.number();
  obj[5] = string.number().required().description("Public user flags");
  const requiredResult2 = string.number().required();
  const boolResult = string.bool();
  obj[6] = string.bool().required().description("If a bot user.");
  obj = { asset: null, skuId: null, expiresAt: null };
  const requiredResult3 = string.bool().required();
  obj[0] = string.string().allow(null);
  obj[1] = string.string();
  obj[2] = string.number();
  let objectResult = string.object(obj);
  const stringResult5 = string.string();
  obj[7] = objectResult.allow(null).description("Details about avatar decoration");
  const allowResult2 = objectResult.allow(null);
  const numberResult1 = string.number();
  obj[8] = string.number().allow(null).description("Nitro premium type");
  objectResult = string.object(obj);
  return objectResult.description("Discord User");
}
function ContextMenuIcon(arg0) {

}
function ContextMenuItem(string) {
  let obj = { id: null, type: null, label: null, subtext: null, icon: null, color: null, disabled: null, checked: null, group: null };
  const stringResult = string.string();
  obj[0] = string.string().max(64).required();
  const maxResult = string.string().max(64);
  obj[1] = string.string().valid("item", "checkbox", "radio");
  const stringResult1 = string.string();
  const stringResult2 = string.string();
  obj[2] = string.string().max(100).required();
  const maxResult1 = string.string().max(100);
  obj[3] = string.string().max(100);
  if (typeof ContextMenuIcon !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const stringResult3 = string.string();
  const items = [...CONTEXT_MENU_ICON_NAMES.CONTEXT_MENU_ICON_NAMES];
  const stringResult4 = string.string();
  obj[4] = string.string().valid.apply(items).meta({ className: "ContextMenuIconName" });
  const applyResult = string.string().valid.apply(items);
  obj[5] = string.string().valid("default", "brand", "danger", "premium", "success");
  obj[6] = string.boolean();
  obj[7] = string.boolean();
  const stringResult5 = string.string();
  obj[8] = string.string().max(64);
  const stringResult6 = string.string();
  obj = { type: null };
  const alternativesResult = string.alternatives();
  const stringResult7 = string.string();
  obj[0] = string.string().valid("separator").required();
  let tmp3 = obj;
  const validResult = string.string().valid("separator");
  if (arg1) {
    obj = {};
    const merged = Object.assign(obj);
    const arrayResult = string.array();
    obj.items = string.array().max(30).items(ContextMenuItem(string, false));
    tmp3 = obj;
    const maxResult2 = string.array().max(30);
  }
  return alternativesResult.try(string.object(obj), string.object(tmp3));
}
function ActionRowComponent(arg0) {

}
function ButtonComponent(arg0) {

}
const result = set.fileFinishedImporting("../discord_common/js/packages/rpc-schema/definitions.tsx");

export const RPCCommandSchemas = {
  [RPCCommands.RPCCommand.INITIATE_IMAGE_UPLOAD]: obj,
  [RPCCommands.RPCCommand.OPEN_SHARE_MOMENT_DIALOG]: obj1,
  [RPCCommands.RPCCommand.AUTHENTICATE]: {
    request(string) {
      const obj = { access_token: null };
      const stringResult = string.string();
      obj[0] = string.string().allow(null).optional();
      return obj;
    },
    response(string) {
      let obj = { access_token: string.string().required(), user: null, scopes: null, expires: null, application: null };
      obj = { username: null, discriminator: null, id: null, avatar: null, public_flags: null, global_name: null };
      const stringResult = string.string();
      obj[0] = string.string().required();
      const stringResult1 = string.string();
      obj[1] = string.string().required();
      const stringResult2 = string.string();
      obj[2] = string.string().required();
      const stringResult3 = string.string();
      obj[3] = string.string().allow(null);
      const stringResult4 = string.string();
      obj[4] = string.number().required();
      const numberResult = string.number();
      obj[5] = string.string().allow(null);
      let objectResult = string.object(obj);
      obj[1] = objectResult.required();
      let arrayResult = string.array();
      const stringResult5 = string.string();
      const stringResult6 = string.string();
      const items = [...RPCCommands.joiEnum(set2.OAuth2Scopes)];
      const obj12 = RPCCommands;
      obj[2] = arrayResult.items(stringResult6.valid.apply(items)).required();
      const itemsResult = arrayResult.items(stringResult6.valid.apply(items));
      obj[3] = string.string().required();
      obj = { description: null, icon: null, id: null, rpc_origins: null, name: null };
      const stringResult7 = string.string();
      obj[0] = string.string().required();
      const stringResult8 = string.string();
      obj[1] = string.string().allow(null);
      const stringResult9 = string.string();
      obj[2] = string.string().required();
      arrayResult = string.array();
      const stringResult10 = string.string();
      obj[3] = arrayResult.items(string.string()).optional();
      const itemsResult1 = arrayResult.items(string.string());
      obj[4] = string.string().required();
      objectResult = string.object(obj);
      obj[4] = objectResult.required();
      return obj;
    }
  },
  [RPCCommands.RPCCommand.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: obj3,
  [RPCCommands.RPCCommand.GET_VOICE_CAPABILITIES]: obj4,
  [RPCCommands.RPCCommand.GET_VOICE_SESSION_PARTICIPANTS]: {
    request(string) {
      const obj = { session_id: string.string().required() };
      return obj;
    },
    response(array) {
      let obj = { participants: null };
      obj = { user_id: null, username: null, global_name: null, avatar: null, mute: null, deaf: null, self_mute: null, self_deaf: null };
      const arrayResult = array.array();
      obj[0] = array.string().required();
      const stringResult = array.string();
      obj[1] = array.string().required();
      const stringResult1 = array.string();
      const stringResult2 = array.string();
      obj[2] = array.string().allow(null).required();
      const allowResult = array.string().allow(null);
      const stringResult3 = array.string();
      obj[3] = array.string().allow(null).required();
      const allowResult1 = array.string().allow(null);
      obj[4] = array.boolean().required();
      const booleanResult = array.boolean();
      obj[5] = array.boolean().required();
      const booleanResult1 = array.boolean();
      obj[6] = array.boolean().required();
      const booleanResult2 = array.boolean();
      obj[7] = array.boolean().required();
      const booleanResult3 = array.boolean();
      const objectResult = array.object(obj);
      obj[0] = arrayResult.items(array.object(obj).required()).required();
      return obj;
    }
  },
  [RPCCommands.RPCCommand.START_VOICE_SESSION]: obj6,
  [RPCCommands.RPCCommand.UPDATE_VOICE_SPATIAL]: {
    request(string) {
      let obj = { session_id: string.string().required(), listener: null, sources: null };
      obj = { position: null, forward: null };
      obj = { x: null, y: null, z: null };
      ({ object, object: object2 } = string);
      const stringResult = string.string();
      const numberResult = string.number();
      const minResult = string.number().min(-100000);
      obj[0] = string.number().min(-100000).max(100000).required();
      const maxResult = string.number().min(-100000).max(100000);
      const numberResult1 = string.number();
      const minResult1 = string.number().min(-100000);
      obj[1] = string.number().min(-100000).max(100000).required();
      const maxResult1 = string.number().min(-100000).max(100000);
      const numberResult2 = string.number();
      const minResult2 = string.number().min(-100000);
      obj[2] = string.number().min(-100000).max(100000).required();
      const maxResult2 = string.number().min(-100000).max(100000);
      obj[0] = object2(obj).required();
      obj1 = { x: null, y: null, z: null };
      const object2Result = object2(obj);
      const numberResult3 = string.number();
      const minResult3 = string.number().min(-100000);
      obj1[0] = string.number().min(-100000).max(100000).required();
      const maxResult3 = string.number().min(-100000).max(100000);
      const numberResult4 = string.number();
      const minResult4 = string.number().min(-100000);
      obj1[1] = string.number().min(-100000).max(100000).required();
      const maxResult4 = string.number().min(-100000).max(100000);
      const numberResult5 = string.number();
      const minResult5 = string.number().min(-100000);
      obj1[2] = string.number().min(-100000).max(100000).required();
      let objectResult = string.object(obj1);
      obj[1] = objectResult.required();
      objectResult = object(obj);
      obj[1] = objectResult.required();
      const maxResult5 = string.number().min(-100000).max(100000);
      const arrayResult = string.array();
      const obj2 = { user_id: null, position: null, gain: null };
      const maxResult6 = string.array().max(50);
      obj2[0] = string.string().required();
      const obj3 = { x: null, y: null, z: null };
      const stringResult1 = string.string();
      const numberResult6 = string.number();
      const minResult6 = string.number().min(-100000);
      obj3[0] = string.number().min(-100000).max(100000).required();
      const maxResult7 = string.number().min(-100000).max(100000);
      const numberResult7 = string.number();
      const minResult7 = string.number().min(-100000);
      obj3[1] = string.number().min(-100000).max(100000).required();
      const maxResult8 = string.number().min(-100000).max(100000);
      const numberResult8 = string.number();
      const minResult8 = string.number().min(-100000);
      obj3[2] = string.number().min(-100000).max(100000).required();
      const maxResult9 = string.number().min(-100000).max(100000);
      obj2[1] = string.object(obj3).required();
      const objectResult1 = string.object(obj3);
      const numberResult9 = string.number();
      const minResult9 = string.number().min(0);
      obj2[2] = string.number().min(0).max(1).optional();
      const maxResult10 = string.number().min(0).max(1);
      const objectResult2 = string.object(obj2);
      obj[2] = maxResult6.items(string.object(obj2).required()).required();
      return obj;
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required() };
      return obj;
    }
  },
  [RPCCommands.RPCCommand.ENABLE_VOICE_SPATIAL]: obj,
  [RPCCommands.RPCCommand.DISABLE_VOICE_SPATIAL]: obj,
  [RPCCommands.RPCCommand.STOP_VOICE_SESSION]: obj,
  [RPCCommands.RPCCommand.GET_APPLICATION_STREAMING_VIEW_CAPABILITIES]: obj8,
  [RPCCommands.RPCCommand.START_APPLICATION_STREAMING_VIEW]: obj,
  [RPCCommands.RPCCommand.SUSPEND_APPLICATION_STREAMING_VIEW]: obj,
  [RPCCommands.RPCCommand.RESUME_APPLICATION_STREAMING_VIEW]: obj,
  [RPCCommands.RPCCommand.WATCH_APPLICATION_STREAMING_VIEW_ON_DISCORD]: obj,
  [RPCCommands.RPCCommand.STOP_APPLICATION_STREAMING_VIEW]: obj,
  [RPCCommands.RPCCommand.GET_CAMERA_VIEW_CAPABILITIES]: obj9,
  [RPCCommands.RPCCommand.START_CAMERA_VIEW]: obj,
  [RPCCommands.RPCCommand.SUSPEND_CAMERA_VIEW]: obj,
  [RPCCommands.RPCCommand.RESUME_CAMERA_VIEW]: obj,
  [RPCCommands.RPCCommand.STOP_CAMERA_VIEW]: obj,
  [RPCCommands.RPCCommand.SHARE_INTERACTION]: {
    request(string) {
      let obj = { command: string.string().required(), options: null, content: null, require_launch_channel: null, preview_image: null, components: null, pid: null };
      let arrayResult = string.array();
      obj = { name: null, value: null };
      const stringResult = string.string();
      obj[0] = string.string().required();
      const stringResult1 = string.string();
      obj[1] = string.string().required();
      obj[1] = arrayResult.items(string.object(obj));
      const stringResult2 = string.string();
      obj[2] = string.string().max(2000);
      obj[3] = string.boolean();
      obj = { height: null, url: null, width: null };
      const stringResult3 = string.string();
      obj[0] = string.number().required();
      const numberResult = string.number();
      obj[1] = string.string().required();
      const stringResult4 = string.string();
      obj[2] = string.number().required();
      obj[4] = string.object(obj);
      arrayResult = string.array();
      if (typeof ActionRowComponent !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj1 = { type: null, components: null };
      const numberResult1 = string.number();
      let validResult = string.number().valid(1);
      obj1[0] = validResult.required();
      const numberResult2 = string.number();
      const arrayResult1 = string.array();
      if (typeof ButtonComponent !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const obj2 = { type: null, style: null, label: null, custom_id: null };
      const maxResult = string.array().max(5);
      validResult = string.number().valid(2);
      obj2[0] = validResult.required();
      const numberResult3 = string.number();
      const numberResult4 = string.number();
      const minResult = string.number().min(1);
      obj2[1] = string.number().min(1).max(5).required();
      const maxResult1 = string.number().min(1).max(5);
      const stringResult5 = string.string();
      obj2[2] = string.string().max(80).description("Text that appears on the button");
      const maxResult2 = string.string().max(80);
      const stringResult6 = string.string();
      obj2[3] = string.string().max(100).description("Developer-defined identifier for the button; max 100 characters");
      obj1[1] = maxResult.items(string.object(obj2));
      obj[5] = arrayResult.items(string.object(obj1));
      obj[6] = string.number();
      return obj;
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required() };
      return obj;
    }
  },
  [RPCCommands.RPCCommand.SHARE_LINK]: {
    request(string) {
      const obj = { custom_id: string.string().max(64), message: null, link_id: null };
      const stringResult = string.string();
      const stringResult1 = string.string();
      obj[1] = string.string().max(1000).required();
      const maxResult = string.string().max(1000);
      obj[2] = string.string().max(64);
      return obj;
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required(), didCopyLink: null, didSendMessage: null };
      const booleanResult = boolean.boolean();
      obj[1] = boolean.boolean().required();
      const booleanResult1 = boolean.boolean();
      obj[2] = boolean.boolean().required();
      return obj;
    }
  },
  [RPCCommands.RPCCommand.SHARE_CONTENT]: {
    request(string) {
      let obj = { content: null, link: null, custom_id: null, link_id: null, image_url: null, attachments: null, preview_title: null, preview_subtitle: null };
      const stringResult = string.string();
      obj[0] = string.string().max(1000).required();
      const maxResult = string.string().max(1000);
      obj[1] = string.string().max(1024);
      const stringResult1 = string.string();
      obj[2] = string.string().max(64);
      const stringResult2 = string.string();
      obj[3] = string.string().max(64);
      const stringResult3 = string.string();
      obj[4] = string.string().max(1024);
      const stringResult4 = string.string();
      const arrayResult = string.array();
      obj = { data: null, filename: null, content_type: null };
      const maxResult1 = string.array().max(10);
      const stringResult5 = string.string();
      obj[0] = string.string().max(14000000).required();
      const maxResult2 = string.string().max(14000000);
      const stringResult6 = string.string();
      obj[1] = string.string().max(64).required();
      const maxResult3 = string.string().max(64);
      const stringResult7 = string.string();
      obj[2] = string.string().valid("image/png", "image/jpeg", "image/gif", "image/webp", "video/mp4", "video/webm").required();
      obj[5] = maxResult1.items(string.object(obj));
      const validResult = string.string().valid("image/png", "image/jpeg", "image/gif", "image/webp", "video/mp4", "video/webm");
      obj[6] = string.string().max(100);
      const stringResult8 = string.string();
      obj[7] = string.string().max(100);
      return obj;
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required(), didCopyLink: null, didSendMessage: null };
      const booleanResult = boolean.boolean();
      obj[1] = boolean.boolean().required();
      const booleanResult1 = boolean.boolean();
      obj[2] = boolean.boolean().required();
      return obj;
    }
  },
  [RPCCommands.RPCCommand.OPEN_CONTEXT_MENU]: {
    request(string) {
      const obj = { type: null, id: null, items: null, x: null, y: null };
      const stringResult = string.string();
      obj[0] = string.string().valid("user", "channel", "custom").required();
      const validResult = string.string().valid("user", "channel", "custom");
      obj[1] = string.string().max(64);
      const stringResult1 = string.string();
      const arrayResult = string.array();
      const minResult = string.array().min(1);
      obj[2] = string.array().min(1).max(30).items(ContextMenuItem(string, true));
      const maxResult = string.array().min(1).max(30);
      const numberResult = string.number();
      const minResult1 = string.number().min(0);
      obj[3] = string.number().min(0).max(65535).required();
      const maxResult1 = string.number().min(0).max(65535);
      const numberResult1 = string.number();
      const minResult2 = string.number().min(0);
      obj[4] = string.number().min(0).max(65535).required();
      return obj;
    },
    response(boolean) {
      const obj = { opened: boolean.boolean().required(), selected_id: null };
      const booleanResult = boolean.boolean();
      obj[1] = boolean.string().allow(null);
      return obj;
    }
  },
  [RPCCommands.RPCCommand.OPEN_MEDIA_VIEWER]: {
    request(array) {
      let obj = { items: null, starting_index: null };
      obj = { url: null, type: null, width: null, height: null, alt: null };
      const arrayResult = array.array();
      const stringResult = array.string();
      obj[0] = array.string().max(1024).required();
      const maxResult = array.string().max(1024);
      obj[1] = array.string().valid("image", "video");
      const stringResult1 = array.string();
      const numberResult = array.number();
      obj[2] = array.number().min(1).max(16384);
      const minResult = array.number().min(1);
      const numberResult1 = array.number();
      obj[3] = array.number().min(1).max(16384);
      const minResult1 = array.number().min(1);
      obj[4] = array.string().max(1024);
      const stringResult2 = array.string();
      const itemsResult = arrayResult.items(array.object(obj));
      const minResult2 = arrayResult.items(array.object(obj)).min(1);
      obj[0] = arrayResult.items(array.object(obj)).min(1).max(50).required();
      const maxResult1 = arrayResult.items(array.object(obj)).min(1).max(50);
      const numberResult2 = array.number();
      obj[1] = array.number().min(0).max(49);
      return obj;
    },
    response(boolean) {
      const obj = { opened: boolean.boolean().required() };
      return obj;
    }
  },
  [RPCCommands.RPCCommand.OPEN_USER_PROFILE]: {
    request(string) {
      const obj = { user_id: null };
      const stringResult = string.string();
      obj[0] = string.string().max(64).required();
      return obj;
    },
    response(boolean) {
      const obj = { opened: boolean.boolean().required() };
      return obj;
    }
  },
  [RPCCommands.RPCCommand.SHOW_TOOLTIP]: {
    request(string) {
      const obj = { text: null, shortcut: null, x: null, y: null, position: null, align: null };
      const stringResult = string.string();
      obj[0] = string.string().max(200).required();
      const maxResult = string.string().max(200);
      obj[1] = string.string().max(32);
      const stringResult1 = string.string();
      const numberResult = string.number();
      const minResult = string.number().min(0);
      obj[2] = string.number().min(0).max(65535).required();
      const maxResult1 = string.number().min(0).max(65535);
      const numberResult1 = string.number();
      const minResult1 = string.number().min(0);
      obj[3] = string.number().min(0).max(65535).required();
      const maxResult2 = string.number().min(0).max(65535);
      obj[4] = string.string().valid("top", "bottom", "left", "right");
      const stringResult2 = string.string();
      obj[5] = string.string().valid("top", "center", "bottom", "left", "right");
      return obj;
    },
    response(boolean) {
      const obj = { shown: boolean.boolean().required() };
      return obj;
    }
  },
  [RPCCommands.RPCCommand.HIDE_TOOLTIP]: obj17,
  [RPCCommands.RPCCommand.SHOW_TOAST]: {
    request(string) {
      const obj = { message: null, type: null };
      const stringResult = string.string();
      obj[0] = string.string().max(200).required();
      const maxResult = string.string().max(200);
      const stringResult1 = string.string();
      obj[1] = string.string().valid("message", "success", "failure").required();
      return obj;
    },
    response(boolean) {
      const obj = { shown: boolean.boolean().required() };
      return obj;
    }
  },
  [RPCCommands.RPCCommand.SHOW_CONFIRM_MODAL]: {
    request(string) {
      const obj = { type: null, title: null, body: null, confirm_text: null, cancel_text: null };
      const stringResult = string.string();
      obj[0] = string.string().valid("alert", "confirm").required();
      const validResult = string.string().valid("alert", "confirm");
      const stringResult1 = string.string();
      obj[1] = string.string().max(100).required();
      const maxResult = string.string().max(100);
      obj[2] = string.string().max(1000);
      const stringResult2 = string.string();
      const stringResult3 = string.string();
      obj[3] = string.string().max(32).required();
      const maxResult1 = string.string().max(32);
      obj[4] = string.string().max(32);
      return obj;
    },
    response(boolean) {
      return { confirmed: boolean.boolean(), acknowledged: boolean.boolean() };
    }
  },
  [RPCCommands.RPCCommand.GET_RELATIONSHIPS]: obj20,
  [RPCCommands.RPCCommand.INVITE_USER_EMBEDDED]: {
    request(string) {
      const obj = { user_id: string.string().required(), content: null };
      const stringResult = string.string();
      const stringResult1 = string.string();
      obj[1] = string.string().min(0).max(1024);
      return obj;
    },
    response: "r"
  },
  [RPCCommands.RPCCommand.GET_USER]: {
    request(string) {
      const obj = { id: null };
      const stringResult = string.string();
      obj[0] = string.string().max(64).required();
      return obj;
    },
    response(arg0) {
      return User(arg0).allow(null);
    }
  },
  [RPCCommands.RPCCommand.GET_QUEST_ENROLLMENT_STATUS]: {
    request(string) {
      const obj = { quest_id: string.string().required() };
      return obj;
    },
    response(string) {
      const obj = { quest_id: string.string().required(), is_enrolled: null, enrolled_at: null };
      const stringResult = string.string();
      obj[1] = string.boolean().required();
      const booleanResult = string.boolean();
      const stringResult1 = string.string();
      obj[2] = string.string().allow(null).optional();
      return obj;
    }
  },
  [RPCCommands.RPCCommand.QUEST_START_TIMER]: {
    request(string) {
      const obj = { quest_id: string.string().required() };
      return obj;
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required() };
      return obj;
    }
  },
  [RPCCommands.RPCCommand.GET_QUEST]: obj25,
  [RPCCommands.RPCCommand.REQUEST_PROXY_TICKET_REFRESH]: obj26,
  [RPCCommands.RPCCommand.SET_PREFERS_PICTURE_IN_PICTURE_ON_NAVIGATE_AWAY]: {
    request(boolean) {
      const obj = { enabled: boolean.boolean().required() };
      return obj;
    },
    response(boolean) {
      const obj = { enabled: boolean.boolean().required() };
      return obj;
    }
  }
};