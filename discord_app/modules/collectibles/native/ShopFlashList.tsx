// discord_app/modules/collectibles/native/ShopFlashList.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import _mod7280 from "../../../../discord_common/js/packages/flash-list/index.js";
import generated_NoResults from "../../../design/components/Illustration/native/redesign/generated/NoResults.tsx";
import useScrollToInitialIndexOnce from "hooks/useScrollToInitialIndexOnce.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5005);
let obj2 = { contentContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST } };
let closure_4 = createStyles.createStyles(obj2);
fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const ReactCompilerGating = fn(558);
const ListEmptyComponent = ReactCompilerGating.isReactCompilerEnabled()
  ? function ShopEmptyState() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { marginTop: 42 };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { style: first, Illustration: generated_NoResults.NoResults, body: null };
        const intl = util.intl;
        obj3.body = intl.string(util.t.eAn6z2);
        const tmp7 = jsx(native.EmptyState, { style: first, Illustration: generated_NoResults.NoResults, body: null });
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : function ShopEmptyState() {
      const obj = { style: { marginTop: 42 }, Illustration: generated_NoResults.NoResults, body: null };
      const intl = util.intl;
      obj.body = intl.string(util.t.eAn6z2);
      return jsx(native.EmptyState, {
        style: { marginTop: 42 },
        Illustration: generated_NoResults.NoResults,
        body: null,
      });
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ShopFlashList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ShopFlashList(arg0) {
      const cResult = c.c(12);
      ({ data, renderItem, initialScrollIndex, getItemType, keyExtractor, onViewableItemsChanged } = arg0);
      const ref = noop.useRef(null);
      const tmp5 = closure_4();
      let tmp6 = null != initialScrollIndex;
      if (tmp6) {
        tmp6 = initialScrollIndex > 0;
      }
      if (cResult[0] === initialScrollIndex) {
        if (cResult[1] === tmp6) {
          let tmp7 = cResult[2];
        }
        const scrollToInitialIndexOnce = useScrollToInitialIndexOnce.useScrollToInitialIndexOnce(tmp7);
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { disabled: true };
          cResult[3] = obj2;
          let tmp10 = obj2;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] === data) {
          if (cResult[5] === getItemType) {
            if (cResult[6] === initialScrollIndex) {
              if (cResult[7] === keyExtractor) {
                if (cResult[8] === onViewableItemsChanged) {
                  if (cResult[9] === renderItem) {
                    if (cResult[10] === tmp5.contentContainer) {
                      let tmp11 = cResult[11];
                    }
                    return tmp11;
                  }
                }
              }
            }
          }
        }
        const obj3 = {
          ref,
          data,
          renderItem,
          showsVerticalScrollIndicator: false,
          ListEmptyComponent,
          initialScrollIndex,
          getItemType,
          keyExtractor,
          onViewableItemsChanged,
          maintainVisibleContentPosition: tmp10,
          contentContainerStyle: tmp5.contentContainer,
        };
        const tmp14 = jsx(_mod7280.FlashList, {
          ref,
          data,
          renderItem,
          showsVerticalScrollIndicator: false,
          ListEmptyComponent,
          initialScrollIndex,
          getItemType,
          keyExtractor,
          onViewableItemsChanged,
          maintainVisibleContentPosition: tmp10,
          contentContainerStyle: tmp5.contentContainer,
        });
        cResult[4] = data;
        cResult[5] = getItemType;
        cResult[6] = initialScrollIndex;
        cResult[7] = keyExtractor;
        cResult[8] = onViewableItemsChanged;
        cResult[9] = renderItem;
        cResult[10] = tmp5.contentContainer;
        cResult[11] = tmp14;
        tmp11 = tmp14;
        const tmpResult = useScrollToInitialIndexOnce;
      }
      const obj4 = {
        shouldScroll: tmp6,
        initialScrollIndex,
        flashListRef: ref,
        afterMs: useScrollToInitialIndexOnce.INITIAL_SCROLL_DELAY_MS,
      };
      cResult[0] = initialScrollIndex;
      cResult[1] = tmp6;
      cResult[2] = obj4;
      tmp7 = obj4;
    }
  : function ShopFlashList(initialScrollIndex) {
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
      return jsx(_mod7280.FlashList, {
        ref,
        data,
        renderItem,
        showsVerticalScrollIndicator: false,
        ListEmptyComponent,
        initialScrollIndex,
        getItemType,
        keyExtractor,
        onViewableItemsChanged,
        maintainVisibleContentPosition: { disabled: true },
        contentContainerStyle: tmp2.contentContainer,
      });
    };
