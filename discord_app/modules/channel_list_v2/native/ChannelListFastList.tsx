// === Module 16109: ChannelListFastList ===

// Module 16109 (ChannelListFastList)
import FastListDefault from "FastList" /* 6679 */;
import useForwardedRefDefault from "useForwardedRef" /* 16110 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListFastList.tsx");

export default noop.memo(noop.forwardRef(function ChannelListFastList(scrollIndicatorInsetBottom, arg1) {
  scrollIndicatorInsetBottom = scrollIndicatorInsetBottom.scrollIndicatorInsetBottom;
  ({ endReachedThreshold, footerSize, getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, headerSize, initialScrollItem, initialScrollSection, insetEnd, listViewportHeight, onEndReached, onScroll, onScrollWorklet, renderAccessory, renderHeader, renderItem, renderSectionFooter, renderSectionHeader, sections, waitFor } = scrollIndicatorInsetBottom);
  const items = [scrollIndicatorInsetBottom];
  const scrollIndicatorInsets = noop.useMemo(() => ({ bottom: scrollIndicatorInsetBottom }), items);
  return jsx(FastListDefault, { insetEnd, scrollIndicatorInsets, waitFor, ref: _slicedToArray(useForwardedRefDefault(arg1), 2)[1], chunkBase, stickyHeaderFooter: true, renderHeader, headerSize, footerSize, endReachedThreshold, onEndReached, renderAccessory, disableContentWrappers: true, sections, stickySectionsVariant: "disabled", renderSection, sectionSize, renderItem, itemSize, renderSectionFooter, sectionFooterSize, optimizeListItemRender: true, getRecyclerKey, initialScrollSection, initialScrollItem, initialScrollOrientation: "center", onScroll, onScrollWorklet });
}));