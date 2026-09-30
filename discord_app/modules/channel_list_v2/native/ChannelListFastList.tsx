// discord_app/modules/channel_list_v2/native/ChannelListFastList.tsx
import FastListDefault from "../../../lib/native/FastList.tsx";
import useForwardedRefDefault from "../../../hooks/useForwardedRef.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListFastList.tsx");

export default noop.memo(
  noop.forwardRef(function ChannelListFastList(scrollIndicatorInsetBottom, arg1) {
    scrollIndicatorInsetBottom = scrollIndicatorInsetBottom.scrollIndicatorInsetBottom;
    ({
      endReachedThreshold,
      footerSize,
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
    } = scrollIndicatorInsetBottom);
    const items = [scrollIndicatorInsetBottom];
    const scrollIndicatorInsets = noop.useMemo(() => ({ bottom: scrollIndicatorInsetBottom }), items);
    return jsx(FastListDefault, {
      insetEnd,
      scrollIndicatorInsets,
      waitFor,
      ref: _slicedToArray(useForwardedRefDefault(arg1), 2)[1],
      chunkBase,
      stickyHeaderFooter: true,
      renderHeader,
      headerSize,
      footerSize,
      endReachedThreshold,
      onEndReached,
      renderAccessory,
      disableContentWrappers: true,
      sections,
      stickySectionsVariant: "disabled",
      renderSection,
      sectionSize,
      renderItem,
      itemSize,
      renderSectionFooter,
      sectionFooterSize,
      optimizeListItemRender: true,
      getRecyclerKey,
      initialScrollSection,
      initialScrollItem,
      initialScrollOrientation: "center",
      onScroll,
      onScrollWorklet,
    });
  }),
);
