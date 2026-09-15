// === Module 14567: certifiedDevices ===

// Module 14567 (certifiedDevices)
import Constants2 from "Constants" /* 4664 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8460 */;
import RPCErrorDefault from "RPCError" /* 9686 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9689 */;
import CertifiedDeviceActionCreators from "CertifiedDeviceActionCreators" /* 14568 */;
import Constants_mod from "Constants" /* 4544 */;
import Constants_mod from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let Constants = Constants_mod;
({ RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
let Constants = Constants_mod;
({ RPCErrors: c3, RPCCommands } = Constants);
const DeviceTypes = Constants2.DeviceTypes;
let obj = {};
let obj2 = { scope: null, validation: null, handler: null };
let obj3 = {};
let items = [OAuth2Scopes.OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj3[RPC_SCOPE_CONFIG.ANY] = items;
obj2.scope = obj3;
obj2.validation = function validation(array) {
  const obj = createRpcJoiSchemaObjectDefault(array);
  const obj2 = { devices: null };
  const requiredResult = createRpcJoiSchemaObjectDefault(array).required();
  const arrayResult = array.array();
  const obj3 = { type: null, id: null, vendor: null, model: null, related: null, echo_cancellation: null, noise_suppression: null, automatic_gain_control: null, hardware_mute: null };
  const obj5 = createRpcJoiSchemaObjectDefault(array);
  const stringResult = array.string();
  const items = [, , ];
  ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1], VIDEO_INPUT: arr[2] } = DeviceTypes);
  obj3.type = array.string().required().valid(items);
  const requiredResult1 = array.string().required();
  const stringResult1 = array.string();
  obj3.id = array.string().required().min(1);
  const requiredResult2 = array.string().required();
  const obj11 = createRpcJoiSchemaObjectDefault(array);
  const obj4 = { name: null, url: null };
  const requiredResult3 = createRpcJoiSchemaObjectDefault(array).required();
  obj4.name = array.string().min(1);
  const stringResult2 = array.string();
  obj4.url = array.string().min(1);
  obj3.vendor = requiredResult3.keys(obj4);
  const stringResult3 = array.string();
  const obj16 = createRpcJoiSchemaObjectDefault(array);
  const obj6 = { name: null, url: null };
  const requiredResult4 = createRpcJoiSchemaObjectDefault(array).required();
  obj6.name = array.string().min(1);
  const stringResult4 = array.string();
  obj6.url = array.string().min(1);
  obj3.model = requiredResult4.keys(obj6);
  const stringResult5 = array.string();
  const arrayResult2 = array.array();
  obj3.related = arrayResult2.items(array.string().min(1));
  obj3.echo_cancellation = array.boolean();
  obj3.noise_suppression = array.boolean();
  obj3.automatic_gain_control = array.boolean();
  obj3.hardware_mute = array.boolean();
  obj2.devices = arrayResult.items(obj5.keys(obj3));
  return requiredResult.keys(obj2);
};
obj2.handler = function handler(socket) {
  socket = socket.socket;
  const devices = socket.args.devices;
  if (null == socket.application.id) {
    const obj2 = { errorCode: constants.INVALID_COMMAND };
    const tmp10 = new RPCErrorDefault(obj2, "No application.");
    throw tmp10;
  } else {
    CertifiedDeviceActionCreators.setCertifiedDevices(socket.application.id, devices.map((type) => {
      const obj = { type: type.type, id: type.id, vendor: type.vendor, model: type.model, related: null, echoCancellation: type.echo_cancellation, noiseSuppression: type.noise_suppression, automaticGainControl: type.automatic_gain_control, hardwareMute: type.hardware_mute };
      const related = type.related;
      obj.related = related.filter((item) => {
        closure_0 = item;
        return devices.some((id) => id.id === closure_0);
      });
      return obj;
    }));
  }
};
obj[RPCCommands.SET_CERTIFIED_DEVICES] = obj2;
const result = size.fileFinishedImporting("modules/rpc/server/commands/certifiedDevices.tsx");

export default obj;