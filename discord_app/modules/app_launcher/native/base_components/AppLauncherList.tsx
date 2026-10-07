// === Module 11803: AppLauncherList ===

// Module 11803 (AppLauncherList)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import mergeProps from "mergeProps" /* 4591 */;
import SearchField from "SearchField" /* 6554 */;
import AppLauncherFlashList from "AppLauncherFlashList" /* 11740 */;
import _modDef11804 from "module_11804" /* 11804 */;
import noop from "module_19" /* 19 */;

const AppLauncherFlashListDefault = AppLauncherFlashList;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_6 = createStyles.createStyles({ searchBarContainer: { marginBottom: 16 }, emptyState: { backgroundColor: "transparent", justifyContent: "flex-start" }, emptyStateImage: { flex: 0 } });
fn(558);
let ReactCompilerGating = fn(558);
const forwardRefResult = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((contentContainerStyle, ref2) => {
  const cResult = c.c(18);
  const bottom = useSafeAreaInsetsDefault().bottom;
  const appLauncherFlashListProps = AppLauncherFlashList.useAppLauncherFlashListProps();
  if (cResult[0] === appLauncherFlashListProps.scrollerRef) {
    if (cResult[1] === ref2) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== bottom) {
      const obj3 = { paddingBottom: bottom };
      cResult[3] = bottom;
      cResult[4] = obj3;
      let tmp8 = obj3;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === contentContainerStyle.contentContainerStyle) {
      if (cResult[6] === tmp8) {
        let tmp10 = cResult[7];
      }
      if (cResult[8] !== bottom) {
        const obj4 = { bottom };
        cResult[8] = bottom;
        cResult[9] = obj4;
        let tmp11 = obj4;
      } else {
        tmp11 = cResult[9];
      }
      if (cResult[10] === appLauncherFlashListProps.animatedProps) {
        if (cResult[11] === appLauncherFlashListProps.gestureRef) {
          if (cResult[12] === appLauncherFlashListProps.onScroll) {
            if (cResult[13] === tmp6) {
              if (cResult[14] === contentContainerStyle) {
                if (cResult[15] === tmp10) {
                  if (cResult[16] === tmp11) {
                    let tmp12 = cResult[17];
                  }
                  return tmp12;
                }
              }
            }
          }
        }
      }
      const obj5 = { contentContainerStyle: tmp10, scrollIndicatorInsets: tmp11, ref: tmp6 };
      const merged = Object.assign(contentContainerStyle);
      ({ onScroll: obj6.animatedOnScroll, gestureRef: obj6.simultaneousHandlers, animatedProps: obj6.animatedProps } = appLauncherFlashListProps);
      const tmp18 = jsx(AppLauncherFlashListDefault, { contentContainerStyle: tmp10, scrollIndicatorInsets: tmp11, ref: tmp6 });
      cResult[10] = appLauncherFlashListProps.animatedProps;
      cResult[11] = appLauncherFlashListProps.gestureRef;
      cResult[12] = appLauncherFlashListProps.onScroll;
      cResult[13] = tmp6;
      cResult[14] = contentContainerStyle;
      cResult[15] = tmp10;
      cResult[16] = tmp11;
      cResult[17] = tmp18;
      tmp12 = tmp18;
      const tmp4Result = AppLauncherFlashListDefault;
    }
    const items = [tmp8, contentContainerStyle.contentContainerStyle];
    cResult[5] = contentContainerStyle.contentContainerStyle;
    cResult[6] = tmp8;
    cResult[7] = items;
    tmp10 = items;
  }
  const mergeRefsResult = mergeProps.mergeRefs(appLauncherFlashListProps.scrollerRef, ref2);
  cResult[0] = appLauncherFlashListProps.scrollerRef;
  cResult[1] = ref2;
  cResult[2] = mergeRefsResult;
  tmp6 = mergeRefsResult;
  const tmpResult = mergeProps;
}) : ((contentContainerStyle, arg1) => {
  _require = arg1;
  const bottom = appLauncherFlashListProps(1618)().bottom;
  appLauncherFlashListProps = require("AppLauncherFlashList").useAppLauncherFlashListProps();
  const items = [appLauncherFlashListProps.scrollerRef, arg1];
  const memo = noop.useMemo(() => mergeProps.mergeRefs(appLauncherFlashListProps.scrollerRef, closure_0), items);
  const obj3 = { contentContainerStyle: null, scrollIndicatorInsets: { bottom }, ref: memo };
  const items1 = [{ paddingBottom: bottom }, contentContainerStyle.contentContainerStyle];
  obj3.contentContainerStyle = items1;
  const obj = require("AppLauncherFlashList");
  const merged = Object.assign(contentContainerStyle);
  ({ onScroll: obj2.animatedOnScroll, gestureRef: obj2.simultaneousHandlers, animatedProps: obj2.animatedProps } = appLauncherFlashListProps);
  return jsx(appLauncherFlashListProps(11740), { contentContainerStyle: null, scrollIndicatorInsets: { bottom }, ref: memo });
}));
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(5);
  const tmp4 = closure_6();
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
  const tmp10 = jsx(native.EmptyState, { style: emptyState, imageStyle: emptyStateImage, lightSource: _modDef11804, darkSource: _modDef11804, title: tmp5, body: tmp6 });
  cResult[2] = tmp4.emptyState;
  cResult[3] = tmp4.emptyStateImage;
  cResult[4] = tmp10;
  tmp9 = tmp10;
  const obj2 = { style: emptyState, imageStyle: emptyStateImage, lightSource: _modDef11804, darkSource: _modDef11804, title: tmp5, body: tmp6 };
}) : (() => {
  const tmp = closure_6();
  const obj = { style: tmp.emptyState, imageStyle: tmp.emptyStateImage, lightSource: _modDef11804, darkSource: _modDef11804, title: null, body: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.vYocDz);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.V6nAfF);
  return jsx(native.EmptyState, { style: tmp.emptyState, imageStyle: tmp.emptyStateImage, lightSource: _modDef11804, darkSource: _modDef11804, title: null, body: null });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherList.tsx");

export const AppLauncherList = forwardRefResult;
export const AppLauncherListEmptyState = tmp3;
export const AppLauncherListSearchBar = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  const tmp4 = closure_6();
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
}) : ((arg0) => {
  const obj = { style: closure_6().searchBarContainer, children: null };
  const merged = Object.assign(arg0);
  obj.children = jsx(SearchField.SearchField, { size: "md" });
  return <View style={closure_6().searchBarContainer}>{null}</View>;
});