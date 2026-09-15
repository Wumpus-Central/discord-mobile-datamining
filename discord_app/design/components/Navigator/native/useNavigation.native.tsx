// === Module 1484: useNavigation ===

// Module 1484 (useNavigation)
import Link from "Link" /* 1485 */;
import size from "module_2" /* 2 */;

function useNavigation() {
  return Link.useNavigation();
}
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigation.native.tsx");

export { useNavigation };
export const useNativeStackNavigation = function useNativeStackNavigation() {
  return Link.useNavigation();
};
export const useStackNavigation = useNavigation;
export const useTabNavigation = function useTabNavigation() {
  return Link.useNavigation();
};