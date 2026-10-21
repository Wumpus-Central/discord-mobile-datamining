// discord_app/modules/rpc/native/server/commands/setRunsInBackground.tsx
import FramesActionCreatorsDefault from "../../../../frames/FramesActionCreators.native.tsx";
import validateConjureAppFrameDefault from "../../../helpers/validateConjureAppFrame.tsx";
import FramesStore from "../../../../frames/FramesStore.tsx";

const Constants = fn(6357);
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = fn(1087).RPCCommands;
const ActivityPanelModes = fn(5591).ActivityPanelModes;
const FrameIntent = fn(6755).FrameIntent;
const obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(15621);
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
  },
};
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj3.scope = { [RPC_SCOPE_CONFIG.ANY]: items };
obj[RPCCommands.SET_RUNS_IN_BACKGROUND] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.SET_RUNS_IN_BACKGROUND,
  obj3,
);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/native/server/commands/setRunsInBackground.tsx");

export default obj;
