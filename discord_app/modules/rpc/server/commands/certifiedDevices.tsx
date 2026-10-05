// === Module 14309: certifiedDevices ===

// Module 14309 (certifiedDevices)
import Constants2 from "Constants" /* 4915 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8015 */;
import RPCErrorDefault from "RPCError" /* 9026 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9029 */;
import CertifiedDeviceActionCreators from "CertifiedDeviceActionCreators" /* 14310 */;
import Constants_mod from "Constants" /* 5316 */;
import Constants_mod2 from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let c3;
let obj3;
let Constants = Constants_mod2;
({ RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = Constants_mod2;
({ RPCErrors: c3, RPCCommands } = Constants);
const DeviceTypes = Constants2.DeviceTypes;
let obj = {};
let obj2 = {
  scope: obj3,
  validation(array) {
    let items;
    let items1;
    let items2;
    let keys2;
    let keys3;
    let keys4;
    let obj3;
    let obj4;
    let obj5;
    let requiredResult1;
    let requiredResult2;
    let stringResult2;
    let stringResult3;
    let stringResult4;
    let stringResult5;
    let stringResult6;
    const obj = createRpcJoiSchemaObjectDefault(array);
    const obj2 = { devices: items(keys2(obj3)) };
    const keys = obj.required().keys;
    obj.required();
    items = array.array().items;
    array.array();
    obj3 = { type: requiredResult1.valid(items1), id: requiredResult2.min(1), vendor: keys3(obj4), model: keys4(obj5), related: items2(stringResult6.min(1)), echo_cancellation: array.boolean(), noise_suppression: array.boolean(), automatic_gain_control: array.boolean(), hardware_mute: array.boolean() };
    keys2 = createRpcJoiSchemaObjectDefault(array).keys;
    createRpcJoiSchemaObjectDefault(array);
    items1 = [, , ];
    ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1], VIDEO_INPUT: arr[2] } = DeviceTypes);
    const stringResult = array.string();
    requiredResult1 = stringResult.required();
    const stringResult1 = array.string();
    requiredResult2 = stringResult1.required();
    const obj8 = createRpcJoiSchemaObjectDefault(array);
    obj4 = { name: stringResult2.min(1), url: stringResult3.min(1) };
    keys3 = obj8.required().keys;
    obj8.required();
    stringResult2 = array.string();
    stringResult3 = array.string();
    const obj12 = createRpcJoiSchemaObjectDefault(array);
    obj5 = { name: stringResult4.min(1), url: stringResult5.min(1) };
    keys4 = obj12.required().keys;
    obj12.required();
    stringResult4 = array.string();
    stringResult5 = array.string();
    items2 = array.array().items;
    array.array();
    stringResult6 = array.string();
    return keys(obj2);
  },
  handler(socket) {
    socket = socket.socket;
    const devices = socket.args.devices;
    if (null == socket.application.id) {
      const self = this;
      const self2 = this;
      const obj2 = { errorCode: constants.INVALID_COMMAND };
      const tmp8 = new RPCErrorDefault(obj2, "No application.");
      throw tmp8;
    } else {
      let obj = CertifiedDeviceActionCreators;
      obj.setCertifiedDevices(socket.application.id, devices.map((type) => {
        let related;
        const obj = {
          type: type.type,
          id: type.id,
          vendor: type.vendor,
          model: type.model,
          related: related.filter((item) => {
            let closure_0 = item;
            return devices.some((id) => id.id === closure_0);
          }),
          echoCancellation: type.echo_cancellation,
          noiseSuppression: type.noise_suppression,
          automaticGainControl: type.automatic_gain_control,
          hardwareMute: type.hardware_mute
        };
        related = type.related;
        return obj;
      }));
    }
  }
};
obj3 = {};
const SET_CERTIFIED_DEVICES = RPCCommands.SET_CERTIFIED_DEVICES;
const ANY = RPC_SCOPE_CONFIG.ANY;
let items = [OAuth2Scopes.OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj3[ANY] = items;
obj[SET_CERTIFIED_DEVICES] = obj2;
const result = size.fileFinishedImporting("modules/rpc/server/commands/certifiedDevices.tsx");

export default obj;