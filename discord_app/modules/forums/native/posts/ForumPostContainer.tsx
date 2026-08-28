// discord_app/modules/forums/native/posts/ForumPostContainer.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import useNativeForumPostHandlersDefault from "hooks/useNativeForumPostHandlers.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import createFakeSharedValue from "../../../reanimated/ReanimatedHelperTypes.tsx";

const require = arg1;
let c3 = importAllResult;
let obj = { childContainer: { position: "relative", minHeight: 110, padding: 12 }, card: { marginBottom: 12 }, disabledContainer: null };
obj = { marginBottom: 12, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: ThemesDefault.radii.md, overflow: "hidden" };
obj[2] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const context = importAllResult.createContext(createFakeSharedValue.createFakeSharedValue(false));
const result = require("set").fileFinishedImporting("modules/forums/native/posts/ForumPostContainer.tsx");

export const useForumPostContainerPressedIn = function useForumPostContainerPressedIn() {
  return importAllResult.useContext(closure_7);
};
export const ForumPostPressableContainer = function ForumPostPressableContainer(arg0) {
  let sharedValue;
  ({ threadId, children, style } = arg0);
  const tmp = callback();
  let obj = sharedValue(4186);
  sharedValue = obj.useSharedValue(false);
  const items = [sharedValue];
  const memo = importAllResult.useMemo(() => ({
    onPressIn() {
      return store.set(true);
    },
    onPressOut() {
      return store.set(false);
    }
  }), items);
  ({ onPressIn, onPressOut } = memo);
  ({ onTapPost, onLongTapPost } = useNativeForumPostHandlersDefault({ threadId }));
  let str = "secondary";
  if (useIsMobileVisualRefreshExperimentEnabledDefault("ForumPostContainer")) {
    str = "surface-high";
  }
  obj = { style: tmp.card, children: jsx(sharedValue(5566).Card, { style: items1, variant: str, accessibilityRole: "button", onPress: onTapPost, onPressIn, onPressOut, onLongPress: onLongTapPost, unstable_pressDelay: 130, children }) };
  items1 = [tmp.childContainer, style];
  obj = { value: sharedValue, children: <View style={tmp.card}>{jsx(sharedValue(5566).Card, { style: items1, variant: str, accessibilityRole: "button", onPress: onTapPost, onPressIn, onPressOut, onLongPress: onLongTapPost, unstable_pressDelay: 130, children })}</View> };
  return <redux.Provider value={sharedValue}><View style={tmp.card}>{jsx(sharedValue(5566).Card, { style: items1, variant: str, accessibilityRole: "button", onPress: onTapPost, onPressIn, onPressOut, onLongPress: onLongTapPost, unstable_pressDelay: 130, children })}</View></redux.Provider>;
};
export const ForumPostDisabledContainer = function ForumPostDisabledContainer(arg0) {
  ({ children, style } = arg0);
  const obj = { style: null, pointerEvents: "none", children: null };
  const items = [callback().disabledContainer, style];
  obj[0] = items;
  obj[2] = children;
  return <View style={null} pointerEvents="none">{null}</View>;
};