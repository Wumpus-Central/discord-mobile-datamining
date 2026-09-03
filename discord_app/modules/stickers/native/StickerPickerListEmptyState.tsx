// discord_app/modules/stickers/native/StickerPickerListEmptyState.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { ScrollView } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { EXPRESSION_FOOTER_HEIGHT } from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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
  const memo = importAllResult.useMemo(
    () => ({ marginBottom: insetBottom + closure_1_5, marginTop: insetTop, flex: 1 }),
    items,
  );
  let obj = insetTop(9177);
  const modalDismissGuardRefreshControl = obj.useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = tmp3(5633).BottomSheetScrollView;
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
  const intl = tmp3(1233).intl;
  obj[0] = intl.string(insetTop(1233).t.jyiGfc);
  ({ emptyStateBody: obj3[1], emptyStateContainer: obj3[2], emptyStateImage: obj3[3] } = callback());
  obj[4] = insetBottom(10436);
  obj[5] = { marginBottom: 0 };
  obj[3] = jsx(insetTop(1296).RefreshEmptyState, {
    body: null,
    bodyStyle: null,
    containerStyle: null,
    imageStyle: null,
    source: null,
    titleStyle: null,
  });
  return (
    <BottomSheetScrollView
      body={null}
      bodyStyle={null}
      containerStyle={null}
      imageStyle={null}
      source={null}
      titleStyle={null}
    />
  );
});
const result = require("set").fileFinishedImporting("modules/stickers/native/StickerPickerListEmptyState.tsx");

export default memoResult;
