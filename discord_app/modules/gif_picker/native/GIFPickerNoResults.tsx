// === Module 9747: GIFPickerNoResults ===

// Module 9747 (GIFPickerNoResults)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import BottomSheetModal from "BottomSheetModal" /* 6306 */;
import SearchEmpty from "SearchEmpty" /* 9523 */;
import useModalDismissGuardRefreshControl from "useModalDismissGuardRefreshControl" /* 9527 */;
import useExpressionPickerInsetsDefault from "useExpressionPickerInsets" /* 9731 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
fn(1085).GIFPickerResultTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj = { emptyStateContainer: { padding: 0, flex: 1 }, emptyStateBody: { color: nativeDefault.colors.TEXT_SUBTLE }, emptyStateImage: null };
let obj3 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.emptyStateImage = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerNoResults.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GIFPickerNoResults(arg0) {
  const cResult = c.c(16);
  ({ categoryType, inActionSheet } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { hasCategories: false };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const safeAreaBottomKeyboardAware = useExpressionPickerInsetsDefault(first).safeAreaBottomKeyboardAware;
  if (cResult[1] !== safeAreaBottomKeyboardAware) {
    const obj3 = { paddingBottom: safeAreaBottomKeyboardAware, flex: 1 };
    cResult[1] = safeAreaBottomKeyboardAware;
    cResult[2] = obj3;
    let tmp6 = obj3;
  } else {
    tmp6 = cResult[2];
  }
  const searchEmptySource = SearchEmpty.useSearchEmptySource();
  if (cResult[3] !== categoryType) {
    if (categoryType === GIFPickerResultTypes.FAVORITES) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.ZH4o6l);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t["5dX4UM"]);
    }
    cResult[3] = categoryType;
    cResult[4] = stringResult;
  } else {
    const modalDismissGuardRefreshControl = useModalDismissGuardRefreshControl.useModalDismissGuardRefreshControl();
    if (inActionSheet) {
      let BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
    } else {
      BottomSheetScrollView = ScrollView;
    }
    if (cResult[5] === searchEmptySource) {
      if (cResult[6] === tmp8) {
        if (cResult[7] === tmp4.emptyStateBody) {
          if (cResult[8] === tmp4.emptyStateContainer) {
            if (cResult[9] === tmp4.emptyStateImage) {
              let tmp14 = cResult[10];
            }
            if (cResult[11] === BottomSheetScrollView) {
              if (cResult[12] === tmp6) {
                if (cResult[13] === tmp13) {
                  if (cResult[14] === tmp14) {
                    let tmp17 = cResult[15];
                  }
                  return tmp17;
                }
              }
            }
            const obj4 = { contentContainerStyle: tmp6, keyboardShouldPersistTaps: "always", refreshControl: tmp13, children: tmp14 };
            const tmp19 = <BottomSheetScrollView contentContainerStyle={tmp6} keyboardShouldPersistTaps="always" refreshControl={tmp13}>{tmp14}</BottomSheetScrollView>;
            cResult[11] = BottomSheetScrollView;
            cResult[12] = tmp6;
            cResult[13] = tmp13;
            cResult[14] = tmp14;
            cResult[15] = tmp19;
            tmp17 = tmp19;
          }
        }
      }
    }
    const obj5 = { source: searchEmptySource, body: cResult[4], bodyStyle: null, containerStyle: null, imageStyle: null };
    ({ emptyStateBody: obj6.bodyStyle, emptyStateContainer: obj6.containerStyle, emptyStateImage: obj6.imageStyle } = tmp4);
    const tmp16 = jsx(native.RefreshEmptyState, { source: searchEmptySource, body: cResult[4], bodyStyle: null, containerStyle: null, imageStyle: null });
    cResult[5] = searchEmptySource;
    cResult[6] = cResult[4];
    cResult[7] = tmp4.emptyStateBody;
    cResult[8] = tmp4.emptyStateContainer;
    cResult[9] = tmp4.emptyStateImage;
    cResult[10] = tmp16;
    tmp14 = tmp16;
    const tmpResult2 = useModalDismissGuardRefreshControl;
  }
  const tmpResult = SearchEmpty;
}) : (function GIFPickerNoResults(inActionSheet) {
  inActionSheet = inActionSheet.inActionSheet;
  const tmp = closure_7();
  const safeAreaBottomKeyboardAware = useExpressionPickerInsetsDefault({ hasCategories: false }).safeAreaBottomKeyboardAware;
  const items = [safeAreaBottomKeyboardAware];
  const memo = noop.useMemo(() => ({ paddingBottom: safeAreaBottomKeyboardAware, flex: 1 }), items);
  const searchEmptySource = SearchEmpty.useSearchEmptySource();
  if (inActionSheet.categoryType === GIFPickerResultTypes.FAVORITES) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.ZH4o6l);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t["5dX4UM"]);
  }
  const modalDismissGuardRefreshControl = useModalDismissGuardRefreshControl.useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  const obj2 = { contentContainerStyle: memo, keyboardShouldPersistTaps: "always", refreshControl: null, children: null };
  let tmp9;
  if (inActionSheet) {
    tmp9 = modalDismissGuardRefreshControl;
  }
  obj2.refreshControl = tmp9;
  obj2.children = jsx(native.RefreshEmptyState, { source: searchEmptySource, body: stringResult, bodyStyle: tmp.emptyStateBody, containerStyle: tmp.emptyStateContainer, imageStyle: tmp.emptyStateImage });
  return <BottomSheetScrollView contentContainerStyle={memo} keyboardShouldPersistTaps="always" refreshControl={null}>{null}</BottomSheetScrollView>;
}));