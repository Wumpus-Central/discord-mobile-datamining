// === Module 16487: ChannelListFastList ===

// Module 16487 (ChannelListFastList)
import c from "c" /* 576 */;
import FastListDefault from "FastList" /* 6752 */;
import useForwardedRefDefault from "useForwardedRef" /* 16488 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListFastList.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelListFastList(arg0) {
  const cResult = c.c(25);
  ({ endReachedThreshold, getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, headerSize, initialScrollItem, initialScrollSection, insetEnd, listViewportHeight, onEndReached, onScroll, onScrollWorklet, renderAccessory, renderHeader, renderItem, renderSectionFooter, renderSectionHeader, scrollIndicatorInsetBottom, sections, waitFor, ref } = arg0);
  const tmp4 = _slicedToArray(useForwardedRefDefault(ref), 2)[1];
  if (cResult[0] !== scrollIndicatorInsetBottom) {
    const obj2 = { bottom: scrollIndicatorInsetBottom };
    cResult[0] = scrollIndicatorInsetBottom;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === endReachedThreshold) {
    if (cResult[3] === getItemSize) {
      if (cResult[4] === getRecyclerKey) {
        if (cResult[5] === getSectionFooterSize) {
          if (cResult[6] === getSectionHeaderSize) {
            if (cResult[7] === headerSize) {
              if (cResult[8] === initialScrollItem) {
                if (cResult[9] === initialScrollSection) {
                  if (cResult[10] === insetEnd) {
                    if (cResult[11] === listViewportHeight) {
                      if (cResult[12] === onEndReached) {
                        if (cResult[13] === onScroll) {
                          if (cResult[14] === onScrollWorklet) {
                            if (cResult[15] === renderAccessory) {
                              if (cResult[16] === renderHeader) {
                                if (cResult[17] === renderItem) {
                                  if (cResult[18] === renderSectionFooter) {
                                    if (cResult[19] === renderSectionHeader) {
                                      if (cResult[20] === tmp5) {
                                        if (cResult[21] === sections) {
                                          if (cResult[22] === tmp4) {
                                            if (cResult[23] === waitFor) {
                                              let tmp6 = cResult[24];
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
  const tmp7 = jsx(FastListDefault, { insetEnd, scrollIndicatorInsets: tmp5, waitFor, ref: tmp4, chunkBase: listViewportHeight, stickyHeaderFooter: true, renderHeader, headerSize, endReachedThreshold, onEndReached, renderAccessory, disableContentWrappers: true, sections, stickySectionsVariant: "disabled", renderSection: renderSectionHeader, sectionSize: getSectionHeaderSize, renderItem, itemSize: getItemSize, renderSectionFooter, sectionFooterSize: getSectionFooterSize, optimizeListItemRender: true, getRecyclerKey, initialScrollSection, initialScrollItem, initialScrollOrientation: "center", onScroll, onScrollWorklet });
  cResult[2] = endReachedThreshold;
  cResult[3] = getItemSize;
  cResult[4] = getRecyclerKey;
  cResult[5] = getSectionFooterSize;
  cResult[6] = getSectionHeaderSize;
  cResult[7] = headerSize;
  cResult[8] = initialScrollItem;
  cResult[9] = initialScrollSection;
  cResult[10] = insetEnd;
  cResult[11] = listViewportHeight;
  cResult[12] = onEndReached;
  cResult[13] = onScroll;
  cResult[14] = onScrollWorklet;
  cResult[15] = renderAccessory;
  cResult[16] = renderHeader;
  cResult[17] = renderItem;
  cResult[18] = renderSectionFooter;
  cResult[19] = renderSectionHeader;
  cResult[20] = tmp5;
  cResult[21] = sections;
  cResult[22] = tmp4;
  cResult[23] = waitFor;
  cResult[24] = tmp7;
  tmp6 = tmp7;
}) : (function ChannelListFastList(scrollIndicatorInsetBottom) {
  scrollIndicatorInsetBottom = scrollIndicatorInsetBottom.scrollIndicatorInsetBottom;
  ({ endReachedThreshold, getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, headerSize, initialScrollItem, initialScrollSection, insetEnd, listViewportHeight, onEndReached, onScroll, onScrollWorklet, renderAccessory, renderHeader, renderItem, renderSectionFooter, renderSectionHeader, sections, waitFor, ref } = scrollIndicatorInsetBottom);
  const items = [scrollIndicatorInsetBottom];
  const scrollIndicatorInsets = noop.useMemo(() => ({ bottom: scrollIndicatorInsetBottom }), items);
  return jsx(FastListDefault, { insetEnd, scrollIndicatorInsets, waitFor, ref: _slicedToArray(useForwardedRefDefault(ref), 2)[1], chunkBase, stickyHeaderFooter: true, renderHeader, headerSize, endReachedThreshold, onEndReached, renderAccessory, disableContentWrappers: true, sections, stickySectionsVariant: "disabled", renderSection, sectionSize, renderItem, itemSize, renderSectionFooter, sectionFooterSize, optimizeListItemRender: true, getRecyclerKey, initialScrollSection, initialScrollItem, initialScrollOrientation: "center", onScroll, onScrollWorklet });
}));