// discord_app/modules/rpc/server/commands/setOrientationLockState.tsx
import dispatcherDefault from "dispatcher" /* 709 */;
import prototypeDefault from "prototype" /* 8752 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 8755 */;
import closure_2 from "map" /* 8708 */;
import { TransportTypes } from "RPC_SCOPE_CONFIG" /* 4277 */;
import { OrientationLockState } from "items3" /* 4481 */;
import sum from "sum" /* 505 */;

const RPCErrors = sum.RPCErrors;
const result = require("set").fileFinishedImporting("modules/rpc/server/commands/setOrientationLockState.tsx");

export default {
  [sum.RPCCommands.SET_ORIENTATION_LOCK_STATE]: {
    validation(number) {
      let obj = createRpcJoiSchemaObjectDefault(number);
      obj = { lock_state: null, picture_in_picture_lock_state: null, grid_lock_state: null };
      const requiredResult = obj.required();
      let validResult = number.number().valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE);
      obj[0] = validResult.required();
      const numberResult = number.number();
      validResult = number.number().valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE);
      const numberResult1 = number.number();
      obj[1] = validResult.allow(null).optional();
      const allowResult = validResult.allow(null);
      const numberResult2 = number.number();
      const validResult1 = number.number().valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE);
      obj[2] = number.number().valid(OrientationLockState.UNLOCKED, OrientationLockState.PORTRAIT, OrientationLockState.LANDSCAPE).allow(null).optional();
      return requiredResult.keys(obj);
    },
    handler(arg0) {
      ({ socket, args } = arg0);
      ({ lock_state, picture_in_picture_lock_state } = args);
      if (socket.source.type !== TransportTypes.POST_MESSAGE) {
        let obj = { errorCode: null };
        obj[0] = RPCErrors.INVALID_COMMAND;
        const _HermesInternal = HermesInternal;
        let tmp18 = prototypeDefault;
        tmp18 = new tmp18(obj, "command not available from \"" + socket.source.type + "\" transport");
        throw tmp18;
      } else {
        const id = socket.application.id;
        if (null == id) {
          obj = { errorCode: null };
          obj[0] = RPCErrors.INVALID_COMMAND;
          const tmp14 = new prototypeDefault(obj, "No application.");
          throw tmp14;
        } else {
          frameByIframeId = frameByIframeId.getFrameByIframeId(socket.source.iframeId);
          if (null != frameByIframeId) {
            obj = dispatcherDefault;
            obj1 = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", frameId: null, lockState: null, pictureInPictureLockState: null };
            obj1[1] = frameByIframeId.id;
            obj1[2] = lock_state;
            obj1[3] = picture_in_picture_lock_state;
            obj.dispatch(obj1);
          }
          let obj2 = dispatcherDefault;
          obj2 = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId: null, lockState: null, pictureInPictureLockState: null, gridLockState: null };
          obj2[1] = id;
          obj2[2] = lock_state;
          obj2[3] = picture_in_picture_lock_state;
          obj2[4] = tmp;
          obj2.dispatch(obj2);
        }
      }
    }
  }
};