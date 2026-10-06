// === Module 11803: AppLauncherList ===

// Module 11803 (AppLauncherList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import mergeProps from "mergeProps" /* 4591 */;
import SearchField2 from "SearchField" /* 6554 */;
import AppLauncherFlashList from "AppLauncherFlashList" /* 11740 */;
import AssetRegistryDefault from "AssetRegistry" /* 11804 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const AppLauncherFlashListDefault = AppLauncherFlashList;
let _require;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ searchBarContainer: { marginBottom: 16 }, emptyState: { backgroundColor: "transparent", justifyContent: "flex-start" }, emptyStateImage: { flex: 0 } });
const forwardRef = react.forwardRef;
let ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((contentContainerStyle, ref2) => {
  const obj = react2;
  const cResult = obj.c(18);
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj2 = AppLauncherFlashList;
  const appLauncherFlashListProps = obj2.useAppLauncherFlashListProps();
  if (cResult[0] === appLauncherFlashListProps.scrollerRef) {
    let tmp6;
    let tmp8;
    if (cResult[1] === ref2) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== bottom) {
      const obj3 = { paddingBottom: bottom };
      cResult[3] = bottom;
      cResult[4] = obj3;
      tmp8 = obj3;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === contentContainerStyle.contentContainerStyle) {
      let tmp10;
      let tmp11;
      if (cResult[6] === tmp8) {
        tmp10 = cResult[7];
      }
      if (cResult[8] !== bottom) {
        const obj4 = { bottom };
        cResult[8] = bottom;
        cResult[9] = obj4;
        tmp11 = obj4;
      } else {
        tmp11 = cResult[9];
      }
      if (cResult[10] === appLauncherFlashListProps.animatedProps) {
        if (cResult[11] === appLauncherFlashListProps.gestureRef) {
          if (cResult[12] === appLauncherFlashListProps.onScroll) {
            if (cResult[13] === tmp6) {
              if (cResult[14] === contentContainerStyle) {
                if (cResult[15] === tmp10) {
                  let tmp12;
                  if (cResult[16] === tmp11) {
                    tmp12 = cResult[17];
                  }
                  return tmp12;
                }
              }
            }
          }
        }
      }
      AppLauncherFlashListDefault;
      const merged = Object.assign(contentContainerStyle);
      ({ onScroll: obj6.animatedOnScroll, gestureRef: obj6.simultaneousHandlers, animatedProps: obj6.animatedProps } = appLauncherFlashListProps);
      const tmp18 = <tmp4Result contentContainerStyle={tmp10} scrollIndicatorInsets={tmp11} ref={tmp6} />;
      cResult[10] = appLauncherFlashListProps.animatedProps;
      cResult[11] = appLauncherFlashListProps.gestureRef;
      cResult[12] = appLauncherFlashListProps.onScroll;
      cResult[13] = tmp6;
      cResult[14] = contentContainerStyle;
      cResult[15] = tmp10;
      cResult[16] = tmp11;
      cResult[17] = tmp18;
      tmp12 = tmp18;
    }
    const items = [tmp8, contentContainerStyle.contentContainerStyle];
    cResult[5] = contentContainerStyle.contentContainerStyle;
    cResult[6] = tmp8;
    cResult[7] = items;
    tmp10 = items;
  }
  const tmpResult = mergeProps;
  const mergeRefsResult = tmpResult.mergeRefs(appLauncherFlashListProps.scrollerRef, ref2);
  cResult[0] = appLauncherFlashListProps.scrollerRef;
  cResult[1] = ref2;
  cResult[2] = mergeRefsResult;
  tmp6 = mergeRefsResult;
}) : ((contentContainerStyle, arg1) => {
  let appLauncherFlashListProps;
  let closure_0;
  _require = arg1;
  const bottom = appLauncherFlashListProps(1618)().bottom;
  let obj = require("AppLauncherFlashList");
  appLauncherFlashListProps = obj.useAppLauncherFlashListProps();
  const items = [appLauncherFlashListProps.scrollerRef, arg1];
  const memo = react.useMemo(() => {
    const obj = mergeProps;
    return obj.mergeRefs(appLauncherFlashListProps.scrollerRef, closure_0);
  }, items);
  const items1 = [{ paddingBottom: bottom }, contentContainerStyle.contentContainerStyle];
  appLauncherFlashListProps(11740);
  const merged = Object.assign(contentContainerStyle);
  ({ onScroll: obj2.animatedOnScroll, gestureRef: obj2.simultaneousHandlers, animatedProps: obj2.animatedProps } = appLauncherFlashListProps);
  return <tmp3 contentContainerStyle={items1} scrollIndicatorInsets={{ bottom }} ref={memo} />;
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let emptyState;
  let emptyStateImage;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp4 = closure_6();
  ({ emptyState, emptyStateImage } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t.vYocDz);
    const intl2 = intl3.intl;
    const stringResult1 = intl2.string(intl3.t.V6nAfF);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp5 = stringResult;
    tmp6 = stringResult1;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] === tmp4.emptyState) {
    let tmp9;
    if (cResult[3] === tmp4.emptyStateImage) {
      tmp9 = cResult[4];
    }
    return tmp9;
  }
  const EmptyState = native.EmptyState;
  const tmp10 = <EmptyState style={emptyState} imageStyle={emptyStateImage} lightSource={AssetRegistryDefault} darkSource={AssetRegistryDefault} title={tmp5} body={tmp6} />;
  cResult[2] = tmp4.emptyState;
  cResult[3] = tmp4.emptyStateImage;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (() => {
  const tmp = closure_6();
  const EmptyState = native.EmptyState;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  return <EmptyState style={tmp.emptyState} imageStyle={tmp.emptyStateImage} lightSource={AssetRegistryDefault} darkSource={AssetRegistryDefault} title={intl.string(intl3.t.vYocDz)} body={intl2.string(intl3.t.V6nAfF)} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp4 = closure_6();
  if (cResult[0] !== arg0) {
    const SearchField = SearchField2.SearchField;
    const merged = Object.assign(arg0);
    const tmp10 = <SearchField size="md" />;
    cResult[0] = arg0;
    cResult[1] = tmp10;
    tmp5 = tmp10;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.searchBarContainer) {
    let tmp11;
    if (cResult[3] === tmp5) {
      tmp11 = cResult[4];
    }
    return tmp11;
  }
  const tmp12 = <View style={tmp4.searchBarContainer}>{tmp5}</View>;
  cResult[2] = tmp4.searchBarContainer;
  cResult[3] = tmp5;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  const SearchField = SearchField2.SearchField;
  const merged = Object.assign(arg0);
  return <View style={closure_6().searchBarContainer}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherList.tsx");

export const AppLauncherList = forwardRefResult;
export const AppLauncherListEmptyState = tmp4;
export const AppLauncherListSearchBar = tmp5;