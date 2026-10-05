// === Module 10101: GIFPickerNoResults ===

// Module 10101 (GIFPickerNoResults)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import BottomSheetModal from "BottomSheetModal" /* 6112 */;
import SearchEmpty from "SearchEmpty" /* 9921 */;
import useModalDismissGuardRefreshControl from "useModalDismissGuardRefreshControl" /* 9925 */;
import useExpressionPickerInsetsDefault from "useExpressionPickerInsets" /* 10086 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const ScrollView = react_native.ScrollView;
const GIFPickerResultTypes = Constants.GIFPickerResultTypes;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { emptyStateContainer: { padding: 0, flex: 1 }, emptyStateBody: obj2, emptyStateImage: obj3 };
obj2 = { color: nativeDefault.colors.TEXT_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
let closure_7 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let BottomSheetScrollView;
  let categoryType;
  let first;
  let inActionSheet;
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(16);
  ({ categoryType, inActionSheet } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { hasCategories: false };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const safeAreaBottomKeyboardAware = useExpressionPickerInsetsDefault(first).safeAreaBottomKeyboardAware;
  if (cResult[1] !== safeAreaBottomKeyboardAware) {
    const obj3 = { paddingBottom: safeAreaBottomKeyboardAware, flex: 1 };
    cResult[1] = safeAreaBottomKeyboardAware;
    cResult[2] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = SearchEmpty;
  const searchEmptySource = tmpResult.useSearchEmptySource();
  if (cResult[3] !== categoryType) {
    let stringResult;
    if (categoryType === GIFPickerResultTypes.FAVORITES) {
      const intl2 = intl3.intl;
      stringResult = intl2.string(intl3.t.ZH4o6l);
    } else {
      const intl = intl3.intl;
      stringResult = intl.string(intl3.t["5dX4UM"]);
    }
    cResult[3] = categoryType;
    cResult[4] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[4];
  }
  const tmpResult2 = useModalDismissGuardRefreshControl;
  const modalDismissGuardRefreshControl = tmpResult2.useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  if (cResult[5] === searchEmptySource) {
    if (cResult[6] === tmp8) {
      if (cResult[7] === tmp4.emptyStateBody) {
        if (cResult[8] === tmp4.emptyStateContainer) {
          let tmp13;
          if (cResult[9] === tmp4.emptyStateImage) {
            tmp13 = cResult[10];
          }
          if (cResult[11] === BottomSheetScrollView) {
            if (cResult[12] === tmp6) {
              if (cResult[13] === tmp12) {
                let tmp15;
                if (cResult[14] === tmp13) {
                  tmp15 = cResult[15];
                }
                return tmp15;
              }
            }
          }
          const tmp17 = <BottomSheetScrollView contentContainerStyle={tmp6} keyboardShouldPersistTaps="always" refreshControl={tmp12}>{tmp13}</BottomSheetScrollView>;
          cResult[11] = BottomSheetScrollView;
          cResult[12] = tmp6;
          cResult[13] = tmp12;
          cResult[14] = tmp13;
          cResult[15] = tmp17;
          tmp15 = tmp17;
        }
      }
    }
  }
  const tmp14 = jsx(native.RefreshEmptyState, { source: searchEmptySource, body: tmp8, bodyStyle: tmp4.emptyStateBody, containerStyle: tmp4.emptyStateContainer, imageStyle: tmp4.emptyStateImage });
  cResult[5] = searchEmptySource;
  cResult[6] = tmp8;
  cResult[7] = tmp4.emptyStateBody;
  cResult[8] = tmp4.emptyStateContainer;
  cResult[9] = tmp4.emptyStateImage;
  cResult[10] = tmp14;
  tmp13 = tmp14;
}) : ((inActionSheet) => {
  inActionSheet = inActionSheet.inActionSheet;
  const categoryType = inActionSheet.categoryType;
  const tmp = closure_7();
  const safeAreaBottomKeyboardAware = useExpressionPickerInsetsDefault({ hasCategories: false }).safeAreaBottomKeyboardAware;
  const items = [safeAreaBottomKeyboardAware];
  const memo = react.useMemo(() => ({ paddingBottom: safeAreaBottomKeyboardAware, flex: 1 }), items);
  const obj = SearchEmpty;
  const searchEmptySource = obj.useSearchEmptySource();
  if (categoryType === GIFPickerResultTypes.FAVORITES) {
    const intl2 = intl3.intl;
    let stringResult = intl2.string(intl3.t.ZH4o6l);
  } else {
    const intl = intl3.intl;
    stringResult = intl.string(intl3.t["5dX4UM"]);
  }
  const tmp4Result = useModalDismissGuardRefreshControl;
  const modalDismissGuardRefreshControl = tmp4Result.useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  let tmp9;
  if (inActionSheet) {
    tmp9 = modalDismissGuardRefreshControl;
  }
  return <BottomSheetScrollView contentContainerStyle={memo} keyboardShouldPersistTaps="always" refreshControl={tmp9}>{null}</BottomSheetScrollView>;
}));
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerNoResults.tsx");

export default memoResult;