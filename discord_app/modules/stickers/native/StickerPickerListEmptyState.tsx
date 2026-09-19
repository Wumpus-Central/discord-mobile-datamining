// === Module 10676: StickerPickerListEmptyState ===

// Module 10676 (StickerPickerListEmptyState)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ScrollView = fn(17).ScrollView;
const EXPRESSION_FOOTER_HEIGHT = fn(1074).EXPRESSION_FOOTER_HEIGHT;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
const obj = { emptyStateContainer: { padding: 0, flex: 1 }, emptyStateBody: { color: nativeDefault.colors.TEXT_SUBTLE }, emptyStateImage: null };
const obj3 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.emptyStateImage = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
let closure_7 = createStyles.createStyles(obj);
const obj4 = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPickerListEmptyState.tsx");

export default noop.memo(function StickerPickerListEmptyState(insetBottom) {
  ({ inActionSheet, insetTop } = insetBottom);
  insetBottom = insetBottom.insetBottom;
  const items = [insetBottom, insetTop];
  const memo = noop.useMemo(() => ({ marginBottom: insetBottom + EXPRESSION_FOOTER_HEIGHT, marginTop: insetTop, flex: 1 }), items);
  const tmp = closure_7();
  const modalDismissGuardRefreshControl = insetTop(10579).useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = insetTop(6864).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  const obj2 = { contentContainerStyle: memo, keyboardShouldPersistTaps: "always", refreshControl: null, children: null };
  let tmp7;
  if (inActionSheet) {
    tmp7 = modalDismissGuardRefreshControl;
  }
  obj2.refreshControl = tmp7;
  const obj5 = { body: null, bodyStyle: null, containerStyle: null, imageStyle: null, source: null, titleStyle: null };
  const intl = insetTop(1115).intl;
  obj5.body = intl.string(insetTop(1115).t.jyiGfc);
  ({ emptyStateBody: obj3.bodyStyle, emptyStateContainer: obj3.containerStyle, emptyStateImage: obj3.imageStyle } = tmp);
  obj5.source = insetBottom(10677);
  obj5.titleStyle = { marginBottom: 0 };
  obj2.children = jsx(insetTop(1177).RefreshEmptyState, { body: null, bodyStyle: null, containerStyle: null, imageStyle: null, source: null, titleStyle: null });
  return <BottomSheetScrollView contentContainerStyle={memo} keyboardShouldPersistTaps="always" refreshControl={null}>{null}</BottomSheetScrollView>;
});