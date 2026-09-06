// discord_app/modules/icymi/useICYMITabBadge.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import ICYMIStore from "ICYMIStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/useICYMITabBadge.tsx");

export default function useICYMITabBadge() {
  const obj = { value: 0, showDot: null };
  const items = [ICYMIStore];
  obj.showDot = initialize.useStateFromStores(items, () => ICYMIStore.hasNewContent(), []);
  return obj;
}
export const icymiTabBadgeShown = function icymiTabBadgeShown() {
  return ICYMIStore.hasNewContent();
};
