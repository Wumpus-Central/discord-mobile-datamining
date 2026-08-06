// discord_app/design/components/Navigator/native/useNavigation.native.tsx
import { createStandardNavigationFactories } from "../../../../../_runtime/01481_createStandardNavigationFactories.js";
function useNavigation() {
  return createStandardNavigationFactories.useNavigation();
}
const result = require("set").fileFinishedImporting("design/components/Navigator/native/useNavigation.native.tsx");

export { useNavigation };
export const useNativeStackNavigation = function useNativeStackNavigation() {
  return createStandardNavigationFactories.useNavigation();
};
export const useStackNavigation = useNavigation;
export const useTabNavigation = function useTabNavigation() {
  return createStandardNavigationFactories.useNavigation();
};