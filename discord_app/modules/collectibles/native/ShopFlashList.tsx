// discord_app/modules/collectibles/native/ShopFlashList.tsx
import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { noop } from "../../../../discord_common/js/packages/flash-list/index.js";
import { getNoResultsSource } from "../../../design/components/Illustration/native/redesign/generated/NoResults.tsx";
import { Button } from "../../../design/void/native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { INITIAL_SCROLL_DELAY_MS } from "hooks/useScrollToInitialIndexOnce.tsx";

const require = arg1;
function ShopEmptyState() {
  const obj = { style: { marginTop: 42 }, Illustration: null, body: null };
  obj[1] = getNoResultsSource.NoResults;
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.eAn6z2);
  return jsx(Button.EmptyState, { style: { marginTop: 42 }, Illustration: null, body: null });
}
createCacheKey = { contentContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/collectibles/native/ShopFlashList.tsx");

export default function ShopFlashList(initialScrollIndex) {
  let data;
  let getItemType;
  let renderItem;
  initialScrollIndex = initialScrollIndex.initialScrollIndex;
  ({ data, renderItem, getItemType } = initialScrollIndex);
  const ref = React.useRef(null);
  let obj = INITIAL_SCROLL_DELAY_MS;
  let tmp5 = null != initialScrollIndex;
  if (tmp5) {
    tmp5 = initialScrollIndex > 0;
  }
  obj = { shouldScroll: tmp5, initialScrollIndex, flashListRef: ref, afterMs: tmp3(14747).INITIAL_SCROLL_DELAY_MS };
  const scrollToInitialIndexOnce = obj.useScrollToInitialIndexOnce(obj);
  obj = { ref, data, renderItem, showsVerticalScrollIndicator: false, ListEmptyComponent: ShopEmptyState, initialScrollIndex, getItemType, contentContainerStyle: createCacheKey().contentContainer };
  return jsx(noop.FlashList, { ref, data, renderItem, showsVerticalScrollIndicator: false, ListEmptyComponent: ShopEmptyState, initialScrollIndex, getItemType, contentContainerStyle: createCacheKey().contentContainer });
};