// discord_app/modules/premium/powerups/hooks/useGuildPowerupOnDeactivate.tsx
import useGuildPowerupOnToggleDefault from "useGuildPowerupOnToggle.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnDeactivate.tsx");

export default function useGuildPowerupOnDeactivate(arg0, arg1) {
  const tmp = useGuildPowerupOnToggleDefault(arg0, arg1);
  const onToggle = tmp.onToggle;
  const obj = { isLoading: tmp.isLoading, error: tmp.error, onDeactivate: null };
  const items = [onToggle];
  obj.onDeactivate = noop.useCallback(() => onToggle(false), items);
  return obj;
}
