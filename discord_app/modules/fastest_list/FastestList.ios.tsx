// discord_app/modules/fastest_list/FastestList.ios.tsx
import importAllResult from "../../../_runtime/00019_noop.js";
import { RefreshControl } from "../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
function noop() {}
let c3 = importAllResult;
const forwardRefResult = importAllResult.forwardRef((inActionSheet) => {
  ({ enabled, horizontal } = inActionSheet);
  ({ accessibilityLabel, estimatedListSize } = inActionSheet);
  if (horizontal === undefined) {
    horizontal = false;
  }
  inActionSheet = inActionSheet.inActionSheet;
  const keyExtractor = inActionSheet.keyExtractor;
  ({
    listFooterAlwaysMounted,
    insetStart,
    insetEnd,
    itemSize,
    keyboardDismissMode,
    keyboardShouldPersistTaps,
    listFooterSize,
  } = inActionSheet);
  if (listFooterAlwaysMounted === undefined) {
    listFooterAlwaysMounted = false;
  }
  ({ listHeaderAlwaysMounted, listHeaderSize } = inActionSheet);
  if (listHeaderAlwaysMounted === undefined) {
    listHeaderAlwaysMounted = false;
  }
  const preventNativeModalDismiss = inActionSheet.preventNativeModalDismiss;
  ({ renderAhead, onLayout } = inActionSheet);
  if (renderAhead === undefined) {
    renderAhead = "nominal";
  }
  const scrollIndicatorInsetEnd = inActionSheet.scrollIndicatorInsetEnd;
  const scrollIndicatorInsetStart = inActionSheet.scrollIndicatorInsetStart;
  ({
    sectionHeaderIsSticky,
    renderItem,
    renderListFooter,
    renderListHeader,
    renderSectionHeader,
    renderSectionFooter,
    scrollEventThrottle,
    sectionHeaderSize,
  } = inActionSheet);
  if (sectionHeaderIsSticky === undefined) {
    sectionHeaderIsSticky = true;
  }
  ({ sectionFooterSize, sections, showsHorizontalScrollIndicator, showsVerticalScrollIndicator, style } =
    inActionSheet);
  const merged = Object.assign(inActionSheet, Object.create(null));
  ({ onScroll, onScrollBeginDrag, onScrollEndDrag } = inActionSheet(keyExtractor[3])(merged, horizontal));
  const items = [keyExtractor];
  const tmp2 = inActionSheet;
  const tmp4 = inActionSheet(keyExtractor[3])(merged, horizontal);
  const items1 = [horizontal, scrollIndicatorInsetEnd, scrollIndicatorInsetStart];
  const callback = preventNativeModalDismiss.useCallback((arg0, arg1, arg2) => {
    if (horizontal(keyExtractor[5]).FastListItemTypes.ITEM === arg0) {
      let tmp11Result;
      if (keyExtractor != null) {
        let num3 = arg2;
        if (arg2 == null) {
          num3 = -1;
        }
        tmp11Result = tmp11(inActionSheet(tmp2[6]).ITEM, arg1, num3);
      }
      return tmp11Result;
    } else if (tmp(tmp2[5]).FastListItemTypes.SECTION === arg0) {
      let tmp7Result;
      if (keyExtractor != null) {
        tmp7Result = tmp7(inActionSheet(tmp2[6]).SECTION_HEADER, arg1, -1);
      }
      return tmp7Result;
    } else if (tmp(tmp2[5]).FastListItemTypes.SECTION_FOOTER === arg0) {
      let tmp3Result;
      if (keyExtractor != null) {
        tmp3Result = tmp3(inActionSheet(tmp2[6]).SECTION_FOOTER, arg1, -1);
      }
      return tmp3Result;
    }
  }, items);
  const memo = preventNativeModalDismiss.useMemo(() => {
    if (horizontal) {
      let obj = { left: null, right: null };
      obj[0] = tmp;
      obj[1] = scrollIndicatorInsetEnd;
    } else {
      obj = { top: null, bottom: null };
      obj[0] = tmp;
      obj[1] = scrollIndicatorInsetEnd;
    }
  }, items1);
  const items2 = [preventNativeModalDismiss, inActionSheet];
  const memo1 = preventNativeModalDismiss.useMemo(() => {
    let tmp;
    if (true === preventNativeModalDismiss) {
      if (true === inActionSheet) {
        const obj = { refreshing: false, onRefresh: null, tintColor: "transparent" };
        obj[1] = closure_1_6;
        tmp = scrollIndicatorInsetStart(scrollIndicatorInsetEnd, obj);
      }
    }
    return tmp;
  }, items2);
  if ("animatedCallbacks" === merged.scrollReporting) {
    let AnimatedFastList = horizontal(tmp3[5]).AnimatedFastList;
  } else {
    AnimatedFastList = tmp2(tmp3[5]);
  }
  let obj = {
    accessibilityLabel,
    automaticallyAdjustsScrollIndicatorInsets: null == memo,
    batchesToRender: null,
    refreshControl: null,
    chunkBase: null,
    stickySectionsVariant: null,
    footerSize: null,
    getRecyclerKey: null,
    headerSize: null,
    horizontal: null,
    inActionSheet: null,
    insetStart: null,
    insetEnd: null,
    itemSize: null,
    keyboardDismissMode: null,
    keyboardShouldPersistTaps: null,
    onLayout: null,
    onScroll: null,
    onScrollBeginDrag: null,
    onScrollEndDrag: null,
    optimizeListItemRender: true,
    ref: null,
    renderItem: null,
    renderFooter: null,
    renderHeader: null,
    renderSection: null,
    renderSectionFooter: null,
    scrollEventThrottle: null,
    scrollIndicatorInsets: null,
    scrollPosValue: null,
    sections: null,
    sectionSize: null,
    sectionFooterSize: null,
    showsHorizontalScrollIndicator: null,
    showsVerticalScrollIndicator: null,
    stickyHeaderFooter: null,
    style: null,
  };
  if ("nominal" !== renderAhead) {
    if ("half" === renderAhead) {
      let num = 14;
    } else {
      num = 16;
    }
  }
  obj[2] = num;
  obj[3] = memo1;
  obj[4] = inActionSheet(keyExtractor[4])({ estimatedListSize, horizontal });
  let str3 = "disabled";
  if (sectionHeaderIsSticky) {
    str3 = "default";
  }
  obj[5] = str3;
  obj[6] = listFooterSize;
  obj[7] = callback;
  obj[8] = listHeaderSize;
  obj[9] = horizontal;
  obj[10] = inActionSheet;
  obj[11] = insetStart;
  obj[12] = insetEnd;
  obj[13] = itemSize;
  obj[14] = keyboardDismissMode;
  obj[15] = keyboardShouldPersistTaps;
  obj[16] = onLayout;
  let tmp11;
  if ("animatedScrollPosition" !== merged.scrollReporting) {
    tmp11 = onScroll;
  }
  obj[17] = tmp11;
  obj[18] = onScrollBeginDrag;
  obj[19] = onScrollEndDrag;
  obj[21] = arg1;
  obj[22] = renderItem;
  obj[23] = renderListFooter;
  obj[24] = renderListHeader;
  obj[25] = renderSectionHeader;
  obj[26] = renderSectionFooter;
  obj[27] = scrollEventThrottle;
  obj[28] = memo;
  let scrollPosition;
  if ("animatedScrollPosition" === merged.scrollReporting) {
    scrollPosition = merged.scrollPosition;
  }
  obj[29] = scrollPosition;
  obj[30] = sections;
  obj[31] = sectionHeaderSize;
  obj[32] = sectionFooterSize;
  obj[33] = showsHorizontalScrollIndicator;
  obj[34] = showsVerticalScrollIndicator;
  if (!listHeaderAlwaysMounted) {
    listHeaderAlwaysMounted = listFooterAlwaysMounted;
  }
  obj[35] = listHeaderAlwaysMounted;
  obj[36] = style;
  return scrollIndicatorInsetStart(AnimatedFastList, obj);
});
const result = require("set").fileFinishedImporting("modules/fastest_list/FastestList.ios.tsx");

export default forwardRefResult;
