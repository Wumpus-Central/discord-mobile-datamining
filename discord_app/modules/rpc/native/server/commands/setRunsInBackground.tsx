// === Module 17020: setRunsInBackground ===

// Module 17020 (setRunsInBackground)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11300 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 16949 */;
import FramesStore from "FramesStore" /* 7027 */;

const Constants = fn(6759);
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = fn(1072).RPCCommands;
const ActivityPanelModes = fn(5953).ActivityPanelModes;
const FrameIntent = fn(7028).FrameIntent;
const obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(16957);
const obj3 = {
  scope: null,
  handler(args) {
    const enabled = args.args.enabled;
    const frame = validateConjureAppFrameDefault(args.socket).frame;
    const result = FramesActionCreatorsDefault.setFrameRunsInBackground(frame.id, enabled);
    let tmp4 = enabled;
    if (!enabled) {
      tmp4 = frame.intent !== FrameIntent.INLINE;
    }
    if (!tmp4) {
      tmp4 = frame.data.activityPanelMode !== ActivityPanelModes.PIP;
    }
    if (!tmp4) {
      const mainFrame = FramesStore.getMainFrame();
      let id;
      if (mainFrame != null) {
        id = mainFrame.id;
      }
      tmp4 = id !== frame.id;
    }
    if (!tmp4) {
      FramesActionCreatorsDefault.demoteMainFrame(frame.id);
      const tmpResult = FramesActionCreatorsDefault;
    }
    return { enabled };
  }
};
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj3.scope = { [RPC_SCOPE_CONFIG.ANY]: items };
obj[RPCCommands.SET_RUNS_IN_BACKGROUND] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SET_RUNS_IN_BACKGROUND, obj3);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/native/server/commands/setRunsInBackground.tsx");

export default obj;