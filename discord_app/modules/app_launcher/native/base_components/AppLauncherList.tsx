// === Module 11870: AppLauncherList ===

// Module 11870 (AppLauncherList)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import mergeProps from "mergeProps" /* 4783 */;
import SearchField from "SearchField" /* 6730 */;
import AppLauncherFlashList from "AppLauncherFlashList" /* 11806 */;
import _modDef11871 from "module_11871" /* 11871 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const AppLauncherFlashListDefault = AppLauncherFlashList;

require = fn;
let closure_3 = ["ref"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_8 = createStyles.createStyles({ searchBarContainer: { marginBottom: 16 }, emptyState: { backgroundColor: "transparent", justifyContent: "flex-start" }, emptyStateImage: { flex: 0 } });
fn(558);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherList(ref) {
  const cResult = c.c(21);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref.ref, closure_3);
    cResult[0] = ref.ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    let tmp5 = ref;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const bottom = useSafeAreaInsetsDefault().bottom;
  const appLauncherFlashListProps = AppLauncherFlashList.useAppLauncherFlashListProps();
  if (cResult[3] === appLauncherFlashListProps.scrollerRef) {
    if (cResult[4] === tmp5) {
      let tmp11 = cResult[5];
    }
    if (cResult[6] !== bottom) {
      const obj2 = { paddingBottom: bottom };
      cResult[6] = bottom;
      cResult[7] = obj2;
      let tmp13 = obj2;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] === tmp4.contentContainerStyle) {
      if (cResult[9] === tmp13) {
        let tmp14 = cResult[10];
      }
      if (cResult[11] !== bottom) {
        const obj3 = { bottom };
        cResult[11] = bottom;
        cResult[12] = obj3;
        let tmp15 = obj3;
      } else {
        tmp15 = cResult[12];
      }
      if (cResult[13] === appLauncherFlashListProps.animatedProps) {
        if (cResult[14] === appLauncherFlashListProps.gestureRef) {
          if (cResult[15] === appLauncherFlashListProps.onScroll) {
            if (cResult[16] === tmp11) {
              if (cResult[17] === tmp4) {
                if (cResult[18] === tmp14) {
                  if (cResult[19] === tmp15) {
                    let tmp16 = cResult[20];
                  }
                  return tmp16;
                }
              }
            }
          }
        }
      }
      const obj4 = { contentContainerStyle: tmp14, scrollIndicatorInsets: tmp15, ref: tmp11 };
      const merged = Object.assign(tmp4);
      ({ onScroll: obj6.animatedOnScroll, gestureRef: obj6.simultaneousHandlers, animatedProps: obj6.animatedProps } = appLauncherFlashListProps);
      const tmp22 = jsx(AppLauncherFlashListDefault, { contentContainerStyle: tmp14, scrollIndicatorInsets: tmp15, ref: tmp11 });
      cResult[13] = appLauncherFlashListProps.animatedProps;
      cResult[14] = appLauncherFlashListProps.gestureRef;
      cResult[15] = appLauncherFlashListProps.onScroll;
      cResult[16] = tmp11;
      cResult[17] = tmp4;
      cResult[18] = tmp14;
      cResult[19] = tmp15;
      cResult[20] = tmp22;
      tmp16 = tmp22;
      const tmp9Result = AppLauncherFlashListDefault;
    }
    const items = [tmp13, tmp4.contentContainerStyle];
    cResult[8] = tmp4.contentContainerStyle;
    cResult[9] = tmp13;
    cResult[10] = items;
    tmp14 = items;
  }
  const tmpResult = AppLauncherFlashList;
  const mergeRefsResult = mergeProps.mergeRefs(appLauncherFlashListProps.scrollerRef, tmp5);
  cResult[3] = appLauncherFlashListProps.scrollerRef;
  cResult[4] = tmp5;
  cResult[5] = mergeRefsResult;
  tmp11 = mergeRefsResult;
  const tmpResult2 = mergeProps;
}) : (function AppLauncherList(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  let appLauncherFlashListProps;
  const bottom = appLauncherFlashListProps(1630)().bottom;
  appLauncherFlashListProps = ref(11806).useAppLauncherFlashListProps();
  const items = [appLauncherFlashListProps.scrollerRef, ref];
  const memo = noop.useMemo(() => mergeProps.mergeRefs(appLauncherFlashListProps.scrollerRef, ref), items);
  const obj3 = { contentContainerStyle: null, scrollIndicatorInsets: { bottom }, ref: memo };
  const items1 = [{ paddingBottom: bottom }, merged.contentContainerStyle];
  obj3.contentContainerStyle = items1;
  const obj = ref(11806);
  const merged1 = Object.assign(merged);
  ({ onScroll: obj2.animatedOnScroll, gestureRef: obj2.simultaneousHandlers, animatedProps: obj2.animatedProps } = appLauncherFlashListProps);
  return jsx(appLauncherFlashListProps(11806), { contentContainerStyle: null, scrollIndicatorInsets: { bottom }, ref: memo });
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherListEmptyState() {
  const cResult = c.c(5);
  const tmp4 = closure_8();
  ({ emptyState, emptyStateImage } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.vYocDz);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.V6nAfF);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp5 = stringResult;
    tmp6 = stringResult1;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] === tmp4.emptyState) {
    if (cResult[3] === tmp4.emptyStateImage) {
      let tmp9 = cResult[4];
    }
    return tmp9;
  }
  const tmp10 = jsx(native.EmptyState, { style: emptyState, imageStyle: emptyStateImage, lightSource: _modDef11871, darkSource: _modDef11871, title: tmp5, body: tmp6 });
  cResult[2] = tmp4.emptyState;
  cResult[3] = tmp4.emptyStateImage;
  cResult[4] = tmp10;
  tmp9 = tmp10;
  const obj2 = { style: emptyState, imageStyle: emptyStateImage, lightSource: _modDef11871, darkSource: _modDef11871, title: tmp5, body: tmp6 };
}) : (function AppLauncherListEmptyState() {
  const tmp = closure_8();
  const obj = { style: tmp.emptyState, imageStyle: tmp.emptyStateImage, lightSource: _modDef11871, darkSource: _modDef11871, title: null, body: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.vYocDz);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.V6nAfF);
  return jsx(native.EmptyState, { style: tmp.emptyState, imageStyle: tmp.emptyStateImage, lightSource: _modDef11871, darkSource: _modDef11871, title: null, body: null });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherList.tsx");

export const AppLauncherList = tmp2;
export const AppLauncherListEmptyState = tmp3;
export const AppLauncherListSearchBar = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherListSearchBar(arg0) {
  const cResult = c.c(5);
  const tmp4 = closure_8();
  if (cResult[0] !== arg0) {
    const obj2 = { size: "md" };
    const merged = Object.assign(arg0);
    const tmp10 = jsx(SearchField.SearchField, { size: "md" });
    cResult[0] = arg0;
    cResult[1] = tmp10;
    let tmp5 = tmp10;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.searchBarContainer) {
    if (cResult[3] === tmp5) {
      let tmp11 = cResult[4];
    }
    return tmp11;
  }
  const tmp12 = <View style={tmp4.searchBarContainer}>{tmp5}</View>;
  cResult[2] = tmp4.searchBarContainer;
  cResult[3] = tmp5;
  cResult[4] = tmp12;
  tmp11 = tmp12;
  const obj3 = { style: tmp4.searchBarContainer, children: tmp5 };
}) : (function AppLauncherListSearchBar(arg0) {
  const obj = { style: closure_8().searchBarContainer, children: null };
  const merged = Object.assign(arg0);
  obj.children = jsx(SearchField.SearchField, { size: "md" });
  return <View style={closure_8().searchBarContainer}>{null}</View>;
});