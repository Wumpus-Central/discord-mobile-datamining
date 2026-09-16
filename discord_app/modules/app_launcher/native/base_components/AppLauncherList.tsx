// === Module 12309: AppLauncherList ===

// Module 12309 (AppLauncherList)
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import mergeProps from "mergeProps" /* 4344 */;
import SearchField from "SearchField" /* 7160 */;
import _modDef12310 from "module_12310" /* 12310 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let closure_6 = createStyles.createStyles({ searchBarContainer: { marginBottom: 16 }, emptyState: { backgroundColor: "transparent", justifyContent: "flex-start" }, emptyStateImage: { flex: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherList.tsx");

export const AppLauncherList = noop.forwardRef((contentContainerStyle, arg1) => {
  _require = arg1;
  const bottom = appLauncherFlashListProps(1612)().bottom;
  appLauncherFlashListProps = require("AppLauncherFlashList").useAppLauncherFlashListProps();
  const items = [appLauncherFlashListProps.scrollerRef, arg1];
  const memo = noop.useMemo(() => mergeProps.mergeRefs(appLauncherFlashListProps.scrollerRef, closure_0), items);
  const obj3 = { contentContainerStyle: null, scrollIndicatorInsets: { bottom }, ref: memo };
  const items1 = [{ paddingBottom: bottom }, contentContainerStyle.contentContainerStyle];
  obj3.contentContainerStyle = items1;
  const obj = require("AppLauncherFlashList");
  const merged = Object.assign(contentContainerStyle);
  ({ onScroll: obj2.animatedOnScroll, gestureRef: obj2.simultaneousHandlers, animatedProps: obj2.animatedProps } = appLauncherFlashListProps);
  return jsx(appLauncherFlashListProps(12244), { contentContainerStyle: null, scrollIndicatorInsets: { bottom }, ref: memo });
});
export const AppLauncherListEmptyState = function AppLauncherListEmptyState() {
  const tmp = closure_6();
  const obj = { style: tmp.emptyState, imageStyle: tmp.emptyStateImage, lightSource: _modDef12310, darkSource: _modDef12310, title: null, body: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.vYocDz);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.V6nAfF);
  return jsx(native.EmptyState, { style: tmp.emptyState, imageStyle: tmp.emptyStateImage, lightSource: _modDef12310, darkSource: _modDef12310, title: null, body: null });
};
export const AppLauncherListSearchBar = function AppLauncherListSearchBar(arg0) {
  const obj = { style: closure_6().searchBarContainer, children: null };
  const merged = Object.assign(arg0);
  obj.children = jsx(SearchField.SearchField, { size: "md" });
  return <View style={closure_6().searchBarContainer}>{null}</View>;
};