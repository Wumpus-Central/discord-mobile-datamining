// === Module 15840: ShopFlashList ===

// Module 15840 (ShopFlashList)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import generated_NoResults from "generated/NoResults" /* 8232 */;
import _mod8874 from "module_8874" /* 8874 */;
import useScrollToInitialIndexOnce from "useScrollToInitialIndexOnce" /* 15813 */;
import noop from "module_19" /* 19 */;

require = fn;
function ShopEmptyState() {
  const obj = { style: { marginTop: 42 }, Illustration: generated_NoResults.NoResults, body: null };
  const intl = util.intl;
  obj.body = intl.string(util.t.eAn6z2);
  return jsx(native.EmptyState, { style: { marginTop: 42 }, Illustration: generated_NoResults.NoResults, body: null });
}
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { contentContainer: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.contentContainer = createStyles;
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ShopFlashList.tsx");

export default function ShopFlashList(initialScrollIndex) {
  initialScrollIndex = initialScrollIndex.initialScrollIndex;
  ({ data, renderItem, getItemType } = initialScrollIndex);
  const ref = noop.useRef(null);
  let obj = useScrollToInitialIndexOnce;
  let tmp5 = null != initialScrollIndex;
  if (tmp5) {
    tmp5 = initialScrollIndex > 0;
  }
  obj = { shouldScroll: tmp5, initialScrollIndex, flashListRef: ref, afterMs: useScrollToInitialIndexOnce.INITIAL_SCROLL_DELAY_MS };
  const scrollToInitialIndexOnce = obj.useScrollToInitialIndexOnce(obj);
  obj = { ref, data, renderItem, showsVerticalScrollIndicator: false, ListEmptyComponent: ShopEmptyState, initialScrollIndex, getItemType, contentContainerStyle: closure_4().contentContainer };
  return jsx(_mod8874.FlashList, { ref, data, renderItem, showsVerticalScrollIndicator: false, ListEmptyComponent: ShopEmptyState, initialScrollIndex, getItemType, contentContainerStyle: closure_4().contentContainer });
};