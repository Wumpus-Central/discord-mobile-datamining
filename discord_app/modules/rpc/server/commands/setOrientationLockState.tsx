// === Module 15116: setOrientationLockState ===

// Module 15116 (setOrientationLockState)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants2 from "Constants" /* 2024 */;
import RPCErrorDefault from "RPCError" /* 11010 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 11013 */;
import getSocketFrameDefault from "getSocketFrame" /* 15077 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 15078 */;
import Constants from "Constants" /* 1096 */;
import size from "module_2" /* 2 */;

const OrientationLockState = Constants2.OrientationLockState;
const RPCErrors = Constants.RPCErrors;
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
      if (isPostMessageSocketDefault(socket)) {
        const id = socket.application.id;
        if (null == id) {
          const obj2 = { errorCode: RPCErrors.INVALID_COMMAND };
          const tmp19 = new RPCErrorDefault(obj2, "No application.");
          throw tmp19;
        } else {
          const tmp12 = getSocketFrameDefault(socket);
          if (null != tmp12) {
            const obj3 = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId: tmp12.id, lockState: lock_state, pictureInPictureLockState: picture_in_picture_lock_state };
            DispatcherDefault.dispatch(obj3);
            const tmpResult = DispatcherDefault;
          }
          const obj4 = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId: id, lockState: lock_state, pictureInPictureLockState: picture_in_picture_lock_state, gridLockState: args.grid_lock_state };
          DispatcherDefault.dispatch(obj4);
          const tmpResult3 = DispatcherDefault;
        }
      } else {
        const obj = { errorCode: RPCErrors.INVALID_COMMAND };
        const _HermesInternal = HermesInternal;
        const tmpResult21 = new RPCErrorDefault(obj, "command not available from \"" + socket.source.type + "\" transport");
        throw tmpResult21;
      }
    }
  }
};