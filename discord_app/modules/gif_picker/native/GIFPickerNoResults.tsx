// discord_app/modules/gif_picker/native/GIFPickerNoResults.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useExpressionPickerInsetsDefault from "../../expression_picker/native/useExpressionPickerInsets.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { ScrollView } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
let c3 = importAllResult;
require("ME").GIFPickerResultTypes;
let obj = { color: ThemesDefault.colors.TEXT_SUBTLE };
obj[1] = obj;
const createCacheKey = { marginBottom: ThemesDefault.space.PX_8, marginTop: 0 };
obj[2] = createCacheKey;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function GIFPickerNoResults(inActionSheet) {
  inActionSheet = inActionSheet.inActionSheet;
  const tmp = callback();
  const safeAreaBottomKeyboardAware = useExpressionPickerInsetsDefault({ hasCategories: false }).safeAreaBottomKeyboardAware;
  const items = [safeAreaBottomKeyboardAware];
  const memo = importAllResult.useMemo(() => ({ paddingBottom: safeAreaBottomKeyboardAware, flex: 1 }), items);
  let obj = safeAreaBottomKeyboardAware(9383);
  const searchEmptySource = obj.useSearchEmptySource();
  if (inActionSheet.categoryType === GIFPickerResultTypes.FAVORITES) {
    const intl2 = tmp4(1236).intl;
    let stringResult = intl2.string(tmp4(1236).t.ZH4o6l);
  } else {
    const intl = tmp4(1236).intl;
    stringResult = intl.string(tmp4(1236).t["5dX4UM"]);
  }
  const modalDismissGuardRefreshControl = safeAreaBottomKeyboardAware(9387).useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = tmp4(6952).BottomSheetScrollView;
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
const result = require("obj132").fileFinishedImporting("modules/gif_picker/native/GIFPickerNoResults.tsx");

export default memoResult;