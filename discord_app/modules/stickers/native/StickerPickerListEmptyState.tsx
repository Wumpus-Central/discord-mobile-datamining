// === Module 10417: StickerPickerListEmptyState ===

// Module 10417 (StickerPickerListEmptyState)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ScrollView = fn(17).ScrollView;
const EXPRESSION_FOOTER_HEIGHT = fn(1074).EXPRESSION_FOOTER_HEIGHT;
const jsx = fn(21).jsx;
fn(4560);
let obj = { emptyStateContainer: { padding: 0, flex: 1 }, emptyStateBody: null, emptyStateImage: null };
obj = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.emptyStateBody = obj;
const createStyles = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
obj.emptyStateImage = createStyles;
let closure_7 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPickerListEmptyState.tsx");

export default noop.memo(function StickerPickerListEmptyState(insetBottom) {
  ({ inActionSheet, insetTop } = insetBottom);
  insetBottom = insetBottom.insetBottom;
  const items = [insetBottom, insetTop];
  const memo = noop.useMemo(() => ({ marginBottom: insetBottom + EXPRESSION_FOOTER_HEIGHT, marginTop: insetTop, flex: 1 }), items);
  let obj = insetTop(10321);
  const modalDismissGuardRefreshControl = obj.useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = insetTop(6627).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  obj = { contentContainerStyle: memo, keyboardShouldPersistTaps: "always", refreshControl: null, children: null };
  let tmp7;
  if (inActionSheet) {
    tmp7 = modalDismissGuardRefreshControl;
  }
  obj.refreshControl = tmp7;
  obj = { body: null, bodyStyle: null, containerStyle: null, imageStyle: null, source: null, titleStyle: null };
  const intl = insetTop(1114).intl;
  obj.body = intl.string(insetTop(1114).t.jyiGfc);
  ({ emptyStateBody: obj3.bodyStyle, emptyStateContainer: obj3.containerStyle, emptyStateImage: obj3.imageStyle } = closure_7());
  obj.source = insetBottom(10418);
  obj.titleStyle = { marginBottom: 0 };
  obj.children = jsx(insetTop(1178).RefreshEmptyState, { body: null, bodyStyle: null, containerStyle: null, imageStyle: null, source: null, titleStyle: null });
  return <BottomSheetScrollView body={null} bodyStyle={null} containerStyle={null} imageStyle={null} source={null} titleStyle={null} />;
});