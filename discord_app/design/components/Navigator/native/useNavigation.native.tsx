// === Module 1500: useNavigation ===

// Module 1500 (useNavigation)
import obj132 from "obj132" /* 2 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1501 */;

function useNavigation() {
  return createStandardNavigationFactories.useNavigation();
}
const result = obj132.fileFinishedImporting("design/components/Navigator/native/useNavigation.native.tsx");

export { useNavigation };
export const useNativeStackNavigation = function useNativeStackNavigation() {
  return createStandardNavigationFactories.useNavigation();
};
export const useStackNavigation = useNavigation;
export const useTabNavigation = function useTabNavigation() {
  return createStandardNavigationFactories.useNavigation();
};