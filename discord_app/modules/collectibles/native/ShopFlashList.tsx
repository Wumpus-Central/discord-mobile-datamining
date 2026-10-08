// discord_app/modules/collectibles/native/ShopFlashList.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import generated_NoResults from "../../../design/components/Illustration/native/redesign/generated/NoResults.tsx";
import _mod8600 from "../../../../discord_common/js/packages/flash-list/index.js";
import useScrollToInitialIndexOnce from "hooks/useScrollToInitialIndexOnce.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
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
      const cResult = c.c(9);
      ({ data, renderItem, initialScrollIndex, getItemType } = arg0);
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
        if (cResult[3] === data) {
          if (cResult[4] === getItemType) {
            if (cResult[5] === initialScrollIndex) {
              if (cResult[6] === renderItem) {
                if (cResult[7] === tmp5.contentContainer) {
                  let tmp9 = cResult[8];
                }
                return tmp9;
              }
            }
          }
        }
        const obj2 = {
          ref,
          data,
          renderItem,
          showsVerticalScrollIndicator: false,
          ListEmptyComponent,
          initialScrollIndex,
          getItemType,
          contentContainerStyle: tmp5.contentContainer,
        };
        const tmp12 = jsx(_mod8600.FlashList, {
          ref,
          data,
          renderItem,
          showsVerticalScrollIndicator: false,
          ListEmptyComponent,
          initialScrollIndex,
          getItemType,
          contentContainerStyle: tmp5.contentContainer,
        });
        cResult[3] = data;
        cResult[4] = getItemType;
        cResult[5] = initialScrollIndex;
        cResult[6] = renderItem;
        cResult[7] = tmp5.contentContainer;
        cResult[8] = tmp12;
        tmp9 = tmp12;
        const tmpResult = useScrollToInitialIndexOnce;
      }
      const obj3 = {
        shouldScroll: tmp6,
        initialScrollIndex,
        flashListRef: ref,
        afterMs: useScrollToInitialIndexOnce.INITIAL_SCROLL_DELAY_MS,
      };
      cResult[0] = initialScrollIndex;
      cResult[1] = tmp6;
      cResult[2] = obj3;
      tmp7 = obj3;
    }
  : function ShopFlashList(initialScrollIndex) {
      initialScrollIndex = initialScrollIndex.initialScrollIndex;
      ({ data, renderItem, getItemType } = initialScrollIndex);
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
      return jsx(_mod8600.FlashList, {
        ref,
        data,
        renderItem,
        showsVerticalScrollIndicator: false,
        ListEmptyComponent,
        initialScrollIndex,
        getItemType,
        contentContainerStyle: tmp2.contentContainer,
      });
    };
