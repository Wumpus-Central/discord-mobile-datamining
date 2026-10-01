// discord_app/modules/vibegrations/lib/useVibegrationsWindowFocused.native.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

require = fn;
const AppStates = fn(1074).AppStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsWindowFocused.native.tsx");

export default function useVibegrationsWindowFocused() {
  const items = [AppStateStore];
  return initialize.useStateFromStores(items, () => state.getState() === constants.ACTIVE);
}
