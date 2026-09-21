// discord_app/modules/emoji_picker/native/components/EmojiPickerListComponentEmpty.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import BottomSheetModal from "../../../../../_runtime/06869_BottomSheetModal.js";
import SearchEmpty from "../../../../design/components/Illustration/native/redesign/generated/SearchEmpty.tsx";
import useModalDismissGuardRefreshControl from "../../../keyboard/native/useModalDismissGuardRefreshControl.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj = {
  emptyStateContainer: { padding: 0, flex: 1 },
  emptyStateBody: { color: nativeDefault.colors.TEXT_SUBTLE },
  emptyStateImage: null,
};
let obj3 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.emptyStateImage = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
let closure_5 = createStyles.createStyles(obj);
const obj4 = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponentEmpty.tsx");

export default noop.memo(function EmojiPickerListComponentEmpty(insetBottom) {
  ({ inActionSheet, insetTop } = insetBottom);
  insetBottom = insetBottom.insetBottom;
  const items = [insetBottom, insetTop];
  const memo = noop.useMemo(() => ({ marginBottom: insetBottom, marginTop: insetTop, flex: 1 }), items);
  const tmp = closure_5();
  const searchEmptySource = SearchEmpty.useSearchEmptySource();
  const modalDismissGuardRefreshControl = useModalDismissGuardRefreshControl.useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  const obj3 = {
    contentContainerStyle: memo,
    keyboardShouldPersistTaps: "always",
    refreshControl: null,
    children: null,
  };
  let tmp8;
  if (inActionSheet) {
    tmp8 = modalDismissGuardRefreshControl;
  }
  obj3.refreshControl = tmp8;
  const obj6 = { source: searchEmptySource, body: null, bodyStyle: null, containerStyle: null, imageStyle: null };
  const intl = util.intl;
  obj6.body = intl.string(util.t.IxxiKF);
  ({
    emptyStateBody: obj4.bodyStyle,
    emptyStateContainer: obj4.containerStyle,
    emptyStateImage: obj4.imageStyle,
  } = tmp);
  obj3.children = jsx(native.RefreshEmptyState, {
    source: searchEmptySource,
    body: null,
    bodyStyle: null,
    containerStyle: null,
    imageStyle: null,
  });
  return (
    <BottomSheetScrollView contentContainerStyle={memo} keyboardShouldPersistTaps="always" refreshControl={null}>
      {null}
    </BottomSheetScrollView>
  );
});
