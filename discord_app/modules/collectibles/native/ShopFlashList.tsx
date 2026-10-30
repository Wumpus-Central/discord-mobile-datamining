// discord_app/modules/collectibles/native/ShopFlashList.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import _mod7288 from "../../../../discord_common/js/packages/flash-list/index.js";
import generated_NoResults from "../../../design/components/Illustration/native/redesign/generated/NoResults.tsx";
import useScrollToInitialIndexOnce from "hooks/useScrollToInitialIndexOnce.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function ShopEmptyState() {
  const obj = { style: { marginTop: 42 }, Illustration: generated_NoResults.NoResults, body: null };
  const intl = util.intl;
  obj.body = intl.string(util.t.eAn6z2);
  return jsx(native.EmptyState, { style: { marginTop: 42 }, Illustration: generated_NoResults.NoResults, body: null });
}
const jsx = fn(21).jsx;
const createStyles = fn(5009);
const obj2 = { contentContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ShopFlashList.tsx");

export default function ShopFlashList(initialScrollIndex) {
  initialScrollIndex = initialScrollIndex.initialScrollIndex;
  ({ data, renderItem, getItemType, keyExtractor, onViewableItemsChanged } = initialScrollIndex);
  const ref = noop.useRef(null);
  const tmp2 = closure_4();
  let tmp5 = null != initialScrollIndex;
  if (tmp5) {
    tmp5 = initialScrollIndex > 0;
  }
  const obj = useScrollToInitialIndexOnce;
  const scrollToInitialIndexOnce = obj.useScrollToInitialIndexOnce({
    shouldScroll: tmp5,
    initialScrollIndex,
    flashListRef: ref,
    afterMs: useScrollToInitialIndexOnce.INITIAL_SCROLL_DELAY_MS,
  });
  return jsx(_mod7288.FlashList, {
    ref,
    data,
    renderItem,
    showsVerticalScrollIndicator: false,
    ListEmptyComponent: ShopEmptyState,
    initialScrollIndex,
    getItemType,
    keyExtractor,
    onViewableItemsChanged,
    maintainVisibleContentPosition: { disabled: true },
    contentContainerStyle: tmp2.contentContainer,
  });
}
