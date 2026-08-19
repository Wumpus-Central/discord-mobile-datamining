// === Module 15647: useICYMITabBadge ===

// Module 15647 (useICYMITabBadge)
import initialize from "initialize" /* 589 */;
import filterStaffGuild from "filterStaffGuild" /* 9044 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/icymi/useICYMITabBadge.tsx");

export default function useICYMITabBadge() {
  const obj = { value: 0, showDot: initialize.useStateFromStores(items, () => closure_2.hasNewContent(), []) };
  items = [closure_2];
  return obj;
};
export const icymiTabBadgeShown = function icymiTabBadgeShown() {
  return closure_2.hasNewContent();
};