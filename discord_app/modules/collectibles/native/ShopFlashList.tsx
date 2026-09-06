// discord_app/modules/collectibles/native/ShopFlashList.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import generated_NoResults from "../../../design/components/Illustration/native/redesign/generated/NoResults.tsx";
import _mod8874 from "../../../../discord_common/js/packages/flash-list/index.js";
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
  obj = { shouldScroll: tmp5, initialScrollIndex, flashListRef: ref, afterMs: tmp3(15813).INITIAL_SCROLL_DELAY_MS };
  const scrollToInitialIndexOnce = obj.useScrollToInitialIndexOnce(obj);
  obj = {
    ref,
    data,
    renderItem,
    showsVerticalScrollIndicator: false,
    ListEmptyComponent: ShopEmptyState,
    initialScrollIndex,
    getItemType,
    contentContainerStyle: closure_4().contentContainer,
  };
  return jsx(_mod8874.FlashList, {
    ref,
    data,
    renderItem,
    showsVerticalScrollIndicator: false,
    ListEmptyComponent: ShopEmptyState,
    initialScrollIndex,
    getItemType,
    contentContainerStyle: closure_4().contentContainer,
  });
}
