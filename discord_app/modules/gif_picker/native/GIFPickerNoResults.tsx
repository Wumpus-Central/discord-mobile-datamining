// discord_app/modules/gif_picker/native/GIFPickerNoResults.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import BottomSheetModal from "../../../../_runtime/06735_BottomSheetModal.js";
import useExpressionPickerInsetsDefault from "../../expression_picker/native/useExpressionPickerInsets.tsx";
import SearchEmpty from "../../../design/components/Illustration/native/redesign/generated/SearchEmpty.tsx";
import useModalDismissGuardRefreshControl from "../../keyboard/native/useModalDismissGuardRefreshControl.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
fn(1074).GIFPickerResultTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let obj = {
  emptyStateContainer: { padding: 0, flex: 1 },
  emptyStateBody: { color: nativeDefault.colors.TEXT_SUBTLE },
  emptyStateImage: null,
};
const obj3 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.emptyStateImage = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
let closure_7 = createStyles.createStyles(obj);
const obj4 = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerNoResults.tsx");

export default noop.memo(function GIFPickerNoResults(inActionSheet) {
  inActionSheet = inActionSheet.inActionSheet;
  const tmp = closure_7();
  const safeAreaBottomKeyboardAware = useExpressionPickerInsetsDefault({
    hasCategories: false,
  }).safeAreaBottomKeyboardAware;
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
  const obj2 = {
    contentContainerStyle: memo,
    keyboardShouldPersistTaps: "always",
    refreshControl: null,
    children: null,
  };
  let tmp9;
  if (inActionSheet) {
    tmp9 = modalDismissGuardRefreshControl;
  }
  obj2.refreshControl = tmp9;
  obj2.children = jsx(native.RefreshEmptyState, {
    source: searchEmptySource,
    body: stringResult,
    bodyStyle: tmp.emptyStateBody,
    containerStyle: tmp.emptyStateContainer,
    imageStyle: tmp.emptyStateImage,
  });
  return (
    <BottomSheetScrollView contentContainerStyle={memo} keyboardShouldPersistTaps="always" refreshControl={null}>
      {null}
    </BottomSheetScrollView>
  );
});
