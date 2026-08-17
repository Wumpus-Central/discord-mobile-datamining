// discord_app/design/components/Navigator/native/useNavigation.native.tsx
import set from "set" /* 2 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1501 */;

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