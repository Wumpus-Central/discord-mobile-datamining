// discord_app/modules/app_launcher/native/base_components/AppLauncherList.tsx
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import mergeProps from "../../../../design/utils/native/mergeProps.native.tsx";
import SearchField from "../../../../design/components/TextField/native/SearchField.native.tsx";
import _modDef12297 from "../../../../../_runtime/metro/12297__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let closure_6 = createStyles.createStyles({
  searchBarContainer: { marginBottom: 16 },
  emptyState: { backgroundColor: "transparent", justifyContent: "flex-start" },
  emptyStateImage: { flex: 0 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherList.tsx");

export const AppLauncherList = noop.forwardRef((contentContainerStyle, arg1) => {
  _require = arg1;
  const bottom = appLauncherFlashListProps(1611)().bottom;
  let obj = require("AppLauncherFlashList");
  appLauncherFlashListProps = obj.useAppLauncherFlashListProps();
  const items = [appLauncherFlashListProps.scrollerRef, arg1];
  const memo = noop.useMemo(() => mergeProps.mergeRefs(appLauncherFlashListProps.scrollerRef, closure_0), items);
  obj = { contentContainerStyle: null, scrollIndicatorInsets: { bottom }, ref: memo };
  const items1 = [{ paddingBottom: bottom }, contentContainerStyle.contentContainerStyle];
  obj.contentContainerStyle = items1;
  const merged = Object.assign(contentContainerStyle);
  ({
    onScroll: obj2.animatedOnScroll,
    gestureRef: obj2.simultaneousHandlers,
    animatedProps: obj2.animatedProps,
  } = appLauncherFlashListProps);
  return jsx(appLauncherFlashListProps(12231), {
    contentContainerStyle: null,
    scrollIndicatorInsets: { bottom },
    ref: memo,
  });
});
export const AppLauncherListEmptyState = function AppLauncherListEmptyState() {
  const tmp = closure_6();
  const obj = {
    style: tmp.emptyState,
    imageStyle: tmp.emptyStateImage,
    lightSource: _modDef12297,
    darkSource: _modDef12297,
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
    lightSource: _modDef12297,
    darkSource: _modDef12297,
    title: null,
    body: null,
  });
};
export const AppLauncherListSearchBar = function AppLauncherListSearchBar(arg0) {
  let obj = { style: closure_6().searchBarContainer, children: null };
  obj = { size: "md" };
  const merged = Object.assign(arg0);
  obj.children = jsx(SearchField.SearchField, { size: "md" });
  return <View size="md" />;
};
