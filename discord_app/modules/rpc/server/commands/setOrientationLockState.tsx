// === Module 14860: setOrientationLockState ===

// Module 14860 (setOrientationLockState)
import DispatcherDefault from "Dispatcher" /* 573 */;
import RPCErrorDefault from "RPCError" /* 9660 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9663 */;
import FramesStore from "FramesStore" /* 9389 */;

const TransportTypes = fn(4731).TransportTypes;
const OrientationLockState = fn(2004).OrientationLockState;
const Constants = fn(1085);
const RPCErrors = Constants.RPCErrors;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/setOrientationLockState.tsx");

export default {
  [Constants.RPCCommands.SET_ORIENTATION_LOCK_STATE]: {
    validation(number) {
      const obj = createRpcJoiSchemaObjectDefault(number);
      const obj2 = { lock_state: null, picture_in_picture_lock_state: null, grid_lock_state: null };
      const requiredResult = createRpcJoiSchemaObjectDefault(number).required();
      const numberResult = number.number();
      obj2.lock_state = number.number().valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE).required();
      const validResult = number.number().valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE);
      const numberResult1 = number.number();
      const validResult3 = number.number().valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE);
      obj2.picture_in_picture_lock_state = number.number().valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE).allow(null).optional();
      const allowResult = number.number().valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE).allow(null);
      const numberResult2 = number.number();
      const validResult4 = number.number().valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE);
      obj2.grid_lock_state = number.number().valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE).allow(null).optional();
      return requiredResult.keys(obj2);
    },
    handler(arg0) {
      ({ socket, args } = arg0);
      ({ lock_state, picture_in_picture_lock_state } = args);
      if (socket.source.type !== TransportTypes.POST_MESSAGE) {
        const obj2 = { errorCode: RPCErrors.INVALID_COMMAND };
        const _HermesInternal = HermesInternal;
        const tmp182 = new RPCErrorDefault(obj2, "command not available from \"" + socket.source.type + "\" transport");
        throw tmp182;
      } else {
        const id = socket.application.id;
        if (null == id) {
          const obj4 = { errorCode: RPCErrors.INVALID_COMMAND };
          const tmp14 = new RPCErrorDefault(obj4, "No application.");
          throw tmp14;
        } else {
          const frameByIframeId = FramesStore.getFrameByIframeId(socket.source.iframeId);
          if (null != frameByIframeId) {
            const obj5 = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId: frameByIframeId.id, lockState: lock_state, pictureInPictureLockState: picture_in_picture_lock_state };
            DispatcherDefault.dispatch(obj5);
          }
          const obj6 = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId: id, lockState: lock_state, pictureInPictureLockState: picture_in_picture_lock_state, gridLockState: tmp };
          DispatcherDefault.dispatch(obj6);
        }
      }
    }
  }
};