// === Module 10328: ? ===

// Module 10328
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import { EXPRESSION_FOOTER_HEIGHT } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
let c3 = importAllResult;
let obj = { emptyStateContainer: { padding: 0, flex: 1 }, emptyStateBody: null, emptyStateImage: null };
obj = { color: ThemesDefault.colors.TEXT_SUBTLE };
obj[1] = obj;
createCacheKey = { marginBottom: ThemesDefault.space.PX_8, marginTop: 0 };
obj[2] = createCacheKey;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function StickerPickerListEmptyState(insetBottom) {
  ({ inActionSheet, insetTop } = insetBottom);
  insetBottom = insetBottom.insetBottom;
  const items = [insetBottom, insetTop];
  const memo = importAllResult.useMemo(() => ({ marginBottom: insetBottom + closure_1_5, marginTop: insetTop, flex: 1 }), items);
  let obj = insetTop(9079);
  const modalDismissGuardRefreshControl = obj.useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = tmp3(5576).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  obj = { contentContainerStyle: memo, keyboardShouldPersistTaps: "always", refreshControl: null, children: null };
  let tmp7;
  if (inActionSheet) {
    tmp7 = modalDismissGuardRefreshControl;
  }
  obj[2] = tmp7;
  obj = { body: null, bodyStyle: null, containerStyle: null, imageStyle: null, source: null, titleStyle: null };
  const intl = tmp3(1236).intl;
  obj[0] = intl.string(insetTop(1236).t.jyiGfc);
  ({ emptyStateBody: obj3[1], emptyStateContainer: obj3[2], emptyStateImage: obj3[3] } = callback());
  obj[4] = insetBottom(10329);
  obj[5] = { marginBottom: 0 };
  obj[3] = jsx(insetTop(1297).RefreshEmptyState, { body: null, bodyStyle: null, containerStyle: null, imageStyle: null, source: null, titleStyle: null });
  return <BottomSheetScrollView body={null} bodyStyle={null} containerStyle={null} imageStyle={null} source={null} titleStyle={null} />;
});
const result = require("set").fileFinishedImporting("modules/stickers/native/StickerPickerListEmptyState.tsx");

export default memoResult;