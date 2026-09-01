// discord_app/modules/icymi/useICYMITabBadge.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "ICYMIStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/icymi/useICYMITabBadge.tsx");

export default function useICYMITabBadge() {
  const obj = { value: 0, showDot: initialize.useStateFromStores(items, () => closure_2.hasNewContent(), []) };
  items = [closure_2];
  return obj;
}
export const icymiTabBadgeShown = function icymiTabBadgeShown() {
  return closure_2.hasNewContent();
};
