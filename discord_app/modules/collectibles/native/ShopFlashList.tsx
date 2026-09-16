// === Module 15966: ShopFlashList ===

// Module 15966 (ShopFlashList)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import generated_NoResults from "generated/NoResults" /* 8360 */;
import _mod9017 from "module_9017" /* 9017 */;
import useScrollToInitialIndexOnce from "useScrollToInitialIndexOnce" /* 15939 */;
import noop from "module_19" /* 19 */;

require = fn;
function ShopEmptyState() {
  const obj = { style: { marginTop: 42 }, Illustration: generated_NoResults.NoResults, body: null };
  const intl = util.intl;
  obj.body = intl.string(util.t.eAn6z2);
  return jsx(native.EmptyState, { style: { marginTop: 42 }, Illustration: generated_NoResults.NoResults, body: null });
}
const jsx = fn(21).jsx;
const createStyles = fn(4638);
const obj2 = { contentContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ShopFlashList.tsx");

export default function ShopFlashList(initialScrollIndex) {
  initialScrollIndex = initialScrollIndex.initialScrollIndex;
  ({ data, renderItem, getItemType } = initialScrollIndex);
  const ref = noop.useRef(null);
  const tmp2 = closure_4();
  let tmp5 = null != initialScrollIndex;
  if (tmp5) {
    tmp5 = initialScrollIndex > 0;
  }
  const obj = useScrollToInitialIndexOnce;
  const scrollToInitialIndexOnce = obj.useScrollToInitialIndexOnce({ shouldScroll: tmp5, initialScrollIndex, flashListRef: ref, afterMs: useScrollToInitialIndexOnce.INITIAL_SCROLL_DELAY_MS });
  return jsx(_mod9017.FlashList, { ref, data, renderItem, showsVerticalScrollIndicator: false, ListEmptyComponent: ShopEmptyState, initialScrollIndex, getItemType, contentContainerStyle: tmp2.contentContainer });
};