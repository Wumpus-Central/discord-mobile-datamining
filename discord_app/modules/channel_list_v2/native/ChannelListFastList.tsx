// discord_app/modules/channel_list_v2/native/ChannelListFastList.tsx
import FastList from "../../../lib/native/FastList.tsx";
import useForwardedRefDefault from "../../../hooks/useForwardedRef.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const FastListDefault = FastList;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListFastList.tsx");

export default noop.memo(function ChannelListFastList(scrollIndicatorInsetBottom) {
  scrollIndicatorInsetBottom = scrollIndicatorInsetBottom.scrollIndicatorInsetBottom;
  ({
    endReachedThreshold,
    getItemSize,
    getRecyclerKey,
    getSectionFooterSize,
    getSectionHeaderSize,
    headerSize,
    initialScrollItem,
    initialScrollSection,
    insetEnd,
    listViewportHeight,
    onEndReached,
    onScroll,
    onScrollWorklet,
    renderAccessory,
    renderHeader,
    renderItem,
    renderSectionFooter,
    renderSectionHeader,
    sections,
    waitFor,
    drawDistanceMode,
    ref,
  } = scrollIndicatorInsetBottom);
  const items = [scrollIndicatorInsetBottom];
  const memo = noop.useMemo(() => ({ bottom: scrollIndicatorInsetBottom }), items);
  const obj = {
    insetEnd,
    scrollIndicatorInsets: memo,
    automaticallyAdjustsScrollIndicatorInsets: false,
    waitFor,
    ref: _slicedToArray(useForwardedRefDefault(ref), 2)[1],
    chunkBase: listViewportHeight,
    batchesToRender: null,
    stickyHeaderFooter: true,
    renderHeader: null,
    headerSize: null,
    endReachedThreshold: null,
    onEndReached: null,
    renderAccessory: null,
    disableContentWrappers: true,
    sections: null,
    stickySectionsVariant: "disabled",
    renderSection: null,
    sectionSize: null,
    renderItem: null,
    itemSize: null,
    renderSectionFooter: null,
    sectionFooterSize: null,
    optimizeListItemRender: true,
    getRecyclerKey: null,
    initialScrollSection: null,
    initialScrollItem: null,
    initialScrollOrientation: "center",
    onScroll: null,
    onScrollWorklet: null,
  };
  let num = 6;
  if ("viewport" === drawDistanceMode) {
    num = FastList.DEFAULT_BATCHES_TO_RENDER;
  }
  obj.batchesToRender = num;
  obj.renderHeader = renderHeader;
  obj.headerSize = headerSize;
  obj.endReachedThreshold = endReachedThreshold;
  obj.onEndReached = onEndReached;
  obj.renderAccessory = renderAccessory;
  obj.sections = sections;
  obj.renderSection = renderSectionHeader;
  obj.sectionSize = getSectionHeaderSize;
  obj.renderItem = renderItem;
  obj.itemSize = getItemSize;
  obj.renderSectionFooter = renderSectionFooter;
  obj.sectionFooterSize = getSectionFooterSize;
  obj.getRecyclerKey = getRecyclerKey;
  obj.initialScrollSection = initialScrollSection;
  obj.initialScrollItem = initialScrollItem;
  obj.onScroll = onScroll;
  obj.onScrollWorklet = onScrollWorklet;
  return jsx(FastListDefault, {
    insetEnd,
    scrollIndicatorInsets: memo,
    automaticallyAdjustsScrollIndicatorInsets: false,
    waitFor,
    ref: _slicedToArray(useForwardedRefDefault(ref), 2)[1],
    chunkBase: listViewportHeight,
    batchesToRender: null,
    stickyHeaderFooter: true,
    renderHeader: null,
    headerSize: null,
    endReachedThreshold: null,
    onEndReached: null,
    renderAccessory: null,
    disableContentWrappers: true,
    sections: null,
    stickySectionsVariant: "disabled",
    renderSection: null,
    sectionSize: null,
    renderItem: null,
    itemSize: null,
    renderSectionFooter: null,
    sectionFooterSize: null,
    optimizeListItemRender: true,
    getRecyclerKey: null,
    initialScrollSection: null,
    initialScrollItem: null,
    initialScrollOrientation: "center",
    onScroll: null,
    onScrollWorklet: null,
  });
});
