// === Module 16987: pictureInPictureInteractive ===

// Module 16987 (pictureInPictureInteractive)
import Constants2 from "Constants" /* 1072 */;
import FramesConstants from "FramesConstants" /* 7020 */;
import Constants3 from "Constants" /* 12706 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 12743 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 16914 */;
import conjureBackgroundFrames from "conjureBackgroundFrames" /* 16988 */;
import Constants from "Constants" /* 6761 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 16922 */;
import size from "module_2" /* 2 */;

({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = Constants2.RPCCommands;
const FrameLayoutModes = FramesConstants.FrameLayoutModes;
const ActivityLayoutMode = Constants3.ActivityLayoutMode;
let obj = {};
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj2 = {
  scope: null,
  handler(socket) {
    const frame = validateConjureAppFrameDefault(socket.socket).frame;
    const result = FramesActionCreatorsDefault.setFramePictureInPictureInteractive(frame.id, true);
    if (frame.data.layoutMode === FrameLayoutModes.PIP) {
      let layout_mode = ActivityLayoutMode.PIP;
    } else {
      layout_mode = ActivityLayoutMode.FOCUSED;
    }
    return { layout_mode };
  }
};
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj2.scope = { [RPC_SCOPE_CONFIG.ANY]: items };
obj[RPCCommands.FRAME_PICTURE_IN_PICTURE_HANDSHAKE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.FRAME_PICTURE_IN_PICTURE_HANDSHAKE, obj2);
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj3 = {
  scope: null,
  handler(socket) {
    const frame = validateConjureAppFrameDefault(socket.socket).frame;
    if (frame.data.layoutMode === FrameLayoutModes.PIP) {
      if (frame.data.pictureInPictureInteractive) {
        const obj = { opened: conjureBackgroundFrames.returnToConjureFrameSurface(frame) };
      }
      return { opened: false };
    }
  }
};
const items1 = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj3.scope = { [RPC_SCOPE_CONFIG.ANY]: items1 };
obj[RPCCommands.FRAME_PICTURE_IN_PICTURE_OPEN] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.FRAME_PICTURE_IN_PICTURE_OPEN, obj3);
let result = size.fileFinishedImporting("modules/rpc/server/commands/pictureInPictureInteractive.tsx");

export default obj;