// === Module 15770: setRunsInBackground ===

// Module 15770 (setRunsInBackground)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9855 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 15693 */;
import FramesStore from "FramesStore" /* 6810 */;

const Constants = fn(5671);
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = fn(1071).RPCCommands;
const ActivityPanelModes = fn(5543).ActivityPanelModes;
const FrameIntent = fn(6811).FrameIntent;
const obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(15701);
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