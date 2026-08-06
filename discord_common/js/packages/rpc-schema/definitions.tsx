// discord_common/js/packages/rpc-schema/definitions.tsx
import { set } from "../../shared/shared-constants/OAuth2Scopes.tsx";
import { RPCCommands } from "helpers.tsx";
let obj = { request: "Array", response: 0 };
obj[1] = function response(string) {
  const obj = { image_url: null };
  obj[0] = string.string().required();
  return obj;
};
obj = { response: "Array", request: 0 };
obj[1] = function request(string) {
  const obj = { mediaUrl: null };
  const stringResult = string.string();
  obj[0] = string.string().required().max(1024);
  return obj;
};
obj = {
  request(string) {
    const obj = { access_token: null };
    const stringResult = string.string();
    obj[0] = string.string().allow(null).optional();
    return obj;
  },
  response(string) {
    let obj = { access_token: null, user: null, scopes: null, expires: null, application: null };
    obj[0] = string.string().required();
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
    const items = [...RPCCommands.joiEnum(set.OAuth2Scopes)];
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
};
let obj1 = { request: "Array", response: 0 };
obj1[1] = function response(array) {
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
obj4[1] = function response(array) {
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
  const obj1 = { relationships: null };
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
const obj9 = { request: "Array", response: 0 };
obj9[1] = function response(string) {
  const obj = { quest_id: null, enrolled_at: null, completed_at: null, external_cta_url: null };
  obj[0] = string.string().required();
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
const obj10 = { request: "Array", response: 0 };
obj10[1] = function response(string) {
  const obj = { ticket: null };
  obj[0] = string.string().required();
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
function ActionRowComponent(arg0) {

}
function ButtonComponent(arg0) {

}
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rpc-schema/definitions.tsx");

export const RPCCommandSchemas = {
  [RPCCommands.RPCCommand.INITIATE_IMAGE_UPLOAD]: obj,
  [RPCCommands.RPCCommand.OPEN_SHARE_MOMENT_DIALOG]: obj,
  [RPCCommands.RPCCommand.AUTHENTICATE]: obj,
  [RPCCommands.RPCCommand.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: obj1,
  [RPCCommands.RPCCommand.SHARE_INTERACTION]: {
    request(string) {
      let obj = { command: null, options: null, content: null, require_launch_channel: null, preview_image: null, components: null, pid: null };
      obj[0] = string.string().required();
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
      const obj1 = { type: null, components: null };
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
      const obj = { success: null };
      obj[0] = boolean.boolean().required();
      return obj;
    }
  },
  [RPCCommands.RPCCommand.SHARE_LINK]: {
    request(string) {
      const obj = { custom_id: null, message: null, link_id: null };
      obj[0] = string.string().max(64);
      const stringResult = string.string();
      const stringResult1 = string.string();
      obj[1] = string.string().max(1000).required();
      const maxResult = string.string().max(1000);
      obj[2] = string.string().max(64);
      return obj;
    },
    response(boolean) {
      const obj = { success: null, didCopyLink: null, didSendMessage: null };
      obj[0] = boolean.boolean().required();
      const booleanResult = boolean.boolean();
      obj[1] = boolean.boolean().required();
      const booleanResult1 = boolean.boolean();
      obj[2] = boolean.boolean().required();
      return obj;
    }
  },
  [RPCCommands.RPCCommand.GET_RELATIONSHIPS]: obj4,
  [RPCCommands.RPCCommand.INVITE_USER_EMBEDDED]: {
    request(string) {
      const obj = { user_id: null, content: null };
      obj[0] = string.string().required();
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
      const obj = { quest_id: null };
      obj[0] = string.string().required();
      return obj;
    },
    response(string) {
      const obj = { quest_id: null, is_enrolled: null, enrolled_at: null };
      obj[0] = string.string().required();
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
      const obj = { quest_id: null };
      obj[0] = string.string().required();
      return obj;
    },
    response(boolean) {
      const obj = { success: null };
      obj[0] = boolean.boolean().required();
      return obj;
    }
  },
  [RPCCommands.RPCCommand.GET_QUEST]: obj9,
  [RPCCommands.RPCCommand.REQUEST_PROXY_TICKET_REFRESH]: obj10
};