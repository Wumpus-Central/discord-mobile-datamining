// discord_app/modules/premium/powerups/native/hooks/useGuildPowerupOnShowDeactivate.tsx
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import useAlertStore from "../../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let closure_4 = noop.lazy(() => asyncRequireImpl(12540, dependencyMap.paths));
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowDeactivate.tsx");

export default function useGuildPowerupOnShowDeactivate(guildId, powerup) {
  const items = [guildId, powerup];
  return noop.useCallback(() => {
    const obj = { guildId, powerup };
    obj.openAlert("guild-powerups-deactivate-alert", <closure_4 guildId={guildId} powerup={powerup} />);
  }, items);
}
