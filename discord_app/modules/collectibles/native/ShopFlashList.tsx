// discord_app/modules/collectibles/native/ShopFlashList.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import noop from "../../../../discord_common/js/packages/flash-list/index.js";
import getNoResultsSource from "../../../design/components/Illustration/native/redesign/generated/NoResults.tsx";
import INITIAL_SCROLL_DELAY_MS from "hooks/useScrollToInitialIndexOnce.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function ShopEmptyState() {
  const obj = { style: { marginTop: 42 }, Illustration: getNoResultsSource.NoResults, body: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.eAn6z2);
  return jsx(Button.EmptyState, { style: { marginTop: 42 }, Illustration: getNoResultsSource.NoResults, body: null });
}
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/ShopFlashList.tsx");

export default function ShopFlashList(initialScrollIndex) {
  initialScrollIndex = initialScrollIndex.initialScrollIndex;
  ({ data, renderItem, getItemType } = initialScrollIndex);
  const ref = React.useRef(null);
  let obj = INITIAL_SCROLL_DELAY_MS;
  let tmp5 = null != initialScrollIndex;
  if (tmp5) {
    tmp5 = initialScrollIndex > 0;
  }
  obj = { shouldScroll: tmp5, initialScrollIndex, flashListRef: ref, afterMs: INITIAL_SCROLL_DELAY_MS.INITIAL_SCROLL_DELAY_MS };
  const scrollToInitialIndexOnce = obj.useScrollToInitialIndexOnce(obj);
  obj = { ref, data, renderItem, showsVerticalScrollIndicator: false, ListEmptyComponent: ShopEmptyState, initialScrollIndex, getItemType, contentContainerStyle: callback().contentContainer };
  return jsx(noop.FlashList, { ref, data, renderItem, showsVerticalScrollIndicator: false, ListEmptyComponent: ShopEmptyState, initialScrollIndex, getItemType, contentContainerStyle: callback().contentContainer });
};