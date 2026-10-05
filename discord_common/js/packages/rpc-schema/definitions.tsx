// discord_common/js/packages/rpc-schema/definitions.tsx
import OAuth2Scopes from "../../shared/shared-constants/OAuth2Scopes.tsx";
import helpers from "helpers.tsx";
import contextMenuIcons from "contextMenuIcons.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

function VoiceCapabilities(object) {
  let booleanResult;
  let booleanResult1;
  let booleanResult10;
  let booleanResult2;
  let booleanResult3;
  let booleanResult4;
  let booleanResult5;
  let booleanResult6;
  let booleanResult7;
  let booleanResult8;
  let booleanResult9;
  let integerResult;
  let integerResult1;
  let object1Result;
  object = object.object;
  const obj = {
    available: booleanResult.required(),
    connected: booleanResult1.required(),
    participant_updates: booleanResult2.required(),
    binary_speaking: booleanResult3.required(),
    spatial: object1Result.required(),
  };
  booleanResult = object.boolean();
  booleanResult1 = object.boolean();
  booleanResult2 = object.boolean();
  booleanResult3 = object.boolean();
  const object2 = object.object;
  const obj2 = {
    available: booleanResult4.required(),
    source_positioning: booleanResult5.required(),
    source_gain: booleanResult6.required(),
    source_spatial_blend: booleanResult7.required(),
    listener_pose: booleanResult8.required(),
    room_size: booleanResult9.required(),
    reflections: booleanResult10.required(),
    max_sources: integerResult.required(),
    max_updates_per_second: integerResult1.required(),
  };
  booleanResult4 = object.boolean();
  booleanResult5 = object.boolean();
  booleanResult6 = object.boolean();
  booleanResult7 = object.boolean();
  booleanResult8 = object.boolean();
  booleanResult9 = object.boolean();
  booleanResult10 = object.boolean();
  const numberResult = object.number();
  integerResult = numberResult.integer();
  const numberResult1 = object.number();
  integerResult1 = numberResult1.integer();
  object1Result = object2(obj2);
  return object(obj);
}
let obj = {
  request(string) {
    let stringResult;
    const obj = { session_id: stringResult.required() };
    stringResult = string.string();
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { success: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  },
};
let obj2 = {
  request(string) {
    let maxResult;
    let stringResult;
    const obj = { owner_user_id: stringResult.required(), transport_nonce: maxResult.required() };
    stringResult = string.string();
    const stringResult1 = string.string();
    maxResult = stringResult1.max(128);
    return obj;
  },
  response(string) {
    let stringResult;
    let stringResult1;
    let stringResult2;
    let validResult;
    const obj = {
      session_id: stringResult.required(),
      owner_user_id: stringResult1.required(),
      channel_id: stringResult2.required(),
      transport: validResult.required(),
    };
    stringResult = string.string();
    stringResult1 = string.string();
    stringResult2 = string.string();
    const stringResult3 = string.string();
    validResult = stringResult3.valid("rgba");
    return obj;
  },
};
let obj3 = {
  request: "Array",
  response(string) {
    let stringResult;
    const obj = { image_url: stringResult.required() };
    stringResult = string.string();
    return obj;
  },
};
let obj4 = {
  response: "Array",
  request(string) {
    let requiredResult;
    const obj = { mediaUrl: requiredResult.max(1024) };
    const stringResult = string.string();
    requiredResult = stringResult.required();
    return obj;
  },
};
let obj5 = {
  request(string) {
    let allowResult;
    const obj = { access_token: allowResult.optional() };
    const stringResult = string.string();
    allowResult = stringResult.allow(null);
    return obj;
  },
  response(string) {
    let itemsResult;
    let itemsResult1;
    let numberResult;
    let object1Result;
    let objectResult;
    let stringResult;
    let stringResult1;
    let stringResult10;
    let stringResult11;
    let stringResult2;
    let stringResult3;
    let stringResult4;
    let stringResult5;
    let stringResult7;
    let stringResult8;
    let stringResult9;
    const obj = {
      access_token: stringResult.required(),
      user: objectResult.required(),
      scopes: itemsResult.required(),
      expires: stringResult7.required(),
      application: object1Result.required(),
    };
    stringResult = string.string();
    const object = string.object;
    const obj2 = {
      username: stringResult1.required(),
      discriminator: stringResult2.required(),
      id: stringResult3.required(),
      avatar: stringResult4.allow(null),
      public_flags: numberResult.required(),
      global_name: stringResult5.allow(null),
    };
    stringResult1 = string.string();
    stringResult2 = string.string();
    stringResult3 = string.string();
    stringResult4 = string.string();
    numberResult = string.number();
    stringResult5 = string.string();
    objectResult = object(obj2);
    const items = string.array().items;
    string.array();
    const valid = string.string().valid;
    string.string();
    const joiEnum = helpers.joiEnum;
    const items1 = [...joiEnum(OAuth2Scopes.OAuth2Scopes)];
    helpers;
    itemsResult = items(valid.apply(items1));
    stringResult7 = string.string();
    const object2 = string.object;
    const obj3 = {
      description: stringResult8.required(),
      icon: stringResult9.allow(null),
      id: stringResult10.required(),
      rpc_origins: itemsResult1.optional(),
      name: stringResult11.required(),
    };
    stringResult8 = string.string();
    stringResult9 = string.string();
    stringResult10 = string.string();
    const arrayResult2 = string.array();
    itemsResult1 = arrayResult2.items(string.string());
    stringResult11 = string.string();
    object1Result = object2(obj3);
    return obj;
  },
};
let obj6 = {
  request: "Array",
  response(array) {
    let itemsResult;
    let stringResult;
    const obj = { participants: itemsResult.required() };
    const items = array.array().items;
    array.array();
    const obj2 = { nickname: stringResult.description("Server nickname. Not unique.") };
    const keys = User(array).keys;
    User(array);
    stringResult = array.string();
    const keys1 = keys(obj2);
    itemsResult = items(keys1.required());
    return obj;
  },
};
let obj7 = {
  request(string) {
    let maxResult;
    const obj = { build: maxResult.required() };
    const stringResult = string.string();
    maxResult = stringResult.max(64);
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { relaunched: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  },
};
let obj8 = {
  request: "Array",
  response(object) {
    return VoiceCapabilities(object);
  },
};
let obj9 = {
  request(string) {
    let stringResult;
    const obj = { session_id: stringResult.required() };
    stringResult = string.string();
    return obj;
  },
  response(array) {
    let allowResult;
    let allowResult1;
    let booleanResult;
    let booleanResult1;
    let booleanResult2;
    let booleanResult3;
    let itemsResult;
    let stringResult;
    let stringResult1;
    const obj = { participants: itemsResult.required() };
    const obj2 = {
      user_id: stringResult.required(),
      username: stringResult1.required(),
      global_name: allowResult.required(),
      avatar: allowResult1.required(),
      mute: booleanResult.required(),
      deaf: booleanResult1.required(),
      self_mute: booleanResult2.required(),
      self_deaf: booleanResult3.required(),
    };
    const items = array.array().items;
    const object = array.object;
    array.array();
    stringResult = array.string();
    stringResult1 = array.string();
    const stringResult2 = array.string();
    allowResult = stringResult2.allow(null);
    const stringResult3 = array.string();
    allowResult1 = stringResult3.allow(null);
    booleanResult = array.boolean();
    booleanResult1 = array.boolean();
    booleanResult2 = array.boolean();
    booleanResult3 = array.boolean();
    const objectResult = object(obj2);
    itemsResult = items(objectResult.required());
    return obj;
  },
};
let obj10 = {
  request: "Array",
  response(string) {
    let allowResult;
    let allowResult1;
    let booleanResult;
    let booleanResult1;
    let booleanResult2;
    let booleanResult3;
    let itemsResult;
    let obj4;
    let stringResult;
    let stringResult1;
    let stringResult2;
    let stringResult3;
    const obj = {
      session_id: stringResult.required(),
      channel_id: stringResult1.required(),
      capabilities: obj4.required(),
      participants: itemsResult.required(),
    };
    stringResult = string.string();
    stringResult1 = string.string();
    obj4 = VoiceCapabilities(string);
    const obj2 = {
      user_id: stringResult2.required(),
      username: stringResult3.required(),
      global_name: allowResult.required(),
      avatar: allowResult1.required(),
      mute: booleanResult.required(),
      deaf: booleanResult1.required(),
      self_mute: booleanResult2.required(),
      self_deaf: booleanResult3.required(),
    };
    const items = string.array().items;
    const object = string.object;
    string.array();
    stringResult2 = string.string();
    stringResult3 = string.string();
    const stringResult4 = string.string();
    allowResult = stringResult4.allow(null);
    const stringResult5 = string.string();
    allowResult1 = stringResult5.allow(null);
    booleanResult = string.boolean();
    booleanResult1 = string.boolean();
    booleanResult2 = string.boolean();
    booleanResult3 = string.boolean();
    const objectResult = object(obj2);
    itemsResult = items(objectResult.required());
    return obj;
  },
};
function Activity(arg0) {}
function User(object) {
  let allowResult;
  let allowResult1;
  let allowResult2;
  let allowResult3;
  let requiredResult;
  let requiredResult1;
  let requiredResult2;
  let requiredResult3;
  let stringResult1;
  let stringResult5;
  object = object.object;
  const obj = {
    id: requiredResult.description("User ID"),
    username: stringResult1.required(),
    global_name: allowResult.description("Global Discord name. Not unique."),
    discriminator: requiredResult1.description("Global name discriminator. Will be 0 if a unique username"),
    avatar: allowResult1.description("User Avatar ID"),
    flags: requiredResult2.description("Public user flags"),
    bot: requiredResult3.description("If a bot user."),
    avatar_decoration_data: allowResult2.description("Details about avatar decoration"),
    premium_type: allowResult3.description("Nitro premium type"),
  };
  const stringResult = object.string();
  requiredResult = stringResult.required();
  stringResult1 = object.string();
  const stringResult2 = object.string();
  allowResult = stringResult2.allow(null);
  const stringResult3 = object.string();
  requiredResult1 = stringResult3.required();
  const stringResult4 = object.string();
  allowResult1 = stringResult4.allow(null);
  const numberResult = object.number();
  requiredResult2 = numberResult.required();
  const boolResult = object.bool();
  requiredResult3 = boolResult.required();
  const object2 = object.object;
  const obj2 = { asset: stringResult5.allow(null), skuId: object.string(), expiresAt: object.number() };
  stringResult5 = object.string();
  const object1Result = object2(obj2);
  allowResult2 = object1Result.allow(null);
  const numberResult1 = object.number();
  allowResult3 = numberResult1.allow(null);
  const objectResult = object(obj);
  return objectResult.description("Discord User");
}
function ContextMenuIcon(arg0) {}
function ContextMenuItem(string, arg1) {
  let maxResult;
  let maxResult1;
  let maxResult2;
  let stringResult1;
  let stringResult3;
  let validResult;
  const obj = {
    id: maxResult.required(),
    type: stringResult1.valid("item", "checkbox", "radio"),
    label: maxResult1.required(),
    subtext: stringResult3.max(100),
    icon: null,
    color: null,
    disabled: null,
    checked: null,
    group: null,
  };
  const stringResult = string.string();
  maxResult = stringResult.max(64);
  stringResult1 = string.string();
  const stringResult2 = string.string();
  maxResult1 = stringResult2.max(100);
  stringResult3 = string.string();
  if (typeof ContextMenuIcon === "function") {
    const stringResult4 = string.string();
    const valid = stringResult4.valid;
    const items = [];
    HermesBuiltin.arraySpread(items, contextMenuIcons.CONTEXT_MENU_ICON_NAMES, 0);
    const applyResult = HermesBuiltin.apply(valid, items, stringResult4);
    obj.icon = applyResult.meta({ className: "ContextMenuIconName" });
    const stringResult5 = string.string();
    obj.color = stringResult5.valid("default", "brand", "danger", "premium", "success");
    obj.disabled = string.boolean();
    obj.checked = string.boolean();
    const stringResult6 = string.string();
    obj.group = stringResult6.max(64);
    const obj2 = { type: validResult.required() };
    const _try = string.alternatives().try;
    const object = string.object;
    string.alternatives();
    const stringResult7 = string.string();
    let tmp14 = obj;
    const object2 = string.object;
    validResult = stringResult7.valid("separator");
    const objectResult = object(obj2);
    if (arg1) {
      const obj3 = { items: maxResult2.items(ContextMenuItem(string, false)) };
      const merged = Object.assign(obj);
      const arrayResult = string.array();
      tmp14 = obj3;
      maxResult2 = arrayResult.max(30);
    }
    return _try(objectResult, object2(tmp14));
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function ActionRowComponent(arg0) {}
function ButtonComponent(arg0) {}
const obj11 = {
  request(string) {
    let itemsResult;
    let maxResult;
    let maxResult1;
    let maxResult10;
    let maxResult2;
    let maxResult3;
    let maxResult4;
    let maxResult5;
    let maxResult7;
    let maxResult8;
    let maxResult9;
    let object;
    let object1Result;
    let object2;
    let object2Result;
    let object7Result;
    let objectResult;
    let stringResult;
    let stringResult1;
    const obj = {
      session_id: stringResult.required(),
      listener: objectResult.required(),
      sources: itemsResult.required(),
    };
    stringResult = string.string();
    const obj2 = { position: object2Result.required(), forward: object1Result.required() };
    const point = { x: maxResult.required(), y: maxResult1.required(), z: maxResult2.required() };
    ({ object, object: object2 } = string);
    const numberResult = string.number();
    const minResult = numberResult.min(-100000);
    maxResult = minResult.max(100000);
    const numberResult1 = string.number();
    const minResult1 = numberResult1.min(-100000);
    maxResult1 = minResult1.max(100000);
    const numberResult2 = string.number();
    const minResult2 = numberResult2.min(-100000);
    maxResult2 = minResult2.max(100000);
    object2Result = object2(point);
    const point1 = { x: maxResult3.required(), y: maxResult4.required(), z: maxResult5.required() };
    const object3 = string.object;
    const numberResult3 = string.number();
    const minResult3 = numberResult3.min(-100000);
    maxResult3 = minResult3.max(100000);
    const numberResult4 = string.number();
    const minResult4 = numberResult4.min(-100000);
    maxResult4 = minResult4.max(100000);
    const numberResult5 = string.number();
    const minResult5 = numberResult5.min(-100000);
    maxResult5 = minResult5.max(100000);
    object1Result = object3(point1);
    objectResult = object(obj2);
    const arrayResult = string.array();
    const obj3 = {
      user_id: stringResult1.required(),
      position: object7Result.required(),
      gain: maxResult10.optional(),
    };
    const items = arrayResult.max(50).items;
    const object4 = string.object;
    arrayResult.max(50);
    stringResult1 = string.string();
    const point2 = { x: maxResult7.required(), y: maxResult8.required(), z: maxResult9.required() };
    const object5 = string.object;
    const numberResult6 = string.number();
    const minResult6 = numberResult6.min(-100000);
    maxResult7 = minResult6.max(100000);
    const numberResult7 = string.number();
    const minResult7 = numberResult7.min(-100000);
    maxResult8 = minResult7.max(100000);
    const numberResult8 = string.number();
    const minResult8 = numberResult8.min(-100000);
    maxResult9 = minResult8.max(100000);
    object7Result = object5(point2);
    const numberResult9 = string.number();
    const minResult9 = numberResult9.min(0);
    maxResult10 = minResult9.max(1);
    const object6Result = object4(obj3);
    itemsResult = items(object6Result.required());
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { success: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  },
};
const obj12 = {
  request: "Array",
  response(boolean) {
    let booleanResult;
    let booleanResult1;
    let validResult;
    const obj = {
      available: booleanResult.required(),
      transport: validResult.required(),
      requires_existing_watch: booleanResult1.required(),
    };
    booleanResult = boolean.boolean();
    const stringResult = boolean.string();
    validResult = stringResult.valid("rgba", "none");
    booleanResult1 = boolean.boolean();
    return obj;
  },
};
const obj13 = {
  request: "Array",
  response(boolean) {
    let booleanResult;
    let validResult;
    const obj = { available: booleanResult.required(), transport: validResult.required() };
    booleanResult = boolean.boolean();
    const stringResult = boolean.string();
    validResult = stringResult.valid("rgba", "none");
    return obj;
  },
};
const obj14 = {
  request(string) {
    let items;
    let maxResult1;
    let maxResult2;
    let maxResult3;
    let numberResult;
    let numberResult1;
    let obj2;
    let object;
    let object2;
    let stringResult;
    let stringResult1;
    let stringResult2;
    let stringResult3;
    let stringResult4;
    let validResult;
    let validResult2;
    const obj = {
      command: stringResult.required(),
      options: items(object(obj2)),
      content: stringResult3.max(2000),
      require_launch_channel: string.boolean(),
      preview_image: object2(size),
      components: null,
      pid: null,
    };
    stringResult = string.string();
    obj2 = { name: stringResult1.required(), value: stringResult2.required() };
    items = string.array().items;
    object = string.object;
    string.array();
    stringResult1 = string.string();
    stringResult2 = string.string();
    stringResult3 = string.string();
    size = { height: numberResult.required(), url: stringResult4.required(), width: numberResult1.required() };
    object2 = string.object;
    numberResult = string.number();
    stringResult4 = string.string();
    numberResult1 = string.number();
    string.array();
    if (typeof ActionRowComponent === "function") {
      const obj3 = { type: validResult.required(), components: null };
      const object3 = string.object;
      const numberResult2 = string.number();
      validResult = numberResult2.valid(1);
      const arrayResult4 = string.array();
      arrayResult4.max(5);
      if (typeof ButtonComponent === "function") {
        const object4 = string.object;
        const obj4 = {
          type: validResult2.required(),
          style: maxResult1.required(),
          label: maxResult2.description("Text that appears on the button"),
          custom_id: maxResult3.description("Developer-defined identifier for the button; max 100 characters"),
        };
        const numberResult3 = string.number();
        validResult2 = numberResult3.valid(2);
        const numberResult4 = string.number();
        const minResult = numberResult4.min(1);
        maxResult1 = minResult.max(5);
        const stringResult5 = string.string();
        maxResult2 = stringResult5.max(80);
        const stringResult6 = string.string();
        maxResult3 = stringResult6.max(100);
        obj3.components = tmp5(object4(obj4));
        obj.components = tmp3(object3(obj3));
        obj.pid = string.number();
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  response(boolean) {
    let booleanResult;
    const obj = { success: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  },
};
const obj15 = {
  request(string) {
    let maxResult;
    let stringResult;
    let stringResult2;
    const obj = { custom_id: stringResult.max(64), message: maxResult.required(), link_id: stringResult2.max(64) };
    stringResult = string.string();
    const stringResult1 = string.string();
    maxResult = stringResult1.max(1000);
    stringResult2 = string.string();
    return obj;
  },
  response(boolean) {
    let booleanResult;
    let booleanResult1;
    let booleanResult2;
    const obj = {
      success: booleanResult.required(),
      didCopyLink: booleanResult1.required(),
      didSendMessage: booleanResult2.required(),
    };
    booleanResult = boolean.boolean();
    booleanResult1 = boolean.boolean();
    booleanResult2 = boolean.boolean();
    return obj;
  },
};
const obj16 = {
  request(string) {
    let items;
    let maxResult;
    let maxResult2;
    let maxResult3;
    let obj2;
    let object;
    let stringResult1;
    let stringResult2;
    let stringResult3;
    let stringResult4;
    let stringResult8;
    let stringResult9;
    let validResult;
    const obj = {
      content: maxResult.required(),
      link: stringResult1.max(1024),
      custom_id: stringResult2.max(64),
      link_id: stringResult3.max(64),
      image_url: stringResult4.max(1024),
      attachments: items(object(obj2)),
      preview_title: stringResult8.max(100),
      preview_subtitle: stringResult9.max(100),
    };
    const stringResult = string.string();
    maxResult = stringResult.max(1000);
    stringResult1 = string.string();
    stringResult2 = string.string();
    stringResult3 = string.string();
    stringResult4 = string.string();
    const arrayResult = string.array();
    obj2 = { data: maxResult2.required(), filename: maxResult3.required(), content_type: validResult.required() };
    items = arrayResult.max(10).items;
    object = string.object;
    arrayResult.max(10);
    const stringResult5 = string.string();
    maxResult2 = stringResult5.max(14000000);
    const stringResult6 = string.string();
    maxResult3 = stringResult6.max(64);
    const stringResult7 = string.string();
    validResult = stringResult7.valid("image/png", "image/jpeg", "image/gif", "image/webp", "video/mp4", "video/webm");
    stringResult8 = string.string();
    stringResult9 = string.string();
    return obj;
  },
  response(boolean) {
    let booleanResult;
    let booleanResult1;
    let booleanResult2;
    const obj = {
      success: booleanResult.required(),
      didCopyLink: booleanResult1.required(),
      didSendMessage: booleanResult2.required(),
    };
    booleanResult = boolean.boolean();
    booleanResult1 = boolean.boolean();
    booleanResult2 = boolean.boolean();
    return obj;
  },
};
const obj17 = {
  request(string) {
    let maxResult;
    let maxResult1;
    let maxResult2;
    let stringResult1;
    let stringResult2;
    let stringResult3;
    let validResult;
    const point = {
      type: validResult.required(),
      id: stringResult1.max(64),
      channel_id: stringResult2.max(64),
      url: stringResult3.max(1024),
      items: maxResult.items(ContextMenuItem(string, true)),
      x: maxResult1.required(),
      y: maxResult2.required(),
    };
    const stringResult = string.string();
    validResult = stringResult.valid("user", "channel", "message", "image", "custom");
    stringResult1 = string.string();
    stringResult2 = string.string();
    stringResult3 = string.string();
    const arrayResult = string.array();
    const minResult = arrayResult.min(1);
    maxResult = minResult.max(30);
    const numberResult = string.number();
    const minResult1 = numberResult.min(0);
    maxResult1 = minResult1.max(65535);
    const numberResult1 = string.number();
    const minResult2 = numberResult1.min(0);
    maxResult2 = minResult2.max(65535);
    return point;
  },
  response(boolean) {
    let booleanResult;
    let stringResult;
    const obj = { opened: booleanResult.required(), selected_id: stringResult.allow(null) };
    booleanResult = boolean.boolean();
    stringResult = boolean.string();
    return obj;
  },
};
const obj18 = {
  request(string) {
    let maxResult;
    let maxResult1;
    let maxResult2;
    const point = { user_id: maxResult.required(), x: maxResult1.required(), y: maxResult2.required() };
    const stringResult = string.string();
    maxResult = stringResult.max(64);
    const numberResult = string.number();
    const minResult = numberResult.min(0);
    maxResult1 = minResult.max(65535);
    const numberResult1 = string.number();
    const minResult1 = numberResult1.min(0);
    maxResult2 = minResult1.max(65535);
    return point;
  },
  response(boolean) {
    let booleanResult;
    const obj = { opened: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  },
};
const obj19 = {
  request(array) {
    let maxResult;
    let maxResult1;
    let minResult;
    let minResult1;
    let minResult3;
    let stringResult1;
    let stringResult2;
    const obj = { items: maxResult1.required(), starting_index: minResult3.max(49) };
    size = {
      url: maxResult.required(),
      type: stringResult1.valid("image", "video"),
      width: minResult.max(16384),
      height: minResult1.max(16384),
      alt: stringResult2.max(1024),
    };
    const items = array.array().items;
    const object = array.object;
    array.array();
    const stringResult = array.string();
    maxResult = stringResult.max(1024);
    stringResult1 = array.string();
    const numberResult = array.number();
    minResult = numberResult.min(1);
    const numberResult1 = array.number();
    minResult1 = numberResult1.min(1);
    stringResult2 = array.string();
    const itemsResult = items(object(size));
    const minResult2 = itemsResult.min(1);
    maxResult1 = minResult2.max(50);
    const numberResult2 = array.number();
    minResult3 = numberResult2.min(0);
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { opened: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  },
};
const obj20 = {
  request(string) {
    let maxResult;
    const obj = { user_id: maxResult.required() };
    const stringResult = string.string();
    maxResult = stringResult.max(64);
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { opened: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  },
};
const obj21 = {
  request(string) {
    let maxResult;
    let maxResult1;
    let maxResult2;
    let stringResult1;
    let stringResult2;
    let stringResult3;
    const point = {
      text: maxResult.required(),
      shortcut: stringResult1.max(32),
      x: maxResult1.required(),
      y: maxResult2.required(),
      position: stringResult2.valid("top", "bottom", "left", "right"),
      align: stringResult3.valid("top", "center", "bottom", "left", "right"),
    };
    const stringResult = string.string();
    maxResult = stringResult.max(200);
    stringResult1 = string.string();
    const numberResult = string.number();
    const minResult = numberResult.min(0);
    maxResult1 = minResult.max(65535);
    const numberResult1 = string.number();
    const minResult1 = numberResult1.min(0);
    maxResult2 = minResult1.max(65535);
    stringResult2 = string.string();
    stringResult3 = string.string();
    return point;
  },
  response(boolean) {
    let booleanResult;
    const obj = { shown: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  },
};
const obj22 = {
  request: "Array",
  response(boolean) {
    let booleanResult;
    const obj = { hidden: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  },
};
const obj23 = {
  request(string) {
    let maxResult;
    let validResult;
    const obj = { message: maxResult.required(), type: validResult.required() };
    const stringResult = string.string();
    maxResult = stringResult.max(200);
    const stringResult1 = string.string();
    validResult = stringResult1.valid("message", "success", "failure");
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { shown: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  },
};
const obj24 = {
  request(string) {
    let maxResult;
    let maxResult1;
    let stringResult2;
    let stringResult4;
    let validResult;
    const obj = {
      type: validResult.required(),
      title: maxResult.required(),
      body: stringResult2.max(1000),
      confirm_text: maxResult1.required(),
      cancel_text: stringResult4.max(32),
    };
    const stringResult = string.string();
    validResult = stringResult.valid("alert", "confirm");
    const stringResult1 = string.string();
    maxResult = stringResult1.max(100);
    stringResult2 = string.string();
    const stringResult3 = string.string();
    maxResult1 = stringResult3.max(32);
    stringResult4 = string.string();
    return obj;
  },
  response(boolean) {
    const obj = { confirmed: boolean.boolean(), acknowledged: boolean.boolean() };
    return obj;
  },
};
const obj25 = {
  request: "Array",
  response(array) {
    let allowResult;
    let allowResult1;
    let allowResult2;
    let boolResult1;
    let itemsResult1;
    let itemsResult2;
    let lengthResult;
    let numberResult;
    let numberResult1;
    let numberResult2;
    let numberResult3;
    let numberResult4;
    let numberResult5;
    let numberResult6;
    let numberResult7;
    let obj4;
    let object11Result;
    let object12Result;
    let object13Result;
    let object14Result;
    let objectResult;
    let optionalResult;
    let stringResult;
    let stringResult1;
    let stringResult11;
    let stringResult12;
    let stringResult13;
    let stringResult14;
    let stringResult15;
    let stringResult16;
    let stringResult17;
    let stringResult18;
    let stringResult19;
    let stringResult2;
    let stringResult20;
    let stringResult21;
    let stringResult22;
    let stringResult4;
    let stringResult5;
    let stringResult6;
    let stringResult7;
    let stringResult8;
    let stringResult9;
    const arrayResult = array.array();
    const obj = { type: numberResult.required(), user: obj4.required(), presence: null };
    const items = arrayResult.required().items;
    const object = array.object;
    arrayResult.required();
    numberResult = array.number();
    obj4 = User(array);
    const obj2 = { status: stringResult.required(), activity: null };
    const object2 = array.object;
    stringResult = array.string();
    if (typeof Activity === "function") {
      const obj3 = { relationships: items(object(obj)) };
      const object3 = array.object;
      const obj5 = {
        session_id: stringResult1.optional(),
        type: numberResult1.optional(),
        name: stringResult2.required(),
        url: allowResult.optional(),
        application_id: stringResult4.optional(),
        status_display_type: numberResult2.optional(),
        state: stringResult5.optional(),
        state_url: stringResult6.optional(),
        details: stringResult7.optional(),
        details_url: stringResult8.optional(),
        emoji: allowResult2.optional(),
        assets: object11Result.optional(),
        timestamps: object12Result.optional(),
        party: object13Result.optional(),
        secrets: object14Result.optional(),
        sync_id: stringResult20.optional(),
        created_at: numberResult6.optional(),
        instance: boolResult1.optional(),
        flags: numberResult7.optional(),
        metadata: objectResult.optional(),
        platform: stringResult21.optional(),
        supported_platforms: itemsResult1.optional(),
        buttons: itemsResult2.optional(),
        hangStatus: stringResult22.optional(),
      };
      stringResult1 = array.string();
      numberResult1 = array.number();
      stringResult2 = array.string();
      const stringResult3 = array.string();
      allowResult = stringResult3.allow(null);
      stringResult4 = array.string();
      numberResult2 = array.number();
      stringResult5 = array.string();
      stringResult6 = array.string();
      stringResult7 = array.string();
      stringResult8 = array.string();
      const object4 = array.object;
      const obj6 = {
        name: stringResult9.required(),
        id: allowResult1.optional(),
        animated: optionalResult.allow(null),
      };
      stringResult9 = array.string();
      const stringResult10 = array.string();
      allowResult1 = stringResult10.allow(null);
      const boolResult = array.bool();
      optionalResult = boolResult.optional();
      const object10Result = object4(obj6);
      allowResult2 = object10Result.allow(null);
      const object5 = array.object;
      const obj7 = {
        large_image: stringResult11.optional(),
        large_text: stringResult12.optional(),
        large_url: stringResult13.optional(),
        small_image: stringResult14.optional(),
        small_text: stringResult15.optional(),
        small_url: stringResult16.optional(),
      };
      stringResult11 = array.string();
      stringResult12 = array.string();
      stringResult13 = array.string();
      stringResult14 = array.string();
      stringResult15 = array.string();
      stringResult16 = array.string();
      object11Result = object5(obj7);
      const object6 = array.object;
      const obj8 = { start: numberResult3.optional(), end: numberResult4.optional() };
      numberResult3 = array.number();
      numberResult4 = array.number();
      object12Result = object6(obj8);
      const object7 = array.object;
      const obj9 = { id: stringResult17.optional(), size: lengthResult.optional(), privacy: numberResult5.optional() };
      stringResult17 = array.string();
      const arrayResult4 = array.array();
      const itemsResult = arrayResult4.items(array.number());
      lengthResult = itemsResult.length(2);
      numberResult5 = array.number();
      object13Result = object7(obj9);
      const object8 = array.object;
      const obj10 = { match: stringResult18.optional(), join: stringResult19.optional() };
      stringResult18 = array.string();
      stringResult19 = array.string();
      object14Result = object8(obj10);
      stringResult20 = array.string();
      numberResult6 = array.number();
      boolResult1 = array.bool();
      numberResult7 = array.number();
      objectResult = array.object();
      stringResult21 = array.string();
      const arrayResult5 = array.array();
      itemsResult1 = arrayResult5.items(array.string());
      const arrayResult6 = array.array();
      itemsResult2 = arrayResult6.items(array.string());
      stringResult22 = array.string();
      const object9Result = object3(obj5);
      obj2.activity = object9Result.allow(null);
      obj.presence = object2(obj2);
      return obj3;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
};
const obj26 = {
  request(string) {
    let minResult;
    let stringResult;
    const obj = { user_id: stringResult.required(), content: minResult.max(1024) };
    stringResult = string.string();
    const stringResult1 = string.string();
    minResult = stringResult1.min(0);
    return obj;
  },
  response: "r",
};
const obj27 = {
  request(string) {
    let maxResult;
    const obj = { id: maxResult.required() };
    const stringResult = string.string();
    maxResult = stringResult.max(64);
    return obj;
  },
  response(object) {
    const obj = User(object);
    return obj.allow(null);
  },
};
const obj28 = {
  request(string) {
    let stringResult;
    const obj = { quest_id: stringResult.required() };
    stringResult = string.string();
    return obj;
  },
  response(string) {
    let allowResult;
    let booleanResult;
    let stringResult;
    const obj = {
      quest_id: stringResult.required(),
      is_enrolled: booleanResult.required(),
      enrolled_at: allowResult.optional(),
    };
    stringResult = string.string();
    booleanResult = string.boolean();
    const stringResult1 = string.string();
    allowResult = stringResult1.allow(null);
    return obj;
  },
};
const obj29 = {
  request(string) {
    let stringResult;
    const obj = { quest_id: stringResult.required() };
    stringResult = string.string();
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { success: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  },
};
const obj30 = {
  request: "Array",
  response(string) {
    let allowResult;
    let allowResult1;
    let stringResult;
    let stringResult3;
    const obj = {
      quest_id: stringResult.required(),
      enrolled_at: allowResult.optional(),
      completed_at: allowResult1.optional(),
      external_cta_url: stringResult3.required(),
    };
    stringResult = string.string();
    const stringResult1 = string.string();
    allowResult = stringResult1.allow(null);
    const stringResult2 = string.string();
    allowResult1 = stringResult2.allow(null);
    stringResult3 = string.string();
    return obj;
  },
};
const obj31 = {
  request: "Array",
  response(string) {
    let stringResult;
    const obj = { ticket: stringResult.required() };
    stringResult = string.string();
    return obj;
  },
};
const obj32 = {
  request(boolean) {
    let booleanResult;
    const obj = { enabled: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  },
  response(boolean) {
    let booleanResult;
    const obj = { enabled: booleanResult.required() };
    booleanResult = boolean.boolean();
    return obj;
  },
};
let size = size_mod;
const result = size.fileFinishedImporting("../discord_common/js/packages/rpc-schema/definitions.tsx");

export const RPCCommandSchemas = {
  [helpers.RPCCommand.INITIATE_IMAGE_UPLOAD]: obj3,
  [helpers.RPCCommand.OPEN_SHARE_MOMENT_DIALOG]: obj4,
  [helpers.RPCCommand.AUTHENTICATE]: obj5,
  [helpers.RPCCommand.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: obj6,
  [helpers.RPCCommand.RELAUNCH_FRAME]: obj7,
  [helpers.RPCCommand.GET_VOICE_CAPABILITIES]: obj8,
  [helpers.RPCCommand.GET_VOICE_SESSION_PARTICIPANTS]: obj9,
  [helpers.RPCCommand.START_VOICE_SESSION]: obj10,
  [helpers.RPCCommand.UPDATE_VOICE_SPATIAL]: obj11,
  [helpers.RPCCommand.ENABLE_VOICE_SPATIAL]: obj,
  [helpers.RPCCommand.DISABLE_VOICE_SPATIAL]: obj,
  [helpers.RPCCommand.STOP_VOICE_SESSION]: obj,
  [helpers.RPCCommand.GET_APPLICATION_STREAMING_VIEW_CAPABILITIES]: obj12,
  [helpers.RPCCommand.START_APPLICATION_STREAMING_VIEW]: obj2,
  [helpers.RPCCommand.SUSPEND_APPLICATION_STREAMING_VIEW]: obj,
  [helpers.RPCCommand.RESUME_APPLICATION_STREAMING_VIEW]: obj,
  [helpers.RPCCommand.WATCH_APPLICATION_STREAMING_VIEW_ON_DISCORD]: obj,
  [helpers.RPCCommand.STOP_APPLICATION_STREAMING_VIEW]: obj,
  [helpers.RPCCommand.GET_CAMERA_VIEW_CAPABILITIES]: obj13,
  [helpers.RPCCommand.START_CAMERA_VIEW]: obj2,
  [helpers.RPCCommand.SUSPEND_CAMERA_VIEW]: obj,
  [helpers.RPCCommand.RESUME_CAMERA_VIEW]: obj,
  [helpers.RPCCommand.STOP_CAMERA_VIEW]: obj,
  [helpers.RPCCommand.SHARE_INTERACTION]: obj14,
  [helpers.RPCCommand.SHARE_LINK]: obj15,
  [helpers.RPCCommand.SHARE_CONTENT]: obj16,
  [helpers.RPCCommand.OPEN_CONTEXT_MENU]: obj17,
  [helpers.RPCCommand.OPEN_USER_POPOUT]: obj18,
  [helpers.RPCCommand.OPEN_MEDIA_VIEWER]: obj19,
  [helpers.RPCCommand.OPEN_USER_PROFILE]: obj20,
  [helpers.RPCCommand.SHOW_TOOLTIP]: obj21,
  [helpers.RPCCommand.HIDE_TOOLTIP]: obj22,
  [helpers.RPCCommand.SHOW_TOAST]: obj23,
  [helpers.RPCCommand.SHOW_CONFIRM_MODAL]: obj24,
  [helpers.RPCCommand.GET_RELATIONSHIPS]: obj25,
  [helpers.RPCCommand.INVITE_USER_EMBEDDED]: obj26,
  [helpers.RPCCommand.GET_USER]: obj27,
  [helpers.RPCCommand.GET_QUEST_ENROLLMENT_STATUS]: obj28,
  [helpers.RPCCommand.QUEST_START_TIMER]: obj29,
  [helpers.RPCCommand.GET_QUEST]: obj30,
  [helpers.RPCCommand.REQUEST_PROXY_TICKET_REFRESH]: obj31,
  [helpers.RPCCommand.SET_PREFERS_PICTURE_IN_PICTURE_ON_NAVIGATE_AWAY]: obj32,
};
