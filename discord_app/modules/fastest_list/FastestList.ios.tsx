// === Module 7174: fastest_list/FastestList ===

// Module 7174 (fastest_list/FastestList)
import FastestListItemTypeDefault from "FastestListItemType" /* 7167 */;
import FastList from "FastList" /* 7175 */;
import noop_mod from "module_19" /* 19 */;

require = fn;
function noop() {

}
let noop = noop_mod;
const RefreshControl = fn(17).RefreshControl;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/fastest_list/FastestList.ios.tsx");

export default noop.forwardRef((inActionSheet, ref) => {
  ({ enabled, horizontal } = inActionSheet);
  ({ accessibilityLabel, estimatedListSize } = inActionSheet);
  if (horizontal === undefined) {
    horizontal = false;
  }
  inActionSheet = inActionSheet.inActionSheet;
  const keyExtractor = inActionSheet.keyExtractor;
  ({ listFooterAlwaysMounted, insetStart, insetEnd, itemSize, keyboardDismissMode, keyboardShouldPersistTaps, listFooterSize } = inActionSheet);
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
  ({ sectionHeaderIsSticky, renderItem, renderListFooter, renderListHeader, renderSectionHeader, renderSectionFooter, scrollEventThrottle, sectionHeaderSize } = inActionSheet);
  if (sectionHeaderIsSticky === undefined) {
    sectionHeaderIsSticky = true;
  }
  ({ sectionFooterSize, sections, showsHorizontalScrollIndicator, showsVerticalScrollIndicator, style } = inActionSheet);
  const merged = Object.assign(inActionSheet, Object.assign({ accessibilityLabel: 0, enabled: 0, estimatedListSize: 0, horizontal: 0, inActionSheet: 0, insetStart: 0, insetEnd: 0, itemSize: 0, keyboardDismissMode: 0, keyboardShouldPersistTaps: 0, keyExtractor: 0, listFooterSize: 0, listFooterAlwaysMounted: 0, listHeaderSize: 0, listHeaderAlwaysMounted: 0, onContentLengthChange: 0, onLayout: 0, preventNativeModalDismiss: 0, renderAhead: 0, renderItem: 0, renderListFooter: 0, renderListHeader: 0, renderSectionHeader: 0, renderSectionFooter: 0, scrollEventThrottle: 0, scrollIndicatorInsetEnd: 0, scrollIndicatorInsetStart: 0, sectionHeaderSize: 0, sectionHeaderIsSticky: 0, sectionFooterSize: 0, sections: 0, showsHorizontalScrollIndicator: 0, showsVerticalScrollIndicator: 0, style: 0 }));
  ({ onScroll, onScrollBeginDrag, onScrollEndDrag } = inActionSheet(keyExtractor[3])(merged, horizontal));
  const items = [keyExtractor];
  let obj = onContentLengthChange;
  let tmp2 = inActionSheet;
  const tmp4 = inActionSheet(keyExtractor[3])(merged, horizontal);
  const items1 = [horizontal, scrollIndicatorInsetEnd, scrollIndicatorInsetStart];
  const callback = onContentLengthChange.useCallback((arg0, arg1, arg2) => {
    if (FastList.FastListItemTypes.ITEM === arg0) {
      let tmp11Result;
      if (keyExtractor != null) {
        let num3 = arg2;
        if (arg2 == null) {
          num3 = -1;
        }
        tmp11Result = tmp11(FastestListItemTypeDefault.ITEM, arg1, num3);
      }
      return tmp11Result;
    } else if (FastList.FastListItemTypes.SECTION === arg0) {
      let tmp7Result;
      if (keyExtractor != null) {
        tmp7Result = tmp7(FastestListItemTypeDefault.SECTION_HEADER, arg1, -1);
      }
      return tmp7Result;
    } else if (FastList.FastListItemTypes.SECTION_FOOTER === arg0) {
      let tmp3Result;
      if (keyExtractor != null) {
        tmp3Result = tmp3(FastestListItemTypeDefault.SECTION_FOOTER, arg1, -1);
      }
      return tmp3Result;
    }
  }, items);
  const memo = onContentLengthChange.useMemo(() => {
    if (horizontal) {
      const rect = { left: scrollIndicatorInsetStart, right: scrollIndicatorInsetEnd };
      let rect1 = rect;
    } else {
      rect1 = { top: scrollIndicatorInsetStart, bottom: scrollIndicatorInsetEnd };
    }
  }, items1);
  const items2 = [preventNativeModalDismiss, inActionSheet];
  const memo1 = onContentLengthChange.useMemo(() => {
    let tmp;
    if (true === preventNativeModalDismiss) {
      if (true === inActionSheet) {
        const obj = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
        tmp = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
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
  const obj2 = { accessibilityLabel, automaticallyAdjustsScrollIndicatorInsets: null == memo, batchesToRender: null, refreshControl: null, chunkBase: null, stickySectionsVariant: null, footerSize: null, getRecyclerKey: null, headerSize: null, horizontal: null, inActionSheet: null, insetStart: null, insetEnd: null, itemSize: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, onContentSizeChange: null, onLayout: null, onScroll: null, onScrollBeginDrag: null, onScrollEndDrag: null, optimizeListItemRender: true, ref: null, renderItem: null, renderFooter: null, renderHeader: null, renderSection: null, renderSectionFooter: null, scrollEventThrottle: null, scrollIndicatorInsets: null, scrollPosValue: null, sections: null, sectionSize: null, sectionFooterSize: null, showsHorizontalScrollIndicator: null, showsVerticalScrollIndicator: null, stickyHeaderFooter: null, style: null };
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
  obj2.batchesToRender = num;
  obj2.refreshControl = memo1;
  obj2.chunkBase = inActionSheet(keyExtractor[4])({ estimatedListSize, horizontal });
  let str3 = "disabled";
  if (sectionHeaderIsSticky) {
    str3 = "default";
  }
  obj2.stickySectionsVariant = str3;
  obj2.footerSize = listFooterSize;
  obj2.getRecyclerKey = callback;
  obj2.headerSize = listHeaderSize;
  obj2.horizontal = horizontal;
  obj2.inActionSheet = inActionSheet;
  obj2.insetStart = insetStart;
  obj2.insetEnd = insetEnd;
  obj2.itemSize = itemSize;
  obj2.keyboardDismissMode = keyboardDismissMode;
  obj2.keyboardShouldPersistTaps = keyboardShouldPersistTaps;
  let tmp12;
  if (null != onContentLengthChange) {
    tmp12 = callback1;
  }
  obj2.onContentSizeChange = tmp12;
  obj2.onLayout = onLayout;
  let tmp13;
  if ("animatedScrollPosition" !== merged.scrollReporting) {
    tmp13 = onScroll;
  }
  obj2.onScroll = tmp13;
  obj2.onScrollBeginDrag = onScrollBeginDrag;
  obj2.onScrollEndDrag = onScrollEndDrag;
  obj2.ref = ref;
  obj2.renderItem = renderItem;
  obj2.renderFooter = renderListFooter;
  obj2.renderHeader = renderListHeader;
  obj2.renderSection = renderSectionHeader;
  obj2.renderSectionFooter = renderSectionFooter;
  obj2.scrollEventThrottle = scrollEventThrottle;
  obj2.scrollIndicatorInsets = memo;
  let scrollPosition;
  if ("animatedScrollPosition" === merged.scrollReporting) {
    scrollPosition = merged.scrollPosition;
  }
  obj2.scrollPosValue = scrollPosition;
  obj2.sections = sections;
  obj2.sectionSize = sectionHeaderSize;
  obj2.sectionFooterSize = sectionFooterSize;
  obj2.showsHorizontalScrollIndicator = showsHorizontalScrollIndicator;
  obj2.showsVerticalScrollIndicator = showsVerticalScrollIndicator;
  if (!listHeaderAlwaysMounted) {
    listHeaderAlwaysMounted = listFooterAlwaysMounted;
  }
  obj2.stickyHeaderFooter = listHeaderAlwaysMounted;
  obj2.style = style;
  return scrollIndicatorInsetEnd(AnimatedFastList, obj2);
});