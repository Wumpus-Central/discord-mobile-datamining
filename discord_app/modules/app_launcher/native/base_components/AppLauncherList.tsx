// discord_app/modules/app_launcher/native/base_components/AppLauncherList.tsx
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { registerAsset } from "../../../../../_runtime/11346_registerAsset.js";
import { SearchField } from "../../../../design/components/TextField/native/SearchField.native.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";
import { useAppLauncherFlashListProps } from "AppLauncherFlashList.tsx";

const require = arg1;
let closure_5 = createCacheKey.createStyles({ searchBarContainer: { marginBottom: 16 }, emptyState: { backgroundColor: "transparent", justifyContent: "flex-start" }, emptyStateImage: { flex: 0 } });
const forwardRefResult = require("noop").forwardRef((contentContainerStyle) => {
  const bottom = useSafeAreaInsets().bottom;
  let obj = useAppLauncherFlashListProps;
  const appLauncherFlashListProps = obj.useAppLauncherFlashListProps();
  obj = { contentContainerStyle: items, scrollIndicatorInsets: { bottom }, ref: null };
  items = [{ paddingBottom: bottom }, contentContainerStyle.contentContainerStyle];
  let scrollerRef = appLauncherFlashListProps.scrollerRef;
  if (scrollerRef == null) {
    scrollerRef = arg1;
  }
  obj[2] = scrollerRef;
  const merged = Object.assign(contentContainerStyle);
  ({ onScroll: obj2.animatedOnScroll, gestureRef: obj2.simultaneousHandlers, animatedProps: obj2.animatedProps } = appLauncherFlashListProps);
  return jsx(useAppLauncherFlashListProps, { contentContainerStyle: items, scrollIndicatorInsets: { bottom }, ref: null });
});
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherList.tsx");

export const AppLauncherList = forwardRefResult;
export const AppLauncherListEmptyState = function AppLauncherListEmptyState() {
  const tmp = callback();
  const obj = { style: tmp.emptyState, imageStyle: tmp.emptyStateImage, lightSource: null, darkSource: null, title: null, body: null };
  obj[2] = registerAsset;
  obj[3] = registerAsset;
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t.vYocDz);
  const intl2 = getSystemLocale.intl;
  obj[5] = intl2.string(getSystemLocale.t.V6nAfF);
  return jsx(Button.EmptyState, { style: tmp.emptyState, imageStyle: tmp.emptyStateImage, lightSource: null, darkSource: null, title: null, body: null });
};
export const AppLauncherListSearchBar = function AppLauncherListSearchBar(arg0) {
  let obj = { style: callback().searchBarContainer, children: null };
  obj = { size: "md" };
  const merged = Object.assign(arg0);
  obj[1] = jsx(SearchField.SearchField, { size: "md" });
  return <View size="md" />;
};