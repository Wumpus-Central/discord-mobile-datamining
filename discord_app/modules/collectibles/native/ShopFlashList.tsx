// === Module 14982: ShopEmptyState ===

// Module 14982 (ShopEmptyState)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import noop from "noop" /* 8029 */;
import getNoResultsSource from "getNoResultsSource" /* 8974 */;
import INITIAL_SCROLL_DELAY_MS from "INITIAL_SCROLL_DELAY_MS" /* 14957 */;
import closure_2 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function ShopEmptyState() {
  const obj = { style: { marginTop: 42 }, Illustration: getNoResultsSource.NoResults, body: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.eAn6z2);
  return jsx(Button.EmptyState, { style: { marginTop: 42 }, Illustration: getNoResultsSource.NoResults, body: null });
}
createCacheKey = { contentContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/collectibles/native/ShopFlashList.tsx");

export default function ShopFlashList(initialScrollIndex) {
  initialScrollIndex = initialScrollIndex.initialScrollIndex;
  ({ data, renderItem, getItemType } = initialScrollIndex);
  const ref = React.useRef(null);
  let obj = INITIAL_SCROLL_DELAY_MS;
  let tmp5 = null != initialScrollIndex;
  if (tmp5) {
    tmp5 = initialScrollIndex > 0;
  }
  obj = { shouldScroll: tmp5, initialScrollIndex, flashListRef: ref, afterMs: tmp3(14957).INITIAL_SCROLL_DELAY_MS };
  const scrollToInitialIndexOnce = obj.useScrollToInitialIndexOnce(obj);
  obj = { ref, data, renderItem, showsVerticalScrollIndicator: false, ListEmptyComponent: ShopEmptyState, initialScrollIndex, getItemType, contentContainerStyle: callback().contentContainer };
  return jsx(noop.FlashList, { ref, data, renderItem, showsVerticalScrollIndicator: false, ListEmptyComponent: ShopEmptyState, initialScrollIndex, getItemType, contentContainerStyle: callback().contentContainer });
};