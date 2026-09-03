// discord_app/modules/gif_picker/native/GIFPickerNoResults.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useExpressionPickerInsetsDefault from "../../expression_picker/native/useExpressionPickerInsets.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { ScrollView } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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
  let obj = safeAreaBottomKeyboardAware(9173);
  const searchEmptySource = obj.useSearchEmptySource();
  if (inActionSheet.categoryType === GIFPickerResultTypes.FAVORITES) {
    const intl2 = tmp4(1233).intl;
    let stringResult = intl2.string(tmp4(1233).t.ZH4o6l);
  } else {
    const intl = tmp4(1233).intl;
    stringResult = intl.string(tmp4(1233).t["5dX4UM"]);
  }
  const modalDismissGuardRefreshControl = safeAreaBottomKeyboardAware(9177).useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = tmp4(5633).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  obj = { contentContainerStyle: memo, keyboardShouldPersistTaps: "always", refreshControl: null, children: null };
  let tmp9;
  if (inActionSheet) {
    tmp9 = modalDismissGuardRefreshControl;
  }
  obj[2] = tmp9;
  obj = {
    source: searchEmptySource,
    body: stringResult,
    bodyStyle: tmp.emptyStateBody,
    containerStyle: tmp.emptyStateContainer,
    imageStyle: tmp.emptyStateImage,
  };
  obj[3] = jsx(safeAreaBottomKeyboardAware(1296).RefreshEmptyState, {
    source: searchEmptySource,
    body: stringResult,
    bodyStyle: tmp.emptyStateBody,
    containerStyle: tmp.emptyStateContainer,
    imageStyle: tmp.emptyStateImage,
  });
  return (
    <BottomSheetScrollView
      source={searchEmptySource}
      body={stringResult}
      bodyStyle={tmp.emptyStateBody}
      containerStyle={tmp.emptyStateContainer}
      imageStyle={tmp.emptyStateImage}
    />
  );
});
const result = require("set").fileFinishedImporting("modules/gif_picker/native/GIFPickerNoResults.tsx");

export default memoResult;
