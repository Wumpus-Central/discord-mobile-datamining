// === Module 18722: useICYMITabBadge ===

// Module 18722 (useICYMITabBadge)
import initialize from "initialize" /* 504 */;
import ICYMIStore from "ICYMIStore" /* 9047 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/useICYMITabBadge.tsx");

export default function useICYMITabBadge() {
  const obj = { value: 0, showDot: null };
  items = [ICYMIStore];
  obj.showDot = initialize.useStateFromStores(items, () => ICYMIStore.hasNewContent(), []);
  return obj;
};
export function icymiTabBadgeShown() {
  return ICYMIStore.hasNewContent();
}