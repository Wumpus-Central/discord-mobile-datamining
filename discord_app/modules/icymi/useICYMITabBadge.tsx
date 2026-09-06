// === Module 16391: useICYMITabBadge ===

// Module 16391 (useICYMITabBadge)
import initialize from "initialize" /* 504 */;
import closure_2 from "filterStaffGuild" /* 8335 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/icymi/useICYMITabBadge.tsx");

export default function useICYMITabBadge() {
  const obj = { value: 0, showDot: initialize.useStateFromStores(items, () => closure_2.hasNewContent(), []) };
  items = [closure_2];
  return obj;
};
export const icymiTabBadgeShown = function icymiTabBadgeShown() {
  return closure_2.hasNewContent();
};