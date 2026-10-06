// === Module 14352: setOrientationLockState ===

// Module 14352 (setOrientationLockState)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants2 from "Constants" /* 2011 */;
import Constants3 from "Constants" /* 5323 */;
import RPCErrorDefault from "RPCError" /* 9059 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9062 */;
import FramesStore from "FramesStore" /* 9000 */;
import Constants from "Constants" /* 1096 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants3.TransportTypes;
const OrientationLockState = Constants2.OrientationLockState;
const RPCErrors = Constants.RPCErrors;
let obj = {
  validation(number) {
    let allowResult;
    let allowResult1;
    let validResult;
    const obj = createRpcJoiSchemaObjectDefault(number);
    const obj2 = { lock_state: validResult.required(), picture_in_picture_lock_state: allowResult.optional(), grid_lock_state: allowResult1.optional() };
    const keys = obj.required().keys;
    obj.required();
    const numberResult = number.number();
    validResult = numberResult.valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE);
    const numberResult1 = number.number();
    const validResult3 = numberResult1.valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE);
    allowResult = validResult3.allow(null);
    const numberResult2 = number.number();
    const validResult4 = numberResult2.valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE);
    allowResult1 = validResult4.allow(null);
    return keys(obj2);
  },
  handler(arg0) {
    let args;
    let lock_state;
    let picture_in_picture_lock_state;
    let socket;
    ({ socket, args } = arg0);
    ({ lock_state, picture_in_picture_lock_state } = args);
    if (socket.source.type !== TransportTypes.POST_MESSAGE) {
      const _HermesInternal = HermesInternal;
      const self3 = this;
      const self4 = this;
      const obj2 = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp16 = RPCErrorDefault;
      const tmp162 = new tmp16(obj2, "command not available from \"" + socket.source.type + "\" transport");
      throw tmp162;
    } else {
      const id = socket.application.id;
      if (null == id) {
        const self = this;
        const self2 = this;
        const obj4 = { errorCode: RPCErrors.INVALID_COMMAND };
        const tmp12 = new RPCErrorDefault(obj4, "No application.");
        throw tmp12;
      } else {
        const frameByIframeId = FramesStore.getFrameByIframeId(socket.source.iframeId);
        if (null != frameByIframeId) {
          const obj5 = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId: frameByIframeId.id, lockState: lock_state, pictureInPictureLockState: picture_in_picture_lock_state };
          const obj = DispatcherDefault;
          obj.dispatch(obj5);
        }
        const obj6 = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId: id, lockState: lock_state, pictureInPictureLockState: picture_in_picture_lock_state, gridLockState: tmp };
        const obj3 = DispatcherDefault;
        obj3.dispatch(obj6);
      }
    }
  }
};
const result = size.fileFinishedImporting("modules/rpc/server/commands/setOrientationLockState.tsx");

export default { [Constants.RPCCommands.SET_ORIENTATION_LOCK_STATE]: obj };