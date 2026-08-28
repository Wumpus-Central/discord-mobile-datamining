// === Module 10306: ? ===

// Module 10306
import ThemesDefault from "Themes" /* 712 */;
import useExpressionPickerInsetsDefault from "useExpressionPickerInsets" /* 10291 */;
import importAllResult from "noop" /* 19 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
let c3 = importAllResult;
require("ME").GIFPickerResultTypes;
let obj = { emptyStateContainer: { padding: 0, flex: 1 }, emptyStateBody: null, emptyStateImage: null };
obj = { color: ThemesDefault.colors.TEXT_SUBTLE };
obj[1] = obj;
createCacheKey = { marginBottom: ThemesDefault.space.PX_8, marginTop: 0 };
obj[2] = createCacheKey;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function GIFPickerNoResults(inActionSheet) {
  inActionSheet = inActionSheet.inActionSheet;
  let safeAreaBottomKeyboardAware;
  const tmp = callback();
  safeAreaBottomKeyboardAware = useExpressionPickerInsetsDefault({ hasCategories: false }).safeAreaBottomKeyboardAware;
  const items = [safeAreaBottomKeyboardAware];
  const memo = importAllResult.useMemo(() => ({ paddingBottom: safeAreaBottomKeyboardAware, flex: 1 }), items);
  let obj = safeAreaBottomKeyboardAware(9093);
  const searchEmptySource = obj.useSearchEmptySource();
  if (inActionSheet.categoryType === GIFPickerResultTypes.FAVORITES) {
    const intl2 = tmp4(1236).intl;
    let stringResult = intl2.string(tmp4(1236).t.ZH4o6l);
  } else {
    const intl = tmp4(1236).intl;
    stringResult = intl.string(tmp4(1236).t["5dX4UM"]);
  }
  const modalDismissGuardRefreshControl = safeAreaBottomKeyboardAware(9097).useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = tmp4(5589).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  obj = { contentContainerStyle: memo, keyboardShouldPersistTaps: "always", refreshControl: null, children: null };
  let tmp9;
  if (inActionSheet) {
    tmp9 = modalDismissGuardRefreshControl;
  }
  obj[2] = tmp9;
  obj = { source: searchEmptySource, body: stringResult, bodyStyle: tmp.emptyStateBody, containerStyle: tmp.emptyStateContainer, imageStyle: tmp.emptyStateImage };
  obj[3] = jsx(safeAreaBottomKeyboardAware(1297).RefreshEmptyState, { source: searchEmptySource, body: stringResult, bodyStyle: tmp.emptyStateBody, containerStyle: tmp.emptyStateContainer, imageStyle: tmp.emptyStateImage });
  return <BottomSheetScrollView source={searchEmptySource} body={stringResult} bodyStyle={tmp.emptyStateBody} containerStyle={tmp.emptyStateContainer} imageStyle={tmp.emptyStateImage} />;
});
const result = require("set").fileFinishedImporting("modules/gif_picker/native/GIFPickerNoResults.tsx");

export default memoResult;