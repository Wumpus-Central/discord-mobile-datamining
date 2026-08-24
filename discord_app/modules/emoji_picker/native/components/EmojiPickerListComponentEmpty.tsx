// === Module 9382: ? ===

// Module 9382
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
let obj = { emptyStateContainer: { padding: 0, flex: 1 }, emptyStateBody: null, emptyStateImage: null };
obj = { color: ThemesDefault.colors.TEXT_SUBTLE };
obj[1] = obj;
createCacheKey = { marginBottom: ThemesDefault.space.PX_8, marginTop: 0 };
obj[2] = createCacheKey;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function EmojiPickerListComponentEmpty(insetBottom) {
  ({ inActionSheet, insetTop } = insetBottom);
  insetBottom = insetBottom.insetBottom;
  const items = [insetBottom, insetTop];
  const memo = importAllResult.useMemo(() => ({ marginBottom: insetBottom, marginTop: insetTop, flex: 1 }), items);
  let obj = insetTop(insetBottom[5]);
  const searchEmptySource = obj.useSearchEmptySource();
  const tmp = callback();
  const modalDismissGuardRefreshControl = insetTop(insetBottom[6]).useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = tmp3(tmp4[7]).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  obj = { contentContainerStyle: memo, keyboardShouldPersistTaps: "always", refreshControl: null, children: null };
  let tmp8;
  if (inActionSheet) {
    tmp8 = modalDismissGuardRefreshControl;
  }
  obj[2] = tmp8;
  obj = { source: searchEmptySource, body: null, bodyStyle: null, containerStyle: null, imageStyle: null };
  const intl = tmp3(tmp4[9]).intl;
  obj[1] = intl.string(insetTop(insetBottom[9]).t.IxxiKF);
  ({ emptyStateBody: obj4[2], emptyStateContainer: obj4[3], emptyStateImage: obj4[4] } = tmp);
  obj[3] = jsx(insetTop(insetBottom[8]).RefreshEmptyState, { source: searchEmptySource, body: null, bodyStyle: null, containerStyle: null, imageStyle: null });
  return <BottomSheetScrollView source={searchEmptySource} body={null} bodyStyle={null} containerStyle={null} imageStyle={null} />;
});
const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponentEmpty.tsx");

export default memoResult;