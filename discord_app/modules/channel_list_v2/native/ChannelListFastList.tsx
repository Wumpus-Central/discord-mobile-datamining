// discord_app/modules/channel_list_v2/native/ChannelListFastList.tsx
import c from "../../../../_runtime/00576_c.js";
import FastListDefault from "../../../lib/native/FastList.tsx";
import useForwardedRefDefault from "../../../hooks/useForwardedRef.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListFastList.tsx");

export default noop.memo(
  noop.forwardRef(
    ReactCompilerGating.isReactCompilerEnabled()
      ? (arg0, arg1) => {
          const cResult = c.c(26);
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
            scrollIndicatorInsetBottom,
            sections,
            waitFor,
          } = arg0);
          const tmp4 = _slicedToArray(useForwardedRefDefault(arg1), 2)[1];
          if (cResult[0] !== scrollIndicatorInsetBottom) {
            const obj2 = { bottom: scrollIndicatorInsetBottom };
            cResult[0] = scrollIndicatorInsetBottom;
            cResult[1] = obj2;
            let tmp5 = obj2;
          } else {
            tmp5 = cResult[1];
          }
          if (cResult[2] === endReachedThreshold) {
            if (cResult[3] === footerSize) {
              if (cResult[4] === getItemSize) {
                if (cResult[5] === getRecyclerKey) {
                  if (cResult[6] === getSectionFooterSize) {
                    if (cResult[7] === getSectionHeaderSize) {
                      if (cResult[8] === headerSize) {
                        if (cResult[9] === initialScrollItem) {
                          if (cResult[10] === initialScrollSection) {
                            if (cResult[11] === insetEnd) {
                              if (cResult[12] === listViewportHeight) {
                                if (cResult[13] === onEndReached) {
                                  if (cResult[14] === onScroll) {
                                    if (cResult[15] === onScrollWorklet) {
                                      if (cResult[16] === renderAccessory) {
                                        if (cResult[17] === renderHeader) {
                                          if (cResult[18] === renderItem) {
                                            if (cResult[19] === renderSectionFooter) {
                                              if (cResult[20] === renderSectionHeader) {
                                                if (cResult[21] === tmp5) {
                                                  if (cResult[22] === sections) {
                                                    if (cResult[23] === tmp4) {
                                                      if (cResult[24] === waitFor) {
                                                        let tmp6 = cResult[25];
                                                      }
                                                      return tmp6;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const tmp7 = jsx(FastListDefault, {
            insetEnd,
            scrollIndicatorInsets: tmp5,
            waitFor,
            ref: tmp4,
            chunkBase: listViewportHeight,
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
            renderSection: renderSectionHeader,
            sectionSize: getSectionHeaderSize,
            renderItem,
            itemSize: getItemSize,
            renderSectionFooter,
            sectionFooterSize: getSectionFooterSize,
            optimizeListItemRender: true,
            getRecyclerKey,
            initialScrollSection,
            initialScrollItem,
            initialScrollOrientation: "center",
            onScroll,
            onScrollWorklet,
          });
          cResult[2] = endReachedThreshold;
          cResult[3] = footerSize;
          cResult[4] = getItemSize;
          cResult[5] = getRecyclerKey;
          cResult[6] = getSectionFooterSize;
          cResult[7] = getSectionHeaderSize;
          cResult[8] = headerSize;
          cResult[9] = initialScrollItem;
          cResult[10] = initialScrollSection;
          cResult[11] = insetEnd;
          cResult[12] = listViewportHeight;
          cResult[13] = onEndReached;
          cResult[14] = onScroll;
          cResult[15] = onScrollWorklet;
          cResult[16] = renderAccessory;
          cResult[17] = renderHeader;
          cResult[18] = renderItem;
          cResult[19] = renderSectionFooter;
          cResult[20] = renderSectionHeader;
          cResult[21] = tmp5;
          cResult[22] = sections;
          cResult[23] = tmp4;
          cResult[24] = waitFor;
          cResult[25] = tmp7;
          tmp6 = tmp7;
        }
      : (scrollIndicatorInsetBottom, arg1) => {
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
        },
  ),
);
