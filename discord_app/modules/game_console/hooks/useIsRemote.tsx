// discord_app/modules/game_console/hooks/useIsRemote.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import set from "../GameConsoleStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default function useIsRemote() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo());
};