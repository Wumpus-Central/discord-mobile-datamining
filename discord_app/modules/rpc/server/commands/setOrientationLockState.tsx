// === Module 14679: setOrientationLockState ===

// Module 14679 (setOrientationLockState)
import DispatcherDefault from "Dispatcher" /* 584 */;
import RPCErrorDefault from "RPCError" /* 10896 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 10899 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 14642 */;
import FramesStore from "FramesStore" /* 10772 */;

const OrientationLockState = fn(2024).OrientationLockState;
const Constants = fn(1096);
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
      if (isPostMessageSocketDefault(socket)) {
        const id = socket.application.id;
        if (null == id) {
          const obj2 = { errorCode: RPCErrors.INVALID_COMMAND };
          const tmp18 = new RPCErrorDefault(obj2, "No application.");
          throw tmp18;
        } else {
          const frameByEmbeddedContext = FramesStore.getFrameByEmbeddedContext(socket.context, socket.source.iframeId);
          if (null != frameByEmbeddedContext) {
            const obj3 = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId: frameByEmbeddedContext.id, lockState: lock_state, pictureInPictureLockState: picture_in_picture_lock_state };
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