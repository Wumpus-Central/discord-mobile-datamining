// === Module 1498: useNavigation ===

// Module 1498 (useNavigation)
import Link from "Link" /* 1499 */;
import size from "module_2" /* 2 */;

function useNavigation() {
  return Link.useNavigation();
}
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigation.native.tsx");

export { useNavigation };
export function useNativeStackNavigation() {
  return Link.useNavigation();
}
export const useStackNavigation = useNavigation;
export function useTabNavigation() {
  return Link.useNavigation();
}