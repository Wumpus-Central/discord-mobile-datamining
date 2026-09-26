// === Module 1485: useNavigation ===

// Module 1485 (useNavigation)
import Link from "Link" /* 1486 */;
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