// discord_app/modules/emoji_picker/native/components/EmojiPickerListComponentEmpty.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import SearchEmpty from "../../../../design/components/Illustration/native/redesign/generated/SearchEmpty.tsx";
import useModalDismissGuardRefreshControl from "../../../keyboard/native/useModalDismissGuardRefreshControl.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
fn(4560);
let obj = { emptyStateContainer: { padding: 0, flex: 1 }, emptyStateBody: null, emptyStateImage: null };
obj = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.emptyStateBody = obj;
const createStyles = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
obj.emptyStateImage = createStyles;
let closure_5 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponentEmpty.tsx");

export default noop.memo(function EmojiPickerListComponentEmpty(insetBottom) {
  ({ inActionSheet, insetTop } = insetBottom);
  insetBottom = insetBottom.insetBottom;
  const items = [insetBottom, insetTop];
  const memo = noop.useMemo(() => ({ marginBottom: insetBottom, marginTop: insetTop, flex: 1 }), items);
  let obj = SearchEmpty;
  const searchEmptySource = obj.useSearchEmptySource();
  const tmp = closure_5();
  const modalDismissGuardRefreshControl = useModalDismissGuardRefreshControl.useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = tmp3(6627).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  obj = { contentContainerStyle: memo, keyboardShouldPersistTaps: "always", refreshControl: null, children: null };
  let tmp8;
  if (inActionSheet) {
    tmp8 = modalDismissGuardRefreshControl;
  }
  obj.refreshControl = tmp8;
  obj = { source: searchEmptySource, body: null, bodyStyle: null, containerStyle: null, imageStyle: null };
  const intl = tmp3(1114).intl;
  obj.body = intl.string(util.t.IxxiKF);
  ({
    emptyStateBody: obj4.bodyStyle,
    emptyStateContainer: obj4.containerStyle,
    emptyStateImage: obj4.imageStyle,
  } = tmp);
  obj.children = jsx(native.RefreshEmptyState, {
    source: searchEmptySource,
    body: null,
    bodyStyle: null,
    containerStyle: null,
    imageStyle: null,
  });
  return (
    <BottomSheetScrollView
      source={searchEmptySource}
      body={null}
      bodyStyle={null}
      containerStyle={null}
      imageStyle={null}
    />
  );
});
