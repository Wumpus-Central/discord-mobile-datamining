// discord_app/modules/rpc/server/commands/setOrientationLockState.tsx
import { OrientationLockState } from "items3";
import sum from "sum";

const RPCErrors = sum.RPCErrors;
const result = require("createRpcJoiSchemaObject").fileFinishedImporting("modules/rpc/server/commands/setOrientationLockState.tsx");

export default {
  [sum.RPCCommands.SET_ORIENTATION_LOCK_STATE]: {
    validation(number) {
      let obj = importDefault(10643)(number);
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
    handler(args) {
      let lock_state;
      let picture_in_picture_lock_state;
      ({ lock_state, picture_in_picture_lock_state } = args.args);
      const id = args.socket.application.id;
      if (null == id) {
        let obj = { errorCode: null };
        obj[0] = RPCErrors.INVALID_COMMAND;
        const tmp12 = new importDefault(10640)(obj, "No application.");
        throw tmp12;
      } else {
        obj = importDefault(709);
        obj = { type: "FRAME_SET_ORIENTATION_LOCK_STATE", applicationId: null, lockState: null, pictureInPictureLockState: null };
        obj[1] = id;
        obj[2] = lock_state;
        obj[3] = picture_in_picture_lock_state;
        obj.dispatch(obj);
        const obj1 = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId: null, lockState: null, pictureInPictureLockState: null, gridLockState: null };
        obj1[1] = id;
        obj1[2] = lock_state;
        obj1[3] = picture_in_picture_lock_state;
        obj1[4] = tmp;
        importDefault(709).dispatch(obj1);
      }
    }
  }
};