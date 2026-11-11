// discord_app/modules/rpc/server/commands/pictureInPictureInteractive.tsx
import Constants2 from "../../../../Constants.tsx";
import FramesConstants from "../../../frames/FramesConstants.tsx";
import Constants3 from "../../../../../discord_common/js/shared/activities/Constants.tsx";
import FramesActionCreatorsDefault from "../../../frames/FramesActionCreators.native.tsx";
import validateConjureAppFrameDefault from "../../helpers/validateConjureAppFrame.tsx";
import conjureBackgroundFrames from "../../../conjure/background_frames/conjureBackgroundFrames.tsx";
import Constants from "../../Constants.tsx";
import CONTEXT_MENU_ICON_NAMES_mod from "../../../../../discord_common/js/packages/rpc-schema/rpc-schema.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
  },
};
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj2.scope = { [RPC_SCOPE_CONFIG.ANY]: items };
obj[RPCCommands.FRAME_PICTURE_IN_PICTURE_HANDSHAKE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.FRAME_PICTURE_IN_PICTURE_HANDSHAKE,
  obj2,
);
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
  },
};
const items1 = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj3.scope = { [RPC_SCOPE_CONFIG.ANY]: items1 };
obj[RPCCommands.FRAME_PICTURE_IN_PICTURE_OPEN] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.FRAME_PICTURE_IN_PICTURE_OPEN,
  obj3,
);
let result = size.fileFinishedImporting("modules/rpc/server/commands/pictureInPictureInteractive.tsx");

export default obj;
