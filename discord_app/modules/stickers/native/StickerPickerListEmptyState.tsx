// === Module 10159: StickerPickerListEmptyState ===

// Module 10159 (StickerPickerListEmptyState)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import BottomSheetModal from "BottomSheetModal" /* 6119 */;
import useModalDismissGuardRefreshControl from "useModalDismissGuardRefreshControl" /* 9938 */;
import _modDef10160 from "module_10160" /* 10160 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const EXPRESSION_FOOTER_HEIGHT = fn(1085).EXPRESSION_FOOTER_HEIGHT;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj = { emptyStateContainer: { padding: 0, flex: 1 }, emptyStateBody: { color: nativeDefault.colors.TEXT_SUBTLE }, emptyStateImage: null };
let obj3 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.emptyStateImage = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPickerListEmptyState.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((insetBottom) => {
  const cResult = c.c(14);
  ({ inActionSheet, insetTop } = insetBottom);
  const tmp4 = closure_7();
  const sum = insetBottom.insetBottom + EXPRESSION_FOOTER_HEIGHT;
  if (cResult[0] === insetTop) {
    if (cResult[1] === sum) {
      let tmp6 = cResult[2];
    }
    const modalDismissGuardRefreshControl = useModalDismissGuardRefreshControl.useModalDismissGuardRefreshControl();
    if (inActionSheet) {
      let BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
    } else {
      BottomSheetScrollView = ScrollView;
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.jyiGfc);
      cResult[3] = stringResult;
      let tmp10 = stringResult;
    } else {
      tmp10 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { marginBottom: 0 };
      cResult[4] = obj2;
      let tmp12 = obj2;
    } else {
      tmp12 = cResult[4];
    }
    if (cResult[5] === tmp4.emptyStateBody) {
      if (cResult[6] === tmp4.emptyStateContainer) {
        if (cResult[7] === tmp4.emptyStateImage) {
          let tmp13 = cResult[8];
        }
        if (cResult[9] === BottomSheetScrollView) {
          if (cResult[10] === tmp6) {
            if (cResult[11] === tmp8) {
              if (cResult[12] === tmp13) {
                let tmp17 = cResult[13];
              }
              return tmp17;
            }
          }
        }
        const obj3 = { contentContainerStyle: tmp6, keyboardShouldPersistTaps: "always", refreshControl: tmp8, children: tmp13 };
        const tmp19 = <BottomSheetScrollView contentContainerStyle={tmp6} keyboardShouldPersistTaps="always" refreshControl={tmp8}>{tmp13}</BottomSheetScrollView>;
        cResult[9] = BottomSheetScrollView;
        cResult[10] = tmp6;
        cResult[11] = tmp8;
        cResult[12] = tmp13;
        cResult[13] = tmp19;
        tmp17 = tmp19;
      }
    }
    const obj4 = { body: tmp10, bodyStyle: null, containerStyle: null, imageStyle: null, source: null, titleStyle: null };
    ({ emptyStateBody: obj5.bodyStyle, emptyStateContainer: obj5.containerStyle, emptyStateImage: obj5.imageStyle } = tmp4);
    obj4.source = _modDef10160;
    obj4.titleStyle = tmp12;
    const tmp16 = jsx(native.RefreshEmptyState, { body: tmp10, bodyStyle: null, containerStyle: null, imageStyle: null, source: null, titleStyle: null });
    cResult[5] = tmp4.emptyStateBody;
    cResult[6] = tmp4.emptyStateContainer;
    cResult[7] = tmp4.emptyStateImage;
    cResult[8] = tmp16;
    tmp13 = tmp16;
    const tmpResult = useModalDismissGuardRefreshControl;
  }
  const obj6 = { marginBottom: sum, marginTop: insetTop, flex: 1 };
  cResult[0] = insetTop;
  cResult[1] = sum;
  cResult[2] = obj6;
  tmp6 = obj6;
}) : ((insetBottom) => {
  ({ inActionSheet, insetTop } = insetBottom);
  insetBottom = insetBottom.insetBottom;
  const items = [insetBottom, insetTop];
  const memo = noop.useMemo(() => ({ marginBottom: insetBottom + EXPRESSION_FOOTER_HEIGHT, marginTop: insetTop, flex: 1 }), items);
  const tmp = closure_7();
  const modalDismissGuardRefreshControl = insetTop(9938).useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = insetTop(6119).BottomSheetScrollView;
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
  const intl = insetTop(1126).intl;
  obj5.body = intl.string(insetTop(1126).t.jyiGfc);
  ({ emptyStateBody: obj3.bodyStyle, emptyStateContainer: obj3.containerStyle, emptyStateImage: obj3.imageStyle } = tmp);
  obj5.source = insetBottom(10160);
  obj5.titleStyle = { marginBottom: 0 };
  obj2.children = jsx(insetTop(1188).RefreshEmptyState, { body: null, bodyStyle: null, containerStyle: null, imageStyle: null, source: null, titleStyle: null });
  return <BottomSheetScrollView contentContainerStyle={memo} keyboardShouldPersistTaps="always" refreshControl={null}>{null}</BottomSheetScrollView>;
}));