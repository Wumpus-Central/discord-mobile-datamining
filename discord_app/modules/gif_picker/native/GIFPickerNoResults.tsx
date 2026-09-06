// === Module 10377: GIFPickerNoResults ===

// Module 10377 (GIFPickerNoResults)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import BottomSheetModal from "BottomSheetModal" /* 6627 */;
import useExpressionPickerInsetsDefault from "useExpressionPickerInsets" /* 10283 */;
import SearchEmpty from "SearchEmpty" /* 10317 */;
import useModalDismissGuardRefreshControl from "useModalDismissGuardRefreshControl" /* 10321 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
fn(1074).GIFPickerResultTypes;
const jsx = fn(21).jsx;
fn(4560);
let obj = { emptyStateContainer: { padding: 0, flex: 1 }, emptyStateBody: null, emptyStateImage: null };
obj = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.emptyStateBody = obj;
const createStyles = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
obj.emptyStateImage = createStyles;
let closure_7 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerNoResults.tsx");

export default noop.memo(function GIFPickerNoResults(inActionSheet) {
  inActionSheet = inActionSheet.inActionSheet;
  const tmp = closure_7();
  const safeAreaBottomKeyboardAware = useExpressionPickerInsetsDefault({ hasCategories: false }).safeAreaBottomKeyboardAware;
  const items = [safeAreaBottomKeyboardAware];
  const memo = noop.useMemo(() => ({ paddingBottom: safeAreaBottomKeyboardAware, flex: 1 }), items);
  let obj = SearchEmpty;
  const searchEmptySource = obj.useSearchEmptySource();
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
  obj = { contentContainerStyle: memo, keyboardShouldPersistTaps: "always", refreshControl: null, children: null };
  let tmp9;
  if (inActionSheet) {
    tmp9 = modalDismissGuardRefreshControl;
  }
  obj.refreshControl = tmp9;
  obj = { source: searchEmptySource, body: stringResult, bodyStyle: tmp.emptyStateBody, containerStyle: tmp.emptyStateContainer, imageStyle: tmp.emptyStateImage };
  obj.children = jsx(native.RefreshEmptyState, { source: searchEmptySource, body: stringResult, bodyStyle: tmp.emptyStateBody, containerStyle: tmp.emptyStateContainer, imageStyle: tmp.emptyStateImage });
  return <BottomSheetScrollView source={searchEmptySource} body={stringResult} bodyStyle={tmp.emptyStateBody} containerStyle={tmp.emptyStateContainer} imageStyle={tmp.emptyStateImage} />;
});