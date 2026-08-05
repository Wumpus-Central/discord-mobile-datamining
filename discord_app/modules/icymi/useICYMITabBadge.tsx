// discord_app/modules/icymi/useICYMITabBadge.tsx
import filterStaffGuild from "filterStaffGuild";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/icymi/useICYMITabBadge.tsx");

export default function useICYMITabBadge() {
  const obj = { value: 0, showDot: null };
  const items = [filterStaffGuild];
  obj[1] = initialize.useStateFromStores(items, () => filterStaffGuild.hasNewContent(), []);
  return obj;
};
export const icymiTabBadgeShown = function icymiTabBadgeShown() {
  return filterStaffGuild.hasNewContent();
};