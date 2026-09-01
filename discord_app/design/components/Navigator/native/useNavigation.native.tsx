// discord_app/design/components/Navigator/native/useNavigation.native.tsx
import set from "../../../../../_runtime/00002_set.js";
import createStandardNavigationFactories from "../../../../../_runtime/01500_createStandardNavigationFactories.js";

function useNavigation() {
  return createStandardNavigationFactories.useNavigation();
}
const result = set.fileFinishedImporting("design/components/Navigator/native/useNavigation.native.tsx");

export { useNavigation };
export const useNativeStackNavigation = function useNativeStackNavigation() {
  return createStandardNavigationFactories.useNavigation();
};
export const useStackNavigation = useNavigation;
export const useTabNavigation = function useTabNavigation() {
  return createStandardNavigationFactories.useNavigation();
};
