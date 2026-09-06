// discord_app/modules/app_launcher/native/base_components/AppLauncherList.tsx
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import SearchField from "../../../../design/components/TextField/native/SearchField.native.tsx";
import AppLauncherFlashList from "AppLauncherFlashList.tsx";
import _modDef12168 from "../../../../../_runtime/metro/12168__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const AppLauncherFlashListDefault = AppLauncherFlashList;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({
  searchBarContainer: { marginBottom: 16 },
  emptyState: { backgroundColor: "transparent", justifyContent: "flex-start" },
  emptyStateImage: { flex: 0 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherList.tsx");

export const AppLauncherList = noop.forwardRef((contentContainerStyle, arg1) => {
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = AppLauncherFlashList;
  const appLauncherFlashListProps = obj.useAppLauncherFlashListProps();
  obj = { contentContainerStyle: null, scrollIndicatorInsets: { bottom }, ref: null };
  const items = [{ paddingBottom: bottom }, contentContainerStyle.contentContainerStyle];
  obj.contentContainerStyle = items;
  let scrollerRef = appLauncherFlashListProps.scrollerRef;
  if (scrollerRef == null) {
    scrollerRef = arg1;
  }
  obj.ref = scrollerRef;
  const merged = Object.assign(contentContainerStyle);
  ({
    onScroll: obj2.animatedOnScroll,
    gestureRef: obj2.simultaneousHandlers,
    animatedProps: obj2.animatedProps,
  } = appLauncherFlashListProps);
  return jsx(AppLauncherFlashListDefault, {
    contentContainerStyle: null,
    scrollIndicatorInsets: { bottom },
    ref: null,
  });
});
export const AppLauncherListEmptyState = function AppLauncherListEmptyState() {
  const tmp = closure_5();
  const obj = {
    style: tmp.emptyState,
    imageStyle: tmp.emptyStateImage,
    lightSource: _modDef12168,
    darkSource: _modDef12168,
    title: null,
    body: null,
  };
  const intl = util.intl;
  obj.title = intl.string(util.t.vYocDz);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.V6nAfF);
  return jsx(native.EmptyState, {
    style: tmp.emptyState,
    imageStyle: tmp.emptyStateImage,
    lightSource: _modDef12168,
    darkSource: _modDef12168,
    title: null,
    body: null,
  });
};
export const AppLauncherListSearchBar = function AppLauncherListSearchBar(arg0) {
  let obj = { style: closure_5().searchBarContainer, children: null };
  obj = { size: "md" };
  const merged = Object.assign(arg0);
  obj.children = jsx(SearchField.SearchField, { size: "md" });
  return <View size="md" />;
};
