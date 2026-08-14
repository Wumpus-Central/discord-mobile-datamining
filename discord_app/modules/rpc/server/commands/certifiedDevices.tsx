// discord_app/modules/rpc/server/commands/certifiedDevices.tsx
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import ME from "ME";
import { DeviceTypes } from "DesktopSources";
import { createRpcJoiSchemaObject } from "../../helpers/createRpcJoiSchemaObject.tsx";
import { prototype } from "../../RPCError.tsx";

let RPCCommands;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let c3;
({ RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = RPC_SCOPE_CONFIG);
({ RPCErrors: c3, RPCCommands } = ME);
let obj = {};
obj = { scope: null, validation: null, handler: null };
obj = {};
let items = [require("set").OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj[RPC_SCOPE_CONFIG.ANY] = items;
obj[0] = obj;
obj[1] = function validation(array) {
  let obj = createRpcJoiSchemaObject(array);
  obj = { devices: null };
  let arrayResult = array.array();
  const requiredResult = obj.required();
  obj = { type: null, id: null, vendor: null, model: null, related: null, echo_cancellation: null, noise_suppression: null, automatic_gain_control: null, hardware_mute: null };
  const obj5 = createRpcJoiSchemaObject(array);
  const stringResult = array.string();
  const items = [, , ];
  ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1], VIDEO_INPUT: arr[2] } = DeviceTypes);
  obj[0] = array.string().required().valid(items);
  const requiredResult1 = array.string().required();
  const stringResult1 = array.string();
  obj[1] = array.string().required().min(1);
  const requiredResult2 = array.string().required();
  const obj11 = createRpcJoiSchemaObject(array);
  const obj1 = { name: null, url: null };
  const requiredResult3 = createRpcJoiSchemaObject(array).required();
  obj1[0] = array.string().min(1);
  const stringResult2 = array.string();
  obj1[1] = array.string().min(1);
  obj[2] = requiredResult3.keys(obj1);
  const stringResult3 = array.string();
  const obj16 = createRpcJoiSchemaObject(array);
  const obj2 = { name: null, url: null };
  const requiredResult4 = createRpcJoiSchemaObject(array).required();
  obj2[0] = array.string().min(1);
  const stringResult4 = array.string();
  obj2[1] = array.string().min(1);
  obj[3] = requiredResult4.keys(obj2);
  arrayResult = array.array();
  const stringResult5 = array.string();
  obj[4] = arrayResult.items(array.string().min(1));
  obj[5] = array.boolean();
  obj[6] = array.boolean();
  obj[7] = array.boolean();
  obj[8] = array.boolean();
  obj[0] = arrayResult.items(obj5.keys(obj));
  return requiredResult.keys(obj);
};
obj[2] = function handler(socket) {
  socket = socket.socket;
  const devices = socket.args.devices;
  if (null == socket.application.id) {
    let obj = { errorCode: null };
    obj[0] = constants.INVALID_COMMAND;
    const tmp10 = new prototype(obj, "No application.");
    throw tmp10;
  } else {
    obj = devices(13808);
    obj.setCertifiedDevices(socket.application.id, devices.map((type) => {
      const related = type.related;
      return {
        type: type.type,
        id: type.id,
        vendor: type.vendor,
        model: type.model,
        related: related.filter((arg0) => {
          let closure_0 = arg0;
          return closure_0.some((id) => id.id === closure_0);
        }),
        echoCancellation: type.echo_cancellation,
        noiseSuppression: type.noise_suppression,
        automaticGainControl: type.automatic_gain_control,
        hardwareMute: type.hardware_mute
      };
    }));
  }
};
obj[RPCCommands.SET_CERTIFIED_DEVICES] = obj;
const result = require("DesktopSources").fileFinishedImporting("modules/rpc/server/commands/certifiedDevices.tsx");

export default obj;