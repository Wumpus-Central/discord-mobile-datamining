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
  const onContentLengthChange = inActionSheet.onContentLengthChange;
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
  let obj = onContentLengthChange;
  const items = [keyExtractor];
  let tmp2 = inActionSheet;
  const tmp4 = inActionSheet(keyExtractor[3])(merged, horizontal);
  const items1 = [horizontal, scrollIndicatorInsetEnd, scrollIndicatorInsetStart];
  const callback = onContentLengthChange.useCallback((arg0, arg1, arg2) => {
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
  const memo = onContentLengthChange.useMemo(() => {
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
  const memo1 = onContentLengthChange.useMemo(() => {
    let tmp;
    if (true === preventNativeModalDismiss) {
      if (true === inActionSheet) {
        const obj = { refreshing: false, onRefresh: null, tintColor: "transparent" };
        obj[1] = scrollIndicatorInsetStart;
        tmp = scrollIndicatorInsetEnd(preventNativeModalDismiss, obj);
      }
    }
    return tmp;
  }, items2);
  if ("animatedCallbacks" === merged.scrollReporting) {
    let AnimatedFastList = horizontal(tmp3[5]).AnimatedFastList;
  } else {
    AnimatedFastList = tmp2(tmp3[5]);
  }
  const items3 = [horizontal, onContentLengthChange];
  obj = {
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
    onContentSizeChange: null,
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
  const callback1 = obj.useCallback((arg0, arg1) => {
    if (onContentLengthChange != null) {
      let tmp2 = arg1;
      if (horizontal) {
        tmp2 = arg0;
      }
      tmp(tmp2);
    }
  }, items3);
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
  let tmp12;
  if (null != onContentLengthChange) {
    tmp12 = callback1;
  }
  obj[16] = tmp12;
  obj[17] = onLayout;
  let tmp13;
  if ("animatedScrollPosition" !== merged.scrollReporting) {
    tmp13 = onScroll;
  }
  obj[18] = tmp13;
  obj[19] = onScrollBeginDrag;
  obj[20] = onScrollEndDrag;
  obj[22] = arg1;
  obj[23] = renderItem;
  obj[24] = renderListFooter;
  obj[25] = renderListHeader;
  obj[26] = renderSectionHeader;
  obj[27] = renderSectionFooter;
  obj[28] = scrollEventThrottle;
  obj[29] = memo;
  let scrollPosition;
  if ("animatedScrollPosition" === merged.scrollReporting) {
    scrollPosition = merged.scrollPosition;
  }
  obj[30] = scrollPosition;
  obj[31] = sections;
  obj[32] = sectionHeaderSize;
  obj[33] = sectionFooterSize;
  obj[34] = showsHorizontalScrollIndicator;
  obj[35] = showsVerticalScrollIndicator;
  if (!listHeaderAlwaysMounted) {
    listHeaderAlwaysMounted = listFooterAlwaysMounted;
  }
  obj[36] = listHeaderAlwaysMounted;
  obj[37] = style;
  return scrollIndicatorInsetEnd(AnimatedFastList, obj);
});
const result = require("set").fileFinishedImporting("modules/fastest_list/FastestList.ios.tsx");

export default forwardRefResult;
