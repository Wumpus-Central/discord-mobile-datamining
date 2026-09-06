// === Module 14493: setOrientationLockState ===

// Module 14493 (setOrientationLockState)
import DispatcherDefault from "Dispatcher" /* 573 */;
import RPCErrorDefault from "RPCError" /* 9554 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9557 */;
import FramesStore from "FramesStore" /* 9510 */;

const TransportTypes = fn(4465).TransportTypes;
const OrientationLockState = fn(1920).OrientationLockState;
const Constants = fn(1085);
const RPCErrors = Constants.RPCErrors;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/setOrientationLockState.tsx");

export default {
  [Constants.RPCCommands.SET_ORIENTATION_LOCK_STATE]: {
    validation(number) {
      createRpcJoiSchemaObjectDefault(number);
      const obj = { lock_state: null, picture_in_picture_lock_state: null, grid_lock_state: null };
      const requiredResult = obj.required();
      let validResult = number.number().valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE);
      obj.lock_state = validResult.required();
      const numberResult = number.number();
      validResult = number.number().valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE);
      const numberResult1 = number.number();
      obj.picture_in_picture_lock_state = validResult.allow(null).optional();
      const allowResult = validResult.allow(null);
      const numberResult2 = number.number();
      const validResult1 = number.number().valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE);
      obj.grid_lock_state = number.number().valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE).allow(null).optional();
      return requiredResult.keys(obj);
    },
    handler(arg0) {
      ({ socket, args } = arg0);
      ({ lock_state, picture_in_picture_lock_state } = args);
      if (socket.source.type !== TransportTypes.POST_MESSAGE) {
        let obj = { errorCode: RPCErrors.INVALID_COMMAND };
        const _HermesInternal = HermesInternal;
        let tmp18 = RPCErrorDefault;
        tmp18 = new tmp18(obj, "command not available from \"" + socket.source.type + "\" transport");
        throw tmp18;
      } else {
        const id = socket.application.id;
        if (null == id) {
          obj = { errorCode: RPCErrors.INVALID_COMMAND };
          const tmp14 = new RPCErrorDefault(obj, "No application.");
          throw tmp14;
        } else {
          const frameByIframeId = FramesStore.getFrameByIframeId(socket.source.iframeId);
          if (null != frameByIframeId) {
            obj = DispatcherDefault;
            const obj1 = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId: frameByIframeId.id, lockState: lock_state, pictureInPictureLockState: picture_in_picture_lock_state };
            obj.dispatch(obj1);
          }
          const obj2 = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId: id, lockState: lock_state, pictureInPictureLockState: picture_in_picture_lock_state, gridLockState: tmp };
          obj2.dispatch(obj2);
        }
      }
    }
  }
};