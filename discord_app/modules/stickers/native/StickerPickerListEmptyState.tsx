// discord_app/modules/stickers/native/StickerPickerListEmptyState.tsx
import importAllResult from "noop";
import { ScrollView } from "get ActivityIndicator";
import { EXPRESSION_FOOTER_HEIGHT } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let c3 = importAllResult;
let obj = { emptyStateContainer: { padding: 0, flex: 1 }, emptyStateBody: null, emptyStateImage: null };
obj = { color: require("Themes").colors.TEXT_SUBTLE };
obj[1] = obj;
createCacheKey = { marginBottom: require("Themes").space.PX_8, marginTop: 0 };
obj[2] = createCacheKey;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function StickerPickerListEmptyState(insetBottom) {
  let inActionSheet;
  let insetTop;
  ({ inActionSheet, insetTop } = insetBottom);
  insetBottom = insetBottom.insetBottom;
  const items = [insetBottom, insetTop];
  const memo = importAllResult.useMemo(() => ({ marginBottom: insetBottom + outer1_5, marginTop: insetTop, flex: 1 }), items);
  let obj = insetTop(8614);
  const modalDismissGuardRefreshControl = obj.useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = tmp3(5325).BottomSheetScrollView;
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
  obj[4] = insetBottom(9874);
  obj[5] = { marginBottom: 0 };
  obj[3] = jsx(insetTop(1297).RefreshEmptyState, { body: null, bodyStyle: null, containerStyle: null, imageStyle: null, source: null, titleStyle: null });
  return <BottomSheetScrollView body={null} bodyStyle={null} containerStyle={null} imageStyle={null} source={null} titleStyle={null} />;
});
const result = require("ME").fileFinishedImporting("modules/stickers/native/StickerPickerListEmptyState.tsx");

export default memoResult;