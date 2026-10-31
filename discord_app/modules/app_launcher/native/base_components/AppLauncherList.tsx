// === Module 12359: AppLauncherList ===

// Module 12359 (AppLauncherList)
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import mergeProps from "mergeProps" /* 5189 */;
import Search_SearchBar from "Search/SearchBar" /* 7218 */;
import _modDef12360 from "module_12360" /* 12360 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let closure_6 = createStyles.createStyles({ searchBarContainer: { marginBottom: 16 }, emptyState: { backgroundColor: "transparent", justifyContent: "flex-start" }, emptyStateImage: { flex: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherList.tsx");

export function AppLauncherList(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  let appLauncherFlashListProps;
  const bottom = appLauncherFlashListProps(1625)().bottom;
  appLauncherFlashListProps = ref(12291).useAppLauncherFlashListProps();
  const items = [appLauncherFlashListProps.scrollerRef, ref];
  const memo = noop.useMemo(() => mergeProps.mergeRefs(appLauncherFlashListProps.scrollerRef, ref), items);
  const obj3 = { contentContainerStyle: null, scrollIndicatorInsets: { bottom }, ref: memo };
  const items1 = [{ paddingBottom: bottom }, merged.contentContainerStyle];
  obj3.contentContainerStyle = items1;
  const obj = ref(12291);
  const merged1 = Object.assign(merged);
  ({ onScroll: obj2.animatedOnScroll, gestureRef: obj2.simultaneousHandlers, animatedProps: obj2.animatedProps } = appLauncherFlashListProps);
  return jsx(appLauncherFlashListProps(12291), { contentContainerStyle: null, scrollIndicatorInsets: { bottom }, ref: memo });
}
export function AppLauncherListEmptyState() {
  const tmp = closure_6();
  const obj = { style: tmp.emptyState, imageStyle: tmp.emptyStateImage, lightSource: _modDef12360, darkSource: _modDef12360, title: null, body: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.vYocDz);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.V6nAfF);
  return jsx(native.EmptyState, { style: tmp.emptyState, imageStyle: tmp.emptyStateImage, lightSource: _modDef12360, darkSource: _modDef12360, title: null, body: null });
}
export function AppLauncherListSearchBar(arg0) {
  const obj = { style: closure_6().searchBarContainer, children: null };
  const merged = Object.assign(arg0);
  obj.children = jsx(Search_SearchBar.SearchBar, { size: "md" });
  return <View style={closure_6().searchBarContainer}>{null}</View>;
}