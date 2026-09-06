// discord_app/modules/rpc/server/commands/certifiedDevices.tsx
import Constants2 from "../../../../../discord_common/js/packages/media-engine/Constants.tsx";
import OAuth2Scopes from "../../../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import RPCErrorDefault from "../../RPCError.tsx";
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import CertifiedDeviceActionCreators from "../../../../actions/CertifiedDeviceActionCreators.tsx";
import Constants from "../../Constants.tsx";
import Constants from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
({ RPCErrors: c3, RPCCommands } = Constants);
const DeviceTypes = Constants2.DeviceTypes;
let obj = {};
obj = { scope: null, validation: null, handler: null };
obj = {};
let items = [OAuth2Scopes.OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj[RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.validation = function validation(array) {
  createRpcJoiSchemaObjectDefault(array);
  let obj = { devices: null };
  array.array();
  const requiredResult = obj.required();
  obj = {
    type: null,
    id: null,
    vendor: null,
    model: null,
    related: null,
    echo_cancellation: null,
    noise_suppression: null,
    automatic_gain_control: null,
    hardware_mute: null,
  };
  const obj5 = createRpcJoiSchemaObjectDefault(array);
  const stringResult = array.string();
  const items = [, ,];
  ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1], VIDEO_INPUT: arr[2] } = DeviceTypes);
  obj.type = array.string().required().valid(items);
  const requiredResult1 = array.string().required();
  const stringResult1 = array.string();
  obj.id = array.string().required().min(1);
  const requiredResult2 = array.string().required();
  const obj11 = createRpcJoiSchemaObjectDefault(array);
  const obj1 = { name: null, url: null };
  const requiredResult3 = createRpcJoiSchemaObjectDefault(array).required();
  obj1.name = array.string().min(1);
  const stringResult2 = array.string();
  obj1.url = array.string().min(1);
  obj.vendor = requiredResult3.keys(obj1);
  const stringResult3 = array.string();
  const obj16 = createRpcJoiSchemaObjectDefault(array);
  const obj2 = { name: null, url: null };
  const requiredResult4 = createRpcJoiSchemaObjectDefault(array).required();
  obj2.name = array.string().min(1);
  const stringResult4 = array.string();
  obj2.url = array.string().min(1);
  obj.model = requiredResult4.keys(obj2);
  const arrayResult = array.array();
  const stringResult5 = array.string();
  obj.related = arrayResult.items(array.string().min(1));
  obj.echo_cancellation = array.boolean();
  obj.noise_suppression = array.boolean();
  obj.automatic_gain_control = array.boolean();
  obj.hardware_mute = array.boolean();
  obj.devices = arrayResult.items(obj5.keys(obj));
  return requiredResult.keys(obj);
};
obj.handler = function handler(socket) {
  socket = socket.socket;
  const devices = socket.args.devices;
  if (null == socket.application.id) {
    let obj = { errorCode: constants.INVALID_COMMAND };
    const tmp10 = new RPCErrorDefault(obj, "No application.");
    throw tmp10;
  } else {
    obj = CertifiedDeviceActionCreators;
    obj.setCertifiedDevices(
      socket.application.id,
      devices.map((type) => {
        const obj = {
          type: type.type,
          id: type.id,
          vendor: type.vendor,
          model: type.model,
          related: null,
          echoCancellation: type.echo_cancellation,
          noiseSuppression: type.noise_suppression,
          automaticGainControl: type.automatic_gain_control,
          hardwareMute: type.hardware_mute,
        };
        const related = type.related;
        obj.related = related.filter((item) => {
          closure_0 = item;
          return devices.some((id) => id.id === closure_0);
        });
        return obj;
      }),
    );
  }
};
obj[RPCCommands.SET_CERTIFIED_DEVICES] = obj;
const result = size.fileFinishedImporting("modules/rpc/server/commands/certifiedDevices.tsx");

export default obj;
