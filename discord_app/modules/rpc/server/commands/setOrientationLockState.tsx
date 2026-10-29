// === Module 16249: setOrientationLockState ===

// Module 16249 (setOrientationLockState)
import DispatcherDefault from "Dispatcher" /* 584 */;
import getSocketFrameDefault from "getSocketFrame" /* 9293 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9294 */;
import RPCErrorDefault from "RPCError" /* 9300 */;
import Constants from "Constants" /* 1095 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 16215 */;
import size from "module_2" /* 2 */;

({ RPCCommands, RPCErrors: c2 } = Constants);
let obj = {};
obj[RPCCommands.SET_ORIENTATION_LOCK_STATE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SET_ORIENTATION_LOCK_STATE, {
  handler(arg0) {
    ({ socket, args } = arg0);
    ({ lock_state, picture_in_picture_lock_state } = args);
    if (isPostMessageSocketDefault(socket)) {
      const id = socket.application.id;
      if (null == id) {
        const obj2 = { errorCode: constants.INVALID_COMMAND };
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
      const obj = { errorCode: constants.INVALID_COMMAND };
      const _HermesInternal = HermesInternal;
      const tmpResult21 = new RPCErrorDefault(obj, "command not available from \"" + socket.source.type + "\" transport");
      throw tmpResult21;
    }
  }
});
const result = size.fileFinishedImporting("modules/rpc/server/commands/setOrientationLockState.tsx");

export default obj;