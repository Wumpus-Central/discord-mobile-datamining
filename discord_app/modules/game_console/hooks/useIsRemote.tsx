// discord_app/modules/game_console/hooks/useIsRemote.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import GameConsoleStore from "../GameConsoleStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default function useIsRemote() {
  const items = [GameConsoleStore];
  return initialize.useStateFromStores(
    items,
    () => null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo(),
  );
}
