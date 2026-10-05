// === Module 15749: ShopFlashList ===

// Module 15749 (ShopFlashList)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import generated_NoResults from "generated/NoResults" /* 7904 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 8371 */;
import useScrollToInitialIndexOnce2 from "useScrollToInitialIndexOnce" /* 15712 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { contentContainer: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_4 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let data;
  let getItemType;
  let initialScrollIndex;
  let renderItem;
  const obj = react2;
  const cResult = obj.c(9);
  ({ data, renderItem, initialScrollIndex, getItemType } = arg0);
  const ref = react.useRef(null);
  const tmp5 = closure_4();
  if (cResult[0] === initialScrollIndex) {
    let tmp7;
    if (cResult[1] === (null != initialScrollIndex && initialScrollIndex > 0)) {
      tmp7 = cResult[2];
    }
    const tmpResult = useScrollToInitialIndexOnce2;
    const scrollToInitialIndexOnce = tmpResult.useScrollToInitialIndexOnce(tmp7);
    if (cResult[3] === data) {
      if (cResult[4] === getItemType) {
        if (cResult[5] === initialScrollIndex) {
          if (cResult[6] === renderItem) {
            let tmp9;
            if (cResult[7] === tmp5.contentContainer) {
              tmp9 = cResult[8];
            }
            return tmp9;
          }
        }
      }
    }
    const tmp12 = jsx(defaultMVCPConfig.FlashList, { ref, data, renderItem, showsVerticalScrollIndicator: false, ListEmptyComponent, initialScrollIndex, getItemType, contentContainerStyle: tmp5.contentContainer });
    cResult[3] = data;
    cResult[4] = getItemType;
    cResult[5] = initialScrollIndex;
    cResult[6] = renderItem;
    cResult[7] = tmp5.contentContainer;
    cResult[8] = tmp12;
    tmp9 = tmp12;
  }
  const obj3 = { shouldScroll: null != initialScrollIndex && initialScrollIndex > 0, initialScrollIndex, flashListRef: ref, afterMs: useScrollToInitialIndexOnce2.INITIAL_SCROLL_DELAY_MS };
  cResult[0] = initialScrollIndex;
  cResult[1] = null != initialScrollIndex && initialScrollIndex > 0;
  cResult[2] = obj3;
  tmp7 = obj3;
}) : ((initialScrollIndex) => {
  let data;
  let getItemType;
  let renderItem;
  initialScrollIndex = initialScrollIndex.initialScrollIndex;
  ({ data, renderItem, getItemType } = initialScrollIndex);
  const ref = react.useRef(null);
  let tmp6 = null != initialScrollIndex;
  const tmp2 = closure_4();
  const useScrollToInitialIndexOnce = useScrollToInitialIndexOnce2.useScrollToInitialIndexOnce;
  useScrollToInitialIndexOnce2;
  if (tmp6) {
    tmp6 = initialScrollIndex > 0;
  }
  const obj = { shouldScroll: tmp6, initialScrollIndex, flashListRef: ref, afterMs: useScrollToInitialIndexOnce2.INITIAL_SCROLL_DELAY_MS };
  const scrollToInitialIndexOnce = useScrollToInitialIndexOnce(obj);
  return jsx(defaultMVCPConfig.FlashList, { ref, data, renderItem, showsVerticalScrollIndicator: false, ListEmptyComponent, initialScrollIndex, getItemType, contentContainerStyle: tmp2.contentContainer });
});
ReactCompilerGating = ReactCompilerGating_mod;
const ListEmptyComponent = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { marginTop: 42 };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const EmptyState = native.EmptyState;
    const intl = intl2.intl;
    const tmp7 = <EmptyState style={first} Illustration={generated_NoResults.NoResults} body={intl.string(intl2.t.eAn6z2)} />;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const EmptyState = native.EmptyState;
  const intl = intl2.intl;
  return <EmptyState style={{ marginTop: 42 }} Illustration={generated_NoResults.NoResults} body={intl.string(intl2.t.eAn6z2)} />;
});
const result = size.fileFinishedImporting("modules/collectibles/native/ShopFlashList.tsx");

export default tmp2;