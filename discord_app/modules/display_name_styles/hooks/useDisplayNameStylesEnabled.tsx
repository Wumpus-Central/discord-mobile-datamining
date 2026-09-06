// discord_app/modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import DisplayNameStylesContext from "../DisplayNameStylesContext.tsx";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const useContext = _mod19.useContext;
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesEnabled.tsx");

export const useDisplayNameStylesEnabled = function useDisplayNameStylesEnabled() {
  const items = [AccessibilityStore];
  let overrideSettings = initialize.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
  if (!overrideSettings) {
    overrideSettings = useContext(DisplayNameStylesContext.DisplayNameStylesContext).overrideSettings;
  }
  return overrideSettings;
};
